const { exp } = require('singleton')
const { loc } = exp
const ICONS = require('src/icon')
const _ = require('ui/UIParser')
module.exports = function() {
  try {
    var UIJson = {
      newWin: {
        type: 'palette',
        text: loc(exp.about),
        margins: 10,
        orientation: 'column',
        properties: {
          resizeable: false
        },
        children: {
          topGroup: {
            type: 'group',
            orientation: 'stack',
            margins: 10,
            alignment: ['top', 'fill'],
            children: {
              cafx: {
                type: 'image',
                image: ICONS.cafx,
                alignment: ['fill', 'fill'],
                preferredSize: [300, 40]
              }
            }
          },
          bottomTab: {
            type: 'tabbedpanel',
            alignment: ['bottom', 'fill'],
            children: {
              settings: {
                type: 'tab',
                text: loc(exp.settings),
                children: {
                  option: {
                    type: 'panel',
                    text: loc(exp.option),
                    alignment: ['fill', 'fill'],
                    children: {
                      lang: {
                        type: 'checkbox',
                        text: loc(exp.forcelang),
                        value: exp.lang === 'en',
                        alignment: ['left', 'top']
                      },
                      autoSave: {
                        type: 'checkbox',
                        text: loc(exp.autoSaveStr),
                        alignment: ['left', 'top']
                      },
                      checkVersionOnStartup: {
                        type: 'checkbox',
                        text: loc(exp.checkVersionOnStartupStr),
                        alignment: ['left', 'top']
                      }
                    }
                  },
                  bmp: {
                    type: 'panel',
                    text: loc(exp.configure),
                    alignment: ['bottom', 'bottom'],
                    children: {
                      editFolder: {
                        type: 'edittext',
                        text: '',
                        characters: 30,
                        alignment: ['left', 'fill']
                      }
                    }
                  }
                }
              },
              info: {
                type: 'tab',
                text: loc(exp.info),
                children: {
                  infoMessage: {
                    type: 'edittext',
                    text: loc(exp.help),
                    alignment: ['fill', 'fill'],
                    minimumSize: [0, 0],
                    preferredSize: [300, 200],
                    properties: {
                      multiline: true,
                      scrolling: true
                    }
                  }
                }
              }
            }
          }
        }
      } // end of newWin
    }
    var win = _.newWindow(UIJson)[0]
    _('*').each(function(e) {
      switch (e.id) {
        default:
          if (e.type !== 'checkbox') break
          e.value = exp.getSettingAsBool(e.id)
          var name = e.id + 'Value'
          e.onClick = function() {
            exp[name] = this.value
          }
          break
        case 'lang':
          e.onClick = function() {
            this.value ? (exp.lang = 'en') : (exp.lang = 'ch')
          }
          break
        case 'editFolder':
          e.text = exp.expressionFolder.fsName
          e.onChange = function() {
            if (!Folder(this.text).exists) {
              alert(exp.loc(exp.folderExistsAlert))
              return
            }
            exp.saveSetting('expressionFolder', this.text)
          }
          break
        case 'cafx':
          e.image = ICONS.cafx
          e.addEventListener('mouseover', function() {
            this.image = ICONS.cafxlog
          })
          e.addEventListener('mouseout', function() {
            this.image = ICONS.cafx
          })
          break
      }
    })

    win.onClose = function() {
      if (exp.lang !== exp.getSetting('language')) {
        exp.saveSetting('language', exp.lang)
        if (exp.win instanceof Window) {
          exp.win.close()
          refreshExp()
        } else {
          try {
            app.executeCommand(app.findMenuCommandId('ExpNotes.jsx'))
            app.executeCommand(app.findMenuCommandId('ExpNotes.jsx'))
          } catch (err) {
            alert(loc(exp.reloadFailed))
          }
        }
      }
    }
    win.center()
    win.show()
  } catch (err) {
    alert('Line #' + err.line.toString() + '\r\n' + err.toString())
  }
}
