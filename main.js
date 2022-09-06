const electron = require('electron')
const app = electron.app
var path = require('path')
var pythonshell = require('python-shell')


const BrowserWindow = electron.BrowserWindow

pythonshell.PythonShell.run('python/test.py',null,function (err,results){
    if (err) throw err;
    console.log('testrunng')
})
app.on("ready", function () {
    let loginWindow = new BrowserWindow({
        width:300,
        height:600,
        maxHeight:600,
        maxWidth: 600,


        webPreferences:{
            preload:path.join(__dirname, 'preload.js')
        }
    })
    loginWindow.loadURL('file://' +__dirname+'/html/activate.html')

    // loginWindow.once('ready-to-show', function (){
    //     loginWindow.show()
    // })

})
app.on('window-all-closed', function (){
    if(process.platform !== 'darwin') app.quit()
})


