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

/***/ "./src/eatery.js":
/*!***********************!*\
  !*** ./src/eatery.js ***!
  \***********************/
/***/ (() => {

eval("window.addEventListener(\"DOMContentLoaded\", (event) => {\n    document.querySelector(\".davis-get-restaurants\").addEventListener('click', getRestaurants);\n    document.querySelector(\".merced-get-restaurants\").addEventListener('click', getRestaurants);\n    document.querySelector(\".berkeley-get-restaurants\").addEventListener('click', getRestaurants);\n    document.querySelector(\".sc-get-restaurants\").addEventListener('click', getRestaurants);\n    document.querySelector(\".sb-get-restaurants\").addEventListener('click', getRestaurants);\n    document.querySelector(\".la-get-restaurants\").addEventListener('click', getRestaurants);\n    document.querySelector(\".riverside-get-restaurants\").addEventListener('click', getRestaurants);\n    document.querySelector(\".irvine-get-restaurants\").addEventListener('click', getRestaurants);\n    document.querySelector(\".sd-get-restaurants\").addEventListener('click', getRestaurants);\n\n    function getRestaurants() {\n        let davisRestaurants = document.querySelector(\".davis-restaurants\");\n            davisRestaurants.classList.add(\"restaurant-appear\");\n        let davisYelp = document.querySelector(\".davis-yelp\");\n            davisYelp.classList.add(\"yelp-appear\");\n\n        let mercedRestaurants = document.querySelector(\".merced-restaurants\");\n            mercedRestaurants.classList.add('restaurant-appear');\n        let mercedYelp = document.querySelector(\".merced-yelp\");\n            mercedYelp.classList.add(\"yelp-appear\");\n\n        let berkeleyRestaurants = document.querySelector(\".berkeley-restaurants\");\n            berkeleyRestaurants.classList.add('restaurant-appear');\n        let berkeleyYelp = document.querySelector(\".berkeley-yelp\");\n            berkeleyYelp.classList.add(\"yelp-appear\");\n\n        let scRestaurants = document.querySelector(\".sc-restaurants\");\n            scRestaurants.classList.add('restaurant-appear');\n        let scYelp = document.querySelector(\".sc-yelp\");\n            scYelp.classList.add(\"yelp-appear\");\n\n\n        let sbRestaurants = document.querySelector(\".sb-restaurants\");\n            sbRestaurants.classList.add('restaurant-appear');\n        let sbYelp = document.querySelector(\".sb-yelp\");\n            sbYelp.classList.add(\"yelp-appear\");\n\n        let laRestaurants = document.querySelector(\".la-restaurants\");\n            laRestaurants.classList.add('restaurant-appear');\n        let laYelp = document.querySelector(\".la-yelp\");\n            laYelp.classList.add(\"yelp-appear\");\n\n        let riversideRestaurants = document.querySelector(\".riverside-restaurants\");\n            riversideRestaurants.classList.add('restaurant-appear');\n        let riversideYelp = document.querySelector(\".riverside-yelp\");\n            riversideYelp.classList.add(\"yelp-appear\");\n\n        let irvineRestaurants = document.querySelector(\".irvine-restaurants\");\n            irvineRestaurants.classList.add('restaurant-appear');\n        let irvineYelp = document.querySelector(\".irvine-yelp\");\n            irvineYelp.classList.add(\"yelp-appear\");\n\n        let sdRestaurants = document.querySelector(\".sd-restaurants\");\n            sdRestaurants.classList.add('restaurant-appear');\n        let sdYelp = document.querySelector(\".sd-yelp\");\n            sdYelp.classList.add(\"yelp-appear\");\n    }\n})\n\n\n\n\n\n//# sourceURL=webpack://college_town_facts/./src/eatery.js?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ \"./src/info.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_info__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _eatery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eatery */ \"./src/eatery.js\");\n/* harmony import */ var _eatery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eatery__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://college_town_facts/./src/index.js?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ (() => {

eval("window.addEventListener(\"DOMContentLoaded\", (event) => {\n    window.onscroll = function () { scrollFunction(); };\n\n    function scrollFunction() {\n        let davis = document.getElementById(\"davis\");\n        let davisRestaurants = document.querySelector(\".davis-restaurants\");\n        let davisYelp = document.querySelector(\".davis-yelp\");\n\n        let merced = document.getElementById(\"merced\");\n        let mercedRestaurants = document.querySelector(\".merced-restaurants\");\n        let mercedYelp = document.querySelector(\".merced-yelp\");\n        \n        let berkeley = document.getElementById(\"berkeley\");\n        let berkeleyRestaurants = document.querySelector(\".berkeley-restaurants\");\n        let berkeleyYelp = document.querySelector(\".berkeley-yelp\");\n        \n        let santacruz = document.getElementById(\"santacruz\");\n        let scRestaurants = document.querySelector(\".sc-restaurants\");\n        let scYelp = document.querySelector(\".sc-yelp\");\n        \n        let santabarbara = document.getElementById(\"santabarbara\");\n        let sbRestaurants = document.querySelector(\".sb-restaurants\");\n        let sbYelp = document.querySelector(\".sb-yelp\");\n        \n        let ucla = document.getElementById(\"ucla\");\n        let laRestaurants = document.querySelector(\".la-restaurants\");\n        let laYelp = document.querySelector(\".la-yelp\");\n        \n        let riverside = document.getElementById(\"riverside\");\n        let riversideRestaurants = document.querySelector(\".riverside-restaurants\");\n        let riversideYelp = document.querySelector(\".riverside-yelp\");\n        \n        let irvine = document.getElementById(\"irvine\");\n        let irvineRestaurants = document.querySelector(\".irvine-restaurants\");\n        let irvineYelp = document.querySelector(\".irvine-yelp\");\n        \n        let sandiego = document.getElementById(\"sandiego\");\n        let sdRestaurants = document.querySelector(\".sd-restaurants\");\n        let sdYelp = document.querySelector(\".sd-yelp\");\n\n        if(document.documentElement.scrollTop < 449) {\n            davis.classList.add(\"appear\");\n\n            merced.classList.remove(\"appear\");\n            mercedRestaurants.classList.remove(\"restaurant-appear\");\n            mercedYelp.classList.remove(\"yelp-appear\");\n\n            berkeley.classList.remove(\"appear\");\n\n            santacruz.classList.remove(\"appear\");\n\n            santabarbara.classList.remove(\"appear\");\n\n            ucla.classList.remove(\"appear\");\n\n            riverside.classList.remove(\"appear\");\n\n            irvine.classList.remove(\"appear\");\n\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 1119) && (document.documentElement.scrollTop > 450)) {\n            davis.classList.remove(\"appear\");\n            davisRestaurants.classList.remove(\"restaurant-appear\");\n            davisYelp.classList.remove(\"yelp-appear\");\n\n            merced.classList.add(\"appear\");\n\n            berkeley.classList.remove(\"appear\");\n            berkeleyRestaurants.classList.remove(\"restaurant-appear\");\n            berkeleyYelp.classList.remove(\"yelp-appear\");\n\n            santacruz.classList.remove(\"appear\");\n\n            santabarbara.classList.remove(\"appear\");\n\n            ucla.classList.remove(\"appear\");\n            \n            riverside.classList.remove(\"appear\");\n\n            irvine.classList.remove(\"appear\");\n\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 1799) && (document.documentElement.scrollTop > 1120)) {\n            davis.classList.remove(\"appear\");\n\n            merced.classList.remove(\"appear\");\n            mercedRestaurants.classList.remove(\"restaurant-appear\");\n            mercedYelp.classList.remove(\"yelp-appear\");\n\n            berkeley.classList.add(\"appear\");\n\n            santacruz.classList.remove(\"appear\");\n            scRestaurants.classList.remove(\"restaurant-appear\");\n            scYelp.classList.remove(\"yelp-appear\");\n\n            santabarbara.classList.remove(\"appear\");\n\n            ucla.classList.remove(\"appear\");\n\n            riverside.classList.remove(\"appear\");\n\n            irvine.classList.remove(\"appear\");\n\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 2479) && (document.documentElement.scrollTop > 1800)) {\n            davis.classList.remove(\"appear\");\n\n            merced.classList.remove(\"appear\");\n\n            berkeley.classList.remove(\"appear\");\n            berkeleyRestaurants.classList.remove(\"restaurant-appear\");\n            berkeleyYelp.classList.remove(\"yelp-appear\");\n\n            santacruz.classList.add(\"appear\");\n\n            santabarbara.classList.remove(\"appear\");\n            sbRestaurants.classList.remove(\"restaurant-appear\");\n            sbYelp.classList.remove(\"yelp-appear\");\n\n            ucla.classList.remove(\"appear\");\n\n            riverside.classList.remove(\"appear\");\n\n            irvine.classList.remove(\"appear\");\n\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 3149) && (document.documentElement.scrollTop > 2480)) {\n            davis.classList.remove(\"appear\");\n\n            merced.classList.remove(\"appear\");\n\n            berkeley.classList.remove(\"appear\");\n\n            santacruz.classList.remove(\"appear\");\n            scRestaurants.classList.remove(\"restaurant-appear\");\n            sbYelp.classList.remove(\"yelp-appear\");\n\n            santabarbara.classList.add(\"appear\");\n\n            ucla.classList.remove(\"appear\");\n            laRestaurants.classList.remove(\"restaurant-appear\");\n            laYelp.classList.remove(\"yelp-appear\");\n\n            riverside.classList.remove(\"appear\");\n\n            irvine.classList.remove(\"appear\");\n\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 3849) && (document.documentElement.scrollTop > 3150)) {\n            davis.classList.remove(\"appear\");\n\n            merced.classList.remove(\"appear\");\n\n            berkeley.classList.remove(\"appear\");\n\n            santacruz.classList.remove(\"appear\");\n\n            santabarbara.classList.remove(\"appear\");\n            sbRestaurants.classList.remove(\"restaurant-appear\");\n            sbYelp.classList.remove(\"yelp-appear\");\n\n            ucla.classList.add(\"appear\");\n\n            riverside.classList.remove(\"appear\");\n            riversideRestaurants.classList.remove(\"restaurant-appear\");\n            riversideYelp.classList.remove(\"yelp-appear\");\n\n            irvine.classList.remove(\"appear\");\n\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 4519) && (document.documentElement.scrollTop > 3850)) {\n            davis.classList.remove(\"appear\");\n\n            merced.classList.remove(\"appear\");\n\n            berkeley.classList.remove(\"appear\");\n\n            santacruz.classList.remove(\"appear\");\n\n            santabarbara.classList.remove(\"appear\");\n\n            ucla.classList.remove(\"appear\");\n            laRestaurants.classList.remove(\"restaurant-appear\");\n            laYelp.classList.remove(\"yelp-appear\");\n\n            riverside.classList.add(\"appear\");\n\n            irvine.classList.remove(\"appear\");\n            irvineRestaurants.classList.remove(\"restaurant-appear\");\n            irvineYelp.classList.remove(\"yelp-appear\");\n\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 5199) && (document.documentElement.scrollTop > 4520)) {\n            davis.classList.remove(\"appear\");\n\n            merced.classList.remove(\"appear\");\n\n            berkeley.classList.remove(\"appear\");\n\n            santacruz.classList.remove(\"appear\");\n\n            santabarbara.classList.remove(\"appear\");\n\n            ucla.classList.remove(\"appear\");\n\n            riverside.classList.remove(\"appear\");\n            riversideRestaurants.classList.remove(\"restaurant-appear\");\n            riversideYelp.classList.remove(\"yelp-appear\");\n            \n            irvine.classList.add(\"appear\");\n            \n            sandiego.classList.remove(\"appear\");\n            sdRestaurants.classList.remove(\"restaurant-appear\");\n            sdYelp.classList.remove(\"yelp-appear\");\n        } else if ((document.documentElement.scrollTop < 7000) && (document.documentElement.scrollTop > 5200)) {\n            davis.classList.remove(\"appear\");\n\n            merced.classList.remove(\"appear\");\n\n            berkeley.classList.remove(\"appear\");\n\n            santacruz.classList.remove(\"appear\");\n\n            santabarbara.classList.remove(\"appear\");\n\n            ucla.classList.remove(\"appear\");\n\n            riverside.classList.remove(\"appear\");\n\n            irvine.classList.remove(\"appear\");\n            irvineRestaurants.classList.remove(\"restaurant-appear\");\n            irvineYelp.classList.remove(\"yelp-appear\");\n\n            sandiego.classList.add(\"appear\");\n        }\n    }\n})\n\n//# sourceURL=webpack://college_town_facts/./src/info.js?");

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