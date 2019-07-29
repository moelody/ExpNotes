const { exp } = require('singleton')
const { loc } = exp
const request = require('src/https')
module.exports = function(win, isStarting) {
  clearOutput && clearOutput()
  var targetAlert = isStarting ? writeLn : alert
  return function() {
    var latestVersion = exp.getVersion()
    var nowVersion = exp.version
    $.writeln(latestVersion)
    $.writeln(nowVersion)
    var compare = exp.compareSemver(latestVersion, nowVersion)
    if (compare > 0) {
      targetAlert(loc(exp.newVersionFind) + latestVersion.toString())
      var scriptLink = exp.downloadLinkPrefix + latestVersion + exp.downloadLinkSuffix
      if (confirm(loc(exp.shouldUpdateScript))) {
        try {
          var scriptString = request('GET', scriptLink, '')
          var file = new File($.fileName)
          file.writee(scriptString)
          targetAlert(loc(exp.downloaded))
          win.close()
          exp.win.close()
        } catch (err) {
          err.printa()
        }
      } else if (confirm(loc(exp.shouldDownloadScript))) {
        try {
          exp.openLink(scriptLink)
        } catch (err) {
          err.printa()
        }
      }
    } else if (compare === 0) {
      targetAlert(loc(exp.newVersionNotFind) + nowVersion.toString())
    } else if (compare < 0) {
      targetAlert(loc(exp.tryVersionFind) + nowVersion.toString())
    }
  }
}
