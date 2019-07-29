function refreshExp(global) {
  /** ***********************第三方库************************************************** **/
  require('lib/JSON')

  /** ***********************依赖对象************************************************** **/
  const { exp } = require('singleton')
  require('polyfill')
  require('./extend')

  /** ***********************绑定函数************************************************** **/
  const BuildUI = require('ui/BuildUI')
  const utils = require('ui/UtilsUI')

  /** ***********************关闭重复窗口************************************************** **/
  $.global.callbackBeforeWebpackBuild && $.global.callbackBeforeWebpackBuild()
  if (!(global instanceof Panel)) {
    $.global.callbackBeforeWebpackBuild = function() {
      win.close()
    }
  }

  var winOps = (exp.winOps = BuildUI({
    scriptName: exp.scriptName,
    version: exp.version
  }))
  var win = (exp.win = global instanceof Panel ? global : winOps.window)

  /** ***********************顶层工具栏************************************************** **/
  var top = (exp.top = win.add("Group{orientation:'row',alignment:['fill','top'],spacing:0,margins:0}"))
  var leftTop = (exp.leftTop = top.add("Group{orientation:'row',alignment:['left','top'],spacing:0,margins:0}"))
  exp.addFileBtn(leftTop)
  var listGroup = (exp.listGroup = top.add("Group{orientation:'stack',alignment:['fill','top'],spacing:0,margins:0}"))
  var treeGroup = (exp.treeGroup = listGroup.add("Group{orientation:'row',alignment:['fill','top'],spacing:0,margins:0,visible:1}"))
  var xmpGroup = (exp.xmpGroup = listGroup.add("Group{orientation:'row',alignment:['fill','top'],spacing:0,margins:0,visible:0}"))

  var midGroup = (exp.midGroup = win.add("Group{orientation:'column',alignment:['fill','fill'],spacing:0,margins:0}"))
  var edittext = (exp.edittext = utils.add(midGroup, {
    type: 'edittext',
    alignment: ['fill', 'fill'],
    minimumSize: [0, 0],
    helpTip: exp.loc(exp.edittextTip),
    properties: {
      multiline: true
    }
  }))
  edittext.onChange = edittext.onChanging = function() {
    if (exp.autoSave) exp.saveEdittext()
  }
  exp.initXMP(xmpGroup)
  exp.initList(treeGroup)

  var bottomGroup = (exp.bottomGroup = win.add("Group{orientation:'row',alignment:['fill','bottom'],spacing:10,margins:0}"))
  exp.addToolBtn(bottomGroup)

  winOps.open(win)

  if (exp.checkVersionOnStartupValue) {
    var checkVersionFunc = require('src/https/checkVersion')(
      win,
      /* true for starting */
      true
    )
    checkVersionFunc()
  }
  var observeSingleton = require('src/mvvm')
  observeSingleton(exp)
  app.onError &&
    app.onError(function(err) {
      alert(`警告, ExpNotes检测到AE报错, 内容如下:
  ${err.toString()}
  `)
    })
}
$.global.refreshExp = refreshExp
try {
  refreshExp(window)
} catch (err) {
  alert('Line #' + err.line.toString() + '\r\n' + err.toString())
}
