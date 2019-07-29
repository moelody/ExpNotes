require('./Group')
require('./DropDownList')
module.exports = (function() {
  require('lib/OperatorOverload')

  Function.prototype.bind =
    Function.prototype.bind ||
    function(oThis) {
      var aArgs = Array.prototype.slice.call(arguments, 1)
      // 由于bind是原型方法,fToBind指调用bind的函数对象
      var fToBind = this
      var F = function() {}
      var fBound = function() {
        // fBound若作为构造函数，则this就是fBound构造出来的对象
        // 构造函数中有return，若return的是标量，则忽略，return的是对象，则覆盖构造的实例
        return fToBind.apply(this instanceof F ? this : oThis || this, aArgs.concat(Array.prototype.slice.call(arguments)))
      }

      F.prototype = fToBind.prototype
      fBound.prototype = new F()

      return fBound
    }

  Object.prototype.assign =
    Object.prototype.assign ||
    function(target) {
      if (target == null || target === undefined) {
        target = {}
      }

      target = Object(target)
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index]
        if (source != null) {
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }
      }
      return target
    }

  String.prototype.trim =
    String.prototype.trim ||
    function() {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    }

  Array.prototype.includes =
    Array.prototype.includes ||
    function(value) {
      for (var i = 0, len = this.length; i < len; i++) {
        if (this[i] === value) {
          return true
        }
      }
      return false
    }

  Array.prototype.forEach =
    Array.prototype.forEach ||
    function(callback, context) {
      if (Object.prototype.toString.call(this) === '[object Array]') {
        var i, len
        for (i = 0, len = this.length; i < len; i++) {
          if (typeof callback === 'function' && Object.prototype.hasOwnProperty.call(this, i)) {
            if (callback.call(context, this[i], i, this) === false) {
              break
            }
          }
        }
      }
    }

  Array.prototype.pushh =
    Array.prototype.pushh ||
    function(str) {
      // chains call for Array.push()
      this.push(str)
      return this
    }

  Array.prototype.some =
    Array.prototype.some ||
    function(callback) {
      if (this === void 0 || this === null) {
        throw new TypeError('Array.prototype.reduceRight called on null or undefined')
      }
      if (Object.prototype.toString.call(callback) !== '[object Function]') {
        throw new TypeError(callback + ' is not a function')
      }
      var t = Object(this)
      var len = t.length >>> 0
      var thisArg = arguments.length >= 2 ? arguments[1] : void 0
      for (var i = 0; i < len; i++) {
        if (i in t && callback.call(thisArg, t[i], i, t)) {
          return true
        }
      }
      return false
    }

  Array.prototype.indexOf =
    Array.prototype.indexOf ||
    function(searchElement, fromIndex) {
      if (this === void 0 || this === null) {
        throw new TypeError('Array.prototype.indexOf called on null or undefined')
      }
      var k
      var O = Object(this)
      var len = O.length >>> 0
      if (len === 0) {
        return -1
      }
      var n = fromIndex | 0
      if (n >= len) {
        return -1
      }
      k = Math.max(n >= 0 ? n : len - Math.abs(n), 0)
      while (k < len) {
        if (k in O && O[k] === searchElement) {
          return k
        }
        k++
      }
      return -1
    }

  Array.prototype.from =
    Array.prototype.from ||
    (function() {
      var toStr = Object.prototype.toString
      var isCallable = function(fn) {
        return typeof fn === 'function' || toStr.call(fn) === '[object Function]'
      }
      var toInteger = function(value) {
        var number = Number(value)
        if (isNaN(number)) {
          return 0
        }
        if (number === 0 || !isFinite(number)) {
          return number
        }
        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number))
      }
      var maxSafeInteger = Math.pow(2, 53) - 1
      var toLength = function(value) {
        var len = toInteger(value)
        return Math.min(Math.max(len, 0), maxSafeInteger)
      }
      var toItems = function(value) {
        // support set
        if (value.size > 0 && value.values) {
          const values = value.values()
          var it = values.next()
          var o = []
          while (!it.done) {
            o.push(it.value)
            it = values.next()
          }
          return o
        }
        return Object(value)
      }
      // The length property of the from method is 1.
      return function from(arrayLike /*, mapFn, thisArg */) {
        // 1. Let C be the this value.
        var C = this

        // 2. Let items be ToObject(arrayLike).
        var items = toItems(arrayLike)

        // 3. ReturnIfAbrupt(items).
        if (arrayLike == null) {
          throw new TypeError('Array.from requires an array-like object - not null or undefined')
        }

        // 4. If mapfn is undefined, then let mapping be false.
        var mapFn = arguments.length > 1 ? arguments[1] : void undefined
        var T
        if (typeof mapFn !== 'undefined') {
          // 5. else
          // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
          if (!isCallable(mapFn)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function')
          }

          // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
          if (arguments.length > 2) {
            T = arguments[2]
          }
        }

        // 10. Let lenValue be Get(items, "length").
        // 11. Let len be ToLength(lenValue).
        var len = toLength(items.length)

        // 13. If IsConstructor(C) is true, then
        // 13. a. Let A be the result of calling the [[Construct]] internal method
        // of C with an argument list containing the single item len.
        // 14. a. Else, Let A be ArrayCreate(len).
        var A = isCallable(C) ? Object(new C(len)) : new Array(len)

        // 16. Let k be 0.
        var k = 0
        // 17. Repeat, while k < len… (also steps a - h)
        var kValue
        while (k < len) {
          kValue = items[k]
          if (mapFn) {
            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k)
          } else {
            A[k] = kValue
          }
          k += 1
        }
        // 18. Let putStatus be Put(A, "length", len, true).
        A.length = len
        // 20. Return A.
        return A
      }
    })()

  Error.prototype.print =
    Error.prototype.print ||
    function() {
      return 'Line #' + this.line.toString() + '\r\n' + this.toString()
    }

  Error.prototype.printc =
    Error.prototype.printc ||
    function() {
      cout << '\n---------'
      cout << this.print()
      cout << '---------\n'
    }

  Error.prototype.printa =
    Error.prototype.printa ||
    function() {
      this.print() << cout
    }

  File.prototype.writee =
    File.prototype.writee ||
    function(str) {
      // method to write file
      this.open('w')
      this.write(str)
      this.close()
    }

  File.prototype.readd =
    File.prototype.readd ||
    function() {
      // method to read from file
      this.open('r')
      var str = this.read()
      this.close()
      return str
    }

  File.prototype.evalFile =
    File.prototype.evalFile ||
    function() {
      // method to read from file
      try {
        $.evalFile(this.fullName)
      } catch (e) {
        this.encoding = 'BINARY'
        this.open('r')
        var str = this.read()
        this.close()
        eval(str)
      }
    }
})()
