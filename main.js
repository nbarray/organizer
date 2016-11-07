// This file is the main script, the entry-point of the app.
//
// It should create windows and handle system events.
//
// More @ http://electron.atom.io/docs/tutorial/quick-start/

const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

// Let's keep a global reference to the window. If we don't do it the
// window will be closed immediately when the GC do his things.
let win

function createWindow() {
  win = new BrowserWindow({width:800, height:600})

  win.loadURL(url.format(
        {
          pathname: path.join(__dirname, 'index.html'),
          protocol: 'file:',
          slashes: true
        }))

  // If needed we can open the web dev tool panel.
  // win.webContents.openDevTools()
  
  win.on('closed', () => {
    win = null
  })
}

// This method will be called only after Electron has finished initialized.
// Some API won't work before this event occurs.
app.on('ready', createWindow)

// Quit the app when all windows are closed.
app.on('windows-all-closed', () => {
  // This mimicks the common behaviour of a macOS app.
  if (process.plateform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // This mimicks the common behaviour of a macOS app.
  if (win === null) {
    createWindow()
  }
})

// Then follows the rest of the app's specific main process code.
