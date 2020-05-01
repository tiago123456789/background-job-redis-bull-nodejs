const queue = require("./Queue");

class Consumer {

    static handler(queueName, callback, callbackError) {
        let queueObject = queue.getByName(queueName);
        queueObject.process((job) => callback(job.queue.name, job.data));
        queueObject.on("failed", (job) => callbackError(job.queue.name, {
            stacktrace: job.stacktrace,
            failedReason: job.failedReason
        }));
    }
}

module.exports = Consumer;