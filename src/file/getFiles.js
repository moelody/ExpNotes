var getFiles = (function() {
  function getFiles(format, folder) {
    if (getFiles[format]) return getFiles[format](folder)
    return getFiles.find(format, folder)
  }

  /** ***********************expand function************************************************** **/
  getFiles.find = function(format, target) {
    var i, regex
    regex = new RegExp('\\.(' + format + ')$')
    var files = target.getFiles(regex)
    var folders = target.getFiles(/^(.(?!\.\w+))+$/)
    for (i = folders.length - 1; i >= 0; i--) {
      if (folders[i] instanceof File) folders.splice(i, 1)
    }
    for (i = files.length - 1; i >= 0; i--) {
      if (files[i] instanceof Folder) {
        files.splice(i, 1)
        folders.push(files[i])
      }
    }
    return {
      folders: folders,
      files: files
    }
  }

  getFiles.all = function(target) {
    var i
    var files = target.getFiles(/\.\w+$/)
    var folders = target.getFiles(/^(.(?!\.\w+))+$/)
    for (i = folders.length - 1; i >= 0; i--) {
      if (folders[i] instanceof File) folders.splice(i, 1)
    }
    for (i = files.length - 1; i >= 0; i--) {
      if (files[i] instanceof Folder) {
        files.splice(i, 1)
        folders.push(files[i])
      }
    }
    return {
      folders: folders,
      files: files
    }
  }

  return getFiles
})()
module.exports = $.global.yp.getFiles = getFiles
