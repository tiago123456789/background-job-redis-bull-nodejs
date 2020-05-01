const Consumer = require("./../queue/Consumer");
const CONSTANTS = require("./../config/Constants");
const logger = require("./../config/Logger");
const Email = require("./../email/Email");
const email = new Email();

Consumer
    .handler(
        CONSTANTS.QUEUES.EMAIL,
        async (queue, datas) => {
            logger.info(`Proccessing job of ${queue}`);
            logger.info(`Sending email to user ${datas.name} <${datas.email}>`);
            await email
                .withTo(datas.email)
                .withName(datas.name)
                .withSubject("User created!!!")
                .withHtml(`Hi, ${datas.name}, welcome to the system queue :D`)
                .send();

            logger.info(`Finished job of ${queue}`);
        },
        (queue, error) => {
            logger.error({ queue, ...error });
        }
    );