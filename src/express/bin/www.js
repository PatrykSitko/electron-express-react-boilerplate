#!/usr/bin/env node

/**
 * Module dependencies.
 */

const debugr = require("debug");
const http = require("http");
const { getStore, dispatch } = require("../store");

// eslint-disable-next-line import/no-unresolved
const app = require("../app.js");

/**
 * Get port from environment and store in Express.
 */
const debug = debugr("express:server");

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}

/**
 * Listen on provided port, on all network interfaces.
 */
server.on("listening", onListening);

const isDev = process.argv.slice(2)[0] == "dev-mode";

if (isDev) {
  const port = "3001";
  app.set("port", port);
  /**
   * Event listener for HTTP server "error" event.
   */
  function onError(error) {
    if (error.syscall !== "listen") {
      throw error;
    }

    const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case "EACCES":
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  server.on("error", onError);
  server.listen(port);
}

module.exports = {
  getStore,
  dispatch,
  app,
  setPort: (port) => app.set("port", port),
  server,
  defaultPort: 3001,
};
