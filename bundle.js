/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_DataRetriever__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DataRetriever */ \"./src/modules/DataRetriever.js\");\n/* harmony import */ var _modules_ChallengeGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ChallengeGrid */ \"./src/modules/ChallengeGrid.js\");\n\r\n\r\n\r\nconst container = document.querySelector('.challenges-list');\r\nconst retriever = new _modules_DataRetriever__WEBPACK_IMPORTED_MODULE_0__.DataRetriever();\r\nconst grid = new _modules_ChallengeGrid__WEBPACK_IMPORTED_MODULE_1__.ChallengeGrid(retriever, container);\r\n\r\ngrid.run()\n\n//# sourceURL=webpack://02-esc-website/./src/main.js?");

/***/ }),

/***/ "./src/modules/ChallengeGrid.js":
/*!**************************************!*\
  !*** ./src/modules/ChallengeGrid.js ***!
  \**************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (134:8)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|                 filterBoard.style.display = \\\"none\\\";\\n|             }\\n>         }\\n|         else {                   \\n|             for (i; i < starLength; ++i) {\");\n\n//# sourceURL=webpack://02-esc-website/./src/modules/ChallengeGrid.js?");

/***/ }),

/***/ "./src/modules/DataRetriever.js":
/*!**************************************!*\
  !*** ./src/modules/DataRetriever.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataRetriever\": () => (/* binding */ DataRetriever)\n/* harmony export */ });\nclass DataRetriever {\r\n    constructor() {\r\n        this.challenges = null\r\n    }\r\n    async load() {\r\n        const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';\r\n        if(!this.challenges) {\r\n            try {\r\n                const response = await fetch(url);\r\n                const data = await response.json();\r\n                this.challenges = data.challenges\r\n            } catch (error) {\r\n                console.log(error)\r\n            }    \r\n        }\r\n\r\n        return this.challenges;\r\n    }\r\n}\n\n//# sourceURL=webpack://02-esc-website/./src/modules/DataRetriever.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;