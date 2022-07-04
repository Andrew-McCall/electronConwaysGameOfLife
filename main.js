import { app, BrowserWindow } from 'electron';

app.whenReady().then( () => {

    const mainWindow = new BrowserWindow({
        width:532,
        height:650,
        autoHideMenuBar: true,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation: false,
            nodeIntegrationInWorker: true
        },
        icon: __dirname + '/Gol.ico',
        title:"Loading"
    });

    mainWindow.loadFile('home.html')

})