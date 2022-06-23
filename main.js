const { app, BrowserWindow } = require('electron')

app.whenReady().then( () => {

    const mainWindow = new BrowserWindow({
        width:800,
        height:600,
        autoHideMenuBar: true,
        webPreferences:{
            nodeIntegration:true
        }
    });

    mainWindow.loadFile('home.html')

})