const queue = require("./Queue");

class Producer {

    static publishInQueue(queueName, datas, options = {}) {
        queue.getByName(queueName).add(datas, options);
    }
}

module.exports = Producer;