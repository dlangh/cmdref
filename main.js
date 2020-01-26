const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu, ipcMain, screen} = electron;

const isMac = process.platform === 'darwin'
// set env
process.env.NODE_ENV = 'production';

let mainWindow;
let helpWindow;
let aboutWindow;
let genJsonWindow;

// Listen for the app to be ready
app.on('ready', function() {
  // Create new winwdow
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: (1100),
    height: (650),
    webPreferences: {
      nodeIntegration: true,
      show: false
    }
  });
 
  // load html file into window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file',
    slashes: true
  }));

  mainWindow.on('ready-to-show', function() {
    mainWindow.show();
  })
  // Quit app when closed
  mainWindow.on('closed', function() {
    app.quit();
  });
  
  genJsonWindow = new BrowserWindow({
    width: (400),
    height: (250),
    webPreferences: {
      nodeIntegration: true,
      show: false
    }
  });
 
  // load html file into window
  genJsonWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'genjsonWindow.html'),
    protocol: 'file',
    slashes: true
  }));

  //genJsonWindow.on('ready-to-show', function() {
    // genJsonWindow.show();
  //})


  const menu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(menu);
});

function createHelpWindow() {
  helpWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: 'About Command Reference',
    webPreferences: {
      nodeIntegration: true
    }
  });

  helpWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'helpWindow.html'),
    protocol: 'file',
    slashes: true
  }));  
}

const mainMenuTemplate = [
  // { role: 'appMenu' }
  ...(isMac ? [{
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      { label: 'Generate Json files'},
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  },
  // { role: 'editMenu' }
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      ...(isMac ? [
        { role: 'pasteAndMatchStyle' },
        { role: 'delete' },
        { role: 'selectAll' },
        { type: 'separator' },
        {
          label: 'Speech',
          submenu: [
            { role: 'startspeaking' },
            { role: 'stopspeaking' }
          ]
        }
      ] : [
        { role: 'delete' },
        { type: 'separator' },
        { role: 'selectAll' }
      ])
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
      ...(isMac ? [
        { type: 'separator' },
        { role: 'front' },
        { type: 'separator' },
        { role: 'window' }
      ] : [
        { role: 'close' }
      ])
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://electronjs.org')
        }
      }
    ]
  }
];
