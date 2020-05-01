const express = require("express");
const app = express();

// Settings environment variables of application.
require("./LoaderEnvironment");

// Settings bull board.
require("./BullBoard")(app);


module.exports = app;