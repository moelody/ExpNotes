const { exp } = require('singleton')
var createFiles = (function() {
  function createFiles(binaryStr) {
    return createFiles.covertToGraphic(binaryStr)
  }

  createFiles.covertToGraphic = function(binaryArray) {
    var targetFolder = new Folder(Folder.userData.fullName + exp.slash + 'Aescripts' + exp.slash + exp.scriptName + exp.slash + exp.version)
    !targetFolder.exists && targetFolder.create()

    var icon
    var iconArrays = {}
    for (var i in binaryArray)
      if (typeof binaryArray[i] === 'string') {
        icon = new File(targetFolder.fullName + exp.slash + i + '.png')
        if (!icon.exists) {
          icon.encoding = 'BINARY'
          icon.open('w')
          icon.write(binaryArray[i])
          icon.close()
        }
        iconArrays[i] = icon
      }
    return iconArrays
  }

  return createFiles
})()
module.exports = $.global.yp.createFiles = createFiles
