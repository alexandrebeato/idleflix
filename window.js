const electron = require('electron');

function createWindow(path) {
  const win = new electron.BrowserWindow({
    width: 400,
    height: 250,
    maximizable: false,
    resizable: false,
    center: true,
    title: 'IdleFlix',
    icon: 'assets/img/icon.png',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.on('minimize', function (event) {
    event.preventDefault();
    win.hide();
  });

  win.setMenuBarVisibility(false);
  win.loadFile(path);
  return win;
}

module.exports = { createWindow };
