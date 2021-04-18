module.exports = async function findUnusedPort(startAt) {
  let port = startAt;
  const portIsUnused = (port) =>
    new Promise((resolve) => {
      const server = require("http")
        .createServer()
        .listen(port, () => {
          server.close();
          resolve(true);
        })
        .on("error", () => {
          resolve(false);
        });
    });
  if (await portIsUnused(port)) {
    return port;
  } else {
    return findUnusedPort(port + 1);
  }
};
