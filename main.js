const {app, BrowserWindow} = require("electron")
const path = require("path")

function createWindow () {
  const mainWindow = new BrowserWindow({
	width: 350,
    height: 475
  })
  mainWindow.loadFile("index.html")
  mainWindow.setResizable(false)
  mainWindow.setMenu(null)
}

app.whenReady().then(() => {
  createWindow()
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit()
})