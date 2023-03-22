const electron = require('electron');
const window = require('./window');
const antiIdle = require('./anti-idle');

let tray = null;
electron.app.whenReady().then(() => {
  tray = new electron.Tray('assets/img/icon.png');
  let win = window.createWindow('index.html');
  var contextMenu = electron.Menu.buildFromTemplate([
    {
      label: 'Open',
      click: function () {
        win.show();
      },
    },
    {
      label: 'Exit',
      click: function () {
        win.destroy();
        electron.app.quit();
      },
    },
  ]);
  tray.setToolTip('IdleFlix');
  tray.setContextMenu(contextMenu);
});

antiIdle.start();

electron.ipcMain.on('getStatusText', (event) => {
  event.reply('statusText', antiIdle.getStatusText());
});

setInterval(() => {}, 1000);
