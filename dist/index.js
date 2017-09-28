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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_http_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_http_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_http_js__);
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
    var platform = weex.config.env.platform;
    if (platform === 'android') {
      valueModel.getOpenId(function (v) {
        that.kOpenId = v.openId;
        let firstData = {
          kOpenId: that.kOpenId,
          startTime: start,
          endTime: end
        };
        that.getCount(firstData);
      });
    } else if (platform === 'iOS') {} else {
      let firstData = {
        kOpenId: 'r7509511504149365138806060',
        startTime: start,
        endTime: end
      };
      that.getCount(firstData);
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
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_http_js__["getList"])(param).then(res => {
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
/* 1 */
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
/* 2 */
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
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected , (33:4)\n\n\u001b[0m \u001b[90m 31 | \u001b[39m        }\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {})\n \u001b[90m 32 | \u001b[39m      }\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 33 | \u001b[39m    })\n \u001b[90m    | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 34 | \u001b[39m })\u001b[33m;\u001b[39m\n \u001b[90m 35 | \u001b[39m}\n \u001b[90m 36 | \u001b[39m\u001b[0m\n");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(0)

/* template */
var __vue_template__ = __webpack_require__(2)
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