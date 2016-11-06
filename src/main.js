const electron = require('electron');
const app = electron.app; 
const browserWindow = electron.BrowserWindow;
const {dialog} = require('electron')
const reload = require('electron-reload');
 	 
app.on('ready', function(){
	var editorWindow = new browserWindow({height:700});
	editorWindow.loadURL("file://"+`${__dirname}`+"/editor.html");	
});