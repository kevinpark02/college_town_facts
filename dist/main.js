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

/***/ "./src/berkeleyUi.js":
/*!***************************!*\
  !*** ./src/berkeleyUi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass BerkeleyUI {\n  constructor() {\n    this.desc = document.getElementById(\"berkeley-w-desc\");\n    this.temp = document.getElementById(\"berkeley-w-temp\");\n    this.icon = document.getElementById(\"berkeley-w-icon\");\n    this.humidity = document.getElementById(\"berkeley-w-humidity\");\n    this.feelsLike = document.getElementById(\"berkeley-w-feels-like\");\n    this.wind = document.getElementById(\"berkeley-w-wind\");\n  }\n\n  paint(weather) {\n    this.desc.textContent = weather.weather[0].main;\n    this.temp.textContent = `${Math.floor(\n      parseInt(weather.main.temp) * (9 / 5) - 459.67\n    )}\\u00B0F`;\n    this.icon.setAttribute(\n      \"src\",\n      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`\n    );\n    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;\n    this.feelsLike.textContent = `Feels Like: ${Math.floor(\n      parseInt(weather.main.feels_like) * (9 / 5) - 459.67\n    )}\\u00B0F`;\n    this.wind.textContent = `Wind: ${weather.wind.speed} mph`;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BerkeleyUI);\n\n\n//# sourceURL=webpack://college_town_facts/./src/berkeleyUi.js?");

/***/ }),

/***/ "./src/davisUi.js":
/*!************************!*\
  !*** ./src/davisUi.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass DavisUI {\n    constructor() {\n        this.desc = document.getElementById('davis-w-desc');\n        this.temp = document.getElementById('davis-w-temp');\n        this.icon = document.getElementById('davis-w-icon');\n        this.humidity = document.getElementById('davis-w-humidity');\n        this.feelsLike = document.getElementById('davis-w-feels-like');\n        this.wind = document.getElementById('davis-w-wind');\n    }\n\n    paint(weather) {\n        this.desc.textContent = weather.weather[0].main;\n        this.temp.textContent = `${Math.floor(\n          parseInt(weather.main.temp) * (9 / 5) - 459.67\n        )}\\u00B0F`;\n        this.icon.setAttribute(\"src\", `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);\n        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;\n        this.feelsLike.textContent = `Feels Like: ${Math.floor(\n          parseInt(weather.main.feels_like) * (9 / 5) - 459.67\n        )}\\u00B0F`;\n        this.wind.textContent = `Wind: ${weather.wind.speed} mph` \n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DavisUI);\n\n//# sourceURL=webpack://college_town_facts/./src/davisUi.js?");

/***/ }),

/***/ "./src/eatery.js":
/*!***********************!*\
  !*** ./src/eatery.js ***!
  \***********************/
/***/ (() => {

eval("window.addEventListener(\"DOMContentLoaded\", (event) => {\n    document.querySelector(\".davis-get-restaurants\").addEventListener('click', getRestaurants);\n    document.querySelector(\".merced-get-restaurants\").addEventListener('click', getRestaurants);\n    document.querySelector(\".berkeley-get-restaurants\").addEventListener('click', getRestaurants);\n    document.querySelector(\".sc-get-restaurants\").addEventListener('click', getRestaurants);\n    document.querySelector(\".sb-get-restaurants\").addEventListener('click', getRestaurants);\n    document.querySelector(\".la-get-restaurants\").addEventListener('click', getRestaurants);\n    document.querySelector(\".riverside-get-restaurants\").addEventListener('click', getRestaurants);\n    document.querySelector(\".irvine-get-restaurants\").addEventListener('click', getRestaurants);\n    document.querySelector(\".sd-get-restaurants\").addEventListener('click', getRestaurants);\n\n    function getRestaurants() {\n        let davisRestaurants = document.querySelector(\".davis-restaurants\");\n            davisRestaurants.classList.add(\"restaurant-appear\");\n        let davisYelp = document.querySelector(\".davis-yelp\");\n            davisYelp.classList.add(\"yelp-appear\");\n\n        let mercedRestaurants = document.querySelector(\".merced-restaurants\");\n            mercedRestaurants.classList.add('restaurant-appear');\n        let mercedYelp = document.querySelector(\".merced-yelp\");\n            mercedYelp.classList.add(\"yelp-appear\");\n\n        let berkeleyRestaurants = document.querySelector(\".berkeley-restaurants\");\n            berkeleyRestaurants.classList.add('restaurant-appear');\n        let berkeleyYelp = document.querySelector(\".berkeley-yelp\");\n            berkeleyYelp.classList.add(\"yelp-appear\");\n\n        let scRestaurants = document.querySelector(\".sc-restaurants\");\n            scRestaurants.classList.add('restaurant-appear');\n        let scYelp = document.querySelector(\".sc-yelp\");\n            scYelp.classList.add(\"yelp-appear\");\n\n\n        let sbRestaurants = document.querySelector(\".sb-restaurants\");\n            sbRestaurants.classList.add('restaurant-appear');\n        let sbYelp = document.querySelector(\".sb-yelp\");\n            sbYelp.classList.add(\"yelp-appear\");\n\n        let laRestaurants = document.querySelector(\".la-restaurants\");\n            laRestaurants.classList.add('restaurant-appear');\n        let laYelp = document.querySelector(\".la-yelp\");\n            laYelp.classList.add(\"yelp-appear\");\n\n        let riversideRestaurants = document.querySelector(\".riverside-restaurants\");\n            riversideRestaurants.classList.add('restaurant-appear');\n        let riversideYelp = document.querySelector(\".riverside-yelp\");\n            riversideYelp.classList.add(\"yelp-appear\");\n\n        let irvineRestaurants = document.querySelector(\".irvine-restaurants\");\n            irvineRestaurants.classList.add('restaurant-appear');\n        let irvineYelp = document.querySelector(\".irvine-yelp\");\n            irvineYelp.classList.add(\"yelp-appear\");\n\n        let sdRestaurants = document.querySelector(\".sd-restaurants\");\n            sdRestaurants.classList.add('restaurant-appear');\n        let sdYelp = document.querySelector(\".sd-yelp\");\n            sdYelp.classList.add(\"yelp-appear\");\n    }\n})\n\n\n\n\n\n//# sourceURL=webpack://college_town_facts/./src/eatery.js?");

/***/ }),

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _davisUi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./davisUi */ \"./src/davisUi.js\");\n/* harmony import */ var _mercedUi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mercedUi */ \"./src/mercedUi.js\");\n/* harmony import */ var _berkeleyUi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./berkeleyUi */ \"./src/berkeleyUi.js\");\n/* harmony import */ var _scUi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scUi */ \"./src/scUi.js\");\n/* harmony import */ var _sbUi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sbUi */ \"./src/sbUi.js\");\n/* harmony import */ var _laUi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./laUi */ \"./src/laUi.js\");\n/* harmony import */ var _riversideUi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./riversideUi */ \"./src/riversideUi.js\");\n\n\n\n\n\n\n\n\n\nconst davisUi = new _davisUi__WEBPACK_IMPORTED_MODULE_1__.default();\nconst mercedUi = new _mercedUi__WEBPACK_IMPORTED_MODULE_2__.default();\nconst berkeleyUi = new _berkeleyUi__WEBPACK_IMPORTED_MODULE_3__.default();\nconst scUi = new _scUi__WEBPACK_IMPORTED_MODULE_4__.default();\nconst sbUi = new _sbUi__WEBPACK_IMPORTED_MODULE_5__.default();\nconst laUi = new _laUi__WEBPACK_IMPORTED_MODULE_6__.default();\nconst riversideUi = new _riversideUi__WEBPACK_IMPORTED_MODULE_7__.default();\n\nconst davisWeather = new _weather__WEBPACK_IMPORTED_MODULE_0__.default(\"95616\");\nconst mercedWeather = new _weather__WEBPACK_IMPORTED_MODULE_0__.default(\"95344\");\nconst berkeleyWeather = new _weather__WEBPACK_IMPORTED_MODULE_0__.default(\"94704\");\nconst scWeather = new _weather__WEBPACK_IMPORTED_MODULE_0__.default(\"95064\");\nconst sbWeather = new _weather__WEBPACK_IMPORTED_MODULE_0__.default(\"93106\");\nconst laWeather = new _weather__WEBPACK_IMPORTED_MODULE_0__.default(\"90095\");\nconst riversideWeather = new _weather__WEBPACK_IMPORTED_MODULE_0__.default(\"92521\");\nconst irvineWeather = new _weather__WEBPACK_IMPORTED_MODULE_0__.default(\"92617\");\nconst sdWeather = new _weather__WEBPACK_IMPORTED_MODULE_0__.default(\"92037\");\n\ndocument.addEventListener(\"DOMContentLoaded\", getWeather);\n\nfunction getWeather() {\n        davisWeather.getWeather()\n            .then(results => {\n                davisUi.paint(results)\n            })\n            .catch(err => console.log(err))\n        \n        mercedWeather.getWeather()\n            .then(results => {\n                mercedUi.paint(results)\n            })\n            .catch(err => console.log(err))\n        \n        berkeleyWeather.getWeather()\n            .then(results => {\n                berkeleyUi.paint(results);\n            })\n            .catch(err => console.log(err))\n        \n        scWeather.getWeather()\n            .then(results => {\n                scUi.paint(results);\n            })\n            .catch(err => console.log(err))\n        \n        sbWeather.getWeather()\n            .then(results => {\n                sbUi.paint(results);\n            })\n            .catch(err => console.log(err))\n        \n        laWeather.getWeather()\n            .then(results => {\n                laUi.paint(results);\n            })\n            .catch(err => console.log(err))\n        \n        riversideWeather.getWeather()\n            .then(results => {\n                riversideUi.paint(results);\n            })\n            .catch(err => console.log(err))\n        \n        irvineWeather.getWeather()\n            .then(results => {\n                console.log(results);\n            })\n            .catch(err => console.log(err))\n        \n        sdWeather.getWeather()\n            .then(results => {\n                console.log(results);\n            })\n            .catch(err => console.log(err))\n}\n\n\n//# sourceURL=webpack://college_town_facts/./src/getWeather.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ \"./src/info.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_info__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _eatery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eatery */ \"./src/eatery.js\");\n/* harmony import */ var _eatery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eatery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle */ \"./src/toggle.js\");\n/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_toggle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWeather */ \"./src/getWeather.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://college_town_facts/./src/index.js?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ (() => {

eval("window.addEventListener(\"DOMContentLoaded\", (event) => {\n    window.onscroll = function () { scrollFunction(); };\n\n    function scrollFunction() {\n        let davis = document.getElementById(\"davis\");\n        let davisRestaurants = document.querySelector(\".davis-restaurants\");\n        let davisYelp = document.querySelector(\".davis-yelp\");\n\n        let merced = document.getElementById(\"merced\");\n        let mercedRestaurants = document.querySelector(\".merced-restaurants\");\n        let mercedYelp = document.querySelector(\".merced-yelp\");\n        \n        let berkeley = document.getElementById(\"berkeley\");\n        let berkeleyRestaurants = document.querySelector(\".berkeley-restaurants\");\n        let berkeleyYelp = document.querySelector(\".berkeley-yelp\");\n        \n        let santacruz = document.getElementById(\"santacruz\");\n        let scRestaurants = document.querySelector(\".sc-restaurants\");\n        let scYelp = document.querySelector(\".sc-yelp\");\n        \n        let santabarbara = document.getElementById(\"santabarbara\");\n        let sbRestaurants = document.querySelector(\".sb-restaurants\");\n        let sbYelp = document.querySelector(\".sb-yelp\");\n        \n        let ucla = document.getElementById(\"ucla\");\n        let laRestaurants = document.querySelector(\".la-restaurants\");\n        let laYelp = document.querySelector(\".la-yelp\");\n        \n        let riverside = document.getElementById(\"riverside\");\n        let riversideRestaurants = document.querySelector(\".riverside-restaurants\");\n        let riversideYelp = document.querySelector(\".riverside-yelp\");\n        \n        let irvine = document.getElementById(\"irvine\");\n        let irvineRestaurants = document.querySelector(\".irvine-restaurants\");\n        let irvineYelp = document.querySelector(\".irvine-yelp\");\n        \n        let sandiego = document.getElementById(\"sandiego\");\n        let sdRestaurants = document.querySelector(\".sd-restaurants\");\n        let sdYelp = document.querySelector(\".sd-yelp\");\n\n        if(document.documentElement.scrollTop < 449) {\n            davis.classList.add(\"appear\");\n\n            merced.classList.remove(\"appear\");\n            mercedRestaurants.classList.remove(\"restaurant-appear\");\n            mercedYelp.classList.remove(\"yelp-appear\");\n\n            berkeley.classList.remove(\"appear\");\n\n            santacruz.classList.remove(\"appear\");\n\n            santabarbara.classList.remove(\"appear\");\n\n            ucla.classList.remove(\"appear\");\n\n            riverside.classList.remove(\"appear\");\n\n            irvine.classList.remove(\"appear\");\n\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 1119) && (document.documentElement.scrollTop > 450)) {\n            davis.classList.remove(\"appear\");\n            davisRestaurants.classList.remove(\"restaurant-appear\");\n            davisYelp.classList.remove(\"yelp-appear\");\n\n            merced.classList.add(\"appear\");\n\n            berkeley.classList.remove(\"appear\");\n            berkeleyRestaurants.classList.remove(\"restaurant-appear\");\n            berkeleyYelp.classList.remove(\"yelp-appear\");\n\n            santacruz.classList.remove(\"appear\");\n\n            santabarbara.classList.remove(\"appear\");\n\n            ucla.classList.remove(\"appear\");\n            \n            riverside.classList.remove(\"appear\");\n\n            irvine.classList.remove(\"appear\");\n\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 1799) && (document.documentElement.scrollTop > 1120)) {\n            davis.classList.remove(\"appear\");\n\n            merced.classList.remove(\"appear\");\n            mercedRestaurants.classList.remove(\"restaurant-appear\");\n            mercedYelp.classList.remove(\"yelp-appear\");\n\n            berkeley.classList.add(\"appear\");\n\n            santacruz.classList.remove(\"appear\");\n            scRestaurants.classList.remove(\"restaurant-appear\");\n            scYelp.classList.remove(\"yelp-appear\");\n\n            santabarbara.classList.remove(\"appear\");\n\n            ucla.classList.remove(\"appear\");\n\n            riverside.classList.remove(\"appear\");\n\n            irvine.classList.remove(\"appear\");\n\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 2479) && (document.documentElement.scrollTop > 1800)) {\n            davis.classList.remove(\"appear\");\n\n            merced.classList.remove(\"appear\");\n\n            berkeley.classList.remove(\"appear\");\n            berkeleyRestaurants.classList.remove(\"restaurant-appear\");\n            berkeleyYelp.classList.remove(\"yelp-appear\");\n\n            santacruz.classList.add(\"appear\");\n\n            santabarbara.classList.remove(\"appear\");\n            sbRestaurants.classList.remove(\"restaurant-appear\");\n            sbYelp.classList.remove(\"yelp-appear\");\n\n            ucla.classList.remove(\"appear\");\n\n            riverside.classList.remove(\"appear\");\n\n            irvine.classList.remove(\"appear\");\n\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 3149) && (document.documentElement.scrollTop > 2480)) {\n            davis.classList.remove(\"appear\");\n\n            merced.classList.remove(\"appear\");\n\n            berkeley.classList.remove(\"appear\");\n\n            santacruz.classList.remove(\"appear\");\n            scRestaurants.classList.remove(\"restaurant-appear\");\n            sbYelp.classList.remove(\"yelp-appear\");\n\n            santabarbara.classList.add(\"appear\");\n\n            ucla.classList.remove(\"appear\");\n            laRestaurants.classList.remove(\"restaurant-appear\");\n            laYelp.classList.remove(\"yelp-appear\");\n\n            riverside.classList.remove(\"appear\");\n\n            irvine.classList.remove(\"appear\");\n\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 3849) && (document.documentElement.scrollTop > 3150)) {\n            davis.classList.remove(\"appear\");\n\n            merced.classList.remove(\"appear\");\n\n            berkeley.classList.remove(\"appear\");\n\n            santacruz.classList.remove(\"appear\");\n\n            santabarbara.classList.remove(\"appear\");\n            sbRestaurants.classList.remove(\"restaurant-appear\");\n            sbYelp.classList.remove(\"yelp-appear\");\n\n            ucla.classList.add(\"appear\");\n\n            riverside.classList.remove(\"appear\");\n            riversideRestaurants.classList.remove(\"restaurant-appear\");\n            riversideYelp.classList.remove(\"yelp-appear\");\n\n            irvine.classList.remove(\"appear\");\n\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 4519) && (document.documentElement.scrollTop > 3850)) {\n            davis.classList.remove(\"appear\");\n\n            merced.classList.remove(\"appear\");\n\n            berkeley.classList.remove(\"appear\");\n\n            santacruz.classList.remove(\"appear\");\n\n            santabarbara.classList.remove(\"appear\");\n\n            ucla.classList.remove(\"appear\");\n            laRestaurants.classList.remove(\"restaurant-appear\");\n            laYelp.classList.remove(\"yelp-appear\");\n\n            riverside.classList.add(\"appear\");\n\n            irvine.classList.remove(\"appear\");\n            irvineRestaurants.classList.remove(\"restaurant-appear\");\n            irvineYelp.classList.remove(\"yelp-appear\");\n\n            sandiego.classList.remove(\"appear\");\n        } else if ((document.documentElement.scrollTop < 5199) && (document.documentElement.scrollTop > 4520)) {\n            davis.classList.remove(\"appear\");\n\n            merced.classList.remove(\"appear\");\n\n            berkeley.classList.remove(\"appear\");\n\n            santacruz.classList.remove(\"appear\");\n\n            santabarbara.classList.remove(\"appear\");\n\n            ucla.classList.remove(\"appear\");\n\n            riverside.classList.remove(\"appear\");\n            riversideRestaurants.classList.remove(\"restaurant-appear\");\n            riversideYelp.classList.remove(\"yelp-appear\");\n            \n            irvine.classList.add(\"appear\");\n            \n            sandiego.classList.remove(\"appear\");\n            sdRestaurants.classList.remove(\"restaurant-appear\");\n            sdYelp.classList.remove(\"yelp-appear\");\n        } else if ((document.documentElement.scrollTop < 7000) && (document.documentElement.scrollTop > 5200)) {\n            davis.classList.remove(\"appear\");\n\n            merced.classList.remove(\"appear\");\n\n            berkeley.classList.remove(\"appear\");\n\n            santacruz.classList.remove(\"appear\");\n\n            santabarbara.classList.remove(\"appear\");\n\n            ucla.classList.remove(\"appear\");\n\n            riverside.classList.remove(\"appear\");\n\n            irvine.classList.remove(\"appear\");\n            irvineRestaurants.classList.remove(\"restaurant-appear\");\n            irvineYelp.classList.remove(\"yelp-appear\");\n\n            sandiego.classList.add(\"appear\");\n        }\n    }\n})\n\n//# sourceURL=webpack://college_town_facts/./src/info.js?");

/***/ }),

/***/ "./src/laUi.js":
/*!*********************!*\
  !*** ./src/laUi.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass LaUI {\n  constructor() {\n    this.desc = document.getElementById(\"la-w-desc\");\n    this.temp = document.getElementById(\"la-w-temp\");\n    this.icon = document.getElementById(\"la-w-icon\");\n    this.humidity = document.getElementById(\"la-w-humidity\");\n    this.feelsLike = document.getElementById(\"la-w-feels-like\");\n    this.wind = document.getElementById(\"la-w-wind\");\n  }\n\n  paint(weather) {\n    this.desc.textContent = weather.weather[0].main;\n    this.temp.textContent = `${Math.floor(\n      parseInt(weather.main.temp) * (9 / 5) - 459.67\n    )}\\u00B0F`;\n    this.icon.setAttribute(\n      \"src\",\n      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`\n    );\n    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;\n    this.feelsLike.textContent = `Feels Like: ${Math.floor(\n      parseInt(weather.main.feels_like) * (9 / 5) - 459.67\n    )}\\u00B0F`;\n    this.wind.textContent = `Wind: ${weather.wind.speed} mph`;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LaUI);\n\n\n//# sourceURL=webpack://college_town_facts/./src/laUi.js?");

/***/ }),

/***/ "./src/mercedUi.js":
/*!*************************!*\
  !*** ./src/mercedUi.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass MercedUI {\n  constructor() {\n    this.desc = document.getElementById(\"merced-w-desc\");\n    this.temp = document.getElementById(\"merced-w-temp\");\n    this.icon = document.getElementById(\"merced-w-icon\");\n    this.humidity = document.getElementById(\"merced-w-humidity\");\n    this.feelsLike = document.getElementById(\"merced-w-feels-like\");\n    this.wind = document.getElementById(\"merced-w-wind\");\n  }\n\n  paint(weather) {\n    this.desc.textContent = weather.weather[0].main;\n    this.temp.textContent = `${Math.floor(\n      parseInt(weather.main.temp) * (9 / 5) - 459.67\n    )}\\u00B0F`;\n    this.icon.setAttribute(\n      \"src\",\n      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`\n    );\n    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;\n    this.feelsLike.textContent = `Feels Like: ${Math.floor(\n      parseInt(weather.main.feels_like) * (9 / 5) - 459.67\n    )}\\u00B0F`;\n    this.wind.textContent = `Wind: ${weather.wind.speed} mph`;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MercedUI);\n\n\n//# sourceURL=webpack://college_town_facts/./src/mercedUi.js?");

/***/ }),

/***/ "./src/riversideUi.js":
/*!****************************!*\
  !*** ./src/riversideUi.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass RiversideUI {\n  constructor() {\n    this.desc = document.getElementById(\"riverside-w-desc\");\n    this.temp = document.getElementById(\"riverside-w-temp\");\n    this.icon = document.getElementById(\"riverside-w-icon\");\n    this.humidity = document.getElementById(\"riverside-w-humidity\");\n    this.feelsLike = document.getElementById(\"riverside-w-feels-like\");\n    this.wind = document.getElementById(\"riverside-w-wind\");\n  }\n\n  paint(weather) {\n    this.desc.textContent = weather.weather[0].main;\n    this.temp.textContent = `${Math.floor(\n      parseInt(weather.main.temp) * (9 / 5) - 459.67\n    )}\\u00B0F`;\n    this.icon.setAttribute(\n      \"src\",\n      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`\n    );\n    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;\n    this.feelsLike.textContent = `Feels Like: ${Math.floor(\n      parseInt(weather.main.feels_like) * (9 / 5) - 459.67\n    )}\\u00B0F`;\n    this.wind.textContent = `Wind: ${weather.wind.speed} mph`;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RiversideUI);\n\n\n//# sourceURL=webpack://college_town_facts/./src/riversideUi.js?");

/***/ }),

/***/ "./src/sbUi.js":
/*!*********************!*\
  !*** ./src/sbUi.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass SbUI {\n  constructor() {\n    this.desc = document.getElementById(\"sb-w-desc\");\n    this.temp = document.getElementById(\"sb-w-temp\");\n    this.icon = document.getElementById(\"sb-w-icon\");\n    this.humidity = document.getElementById(\"sb-w-humidity\");\n    this.feelsLike = document.getElementById(\"sb-w-feels-like\");\n    this.wind = document.getElementById(\"sb-w-wind\");\n  }\n\n  paint(weather) {\n    this.desc.textContent = weather.weather[0].main;\n    this.temp.textContent = `${Math.floor(\n      parseInt(weather.main.temp) * (9 / 5) - 459.67\n    )}\\u00B0F`;\n    this.icon.setAttribute(\n      \"src\",\n      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`\n    );\n    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;\n    this.feelsLike.textContent = `Feels Like: ${Math.floor(\n      parseInt(weather.main.feels_like) * (9 / 5) - 459.67\n    )}\\u00B0F`;\n    this.wind.textContent = `Wind: ${weather.wind.speed} mph`;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SbUI);\n\n\n//# sourceURL=webpack://college_town_facts/./src/sbUi.js?");

/***/ }),

/***/ "./src/scUi.js":
/*!*********************!*\
  !*** ./src/scUi.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass ScUI {\n  constructor() {\n    this.desc = document.getElementById(\"sc-w-desc\");\n    this.temp = document.getElementById(\"sc-w-temp\");\n    this.icon = document.getElementById(\"sc-w-icon\");\n    this.humidity = document.getElementById(\"sc-w-humidity\");\n    this.feelsLike = document.getElementById(\"sc-w-feels-like\");\n    this.wind = document.getElementById(\"sc-w-wind\");\n  }\n\n  paint(weather) {\n    this.desc.textContent = weather.weather[0].main;\n    this.temp.textContent = `${Math.floor(\n      parseInt(weather.main.temp) * (9 / 5) - 459.67\n    )}\\u00B0F`;\n    this.icon.setAttribute(\n      \"src\",\n      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`\n    );\n    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;\n    this.feelsLike.textContent = `Feels Like: ${Math.floor(\n      parseInt(weather.main.feels_like) * (9 / 5) - 459.67\n    )}\\u00B0F`;\n    this.wind.textContent = `Wind: ${weather.wind.speed} mph`;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScUI);\n\n\n//# sourceURL=webpack://college_town_facts/./src/scUi.js?");

/***/ }),

/***/ "./src/toggle.js":
/*!***********************!*\
  !*** ./src/toggle.js ***!
  \***********************/
/***/ (() => {

eval("window.addEventListener(\"DOMContentLoaded\", (event) => {\n    document.querySelector(\".davis-demo-btn\").addEventListener('click', showDavisDemo);\n    document.querySelector(\".davis-weather-btn\").addEventListener('click', showDavisWeather);\n    \n    document.querySelector(\".merced-demo-btn\").addEventListener('click', showMercedDemo);\n    document.querySelector(\".merced-weather-btn\").addEventListener('click', showMercedWeather);\n    \n    document.querySelector(\".berkeley-demo-btn\").addEventListener('click', showBerkeleyDemo);\n    document.querySelector(\".berkeley-weather-btn\").addEventListener('click', showBerkeleyWeather);\n\n    document.querySelector(\".sc-demo-btn\").addEventListener('click', showScDemo);\n    document.querySelector(\".sc-weather-btn\").addEventListener('click', showScWeather);\n\n    document.querySelector(\".sb-demo-btn\").addEventListener('click', showSbDemo);\n    document.querySelector(\".sb-weather-btn\").addEventListener('click', showSbWeather);\n\n    document.querySelector(\".la-demo-btn\").addEventListener('click', showLaDemo);\n    document.querySelector(\".la-weather-btn\").addEventListener('click', showLaWeather);\n    \n    document.querySelector(\".riverside-demo-btn\").addEventListener('click', showRiversideDemo);\n    document.querySelector(\".riverside-weather-btn\").addEventListener('click', showRiversideWeather);\n\n\n    function showDavisDemo() {\n        let davisDemo = document.getElementById('davis-container');\n            davisDemo.classList.remove(\"top-hide\")\n        let davisWeather = document.querySelector('.davis-weather-info');\n            davisWeather.classList.remove(\"top-show\")\n    }\n    \n    function showDavisWeather() {\n        let davisDemo = document.getElementById(\"davis-container\");\n            davisDemo.classList.add(\"top-hide\");\n        let davisWeather = document.querySelector('.davis-weather-info');\n            davisWeather.classList.add(\"top-show\");\n    }\n\n    function showMercedDemo() {\n        let davisDemo = document.getElementById('merced-container');\n            davisDemo.classList.remove(\"top-hide\")\n        let davisWeather = document.querySelector('.merced-weather-info');\n            davisWeather.classList.remove(\"top-show\")\n    }\n    \n    function showMercedWeather() {\n        let davisDemo = document.getElementById(\"merced-container\");\n            davisDemo.classList.add(\"top-hide\");\n        let davisWeather = document.querySelector('.merced-weather-info');\n            davisWeather.classList.add(\"top-show\");\n    }\n\n    function showBerkeleyDemo() {\n        let davisDemo = document.getElementById('berkeley-container');\n            davisDemo.classList.remove(\"top-hide\")\n        let davisWeather = document.querySelector('.berkeley-weather-info');\n            davisWeather.classList.remove(\"top-show\")\n    }\n    \n    function showBerkeleyWeather() {\n        let davisDemo = document.getElementById(\"berkeley-container\");\n            davisDemo.classList.add(\"top-hide\");\n        let davisWeather = document.querySelector('.berkeley-weather-info');\n            davisWeather.classList.add(\"top-show\");\n    }\n\n    function showScDemo() {\n        let davisDemo = document.getElementById('sc-container');\n            davisDemo.classList.remove(\"top-hide\")\n        let davisWeather = document.querySelector('.sc-weather-info');\n            davisWeather.classList.remove(\"top-show\")\n    }\n    \n    function showScWeather() {\n        let davisDemo = document.getElementById(\"sc-container\");\n            davisDemo.classList.add(\"top-hide\");\n        let davisWeather = document.querySelector('.sc-weather-info');\n            davisWeather.classList.add(\"top-show\");\n    }\n\n    function showSbDemo() {\n        let davisDemo = document.getElementById('sb-container');\n            davisDemo.classList.remove(\"top-hide\")\n        let davisWeather = document.querySelector('.sb-weather-info');\n            davisWeather.classList.remove(\"top-show\")\n    }\n    \n    function showSbWeather() {\n        let davisDemo = document.getElementById(\"sb-container\");\n            davisDemo.classList.add(\"top-hide\");\n        let davisWeather = document.querySelector('.sb-weather-info');\n            davisWeather.classList.add(\"top-show\");\n    }\n\n    function showLaDemo() {\n        let davisDemo = document.getElementById('la-container');\n            davisDemo.classList.remove(\"top-hide\")\n        let davisWeather = document.querySelector('.la-weather-info');\n            davisWeather.classList.remove(\"top-show\")\n    }\n    \n    function showLaWeather() {\n        let davisDemo = document.getElementById(\"la-container\");\n            davisDemo.classList.add(\"top-hide\");\n        let davisWeather = document.querySelector('.la-weather-info');\n            davisWeather.classList.add(\"top-show\");\n    }\n\n    function showRiversideDemo() {\n        let davisDemo = document.getElementById('riverside-container');\n            davisDemo.classList.remove(\"top-hide\")\n        let davisWeather = document.querySelector('.riverside-weather-info');\n            davisWeather.classList.remove(\"top-show\")\n    }\n    \n    function showRiversideWeather() {\n        let davisDemo = document.getElementById(\"riverside-container\");\n            davisDemo.classList.add(\"top-hide\");\n        let davisWeather = document.querySelector('.riverside-weather-info');\n            davisWeather.classList.add(\"top-show\");\n    }\n})\n\n//# sourceURL=webpack://college_town_facts/./src/toggle.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass Weather {\n    constructor(zip) {\n        this.apiKey = \"39b50f75fae6ac926b52f2ad94f519e7\";\n        this.zip = zip\n    }\n\n    // Fetch weather from API\n\n    async getWeather() {\n        const response = await fetch(\n          `https://api.openweathermap.org/data/2.5/weather?zip=${this.zip},us&appid=${this.apiKey}`\n        );\n\n        const responseData = await response.json();\n\n        return responseData;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Weather);\n\n//# sourceURL=webpack://college_town_facts/./src/weather.js?");

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