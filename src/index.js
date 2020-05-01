const app = require("./config/Server");
const Producer = require("./queue/Producer");
const CONSTANTS = require("./config/Constants");
const Email = require("./email/Email");
const email = new Email();

app.get("/send", async (request, response) => {
    Producer.publishInQueue(CONSTANTS.QUEUES.EMAIL, { 
        email: "tiagorosadacost@gmail.com",
        name: "Tiago R. da costa"
    });
    response.json({ msg: "Operation success!!!" });
});

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log("Server is running in address: http://localhost:3000");
});