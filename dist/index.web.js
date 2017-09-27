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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(9)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(8),
  /* scopeId */
  "data-v-42921880",
  /* cssModules */
  null
)
Component.options.__file = "/Users/yumeiqiang/Desktop/weexDemo/src/view/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42921880", Component.options)
  } else {
    hotAPI.reload("data-v-42921880", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_http_js__ = __webpack_require__(3);
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
    kOpenId: undefined
  },
  created() {
    var that = this;
    valueModel.getOpenId(function (v) {
      that.kOpenId = v.openId;
    });
    modal.alert({
      message: that.kOpenId,
      duration: 3
    }, function (value) {
      console.log('alert callback', value);
    });
    let firstData = {
      kOpenId: this.kOpenId,
      startTime: start,
      endTime: end
    };
    this.getCount(firstData);
  },
  methods: {
    update: function (e) {
      this.load = true;
      this.full = true;
      this.type = Number(e);
      switch (e) {
        case 1:
          let dataFirst = {
            kOpenId: this.kOpenId,
            startTime: start,
            endTime: end
          };
          this.getCount(dataFirst);
          break;
        case 2:
          let data1 = {
            kOpenId: this.kOpenId,
            startTime: start - 24 * 60 * 60 * 1000,
            endTime: end - 24 * 60 * 60 * 1000
          };
          this.getCount(data1);
          break;
        case 3:
          let day = new Date().getDay();
          let data2 = {
            kOpenId: this.kOpenId,
            startTime: start - 24 * 60 * 60 * 1000 * day,
            endTime: end
          };
          this.getCount(data2);
          break;
        case 4:
          let day1 = new Date().getDate();
          let data3 = {
            kOpenId: this.kOpenId,
            startTime: start - 24 * 60 * 60 * 1000 * day1,
            endTime: end
          };
          this.getCount(data3);
          break;
      }
    },
    getCount(param) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_http_js__["a" /* getList */])(param).then(res => {
        if (res.status === 200) {
          this.load = false;
          this.full = false;
          this.info = res.data;
        }
      }).catch(err => {
        this.load = false;
        this.full = false;
      });
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

const API = 'https://t.keguanchina.xyz/'; // 测试地址
// const API = 'https://on.keguanchina.xyz/'    // 正式地址

module.exports = {
    API
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetch */
/* harmony export (immutable) */ __webpack_exports__["a"] = getList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__constant_js__);
const stream = weex.requireModule('stream');


function fetch(path) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'GET',
      url: `${__WEBPACK_IMPORTED_MODULE_0__constant_js__["API"]}${path}`,
      type: 'json'
    }, response => {
      if (response.status == 200) {
        resolve(response.data);
      } else {
        reject(response);
      }
    }, () => {});
  });
}

function getList(data) {
  return fetch('statistics/rider/personal?kOpenId=' + data.kOpenId + '&startTime=' + data.startTime + '&endTime=' + data.endTime);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var App = __webpack_require__(0);
App.el = '#root';
new Vue(App);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "\n.full[data-v-42921880]{\n  width: 750px;height: 10000px;position: absolute;left: 0;top: 0;background-color: rgba(0,0,0,0.5)\n}\n.loading[data-v-42921880]{\n  border-radius: 15px;\n  justify-content: center;flex-direction: row;position: absolute;left: 260px;top: 400px;align-items: center;background-color: rgba(0,0,0,0.5)\n}\n.box[data-v-42921880]{\ncolor: #fff;padding-left: 30px; padding-right: 30px;padding-top: 30px;padding-bottom:30px\n}\n.wrapper[data-v-42921880] {background-image: linear-gradient(to bottom,#58c7fa,#3c87f6);padding-bottom: 30px;position: relative;\n}\n.all_bg[data-v-42921880]{\n    margin-top: 40px;\n}\n.kk[data-v-42921880]{\n  height: 102px;width: 1px;\n}\n.order_type[data-v-42921880]{\n    color: #666;text-align: center;font-size: 24px;\n}\n.order_k[data-v-42921880]{\n    position: relative;left: 0;top: -250px;\n}\n.order[data-v-42921880]{\n  flex-direction: row;justify-content: space-around;align-items: center;margin-left: 15px;margin-right: 15px;\n}\n.bg[data-v-42921880]{height: 300px;width:auto;margin-left: 15px;margin-right: 15px;\n}\n.number[data-v-42921880]{\n    margin-top: 15px!important;font-size: 48px;\n}\n.send[data-v-42921880]{\n    text-align: center;font-size: 28px;margin-bottom: 30px\n}\n.title_bar[data-v-42921880]{\n    display: flex;flex-direction: row;justify-content: space-around;;margin-top: 50px;\n}\n.titles[data-v-42921880]{\n    font-size: 28px;color: #fff;text-align: center;width: 80px;border-bottom-width: 0;border-bottom-style: none;padding-bottom: 5px;\n}\n.title[data-v-42921880]{\n    font-size: 28px;color: #fff;text-align: center;width: 80px;\n    border-bottom-width: 4px;border-bottom-style: solid;border-color: #fff;padding-bottom: 5px;\n}\n.bgs[data-v-42921880]{\n    position: relative;height: 350px;\n}\n.ab_re[data-v-42921880]{\n    position: relative;top: -250px;margin-left: 15px;margin-right: 15px;\n}\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "title_bar"
  }, [_c('text', {
    class: [_vm.type === 1 ? 'title' : 'titles'],
    on: {
      "click": function($event) {
        _vm.update(1)
      }
    }
  }, [_vm._v("今天")]), _vm._v(" "), _c('text', {
    class: [_vm.type === 2 ? 'title' : 'titles'],
    on: {
      "click": function($event) {
        _vm.update(2)
      }
    }
  }, [_vm._v("昨天")]), _vm._v(" "), _c('text', {
    class: [_vm.type === 3 ? 'title' : 'titles'],
    on: {
      "click": function($event) {
        _vm.update(3)
      }
    }
  }, [_vm._v("本周")]), _vm._v(" "), _c('text', {
    class: [_vm.type === 4 ? 'title' : 'titles'],
    on: {
      "click": function($event) {
        _vm.update(4)
      }
    }
  }, [_vm._v("本月")])]), _vm._v(" "), (_vm.info) ? _c('div', {
    staticClass: "all_bg"
  }, [_c('div', {
    staticClass: "bgs"
  }, [_c('image', {
    staticClass: "bg",
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/bg1.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "order_k"
  }, [_c('text', {
    staticClass: "send"
  }, [_vm._v("派件")]), _vm._v(" "), (_vm.info.waybill) ? _c('div', {
    staticClass: "order"
  }, [_c('div', {
    staticClass: "order_list"
  }, [_c('text', {
    staticClass: "order_type"
  }, [_vm._v("已签收")]), _vm._v(" "), _c('text', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.info.waybill.signed))])]), _vm._v(" "), _c('div', {
    staticClass: "order_list"
  }, [_c('image', {
    staticClass: "kk",
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/line.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "order_list"
  }, [_c('text', {
    staticClass: "order_type"
  }, [_vm._v("待签收")]), _vm._v(" "), _c('text', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.info.waybill.waitSigned))])]), _vm._v(" "), _c('div', {
    staticClass: "order_list"
  }, [_c('image', {
    staticClass: "kk",
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/line.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "order_list"
  }, [_c('text', {
    staticClass: "order_type"
  }, [_vm._v("异常签收")]), _vm._v(" "), _c('text', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.info.waybill.signException))])]), _vm._v(" "), _c('div', {
    staticClass: "order_list"
  }, [_c('image', {
    staticClass: "kk",
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/line.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "order_list"
  }, [_c('text', {
    staticClass: "order_type"
  }, [_vm._v("自提")]), _vm._v(" "), _c('text', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.info.waybill.waitPickup))])])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "bgs"
  }, [_c('image', {
    staticClass: "bg",
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/bg1.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "order_k"
  }, [_c('text', {
    staticClass: "send"
  }, [_vm._v("上门寄件")]), _vm._v(" "), (_vm.info.doorstepSend) ? _c('div', {
    staticClass: "order"
  }, [_c('div', {
    staticClass: "order_list"
  }, [_c('text', {
    staticClass: "order_type"
  }, [_vm._v("抢单")]), _vm._v(" "), _c('text', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.info.doorstepSend.grabed))])]), _vm._v(" "), _c('div', {
    staticClass: "order_list"
  }, [_c('image', {
    staticClass: "kk",
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/line.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "order_list"
  }, [_c('text', {
    staticClass: "order_type"
  }, [_vm._v("指定")]), _vm._v(" "), _c('text', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.info.doorstepSend.waitMail))])]), _vm._v(" "), _c('div', {
    staticClass: "order_list"
  }, [_c('image', {
    staticClass: "kk",
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/line.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "order_list"
  }, [_c('text', {
    staticClass: "order_type"
  }, [_vm._v("取消")]), _vm._v(" "), _c('text', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.info.doorstepSend.cancelled))])])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "bgs"
  }, [_c('image', {
    staticClass: "bg",
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/bg1.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "order_k"
  }, [_c('text', {
    staticClass: "send"
  }, [_vm._v("驿站寄件")]), _vm._v(" "), (_vm.info.siteSend) ? _c('div', {
    staticClass: "order"
  }, [_c('div', {
    staticClass: "order_list"
  }, [_c('text', {
    staticClass: "order_type"
  }, [_vm._v("揽件")]), _vm._v(" "), _c('text', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.info.siteSend.grabed))])]), _vm._v(" "), _c('div', {
    staticClass: "order_list"
  }, [_c('image', {
    staticClass: "kk",
    attrs: {
      "src": "http://orl2uvwcw.bkt.clouddn.com/line.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "order_list"
  }, [_c('text', {
    staticClass: "order_type"
  }, [_vm._v("取消")]), _vm._v(" "), _c('text', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.info.siteSend.cancelled))])])]) : _vm._e()])])]) : _vm._e(), _vm._v(" "), (_vm.full) ? _c('div', {
    staticClass: "full"
  }) : _vm._e(), _vm._v(" "), (_vm.load) ? _c('div', {
    staticClass: "loading"
  }, [_c('text', {
    staticClass: "box"
  }, [_vm._v("正在为你加载")])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-42921880", module.exports)
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("519e77e4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-42921880&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-42921880&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(11)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);