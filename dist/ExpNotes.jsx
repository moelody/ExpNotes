/*!
 *   expnotes 1.0.0
 *   author: yf
 *   a script for adobe after effects to edit expression
 * 
 *   repository: https://github.com/yfsmallmoon/ExpNotes
 *   issues: https://github.com/yfsmallmoon/ExpNotes/issues
 */
/****/ (function(window) {
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  exp: __webpack_require__(13)
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */

/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/


var InputScanner = __webpack_require__(9).InputScanner;

var BaseTokenizer = __webpack_require__(10).Tokenizer;

var BASETOKEN = __webpack_require__(10).TOKEN;

var Directives = __webpack_require__(31).Directives;

var acorn = __webpack_require__(7);

var Pattern = __webpack_require__(3).Pattern;

var TemplatablePattern = __webpack_require__(32).TemplatablePattern;

function in_array(what, arr) {
  return arr.indexOf(what) !== -1;
}

var TOKEN = {
  START_EXPR: 'TK_START_EXPR',
  END_EXPR: 'TK_END_EXPR',
  START_BLOCK: 'TK_START_BLOCK',
  END_BLOCK: 'TK_END_BLOCK',
  WORD: 'TK_WORD',
  RESERVED: 'TK_RESERVED',
  SEMICOLON: 'TK_SEMICOLON',
  STRING: 'TK_STRING',
  EQUALS: 'TK_EQUALS',
  OPERATOR: 'TK_OPERATOR',
  COMMA: 'TK_COMMA',
  BLOCK_COMMENT: 'TK_BLOCK_COMMENT',
  COMMENT: 'TK_COMMENT',
  DOT: 'TK_DOT',
  UNKNOWN: 'TK_UNKNOWN',
  START: BASETOKEN.START,
  RAW: BASETOKEN.RAW,
  EOF: BASETOKEN.EOF
};
var directives_core = new Directives(/\/\*/, /\*\//);
var number_pattern = /0[xX][0123456789abcdefABCDEF]*|0[oO][01234567]*|0[bB][01]*|\d+n|(?:\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/;
var digit = /[0-9]/; // Dot "." must be distinguished from "..." and decimal

var dot_pattern = /[^\d\.]/;
var positionable_operators = (">>> === !== " + "<< && >= ** != == <= >> || " + "< / - + > : & % ? ^ | *").split(' '); // IMPORTANT: this must be sorted longest to shortest or tokenizing many not work.
// Also, you must update possitionable operators separately from punct

var punct = ">>>= " + "... >>= <<= === >>> !== **= " + "=> ^= :: /= << <= == && -= >= >> != -- += ** || ++ %= &= *= |= " + "= ! ? > < : / ^ - + * & % ~ |";
punct = punct.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
punct = punct.replace(/ /g, '|');
var punct_pattern = new RegExp(punct); // words which should always start on new line.

var line_starters = 'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(',');
var reserved_words = line_starters.concat(['do', 'in', 'of', 'else', 'get', 'set', 'new', 'catch', 'finally', 'typeof', 'yield', 'async', 'await', 'from', 'as']);
var reserved_word_pattern = new RegExp('^(?:' + reserved_words.join('|') + ')$'); // var template_pattern = /(?:(?:<\?php|<\?=)[\s\S]*?\?>)|(?:<%[\s\S]*?%>)/g;

var in_html_comment;

var Tokenizer = function Tokenizer(input_string, options) {
  BaseTokenizer.call(this, input_string, options);
  this._patterns.whitespace = this._patterns.whitespace.matching(/\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source, /\u2028\u2029/.source);
  var pattern_reader = new Pattern(this._input);
  var templatable = new TemplatablePattern(this._input).read_options(this._options);
  this.__patterns = {
    template: templatable,
    identifier: templatable.starting_with(acorn.identifier).matching(acorn.identifierMatch),
    number: pattern_reader.matching(number_pattern),
    punct: pattern_reader.matching(punct_pattern),
    // comment ends just before nearest linefeed or end of file
    comment: pattern_reader.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
    //  /* ... */ comment ends with nearest */ or end of file
    block_comment: pattern_reader.starting_with(/\/\*/).until_after(/\*\//),
    html_comment_start: pattern_reader.matching(/<!--/),
    html_comment_end: pattern_reader.matching(/-->/),
    include: pattern_reader.starting_with(/#include/).until_after(acorn.lineBreak),
    shebang: pattern_reader.starting_with(/#!/).until_after(acorn.lineBreak),
    xml: pattern_reader.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/),
    single_quote: templatable.until(/['\\\n\r\u2028\u2029]/),
    double_quote: templatable.until(/["\\\n\r\u2028\u2029]/),
    template_text: templatable.until(/[`\\$]/),
    template_expression: templatable.until(/[`}\\]/)
  };
};

Tokenizer.prototype = new BaseTokenizer();

Tokenizer.prototype._is_comment = function (current_token) {
  return current_token.type === TOKEN.COMMENT || current_token.type === TOKEN.BLOCK_COMMENT || current_token.type === TOKEN.UNKNOWN;
};

Tokenizer.prototype._is_opening = function (current_token) {
  return current_token.type === TOKEN.START_BLOCK || current_token.type === TOKEN.START_EXPR;
};

Tokenizer.prototype._is_closing = function (current_token, open_token) {
  return (current_token.type === TOKEN.END_BLOCK || current_token.type === TOKEN.END_EXPR) && open_token && (current_token.text === ']' && open_token.text === '[' || current_token.text === ')' && open_token.text === '(' || current_token.text === '}' && open_token.text === '{');
};

Tokenizer.prototype._reset = function () {
  in_html_comment = false;
};

Tokenizer.prototype._get_next_token = function (previous_token, open_token) {
  // jshint unused:false
  var token = null;

  this._readWhitespace();

  var c = this._input.peek();

  if (c === null) {
    return this._create_token(TOKEN.EOF, '');
  }

  token = token || this._read_string(c);
  token = token || this._read_word(previous_token);
  token = token || this._read_singles(c);
  token = token || this._read_comment(c);
  token = token || this._read_regexp(c, previous_token);
  token = token || this._read_xml(c, previous_token);
  token = token || this._read_non_javascript(c);
  token = token || this._read_punctuation();
  token = token || this._create_token(TOKEN.UNKNOWN, this._input.next());
  return token;
};

Tokenizer.prototype._read_word = function (previous_token) {
  var resulting_string;
  resulting_string = this.__patterns.identifier.read();

  if (resulting_string !== '') {
    resulting_string = resulting_string.replace(acorn.allLineBreaks, '\n');

    if (!(previous_token.type === TOKEN.DOT || previous_token.type === TOKEN.RESERVED && (previous_token.text === 'set' || previous_token.text === 'get')) && reserved_word_pattern.test(resulting_string)) {
      if (resulting_string === 'in' || resulting_string === 'of') {
        // hack for 'in' and 'of' operators
        return this._create_token(TOKEN.OPERATOR, resulting_string);
      }

      return this._create_token(TOKEN.RESERVED, resulting_string);
    }

    return this._create_token(TOKEN.WORD, resulting_string);
  }

  resulting_string = this.__patterns.number.read();

  if (resulting_string !== '') {
    return this._create_token(TOKEN.WORD, resulting_string);
  }
};

Tokenizer.prototype._read_singles = function (c) {
  var token = null;

  if (c === '(' || c === '[') {
    token = this._create_token(TOKEN.START_EXPR, c);
  } else if (c === ')' || c === ']') {
    token = this._create_token(TOKEN.END_EXPR, c);
  } else if (c === '{') {
    token = this._create_token(TOKEN.START_BLOCK, c);
  } else if (c === '}') {
    token = this._create_token(TOKEN.END_BLOCK, c);
  } else if (c === ';') {
    token = this._create_token(TOKEN.SEMICOLON, c);
  } else if (c === '.' && dot_pattern.test(this._input.peek(1))) {
    token = this._create_token(TOKEN.DOT, c);
  } else if (c === ',') {
    token = this._create_token(TOKEN.COMMA, c);
  }

  if (token) {
    this._input.next();
  }

  return token;
};

Tokenizer.prototype._read_punctuation = function () {
  var resulting_string = this.__patterns.punct.read();

  if (resulting_string !== '') {
    if (resulting_string === '=') {
      return this._create_token(TOKEN.EQUALS, resulting_string);
    } else {
      return this._create_token(TOKEN.OPERATOR, resulting_string);
    }
  }
};

Tokenizer.prototype._read_non_javascript = function (c) {
  var resulting_string = '';

  if (c === '#') {
    if (this._is_first_token()) {
      resulting_string = this.__patterns.shebang.read();

      if (resulting_string) {
        return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + '\n');
      }
    } // handles extendscript #includes


    resulting_string = this.__patterns.include.read();

    if (resulting_string) {
      return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + '\n');
    }

    c = this._input.next(); // Spidermonkey-specific sharp variables for circular references. Considered obsolete.

    var sharp = '#';

    if (this._input.hasNext() && this._input.testChar(digit)) {
      do {
        c = this._input.next();
        sharp += c;
      } while (this._input.hasNext() && c !== '#' && c !== '=');

      if (c === '#') {//
      } else if (this._input.peek() === '[' && this._input.peek(1) === ']') {
        sharp += '[]';

        this._input.next();

        this._input.next();
      } else if (this._input.peek() === '{' && this._input.peek(1) === '}') {
        sharp += '{}';

        this._input.next();

        this._input.next();
      }

      return this._create_token(TOKEN.WORD, sharp);
    }

    this._input.back();
  } else if (c === '<' && this._is_first_token()) {
    resulting_string = this.__patterns.html_comment_start.read();

    if (resulting_string) {
      while (this._input.hasNext() && !this._input.testChar(acorn.newline)) {
        resulting_string += this._input.next();
      }

      in_html_comment = true;
      return this._create_token(TOKEN.COMMENT, resulting_string);
    }
  } else if (in_html_comment && c === '-') {
    resulting_string = this.__patterns.html_comment_end.read();

    if (resulting_string) {
      in_html_comment = false;
      return this._create_token(TOKEN.COMMENT, resulting_string);
    }
  }

  return null;
};

Tokenizer.prototype._read_comment = function (c) {
  var token = null;

  if (c === '/') {
    var comment = '';

    if (this._input.peek(1) === '*') {
      // peek for comment /* ... */
      comment = this.__patterns.block_comment.read();
      var directives = directives_core.get_directives(comment);

      if (directives && directives.ignore === 'start') {
        comment += directives_core.readIgnored(this._input);
      }

      comment = comment.replace(acorn.allLineBreaks, '\n');
      token = this._create_token(TOKEN.BLOCK_COMMENT, comment);
      token.directives = directives;
    } else if (this._input.peek(1) === '/') {
      // peek for comment // ...
      comment = this.__patterns.comment.read();
      token = this._create_token(TOKEN.COMMENT, comment);
    }
  }

  return token;
};

Tokenizer.prototype._read_string = function (c) {
  if (c === '`' || c === "'" || c === '"') {
    var resulting_string = this._input.next();

    this.has_char_escapes = false;

    if (c === '`') {
      resulting_string += this._read_string_recursive('`', true, '${');
    } else {
      resulting_string += this._read_string_recursive(c);
    }

    if (this.has_char_escapes && this._options.unescape_strings) {
      resulting_string = unescape_string(resulting_string);
    }

    if (this._input.peek() === c) {
      resulting_string += this._input.next();
    }

    resulting_string = resulting_string.replace(acorn.allLineBreaks, '\n');
    return this._create_token(TOKEN.STRING, resulting_string);
  }

  return null;
};

Tokenizer.prototype._allow_regexp_or_xml = function (previous_token) {
  // regex and xml can only appear in specific locations during parsing
  if (previous_token.opened) var opened = previous_token.opened.previous.type === TOKEN.RESERVED && in_array(previous_token.opened.previous.text, ['if', 'while', 'for']);
  return previous_token.type === TOKEN.RESERVED && in_array(previous_token.text, ['return', 'case', 'throw', 'else', 'do', 'typeof', 'yield']) || previous_token.type === TOKEN.END_EXPR && previous_token.text === ')' && opened || in_array(previous_token.type, [TOKEN.COMMENT, TOKEN.START_EXPR, TOKEN.START_BLOCK, TOKEN.START, TOKEN.END_BLOCK, TOKEN.OPERATOR, TOKEN.EQUALS, TOKEN.EOF, TOKEN.SEMICOLON, TOKEN.COMMA]);
};

Tokenizer.prototype._read_regexp = function (c, previous_token) {
  if (c === '/' && this._allow_regexp_or_xml(previous_token)) {
    // handle regexp
    //
    var resulting_string = this._input.next();

    var esc = false;
    var in_char_class = false;

    while (this._input.hasNext() && (esc || in_char_class || this._input.peek() !== c) && !this._input.testChar(acorn.newline)) {
      resulting_string += this._input.peek();

      if (!esc) {
        esc = this._input.peek() === '\\';

        if (this._input.peek() === '[') {
          in_char_class = true;
        } else if (this._input.peek() === ']') {
          in_char_class = false;
        }
      } else {
        esc = false;
      }

      this._input.next();
    }

    if (this._input.peek() === c) {
      resulting_string += this._input.next(); // regexps may have modifiers /regexp/MOD , so fetch those, too
      // Only [gim] are valid, but if the user puts in garbage, do what we can to take it.

      resulting_string += this._input.read(acorn.identifier);
    }

    return this._create_token(TOKEN.STRING, resulting_string);
  }

  return null;
};

Tokenizer.prototype._read_xml = function (c, previous_token) {
  if (this._options.e4x && c === "<" && this._allow_regexp_or_xml(previous_token)) {
    var xmlStr = '';

    var match = this.__patterns.xml.read_match(); // handle e4x xml literals
    //


    if (match) {
      // Trim root tag to attempt to
      var rootTag = match[2].replace(/^{\s+/, '{').replace(/\s+}$/, '}');
      var isCurlyRoot = rootTag.indexOf('{') === 0;
      var depth = 0;

      while (match) {
        var isEndTag = !!match[1];
        var tagName = match[2];
        var isSingletonTag = !!match[match.length - 1] || tagName.slice(0, 8) === "![CDATA[";

        if (!isSingletonTag && (tagName === rootTag || isCurlyRoot && tagName.replace(/^{\s+/, '{').replace(/\s+}$/, '}'))) {
          if (isEndTag) {
            --depth;
          } else {
            ++depth;
          }
        }

        xmlStr += match[0];

        if (depth <= 0) {
          break;
        }

        match = this.__patterns.xml.read_match();
      } // if we didn't close correctly, keep unformatted.


      if (!match) {
        xmlStr += this._input.match(/[\s\S]*/g)[0];
      }

      xmlStr = xmlStr.replace(acorn.allLineBreaks, '\n');
      return this._create_token(TOKEN.STRING, xmlStr);
    }
  }

  return null;
};

function unescape_string(s) {
  // You think that a regex would work for this
  // return s.replace(/\\x([0-9a-f]{2})/gi, function(match, val) {
  //         return String.fromCharCode(parseInt(val, 16));
  //     })
  // However, dealing with '\xff', '\\xff', '\\\xff' makes this more fun.
  var out = '',
      escaped = 0;
  var input_scan = new InputScanner(s);
  var matched = null;

  while (input_scan.hasNext()) {
    // Keep any whitespace, non-slash characters
    // also keep slash pairs.
    matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);

    if (matched) {
      out += matched[0];
    }

    if (input_scan.peek() === '\\') {
      input_scan.next();

      if (input_scan.peek() === 'x') {
        matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
      } else if (input_scan.peek() === 'u') {
        matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
      } else {
        out += '\\';

        if (input_scan.hasNext()) {
          out += input_scan.next();
        }

        continue;
      } // If there's some error decoding, return the original string


      if (!matched) {
        return s;
      }

      escaped = parseInt(matched[1], 16);

      if (escaped > 0x7e && escaped <= 0xff && matched[0].indexOf('x') === 0) {
        // we bail out on \x7f..\xff,
        // leaving whole string escaped,
        // as it's probably completely binary
        return s;
      } else if (escaped >= 0x00 && escaped < 0x20) {
        // leave 0x00...0x1f escaped
        out += '\\' + matched[0];
        continue;
      } else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
        // single-quote, apostrophe, backslash - escape these
        out += '\\' + String.fromCharCode(escaped);
      } else {
        out += String.fromCharCode(escaped);
      }
    }
  }

  return out;
} // handle string
//


Tokenizer.prototype._read_string_recursive = function (delimiter, allow_unescaped_newlines, start_sub) {
  var current_char;
  var pattern;

  if (delimiter === '\'') {
    pattern = this.__patterns.single_quote;
  } else if (delimiter === '"') {
    pattern = this.__patterns.double_quote;
  } else if (delimiter === '`') {
    pattern = this.__patterns.template_text;
  } else if (delimiter === '}') {
    pattern = this.__patterns.template_expression;
  }

  var resulting_string = pattern.read();
  var next = '';

  while (this._input.hasNext()) {
    next = this._input.next();

    if (next === delimiter || !allow_unescaped_newlines && acorn.newline.test(next)) {
      this._input.back();

      break;
    } else if (next === '\\' && this._input.hasNext()) {
      current_char = this._input.peek();

      if (current_char === 'x' || current_char === 'u') {
        this.has_char_escapes = true;
      } else if (current_char === '\r' && this._input.peek(1) === '\n') {
        this._input.next();
      }

      next += this._input.next();
    } else if (start_sub) {
      if (start_sub === '${' && next === '$' && this._input.peek() === '{') {
        next += this._input.next();
      }

      if (start_sub === next) {
        if (delimiter === '`') {
          next += this._read_string_recursive('}', allow_unescaped_newlines, '`');
        } else {
          next += this._read_string_recursive('`', allow_unescaped_newlines, '${');
        }

        if (this._input.hasNext()) {
          next += this._input.next();
        }
      }
    }

    next += pattern.read();
    resulting_string += next;
  }

  return resulting_string;
};

module.exports.Tokenizer = Tokenizer;
module.exports.TOKEN = TOKEN;
module.exports.positionable_operators = positionable_operators.slice();
module.exports.line_starters = line_starters.slice();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var createFiles = __webpack_require__(18);

var ICONS = {
  folder: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\x10\0\0\0\x10\b\x06\0\0\0\x1F\xF3\xFFa\0\0\0\x06bKGD\0\xFF\0\xFF\0\xFF\xA0\xBD\xA7\x93\0\0\0\xAEIDAT8\x11c`\x18h\xC0\br\xC0\xAE]\xBB:\x19\x19\x19\xF3\x80l\x0E \xFE\x0B\xC4\xFB\x818\xC4\xD5\xD5\xF5#\x90\xC6\x8B\x98@\xB2@\xCD\x05\x9C\x9C\x9Cb@\r\x8C\xEF\xDF\xBFg\x07\xF2\x9F\0\xC5+\x80\x98 \x02\xBB`\xF7\xEE\xDD\xFF\t\xAADU\xF0\x03h\xC9D\x17\x17\x97\n\x16\x988\xC8v\x18\x9B\x10\r\xB4\x90\xFF\xFF\xFF\xFF/\x81\xEA*\xC0^\x002HB@\xCB@a\xC3\x0E\xD2D\x96\x01 \x8D0<j\0\x03\x03,\f~m\xDB\xB6\x8D\x0F\x160\x84hP4\x02\xD5\xFC\x04b\x06X:\x98\xC4\xCA\xCA\xFA\x0E(\xC1\f\x12$\x02\xFF\x01&\xA4^\"\xD4\xD1A\t\0\xFB$'\xA9=\x1D\xA8\x05\0\0\0\0IEND\xAEB`\x82",
  file: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\x0F\0\0\0\x0F\b\x06\0\0\0;\xD6\x95J\0\0\0\x06bKGD\0\xFF\0\xFF\0\xFF\xA0\xBD\xA7\x93\0\0\x01KIDAT(\x15\xA5R=O\x83@\x18>\x0E\xEA\x82&\xC0h\xA2\x8B\x9B.5atA\x81\xD9\x89\xFE.G\xFF@\x07\xA6\xAE|;;\xE9\xE2\xA4\x835q3\xED\xC2\xD2\x02\xE7s\xD7r\x01$.%\xCF\xFBy\xCF\xC3\xBDo\x80\x90\x03\x1Ee\xA8\x8D\xA2\xE8LU\xD5I\xB7o\x18\xC6\x97m\xDB\xDBn\x8F\xE7R\xCC\x18S\xB2,{B4\x14E\x91D\xD4\xA7 \xBE\x9B\xA6y7|\x81\x14\xE7y~U\xD7\xF5\xA3\xE7y7 K\xC4q\xFC\x80\x97]\xA3\xF1\xB3Z\xADfA\x10l\x90\x0BP\xE1\xE1\xAA\xAA\xE2\xA3\xCA\x1B\xD1\x12\xA0\x94\xE2r\xF6\x8A\xE2\xD8\xB2\xAC4\f\xC3#\xE4\x02R,\xAA\x11\x07\xE53\xDA'M\xD3|\xC3.\xB0\xFF%j\x01M\xF8\x7F\x1C\xD6\x98\xE3\x98\x1BI\x92\xA4`\x8C\xA1\xDCaT\x8C=\xA7\xD8\xF3~G!\x04\x82\x85\xEF\xFB/m\xDD\xC6Q1\xF6\xDC@\xB0nI\xBCn\xF3n\x1C\x15Ch\xC1\xA6{\xE2\x1C\xA3\xBF\xED\xF3^\x18\x15\x83\xB1\xA4\x94.\x10\t\xC6\xFF\xE0q\xCC\xA4X\xD3\xB4-\xBE3\xFF\\\x047-A\xE6\x86\xD0\xC3\x84\xF3\xDA\x8E\xFCI0\xA6\x92\xA6i\x81\x83s\x18\x83\r\xC1\xB9\x9F\xAE\xEB\xDEb\x1Aq\xCE\x1B=RQ\x14FY\x96\x7F\xFA\xBA\xAE3\xC7q\xD6=\xF2!\xC5/Udv\xAC\xDA\xFC\x88\xE6\0\0\0\0IEND\xAEB`\x82",
  beauty: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\x1E\0\0\0\x1E\b\x06\0\0\0;0\xAE\xA2\0\0\0\tpHYs\0\0\x0B\x12\0\0\x0B\x12\x01\xD2\xDD~\xFC\0\0\x035IDATH\xC7\xC5\x97]hSg\x18\xC7\x7F\xEFI\xCEINk\x97h'k#1\xF5\xC2+Y\xC9.\x06c\xDET/6z#\xA5\xF4b\x10/\xCA\x10\xB7u\x82z\xA7\x83]\xEDZd\x1F\xA4\x13&t\xB6\x11&\x83A'~\xED\xC2L+(\x0EI\x03\xE2\xCDt\xAEn5\x15\x9B\xA4\x14{\x92\x93\x8Fg\x17Q\xE8W\x9As\xD2\xC8\x1E8W\xE7}\xCF\xEF<\xFF\xE7\xFF\xBC\x1FJDhYX\x89> \x8F\x19K5\x1A\xAA\xD1\xCA\xD0\xFE\x1AFe\x87\x1D\rm)X\xDE\xDC\x0F\xFA\xE0\xE6\xC1V\xA2\xC7\x95\xCC\xA2\x87\x10\xA3\xFB\xA5\xE4M\x82\xADD\x1F*{\xC5ym\xED\xAB\x18\xE7<\x18?z\xC1\xBE\xDA\b\xBEQ\xC6=\xE0\xEBj\f\xFD\xE1O\xE0:\xFA\x05\x03\xCF\r\xF0\xDC\0\xFD\x82\x01\\\xA7\xF0}\xCA=XeO \xED\x81\xC6\xB2\x99\x87P\xB9[\x94\xFB\xAB\xC8v\xA8F\xA04TE\xE5n!\x1Du\x8D\xA6\xD6m\xA7B|\x04\xF1}\x8B\xF7w\x8D\xCA{\xB3H`\x0Ff,\xBF!\xBF\xF0\xDD$\xEAY\x7F\xCDd]\xE3\xF8G>\xDEh\xF8J\xB0\x95\x88\xA2\xB2\xC3H\xDB\x11|_y\xD0\xFE\x06\xFB\x13\xA8\xF6\xCE\"\x81\xCF\x81d\xDD\x1F\xB0\x12A(ePv\x01\xFF\xE1\xA0KsU\xA6\x90mG1\xCE\xD5\xA0\0\xFA8\xA8\x85\x10\xF0\x0BP\xBFG\xCDX\x1E\xB5t\x1E\x8AcN\xFC\xB8V\xEAB|\x041Oc\x8C\x19h\x7F\x80\xFDe\x05\xD9r\x1B\xD9z\x103\xF6xE\x86j1]\x93\xB6\xA3\xB7a)\x1C\xD5\xD8J\xF4A\xF17\xBCI/\x95\xF7\xA7\xF1\x7F\x1A]#\xABZL\xA3\xA5\xC2\0T\xA3O\xDC\xC2\xB5:\xB2%Q\xF37)\x7F\b\xD21\xB0\n\x1A)\xE5\xF4\xE7\xA5\xDC\x960\xFA8\x18g@K\x85Q\x8B\xE9Z\x9D7\x03\x06\x90\xD07`=\\%o\xA4\x94\xD3\x1Ff\xAE\xEC\xF0d.\xEF\xA2\x949\x05\xD2\xD6\x1C\\D\x9C=K\x13\x11\xFB\xDF\x9F\xCA3g\xA7d\xD2(\xCA\xA4Q\x94\x99\xB3Sb\xCF\x8E\x8AT\xDBD*\x11\x91\xA5\t\x91\xA5\x89a'\xDFS\x8E\xB6\xC5e\x99\xA6>{w\xC5\xAB\xE8\xE8]\xBA\xFA\x1F\xA0\x07\x95\xA0\xAC\x8B\xF8\x8F\x1Ch\xCD\xEE\xB4\x01\x14\xE0Q|7z\xD0\x04%\xD3k\xA0V\xE2\x98;W;\x84\xBE\xF1v\x9E\xBD\x97\x92TK\xD59c\xC7G]\xEB\xCC\x17`\xEBzn\xD7^#\xF4\xD5\x1A?\xE0\xA6\x8F7\x0B\xAD\xF5\xB9\xCA\x85\x91\xCE\x05\xA4\xBDgu\xD6\xDAz\x936\t=\x86Z\xB8\x8F\xCA\x87\xF0}\x01\xDA\xBD\0\xEA\xC5c\ngN\xD6\x07[\x89\xA0=\xEFK7\r\x05P\xB9!$\x10\xC2{\xD9\x03\x80\xE7\x01H{\0\xD4\xE1\xE5=\xBEBj\xFB\x9F\x9Fg\xE6\xAEu\x87\x9B\x86.\xDF\xE5\xB0\xEF\xE0\xBDhP\x1E\x04\xD8\x87\x19K\xBA>\xEC\xB9\x82\xD6\x96\xDC\x14\xCA:Ny\x10T\xF6\xEB\xD5\xD05`\xA3\xB3\xD8\xFB\xD6\x07O\x9FDG\xEF6\x0F}\x15\xFE\x918T^ \xDB\xC6\x9C\xB9\xFAe\x9D\xE7\xAEu\x87\x1F\xC5w\xB3\xF7RR*\x05m\xDA\xB7s\xE8\x9DV\x9E\x84\xEB\xB5S\xD0\x9E\xF7\xA5\x8D\xCEb\xB8\x901\x7F\xF5\xEF\x1A<@\x8B\xA3\xFE\xCAUs\xE0\0fl\x8C\xD7\x10\xAA\xA5w'7\xB7\x1D\xFE\xA7\xF8\x0F\x04d\x04>\xAF\xAB\x94~\0\0\0\0IEND\xAEB`\x82",
  pick: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\x1E\0\0\0\x1E\b\x06\0\0\0;0\xAE\xA2\0\0\0\tpHYs\0\0\x0B\x12\0\0\x0B\x12\x01\xD2\xDD~\xFC\0\0\x02\xACIDATH\xC7\xED\x96[H\x14q\x14\x87\xBF\xD9\xD9\xB9l\x96\xBBi\xD2v\xB5\xB2@\x13a\x11B\xE8\x86\x06\x15F\x04YP\xB9\x10\xF5\x14\xDD\x1E\x8A\xC4$\x88^\n\tI\x9F\xEAU\xAA\r\xF1\xF6\xD4\xC5\x97T2D\x13J\x14\xA2\xA0h\xCD\xC4D\\\xD6-\x99\x9D\xBD\xCC\xF4\xA0\x85\xE5\xE6FN\xD9C\xE7q~3\xF3\xCD\x99\xF3;\xE7\x7F\x04\xD34\x99\x8F\xB01O\xF1\x1F\xFC\xD7\xC2n\xC9[\xF4\x8B\x87\xC1y\x053\xDD\x8D0x\x17#\xBB\n\x87\xD7?\xDB#\xC2\x9C]\x1D\xBE\xDE\b\xCA\x01\xA4f`\x02\xE2\xDB\xC1X6\x84Z\xB6\xD2Z\xB0\xE6\xF3\x80\xD6\b\xB2\x1B\xE1s=\xA6\xC3\x8BZ.#\x8CN\xFB\x98\x1A\x10\x86\x8F\xA0T\xD6YSc\xCD\xE7\x82h\x17RS\x16\xEA\x85\x14\x84\xD0Q\xC4\x97\xC2wP\0\xF1\t\x98i\x07\xAD\xAC\xF11lo>aoQ\0P*D@\x9Cq\x97\x91\x03\x82\xD9e\xA5\xAB\xDB1W,\xC4\xC8L\xAC\x9A\x0B r\x02\x8C\xF5:Jy\x95\x95`\xBF\x19\x93%\xC2\x97I\b\xD7\xAF\x81\x91\xEF\x07\xC9m]\x1Fk>WdL\xE9\xFBP\x9F-\xF6\x97\xE5\x83~u\xD2\xC1\xD3C\xAE\x06SZ\x01x,\xEB\xE3\xF0G\xC7\xEDH@^\xDE{r\x13\0\x81\xEE\xE5lk\x8Dasd\x82tg*\x8D\x01\xB0?\x0E\x10+.\x04\xDA\xE7\x9Cq\xF8msM$ \xEF\xE9,.\xFAf\xA4P\xBF\x8B\x8E\x1D\xC5h\x03;!rn\xB2\xBEf\x06\xC4\x8A\x96$\x83\xFER\xC6\xBA\xBF\xE9\x94\xDD\x19;\xD3}h\xAB\x18\x1D\x97\xBE\xD3B\xFD.\x86\x1Ar\xC8:\xABG\x05\xA3Z\xC3\x94\x15\x84\xD1Z\xD4\xB2\xA4\xE0\xD9\x07\x88\xE6\xF3\0/:\xF7\x162\xF64c\x86\xBC\xAA\xD4O\xDE\x8D\xE7\x11Q\x8D\x17L]\n&\x1B\x95\xC93\xD6|k\x8C\xB0\xD8\xD5w>?!45/\x88\xE7f\x0F\xC0n\x1C\xDE^\xCBN'}D\xBD\xEF\xAF]\xA7\f\xDE[3C[\xB0z\x82--mq}D=\x8D\xC3\xDB\xFE;#>\xF1\xAF\x9E\xCC\xF6\xD5\x03w\x89\xF2\xA3$9\xA3l~\xD4\x16\x97\xD3\"\x0F\xD5\xB5%\xFB\xAC>\x16]65\xAE$\x12<\xB7\x9E\xA1.\rw\xC8+\x0F\xFE6\xF4\xA7\xE0hHj}wsC\x02h\x0Fi\x05c\x83r\xBA\xBE\xDF\xFAE@\xF3\x15\x1AaU{]\x99\xBB\xF8k=W\x95\xFAY\xB41\x14X\xBAk8\xC5\xA6\xC6\xB7\xE3\xF0\x06\xFF\xC4\x06\xD2+\xA7\xE9\xCE\xD4\xBC \xDA\xFB\x14r+{\xC9(\x1A\xE9\x16\x1D\xF1:\xA0\xD6\n\xE8O\xCD\x15\x19j\xA8\x90R\xA3\x97\0\xA2\xE3r\x8F\x9C\xAE\x1F\xFF\xD5\xFE\x9C\x9B\xAB\xBF\x1D\xFA\xB8\xAC\x06Z\xB7s\xFD\xDF\xAB\xFFu\xF0\x17\xA0\x1A\0\x90\xC7j\xCE\xB9\0\0\0\0IEND\xAEB`\x82",
  createNew: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\x0F\0\0\0\x0E\b\x06\0\0\0\xF0\x8AF\xEF\0\0\0\x19tEXtSoftware\0Adobe ImageReadyq\xC9e<\0\0\x03xiTXtXML:com.adobe.xmp\0\0\0\0\0<?xpacket begin=\"\xEF\xBB\xBF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.5-c021 79.155772, 2014/01/13-19:44:00        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmpMM:OriginalDocumentID=\"xmp.did:fbf0644b-fd67-4c8c-8d84-8df08ee65a3b\" xmpMM:DocumentID=\"xmp.did:3689A6CBAED911E4B510B2A52823F16C\" xmpMM:InstanceID=\"xmp.iid:3689A6CAAED911E4B510B2A52823F16C\" xmp:CreatorTool=\"Adobe Photoshop CC 2014 (Macintosh)\"> <xmpMM:DerivedFrom stRef:instanceID=\"xmp.iid:51c132ea-1a14-4ebe-b269-5d2bad84c3e3\" stRef:documentID=\"xmp.did:fbf0644b-fd67-4c8c-8d84-8df08ee65a3b\"/> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\x05\x9Ec\xD6\0\0\0\xD4IDATx\xDAb\xDC\xBE};\x03\x16\xC0\b\xC4\xB9@\x9C\t\xC4\xAD@\xBC\x04\x9B\"&\x06\xEC\x80\x15\x88\xFD\x80X\x03\x88\xBDq\xA8\xC1\xA9\x19d\xF3_(\xFB\x0F9\x9A\xFFC\xD9\xFFI\xD5\xFC\x03\x88\x7F!\xB1\xB1\x02\x16\xA8\x01f@,\x0B\xD5\xF0\x0F*.\rU\xA3\f\xF573\xD4E\xA0\xF0\xB8\x0B\xC4\xE7A\x8A\xDC\xA0\xA1\xC9\x85\xE4D\x90\"v(\xDB\x1E\x88-\xD0\xBC\xF4\x16\x88}Y\xA0\x1Cf\xA8\x0B\xFE\xE3\t\x03F46\x13H\xF3nh\xB4\xC8\x01\xF1o\xA8\xB3A\x86\x95\x03\xB1!\x10\x1F\x01\xE2\x89H\x16\x80\xF4\xDC\x869\x1B\x14\x15\x87\xB1\xD8\x16\r\xD5|\x0B\x88\xD7\x93\x12\xDA\x1C@\xCC\x86\xC4&)\xAA\xFE\xA3\xF9\x91d\xCD,HI\x15g<c\x03\xA0\x80\xDB\x02\xC4\n@\xBC\x1D\x97f\x80\0\x03\0\x17\xB7$\x89`2\xCBw\0\0\0\0IEND\xAEB`\x82",
  deleteTxt: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\n\0\0\0\x0E\b\x06\0\0\0\x16\xA3\x8D\xAB\0\0\0\x19tEXtSoftware\0Adobe ImageReadyq\xC9e<\0\0\x03xiTXtXML:com.adobe.xmp\0\0\0\0\0<?xpacket begin=\"\xEF\xBB\xBF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.5-c021 79.155772, 2014/01/13-19:44:00        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmpMM:OriginalDocumentID=\"xmp.did:fbf0644b-fd67-4c8c-8d84-8df08ee65a3b\" xmpMM:DocumentID=\"xmp.did:368B5784AED911E4B510B2A52823F16C\" xmpMM:InstanceID=\"xmp.iid:368B5783AED911E4B510B2A52823F16C\" xmp:CreatorTool=\"Adobe Photoshop CC 2014 (Macintosh)\"> <xmpMM:DerivedFrom stRef:instanceID=\"xmp.iid:51c132ea-1a14-4ebe-b269-5d2bad84c3e3\" stRef:documentID=\"xmp.did:fbf0644b-fd67-4c8c-8d84-8df08ee65a3b\"/> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\xCA7\xD7g\0\0\0\xEDIDATx\xDA\x8C\xD1=\x8A\xC2P\x14\x86a\x93\x886Q\xF1\x07]\xC1\b\x82\x95+\x90\xD9\x80\x9D\x8D\xAD\x88\x0B\xD1\xDAM\f.`\x9AT\xDA\xBA\tA\x11D\x04\xC1\x11\x0B\xFF\x93y\x0F|A\x8B\x01\xE7\xC2\xD3$\xDF9\xF7\xDC{\x9D \b\x12ZY\x8C\xB0G\x1A>\x86\x98\xDB\xCF$r\xFAQ\xC0\x14\xDF\xFA\xDED\t\x07\xDC\x93\xEAR\xC3\r\x17t\xB5\xC3\x1D)\x15\xFD\xC4\x1D}\x053p\x10%\x9E\xCB5\x16\xFC\xC2\xA7\x02'xrSG+\x9AY\xB0\x81\x0E6\xA8(|\xD2\xE1\xEC`e+r\xB5]^'\\a\x821\x96\x18\xE0\x8C\xA2\x05C\xCD\xB2\xB0\xA1\xB1U\xF7\x83\n\xAD{\xE8\xBE\f\x9D\xD2\xE0\x9EN\xEA\xE9\xDA\x9C\xF8D\xFFZ\xEF\x82\xD1_\xC1\xBD\xAE\xC4f:\xE2\xAA\x99\x1F\xF1\x13\xC6U}|h\xAE\xBA^\xAB\xA7\xEB\x89,\xB8\xC6\x0Em=\xA1\x85\xAB\xBA\x8D\x96\x1A\xAD\x7F\x05\x18\0\xDBn:\x1A\xC0\xDFY'\0\0\0\0IEND\xAEB`\x82",
  cancel: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\x1E\0\0\0\x1E\b\x06\0\0\0;0\xAE\xA2\0\0\0\tpHYs\0\0\x0B\x12\0\0\x0B\x12\x01\xD2\xDD~\xFC\0\0\x02\tIDATH\xC7\xED\x971k\xDB@\x14\xC7\xFF\xF2\t\x99`\xEA\xD8\x99<\xA4\x905`\x83!ti\xA6l\x19\xDD%\x18eQ\xD7|\x02\xFB\x1B\xF8\x13tm\x06Y\x11\xCA\xD0\x12(d\x8B\x97L\x1Db\xB0!d\x0B$\x01\x87\x80\xED\x04,#\xE5\x8E\xD7!5\x8D\x1DI'\xB9\xA5\x0E\xA5\x07\xB7\xFD\xEF\xFDx\xEF\xDE{\xF7N!\",b\xA5\xB0\xA0\xF5J\xC1\xE3f\xC5\xBF9\xAC'1\xE8\xDF\x1C\xD61nVd:%\xF4\x8E\xC7M\x03\xC0g>R\x85\xC2\xC8a\xF9\xAA.3&\x06\xB6EB\xD9Q3\x9C\x01\xF8\x88\xA5\xDD\xFDP1\x11\xBD\xDC\xAEi\x90k\xD2\x99qA\xAD\x8D[z\xBC\xB39\xEF\x1FX\x81\xDA\x9F\x9B\xF7\x0F\xAC\xC7;\x9B\xB76n\xE9\xCC\xB8 rM\"\xD74\xC2\xF4\x91\xD0#\xCD\xA3#\xCD\x93\xC2\x9FC'gd\xF0\xE9P?\xDD\xCD\x97\xF6\xDE;\\YkS\x91\xC9\x96\x86\xD8<>y\x11\xF6IxO\xB7\xB7\xD8C'7u\xE6\xAD~\x89\xF2\xA7\xEF\0\xF0\x01K\xBB_C\x93\xCB\xEFk\xEB|\xA4\x8A\xFB\x19\x03\0\xF0\xD0\xC9\xE1t{\x8B\x91Pv\xC4\xC0\xB6dP\0\xB8\xEF\xE4\xC0G\xAA\xF0\xFB\xDA\xBA4\xB9d\xC6&\x9E\xB3\xB4\xE8\t\x8F\x15d\xBA\xB0\xC4\f\xCC\xEA8\xF0b\xA3\x8Dn\xAD\x8Cy\xA0\x91\xE5$\x83\x87\xAD8\xD0\xC8\x06\xC2\xF2U]a\xE4l\x1E\x9F\x88li\xF8G\xA1\xD2\xCE\x95\x04\x9E\x04\x1A\xABW\xB3|Ugi\xD1+6\xDA\x91\xBAb\xA3\r\x96\x16\xBD8\xD0X`1\xB0-\xE1\xB1B\xB7V\x8E\xD4uke\b\x8F\x15&\xA5\xF6[\xE0$\t\x16T\xE7s\x81\xE7\xC9\xEA$\xF0\xD4<\xD0li\x88\xF7\xDFZ\bJ\xB8\xB8\xF0\x85u\xAE\xD4\xEC#\x1E\x07\xAA0r\x947\xFAjT\xA9=\xF7<h\x98\x98\x02k+\xFE\xB9\x9A\xE1l9\xC0P\x90\x07\xB2:_.\r\xA1f8\xD3V\xFCs\xF9 \xF0\x97\xDE\xE3\x85M \xAFl\xE6\xFA\xE5y\xC5\xBBv\xEA\x91\x9A\x99\xED];ur\xCD\x8AL\xA7\xFC\xFFI\xFC\xF3\xE0\x1FY\xB75\xF3KvJ\x94\0\0\0\0IEND\xAEB`\x82",
  toggle: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\x1E\0\0\0\x1E\b\x06\0\0\0;0\xAE\xA2\0\0\0\tpHYs\0\0\x0B\x12\0\0\x0B\x12\x01\xD2\xDD~\xFC\0\0\0\x94IDATH\xC7c\xFC\xFF\xFF?\xC3@\0&\x86\x01\x02\xA3\x16\x0F\x7F\x8BY0D\xBE/U```P\xA0\x92\xF9\x0F\x188\xA3\x1F\x10g1\x03C\xC2\xF7\xC7\\\xF5\xDF\x1EqSd#\x97\xDCW\x06N\xD9o\x8D\f\f\f\r\xC4Z\xCC\xF0x\xA9\x02\xC3\xCD\x0Em\x8A,V\xAF\xB8\xCA\xA0Vqm4q\r\xC6T\xCD\xC0\xC0 \x1B\xFD\x80A\xD8\xF65\xC5\x89\x8BT\x8B\x17p\xCA~;\xC0)\xFB\x8D:\xD9\t\x07`\x1C\xAD\x9DF\x8B\xCC\xD1\"s4U\x8F\x16\x99\xA3E\xE6\xA8\xC5\x03n1\0\x8C\x0F=\x8Dd\n|\xE5\0\0\0\0IEND\xAEB`\x82",
  "export": "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\x1E\0\0\0\x1E\b\x06\0\0\0;0\xAE\xA2\0\0\0\tpHYs\0\0\x0B\x12\0\0\x0B\x12\x01\xD2\xDD~\xFC\0\0\x01\x87IDATH\xC7\xED\xD6\xBFj\xC2P\x14\x06\xF0/A\x05\x11Zw\xC17(\x04\xC4\xC5\"\xB8\xB8\x88\x9B\xA3O\xE0\xE6\x9B8:\xB9\x19\xC1A\x87P:+\xA8\x8B\x8B\xE0\xAE\x10p\xC8\x96\n\xCDU\xA39\x1D\xAA6Vcn\xAE\x14\x87z K\xFE\xFDr\xB8_8W\"\"\xDC\xA3d\xDC\xA9\x1E\xF0\x7F\x84\x99\xAA\x80\xA9\xD5\x9B\xDF\xCC\xD4*\x98\xAA\xF0\xC1LU\x9C\x8D<\x02P[\xCD\xBB\x9A\xA8\xB9\x7F\xB6\xE6l\xE4\x91\x17.\xFFF\x17\x9Dd\xB4\x9F\xCD#\x14\xDB\x16E\xF0\xD5\xBC\xAB\x85b\xDBb?\x9B\xC7\xA2\x93\x8Cz\xE2D\x04\xB2\x9A\xCA\xCElYzc@ZdMZdM\xBD\x94A\xB6\xD1v\xD8\xAC\xA3\x11\x11x\x0E6\xEBh\xB6\xD1vz)\xE3\xF8\x1E\xBD1\xA0\x9D\xD9\xB2\xC8j*\xEE{e\x008t:\xA9\xA4\x8F\x1F\xB4\x9C\xC61,\xE4$\xDE\xCE\x0F\x9D\x0E\x0B9i9\x8D\x1F\xCFO*\xE9\x9F\xCEyS\xCD\x8B{\xA1\xBE\xA9\x96#N&Q\xD2\x99R\x1F\x07\xC6\xFDP\xA5>F\xA2\xA439\xE2d\xCE;\x8E\x96'\"x 4Z\x9E\xB8\xAFI'\xD3\xC9\x95l\xF7z\x1F\xEA\xE9\xC5\xC4\xEB{\x8F\xB6\x9F\xA17\0\x10E\xCF\xE1\x008\0\x88\xA2\x97a\x0E<\xFCl\x03\0\xEC\x8F\xB0\x10\xEA\rs\xE0\x97\x8A\x17\xBD\xFE;\xF9\x04\xEE\x16\xD4\x7F:q\xE2AQ\xBE\xB1\xE8\x83\x8B\xA0\xFC\xF3\xD8\x03\x17E\xAF\x87\xCB'p\0\x84\xD1\xE0\xF0\xE9\xCC\x86(*\x06\x7F\xE3\xF1\xFD\x12\x98\xA2\x9B\x05\xE9\xB1\xA1\x7F\xC0\x7FU_Tu\x9B2JV\xAF;\0\0\0\0IEND\xAEB`\x82",
  "import": "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\x1E\0\0\0\x1E\b\x06\0\0\0;0\xAE\xA2\0\0\0\tpHYs\0\0\x0B\x12\0\0\x0B\x12\x01\xD2\xDD~\xFC\0\0\x01`IDATH\xC7\xED\xD6=\x8A\xC2@\x14\x07\xF0\xE7C\x82id\xCB\x85\x80\xE0\x01\x84\x01\xB1\xD1\x13X\xAC\x85)\xF7\x04v\xDE\xC6\xCA.\n\x16Y\xC4\x15\xEB\x14bc\x93\x13\xB8\x10\x116]\x1A3\xE2\xC7\xBC-V\xF73b2\xA3\xD8\xE4\xC143\x93\xFC\xE6\xCF$\xCCd\x88\b\xEEQ\bw\xAA\x14N\xE1\x9BU6\xF1\x13\xBC\xC7\xC4\x16g\0\0\xA8\x89*\xE8\xCF\xEE\xED\x13\x1F\xD1\x95]\xD0WvA\x17[\x9C\x01\xEF\xB1\xDB&\xFE\x81\xBA\xAD\xCA\xA9W7Lo\x86\xD0K\x9C\x1C\x15Pp[\x15\x90M\x8E\xB2\xA8*\x8E*\xA8\n\x8E\xAA\xA8,\x8E\xD7@epL\x8A\xE6K\x01\xD4\x97C\xAA/\x87\x94/\x05\xD28&Ek\x13\x87\xF6\xEB\xECx\xBF\xCE\x8Ek\x13G\x1AG\x194Wl6r\xC5fC\x05G\x19\xF4\xD4\xAF\x82#\0\x80\f*\x89?\xC4\xFA\x8F/\xA1q\xF1\xB3{\x8C\x9A\xA8\x1A\xA6\xC7Yg\x9E\x18\xBD\x84\xB3\xCE\x1C\f\xD3\xE3\xC7\x93\xEC{\x80\x88>[h\xB1C\xD0\x0F\xBD\xEE\x94\x9C\xB2O;\x7F \xF8\xC2\x1E}\x8D\xC7l|a\x8Fv\xFE@8e\x9F\xBC\xEE\x94\x0EA?\xA4\xD0b\x7F\xE7e~]o\x8F\x1F\x19jB\xDF\xBC\xEB\xAFq\x92F\xD5\xE6\xEDe\x94{\xE4Ob\x8B\xFC\xEC\x99\xFDo\xD5\xA1\xC5(\xB4\xDAI\x93F\xBC\xA7\x1D\x954:qz\xD9K\xE1+\xD6\x07\xC8\xDA\xF2\xD9\x9Fs\x8B,\0\0\0\0IEND\xAEB`\x82",
  "switch": "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\r\0\0\0\r\b\x06\0\0\0r\xEB\xE4|\0\0\0\x06bKGD\0\xFF\0\xFF\0\xFF\xA0\xBD\xA7\x93\0\0\x01GIDAT(\x15\xAD\x90?K\xC4@\x10\xC57\x9B`\xE0\xB0I@\xF0\x1B\x88\n\x16b/\x18\x0E\x12\b\"\xFA\x05\xC4\xCE^\xC4\xCA^l\x04\x1Bm\xFC\0\xA9cs\xE1\n{A\x10\x14\x14E9\xFC\xD3\xA8\xC1\xC2&p\x89\xBF\xD93G\xD0+\r\xEF\xED\xBE\x99\x9D\xC9\xBE\x1DK\xA9\xC1\x97$\x89\xEDy\xDELY\x96cUU\xBD\x84a\xF8:8\xF9\xBB\xEA:E\xC3\x01\xFARk}n\xDB\xF6]\x96e\xD3\xC4#a\x9A\xBA\xDD\xEE<\xA7\x9B\xB0F\x0Bq\bG\xC2\x91l\xBF\xDF_\xB1,\xCB\x16\xDD\xE0R\x9A\xA6\x9E\xEB\xBA\x93Xn\xC1\xF7(\x8A\x1E\x15\x9F\xB9\t;\xC7\xE8/8\x04\xEF:\xA1a])u-\x96\x1D\xC7\xB9\xEFt:\x01\xB1\xB2d\x11\xF2\x86\x1Dn\xDB\x16\r?\xD1k\xFC\xFD\f=\x0Ek\xDC\xE4y>g\xECI\x86`\x9Fa\x9CRh\xA6\xC7\xED!\xF9f\x03\xA1\x9A\xA2f\xD6\xD8\x93\xC8\xF7\xFD#\xF6zz\x0FX\xBA\"\xEE\xC1!\xB0\x9C\xB5\xDB\xED\x0B-\x19\xBC.\x90\xD8\x10\xFDC\x97\x1B\xF7\xC8m\x11\xBFa5G?\xA1\x8D}\x07!Xf\xD1\xB0\x89\xC5\xA2(V\xE38\x9Eh&E\x9BB\xFC\x8F\x9C\x1E\r\xB9\x14\xFD\xA6i\n\x82\xE0\x19\x0B\xBB\x1C~\xB0K\xE1-Zb\xB6\x7F\xC27<\x07t\x05\xD1Y\x16\xAF\0\0\0\0IEND\xAEB`\x82",
  switchXMP: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\r\0\0\0\r\b\x06\0\0\0r\xEB\xE4|\0\0\n?iCCPAfter Effects ICC Profile\0\0H\x89\x9D\x96wTS\xD9\x16\x87\xCF\xBD7\xBDP\x92\x10\x8A\x94\xD0khR\x02H\r\xBDH\x91.*1\t\x10J\xC0\x90\0\"6DTpDQ\x91\xA6\b2(\xE0\x80\xA3C\x91\xB1\"\x8A\x85\x01Q\xB1\xEB\x04\x19D\xD4qp\x14\x1B\x96Id\xAD\x19\xDF\xBCy\xEF\xCD\x9B\xDF\x1F\xF7~k\x9F\xBD\xCF\xDDg\xEF}\xD6\xBA\0\x90\xFC\x83\x05\xC2LX\t\x80\f\xA1X\x14\xE1\xE7\xC5\x88\x8D\x8Bg`\x07\x01\f\xF0\0\x03l\0\xE0p\xB3\xB3B\x16\xF8F\x02\x99\x02|\xD8\x8Cl\x99\x13\xF8\x17\xBD\xBA\x0E \xF9\xFB*\xD3?\x8C\xC1\0\xFF\x9F\x94\xB9Y\"1\0P\x98\x8C\xE7\xF2\xF8\xD9\\\x19\x17\xC98=W\x9C%\xB7O\xC9\x98\xB64M\xCE0J\xCE\"Y\x822V\x93s\xF2,[|\xF6\x99e\x0F9\xF32\x84<\x19\xCBs\xCE\xE2e\xF0\xE4\xDC'\xE3\x8D9\x12\xBE\x8C\x91`\x19\x17\xE7\b\xF8\xB92\xBE&c\x83tI\x86@\xC6o\xE4\xB1\x19|N6\0(\x92\xDC.\xE6sSdl-c\x92(2\x82-\xE3y\0\xE0H\xC9_\xF0\xD2/X\xCC\xCF\x13\xCB\x0F\xC5\xCE\xCCZ.\x12$\xA7\x88\x19&\\S\x86\x8D\x93\x13\x8B\xE1\xCF\xCFM\xE7\x8B\xC5\xCC0\x0E7\x8D#\xE21\xD8\x99\x19Y\x1C\xE1r\0f\xCF\xFCY\x14ym\x19\xB2\";\xD88980m-m\xBE(\xD4\x7F]\xFC\x9B\x92\xF7v\x96^\x84\x7F\xEE\x19D\x1F\xF8\xC3\xF6W~\x99\r\0\xB0\xA6e\xB5\xD9\xFA\x87mi\x15\0]\xEB\x01P\xBB\xFD\x87\xCD`/\0\x8A\xB2\xBEu\x0E}q\x1E\xBA|^R\xC4\xE2,g+\xAB\xDC\xDC\\K\x01\x9Fk)/\xE8\xEF\xFA\x9F\x0E\x7FC_|\xCFR\xBE\xDD\xEF\xE5ax\xF3\x938\x92t1C^7nfz\xA6D\xC4\xC8\xCE\xE2p\xF9\f\xE6\x9F\x87\xF8\x1F\x07\xFEu\x1E\x16\x11\xFC$\xBE\x88/\x94ED\xCB\xA6L L\x96\xB5[\xC8\x13\x88\x05\x99B\x86@\xF8\x9F\x9A\xF8\x0F\xC3\xFE\xA4\xD9\xB9\x96\x89\xDA\xF8\x11\xD0\x96X\x02\xA5!\x1A@~\x1E\0(*\x11 \t{d+\xD0\xEF}\x0B\xC6G\x03\xF9\xCD\x8B\xD1\x99\x98\x9D\xFB\xCF\x82\xFE}W\xB8L\xFE\xC8\x16$\x7F\x8EcGD2\xB8\x12Q\xCE\xEC\x9A\xFCZ\x024 \0E@\x03\xEA@\x1B\xE8\x03\x13\xC0\x04\xB6\xC0\x11\xB8\0\x0F\xE0\x03\x02A(\x88\x04q`1\xE0\x82\x14\x90\x01D \x17\x14\x80\xB5\xA0\x18\x94\x82\xAD`'\xA8\x06u\xA0\x114\x836p\x18t\x81c\xE048\x07.\x81\xCB`\x04\xDC\x01R0\x0E\x9E\x80)\xF0\n\xCC@\x10\x84\x85\xC8\x10\x15R\x87t C\xC8\x1C\xB2\x85X\x90\x1B\xE4\x03\x05C\x11P\x1C\x94\b%CBH\x02\x15@\xEB\xA0R\xA8\x1C\xAA\x86\xEA\xA1f\xE8[\xE8(t\x1A\xBA\0\rC\xB7\xA0Qh\x12\xFA\x15z\x07#0\t\xA6\xC1Z\xB0\x11l\x05\xB3`O8\b\x8E\x84\x17\xC1\xC9\xF028\x1F.\x82\xB7\xC0\x95p\x03|\x10\xEE\x84O\xC3\x97\xE0\x11X\n?\x81\xA7\x11\x80\x10\x11:\xA2\x8B0\x11\x16\xC2FB\x91x$\t\x11!\xAB\x90\x12\xA4\x02i@\xDA\x90\x1E\xA4\x1F\xB9\x8AH\x91\xA7\xC8[\x14\x06EE1PL\x94\x0B\xCA\x1F\x15\x85\xE2\xA2\x96\xA1V\xA16\xA3\xAAQ\x07P\x9D\xA8>\xD4U\xD4(j\n\xF5\x11MFk\xA2\xCD\xD1\xCE\xE8\0t,:\x19\x9D\x8B.FW\xA0\x9B\xD0\x1D\xE8\xB3\xE8\x11\xF48\xFA\x15\x06\x83\xA1c\x8C1\x8E\x18\x7FL\x1C&\x15\xB3\x02\xB3\x19\xB3\x1B\xD3\x8E9\x85\x19\xC6\x8Ca\xA6\xB1X\xAC:\xD6\x1C\xEB\x8A\r\xC5r\xB0bl1\xB6\n{\x10{\x12{\x05;\x8E}\x83#\xE2tp\xB68_\\<N\x88+\xC4U\xE0Zp'pWp\x13\xB8\x19\xBC\x12\xDE\x10\xEF\x8C\x0F\xC5\xF3\xF0\xCB\xF1e\xF8F|\x0F~\b?\x8E\x9F!(\x13\x8C\t\xAE\x84HB*a-\xA1\x92\xD0F8K\xB8KxA$\x12\xF5\x88N\xC4p\xA2\x80\xB8\x86XI<D<O\x1C%\xBE%QHf$6)\x81$!m!\xED'\x9D\"\xDD\"\xBD \x93\xC9Fd\x0Fr<YL\xDEBn&\x9F!\xDF'\xBFQ\xA0*X*\x04(\xF0\x14V+\xD4(t*\\Qx\xA6\x88W4T\xF4T\\\xAC\x98\xAFX\xA1xDqH\xF1\xA9\x12^\xC9H\x89\xAD\xC4QZ\xA5T\xA3tT\xE9\x86\xD2\xB42U\xD9F9T9Cy\xB3r\x8B\xF2\x05\xE5G\x14,\xC5\x88\xE2C\xE1Q\x8A(\xFB(g(cT\x84\xAAOeS\xB9\xD4u\xD4F\xEAY\xEA8\rC3\xA6\x05\xD0Ri\xA5\xB4oh\x83\xB4)\x15\x8A\x8A\x9DJ\xB4J\x9EJ\x8D\xCAq\x15)\x1D\xA1\x1B\xD1\x03\xE8\xE9\xF42\xFAa\xFAu\xFA;U-UOU\xBE\xEA&\xD56\xD5+\xAA\xAF\xD5\xE6\xA8y\xA8\xF1\xD5J\xD4\xDA\xD5F\xD4\xDE\xA93\xD4}\xD4\xD3\xD4\xB7\xA9w\xA9\xDF\xD3@i\x98i\x84k\xE4j\xEC\xD18\xAB\xF1t\x0Em\x8E\xCB\x1C\xEE\x9C\x929\x87\xE7\xDC\xD6\x845\xCD4#4Wh\xEE\xD3\x1C\xD0\x9C\xD6\xD2\xD6\xF2\xD3\xCA\xD2\xAA\xD2:\xA3\xF5T\x9B\xAE\xED\xA1\x9D\xAA\xBDC\xFB\x84\xF6\xA4\x0EU\xC7MG\xA0\xB3C\xE7\xA4\xCEc\x86\n\xC3\x93\x91\xCE\xA8d\xF41\xA6t5u\xFDu%\xBA\xF5\xBA\x83\xBA3z\xC6zQz\x85z\xEDz\xF7\xF4\t\xFA,\xFD$\xFD\x1D\xFA\xBD\xFAS\x06:\x06!\x06\x05\x06\xAD\x06\xB7\r\xF1\x86,\xC3\x14\xC3]\x86\xFD\x86\xAF\x8D\x8C\x8Db\x8C6\x18u\x19=2V3\x0E0\xCE7n5\xBEkB6q7Yf\xD2`r\xCD\x14c\xCA2M3\xDDmz\xD9\f6\xB37K1\xAB1\x1B2\x87\xCD\x1D\xCC\x05\xE6\xBB\xCD\x87-\xD0\x16N\x16B\x8B\x06\x8B\x1BL\x12\xD3\x93\x99\xC3le\x8EZ\xD2-\x83-\x0B-\xBB,\x9FY\x19X\xC5[m\xB3\xEA\xB7\xFAhmo\x9Dn\xDDh}\xC7\x86b\x13hSh\xD3c\xF3\xAB\xAD\x99-\xD7\xB6\xC6\xF6\xDA\\\xF2\\\xDF\xB9\xAB\xE7v\xCF}ngn\xC7\xB7\xDBcw\xD3\x9Ej\x1Fb\xBF\xC1\xBE\xD7\xFE\x83\x83\xA3\x83\xC8\xA1\xCDa\xD2\xD1\xC01\xD1\xB1\xD6\xF1\x06\x8B\xC6\ncmf\x9DwB;y9\xADv:\xE6\xF4\xD6\xD9\xC1Y\xEC|\xD8\xF9\x17\x17\xA6K\x9AK\x8B\xCB\xA3y\xC6\xF3\xF8\xF3\x1A\xE7\x8D\xB9\xEA\xB9r\\\xEB]\xA5n\f\xB7D\xB7\xBDnRw]w\x8E{\x83\xFB\x03\x0F}\x0F\x9EG\x93\xC7\x84\xA7\xA9g\xAA\xE7A\xCFg^\xD6^\"\xAF\x0E\xAF\xD7lg\xF6J\xF6)o\xC4\xDB\xCF\xBB\xC4{\xD0\x87\xE2\x13\xE5S\xEDs\xDFW\xCF7\xD9\xB7\xD5w\xCA\xCF\xDEo\x85\xDF)\x7F\xB4\x7F\x90\xFF6\xFF\x1B\x01Z\x01\xDC\x80\xE6\x80\xA9@\xC7\xC0\x95\x81}A\xA4\xA0\x05A\xD5A\x0F\x82\xCD\x82E\xC1=!pH`\xC8\xF6\x90\xBB\xF3\r\xE7\x0B\xE7w\x85\x82\xD0\x80\xD0\xED\xA1\xF7\xC2\x8C\xC3\x96\x85}\x1F\x8E\t\x0F\x0B\xAF\t\x7F\x18a\x13Q\x10\xD1\xBF\x80\xBA`\xC9\x82\x96\x05\xAF\"\xBD\"\xCB\"\xEFD\x99DI\xA2z\xA3\x15\xA3\x13\xA2\x9B\xA3_\xC7x\xC7\x94\xC7Hc\xADbW\xC6^\x8A\xD3\x88\x13\xC4u\xC7c\xE3\xA3\xE3\x9B\xE2\xA7\x17\xFA,\xDC\xB9p<\xC1>\xA18\xE1\xFA\"\xE3Ey\x8B.,\xD6X\x9C\xBE\xF8\xF8\x12\xC5%\x9C%G\x12\xD1\x891\x89-\x89\xEF9\xA1\x9C\x06\xCE\xF4\xD2\x80\xA5\xB5K\xA7\xB8l\xEE.\xEE\x13\x9E\x07o\x07o\x92\xEF\xCA/\xE7O$\xB9&\x95'=JvM\xDE\x9E<\x99\xE2\x9ER\x91\xF2T\xC0\x16T\x0B\x9E\xA7\xFA\xA7\xD6\xA5\xBEN\x0BM\xDB\x9F\xF6)=&\xBD=\x03\x97\x91\x98qTH\x11\xA6\t\xFB2\xB53\xF32\x87\xB3\xCC\xB3\x8A\xB3\xA4\xCB\x9C\x97\xED\\6%\n\x125eC\xD9\x8B\xB2\xBB\xC54\xD9\xCF\xD4\x80\xC4D\xB2^2\x9A\xE3\x96S\x93\xF3&7:\xF7H\x9Er\x9E0o`\xB9\xD9\xF2M\xCB'\xF2}\xF3\xBF^\x81Z\xC1]\xD1[\xA0[\xB0\xB6`t\xA5\xE7\xCA\xFAU\xD0\xAA\xA5\xABzW\xEB\xAF.Z=\xBE\xC6o\xCD\x81\xB5\x84\xB5ik\x7F(\xB4.,/|\xB9.f]O\x91V\xD1\x9A\xA2\xB1\xF5~\xEB[\x8B\x15\x8AE\xC576\xB8l\xA8\xDB\x88\xDA(\xD88\xB8i\xEE\xA6\xAAM\x1FKx%\x17K\xADK+J\xDFo\xE6n\xBE\xF8\x95\xCDW\x95_}\xDA\x92\xB4e\xB0\xCC\xA1l\xCFV\xCCV\xE1\xD6\xEB\xDB\xDC\xB7\x1D(W.\xCF/\x1F\xDB\x1E\xB2\xBDs\x07cG\xC9\x8E\x97;\x97\xEC\xBCPaWQ\xB7\x8B\xB0K\xB2KZ\x19\\\xD9]eP\xB5\xB5\xEA}uJ\xF5H\x8DWM{\xADf\xED\xA6\xDA\xD7\xBBy\xBB\xAF\xEC\xF1\xD8\xD3V\xA7UWZ\xF7n\xAF`\xEF\xCDz\xBF\xFA\xCE\x06\xA3\x86\x8A}\x98}9\xFB\x1E6F7\xF6\x7F\xCD\xFA\xBA\xB9I\xA3\xA9\xB4\xE9\xC3~\xE1~\xE9\x81\x88\x03}\xCD\x8E\xCD\xCD-\x9A-e\xADp\xAB\xA4u\xF2`\xC2\xC1\xCB\xDFx\x7F\xD3\xDD\xC6l\xABo\xA7\xB7\x97\x1E\x02\x87$\x87\x1E\x7F\x9B\xF8\xED\xF5\xC3A\x87{\x8F\xB0\x8E\xB4}g\xF8]m\x07\xB5\xA3\xA4\x13\xEA\\\xDE9\xD5\x95\xD2%\xED\x8E\xEB\x1E>\x1Ax\xB4\xB7\xC7\xA5\xA7\xE3{\xCB\xEF\xF7\x1F\xD3=Vs\\\xE5x\xD9\t\xC2\x89\xA2\x13\x9FN\xE6\x9F\x9C>\x95u\xEA\xE9\xE9\xE4\xD3c\xBDKz\xEF\x9C\x89=s\xAD/\xBCo\xF0l\xD0\xD9\xF3\xE7|\xCF\x9D\xE9\xF7\xEC?y\xDE\xF5\xFC\xB1\x0B\xCE\x17\x8E^d]\xEC\xBA\xE4p\xA9s\xC0~\xA0\xE3\x07\xFB\x1F:\x06\x1D\x06;\x87\x1C\x87\xBA/;]\xEE\x19\x9E7|\xE2\x8A\xFB\x95\xD3W\xBD\xAF\x9E\xBB\x16p\xED\xD2\xC8\xFC\x91\xE1\xEBQ\xD7o\xDEH\xB8!\xBD\xC9\xBB\xF9\xE8V\xFA\xAD\xE7\xB7sn\xCF\xDCYs\x17}\xB7\xE4\x9E\xD2\xBD\x8A\xFB\x9A\xF7\x1B~4\xFD\xB1]\xEA =>\xEA=:\xF0`\xC1\x83;c\xDC\xB1'?e\xFF\xF4~\xBC\xE8!\xF9a\xC5\x84\xCED\xF3#\xDBG\xC7&}'/?^\xF8x\xFCI\xD6\x93\x99\xA7\xC5?+\xFF\\\xFB\xCC\xE4\xD9w\xBFx\xFC20\x15;5\xFE\\\xF4\xFC\xD3\xAF\x9B_\xA8\xBF\xD8\xFF\xD2\xEEe\xEFt\xD8\xF4\xFDW\x19\xAFf^\x97\xBCQ\x7Fs\xE0-\xEBm\xFF\xBB\x98w\x133\xB9\xEF\xB1\xEF+?\x98~\xE8\xF9\x18\xF4\xF1\xEE\xA7\x8CO\x9F~\x03\xF7\x84\xF3\xFB\x82l\x04\x17\0\0\0\tpHYs\0\0\0\x01\0\0\0\x01\0O%\xC4\xD6\0\0\0$zTXtCreator\0\0\b\x99sL\xC9OJUpL+I-RpMKKM.)\x06\0Az\x06\xCEjz\x15\xC5\0\0\0\xDDIDAT(\x91\x8D\xD2A+\xC4A\x18\xC7\xF1\xCF\xB2\xAD\x92\x8B\x83\xDAw \xDC\xE4\xAE\xB88H\xF2\n\xE4\xE6.\xC7=\xC8E.JD\xC9\xBBp\xF2\x16\x94R\x1CD6Y.\xEC\x9E\x9C\xB9<\xFA?&\xDB\xFA\xD543\xCF\xCCw\x9Eg~3\xB5\xB3\xE5/\xA1aL\xA3\x81W\xBC\xE9\xA3\xA14>\xC0\r\xAE\xF0\x80\xA9A\xD0,6S|\x14\x87\xFD\xA0z\xF4\xABQ^\xD6\x02\xC6\xD1\x8CC>\xD0\xCE\x99N\xF1Y@\xE7X\xC7]\x94\xFC\x88\xC5\fu\xB0\x8B^\xB46\x8E\xB1S\\\xE5\b\x8Dz\n\xEE\xE3B\xE5\xDE\x12\xC6\x8A\xEC\x93\x98\xC9\xEE\x9D\xA8\xDC{\xC2-\x9E\x0B\xE8\x12\xD7?\xD0\x1C6\xD2\xE2\b\xF6\xB0\x85\xF7(\xF9\x05\xDBT\xEE\xAD\xF8\xFDf0\x8F5L\x14\xF1\x81\xEE\xF5J C\x1D\xB4\xD0\x8D\x8D\xF71\xFFS\xB5\xF4\xF7\xFE\xADo\xF2\xE2.\xB7(\xFC\xF6[\0\0\0\0IEND\xAEB`\x82",
  info: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\x05\0\0\0\x0E\b\x06\0\0\0\xE7\xA8\xD6&\0\0\0\x19tEXtSoftware\0Adobe ImageReadyq\xC9e<\0\0\x03xiTXtXML:com.adobe.xmp\0\0\0\0\0<?xpacket begin=\"\xEF\xBB\xBF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.5-c021 79.155772, 2014/01/13-19:44:00        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmpMM:OriginalDocumentID=\"xmp.did:fbf0644b-fd67-4c8c-8d84-8df08ee65a3b\" xmpMM:DocumentID=\"xmp.did:368B578CAED911E4B510B2A52823F16C\" xmpMM:InstanceID=\"xmp.iid:368B578BAED911E4B510B2A52823F16C\" xmp:CreatorTool=\"Adobe Photoshop CC 2014 (Macintosh)\"> <xmpMM:DerivedFrom stRef:instanceID=\"xmp.iid:fa5d1657-36de-4438-aa48-6667c9756f37\" stRef:documentID=\"xmp.did:fbf0644b-fd67-4c8c-8d84-8df08ee65a3b\"/> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\x03\x83\x06R\0\0\0wIDATx\xDAb\xD9\xBE};?\x03\x03\xC3> \xD6\x03\xE2NOO\xCF\x1A& \xC3\x02\x88\x8D\x80\x98\x05\x88S\x81\x98\x01$x\x04\x88\xB7\x01\xF1# ng\xC0\x05X\x80f>@\xE2_\x03\x9A\xE9\x052\xE7\x0F\x10+\x011#\x10\x7F\0\x9B\t\x94Q\x01\xD2\xC7\x90\xB53A\xE9?\xD8\x04\x19\xA8(\xC8\bt\xE7d \x1D\x0F\xC4\xBC@\xFC\x1E\x887\x81\xDC\x99\x83\xA4H\x10\xA4\0 \xC0\0\xED\xEC\x18I\t\x11\x03\xE9\0\0\0\0IEND\xAEB`\x82",
  refresh: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\r\0\0\0\x0E\b\x06\0\0\0\xF4\x7F\x96\xD2\0\0\0\x19tEXtSoftware\0Adobe ImageReadyq\xC9e<\0\0\x03xiTXtXML:com.adobe.xmp\0\0\0\0\0<?xpacket begin=\"\xEF\xBB\xBF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.5-c021 79.155772, 2014/01/13-19:44:00        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmpMM:OriginalDocumentID=\"xmp.did:fbf0644b-fd67-4c8c-8d84-8df08ee65a3b\" xmpMM:DocumentID=\"xmp.did:1B1F4E54AED711E4B510B2A52823F16C\" xmpMM:InstanceID=\"xmp.iid:1B1F4E53AED711E4B510B2A52823F16C\" xmp:CreatorTool=\"Adobe Photoshop CC 2014 (Macintosh)\"> <xmpMM:DerivedFrom stRef:instanceID=\"xmp.iid:51c132ea-1a14-4ebe-b269-5d2bad84c3e3\" stRef:documentID=\"xmp.did:fbf0644b-fd67-4c8c-8d84-8df08ee65a3b\"/> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\xD4\xC1y\x10\0\0\x01\x04IDATx\xDA\x8C\xD2\xBDKBQ\x18\xC7\xF1\xEBE\xA4\xC1\x06_&q\x10\x84\xC0\xD1\xC5\xD1\xD5\x1A\x1B5h\xD2\xC8\xAD\xFE\x06\xC1Yq\x11Q\xD0\xA0\xA1%\xDD\xAEK\xD0T\x83.m\xB9\x8B\xA2$\xD8\x14\x14\x88\xDF'\x1E\xE1p\x11\xBD\x0F|\xE0r\xCE\xF9\xDD\xF3\xEAs\x1C\xC7\xDASw\xC8\xA2\x8E7\xFC\x99\x9D\xB6kp\x04\x19\\\xE0\x12}T\x117\x07\xF9\x8D\xEFs\xDC\xE3\x04Im\x0B!\x87'L\xDD3\xE5\xD1\xC4'\xCAx\xC6\x1A\r\xED\x1B\xBBgJ\xA3\x82\x9A\x92\xEA`\x80Wl\xDC\x1B\x96PI\xFFT3\xDA?\xAC\x03e\xEBL\x8F\x96\xB7\xF2\xEDB\xB2\xF1\x89\x87@\x02\xB7\x88\xD9\xBA\xE6\x80\x87\xD0\x19\x8A\x88J\xE8[\xEF\xE6X\xA50\xC3\\BC=\x8C\xD3\x03\x810\xAE\xF0\x8E\x95\x84z\xBA\xC46\x82{\x02\xF2JZ\xF8\xD11\x1B9\xF2\x05n\xF4n^\xD0\xC5HOJ\x96]\xC0\xAF\x8EY\xFE\x1F\xA1\xF1`c\xB8\xD6g\x13\xD2\xB6/]\xFE\xC3. \xB5\x15`\0k\x944;Z^\x02\x9E\0\0\0\0IEND\xAEB`\x82",
  rename: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\x0E\0\0\0\x0E\b\x06\0\0\0\x1FH-\xD1\0\0\0\x19tEXtSoftware\0Adobe ImageReadyq\xC9e<\0\0\x03xiTXtXML:com.adobe.xmp\0\0\0\0\0<?xpacket begin=\"\xEF\xBB\xBF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.5-c021 79.155772, 2014/01/13-19:44:00        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmpMM:OriginalDocumentID=\"xmp.did:fbf0644b-fd67-4c8c-8d84-8df08ee65a3b\" xmpMM:DocumentID=\"xmp.did:3689A6CFAED911E4B510B2A52823F16C\" xmpMM:InstanceID=\"xmp.iid:3689A6CEAED911E4B510B2A52823F16C\" xmp:CreatorTool=\"Adobe Photoshop CC 2014 (Macintosh)\"> <xmpMM:DerivedFrom stRef:instanceID=\"xmp.iid:51c132ea-1a14-4ebe-b269-5d2bad84c3e3\" stRef:documentID=\"xmp.did:fbf0644b-fd67-4c8c-8d84-8df08ee65a3b\"/> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>-\xA7\xE3\xCE\0\0\0\xF5IDATx\xDAb\xDC\xBE};\x03\x11\x80\x1B\x88\xB3\x81\xD8\x13\x88'\x03\xF1z\x16\x06\xE2@\b\x10wB\xD9\xEA@\xFC\x8F\x89\x80\x066 v\x01\xE2\xA7@\xBC\x1B*&\t\xC4\t\x844\x16\x02\xF1\x06\xA8\xE6L >\x0E\xC4\xCF\x80x:>\xA7\x82\xFCT\x0B\xF5_\x19\x103\x03q\x15T\xEE\0\x13\x1EM\x9DPM \xC0\br\x1E\x10?\x02i\x02\t`\xD3\x98\x89\xA6\t\x04^A\r{\x04\x13@wj2\x10w`\xD1\x94\x03\xC4\xAB\x91\x15\xC24r\x02q\x04\x10w\x031\x1F\x92\xFC{h\0\xADFw\x16L\xA3\x1C\x10\xF7\x01\xB1\0\x9A\xA6< ^\x86-\x10@~T\x82j\x98\x06\xC4\x7F\xA0\xE2_\x80\xB8\b\x88\x97\xE0\nr\x90\x8D\xFE@\x1C\r\xC41@\xFC\x1B\xEA\x9F: ^\x80/\x82\x99\xA0I\xC8\x18\x88\xE7\0\xF1^ \xF6\x06\xE2\x99\x84\xD2 \x0B4\x04\x8F\x01\xF1a ~\x03\xC4\xD7\x89I\xBC\0\x01\x06\0\"q+\xA5\xCE\x94\xCD\xEA\0\0\0\0IEND\xAEB`\x82",
  saveFile: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\x11\0\0\0\x0E\b\x06\0\0\0\xC9\xED\xF7\xB4\0\0\0\x19tEXtSoftware\0Adobe ImageReadyq\xC9e<\0\0\x03xiTXtXML:com.adobe.xmp\0\0\0\0\0<?xpacket begin=\"\xEF\xBB\xBF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.5-c021 79.155772, 2014/01/13-19:44:00        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmpMM:OriginalDocumentID=\"xmp.did:fbf0644b-fd67-4c8c-8d84-8df08ee65a3b\" xmpMM:DocumentID=\"xmp.did:3689A6C7AED911E4B510B2A52823F16C\" xmpMM:InstanceID=\"xmp.iid:3689A6C6AED911E4B510B2A52823F16C\" xmp:CreatorTool=\"Adobe Photoshop CC 2014 (Macintosh)\"> <xmpMM:DerivedFrom stRef:instanceID=\"xmp.iid:51c132ea-1a14-4ebe-b269-5d2bad84c3e3\" stRef:documentID=\"xmp.did:fbf0644b-fd67-4c8c-8d84-8df08ee65a3b\"/> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\x94h\x1E\xC4\0\0\x01&IDATx\xDA\x94\xD3=/\x04Q\x14\xC6\xF1\x19\x86\xAC\xC5\x16\xA2Yb\xBD5\x1A\x89\x82\xED|\x03\x15\xA2\xD0\xCA&\x12\x05\x9F\x80\x82B\xA2R\x10\x85R\xA7\x95L\xB2\xA2\xD0o\xA1\xDCj7Q(\x14\x12\x11/!k\xFDO\xF2\x14\x93\x9B{\x17'\xF957g\x9E9\xF7\xDE\x998M\xD3\xC8Sk8D\x1FZ\xC8\xE1\x12\xDB\xF8t\x9B\x93\xC8_\xB3\x98t\xD6\x16\xD0\xEF\x0B\xE9\n\x84\xB4<km\xF4\xF8\x9A\xDD\x902\xCE\xB5\x1D\xB7\xA6p\x8A\x8A\xB6\x17\xDC\xCE46\x02\xD3\ra\x051.:Mr\x85\xE3(\\w\xD8\xC7{\xA7\x90\x17\xEC\xE9&\xDC\xBA\xC7\x8E\x82~=\xD8gl\xA2\x9AY{\xC4\x16n}\xE3\xD9\x99\x8C\xE8,\xDA\x12k\xA2\x03\f`\x1CGh`\x11\xDFz\xB6\x1BO\xA8[\xC8\xAEnc\x10o\xFA\x0E\xEC*\xAFq\xA2\xE61\xDC\xA07\x13b\xBBx\xC0\xBA\x85\xCC\xA0\xA0\xF1\xE7PT\xD3*&t\x16K\np+o\xFD\x96\xF6\xA1=\xDBg^s\x9A\xE6\xB1\x1C\b\xB0z\xC5W\xA2\xB1\x86q\x86\xD1\xE8\x7Fe\xE1I\xA2\xB7\xDB\x7FQ\xCAL\xF5\x97\xB2s\xAB\xA3\xF9#\xC0\0\x8E47\x86\x10\x19\xAD5\0\0\0\0IEND\xAEB`\x82",
  none: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\x10\0\0\0\x10\b\x06\0\0\0\x1F\xF3\xFFa\0\0\n?iCCPAfter Effects ICC Profile\0\0H\x89\x9D\x96wTS\xD9\x16\x87\xCF\xBD7\xBDP\x92\x10\x8A\x94\xD0khR\x02H\r\xBDH\x91.*1\t\x10J\xC0\x90\0\"6DTpDQ\x91\xA6\b2(\xE0\x80\xA3C\x91\xB1\"\x8A\x85\x01Q\xB1\xEB\x04\x19D\xD4qp\x14\x1B\x96Id\xAD\x19\xDF\xBCy\xEF\xCD\x9B\xDF\x1F\xF7~k\x9F\xBD\xCF\xDDg\xEF}\xD6\xBA\0\x90\xFC\x83\x05\xC2LX\t\x80\f\xA1X\x14\xE1\xE7\xC5\x88\x8D\x8Bg`\x07\x01\f\xF0\0\x03l\0\xE0p\xB3\xB3B\x16\xF8F\x02\x99\x02|\xD8\x8Cl\x99\x13\xF8\x17\xBD\xBA\x0E \xF9\xFB*\xD3?\x8C\xC1\0\xFF\x9F\x94\xB9Y\"1\0P\x98\x8C\xE7\xF2\xF8\xD9\\\x19\x17\xC98=W\x9C%\xB7O\xC9\x98\xB64M\xCE0J\xCE\"Y\x822V\x93s\xF2,[|\xF6\x99e\x0F9\xF32\x84<\x19\xCBs\xCE\xE2e\xF0\xE4\xDC'\xE3\x8D9\x12\xBE\x8C\x91`\x19\x17\xE7\b\xF8\xB92\xBE&c\x83tI\x86@\xC6o\xE4\xB1\x19|N6\0(\x92\xDC.\xE6sSdl-c\x92(2\x82-\xE3y\0\xE0H\xC9_\xF0\xD2/X\xCC\xCF\x13\xCB\x0F\xC5\xCE\xCCZ.\x12$\xA7\x88\x19&\\S\x86\x8D\x93\x13\x8B\xE1\xCF\xCFM\xE7\x8B\xC5\xCC0\x0E7\x8D#\xE21\xD8\x99\x19Y\x1C\xE1r\0f\xCF\xFCY\x14ym\x19\xB2\";\xD88980m-m\xBE(\xD4\x7F]\xFC\x9B\x92\xF7v\x96^\x84\x7F\xEE\x19D\x1F\xF8\xC3\xF6W~\x99\r\0\xB0\xA6e\xB5\xD9\xFA\x87mi\x15\0]\xEB\x01P\xBB\xFD\x87\xCD`/\0\x8A\xB2\xBEu\x0E}q\x1E\xBA|^R\xC4\xE2,g+\xAB\xDC\xDC\\K\x01\x9Fk)/\xE8\xEF\xFA\x9F\x0E\x7FC_|\xCFR\xBE\xDD\xEF\xE5ax\xF3\x938\x92t1C^7nfz\xA6D\xC4\xC8\xCE\xE2p\xF9\f\xE6\x9F\x87\xF8\x1F\x07\xFEu\x1E\x16\x11\xFC$\xBE\x88/\x94ED\xCB\xA6L L\x96\xB5[\xC8\x13\x88\x05\x99B\x86@\xF8\x9F\x9A\xF8\x0F\xC3\xFE\xA4\xD9\xB9\x96\x89\xDA\xF8\x11\xD0\x96X\x02\xA5!\x1A@~\x1E\0(*\x11 \t{d+\xD0\xEF}\x0B\xC6G\x03\xF9\xCD\x8B\xD1\x99\x98\x9D\xFB\xCF\x82\xFE}W\xB8L\xFE\xC8\x16$\x7F\x8EcGD2\xB8\x12Q\xCE\xEC\x9A\xFCZ\x024 \0E@\x03\xEA@\x1B\xE8\x03\x13\xC0\x04\xB6\xC0\x11\xB8\0\x0F\xE0\x03\x02A(\x88\x04q`1\xE0\x82\x14\x90\x01D \x17\x14\x80\xB5\xA0\x18\x94\x82\xAD`'\xA8\x06u\xA0\x114\x836p\x18t\x81c\xE048\x07.\x81\xCB`\x04\xDC\x01R0\x0E\x9E\x80)\xF0\n\xCC@\x10\x84\x85\xC8\x10\x15R\x87t C\xC8\x1C\xB2\x85X\x90\x1B\xE4\x03\x05C\x11P\x1C\x94\b%CBH\x02\x15@\xEB\xA0R\xA8\x1C\xAA\x86\xEA\xA1f\xE8[\xE8(t\x1A\xBA\0\rC\xB7\xA0Qh\x12\xFA\x15z\x07#0\t\xA6\xC1Z\xB0\x11l\x05\xB3`O8\b\x8E\x84\x17\xC1\xC9\xF028\x1F.\x82\xB7\xC0\x95p\x03|\x10\xEE\x84O\xC3\x97\xE0\x11X\n?\x81\xA7\x11\x80\x10\x11:\xA2\x8B0\x11\x16\xC2FB\x91x$\t\x11!\xAB\x90\x12\xA4\x02i@\xDA\x90\x1E\xA4\x1F\xB9\x8AH\x91\xA7\xC8[\x14\x06EE1PL\x94\x0B\xCA\x1F\x15\x85\xE2\xA2\x96\xA1V\xA16\xA3\xAAQ\x07P\x9D\xA8>\xD4U\xD4(j\n\xF5\x11MFk\xA2\xCD\xD1\xCE\xE8\0t,:\x19\x9D\x8B.FW\xA0\x9B\xD0\x1D\xE8\xB3\xE8\x11\xF48\xFA\x15\x06\x83\xA1c\x8C1\x8E\x18\x7FL\x1C&\x15\xB3\x02\xB3\x19\xB3\x1B\xD3\x8E9\x85\x19\xC6\x8Ca\xA6\xB1X\xAC:\xD6\x1C\xEB\x8A\r\xC5r\xB0bl1\xB6\n{\x10{\x12{\x05;\x8E}\x83#\xE2tp\xB68_\\<N\x88+\xC4U\xE0Zp'pWp\x13\xB8\x19\xBC\x12\xDE\x10\xEF\x8C\x0F\xC5\xF3\xF0\xCB\xF1e\xF8F|\x0F~\b?\x8E\x9F!(\x13\x8C\t\xAE\x84HB*a-\xA1\x92\xD0F8K\xB8KxA$\x12\xF5\x88N\xC4p\xA2\x80\xB8\x86XI<D<O\x1C%\xBE%QHf$6)\x81$!m!\xED'\x9D\"\xDD\"\xBD \x93\xC9Fd\x0Fr<YL\xDEBn&\x9F!\xDF'\xBFQ\xA0*X*\x04(\xF0\x14V+\xD4(t*\\Qx\xA6\x88W4T\xF4T\\\xAC\x98\xAFX\xA1xDqH\xF1\xA9\x12^\xC9H\x89\xAD\xC4QZ\xA5T\xA3tT\xE9\x86\xD2\xB42U\xD9F9T9Cy\xB3r\x8B\xF2\x05\xE5G\x14,\xC5\x88\xE2C\xE1Q\x8A(\xFB(g(cT\x84\xAAOeS\xB9\xD4u\xD4F\xEAY\xEA8\rC3\xA6\x05\xD0Ri\xA5\xB4oh\x83\xB4)\x15\x8A\x8A\x9DJ\xB4J\x9EJ\x8D\xCAq\x15)\x1D\xA1\x1B\xD1\x03\xE8\xE9\xF42\xFAa\xFAu\xFA;U-UOU\xBE\xEA&\xD56\xD5+\xAA\xAF\xD5\xE6\xA8y\xA8\xF1\xD5J\xD4\xDA\xD5F\xD4\xDE\xA93\xD4}\xD4\xD3\xD4\xB7\xA9w\xA9\xDF\xD3@i\x98i\x84k\xE4j\xEC\xD18\xAB\xF1t\x0Em\x8E\xCB\x1C\xEE\x9C\x929\x87\xE7\xDC\xD6\x845\xCD4#4Wh\xEE\xD3\x1C\xD0\x9C\xD6\xD2\xD6\xF2\xD3\xCA\xD2\xAA\xD2:\xA3\xF5T\x9B\xAE\xED\xA1\x9D\xAA\xBDC\xFB\x84\xF6\xA4\x0EU\xC7MG\xA0\xB3C\xE7\xA4\xCEc\x86\n\xC3\x93\x91\xCE\xA8d\xF41\xA6t5u\xFDu%\xBA\xF5\xBA\x83\xBA3z\xC6zQz\x85z\xEDz\xF7\xF4\t\xFA,\xFD$\xFD\x1D\xFA\xBD\xFAS\x06:\x06!\x06\x05\x06\xAD\x06\xB7\r\xF1\x86,\xC3\x14\xC3]\x86\xFD\x86\xAF\x8D\x8C\x8Db\x8C6\x18u\x19=2V3\x0E0\xCE7n5\xBEkB6q7Yf\xD2`r\xCD\x14c\xCA2M3\xDDmz\xD9\f6\xB37K1\xAB1\x1B2\x87\xCD\x1D\xCC\x05\xE6\xBB\xCD\x87-\xD0\x16N\x16B\x8B\x06\x8B\x1BL\x12\xD3\x93\x99\xC3le\x8EZ\xD2-\x83-\x0B-\xBB,\x9FY\x19X\xC5[m\xB3\xEA\xB7\xFAhmo\x9Dn\xDDh}\xC7\x86b\x13hSh\xD3c\xF3\xAB\xAD\x99-\xD7\xB6\xC6\xF6\xDA\\\xF2\\\xDF\xB9\xAB\xE7v\xCF}ngn\xC7\xB7\xDBcw\xD3\x9Ej\x1Fb\xBF\xC1\xBE\xD7\xFE\x83\x83\xA3\x83\xC8\xA1\xCDa\xD2\xD1\xC01\xD1\xB1\xD6\xF1\x06\x8B\xC6\ncmf\x9DwB;y9\xADv:\xE6\xF4\xD6\xD9\xC1Y\xEC|\xD8\xF9\x17\x17\xA6K\x9AK\x8B\xCB\xA3y\xC6\xF3\xF8\xF3\x1A\xE7\x8D\xB9\xEA\xB9r\\\xEB]\xA5n\f\xB7D\xB7\xBDnRw]w\x8E{\x83\xFB\x03\x0F}\x0F\x9EG\x93\xC7\x84\xA7\xA9g\xAA\xE7A\xCFg^\xD6^\"\xAF\x0E\xAF\xD7lg\xF6J\xF6)o\xC4\xDB\xCF\xBB\xC4{\xD0\x87\xE2\x13\xE5S\xEDs\xDFW\xCF7\xD9\xB7\xD5w\xCA\xCF\xDEo\x85\xDF)\x7F\xB4\x7F\x90\xFF6\xFF\x1B\x01Z\x01\xDC\x80\xE6\x80\xA9@\xC7\xC0\x95\x81}A\xA4\xA0\x05A\xD5A\x0F\x82\xCD\x82E\xC1=!pH`\xC8\xF6\x90\xBB\xF3\r\xE7\x0B\xE7w\x85\x82\xD0\x80\xD0\xED\xA1\xF7\xC2\x8C\xC3\x96\x85}\x1F\x8E\t\x0F\x0B\xAF\t\x7F\x18a\x13Q\x10\xD1\xBF\x80\xBA`\xC9\x82\x96\x05\xAF\"\xBD\"\xCB\"\xEFD\x99DI\xA2z\xA3\x15\xA3\x13\xA2\x9B\xA3_\xC7x\xC7\x94\xC7Hc\xADbW\xC6^\x8A\xD3\x88\x13\xC4u\xC7c\xE3\xA3\xE3\x9B\xE2\xA7\x17\xFA,\xDC\xB9p<\xC1>\xA18\xE1\xFA\"\xE3Ey\x8B.,\xD6X\x9C\xBE\xF8\xF8\x12\xC5%\x9C%G\x12\xD1\x891\x89-\x89\xEF9\xA1\x9C\x06\xCE\xF4\xD2\x80\xA5\xB5K\xA7\xB8l\xEE.\xEE\x13\x9E\x07o\x07o\x92\xEF\xCA/\xE7O$\xB9&\x95'=JvM\xDE\x9E<\x99\xE2\x9ER\x91\xF2T\xC0\x16T\x0B\x9E\xA7\xFA\xA7\xD6\xA5\xBEN\x0BM\xDB\x9F\xF6)=&\xBD=\x03\x97\x91\x98qTH\x11\xA6\t\xFB2\xB53\xF32\x87\xB3\xCC\xB3\x8A\xB3\xA4\xCB\x9C\x97\xED\\6%\n\x125eC\xD9\x8B\xB2\xBB\xC54\xD9\xCF\xD4\x80\xC4D\xB2^2\x9A\xE3\x96S\x93\xF3&7:\xF7H\x9Er\x9E0o`\xB9\xD9\xF2M\xCB'\xF2}\xF3\xBF^\x81Z\xC1]\xD1[\xA0[\xB0\xB6`t\xA5\xE7\xCA\xFAU\xD0\xAA\xA5\xABzW\xEB\xAF.Z=\xBE\xC6o\xCD\x81\xB5\x84\xB5ik\x7F(\xB4.,/|\xB9.f]O\x91V\xD1\x9A\xA2\xB1\xF5~\xEB[\x8B\x15\x8AE\xC576\xB8l\xA8\xDB\x88\xDA(\xD88\xB8i\xEE\xA6\xAAM\x1FKx%\x17K\xADK+J\xDFo\xE6n\xBE\xF8\x95\xCDW\x95_}\xDA\x92\xB4e\xB0\xCC\xA1l\xCFV\xCCV\xE1\xD6\xEB\xDB\xDC\xB7\x1D(W.\xCF/\x1F\xDB\x1E\xB2\xBDs\x07cG\xC9\x8E\x97;\x97\xEC\xBCPaWQ\xB7\x8B\xB0K\xB2KZ\x19\\\xD9]eP\xB5\xB5\xEA}uJ\xF5H\x8DWM{\xADf\xED\xA6\xDA\xD7\xBBy\xBB\xAF\xEC\xF1\xD8\xD3V\xA7UWZ\xF7n\xAF`\xEF\xCDz\xBF\xFA\xCE\x06\xA3\x86\x8A}\x98}9\xFB\x1E6F7\xF6\x7F\xCD\xFA\xBA\xB9I\xA3\xA9\xB4\xE9\xC3~\xE1~\xE9\x81\x88\x03}\xCD\x8E\xCD\xCD-\x9A-e\xADp\xAB\xA4u\xF2`\xC2\xC1\xCB\xDFx\x7F\xD3\xDD\xC6l\xABo\xA7\xB7\x97\x1E\x02\x87$\x87\x1E\x7F\x9B\xF8\xED\xF5\xC3A\x87{\x8F\xB0\x8E\xB4}g\xF8]m\x07\xB5\xA3\xA4\x13\xEA\\\xDE9\xD5\x95\xD2%\xED\x8E\xEB\x1E>\x1Ax\xB4\xB7\xC7\xA5\xA7\xE3{\xCB\xEF\xF7\x1F\xD3=Vs\\\xE5x\xD9\t\xC2\x89\xA2\x13\x9FN\xE6\x9F\x9C>\x95u\xEA\xE9\xE9\xE4\xD3c\xBDKz\xEF\x9C\x89=s\xAD/\xBCo\xF0l\xD0\xD9\xF3\xE7|\xCF\x9D\xE9\xF7\xEC?y\xDE\xF5\xFC\xB1\x0B\xCE\x17\x8E^d]\xEC\xBA\xE4p\xA9s\xC0~\xA0\xE3\x07\xFB\x1F:\x06\x1D\x06;\x87\x1C\x87\xBA/;]\xEE\x19\x9E7|\xE2\x8A\xFB\x95\xD3W\xBD\xAF\x9E\xBB\x16p\xED\xD2\xC8\xFC\x91\xE1\xEBQ\xD7o\xDEH\xB8!\xBD\xC9\xBB\xF9\xE8V\xFA\xAD\xE7\xB7sn\xCF\xDCYs\x17}\xB7\xE4\x9E\xD2\xBD\x8A\xFB\x9A\xF7\x1B~4\xFD\xB1]\xEA =>\xEA=:\xF0`\xC1\x83;c\xDC\xB1'?e\xFF\xF4~\xBC\xE8!\xF9a\xC5\x84\xCED\xF3#\xDBG\xC7&}'/?^\xF8x\xFCI\xD6\x93\x99\xA7\xC5?+\xFF\\\xFB\xCC\xE4\xD9w\xBFx\xFC20\x15;5\xFE\\\xF4\xFC\xD3\xAF\x9B_\xA8\xBF\xD8\xFF\xD2\xEEe\xEFt\xD8\xF4\xFDW\x19\xAFf^\x97\xBCQ\x7Fs\xE0-\xEBm\xFF\xBB\x98w\x133\xB9\xEF\xB1\xEF+?\x98~\xE8\xF9\x18\xF4\xF1\xEE\xA7\x8CO\x9F~\x03\xF7\x84\xF3\xFB\x82l\x04\x17\0\0\0\tpHYs\0\0\0\x01\0\0\0\x01\0O%\xC4\xD6\0\0\0$zTXtCreator\0\0\b\x99sL\xC9OJUpL+I-RpMKKM.)\x06\0Az\x06\xCEjz\x15\xC5\0\0\x01+IDAT8\x8D\xA5\xD3O+\x05a\x14\xC7\xF1\xCFL\x8A\x92\xD7A\be\xA1dg\xEDOll\x85\x955o@Y ;\xB1b\xAD\xB8]\xBC\x03\x14\x1B\xE1\x86X\xCA[ \x0B\xBA\xD7b\x9E\xCBc\x9A\x8BrV3g\xCE\xF9>\xBFs\x9E\xDF$\xEB\xC3U\xFF\x89\xA6\x06\xF9\x14\x03h\x0F\xEF\x0F8G\xED/\x80\t\xAC\xA2\x05w!\xD7\x85\x17,\xA0\xFC\x13\xE0\0\x83\x98\xC3!\xEA\xF3\xA5\x18\xC7\x06:\xB1\\\x04\x98\xC4P\xC8=G\xCD\xC2s\t\x17a\x94\xBB\xBA\x924\x14$X\xC14F\xB0\x8B\xD1\x82\xF1\x1E1\x1FFLb@?\x9Aq\x84\xE3 w\x07c\x05\x902Z\xD1\x17\x03\xDAQ\xF1\xB5\xE5\x93\0\xD9.\x80Tq\x8D\x8E\x18P\x141d\xBCQQ}\x89\x0FAR\xE2\xFB]\x9F\x04\x05\x07\x91\xFC\x14\xBD\xB8\x8F\x01\x17x\x95-\xF00w\xC8i\x0E\x92\xCA<q\x15\x03jX\xC4\x16.\xF1T\0\x99\xC2\x1E\xDE1SW\x1A\xEF`\x1F\x9B8\x0B3\xC7\xDFR\xB4\xE1MvK\x9Fn\xCC;q\t\xB7X\x93\xB9.o\xE5Y\xBFX\x99\xCCq%t\xA3'\xE4*\xB8)\xA8m\xF87\n\r\x85Mq|\0\xB3\tG\xCE\x8D\x16 \x80\0\0\0\0IEND\xAEB`\x82",
  noneTint: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\x10\0\0\0\x10\b\x06\0\0\0\x1F\xF3\xFFa\0\0\0\x06bKGD\0\xFF\0\xFF\0\xFF\xA0\xBD\xA7\x93\0\0\x01\x17IDAT8\x11\xAD\x91\xB1N\x02A\x10\x86O\xDF\xC3X\xD2\x18\x12\x13\x12\x1A\xB1\xC2\x16\fT\x867!\xE1U|\x05C#\x05%\x8D5\xA1!H\x07Z\xA8\x05O\xA0\xDFw9\xBC=\xD8;\n\xBD\xFC\xDF\xCD\xEC\xEC\xEC\xDC\xCC^\x92\xFC\xF19+9\x7FN\xBC\t5PK^/\xF0\r'\xD5#c\r[\x98f\xBCaWp\x0F\x95\x1A\xB3\xFB\x01&\xDA\x05n*}\x0B[t\x98F\"\xAF>\xB1/\xD8A\x1Bb\xBA$\xF8\x0E~\0\x93\xCB\xBB\xB0\xED\x0E\xA1[\xB0\x90>\xEE\x91\xEC\xC4q<\xF3\xBB\xD9\xC0\xDB\xC0>\xD8\xC2\xB7H\x17{(\xC7\xF1N\xAE\xC3\x8D\x01\x8Bg\bUUdB\xE2\x03$V\xD3\xC6\x98\x11t\xD6\xC7\xCCb\xCA\xE5\b\xB6\xB5\x1F!\xCC\xBCa\xE18\x16\xC3M?jna\x04\x0F\xAE\xD9-\xBB\xB8\xB0H\xF4\x129\x9B\xF8\x1B\xAD|\xE1\"\xC2\x1D\xB1\x1D\x84\xDD\xB0,j\xC4\xD2\xBFa\xBB\xE1\xFD\xE8\xFB\xE5O\xF6\x9F\xA0R&\xBE\x92\xB1\x85i\x86\x9D\xAD\xF0-\x8C\xC9\xE5\xEC\xF9\xAA\xE8]\xB1\xAC\x83\x9A\xF3Z\xC0\xFF\xEB\x07g\x833\xAA\xB8w\xB4\xD9\0\0\0\0IEND\xAEB`\x82",
  undo: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0\x18\0\0\0\x18\b\x06\0\0\0\xE0w=\xF8\0\0\n?iCCPAfter Effects ICC Profile\0\0H\x89\x9D\x96wTS\xD9\x16\x87\xCF\xBD7\xBDP\x92\x10\x8A\x94\xD0khR\x02H\r\xBDH\x91.*1\t\x10J\xC0\x90\0\"6DTpDQ\x91\xA6\b2(\xE0\x80\xA3C\x91\xB1\"\x8A\x85\x01Q\xB1\xEB\x04\x19D\xD4qp\x14\x1B\x96Id\xAD\x19\xDF\xBCy\xEF\xCD\x9B\xDF\x1F\xF7~k\x9F\xBD\xCF\xDDg\xEF}\xD6\xBA\0\x90\xFC\x83\x05\xC2LX\t\x80\f\xA1X\x14\xE1\xE7\xC5\x88\x8D\x8Bg`\x07\x01\f\xF0\0\x03l\0\xE0p\xB3\xB3B\x16\xF8F\x02\x99\x02|\xD8\x8Cl\x99\x13\xF8\x17\xBD\xBA\x0E \xF9\xFB*\xD3?\x8C\xC1\0\xFF\x9F\x94\xB9Y\"1\0P\x98\x8C\xE7\xF2\xF8\xD9\\\x19\x17\xC98=W\x9C%\xB7O\xC9\x98\xB64M\xCE0J\xCE\"Y\x822V\x93s\xF2,[|\xF6\x99e\x0F9\xF32\x84<\x19\xCBs\xCE\xE2e\xF0\xE4\xDC'\xE3\x8D9\x12\xBE\x8C\x91`\x19\x17\xE7\b\xF8\xB92\xBE&c\x83tI\x86@\xC6o\xE4\xB1\x19|N6\0(\x92\xDC.\xE6sSdl-c\x92(2\x82-\xE3y\0\xE0H\xC9_\xF0\xD2/X\xCC\xCF\x13\xCB\x0F\xC5\xCE\xCCZ.\x12$\xA7\x88\x19&\\S\x86\x8D\x93\x13\x8B\xE1\xCF\xCFM\xE7\x8B\xC5\xCC0\x0E7\x8D#\xE21\xD8\x99\x19Y\x1C\xE1r\0f\xCF\xFCY\x14ym\x19\xB2\";\xD88980m-m\xBE(\xD4\x7F]\xFC\x9B\x92\xF7v\x96^\x84\x7F\xEE\x19D\x1F\xF8\xC3\xF6W~\x99\r\0\xB0\xA6e\xB5\xD9\xFA\x87mi\x15\0]\xEB\x01P\xBB\xFD\x87\xCD`/\0\x8A\xB2\xBEu\x0E}q\x1E\xBA|^R\xC4\xE2,g+\xAB\xDC\xDC\\K\x01\x9Fk)/\xE8\xEF\xFA\x9F\x0E\x7FC_|\xCFR\xBE\xDD\xEF\xE5ax\xF3\x938\x92t1C^7nfz\xA6D\xC4\xC8\xCE\xE2p\xF9\f\xE6\x9F\x87\xF8\x1F\x07\xFEu\x1E\x16\x11\xFC$\xBE\x88/\x94ED\xCB\xA6L L\x96\xB5[\xC8\x13\x88\x05\x99B\x86@\xF8\x9F\x9A\xF8\x0F\xC3\xFE\xA4\xD9\xB9\x96\x89\xDA\xF8\x11\xD0\x96X\x02\xA5!\x1A@~\x1E\0(*\x11 \t{d+\xD0\xEF}\x0B\xC6G\x03\xF9\xCD\x8B\xD1\x99\x98\x9D\xFB\xCF\x82\xFE}W\xB8L\xFE\xC8\x16$\x7F\x8EcGD2\xB8\x12Q\xCE\xEC\x9A\xFCZ\x024 \0E@\x03\xEA@\x1B\xE8\x03\x13\xC0\x04\xB6\xC0\x11\xB8\0\x0F\xE0\x03\x02A(\x88\x04q`1\xE0\x82\x14\x90\x01D \x17\x14\x80\xB5\xA0\x18\x94\x82\xAD`'\xA8\x06u\xA0\x114\x836p\x18t\x81c\xE048\x07.\x81\xCB`\x04\xDC\x01R0\x0E\x9E\x80)\xF0\n\xCC@\x10\x84\x85\xC8\x10\x15R\x87t C\xC8\x1C\xB2\x85X\x90\x1B\xE4\x03\x05C\x11P\x1C\x94\b%CBH\x02\x15@\xEB\xA0R\xA8\x1C\xAA\x86\xEA\xA1f\xE8[\xE8(t\x1A\xBA\0\rC\xB7\xA0Qh\x12\xFA\x15z\x07#0\t\xA6\xC1Z\xB0\x11l\x05\xB3`O8\b\x8E\x84\x17\xC1\xC9\xF028\x1F.\x82\xB7\xC0\x95p\x03|\x10\xEE\x84O\xC3\x97\xE0\x11X\n?\x81\xA7\x11\x80\x10\x11:\xA2\x8B0\x11\x16\xC2FB\x91x$\t\x11!\xAB\x90\x12\xA4\x02i@\xDA\x90\x1E\xA4\x1F\xB9\x8AH\x91\xA7\xC8[\x14\x06EE1PL\x94\x0B\xCA\x1F\x15\x85\xE2\xA2\x96\xA1V\xA16\xA3\xAAQ\x07P\x9D\xA8>\xD4U\xD4(j\n\xF5\x11MFk\xA2\xCD\xD1\xCE\xE8\0t,:\x19\x9D\x8B.FW\xA0\x9B\xD0\x1D\xE8\xB3\xE8\x11\xF48\xFA\x15\x06\x83\xA1c\x8C1\x8E\x18\x7FL\x1C&\x15\xB3\x02\xB3\x19\xB3\x1B\xD3\x8E9\x85\x19\xC6\x8Ca\xA6\xB1X\xAC:\xD6\x1C\xEB\x8A\r\xC5r\xB0bl1\xB6\n{\x10{\x12{\x05;\x8E}\x83#\xE2tp\xB68_\\<N\x88+\xC4U\xE0Zp'pWp\x13\xB8\x19\xBC\x12\xDE\x10\xEF\x8C\x0F\xC5\xF3\xF0\xCB\xF1e\xF8F|\x0F~\b?\x8E\x9F!(\x13\x8C\t\xAE\x84HB*a-\xA1\x92\xD0F8K\xB8KxA$\x12\xF5\x88N\xC4p\xA2\x80\xB8\x86XI<D<O\x1C%\xBE%QHf$6)\x81$!m!\xED'\x9D\"\xDD\"\xBD \x93\xC9Fd\x0Fr<YL\xDEBn&\x9F!\xDF'\xBFQ\xA0*X*\x04(\xF0\x14V+\xD4(t*\\Qx\xA6\x88W4T\xF4T\\\xAC\x98\xAFX\xA1xDqH\xF1\xA9\x12^\xC9H\x89\xAD\xC4QZ\xA5T\xA3tT\xE9\x86\xD2\xB42U\xD9F9T9Cy\xB3r\x8B\xF2\x05\xE5G\x14,\xC5\x88\xE2C\xE1Q\x8A(\xFB(g(cT\x84\xAAOeS\xB9\xD4u\xD4F\xEAY\xEA8\rC3\xA6\x05\xD0Ri\xA5\xB4oh\x83\xB4)\x15\x8A\x8A\x9DJ\xB4J\x9EJ\x8D\xCAq\x15)\x1D\xA1\x1B\xD1\x03\xE8\xE9\xF42\xFAa\xFAu\xFA;U-UOU\xBE\xEA&\xD56\xD5+\xAA\xAF\xD5\xE6\xA8y\xA8\xF1\xD5J\xD4\xDA\xD5F\xD4\xDE\xA93\xD4}\xD4\xD3\xD4\xB7\xA9w\xA9\xDF\xD3@i\x98i\x84k\xE4j\xEC\xD18\xAB\xF1t\x0Em\x8E\xCB\x1C\xEE\x9C\x929\x87\xE7\xDC\xD6\x845\xCD4#4Wh\xEE\xD3\x1C\xD0\x9C\xD6\xD2\xD6\xF2\xD3\xCA\xD2\xAA\xD2:\xA3\xF5T\x9B\xAE\xED\xA1\x9D\xAA\xBDC\xFB\x84\xF6\xA4\x0EU\xC7MG\xA0\xB3C\xE7\xA4\xCEc\x86\n\xC3\x93\x91\xCE\xA8d\xF41\xA6t5u\xFDu%\xBA\xF5\xBA\x83\xBA3z\xC6zQz\x85z\xEDz\xF7\xF4\t\xFA,\xFD$\xFD\x1D\xFA\xBD\xFAS\x06:\x06!\x06\x05\x06\xAD\x06\xB7\r\xF1\x86,\xC3\x14\xC3]\x86\xFD\x86\xAF\x8D\x8C\x8Db\x8C6\x18u\x19=2V3\x0E0\xCE7n5\xBEkB6q7Yf\xD2`r\xCD\x14c\xCA2M3\xDDmz\xD9\f6\xB37K1\xAB1\x1B2\x87\xCD\x1D\xCC\x05\xE6\xBB\xCD\x87-\xD0\x16N\x16B\x8B\x06\x8B\x1BL\x12\xD3\x93\x99\xC3le\x8EZ\xD2-\x83-\x0B-\xBB,\x9FY\x19X\xC5[m\xB3\xEA\xB7\xFAhmo\x9Dn\xDDh}\xC7\x86b\x13hSh\xD3c\xF3\xAB\xAD\x99-\xD7\xB6\xC6\xF6\xDA\\\xF2\\\xDF\xB9\xAB\xE7v\xCF}ngn\xC7\xB7\xDBcw\xD3\x9Ej\x1Fb\xBF\xC1\xBE\xD7\xFE\x83\x83\xA3\x83\xC8\xA1\xCDa\xD2\xD1\xC01\xD1\xB1\xD6\xF1\x06\x8B\xC6\ncmf\x9DwB;y9\xADv:\xE6\xF4\xD6\xD9\xC1Y\xEC|\xD8\xF9\x17\x17\xA6K\x9AK\x8B\xCB\xA3y\xC6\xF3\xF8\xF3\x1A\xE7\x8D\xB9\xEA\xB9r\\\xEB]\xA5n\f\xB7D\xB7\xBDnRw]w\x8E{\x83\xFB\x03\x0F}\x0F\x9EG\x93\xC7\x84\xA7\xA9g\xAA\xE7A\xCFg^\xD6^\"\xAF\x0E\xAF\xD7lg\xF6J\xF6)o\xC4\xDB\xCF\xBB\xC4{\xD0\x87\xE2\x13\xE5S\xEDs\xDFW\xCF7\xD9\xB7\xD5w\xCA\xCF\xDEo\x85\xDF)\x7F\xB4\x7F\x90\xFF6\xFF\x1B\x01Z\x01\xDC\x80\xE6\x80\xA9@\xC7\xC0\x95\x81}A\xA4\xA0\x05A\xD5A\x0F\x82\xCD\x82E\xC1=!pH`\xC8\xF6\x90\xBB\xF3\r\xE7\x0B\xE7w\x85\x82\xD0\x80\xD0\xED\xA1\xF7\xC2\x8C\xC3\x96\x85}\x1F\x8E\t\x0F\x0B\xAF\t\x7F\x18a\x13Q\x10\xD1\xBF\x80\xBA`\xC9\x82\x96\x05\xAF\"\xBD\"\xCB\"\xEFD\x99DI\xA2z\xA3\x15\xA3\x13\xA2\x9B\xA3_\xC7x\xC7\x94\xC7Hc\xADbW\xC6^\x8A\xD3\x88\x13\xC4u\xC7c\xE3\xA3\xE3\x9B\xE2\xA7\x17\xFA,\xDC\xB9p<\xC1>\xA18\xE1\xFA\"\xE3Ey\x8B.,\xD6X\x9C\xBE\xF8\xF8\x12\xC5%\x9C%G\x12\xD1\x891\x89-\x89\xEF9\xA1\x9C\x06\xCE\xF4\xD2\x80\xA5\xB5K\xA7\xB8l\xEE.\xEE\x13\x9E\x07o\x07o\x92\xEF\xCA/\xE7O$\xB9&\x95'=JvM\xDE\x9E<\x99\xE2\x9ER\x91\xF2T\xC0\x16T\x0B\x9E\xA7\xFA\xA7\xD6\xA5\xBEN\x0BM\xDB\x9F\xF6)=&\xBD=\x03\x97\x91\x98qTH\x11\xA6\t\xFB2\xB53\xF32\x87\xB3\xCC\xB3\x8A\xB3\xA4\xCB\x9C\x97\xED\\6%\n\x125eC\xD9\x8B\xB2\xBB\xC54\xD9\xCF\xD4\x80\xC4D\xB2^2\x9A\xE3\x96S\x93\xF3&7:\xF7H\x9Er\x9E0o`\xB9\xD9\xF2M\xCB'\xF2}\xF3\xBF^\x81Z\xC1]\xD1[\xA0[\xB0\xB6`t\xA5\xE7\xCA\xFAU\xD0\xAA\xA5\xABzW\xEB\xAF.Z=\xBE\xC6o\xCD\x81\xB5\x84\xB5ik\x7F(\xB4.,/|\xB9.f]O\x91V\xD1\x9A\xA2\xB1\xF5~\xEB[\x8B\x15\x8AE\xC576\xB8l\xA8\xDB\x88\xDA(\xD88\xB8i\xEE\xA6\xAAM\x1FKx%\x17K\xADK+J\xDFo\xE6n\xBE\xF8\x95\xCDW\x95_}\xDA\x92\xB4e\xB0\xCC\xA1l\xCFV\xCCV\xE1\xD6\xEB\xDB\xDC\xB7\x1D(W.\xCF/\x1F\xDB\x1E\xB2\xBDs\x07cG\xC9\x8E\x97;\x97\xEC\xBCPaWQ\xB7\x8B\xB0K\xB2KZ\x19\\\xD9]eP\xB5\xB5\xEA}uJ\xF5H\x8DWM{\xADf\xED\xA6\xDA\xD7\xBBy\xBB\xAF\xEC\xF1\xD8\xD3V\xA7UWZ\xF7n\xAF`\xEF\xCDz\xBF\xFA\xCE\x06\xA3\x86\x8A}\x98}9\xFB\x1E6F7\xF6\x7F\xCD\xFA\xBA\xB9I\xA3\xA9\xB4\xE9\xC3~\xE1~\xE9\x81\x88\x03}\xCD\x8E\xCD\xCD-\x9A-e\xADp\xAB\xA4u\xF2`\xC2\xC1\xCB\xDFx\x7F\xD3\xDD\xC6l\xABo\xA7\xB7\x97\x1E\x02\x87$\x87\x1E\x7F\x9B\xF8\xED\xF5\xC3A\x87{\x8F\xB0\x8E\xB4}g\xF8]m\x07\xB5\xA3\xA4\x13\xEA\\\xDE9\xD5\x95\xD2%\xED\x8E\xEB\x1E>\x1Ax\xB4\xB7\xC7\xA5\xA7\xE3{\xCB\xEF\xF7\x1F\xD3=Vs\\\xE5x\xD9\t\xC2\x89\xA2\x13\x9FN\xE6\x9F\x9C>\x95u\xEA\xE9\xE9\xE4\xD3c\xBDKz\xEF\x9C\x89=s\xAD/\xBCo\xF0l\xD0\xD9\xF3\xE7|\xCF\x9D\xE9\xF7\xEC?y\xDE\xF5\xFC\xB1\x0B\xCE\x17\x8E^d]\xEC\xBA\xE4p\xA9s\xC0~\xA0\xE3\x07\xFB\x1F:\x06\x1D\x06;\x87\x1C\x87\xBA/;]\xEE\x19\x9E7|\xE2\x8A\xFB\x95\xD3W\xBD\xAF\x9E\xBB\x16p\xED\xD2\xC8\xFC\x91\xE1\xEBQ\xD7o\xDEH\xB8!\xBD\xC9\xBB\xF9\xE8V\xFA\xAD\xE7\xB7sn\xCF\xDCYs\x17}\xB7\xE4\x9E\xD2\xBD\x8A\xFB\x9A\xF7\x1B~4\xFD\xB1]\xEA =>\xEA=:\xF0`\xC1\x83;c\xDC\xB1'?e\xFF\xF4~\xBC\xE8!\xF9a\xC5\x84\xCED\xF3#\xDBG\xC7&}'/?^\xF8x\xFCI\xD6\x93\x99\xA7\xC5?+\xFF\\\xFB\xCC\xE4\xD9w\xBFx\xFC20\x15;5\xFE\\\xF4\xFC\xD3\xAF\x9B_\xA8\xBF\xD8\xFF\xD2\xEEe\xEFt\xD8\xF4\xFDW\x19\xAFf^\x97\xBCQ\x7Fs\xE0-\xEBm\xFF\xBB\x98w\x133\xB9\xEF\xB1\xEF+?\x98~\xE8\xF9\x18\xF4\xF1\xEE\xA7\x8CO\x9F~\x03\xF7\x84\xF3\xFB\x82l\x04\x17\0\0\0\tpHYs\0\0\0\x01\0\0\0\x01\0O%\xC4\xD6\0\0\0$zTXtCreator\0\0\b\x99sL\xC9OJUpL+I-RpMKKM.)\x06\0Az\x06\xCEjz\x15\xC5\0\0\x02\x90IDATH\x89\xB5\x95_h\x8Da\x1C\xC7?\xCF{\xDE\xF3G\xCE\x19\x9B\x11\x96\x89\xFCI\xAB\x8DL\"c$n\x94;\x84\xD2n\x96\x13\x11\x17J\x94\x10WrA9\x14\xE5\xCEv\xE1\xE6hi\xB5%[\xE4b\xABq4$j\xB46\xCCj\x7F\xE4\xFC}\xBF.\x0E\xD9\xC6{\xCE\xCE\xD8\xB7\x9E\xAB\xF7\xF3\xBC\xDF\xE7\xF9=\xBF\xEF\xF3\x18IL\xA7\xACIr\xBB\0\xFF\x94\x1C$\xE5\x1A\xB5\x92\x1A\xFB\x9B2\xCA\xC4%I\xFE<\xFC\x1F#\xD7\xC7\x93\xA9\x11\xA9c\x7FJQ_B\x03\x8F\x1DI\xDAR\xA8\x81\xED\xB2\xB1\xAB\xC31\x9D\xE8\xD8\x9B\xE6\xDB\xBB\xEC\x19\xC9\x11`<\x85Vh\xA2\xC1j \xFC\xE1\xAES\x1F;\x9E\xC6\x89\x17\xFA\xBB\xDC\x06{\x9D$\r/O\xA4\xE9\xB9\xED\xB8\xF1\r\xC0\b0\b\xBC\x04\xBA\x81G@\x87\xDB\x04\xF3\xB3M\xCF&>\xE9b\xE7\xC14_\xDB\xFE\xDE\xB6v\b\xAC\0\xD8A\x83\xAF\x04B\x15\x86\xD0*\xC3\x9C-\x16\xB3\xD7\x9A7\xC0\x1D \x02\x8CN48<\xF8D\x91\xCE\x03i\xE2}S\xCBDp\x85\xA1\xBC\xCEb\xC9Q\x0F\x96\x8F\xC3\xC0\xAD\xB1\x06\xCF\x1FW\xA7*\x87c\xFF\x1E\xB8\xA2JCu\xA3\xCD\xCC\xA5\xE6\fp\x19\xB2A\x8BT7\xD8\x84*\xCC?\x1B\f\xBF\x10O\xB7\xA7\x89\xF7\xEA\x12\xB0\xF3\x97\xC1\xCD\x99\xCB\xCC\x91\x9Av/e{\xDC\x83m\x87\xC0\x0E\xE67\x89\xF7\x8A\xD8\xF1\f@\x18~\x1F2\xC0f \xFC\xFEZf_\xF7\xE9\fJ\x8F\x9F\xB8\xA1\xD9\xA6\xB4\xD6\x1A\x05\x82\xC9\x01\x18\xE9\x16\xA3\xAF\xC5\xE7f\x87\xCF-\xCE\xF8\x966\xB0\xF5\xB9\x97\xE0J\xB3j\xEC\x92\xDB\x80\xBA\xA5\xC7<\xD77<\xF4\xE2\x9F\xF7\xD7\x92\xED\x06\x8C\xAF\x94\xB9s6\x9B\xDA\xC5\xF5Vx\xDD};\xBA\xF3\xA3\x8F\xE5\xA7<X\x81\x9F\x94\xA0\xFF\x81\x93\xE5]\"~\xEE{\xAF\xA3\xF6\x9A\xA4\xA2\xBE\x84\xA2\xBE\x84\xBE<\xCAH\xD26\x17~\x91\xA4\xAB\x83\xCF\x1C5\x15g\xF9\xCE\x83)I\xBA\xE7V\xF4\xF3\x81\x85\xE6\xD0\xC6\x16/\x8B\xEB\xB3\x88\xE55\0I\x17\xFE#p\xB2x\xBD\xB9Ru#\x9B\xDD\xE4\0\0\xA5\xF9.\xABJI\x91\xA1.Gr$I&\x0Fo9\x19\xA9\xB5\"\xA9\xA7;R\x92\xD4\x9A\xEF=x\x01\x84\x8B\xAA\xCC\x1A\fV\xB6\xBA9\xE5\x18\x8B\x0Be{,\xECY\0\f\xB9\xDD\xA6\x13\xD55I\x0E\xA0kV\x95\xF9\xD5Uo'kP\x88zf\x94\x1BRC\0\xBC\x9A\xEC\x93Y\x88\x84\x81\x92M\x06\xA0}:v\xD0\xEF\x9F\x0F\x81\xF9f\x19\xF0nl\x92\xFF\xA7\x16\0}0\xFE\xAA\x98\x16\xFD\0F|\xD6l\xBC\x82v\xC3\0\0\0\0IEND\xAEB`\x82",
  cafx: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\0;\0\0\0\x14\b\x06\0\0\x003\xDFEP\0\0\0\tpHYs\0\0\x0B\x12\0\0\x0B\x12\x01\xD2\xDD~\xFC\0\0\x0BXiTXtXML:com.adobe.xmp\0\0\0\0\0<?xpacket begin=\"\xEF\xBB\xBF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:tiff=\"http://ns.adobe.com/tiff/1.0/\" xmlns:exif=\"http://ns.adobe.com/exif/1.0/\" xmp:CreatorTool=\"Adobe Photoshop CC 2018 (Windows)\" xmp:CreateDate=\"2018-08-08T19:23:33+08:00\" xmp:MetadataDate=\"2018-08-09T14:45+08:00\" xmp:ModifyDate=\"2018-08-09T14:45+08:00\" dc:format=\"image/png\" xmpMM:InstanceID=\"xmp.iid:3bd4ed96-4aa6-6e44-80a1-62d73c5ff768\" xmpMM:DocumentID=\"adobe:docid:photoshop:0fbdea36-2d77-6e4f-b7b1-ec0abbe00f25\" xmpMM:OriginalDocumentID=\"xmp.did:608114cf-98d3-3043-8ad9-c9600cd15459\" photoshop:ColorMode=\"3\" tiff:Orientation=\"1\" tiff:XResolution=\"720000/10000\" tiff:YResolution=\"720000/10000\" tiff:ResolutionUnit=\"2\" exif:ColorSpace=\"65535\" exif:PixelXDimension=\"483\" exif:PixelYDimension=\"216\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:608114cf-98d3-3043-8ad9-c9600cd15459\" stEvt:when=\"2018-08-08T19:23:33+08:00\" stEvt:softwareAgent=\"Adobe Photoshop CC 2018 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:6e5a9314-5f88-684d-a9da-aa4dc74db5b4\" stEvt:when=\"2018-08-08T19:25:48+08:00\" stEvt:softwareAgent=\"Adobe Photoshop CC 2018 (Windows)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:242396c6-398c-a94c-81ea-a78d1c1ccd0a\" stEvt:when=\"2018-08-09T14:45+08:00\" stEvt:softwareAgent=\"Adobe Photoshop CC 2018 (Windows)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"converted\" stEvt:parameters=\"from application/vnd.adobe.photoshop to image/png\"/> <rdf:li stEvt:action=\"derived\" stEvt:parameters=\"converted from application/vnd.adobe.photoshop to image/png\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:3bd4ed96-4aa6-6e44-80a1-62d73c5ff768\" stEvt:when=\"2018-08-09T14:45+08:00\" stEvt:softwareAgent=\"Adobe Photoshop CC 2018 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> <xmpMM:DerivedFrom stRef:instanceID=\"xmp.iid:242396c6-398c-a94c-81ea-a78d1c1ccd0a\" stRef:documentID=\"adobe:docid:photoshop:0803a0fd-5ed0-be4a-a7c8-ee08db4d61e0\" stRef:originalDocumentID=\"xmp.did:608114cf-98d3-3043-8ad9-c9600cd15459\"/> <photoshop:TextLayers> <rdf:Bag> <rdf:li photoshop:LayerName=\"China Anime Function X\" photoshop:LayerText=\"China Anime Function X\"/> <rdf:li photoshop:LayerName=\"A\" photoshop:LayerText=\"A\"/> </rdf:Bag> </photoshop:TextLayers> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>u6P\x92\0\0\x03\xC8IDATX\xC3\xB5\x97Kh\\e\x14\xC7\x7F\xFF;\xC9\x98\xD6\x14l\xB5h\x02\xCD\xCCtlB\xABi#\n\xA2 \xA54\x15\x1F\xA8\x05\xB1\xB6]X\xB1\xE0\xA6\xBB\xE2\xC2\xC6PCDZ\xA5\xD5\x8D\xE0F\xA4\x05\x11i\x8BE\xAB+\x17\xD5\x9DFk\x16\xD5\x84I;\x99$\xF5\x15j\x1A\xAC\x84\xC4\xC9\xCC=.rs\xE7\xCE\xED$\x93Lf\x0E\x1C\xB8\xE7{\x9C\xEF\xFB\x7F\xE7y\xB1\xCA\xC85\xB3v<2\xB3\x83\x81\xB9\xAF)Cf\xF6\\\x05g\xBE`\xE9\xC4V\x1B\x8E?\\\xA4\xEBj\xFCKK'\xAC\x04\xF7\x16\xADK'v9TF?K\xBA\x1C\x90\xCF\x02S\xDE\xF7.3k.\xB3_\x15\x9D\x9As\x1D\\\xBDc\x16\xD8o\x91#\x98\xE5B\xAF9N>r\xC2\x17\x07\xDB\xD6\x80\x1D\r\x825`r\x89\xFCQ\xD1\xCD\xA5\x9B\xC0yO\xAC\x07\xF6\x97\xB9\xF6\xEC\x02z\xFF)\xC1\xF3s\xB3\xDE3m'\x13\x7F\xC6?{S\xFAW\xD0\xC7\xC5O\xA9^\xB5^\xBD\xE9\xCB\xF5\xFF\x1D\xC6\xD4,33ohJRc\x85\x96\xC6\xCC:\x81o<\xF12\xB0M\x92-S\xC7-\x9E&\xC9\xF5\xE7S\xB1\x0E\xEA\x9C~`\x80\xC9u\x1Dz\xE8\xD2,\x80\x8D\xB44\x91w\x86@\x8D\x18)fVm\xD5\xFD\x03Y\0\xCB\xC4\xEE\xC1\xD5\x10\xA6\xEB\x95\xBAq)\xFA\x16\x18\xF5\xBE\xDB\x81\x07\x97\xAB@\x92\x1B\xE6\x05\x96n\xE1\x8E\xBF\x0F\xFA\xFB\xE2c\x7F\xE2\xDA\xC99\xC9\xED\x9A\x07:\xE7\xFAN\x0Fh\r@\xD5\xC0J\xCA\x01\x9F\x06\x86^\xA6\xA6\xE4\x1C\x9D\x8B\xC5yP\r'1;Gr\xF4|\xC0\x136#{\xC5\xDFQ\xE5\x1B\x9C\x06\xE6\xAD\xF1\xA2\x99\xDDV3\xAC\xA2\x89h\xF65_\xDC\x9C\xFA\x97k#\xFB$\n\xA1\x13q\x8E!\xD5\xD7\x04\xAC\xA4\x14\xF0\xBD'\xDE\x05<]S\xE3\x9A\x1D\xB6\xC1\r~\xE6\xD7\x0Er\x81R\xF3\x18\xF0lpy]\r\xAEp\x1Ax4\xE0\xCA\x9F\x97HD\x8F\x03\x1F.Q\xDF\x88\xA4\x9D\x0B\xBCn#\xD1\xBA\x1E\xE0\xD5\"\xFDo\xE2`\xBC\x8B\x8AK\\\xD5\xB2q\0\xC8Z\xE07`5\x90\x05b\x92\xFE\n\xAD\xD9\x1D(U\xE5\xE8\x8A\xA4\xD6P6\x0Ej\x9B%\xEFv\xA8ul `\xD5\xE7\x81s\xC5\xCB\x18v\xAA\x1EJ\xD2$\xF0\x85'F\x81}\xB5ue\xA6\x89D&B\xA3\xD70n\xC9\xE4u\x15XN\xC0\x8F\xC0\xC6\xC0pX\xF1\xAA\xC0\xF7\x01\xE0\xFDET\xF6\x03;\x17\x99w\xCB\\\xE9\x84\x92\x99\xF1\xA2\x07Of\xFA,\x9D8\x03\xEC]i\xCC>\xB2\xCC\x1A\xBA\xCD\xCC\x1E\x90\xD4\xBFP\x13\xE8yC%f\xFD\x9D\xDB\xA7\xDF+\xAD5\xFF\x06\x91\xC8nD\xC3J\xB2q'0\x1C\xE2Q`\xCC\xE3\x11o\xECz\xC8\xBAA\xCAW)hz\xD44>\xE5C\x1F\xBAw\xBD?\xD366\fV\x94\x04\x9D\nb\xB2WR2\xC4qI1\x8F\x13\x92\x92\xC0v\xAF\xDF\x06\xD8\x1B\xAA\xB9\x91*\x04\xEB/\x8C\xB5\x9C\xF2\xA5+\xC9\r8\xB9\x8B\x96\x89\xF9\x96$\x9B}\x1B\xE3F\xAD\x9A\x8A\xE0\xA3\f\x02}\x9Ex7\xF0DU\x0F\xC8\xABK;\xBE+\xFC\xED(\xDF\x83t\x1F\xAEs\xC8\x1F\xDA\xF2\xC7\x04\x8E\x1D\xAB9X\x8FN\xD5\xA8}\xBCHk\xE6\xABB\xA9\xD9\xD8\x0E:\xE0e\xE7.\x1Bh\xBE3P\\?\xC0\x18\t\x83]mf7\x16\xE1\x1F\xBCL\xBC\x1C:\x0BL{\xDFO\x99\xD9\xFA*\0u\xC9\xF1\xBA\b\xB4\x85\xB8\xC7\x91\x17\x1Ab\x1D\xD1\xE8\x11\x1Fkbt\x06\xD1\x1D\x06+`\xED\"|a\xB9\xBFl\x92&\x80\x0B\x81\x9A\xBB\x7F\xE5P\xED\x8C\xDA2}\x85f?\xD1\x89\xE9\xC9\xD0\xC9\x87,\xD5R(\x8D\x972\x9F\x01?-\xD5\x8D\xF3\xC0'+h\x1F\xE7\xE9\xA5%\xD6\xCE\xD2\x14e\x06\xCBw\x17j>\x0E\x11;\x1En\x0B\x11\r\xD49o\xF9\xE2\x1E\xF2\xA0\xEE\xFF\x01'+\f\xC6\xB8\xCEH^\0\0\0\0IEND\xAEB`\x82",
  cafxlog: "\x89PNG\r\n\x1A\n\0\0\0\rIHDR\0\0\x01,\0\0\0(\b\x06\0\0\0D\x9B\xC7\xD7\0\0\n?iCCPAfter Effects ICC Profile\0\0H\x89\x9D\x96wTS\xD9\x16\x87\xCF\xBD7\xBDP\x92\x10\x8A\x94\xD0khR\x02H\r\xBDH\x91.*1\t\x10J\xC0\x90\0\"6DTpDQ\x91\xA6\b2(\xE0\x80\xA3C\x91\xB1\"\x8A\x85\x01Q\xB1\xEB\x04\x19D\xD4qp\x14\x1B\x96Id\xAD\x19\xDF\xBCy\xEF\xCD\x9B\xDF\x1F\xF7~k\x9F\xBD\xCF\xDDg\xEF}\xD6\xBA\0\x90\xFC\x83\x05\xC2LX\t\x80\f\xA1X\x14\xE1\xE7\xC5\x88\x8D\x8Bg`\x07\x01\f\xF0\0\x03l\0\xE0p\xB3\xB3B\x16\xF8F\x02\x99\x02|\xD8\x8Cl\x99\x13\xF8\x17\xBD\xBA\x0E \xF9\xFB*\xD3?\x8C\xC1\0\xFF\x9F\x94\xB9Y\"1\0P\x98\x8C\xE7\xF2\xF8\xD9\\\x19\x17\xC98=W\x9C%\xB7O\xC9\x98\xB64M\xCE0J\xCE\"Y\x822V\x93s\xF2,[|\xF6\x99e\x0F9\xF32\x84<\x19\xCBs\xCE\xE2e\xF0\xE4\xDC'\xE3\x8D9\x12\xBE\x8C\x91`\x19\x17\xE7\b\xF8\xB92\xBE&c\x83tI\x86@\xC6o\xE4\xB1\x19|N6\0(\x92\xDC.\xE6sSdl-c\x92(2\x82-\xE3y\0\xE0H\xC9_\xF0\xD2/X\xCC\xCF\x13\xCB\x0F\xC5\xCE\xCCZ.\x12$\xA7\x88\x19&\\S\x86\x8D\x93\x13\x8B\xE1\xCF\xCFM\xE7\x8B\xC5\xCC0\x0E7\x8D#\xE21\xD8\x99\x19Y\x1C\xE1r\0f\xCF\xFCY\x14ym\x19\xB2\";\xD88980m-m\xBE(\xD4\x7F]\xFC\x9B\x92\xF7v\x96^\x84\x7F\xEE\x19D\x1F\xF8\xC3\xF6W~\x99\r\0\xB0\xA6e\xB5\xD9\xFA\x87mi\x15\0]\xEB\x01P\xBB\xFD\x87\xCD`/\0\x8A\xB2\xBEu\x0E}q\x1E\xBA|^R\xC4\xE2,g+\xAB\xDC\xDC\\K\x01\x9Fk)/\xE8\xEF\xFA\x9F\x0E\x7FC_|\xCFR\xBE\xDD\xEF\xE5ax\xF3\x938\x92t1C^7nfz\xA6D\xC4\xC8\xCE\xE2p\xF9\f\xE6\x9F\x87\xF8\x1F\x07\xFEu\x1E\x16\x11\xFC$\xBE\x88/\x94ED\xCB\xA6L L\x96\xB5[\xC8\x13\x88\x05\x99B\x86@\xF8\x9F\x9A\xF8\x0F\xC3\xFE\xA4\xD9\xB9\x96\x89\xDA\xF8\x11\xD0\x96X\x02\xA5!\x1A@~\x1E\0(*\x11 \t{d+\xD0\xEF}\x0B\xC6G\x03\xF9\xCD\x8B\xD1\x99\x98\x9D\xFB\xCF\x82\xFE}W\xB8L\xFE\xC8\x16$\x7F\x8EcGD2\xB8\x12Q\xCE\xEC\x9A\xFCZ\x024 \0E@\x03\xEA@\x1B\xE8\x03\x13\xC0\x04\xB6\xC0\x11\xB8\0\x0F\xE0\x03\x02A(\x88\x04q`1\xE0\x82\x14\x90\x01D \x17\x14\x80\xB5\xA0\x18\x94\x82\xAD`'\xA8\x06u\xA0\x114\x836p\x18t\x81c\xE048\x07.\x81\xCB`\x04\xDC\x01R0\x0E\x9E\x80)\xF0\n\xCC@\x10\x84\x85\xC8\x10\x15R\x87t C\xC8\x1C\xB2\x85X\x90\x1B\xE4\x03\x05C\x11P\x1C\x94\b%CBH\x02\x15@\xEB\xA0R\xA8\x1C\xAA\x86\xEA\xA1f\xE8[\xE8(t\x1A\xBA\0\rC\xB7\xA0Qh\x12\xFA\x15z\x07#0\t\xA6\xC1Z\xB0\x11l\x05\xB3`O8\b\x8E\x84\x17\xC1\xC9\xF028\x1F.\x82\xB7\xC0\x95p\x03|\x10\xEE\x84O\xC3\x97\xE0\x11X\n?\x81\xA7\x11\x80\x10\x11:\xA2\x8B0\x11\x16\xC2FB\x91x$\t\x11!\xAB\x90\x12\xA4\x02i@\xDA\x90\x1E\xA4\x1F\xB9\x8AH\x91\xA7\xC8[\x14\x06EE1PL\x94\x0B\xCA\x1F\x15\x85\xE2\xA2\x96\xA1V\xA16\xA3\xAAQ\x07P\x9D\xA8>\xD4U\xD4(j\n\xF5\x11MFk\xA2\xCD\xD1\xCE\xE8\0t,:\x19\x9D\x8B.FW\xA0\x9B\xD0\x1D\xE8\xB3\xE8\x11\xF48\xFA\x15\x06\x83\xA1c\x8C1\x8E\x18\x7FL\x1C&\x15\xB3\x02\xB3\x19\xB3\x1B\xD3\x8E9\x85\x19\xC6\x8Ca\xA6\xB1X\xAC:\xD6\x1C\xEB\x8A\r\xC5r\xB0bl1\xB6\n{\x10{\x12{\x05;\x8E}\x83#\xE2tp\xB68_\\<N\x88+\xC4U\xE0Zp'pWp\x13\xB8\x19\xBC\x12\xDE\x10\xEF\x8C\x0F\xC5\xF3\xF0\xCB\xF1e\xF8F|\x0F~\b?\x8E\x9F!(\x13\x8C\t\xAE\x84HB*a-\xA1\x92\xD0F8K\xB8KxA$\x12\xF5\x88N\xC4p\xA2\x80\xB8\x86XI<D<O\x1C%\xBE%QHf$6)\x81$!m!\xED'\x9D\"\xDD\"\xBD \x93\xC9Fd\x0Fr<YL\xDEBn&\x9F!\xDF'\xBFQ\xA0*X*\x04(\xF0\x14V+\xD4(t*\\Qx\xA6\x88W4T\xF4T\\\xAC\x98\xAFX\xA1xDqH\xF1\xA9\x12^\xC9H\x89\xAD\xC4QZ\xA5T\xA3tT\xE9\x86\xD2\xB42U\xD9F9T9Cy\xB3r\x8B\xF2\x05\xE5G\x14,\xC5\x88\xE2C\xE1Q\x8A(\xFB(g(cT\x84\xAAOeS\xB9\xD4u\xD4F\xEAY\xEA8\rC3\xA6\x05\xD0Ri\xA5\xB4oh\x83\xB4)\x15\x8A\x8A\x9DJ\xB4J\x9EJ\x8D\xCAq\x15)\x1D\xA1\x1B\xD1\x03\xE8\xE9\xF42\xFAa\xFAu\xFA;U-UOU\xBE\xEA&\xD56\xD5+\xAA\xAF\xD5\xE6\xA8y\xA8\xF1\xD5J\xD4\xDA\xD5F\xD4\xDE\xA93\xD4}\xD4\xD3\xD4\xB7\xA9w\xA9\xDF\xD3@i\x98i\x84k\xE4j\xEC\xD18\xAB\xF1t\x0Em\x8E\xCB\x1C\xEE\x9C\x929\x87\xE7\xDC\xD6\x845\xCD4#4Wh\xEE\xD3\x1C\xD0\x9C\xD6\xD2\xD6\xF2\xD3\xCA\xD2\xAA\xD2:\xA3\xF5T\x9B\xAE\xED\xA1\x9D\xAA\xBDC\xFB\x84\xF6\xA4\x0EU\xC7MG\xA0\xB3C\xE7\xA4\xCEc\x86\n\xC3\x93\x91\xCE\xA8d\xF41\xA6t5u\xFDu%\xBA\xF5\xBA\x83\xBA3z\xC6zQz\x85z\xEDz\xF7\xF4\t\xFA,\xFD$\xFD\x1D\xFA\xBD\xFAS\x06:\x06!\x06\x05\x06\xAD\x06\xB7\r\xF1\x86,\xC3\x14\xC3]\x86\xFD\x86\xAF\x8D\x8C\x8Db\x8C6\x18u\x19=2V3\x0E0\xCE7n5\xBEkB6q7Yf\xD2`r\xCD\x14c\xCA2M3\xDDmz\xD9\f6\xB37K1\xAB1\x1B2\x87\xCD\x1D\xCC\x05\xE6\xBB\xCD\x87-\xD0\x16N\x16B\x8B\x06\x8B\x1BL\x12\xD3\x93\x99\xC3le\x8EZ\xD2-\x83-\x0B-\xBB,\x9FY\x19X\xC5[m\xB3\xEA\xB7\xFAhmo\x9Dn\xDDh}\xC7\x86b\x13hSh\xD3c\xF3\xAB\xAD\x99-\xD7\xB6\xC6\xF6\xDA\\\xF2\\\xDF\xB9\xAB\xE7v\xCF}ngn\xC7\xB7\xDBcw\xD3\x9Ej\x1Fb\xBF\xC1\xBE\xD7\xFE\x83\x83\xA3\x83\xC8\xA1\xCDa\xD2\xD1\xC01\xD1\xB1\xD6\xF1\x06\x8B\xC6\ncmf\x9DwB;y9\xADv:\xE6\xF4\xD6\xD9\xC1Y\xEC|\xD8\xF9\x17\x17\xA6K\x9AK\x8B\xCB\xA3y\xC6\xF3\xF8\xF3\x1A\xE7\x8D\xB9\xEA\xB9r\\\xEB]\xA5n\f\xB7D\xB7\xBDnRw]w\x8E{\x83\xFB\x03\x0F}\x0F\x9EG\x93\xC7\x84\xA7\xA9g\xAA\xE7A\xCFg^\xD6^\"\xAF\x0E\xAF\xD7lg\xF6J\xF6)o\xC4\xDB\xCF\xBB\xC4{\xD0\x87\xE2\x13\xE5S\xEDs\xDFW\xCF7\xD9\xB7\xD5w\xCA\xCF\xDEo\x85\xDF)\x7F\xB4\x7F\x90\xFF6\xFF\x1B\x01Z\x01\xDC\x80\xE6\x80\xA9@\xC7\xC0\x95\x81}A\xA4\xA0\x05A\xD5A\x0F\x82\xCD\x82E\xC1=!pH`\xC8\xF6\x90\xBB\xF3\r\xE7\x0B\xE7w\x85\x82\xD0\x80\xD0\xED\xA1\xF7\xC2\x8C\xC3\x96\x85}\x1F\x8E\t\x0F\x0B\xAF\t\x7F\x18a\x13Q\x10\xD1\xBF\x80\xBA`\xC9\x82\x96\x05\xAF\"\xBD\"\xCB\"\xEFD\x99DI\xA2z\xA3\x15\xA3\x13\xA2\x9B\xA3_\xC7x\xC7\x94\xC7Hc\xADbW\xC6^\x8A\xD3\x88\x13\xC4u\xC7c\xE3\xA3\xE3\x9B\xE2\xA7\x17\xFA,\xDC\xB9p<\xC1>\xA18\xE1\xFA\"\xE3Ey\x8B.,\xD6X\x9C\xBE\xF8\xF8\x12\xC5%\x9C%G\x12\xD1\x891\x89-\x89\xEF9\xA1\x9C\x06\xCE\xF4\xD2\x80\xA5\xB5K\xA7\xB8l\xEE.\xEE\x13\x9E\x07o\x07o\x92\xEF\xCA/\xE7O$\xB9&\x95'=JvM\xDE\x9E<\x99\xE2\x9ER\x91\xF2T\xC0\x16T\x0B\x9E\xA7\xFA\xA7\xD6\xA5\xBEN\x0BM\xDB\x9F\xF6)=&\xBD=\x03\x97\x91\x98qTH\x11\xA6\t\xFB2\xB53\xF32\x87\xB3\xCC\xB3\x8A\xB3\xA4\xCB\x9C\x97\xED\\6%\n\x125eC\xD9\x8B\xB2\xBB\xC54\xD9\xCF\xD4\x80\xC4D\xB2^2\x9A\xE3\x96S\x93\xF3&7:\xF7H\x9Er\x9E0o`\xB9\xD9\xF2M\xCB'\xF2}\xF3\xBF^\x81Z\xC1]\xD1[\xA0[\xB0\xB6`t\xA5\xE7\xCA\xFAU\xD0\xAA\xA5\xABzW\xEB\xAF.Z=\xBE\xC6o\xCD\x81\xB5\x84\xB5ik\x7F(\xB4.,/|\xB9.f]O\x91V\xD1\x9A\xA2\xB1\xF5~\xEB[\x8B\x15\x8AE\xC576\xB8l\xA8\xDB\x88\xDA(\xD88\xB8i\xEE\xA6\xAAM\x1FKx%\x17K\xADK+J\xDFo\xE6n\xBE\xF8\x95\xCDW\x95_}\xDA\x92\xB4e\xB0\xCC\xA1l\xCFV\xCCV\xE1\xD6\xEB\xDB\xDC\xB7\x1D(W.\xCF/\x1F\xDB\x1E\xB2\xBDs\x07cG\xC9\x8E\x97;\x97\xEC\xBCPaWQ\xB7\x8B\xB0K\xB2KZ\x19\\\xD9]eP\xB5\xB5\xEA}uJ\xF5H\x8DWM{\xADf\xED\xA6\xDA\xD7\xBBy\xBB\xAF\xEC\xF1\xD8\xD3V\xA7UWZ\xF7n\xAF`\xEF\xCDz\xBF\xFA\xCE\x06\xA3\x86\x8A}\x98}9\xFB\x1E6F7\xF6\x7F\xCD\xFA\xBA\xB9I\xA3\xA9\xB4\xE9\xC3~\xE1~\xE9\x81\x88\x03}\xCD\x8E\xCD\xCD-\x9A-e\xADp\xAB\xA4u\xF2`\xC2\xC1\xCB\xDFx\x7F\xD3\xDD\xC6l\xABo\xA7\xB7\x97\x1E\x02\x87$\x87\x1E\x7F\x9B\xF8\xED\xF5\xC3A\x87{\x8F\xB0\x8E\xB4}g\xF8]m\x07\xB5\xA3\xA4\x13\xEA\\\xDE9\xD5\x95\xD2%\xED\x8E\xEB\x1E>\x1Ax\xB4\xB7\xC7\xA5\xA7\xE3{\xCB\xEF\xF7\x1F\xD3=Vs\\\xE5x\xD9\t\xC2\x89\xA2\x13\x9FN\xE6\x9F\x9C>\x95u\xEA\xE9\xE9\xE4\xD3c\xBDKz\xEF\x9C\x89=s\xAD/\xBCo\xF0l\xD0\xD9\xF3\xE7|\xCF\x9D\xE9\xF7\xEC?y\xDE\xF5\xFC\xB1\x0B\xCE\x17\x8E^d]\xEC\xBA\xE4p\xA9s\xC0~\xA0\xE3\x07\xFB\x1F:\x06\x1D\x06;\x87\x1C\x87\xBA/;]\xEE\x19\x9E7|\xE2\x8A\xFB\x95\xD3W\xBD\xAF\x9E\xBB\x16p\xED\xD2\xC8\xFC\x91\xE1\xEBQ\xD7o\xDEH\xB8!\xBD\xC9\xBB\xF9\xE8V\xFA\xAD\xE7\xB7sn\xCF\xDCYs\x17}\xB7\xE4\x9E\xD2\xBD\x8A\xFB\x9A\xF7\x1B~4\xFD\xB1]\xEA =>\xEA=:\xF0`\xC1\x83;c\xDC\xB1'?e\xFF\xF4~\xBC\xE8!\xF9a\xC5\x84\xCED\xF3#\xDBG\xC7&}'/?^\xF8x\xFCI\xD6\x93\x99\xA7\xC5?+\xFF\\\xFB\xCC\xE4\xD9w\xBFx\xFC20\x15;5\xFE\\\xF4\xFC\xD3\xAF\x9B_\xA8\xBF\xD8\xFF\xD2\xEEe\xEFt\xD8\xF4\xFDW\x19\xAFf^\x97\xBCQ\x7Fs\xE0-\xEBm\xFF\xBB\x98w\x133\xB9\xEF\xB1\xEF+?\x98~\xE8\xF9\x18\xF4\xF1\xEE\xA7\x8CO\x9F~\x03\xF7\x84\xF3\xFB\x82l\x04\x17\0\0\0\tpHYs\0\0\0\x01\0\0\0\x01\0O%\xC4\xD6\0\0\0$zTXtCreator\0\0\b\x99sL\xC9OJUpL+I-RpMKKM.)\x06\0Az\x06\xCEjz\x15\xC5\0\0\x11$IDATx\x9C\xED\x9D}XTe\xDE\xC7\xBF7\x03\x88b\x19(B\x02!*j\x02Ji\xB9\xF6\x86&f{\x95+\xEE>\xDA\xCB\xF3\xF8<\xBB\xBD'\xA1\x96\x99\xD6S\xEDl\xB5i\xD1\xB6jZ\xDA\xB6\xD5\xA6V\x9AW\x92/\x95\x89%\xA5\x11\x0F\xEDf\x8Ak\xA1(\x88\n\x0E\xF2\xA2\x86\"\xC1|\x9F?\xCE9p8s\xCE\x99\x19\x1D\r\xEB\xFE\\\xD7\xB9\x98\xB9\x7F\xDF\xFBw\xEE3\xCC\xFC\xE6~\xF9\xDDg\x04\xFC\xE4\xC5\xFF\x19\x94<\xB0\xA7\xBB\xC7\x91\x13A\x8D{\x0F\x9D\xDA\xE7\\]\xEA\xF2\xD7\x87D\"\x91\x9C\x0E\xC2\x17\xD1{SR\xAE\x1A\x14\x87)]C\xC4\x8D\x17\x84\x89\xAEG\x1A\x98\x17\xE2@\xC8\xA9f\xF4\x03\xF9\xC3\xF1&\xAC-.\xE3\xC2?\xBC\xB9\xB3\xEAl7X\"\x91\xFCr\xB1\rX\x0FN\x1C\xD1\xF9\xB6\x81\xC7\xE6%E;\xEE\f\x0B\x16\x0E\x008|\xDC}\xA0\xF7\xCC\x1D\xF1\x9Af\xF9\xFD\x03\x87\xA6^\xEC\xB8\xA7SH\xD0\xCD\x07\xEA8{\xF4\xF3\xC5K\xCFv\xA3%\x12\xC9/\x13\xCB\x80\x953yp\xF8\xD8\xFE\xEE\xF5IQ\x8Et}yY\xAD\xBB\xE4\xD2\xC7v\f0\xEA\xD7N\x1F8\xA2_\xCF\x90e\xAE\xE3\xEE\xBF\xA5\xCF\xD99\xF7l4V\"\x91\xFC\xB2\xB1\fX\xDF<\x95\xB2b`O\xC7$cy\xDDIwq\xAF\x07w\xA4\x9A\xD5ymJ\xDF~\xA3\x12\xBAl*\xABk\x9E>z\xEE\xAE\xD5F\xFB\x87\x1F~\x98\x1D\x17\x17w\x99\xBE\xAC\xBC\xBC<o\xDC\xB8qo\x1B\xB5K\x97.\xED\xD7\xBF\x7F\xFF\xC7;w\xEE\xEC\xD6\xCA\\.\xD7\x8F\x19\x19\x19\xF7\x1A\xB5\xABW\xAF\xBE!11\xF1\xD6\xA0\xA0\xA0\xD6\xB2\xC3\x87\x0F\x97\x8F\x193\xE6OF\xEDG\x1F}tgll\xEC\xD5\xFA\xB2\x9A\x9A\x9A\xA0Q\xA3F\xFD\xDE\xEC\x9AV\xAE\\yMRR\xD2\x9D\x0E\x87\x83Z\xD9\xDE\xBD{\xF3233=\xDAlF~~\xFE\xE2\x88\x88\x88P}\x99\xCB\xE5\xFA.##\xE3y_\xEAK$\x926\x82\xCD\n7\xCD\x1E41\xA9\x87g\xB0\xF2\xC6]/\x97\xEEY\x9D\x9D<\xF1\x82Nt\x98\xD9+**\xDE\x1A>|\xF8\xAC\xC8\xC8\xC8X\0\xA8\xAC\xAC\xFC\xD7\xFB\xEF\xBF\x7F\x9F\x99v\xF2\xE4\xC9{\x8A\x8B\x8B+\x93\x93\x93gke\xEB\xD7\xAF\xFF\x9D\x99v\xC2\x84\t\x9F\x94\x95\x95e'$$\xDC\f\0\r\r\rM;w\xEE\xECg\xA6-,,|'++kf\x8F\x1E=Z{\x89\xC5\xC5\xC5\xCB\xAC\xAEi\xD2\xA4I[JJJ\xA6&%%MT\xDB\xFC\xCF\x85\x0B\x17z\x04M+\x82\x83\x83\xB7\xA7\xA6\xA6.\xD2\x9E766\xE2\xAB\xAF\xBEJ\xF1\xB5\xBED\xD2\x11 \x19\x0B \xCAG\xF9Q!\xC4>\x1B_]\x01\x98~>\xFD\xF5\x05\0\xD8=7\xA5\xF0\xE4\xE2!4;\x0E\xFD5u\x87\x8F'2\xA5\xB6\xB6v\x07U\xAA\xAB\xAB\xD7\xDBiKKK\xA7P\xC7\x07\x1F|0\xD8J[YY\xF9\x8A\xA6\xAB\xAF\xAF?j\xE7\xB7\xA6\xA6f\x8B\xDEoCCCKaa\xE1\x03V\xFA\x83\x07\x0F\xCE\xF5\xB5\xCDF\xBE\xF9\xE6\x1B'\r\xACY\xB3f\xBC?>$\x92\x9F\x1A\x92\x13H~i|/\x9B\xD0L\xF2a/\xBE\xFA\xFA\xE8k7\xC9v\x9D\x83 \xA3\xB37\xEE\x19\x98\x1A}\x81\xE3\xCA@_pG\xA6K\x97.Aiii\xF3\x8B\x8A\x8A\xB2\x02\xE97'''<>>\xFE.cyJJ\xCAC\x81<\x8FDr\xB6\x11B\xAC\x16B\\\x05\xE0\t/\xD2%B\x88\x17\xBC\xF8*\x05p-\x80c6\xB2|\0C\x84\x10K\xF4\x85\x1E\x01\xEB\xD2h\xC7\x88\x10\xD3\x01\xDD\xCF\x9B\xD0\xD0\xD0\xA0\xC1\x83\x07/\bd\xD0\x1A;vlV\xF7\xEE\xDDc\x01\xA0\xBA\xBA\xBAQ+\x8F\x8F\x8F\xBFn\xF3\xE6\xCD\x13\x02u\x1E\x89\xE4\\!\x84x\x06\x80\xDD\xFC\xED5$M\xA7\x9A\f\x8C\x06p\xA1\x85\xED{\0\x13\x84\x10'\x8C\x06\x0F\xC7\xE1a\xE2b\xBB\xB34\xBB}\xCB\xDD\xF2\x85\xA6\xA6\xA6\xD0\x17^x!\xC1\xCA~\xEC\xD8\xB1n\x81:\x97\x15\x07\x0E\x1C(\x8F\x8D\x8DM\x10B\xE8\x83\x16\xAE\xB8\xE2\x8AE\xDEk[\xB3h\xD1\xA2\xAE\xD1\xD1\xD1\xD3\xB4\xE7EEE\xB3\x87\x0E\x1D:;:::&88\x18\x89\x89\x89\x8F\xC7\xC7\xC7\xE7VTT\xD0\xCE\x8FD\xD2\x01\xB9\x1B@\n\0\xB3)\x9A\xC1\0\x1E\x07\xE0\xB4\xAAL2\x1A\xC0\xEB\x16\xE6:\0\xE3\x84\x10ufF\x8F\x80% l\xFBW\r\x8D\b\xD8\x07\xACW\xAF^\x193f\xCC(\x0B\x94\xBF\xD3\xC1\xEDv/\xD9\xBE}\xFB%)))\xF79\x1C\x8E\x80\x05\xAD!C\x86d\xF7\xEC\xD9\xB3\x17\0\x1C:thgQQ\xD1KQQQ]\xA2\xA3\xA3\x9F\x05\x80\xF8\xF8\xF8\xCB\x97-[\xF6\x87\xF4\xF4t\xAB\x7F\x9CD\xD2!\x11B\x9C \xF9;\0_\x030\xEBT<A\xB2@\b\xB1\xC1h \x19\x02`%\x80X\x93zn\0\xB7\n!v[\x9D\xDBcHx\xA2\x995v\x8D\rv\xD0\xA3\xCE\xF9NZZ\xDA\xFD\xF9\xF9\xF9\xAF\xB4\xB4\xB4\0h\x1B\x1E~\xF1\xC5\x17SO\xC7\x9F\xD3\xE9\xEC\x92\x98\x98\xD8:YXZZ\xBA\xC8\xE9t\xBA\xF3\xF3\xF3\x17\xD4\xD4\xD4\x1C\x04\0!\x04\xFA\xF4\xE9\xF3\x88\xD3\xE9\xF4\xA5\xFB,\x91t(\x84\x10{\0\xFC\xDE\xC2\x1C\x04\xE0m\x92f\xA3\xA7\xF9\0\xAE\xB3\xA87K\b\xF1\x89\xDDy=\x82\xCF\x01\x97\xF8?\xB7M\x1F*\xBC\x93p[[\xFD\xA3\xA1\xA1\xE1\x80\xCB\xE5z\xC7\xEA\xA8\xA9\xA9)\f\xD4\xB9\xBC1z\xF4\xE8)\xDB\xB6m{N\x1F\xB4\x86\r\x1B\xF6\xD7\xB5k\xD7>\xE2\xAF\xAF\xF1\xE3\xC7\xDF\xDD\xABW\xAF\x04\0\xA8\xAC\xAC\xDC\xFD\xE9\xA7\x9F\xFE\r\0f\xCE\x9C\xD9\xB0{\xF7\xEE\x975]\\\\\xDC\x80\x1Bn\xB8!\xA0\x13\xFD\x12\xC9\xB9B\b\x91\x0B\xC0*\x9F0\x12\xC0*\x92\x9D\xB4\x02\x92w\x02\xB8\xDFB\xFF\x8E\xB7\xC9zKJ\xE6\xA6\xEC>\x93\xB4\x86/\x1FK\xFE\xEF\x95\xD3\x06xd\xC3\x03\x1D/\xAD\xA1\xBC\xBC\xFCQ\xBDm\xDB\xB6ms\x9A\x9B\x9B[\xCFy\xF2\xE4I\x96\x94\x94\x94\xF8\xDAf\xA7\xD3\x19\xE6r\xB9\xF6\xE9\xDAR][[\xBBC;\\.\xD7w---\xAD\xFE+++\xCBsrr\xC2\xED|J$\x1D\x15\x92\x0E\x92\x9F\xD9\xA4&\xBC\xAA\xEA\x86\x93<e\xA1\xF9'\xC9.\xBE\x9C\xCFtx\xB7\xFF(_9\xDD\x0BX9u\xE0\xD0\xE8\x8B\xC4_\x8E5\x075zWw<\xD2\xD2\xD2\x1E-..\x9E\xDB\xDC\xDC\f\0\b\x0B\x0BCRRR\x92\xAF\xF5o\xBA\xE9\xA6\xFB\xA2\xA2\xA2zk\xCF\xBBu\xEB\xD6#\"\"\"E;\xA2\xA2\xA2\x06\xE83\xF2cbb.IOO\x7F0\x80\x97 \xF1\x11\x92\xBE&/J,\x10B\xB4\0\xB8\r@\xA5\x85\xE4n\x92\xB3\x01\xAC\x06\x10jb\xAF\x06\xF0[\xB3\x15A3L\xE7O\xB6t\xDA9\xEF\xE2\x9A\xE4\xCC>\xDD\x83\xAF\xF5\xC5\x89\xC6\xF2\xFBS#\xD2.\xE6\xEB\x15u-9w-\xDAU\xEEO\xDD\x8EDZZ\xDA\xA3\x1B7nt\xA4\xA7\xA7\xCF\f\t\t\xF1\xB9^vvv\xA7\x98\x98\x98\xE9\xDA\xF3\xAD[\xB7.t\xB9\\[\xCD\xB4#F\x8Cx:&&\xA6\x1F\0\xF4\xED\xDB7{\xC1\x82\x05K\xA6N\x9DZ}\xC6\x8D\x97\0\0H\x8E\x05\xB0\xC4\x8B\xAC\x14\xCA\xF2\xBA\xE4\f\x10BT\x91\x9C\x04\xE03\x98\xC7\x949\x16U\x9B\x01L\x14B\xF8\x1C+L\x03\x96\xD3\tw\xD2\f\xF7\xE4\xAE\x9D\xDC\x1F\xF7\xEC\x1A4Po;\xF5\xA3yZ\xC3\xD2{.\xBD\xF8\xB28\xAEr\xFD\xC0\xA2\x91sv\x9D\xF7\xFB\xE4\xC6\x8C\x19\xF3HAA\xC1\xD1a\xC3\x86=\x13\x1C\xEC\xDB\xBCxff\xE6=qqq\t\0p\xE4\xC8\x91\xCA\x82\x82\x82\xD93g\xCEl0\xD3n\xD9\xB2%<&&\xE65\0\x88\x8C\x8C\xEC9r\xE4\xC8\x87\0<j\xA6\x95\x9C\x16\xDF\x03\xD0&}\xB7B\xF9p\x18\xF9A{@2\x06@\x8C\xFAt\x9F\x10\xE2\xA8Z\xAE\xDFFrP\bQ\xAD\x96_\x02e\x9E\xA6]\xB9jK\x05\xE0\0\xF0\x83:9\xDD\x0E\x92\x11\0\x86\x02\xE8\n\xA0\x16@\x91\x10\xE2\xA4A3\x01\x80\xD5\x96\x94x\0\x05B\x88#$\xBB\x01HT\xCB\xAB\x84\x10\x1E\xB7xR\xDB:\x18\xCA\xE7}\x8F\x10\xA2\xD8D\xA3\xF7\xD3\xAE\xDD\x86k\xDD\xA1\xF6\xAA\xDA!\x84\xD8B\xF2\x11\0/Z\xB4\xD9\x8C\x07\x85\x10\xF9~\xE8\xEDY\x96\xDD/\xEE\xDB\xA7R\xF3\x1A^i\x9B\xC3*\x99\x93\xBA_\xAF\xC9\x99<8\xFC\xF3\xD9\xC9\x0F\xECz6\xA5l\xEB\x13\xC9O{\xF3Y]]\xBDK\x1B\xB8VUUm\xB4\xD3~\xF7\xDDw\xD3\xF4\x03\xDDU\xABV\r\xB7\xD2VTT\xBC\xA6\xE9jkk\x1B\x9CN\xA7\xE5jfUUU\xA1\xA6\xDD\xB3g\xCFSvm(((xQ\xDF\x86\xAA\xAA*\xD3U\x8C\x9C\x9C\x9C\xF0C\x87\x0E\x95j\xBA\xD2\xD2R\xDBa\xF5\xC4\x89\x13\x1D.\x97\xABN7\xD7u\xEC\xDDw\xDF\xEDoWG\xE2;${\xEB\xFEm\x17Yh.\xD2=NU\xB55$/\xD4\x95w!YN\xB2I\rjZ\xF9M:\xFF\xB7\x18\xFC\xCEW\xCB\xB3\f\xE5\xA1$\x17\x92\xFC\xD10\x87s\x94\xE43$\xFB\xE8\xB4e\xB4\xA7\xB7v\r$\xB5\xF7\xD1 \xC3\xF9bI~dR\xF7[\x92\x97\x1B\xB4\xDDt~\xDE6\xD8~\xAD\x96\x7FLZg\t\x90\x14$\xDF\xF3\xD2n\x8D\xBF[\xF9\xB1\xC36E\xE1\xBF^\xDAs`\xC8\x93;2\xBE*?u\xFB\xFE\xBA\x96/\x1B\x9B\xC9\x88p\x11Q\xFC\xE7\xD4\xB9\xFF\xFEs\xF2\x8B\xBB\xE7\xA6\xE6\xDE\xD8\xDF\xFD\xEF\x88pq\xF5\xB6\x83\xEE[\xAE~z\xA7m\xDA~^^\xDE4\0\xE1\xF5\xF5\xF5\x15\xF5\xF5\xF5\x15$\xFBl\xDA\xB4\xE963\xED\xF2\xE5\xCB\xFB\b!n\xD7\xB4\xF5\xF5\xF5\x15\xB1\xB1\xB1\x8F\x9Bi\xD7\xAD[7\xCA\xEDv_\xA5\xE9\x84\x105\xD7_\x7F\xFDsf\xDA\r\x1B6\xDC\t Z\xD3\x02\x18\x9F\x9B\x9Bkz\xF7\t\0p\xBB\xDD'\xF4mhii\xE9\x97\x97\x97\xD7\xEE\r\x1A\x1F\x1F\xDFi\xC4\x88\x11+:w\xEE\x1C\xA2\xE9\xDCn\xF7\x88\xF5\xEB\xD7\x0F\xB3\xF2\x9B\x95\x955\x03\xC0q\xDDkQ\x9F\x92\x92\xF2\xFA\x9A5k\x92\xAD\xEAH\xCE\x1C\xF5C5\x14\0\x84\x10\xF5:S\x85\xFA\xF7\xB8\x10\xA2u\xCB\x88:\xB7R\x07\xE0\x84\xA1\xF7rP\xF7\xF8U\x92\xFA/\xD3}&\x1A\0X\f \x0B@\r\x80\xE9\0\xC6\0\x98\x04`#\x80\xFFU\x1Fk\xBC\x04`\x82zh\xBD\xB7{\xD5\xE7\xD3\x014\xEA\xAEA[d:\xA4\xBB\xCE0\0\x9B\0\xDC\b\xE0c\0\xE3\xD4\xC7o@\xE9m}J2Nw\x9DGu~n\xA32\xEF\xA4\xA1\xCDOU\ta\x9D% \x84 \x80;\0\x94XiT\xBE\x020\xC5\x8B\xE6\xCCy\xF9\x8E\xFE}\xF2f]z\xEB\xF6\xA7S\xB3\xBEv&\xDF\x95;#y\xECsw\f\xB8\xE0\xAC\x9FX\"\xF1\x13\xB6\xEFa\x19\xC95\xD1_\xA4\xDA\xCALl\xDBH\xD6\x1B\xCA\xD2T}\xB5\xFA\xF7(\xC9\xEBT\xDBt\xB5,S\xA7\x8F'\xE9&\xD9@\xB2\xAF\xC99n!\xCD\xEFr\xC2\xB6\xDEVo/v}\x8Fq\xB2Z\xB6\xD5\xE8\x97\xE4\xDFU\xDB\x1C\x13?'\xD5\x83Z\xD0\xD2]\xEB\x9Bf\xE77iO\x86\xCDkO\x92\xA6\x9D\x14_\xF0+iq\xCA\xEB%{\x01\xEC=\xDD\x93I$?\x11\x8B\x01\x9CR\x1F\x0B(\xF3K\x81b9\x94\xDE\xCE,\0\x1F\x93\xBC\xD9B7X=\xF7\xE7\xEA\xE6\xDFv\b!V\x04\xB0M\0\xA0\x8D\x1ArM\xE6\x9C\xDE\x83\xD2\x13J3\xA9wX\xB5\xAD\x030\x87$\xA0\xF4\xD0|\x82J\xCF\xCEj\x92]\xE3%\x92[\x85\x10\xFB\xBD\xE8<\x90Y\xD6\x92_\x02\x8F\x1A\x86\x7Fv\x98-\xBDw2)kE\b1[\xFD`\xCF\x82\xF2A\xF7\xD8\x92\x82\xB6;\x13\x98\xDES\x8Ad\x88\x10\xE2G\x1F\xDB\xE8\x0B\xDA$~\xA4\x89-\xD2\xA0i\x87\x10\xE2S5\xF0\xAE\x83\x12|\xFC\xB9{\xCBb\0\x96S!*\xDD\xA1$\x95^+\x848\xE5E+\x91\xFC\xFC\xA1\x0F\x93\xEE\x06}(\xC9\x16u\xD8\x96\xA0+\xEF\xA9\x0E\x91*\fzm\x984OW6\x97\xED\xD1\x0F\t;\x91t\xA9\xE5\xD3\f\xBE\xA2In \x19\x0F\x13NsH8\\-\xAB#9@W\xDE\x9Dd\xB1j\xBB\xDB\xC4O\x99\xEE\xF9\xF5$O\xE8\xAE\xE7M\xCB\x17P\xD1g{\x19\n\x1AYl\xE7\xCF\x8C\xF3\xBA\x87E2\x14\xC0 C\xF1\xF7\xC6%bC\x1D\xFD\xF25`\xB2\xF4L\xB23\0}\xA6~\xBB\xE5b\x13\xBB\x99\x0Fmi\xDBR\xA3\xEA\x8C\xDD\xF2Z}W\x99\xCA\xFC\x83\xE5\xA2\x80\x0E\x01 S\b\xF1G\x1F\xB4\x12\x03B\x88&\x92\x1B\0\xFC\x1A\xC0N\xF5q\x0B\x80\f\0a\0l\xF7\xB8\xA9>f\x93<\x0E\xE0\x19\x13\xDB)\x92\xF7\x01X\x01`\x9E\x1A,\xB6\x03\xE8\x01 \x1D\xCA{\xE5\x0E\0\x1E\xB7\xF5>\xCD\xEB)$\xF9\"\x80\x87\0lS\xAF\xA7\x11\xCAD\x7F$\x94a\xDE\x1B^|\xE8{Z\x9D\xED\xB4$G\xC1\xBF\x94\x06\0\xB8\x97\xE4\x97B\x88\xB7\xFC\xACw~B\xE5[q\xB3.b\x17\x93\xB4\xDD\xE6Br\0\xDB&\x15I\xD2\xE3\rBe)[\xF3{\x82d\x7F\x1B;i2\x89H\xF29\xC3\xB7\x89\xE9]\x18\xE9\xB9\f|\xA5\xC1\xEE \xF9\xBE\x8F\xDFXe>\xBDp\xBF\0\xA8\xF4\x0E6\xAB\xC7\xD5\xDEk\xB4.\xED?K\xF2\x1B\x92\x87\xA9L\xA8\xFF\x8B\xE4\x1F\xA9\xDB\x13\xA7j\xC7\xAB\xBE_\xA3\xEE\xFEO$\xC3H\xAESm\x1E\xB7\xFF&9\x8C\xE4\n*\xA9\x12\xF5$\xBF'\xF92-\xB2\xEEI\xC6PI'\xD8Lr\xA4\x89\xBD\x17\xC9\x8D\xAA\xDD#\xED\x87\xE4\x7F\x90\xCCS\xAF\xE7\b\xC9B\x92\x0F\xD0p\xCF*\x9D\x9F\x8D${\x19lN\xD5\xFF\x1B\xC6z\xAA=\x81m\x8B\x0FF\xCAI\xFE'\x95\xDE\xAB\x19'HZn\xB9\xFB\xD9A\xF2k\xC3\x8B\xE3\xB5\xD7\xC8\xF69.\xD5TzCF\xCD<\xBB \xA0\xB3\x93&]u\x92\x99\x86\x7F\xCC|\x13M0\xC9]z\x91\xC5\xB9\xA6\xEB$\x87\xD4\xF6\x1B\x8Fr\x92rADrN!\xD9\x99\xCA^@\xAB`t\xB9\xAA{\xD2BC\x92{\xE8\xC3\xB0\xFD\xBC\x87\xE4\x8D&\x17o\xFA\xA3\x16\x86z\xC6\xA4<\x8F\xA0\xC5\xC0\x07\xAC&\xEA\x12\x03U\xCD\x14\x83\xC6\x97\x80e\xB6\xB2\xA3\xE9\xFC\xDAJ%\x91\x9C)$\xDF\xB6\tD\xB7\xEBtA$?\xB4\xD1~@2`7\x07\xED\x90P\xC91!\xC9\xF5$\xF7\xAB\x8F+\xA9\xCC1\xD9\xD5\xD3\x02\xD6Q\xDD\x0BVK]\x97\x9A\x81\rXM\xEA\xDFwu\xF6nl\xEBF\xB7\xEEb\xB78\x97e\xC0\"\xD9\x95&y=\x12\xC9\xD9\x86\xE4\f\x9B\0\xE4\xB1=\x8Fd$\xED3\xF8\x1F\xFB)\xAE\xE3\x9C@r\xA4\xEEB\x7FE\xF2>\xDD\xF3Y^\xEAj/\xDA|\x92\xAF\xE8\xEA\x1D\xA5\x1A\xB4\x18\xD8\x805_\xF7\xF8J\xD5\xFE\xBC\xFA\xBC\x98\xCA\x9C\x07I\x9F\x02\xD6\xF7T\x12\x19\xB5c?u\xABQ\x12\xC9\xB9\x80\xE4hZ\xCFK}B\xEB$\xD8a\xB4\xBE\xCDL\x0B\xC9\x8Cs}-\xE7\x04\xB6Mz\x7F\xAC>\x0F%\xA9\xED\xE5\xAB\xA5\xCD\x98\x98m\x01k\x1E\x95\xAD\x1A\x1EA\x8B\x81\rX\xFDum\xFB\x82d\xA2\xEE\x9F6\x8Ad\xAE&\xB48\x97>`\x99!\x03\x96\xE4\x9CA\xB2\x0F\x95=\x97f\xEC\xA1\xB2\xB9\xDB\xAE\xFE=6\xEF\xE5jZ\xA4w\0^\xF6\x12vT\xA8\xAC\x96\xA4\xABOO\x92t\x02x\fm\xFB\xC1\"\0\xCC\xF4\xC5\x97\xBA\xFFi\n\x94\x847@\xF9%\x8FO\0\\fY\xC9\x7F\x9A\xA0$\x15\x02\xC05P\x96\x94C\x01\xBC'\x84\xF8\xCCO_\xB7\xAAm\xD3\x8EL\xB4\xED\x01\x93H\xCE*T\xEE^\x91\x0B\xF3\x84\xD4F(\xA95\xA6? \xA1!\x84x\x15\xC0R\x0Bs\x0F(I\xA5ag\xD4\xD0\x8E\x04\xDB\xA7\x14X\xF1\x03u\xBB\xEB\r\xF5[{X\xBA2\xC1\xF6C7\x8D2\x0B\x1F\xFE\xF4\xB0z\xAB\xFE\xB7\xEA\xCANPMP\xA4\x7F=,\xCBIw\x89\xE4lB%\xC5&\x97\xD6<\xE9\x87\xAF\x0B\xA9\xA4ZX\xF1\x16M&\xE1\xCF\xBB\xC4Q*\x1BL\xB5\xDE\xD5x\0\x9F\x1B$\xBF\x01\xF0\x0F\0\xE1Pv\xC0g\xFB\xE2W\xEDiM#y\x12m\xBD\xA1\x80!\x84 \x95\\\xAC/\xD5\xA2\xB9\xFE\xDC\xB8L\xC70Z\x0Fw\xAF\x06\xF0\x0F!\xC4\x81\xD3j\xA4Db\x01\x95[\xEE\xCC\x87\xF2\x99\xB3\x94\xF9\xE1R\x008\x0E\xA0\xA7\x85}2\x007\xC9\x87\x85\x10G\xFC\xF0\xDB\xB1\xA0\x92\x04G\x92\xBB,\xEC\x82\xA4v\x0F\xF6&\x1A\x92>UM\x85j_`\xE1\xE3\x05]\xA4\xAF\xB0\xD0,\xD0i\xFA\x98\xD8\x7F\xAB\xB3\xF7\xD5\x95\xAF\"\xB9\x8F\xBA\x95L\x92kuZ\x8Fo\x15\x92\x0F\xDB|\x13\x19\xE9m\xFA\xC2I$\xA7\t\xC9~T~6\xDE,\xFF\xCFx\xF8\x94\xA9O\xB2\xC8G\x7F\xA5$[\xA7g\xCE\xAB\x1E\x16\x95_\xDD\xE8\x01\xE0[\0u$\x13Lz)IP\xEE\x0B\xA4\xDD#\xFAO$\xA7h\xE3j\x92\xD7@\xB9\x1FQ\r\x80$\x92\x91B\x88Z\x83\x8F\\([2\xD4*\xBCF\b\xB1E\xD7\x8E\b(w\xA1\xFCV-\xBA\x19\x801\xF8\x8D\xD2\xD9\xC7\x01\xD0\x86\x9F\xB3\0\f\xD2\xB6\x0F\xA9\xC1.B\xA7\xFD\r\x80\x0Ft\xE7\n\x05\xF0+\x9D\xDD\x8EK|\xD0H$~\xA1n)\xF3\xF9w\r|\xF4yE \xFDI\xCEC\xA8\xAC>Z\xFD\xFC\xB7D\"\x91H$\x12\x89D\"\x91H$\x12\x89D\"\x91H\xCE2\xFF\x0F\x1C\x9D\0[:O\xF0\xF2\0\0\0\0IEND\xAEB`\x82"
};
var ICONSFILES = createFiles(ICONS);
module.exports = $.global.yp.exp.ICONS = ICONSFILES;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */

/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/


function Pattern(input_scanner, parent) {
  this._input = input_scanner;
  this._starting_pattern = null;
  this._match_pattern = null;
  this._until_pattern = null;
  this._until_after = false;

  if (parent) {
    this._starting_pattern = this._input.get_regexp(parent._starting_pattern, true);
    this._match_pattern = this._input.get_regexp(parent._match_pattern, true);
    this._until_pattern = this._input.get_regexp(parent._until_pattern);
    this._until_after = parent._until_after;
  }
}

Pattern.prototype.read = function () {
  var result = this._input.read(this._starting_pattern);

  if (!this._starting_pattern || result) {
    result += this._input.read(this._match_pattern, this._until_pattern, this._until_after);
  }

  return result;
};

Pattern.prototype.read_match = function () {
  return this._input.match(this._match_pattern);
};

Pattern.prototype.until_after = function (pattern) {
  var result = this._create();

  result._until_after = true;
  result._until_pattern = this._input.get_regexp(pattern);

  result._update();

  return result;
};

Pattern.prototype.until = function (pattern) {
  var result = this._create();

  result._until_after = false;
  result._until_pattern = this._input.get_regexp(pattern);

  result._update();

  return result;
};

Pattern.prototype.starting_with = function (pattern) {
  var result = this._create();

  result._starting_pattern = this._input.get_regexp(pattern, true);

  result._update();

  return result;
};

Pattern.prototype.matching = function (pattern) {
  var result = this._create();

  result._match_pattern = this._input.get_regexp(pattern, true);

  result._update();

  return result;
};

Pattern.prototype._create = function () {
  return new Pattern(this._input, this);
};

Pattern.prototype._update = function () {};

module.exports.Pattern = Pattern;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var vbsString = "set namedArgs = WScript.Arguments.Named  \n  \nsMethod = namedArgs.Item(\"Method\")  \nsUrl = namedArgs.Item(\"URL\")  \nsRequest = namedArgs.Item(\"Query\")  \n  \nHTTPPost sMethod, sUrl, sRequest  \n  \nFunction HTTPPost(sMethod, sUrl, sRequest)  \n    \n          set oHTTP = CreateObject(\"Microsoft.XMLHTTP\")    \n    \n    If sMethod = \"POST\" Then  \n        oHTTP.open \"POST\", sUrl,false  \n    ElseIf sMethod = \"GET\" Then  \n        oHTTP.open \"GET\", sUrl,false  \n    End If  \n  \n          oHTTP.setRequestHeader \"Content-Type\", \"application/x-www-form-urlencoded\"  \n          oHTTP.setRequestHeader \"Content-Length\", Len(sRequest)  \n          oHTTP.send sRequest  \n    \n          HTTPPost = oHTTP.responsseText  \n    \n          WScript.Echo HTTPPost  \n  \nEnd Function  \n";

module.exports = function (method, endpoint, query) {
  var response = null;
  var tempVbsFile = new File($.layer.tempFolder.toString() + $.layer.slash.toString() + 'curl.vbs');

  if (!tempVbsFile.exists) {
    tempVbsFile.writee(vbsString);
  }

  var wincurl = tempVbsFile.fsName;
  var curlCmd = '';

  try {
    if (~$.os.indexOf('Win')) {
      curlCmd = "cscript \"" + wincurl + "\" /Method:" + method + " /URL:" + endpoint + " /Query:" + query + " //nologo";
    } else {
      curlCmd = "curl -s -G -d \"" + query + "\" " + endpoint;
    }

    response = system.callSystem(curlCmd);
  } catch (err) {}

  return response;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var UtilsUI = function () {
  var _ = this;
  /** ***********************expand function************************************************** **/


  _.extend = function (target, source) {
    // give the source to target
    for (var i in source) {
      target[i] = source[i];
    }

    return target;
  };
  /** ***********************functions for createUtils************************************************** **/


  _.add = function (parent, json) {
    // \u4e3aparent\u6dfb\u52a0UI
    if (!json) return;
    if (!parent) parent = this; // create element

    var newUI;
    var s = json.type;
    if (json.properties) s += '{properties:' + JSON.stringify(json.properties) + '}';
    if (_.isWindow(json.type)) newUI = new Window(s);else newUI = parent.add(s); // add other properties for newElement

    for (var j in json) {
      if (j === 'type' || j === 'properties' || j === 'children') continue;
      newUI[j] = json[j];
    }

    if (json.children) arguments.callee(json.children, newUI);
    return newUI;
  };

  _.isWindow = function (type) {
    // \u5224\u65ad\u662f\u5426\u4e3awindow\u5143\u7d20
    var winType = ['window', 'palette', 'dialog', 'Window', 'Palette', 'Dialog'];
    var len = winType.length;

    for (var i = 0; i < len; i++) {
      if (type === winType[i]) return true;
    }

    return false;
  };

  return _;
}();

module.exports = $.global.yp.UtilsUI = UtilsUI;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */

/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/


function Token(type, text, newlines, whitespace_before) {
  this.type = type;
  this.text = text; // comments_before are
  // comments that have a new line before them
  // and may or may not have a newline after
  // this is a set of comments before

  this.comments_before = null;
  /* inline comment*/
  // this.comments_after =  new TokenStream(); // no new line before and newline after

  this.newlines = newlines || 0;
  this.whitespace_before = whitespace_before || '';
  this.parent = null;
  this.next = null;
  this.previous = null;
  this.opened = null;
  this.closed = null;
  this.directives = null;
}

module.exports.Token = Token;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node: true, curly: false */
// Parts of this section of code is taken from acorn.
//
// Acorn was written by Marijn Haverbeke and released under an MIT
// license. The Unicode regexps (for identifiers and whitespace) were
// taken from [Esprima](http://esprima.org) by Ariya Hidayat.
//
// Git repositories for Acorn are available at
//
//     http://marijnhaverbeke.nl/git/acorn
//     https://github.com/marijnh/acorn.git
// ## Character categories
 // acorn used char codes to squeeze the last bit of performance out
// Beautifier is okay without that, so we're using regex
// permit $ (36) and @ (64). @ is used in ES7 decorators.
// 65 through 91 are uppercase letters.
// permit _ (95).
// 97 through 123 are lowercase letters.

var baseASCIIidentifierStartChars = "\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a"; // inside an identifier @ is not allowed but 0-9 are.

var baseASCIIidentifierChars = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a"; // Big ugly regular expressions that match characters in the
// whitespace, identifier, and identifier-start categories. These
// are only applied when a character is found to actually have a
// code point above 128.

var nonASCIIidentifierStartChars = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc";
var nonASCIIidentifierChars = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f"; //var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
//var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

var identifierStart = "(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierStartChars + nonASCIIidentifierStartChars + "])";
var identifierChars = "(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])*";
exports.identifier = new RegExp(identifierStart + identifierChars, 'g');
exports.identifierStart = new RegExp(identifierStart);
exports.identifierMatch = new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])+");
var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/; // jshint ignore:line
// Whether a single character denotes a newline.

exports.newline = /[\n\r\u2028\u2029]/; // Matches a whole line break (where CRLF is considered a single
// line break). Used to count lines.
// in javascript, these two differ
// in python they are the same, different methods are called on them

exports.lineBreak = new RegExp('\r\n|' + exports.newline.source);
exports.allLineBreaks = new RegExp(exports.lineBreak.source, 'g');

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */

/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/


var BaseOptions = __webpack_require__(28).Options;

var validPositionValues = ['before-newline', 'after-newline', 'preserve-newline'];

function Options(options) {
  BaseOptions.call(this, options, 'js'); // compatibility, re

  var raw_brace_style = this.raw_options.brace_style || null;

  if (raw_brace_style === "expand-strict") {
    //graceful handling of deprecated option
    this.raw_options.brace_style = "expand";
  } else if (raw_brace_style === "collapse-preserve-inline") {
    //graceful handling of deprecated option
    this.raw_options.brace_style = "collapse,preserve-inline";
  } else if (this.raw_options.braces_on_own_line !== undefined) {
    //graceful handling of deprecated option
    this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse"; // } else if (!raw_brace_style) { //Nothing exists to set it
    //   raw_brace_style = "collapse";
  } //preserve-inline in delimited string will trigger brace_preserve_inline, everything
  //else is considered a brace_style and the last one only will have an effect


  var brace_style_split = this._get_selection_list('brace_style', ['collapse', 'expand', 'end-expand', 'none', 'preserve-inline']);

  this.brace_preserve_inline = false; //Defaults in case one or other was not specified in meta-option

  this.brace_style = "collapse";

  for (var bs = 0; bs < brace_style_split.length; bs++) {
    if (brace_style_split[bs] === "preserve-inline") {
      this.brace_preserve_inline = true;
    } else {
      this.brace_style = brace_style_split[bs];
    }
  }

  this.unindent_chained_methods = this._get_boolean('unindent_chained_methods');
  this.break_chained_methods = this._get_boolean('break_chained_methods');
  this.space_in_paren = this._get_boolean('space_in_paren');
  this.space_in_empty_paren = this._get_boolean('space_in_empty_paren');
  this.jslint_happy = this._get_boolean('jslint_happy');
  this.space_after_anon_function = this._get_boolean('space_after_anon_function');
  this.space_after_named_function = this._get_boolean('space_after_named_function');
  this.keep_array_indentation = this._get_boolean('keep_array_indentation');
  this.space_before_conditional = this._get_boolean('space_before_conditional', true);
  this.unescape_strings = this._get_boolean('unescape_strings');
  this.e4x = this._get_boolean('e4x');
  this.comma_first = this._get_boolean('comma_first');
  this.operator_position = this._get_selection('operator_position', validPositionValues); // For testing of beautify preserve:start directive

  this.test_output_raw = this._get_boolean('test_output_raw'); // force this._options.space_after_anon_function to true if this._options.jslint_happy

  if (this.jslint_happy) {
    this.space_after_anon_function = true;
  }
}

Options.prototype = new BaseOptions();
module.exports.Options = Options;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */

/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/


var regexp_has_sticky = RegExp.prototype.hasOwnProperty('sticky');

function InputScanner(input_string) {
  this.__input = input_string || '';
  this.__input_length = this.__input.length;
  this.__position = 0;
}

InputScanner.prototype.restart = function () {
  this.__position = 0;
};

InputScanner.prototype.back = function () {
  if (this.__position > 0) {
    this.__position -= 1;
  }
};

InputScanner.prototype.hasNext = function () {
  return this.__position < this.__input_length;
};

InputScanner.prototype.next = function () {
  var val = null;

  if (this.hasNext()) {
    val = this.__input.charAt(this.__position);
    this.__position += 1;
  }

  return val;
};

InputScanner.prototype.peek = function (index) {
  var val = null;
  index = index || 0;
  index += this.__position;

  if (index >= 0 && index < this.__input_length) {
    val = this.__input.charAt(index);
  }

  return val;
}; // This is a JavaScript only helper function (not in python)
// Javascript doesn't have a match method
// and not all implementation support "sticky" flag.
// If they do not support sticky then both this.match() and this.test() method
// must get the match and check the index of the match.
// If sticky is supported and set, this method will use it.
// Otherwise it will check that global is set, and fall back to the slower method.


InputScanner.prototype.__match = function (pattern, index) {
  pattern.lastIndex = index;
  var pattern_match = pattern.exec(this.__input);

  if (pattern_match && !(regexp_has_sticky && pattern.sticky)) {
    if (pattern_match.index !== index) {
      pattern_match = null;
    }
  }

  return pattern_match;
};

InputScanner.prototype.test = function (pattern, index) {
  index = index || 0;
  index += this.__position;

  if (index >= 0 && index < this.__input_length) {
    return !!this.__match(pattern, index);
  } else {
    return false;
  }
};

InputScanner.prototype.testChar = function (pattern, index) {
  // test one character regex match
  var val = this.peek(index);
  pattern.lastIndex = 0;
  return val !== null && pattern.test(val);
};

InputScanner.prototype.match = function (pattern) {
  var pattern_match = this.__match(pattern, this.__position);

  if (pattern_match) {
    this.__position += pattern_match[0].length;
  } else {
    pattern_match = null;
  }

  return pattern_match;
};

InputScanner.prototype.read = function (starting_pattern, until_pattern, until_after) {
  var val = '';
  var match;

  if (starting_pattern) {
    match = this.match(starting_pattern);

    if (match) {
      val += match[0];
    }
  }

  if (until_pattern && (match || !starting_pattern)) {
    val += this.readUntil(until_pattern, until_after);
  }

  return val;
};

InputScanner.prototype.readUntil = function (pattern, until_after) {
  var val = '';
  var match_index = this.__position;
  pattern.lastIndex = this.__position;
  var pattern_match = pattern.exec(this.__input);

  if (pattern_match) {
    match_index = pattern_match.index;

    if (until_after) {
      match_index += pattern_match[0].length;
    }
  } else {
    match_index = this.__input_length;
  }

  val = this.__input.substring(this.__position, match_index);
  this.__position = match_index;
  return val;
};

InputScanner.prototype.readUntilAfter = function (pattern) {
  return this.readUntil(pattern, true);
};

InputScanner.prototype.get_regexp = function (pattern, match_from) {
  var result = null;
  var flags = 'g';

  if (match_from && regexp_has_sticky) {
    flags = 'y';
  } // strings are converted to regexp


  if (typeof pattern === "string" && pattern !== '') {
    // result = new RegExp(pattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), flags);
    result = new RegExp(pattern, flags);
  } else if (pattern) {
    result = new RegExp(pattern.source, flags);
  }

  return result;
};

InputScanner.prototype.get_literal_regexp = function (literal_string) {
  return RegExp(literal_string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
};
/* css beautifier legacy helpers */


InputScanner.prototype.peekUntilAfter = function (pattern) {
  var start = this.__position;
  var val = this.readUntilAfter(pattern);
  this.__position = start;
  return val;
};

InputScanner.prototype.lookBack = function (testVal) {
  var start = this.__position - 1;
  return start >= testVal.length && this.__input.substring(start - testVal.length, start).toLowerCase() === testVal;
};

module.exports.InputScanner = InputScanner;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */

/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/


var InputScanner = __webpack_require__(9).InputScanner;

var Token = __webpack_require__(6).Token;

var TokenStream = __webpack_require__(29).TokenStream;

var WhitespacePattern = __webpack_require__(30).WhitespacePattern;

var TOKEN = {
  START: 'TK_START',
  RAW: 'TK_RAW',
  EOF: 'TK_EOF'
};

var Tokenizer = function Tokenizer(input_string, options) {
  this._input = new InputScanner(input_string);
  this._options = options || {};
  this.__tokens = null;
  this._patterns = {};
  this._patterns.whitespace = new WhitespacePattern(this._input);
};

Tokenizer.prototype.tokenize = function () {
  this._input.restart();

  this.__tokens = new TokenStream();

  this._reset();

  var current;
  var previous = new Token(TOKEN.START, '');
  var open_token = null;
  var open_stack = [];
  var comments = new TokenStream();

  while (previous.type !== TOKEN.EOF) {
    current = this._get_next_token(previous, open_token);

    while (this._is_comment(current)) {
      comments.add(current);
      current = this._get_next_token(previous, open_token);
    }

    if (!comments.isEmpty()) {
      current.comments_before = comments;
      comments = new TokenStream();
    }

    current.parent = open_token;

    if (this._is_opening(current)) {
      open_stack.push(open_token);
      open_token = current;
    } else if (open_token && this._is_closing(current, open_token)) {
      current.opened = open_token;
      open_token.closed = current;
      open_token = open_stack.pop();
      current.parent = open_token;
    }

    current.previous = previous;
    previous.next = current;

    this.__tokens.add(current);

    previous = current;
  }

  return this.__tokens;
};

Tokenizer.prototype._is_first_token = function () {
  return this.__tokens.isEmpty();
};

Tokenizer.prototype._reset = function () {};

Tokenizer.prototype._get_next_token = function (previous_token, open_token) {
  // jshint unused:false
  this._readWhitespace();

  var resulting_string = this._input.read(/.+/g);

  if (resulting_string) {
    return this._create_token(TOKEN.RAW, resulting_string);
  } else {
    return this._create_token(TOKEN.EOF, '');
  }
};

Tokenizer.prototype._is_comment = function (current_token) {
  // jshint unused:false
  return false;
};

Tokenizer.prototype._is_opening = function (current_token) {
  // jshint unused:false
  return false;
};

Tokenizer.prototype._is_closing = function (current_token, open_token) {
  // jshint unused:false
  return false;
};

Tokenizer.prototype._create_token = function (type, text) {
  var token = new Token(type, text, this._patterns.whitespace.newline_count, this._patterns.whitespace.whitespace_before_token);
  return token;
};

Tokenizer.prototype._readWhitespace = function () {
  return this._patterns.whitespace.read();
};

module.exports.Tokenizer = Tokenizer;
module.exports.TOKEN = TOKEN;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

function refreshExp(global) {
  /** ***********************\u7b2c\u4e09\u65b9\u5e93************************************************** **/
  __webpack_require__(12);
  /** ***********************\u4f9d\u8d56\u5bf9\u8c61************************************************** **/


  var _require = __webpack_require__(0),
      exp = _require.exp;

  __webpack_require__(15);

  __webpack_require__(21);
  /** ***********************\u7ed1\u5b9a\u51fd\u6570************************************************** **/


  var BuildUI = __webpack_require__(38);

  var utils = __webpack_require__(5);
  /** ***********************\u5173\u95ed\u91cd\u590d\u7a97\u53e3************************************************** **/


  $.global.callbackBeforeWebpackBuild && $.global.callbackBeforeWebpackBuild();

  if (!(global instanceof Panel)) {
    $.global.callbackBeforeWebpackBuild = function () {
      win.close();
    };
  }

  var winOps = exp.winOps = BuildUI({
    scriptName: exp.scriptName,
    version: exp.version
  });
  var win = exp.win = global instanceof Panel ? global : winOps.window;
  /** ***********************\u9876\u5c42\u5de5\u5177\u680f************************************************** **/

  var top = exp.top = win.add("Group{orientation:'row',alignment:['fill','top'],spacing:0,margins:0}");
  var leftTop = exp.leftTop = top.add("Group{orientation:'row',alignment:['left','top'],spacing:0,margins:0}");
  exp.addFileBtn(leftTop);
  var listGroup = exp.listGroup = top.add("Group{orientation:'stack',alignment:['fill','top'],spacing:0,margins:0}");
  var treeGroup = exp.treeGroup = listGroup.add("Group{orientation:'row',alignment:['fill','top'],spacing:0,margins:0,visible:1}");
  var xmpGroup = exp.xmpGroup = listGroup.add("Group{orientation:'row',alignment:['fill','top'],spacing:0,margins:0,visible:0}");
  var midGroup = exp.midGroup = win.add("Group{orientation:'column',alignment:['fill','fill'],spacing:0,margins:0}");
  var edittext = exp.edittext = utils.add(midGroup, {
    type: 'edittext',
    alignment: ['fill', 'fill'],
    minimumSize: [0, 0],
    helpTip: exp.loc(exp.edittextTip),
    properties: {
      multiline: true
    }
  });

  edittext.onChange = edittext.onChanging = function () {
    if (exp.autoSave) exp.saveEdittext();
  };

  exp.initXMP(xmpGroup);
  exp.initList(treeGroup);
  var bottomGroup = exp.bottomGroup = win.add("Group{orientation:'row',alignment:['fill','bottom'],spacing:10,margins:0}");
  exp.addToolBtn(bottomGroup);
  winOps.open(win);

  if (exp.checkVersionOnStartupValue) {
    var checkVersionFunc = __webpack_require__(39)(win,
    /* true for starting */
    true);

    checkVersionFunc();
  }

  var observeSingleton = __webpack_require__(40);

  observeSingleton(exp);
  app.onError && app.onError(function (err) {
    alert("\u8B66\u544A, ExpNotes\u68C0\u6D4B\u5230AE\u62A5\u9519, \u5185\u5BB9\u5982\u4E0B:\n  " + err.toString() + "\n  ");
  });
}

$.global.refreshExp = refreshExp;

try {
  refreshExp(window);
} catch (err) {
  alert('Line #' + err.line.toString() + '\r\n' + err.toString());
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

if (typeof JSON !== 'object') {
  JSON = {
    parse: function parse(sJSON) {
      return eval('(' + sJSON + ')');
    },
    stringify: function () {
      var toString = Object.prototype.toString;

      var isArray = Array.isArray || function (a) {
        return toString.call(a) === '[object Array]';
      };

      var escMap = {
        '"': '\\"',
        '\\': '\\\\',
        '\b': '\\b',
        '\f': '\\f',
        '\n': '\\n',
        '\r': '\\r',
        '\t': '\\t'
      };

      var escFunc = function escFunc(m) {
        return escMap[m] || "\\u" + (m.charCodeAt(0) + 0x10000).toString(16).substr(1);
      };

      var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
      return function stringify(value) {
        if (value == null) {
          return 'null';
        } else if (typeof value === 'number') {
          return isFinite(value) ? value.toString() : 'null';
        } else if (typeof value === 'boolean') {
          return value.toString();
        } else if (typeof value === 'object') {
          if (typeof value.toJSON === 'function') {
            return stringify(value.toJSON());
          } else if (isArray(value)) {
            var res = '[';

            for (var i = 0; i < value.length; i++) {
              res += (i ? ', ' : '') + stringify(value[i]);
            }

            return res + ']';
          } else if (toString.call(value) === '[object Object]') {
            var tmp = [];

            for (var k in value) {
              if (Object.prototype.hasOwnProperty.call(value, k)) tmp.push(stringify(k) + ': ' + stringify(value[k]));
            }

            return '{' + tmp.join(', ') + '}';
          }
        }

        return '"' + value.toString().replace(escRE, escFunc) + '"';
      };
    }()
  };
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Root = __webpack_require__(14);

var request = __webpack_require__(4);

var exp = new Root({
  scriptName: 'ExpNotes',
  version: "1.0.0",
  slash: '/'
});
exp.extend({
  scriptFile: new File($.fileName),
  expressionFolder: new Folder(exp.haveSetting('expressionFolder') ? exp.getSetting('expressionFolder') : File($.fileName).path + exp.slash + exp.scriptName),
  lang: 0,
  mode: 'tree',
  bounds: [0, 0, 30, 25],
  checkVersionLink: 'https://api.github.com/repos/yfsmallmoon/ExpNotes/git/refs/tags',
  downloadLinkPrefix: 'https://raw.githubusercontent.com/yfsmallmoon/ExpNotes/v',
  downloadLinkSuffix: '/dist/ExpNotes.jsx',
  beautylink: 'https://github.com/HookyQR/VSCodeBeautify/blob/master/Settings.md',
  options: {
    indent_size: 2,
    wrap_line_length: 180,
    end_with_newline: true,
    jslint_happy: true,
    brace_style: 'collapse,preserve-inline',
    space_in_empty_paren: true
  }
});
exp.extend({
  openLink: function openLink(url) {
    var cmd = '';

    if (~$.os.indexOf('Win')) {
      cmd += 'explorer ' + url;
    } else {
      cmd += 'open "' + url + '"';
    }

    try {
      system.callSystem(cmd);
    } catch (e) {}
  },
  getVersion: function getVersion() {
    try {
      var response = request('GET', this.checkVersionLink, '');
      var data = eval('(' + response + ')');
      var latestTag = '0';
      data.forEach(function (item, index) {
        var tagArr = item.ref.match(/v(.*?)$/i);

        if (tagArr.length >= 1) {
          var tag = tagArr[1];
          if (latestTag <= tag) latestTag = tag;
        }
      });
      return latestTag;
    } catch (err) {
      return -1;
    }
  },
  compareSemver: function compareSemver(a, b) {
    var pa = a.split('.');
    var pb = b.split('.');

    for (var i = 0; i < 3; i++) {
      var na = Number(pa[i]);
      var nb = Number(pb[i]);
      if (na > nb) return 1;
      if (nb > na) return -1;
      if (!isNaN(na) && isNaN(nb)) return 1;
      if (isNaN(na) && !isNaN(nb)) return -1;
    }

    return 0;
  }
});
module.exports = $.global.yp.exp = exp;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var Root =
/*#__PURE__*/
function () {
  function Root(options) {
    this.extend(options);
    return this;
  }

  var _proto = Root.prototype;

  _proto.extend = function extend(source) {
    for (var i in source) {
      this[i] = source[i];
    }

    return this;
  };

  _proto.haveSetting = function haveSetting(keyName) {
    return app.settings.haveSetting(this.scriptName, keyName);
  };

  _proto.saveSetting = function saveSetting(keyName, value) {
    app.settings.saveSetting(this.scriptName, keyName, value);
  };

  _proto.getSetting = function getSetting(keyName) {
    return app.settings.getSetting(this.scriptName, keyName);
  };

  _proto.getSettingAsBool = function getSettingAsBool(keyName) {
    return app.settings.getSetting(this.scriptName, keyName) === 'true';
  };

  return Root;
}();

if (typeof $.global.yp !== 'object') {
  $.global.yp = {};
}

module.exports = $.global.yp.Root = Root;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);

__webpack_require__(17);

module.exports = function () {
  __webpack_require__(20);

  Function.prototype.bind = Function.prototype.bind || function (oThis) {
    var aArgs = Array.prototype.slice.call(arguments, 1); // \u7531\u4e8ebind\u662f\u539f\u578b\u65b9\u6cd5,fToBind\u6307\u8c03\u7528bind\u7684\u51fd\u6570\u5bf9\u8c61

    var fToBind = this;

    var F = function F() {};

    var fBound = function fBound() {
      // fBound\u82e5\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\uff0c\u5219this\u5c31\u662ffBound\u6784\u9020\u51fa\u6765\u7684\u5bf9\u8c61
      // \u6784\u9020\u51fd\u6570\u4e2d\u6709return\uff0c\u82e5return\u7684\u662f\u6807\u91cf\uff0c\u5219\u5ffd\u7565\uff0creturn\u7684\u662f\u5bf9\u8c61\uff0c\u5219\u8986\u76d6\u6784\u9020\u7684\u5b9e\u4f8b
      return fToBind.apply(this instanceof F ? this : oThis || this, aArgs.concat(Array.prototype.slice.call(arguments)));
    };

    F.prototype = fToBind.prototype;
    fBound.prototype = new F();
    return fBound;
  };

  Object.prototype.assign = Object.prototype.assign || function (target) {
    if (target == null || target === undefined) {
      target = {};
    }

    target = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];

      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }

    return target;
  };

  String.prototype.trim = String.prototype.trim || function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };

  Array.prototype.includes = Array.prototype.includes || function (value) {
    for (var i = 0, len = this.length; i < len; i++) {
      if (this[i] === value) {
        return true;
      }
    }

    return false;
  };

  Array.prototype.forEach = Array.prototype.forEach || function (callback, context) {
    if (Object.prototype.toString.call(this) === '[object Array]') {
      var i, len;

      for (i = 0, len = this.length; i < len; i++) {
        if (typeof callback === 'function' && Object.prototype.hasOwnProperty.call(this, i)) {
          if (callback.call(context, this[i], i, this) === false) {
            break;
          }
        }
      }
    }
  };

  Array.prototype.pushh = Array.prototype.pushh || function (str) {
    // chains call for Array.push()
    this.push(str);
    return this;
  };

  Array.prototype.some = Array.prototype.some || function (callback) {
    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.reduceRight called on null or undefined');
    }

    if (Object.prototype.toString.call(callback) !== '[object Function]') {
      throw new TypeError(callback + ' is not a function');
    }

    var t = Object(this);
    var len = t.length >>> 0;
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;

    for (var i = 0; i < len; i++) {
      if (i in t && callback.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };

  Array.prototype.indexOf = Array.prototype.indexOf || function (searchElement, fromIndex) {
    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.indexOf called on null or undefined');
    }

    var k;
    var O = Object(this);
    var len = O.length >>> 0;

    if (len === 0) {
      return -1;
    }

    var n = fromIndex | 0;

    if (n >= len) {
      return -1;
    }

    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    while (k < len) {
      if (k in O && O[k] === searchElement) {
        return k;
      }

      k++;
    }

    return -1;
  };

  Array.prototype.from = Array.prototype.from || function () {
    var toStr = Object.prototype.toString;

    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function toInteger(value) {
      var number = Number(value);

      if (isNaN(number)) {
        return 0;
      }

      if (number === 0 || !isFinite(number)) {
        return number;
      }

      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    var toItems = function toItems(value) {
      // support set
      if (value.size > 0 && value.values) {
        var values = value.values();
        var it = values.next();
        var o = [];

        while (!it.done) {
          o.push(it.value);
          it = values.next();
        }

        return o;
      }

      return Object(value);
    }; // The length property of the from method is 1.


    return function from(arrayLike
    /*, mapFn, thisArg */
    ) {
      // 1. Let C be the this value.
      var C = this; // 2. Let items be ToObject(arrayLike).

      var items = toItems(arrayLike); // 3. ReturnIfAbrupt(items).

      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      } // 4. If mapfn is undefined, then let mapping be false.


      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


        if (arguments.length > 2) {
          T = arguments[2];
        }
      } // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).


      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).

      var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

      var k = 0; // 17. Repeat, while k < len\u2026 (also steps a - h)

      var kValue;

      while (k < len) {
        kValue = items[k];

        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }

        k += 1;
      } // 18. Let putStatus be Put(A, "length", len, true).


      A.length = len; // 20. Return A.

      return A;
    };
  }();

  Error.prototype.print = Error.prototype.print || function () {
    return 'Line #' + this.line.toString() + '\r\n' + this.toString();
  };

  Error.prototype.printc = Error.prototype.printc || function () {
    cout << '\n---------';
    cout << this.print();
    cout << '---------\n';
  };

  Error.prototype.printa = Error.prototype.printa || function () {
    this.print() << cout;
  };

  File.prototype.writee = File.prototype.writee || function (str) {
    // method to write file
    this.open('w');
    this.write(str);
    this.close();
  };

  File.prototype.readd = File.prototype.readd || function () {
    // method to read from file
    this.open('r');
    var str = this.read();
    this.close();
    return str;
  };

  File.prototype.evalFile = File.prototype.evalFile || function () {
    // method to read from file
    try {
      $.evalFile(this.fullName);
    } catch (e) {
      this.encoding = 'BINARY';
      this.open('r');
      var str = this.read();
      this.close();
      eval(str);
    }
  };
}();

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function () {
  Group.prototype = {
    removeAll: function removeAll() {
      var len = this.children.length;

      for (var i = 0; i < len; i++) {
        this.remove(this.children[0]);
      }
    }
  };
}();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    exp = _require.exp;
/** ***********************\u8d44\u6e90\u529f\u80fd************************************************** **/


var ICONS = __webpack_require__(2);

var getFiles = __webpack_require__(19);

module.exports = function () {
  DropDownList.prototype = {
    /** ***********************LIST\u64cd\u4f5c************************************************** **/
    refreshList: function refreshList(folder) {
      this.removeAll();
      this.reloadList(folder);
      exp.reloadDroplist.call(this);
    },
    reloadList: function reloadList(folder) {
      var _getFiles = getFiles('txt', folder),
          files = _getFiles.files,
          folders = _getFiles.folders;

      this.folder = folder;
      /** **********************************\u5904\u7406\u7a7a\u76ee\u5f55***************************************/

      if (files.toString() === '' && folders.toString() === '') {
        exp.edittext.text = '';
        var temp = this.add('item', 'none');
        temp.image = ICONS.none;
        this.add('separator', undefined);
        this.selection = 0;
        return;
      }
      /** **********************************\u52a0\u8f7d\u6839\u76ee\u5f55\u6587\u4ef6***************************************/


      this.reloadFolderList(folders);
      this.add('separator', undefined);
      this.reloadFileList(files);
      if (!folders.length) this.selection = 1;else this.selection = 0;
    },
    reloadFolderList: function reloadFolderList(folders) {
      var temp, i;

      for (i = 0; i < folders.length; i++) {
        temp = this.add('item', decodeURI(folders[i].name));
        temp.source = folders[i];
        temp.image = ICONS.folder;
      }
    },
    reloadFileList: function reloadFileList(files) {
      var temp, i;

      for (i = 0; i < files.length; i++) {
        temp = this.add('item', decodeURI(files[i].displayName.split('.')[0]));
        temp.source = files[i];
        temp.image = ICONS.file;
      }
    },
    reSelected: function reSelected(name, Type) {
      var len = this.items.length;

      for (var i = 0; i < len; i++) {
        if (this.items[i].text === name && this.items[i].source instanceof Type) this.selection = i;
      }
    },
    checkFile: function checkFile() {
      if (!this.selection.source) return false;
      return true;
    },

    /** ***********************XMP\u64cd\u4f5c************************************************** **/
    refreshXMP: function refreshXMP() {
      this.removeAll();
      this.reloadXMP();
      this.getXMP();
    },
    reSelectXMP: function reSelectXMP(name, Type) {
      var len = this.items.length;

      for (var i = 0; i < len; i++) {
        if (this.items[i].text === name) this.selection = i;
      }
    },
    reloadXMP: function reloadXMP() {
      var i, temp;
      var xmpItems = [];
      var xmpData = new XMPMeta(app.project.xmpPacket);
      var nsPrefix = exp.nsPrefix;
      var schemaName = exp.schemaName;
      var xmpLength = xmpData.countArrayItems(nsPrefix, schemaName);

      for (i = 1; i <= xmpLength; i++) {
        xmpItems.push(unescape(xmpData.getArrayItem(nsPrefix, schemaName, i)));
      }

      xmpItems.sort();

      for (i = 0; i < xmpItems.length; i++) {
        temp = this.add('item', xmpItems[i].split('\n\n')[0]);
        temp.source = xmpItems[i].split('\n\n')[1];
      }

      this.selection = 0;
    },
    deleteXMP: function deleteXMP() {
      var xmpData = new XMPMeta(app.project.xmpPacket);
      var nsPrefix = exp.nsPrefix;
      var schemaName = exp.schemaName;
      var xmpLength = xmpData.countArrayItems(nsPrefix, schemaName);

      for (var i = 1; i <= xmpLength; i++) {
        if (this.selection.text === unescape(xmpData.getArrayItem(nsPrefix, schemaName, i)).split('\n\n')[0]) {
          xmpData.deleteArrayItem(nsPrefix, schemaName, i);
          app.project.xmpPacket = xmpData.serialize();
          break;
        }
      }

      this.refreshXMP();
    },
    renameXMP: function renameXMP(name) {
      var item;
      var xmpData = new XMPMeta(app.project.xmpPacket);
      var nsPrefix = exp.nsPrefix;
      var schemaName = exp.schemaName;
      var xmpLength = xmpData.countArrayItems(nsPrefix, schemaName);

      for (var i = 1; i <= xmpLength; i++) {
        item = unescape(xmpData.getArrayItem(nsPrefix, schemaName, i)).split('\n\n');

        if (this.selection.text === item[0]) {
          xmpData.setArrayItem(nsPrefix, schemaName, i, escape('' + name + '\n\n' + item[1]));
          app.project.xmpPacket = xmpData.serialize();
          break;
        }
      }
    },
    saveXMP: function saveXMP() {
      var xmpData = new XMPMeta(app.project.xmpPacket);
      var nsPrefix = exp.nsPrefix;
      var schemaName = exp.schemaName;
      var xmpLength = xmpData.countArrayItems(nsPrefix, schemaName);

      for (var i = 1; i <= xmpLength; i++) {
        if (this.selection.text === unescape(xmpData.getArrayItem(nsPrefix, schemaName, i)).split('\n\n')[0]) {
          this.selection.source = exp.edittext.text;
          xmpData.setArrayItem(nsPrefix, schemaName, i, escape('' + this.selection.text + '\n\n' + exp.edittext.text));
          app.project.xmpPacket = xmpData.serialize();
          break;
        }
      }
    },
    getXMP: function getXMP() {
      exp.edittext.text = '';
      if (!this.selection) return;
      var source = this.selection.source;
      exp.edittext.text = source;
    },

    /** ***********************\u6e90\u6587\u4ef6\u64cd\u4f5c************************************************** **/
    createFile: function createFile(name) {
      var folder = this.folder;
      var file = new File(folder.fsName + exp.slash + name + '.txt');
      if (!file.exists) file.writee('');
      this.refreshList(folder);
      this.reSelected(name, File);
    },
    createFolder: function createFolder(name) {
      var folder = new Folder(this.folder.fsName + exp.slash + name);
      !folder.exists && folder.create();
      this.refreshList(this.folder);
      this.reSelected(name, Folder);
    },
    deleteFile: function deleteFile() {
      if (!this.selection.source) return;

      if (this.selection.source instanceof File) {
        !this.selection.source.remove() && alert(exp.deleteFailed);
        this.refreshList(this.folder);
      }
    },
    deleteFolder: function deleteFolder() {
      if (!this.selection.source) return;

      if (this.selection.source instanceof Folder) {
        !this.selection.source.remove() && alert(exp.deleteFailed);
        this.refreshList(this.folder);
      }
    },
    renameFile: function renameFile(name) {
      if (!this.selection.source) return;

      if (this.selection.source instanceof File) {
        !this.selection.source.rename(name + '.txt') && alert(exp.renameFailed);
        this.refreshList(this.folder);
        this.reSelected(name, File);
      }
    },
    renameFolder: function renameFolder(name) {
      if (!this.selection.source) return;

      if (this.selection.source instanceof Folder) {
        !this.selection.source.rename(name) && alert(exp.renameFailed);
        this.refreshList(this.folder);
        this.reSelected(name, Folder);
      }
    },
    deleteOne: function deleteOne() {
      !this.selection.source.remove() && alert(exp.deleteFailed);
      this.refreshList(this.folder);
    }
  };
}();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    exp = _require.exp;

var createFiles = function () {
  function createFiles(binaryStr) {
    return createFiles.covertToGraphic(binaryStr);
  }

  createFiles.covertToGraphic = function (binaryArray) {
    var targetFolder = new Folder(Folder.userData.fullName + exp.slash + 'Aescripts' + exp.slash + exp.scriptName + exp.slash + exp.version);
    !targetFolder.exists && targetFolder.create();
    var icon;
    var iconArrays = {};

    for (var i in binaryArray) {
      if (typeof binaryArray[i] === 'string') {
        icon = new File(targetFolder.fullName + exp.slash + i + '.png');

        if (!icon.exists) {
          icon.encoding = 'BINARY';
          icon.open('w');
          icon.write(binaryArray[i]);
          icon.close();
        }

        iconArrays[i] = icon;
      }
    }

    return iconArrays;
  };

  return createFiles;
}();

module.exports = $.global.yp.createFiles = createFiles;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

var getFiles = function () {
  function getFiles(format, folder) {
    if (getFiles[format]) return getFiles[format](folder);
    return getFiles.find(format, folder);
  }
  /** ***********************expand function************************************************** **/


  getFiles.find = function (format, target) {
    var i, regex;
    regex = new RegExp('\\.(' + format + ')$');
    var files = target.getFiles(regex);
    var folders = target.getFiles(/^(.(?!\.\w+))+$/);

    for (i = folders.length - 1; i >= 0; i--) {
      if (folders[i] instanceof File) folders.splice(i, 1);
    }

    for (i = files.length - 1; i >= 0; i--) {
      if (files[i] instanceof Folder) {
        files.splice(i, 1);
        folders.push(files[i]);
      }
    }

    return {
      folders: folders,
      files: files
    };
  };

  getFiles.all = function (target) {
    var i;
    var files = target.getFiles(/\.\w+$/);
    var folders = target.getFiles(/^(.(?!\.\w+))+$/);

    for (i = folders.length - 1; i >= 0; i--) {
      if (folders[i] instanceof File) folders.splice(i, 1);
    }

    for (i = files.length - 1; i >= 0; i--) {
      if (files[i] instanceof Folder) {
        files.splice(i, 1);
        folders.push(files[i]);
      }
    }

    return {
      folders: folders,
      files: files
    };
  };

  return getFiles;
}();

module.exports = $.global.yp.getFiles = getFiles;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function OperatorOverload(call, operator) {
  var meta = [// Unary operator
  '+', '-', '~', // Binary operator
  '*', '/', '%', '^', '<', '<=', '==', '<<', '>>', '>>>', '&', '|', '==='];

  var toObject = function toObject() {
    for (var i = 0; i < arguments.length; i++) {
      this[arguments[i]] = true;
    }

    return this;
  };

  var metaObj = toObject.apply({}, meta);

  if (!Object.prototype.hasOwnProperty.call(metaObj, operator)) {
    return alert('Operator not supported.');
  }

  this.call = call;

  this[operator] = function (operand, rev) {
    this.call(operand, rev);
    return this;
  };

  return this;
}

var cout = $.global.cout = new OperatorOverload(function (operand, rev) {
  if (!rev) {
    $.writeln(operand);
  } else {
    alert(operand);
  }
}, '<<');
$.global.cout = cout;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
  __webpack_require__(22);

  __webpack_require__(23);

  __webpack_require__(24);
}();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    exp = _require.exp;

module.exports = function () {
  var keyNameArr = [];
  var valueArr = [];
  keyNameArr.pushh('autoSave').pushh('checkVersionOnStartup').pushh('language').pushh('schemaName');
  valueArr.pushh('false').pushh('false').pushh('ch').pushh('xmp:pn_name');
  keyNameArr.forEach(function (item, index) {
    var value = valueArr[index];
    if (exp.haveSetting(item) === false) exp.saveSetting(item, value);
  });
  exp.autoSaveValue = exp.getSettingAsBool('autoSave');
  exp.checkVersionOnStartupValue = exp.getSettingAsBool('checkVersionOnStartup');
  !exp.expressionFolder.exists && exp.expressionFolder.create();

  if (ExternalObject.AdobeXMPScript === undefined) {
    ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
  }

  exp.extend({
    loc: function loc(string) {
      if (exp.lang === 0) {
        exp.lang = exp.getSetting('language');
      }

      return string[exp.lang];
    },
    versionUpdateInfo: {
      ch: "\u8868\u8FBE\u5F0F\u7B14\u8BB0\u672C v" + exp.version + " yfsmallmoon@\u5FC6\u7897\u725B\u6742\u9762\n\n\u6B22\u8FCE\u4F7F\u7528~~\uFF01\n\n",
      en: "ExpNotes v" + exp.version + " yfsmallmoon@ywnz\n                    \nWelcome to use~!\n      \n"
    },
    nsPrefix: XMPMeta.getNamespaceURI('xmp'),
    schemaName: exp.getSetting('schemaName')
  });
  if (exp.haveSetting('options')) exp.options = exp.getSetting('options');

  if (exp.haveSetting('version') === false || exp.getSetting('version') < exp.version) {
    alert(exp.loc(exp.versionUpdateInfo));
  }

  exp.saveSetting('version', exp.version);
}();

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/** **********************************\u754c\u9762\u7684\u5b57\u7b26\u4e32\u8d44\u6e90***************************************/
var _require = __webpack_require__(0),
    exp = _require.exp;

module.exports = function () {
  exp.extend({
    /** **********************************\u5e2e\u52a9\u63d0\u793a************************************* **/
    createTip: {
      en: "click to quick add a note\nctrl/cmd: quick add a folder\nshift: advance add panel",
      ch: "\u70B9\u51FB\u5FEB\u901F\u6DFB\u52A0\u7B14\u8BB0\nctrl/cmd: \u5FEB\u901F\u6DFB\u52A0\u6587\u4EF6\u5939\nshift: \u9AD8\u7EA7\u6DFB\u52A0\u9762\u677F"
    },
    deleteTip: {
      en: "click to quick delete a note\nctrl/cmd: quick delete a folder\nshift: advance delete panel",
      ch: "\u70B9\u51FB\u5FEB\u901F\u5220\u9664\u7B14\u8BB0\nctrl/cmd: \u5FEB\u901F\u5220\u9664\u6587\u4EF6\u5939\nshift: \u9AD8\u7EA7\u5220\u9664\u9762\u677F"
    },
    renameTip: {
      en: "click to quick rename a note or folder\nctrl/cmd: quick rename folder\nshift: advance rename panel",
      ch: "\u70B9\u51FB\u5FEB\u901F\u91CD\u547D\u540D\u7B14\u8BB0\u6216\u6587\u4EF6\u5939\nctrl/cmd: \u5FEB\u901F\u91CD\u547D\u540D\u6587\u4EF6\u5939\nshift: \u9AD8\u7EA7\u91CD\u547D\u540D\u9762\u677F"
    },
    levelTip: {
      en: 'level catalogue',
      ch: "\u7EA7\u76EE\u5F55"
    },
    edittextTip: {
      en: 'edit text area',
      ch: "\u6587\u5B57\u7F16\u8F91\u533A"
    },
    saveTip: {
      en: 'click to quick save note',
      ch: "\u70B9\u51FB\u5FEB\u901F\u50A8\u5B58\u7B14\u8BB0"
    },
    switchTip: {
      en: 'click to quick switch XMP/File source mode',
      ch: "\u70B9\u51FB\u5FEB\u901F\u5207\u6362XMP/\u6587\u4EF6\u8D44\u6E90\u6A21\u5F0F"
    },
    refreshTip: {
      en: 'click to quick refresh note\nshift: quick refresh list',
      ch: "\u70B9\u51FB\u5FEB\u901F\u5237\u65B0\u7B14\u8BB0\nshift\u70B9\u51FB\u5FEB\u901F\u5237\u65B0\u5217\u8868"
    },
    betTip: {
      en: 'beautify text area and your expressions',
      ch: "\u7F8E\u5316\u4EE3\u7801\u548C\u8868\u8FBE\u5F0F"
    },
    pickTip: {
      en: 'get the property"s path',
      ch: "\u83B7\u53D6\u5C5E\u6027\u8DEF\u5F84\u4EE3\u7801"
    },
    exportTip: {
      en: 'export the text to selected properties',
      ch: "\u5BFC\u51FA\u4EE3\u7801\u5230\u6240\u9009\u5C5E\u6027"
    },
    importTip: {
      en: 'import the property"s expression to the text area',
      ch: "\u5BFC\u5165\u5C5E\u6027\u8868\u8FBE\u5F0F"
    },
    toggleTip: {
      en: 'enable or disable your properties" expressions',
      ch: "\u6FC0\u6D3B\u6216\u7981\u7528\u6240\u9009\u5C5E\u6027\u7684\u8868\u8FBE\u5F0F"
    },
    cancelTip: {
      en: 'delete select properties expression',
      ch: "\u5220\u9664\u6240\u9009\u5C5E\u6027\u7684\u8868\u8FBE\u5F0F"
    },
    undoTip: {
      en: 'cancel your beauty or import operations(only once)',
      ch: "\u64A4\u9500\u7F8E\u5316\u6216\u5BFC\u5165\u64CD\u4F5C(\u4EC5\u4E00\u6B21)"
    },
    setTip: {
      en: 'general settings and help',
      ch: "\u4E00\u822C\u8BBE\u7F6E\u548C\u5E2E\u52A9"
    },
    noneTip: {
      en: 'click to disable/enable this part',
      ch: "\u70B9\u51FB\u7981\u7528\u6216\u6FC0\u6D3B\u6B64\u680F"
    },
    exportStr: {
      en: 'Cancel apply expression',
      ch: "\u64A4\u9500\u5E94\u7528\u7684\u8868\u8FBE\u5F0F"
    },
    undoStr: {
      en: 'Cancel delete expression',
      ch: "\u64A4\u9500\u5220\u9664\u7684\u8868\u8FBE\u5F0F"
    },
    advlistTip: {
      en: 'change mainPanel list then click can refresh this panel list catalogue',
      ch: "\u53D8\u66F4\u4E3B\u9762\u677F\u5217\u8868\u540E\u70B9\u51FB\u53EF\u5237\u65B0\u8BE5\u9762\u677F\u5217\u8868\u76EE\u5F55"
    },

    /** **********************************\u754c\u9762\u4fe1\u606f************************************* **/
    okStr: {
      en: 'OK',
      ch: "\u786E\u8BA4"
    },
    refreshStr: {
      en: 'Refresh',
      ch: "\u5237\u65B0"
    },
    settings: {
      en: 'Setting',
      ch: "\u8BBE\u7F6E"
    },
    about: {
      en: 'About',
      ch: "\u5173\u4E8E"
    },
    info: {
      en: 'Info',
      ch: "\u4FE1\u606F"
    },
    option: {
      en: 'Option',
      ch: "\u9009\u9879"
    },
    optionsStr: {
      en: 'Beauty options',
      ch: "\u7F8E\u5316\u9009\u9879"
    },
    link: {
      en: 'Click to beautify help page',
      ch: "\u70B9\u51FB\u524D\u5F80\u7F8E\u5316\u9009\u9879\u5E2E\u52A9"
    },
    configure: {
      en: 'expressionNoteFolder Location:',
      ch: "\u8868\u8FBE\u5F0F\u7B14\u8BB0\u6587\u4EF6\u5939\u4F4D\u7F6E:"
    },
    fileStr: {
      en: 'FileName',
      ch: "\u6587\u4EF6\u540D"
    },
    folderStr: {
      en: 'FolderName',
      ch: "\u6587\u4EF6\u5939\u540D"
    },
    createStr: {
      en: 'Create New Folder or File',
      ch: "\u65B0\u5EFA\u6587\u4EF6\u5939\u6216\u6587\u4EF6"
    },
    deleteStr: {
      en: 'Delete Folder or File',
      ch: "\u5220\u9664\u6587\u4EF6\u5939\u6216\u6587\u4EF6"
    },
    renameStr: {
      en: 'Rename Folder or File',
      ch: "\u91CD\u547D\u540D\u6587\u4EF6\u5939\u6216\u6587\u4EF6"
    },
    forcelang: {
      en: 'force to english interface',
      ch: "\u5F3A\u5236\u82F1\u6587(English)\u754C\u9762"
    },
    autoSaveStr: {
      en: 'Auto Save - Notes are saved automatically.',
      ch: "\u81EA\u52A8\u4FDD\u5B58 - \u7B14\u8BB0\u4F1A\u81EA\u52A8\u4FDD\u5B58"
    },
    checkVersionOnStartupStr: {
      en: 'Auto Check - script will check version on startup',
      ch: "\u81EA\u52A8\u66F4\u65B0 - \u811A\u672C\u542F\u52A8\u65F6\u4F1A\u68C0\u67E5\u66F4\u65B0"
    },

    /** **********************************\u9519\u8bef\u63d0\u793a************************************* **/
    needComp: {
      en: 'Please select a comp first',
      ch: "\u811A\u672C\u9700\u8981\u4E00\u4E2A\u5408\u6210,\u5F53\u524D\u5408\u6210\u4E0D\u5B58\u5728!"
    },
    needProperties: {
      en: 'Please select a or more prop first',
      ch: "\u8BF7\u9009\u4E2D\u4E00\u4E2A\u6216\u591A\u4E2A\u5C5E\u6027"
    },
    folderExistsAlert: {
      en: "Folder doesn't exists",
      ch: "\u6587\u4EF6\u5939\u4E0D\u5B58\u5728"
    },
    deleteFailed: {
      en: 'Delete Failed!',
      ch: "\u5220\u9664\u5931\u8D25"
    },
    renameFailed: {
      en: 'Rename Failed!',
      ch: "\u91CD\u547D\u540D\u5931\u8D25"
    },
    beautyFailed: {
      en: 'Beauty Failed!',
      ch: "\u7F8E\u5316\u5931\u8D25"
    },
    reloadFailed: {
      en: "\u81EA\u52A8\u91CD\u8F7D\u5931\u8D25\uFF0C\u4F60\u6539\u8FC7\u811A\u672C\u540D\u5B57\u5427?",
      ch: 'reload failed do you changed script name?'
    },
    optionsErr: {
      en: 'Unknown options setting',
      ch: "\u672A\u77E5\u7684\u9009\u9879\u8BBE\u7F6E"
    }
  });
  exp.extend({
    /** **********************************\u7248\u672c\u4fe1\u606f************************************* **/
    newVersionFind: {
      en: 'New version found,please download the new version ',
      ch: "\u5B58\u5728\u65B0\u7248\u672C,\u8BF7\u4E0B\u8F7D\u6700\u65B0\u7248v"
    },
    newVersionNotFind: {
      en: 'No new version! v',
      ch: "\u5DF2\u662F\u6700\u65B0\u7248 v"
    },
    tryVersionFind: {
      en: 'It seems that you are using the beta version which is not released yet. v',
      ch: "\u672A\u53D1\u73B0\u65B0\u7248\u672C, \u4F60\u6B63\u5728\u4F7F\u7528\u5C1A\u672A\u53D1\u5E03\u7684\u8BD5\u7528\u7248 v"
    },
    shouldUpdateScript: {
      en: 'Would you like to upgrade to new version now?\r\n it will cost some time while ae will not response\r\n',
      ch: "\u73B0\u5728\u5F00\u59CB\u66F4\u65B0\u65B0\u7248\u672C\u5417?\r\n\u4E0B\u8F7D\u65F6AE\u4F1A\u505C\u6B62\u54CD\u5E94\u6570\u5341\u79D2\u65F6\u95F4.\r\n\u9009\u5426\u5219\u53EF\u4EE5\u9009\u62E9\u901A\u8FC7\u6D4F\u89C8\u5668\u4E0B\u8F7D"
    },
    shouldDownloadScript: {
      en: 'Would you like to download new version now?',
      ch: "\u662F\u5426\u901A\u8FC7\u6D4F\u89C8\u5668\u81EA\u884C\u4E0B\u8F7D\u6700\u65B0\u7248\u672C?\r\n\u6253\u5F00\u7F51\u9875\u540E\u53F3\u952E\u53E6\u5B58\u4E3A\u811A\u672C\u6587\u4EF6\u5373\u53EF"
    },
    downloaded: {
      en: 'Update success! To make it work, just restart script',
      ch: "\u5347\u7EA7\u6210\u529F, \u8BF7\u91CD\u542F\u811A\u672C"
    },
    help: {
      en: "Made by: yf\nE-mail: yfsmallmoon@gmail.com\nSource Code: github.com/liuyingxuanlv\n\nchange language support autoreload\n\n\u264Fswitch : quick switch XMP/File source mode\n\n\u264Fsave : quick save note\n\n\u264Frefresh : quick refresh note, shift: quick refresh list\n\n\u264Fcreate : quick add a note\uFF0Cctrl/cmd quick add a folder\uFF0Cshift advance add panel\n\n\u264Fdelete : quick delete a note\uFF0Cctrl/cmd quick delete a folder\uFF0Cadvance delete panel\n\n\u264Flist : auto refresh list and text content\n\n\u264Fsettings : support English/Chinese language switch, custom expressionFolder\n\n\u264Fhelp : mouse hover quick helptip\n\n\u264Frename : quick rename note or folder\n\n\u25B6beauty : beautify text area and your expressions\n\n\u25B6beautyOptions : custom your beautify options\n\n\u25B6pick : get the property\"s path\n\n\u25B6export : export the text to selected properties\n\n\u25B6import : import the property\"s expression to the text area\n\n\u25B6toggle : enable or disable your properties\" expressions\n\n\u25B6cancel : cancel your beauty or import operations(only once)\n\n",
      ch: "\u4F5C\u8005: yf(\u5FC6\u7897\u725B\u6742\u9762)\n\u90AE\u7BB1: yfsmallmoon@gmail.com\n\u6E90\u7801\u6258\u7BA1\u5730\u5740: github.com/liuyingxuanlv\n\n\u6539\u53D8\u8BED\u8A00\u652F\u6301\u81EA\u52A8\u91CD\u8F7D\n\n\u264F\u5207\u6362 : \u5FEB\u901F\u5207\u6362XMP/\u6587\u4EF6\u8D44\u6E90\u6A21\u5F0F\n\n\u264F\u50A8\u5B58 : \u5FEB\u901F\u50A8\u5B58\u7B14\u8BB0\n\n\u264F\u5237\u65B0 : \u5FEB\u901F\u5237\u65B0\u7B14\u8BB0\uFF0Cshift\u5FEB\u901F\u5237\u65B0\u5217\u8868\n\n\u264F\u6DFB\u52A0 : \u5FEB\u901F\u6DFB\u52A0\u7B14\u8BB0\uFF0Cctrl/cmd\u5FEB\u901F\u6DFB\u52A0\u6587\u4EF6\u5939\uFF0Cshift\u9AD8\u7EA7\u6DFB\u52A0\u9762\u677F\n\n\u264F\u5220\u9664 : \u5FEB\u901F\u5220\u9664\u7B14\u8BB0\uFF0Cctrl/cmd\u5FEB\u901F\u5220\u9664\u6587\u4EF6\u5939\uFF0Cshift\u9AD8\u7EA7\u5220\u9664\u9762\u677F\n\n\u264F\u5217\u8868 : \u81EA\u52A8\u5237\u65B0\u5217\u8868\u548C\u6587\u5B57\u5185\u5BB9\n\n\u264F\u8BBE\u7F6E : \u652F\u6301\u4E2D\u82F1\u754C\u9762\u5207\u6362\uFF0C\u81EA\u5B9A\u4E49\u5207\u6362\u8868\u8FBE\u5F0F\u6587\u4EF6\u5939\n\n\u264F\u5E2E\u52A9 : \u60AC\u505C\u5FEB\u901F\u67E5\u770B\u63D0\u793A\n\n\u264F\u91CD\u547D\u540D : \u5FEB\u901F\u91CD\u547D\u540D\u7B14\u8BB0\u6216\u6587\u4EF6\u5939\n\n\u25B6\u7F8E\u5316 : \u83B7\u53D6\u5C5E\u6027\u8DEF\u5F84\u4EE3\u7801\n\n\u25B6\u7F8E\u5316\u9009\u9879 : \u81EA\u5B9A\u4E49\u7F8E\u5316\u89C4\u5219\n\n\u25B6\u62FE\u53D6 : \u83B7\u53D6\u5C5E\u6027\u8DEF\u5F84\u4EE3\u7801\n\n\u25B6\u5BFC\u51FA : \u5BFC\u51FA\u4EE3\u7801\u5230\u6240\u9009\u5C5E\u6027\n\n\u25B6\u5BFC\u5165 : \u5BFC\u5165\u5C5E\u6027\u8868\u8FBE\u5F0F\n\n\u25B6\u5207\u6362 : \u6FC0\u6D3B\u6216\u7981\u7528\u6240\u9009\u5C5E\u6027\u7684\u8868\u8FBE\u5F0F\n\n\u25B6\u64A4\u9500 : \u64A4\u9500\u7F8E\u5316\u6216\u5BFC\u5165\u64CD\u4F5C(\u4EC5\u4E00\u6B21)\n"
    }
  });
}();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    exp = _require.exp;

var loc = exp.loc;

var utils = __webpack_require__(5);
/** ***********************\u8d44\u6e90\u529f\u80fd************************************************** **/


var beautify = __webpack_require__(25);

var keyboard = __webpack_require__(33).key;

var ICONS = __webpack_require__(2);

var settingWindow = __webpack_require__(34);

var pickWindow = __webpack_require__(37);
/** **********************************\u754c\u9762\u7684\u4e00\u4e9b\u5237\u65b0\u529f\u80fd***************************************/


exp.extend({
  /** ***********************\u8f6c\u6362\u6a21\u5f0f************************************************** **/
  switchList: function switchList() {
    if (exp.mode === 'tree') {
      exp.mode = 'project';
      this.image = ICONS.switchXMP;
      exp.treeGroup.visible = 0;
      exp.xmpGroup.visible = 1;
      exp.xmpDroplist.getXMP();
    } else {
      exp.mode = 'tree';
      this.image = ICONS["switch"];
      exp.xmpGroup.visible = 0;
      exp.treeGroup.visible = 1;
      if (exp.currentFile) exp.edittext.text = exp.currentFile.readd();else exp.edittext.text = '';
    }
  },
  addFileBtn: function addFileBtn(toolGroup) {
    var switchBtn = exp.switchBtn = utils.add(toolGroup, {
      type: 'iconbutton',
      image: ICONS["switch"],
      bounds: [0, 0, 25, 25],
      alignment: ['left', 'top'],
      helpTip: loc(exp.switchTip),
      properties: {
        style: 'toolbutton'
      }
    });
    var saveBtn = exp.saveBtn = utils.add(toolGroup, {
      type: 'iconbutton',
      image: ICONS.saveFile,
      bounds: [0, 0, 25, 25],
      alignment: ['left', 'top'],
      helpTip: loc(exp.saveTip),
      properties: {
        style: 'toolbutton'
      }
    });
    var refreshBtn = exp.refreshBtn = utils.add(toolGroup, {
      type: 'iconbutton',
      image: ICONS.refresh,
      bounds: [0, 0, 25, 25],
      alignment: ['left', 'top'],
      helpTip: loc(exp.refreshTip),
      properties: {
        style: 'toolbutton'
      }
    });
    var createBtn = exp.createBtn = utils.add(toolGroup, {
      type: 'iconbutton',
      image: ICONS.createNew,
      bounds: [0, 0, 25, 25],
      alignment: ['left', 'top'],
      helpTip: loc(exp.createTip),
      properties: {
        style: 'toolbutton'
      }
    });
    var deleteBtn = exp.deleteBtn = utils.add(toolGroup, {
      type: 'iconbutton',
      image: ICONS.deleteTxt,
      bounds: [0, 0, 25, 25],
      alignment: ['left', 'top'],
      helpTip: loc(exp.deleteTip),
      properties: {
        style: 'toolbutton'
      }
    });
    switchBtn.onClick = exp.switchList;
    saveBtn.onClick = exp.saveEdittext;
    refreshBtn.onClick = exp.refreshEdittext;
    createBtn.onClick = exp.createNew;
    deleteBtn.onClick = exp.deleteNew;
  },
  addToolBtn: function addToolBtn(bottomGroup) {
    var edittext = exp.edittext;
    var betBtn = exp.betBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS.beauty,
      bounds: exp.bounds + [0, 0, 10, 0],
      alignment: ['left', 'bottom'],
      helpTip: loc(exp.betTip),
      properties: {
        style: 'toolbutton'
      }
    });
    var pickBtn = exp.pickBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS.pick,
      bounds: exp.bounds + [0, 0, 10, 0],
      alignment: ['left', 'bottom'],
      helpTip: loc(exp.pickTip),
      properties: {
        style: 'toolbutton'
      }
    });
    var undoBtn = exp.undoBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS.undo,
      bounds: exp.bounds + [0, 0, 10, 0],
      alignment: ['left', 'bottom'],
      helpTip: loc(exp.undoTip),
      properties: {
        style: 'toolbutton'
      }
    });
    var exportBtn = exp.exportBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS["export"],
      bounds: exp.bounds,
      alignment: ['center', 'bottom'],
      helpTip: loc(exp.exportTip),
      properties: {
        style: 'toolbutton'
      }
    });
    var importBtn = exp.importBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS["import"],
      bounds: exp.bounds,
      alignment: ['center', 'bottom'],
      helpTip: loc(exp.importTip),
      properties: {
        style: 'toolbutton'
      }
    });
    var toggleBtn = exp.toggleBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS.toggle,
      bounds: exp.bounds,
      alignment: ['center', 'bottom'],
      helpTip: loc(exp.toggleTip),
      properties: {
        style: 'toolbutton'
      }
    });
    var cancelBtn = exp.cancelBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS.cancel,
      bounds: exp.bounds,
      alignment: ['center', 'bottom'],
      helpTip: loc(exp.cancelTip),
      properties: {
        style: 'toolbutton'
      }
    });
    var renameBtn = exp.renameBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS.rename,
      bounds: [0, 0, 25, 25],
      alignment: ['right', 'bottom'],
      helpTip: loc(exp.renameTip),
      properties: {
        style: 'toolbutton'
      }
    });
    var setBtn = exp.setBtn = utils.add(bottomGroup, {
      type: 'iconbutton',
      image: ICONS.info,
      bounds: [0, 0, 25, 25],
      alignment: ['right', 'bottom'],
      helpTip: loc(exp.setTip),
      properties: {
        style: 'toolbutton'
      }
    });
    betBtn.addEventListener('mousedown', function (event) {
      if (event.button === 0) {
        try {
          exp.beautyBefore = edittext.text;
          edittext.text = beautify(edittext.text, exp.options);
        } catch (err) {
          alert('Line #' + err.line.toString() + '\r\n' + err.toString());
        }
      }

      if (event.button === 2) exp.beautyOptions();
    });

    undoBtn.onClick = function () {
      edittext.text = exp.beautyBefore;
    };

    exportBtn.onClick = function () {
      var comp = app.project.activeItem;
      if (!(comp instanceof CompItem)) return alert(loc(exp.needComp));
      var props = comp.selectedProperties;
      if (props.length === 0) return alert(loc(exp.needProperties));
      app.beginUndoGroup(loc(exp.exportStr));

      for (var i = 0; i < comp.selectedProperties.length; i++) {
        if (props[i].canSetExpression) props[i].expression = edittext.text;
      }

      app.endUndoGroup();
    };

    importBtn.onClick = function () {
      var comp = app.project.activeItem;
      if (!(comp instanceof CompItem)) return alert(loc(exp.needComp));
      var props = comp.selectedProperties;
      if (props.length === 0) return alert(loc(exp.needProperties));
      exp.beautyBefore = edittext.text;
      if (props[props.length - 1].expressionEnabled) edittext.text = props[props.length - 1].expression;
    };

    toggleBtn.onClick = function () {
      var comp = app.project.activeItem;
      if (!(comp instanceof CompItem)) return alert(loc(exp.needComp));
      var props = comp.selectedProperties;
      if (props.length === 0) return alert(loc(exp.needProperties));

      for (var i = 0; i < comp.selectedProperties.length; i++) {
        props[i].expressionEnabled = !props[i].expressionEnabled;
      }
    };

    cancelBtn.onClick = function () {
      var comp = app.project.activeItem;
      if (!(comp instanceof CompItem)) return alert(loc(exp.needComp));
      var props = comp.selectedProperties;
      if (props.length === 0) return alert(loc(exp.needProperties));
      app.beginUndoGroup(loc(exp.undoStr));

      for (var i = 0; i < comp.selectedProperties.length; i++) {
        if (props[i].canSetExpression) props[i].expression = '';
      }

      app.endUndoGroup();
    };

    pickBtn.onClick = pickWindow;
    setBtn.onClick = settingWindow;
    renameBtn.onClick = exp.renameNew;
  },
  formatOptions: function formatOptions(text) {
    var pre = text.split('{')[1].split('}')[0];
    var content = pre.split(', "');
    var str = '{' + '\n' + content.join(',\n"') + '\n' + '}';
    return str;
  },
  beautyOptions: function beautyOptions() {
    var win = utils.add('', {
      type: 'palette',
      text: loc(exp.optionsStr),
      properties: {
        borderless: false
      }
    });
    var cafx = utils.add(win, {
      type: 'image',
      image: ICONS.cafx,
      alignment: ['fill', 'fill'],
      preferredSize: [300, 40]
    });
    cafx.addEventListener('mouseover', function () {
      this.image = ICONS.cafxlog;
    });
    cafx.addEventListener('mouseout', function () {
      this.image = ICONS.cafx;
    }); // \u7f16\u8f91\u680f

    var panel = win.add("panel{orientation:'column',alignment:['fill','top']}");
    var link = utils.add(panel, {
      type: 'statictext',
      text: loc(exp.link),
      alignment: ['fill', 'fill']
    });
    link.graphics.foregroundColor = link.graphics.newPen(link.graphics.PenType.SOLID_COLOR, [1, 1, 0], 1);
    var options = utils.add(panel, {
      type: 'edittext',
      text: beautify(exp.formatOptions(JSON.stringify(exp.options))),
      alignment: ['fill', 'fill'],
      properties: {
        multiline: true,
        scrolling: true
      }
    }); // \u786e\u8ba4\u680f

    var group = win.add("Group{orientation:'row',alignment:['fill','bottom'],spacing:0,margins:0}");
    var refresh = utils.add(group, {
      type: 'button',
      text: loc(exp.refreshStr),
      alignment: ['left', 'bottom']
    });
    var ok = utils.add(group, {
      type: 'button',
      text: loc(exp.okStr),
      alignment: ['right', 'bottom']
    }); // \u529f\u80fd\u680f

    link.addEventListener('mousedown', function () {
      exp.openLink(exp.beautylink);
    });

    refresh.onClick = function () {
      options.text = beautify(exp.formatOptions(JSON.stringify(exp.options)));
    };

    ok.onClick = function () {
      try {
        exp.saveSetting('options', options.text);
        exp.options = JSON.parse(options.text);
      } catch (e) {
        alert(loc(exp.optionsErr));
      }
    };

    win.center();
    win.show();
  },

  /** ***********************initXMP************************************************** **/
  initXMP: function initXMP(parent) {
    var drop = exp.xmpDroplist = parent.add('Dropdownlist{title:"xmp"}');
    drop.onChange = drop.getXMP;
    drop.refreshXMP();
  },
  addXMP: function addXMP(name, note) {
    var xmpData = new XMPMeta(app.project.xmpPacket);
    var nsPrefix = exp.nsPrefix;
    var schemaName = exp.schemaName;

    if (!xmpData.doesPropertyExist(nsPrefix, schemaName)) {
      xmpData.setProperty(nsPrefix, schemaName, null, XMPConst.PROP_IS_ARRAY);
    }

    xmpData.appendArrayItem(nsPrefix, schemaName, escape('' + name + '\n\n' + note));
    app.project.xmpPacket = xmpData.serialize();
  },

  /** ***********************\u6dfb\u52a0\u6216\u5220\u9664list************************************************** **/
  addDroplist: function addDroplist(parent, folder) {
    var list = exp.list;
    var drop = list[list.length] = parent.add('Dropdownlist{title:"' + list.length + '"}');
    drop.helpTip = String(list.length - 1) + loc(exp.levelTip);
    drop.refreshList(folder);
    drop.onChange = exp.reloadDroplist;
    return drop;
  },
  removeDroplist: function removeDroplist(parent, index) {
    var list = exp.list;

    for (var i = index + 1; i < list.length; i++) {
      parent.remove(list[i]);
    }

    exp.list = list.slice(0, index + 1);
  },
  checkDroplist: function checkDroplist(parent, index) {
    var list = exp.list;

    if (index < list.length - 1) {
      exp.removeDroplist(parent, index);
    }
  },

  /** ***********************reloadList************************************************** **/
  initList: function initList(parent) {
    exp.list = [];
    parent.removeAll();
    exp.addDroplist(parent, exp.expressionFolder);
  },
  reloadDroplist: function reloadDroplist() {
    var list = exp.list;
    var index = list.indexOf(this);
    exp.checkDroplist(this.parent, index);

    if (!this.selection.source) {
      exp.currentFile = null;
      exp.edittext.text = '';
      return;
    }

    var source = this.selection.source;

    if (source instanceof Folder) {
      exp.addDroplist(this.parent, source);
      exp.winOps.refresh(exp.win);
    } else {
      exp.currentFile = source;
      exp.edittext.text = source.readd();
      exp.winOps.refresh(exp.win);
    }
  },
  refreshEdittext: function refreshEdittext() {
    var key = keyboard();

    if (exp.mode === 'tree') {
      if (String(key) === 'shift') exp.initList(exp.treeGroup);
      if (key === null) exp.edittext.text = exp.currentFile.readd();
    } else {
      if (String(key) === 'shift') exp.xmpDroplist.refreshXMP();
      if (key === null) exp.xmpDroplist.getXMP();
    }
  },

  /** ***********************\u6e90\u6587\u4ef6\u64cd\u4f5c************************************************** **/
  saveEdittext: function saveEdittext() {
    if (exp.mode === 'tree') {
      exp.currentFile.writee(exp.edittext.text);
    } else {
      exp.xmpDroplist.saveXMP();
    }
  },
  renameNew: function renameNew() {
    try {
      var name;
      var key = keyboard();
      var list = exp.list;
      var xmp = exp.xmpDroplist;
      var parent = list[list.length - 1];
      var pparent = list[list.length - 2];

      if (exp.mode === 'tree') {
        if (String(key) === 'shift') exp.renameAdv();

        if (String(key) === 'cmd') {
          name = prompt("\u8BF7\u8F93\u5165\u65B0\u7684\u6587\u4EF6\u5939\u540D\u79F0(\uFF61\uFF65\u03C9\uFF65\uFF61)", '');
          if (!name) return;
          pparent.renameFolder(name);
        }

        if (key === null) {
          if (parent.checkFile()) {
            name = prompt("\u8BF7\u8F93\u5165\u65B0\u7684\u6587\u4EF6\u540D\u79F0(\uFF61\uFF65\u03C9\uFF65\uFF61)", '');
            if (!name) return;
            parent.renameFile(name);
          } else {
            name = prompt("\u8BF7\u8F93\u5165\u65B0\u7684\u6587\u4EF6\u5939\u540D\u79F0(\uFF61\uFF65\u03C9\uFF65\uFF61)", '');
            if (!name) return;
            pparent.renameFolder(name);
          }
        }
      } else {
        name = prompt("\u8BF7\u8F93\u5165\u65B0\u7684XMP\u6587\u4EF6\u540D\u79F0(\uFF61\uFF65\u03C9\uFF65\uFF61)", '');
        if (!name) return;
        xmp.renameXMP(name);
        xmp.refreshXMP();
        xmp.reSelectXMP(name);
      }
    } catch (err) {
      alert('Line #' + err.line.toString() + '\r\n' + err.toString());
    }
  },
  createNew: function createNew() {
    try {
      var name;
      var key = keyboard();
      var list = exp.list;
      var xmp = exp.xmpDroplist;
      var parent = list[list.length - 1];

      if (exp.mode === 'tree') {
        if (String(key) === 'shift') exp.creatAdv();

        if (String(key) === 'cmd') {
          name = prompt("\u8BF7\u8F93\u5165\u6587\u4EF6\u5939\u540D\u79F0(\xB4\uFF65\u03C9\uFF65\uFF40)", '');
          if (!name) return;
          parent.createFolder(name);
        }

        if (key === null) {
          name = prompt("\u8BF7\u8F93\u5165\u6587\u4EF6\u540D\u79F0(\xB4\uFF65\u03C9\uFF65\uFF40)", '');
          if (!name) return;
          parent.createFile(name);
        }
      } else {
        name = prompt("\u8BF7\u8F93\u5165XMP\u6587\u4EF6\u540D\u79F0(\xB4\uFF65\u03C9\uFF65\uFF40)", '');
        if (!name) return;
        exp.addXMP(name, '');
        xmp.refreshXMP();
        xmp.reSelectXMP(name);
      }
    } catch (err) {
      alert('Line #' + err.line.toString() + '\r\n' + err.toString());
    }
  },
  deleteNew: function deleteNew() {
    try {
      var key = keyboard();
      var list = exp.list;
      var parent = list[list.length - 1];
      var pparent = list[list.length - 2];

      if (exp.mode === 'tree') {
        if (String(key) === 'shift') exp.deleteAdv();
        if (String(key) === 'cmd') pparent.deleteOne();
        if (key === null) !parent.selection.source ? pparent.deleteOne() : parent.deleteOne();
      } else exp.xmpDroplist.deleteXMP();
    } catch (err) {
      alert('Line #' + err.line.toString() + '\r\n' + err.toString());
    }
  },
  createRadioBtn: function createRadioBtn(parent) {
    var list = exp.list;
    var btnArrays = [];

    for (var i = 0, len = list.length; i < len; i++) {
      btnArrays.push(utils.add(parent, {
        type: 'radiobutton',
        text: i,
        helpTip: i + loc(exp.levelTip),
        alignment: ['fill', 'fill']
      }));

      btnArrays[i].onClick = function () {
        btnArrays.parent = list[this.text];
      };
    }

    btnArrays[len - 1].value = true;
    btnArrays.parent = list[len - 1];
    return btnArrays;
  },
  creatAdv: function creatAdv() {
    var win = utils.add('', {
      type: 'palette',
      text: loc(exp.createStr),
      properties: {
        borderless: false
      }
    });
    var cafx = utils.add(win, {
      type: 'image',
      image: ICONS.cafx,
      alignment: ['fill', 'fill'],
      preferredSize: [300, 40]
    });
    cafx.addEventListener('mouseover', function () {
      this.image = ICONS.cafxlog;
    });
    cafx.addEventListener('mouseout', function () {
      this.image = ICONS.cafx;
    }); // \u7f16\u8f91\u680f

    var panel1 = win.add("panel{orientation:'column',alignment:['fill','top'],text: '" + loc(exp.folderStr) + "'}");
    var group1 = panel1.add("Group{orientation:'row',alignment:['fill','top'],spacing:0,margins:0}");
    var radioBtn1 = exp.createRadioBtn(group1);
    var folder = utils.add(panel1, {
      type: 'edittext',
      text: '',
      characters: 30,
      alignment: ['fill', 'fill']
    });
    var panel2 = win.add("panel{orientation:'column',alignment:['fill','top'],text: '" + loc(exp.fileStr) + "'}");
    var group2 = panel2.add("Group{orientation:'row',alignment:['fill','top'],spacing:0,margins:0}");
    var radioBtn2 = exp.createRadioBtn(group2);
    var file = utils.add(panel2, {
      type: 'edittext',
      text: '',
      characters: 30,
      alignment: ['fill', 'fill']
    }); // \u786e\u8ba4\u680f

    var group = win.add("Group{orientation:'row',alignment:['fill','bottom'],spacing:0,margins:0}");
    var refresh = utils.add(group, {
      type: 'button',
      text: loc(exp.refreshStr),
      helpTip: loc(exp.advlistTip),
      alignment: ['left', 'bottom']
    });
    var ok = utils.add(group, {
      type: 'button',
      text: loc(exp.okStr),
      alignment: ['right', 'bottom'],
      enabled: false
    }); // \u529f\u80fd\u680f

    folder.onChanging = file.onChanging = function () {
      // Enable OK button if not empty
      if (folder.text.length === 0 && file.text.length === 0) ok.enabled = false;else ok.enabled = true;
    };

    refresh.onClick = function () {
      group1.removeAll();
      group2.removeAll();
      radioBtn1 = exp.createRadioBtn(group1);
      radioBtn2 = exp.createRadioBtn(group2);
      win.layout.layout(true);
    };

    ok.onClick = function () {
      folder.text && radioBtn1.parent.createFolder(folder.text);
      file.text && radioBtn2.parent.createFile(file.text);
    };

    win.center();
    win.show();
  },
  deleteAdv: function deleteAdv() {
    var win = utils.add('', {
      type: 'palette',
      text: loc(exp.deleteStr),
      properties: {
        borderless: false
      }
    });
    var cafx = utils.add(win, {
      type: 'image',
      image: ICONS.cafx,
      alignment: ['fill', 'fill'],
      preferredSize: [300, 40]
    });
    cafx.addEventListener('mouseover', function () {
      this.image = ICONS.cafxlog;
    });
    cafx.addEventListener('mouseout', function () {
      this.image = ICONS.cafx;
    }); // \u7f16\u8f91\u680f

    var panel1 = win.add("panel{orientation:'row',alignment:['fill','top'],text: '" + loc(exp.folderStr) + "'}");
    var group1 = panel1.add("Group{orientation:'row',alignment:['fill','fill'],spacing:0,margins:0}");
    var radioBtn1 = exp.createRadioBtn(group1);
    var folderIcon = utils.add(panel1, {
      type: 'iconbutton',
      image: ICONS.none,
      helpTip: loc(exp.noneTip),
      alignment: ['right', 'right'],
      properties: {
        style: 'toolbutton'
      }
    });
    var panel2 = win.add("panel{orientation:'row',alignment:['fill','top'],text: '" + loc(exp.fileStr) + "'}");
    var group2 = panel2.add("Group{orientation:'row',alignment:['fill','fill'],spacing:0,margins:0}");
    var radioBtn2 = exp.createRadioBtn(group2);
    var fileIcon = utils.add(panel2, {
      type: 'iconbutton',
      image: ICONS.none,
      helpTip: loc(exp.noneTip),
      alignment: ['right', 'right'],
      properties: {
        style: 'toolbutton'
      }
    }); // \u786e\u8ba4\u680f

    var group = win.add("Group{orientation:'row',alignment:['fill','bottom'],spacing:0,margins:0}");
    var refresh = utils.add(group, {
      type: 'button',
      text: loc(exp.refreshStr),
      helpTip: loc(exp.advlistTip),
      alignment: ['left', 'bottom']
    });
    var ok = utils.add(group, {
      type: 'button',
      text: loc(exp.okStr),
      alignment: ['right', 'bottom']
    }); // \u529f\u80fd\u680f

    folderIcon.onClick = fileIcon.onClick = function () {
      this.image = this.image.name === ICONS.none.name ? ICONS.noneTint : ICONS.none;
      this.active = false;
    };

    refresh.onClick = function () {
      group1.removeAll();
      group2.removeAll();
      radioBtn1 = exp.createRadioBtn(group1);
      radioBtn2 = exp.createRadioBtn(group2);
      win.layout.layout(true);
    };

    ok.onClick = function () {
      folderIcon.image.name === ICONS.none.name ? radioBtn1.parent.deleteFolder() : '';
      fileIcon.image.name === ICONS.none.name ? radioBtn2.parent.deleteFile() : '';
    };

    win.center();
    win.show();
  },
  renameAdv: function renameAdv() {
    var loc = exp.loc;
    var win = utils.add('', {
      type: 'palette',
      text: loc(exp.renameStr),
      properties: {
        borderless: false
      }
    });
    var cafx = utils.add(win, {
      type: 'image',
      image: ICONS.cafx,
      alignment: ['fill', 'fill'],
      preferredSize: [300, 40]
    });
    cafx.addEventListener('mouseover', function () {
      this.image = ICONS.cafxlog;
    });
    cafx.addEventListener('mouseout', function () {
      this.image = ICONS.cafx;
    }); // \u7f16\u8f91\u680f

    var panel1 = win.add("panel{orientation:'column',alignment:['fill','top'],text: '" + loc(exp.folderStr) + "'}");
    var group1 = panel1.add("Group{orientation:'row',alignment:['fill','top'],spacing:0,margins:0}");
    var radioBtn1 = exp.createRadioBtn(group1);
    var folder = utils.add(panel1, {
      type: 'edittext',
      text: '',
      characters: 30,
      alignment: ['fill', 'fill']
    });
    var panel2 = win.add("panel{orientation:'column',alignment:['fill','top'],text: '" + loc(exp.fileStr) + "'}");
    var group2 = panel2.add("Group{orientation:'row',alignment:['fill','top'],spacing:0,margins:0}");
    var radioBtn2 = exp.createRadioBtn(group2);
    var file = utils.add(panel2, {
      type: 'edittext',
      text: '',
      characters: 30,
      alignment: ['fill', 'fill']
    }); // \u786e\u8ba4\u680f

    var group = win.add("Group{orientation:'row',alignment:['fill','bottom'],spacing:0,margins:0}");
    var refresh = utils.add(group, {
      type: 'button',
      text: loc(exp.refreshStr),
      helpTip: loc(exp.advlistTip),
      alignment: ['left', 'bottom']
    });
    var ok = utils.add(group, {
      type: 'button',
      text: loc(exp.okStr),
      alignment: ['right', 'bottom'],
      enabled: false
    }); // \u529f\u80fd\u680f

    folder.onChanging = file.onChanging = function () {
      // Enable OK button if not empty
      if (folder.text.length === 0 && file.text.length === 0) ok.enabled = false;else ok.enabled = true;
    };

    refresh.onClick = function () {
      group1.removeAll();
      group2.removeAll();
      radioBtn1 = exp.createRadioBtn(group1);
      radioBtn2 = exp.createRadioBtn(group2);
      win.layout.layout(true);
    };

    ok.onClick = function () {
      folder.text && radioBtn1.parent.renameFolder(folder.text);
      file.text && radioBtn2.parent.renameFile(file.text);
    };

    win.center();
    win.show();
  }
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */

/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/


var Beautifier = __webpack_require__(26).Beautifier,
    Options = __webpack_require__(8).Options;

function js_beautify(js_source_text, options) {
  var beautifier = new Beautifier(js_source_text, options);
  return beautifier.beautify();
}

module.exports = js_beautify;

module.exports.defaultOptions = function () {
  return new Options();
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */

/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/


var Output = __webpack_require__(27).Output;

var Token = __webpack_require__(6).Token;

var acorn = __webpack_require__(7);

var Options = __webpack_require__(8).Options;

var Tokenizer = __webpack_require__(1).Tokenizer;

var line_starters = __webpack_require__(1).line_starters;

var positionable_operators = __webpack_require__(1).positionable_operators;

var TOKEN = __webpack_require__(1).TOKEN;

function in_array(what, arr) {
  return arr.indexOf(what) !== -1;
}

function ltrim(s) {
  return s.replace(/^\s+/g, '');
}

function generateMapFromStrings(list) {
  var result = {};

  for (var x = 0; x < list.length; x++) {
    // make the mapped names underscored instead of dash
    result[list[x].replace(/-/g, '_')] = list[x];
  }

  return result;
}

function reserved_word(token, word) {
  return token && token.type === TOKEN.RESERVED && token.text === word;
}

function reserved_array(token, words) {
  return token && token.type === TOKEN.RESERVED && in_array(token.text, words);
} // Unsure of what they mean, but they work. Worth cleaning up in future.


var special_words = ['case', 'return', 'do', 'if', 'throw', 'else', 'await', 'break', 'continue', 'async'];
var validPositionValues = ['before-newline', 'after-newline', 'preserve-newline']; // Generate map from array

var OPERATOR_POSITION = generateMapFromStrings(validPositionValues);
var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];
var MODE = {
  BlockStatement: 'BlockStatement',
  // 'BLOCK'
  Statement: 'Statement',
  // 'STATEMENT'
  ObjectLiteral: 'ObjectLiteral',
  // 'OBJECT',
  ArrayLiteral: 'ArrayLiteral',
  //'[EXPRESSION]',
  ForInitializer: 'ForInitializer',
  //'(FOR-EXPRESSION)',
  Conditional: 'Conditional',
  //'(COND-EXPRESSION)',
  Expression: 'Expression' //'(EXPRESSION)'

};

function remove_redundant_indentation(output, frame) {
  // This implementation is effective but has some issues:
  //     - can cause line wrap to happen too soon due to indent removal
  //           after wrap points are calculated
  // These issues are minor compared to ugly indentation.
  if (frame.multiline_frame || frame.mode === MODE.ForInitializer || frame.mode === MODE.Conditional) {
    return;
  } // remove one indent from each line inside this section


  output.remove_indent(frame.start_line_index);
} // we could use just string.split, but
// IE doesn't like returning empty strings


function split_linebreaks(s) {
  //return s.split(/\x0d\x0a|\x0a/);
  s = s.replace(acorn.allLineBreaks, '\n');
  var out = [],
      idx = s.indexOf("\n");

  while (idx !== -1) {
    out.push(s.substring(0, idx));
    s = s.substring(idx + 1);
    idx = s.indexOf("\n");
  }

  if (s.length) {
    out.push(s);
  }

  return out;
}

function is_array(mode) {
  return mode === MODE.ArrayLiteral;
}

function is_expression(mode) {
  return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
}

function all_lines_start_with(lines, c) {
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();

    if (line.charAt(0) !== c) {
      return false;
    }
  }

  return true;
}

function each_line_matches_indent(lines, indent) {
  var i = 0,
      len = lines.length,
      line;

  for (; i < len; i++) {
    line = lines[i]; // allow empty lines to pass through

    if (line && line.indexOf(indent) !== 0) {
      return false;
    }
  }

  return true;
}

function Beautifier(source_text, options) {
  options = options || {};
  this._source_text = source_text || '';
  this._output = null;
  this._tokens = null;
  this._last_last_text = null;
  this._flags = null;
  this._previous_flags = null;
  this._flag_store = null;
  this._options = new Options(options);
}

Beautifier.prototype.create_flags = function (flags_base, mode) {
  var next_indent_level = 0;

  if (flags_base) {
    next_indent_level = flags_base.indentation_level;

    if (!this._output.just_added_newline() && flags_base.line_indent_level > next_indent_level) {
      next_indent_level = flags_base.line_indent_level;
    }
  }

  var next_flags = {
    mode: mode,
    parent: flags_base,
    last_token: flags_base ? flags_base.last_token : new Token(TOKEN.START_BLOCK, ''),
    // last token text
    last_word: flags_base ? flags_base.last_word : '',
    // last TOKEN.WORD passed
    declaration_statement: false,
    declaration_assignment: false,
    multiline_frame: false,
    inline_frame: false,
    if_block: false,
    else_block: false,
    do_block: false,
    do_while: false,
    import_block: false,
    in_case_statement: false,
    // switch(..){ INSIDE HERE }
    in_case: false,
    // we're on the exact line with "case 0:"
    case_body: false,
    // the indented case-action block
    indentation_level: next_indent_level,
    alignment: 0,
    line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
    start_line_index: this._output.get_line_number(),
    ternary_depth: 0
  };
  return next_flags;
};

Beautifier.prototype._reset = function (source_text) {
  var baseIndentString = source_text.match(/^[\t ]*/)[0];
  this._last_last_text = ''; // pre-last token text

  this._output = new Output(this._options, baseIndentString); // If testing the ignore directive, start with output disable set to true

  this._output.raw = this._options.test_output_raw; // Stack of parsing/formatting states, including MODE.
  // We tokenize, parse, and output in an almost purely a forward-only stream of token input
  // and formatted output.  This makes the beautifier less accurate than full parsers
  // but also far more tolerant of syntax errors.
  //
  // For example, the default mode is MODE.BlockStatement. If we see a '{' we push a new frame of type
  // MODE.BlockStatement on the the stack, even though it could be object literal.  If we later
  // encounter a ":", we'll switch to to MODE.ObjectLiteral.  If we then see a ";",
  // most full parsers would die, but the beautifier gracefully falls back to
  // MODE.BlockStatement and continues on.

  this._flag_store = [];
  this.set_mode(MODE.BlockStatement);
  var tokenizer = new Tokenizer(source_text, this._options);
  this._tokens = tokenizer.tokenize();
  return source_text;
};

Beautifier.prototype.beautify = function () {
  // if disabled, return the input unchanged.
  if (this._options.disabled) {
    return this._source_text;
  }

  var sweet_code;

  var source_text = this._reset(this._source_text);

  var eol = this._options.eol;

  if (this._options.eol === 'auto') {
    eol = '\n';

    if (source_text && acorn.lineBreak.test(source_text || '')) {
      eol = source_text.match(acorn.lineBreak)[0];
    }
  }

  var current_token = this._tokens.next();

  while (current_token) {
    this.handle_token(current_token);
    this._last_last_text = this._flags.last_token.text;
    this._flags.last_token = current_token;
    current_token = this._tokens.next();
  }

  sweet_code = this._output.get_code(eol);
  return sweet_code;
};

Beautifier.prototype.handle_token = function (current_token, preserve_statement_flags) {
  if (current_token.type === TOKEN.START_EXPR) {
    this.handle_start_expr(current_token);
  } else if (current_token.type === TOKEN.END_EXPR) {
    this.handle_end_expr(current_token);
  } else if (current_token.type === TOKEN.START_BLOCK) {
    this.handle_start_block(current_token);
  } else if (current_token.type === TOKEN.END_BLOCK) {
    this.handle_end_block(current_token);
  } else if (current_token.type === TOKEN.WORD) {
    this.handle_word(current_token);
  } else if (current_token.type === TOKEN.RESERVED) {
    this.handle_word(current_token);
  } else if (current_token.type === TOKEN.SEMICOLON) {
    this.handle_semicolon(current_token);
  } else if (current_token.type === TOKEN.STRING) {
    this.handle_string(current_token);
  } else if (current_token.type === TOKEN.EQUALS) {
    this.handle_equals(current_token);
  } else if (current_token.type === TOKEN.OPERATOR) {
    this.handle_operator(current_token);
  } else if (current_token.type === TOKEN.COMMA) {
    this.handle_comma(current_token);
  } else if (current_token.type === TOKEN.BLOCK_COMMENT) {
    this.handle_block_comment(current_token, preserve_statement_flags);
  } else if (current_token.type === TOKEN.COMMENT) {
    this.handle_comment(current_token, preserve_statement_flags);
  } else if (current_token.type === TOKEN.DOT) {
    this.handle_dot(current_token);
  } else if (current_token.type === TOKEN.EOF) {
    this.handle_eof(current_token);
  } else if (current_token.type === TOKEN.UNKNOWN) {
    this.handle_unknown(current_token, preserve_statement_flags);
  } else {
    this.handle_unknown(current_token, preserve_statement_flags);
  }
};

Beautifier.prototype.handle_whitespace_and_comments = function (current_token, preserve_statement_flags) {
  var newlines = current_token.newlines;
  var keep_whitespace = this._options.keep_array_indentation && is_array(this._flags.mode);

  if (current_token.comments_before) {
    var comment_token = current_token.comments_before.next();

    while (comment_token) {
      // The cleanest handling of inline comments is to treat them as though they aren't there.
      // Just continue formatting and the behavior should be logical.
      // Also ignore unknown tokens.  Again, this should result in better behavior.
      this.handle_whitespace_and_comments(comment_token, preserve_statement_flags);
      this.handle_token(comment_token, preserve_statement_flags);
      comment_token = current_token.comments_before.next();
    }
  }

  if (keep_whitespace) {
    for (var i = 0; i < newlines; i += 1) {
      this.print_newline(i > 0, preserve_statement_flags);
    }
  } else {
    if (this._options.max_preserve_newlines && newlines > this._options.max_preserve_newlines) {
      newlines = this._options.max_preserve_newlines;
    }

    if (this._options.preserve_newlines) {
      if (newlines > 1) {
        this.print_newline(false, preserve_statement_flags);

        for (var j = 1; j < newlines; j += 1) {
          this.print_newline(true, preserve_statement_flags);
        }
      }
    }
  }
};

var newline_restricted_tokens = ['async', 'break', 'continue', 'return', 'throw', 'yield'];

Beautifier.prototype.allow_wrap_or_preserved_newline = function (current_token, force_linewrap) {
  force_linewrap = force_linewrap === undefined ? false : force_linewrap; // Never wrap the first token on a line

  if (this._output.just_added_newline()) {
    return;
  }

  var shouldPreserveOrForce = this._options.preserve_newlines && current_token.newlines || force_linewrap;
  var operatorLogicApplies = in_array(this._flags.last_token.text, positionable_operators) || in_array(current_token.text, positionable_operators);

  if (operatorLogicApplies) {
    var shouldPrintOperatorNewline = in_array(this._flags.last_token.text, positionable_operators) && in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE) || in_array(current_token.text, positionable_operators);
    shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
  }

  if (shouldPreserveOrForce) {
    this.print_newline(false, true);
  } else if (this._options.wrap_line_length) {
    if (reserved_array(this._flags.last_token, newline_restricted_tokens)) {
      // These tokens should never have a newline inserted
      // between them and the following expression.
      return;
    }

    this._output.set_wrap_point();
  }
};

Beautifier.prototype.print_newline = function (force_newline, preserve_statement_flags) {
  if (!preserve_statement_flags) {
    if (this._flags.last_token.text !== ';' && this._flags.last_token.text !== ',' && this._flags.last_token.text !== '=' && (this._flags.last_token.type !== TOKEN.OPERATOR || this._flags.last_token.text === '--' || this._flags.last_token.text === '++')) {
      var next_token = this._tokens.peek();

      while (this._flags.mode === MODE.Statement && !(this._flags.if_block && reserved_word(next_token, 'else')) && !this._flags.do_block) {
        this.restore_mode();
      }
    }
  }

  if (this._output.add_new_line(force_newline)) {
    this._flags.multiline_frame = true;
  }
};

Beautifier.prototype.print_token_line_indentation = function (current_token) {
  if (this._output.just_added_newline()) {
    if (this._options.keep_array_indentation && current_token.newlines && (current_token.text === '[' || is_array(this._flags.mode))) {
      this._output.current_line.set_indent(-1);

      this._output.current_line.push(current_token.whitespace_before);

      this._output.space_before_token = false;
    } else if (this._output.set_indent(this._flags.indentation_level, this._flags.alignment)) {
      this._flags.line_indent_level = this._flags.indentation_level;
    }
  }
};

Beautifier.prototype.print_token = function (current_token) {
  if (this._output.raw) {
    this._output.add_raw_token(current_token);

    return;
  }

  if (this._options.comma_first && current_token.previous && current_token.previous.type === TOKEN.COMMA && this._output.just_added_newline()) {
    if (this._output.previous_line.last() === ',') {
      var popped = this._output.previous_line.pop(); // if the comma was already at the start of the line,
      // pull back onto that line and reprint the indentation


      if (this._output.previous_line.is_empty()) {
        this._output.previous_line.push(popped);

        this._output.trim(true);

        this._output.current_line.pop();

        this._output.trim();
      } // add the comma in front of the next token


      this.print_token_line_indentation(current_token);

      this._output.add_token(',');

      this._output.space_before_token = true;
    }
  }

  this.print_token_line_indentation(current_token);
  this._output.non_breaking_space = true;

  this._output.add_token(current_token.text);

  if (this._output.previous_token_wrapped) {
    this._flags.multiline_frame = true;
  }
};

Beautifier.prototype.indent = function () {
  this._flags.indentation_level += 1;

  this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
};

Beautifier.prototype.deindent = function () {
  if (this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level)) {
    this._flags.indentation_level -= 1;

    this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }
};

Beautifier.prototype.set_mode = function (mode) {
  if (this._flags) {
    this._flag_store.push(this._flags);

    this._previous_flags = this._flags;
  } else {
    this._previous_flags = this.create_flags(null, mode);
  }

  this._flags = this.create_flags(this._previous_flags, mode);

  this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
};

Beautifier.prototype.restore_mode = function () {
  if (this._flag_store.length > 0) {
    this._previous_flags = this._flags;
    this._flags = this._flag_store.pop();

    if (this._previous_flags.mode === MODE.Statement) {
      remove_redundant_indentation(this._output, this._previous_flags);
    }

    this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }
};

Beautifier.prototype.start_of_object_property = function () {
  return this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement && (this._flags.last_token.text === ':' && this._flags.ternary_depth === 0 || reserved_array(this._flags.last_token, ['get', 'set']));
};

Beautifier.prototype.start_of_statement = function (current_token) {
  var start = false;
  start = start || reserved_array(this._flags.last_token, ['var', 'let', 'const']) && current_token.type === TOKEN.WORD;
  start = start || reserved_word(this._flags.last_token, 'do');
  start = start || !(this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement) && reserved_array(this._flags.last_token, newline_restricted_tokens) && !current_token.newlines;
  start = start || reserved_word(this._flags.last_token, 'else') && !(reserved_word(current_token, 'if') && !current_token.comments_before);
  start = start || this._flags.last_token.type === TOKEN.END_EXPR && (this._previous_flags.mode === MODE.ForInitializer || this._previous_flags.mode === MODE.Conditional);
  start = start || this._flags.last_token.type === TOKEN.WORD && this._flags.mode === MODE.BlockStatement && !this._flags.in_case && !(current_token.text === '--' || current_token.text === '++') && this._last_last_text !== 'function' && current_token.type !== TOKEN.WORD && current_token.type !== TOKEN.RESERVED;
  start = start || this._flags.mode === MODE.ObjectLiteral && (this._flags.last_token.text === ':' && this._flags.ternary_depth === 0 || reserved_array(this._flags.last_token, ['get', 'set']));

  if (start) {
    this.set_mode(MODE.Statement);
    this.indent();
    this.handle_whitespace_and_comments(current_token, true); // Issue #276:
    // If starting a new statement with [if, for, while, do], push to a new line.
    // if (a) if (b) if(c) d(); else e(); else f();

    if (!this.start_of_object_property()) {
      this.allow_wrap_or_preserved_newline(current_token, reserved_array(current_token, ['do', 'for', 'if', 'while']));
    }

    return true;
  }

  return false;
};

Beautifier.prototype.handle_start_expr = function (current_token) {
  // The conditional starts the statement if appropriate.
  if (!this.start_of_statement(current_token)) {
    this.handle_whitespace_and_comments(current_token);
  }

  var next_mode = MODE.Expression;

  if (current_token.text === '[') {
    if (this._flags.last_token.type === TOKEN.WORD || this._flags.last_token.text === ')') {
      // this is array index specifier, break immediately
      // a[x], fn()[x]
      if (reserved_array(this._flags.last_token, line_starters)) {
        this._output.space_before_token = true;
      }

      this.print_token(current_token);
      this.set_mode(next_mode);
      this.indent();

      if (this._options.space_in_paren) {
        this._output.space_before_token = true;
      }

      return;
    }

    next_mode = MODE.ArrayLiteral;

    if (is_array(this._flags.mode)) {
      if (this._flags.last_token.text === '[' || this._flags.last_token.text === ',' && (this._last_last_text === ']' || this._last_last_text === '}')) {
        // ], [ goes to new line
        // }, [ goes to new line
        if (!this._options.keep_array_indentation) {
          this.print_newline();
        }
      }
    }

    if (!in_array(this._flags.last_token.type, [TOKEN.START_EXPR, TOKEN.END_EXPR, TOKEN.WORD, TOKEN.OPERATOR])) {
      this._output.space_before_token = true;
    }
  } else {
    if (this._flags.last_token.type === TOKEN.RESERVED) {
      if (this._flags.last_token.text === 'for') {
        this._output.space_before_token = this._options.space_before_conditional;
        next_mode = MODE.ForInitializer;
      } else if (in_array(this._flags.last_token.text, ['if', 'while'])) {
        this._output.space_before_token = this._options.space_before_conditional;
        next_mode = MODE.Conditional;
      } else if (in_array(this._flags.last_word, ['await', 'async'])) {
        // Should be a space between await and an IIFE, or async and an arrow function
        this._output.space_before_token = true;
      } else if (this._flags.last_token.text === 'import' && current_token.whitespace_before === '') {
        this._output.space_before_token = false;
      } else if (in_array(this._flags.last_token.text, line_starters) || this._flags.last_token.text === 'catch') {
        this._output.space_before_token = true;
      }
    } else if (this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
      // Support of this kind of newline preservation.
      // a = (b &&
      //     (c || d));
      if (!this.start_of_object_property()) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
    } else if (this._flags.last_token.type === TOKEN.WORD) {
      this._output.space_before_token = false; // function name() vs function name ()
      // function* name() vs function* name ()
      // async name() vs async name ()
      // In ES6, you can also define the method properties of an object
      // var obj = {a: function() {}}
      // It can be abbreviated
      // var obj = {a() {}}
      // var obj = { a() {}} vs var obj = { a () {}}
      // var obj = { * a() {}} vs var obj = { * a () {}}

      var peek_back_two = this._tokens.peek(-3);

      if (this._options.space_after_named_function && peek_back_two) {
        // peek starts at next character so -1 is current token
        var peek_back_three = this._tokens.peek(-4);

        if (reserved_array(peek_back_two, ['async', 'function']) || peek_back_two.text === '*' && reserved_array(peek_back_three, ['async', 'function'])) {
          this._output.space_before_token = true;
        } else if (this._flags.mode === MODE.ObjectLiteral) {
          if (peek_back_two.text === '{' || peek_back_two.text === ',' || peek_back_two.text === '*' && (peek_back_three.text === '{' || peek_back_three.text === ',')) {
            this._output.space_before_token = true;
          }
        }
      }
    } else {
      // Support preserving wrapped arrow function expressions
      // a.b('c',
      //     () => d.e
      // )
      this.allow_wrap_or_preserved_newline(current_token);
    } // function() vs function ()
    // yield*() vs yield* ()
    // function*() vs function* ()


    if (this._flags.last_token.type === TOKEN.RESERVED && (this._flags.last_word === 'function' || this._flags.last_word === 'typeof') || this._flags.last_token.text === '*' && (in_array(this._last_last_text, ['function', 'yield']) || this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ['{', ',']))) {
      this._output.space_before_token = this._options.space_after_anon_function;
    }
  }

  if (this._flags.last_token.text === ';' || this._flags.last_token.type === TOKEN.START_BLOCK) {
    this.print_newline();
  } else if (this._flags.last_token.type === TOKEN.END_EXPR || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.END_BLOCK || this._flags.last_token.text === '.' || this._flags.last_token.type === TOKEN.COMMA) {
    // do nothing on (( and )( and ][ and ]( and .(
    // TODO: Consider whether forcing this is required.  Review failing tests when removed.
    this.allow_wrap_or_preserved_newline(current_token, current_token.newlines);
  }

  this.print_token(current_token);
  this.set_mode(next_mode);

  if (this._options.space_in_paren) {
    this._output.space_before_token = true;
  } // In all cases, if we newline while inside an expression it should be indented.


  this.indent();
};

Beautifier.prototype.handle_end_expr = function (current_token) {
  // statements inside expressions are not valid syntax, but...
  // statements must all be closed when their container closes
  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }

  this.handle_whitespace_and_comments(current_token);

  if (this._flags.multiline_frame) {
    this.allow_wrap_or_preserved_newline(current_token, current_token.text === ']' && is_array(this._flags.mode) && !this._options.keep_array_indentation);
  }

  if (this._options.space_in_paren) {
    if (this._flags.last_token.type === TOKEN.START_EXPR && !this._options.space_in_empty_paren) {
      // () [] no inner space in empty parens like these, ever, ref #320
      this._output.trim();

      this._output.space_before_token = false;
    } else {
      this._output.space_before_token = true;
    }
  }

  this.deindent();
  this.print_token(current_token);
  this.restore_mode();
  remove_redundant_indentation(this._output, this._previous_flags); // do {} while () // no statement required after

  if (this._flags.do_while && this._previous_flags.mode === MODE.Conditional) {
    this._previous_flags.mode = MODE.Expression;
    this._flags.do_block = false;
    this._flags.do_while = false;
  }
};

Beautifier.prototype.handle_start_block = function (current_token) {
  this.handle_whitespace_and_comments(current_token); // Check if this is should be treated as a ObjectLiteral

  var next_token = this._tokens.peek();

  var second_token = this._tokens.peek(1);

  if (this._flags.last_word === 'switch' && this._flags.last_token.type === TOKEN.END_EXPR) {
    this.set_mode(MODE.BlockStatement);
    this._flags.in_case_statement = true;
  } else if (this._flags.case_body) {
    this.set_mode(MODE.BlockStatement);
  } else if (second_token && (in_array(second_token.text, [':', ',']) && in_array(next_token.type, [TOKEN.STRING, TOKEN.WORD, TOKEN.RESERVED]) || in_array(next_token.text, ['get', 'set', '...']) && in_array(second_token.type, [TOKEN.WORD, TOKEN.RESERVED]))) {
    // We don't support TypeScript,but we didn't break it for a very long time.
    // We'll try to keep not breaking it.
    if (!in_array(this._last_last_text, ['class', 'interface'])) {
      this.set_mode(MODE.ObjectLiteral);
    } else {
      this.set_mode(MODE.BlockStatement);
    }
  } else if (this._flags.last_token.type === TOKEN.OPERATOR && this._flags.last_token.text === '=>') {
    // arrow function: (param1, paramN) => { statements }
    this.set_mode(MODE.BlockStatement);
  } else if (in_array(this._flags.last_token.type, [TOKEN.EQUALS, TOKEN.START_EXPR, TOKEN.COMMA, TOKEN.OPERATOR]) || reserved_array(this._flags.last_token, ['return', 'throw', 'import', 'default'])) {
    // Detecting shorthand function syntax is difficult by scanning forward,
    //     so check the surrounding context.
    // If the block is being returned, imported, export default, passed as arg,
    //     assigned with = or assigned in a nested object, treat as an ObjectLiteral.
    this.set_mode(MODE.ObjectLiteral);
  } else {
    this.set_mode(MODE.BlockStatement);
  }

  var empty_braces = !next_token.comments_before && next_token.text === '}';
  var empty_anonymous_function = empty_braces && this._flags.last_word === 'function' && this._flags.last_token.type === TOKEN.END_EXPR;

  if (this._options.brace_preserve_inline) // check for inline, set inline_frame if so
    {
      // search forward for a newline wanted inside this block
      var index = 0;
      var check_token = null;
      this._flags.inline_frame = true;

      do {
        index += 1;
        check_token = this._tokens.peek(index - 1);

        if (check_token.newlines) {
          this._flags.inline_frame = false;
          break;
        }
      } while (check_token.type !== TOKEN.EOF && !(check_token.type === TOKEN.END_BLOCK && check_token.opened === current_token));
    }

  if ((this._options.brace_style === "expand" || this._options.brace_style === "none" && current_token.newlines) && !this._flags.inline_frame) {
    if (this._flags.last_token.type !== TOKEN.OPERATOR && (empty_anonymous_function || this._flags.last_token.type === TOKEN.EQUALS || reserved_array(this._flags.last_token, special_words) && this._flags.last_token.text !== 'else')) {
      this._output.space_before_token = true;
    } else {
      this.print_newline(false, true);
    }
  } else {
    // collapse || inline_frame
    if (is_array(this._previous_flags.mode) && (this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.COMMA)) {
      if (this._flags.last_token.type === TOKEN.COMMA || this._options.space_in_paren) {
        this._output.space_before_token = true;
      }

      if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR && this._flags.inline_frame) {
        this.allow_wrap_or_preserved_newline(current_token);
        this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame;
        this._flags.multiline_frame = false;
      }
    }

    if (this._flags.last_token.type !== TOKEN.OPERATOR && this._flags.last_token.type !== TOKEN.START_EXPR) {
      if (this._flags.last_token.type === TOKEN.START_BLOCK && !this._flags.inline_frame) {
        this.print_newline();
      } else {
        this._output.space_before_token = true;
      }
    }
  }

  this.print_token(current_token);
  this.indent(); // Except for specific cases, open braces are followed by a new line.

  if (!empty_braces && !(this._options.brace_preserve_inline && this._flags.inline_frame)) {
    this.print_newline();
  }
};

Beautifier.prototype.handle_end_block = function (current_token) {
  // statements must all be closed when their container closes
  this.handle_whitespace_and_comments(current_token);

  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }

  var empty_braces = this._flags.last_token.type === TOKEN.START_BLOCK;

  if (this._flags.inline_frame && !empty_braces) {
    // try inline_frame (only set if this._options.braces-preserve-inline) first
    this._output.space_before_token = true;
  } else if (this._options.brace_style === "expand") {
    if (!empty_braces) {
      this.print_newline();
    }
  } else {
    // skip {}
    if (!empty_braces) {
      if (is_array(this._flags.mode) && this._options.keep_array_indentation) {
        // we REALLY need a newline here, but newliner would skip that
        this._options.keep_array_indentation = false;
        this.print_newline();
        this._options.keep_array_indentation = true;
      } else {
        this.print_newline();
      }
    }
  }

  this.restore_mode();
  this.print_token(current_token);
};

Beautifier.prototype.handle_word = function (current_token) {
  if (current_token.type === TOKEN.RESERVED) {
    if (in_array(current_token.text, ['set', 'get']) && this._flags.mode !== MODE.ObjectLiteral) {
      current_token.type = TOKEN.WORD;
    } else if (current_token.text === 'import' && this._tokens.peek().text === '(') {
      current_token.type = TOKEN.WORD;
    } else if (in_array(current_token.text, ['as', 'from']) && !this._flags.import_block) {
      current_token.type = TOKEN.WORD;
    } else if (this._flags.mode === MODE.ObjectLiteral) {
      var next_token = this._tokens.peek();

      if (next_token.text === ':') {
        current_token.type = TOKEN.WORD;
      }
    }
  }

  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
    if (reserved_array(this._flags.last_token, ['var', 'let', 'const']) && current_token.type === TOKEN.WORD) {
      this._flags.declaration_statement = true;
    }
  } else if (current_token.newlines && !is_expression(this._flags.mode) && (this._flags.last_token.type !== TOKEN.OPERATOR || this._flags.last_token.text === '--' || this._flags.last_token.text === '++') && this._flags.last_token.type !== TOKEN.EQUALS && (this._options.preserve_newlines || !reserved_array(this._flags.last_token, ['var', 'let', 'const', 'set', 'get']))) {
    this.handle_whitespace_and_comments(current_token);
    this.print_newline();
  } else {
    this.handle_whitespace_and_comments(current_token);
  }

  if (this._flags.do_block && !this._flags.do_while) {
    if (reserved_word(current_token, 'while')) {
      // do {} ## while ()
      this._output.space_before_token = true;
      this.print_token(current_token);
      this._output.space_before_token = true;
      this._flags.do_while = true;
      return;
    } else {
      // do {} should always have while as the next word.
      // if we don't see the expected while, recover
      this.print_newline();
      this._flags.do_block = false;
    }
  } // if may be followed by else, or not
  // Bare/inline ifs are tricky
  // Need to unwind the modes correctly: if (a) if (b) c(); else d(); else e();


  if (this._flags.if_block) {
    if (!this._flags.else_block && reserved_word(current_token, 'else')) {
      this._flags.else_block = true;
    } else {
      while (this._flags.mode === MODE.Statement) {
        this.restore_mode();
      }

      this._flags.if_block = false;
      this._flags.else_block = false;
    }
  }

  if (this._flags.in_case_statement && reserved_array(current_token, ['case', 'default'])) {
    this.print_newline();

    if (this._flags.last_token.type !== TOKEN.END_BLOCK && (this._flags.case_body || this._options.jslint_happy)) {
      // switch cases following one another
      this.deindent();
    }

    this._flags.case_body = false;
    this.print_token(current_token);
    this._flags.in_case = true;
    return;
  }

  if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
    if (!this.start_of_object_property()) {
      this.allow_wrap_or_preserved_newline(current_token);
    }
  }

  if (reserved_word(current_token, 'function')) {
    if (in_array(this._flags.last_token.text, ['}', ';']) || this._output.just_added_newline() && !(in_array(this._flags.last_token.text, ['(', '[', '{', ':', '=', ',']) || this._flags.last_token.type === TOKEN.OPERATOR)) {
      // make sure there is a nice clean space of at least one blank line
      // before a new function definition
      if (!this._output.just_added_blankline() && !current_token.comments_before) {
        this.print_newline();
        this.print_newline(true);
      }
    }

    if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD) {
      if (reserved_array(this._flags.last_token, ['get', 'set', 'new', 'export']) || reserved_array(this._flags.last_token, newline_restricted_tokens)) {
        this._output.space_before_token = true;
      } else if (reserved_word(this._flags.last_token, 'default') && this._last_last_text === 'export') {
        this._output.space_before_token = true;
      } else if (this._flags.last_token.text === 'declare') {
        // accomodates Typescript declare function formatting
        this._output.space_before_token = true;
      } else {
        this.print_newline();
      }
    } else if (this._flags.last_token.type === TOKEN.OPERATOR || this._flags.last_token.text === '=') {
      // foo = function
      this._output.space_before_token = true;
    } else if (!this._flags.multiline_frame && (is_expression(this._flags.mode) || is_array(this._flags.mode))) {// (function
    } else {
      this.print_newline();
    }

    this.print_token(current_token);
    this._flags.last_word = current_token.text;
    return;
  }

  var prefix = 'NONE';

  if (this._flags.last_token.type === TOKEN.END_BLOCK) {
    if (this._previous_flags.inline_frame) {
      prefix = 'SPACE';
    } else if (!reserved_array(current_token, ['else', 'catch', 'finally', 'from'])) {
      prefix = 'NEWLINE';
    } else {
      if (this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && current_token.newlines) {
        prefix = 'NEWLINE';
      } else {
        prefix = 'SPACE';
        this._output.space_before_token = true;
      }
    }
  } else if (this._flags.last_token.type === TOKEN.SEMICOLON && this._flags.mode === MODE.BlockStatement) {
    // TODO: Should this be for STATEMENT as well?
    prefix = 'NEWLINE';
  } else if (this._flags.last_token.type === TOKEN.SEMICOLON && is_expression(this._flags.mode)) {
    prefix = 'SPACE';
  } else if (this._flags.last_token.type === TOKEN.STRING) {
    prefix = 'NEWLINE';
  } else if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD || this._flags.last_token.text === '*' && (in_array(this._last_last_text, ['function', 'yield']) || this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ['{', ',']))) {
    prefix = 'SPACE';
  } else if (this._flags.last_token.type === TOKEN.START_BLOCK) {
    if (this._flags.inline_frame) {
      prefix = 'SPACE';
    } else {
      prefix = 'NEWLINE';
    }
  } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
    this._output.space_before_token = true;
    prefix = 'NEWLINE';
  }

  if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ')') {
    if (this._flags.inline_frame || this._flags.last_token.text === 'else' || this._flags.last_token.text === 'export') {
      prefix = 'SPACE';
    } else {
      prefix = 'NEWLINE';
    }
  }

  if (reserved_array(current_token, ['else', 'catch', 'finally'])) {
    if ((!(this._flags.last_token.type === TOKEN.END_BLOCK && this._previous_flags.mode === MODE.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && current_token.newlines) && !this._flags.inline_frame) {
      this.print_newline();
    } else {
      this._output.trim(true);

      var line = this._output.current_line; // If we trimmed and there's something other than a close block before us
      // put a newline back in.  Handles '} // comment' scenario.

      if (line.last() !== '}') {
        this.print_newline();
      }

      this._output.space_before_token = true;
    }
  } else if (prefix === 'NEWLINE') {
    if (reserved_array(this._flags.last_token, special_words)) {
      // no newline between 'return nnn'
      this._output.space_before_token = true;
    } else if (this._flags.last_token.text === 'declare' && reserved_array(current_token, ['var', 'let', 'const'])) {
      // accomodates Typescript declare formatting
      this._output.space_before_token = true;
    } else if (this._flags.last_token.type !== TOKEN.END_EXPR) {
      if ((this._flags.last_token.type !== TOKEN.START_EXPR || !reserved_array(current_token, ['var', 'let', 'const'])) && this._flags.last_token.text !== ':') {
        // no need to force newline on 'var': for (var x = 0...)
        if (reserved_word(current_token, 'if') && reserved_word(current_token.previous, 'else')) {
          // no newline for } else if {
          this._output.space_before_token = true;
        } else {
          this.print_newline();
        }
      }
    } else if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ')') {
      this.print_newline();
    }
  } else if (this._flags.multiline_frame && is_array(this._flags.mode) && this._flags.last_token.text === ',' && this._last_last_text === '}') {
    this.print_newline(); // }, in lists get a newline treatment
  } else if (prefix === 'SPACE') {
    this._output.space_before_token = true;
  }

  if (current_token.previous && (current_token.previous.type === TOKEN.WORD || current_token.previous.type === TOKEN.RESERVED)) {
    this._output.space_before_token = true;
  }

  this.print_token(current_token);
  this._flags.last_word = current_token.text;

  if (current_token.type === TOKEN.RESERVED) {
    if (current_token.text === 'do') {
      this._flags.do_block = true;
    } else if (current_token.text === 'if') {
      this._flags.if_block = true;
    } else if (current_token.text === 'import') {
      this._flags.import_block = true;
    } else if (this._flags.import_block && reserved_word(current_token, 'from')) {
      this._flags.import_block = false;
    }
  }
};

Beautifier.prototype.handle_semicolon = function (current_token) {
  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
    // Semicolon can be the start (and end) of a statement
    this._output.space_before_token = false;
  } else {
    this.handle_whitespace_and_comments(current_token);
  }

  var next_token = this._tokens.peek();

  while (this._flags.mode === MODE.Statement && !(this._flags.if_block && reserved_word(next_token, 'else')) && !this._flags.do_block) {
    this.restore_mode();
  } // hacky but effective for the moment


  if (this._flags.import_block) {
    this._flags.import_block = false;
  }

  this.print_token(current_token);
};

Beautifier.prototype.handle_string = function (current_token) {
  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
    // One difference - strings want at least a space before
    this._output.space_before_token = true;
  } else {
    this.handle_whitespace_and_comments(current_token);

    if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD || this._flags.inline_frame) {
      this._output.space_before_token = true;
    } else if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
      if (!this.start_of_object_property()) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
    } else {
      this.print_newline();
    }
  }

  this.print_token(current_token);
};

Beautifier.prototype.handle_equals = function (current_token) {
  if (this.start_of_statement(current_token)) {// The conditional starts the statement if appropriate.
  } else {
    this.handle_whitespace_and_comments(current_token);
  }

  if (this._flags.declaration_statement) {
    // just got an '=' in a var-line, different formatting/line-breaking, etc will now be done
    this._flags.declaration_assignment = true;
  }

  this._output.space_before_token = true;
  this.print_token(current_token);
  this._output.space_before_token = true;
};

Beautifier.prototype.handle_comma = function (current_token) {
  this.handle_whitespace_and_comments(current_token, true);
  this.print_token(current_token);
  this._output.space_before_token = true;

  if (this._flags.declaration_statement) {
    if (is_expression(this._flags.parent.mode)) {
      // do not break on comma, for(var a = 1, b = 2)
      this._flags.declaration_assignment = false;
    }

    if (this._flags.declaration_assignment) {
      this._flags.declaration_assignment = false;
      this.print_newline(false, true);
    } else if (this._options.comma_first) {
      // for comma-first, we want to allow a newline before the comma
      // to turn into a newline after the comma, which we will fixup later
      this.allow_wrap_or_preserved_newline(current_token);
    }
  } else if (this._flags.mode === MODE.ObjectLiteral || this._flags.mode === MODE.Statement && this._flags.parent.mode === MODE.ObjectLiteral) {
    if (this._flags.mode === MODE.Statement) {
      this.restore_mode();
    }

    if (!this._flags.inline_frame) {
      this.print_newline();
    }
  } else if (this._options.comma_first) {
    // EXPR or DO_BLOCK
    // for comma-first, we want to allow a newline before the comma
    // to turn into a newline after the comma, which we will fixup later
    this.allow_wrap_or_preserved_newline(current_token);
  }
};

Beautifier.prototype.handle_operator = function (current_token) {
  var isGeneratorAsterisk = current_token.text === '*' && (reserved_array(this._flags.last_token, ['function', 'yield']) || in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.COMMA, TOKEN.END_BLOCK, TOKEN.SEMICOLON]));
  var isUnary = in_array(current_token.text, ['-', '+']) && (in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.START_EXPR, TOKEN.EQUALS, TOKEN.OPERATOR]) || in_array(this._flags.last_token.text, line_starters) || this._flags.last_token.text === ',');

  if (this.start_of_statement(current_token)) {// The conditional starts the statement if appropriate.
  } else {
    var preserve_statement_flags = !isGeneratorAsterisk;
    this.handle_whitespace_and_comments(current_token, preserve_statement_flags);
  }

  if (reserved_array(this._flags.last_token, special_words)) {
    // "return" had a special handling in TK_WORD. Now we need to return the favor
    this._output.space_before_token = true;
    this.print_token(current_token);
    return;
  } // hack for actionscript's import .*;


  if (current_token.text === '*' && this._flags.last_token.type === TOKEN.DOT) {
    this.print_token(current_token);
    return;
  }

  if (current_token.text === '::') {
    // no spaces around exotic namespacing syntax operator
    this.print_token(current_token);
    return;
  } // Allow line wrapping between operators when operator_position is
  //   set to before or preserve


  if (this._flags.last_token.type === TOKEN.OPERATOR && in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
    this.allow_wrap_or_preserved_newline(current_token);
  }

  if (current_token.text === ':' && this._flags.in_case) {
    this.print_token(current_token);
    this._flags.in_case = false;
    this._flags.case_body = true;

    if (this._tokens.peek().type !== TOKEN.START_BLOCK) {
      this.indent();
      this.print_newline();
    } else {
      this._output.space_before_token = true;
    }

    return;
  }

  var space_before = true;
  var space_after = true;
  var in_ternary = false;

  if (current_token.text === ':') {
    if (this._flags.ternary_depth === 0) {
      // Colon is invalid javascript outside of ternary and object, but do our best to guess what was meant.
      space_before = false;
    } else {
      this._flags.ternary_depth -= 1;
      in_ternary = true;
    }
  } else if (current_token.text === '?') {
    this._flags.ternary_depth += 1;
  } // let's handle the operator_position option prior to any conflicting logic


  if (!isUnary && !isGeneratorAsterisk && this._options.preserve_newlines && in_array(current_token.text, positionable_operators)) {
    var isColon = current_token.text === ':';
    var isTernaryColon = isColon && in_ternary;
    var isOtherColon = isColon && !in_ternary;

    switch (this._options.operator_position) {
      case OPERATOR_POSITION.before_newline:
        // if the current token is : and it's not a ternary statement then we set space_before to false
        this._output.space_before_token = !isOtherColon;
        this.print_token(current_token);

        if (!isColon || isTernaryColon) {
          this.allow_wrap_or_preserved_newline(current_token);
        }

        this._output.space_before_token = true;
        return;

      case OPERATOR_POSITION.after_newline:
        // if the current token is anything but colon, or (via deduction) it's a colon and in a ternary statement,
        //   then print a newline.
        this._output.space_before_token = true;

        if (!isColon || isTernaryColon) {
          if (this._tokens.peek().newlines) {
            this.print_newline(false, true);
          } else {
            this.allow_wrap_or_preserved_newline(current_token);
          }
        } else {
          this._output.space_before_token = false;
        }

        this.print_token(current_token);
        this._output.space_before_token = true;
        return;

      case OPERATOR_POSITION.preserve_newline:
        if (!isOtherColon) {
          this.allow_wrap_or_preserved_newline(current_token);
        } // if we just added a newline, or the current token is : and it's not a ternary statement,
        //   then we set space_before to false


        space_before = !(this._output.just_added_newline() || isOtherColon);
        this._output.space_before_token = space_before;
        this.print_token(current_token);
        this._output.space_before_token = true;
        return;
    }
  }

  if (isGeneratorAsterisk) {
    this.allow_wrap_or_preserved_newline(current_token);
    space_before = false;

    var next_token = this._tokens.peek();

    space_after = next_token && in_array(next_token.type, [TOKEN.WORD, TOKEN.RESERVED]);
  } else if (current_token.text === '...') {
    this.allow_wrap_or_preserved_newline(current_token);
    space_before = this._flags.last_token.type === TOKEN.START_BLOCK;
    space_after = false;
  } else if (in_array(current_token.text, ['--', '++', '!', '~']) || isUnary) {
    // unary operators (and binary +/- pretending to be unary) special cases
    if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR) {
      this.allow_wrap_or_preserved_newline(current_token);
    }

    space_before = false;
    space_after = false; // http://www.ecma-international.org/ecma-262/5.1/#sec-7.9.1
    // if there is a newline between -- or ++ and anything else we should preserve it.

    if (current_token.newlines && (current_token.text === '--' || current_token.text === '++')) {
      this.print_newline(false, true);
    }

    if (this._flags.last_token.text === ';' && is_expression(this._flags.mode)) {
      // for (;; ++i)
      //        ^^^
      space_before = true;
    }

    if (this._flags.last_token.type === TOKEN.RESERVED) {
      space_before = true;
    } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
      space_before = !(this._flags.last_token.text === ']' && (current_token.text === '--' || current_token.text === '++'));
    } else if (this._flags.last_token.type === TOKEN.OPERATOR) {
      // a++ + ++b;
      // a - -b
      space_before = in_array(current_token.text, ['--', '-', '++', '+']) && in_array(this._flags.last_token.text, ['--', '-', '++', '+']); // + and - are not unary when preceeded by -- or ++ operator
      // a-- + b
      // a * +b
      // a - -b

      if (in_array(current_token.text, ['+', '-']) && in_array(this._flags.last_token.text, ['--', '++'])) {
        space_after = true;
      }
    }

    if ((this._flags.mode === MODE.BlockStatement && !this._flags.inline_frame || this._flags.mode === MODE.Statement) && (this._flags.last_token.text === '{' || this._flags.last_token.text === ';')) {
      // { foo; --i }
      // foo(); --bar;
      this.print_newline();
    }
  }

  this._output.space_before_token = this._output.space_before_token || space_before;
  this.print_token(current_token);
  this._output.space_before_token = space_after;
};

Beautifier.prototype.handle_block_comment = function (current_token, preserve_statement_flags) {
  if (this._output.raw) {
    this._output.add_raw_token(current_token);

    if (current_token.directives && current_token.directives.preserve === 'end') {
      // If we're testing the raw output behavior, do not allow a directive to turn it off.
      this._output.raw = this._options.test_output_raw;
    }

    return;
  }

  if (current_token.directives) {
    this.print_newline(false, preserve_statement_flags);
    this.print_token(current_token);

    if (current_token.directives.preserve === 'start') {
      this._output.raw = true;
    }

    this.print_newline(false, true);
    return;
  } // inline block


  if (!acorn.newline.test(current_token.text) && !current_token.newlines) {
    this._output.space_before_token = true;
    this.print_token(current_token);
    this._output.space_before_token = true;
    return;
  } else {
    this.print_block_commment(current_token, preserve_statement_flags);
  }
};

Beautifier.prototype.print_block_commment = function (current_token, preserve_statement_flags) {
  var lines = split_linebreaks(current_token.text);
  var j; // iterator for this case

  var javadoc = false;
  var starless = false;
  var lastIndent = current_token.whitespace_before;
  var lastIndentLength = lastIndent.length; // block comment starts with a new line

  this.print_newline(false, preserve_statement_flags); // first line always indented

  this.print_token_line_indentation(current_token);

  this._output.add_token(lines[0]);

  this.print_newline(false, preserve_statement_flags);

  if (lines.length > 1) {
    lines = lines.slice(1);
    javadoc = all_lines_start_with(lines, '*');
    starless = each_line_matches_indent(lines, lastIndent);

    if (javadoc) {
      this._flags.alignment = 1;
    }

    for (j = 0; j < lines.length; j++) {
      if (javadoc) {
        // javadoc: reformat and re-indent
        this.print_token_line_indentation(current_token);

        this._output.add_token(ltrim(lines[j]));
      } else if (starless && lines[j]) {
        // starless: re-indent non-empty content, avoiding trim
        this.print_token_line_indentation(current_token);

        this._output.add_token(lines[j].substring(lastIndentLength));
      } else {
        // normal comments output raw
        this._output.current_line.set_indent(-1);

        this._output.add_token(lines[j]);
      } // for comments on their own line or  more than one line, make sure there's a new line after


      this.print_newline(false, preserve_statement_flags);
    }

    this._flags.alignment = 0;
  }
};

Beautifier.prototype.handle_comment = function (current_token, preserve_statement_flags) {
  if (current_token.newlines) {
    this.print_newline(false, preserve_statement_flags);
  } else {
    this._output.trim(true);
  }

  this._output.space_before_token = true;
  this.print_token(current_token);
  this.print_newline(false, preserve_statement_flags);
};

Beautifier.prototype.handle_dot = function (current_token) {
  if (this.start_of_statement(current_token)) {// The conditional starts the statement if appropriate.
  } else {
    this.handle_whitespace_and_comments(current_token, true);
  }

  if (reserved_array(this._flags.last_token, special_words)) {
    this._output.space_before_token = false;
  } else {
    // allow preserved newlines before dots in general
    // force newlines on dots after close paren when break_chained - for bar().baz()
    this.allow_wrap_or_preserved_newline(current_token, this._flags.last_token.text === ')' && this._options.break_chained_methods);
  } // Only unindent chained method dot if this dot starts a new line.
  // Otherwise the automatic extra indentation removal will handle the over indent


  if (this._options.unindent_chained_methods && this._output.just_added_newline()) {
    this.deindent();
  }

  this.print_token(current_token);
};

Beautifier.prototype.handle_unknown = function (current_token, preserve_statement_flags) {
  this.print_token(current_token);

  if (current_token.text[current_token.text.length - 1] === '\n') {
    this.print_newline(false, preserve_statement_flags);
  }
};

Beautifier.prototype.handle_eof = function (current_token) {
  // Unwind any open statements
  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }

  this.handle_whitespace_and_comments(current_token);
};

module.exports.Beautifier = Beautifier;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */

/*
  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/


function OutputLine(parent) {
  this.__parent = parent;
  this.__character_count = 0; // use indent_count as a marker for this.__lines that have preserved indentation

  this.__indent_count = -1;
  this.__alignment_count = 0;
  this.__wrap_point_index = 0;
  this.__wrap_point_character_count = 0;
  this.__wrap_point_indent_count = -1;
  this.__wrap_point_alignment_count = 0;
  this.__items = [];
}

OutputLine.prototype.clone_empty = function () {
  var line = new OutputLine(this.__parent);
  line.set_indent(this.__indent_count, this.__alignment_count);
  return line;
};

OutputLine.prototype.item = function (index) {
  if (index < 0) {
    return this.__items[this.__items.length + index];
  } else {
    return this.__items[index];
  }
};

OutputLine.prototype.has_match = function (pattern) {
  for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
    if (this.__items[lastCheckedOutput].match(pattern)) {
      return true;
    }
  }

  return false;
};

OutputLine.prototype.set_indent = function (indent, alignment) {
  if (this.is_empty()) {
    this.__indent_count = indent || 0;
    this.__alignment_count = alignment || 0;
    this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count);
  }
};

OutputLine.prototype._set_wrap_point = function () {
  if (this.__parent.wrap_line_length) {
    this.__wrap_point_index = this.__items.length;
    this.__wrap_point_character_count = this.__character_count;
    this.__wrap_point_indent_count = this.__parent.next_line.__indent_count;
    this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count;
  }
};

OutputLine.prototype._should_wrap = function () {
  return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
};

OutputLine.prototype._allow_wrap = function () {
  if (this._should_wrap()) {
    this.__parent.add_new_line();

    var next = this.__parent.current_line;
    next.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count);
    next.__items = this.__items.slice(this.__wrap_point_index);
    this.__items = this.__items.slice(0, this.__wrap_point_index);
    next.__character_count += this.__character_count - this.__wrap_point_character_count;
    this.__character_count = this.__wrap_point_character_count;

    if (next.__items[0] === " ") {
      next.__items.splice(0, 1);

      next.__character_count -= 1;
    }

    return true;
  }

  return false;
};

OutputLine.prototype.is_empty = function () {
  return this.__items.length === 0;
};

OutputLine.prototype.last = function () {
  if (!this.is_empty()) {
    return this.__items[this.__items.length - 1];
  } else {
    return null;
  }
};

OutputLine.prototype.push = function (item) {
  this.__items.push(item);

  var last_newline_index = item.lastIndexOf('\n');

  if (last_newline_index !== -1) {
    this.__character_count = item.length - last_newline_index;
  } else {
    this.__character_count += item.length;
  }
};

OutputLine.prototype.pop = function () {
  var item = null;

  if (!this.is_empty()) {
    item = this.__items.pop();
    this.__character_count -= item.length;
  }

  return item;
};

OutputLine.prototype._remove_indent = function () {
  if (this.__indent_count > 0) {
    this.__indent_count -= 1;
    this.__character_count -= this.__parent.indent_size;
  }
};

OutputLine.prototype._remove_wrap_indent = function () {
  if (this.__wrap_point_indent_count > 0) {
    this.__wrap_point_indent_count -= 1;
  }
};

OutputLine.prototype.trim = function () {
  while (this.last() === ' ') {
    this.__items.pop();

    this.__character_count -= 1;
  }
};

OutputLine.prototype.toString = function () {
  var result = '';

  if (this.is_empty()) {
    if (this.__parent.indent_empty_lines) {
      result = this.__parent.get_indent_string(this.__indent_count);
    }
  } else {
    result = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count);
    result += this.__items.join('');
  }

  return result;
};

function IndentStringCache(options, baseIndentString) {
  this.__cache = [''];
  this.__indent_size = options.indent_size;
  this.__indent_string = options.indent_char;

  if (!options.indent_with_tabs) {
    this.__indent_string = new Array(options.indent_size + 1).join(options.indent_char);
  } // Set to null to continue support for auto detection of base indent


  baseIndentString = baseIndentString || '';

  if (options.indent_level > 0) {
    baseIndentString = new Array(options.indent_level + 1).join(this.__indent_string);
  }

  this.__base_string = baseIndentString;
  this.__base_string_length = baseIndentString.length;
}

IndentStringCache.prototype.get_indent_size = function (indent, column) {
  var result = this.__base_string_length;
  column = column || 0;

  if (indent < 0) {
    result = 0;
  }

  result += indent * this.__indent_size;
  result += column;
  return result;
};

IndentStringCache.prototype.get_indent_string = function (indent_level, column) {
  var result = this.__base_string;
  column = column || 0;

  if (indent_level < 0) {
    indent_level = 0;
    result = '';
  }

  column += indent_level * this.__indent_size;

  this.__ensure_cache(column);

  result += this.__cache[column];
  return result;
};

IndentStringCache.prototype.__ensure_cache = function (column) {
  while (column >= this.__cache.length) {
    this.__add_column();
  }
};

IndentStringCache.prototype.__add_column = function () {
  var column = this.__cache.length;
  var indent = 0;
  var result = '';

  if (this.__indent_size && column >= this.__indent_size) {
    indent = Math.floor(column / this.__indent_size);
    column -= indent * this.__indent_size;
    result = new Array(indent + 1).join(this.__indent_string);
  }

  if (column) {
    result += new Array(column + 1).join(' ');
  }

  this.__cache.push(result);
};

function Output(options, baseIndentString) {
  this.__indent_cache = new IndentStringCache(options, baseIndentString);
  this.raw = false;
  this._end_with_newline = options.end_with_newline;
  this.indent_size = options.indent_size;
  this.wrap_line_length = options.wrap_line_length;
  this.indent_empty_lines = options.indent_empty_lines;
  this.__lines = [];
  this.previous_line = null;
  this.current_line = null;
  this.next_line = new OutputLine(this);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false; // initialize

  this.__add_outputline();
}

Output.prototype.__add_outputline = function () {
  this.previous_line = this.current_line;
  this.current_line = this.next_line.clone_empty();

  this.__lines.push(this.current_line);
};

Output.prototype.get_line_number = function () {
  return this.__lines.length;
};

Output.prototype.get_indent_string = function (indent, column) {
  return this.__indent_cache.get_indent_string(indent, column);
};

Output.prototype.get_indent_size = function (indent, column) {
  return this.__indent_cache.get_indent_size(indent, column);
};

Output.prototype.is_empty = function () {
  return !this.previous_line && this.current_line.is_empty();
};

Output.prototype.add_new_line = function (force_newline) {
  // never newline at the start of file
  // otherwise, newline only if we didn't just add one or we're forced
  if (this.is_empty() || !force_newline && this.just_added_newline()) {
    return false;
  } // if raw output is enabled, don't print additional newlines,
  // but still return True as though you had


  if (!this.raw) {
    this.__add_outputline();
  }

  return true;
};

Output.prototype.get_code = function (eol) {
  this.trim(true); // handle some edge cases where the last tokens
  // has text that ends with newline(s)

  var last_item = this.current_line.pop();

  if (last_item) {
    if (last_item[last_item.length - 1] === '\n') {
      last_item = last_item.replace(/\n+$/g, '');
    }

    this.current_line.push(last_item);
  }

  if (this._end_with_newline) {
    this.__add_outputline();
  }

  var sweet_code = this.__lines.join('\n');

  if (eol !== '\n') {
    sweet_code = sweet_code.replace(/[\n]/g, eol);
  }

  return sweet_code;
};

Output.prototype.set_wrap_point = function () {
  this.current_line._set_wrap_point();
};

Output.prototype.set_indent = function (indent, alignment) {
  indent = indent || 0;
  alignment = alignment || 0; // Next line stores alignment values

  this.next_line.set_indent(indent, alignment); // Never indent your first output indent at the start of the file

  if (this.__lines.length > 1) {
    this.current_line.set_indent(indent, alignment);
    return true;
  }

  this.current_line.set_indent();
  return false;
};

Output.prototype.add_raw_token = function (token) {
  for (var x = 0; x < token.newlines; x++) {
    this.__add_outputline();
  }

  this.current_line.set_indent(-1);
  this.current_line.push(token.whitespace_before);
  this.current_line.push(token.text);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false;
};

Output.prototype.add_token = function (printable_token) {
  this.__add_space_before_token();

  this.current_line.push(printable_token);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = this.current_line._allow_wrap();
};

Output.prototype.__add_space_before_token = function () {
  if (this.space_before_token && !this.just_added_newline()) {
    if (!this.non_breaking_space) {
      this.set_wrap_point();
    }

    this.current_line.push(' ');
  }
};

Output.prototype.remove_indent = function (index) {
  var output_length = this.__lines.length;

  while (index < output_length) {
    this.__lines[index]._remove_indent();

    index++;
  }

  this.current_line._remove_wrap_indent();
};

Output.prototype.trim = function (eat_newlines) {
  eat_newlines = eat_newlines === undefined ? false : eat_newlines;
  this.current_line.trim();

  while (eat_newlines && this.__lines.length > 1 && this.current_line.is_empty()) {
    this.__lines.pop();

    this.current_line = this.__lines[this.__lines.length - 1];
    this.current_line.trim();
  }

  this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
};

Output.prototype.just_added_newline = function () {
  return this.current_line.is_empty();
};

Output.prototype.just_added_blankline = function () {
  return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
};

Output.prototype.ensure_empty_line_above = function (starts_with, ends_with) {
  var index = this.__lines.length - 2;

  while (index >= 0) {
    var potentialEmptyLine = this.__lines[index];

    if (potentialEmptyLine.is_empty()) {
      break;
    } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 && potentialEmptyLine.item(-1) !== ends_with) {
      this.__lines.splice(index + 1, 0, new OutputLine(this));

      this.previous_line = this.__lines[this.__lines.length - 2];
      break;
    }

    index--;
  }
};

module.exports.Output = Output;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */

/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/


function Options(options, merge_child_field) {
  this.raw_options = _mergeOpts(options, merge_child_field); // Support passing the source text back with no change

  this.disabled = this._get_boolean('disabled');
  this.eol = this._get_characters('eol', 'auto');
  this.end_with_newline = this._get_boolean('end_with_newline');
  this.indent_size = this._get_number('indent_size', 4);
  this.indent_char = this._get_characters('indent_char', ' ');
  this.indent_level = this._get_number('indent_level');
  this.preserve_newlines = this._get_boolean('preserve_newlines', true);
  this.max_preserve_newlines = this._get_number('max_preserve_newlines', 32786);

  if (!this.preserve_newlines) {
    this.max_preserve_newlines = 0;
  }

  this.indent_with_tabs = this._get_boolean('indent_with_tabs', this.indent_char === '\t');

  if (this.indent_with_tabs) {
    this.indent_char = '\t'; // indent_size behavior changed after 1.8.6
    // It used to be that indent_size would be
    // set to 1 for indent_with_tabs. That is no longer needed and
    // actually doesn't make sense - why not use spaces? Further,
    // that might produce unexpected behavior - tabs being used
    // for single-column alignment. So, when indent_with_tabs is true
    // and indent_size is 1, reset indent_size to 4.

    if (this.indent_size === 1) {
      this.indent_size = 4;
    }
  } // Backwards compat with 1.3.x


  this.wrap_line_length = this._get_number('wrap_line_length', this._get_number('max_char'));
  this.indent_empty_lines = this._get_boolean('indent_empty_lines'); // valid templating languages ['django', 'erb', 'handlebars', 'php']
  // For now, 'auto' = all off for javascript, all on for html (and inline javascript).
  // other values ignored

  this.templating = this._get_selection_list('templating', ['auto', 'none', 'django', 'erb', 'handlebars', 'php'], ['auto']);
}

Options.prototype._get_array = function (name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || [];

  if (typeof option_value === 'object') {
    if (option_value !== null && typeof option_value.concat === 'function') {
      result = option_value.concat();
    }
  } else if (typeof option_value === 'string') {
    result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
  }

  return result;
};

Options.prototype._get_boolean = function (name, default_value) {
  var option_value = this.raw_options[name];
  var result = option_value === undefined ? !!default_value : !!option_value;
  return result;
};

Options.prototype._get_characters = function (name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || '';

  if (typeof option_value === 'string') {
    result = option_value.replace(/\\r/, '\r').replace(/\\n/, '\n').replace(/\\t/, '\t');
  }

  return result;
};

Options.prototype._get_number = function (name, default_value) {
  var option_value = this.raw_options[name];
  default_value = parseInt(default_value, 10);

  if (isNaN(default_value)) {
    default_value = 0;
  }

  var result = parseInt(option_value, 10);

  if (isNaN(result)) {
    result = default_value;
  }

  return result;
};

Options.prototype._get_selection = function (name, selection_list, default_value) {
  var result = this._get_selection_list(name, selection_list, default_value);

  if (result.length !== 1) {
    throw new Error("Invalid Option Value: The option '" + name + "' can only be one of the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result[0];
};

Options.prototype._get_selection_list = function (name, selection_list, default_value) {
  if (!selection_list || selection_list.length === 0) {
    throw new Error("Selection list cannot be empty.");
  }

  default_value = default_value || [selection_list[0]];

  if (!this._is_valid_selection(default_value, selection_list)) {
    throw new Error("Invalid Default Value!");
  }

  var result = this._get_array(name, default_value);

  if (!this._is_valid_selection(result, selection_list)) {
    throw new Error("Invalid Option Value: The option '" + name + "' can contain only the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result;
};

Options.prototype._is_valid_selection = function (result, selection_list) {
  return result.length && selection_list.length && !result.some(function (item) {
    return selection_list.indexOf(item) === -1;
  });
}; // merges child options up with the parent options object
// Example: obj = {a: 1, b: {a: 2}}
//          mergeOpts(obj, 'b')
//
//          Returns: {a: 2}


function _mergeOpts(allOptions, childFieldName) {
  var finalOpts = {};
  allOptions = _normalizeOpts(allOptions);
  var name;

  for (name in allOptions) {
    if (name !== childFieldName) {
      finalOpts[name] = allOptions[name];
    }
  } //merge in the per type settings for the childFieldName


  if (childFieldName && allOptions[childFieldName]) {
    for (name in allOptions[childFieldName]) {
      finalOpts[name] = allOptions[childFieldName][name];
    }
  }

  return finalOpts;
}

function _normalizeOpts(options) {
  var convertedOpts = {};
  var key;

  if (options) {
    for (key in options) {
      var newKey = key.replace(/-/g, "_");
      convertedOpts[newKey] = options[key];
    }
  }

  return convertedOpts;
}

module.exports.Options = Options;
module.exports.normalizeOpts = _normalizeOpts;
module.exports.mergeOpts = _mergeOpts;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */

/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/


function TokenStream(parent_token) {
  // private
  this.__tokens = [];
  this.__tokens_length = this.__tokens.length;
  this.__position = 0;
  this.__parent_token = parent_token;
}

TokenStream.prototype.restart = function () {
  this.__position = 0;
};

TokenStream.prototype.isEmpty = function () {
  return this.__tokens_length === 0;
};

TokenStream.prototype.hasNext = function () {
  return this.__position < this.__tokens_length;
};

TokenStream.prototype.next = function () {
  var val = null;

  if (this.hasNext()) {
    val = this.__tokens[this.__position];
    this.__position += 1;
  }

  return val;
};

TokenStream.prototype.peek = function (index) {
  var val = null;
  index = index || 0;
  index += this.__position;

  if (index >= 0 && index < this.__tokens_length) {
    val = this.__tokens[index];
  }

  return val;
};

TokenStream.prototype.add = function (token) {
  if (this.__parent_token) {
    token.parent = this.__parent_token;
  }

  this.__tokens.push(token);

  this.__tokens_length += 1;
};

module.exports.TokenStream = TokenStream;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */

/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/


var Pattern = __webpack_require__(3).Pattern;

function WhitespacePattern(input_scanner, parent) {
  Pattern.call(this, input_scanner, parent);

  if (parent) {
    this._line_regexp = this._input.get_regexp(parent._line_regexp);
  } else {
    this.__set_whitespace_patterns('', '');
  }

  this.newline_count = 0;
  this.whitespace_before_token = '';
}

WhitespacePattern.prototype = new Pattern();

WhitespacePattern.prototype.__set_whitespace_patterns = function (whitespace_chars, newline_chars) {
  whitespace_chars += '\\t ';
  newline_chars += '\\n\\r';
  this._match_pattern = this._input.get_regexp('[' + whitespace_chars + newline_chars + ']+', true);
  this._newline_regexp = this._input.get_regexp('\\r\\n|[' + newline_chars + ']');
};

WhitespacePattern.prototype.read = function () {
  this.newline_count = 0;
  this.whitespace_before_token = '';

  var resulting_string = this._input.read(this._match_pattern);

  if (resulting_string === ' ') {
    this.whitespace_before_token = ' ';
  } else if (resulting_string) {
    var matches = this.__split(this._newline_regexp, resulting_string);

    this.newline_count = matches.length - 1;
    this.whitespace_before_token = matches[this.newline_count];
  }

  return resulting_string;
};

WhitespacePattern.prototype.matching = function (whitespace_chars, newline_chars) {
  var result = this._create();

  result.__set_whitespace_patterns(whitespace_chars, newline_chars);

  result._update();

  return result;
};

WhitespacePattern.prototype._create = function () {
  return new WhitespacePattern(this._input, this);
};

WhitespacePattern.prototype.__split = function (regexp, input_string) {
  regexp.lastIndex = 0;
  var start_index = 0;
  var result = [];
  var next_match = regexp.exec(input_string);

  while (next_match) {
    result.push(input_string.substring(start_index, next_match.index));
    start_index = next_match.index + next_match[0].length;
    next_match = regexp.exec(input_string);
  }

  if (start_index < input_string.length) {
    result.push(input_string.substring(start_index, input_string.length));
  } else {
    result.push('');
  }

  return result;
};

module.exports.WhitespacePattern = WhitespacePattern;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */

/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/


function Directives(start_block_pattern, end_block_pattern) {
  start_block_pattern = typeof start_block_pattern === 'string' ? start_block_pattern : start_block_pattern.source;
  end_block_pattern = typeof end_block_pattern === 'string' ? end_block_pattern : end_block_pattern.source;
  this.__directives_block_pattern = new RegExp(start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern, 'g');
  this.__directive_pattern = / (\w+)[:](\w+)/g;
  this.__directives_end_ignore_pattern = new RegExp(start_block_pattern + /\sbeautify\signore:end\s/.source + end_block_pattern, 'g');
}

Directives.prototype.get_directives = function (text) {
  if (!text.match(this.__directives_block_pattern)) {
    return null;
  }

  var directives = {};
  this.__directive_pattern.lastIndex = 0;

  var directive_match = this.__directive_pattern.exec(text);

  while (directive_match) {
    directives[directive_match[1]] = directive_match[2];
    directive_match = this.__directive_pattern.exec(text);
  }

  return directives;
};

Directives.prototype.readIgnored = function (input) {
  return input.readUntilAfter(this.__directives_end_ignore_pattern);
};

module.exports.Directives = Directives;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true */

/*

  The MIT License (MIT)

  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/


var Pattern = __webpack_require__(3).Pattern;

var template_names = {
  django: false,
  erb: false,
  handlebars: false,
  php: false
}; // This lets templates appear anywhere we would do a readUntil
// The cost is higher but it is pay to play.

function TemplatablePattern(input_scanner, parent) {
  Pattern.call(this, input_scanner, parent);
  this.__template_pattern = null;
  this._disabled = Object.assign({}, template_names);
  this._excluded = Object.assign({}, template_names);

  if (parent) {
    this.__template_pattern = this._input.get_regexp(parent.__template_pattern);
    this._excluded = Object.assign(this._excluded, parent._excluded);
    this._disabled = Object.assign(this._disabled, parent._disabled);
  }

  var pattern = new Pattern(input_scanner);
  this.__patterns = {
    handlebars_comment: pattern.starting_with(/{{!--/).until_after(/--}}/),
    handlebars_unescaped: pattern.starting_with(/{{{/).until_after(/}}}/),
    handlebars: pattern.starting_with(/{{/).until_after(/}}/),
    php: pattern.starting_with(/<\?(?:[=]|php)/).until_after(/\?>/),
    erb: pattern.starting_with(/<%[^%]/).until_after(/[^%]%>/),
    // django coflicts with handlebars a bit.
    django: pattern.starting_with(/{%/).until_after(/%}/),
    django_value: pattern.starting_with(/{{/).until_after(/}}/),
    django_comment: pattern.starting_with(/{#/).until_after(/#}/)
  };
}

TemplatablePattern.prototype = new Pattern();

TemplatablePattern.prototype._create = function () {
  return new TemplatablePattern(this._input, this);
};

TemplatablePattern.prototype._update = function () {
  this.__set_templated_pattern();
};

TemplatablePattern.prototype.disable = function (language) {
  var result = this._create();

  result._disabled[language] = true;

  result._update();

  return result;
};

TemplatablePattern.prototype.read_options = function (options) {
  var result = this._create();

  for (var language in template_names) {
    result._disabled[language] = options.templating.indexOf(language) === -1;
  }

  result._update();

  return result;
};

TemplatablePattern.prototype.exclude = function (language) {
  var result = this._create();

  result._excluded[language] = true;

  result._update();

  return result;
};

TemplatablePattern.prototype.read = function () {
  var result = '';

  if (this._match_pattern) {
    result = this._input.read(this._starting_pattern);
  } else {
    result = this._input.read(this._starting_pattern, this.__template_pattern);
  }

  var next = this._read_template();

  while (next) {
    if (this._match_pattern) {
      next += this._input.read(this._match_pattern);
    } else {
      next += this._input.readUntil(this.__template_pattern);
    }

    result += next;
    next = this._read_template();
  }

  if (this._until_after) {
    result += this._input.readUntilAfter(this._until_pattern);
  }

  return result;
};

TemplatablePattern.prototype.__set_templated_pattern = function () {
  var items = [];

  if (!this._disabled.php) {
    items.push(this.__patterns.php._starting_pattern.source);
  }

  if (!this._disabled.handlebars) {
    items.push(this.__patterns.handlebars._starting_pattern.source);
  }

  if (!this._disabled.erb) {
    items.push(this.__patterns.erb._starting_pattern.source);
  }

  if (!this._disabled.django) {
    items.push(this.__patterns.django._starting_pattern.source);
    items.push(this.__patterns.django_value._starting_pattern.source);
    items.push(this.__patterns.django_comment._starting_pattern.source);
  }

  if (this._until_pattern) {
    items.push(this._until_pattern.source);
  }

  this.__template_pattern = this._input.get_regexp('(?:' + items.join('|') + ')');
};

TemplatablePattern.prototype._read_template = function () {
  var resulting_string = '';

  var c = this._input.peek();

  if (c === '<') {
    var peek1 = this._input.peek(1); //if we're in a comment, do something special
    // We treat all comments as literals, even more than preformatted tags
    // we just look for the appropriate close tag


    if (!this._disabled.php && !this._excluded.php && peek1 === '?') {
      resulting_string = resulting_string || this.__patterns.php.read();
    }

    if (!this._disabled.erb && !this._excluded.erb && peek1 === '%') {
      resulting_string = resulting_string || this.__patterns.erb.read();
    }
  } else if (c === '{') {
    if (!this._disabled.handlebars && !this._excluded.handlebars) {
      resulting_string = resulting_string || this.__patterns.handlebars_comment.read();
      resulting_string = resulting_string || this.__patterns.handlebars_unescaped.read();
      resulting_string = resulting_string || this.__patterns.handlebars.read();
    }

    if (!this._disabled.django) {
      // django coflicts with handlebars a bit.
      if (!this._excluded.django && !this._excluded.handlebars) {
        resulting_string = resulting_string || this.__patterns.django_value.read();
      }

      if (!this._excluded.django) {
        resulting_string = resulting_string || this.__patterns.django_comment.read();
        resulting_string = resulting_string || this.__patterns.django.read();
      }
    }
  }

  return resulting_string;
};

module.exports.TemplatablePattern = TemplatablePattern;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

var keyboard = function () {
  var keyPairings = {
    '-': 'minus',
    '=': 'equal',
    '[': 'leftbracket',
    ']': 'rightbracket',
    ';': 'semicolon',
    '\\': 'backslash',
    '`': 'apostrophe',
    ',': 'comma',
    '.': 'period',
    ' /': 'slash'
  };
  var exports = {
    key: function key() {
      return getKeysArray();
    },
    keyNameToKeySign: function keyNameToKeySign(keyName) {
      for (var keySign in keyPairings) {
        if (!Object.prototype.hasOwnProperty.call(keyPairings, keySign)) {
          continue;
        }

        if (keyPairings[keySign] === keyName) {
          return keySign;
        }
      }

      return keyName;
    },
    keySignToKeyName: function keySignToKeyName(keySign) {
      if (Object.prototype.hasOwnProperty.call(keyPairings, keySign)) {
        return keyPairings[keySign];
      } else {
        return keySign;
      }
    }
  };
  return exports;

  function getKeysArray() {
    var key, keyName;
    var keyState = ScriptUI.environment.keyboardState;
    var keyNames = [{
      key: keyState.shiftKey,
      keyName: 'shift'
    }, {
      key: keyState.ctrlKey || keyState.metaKey,
      keyName: 'cmd'
    }, {
      key: keyState.altKey,
      keyName: 'alt'
    }, {
      key: keyState.keyName
    }];
    var keysArray = [];

    for (var i = 0, il = keyNames.length; i < il; i++) {
      key = keyNames[i].key;

      if (key) {
        keyName = keyNames[i].keyName;

        if (!keyName) {
          keyName = key.toLowerCase();
        }

        keysArray.push(keyName);
      }
    }

    if (keysArray.length === 0) {
      return null;
    }

    return keysArray;
  }
}();

module.exports = $.global.yp.keyboard = keyboard;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    exp = _require.exp;

var loc = exp.loc;

var ICONS = __webpack_require__(2);

var _ = __webpack_require__(35);

module.exports = function () {
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
        } // end of newWin

      }
    };

    var win = _.newWindow(UIJson)[0];

    _('*').each(function (e) {
      switch (e.id) {
        default:
          if (e.type !== 'checkbox') break;
          e.value = exp.getSettingAsBool(e.id);
          var name = e.id + 'Value';

          e.onClick = function () {
            exp[name] = this.value;
          };

          break;

        case 'lang':
          e.onClick = function () {
            this.value ? exp.lang = 'en' : exp.lang = 'ch';
          };

          break;

        case 'editFolder':
          e.text = exp.expressionFolder.fsName;

          e.onChange = function () {
            if (!Folder(this.text).exists) {
              alert(exp.loc(exp.folderExistsAlert));
              return;
            }

            exp.expressionFolder = Folder(this.text);
          };

          break;

        case 'cafx':
          e.image = ICONS.cafx;
          e.addEventListener('mouseover', function () {
            this.image = ICONS.cafxlog;
          });
          e.addEventListener('mouseout', function () {
            this.image = ICONS.cafx;
          });
          break;
      }
    });

    win.onClose = function () {
      if (exp.lang !== exp.getSetting('language') || exp.expressionFolder.fsName !== exp.getSetting('expressionFolder')) {
        exp.saveSetting('language', exp.lang);
        exp.saveSetting('expressionFolder', exp.expressionFolder.fsName);

        if (exp.win instanceof Window) {
          exp.win.close();
          refreshExp();
        } else {
          try {
            app.executeCommand(app.findMenuCommandId('ExpNotes.jsx'));
            app.executeCommand(app.findMenuCommandId('ExpNotes.jsx'));
          } catch (err) {
            alert(loc(exp.reloadFailed));
          }
        }
      }
    };

    win.center();
    win.show();
  } catch (err) {
    alert('Line #' + err.line.toString() + '\r\n' + err.toString());
  }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var UIParser = function () {
  var _ = function _(selector) {
    if (_.isUI(selector.type)) {
      return _.extend([selector], _.proto);
    }

    return _.proto.find(selector);
  };
  /** ***********************base redirect************************************************** **/


  _.global = $.global;
  _.root = {
    children: []
  };
  _.windows = _.root.children;
  /** ***********************expand function************************************************** **/

  _.extend = function (target, source) {
    // give the source to target
    for (var i in source) {
      target[i] = source[i];
    }

    return target;
  };

  _.proto = {
    // \u8fd9\u91cc\u7684\u51fd\u6570\u5c06\u8d4b\u7ed9\u8fd4\u56de\u7684\u89e3\u6790\u5668\u5bf9\u8c61
    find: function find(selector, recursive) {
      // find\u51fd\u6570\u7528\u6765\u8fd4\u56de\u4e00\u4e2a\u9012\u5f52\u5339\u914d\u540e\u7684\u6570\u7ec4\uff0c\u5e76\u4e14\u5c06_.proto\u7684\u51fd\u6570\u4e5f\u7ed9\u8fd9\u4e2a\u6570\u7ec4
      var matchs = [];
      var elements = 'length' in this ? this : [_.root];
      if (!selector) return _.extend(elements, _.proto); // \u9009\u62e9\u5668\u4e3a\u9009\u62e9\u5668\u8868\u8fbe\u5f0f

      if (typeof selector === 'string') {
        var selectors = _.formalSelector(selector); // \u6b63\u89c4\u5316\u9009\u62e9\u5668


        for (var i = 0; i < selectors.length; i++) {
          var match = elements;

          var process = _.parserSelector(selectors[i]); // \u89e3\u6790\u9009\u62e9\u5668


          for (var j = 0; j < process.length; j++) {
            // \u9010\u6b65\u6267\u884c
            if (!process[j][3] && _.proto[process[j][4]]) {
              match = _.proto[process[j][4]].call(match, process[j][5]); // \u5982\u679c\u6709:\u6807\u8bb0\u6267\u884c\u8fc7\u6ee4\u64cd\u4f5c
            } else {
              match = _.findElementsByProp(match, process[j][0], process[j][1], process[j][2]);
            }
          }

          matchs = _.merge(match, matchs);
        }
      } else if (typeof selector === 'function') {
        if (!recursive) recursive = 1;
        matchs = _.findElementsByFn(elements, selector, recursive);
      }

      return _.extend(matchs, _.proto);
    },
    children: function children(selector) {
      return this.find(selector || '>*');
    },
    each: function each(command) {
      for (var i = 0; i < this.length; i++) {
        command(this[i]);
      }
    },
    // command is a function
    remove: function remove() {
      this.each(function (e) {
        e.parent.remove(e);
      });
    },
    empty: function empty() {
      this.children().remove();
    }
    /** ***********************functions for createUI************************************************** **/

  };

  _.newWindow = function (UIJson) {
    // \u6dfb\u52a0\u7a97\u53e3
    if (!UIJson) return;
    var newWindows = [];

    for (var i in UIJson) {
      if (typeof UIJson[i] === 'object') {
        var json = UIJson[i];
        var s = json.type;
        if (json.properties) s += '{properties:' + JSON.stringify(json.properties) + '}';
        var newWindow = _.root.children[_.root.children.length] = new Window(s);
        newWindows.push(newWindow);
        if (!json.id) newWindow.id = i; // add other properties for newWindow

        for (var j in json) {
          if (j === 'type' || j === 'properties' || j === 'children') continue;
          newWindow[j] = json[j];
        } // create children for newWindow


        if (json.children) _.addUI(json.children, newWindow);
      }
    }

    return _.extend(newWindows, _.proto);
  };

  _.addUI = function (UIJson, parent) {
    // \u4e3aparent\u6dfb\u52a0UI
    if (!UIJson) return;
    if (!parent) parent = this;
    var newItem = [];

    for (var i in UIJson) {
      if (typeof UIJson[i] === 'object') {
        var json = UIJson[i];

        if (_.isElement(json.type)) {
          // create element
          var s = json.type;
          if (json.properties) s += '{properties:' + JSON.stringify(json.properties) + '}';
          var newElement = parent.add(s);
          if (!json.id) newElement.id = i; // add other properties for newElement

          for (var j in json) {
            if (j === 'type' || j === 'properties' || j === 'children') continue;
            newElement[j] = json[j];
          }

          newItem.push(newElement); // create children for newElement

          if (_.isContainer(json.type) && json.children) arguments.callee(json.children, newElement);
        }
      }
    }

    return _.extend(newItem, _.proto);
  };

  _.createUI = function (UIJson) {
    // \u521b\u5efaUI
    if (!UIJson) return;
    var ISPANEL = global instanceof Panel;

    if (ISPANEL) {
      var _newElement = _.addUI(UIJson, global);

      _.root.children.push(global);

      global.layout.layout(true);
      return _newElement;
    } else {
      return _.newWindow(UIJson);
    }
  };
  /** ***********************check for createUI****************************************************/


  _.isWindow = function (type) {
    // \u5224\u65ad\u662f\u5426\u4e3awindow\u5143\u7d20
    var winType = ['window', 'palette', 'dialog', 'Window', 'Palette', 'Dialog'];
    var len = winType.length;

    for (var i = 0; i < len; i++) {
      if (type === winType[i]) return true;
    }

    return false;
  };

  _.isContainer = function (type) {
    // \u5224\u65ad\u662f\u5426\u4e3a\u5bb9\u5668
    var winType = ['window', 'palette', 'dialog', 'group', 'panel', 'tabbedpanel', 'treeview', 'dropdownlist', 'listbox', 'listitem', 'tab', 'node', 'Window', 'Palette', 'Dialog', 'Group', 'Panel', 'TabbedPanel', 'Treeview', 'DropDownList', 'ListBox', 'ListItem', 'Tab', 'Node'];
    var len = winType.length;

    for (var i = 0; i < len; i++) {
      if (type === winType[i]) return true;
    }

    return false;
  };

  _.isElement = function (type) {
    // \u5224\u65ad\u662f\u5426\u662fwindow\u5143\u7d20\u5916\u7684\u5176\u4ed6UI\u5143\u7d20
    var winType = ['panel', 'tabbedpanel', 'tab', 'group', 'button', 'checkbox', 'dropdownlist', 'edittext', 'flashplayer', 'iconbutton', 'image', 'item', 'listbox', 'listitem', 'progressbar', 'radiobutton', 'scrollbar', 'slider', 'statictext', 'treeview', 'tab', 'node', 'Panel', 'TabbedPanel', 'Tab', 'Group', 'Button', 'CheckBox', 'DropDownList', 'EditText', 'FlashPlayer', 'IconButton', 'Image', 'Item', 'ListBox', 'ListItem', 'ProgressBar', 'RadioButton', 'Scrollbar', 'Slider', 'StaticText', 'Treeview', 'Tab', 'Node'];
    var len = winType.length;

    for (var i = 0; i < len; i++) {
      if (type === winType[i]) return true;
    }

    return false;
  };

  _.isUI = function (type) {
    // \u5224\u65ad\u662f\u5426\u4e3aUI\u5143\u7d20
    if (_.isWindow(type) || _.isElement(type)) return true;
    return false;
  };
  /** ********************functions for find*********************************************************/


  _.formalSelector = function (selector) {
    // \u6b63\u89c4\u5316\u9009\u62e9\u5668\uff0c\u53bb\u6389\u6240\u6709\u7a7a\u683c\uff0c\u591a\u4f59\u5b57\u6bcd\u548c\u591a\u4f59\u6807\u8bb0\u7b26\uff0c\u5f97\u5230\u5e76\u5217\u9009\u62e9\u5668\uff0c\u8fd9\u65f6\u6bcf\u4e2a\u9009\u62e9\u5668\u4e2d\u7684\u6bcf\u4e2a\u6807\u8bb0\u7b26\u5747\u6709\u6548

    /**
        1.\u53bb\u6389\u7a7a\u683c])\u53ca\u540e\u9762\u7684\u5b57\u6bcd\uff0c\u5982'[er t ]a:w (w)e'\u53d8\u4e3a'[er:w(w'
        2.\u53bb\u6389\u6807\u8bb0\u7b26\u524d\u9762\u7684\u6240\u6709\u6807\u8bb0\u7b26\u53f7\uff0c\u9047\u5230*>,\u4e0d\u5220\u9664\uff0c\u56e0\u4e3a\u6807\u8bb0\u53f7*>,\u540e\u9762\u4e0d\u9700\u8981\u5b57\u6bcd
        3.\u5c06*\u53ca\u5176\u540e\u9762\u7684\u5b57\u6bcd\u66ff\u6362\u4e3a*
        4.\u5c06,\u53ca\u5176\u540e\u9762\u7684\u5b57\u6bcd\u66ff\u6362\u4e3a,
        5.\u5c06>\u53ca\u5176\u540e\u9762\u7684\u5b57\u6bcd\u66ff\u6362\u4e3a>
        6.\u5c06\u5f00\u59cb\u5904\u7684\u5b57\u6bcd\u53ca\u9017\u53f7\u53bb\u6389
        7.\u7528\u9017\u53f7\u5206\u9694\u9009\u62e9\u5668\uff0c\u5f97\u5230\u6b63\u89c4\u5316\u7684\u82e5\u5e72\u4e2a\u9009\u62e9\u5668
        8.\u8fd4\u56de\u9009\u62e9\u5668\u6570\u7ec4
      */
    return selector.replace(/[\s\]\)]\w*/g, '').replace(/[\#\.\[\:\=]+(?=[\#\.\[\]\,\:\=\>\*])/g, '').replace(/\*+\w*/g, '*').replace(/\,+\w*/g, ',').replace(/\>+\w*/g, '>').replace(/^\w*\,/g, '').split(/\,/g);
  };

  _.parserSelector = function (selector) {
    // \u89e3\u6790\u5355\u4e2a\u7684\u9009\u62e9\u5668\uff0c\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u8fc7\u7a0b\u7684\u6570\u7ec4
    var sign, content, prop, value, func, param, doFind; // recursive\u662f\u5426\u9012\u5f52\uff0cdoFind\u662f\u5426\u67e5\u627e\uff0c\u5426\u5219\u8fc7\u6ee4\u64cd\u4f5c

    var recursive = 1;
    var process = [];
    var parts = selector.replace(/(?=[\#\.\[\:\>\*])/g, '@').replace(/^\@/, '').split('@'); // \u5c06\u9009\u62e9\u5668\u6839\u636e\u6807\u8bb0\u5206\u5f00

    for (var i = 0; i < parts.length; i++) {
      if (parts[i] === '>') {
        // \u5f53\u51fa\u73b0>\u7684\u65f6\u5019find\u51fd\u6570\u5c06\u4e0d\u4f1a\u9012\u5f52
        recursive = 0;
        i++;
      } // \u521d\u59cb\u5316


      sign = parts[i][0];
      content = parts[i].substr(1);
      prop = value = func = param = '';
      doFind = 1; // \u5224\u65ad

      switch (sign) {
        case '*':
          prop = 'type';
          break;

        case '#':
          prop = 'id';
          value = content;
          break;

        case '.':
          prop = 'type';
          value = content;
          break;

        case '[':
          var p = content.split('=');
          prop = p[0];
          if (p.length === 2) value = p[1];
          break;

        case ':':
          var fn = content.split('(');
          func = fn[0];
          if (fn.length === 2) param = fn[1];
          doFind = 0;
          break;
      }

      process.push([prop, value, recursive, doFind, func, param]);
      recursive = 1;
    }

    return process;
  };

  _.merge = function (newArray, oldArray) {
    // \u5408\u5e76\u4e24\u4e2a\u6570\u7ec4\uff0c\u5e76\u4e14\u53bb\u6389\u91cd\u590d\u5143\u7d20
    var temp = [];
    var b = 1;

    for (var i = 0; i < newArray.length; i++) {
      for (var j = 0; j < oldArray.length; j++) {
        if (newArray[i] === oldArray[j]) {
          b = 0;
          break;
        }
      }

      if (b) temp.push(newArray[i]);
    }

    return oldArray.concat(temp);
  };

  _.findElementsByProp = function (elements, prop, value, recursive) {
    var matchs = [];

    for (var i = 0; i < elements.length; i++) {
      if (elements[i].children) var atoms = elements[i].children;else if (elements[i].items) atoms = elements[i].items;else continue;
      var match = [];

      for (var j = 0; j < atoms.length; j++) {
        if (atoms[j][prop] && (value === '' || atoms[j][prop].toString() === value)) {
          match.push(atoms[j]);
        }

        if (recursive && (atoms[j].children || atoms[j].items)) {
          var temp = arguments.callee([atoms[j]], prop, value, 1);
          match = _.merge(temp, match);
        }
      }

      matchs = _.merge(match, matchs);
    }

    return matchs;
  };

  _.findElementsByFn = function (elements, fn, recursive) {
    var match = [];

    for (var i = 0; i < elements.length; i++) {
      if (elements[i].children) var atoms = elements[i].children;else if (elements[i].items) atoms = elements[i].items;else continue;

      for (var j = 0; j < atoms.length; j++) {
        if (fn(atoms[j])) match.push(atoms[j]);

        if (recursive && (atoms[j].children || atoms[j].items)) {
          var temp = arguments.callee(atoms[j].children, fn, 1);
          match = _.merge(temp, match);
        }
      }
    }

    return match;
  };

  return _;
}();

module.exports = $.global.yp.UIParser = UIParser;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36)))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// rd_GimmePropPath.jsx
// Copyright (c) 2006-2013 redefinery (Jeffrey R. Almasol). All rights reserved.
// check it: www.redefinery.com
// 
// Name: rd_GimmePropPath
// Version: 3.0
// 
// Description:
// This script displays the scripting and expression code needed to access
// the selected property or property group. Use this information to
// access the selection correctly in your code.
// 
// Select only a single property or property group; selection of some
// properties also select the parent property group, which is fine.
// Selection of multiple properties or property groups at the same
// property depth are not allowed. However, for multiple properties or
// property groups of different depths, the deepest property or property
// group will be used.
// 
// You can control the root object used in the generated code, how
// properties and property groups are referenced (and if index numbers
// should be used, when available), and how the composition or layer is
// referenced in the expression code.
// 
// The generated scripting and expression code can be copied for use
// in your scripts or expressions. You can also test the generated 
// script code to make sure it will access the correct property or 
// property group.
// 
// Note: If the Root Object = Layer and Expression References = Relative,
// the displayed expression code will work only if it is used on the
// same layer.
// 
// Note: For properties such as Custom Value types that cannot
// be targeted via expressions, a "NOT FUNCTIONAL" label will appear
// above the Via Expression area.
// 
// Note: This version of the script requires After Effects CS5 
// or later. It can be used as a dockable panel by placing the 
// script in a ScriptUI Panels subfolder of the Scripts folder, 
// and then choosing this script from the Window menu.
// 
// Thanks to Dan Ebberts for the idea for this script and help in
// reviewing it.
// 
// Legal stuff:
// This script is provided "as is," without warranty of any kind, expressed
// or implied. In no event shall the author be held liable for any damages 
// arising in any way from the use of this script.
// 
// In other words, I'm just trying to share knowledge with and help out my
// fellow AE script heads, so don't blame me if my code doesn't rate. :-)
// rd_GimmePropPath()
// 
// Description:
// This function contains the main logic for this script.
// 
// Parameters:
// thisObj - "this" object.
// 
// Returns:
// Nothing.
//
var _require = __webpack_require__(0),
    exp = _require.exp;

module.exports = function () {
  var _propCompactEnglishEx;

  // Globals
  var rd_GimmePropPathData = new Object(); // Store globals in an object

  rd_GimmePropPathData.scriptName = "rd: Gimme Prop Path";
  rd_GimmePropPathData.scriptTitle = rd_GimmePropPathData.scriptName + " v3.0";
  rd_GimmePropPathData.lastQueriedProp = null;
  rd_GimmePropPathData.strRootObj = {
    en: "Root Object:"
  };
  rd_GimmePropPathData.strRootObjApp = {
    en: "Application"
  };
  rd_GimmePropPathData.strRootObjComp = {
    en: "Composition"
  };
  rd_GimmePropPathData.strRootObjLayer = {
    en: "Layer"
  };
  rd_GimmePropPathData.strRefMode = {
    en: "Expression References:"
  };
  rd_GimmePropPathData.strRefModeAbs = {
    en: "Absolute"
  };
  rd_GimmePropPathData.strRefModeRel = {
    en: "Relative"
  };
  rd_GimmePropPathData.strPropNameRefs = {
    en: "Properties Referenced By:"
  };
  rd_GimmePropPathData.strPropNameRefsByMatchName = {
    en: "Match Name"
  };
  rd_GimmePropPathData.strPropNameRefsByName = {
    en: "Name"
  };
  rd_GimmePropPathData.strPropNameRefsByIndex = {
    en: "Use index number for group properties"
  };
  rd_GimmePropPathData.strPropNameCompactEnglish = {
    en: "Use compact English syntax"
  };
  rd_GimmePropPathData.strScriptRefs = {
    en: "Scripting References:"
  };
  rd_GimmePropPathData.strScriptRefCollapse = {
    en: "Collapse \".property()\" syntax"
  };
  rd_GimmePropPathData.strViaScripting = {
    en: "Via Scripting:"
  };
  rd_GimmePropPathData.strViaExpression = {
    en: "Via Expression:"
  };
  rd_GimmePropPathData.strGetPropPath = {
    en: "Get Property Path"
  };
  rd_GimmePropPathData.strTest = {
    en: "Test"
  };
  rd_GimmePropPathData.strHelp = {
    en: "?"
  };
  rd_GimmePropPathData.strErrNoCompSel = {
    en: "Cannot perform operation. Please select or open a single composition in the Project window, and try again."
  };
  rd_GimmePropPathData.strErrNoSinglePropSel = {
    en: "Cannot perform operation. Please select only one property or property group, and try again."
  };
  rd_GimmePropPathData.strErrTextScriptCode = {
    en: "Cannot test script code. Be sure the selected or active composition contains the selected property in the displayed code, and try again."
  };
  rd_GimmePropPathData.strMinAE100 = {
    en: "This script requires Adobe After Effects CS5 or later."
  };
  rd_GimmePropPathData.strErrExprNotFunc = {
    en: "NOT FUNCTIONAL"
  };
  rd_GimmePropPathData.strHelpText = {
    en: "Copyright (c) 2006-2013 redefinery (Jeffrey R. Almasol). \n" + "All rights reserved.\n" + "\n" + "This script displays the scripting and expression code needed to access the selected property or property group. Use this information to access the selection correctly in your code.\n" + "\n" + "Select only a single property or property group; selection of some properties also select the parent property group, which is fine. Selection of multiple properties or property groups at the same property depth are not allowed. However, for multiple properties or property groups of different depths, the deepest property or property group will be used.\n" + "\n" + "You can control the root object used in the generated code, how properties and property groups are referenced (and if index numbers should be used, when available), and how the composition or layer is referenced in the expression code.\n" + "\n" + "The generated scripting and expression code can be copied for use in your scripts or expressions. You can also test the generated script code to make sure it will access the correct property or property group.\n" + "\n" + "Note: If the Root Object = Layer and Expression References = Relative, the displayed expression code will work only if it is used on the same layer.\n" + "\n" + "Note: For properties such as Custom Value types that cannot be targeted via expressions, a \"NOT FUNCTIONAL\" label will appear above the Via Expression area.\n" + "\n" + "Note: This version of the script requires After Effects CS5 or later. It can be used as a dockable panel by placing the script in a ScriptUI Panels subfolder of the Scripts folder, and then choosing this script from the Window menu.\n" + "\n" + "Thanks to Dan Ebberts for the idea for this script and help in reviewing it."
  }; // Associative array that converts property match names to their compact English expression statements.
  // For simple conversions, quote the result!
  // 

  var propCompactEnglishExprs = (_propCompactEnglishEx = {
    "ADBE Transform Group": "'transform'",
    // Handle camera/light vs. AV layers
    "ADBE Anchor Point": "((prop.propertyGroup(prop.propertyDepth).property('intensity')!=null) || (prop.propertyGroup(prop.propertyDepth).property('zoom')!=null)) ? '.pointOfInterest' : '.anchorPoint'",
    "ADBE Position": "'.position'",
    "ADBE Scale": "'.scale'",
    "ADBE Orientation": "'.orientation'",
    "ADBE Rotate X": "'.xRotation'",
    "ADBE Rotate Y": "'.yRotation'",
    // Handle 3D vs. 2D layers
    "ADBE Rotate Z": "(prop.propertyGroup(prop.propertyDepth).threeDLayer || (prop.propertyGroup(prop.propertyDepth).property('intensity')!=null) || (prop.propertyGroup(prop.propertyDepth).property('zoom')!=null)) ? '.zRotation' : '.rotation'",
    "ADBE Opacity": "'.opacity'",
    "ADBE Material Options Group": "'materialOption'",
    "ADBE Casts Shadows": "'.castsShadows'",
    "ADBE Light Transmission": "'.lightTransmission'",
    "ADBE Accepts Shadows": "'.acceptsShadows'",
    "ADBE Accepts Lights": "'.acceptsLights'",
    "ADBE Ambient Coefficient": "'.ambient'",
    "ADBE Diffuse Coefficient": "'.diffuse'",
    "ADBE Specular Coefficient": "'.specular'",
    "ADBE Shininess Coefficient": "'.shininess'",
    "ADBE Metal Coefficient": "'.metal'",
    "ADBE Light Options Group": "'lightOption'",
    "ADBE Light Intensity": "'.intensity'",
    "ADBE Light Color": "'.color'",
    "ADBE Light Cone Angle": "'.coneAngle'",
    "ADBE Light Cone Feather 2": "'.coneFeather'",
    //"ADBE Casts Shadows":										"'.castsShadows'",	// Already covered previously
    "ADBE Light Shadow Darkness": "'.shadowDarkness'",
    "ADBE Light Shadow Diffusion": "'.shadowDiffusion'",
    "ADBE Camera Options Group": "'cameraOption'",
    "ADBE Camera Zoom": "'.zoom'",
    "ADBE Camera Depth of Field": "'.depthOfField'",
    "ADBE Camera Focus Distance": "'.focusDistance'",
    "ADBE Camera Aperture": "'.aperture'",
    "ADBE Camera Blur Level": "'.blurLevel'",
    "ADBE Text Properties": "'text'",
    "ADBE Text Document": "'.sourceText'",
    "ADBE Text Path Options": "'.pathOption'",
    "ADBE Text Path": "'.path'",
    "ADBE Text Reverse Path": "'.reversePath'",
    "ADBE Text Perpendicular To Path": "'.perpendicularToPath'",
    "ADBE Text Force Align Path": "'.forceAlignment'",
    "ADBE Text First Margin": "'.firstMargin'",
    "ADBE Text Last Margin": "'.lastMargin'",
    "ADBE Text More Options": "'.moreOption'",
    "ADBE Text Anchor Point Option": "'.anchorPointGrouping'",
    "ADBE Text Anchor Point Align": "'.groupingAlignment'",
    "ADBE Text Render Order": "'.fillANdStroke'",
    "ADBE Text Character Blend Mode": "'.interCharacterBlending'",
    "ADBE Text Animators": "'.animator'",
    //"ADBE Text Animator":										"''",		// No equivalent
    "ADBE Text Selectors": "'.selector'",
    //"ADBE Text Selector":											"''",		// No equivalent
    "ADBE Text Percent Start": "'.start'",
    "ADBE Text Percent End": "'.end'",
    "ADBE Text Percent Offset": "'.offset'",
    "ADBE Text Index Start": "'.start'",
    "ADBE Text Index End": "'.end'",
    "ADBE Text Index Offset": "'.offset'",
    "ADBE Text Range Advanced": "'.advanced'",
    "ADBE Text Range Units": "'.units'",
    "ADBE Text Range Type2": "'.basedOn'",
    "ADBE Text Selector Mode": "'.mode'",
    "ADBE Text Selector Max Amount": "'.amount'",
    "ADBE Text Range Shape": "'.shape'",
    "ADBE Text Selector Smoothness": "'.smoothness'",
    "ADBE Text Levels Max Ease": "'.easeHigh'",
    "ADBE Text Levels Min Ease": "'.easeLow'",
    "ADBE Text Randomize Order": "'.randomizeOrder'",
    "ADBE Text Random Seed": "'.randomSeed'"
  }, _propCompactEnglishEx["ADBE Text Selector Mode"] = "'.mode'", _propCompactEnglishEx["ADBE Text Wiggly Max Amount"] = "'.maxAmount'", _propCompactEnglishEx["ADBE Text Wiggly Min Amount"] = "'.minAmount'", _propCompactEnglishEx["ADBE Text Range Type2"] = "'.basedOn'", _propCompactEnglishEx["ADBE Text Temporal Freq"] = "'.wigglesSecond'", _propCompactEnglishEx["ADBE Text Character Correlation"] = "'.correlation'", _propCompactEnglishEx["ADBE Text Temporal Phase"] = "'.temporalPhase'", _propCompactEnglishEx["ADBE Text Spatial Phase"] = "'.spatialPhase'", _propCompactEnglishEx["ADBE Text Wiggly Lock Dim"] = "'.lockDimensions'", _propCompactEnglishEx["ADBE Text Wiggly Random Seed"] = "'.randomSeed'", _propCompactEnglishEx["ADBE Text Range Type2"] = "'.basedOn'", _propCompactEnglishEx["ADBE Text Expressible Amount"] = "'.amount'", _propCompactEnglishEx["ADBE Text Animator Properties"] = "'.property'", _propCompactEnglishEx["ADBE Text Anchor Point 3D"] = "'.anchorPoint'", _propCompactEnglishEx["ADBE Text Position 3D"] = "'.position'", _propCompactEnglishEx["ADBE Text Scale 3D"] = "'.scale'", _propCompactEnglishEx["ADBE Text Skew"] = "'.skew'", _propCompactEnglishEx["ADBE Text Skew Axis"] = "'.skewAxis'", _propCompactEnglishEx["ADBE Text Rotation X"] = "'.xRotation'", _propCompactEnglishEx["ADBE Text Rotation Y"] = "'.yRotation'", _propCompactEnglishEx["ADBE Text Rotation"] = "'.zRotation'", _propCompactEnglishEx["ADBE Text Opacity"] = "'.opacity'", _propCompactEnglishEx["ADBE Text Fill Opacity"] = "'.fillOpacity'", _propCompactEnglishEx["ADBE Text Fill Color"] = "'.fillColor'", _propCompactEnglishEx["ADBE Text Fill Hue"] = "'.fillHue'", _propCompactEnglishEx["ADBE Text Fill Saturation"] = "'.fillSaturation'", _propCompactEnglishEx["ADBE Text Fill Brightness"] = "'.fillBrightness'", _propCompactEnglishEx["ADBE Text Stroke Opacity"] = "'.strokeOpacity'", _propCompactEnglishEx["ADBE Text Stroke Color"] = "'.strokeColor'", _propCompactEnglishEx["ADBE Text Stroke Hue"] = "'.strokeHue'", _propCompactEnglishEx["ADBE Text Stroke Saturation"] = "'.strokeSaturation'", _propCompactEnglishEx["ADBE Text Stroke Brightness"] = "'.strokeBrightness'", _propCompactEnglishEx["ADBE Text Stroke Width"] = "'.strokeWidth'", _propCompactEnglishEx["ADBE Text Line Anchor"] = "'.lineAnchor'", _propCompactEnglishEx["ADBE Text Line Spacing"] = "'.lineSpacing'", _propCompactEnglishEx["ADBE Text Track Type"] = "'.trackingType'", _propCompactEnglishEx["ADBE Text Tracking Amount"] = "'.trackingAmount'", _propCompactEnglishEx["ADBE Text Character Change Type"] = "'.characterAlignment'", _propCompactEnglishEx["ADBE Text Character Range"] = "'.characterRange'", _propCompactEnglishEx["ADBE Text Character Replace"] = "'.characterValue'", _propCompactEnglishEx["ADBE Text Character Offset"] = "'.characterOffset'", _propCompactEnglishEx["ADBE Text Blur"] = "'.blur'", _propCompactEnglishEx["ADBE Mask Parade"] = "'mask'", _propCompactEnglishEx["ADBE Mask Shape"] = "'.maskPath'", _propCompactEnglishEx["ADBE Mask Feather"] = "'.maskFeather'", _propCompactEnglishEx["ADBE Mask Opacity"] = "'.maskOpacity'", _propCompactEnglishEx["ADBE Mask Offset"] = "'.maskExpansion'", _propCompactEnglishEx["ADBE Effect Parade"] = "'effect'", _propCompactEnglishEx["ADBE Paint Group"] = "'.stroke'", _propCompactEnglishEx["ADBE Paint Shape"] = "'.path'", _propCompactEnglishEx["ADBE Paint Properties"] = "'.strokeOption'", _propCompactEnglishEx["ADBE Paint Begin"] = "'.start'", _propCompactEnglishEx["ADBE Paint End"] = "'.end'", _propCompactEnglishEx["ADBE Paint Color"] = "'.color'", _propCompactEnglishEx["ADBE Paint Diameter"] = "'.diameter'", _propCompactEnglishEx["ADBE Paint Angle"] = "'.angle'", _propCompactEnglishEx["ADBE Paint Hardness"] = "'.hardness'", _propCompactEnglishEx["ADBE Paint Roundness"] = "'.roundness'", _propCompactEnglishEx["ADBE Paint Tip Spacing"] = "'.spacing'", _propCompactEnglishEx["ADBE Paint Target Channels"] = "'.channels'", _propCompactEnglishEx["ADBE Paint Opacity"] = "'.opacity'", _propCompactEnglishEx["ADBE Paint Flow"] = "'.flow'", _propCompactEnglishEx["ADBE Paint Clone Layer"] = "'.cloneSource'", _propCompactEnglishEx["ADBE Paint Clone Position"] = "'.clonePosition'", _propCompactEnglishEx["ADBE Paint Clone Time"] = "'.cloneTime'", _propCompactEnglishEx["ADBE Paint Clone Time Shift"] = "'.cloneTimeShift'", _propCompactEnglishEx["ADBE Paint Transform"] = "'.transform'", _propCompactEnglishEx["ADBE Paint Anchor Point"] = "'.anchorPoint'", _propCompactEnglishEx["ADBE Paint Position"] = "'.position'", _propCompactEnglishEx["ADBE Paint Scale"] = "'.scale'", _propCompactEnglishEx["ADBE Paint Rotation"] = "'.rotation'", _propCompactEnglishEx["ADBE MTrackers"] = "'motionTracker'", _propCompactEnglishEx["ADBE MTracker Pt Feature Center"] = "'.featureCenter'", _propCompactEnglishEx["ADBE MTracker Pt Feature Size"] = "'.featureSize'", _propCompactEnglishEx["ADBE MTracker Pt Search Ofst"] = "'.searchOffset'", _propCompactEnglishEx["ADBE MTracker Pt Search Size"] = "'.searchSize'", _propCompactEnglishEx["ADBE MTracker Pt Confidence"] = "'.confidence'", _propCompactEnglishEx["ADBE MTracker Pt Attach Pt"] = "'.attachPoint'", _propCompactEnglishEx["ADBE MTracker Pt Attach Pt Ofst"] = "'.attachPointOffset'", _propCompactEnglishEx["ADBE Audio Group"] = "'audio'", _propCompactEnglishEx["ADBE Audio Levels"] = "'.audioLevels'", _propCompactEnglishEx["ADBE Time Remapping"] = "'timeRemap'", _propCompactEnglishEx["ADBE Layer Styles"] = "'layerStyle'", _propCompactEnglishEx["ADBE Blend Options Group"] = "'.blendingOption'", _propCompactEnglishEx["ADBE Global Angle2"] = "'.globalLightAngle'", _propCompactEnglishEx["ADBE Global Altitude2"] = "'.globalLightAltitude'", _propCompactEnglishEx["ADBE Adv Blend Group"] = "'.advancedBlending'", _propCompactEnglishEx["ADBE Layer Fill Opacity2"] = "'.fillOpacity'", _propCompactEnglishEx["ADBE R Channel Blend"] = "'.red'", _propCompactEnglishEx["ADBE G Channel Blend"] = "'.green'", _propCompactEnglishEx["ADBE B Channel Blend"] = "'.blue'", _propCompactEnglishEx["ADBE Blend Interior"] = "'.blendInteriorStylesAsGroup'", _propCompactEnglishEx["ADBE Blend Ranges"] = "'.useBlendRangesFromSource'", _propCompactEnglishEx["dropShadow/enabled"] = "'.dropShadow'", _propCompactEnglishEx["dropShadow/mode2"] = "'.blendMode'", _propCompactEnglishEx["dropShadow/color"] = "'.color'", _propCompactEnglishEx["dropShadow/opacity"] = "'.opacity'", _propCompactEnglishEx["dropShadow/useGlobalAngle"] = "'.useGlobalLight'", _propCompactEnglishEx["dropShadow/localLightingAngle"] = "'.angle'", _propCompactEnglishEx["dropShadow/distance"] = "'.distance'", _propCompactEnglishEx["dropShadow/chokeMatte"] = "'.spread'", _propCompactEnglishEx["dropShadow/blur"] = "'.size'", _propCompactEnglishEx["dropShadow/noise"] = "'.noise'", _propCompactEnglishEx["dropShadow/layerConceals"] = "'.layerKnocksOutDropShadow'", _propCompactEnglishEx["innerShadow/enabled"] = "'.innerShadow'", _propCompactEnglishEx["innerShadow/mode2"] = "'.blendMode'", _propCompactEnglishEx["innerShadow/color"] = "'.color'", _propCompactEnglishEx["innerShadow/opacity"] = "'.opacity'", _propCompactEnglishEx["innerShadow/useGlobalAngle"] = "'.useGlobalLight'", _propCompactEnglishEx["innerShadow/localLightingAngle"] = "'.angle'", _propCompactEnglishEx["innerShadow/distance"] = "'.distance'", _propCompactEnglishEx["innerShadow/chokeMatte"] = "'.choke'", _propCompactEnglishEx["innerShadow/blur"] = "'.size'", _propCompactEnglishEx["innerShadow/noise"] = "'.noise'", _propCompactEnglishEx["outerGlow/enabled"] = "'.outerGlow'", _propCompactEnglishEx["outerGlow/mode2"] = "'.blendMode'", _propCompactEnglishEx["outerGlow/opacity"] = "'.opacity'", _propCompactEnglishEx["outerGlow/noise"] = "'.noise'", _propCompactEnglishEx["outerGlow/AEColorChoice"] = "'.colorType'", _propCompactEnglishEx["outerGlow/color"] = "'.color'", _propCompactEnglishEx["outerGlow/gradientSmoothness"] = "'.gradientSmoothness'", _propCompactEnglishEx["outerGlow/glowTechnique"] = "'.technique'", _propCompactEnglishEx["outerGlow/chokeMatte"] = "'.spread'", _propCompactEnglishEx["outerGlow/blur"] = "'.size'", _propCompactEnglishEx["outerGlow/inputRange"] = "'.range'", _propCompactEnglishEx["outerGlow/shadingNoise"] = "'.jitter'", _propCompactEnglishEx["innerGlow/enabled"] = "'.innerGlow'", _propCompactEnglishEx["innerGlow/mode2"] = "'.blendMode'", _propCompactEnglishEx["innerGlow/opacity"] = "'.opacity'", _propCompactEnglishEx["innerGlow/noise"] = "'.noise'", _propCompactEnglishEx["innerGlow/AEColorChoice"] = "'.colorType'", _propCompactEnglishEx["innerGlow/color"] = "'.color'", _propCompactEnglishEx["innerGlow/gradientSmoothness"] = "'.gradientSmoothness'", _propCompactEnglishEx["innerGlow/glowTechnique"] = "'.technique'", _propCompactEnglishEx["innerGlow/innerGlowSource"] = "'.source'", _propCompactEnglishEx["innerGlow/chokeMatte"] = "'.choke'", _propCompactEnglishEx["innerGlow/blur"] = "'.size'", _propCompactEnglishEx["innerGlow/inputRange"] = "'.range'", _propCompactEnglishEx["innerGlow/shadingNoise"] = "'.jitter'", _propCompactEnglishEx["bevelEmboss/enabled"] = "'.bevelAndEmboss'", _propCompactEnglishEx["bevelEmboss/bevelStyle"] = "'.style'", _propCompactEnglishEx["bevelEmboss/bevelTechnique"] = "'.technique'", _propCompactEnglishEx["bevelEmboss/strengthRatio"] = "'.depth'", _propCompactEnglishEx["bevelEmboss/bevelDirection"] = "'.direction'", _propCompactEnglishEx["bevelEmboss/blur"] = "'.size'", _propCompactEnglishEx["bevelEmboss/softness"] = "'.soften'", _propCompactEnglishEx["bevelEmboss/useGlobalAngle"] = "'.useGlobalLight'", _propCompactEnglishEx["bevelEmboss/localLightingAngle"] = "'.angle'", _propCompactEnglishEx["bevelEmboss/localLightingAltitude"] = "'.altitude'", _propCompactEnglishEx["bevelEmboss/highlightMode"] = "'.highlightMode'", _propCompactEnglishEx["bevelEmboss/highlightColor"] = "'.highlightColor'", _propCompactEnglishEx["bevelEmboss/highlightOpacity"] = "'.highlightOpacity'", _propCompactEnglishEx["bevelEmboss/shadowMode"] = "'.shadowMode'", _propCompactEnglishEx["bevelEmboss/shadowColor"] = "'.shadowColor'", _propCompactEnglishEx["bevelEmboss/shadowOpacity"] = "'.shadowOpacity'", _propCompactEnglishEx["chromeFX/enabled"] = "'.satin'", _propCompactEnglishEx["chromeFX/mode2"] = "'.blendMode'", _propCompactEnglishEx["chromeFX/color"] = "'.color'", _propCompactEnglishEx["chromeFX/opacity"] = "'.opacity'", _propCompactEnglishEx["chromeFX/localLightingAngle"] = "'.angle'", _propCompactEnglishEx["chromeFX/distance"] = "'.distance'", _propCompactEnglishEx["chromeFX/blur"] = "'.size'", _propCompactEnglishEx["chromeFX/invert"] = "'.invert'", _propCompactEnglishEx["solidFill/enabled"] = "'.colorOverlay'", _propCompactEnglishEx["solidFill/mode2"] = "'.blendMode'", _propCompactEnglishEx["solidFill/color"] = "'.color'", _propCompactEnglishEx["solidFill/opacity"] = "'.opacity'", _propCompactEnglishEx["gradientFill/enabled"] = "'.gradientOverlay'", _propCompactEnglishEx["gradientFill/mode2"] = "'.blendMode'", _propCompactEnglishEx["gradientFill/opacity"] = "'.opacity'", _propCompactEnglishEx["gradientFill/gradientSmoothness"] = "'.gradientSmoothness'", _propCompactEnglishEx["gradientFill/angle"] = "'.angle'", _propCompactEnglishEx["gradientFill/type"] = "'.style'", _propCompactEnglishEx["gradientFill/reverse"] = "'.reverse'", _propCompactEnglishEx["gradientFill/align"] = "'.alignWithLayer'", _propCompactEnglishEx["gradientFill/scale"] = "'.scale'", _propCompactEnglishEx["gradientFill/offset"] = "'.offset'", _propCompactEnglishEx["patternFill/enabled"] = "'.patternOverlay'", _propCompactEnglishEx["patternFill/mode2"] = "'.blendMode'", _propCompactEnglishEx["patternFill/opacity"] = "'.opacity'", _propCompactEnglishEx["patternFill/align"] = "'.linkWithLayer'", _propCompactEnglishEx["patternFill/scale"] = "'.scale'", _propCompactEnglishEx["patternFill/phase"] = "'.offset'", _propCompactEnglishEx["frameFX/enabled"] = "'.stroke'", _propCompactEnglishEx["frameFX/mode2"] = "'.blendMode'", _propCompactEnglishEx["frameFX/color"] = "'.color'", _propCompactEnglishEx["frameFX/size"] = "'.size'", _propCompactEnglishEx["frameFX/opacity"] = "'.opacity'", _propCompactEnglishEx["frameFX/style"] = "'.position'", _propCompactEnglishEx); // Array that converts property match names to their compact English scripting statements.
  // 

  var propCompactEnglishScriptingExprs = {
    "ADBE Text Animator Properties": ""
  }; // rd_GimmePropPath_localize()
  // 
  // Description:
  // This function localizes the given string variable based on the current locale.
  // 
  // Parameters:
  //   strVar - The string variable's name.
  // 
  // Returns:
  // String.
  //

  function rd_GimmePropPath_localize(strVar) {
    return strVar["en"];
  } // rd_GimmePropPath_buildUI()
  // 
  // Description:
  // This function builds the user interface.
  // 
  // Parameters:
  // thisObj - Panel object (if script is launched from Window menu); null otherwise.
  // 
  // Returns:
  // Window or Panel object representing the built user interface.
  //


  function rd_GimmePropPath_buildUI() {
    var pal = new Window("palette", rd_GimmePropPathData.scriptName, undefined, {
      resizeable: true
    });

    if (pal !== null) {
      var res = "group { \
				orientation:'column', alignment:['fill','fill'], \
				header: Group { \
					alignment:['fill','top'], \
					title: StaticText { text:'" + rd_GimmePropPathData.scriptName + "', alignment:['fill','center'] }, \
					help: Button { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strHelp) + "', maximumSize:[30,20], alignment:['right','center'] }, \
				}, \
				rootObj: Group { \
					alignment:['fill','top'], alignChildren:['left','center'], \
					lbl: StaticText { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strRootObj) + "' }, \
					rootObjApp: RadioButton { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strRootObjApp) + "', value:true }, \
					rootObjComp: RadioButton { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strRootObjComp) + "' }, \
					rootObjLayer: RadioButton { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strRootObjLayer) + "' }, \
				}, \
				propNameRefs: Group { \
					alignment:['fill','top'], alignChildren:['left','center'], \
					lbl: StaticText { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strPropNameRefs) + "' }, \
					propNameRefsByMatchName: RadioButton { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strPropNameRefsByMatchName) + "' }, \
					propNameRefsByName: RadioButton { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strPropNameRefsByName) + "', value:true }, \
				}, \
				propNameOpts: Group { \
					orientation:'column', alignment:['left','top'], alignChildren:['left','top'], spacing:5, \
					propNameRefsByIndex: Checkbox { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strPropNameRefsByIndex) + "' }, \
					propNameCompactEnglish: Checkbox { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strPropNameCompactEnglish) + "' }, \
				}, \
				scriptRefMode: Group { \
					alignment:['fill','top'], alignChildren:['left','center'], \
					lbl: StaticText { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strScriptRefs) + "' }, \
					scriptRefCollapse: Checkbox { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strScriptRefCollapse) + "' }, \
				}, \
				refMode : Group { \
					alignment:['fill','top'], alignChildren:['left','bottom'], \
					lbl: StaticText { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strRefMode) + "' }, \
					refModeAbs: RadioButton { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strRefModeAbs) + "', value:true }, \
					refModeRel: RadioButton { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strRefModeRel) + "' }, \
				}, \
				viaScript : Group { \
					orientation:'column', alignment:['fill','fill'], spacing:5, \
					heading: Group { \
						alignment:['fill','top'], \
						lbl: StaticText { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strViaScripting) + "', alignment:['left','bottom'] }, \
						viaScriptCodeTest: Button { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strTest) + "', enabled:false, alignment:['right','bottom'], preferredSize:[-1,20] }, \
					}, \
					viaScriptCode: EditText { text:'', properties:{'multiline':true}, alignment:['fill','fill'], minimumSize:[100,20] }, \
				}, \
				viaExpr : Group { \
					orientation:'column', alignment:['fill','fill'], spacing:5, \
					heading: Group { \
						alignment:['fill','top'], \
						lbl: StaticText { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strViaExpression) + "', alignment:['fill','bottom'] }, \
						viaExprMsg: StaticText { text:'', alignment:['right','bottom'], characters:15 }, \
					}, \
					viaExprCode: EditText { text:'', properties:{'multiline':true}, alignment:['fill','fill'], minimumSize:[100,20] }, \
				}, \
				cmds: Group { \
					alignment:['fill','bottom'], \
					getPropPathBtn: Button { text:'" + rd_GimmePropPath_localize(rd_GimmePropPathData.strGetPropPath) + "', alignment:['right','top'], preferredSize:[-1,20] }, \
				}, \
			} \
			";
      pal.grp = pal.add(res);
      pal.grp.rootObj.lbl.preferredSize = pal.grp.scriptRefMode.lbl.preferredSize = pal.grp.refMode.lbl.preferredSize = pal.grp.propNameRefs.lbl.preferredSize;
      pal.grp.rootObj.rootObjApp.preferredSize = pal.grp.refMode.refModeAbs.preferredSize = pal.grp.propNameRefs.propNameRefsByMatchName.preferredSize;
      pal.grp.propNameRefs.margins.top = pal.grp.scriptRefMode.margins.top = 5;
      pal.grp.propNameOpts.indent = pal.grp.rootObj.lbl.preferredSize.width + pal.grp.rootObj.spacing;
      pal.layout.layout(true);
      pal.grp.minimumSize = pal.grp.size;
      pal.layout.resize();

      pal.onResizing = pal.onResize = function () {
        this.layout.resize();
      };

      pal.grp.rootObj.rootObjApp.onClick = function () {
        rd_GimmePropPath_buildPropPath(this.parent.parent.parent);
      };

      pal.grp.rootObj.rootObjComp.onClick = function () {
        rd_GimmePropPath_buildPropPath(this.parent.parent.parent);
      };

      pal.grp.rootObj.rootObjLayer.onClick = function () {
        rd_GimmePropPath_buildPropPath(this.parent.parent.parent);
      };

      pal.grp.propNameRefs.propNameRefsByMatchName.onClick = function () {
        rd_GimmePropPath_buildPropPath(this.parent.parent.parent);
      };

      pal.grp.propNameRefs.propNameRefsByName.onClick = function () {
        rd_GimmePropPath_buildPropPath(this.parent.parent.parent);
      };

      pal.grp.propNameOpts.propNameRefsByIndex.onClick = function () {
        rd_GimmePropPath_buildPropPath(this.parent.parent.parent);
      };

      pal.grp.propNameOpts.propNameCompactEnglish.onClick = function () {
        rd_GimmePropPath_buildPropPath(this.parent.parent.parent);
      };

      pal.grp.scriptRefMode.scriptRefCollapse.onClick = function () {
        rd_GimmePropPath_buildPropPath(this.parent.parent.parent);
      };

      pal.grp.refMode.refModeAbs.onClick = function () {
        rd_GimmePropPath_buildPropPath(this.parent.parent.parent);
      };

      pal.grp.refMode.refModeRel.onClick = function () {
        rd_GimmePropPath_buildPropPath(this.parent.parent.parent);
      };

      pal.grp.viaScript.heading.viaScriptCodeTest.onClick = function () {
        if (this.parent.parent.viaScriptCode.text !== "") {
          var code = this.parent.parent.viaScriptCode.text; // Check if code is using composition or layer as the root object, and adjust accordingly so that the test will work

          if (code[0] === "i") // Comp-relative (starts with "item")
            code = "app.project." + code;else if (code[0] === "l") // Layer-relative (starts with "layer")
            {
              var compItemNum = rd_GimmePropPath_findCompItemNum(app.project.activeItem);

              if (compItemNum === 0) {
                alert(rd_GimmePropPath_localize(rd_GimmePropPathData.strErrTextScriptCode), rd_GimmePropPathData.scriptName);
                return;
              }

              code = "app.project.item(" + compItemNum + ")." + code;
            } // Evaluate the script code

          code = "var prop = " + code + "; if ((prop.propertyType === PropertyType.PROPERTY) && (prop.propertyValueType !== PropertyValueType.CUSTOM_VALUE)) alert(prop.name+\" = \"+prop.value.toString()); else alert(prop.name);";

          try {
            eval(code);
          } catch (e) {
            alert(e.toString() + "\n\n" + rd_GimmePropPath_localize(rd_GimmePropPathData.strErrTextScriptCode), rd_GimmePropPathData.scriptName);
          }
        }
      };

      pal.grp.header.help.onClick = function () {
        alert(rd_GimmePropPathData.scriptTitle + "\n" + rd_GimmePropPath_localize(rd_GimmePropPathData.strHelpText), rd_GimmePropPathData.scriptName);
      };

      pal.grp.cmds.getPropPathBtn.onClick = rd_GimmePropPath_doGetPropPath;
    }

    return pal;
  } // rd_GimmePropPath_findCompItemNum()
  // 
  // Description:
  // This function determines the item number for the specified composiiton
  // in the Project window. This number is used for accessing the composition
  // via scripting.
  // 
  // Parameters:
  //   comp - Composition object.
  // 
  // Returns:
  // Number representing the item number for the composition; or 0 if
  // the composition item number cannot be identified.
  // 


  function rd_GimmePropPath_findCompItemNum(comp) {
    var itemNum = 0,
        item;

    for (var i = 1; i <= app.project.numItems; i++) {
      item = app.project.item(i);

      if (item instanceof CompItem && item === comp) {
        itemNum = i;
        break;
      }
    }

    return itemNum;
  } // rd_GimmePropPath_buildPropPath()
  // 
  // Description:
  // This function assembles the scripting and expression code for accessing
  // the current (or last queried) property, updating the appropriate UI
  // fields.
  // 
  // Parameters:
  //   pal - Window or Panel object, representing the palette.
  // 
  // Returns:
  // Nothing.
  // 


  function rd_GimmePropPath_buildPropPath(pal) {
    // rd_GimmePropPath_getPropCompactEnglishExpr()
    // 
    // Description:
    // This function looks up the specified property's compact English
    // expression statement in the propCompactEnglishExprs associative
    // array, if available.
    // 
    // Parameters:
    //   prop - Property or PropertyGroup object.
    //   matchName - String representing the property's match name to
    //       use for lookup; in AE 6.5, this is overridden with the
    //       property's name.
    //   name - String representing the existing translation of the 
    //       property name.
    // 
    // Returns:
    // String representing the compact English equivalent, if available.
    // 
    function rd_GimmePropPath_getPropCompactEnglishExpr(prop, matchName, name) {
      var translatedName = propCompactEnglishExprs[matchName];
      if (translatedName !== undefined) return eval(translatedName);else return "(" + name + ")";
    } // rd_GimmePropPath_getPropCompactEnglishScriptExpr()
    // 
    // Description:
    // This function determines if the specified property has special 
    // naming when used via Scripting. Otherwise, it'll use the same 
    // as for expressions.
    // 
    // Parameters:
    //   prop - Property or PropertyGroup object.
    //   matchName - String representing the property's match name to
    //       use for lookup.
    //   name - String representing the existing translation of the 
    //       property name.
    // 
    // Returns:
    // String representing the compact English equivalent for Scripting, if available.
    // 


    function rd_GimmePropPath_getPropCompactEnglishScriptExpr(prop, matchName, name) {
      var translatedName = propCompactEnglishScriptingExprs[matchName];
      if (translatedName === undefined) return rd_GimmePropPath_getPropCompactEnglishExpr(prop, matchName, name);else return "(" + name + ")";
    }

    var currProp = rd_GimmePropPathData.lastQueriedProp;
    if (currProp === null) return; // Get the preferred root object, and set a value representing it

    var rootObj;
    if (pal.grp.rootObj.rootObjApp.value) rootObj = 8;else if (pal.grp.rootObj.rootObjComp.value) rootObj = 6;else if (pal.grp.rootObj.rootObjLayer.value) rootObj = 4;
    var scriptRefCollapse = pal.grp.scriptRefMode.scriptRefCollapse.value;
    var refModeAbs = pal.grp.refMode.refModeAbs.value;
    var propNameRefsByMatchName = pal.grp.propNameRefs.propNameRefsByMatchName.value;
    var propNameRefsByName = pal.grp.propNameRefs.propNameRefsByName.value;
    var propNameRefsByIndex = pal.grp.propNameOpts.propNameRefsByIndex.value;
    var propNameCompactEnglish = pal.grp.propNameOpts.propNameCompactEnglish.value; // Traverse up the property tree from the current property, until reaching the layer

    var scriptCode = "",
        exprCode = "";
    var name, compactName, compactScriptName;

    while (currProp.parentProperty !== null) {
      // Reference by property index
      if (currProp.parentProperty.propertyType === PropertyType.INDEXED_GROUP && propNameRefsByIndex) name = currProp.propertyIndex;else {
        // Reference by match name or name
        if (propNameRefsByMatchName) // && (currProp.parentProperty.propertyType === PropertyType.NAMED_GROUP))
          name = "\"" + (currProp.matchName !== "" ? currProp.matchName : currProp.name) + "\"";else name = "\"" + currProp.name + "\"";
      } //alert('"'+currProp.name+'" = "'+currProp.matchName+'"; name="'+name+'", exprCode="'+exprCode+'"');
      // For compact English conversion, check for compact English equivalent

      if (propNameCompactEnglish) {
        compactName = rd_GimmePropPath_getPropCompactEnglishExpr(currProp, currProp.matchName, name);
        compactScriptName = rd_GimmePropPath_getPropCompactEnglishScriptExpr(currProp, currProp.matchName, name);
        scriptCode = compactScriptName + scriptCode;
        exprCode = compactName + exprCode;
      } else {
        scriptCode = (scriptRefCollapse ? "" : ".property") + "(" + name + ")" + scriptCode;
        exprCode = "(" + name + ")" + exprCode;
      } // Traverse up the property tree


      currProp = currProp.parentProperty;
    } // Prefix the layer reference, if requested


    if (rootObj >= 4) // Root Object = Layer
      {
        name = propNameRefsByIndex ? currProp.index : "\"" + currProp.name + "\"";

        if (propNameCompactEnglish) {
          // If the sub-layer property is a property group, add the missing period
          scriptCode = "layer(" + name + ")" + (currProp !== null && currProp.propertyType !== PropertyType.PROPERTY ? "." : "") + scriptCode;
          if (rootObj > 4) exprCode = "layer(" + name + ")." + exprCode;else exprCode = "thisLayer." + exprCode;
        } else {
          scriptCode = "layer(" + name + ")" + scriptCode;
          if (refModeAbs || rootObj > 4) exprCode = "layer(" + name + ")" + exprCode;else exprCode = "thisLayer" + exprCode;
        }
      } // Prefix the comp reference, if requested


    if (rootObj >= 6) // Root Object = Comp
      {
        // Determine the comp's item number in the Project window
        var compItemNum = rd_GimmePropPath_findCompItemNum(app.project.activeItem); //alert("item# "+compItemNum);

        scriptCode = "item(" + compItemNum + ")." + scriptCode;
        if (refModeAbs) exprCode = "comp(\"" + app.project.activeItem.name + "\")." + exprCode;else exprCode = "thisComp." + exprCode;
      } // Prefix the application and project references, if requested, for the script code


    if (rootObj >= 8) // Root Object = Application
      scriptCode = "app.project." + scriptCode; // Update the code fields

    pal.grp.viaScript.viaScriptCode.text = scriptCode;
    exp.beautyBefore = exp.edittext.text;
    exp.edittext.text = exp.edittext.text + exprCode;
    pal.grp.viaExpr.viaExprCode.text = exprCode;
  } // rd_GimmePropPath_doGetPropPath()
  // 
  // Description:
  // This callback function retrieves the currently selected property or property
  // group, and displays the corresponding scripting and expression code to
  // access it.
  // 
  // Parameters:
  // None.
  // 
  // Returns:
  // Nothing.
  //


  function rd_GimmePropPath_doGetPropPath() {
    // rd_GimmePropPath_findDeepestSelectedProp()
    // 
    // Description:
    // This function determines the deepest selected property or property group.
    // Assumes a single composition is selected or active.
    // 
    // Parameters:
    // None
    // 
    // Returns:
    // Property or PropertyGroup object if successful; null if no property or
    // property group, or if multiple of them, are selected.
    // 
    function rd_GimmePropPath_findDeepestSelectedProp() {
      var comp = app.project.activeItem;
      var deepestProp,
          numDeepestProps = 0,
          deepestPropDepth = 0;
      var prop;

      for (var i = 0; i < comp.selectedProperties.length; i++) {
        prop = comp.selectedProperties[i];

        if (prop.propertyDepth >= deepestPropDepth) {
          if (prop.propertyDepth > deepestPropDepth) numDeepestProps = 0;
          deepestProp = prop;
          numDeepestProps++;
          deepestPropDepth = prop.propertyDepth;
        } else continue;
      }

      return numDeepestProps > 1 ? null : deepestProp;
    }

    var prop;
    var rootObj; // Check that a single comp is selected or active

    if (app.project.activeItem === null || !(app.project.activeItem instanceof CompItem)) {
      alert(rd_GimmePropPath_localize(rd_GimmePropPathData.strErrNoCompSel), rd_GimmePropPathData.scriptName);
      return;
    } // Check that a single deep property is selected


    prop = rd_GimmePropPath_findDeepestSelectedProp();

    if (prop === null) {
      alert(rd_GimmePropPath_localize(rd_GimmePropPathData.strErrNoSinglePropSel), rd_GimmePropPathData.scriptName);
      return;
    }

    rd_GimmePropPathData.lastQueriedProp = prop; //alert("deepest prop/group = '"+prop.name+"' (depth="+prop.propertyDepth+")");
    // Enable the Test button

    this.parent.parent.viaScript.heading.viaScriptCodeTest.enabled = true; // Check if expression is usable

    if (prop.propertyType === PropertyType.PROPERTY && prop.propertyValueType === PropertyValueType.CUSTOM_VALUE) this.parent.parent.viaExpr.heading.viaExprMsg.text = rd_GimmePropPath_localize(rd_GimmePropPathData.strErrExprNotFunc);else this.parent.parent.viaExpr.heading.viaExprMsg.text = ""; // Build the property path

    rd_GimmePropPath_buildPropPath(this.parent.parent.parent);
  } // main code:
  //
  // Prerequisites check


  if (parseFloat(app.version) < 10.0) alert(rd_GimmePropPath_localize(rd_GimmePropPathData.strMinAE100), rd_GimmePropPathData.scriptName);else {
    // Build and show the palette
    var rdgppPal = rd_GimmePropPath_buildUI();

    if (rdgppPal !== null) {
      // Update UI values, if saved in the settings
      if (app.settings.haveSetting("redefinery", "rd_GimmePropPath_rootObj")) {
        switch (app.settings.getSetting("redefinery", "rd_GimmePropPath_rootObj")) {
          case "app":
            rdgppPal.grp.rootObj.rootObjApp.value = true;
            break;

          case "comp":
            rdgppPal.grp.rootObj.rootObjComp.value = true;
            break;

          case "layer":
            rdgppPal.grp.rootObj.rootObjLayer.value = true;
            break;

          default:
            break;
        }
      }

      if (app.settings.haveSetting("redefinery", "rd_GimmePropPath_propRefsBy")) {
        switch (app.settings.getSetting("redefinery", "rd_GimmePropPath_propRefsBy")) {
          case "matchName":
            rdgppPal.grp.propNameRefs.propNameRefsByMatchName.value = true;
            break;

          case "name":
            rdgppPal.grp.propNameRefs.propNameRefsByName.value = true;
            break;

          default:
            break;
        }
      }

      if (app.settings.haveSetting("redefinery", "rd_GimmePropPath_propRefsByIndex")) rdgppPal.grp.propNameOpts.propNameRefsByIndex.value = app.settings.getSetting("redefinery", "rd_GimmePropPath_propRefsByIndex") === "false" ? false : true;
      if (app.settings.haveSetting("redefinery", "rd_GimmePropPath_propNameCompactEnglish")) rdgppPal.grp.propNameOpts.propNameCompactEnglish.value = app.settings.getSetting("redefinery", "rd_GimmePropPath_propNameCompactEnglish") === "false" ? false : true;
      if (app.settings.haveSetting("redefinery", "rd_GimmePropPath_scriptRefCollapse")) rdgppPal.grp.scriptRefMode.scriptRefCollapse.value = app.settings.getSetting("redefinery", "rd_GimmePropPath_scriptRefCollapse") === "false" ? false : true;

      if (app.settings.haveSetting("redefinery", "rd_GimmePropPath_exprRefMode")) {
        switch (app.settings.getSetting("redefinery", "rd_GimmePropPath_exprRefMode")) {
          case "abs":
            rdgppPal.grp.refMode.refModeAbs.value = true;
            break;

          case "rel":
            rdgppPal.grp.refMode.refModeRel.value = true;
            break;

          default:
            break;
        }
      } // Save current UI settings upon closing the palette


      rdgppPal.onClose = function () {
        var value = "";
        if (rdgppPal.grp.rootObj.rootObjApp.value) value = "app";else if (rdgppPal.grp.rootObj.rootObjComp.value) value = "comp";else if (rdgppPal.grp.rootObj.rootObjLayer.value) value = "layer";
        app.settings.saveSetting("redefinery", "rd_GimmePropPath_rootObj", value);
        value = "";
        if (rdgppPal.grp.propNameRefs.propNameRefsByMatchName.value) value = "matchName";else if (rdgppPal.grp.propNameRefs.propNameRefsByName.value) value = "name";
        app.settings.saveSetting("redefinery", "rd_GimmePropPath_propRefsBy", value);
        app.settings.saveSetting("redefinery", "rd_GimmePropPath_propRefsByIndex", rdgppPal.grp.propNameOpts.propNameRefsByIndex.value);
        app.settings.saveSetting("redefinery", "rd_GimmePropPath_propNameCompactEnglish", rdgppPal.grp.propNameOpts.propNameCompactEnglish.value);
        app.settings.saveSetting("redefinery", "rd_GimmePropPath_scriptRefCollapse", rdgppPal.grp.scriptRefMode.scriptRefCollapse.value);
        value = "";
        if (rdgppPal.grp.refMode.refModeAbs.value) value = "abs";else if (rdgppPal.grp.refMode.refModeRel.value) value = "rel";
        app.settings.saveSetting("redefinery", "rd_GimmePropPath_exprRefMode", value);
      };

      if (rdgppPal instanceof Window) {
        // Show the palette
        rdgppPal.center();
        rdgppPal.show();
      } else rdgppPal.layout.layout(true);
    }
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

var BuildUI = function () {
  function BuildUI(options) {
    if (!(this instanceof BuildUI)) {
      return new BuildUI(options);
    }

    this.options = {
      windowType: 'palette',
      // "dialog","palette" and the reference of Panel
      scriptName: 'baseUI',
      version: 'v1.0',
      resizeable: true
    };

    if (options && BuildUI.isType(options, 'Object')) {
      for (var i in options) {
        this.options[i] = options[i];
      }
    }

    this.initSetting();
    this.initWindow();
    return this;
  }

  BuildUI.isType = function (content, type) {
    return Object.prototype.toString.call(content) === '[object ' + type + ']';
  };

  BuildUI.prototype.open = function (win) {
    if (win instanceof Window) {
      this.refresh(win);

      if (this.haveSetting('Location')) {
        var location = this.getSetting('Location').split(',');
        win.location = [parseInt(location[0]), parseInt(location[1])];
      } else {
        win.center();
      }

      win.show();

      if (this.haveSetting('winSize')) {
        var size = this.getSetting('winSize').split(',');
        win.size = [parseInt(size[0]), parseInt(size[1])];
      }
    } else {
      win.onResize = win.onResizing = function () {
        this.layout.resize();
      };

      this.refresh(win);
    }

    return win;
  };

  BuildUI.prototype.refresh = function (win) {
    win.layout.layout(true);
  };

  BuildUI.prototype.initWindow = function () {
    var self = this;
    this.window = new Window(this.options['windowType'], this.options['scriptName'] + ' v' + this.options['version'], undefined, {
      resizeable: this.options['resizeable']
    });

    this.window.onClose = function () {
      var thisStr = this.size[0].toString() + ',' + this.size[1].toString();
      self.saveSetting('winSize', thisStr);
      thisStr = this.location[0].toString() + ',' + this.location[1].toString();
      self.saveSetting('Location', thisStr);
    };

    this.window.onResize = this.window.onResizing = function () {
      this.layout.resize();
    };
  };

  BuildUI.prototype.initSetting = function () {
    this.slash = '/';
    var targetFolder = new Folder(Folder.userData.fullName + this.slash + 'Aescripts' + this.slash + this.options['scriptName'] + this.slash + this.options['version']);
    !targetFolder.exists && targetFolder.create();
    this.settingFile = new File(targetFolder.fullName + this.slash + 'ui_setting.xml');

    if (!this.settingFile.exists) {
      this.settingFile.open('w');
      this.settingFile.write('<setting></setting>');
      this.settingFile.close();
    }

    this.haveSetting = function (name) {
      this.settingFile.open('r');
      var content = this.settingFile.read();
      this.settingFile.close();
      return content.toString().indexOf('<' + name + '>') !== -1;
    };

    this.getSetting = function (name) {
      this.settingFile.open('r');
      var xml = new XML(this.settingFile.read());
      this.settingFile.close();
      return xml[name].toString();
    };

    this.getSettingAsBool = function (name) {
      var result = this.getSetting(name);
      return result === 'true';
    };

    this.saveSetting = function (name, value) {
      this.settingFile.open('r');
      var xml = new XML(this.settingFile.read());
      this.settingFile.close();
      var isOk = true;

      try {
        xml[name] = value.toString();
      } catch (err) {
        isOk = false;
      }

      this.settingFile.open('w');
      this.settingFile.write(xml);
      this.settingFile.close();
      return isOk;
    };
  };

  return BuildUI;
}();

module.exports = $.global.yp.BuildUI = BuildUI;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    exp = _require.exp;

var loc = exp.loc;

var request = __webpack_require__(4);

module.exports = function (win, isStarting) {
  clearOutput && clearOutput();
  var targetAlert = isStarting ? writeLn : alert;
  return function () {
    var latestVersion = exp.getVersion();
    var nowVersion = exp.version;
    var compare = exp.compareSemver(latestVersion, nowVersion);

    if (compare > 0) {
      targetAlert(loc(exp.newVersionFind) + latestVersion.toString());
      var scriptLink = exp.downloadLinkPrefix + latestVersion + exp.downloadLinkSuffix;

      if (confirm(loc(exp.shouldUpdateScript))) {
        try {
          var scriptString = request('GET', scriptLink, '');
          var file = new File($.fileName);
          file.writee(scriptString);
          targetAlert(loc(exp.downloaded));
          win.close();
          exp.win.close();
        } catch (err) {
          err.printa();
        }
      } else if (confirm(loc(exp.shouldDownloadScript))) {
        try {
          exp.openLink(scriptLink);
        } catch (err) {
          err.printa();
        }
      }
    } else if (compare === 0) {
      targetAlert(loc(exp.newVersionNotFind) + nowVersion.toString());
    } else if (compare < 0) {
      targetAlert(loc(exp.tryVersionFind) + nowVersion.toString());
    }
  };
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var mvvm = __webpack_require__(41);

var _require = __webpack_require__(0),
    exp = _require.exp;

var nameBlackList = [];

function watch(name, oldValue, newValue) {
  // $.writeln('name: ', name, ' oldValue: ', oldValue, ' newValue: ', newValue)
  if (typeof oldValue === 'function') {
    return oldValue;
  } else if (typeof newValue === 'boolean') {
    var settingName = name.replace('Value', ''); // $.writeln('write to ', settingName, ' has?: ', $.global.sp.haveSetting(name.replace('Value', '')))

    if (exp.haveSetting(settingName)) {
      exp.saveSetting(settingName, newValue);
      return newValue;
    } else {
      return oldValue;
    }
  } else {
    return newValue;
  }
}

module.exports = function (obj) {
  return mvvm.observer(obj, watch, nameBlackList);
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

exports.observer = observer;
exports.isObj = isObj;

function isObj(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1) === 'Object';
}

function isInBlackList(name, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i] === name) return true;
  }

  return false;
}

function observer(obj, callback, nameBlackList, index) {
  index = index || 0;
  if (!isObj(obj)) return;

  for (var i in obj) {
    if (index === 0 && isInBlackList(i, nameBlackList)) continue;
    obj.watch(i, callback);
    if (isObj(obj[i])) observer(obj[i], callback, nameBlackList, index + 1);
  }

  return obj;
}

/***/ })
/******/ ]);
/****/ })(this)