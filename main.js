const electron = require('electron');
const window = require('./window');
const antiIdle = require('./anti-idle');

electron.app.whenReady().then(() => {
  window.createWindow('index.html');
});

antiIdle.start();

electron.ipcMain.on('getStatusText', (event) => {
  event.reply('statusText', antiIdle.getStatusText());
});

