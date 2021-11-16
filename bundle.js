/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dataretriever__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dataretriever */ \"./src/modules/dataretriever.js\");\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/filter */ \"./src/modules/filter.js\");\n\r\n\r\n\r\n\r\n(0,_modules_dataretriever__WEBPACK_IMPORTED_MODULE_0__.challengesData)(_modules_render__WEBPACK_IMPORTED_MODULE_1__.renderChallenges);\n\n//# sourceURL=webpack://02-esc-website/./src/main.js?");

/***/ }),

/***/ "./src/modules/dataretriever.js":
/*!**************************************!*\
  !*** ./src/modules/dataretriever.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"challengesData\": () => (/* binding */ challengesData)\n/* harmony export */ });\nlet challengesData = async (func) => {\r\n    let apiUrl = 'https://lernia-sjj-assignments.vercel.app/api/challenges';\r\n\r\n    try {\r\n        const response = await fetch(apiUrl);\r\n        const data = await response.json();\r\n    \r\n        // renderChallenges(data.challenges);\r\n        return func(data.challenges);\r\n        \r\n\r\n    } catch (error){\r\n        console.log(error);\r\n    }\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack://02-esc-website/./src/modules/dataretriever.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterArray\": () => (/* binding */ filterArray)\n/* harmony export */ });\n// Filters obj\r\nlet filters = {\r\n    byOnline: true,\r\n    byOnsite: true,\r\n    byLabel: false,\r\n    byRating: false,\r\n    byText: false\r\n};\r\n\r\n// Filter variables\r\nlet labelsFilters = ['bash'];\r\nlet minRatingFilter = 2;\r\nlet maxRatingFilter = 5;\r\nlet textFilter = 'try';\r\n\r\nlet filterArray = function (array) {\r\n\r\n    let newArray = [];\r\n    let filteredArray = [];\r\n    \r\n    if (filters.byOnline) {\r\n        filteredArray = array.filter(obj => {\r\n            return obj.type === 'online';\r\n        })\r\n        // Using spread to \"create\"/concat a new array with all values\r\n        newArray = [...newArray, ...filteredArray];\r\n    }\r\n\r\n    if (filters.byOnsite) {\r\n        filteredArray = array.filter(obj => {\r\n            return obj.type === 'onsite';\r\n        })\r\n        // Using spread to \"create\"/concat a new array with all values\r\n        newArray = [...newArray, ...filteredArray];\r\n    }\r\n\r\n    if (filters.byLabel) {\r\n        newArray = newArray.filter(obj => {\r\n            for(let i = 0; i < labelsFilters.length; i++) {\r\n                return obj.labels.includes(labelsFilters[i]);\r\n            }\r\n        })\r\n    }\r\n\r\n    if (filters.byRating) {\r\n        newArray = newArray.filter(obj => {\r\n            if(obj.rating >= minRatingFilter && obj.rating <= maxRatingFilter) {\r\n                return obj;\r\n            }\r\n        });\r\n    }\r\n\r\n    if (filters.byText) {\r\n        newArray = newArray.filter(obj => {\r\n            // returns obj with title or description that includes the value from textFilter\r\n            return obj.description.toUpperCase().includes(textFilter.toUpperCase()) || obj.title.toUpperCase().includes(textFilter.toUpperCase());\r\n        });\r\n    }\r\n\r\n    console.log(newArray);\r\n    return newArray;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://02-esc-website/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderChallenges\": () => (/* binding */ renderChallenges)\n/* harmony export */ });\nconst renderChallenges = function (arr) {\r\n \r\n    // Check that input is array with values\r\n    if (arr === undefined || arr.length < 1) {\r\n        let noChallenges = document.createElement('h3');\r\n        // create new className in CSS and change code to add created className\r\n        noChallenges.classList.add('challenge-title');\r\n        noChallenges.innerHTML = \"No matching challenges\";\r\n\r\n        challengesList.appendChild(noChallenges);\r\n\r\n    } else {\r\n\r\n        // Creates array of labels to be rendered as filter options\r\n        let labelsArray = [];\r\n\r\n        arr.map(obj => {\r\n            obj.labels.forEach(label => {\r\n                if(!labelsArray.includes(label)) {\r\n                    labelsArray.push(label);\r\n                }\r\n            });\r\n        });\r\n\r\n        // Loops over all filtered objs in arr to render elements on page\r\n        filterArray(arr).forEach(obj => {\r\n            // Create elements for challenge card\r\n            let challengesItem = document.createElement('li');\r\n            challengesItem.classList.add('challenges-item');\r\n\r\n            let challengesPicture = document.createElement('img')\r\n            challengesPicture.classList.add('challenge-picture');\r\n            challengesPicture.src=obj.image;\r\n\r\n            let challengeTitle = document.createElement('h3');\r\n            challengeTitle.classList.add('challenge-title');\r\n            challengeTitle.innerHTML = obj.title;\r\n\r\n            let challengeMeta = document.createElement('div');\r\n            challengeMeta.classList.add('challenge-meta');\r\n\r\n            let challengeRating = document.createElement('ul');\r\n            challengeRating.classList.add('challenge-rating');\r\n\r\n            // Create elements for rating stars\r\n            for(let i = 0; i < Math.floor(obj.rating); i++) {\r\n                let challengeRatingStar = document.createElement('li');\r\n                challengeRatingStar.classList.add('challenge-rating-star');\r\n                challengeRatingStar.classList.add('on');\r\n                challengeRating.appendChild(challengeRatingStar);\r\n        \r\n            };\r\n\r\n            for(let i = Math.floor(obj.rating); i < 5; i++) {\r\n                let challengeRatingStar = document.createElement('li');\r\n                challengeRatingStar.classList.add('challenge-rating-star');\r\n                challengeRatingStar.classList.add('off');\r\n                challengeRating.appendChild(challengeRatingStar);\r\n            };\r\n\r\n            let challengeSize = document.createElement('small');\r\n            challengeSize.classList.add('challenge-size');\r\n            challengeSize.innerHTML = `${obj.minParticipants}-${obj.maxParticipants} participants`;\r\n\r\n            let challengeDescription = document.createElement('p');\r\n            challengeDescription.classList.add('challenge-description');\r\n            challengeDescription.innerHTML = obj.description\r\n\r\n            let challengeCta = document.createElement('a');\r\n            challengeCta.classList.add('challenge-cta');\r\n            challengeCta.innerHTML = \"Book the room\";\r\n\r\n            // Render/append on site\r\n            challengesList.appendChild(challengesItem);\r\n            challengesItem.appendChild(challengesPicture);\r\n            challengesItem.appendChild(challengeTitle);\r\n            challengesItem.appendChild(challengeMeta)\r\n            challengeMeta.appendChild(challengeRating);\r\n            challengeMeta.appendChild(challengeSize);\r\n            challengesItem.appendChild(challengeDescription);\r\n            challengesItem.appendChild(challengeCta);\r\n                        \r\n        });\r\n    };\r\n};\r\n\r\n\n\n//# sourceURL=webpack://02-esc-website/./src/modules/render.js?");

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