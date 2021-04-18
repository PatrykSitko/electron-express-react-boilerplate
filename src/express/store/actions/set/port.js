const www = require("../../../bin/www");

module.exports = (port) =>
  www.setPort(port) && {
    type: "SET_PORT",
    payload: { port },
  };
