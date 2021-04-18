const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
const www = require("./express/bin/www");
const cors = require("cors");
const findUnusedPort = require("./express/findUnusedPort");
const setPort = require("./express/store/actions/set/port");

let mainWindow = null;

const isDev = process.env.APP_DEV
  ? process.env.APP_DEV.trim() == "true"
  : false;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      preload: path.join(__dirname, "./electron/preload.js"),
    },
    webSecurity: false,
  });
  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(
          __dirname,
          isDev ? "./../public/index.html" : "./../build/index.html",
        ),
        protocol: "file:",
        slashes: true,
      }),
  );
  if (!isDev) {
    findUnusedPort(www.defaultPort).then((port) => {
      www.dispatch(setPort(port));
      www.app.use(cors({ origin: `http://localhost:${port}` }));
      www.setPort(port);
      www.server.listen(port);
    });
  }
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
