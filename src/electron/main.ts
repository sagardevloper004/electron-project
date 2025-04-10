import { app, BrowserWindow } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url' 
import { isDevMode } from './util.js';

type test = string;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  if(isDevMode()) {
    mainWindow.loadURL('http://localhost:5001')
  }else {
    mainWindow.loadFile(path.join(app.getAppPath() + '/elecDist/index.html'))
  }

})