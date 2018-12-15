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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 6 */
/***/ (function(module, exports) {



/***/ }),
/* 7 */
/***/ (function(module, exports) {



/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("mobx-react/custom");

/***/ }),
/* 9 */
/***/ (function(module, exports) {



/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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AAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjM2IiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMzQiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTEyLTEyVDIyOjMyOjM1KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0xMi0xMlQyMjozMzowNCswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0xMi0xMlQyMjozMzowNCswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJTMjIxSFFMID8/Pz8/Pz8/Pz8/Pz8/PyIgcGhvdG9zaG9wOkhpc3Rvcnk9IjIwMTgtMTItMTJUMjI6MzI6NTMrMDM6MDAmI3g5O9Ck0LDQudC7INCh0L3QuNC80L7QuiDRjdC60YDQsNC90LAgMjAxOC0xMi0xMiDQsiAyMi4zMi4yOS5wbmcg0L7RgtC60YDRi9GCJiN4QTsyMDE4LTEyLTEyVDIyOjMzOjA0KzAzOjAwJiN4OTvQpNCw0LnQuyDQodC90LjQvNC+0Log0Y3QutGA0LDQvdCwIDIwMTgtMTItMTIg0LIgMjIuMzIuMjkucG5nINGB0L7RhdGA0LDQvdC10L0mI3hBOyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MDJjYWE3ZC1iYTZlLTRkYTEtYmJlYS0zZGRkNTFjN2Q4MzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODAyY2FhN2QtYmE2ZS00ZGExLWJiZWEtM2RkZDUxYzdkODM0IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODAyY2FhN2QtYmE2ZS00ZGExLWJiZWEtM2RkZDUxYzdkODM0Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODAyY2FhN2QtYmE2ZS00ZGExLWJiZWEtM2RkZDUxYzdkODM0IiBzdEV2dDp3aGVuPSIyMDE4LTEyLTEyVDIyOjMzOjA0KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xRlRyAAAAO9JREFUSInt1jsOgjAYwPGvYriAJEIbNr0FCVyC1bMyuBJXExsGHy0YHxMOJKQObFJ5tcRButGU3z8tISkKww2MOWaj6lPgPwLz+pTrEsta9IWy7MpY2imAsb1er/oGAEAa+MUR3e9P0zw1v2YYBiEOQmhIgNKE0qRZ932viw4DjqjSMbarRyGEzsCHznl6uXBtgboeRduyLPUEhukg/chSPQg8x+mtQ5cdqOjtAUW9JaCuNwW06F8DunR5QKMuDxDi2PZSiy4PHI/nON4JIRhT1eHbj7bfH/L8xVjaqnOeFUUBALfbQ7oATTe7KaA83qaOnVUcPuaFAAAAAElFTkSuQmCC"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 12 */
/***/ (function(module, exports) {



/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAllUsers */
/* unused harmony export removeUser */
/* unused harmony export signUp */
/* unused harmony export auth */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setUserStoreLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserStoreLocale; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function dfPO(data) {
  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
} //TODO Delete this


function getAllUsers() {
  return _getAllUsers.apply(this, arguments);
}

function _getAllUsers() {
  _getAllUsers = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var users;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("/users/all");

          case 2:
            users = _context.sent;
            return _context.abrupt("return", users.json());

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getAllUsers.apply(this, arguments);
}

;
function removeUser(_x) {
  return _removeUser.apply(this, arguments);
}

function _removeUser() {
  _removeUser = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_id) {
    var rawResponse, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch('users/remove', dfPO({
              id: _id
            }));

          case 2:
            rawResponse = _context2.sent;
            _context2.next = 5;
            return rawResponse.json();

          case 5:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _removeUser.apply(this, arguments);
}

;
function signUp(_x2) {
  return _signUp.apply(this, arguments);
}

function _signUp() {
  _signUp = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(user) {
    var addUserReq, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch('auth/signUp', dfPO(user));

          case 2:
            addUserReq = _context3.sent;
            _context3.next = 5;
            return addUserReq.json();

          case 5:
            result = _context3.sent;
            return _context3.abrupt("return", result);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _signUp.apply(this, arguments);
}

function auth(_x3) {
  return _auth.apply(this, arguments);
} //TODO END Delete this

function _auth() {
  _auth = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data) {
    var addUserReq;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fetch('/auth', dfPO(data));

          case 2:
            addUserReq = _context4.sent;
            return _context4.abrupt("return", addUserReq);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _auth.apply(this, arguments);
}

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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(5);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/Footer/style.scss
var style = __webpack_require__(9);
var Footer_style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./src/components/Footer/img/lt.png
var lt = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/Footer/index.tsx



function Footer() {
  return external_react_default.a.createElement("div", {
    className: Footer_style_default.a.footer
  }, external_react_default.a.createElement("div", {
    className: "section-center"
  }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "public/personal.pdf"
  }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445\u2028")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "public/license.pdf"
  }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 "))), external_react_default.a.createElement("div", null, external_react_default.a.createElement("span", null, "16+"), external_react_default.a.createElement("p", null, "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0421\u041C\u0418 \u042D\u041B \u2116 \u0424\u0421 77-73685 \u043E\u0442 21.09.2018\u2028\xA9 \u041E\u041E\u041E \xAB\u041D\u044C\u044E\u041C\u0435\u0434\u0438\u0430 \u041B\u0430\u0431\xBB, 2018. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B")), external_react_default.a.createElement("img", {
    src: lt,
    alt: ""
  })));
}
// EXTERNAL MODULE: ./src/components/Header/img/logo.png
var logo = __webpack_require__(11);

// EXTERNAL MODULE: ./src/components/Header/style.scss
var Header_style = __webpack_require__(12);
var Header_style_default = /*#__PURE__*/__webpack_require__.n(Header_style);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(2);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./src/components/Header/index.tsx




function Header() {
  var returnHome = function returnHome() {
    router_default.a.push('/');
  };

  return external_react_default.a.createElement("div", {
    className: Header_style_default.a.header
  }, external_react_default.a.createElement("div", {
    className: "section-center"
  }, external_react_default.a.createElement("img", {
    src: logo,
    alt: "logo",
    onClick: returnHome
  })));
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(13);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/assets/scss/normalize.scss
var normalize = __webpack_require__(6);

// EXTERNAL MODULE: ./src/assets/scss/global.scss
var global = __webpack_require__(7);

// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/store.ts
var _class, _descriptor, _descriptor2;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }


var AppStore = (_class = function AppStore() {
  _classCallCheck(this, AppStore);

  _initializerDefineProperty(this, "user_name", _descriptor, this);

  _initializerDefineProperty(this, "email", _descriptor2, this);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "user_name", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "email", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
})), _class);
var store = new AppStore();
/* harmony default export */ var src_store = (store);
Object(external_mobx_["autorun"])(function () {
  return console.log(store.user_name);
});
// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__(14);

// CONCATENATED MODULE: ./src/components/templates/index.tsx


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function templates_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var templates_Template =
/*#__PURE__*/
function (_Component) {
  _inherits(Template, _Component);

  function Template() {
    templates_classCallCheck(this, Template);

    return _possibleConstructorReturn(this, _getPrototypeOf(Template).apply(this, arguments));
  }

  _createClass(Template, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_mobx_react_["Provider"], {
        store: src_store
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement(style_default.a, {
        styleId: normalize["__hash"],
        css: normalize
      }), external_react_default.a.createElement(style_default.a, {
        styleId: global["__hash"],
        css: global
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.0/css/all.css",
        integrity: "sha384-aOkxzJ5uQz7WBObEZcHvV5JvRW3TUc2rNPA7pe3AwnsUohiw1Vj2Rgx2KSOkF5+h",
        crossOrigin: "anonymous"
      })), external_react_default.a.createElement(Header, null), this.props.children, external_react_default.a.createElement(Footer, null)));
    }
  }]);

  return Template;
}(external_react_["Component"]);

/* harmony default export */ var templates = __webpack_exports__["a"] = (templates_Template);

/***/ }),
/* 17 */
/***/ (function(module, exports) {



/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports) {



/***/ }),
/* 20 */
/***/ (function(module, exports) {



/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-facebook-auth");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-vk-auth");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-google-authorize");

/***/ }),
/* 24 */
/***/ (function(module, exports) {



/***/ }),
/* 25 */
/***/ (function(module, exports) {



/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/templates/index.tsx + 3 modules
var templates = __webpack_require__(16);

// EXTERNAL MODULE: ./src/components/Baner/style.scss
var style = __webpack_require__(19);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./src/components/Baner/index.tsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Baner_Baner =
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
      return external_react_default.a.createElement("div", {
        className: "section-center ".concat(style_default.a.banner)
      }, external_react_default.a.createElement("div", {
        className: style_default.a.content
      }, external_react_default.a.createElement("h1", null, "\u0422\u0435\u0441\u0442\u043E\u0432\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u044E frontend \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430 \u0425\u0430\u0439\u0442\u0435\u043A+"), external_react_default.a.createElement("p", null, "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0441\u044F \u043A \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u043A\u0440\u0443\u0442\u0435\u0439\u0448\u0435\u0433\u043E \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E ", external_react_default.a.createElement("span", {
        className: "orange"
      }, "\u0421\u041C\u0418")), external_react_default.a.createElement("div", {
        className: "btn",
        onClick: this.props.onClick
      }, "\u0412\u0441\u0442\u0443\u043F\u0438\u0442\u044C")));
    }
  }]);

  return Baner;
}(external_react_["Component"]);


// EXTERNAL MODULE: ./src/components/FuncBlock/style.scss
var FuncBlock_style = __webpack_require__(20);
var FuncBlock_style_default = /*#__PURE__*/__webpack_require__.n(FuncBlock_style);

// CONCATENATED MODULE: ./src/components/FuncBlock/index.tsx


function FuncBlock() {
  return external_react_default.a.createElement("div", {
    className: "section-center section-center--content"
  }, external_react_default.a.createElement("h2", null, external_react_default.a.createElement("span", {
    className: "orange"
  }, "\u041A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435"), " \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043A \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u0443 "), external_react_default.a.createElement("ul", {
    className: FuncBlock_style_default.a.list
  }, external_react_default.a.createElement("li", null, "\u0421\u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044C \u0438\u0437 \u043C\u0430\u043A\u0435\u0442\u0430 \u043D\u0430\u0431\u043E\u0440 \u043F\u0435\u0440\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0445 React \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432."), external_react_default.a.createElement("li", null, "\u0420\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0442\u043A\u0443, \u0441 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u043C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435\u043C \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435."), external_react_default.a.createElement("li", null, "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439 vk, facebook, google."), external_react_default.a.createElement("li", null, "\u041A\u043D\u043E\u043F\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u043C\u0438 \u043A\u0430\u043A \u0432 \u043C\u0430\u043A\u0435\u0442\u0435. \u0413\u043E\u0442\u043E\u0432\u044B\u0435 \u043F\u043B\u0430\u0433\u0438\u043D\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043D\u0435\u043B\u044C\u0437\u044F."), external_react_default.a.createElement("li", null, "\u0420\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044E \u0432\u043E \u0432\u0441\u0435\u0445 \u0441\u043E\u0446 \u0441\u0435\u0442\u044F\u0445 \u043D\u0443\u0436\u043D\u043E \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u0435."), external_react_default.a.createElement("li", null, "\u041F\u0440\u0438 \u043A\u043B\u0438\u043A\u0435 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u201C\u0412\u0441\u0442\u0443\u043F\u0438\u0442\u044C\u201D, \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u0432\u043D\u0438\u0437 \u043A \u0444\u043E\u0440\u043C\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438."), external_react_default.a.createElement("li", null, "\u041F\u0440\u0438 \u043A\u043B\u0438\u043A\u0435 \u043D\u0430 \u043B\u044E\u0431\u0443\u044E \u0438\u0437 \u043A\u043D\u043E\u043F\u043E\u043A \u0441\u043E\u0446. \u0441\u0435\u0442\u0435\u0439 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F."), external_react_default.a.createElement("li", null, "\u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u043F\u043E\u043B\u044F: email, \u0444\u0430\u043C\u0438\u043B\u0438\u044E, \u0438\u043C\u044F."), external_react_default.a.createElement("li", null, "\u041F\u0440\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0439 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438, \u0431\u0440\u043E\u0441\u0430\u0435\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043F\u0440\u043E\u0444\u0438\u043B\u044F."), external_react_default.a.createElement("li", null, "\u0415\u0441\u043B\u0438 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C, \u043E\u043F\u043E\u0432\u0435\u0449\u0430\u0435\u043C \u0438 \u043F\u0440\u043E\u0441\u0438\u043C \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0437\u0430\u043D\u043E\u0432\u043E."), external_react_default.a.createElement("li", null, "\u041D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u0432\u044B\u0432\u043E\u0434\u0438\u043C \u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0432\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0435 \u0424\u0430\u043C\u0438\u043B\u0438\u044E, \u0438\u043C\u044F \u0438 email \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F."), external_react_default.a.createElement("li", null, "\u041D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u043A\u043D\u043E\u043F\u043A\u0438 \"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F\". \u041E\u043D\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0432\u0435\u0441\u0442\u0438 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C. "), external_react_default.a.createElement("li", null, "\u041A\u043B\u044E\u0447\u0438 \u0438 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u0441\u043E\u0446.\u0441\u0435\u0442\u0435\u0439 \u0434\u043E\u043B\u0436\u043D\u044B \u043F\u043E\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E ENVIRONMENT \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445")));
}
// EXTERNAL MODULE: ./src/components/SocialButton/style.scss
var SocialButton_style = __webpack_require__(4);
var SocialButton_style_default = /*#__PURE__*/__webpack_require__.n(SocialButton_style);

// EXTERNAL MODULE: external "react-facebook-auth"
var external_react_facebook_auth_ = __webpack_require__(21);
var external_react_facebook_auth_default = /*#__PURE__*/__webpack_require__.n(external_react_facebook_auth_);

// CONCATENATED MODULE: ./src/components/SocialButton/FacebookButton.tsx
function FacebookButton_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FacebookButton_typeof = function _typeof(obj) { return typeof obj; }; } else { FacebookButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FacebookButton_typeof(obj); }

function FacebookButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FacebookButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FacebookButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) FacebookButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) FacebookButton_defineProperties(Constructor, staticProps); return Constructor; }

function FacebookButton_possibleConstructorReturn(self, call) { if (call && (FacebookButton_typeof(call) === "object" || typeof call === "function")) { return call; } return FacebookButton_assertThisInitialized(self); }

function FacebookButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FacebookButton_getPrototypeOf(o) { FacebookButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FacebookButton_getPrototypeOf(o); }

function FacebookButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FacebookButton_setPrototypeOf(subClass, superClass); }

function FacebookButton_setPrototypeOf(o, p) { FacebookButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FacebookButton_setPrototypeOf(o, p); }





var FacebookButton_FacebookButton =
/*#__PURE__*/
function (_Component) {
  FacebookButton_inherits(FacebookButton, _Component);

  function FacebookButton() {
    var _getPrototypeOf2;

    var _this;

    FacebookButton_classCallCheck(this, FacebookButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = FacebookButton_possibleConstructorReturn(this, (_getPrototypeOf2 = FacebookButton_getPrototypeOf(FacebookButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

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
        return external_react_default.a.createElement("div", {
          className: "".concat(SocialButton_style_default.a.btn, " ").concat(SocialButton_style_default.a.vk),
          onClick: onClick
        }, external_react_default.a.createElement("i", {
          className: "fab fa-facebook-f"
        }), title);
      };
    };

    return _this;
  }

  FacebookButton_createClass(FacebookButton, [{
    key: "render",
    value: function render() {
      var title = this.props.title;
      return this.props.id ? external_react_default.a.createElement(external_react_facebook_auth_default.a, {
        appId: String(this.props.id),
        callback: this.handleAuthFb,
        component: this.FacebookButton(title),
        version: "3.1"
      }) : null;
    }
  }]);

  return FacebookButton;
}(external_react_["Component"]);


// EXTERNAL MODULE: external "react-vk-auth"
var external_react_vk_auth_ = __webpack_require__(22);
var external_react_vk_auth_default = /*#__PURE__*/__webpack_require__.n(external_react_vk_auth_);

// CONCATENATED MODULE: ./src/components/SocialButton/VkButton.tsx
function VkButton_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VkButton_typeof = function _typeof(obj) { return typeof obj; }; } else { VkButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VkButton_typeof(obj); }

function VkButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VkButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VkButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) VkButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) VkButton_defineProperties(Constructor, staticProps); return Constructor; }

function VkButton_possibleConstructorReturn(self, call) { if (call && (VkButton_typeof(call) === "object" || typeof call === "function")) { return call; } return VkButton_assertThisInitialized(self); }

function VkButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VkButton_getPrototypeOf(o) { VkButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VkButton_getPrototypeOf(o); }

function VkButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VkButton_setPrototypeOf(subClass, superClass); }

function VkButton_setPrototypeOf(o, p) { VkButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VkButton_setPrototypeOf(o, p); }





var VkButton_VkButton =
/*#__PURE__*/
function (_Component) {
  VkButton_inherits(VkButton, _Component);

  function VkButton() {
    var _getPrototypeOf2;

    var _this;

    VkButton_classCallCheck(this, VkButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = VkButton_possibleConstructorReturn(this, (_getPrototypeOf2 = VkButton_getPrototypeOf(VkButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

  VkButton_createClass(VkButton, [{
    key: "render",
    value: function render() {
      var title = this.props.title;
      return this.props.id ? external_react_default.a.createElement(external_react_vk_auth_default.a, {
        apiId: String(this.props.id),
        callback: this.handleAuthVk,
        className: "".concat(SocialButton_style_default.a.btn, " ").concat(SocialButton_style_default.a.vk)
      }, external_react_default.a.createElement("i", {
        className: "fab fa-vk"
      }), title) : null;
    }
  }]);

  return VkButton;
}(external_react_["Component"]);


// EXTERNAL MODULE: external "react-google-authorize"
var external_react_google_authorize_ = __webpack_require__(23);
var external_react_google_authorize_default = /*#__PURE__*/__webpack_require__.n(external_react_google_authorize_);

// CONCATENATED MODULE: ./src/components/SocialButton/GoggleButton.tsx
function GoggleButton_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GoggleButton_typeof = function _typeof(obj) { return typeof obj; }; } else { GoggleButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GoggleButton_typeof(obj); }

function GoggleButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GoggleButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GoggleButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) GoggleButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) GoggleButton_defineProperties(Constructor, staticProps); return Constructor; }

function GoggleButton_possibleConstructorReturn(self, call) { if (call && (GoggleButton_typeof(call) === "object" || typeof call === "function")) { return call; } return GoggleButton_assertThisInitialized(self); }

function GoggleButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GoggleButton_getPrototypeOf(o) { GoggleButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GoggleButton_getPrototypeOf(o); }

function GoggleButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) GoggleButton_setPrototypeOf(subClass, superClass); }

function GoggleButton_setPrototypeOf(o, p) { GoggleButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GoggleButton_setPrototypeOf(o, p); }





var GoggleButton_GoggleButton =
/*#__PURE__*/
function (_Component) {
  GoggleButton_inherits(GoggleButton, _Component);

  function GoggleButton() {
    var _getPrototypeOf2;

    var _this;

    GoggleButton_classCallCheck(this, GoggleButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = GoggleButton_possibleConstructorReturn(this, (_getPrototypeOf2 = GoggleButton_getPrototypeOf(GoggleButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

  GoggleButton_createClass(GoggleButton, [{
    key: "render",
    value: function render() {
      var title = this.props.title;
      return external_react_default.a.createElement(external_react_google_authorize_default.a, {
        clientId: String(this.props.id),
        onSuccess: this.handleAuthGoogle,
        onFailure: this.failAuthGoogle,
        className: "".concat(SocialButton_style_default.a.btn, " ").concat(SocialButton_style_default.a.google)
      }, external_react_default.a.createElement("span", null, external_react_default.a.createElement("i", {
        className: "fab fa-google"
      }), title));
    }
  }]);

  return GoggleButton;
}(external_react_["Component"]);


// EXTERNAL MODULE: external "mobx-react/custom"
var custom_ = __webpack_require__(8);

// EXTERNAL MODULE: ./src/actions.ts
var actions = __webpack_require__(15);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(2);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./src/components/SocialButton/index.tsx
var _dec, _class;

function SocialButton_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SocialButton_typeof = function _typeof(obj) { return typeof obj; }; } else { SocialButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SocialButton_typeof(obj); }

function SocialButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SocialButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SocialButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) SocialButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) SocialButton_defineProperties(Constructor, staticProps); return Constructor; }

function SocialButton_possibleConstructorReturn(self, call) { if (call && (SocialButton_typeof(call) === "object" || typeof call === "function")) { return call; } return SocialButton_assertThisInitialized(self); }

function SocialButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SocialButton_getPrototypeOf(o) { SocialButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SocialButton_getPrototypeOf(o); }

function SocialButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SocialButton_setPrototypeOf(subClass, superClass); }

function SocialButton_setPrototypeOf(o, p) { SocialButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SocialButton_setPrototypeOf(o, p); }








var SocialButton_Button = (_dec = Object(custom_["inject"])('store'), _dec(_class = Object(custom_["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  SocialButton_inherits(Button, _Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    SocialButton_classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = SocialButton_possibleConstructorReturn(this, (_getPrototypeOf2 = SocialButton_getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.getButton = function (_ref) {
      var type = _ref.type,
          title = _ref.title,
          id = _ref.id;

      switch (type) {
        case 'fb':
          return external_react_default.a.createElement(FacebookButton_FacebookButton, {
            title: title,
            callback: _this.handleAuth,
            id: id
          });

        case 'vk':
          return external_react_default.a.createElement(VkButton_VkButton, {
            title: title,
            callback: _this.handleAuth,
            id: id
          });

        case 'google':
          return external_react_default.a.createElement(GoggleButton_GoggleButton, {
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
        Object(actions["b" /* setUserStoreLocale */])(data);

        if (_store) {
          _store.user_name = data.user_name;
          _store.email = data.email;
        }

        router_default.a.push('/profile');
      } else {
        console.error('Fail auth', err);
      }
    };

    return _this;
  }

  SocialButton_createClass(Button, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, this.getButton(this.props));
    }
  }]);

  return Button;
}(external_react_["Component"])) || _class) || _class);

// EXTERNAL MODULE: ./src/components/CheckBox/style.scss
var CheckBox_style = __webpack_require__(24);

// CONCATENATED MODULE: ./src/components/CheckBox/index.tsx
function CheckBox_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CheckBox_typeof = function _typeof(obj) { return typeof obj; }; } else { CheckBox_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CheckBox_typeof(obj); }

function CheckBox_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CheckBox_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CheckBox_createClass(Constructor, protoProps, staticProps) { if (protoProps) CheckBox_defineProperties(Constructor.prototype, protoProps); if (staticProps) CheckBox_defineProperties(Constructor, staticProps); return Constructor; }

function CheckBox_possibleConstructorReturn(self, call) { if (call && (CheckBox_typeof(call) === "object" || typeof call === "function")) { return call; } return CheckBox_assertThisInitialized(self); }

function CheckBox_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CheckBox_getPrototypeOf(o) { CheckBox_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CheckBox_getPrototypeOf(o); }

function CheckBox_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CheckBox_setPrototypeOf(subClass, superClass); }

function CheckBox_setPrototypeOf(o, p) { CheckBox_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CheckBox_setPrototypeOf(o, p); }




var CheckBox_Checkbox =
/*#__PURE__*/
function (_Component) {
  CheckBox_inherits(Checkbox, _Component);

  function Checkbox(props) {
    var _this;

    CheckBox_classCallCheck(this, Checkbox);

    _this = CheckBox_possibleConstructorReturn(this, CheckBox_getPrototypeOf(Checkbox).call(this, props));

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

  CheckBox_createClass(Checkbox, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        onClick: this.handleClick
      }, external_react_default.a.createElement("div", {
        className: CheckBox_style["checkbox"]
      }, this.state.isActive && external_react_default.a.createElement("i", {
        className: "fas fa-check"
      })));
    }
  }]);

  return Checkbox;
}(external_react_["Component"]);


// EXTERNAL MODULE: ./src/components/BlackBlock/style.scss
var BlackBlock_style = __webpack_require__(17);
var BlackBlock_style_default = /*#__PURE__*/__webpack_require__.n(BlackBlock_style);

// CONCATENATED MODULE: ./src/components/BlackBlock/index.tsx
function BlackBlock_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BlackBlock_typeof = function _typeof(obj) { return typeof obj; }; } else { BlackBlock_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BlackBlock_typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BlackBlock_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BlackBlock_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BlackBlock_createClass(Constructor, protoProps, staticProps) { if (protoProps) BlackBlock_defineProperties(Constructor.prototype, protoProps); if (staticProps) BlackBlock_defineProperties(Constructor, staticProps); return Constructor; }

function BlackBlock_possibleConstructorReturn(self, call) { if (call && (BlackBlock_typeof(call) === "object" || typeof call === "function")) { return call; } return BlackBlock_assertThisInitialized(self); }

function BlackBlock_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BlackBlock_getPrototypeOf(o) { BlackBlock_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BlackBlock_getPrototypeOf(o); }

function BlackBlock_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BlackBlock_setPrototypeOf(subClass, superClass); }

function BlackBlock_setPrototypeOf(o, p) { BlackBlock_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BlackBlock_setPrototypeOf(o, p); }






var BlackBlock_BlackBlock =
/*#__PURE__*/
function (_Component) {
  BlackBlock_inherits(BlackBlock, _Component);

  function BlackBlock(props) {
    var _this;

    BlackBlock_classCallCheck(this, BlackBlock);

    _this = BlackBlock_possibleConstructorReturn(this, BlackBlock_getPrototypeOf(BlackBlock).call(this, props));

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
        return external_react_default.a.createElement(SocialButton_Button, {
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

  BlackBlock_createClass(BlackBlock, [{
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
      return external_react_default.a.createElement("div", {
        className: BlackBlock_style_default.a.blackBlock,
        ref: this.setRef
      }, external_react_default.a.createElement("div", {
        className: "section-center section-center--content"
      }, external_react_default.a.createElement("h2", null, "\u042F \u0432\u0441\u0435 \u0441\u0434\u0435\u043B\u0430\u043B, \u0447\u0442\u043E \u0434\u0430\u043B\u044C\u0448\u0435?"), external_react_default.a.createElement("p", null, "\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0430\u0439\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u0441\u0435\u0442\u0438 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u043F\u043B\u0430\u0444\u0442\u043E\u0440\u043C\u0435 \u043D\u0430 \u0432\u0430\u0448 \u0432\u044B\u0431\u043E\u0440, \u043F\u043E\u0434 https. \u0427\u0442\u043E\u0431\u044B \u0435\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u0440\u0435\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0438 \u043F\u043E\u0449\u0435\u043B\u043A\u0430\u0442\u044C \u0441 \u0442\u043E\u0447\u043A\u0438 \u0437\u0440\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438 \u043F\u043E\u0449\u0435\u043B\u043A\u0430\u0442\u044C. \u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043D\u0430 GitHub. \u0412 \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C README.md \u0441 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439 \u043F\u043E \u0441\u0431\u043E\u0440\u043A\u0435 \u0438 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044B\u0432\u0430\u043D\u0438\u044E."), external_react_default.a.createElement("p", null, "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u0434\u0430\u043D\u0438\u044F: 24 \u0447\u0430\u0441\u0430. \u041B\u044E\u0431\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u043C\u0443 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C \u0432 Telegram. (https://t.me/antonikucherov)"), external_react_default.a.createElement("ul", {
        className: BlackBlock_style_default.a.btnList
      }, this.renderSocialButton()), external_react_default.a.createElement("div", {
        className: BlackBlock_style_default.a.license
      }, external_react_default.a.createElement(CheckBox_Checkbox, null), external_react_default.a.createElement("p", null, "\u042F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E ", external_react_default.a.createElement("a", {
        href: "/public/license.pdf"
      }, "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435"), " \u0438 \u0434\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435\u2028\u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"))));
    }
  }]);

  return BlackBlock;
}(external_react_["Component"]);


// EXTERNAL MODULE: ./pages/scss/index.scss
var scss = __webpack_require__(25);
var scss_default = /*#__PURE__*/__webpack_require__.n(scss);

// CONCATENATED MODULE: ./pages/index.tsx
function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }








var pages_Index =
/*#__PURE__*/
function (_Component) {
  pages_inherits(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    pages_classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = pages_possibleConstructorReturn(this, (_getPrototypeOf2 = pages_getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.$auth = external_react_default.a.createRef();

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

  pages_createClass(Index, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(templates["a" /* default */], null, external_react_default.a.createElement(Baner_Baner, {
        onClick: this.scrollTo
      }), external_react_default.a.createElement("div", {
        className: "content"
      }, external_react_default.a.createElement("div", {
        className: "section-center section-center--content"
      }, external_react_default.a.createElement("h2", null, "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ", external_react_default.a.createElement("span", {
        className: "orange"
      }, "\u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u0434\u0430\u043D\u0438\u044F")), external_react_default.a.createElement("p", null, "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044C \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 (\u043B\u0435\u043D\u0434\u0438\u043D\u0433) \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B \u0432\u0438\u0434\u0438\u0442\u0435 \u043D\u0430 \u0434\u0430\u043D\u043D\u043E\u043C \u043C\u0430\u043A\u0435\u0442\u0435. \u0421\u0430\u0439\u0442 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D \u043D\u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u043C \u0441\u0442\u0435\u043A\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439."), external_react_default.a.createElement("p", null, "\u0421\u0430\u0439\u0442 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u0434\u0432\u0443\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446. \u0413\u043B\u0430\u0432\u043D\u043E\u0439 \u0438 \u041F\u0440\u043E\u0444\u0438\u043B\u044F. :) \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043F\u043E\u043F\u0430\u0434\u0430\u0435\u0442 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443. \u041D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u043F\u0430\u0441\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C. \u041D\u0435\u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0430\u0434\u0440\u0435\u0441\u043E\u0432\u0430\u043D\u044B \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E."), external_react_default.a.createElement("h4", null, "\u0422\u0440\u0435\u0431\u0443\u0435\u043C\u044B\u0439 \u0441\u0442\u0435\u043A:"), external_react_default.a.createElement("ul", {
        className: scss_default.a.list
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "Next.js"), " (\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u044F\u0434\u0440\u0430 \u0432\u0441\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B)"), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "React.js"), " (\u0412 \u043A\u0430\u0447\u0435\u0442\u0432\u0435 UI \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438)"), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "MobX"), " (\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F)"), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "TypeScript"), " (\u041D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E, \u043D\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430 \u043D\u0435\u043C \u0431\u0443\u0434\u0435\u0442 \u043D\u0435\u0441\u043E\u043C\u043D\u0435\u043D\u043D\u044B\u043C \u043F\u043B\u044E\u0441\u043E\u043C)")))), external_react_default.a.createElement(FuncBlock, null), external_react_default.a.createElement(BlackBlock_BlackBlock, {
        setScrollElement: this.setScrollElement
      }));
    }
  }]);

  return Index;
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);