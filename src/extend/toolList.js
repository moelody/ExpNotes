const { exp } = require('singleton')
const { loc } = exp
const utils = require('ui/UtilsUI')
/** ***********************资源功能************************************************** **/
const beautify = require('lib/js-beautify')
const keyboard = require('key').key
const ICONS = require('src/icon')
const settingWindow = require('src/ui/settingWindow')
const pickWindow = require('src/script/rd_GimmePropPath')

/** **********************************界面的一些刷新功能***************************************/
exp.extend({
  /** ***********************转换模式************************************************** **/
  switchList() {
    if (exp.mode === 'tree') {
      exp.mode = 'project'
      this.image = ICONS.switchXMP
      exp.treeGroup.visible = 0
      exp.xmpGroup.visible = 1
      exp.xmpDroplist.getXMP()
    } else {
      exp.mode = 'tree'
      this.image = ICONS.switch
      exp.xmpGroup.visible = 0
      exp.treeGroup.visible = 1
      if (exp.currentFile) exp.edittext.text = exp.currentFile.readd()
      else exp.edittext.text = ''
    }
  },
  addFileBtn(toolGroup) {
    var switchBtn = (exp.switchBtn = utils.add(toolGroup, {
      type: 'iconbutton',
      image: ICONS.switch,
      bounds: [0, 0, 25, 25],
      alignment: ['left', 'top'],
      helpTip: loc(exp.switchTip),
      properties: {
        style: 'toolbutton'
      }
    }))
    var saveBtn = (exp.saveBtn = utils.add(toolGroup, {
      type: 'iconbutton',
      image: ICONS.saveFile,
      bounds: [0, 0, 25, 25],
      alignment: ['left', 'top'],
      helpTip: loc(exp.saveTip),
      properties: {
        style: 'toolbutton'
      }
    }))
    var refreshBtn = (exp.refreshBtn = utils.add(toolGroup, {
      type: 'iconbutton',
      image: ICONS.refresh,
      bounds: [0, 0, 25, 25],
      alignment: ['left', 'top'],
      helpTip: loc(exp.refreshTip),
      properties: {
        style: 'toolbutton'
      }
    }))
    var createBtn = (exp.createBtn = utils.add(toolGroup, {
      type: 'iconbutton',
      image: ICONS.createNew,
      bounds: [0, 0, 25, 25],
      alignment: ['left', 'top'],
      helpTip: loc(exp.createTip),
      properties: {
        style: 'toolbutton'
      }
    }))
    var deleteBtn = (exp.deleteBtn = utils.add(toolGroup, {
      type: 'iconbutton',
      image: ICONS.deleteTxt,
      bounds: [0, 0, 25, 25],
      alignment: ['left', 'top'],
      helpTip: loc(exp.deleteTip),
      properties: {
        style: 'toolbutton'
      }
    }))
    switchBtn.onClick = exp.switchList
    saveBtn.onClick = exp.saveEdittext
    refreshBtn.onClick = exp.refreshEdittext
    createBtn.onClick = exp.createNew
    deleteBtn.onClick = exp.deleteNew
  },
  addToolBtn(bottomGroup) {
    var edittext = exp.edittext
    var betBtn = (exp.betBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS.beauty,
      bounds: exp.bounds + [0, 0, 10, 0],
      alignment: ['left', 'bottom'],
      helpTip: loc(exp.betTip),
      properties: {
        style: 'toolbutton'
      }
    }))
    var pickBtn = (exp.pickBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS.pick,
      bounds: exp.bounds + [0, 0, 10, 0],
      alignment: ['left', 'bottom'],
      helpTip: loc(exp.pickTip),
      properties: {
        style: 'toolbutton'
      }
    }))
    var undoBtn = (exp.undoBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS.undo,
      bounds: exp.bounds + [0, 0, 10, 0],
      alignment: ['left', 'bottom'],
      helpTip: loc(exp.undoTip),
      properties: {
        style: 'toolbutton'
      }
    }))
    var exportBtn = (exp.exportBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS.export,
      bounds: exp.bounds,
      alignment: ['center', 'bottom'],
      helpTip: loc(exp.exportTip),
      properties: {
        style: 'toolbutton'
      }
    }))
    var importBtn = (exp.importBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS.import,
      bounds: exp.bounds,
      alignment: ['center', 'bottom'],
      helpTip: loc(exp.importTip),
      properties: {
        style: 'toolbutton'
      }
    }))
    var toggleBtn = (exp.toggleBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS.toggle,
      bounds: exp.bounds,
      alignment: ['center', 'bottom'],
      helpTip: loc(exp.toggleTip),
      properties: {
        style: 'toolbutton'
      }
    }))
    var cancelBtn = (exp.cancelBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS.cancel,
      bounds: exp.bounds,
      alignment: ['center', 'bottom'],
      helpTip: loc(exp.cancelTip),
      properties: {
        style: 'toolbutton'
      }
    }))
    var renameBtn = (exp.renameBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS.rename,
      bounds: [0, 0, 25, 25],
      alignment: ['right', 'bottom'],
      helpTip: loc(exp.renameTip),
      properties: {
        style: 'toolbutton'
      }
    }))
    var setBtn = (exp.setBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS.info,
      bounds: [0, 0, 25, 25],
      alignment: ['right', 'bottom'],
      helpTip: loc(exp.setTip),
      properties: {
        style: 'toolbutton'
      }
    }))
    betBtn.addEventListener('mousedown', function(event) {
      if (event.button === 0) {
        try {
          exp.beautyBefore = edittext.text
          edittext.text = beautify(edittext.text, exp.options)
        } catch (err) {
          alert('Line #' + err.line.toString() + '\r\n' + err.toString())
        }
      }
      if (event.button === 2) exp.beautyOptions()
    })
    undoBtn.onClick = function() {
      edittext.text = exp.beautyBefore
    }
    exportBtn.onClick = function() {
      var comp = app.project.activeItem
      if (!(comp instanceof CompItem)) return alert(loc(exp.needComp))
      var props = comp.selectedProperties
      if (props.length === 0) return alert(loc(exp.needProperties))

      app.beginUndoGroup(loc(exp.exportStr))
      for (var i = 0; i < comp.selectedProperties.length; i++) {
        if (props[i].canSetExpression) props[i].expression = edittext.text
      }
      app.endUndoGroup()
    }
    importBtn.onClick = function() {
      var comp = app.project.activeItem
      if (!(comp instanceof CompItem)) return alert(loc(exp.needComp))
      var props = comp.selectedProperties
      if (props.length === 0) return alert(loc(exp.needProperties))

      exp.beautyBefore = edittext.text
      if (props[props.length - 1].expressionEnabled) edittext.text = props[props.length - 1].expression
    }
    toggleBtn.onClick = function() {
      var comp = app.project.activeItem
      if (!(comp instanceof CompItem)) return alert(loc(exp.needComp))
      var props = comp.selectedProperties
      if (props.length === 0) return alert(loc(exp.needProperties))

      for (var i = 0; i < comp.selectedProperties.length; i++) {
        props[i].expressionEnabled = !props[i].expressionEnabled
      }
    }
    cancelBtn.onClick = function() {
      var comp = app.project.activeItem
      if (!(comp instanceof CompItem)) return alert(loc(exp.needComp))
      var props = comp.selectedProperties
      if (props.length === 0) return alert(loc(exp.needProperties))

      app.beginUndoGroup(loc(exp.undoStr))
      for (var i = 0; i < comp.selectedProperties.length; i++) {
        if (props[i].canSetExpression) props[i].expression = ''
      }
      app.endUndoGroup()
    }
    pickBtn.onClick = pickWindow
    setBtn.onClick = settingWindow
    renameBtn.onClick = exp.renameNew
  },
  formatOptions(text) {
    var pre = text.split('{')[1].split('}')[0]
    var content = pre.split(', "')
    var str = '{' + '\n' + content.join(',\n"') + '\n' + '}'
    return str
  },
  beautyOptions() {
    var win = utils.add('', {
      type: 'palette',
      text: loc(exp.optionsStr),
      properties: {
        borderless: false
      }
    })
    var cafx = utils.add(win, {
      type: 'image',
      image: ICONS.cafx,
      alignment: ['fill', 'fill'],
      preferredSize: [300, 40]
    })
    cafx.addEventListener('mouseover', function() {
      this.image = ICONS.cafxlog
    })
    cafx.addEventListener('mouseout', function() {
      this.image = ICONS.cafx
    })
    // 编辑栏
    var panel = win.add("panel{orientation:'column',alignment:['fill','top']}")
    var link = utils.add(panel, {
      type: 'statictext',
      text: loc(exp.link),
      alignment: ['fill', 'fill']
    })
    link.graphics.foregroundColor = link.graphics.newPen(link.graphics.PenType.SOLID_COLOR, [1, 1, 0], 1)

    var options = utils.add(panel, {
      type: 'edittext',
      text: beautify(exp.formatOptions(JSON.stringify(exp.options))),
      alignment: ['fill', 'fill'],
      properties: {
        multiline: true,
        scrolling: true
      }
    })

    // 确认栏
    var group = win.add("Group{orientation:'row',alignment:['fill','bottom'],spacing:0,margins:0}")
    var refresh = utils.add(group, {
      type: 'button',
      text: loc(exp.refreshStr),
      alignment: ['left', 'bottom']
    })
    var ok = utils.add(group, {
      type: 'button',
      text: loc(exp.okStr),
      alignment: ['right', 'bottom']
    })
    // 功能栏
    link.addEventListener('mousedown', function() {
      exp.openLink(exp.beautylink)
    })
    refresh.onClick = function() {
      options.text = beautify(exp.formatOptions(JSON.stringify(exp.options)))
    }
    ok.onClick = function() {
      try {
        exp.saveSetting('options', options.text)
        exp.options = JSON.parse(options.text)
      } catch (e) {
        alert(loc(exp.optionsErr))
      }
    }

    win.center()
    win.show()
  },
  /** ***********************initXMP************************************************** **/
  initXMP(parent) {
    var drop = (exp.xmpDroplist = parent.add('Dropdownlist{title:"xmp"}'))
    drop.onChange = drop.getXMP
    drop.refreshXMP()
  },
  addXMP(name, note) {
    var xmpData = new XMPMeta(app.project.xmpPacket)
    var nsPrefix = exp.nsPrefix
    var schemaName = exp.schemaName
    if (!xmpData.doesPropertyExist(nsPrefix, schemaName)) {
      xmpData.setProperty(nsPrefix, schemaName, null, XMPConst.PROP_IS_ARRAY)
    }
    xmpData.appendArrayItem(nsPrefix, schemaName, escape('' + name + '\n\n' + note))
    app.project.xmpPacket = xmpData.serialize()
  },
  /** ***********************添加或删除list************************************************** **/
  addDroplist(parent, folder) {
    var list = exp.list
    var drop = (list[list.length] = parent.add('Dropdownlist{title:"' + list.length + '"}'))
    drop.helpTip = String(list.length - 1) + loc(exp.levelTip)
    drop.refreshList(folder)
    drop.onChange = exp.reloadDroplist
    return drop
  },
  removeDroplist(parent, index) {
    var list = exp.list
    for (var i = index + 1; i < list.length; i++) {
      parent.remove(list[i])
    }
    exp.list = list.slice(0, index + 1)
  },
  checkDroplist(parent, index) {
    var list = exp.list
    if (index < list.length - 1) {
      exp.removeDroplist(parent, index)
    }
  },
  /** ***********************reloadList************************************************** **/
  initList(parent) {
    exp.list = []
    parent.removeAll()
    exp.addDroplist(parent, exp.expressionFolder)
  },
  reloadDroplist() {
    var list = exp.list
    var index = list.indexOf(this)
    exp.checkDroplist(this.parent, index)
    if (!this.selection.source) {
      exp.currentFile = null
      exp.edittext.text = ''
      return
    }
    var source = this.selection.source
    if (source instanceof Folder) {
      exp.addDroplist(this.parent, source)
      exp.winOps.refresh(exp.win)
    } else {
      exp.currentFile = source
      exp.edittext.text = source.readd()
      exp.winOps.refresh(exp.win)
    }
  },
  refreshEdittext() {
    var key = keyboard()
    if (exp.mode === 'tree') {
      if (String(key) === 'shift') exp.initList(exp.treeGroup)
      if (key === null) exp.edittext.text = exp.currentFile.readd()
    } else {
      if (String(key) === 'shift') exp.xmpDroplist.refreshXMP()
      if (key === null) exp.xmpDroplist.getXMP()
    }
  },
  /** ***********************源文件操作************************************************** **/
  saveEdittext() {
    if (exp.mode === 'tree') {
      exp.currentFile.writee(exp.edittext.text)
    } else {
      exp.xmpDroplist.saveXMP()
    }
  },
  renameNew() {
    try {
      var name
      var key = keyboard()
      var list = exp.list
      var xmp = exp.xmpDroplist
      var parent = list[list.length - 1]
      var pparent = list[list.length - 2]
      if (exp.mode === 'tree') {
        if (String(key) === 'shift') exp.renameAdv()
        if (String(key) === 'cmd') {
          name = prompt('请输入新的文件夹名称(｡･ω･｡)', '')
          if (!name) return
          pparent.renameFolder(name)
        }
        if (key === null) {
          if (parent.checkFile()) {
            name = prompt('请输入新的文件名称(｡･ω･｡)', '')
            if (!name) return
            parent.renameFile(name)
          } else {
            name = prompt('请输入新的文件夹名称(｡･ω･｡)', '')
            if (!name) return
            pparent.renameFolder(name)
          }
        }
      } else {
        name = prompt('请输入新的XMP文件名称(｡･ω･｡)', '')
        if (!name) return
        xmp.renameXMP(name)
        xmp.refreshXMP()
        xmp.reSelectXMP(name)
      }
    } catch (err) {
      alert('Line #' + err.line.toString() + '\r\n' + err.toString())
    }
  },
  createNew() {
    try {
      var name
      var key = keyboard()
      var list = exp.list
      var xmp = exp.xmpDroplist
      var parent = list[list.length - 1]
      if (exp.mode === 'tree') {
        if (String(key) === 'shift') exp.creatAdv()
        if (String(key) === 'cmd') {
          name = prompt('请输入文件夹名称(´･ω･｀)', '')
          if (!name) return
          parent.createFolder(name)
        }
        if (key === null) {
          name = prompt('请输入文件名称(´･ω･｀)', '')
          if (!name) return
          parent.createFile(name)
        }
      } else {
        name = prompt('请输入XMP文件名称(´･ω･｀)', '')
        if (!name) return
        exp.addXMP(name, '')
        xmp.refreshXMP()
        xmp.reSelectXMP(name)
      }
    } catch (err) {
      alert('Line #' + err.line.toString() + '\r\n' + err.toString())
    }
  },
  deleteNew() {
    try {
      var key = keyboard()
      var list = exp.list
      var parent = list[list.length - 1]
      var pparent = list[list.length - 2]
      if (exp.mode === 'tree') {
        if (String(key) === 'shift') exp.deleteAdv()
        if (String(key) === 'cmd') pparent.deleteOne()
        if (key === null) !parent.selection.source ? pparent.deleteOne() : parent.deleteOne()
      } else exp.xmpDroplist.deleteXMP()
    } catch (err) {
      alert('Line #' + err.line.toString() + '\r\n' + err.toString())
    }
  },
  createRadioBtn(parent) {
    var list = exp.list
    var btnArrays = []
    for (var i = 0, len = list.length; i < len; i++) {
      btnArrays.push(
        utils.add(parent, {
          type: 'radiobutton',
          text: i,
          helpTip: i + loc(exp.levelTip),
          alignment: ['fill', 'fill']
        })
      )
      btnArrays[i].onClick = function() {
        btnArrays.parent = list[this.text]
      }
    }
    btnArrays[len - 1].value = true
    btnArrays.parent = list[len - 1]
    return btnArrays
  },
  creatAdv() {
    var win = utils.add('', {
      type: 'palette',
      text: loc(exp.createStr),
      properties: {
        borderless: false
      }
    })
    var cafx = utils.add(win, {
      type: 'image',
      image: ICONS.cafx,
      alignment: ['fill', 'fill'],
      preferredSize: [300, 40]
    })
    cafx.addEventListener('mouseover', function() {
      this.image = ICONS.cafxlog
    })
    cafx.addEventListener('mouseout', function() {
      this.image = ICONS.cafx
    })
    // 编辑栏
    var panel1 = win.add("panel{orientation:'column',alignment:['fill','top'],text: '" + loc(exp.folderStr) + "'}")
    var group1 = panel1.add("Group{orientation:'row',alignment:['fill','top'],spacing:0,margins:0}")
    var radioBtn1 = exp.createRadioBtn(group1)
    var folder = utils.add(panel1, {
      type: 'edittext',
      text: '',
      characters: 30,
      alignment: ['fill', 'fill']
    })
    var panel2 = win.add("panel{orientation:'column',alignment:['fill','top'],text: '" + loc(exp.fileStr) + "'}")
    var group2 = panel2.add("Group{orientation:'row',alignment:['fill','top'],spacing:0,margins:0}")
    var radioBtn2 = exp.createRadioBtn(group2)
    var file = utils.add(panel2, {
      type: 'edittext',
      text: '',
      characters: 30,
      alignment: ['fill', 'fill']
    })
    // 确认栏
    var group = win.add("Group{orientation:'row',alignment:['fill','bottom'],spacing:0,margins:0}")
    var refresh = utils.add(group, {
      type: 'button',
      text: loc(exp.refreshStr),
      helpTip: loc(exp.advlistTip),
      alignment: ['left', 'bottom']
    })
    var ok = utils.add(group, {
      type: 'button',
      text: loc(exp.okStr),
      alignment: ['right', 'bottom'],
      enabled: false
    })
    // 功能栏
    folder.onChanging = file.onChanging = function() {
      // Enable OK button if not empty
      if (folder.text.length === 0 && file.text.length === 0) ok.enabled = false
      else ok.enabled = true
    }
    refresh.onClick = function() {
      group1.removeAll()
      group2.removeAll()
      radioBtn1 = exp.createRadioBtn(group1)
      radioBtn2 = exp.createRadioBtn(group2)
      win.layout.layout(true)
    }
    ok.onClick = function() {
      folder.text && radioBtn1.parent.createFolder(folder.text)
      file.text && radioBtn2.parent.createFile(file.text)
    }

    win.center()
    win.show()
  },
  deleteAdv() {
    var win = utils.add('', {
      type: 'palette',
      text: loc(exp.deleteStr),
      properties: {
        borderless: false
      }
    })
    var cafx = utils.add(win, {
      type: 'image',
      image: ICONS.cafx,
      alignment: ['fill', 'fill'],
      preferredSize: [300, 40]
    })
    cafx.addEventListener('mouseover', function() {
      this.image = ICONS.cafxlog
    })
    cafx.addEventListener('mouseout', function() {
      this.image = ICONS.cafx
    })
    // 编辑栏
    var panel1 = win.add("panel{orientation:'row',alignment:['fill','top'],text: '" + loc(exp.folderStr) + "'}")
    var group1 = panel1.add("Group{orientation:'row',alignment:['fill','fill'],spacing:0,margins:0}")
    var radioBtn1 = exp.createRadioBtn(group1)
    var folderIcon = utils.add(panel1, {
      type: 'iconbutton',
      image: ICONS.none,
      helpTip: loc(exp.noneTip),
      alignment: ['right', 'right'],
      properties: {
        style: 'toolbutton'
      }
    })

    var panel2 = win.add("panel{orientation:'row',alignment:['fill','top'],text: '" + loc(exp.fileStr) + "'}")
    var group2 = panel2.add("Group{orientation:'row',alignment:['fill','fill'],spacing:0,margins:0}")
    var radioBtn2 = exp.createRadioBtn(group2)
    var fileIcon = utils.add(panel2, {
      type: 'iconbutton',
      image: ICONS.none,
      helpTip: loc(exp.noneTip),
      alignment: ['right', 'right'],
      properties: {
        style: 'toolbutton'
      }
    })
    // 确认栏
    var group = win.add("Group{orientation:'row',alignment:['fill','bottom'],spacing:0,margins:0}")
    var refresh = utils.add(group, {
      type: 'button',
      text: loc(exp.refreshStr),
      helpTip: loc(exp.advlistTip),
      alignment: ['left', 'bottom']
    })
    var ok = utils.add(group, {
      type: 'button',
      text: loc(exp.okStr),
      alignment: ['right', 'bottom']
    })
    // 功能栏
    folderIcon.onClick = fileIcon.onClick = function() {
      this.image = this.image.name === ICONS.none.name ? ICONS.noneTint : ICONS.none
      this.active = false
    }
    refresh.onClick = function() {
      group1.removeAll()
      group2.removeAll()
      radioBtn1 = exp.createRadioBtn(group1)
      radioBtn2 = exp.createRadioBtn(group2)
      win.layout.layout(true)
    }
    ok.onClick = function() {
      folderIcon.image.name === ICONS.none.name ? radioBtn1.parent.deleteFolder() : ''
      fileIcon.image.name === ICONS.none.name ? radioBtn2.parent.deleteFile() : ''
    }

    win.center()
    win.show()
  },
  renameAdv() {
    var loc = exp.loc
    var win = utils.add('', {
      type: 'palette',
      text: loc(exp.renameStr),
      properties: {
        borderless: false
      }
    })
    var cafx = utils.add(win, {
      type: 'image',
      image: ICONS.cafx,
      alignment: ['fill', 'fill'],
      preferredSize: [300, 40]
    })
    cafx.addEventListener('mouseover', function() {
      this.image = ICONS.cafxlog
    })
    cafx.addEventListener('mouseout', function() {
      this.image = ICONS.cafx
    })
    // 编辑栏
    var panel1 = win.add("panel{orientation:'column',alignment:['fill','top'],text: '" + loc(exp.folderStr) + "'}")
    var group1 = panel1.add("Group{orientation:'row',alignment:['fill','top'],spacing:0,margins:0}")
    var radioBtn1 = exp.createRadioBtn(group1)
    var folder = utils.add(panel1, {
      type: 'edittext',
      text: '',
      characters: 30,
      alignment: ['fill', 'fill']
    })
    var panel2 = win.add("panel{orientation:'column',alignment:['fill','top'],text: '" + loc(exp.fileStr) + "'}")
    var group2 = panel2.add("Group{orientation:'row',alignment:['fill','top'],spacing:0,margins:0}")
    var radioBtn2 = exp.createRadioBtn(group2)
    var file = utils.add(panel2, {
      type: 'edittext',
      text: '',
      characters: 30,
      alignment: ['fill', 'fill']
    })
    // 确认栏
    var group = win.add("Group{orientation:'row',alignment:['fill','bottom'],spacing:0,margins:0}")
    var refresh = utils.add(group, {
      type: 'button',
      text: loc(exp.refreshStr),
      helpTip: loc(exp.advlistTip),
      alignment: ['left', 'bottom']
    })
    var ok = utils.add(group, {
      type: 'button',
      text: loc(exp.okStr),
      alignment: ['right', 'bottom'],
      enabled: false
    })
    // 功能栏
    folder.onChanging = file.onChanging = function() {
      // Enable OK button if not empty
      if (folder.text.length === 0 && file.text.length === 0) ok.enabled = false
      else ok.enabled = true
    }
    refresh.onClick = function() {
      group1.removeAll()
      group2.removeAll()
      radioBtn1 = exp.createRadioBtn(group1)
      radioBtn2 = exp.createRadioBtn(group2)
      win.layout.layout(true)
    }
    ok.onClick = function() {
      folder.text && radioBtn1.parent.renameFolder(folder.text)
      file.text && radioBtn2.parent.renameFile(file.text)
    }

    win.center()
    win.show()
  }
})
