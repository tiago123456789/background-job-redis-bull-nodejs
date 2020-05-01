const winston = require("winston");

const logger = winston.createLogger({
    format: winston.format.json(),
    defaultMeta: { time: new Date },
    transports: [
      new winston.transports.File({ filename: __dirname + '/../../logs/error.log', level: 'error' }),
    ]
});

const isProduction = process.env.ENV == "prod";
if (isProduction) {
  logger.add(new winston.transports.File({ filename: __dirname + '/../../logs/prod.log', level: 'info' }));
} else {
  logger.add(new winston.transports.Console({ level: 'debug' }));
}


module.exports = logger;