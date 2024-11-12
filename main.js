const { app, BrowserWindow } = require('electron');

// try {
//   require('electron-reloader')(module, {
//     debug: true,
//     watchRenderer: true
//   });
// } catch (_) { console.log('Error'); }


function createWindow() {
  win = new BrowserWindow({
    width: 800, height: 800, webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadURL('http://localhost:4200');
}


app.whenReady().then(() => {
  createWindow()
})
