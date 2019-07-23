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
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/css/index.scss */ \"./src/css/index.scss\");\n/* harmony import */ var _src_css_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_css_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/js/index.js */ \"./src/js/index.js\");\n/* harmony import */ var _src_js_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_js_index_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./entry.js?");

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/index.scss?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar canvas = $(\"canvas\")[0];\nvar c = canvas.getContext(\"2d\");\n\nvar Ball =\n/*#__PURE__*/\nfunction () {\n  function Ball(o) {\n    _classCallCheck(this, Ball);\n\n    this._init();\n\n    this.r = o.r || _.random(60, 100);\n    this.x = o.x || _.random(this.r, canvas.width);\n    this.y = o.y || _.random(this.r, canvas.height);\n    this.sa = o.sa || 0;\n    this.ea = o.ea || 360;\n    this.opa = o.opa || 0;\n    this.speedx = o.speedx || _.random(-.1, .9);\n    this.speedy = o.speedy || _.random(-.1, .9);\n    this.fps = o.fps || 60;\n    this.color = o.color || \"rgb(\".concat(_.random(0, 255), \",\").concat(_.random(0, 255), \",\").concat(_.random(0, 255), \")\");\n    console.log(this.speedx);\n  }\n\n  _createClass(Ball, [{\n    key: \"_init\",\n    value: function _init() {\n      canvas.height = $(window).height();\n      canvas.width = $(window).width();\n      $(window).on(\"resize\", this._init);\n    }\n  }, {\n    key: \"gca\",\n    value: function gca() {\n      return \"rgba(\".concat(_.random(0, 255), \",\").concat(_.random(0, 255), \",\").concat(_.random(0, 255), \",\").concat(_.random(5, 10) / 10, \")\");\n    }\n  }, {\n    key: \"gc\",\n    value: function gc() {\n      return \"rgb(\".concat(_.random(0, 255), \",\").concat(_.random(0, 255), \",\").concat(_.random(0, 255), \")\");\n    }\n  }, {\n    key: \"updata\",\n    value: function updata() {\n      if (this.opa <= 0.8) {\n        this.opa += .001;\n      }\n\n      if (this.x <= 0 - this.r || this.x >= canvas.width + this.r || this.y <= 0 - this.r || this.y >= canvas.height + this.r) {\n        this.opa = 0.01;\n        this.x = _.random(-this.r, canvas.width);\n        this.y = _.random(-this.r, canvas.height);\n      } else {\n        this.x += this.speedx;\n        this.y += this.speedy;\n      }\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(c) {\n      c.beginPath();\n      c.arc(this.x, this.y, this.r, this.sa, this.ea);\n      c.globalAlpha = this.opa;\n      c.fillStyle = this.color;\n      c.fill();\n    }\n  }]);\n\n  return Ball;\n}();\n\nvar arr = [];\n\nfor (var i = 0; i < 20; i++) {\n  arr.push(new Ball({\n    speedx: _.random(-5, 5) / 10,\n    speedy: _.random(-5, 5) / 10\n  }));\n}\n\nsetInterval(function () {\n  c.clearRect(0, 0, canvas.width, canvas.height);\n\n  for (var _i = 0; _i < arr.length; _i++) {\n    arr[_i].draw(c);\n\n    arr[_i].updata();\n  }\n}, 1000 / 60);\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });