class AutoPro {
  constructor(parent, attrs) {
    if (parent) this.create(parent)
    if (attrs) this.extend(attrs)
    return this
  }

  extend(source) {
    for (var i in source) this[i] = source[i]
    return this
  }

  create(parent) {
    var e = this
    var children = (e.children = [])
    var list = (e.list = parent.add('Dropdownlist{}'))
    list.AutoPro = e
  }

  add() {}
}
module.exports = $.global.yp.AutoPro = AutoPro
