const { exp } = require('singleton')
/** ***********************资源功能************************************************** **/
const ICONS = require('src/icon')
const getFiles = require('file/getFiles')

module.exports = (function() {
  DropDownList.prototype = {
    /** ***********************LIST操作************************************************** **/
    refreshList(folder) {
      this.removeAll()
      this.reloadList(folder)
      exp.reloadDroplist.call(this)
    },
    reloadList(folder) {
      const { files, folders } = getFiles('txt', folder)
      this.folder = folder

      /** **********************************处理空目录***************************************/
      if (files.toString() === '' && folders.toString() === '') {
        exp.edittext.text = ''
        var temp = this.add('item', 'none')
        temp.image = ICONS.none
        this.add('separator', undefined)
        this.selection = 0
        return
      }
      /** **********************************加载根目录文件***************************************/
      this.reloadFolderList(folders)
      this.add('separator', undefined)
      this.reloadFileList(files)
      if (!folders.length) this.selection = 1
      else this.selection = 0
    },
    reloadFolderList(folders) {
      var temp, i
      for (i = 0; i < folders.length; i++) {
        temp = this.add('item', decodeURI(folders[i].name))
        temp.source = folders[i]
        temp.image = ICONS.folder
      }
    },
    reloadFileList(files) {
      var temp, i
      for (i = 0; i < files.length; i++) {
        temp = this.add('item', decodeURI(files[i].displayName.split('.')[0]))
        temp.source = files[i]
        temp.image = ICONS.file
      }
    },
    reSelected(name, Type) {
      var len = this.items.length
      for (var i = 0; i < len; i++) {
        if (this.items[i].text === name && this.items[i].source instanceof Type) this.selection = i
      }
    },
    checkFile() {
      if (!this.selection.source) return false
      return true
    },

    /** ***********************XMP操作************************************************** **/
    refreshXMP() {
      this.removeAll()
      this.reloadXMP()
      this.getXMP()
    },
    reSelectXMP(name, Type) {
      var len = this.items.length
      for (var i = 0; i < len; i++) {
        if (this.items[i].text === name) this.selection = i
      }
    },
    reloadXMP() {
      var i, temp
      var xmpItems = []
      var xmpData = new XMPMeta(app.project.xmpPacket)
      var nsPrefix = exp.nsPrefix
      var schemaName = exp.schemaName
      var xmpLength = xmpData.countArrayItems(nsPrefix, schemaName)
      for (i = 1; i <= xmpLength; i++) xmpItems.push(unescape(xmpData.getArrayItem(nsPrefix, schemaName, i)))
      xmpItems.sort()
      for (i = 0; i < xmpItems.length; i++) {
        temp = this.add('item', xmpItems[i].split('\n\n')[0])
        temp.source = xmpItems[i].split('\n\n')[1]
      }
      this.selection = 0
    },
    deleteXMP() {
      var xmpData = new XMPMeta(app.project.xmpPacket)
      var nsPrefix = exp.nsPrefix
      var schemaName = exp.schemaName
      var xmpLength = xmpData.countArrayItems(nsPrefix, schemaName)
      for (var i = 1; i <= xmpLength; i++) {
        if (this.selection.text === unescape(xmpData.getArrayItem(nsPrefix, schemaName, i)).split('\n\n')[0]) {
          xmpData.deleteArrayItem(nsPrefix, schemaName, i)
          app.project.xmpPacket = xmpData.serialize()
          break
        }
      }
      this.refreshXMP()
    },
    renameXMP(name) {
      var item
      var xmpData = new XMPMeta(app.project.xmpPacket)
      var nsPrefix = exp.nsPrefix
      var schemaName = exp.schemaName
      var xmpLength = xmpData.countArrayItems(nsPrefix, schemaName)
      for (var i = 1; i <= xmpLength; i++) {
        item = unescape(xmpData.getArrayItem(nsPrefix, schemaName, i)).split('\n\n')
        if (this.selection.text === item[0]) {
          xmpData.setArrayItem(nsPrefix, schemaName, i, escape('' + name + '\n\n' + item[1]))
          app.project.xmpPacket = xmpData.serialize()
          break
        }
      }
    },
    saveXMP() {
      var xmpData = new XMPMeta(app.project.xmpPacket)
      var nsPrefix = exp.nsPrefix
      var schemaName = exp.schemaName
      var xmpLength = xmpData.countArrayItems(nsPrefix, schemaName)
      for (var i = 1; i <= xmpLength; i++) {
        if (this.selection.text === unescape(xmpData.getArrayItem(nsPrefix, schemaName, i)).split('\n\n')[0]) {
          this.selection.source = exp.edittext.text
          xmpData.setArrayItem(nsPrefix, schemaName, i, escape('' + this.selection.text + '\n\n' + exp.edittext.text))
          app.project.xmpPacket = xmpData.serialize()
          break
        }
      }
    },
    getXMP() {
      exp.edittext.text = ''
      if (!this.selection) return
      var source = this.selection.source
      exp.edittext.text = source
    },

    /** ***********************源文件操作************************************************** **/
    createFile(name) {
      var folder = this.folder
      var file = new File(folder.fsName + exp.slash + name + '.txt')
      if (!file.exists) file.writee('')
      this.refreshList(folder)
      this.reSelected(name, File)
    },
    createFolder(name) {
      var folder = new Folder(this.folder.fsName + exp.slash + name)
      !folder.exists && folder.create()
      this.refreshList(this.folder)
      this.reSelected(name, Folder)
    },
    deleteFile() {
      if (!this.selection.source) return
      if (this.selection.source instanceof File) {
        !this.selection.source.remove() && alert(exp.deleteFailed)
        this.refreshList(this.folder)
      }
    },
    deleteFolder() {
      if (!this.selection.source) return
      if (this.selection.source instanceof Folder) {
        !this.selection.source.remove() && alert(exp.deleteFailed)
        this.refreshList(this.folder)
      }
    },
    renameFile(name) {
      if (!this.selection.source) return
      if (this.selection.source instanceof File) {
        !this.selection.source.rename(name + '.txt') && alert(exp.renameFailed)
        this.refreshList(this.folder)
        this.reSelected(name, File)
      }
    },
    renameFolder(name) {
      if (!this.selection.source) return
      if (this.selection.source instanceof Folder) {
        !this.selection.source.rename(name) && alert(exp.renameFailed)
        this.refreshList(this.folder)
        this.reSelected(name, Folder)
      }
    },
    deleteOne() {
      !this.selection.source.remove() && alert(exp.deleteFailed)
      this.refreshList(this.folder)
    }
  }
})()
