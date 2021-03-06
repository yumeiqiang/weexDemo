// { "framework": "Vue"} 

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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

exports.arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

exports.compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

exports.isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_http_js__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var valueModel = weex.requireModule('weex_module');
const start = new Date().setHours(0, 0, 0);
const end = new Date().setHours(23, 59, 59);

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    type: 1,
    info: undefined,
    load: false,
    full: false,
    listQuery: undefined
  },
  created() {
    var that = this;
    var platform = weex.config.env.platform;
    if (platform === 'android') {
      valueModel.getOpenId(function (v) {
        that.listQuery = v;
        let firstData = {
          kOpenId: that.listQuery.openId,
          startTime: start,
          endTime: end
        };
        that.getCount(firstData, that.listQuery);
      });
    } else if (platform === 'iOS') {} else {
      let firstData = {
        kOpenId: 'r1291681504597762371279858',
        startTime: start,
        endTime: end
      };
      that.getCount(firstData, that.listQuery);
    }
  },
  methods: {
    update: function (e) {
      this.load = true;
      this.full = true;
      this.type = Number(e);
      switch (e) {
        case 1:
          let dataFirst = {
            kOpenId: this.listQuery.openId,
            startTime: start,
            endTime: end
          };
          this.getCount(dataFirst, this.listQuery);
          break;
        case 2:
          let data1 = {
            kOpenId: this.listQuery.openId,
            startTime: start - 24 * 60 * 60 * 1000,
            endTime: end - 24 * 60 * 60 * 1000
          };
          this.getCount(data1, this.listQuery);
          break;
        case 3:
          let day = new Date().getDay();
          let data2 = {
            kOpenId: this.listQuery.openId,
            startTime: start - 24 * 60 * 60 * 1000 * day,
            endTime: end
          };
          this.getCount(data2, this.listQuery);
          break;
        case 4:
          let day1 = new Date().getDate();
          let data3 = {
            kOpenId: this.listQuery.openId,
            startTime: start - 24 * 60 * 60 * 1000 * day1,
            endTime: end
          };
          this.getCount(data3, this.listQuery);
          break;
      }
    },
    getCount(param, info) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_http_js__["a" /* getList */])(param, info).then(res => {
        if (res.status === 200) {
          this.load = false;
          this.full = false;
          this.info = res.data;
        } else {
          modal.alert({
            message: res.msg,
            duration: 0.3
          }, function (value) {});
        }
      }).catch(err => {
        this.load = false;
        this.full = false;
        modal.alert({
          message: err.msg,
          duration: 0.3
        }, function (value) {});
      });
    }
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
  "full": {
    "width": 750,
    "height": 10000,
    "position": "absolute",
    "left": 0,
    "top": 0,
    "backgroundColor": "rgba(0,0,0,0.5)"
  },
  "loading": {
    "borderRadius": 15,
    "justifyContent": "center",
    "flexDirection": "row",
    "position": "absolute",
    "left": 260,
    "top": 400,
    "alignItems": "center",
    "backgroundColor": "rgba(0,0,0,0.5)"
  },
  "box": {
    "color": "#ffffff",
    "paddingLeft": 30,
    "paddingRight": 30,
    "paddingTop": 30,
    "paddingBottom": 30
  },
  "wrapper": {
    "backgroundImage": "linear-gradient(to bottom,#58c7fa,#3c87f6)",
    "paddingBottom": 30,
    "position": "relative"
  },
  "all_bg": {
    "marginTop": 40
  },
  "kk": {
    "height": 102,
    "width": 1
  },
  "order_type": {
    "color": "#666666",
    "textAlign": "center",
    "fontSize": 24
  },
  "order_k": {
    "position": "relative",
    "left": 0,
    "top": -250
  },
  "order": {
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center",
    "marginLeft": 15,
    "marginRight": 15
  },
  "bg": {
    "height": 300,
    "marginLeft": 15,
    "marginRight": 15
  },
  "number": {
    "marginTop": 15,
    "fontSize": 48
  },
  "send": {
    "textAlign": "center",
    "fontSize": 28,
    "marginBottom": 30
  },
  "title_bar": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "marginTop": 50
  },
  "titles": {
    "fontSize": 28,
    "color": "#ffffff",
    "textAlign": "center",
    "width": 80,
    "borderBottomWidth": 0,
    "borderBottomStyle": "none",
    "paddingBottom": 10,
    "paddingLeft": 10,
    "paddingRight": 10
  },
  "title": {
    "fontSize": 28,
    "color": "#ffffff",
    "textAlign": "center",
    "width": 80,
    "borderBottomWidth": 4,
    "borderBottomStyle": "solid",
    "borderColor": "#ffffff",
    "paddingBottom": 10,
    "paddingLeft": 10,
    "paddingRight": 10
  },
  "bgs": {
    "position": "relative",
    "height": 350
  },
  "ab_re": {
    "position": "relative",
    "top": -250,
    "marginLeft": 15,
    "marginRight": 15
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["title_bar"]
  }, [_c('text', {
    class: [_vm.type === 1 ? 'title' : 'titles'],
    on: {
      "click": function($event) {
        _vm.update(1)
      }
    }
  }, [_vm._v("今天")]), _c('text', {
    class: [_vm.type === 2 ? 'title' : 'titles'],
    on: {
      "click": function($event) {
        _vm.update(2)
      }
    }
  }, [_vm._v("昨天")]), _c('text', {
    class: [_vm.type === 3 ? 'title' : 'titles'],
    on: {
      "click": function($event) {
        _vm.update(3)
      }
    }
  }, [_vm._v("本周")]), _c('text', {
    class: [_vm.type === 4 ? 'title' : 'titles'],
    on: {
      "click": function($event) {
        _vm.update(4)
      }
    }
  }, [_vm._v("本月")])]), (_vm.info) ? _c('div', {
    staticClass: ["all_bg"]
  }, [_c('div', {
    staticClass: ["bgs"]
  }, [_c('image', {
    staticClass: ["bg"],
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/bg1.png"
    }
  }), _c('div', {
    staticClass: ["order_k"]
  }, [_c('text', {
    staticClass: ["send"]
  }, [_vm._v("派件")]), (_vm.info.waybill) ? _c('div', {
    staticClass: ["order"]
  }, [_c('div', {
    staticClass: ["order_list"]
  }, [_c('text', {
    staticClass: ["order_type"]
  }, [_vm._v("已签收")]), _c('text', {
    staticClass: ["number"]
  }, [_vm._v(_vm._s(_vm.info.waybill.signed))])]), _vm._m(0), _c('div', {
    staticClass: ["order_list"]
  }, [_c('text', {
    staticClass: ["order_type"]
  }, [_vm._v("待签收")]), _c('text', {
    staticClass: ["number"]
  }, [_vm._v(_vm._s(_vm.info.waybill.waitSigned))])]), _vm._m(1), _c('div', {
    staticClass: ["order_list"]
  }, [_c('text', {
    staticClass: ["order_type"]
  }, [_vm._v("异常签收")]), _c('text', {
    staticClass: ["number"]
  }, [_vm._v(_vm._s(_vm.info.waybill.signException))])]), _vm._m(2), _c('div', {
    staticClass: ["order_list"]
  }, [_c('text', {
    staticClass: ["order_type"]
  }, [_vm._v("自提")]), _c('text', {
    staticClass: ["number"]
  }, [_vm._v(_vm._s(_vm.info.waybill.waitPickup))])])]) : _vm._e()])]), _c('div', {
    staticClass: ["bgs"]
  }, [_c('image', {
    staticClass: ["bg"],
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/bg1.png"
    }
  }), _c('div', {
    staticClass: ["order_k"]
  }, [_c('text', {
    staticClass: ["send"]
  }, [_vm._v("上门寄件")]), (_vm.info.doorstepSend) ? _c('div', {
    staticClass: ["order"]
  }, [_c('div', {
    staticClass: ["order_list"]
  }, [_c('text', {
    staticClass: ["order_type"]
  }, [_vm._v("抢单")]), _c('text', {
    staticClass: ["number"]
  }, [_vm._v(_vm._s(_vm.info.doorstepSend.grabed))])]), _vm._m(3), _c('div', {
    staticClass: ["order_list"]
  }, [_c('text', {
    staticClass: ["order_type"]
  }, [_vm._v("指定")]), _c('text', {
    staticClass: ["number"]
  }, [_vm._v(_vm._s(_vm.info.doorstepSend.waitMail))])]), _vm._m(4), _c('div', {
    staticClass: ["order_list"]
  }, [_c('text', {
    staticClass: ["order_type"]
  }, [_vm._v("取消")]), _c('text', {
    staticClass: ["number"]
  }, [_vm._v(_vm._s(_vm.info.doorstepSend.cancelled))])])]) : _vm._e()])]), _c('div', {
    staticClass: ["bgs"]
  }, [_c('image', {
    staticClass: ["bg"],
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/bg1.png"
    }
  }), _c('div', {
    staticClass: ["order_k"]
  }, [_c('text', {
    staticClass: ["send"]
  }, [_vm._v("驿站寄件")]), (_vm.info.siteSend) ? _c('div', {
    staticClass: ["order"]
  }, [_c('div', {
    staticClass: ["order_list"]
  }, [_c('text', {
    staticClass: ["order_type"]
  }, [_vm._v("揽件")]), _c('text', {
    staticClass: ["number"]
  }, [_vm._v(_vm._s(_vm.info.siteSend.grabed))])]), _vm._m(5), _c('div', {
    staticClass: ["order_list"]
  }, [_c('text', {
    staticClass: ["order_type"]
  }, [_vm._v("取消")]), _c('text', {
    staticClass: ["number"]
  }, [_vm._v(_vm._s(_vm.info.siteSend.cancelled))])])]) : _vm._e()])])]) : _vm._e(), (_vm.full) ? _c('div', {
    staticClass: ["full"]
  }) : _vm._e(), (_vm.load) ? _c('div', {
    staticClass: ["loading"]
  }, [_c('text', {
    staticClass: ["box"]
  }, [_vm._v("正在为你加载")])]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["order_list"]
  }, [_c('image', {
    staticClass: ["kk"],
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/line.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["order_list"]
  }, [_c('image', {
    staticClass: ["kk"],
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/line.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["order_list"]
  }, [_c('image', {
    staticClass: ["kk"],
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/line.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["order_list"]
  }, [_c('image', {
    staticClass: ["kk"],
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/line.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["order_list"]
  }, [_c('image', {
    staticClass: ["kk"],
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/line.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["order_list"]
  }, [_c('image', {
    staticClass: ["kk"],
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/line.png"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// const API = 'https://t.keguanchina.xyz/'  // 测试地址
const API = 'https://on.keguanchina.xyz/'; // 正式地址

module.exports = {
    API
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetch */
/* harmony export (immutable) */ __webpack_exports__["a"] = getList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__constant_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_md5__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_qs__);
const stream = weex.requireModule('stream');





function fetch(path, all) {
  const random = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* randomNum */])();
  const time = new Date().getTime();
  var platform = weex.config.env.platform;
  if (platform === 'android') {
    return new Promise((resolve, reject) => {
      stream.fetch({
        method: 'GET',
        url: `${__WEBPACK_IMPORTED_MODULE_0__constant_js__["API"]}${path}`,
        type: 'json',
        headers: {
          'validateRandomNumber': random,
          'validateTimestamp': time,
          'cookie': all.cookie,
          'validateToken': all.token,
          'validateValue': __WEBPACK_IMPORTED_MODULE_2_md5___default()(__WEBPACK_IMPORTED_MODULE_2_md5___default()((random + time).toString()) + all.key)
        }
      }, response => {
        if (response.status == 200) {
          resolve(response.data);
        } else {
          reject(response);
        }
      }, () => {});
    });
  } else if (platform === 'iOS') {} else {
    return new Promise((resolve, reject) => {
      stream.fetch({
        method: 'GET',
        url: `${__WEBPACK_IMPORTED_MODULE_0__constant_js__["API"]}${path}`,
        type: 'json',
        headers: {
          'validateRandomNumber': random,
          'validateTimestamp': time,
          'validateToken': '257209a1531f4d15bdfecd0f96ad6dd0',
          'validateValue': __WEBPACK_IMPORTED_MODULE_2_md5___default()(__WEBPACK_IMPORTED_MODULE_2_md5___default()((random + time).toString()) + '1a00e77b-38e1-4837-86db-0d04ac88fe51')
        }
      }, response => {
        if (response.status == 200) {
          resolve(response.data);
        } else {
          reject(response);
        }
      }, () => {});
    });
  }
}

function getList(data, info) {
  return fetch('statistics/rider/personal?kOpenId=' + data.kOpenId + '&startTime=' + data.startTime + '&endTime=' + data.endTime, info);
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export uuid */
/* harmony export (immutable) */ __webpack_exports__["a"] = randomNum;
function uuid() {
   let s = [];
   const hexDigits = "0123456789abcdef";
   for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
   }
   s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
   s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
   let uuid = s.join("");
   return uuid;
}
// 四位随机数
function randomNum() {
   let t = '';
   for (let i = 0; i < 4; i++) {
      t += Math.floor(Math.random() * 10);
   }
   return parseInt(t);
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(9),
      utf8 = __webpack_require__(0).utf8,
      isBuffer = __webpack_require__(10),
      bin = __webpack_require__(0).bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(14);
var parse = __webpack_require__(13);
var formats = __webpack_require__(1);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);
var formats = __webpack_require__(1);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(4)
)

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(5)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/yumeiqiang/Desktop/weexDemo/src/view/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-002bb101"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })
/******/ ]);