const { exp } = require('singleton')
module.exports = (function() {
  var keyNameArr = []
  var valueArr = []

  keyNameArr
    .pushh('autoSave')
    .pushh('checkVersionOnStartup')
    .pushh('language')
    .pushh('schemaName')

  valueArr
    .pushh('false')
    .pushh('false')
    .pushh('ch')
    .pushh('xmp:pn_name')

  keyNameArr.forEach(function(item, index) {
    var value = valueArr[index]
    if (exp.haveSetting(item) === false) exp.saveSetting(item, value)
  })

  exp.autoSaveValue = exp.getSettingAsBool('autoSave')
  exp.checkVersionOnStartupValue = exp.getSettingAsBool('checkVersionOnStartup')

  !exp.expressionFolder.exists && exp.expressionFolder.create()

  if (ExternalObject.AdobeXMPScript === undefined) {
    ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript')
  }
  exp.extend({
    loc: function(string) {
      if (exp.lang === 0) {
        exp.lang = exp.getSetting('language')
      }
      return string[exp.lang]
    },
    versionUpdateInfo: {
      ch: `表达式笔记本 v${exp.version} yfsmallmoon@忆碗牛杂面

欢迎使用~~！

`,
      en: `ExpNotes v${exp.version} yfsmallmoon@ywnz
                    
Welcome to use~!
      
`
    },

    nsPrefix: XMPMeta.getNamespaceURI('xmp'),
    schemaName: exp.getSetting('schemaName')
  })

  if (exp.haveSetting('options')) exp.options = exp.getSetting('options')
  if (exp.haveSetting('version') === false || exp.getSetting('version') < exp.version) {
    alert(exp.loc(exp.versionUpdateInfo))
  }
  exp.saveSetting('version', exp.version)
})()
