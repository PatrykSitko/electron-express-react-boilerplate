const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

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
      preload: path.join(app.getAppPath(), "electron/preload.js"),
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
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
