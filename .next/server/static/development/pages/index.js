module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/templates */ "./src/components/templates/index.tsx");
/* harmony import */ var _src_components_Baner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Baner */ "./src/components/Baner/index.tsx");
/* harmony import */ var _src_components_FuncBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/FuncBlock */ "./src/components/FuncBlock/index.tsx");
/* harmony import */ var _src_components_BlackBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/BlackBlock */ "./src/components/BlackBlock/index.tsx");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scss/index.scss */ "./pages/scss/index.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.$auth = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

    _this.setScrollElement = function (node) {
      _this.$auth = node;
    };

    _this.scrollTo = function () {
      window.scrollTo({
        top: _this.$auth['offsetTop'],
        behavior: "smooth"
      });
    };

    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_templates__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Baner__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onClick: this.scrollTo
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-center section-center--content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "orange"
      }, "\u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u0434\u0430\u043D\u0438\u044F")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044C \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 (\u043B\u0435\u043D\u0434\u0438\u043D\u0433) \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B \u0432\u0438\u0434\u0438\u0442\u0435 \u043D\u0430 \u0434\u0430\u043D\u043D\u043E\u043C \u043C\u0430\u043A\u0435\u0442\u0435. \u0421\u0430\u0439\u0442 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D \u043D\u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u043C \u0441\u0442\u0435\u043A\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0421\u0430\u0439\u0442 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u0434\u0432\u0443\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446. \u0413\u043B\u0430\u0432\u043D\u043E\u0439 \u0438 \u041F\u0440\u043E\u0444\u0438\u043B\u044F. :) \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043F\u043E\u043F\u0430\u0434\u0430\u0435\u0442 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443. \u041D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u043F\u0430\u0441\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C. \u041D\u0435\u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0430\u0434\u0440\u0435\u0441\u043E\u0432\u0430\u043D\u044B \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "\u0422\u0440\u0435\u0431\u0443\u0435\u043C\u044B\u0439 \u0441\u0442\u0435\u043A:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: _scss_index_scss__WEBPACK_IMPORTED_MODULE_5___default.a.list
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Next.js"), " (\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u044F\u0434\u0440\u0430 \u0432\u0441\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "React.js"), " (\u0412 \u043A\u0430\u0447\u0435\u0442\u0432\u0435 UI \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "MobX"), " (\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "TypeScript"), " (\u041D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E, \u043D\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430 \u043D\u0435\u043C \u0431\u0443\u0434\u0435\u0442 \u043D\u0435\u0441\u043E\u043C\u043D\u0435\u043D\u043D\u044B\u043C \u043F\u043B\u044E\u0441\u043E\u043C)")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_FuncBlock__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_BlackBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
        setScrollElement: this.setScrollElement
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/scss/index.scss":
/*!*******************************!*\
  !*** ./pages/scss/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"list": "index__2SvZs"
};

/***/ }),

/***/ "./src/actions.ts":
/*!************************!*\
  !*** ./src/actions.ts ***!
  \************************/
/*! exports provided: setUserStoreLocale, getUserStoreLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserStoreLocale", function() { return setUserStoreLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserStoreLocale", function() { return getUserStoreLocale; });
function dfPO(data) {
  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
} //TODO END Delete this


var setUserStoreLocale = function setUserStoreLocale(user) {
  localStorage.setItem('token', user.token);
  localStorage.setItem('authChannel', user.authChannel);
  localStorage.setItem('email', user.email);
  localStorage.setItem('user_name', user.user_name);
};
var getUserStoreLocale = function getUserStoreLocale() {
  return {
    token: localStorage.getItem('token') || '',
    authChannel: localStorage.getItem('authChannel') || '',
    email: localStorage.getItem('email') || '',
    user_name: localStorage.getItem('user_name') || ''
  };
};

/***/ }),

/***/ "./src/assets/scss/global.scss":
/*!*************************************!*\
  !*** ./src/assets/scss/global.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/assets/scss/normalize.scss":
/*!****************************************!*\
  !*** ./src/assets/scss/normalize.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Baner/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Baner/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Baner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/components/Baner/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Baner =
/*#__PURE__*/
function (_Component) {
  _inherits(Baner, _Component);

  function Baner() {
    _classCallCheck(this, Baner);

    return _possibleConstructorReturn(this, _getPrototypeOf(Baner).apply(this, arguments));
  }

  _createClass(Baner, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-center ".concat(_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.banner)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u0422\u0435\u0441\u0442\u043E\u0432\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u044E frontend \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430 \u0425\u0430\u0439\u0442\u0435\u043A+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0441\u044F \u043A \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u043A\u0440\u0443\u0442\u0435\u0439\u0448\u0435\u0433\u043E \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "orange"
      }, "\u0421\u041C\u0418")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "btn",
        onClick: this.props.onClick
      }, "\u0412\u0441\u0442\u0443\u043F\u0438\u0442\u044C")));
    }
  }]);

  return Baner;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/Baner/style.scss":
/*!*****************************************!*\
  !*** ./src/components/Baner/style.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"banner": "style__2aMeN",
	"content": "style__jjEJ5"
};

/***/ }),

/***/ "./src/components/BlackBlock/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/BlackBlock/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlackBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SocialButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SocialButton */ "./src/components/SocialButton/index.tsx");
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CheckBox */ "./src/components/CheckBox/index.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/components/BlackBlock/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var BlackBlock =
/*#__PURE__*/
function (_Component) {
  _inherits(BlackBlock, _Component);

  function BlackBlock(props) {
    var _this;

    _classCallCheck(this, BlackBlock);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BlackBlock).call(this, props));

    _this.socialButtons = function () {
      return [{
        type: 'fb',
        title: 'Facebook',
        id: _this.state.config.fb
      }, {
        type: 'vk',
        title: 'Вконтакте',
        id: _this.state.config.vk
      }, {
        type: 'google',
        title: 'Google',
        id: _this.state.config.google
      }];
    };

    _this.setRef = function (node) {
      node && _this.props.setScrollElement(node);
    };

    _this.renderSocialButton = function () {
      return _this.socialButtons().map(function (button) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: button.type,
          title: button.title,
          id: button.id,
          type: button.type
        });
      });
    };

    _this.state = {
      isAgree: false,
      config: {
        fb: '',
        vk: '',
        google: ''
      }
    };
    return _this;
  }

  _createClass(BlackBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("/config").then(function (response) {
        return response.json();
      }).then(function (data) {
        return data && _this2.setState({
          config: _objectSpread({}, data)
        });
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.blackBlock,
        ref: this.setRef
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-center section-center--content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u042F \u0432\u0441\u0435 \u0441\u0434\u0435\u043B\u0430\u043B, \u0447\u0442\u043E \u0434\u0430\u043B\u044C\u0448\u0435?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0430\u0439\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u0441\u0435\u0442\u0438 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u043F\u043B\u0430\u0444\u0442\u043E\u0440\u043C\u0435 \u043D\u0430 \u0432\u0430\u0448 \u0432\u044B\u0431\u043E\u0440, \u043F\u043E\u0434 https. \u0427\u0442\u043E\u0431\u044B \u0435\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u0440\u0435\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0438 \u043F\u043E\u0449\u0435\u043B\u043A\u0430\u0442\u044C \u0441 \u0442\u043E\u0447\u043A\u0438 \u0437\u0440\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438 \u043F\u043E\u0449\u0435\u043B\u043A\u0430\u0442\u044C. \u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043D\u0430 GitHub. \u0412 \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C README.md \u0441 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439 \u043F\u043E \u0441\u0431\u043E\u0440\u043A\u0435 \u0438 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044B\u0432\u0430\u043D\u0438\u044E."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u0434\u0430\u043D\u0438\u044F: 24 \u0447\u0430\u0441\u0430. \u041B\u044E\u0431\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u043C\u0443 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C \u0432 Telegram. (https://t.me/antonikucherov)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.btnList
      }, this.renderSocialButton()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.license
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CheckBox__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u042F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/public/license.pdf"
      }, "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435"), " \u0438 \u0434\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435\u2028\u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"))));
    }
  }]);

  return BlackBlock;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/BlackBlock/style.scss":
/*!**********************************************!*\
  !*** ./src/components/BlackBlock/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"blackBlock": "style__1cyF8",
	"btnList": "style__1508L",
	"license": "style__1rrBS",
	"checkbox": "style__1_TrX"
};

/***/ }),

/***/ "./src/components/CheckBox/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/CheckBox/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/components/CheckBox/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Checkbox =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, props));

    _this.handleClick = function () {
      _this.setState({
        isActive: !_this.state.isActive
      });
    };

    _this.state = {
      isActive: false
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.handleClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_scss__WEBPACK_IMPORTED_MODULE_1__["checkbox"]
      }, this.state.isActive && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-check"
      })));
    }
  }]);

  return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/CheckBox/style.scss":
/*!********************************************!*\
  !*** ./src/components/CheckBox/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"checkbox": "style__1_TrX"
};

/***/ }),

/***/ "./src/components/Footer/img/lt.png":
/*!******************************************!*\
  !*** ./src/components/Footer/img/lt.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAKMWlDQ1BTMjIxSFFMID8/Pz8/Pz8/Pz8/Pz8/PwAASImVlmdQlFkahc/39deZJnWDgIQmJ0EyDQg0OSo5ikrb5GTbBHNmcATHgIoIhhEVRRQcHQEZAyKKaVBMmAdkUFHXQR1MqOwPJu7W7taeqlv31LlV5633/noAboFEJsshlYHcvAJ5ZIC3MD4hUch8BAa0oAprOEik+TKv8PBQAPj9/rve3gIBANetJDJZzr+//1eppKTmSwEiHIA8JV+aCxAdAIKlMnkBQCoDMJxTICsASAcAAnl8QiJABgIQpI/5JACCmWNeBkAgj470AchigKUgkcjTAc46AMIiaXoBwDkEwCYvJTMP4PQC8JBmSFIArhDAhNzcWSkANxSA2cy/9KT/rXPmH50SSfoffmwXAIBGlJ2dbWBEqNDz7/o/v+d/Kzen8PeZBAAFeWFkDABrANqIgh3sYItARCAUQsqD8qZcKRvKjRJRtpSY8qDsKBvKnXKnQigXoCB1bgEA+MySzZNnpmcUCL1kspxUYVCe1HqC0M7GVgTEJyQKx8a9uQ0CAKHO+jNbzAC89AGi6s8sNhE44Aho1fyZGRQCqvVA05C0UF40llEAQAcHShBAE7owhBmsYAcnuEEMPwQjDNFIwHRIkYFcyDEHC7EMJSjDOmxCFXZgF/bhIA6jGcdxGudwCVdxE/fQiwE8xxDeYoQgCCbBI/iEJqFHGBOWhB0hIjwIPyKUiCQSiGQincgjComFxAqijCgnqoidRB3xHXGMOE1cILqJO0QfMUi8Jj6SNFKBFJA6pAk5kRSRXmQIGU1OI9PJ2eR8sphcQ1aSNeQBsok8TV4ib5K95HNymAYal6ZO06dZ0UQ0H1oYLZGWRpPTFtNKaRW0GloDrZXWSbtO66W9oH2gGBSfElJWlBsVSMVQUmo2tZhaTVVR+6gmqoO6TvVRQ9QXOo+uTbeku9KD6PH0dPocegm9gl5LP0o/S79JH6C/ZTAY6gxThjMjkJHAyGIsYKxmbGM0MtoY3Yx+xjCTydRkWjLdmWFMCbOAWcLcwjzAPMW8xhxgvmdxWXosO5Y/K5GVx1rOqmDtZ51kXWM9YY2wldnGbFd2GDuFPY+9lr2b3cq+wh5gj3BUOKYcd040J4uzjFPJaeCc5dznvOFyuQZcF24EN5O7lFvJPcQ9z+3jflBQVbBQ8FFIUihUWKOwV6FN4Y7CGx6PZ8IT8xJ5Bbw1vDreGd5D3ntFvqK1YpBiiuISxWrFJsVrii+V2ErGSl5K05XmK1UoHVG6ovRCma1souyjLFFerFytfEy5R3lYha9iqxKmkquyWmW/ygWVp6pMVRNVP9UU1WLVXapnVPv5NL4h34cv5a/g7+af5Q8IGAJTQZAgS1AmOCjoEgypqao5qMWqzVWrVjuh1qtOUzdRD1LPUV+rflj9lvrHcTrjvMaljls1rmHctXHvNMZriDVSNUo1GjVuanzUFGr6aWZrrtds1nygRWlZaEVozdHarnVW68V4wXi38dLxpeMPj7+rTWpbaEdqL9DepX1Ze1hHVydAR6azReeMzgtddV2xbpbuRt2TuoN6fD0PvUy9jXqn9J4J1YRewhxhpbBDOKSvrR+oX6i/U79Lf8TA1CDGYLlBo8EDQ46hyDDNcKNhu+GQkZ7RZKOFRvVGd43ZxiLjDOPNxp3G70xMTeJMVpo0mzw11TANMp1vWm9634xn5mk226zG7IY5w1xknm2+zfyqBWnhaJFhUW1xxZK0dLLMtNxm2T2BPsFlQt6Emgk9VgpWXlZFVvVWfdbq1qHWy62brV9ONJqYOHH9xM6JX2wcbXJsdtvcs1W1DbZdbttq+9rOwk5qV213w55n72+/xL7F/pWDpUOqw3aH2458x8mOKx3bHT87OTvJnRqcBp2NnJOdtzr3iASicNFq0XkXuou3yxKX4y4fXJ1cC1wPu/7iZuWW7bbf7ekk00mpk3ZP6nc3cJe473Tv9RB6JHt869Hrqe8p8azxfCQ2FKeIa8VPvMy9srwOeL30tvGWex/1fufj6rPIp82X5hvgW+rb5afqF+NX5ffQ38A/3b/efyjAMWBBQFsgPTAkcH1gT5BOkDSoLmgo2Dl4UXBHiEJIVEhVyKNQi1B5aOtkcnLw5A2T708xnpI3pTkMYUFhG8IehJuGzw7/IYIRER5RHfE40jZyYWRnFD9qRtT+qLfR3tFro+/FmMUUxrTHKsUmxdbFvovzjSuP642fGL8o/lKCVkJmQksiMzE2sTZxeKrf1E1TB5Ick0qSbk0znTZ32oXpWtNzpp+YoTRDMuNIMj05Lnl/8idJmKRGMjwzaObWmUNSH+lm6fMUccrGlMFU99Ty1Cdp7mnlaU/T3dM3pA9meGZUZLzI9MmsynyVFZi1I+tddlj23uzRnLicxlxWbnLusTzVvOy8jlm6s+bO6pZZykpkvbNdZ2+aPSQPkdfmE/nT8lsKBAWygsuFZoVfFfYVeRRVF72fEzvnyFyVuXlzL8+zmLdq3pP5/vP3LKAWSBe0L9RfuGxh3yKvRTsXE4tnLm5fYrikeMnA0oCl+5ZxlmUv+3G5zfLy5b+uiFvRWqxTvLS4/6uAr+pLFEvkJT0r3Vbu+Jr6OvPrrlX2q7as+lKaUnqxzKasouzTaunqi9/YflP5zeiatDVda53Wbl/HWJe37tZ6z/X7ylXK55f3b5i8oWmjcGPpxl83zdh0ocKhYsdmzubCzb2VoZUtW4y2rNvyqSqj6ma1d3XjVu2tq7a+25ay7dp28faGHTo7ynZ8/Dbz29s7A3Y21ZjUVOxi7Cra9Xh37O7OPaI9dbVatWW1n/fm7e3dF7mvo865rm6/9v619WR9Yf3ggaQDVw/6HmxpsGrY2ajeWHYIhwoPPfsu+btbh0MOtx8RHWn43vj7rUf5R0ubiKZ5TUPNGc29LQkt3ceCj7W3urUe/cH6h73H9Y9Xn1A7sfYk52TxydFT808Nt8naXpxOP93fPqP93pn4Mzc6Ijq6zoacPX/O/9yZTq/OU+fdzx+/4Hrh2EXRxeZLTpeaLjtePvqj449Hu5y6mq44X2m56nK1tXtS98lrntdOX/e9fu5G0I1LN6fc7L4Vc+t2T1JP7+2U20/v5Nx5dbfo7si9pffp90sfKD+oeKj9sOYn858ae516T/T59l1+FPXoXr+0//nP+T9/Gih+zHtc8UTvSd1Tu6fHB/0Hrz6b+mzguez5yIuSf6j8Y+tLs5ff/yL+5fJQ/NDAK/mr0der32i+2furw6/tw+HDD9/mvh15V/pe8/2+D6IPnR/jPj4ZmfOJ+anys/nn1i8hX+6P5o6OyiRyCQCABoBMSwNe7wV4CQD/KsBRHOO331iH+Av1/Ac/xngAACegFkBsGxAoBqrEgNFSQBVAuBiIFoO0t//j/Kb8NHu7sS5uM0CvGB19EwcwzYHPPaOjI82jo59rAdpdoO3tGDcCACUHiDqaxL72/J6f2f/Ka/8ECfe/CjHEsmQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAZNaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjM2IiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMzQiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTEyLTEyVDIyOjMyOjM1KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0xMi0xMlQyMjozMzowNCswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0xMi0xMlQyMjozMzowNCswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJTMjIxSFFMID8/Pz8/Pz8/Pz8/Pz8/PyIgcGhvdG9zaG9wOkhpc3Rvcnk9IjIwMTgtMTItMTJUMjI6MzI6NTMrMDM6MDAmI3g5O9Ck0LDQudC7INCh0L3QuNC80L7QuiDRjdC60YDQsNC90LAgMjAxOC0xMi0xMiDQsiAyMi4zMi4yOS5wbmcg0L7RgtC60YDRi9GCJiN4QTsyMDE4LTEyLTEyVDIyOjMzOjA0KzAzOjAwJiN4OTvQpNCw0LnQuyDQodC90LjQvNC+0Log0Y3QutGA0LDQvdCwIDIwMTgtMTItMTIg0LIgMjIuMzIuMjkucG5nINGB0L7RhdGA0LDQvdC10L0mI3hBOyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MDJjYWE3ZC1iYTZlLTRkYTEtYmJlYS0zZGRkNTFjN2Q4MzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODAyY2FhN2QtYmE2ZS00ZGExLWJiZWEtM2RkZDUxYzdkODM0IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODAyY2FhN2QtYmE2ZS00ZGExLWJiZWEtM2RkZDUxYzdkODM0Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODAyY2FhN2QtYmE2ZS00ZGExLWJiZWEtM2RkZDUxYzdkODM0IiBzdEV2dDp3aGVuPSIyMDE4LTEyLTEyVDIyOjMzOjA0KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xRlRyAAAAO9JREFUSInt1jsOgjAYwPGvYriAJEIbNr0FCVyC1bMyuBJXExsGHy0YHxMOJKQObFJ5tcRButGU3z8tISkKww2MOWaj6lPgPwLz+pTrEsta9IWy7MpY2imAsb1er/oGAEAa+MUR3e9P0zw1v2YYBiEOQmhIgNKE0qRZ932viw4DjqjSMbarRyGEzsCHznl6uXBtgboeRduyLPUEhukg/chSPQg8x+mtQ5cdqOjtAUW9JaCuNwW06F8DunR5QKMuDxDi2PZSiy4PHI/nON4JIRhT1eHbj7bfH/L8xVjaqnOeFUUBALfbQ7oATTe7KaA83qaOnVUcPuaFAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/components/Footer/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_lt_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/lt.png */ "./src/components/Footer/img/lt.png");
/* harmony import */ var _img_lt_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_lt_png__WEBPACK_IMPORTED_MODULE_2__);



function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footer
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "public/personal.pdf"
  }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445\u2028")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "public/license.pdf"
  }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "16+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0421\u041C\u0418 \u042D\u041B \u2116 \u0424\u0421 77-73685 \u043E\u0442 21.09.2018\u2028\xA9 \u041E\u041E\u041E \xAB\u041D\u044C\u044E\u041C\u0435\u0434\u0438\u0430 \u041B\u0430\u0431\xBB, 2018. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_lt_png__WEBPACK_IMPORTED_MODULE_2__,
    alt: ""
  })));
}

/***/ }),

/***/ "./src/components/Footer/style.scss":
/*!******************************************!*\
  !*** ./src/components/Footer/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"footer": "style__6450E"
};

/***/ }),

/***/ "./src/components/FuncBlock/index.tsx":
/*!********************************************!*\
  !*** ./src/components/FuncBlock/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FuncBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/components/FuncBlock/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);


function FuncBlock() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-center section-center--content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "orange"
  }, "\u041A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435"), " \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043A \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u0443 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.list
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u0421\u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044C \u0438\u0437 \u043C\u0430\u043A\u0435\u0442\u0430 \u043D\u0430\u0431\u043E\u0440 \u043F\u0435\u0440\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0445 React \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u0420\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0442\u043A\u0443, \u0441 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u043C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435\u043C \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439 vk, facebook, google."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u041A\u043D\u043E\u043F\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u043C\u0438 \u043A\u0430\u043A \u0432 \u043C\u0430\u043A\u0435\u0442\u0435. \u0413\u043E\u0442\u043E\u0432\u044B\u0435 \u043F\u043B\u0430\u0433\u0438\u043D\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043D\u0435\u043B\u044C\u0437\u044F."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u0420\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044E \u0432\u043E \u0432\u0441\u0435\u0445 \u0441\u043E\u0446 \u0441\u0435\u0442\u044F\u0445 \u043D\u0443\u0436\u043D\u043E \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u0435."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u041F\u0440\u0438 \u043A\u043B\u0438\u043A\u0435 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u201C\u0412\u0441\u0442\u0443\u043F\u0438\u0442\u044C\u201D, \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u0432\u043D\u0438\u0437 \u043A \u0444\u043E\u0440\u043C\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u041F\u0440\u0438 \u043A\u043B\u0438\u043A\u0435 \u043D\u0430 \u043B\u044E\u0431\u0443\u044E \u0438\u0437 \u043A\u043D\u043E\u043F\u043E\u043A \u0441\u043E\u0446. \u0441\u0435\u0442\u0435\u0439 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u043F\u043E\u043B\u044F: email, \u0444\u0430\u043C\u0438\u043B\u0438\u044E, \u0438\u043C\u044F."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u041F\u0440\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0439 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438, \u0431\u0440\u043E\u0441\u0430\u0435\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043F\u0440\u043E\u0444\u0438\u043B\u044F."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u0415\u0441\u043B\u0438 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C, \u043E\u043F\u043E\u0432\u0435\u0449\u0430\u0435\u043C \u0438 \u043F\u0440\u043E\u0441\u0438\u043C \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0437\u0430\u043D\u043E\u0432\u043E."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u041D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u0432\u044B\u0432\u043E\u0434\u0438\u043C \u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0432\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0435 \u0424\u0430\u043C\u0438\u043B\u0438\u044E, \u0438\u043C\u044F \u0438 email \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u041D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u043A\u043D\u043E\u043F\u043A\u0438 \"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F\". \u041E\u043D\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0432\u0435\u0441\u0442\u0438 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u041A\u043B\u044E\u0447\u0438 \u0438 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u0441\u043E\u0446.\u0441\u0435\u0442\u0435\u0439 \u0434\u043E\u043B\u0436\u043D\u044B \u043F\u043E\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E ENVIRONMENT \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445")));
}

/***/ }),

/***/ "./src/components/FuncBlock/style.scss":
/*!*********************************************!*\
  !*** ./src/components/FuncBlock/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"list": "style__zmBwN"
};

/***/ }),

/***/ "./src/components/Header/img/logo.png":
/*!********************************************!*\
  !*** ./src/components/Header/img/logo.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABGCAMAAADVcTJ4AAAC6FBMVEUAAAD/AAD/gID/VVX/gED/ZjP/VVX/bUn/YED/cVX/Zk3/XUb/alX/Yk7/W0n/ZkT/YFD/aUv/Y0f/XlH/Zk3/YUn/aEb/ZE7/YEr/Yk7/aEz/YU//Zk3/Y0r/aEj/ZE3/Ykv/Zkn/Y07/ZUr/Ykj/Zk3/ZEv/YUn/ZU3/Y0v/Zkr/ZE7/Ykz/ZUr/Y0n/Zk3/ZEv/Ykr/ZU3/Y0z/Zkr/ZEn/Ykz/ZUv/Y0n/Zk3/ZEv/Y0r/ZU3/ZEz/Ykv/ZEn/Y0z/ZUv/ZEr/Yk3/ZUv/Y0r/ZUn/ZEz/Y0v/ZUr/Y0z/ZUv/ZEr/Y03/ZUz/ZEv/ZUr/ZEz/Y0v/ZUr/ZEz/ZUv/ZEr/Y0r/ZUz/ZEv/Y0r/ZEz/Y0v/ZUr/ZEz/Y0v/ZEv/Y0r/ZUz/ZEv/Y0r/ZUz/ZEv/ZUv/ZEr/Y0z/ZUv/ZEr/ZEv/Y0r/ZUz/ZEv/Y0v/ZEr/Y0z/ZUv/ZEr/Y0z/ZEv/ZEv/ZUr/ZEv/ZEr/ZEz/ZUv/ZEv/Y0z/ZEv/ZEv/ZUr/ZEz/Y0v/ZUr/ZEz/ZUv/ZEv/ZUv/ZEv/Y0r/ZEz/ZEv/ZUv/ZEz/Y0v/ZEv/ZEr/ZEv/Y0v/ZEz/ZEv/ZUv/ZEr/Y0v/ZEv/ZEr/ZUz/ZEv/ZEv/ZEz/ZEv/Y0v/ZEr/ZEv/ZUv/ZEv/Y0z/ZEv/ZEv/ZUr/ZEv/Y0v/ZEr/ZEz/ZUv/ZEv/Y0z/ZEv/ZEv/ZUr/ZEv/ZEv/ZEv/ZEz/ZUv/ZEv/ZEr/ZEv/ZEv/Y0v/ZEv/ZEv/ZEz/Y0v/ZEv/ZEv/ZEv/ZEv/ZEz/ZEv/ZUv/ZEr/ZEv/ZEv/ZEv/ZUv/ZEv/ZEv/ZEz/ZEv/Y0v/ZEv/ZEv/ZEv/ZEv/Y0v/ZEv/ZEv/ZEr/ZEv/ZEv/ZEv/ZEv/ZEv/ZEv/ZEz/ZEv/ZEv/ZEv/ZEv/ZEv/ZEv/ZEv/ZUv/ZEv/ZEv/ZEv/ZEv/ZEv/ZEv/ZEv/ZEv/ZEv/ZEv/ZEv/ZEv/ZEv/ZEv///+I1nlBAAAA9nRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGhsdHh8gISIjJCYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5wcXJzdHV2d3h5ent8fX+AgYKDhIWGh4iJiouMjo+QkZKTlJWWl5mam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPFxsfIycvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7R3Q09AAAAAWJLR0T3q9x69wAACcNJREFUeNrtnWl81EQUwGe7PW3lUEArCogVhAqUonLUqiAKKkhLUVGkrSAqIodUKGeVFkWUWxFvUbwVVKiK4A2oRQUUBQQ5BMQKLb1289kC2817k5lkJjvZVX95HzNvXibz37zMe/OSJcQVV3RJvqNASO7PiXUnKwxy3mFNVErd2QqDjNbEpYU7Xc7LZAkg57vT5QJxgbhAXCCuuED+vZIvzsPXyJ0u5yVpkzCQR9zZCofEdEwTE9dhueKKK6644oorrrjiyv9KzhhVXHJKirJjzBQvnBDQKylIRcHEsIdK+FJ076CuXrbBG2YGdCa05p60xX0BnckdGg55sopKZGTGAKPZlv1ypzBUJ2enssea+kBAY1of3kg7TAxauYw/iZcUntKZNSqJp/INiIffNtkp7VOp61WngIaXLMPsQ8uvZBgs1BWOteOcNO1gUKeqU+BYiSYrE7HR1nN+4OseWMiYzrQaXSGX8+uq1lX8GbxJvNoXVPqco+LZJ5ahOPdvqNdDb4iuFtqC7WywuBk0z2CfNPl3oDMzcHCnNJAv0c2xrMZCfVVHehyzQOu7zJFeUAktDObN4lKglMzRmQIt1abxTK2Caps8ekOi2KRUjaItwomdyzxn3BfQwsOBo4elgfwAbA4U6F5X4MEDmQca1zJ/1p/A/r/F82bxZaCVwtGJ24ymOpqtdQvC1oVIA9G0hdJAlmrKgRT6hXqsiJcDMgL1voaEAoRcjG7hqUyds9AsTCN2gGhTJIGM05QDuUu0y8poGSAtkT9fQkIDQmZDa5VtWSrPQZXv4+wB8fWVApJRoxxIerVwn3kyQF6HPX9vEiqQ+C3Q3sceo0Zf5GG7EXtAtJ0JEkDOPaCpBuL9TryPv6c4kEGo5w0kVCCkuw8azDe0J+5gTUzD8+yI+FXeKw4kYaPGAbJHGsiGQM8hMp2+8YoCabIX9nuBhA6EzIUW/zybbn4UNm9NoFpzxf3AVnEgL2g8IPOlgUwP9Fwn1auvKJAnYK/9Z6oActrP0OarVGu3Ovgg6GHofSZ3o6/f+K/xRXYSBTJe4wKJvnMJLb/CJxzduDgvKhDV+LAjm3RdVzjY3mO+Re3PCwLJRAu3bKICCLkcjRXnGmKQ531MLjHjGYcsjxUE0qeOD4QhrwK1BVwttHTXZhkX+J4COLflUUJAEn4y+zHbBUIWQqt7GsMmVKyzPVE2VzaD86szA9KG9eAOGcgj1mtTtOBsJQSkGHY52EIVkCT03F4MWlKOw7VHpnTyMm436P+ZEJCkMs0JIG8Arb+asn33QaCTLgKkUy0c4y1EFRDSG96tvl76bYyehItspJPh1fwoAsTzmuYIkI+A1nKOztNAp5cAkOgNcIhvE3VAyJNoORRMHdyJAonTbQC5GxoQAVKoOQPkc6BVxNGZJAlkAlqfJqsEkvgLtD27IVV9LDSHVS/DgYVdAkBy/GEAMoWjM14OSLsqGYclB4T0g7ZrAinoN+HBpSQMQFL+0v4zQDwfwgG+R9QCIc9C61+dDFSz4KHdjU27x7fq3pslD0sBaQzzOHvKIwkk1RJILpye8paqgTRFKYB3TgRV++GR/ibhRuaj20WiX0sgUe/CPZRL9kYQyE4vE8gusOWLVucj6Xg5e6RBYJw81dCadyllYqDpZD7Hn5BrvxZMR1gCKYLauSSCQHxXsheKPPmQSsom79fkZRo1nOUmuvvO4F1o85XCJ7QCkuXHU+sYkPWciojg0tg/mkgBOUoXaoy1wUP7kzLS7ABfdyDvOntIpF8tgHQ8Co6ti3EQiGX2/R4iB2Q0fbbpdoBotJXr5R1Wz0pNFZAWu2CS5sQdGSkgvlwiB2S1xxkg7Wt5mgWcqzz/D00VEO8acOR4VxI5IP5RRBLIfOIIkAR+wVJNOnt59ammDAi8bP8gEjkgtTcRWSD+/o4AKTZR/S6OdZG3acqADGVk+SMCxDeCSAPRdjd1AEivOjNdZhHdFmVAusBn0cfRkQPiyyc2gGgvUX0esMOjAplotMN8oIxMVhpWWTfu9sEGWSgEBD3QdzYjEQPiyyO2gGg34z4da2wAWcFPnWgbS0tL8Sb0LmPqBNXZHhnAnIdcESAxsPSvIlh3Gn4gNcMtdhD+WBGU19Fu6BEqdZI+17DVvASmM14xNo9H9QrZ+JFxsu56BW+XOSBwXVTHyQULAVnAzpqGHciWblZbOmu5d85HUUpzWcmH0A/lVLVoc7yozaE7wTLUp4h9ILBKQZtDnAcypw1TWnmIDJBEnMAbqxKIZzWy3bCBMxgdPXwO1QvuoWSEAATKGm8YgBTa3vRcyy8OOd5BIZAxaFLKgi+KYKe1xsMH0kwNkF9gYVPYk4uSQCin9W2cMiDtUQIElLdTTmsMH0hzJUCOobezlAKBMezjioBQTmu2KiCxm5gOy+i0KttzgVylAogfP6aUAoFOeYMiICQDOS1fhiIgxRyHZXRaG2N5ceGLAkC2WQEpIc4BQdWpVygCQjmtHY2VAMEhOnofx+C0ZsG29abpHCOQ5RZA3vc6CGQmKgZsowgI5bSeVQGECtHpEhnstOpgnT4KHyqGeyyAlLc2B/IznRBSCmQAOtehvDglQCinZV7cKwjkGROHRV9vfcwAirN6UwnIIsZXkPXetVnEFMhRw7JRKZBm1N5C+aelPHltmDgQ8jgGnRwyEByiUw6L4bSW6S3evRKJmtohxBRIIOXuGBCyWmKw14sDoZzWB54QgeAQnVnTl4MHe6Pecr8EDyrONwB5kDgM5EYJII+JA6Gd1ujQgFAhelms1RXX13jrr/TEbBa9whraudJAVkY5DcRbJg5kkQQQymlVXBgSkDFWDuvkbjd2Wqv0uzK9QpBHFjEHso21YFQLhMp0qAOCX3jSNsSEAASH6NwiZMpp3QXWLnVCPIzPBwyknPl1DcVA8Msq6oDQTutB+0CoEL0sVuSa6xMcF+gtQwXKTqoZRUQIiI+9l6IaiGeBM0Aop1XX3TaQmSIOi+G0vgIRXOo2Sx6s6UZAppOwAKl/vaLKESCU09p+ml0gR4QcFsNpwdRD/KS/zXkwX92GFS5vcfZ2tgKdqfyxLQNqxRZBXpc1QkBKeD/btzjJDuy0bmVrwZdw2PEK+mjKe6bfy0LvTh87D7WdNW49/3n5K/v7UeC9nGW8r7WAVXVlO/7QMvWQr6qzZdzd/Zl9ljwq0ReBUirMgqVTMtEv4Gp66RvtnL+oScrVi6+v85pfSE9QqG1c2TVKHzqSKTm890T7NGiYvAeUGawMb2s2tIvuCKjlWxf5n3iUXNx/2EgzyaO+3NwmL9AwIp1rtDPoz/2oUvv8gMYQ8cSNKxGUfwD1FxDZ5+viuAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo.png */ "./src/components/Header/img/logo.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/components/Header/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




function Header() {
  var returnHome = function returnHome() {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_logo_png__WEBPACK_IMPORTED_MODULE_1__,
    alt: "logo",
    onClick: returnHome
  })));
}

/***/ }),

/***/ "./src/components/Header/style.scss":
/*!******************************************!*\
  !*** ./src/components/Header/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"header": "style__Ke5jM"
};

/***/ }),

/***/ "./src/components/SocialButton/FacebookButton.tsx":
/*!********************************************************!*\
  !*** ./src/components/SocialButton/FacebookButton.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FacebookButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/components/SocialButton/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_facebook_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-facebook-auth */ "react-facebook-auth");
/* harmony import */ var react_facebook_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_facebook_auth__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var FacebookButton =
/*#__PURE__*/
function (_Component) {
  _inherits(FacebookButton, _Component);

  function FacebookButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FacebookButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FacebookButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleAuthFb = function (data) {
      console.warn(data);
      var response = data.accessToken ? {
        ok: true,
        data: {
          user_name: data.name,
          email: data.email,
          token: data.accessToken,
          authChannel: 'fb'
        }
      } : {
        ok: false,
        err: data.error || 'some default err'
      };

      _this.props.callback(response);
    };

    _this.FacebookButton = function (title) {
      return function (_ref) {
        var onClick = _ref.onClick;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "".concat(_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.btn, " ").concat(_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.vk),
          onClick: onClick
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fab fa-facebook-f"
        }), title);
      };
    };

    return _this;
  }

  _createClass(FacebookButton, [{
    key: "render",
    value: function render() {
      var title = this.props.title;
      return this.props.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_facebook_auth__WEBPACK_IMPORTED_MODULE_2___default.a, {
        appId: String(this.props.id),
        callback: this.handleAuthFb,
        component: this.FacebookButton(title),
        version: "3.1"
      }) : null;
    }
  }]);

  return FacebookButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/SocialButton/GoggleButton.tsx":
/*!******************************************************!*\
  !*** ./src/components/SocialButton/GoggleButton.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoggleButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/components/SocialButton/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_authorize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-authorize */ "react-google-authorize");
/* harmony import */ var react_google_authorize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_authorize__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var GoggleButton =
/*#__PURE__*/
function (_Component) {
  _inherits(GoggleButton, _Component);

  function GoggleButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GoggleButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GoggleButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleAuthGoogle = function (data) {
      var token = data.access_token;
      fetch("https://www.googleapis.com/oauth2/v1/userinfo?access_token=".concat(token)).then(function (response) {
        return response.json();
      }).then(function (data) {
        var response = {
          ok: true,
          data: {
            user_name: "".concat(data.family_name, " ").concat(data.given_name),
            email: data.email,
            token: token,
            authChannel: 'google'
          }
        };

        _this.props.callback(response);
      }).catch(function (err) {
        var response = {
          ok: false,
          err: err || 'some default err'
        };

        _this.props.callback(response);
      });
    };

    _this.failAuthGoogle = function (err) {
      var response = {
        ok: false,
        err: err || 'some default err'
      };

      _this.props.callback(response);
    };

    return _this;
  }

  _createClass(GoggleButton, [{
    key: "render",
    value: function render() {
      var title = this.props.title;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_authorize__WEBPACK_IMPORTED_MODULE_2___default.a, {
        clientId: String(this.props.id),
        onSuccess: this.handleAuthGoogle,
        onFailure: this.failAuthGoogle,
        className: "".concat(_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.btn, " ").concat(_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.google)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-google"
      }), title));
    }
  }]);

  return GoggleButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/SocialButton/VkButton.tsx":
/*!**************************************************!*\
  !*** ./src/components/SocialButton/VkButton.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VkButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/components/SocialButton/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_vk_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-vk-auth */ "react-vk-auth");
/* harmony import */ var react_vk_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_vk_auth__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var VkButton =
/*#__PURE__*/
function (_Component) {
  _inherits(VkButton, _Component);

  function VkButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VkButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VkButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleAuthVk = function (data) {
      var response = data.status === 'connected' ? {
        ok: true,
        data: {
          user_name: _this.concatFio(data.session.user),
          email: data.session.user.href,
          token: data.session.sig,
          authChannel: 'vk'
        }
      } : {
        ok: false,
        err: data.status || 'some default err'
      };

      _this.props.callback(response);
    };

    _this.concatFio = function (_ref) {
      var first_name = _ref.first_name,
          last_name = _ref.last_name;
      return "".concat(first_name, " ").concat(last_name);
    };

    return _this;
  }

  _createClass(VkButton, [{
    key: "render",
    value: function render() {
      var title = this.props.title;
      return this.props.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vk_auth__WEBPACK_IMPORTED_MODULE_2___default.a, {
        apiId: String(this.props.id),
        callback: this.handleAuthVk,
        className: "".concat(_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.btn, " ").concat(_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.vk)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-vk"
      }), title) : null;
    }
  }]);

  return VkButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/SocialButton/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/SocialButton/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FacebookButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FacebookButton */ "./src/components/SocialButton/FacebookButton.tsx");
/* harmony import */ var _VkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VkButton */ "./src/components/SocialButton/VkButton.tsx");
/* harmony import */ var _GoggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GoggleButton */ "./src/components/SocialButton/GoggleButton.tsx");
/* harmony import */ var mobx_react_custom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react/custom */ "mobx-react/custom");
/* harmony import */ var mobx_react_custom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react_custom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions */ "./src/actions.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Button = (_dec = Object(mobx_react_custom__WEBPACK_IMPORTED_MODULE_4__["inject"])('store'), _dec(_class = Object(mobx_react_custom__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.getButton = function (_ref) {
      var type = _ref.type,
          title = _ref.title,
          id = _ref.id;

      switch (type) {
        case 'fb':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FacebookButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
            title: title,
            callback: _this.handleAuth,
            id: id
          });

        case 'vk':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VkButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
            title: title,
            callback: _this.handleAuth,
            id: id
          });

        case 'google':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GoggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: title,
            callback: _this.handleAuth,
            id: id
          });

        default:
          return null;
      }
    };

    _this.handleAuth = function (response) {
      var ok = response.ok,
          data = response.data,
          err = response.err;

      if (ok && data) {
        var _store = _this.props.store;
        Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setUserStoreLocale"])(data);

        if (_store) {
          _store.user_name = data.user_name;
          _store.email = data.email;
        }

        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/profile');
      } else {
        console.error('Fail auth', err);
      }
    };

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.getButton(this.props));
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"])) || _class) || _class);


/***/ }),

/***/ "./src/components/SocialButton/style.scss":
/*!************************************************!*\
  !*** ./src/components/SocialButton/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"btn": "style__1KTec",
	"vk": "style__2Mix9",
	"fb": "style__343ui",
	"google": "style__2nYjq",
	"isDisable": "style__20xCF"
};

/***/ }),

/***/ "./src/components/templates/index.tsx":
/*!********************************************!*\
  !*** ./src/components/templates/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_scss_normalize_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/scss/normalize.scss */ "./src/assets/scss/normalize.scss");
/* harmony import */ var _assets_scss_normalize_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_normalize_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_scss_global_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/scss/global.scss */ "./src/assets/scss/global.scss");
/* harmony import */ var _assets_scss_global_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_global_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./src/store.ts");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_8__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Template =
/*#__PURE__*/
function (_Component) {
  _inherits(Template, _Component);

  function Template() {
    _classCallCheck(this, Template);

    return _possibleConstructorReturn(this, _getPrototypeOf(Template).apply(this, arguments));
  }

  _createClass(Template, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
        store: _store__WEBPACK_IMPORTED_MODULE_7__["default"]
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: _assets_scss_normalize_scss__WEBPACK_IMPORTED_MODULE_5__["__hash"],
        css: _assets_scss_normalize_scss__WEBPACK_IMPORTED_MODULE_5__
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: _assets_scss_global_scss__WEBPACK_IMPORTED_MODULE_6__["__hash"],
        css: _assets_scss_global_scss__WEBPACK_IMPORTED_MODULE_6__
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.0/css/all.css",
        integrity: "sha384-aOkxzJ5uQz7WBObEZcHvV5JvRW3TUc2rNPA7pe3AwnsUohiw1Vj2Rgx2KSOkF5+h",
        crossOrigin: "anonymous"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), this.props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
    }
  }]);

  return Template;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Template);

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
var _class, _descriptor, _descriptor2;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }


var AppStore = (_class = function AppStore() {
  _classCallCheck(this, AppStore);

  _initializerDefineProperty(this, "user_name", _descriptor, this);

  _initializerDefineProperty(this, "email", _descriptor2, this);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "user_name", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "email", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
})), _class);
var store = new AppStore();
/* harmony default export */ __webpack_exports__["default"] = (store);
Object(mobx__WEBPACK_IMPORTED_MODULE_0__["autorun"])(function () {
  return console.log(store.user_name);
});

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "mobx-react/custom":
/*!************************************!*\
  !*** external "mobx-react/custom" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react/custom");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-facebook-auth":
/*!**************************************!*\
  !*** external "react-facebook-auth" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-facebook-auth");

/***/ }),

/***/ "react-google-authorize":
/*!*****************************************!*\
  !*** external "react-google-authorize" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-authorize");

/***/ }),

/***/ "react-vk-auth":
/*!********************************!*\
  !*** external "react-vk-auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-vk-auth");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map