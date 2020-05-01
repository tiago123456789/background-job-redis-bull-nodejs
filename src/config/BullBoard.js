const bullBoard = require("bull-board");

module.exports = (app) => {
    
    if (process.env.ENABLE_BULL_BOARD == "true") 
        app.use('/admin/queues', bullBoard.UI);
}