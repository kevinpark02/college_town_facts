/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ (() => {

eval("window.addEventListener(\"DOMContentLoaded\", (event) => {\n    window.onscroll = function() { myFunction() };\n    \n    const mainHeader = document.getElementById(\"header\");\n    \n    const sticky = mainHeader.offsetTop;\n    \n    function myFunction() {\n        if (window.pageYOffset > sticky) {\n            mainHeader.classList.add(\"sticky\")\n        } else {\n            mainHeader.classList.remove(\"sticky\")\n        }\n    }\n})\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://college_town_facts/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ \"./src/info.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_info__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://college_town_facts/./src/index.js?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ (() => {

eval("window.addEventListener(\"DOMContentLoaded\", (event) => {\n    window.onscroll = function () { scrollFunction(); };\n\n    function scrollFunction() {\n        let davis = document.getElementById(\"davis\")\n        let merced = document.getElementById(\"merced\")\n        let berkeley = document.getElementById(\"berkeley\")\n        let santacruz = document.getElementById(\"santacruz\")\n        let santabarbara = document.getElementById(\"santabarbara\")\n        let ucla = document.getElementById(\"ucla\")\n        let riverside = document.getElementById(\"riverside\")\n        let irvine = document.getElementById(\"irvine\")\n        let sandiego = document.getElementById(\"sandiego\")\n\n        if(document.documentElement.scrollTop < 449) {\n            davis.classList.add(\"appear\");\n            merced.classList.remove(\"appear\");\n            berkeley.classList.remove(\"appear\");\n            santacruz.classList.remove(\"appear\");\n            santabarbara.classList.remove(\"appear\");\n            ucla.classList.remove(\"appear\");\n            riverside.classList.remove(\"appear\");\n            irvine.classList.remove(\"appear\");\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 1119) && (document.documentElement.scrollTop > 450)) {\n            davis.classList.remove(\"appear\");\n            merced.classList.add(\"appear\");\n            berkeley.classList.remove(\"appear\");\n            santacruz.classList.remove(\"appear\");\n            santabarbara.classList.remove(\"appear\");\n            ucla.classList.remove(\"appear\");\n            riverside.classList.remove(\"appear\");\n            irvine.classList.remove(\"appear\");\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 1799) && (document.documentElement.scrollTop > 1120)) {\n            davis.classList.remove(\"appear\");\n            merced.classList.remove(\"appear\");\n            berkeley.classList.add(\"appear\");\n            santacruz.classList.remove(\"appear\");\n            santabarbara.classList.remove(\"appear\");\n            ucla.classList.remove(\"appear\");\n            riverside.classList.remove(\"appear\");\n            irvine.classList.remove(\"appear\");\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 2479) && (document.documentElement.scrollTop > 1800)) {\n            davis.classList.remove(\"appear\");\n            merced.classList.remove(\"appear\");\n            berkeley.classList.remove(\"appear\");\n            santacruz.classList.add(\"appear\");\n            santabarbara.classList.remove(\"appear\");\n            ucla.classList.remove(\"appear\");\n            riverside.classList.remove(\"appear\");\n            irvine.classList.remove(\"appear\");\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 3149) && (document.documentElement.scrollTop > 2480)) {\n            davis.classList.remove(\"appear\");\n            merced.classList.remove(\"appear\");\n            berkeley.classList.remove(\"appear\");\n            santacruz.classList.remove(\"appear\");\n            santabarbara.classList.add(\"appear\");\n            ucla.classList.remove(\"appear\");\n            riverside.classList.remove(\"appear\");\n            irvine.classList.remove(\"appear\");\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 3849) && (document.documentElement.scrollTop > 3150)) {\n            davis.classList.remove(\"appear\");\n            merced.classList.remove(\"appear\");\n            berkeley.classList.remove(\"appear\");\n            santacruz.classList.remove(\"appear\");\n            santabarbara.classList.remove(\"appear\");\n            ucla.classList.add(\"appear\");\n            riverside.classList.remove(\"appear\");\n            irvine.classList.remove(\"appear\");\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 4519) && (document.documentElement.scrollTop > 3850)) {\n            davis.classList.remove(\"appear\");\n            merced.classList.remove(\"appear\");\n            berkeley.classList.remove(\"appear\");\n            santacruz.classList.remove(\"appear\");\n            santabarbara.classList.remove(\"appear\");\n            ucla.classList.remove(\"appear\");\n            riverside.classList.add(\"appear\");\n            irvine.classList.remove(\"appear\");\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 5199) && (document.documentElement.scrollTop > 4520)) {\n            davis.classList.remove(\"appear\");\n            merced.classList.remove(\"appear\");\n            berkeley.classList.remove(\"appear\");\n            santacruz.classList.remove(\"appear\");\n            santabarbara.classList.remove(\"appear\");\n            ucla.classList.remove(\"appear\");\n            riverside.classList.remove(\"appear\");\n            irvine.classList.add(\"appear\");\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 7000) && (document.documentElement.scrollTop > 5200)) {\n            davis.classList.remove(\"appear\");\n            merced.classList.remove(\"appear\");\n            berkeley.classList.remove(\"appear\");\n            santacruz.classList.remove(\"appear\");\n            santabarbara.classList.remove(\"appear\");\n            ucla.classList.remove(\"appear\");\n            riverside.classList.remove(\"appear\");\n            irvine.classList.remove(\"appear\");\n            sandiego.classList.add(\"appear\");\n        }\n    }\n})\n\n//# sourceURL=webpack://college_town_facts/./src/info.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;