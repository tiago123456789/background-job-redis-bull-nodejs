const Bull = require("bull");

const bullBoard = require("bull-board");

class Queue {

    constructor() {
        this._queues = {};
    }

    _updateBullBoard() {
        if (process.env.ENABLE_BULL_BOARD == "false") {
            return;
        }

        const queues = Object.values(this._queues);
        bullBoard.setQueues(queues);
    }

    _new(queueName) {
        this._queues[queueName] = new Bull(queueName, {
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
        });
        this._updateBullBoard();
        return this._queues[queueName];
    }

    getByName(name) {
        const queue = this._queues[name];
        if (queue) {
            return queue;
        }
        return this._new(name);
    }

}

const queue = new Queue();

module.exports = queue;