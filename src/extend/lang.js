/** **********************************界面的字符串资源***************************************/
const { exp } = require('singleton')
module.exports = (function() {
  exp.extend({
    /** **********************************帮助提示************************************* **/
    createTip: {
      en: `click to quick add a note
ctrl/cmd: quick add a folder
shift: advance add panel`,
      ch: `点击快速添加笔记
ctrl/cmd: 快速添加文件夹
shift: 高级添加面板`
    },
    deleteTip: {
      en: `click to quick delete a note
ctrl/cmd: quick delete a folder
shift: advance delete panel`,
      ch: `点击快速删除笔记
ctrl/cmd: 快速删除文件夹
shift: 高级删除面板`
    },
    renameTip: {
      en: `click to quick rename a note or folder
ctrl/cmd: quick rename folder
shift: advance rename panel`,
      ch: `点击快速重命名笔记或文件夹
ctrl/cmd: 快速重命名文件夹
shift: 高级重命名面板`
    },
    levelTip: { en: 'level catalogue', ch: '级目录' },
    edittextTip: { en: 'edit text area', ch: '文字编辑区' },
    saveTip: { en: 'click to quick save note', ch: '点击快速储存笔记' },
    switchTip: { en: 'click to quick switch XMP/File source mode', ch: '点击快速切换XMP/文件资源模式' },
    refreshTip: { en: 'click to quick refresh note\nshift: quick refresh list', ch: '点击快速刷新笔记\nshift点击快速刷新列表' },

    betTip: { en: 'beautify text area and your expressions', ch: '美化代码和表达式' },
    pickTip: { en: 'get the property"s path', ch: '获取属性路径代码' },
    exportTip: { en: 'export the text to selected properties', ch: '导出代码到所选属性' },
    importTip: { en: 'import the property"s expression to the text area', ch: '导入属性表达式' },
    toggleTip: { en: 'enable or disable your properties" expressions', ch: '激活或禁用所选属性的表达式' },
    cancelTip: { en: 'delete select properties expression', ch: '删除所选属性的表达式' },
    undoTip: { en: 'cancel your beauty or import operations(only once)', ch: '撤销美化或导入操作(仅一次)' },

    setTip: { en: 'general settings and help', ch: '一般设置和帮助' },
    noneTip: { en: 'click to disable/enable this part', ch: '点击禁用或激活此栏' },
    exportStr: { en: 'Cancel apply expression', ch: '撤销应用的表达式' },
    undoStr: { en: 'Cancel delete expression', ch: '撤销删除的表达式' },
    panelStr: { en: 'need to reOpen script', ch: '需要重新打开脚本' },
    advlistTip: { en: 'change mainPanel list then click can refresh this panel list catalogue', ch: '变更主面板列表后点击可刷新该面板列表目录' },

    /** **********************************界面信息************************************* **/
    okStr: { en: 'OK', ch: '确认' },
    refreshStr: { en: 'Refresh', ch: '刷新' },
    settings: { en: 'Setting', ch: '设置' },
    about: { en: 'About', ch: '关于' },
    info: { en: 'Info', ch: '信息' },
    option: { en: 'Option', ch: '选项' },
    optionsStr: { en: 'Beauty options', ch: '美化选项' },
    link: { en: 'Click to beautify help page', ch: '点击前往美化选项帮助' },
    configure: { en: 'expressionNoteFolder Location:', ch: '表达式笔记文件夹位置:' },

    fileStr: { en: 'FileName', ch: '文件名' },
    folderStr: { en: 'FolderName', ch: '文件夹名' },
    createStr: { en: 'Create New Folder or File', ch: '新建文件夹或文件' },
    deleteStr: { en: 'Delete Folder or File', ch: '删除文件夹或文件' },
    renameStr: { en: 'Rename Folder or File', ch: '重命名文件夹或文件' },
    forcelang: { en: 'force to english interface', ch: '强制英文(English)界面' },
    autoSaveStr: { en: 'Auto Save - Notes are saved automatically.', ch: '自动保存 - 笔记会自动保存' },
    checkVersionOnStartupStr: { en: 'Auto Check - script will check version on startup', ch: '自动更新 - 脚本启动时会检查更新' },

    /** **********************************错误提示************************************* **/
    needComp: { en: 'Please select a comp first', ch: '脚本需要一个合成,当前合成不存在!' },
    needProperties: { en: 'Please select a or more prop first', ch: '请选中一个或多个属性' },
    folderExistsAlert: { en: "Folder doesn't exists", ch: '文件夹不存在' },
    deleteFailed: { en: 'Delete Failed!', ch: '删除失败' },
    renameFailed: { en: 'Rename Failed!', ch: '重命名失败' },
    beautyFailed: { en: 'Beauty Failed!', ch: '美化失败' },
    optionsErr: { en: 'Unknown options setting', ch: '未知的选项设置' }
  })
  exp.extend({
    /** **********************************版本信息************************************* **/
    newVersionFind: { en: 'New version found,please download the new version ', ch: '存在新版本,请下载最新版v' },
    newVersionNotFind: { en: 'No new version! v', ch: '已是最新版 v' },
    tryVersionFind: {
      en: 'It seems that you are using the beta version which is not released yet. v',
      ch: '未发现新版本, 你正在使用尚未发布的试用版 v'
    },
    shouldUpdateScript: {
      en: 'Would you like to upgrade to new version now?\r\n it will cost some time while ae will not response\r\n',
      ch: '现在开始更新新版本吗?\r\n下载时AE会停止响应数十秒时间.\r\n选否则可以选择通过浏览器下载'
    },
    shouldDownloadScript: {
      en: 'Would you like to download new version now?',
      ch: '是否通过浏览器自行下载最新版本?\r\n打开网页后右键另存为脚本文件即可'
    },
    downloaded: {
      en: 'Update success! To make it work, just restart script',
      ch: '升级成功, 请重启脚本'
    },
    help: {
      en: `Made by: yf
E-mail: yfsmallmoon@gmail.com
Source Code: github.com/liuyingxuanlv

♏switch : quick switch XMP/File source mode

♏save : quick save note

♏refresh : quick refresh note, shift: quick refresh list

♏create : quick add a note，ctrl/cmd quick add a folder，shift advance add panel

♏delete : quick delete a note，ctrl/cmd quick delete a folder，advance delete panel

♏list : auto refresh list and text content

♏settings : support English/Chinese language switch, custom expressionFolder

♏help : mouse hover quick helptip

♏rename : quick rename note or folder

▶beauty : beautify text area and your expressions

▶beautyOptions : custom your beautify options

▶pick : get the property"s path

▶export : export the text to selected properties

▶import : import the property"s expression to the text area

▶toggle : enable or disable your properties" expressions

▶cancel : cancel your beauty or import operations(only once)

`,
      ch: `作者: yf(忆碗牛杂面)
邮箱: yfsmallmoon@gmail.com
源码托管地址: github.com/liuyingxuanlv

♏切换 : 快速切换XMP/文件资源模式

♏储存 : 快速储存笔记

♏刷新 : 快速刷新笔记，shift快速刷新列表

♏添加 : 快速添加笔记，ctrl/cmd快速添加文件夹，shift高级添加面板

♏删除 : 快速删除笔记，ctrl/cmd快速删除文件夹，shift高级删除面板

♏列表 : 自动刷新列表和文字内容

♏设置 : 支持中英界面切换，自定义切换表达式文件夹

♏帮助 : 悬停快速查看提示

♏重命名 : 快速重命名笔记或文件夹

▶美化 : 获取属性路径代码

▶美化选项 : 自定义美化规则

▶拾取 : 获取属性路径代码

▶导出 : 导出代码到所选属性

▶导入 : 导入属性表达式

▶切换 : 激活或禁用所选属性的表达式

▶撤销 : 撤销美化或导入操作(仅一次)
`
    }
  })
})()
