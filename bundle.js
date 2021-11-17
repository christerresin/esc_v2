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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_DataRetriever__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DataRetriever */ \"./src/modules/DataRetriever.js\");\n/* harmony import */ var _modules_ChallengeGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ChallengeGrid */ \"./src/modules/ChallengeGrid.js\");\n\r\n\r\n\r\nconst container = document.querySelector('.challenges-list');\r\nconst retriever = new _modules_DataRetriever__WEBPACK_IMPORTED_MODULE_0__.DataRetriever();\r\nconst grid = new _modules_ChallengeGrid__WEBPACK_IMPORTED_MODULE_1__.ChallengeGrid(retriever, container);\r\n\r\ngrid.run()\n\n//# sourceURL=webpack://02-esc-website/./src/main.js?");

/***/ }),

/***/ "./src/modules/Challenge.js":
/*!**********************************!*\
  !*** ./src/modules/Challenge.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Challenge\": () => (/* binding */ Challenge)\n/* harmony export */ });\nclass Challenge {\r\n    constructor(data) {\r\n        this.title = data.title;\r\n        this.rating = data.rating;\r\n        this.image = data.image;\r\n        this.description = data.description;\r\n        this.minParticipants = data.minParticipants;\r\n        this.maxParticipants = data.maxParticipants;\r\n    }\r\n\r\n    render() {\r\n        // Create elements for challenge card\r\n        let challengesItem = document.createElement('li');\r\n        challengesItem.classList.add('challenges-item');\r\n        \r\n        let challengesPicture = document.createElement('img')\r\n        challengesPicture.classList.add('challenge-picture');\r\n        challengesPicture.src=this.image;\r\n\r\n        let challengeTitle = document.createElement('h3');\r\n        challengeTitle.classList.add('challenge-title');\r\n        challengeTitle.innerHTML = this.title;\r\n\r\n        let challengeMeta = document.createElement('div');\r\n        challengeMeta.classList.add('challenge-meta');\r\n\r\n        let challengeRating = document.createElement('ul');\r\n        challengeRating.classList.add('challenge-rating');\r\n\r\n        // Create elements for rating stars\r\n        for(let i = 0; i < Math.floor(this.rating); i++) {\r\n            let challengeRatingStar = document.createElement('li');\r\n            challengeRatingStar.classList.add('challenge-rating-star');\r\n            challengeRatingStar.classList.add('on');\r\n            challengeRating.appendChild(challengeRatingStar);\r\n    \r\n        };\r\n\r\n        for(let i = Math.floor(this.rating); i < 5; i++) {\r\n            let challengeRatingStar = document.createElement('li');\r\n            challengeRatingStar.classList.add('challenge-rating-star');\r\n            challengeRatingStar.classList.add('off');\r\n            challengeRating.appendChild(challengeRatingStar);\r\n        };\r\n\r\n        let challengeSize = document.createElement('small');\r\n        challengeSize.classList.add('challenge-size');\r\n        challengeSize.innerHTML = `${this.minParticipants}-${this.maxParticipants} participants`;\r\n\r\n        let challengeDescription = document.createElement('p');\r\n        challengeDescription.classList.add('challenge-description');\r\n        challengeDescription.innerHTML = this.description\r\n\r\n        let challengeCta = document.createElement('a');\r\n        challengeCta.classList.add('challenge-cta');\r\n        challengeCta.innerHTML = \"Book the room\";\r\n\r\n        // Render/append on site\r\n        challengesItem.appendChild(challengesPicture);\r\n        challengesItem.appendChild(challengeTitle);\r\n        challengesItem.appendChild(challengeMeta)\r\n        challengeMeta.appendChild(challengeRating);\r\n        challengeMeta.appendChild(challengeSize);\r\n        challengesItem.appendChild(challengeDescription);\r\n        challengesItem.appendChild(challengeCta);\r\n\r\n        return challengesItem;\r\n    }\r\n}\n\n//# sourceURL=webpack://02-esc-website/./src/modules/Challenge.js?");

/***/ }),

/***/ "./src/modules/ChallengeGrid.js":
/*!**************************************!*\
  !*** ./src/modules/ChallengeGrid.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChallengeGrid\": () => (/* binding */ ChallengeGrid)\n/* harmony export */ });\n/* harmony import */ var _Challenge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Challenge */ \"./src/modules/Challenge.js\");\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter */ \"./src/modules/Filter.js\");\n\r\n\r\n\r\nclass ChallengeGrid {\r\n    constructor(retriever, container) {\r\n        this.retriever = retriever;\r\n        this.container = container;\r\n        this.challengeItems = [];\r\n        this.filters = {\r\n            byOnline: true,\r\n            byOnsite: true,\r\n            byLabel: false,\r\n            byRating: false,\r\n            byText: false,\r\n            labelsFilters: [],\r\n            minRatingFilter: 2,\r\n            maxRatingFilter: 5,\r\n            textFilter: ''\r\n        };\r\n        this.labelsArray = [];\r\n    }\r\n\r\n    async run() {\r\n        this.challenges = await this.retriever.load();\r\n\r\n        // Creates array of all labels in all challenges\r\n        this.challenges.forEach(obj => {\r\n            obj.labels.forEach(label => {\r\n                if(!this.labelsArray.includes(label)) {\r\n                    this.labelsArray.push(label);\r\n                    const labelButton = document.createElement('span');\r\n                    labelButton.style.height = '50px';\r\n                    labelButton.style.marginRight = '10px'\r\n                    labelButton.innerText = label;\r\n                    const labelsEl = document.querySelector('.labels');\r\n                    labelsEl.appendChild(labelButton);\r\n                    labelButton.addEventListener('click', (event) => {\r\n                        const value = event.target.innerText;\r\n                        const index = this.filters.labelsFilters.indexOf(value);\r\n                        this.filters.byLabel = true;\r\n                        this.filters.labelsFilters.includes(value) ? this.filters.labelsFilters.splice(index, 1) : this.filters.labelsFilters.push(value);\r\n                        // !! REMOVE ME LATER - test to display labels to filter\r\n                        console.log(this.filters.labelsFilters)\r\n                        this.rerender()\r\n                    })\r\n                }\r\n            });\r\n        });\r\n        \r\n        this.render();\r\n    }\r\n\r\n    render() {\r\n        const filterInstance = new _Filter__WEBPACK_IMPORTED_MODULE_1__.Filter(this.filters);\r\n        const challengeArray = filterInstance.filterArray(this.challenges)\r\n        challengeArray.forEach(challengeData => {\r\n        const challengeInstance = new _Challenge__WEBPACK_IMPORTED_MODULE_0__.Challenge(challengeData);\r\n        const challengeItem = challengeInstance.render();\r\n        this.container.appendChild(challengeItem);\r\n        this.challengeItems.push(challengeData);\r\n        })\r\n\r\n        // Filter by text or char on desription and title\r\n        const filterTextBar = document.querySelector('.filterTextBar');\r\n        filterTextBar.addEventListener('keyup', () => {\r\n            this.filters.byText = true;\r\n            this.filters.textFilter = filterTextBar.value;\r\n            this.rerender()\r\n        })\r\n        \r\n    }\r\n\r\n    rerender() {\r\n        this.container.innerHTML = '';\r\n\r\n        const filterInstance = new _Filter__WEBPACK_IMPORTED_MODULE_1__.Filter(this.filters);\r\n        const challengeArray = filterInstance.filterArray(this.challengeItems)\r\n        challengeArray.forEach(challengeData => {\r\n        const challengeInstance = new _Challenge__WEBPACK_IMPORTED_MODULE_0__.Challenge(challengeData);\r\n        const challengeItem = challengeInstance.render()\r\n        this.container.appendChild(challengeItem)\r\n            \r\n        })\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://02-esc-website/./src/modules/ChallengeGrid.js?");

/***/ }),

/***/ "./src/modules/DataRetriever.js":
/*!**************************************!*\
  !*** ./src/modules/DataRetriever.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataRetriever\": () => (/* binding */ DataRetriever)\n/* harmony export */ });\nclass DataRetriever {\r\n    constructor() {\r\n        this.challenges = null\r\n    }\r\n    async load() {\r\n        const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';\r\n        if(!this.challenges) {\r\n            try {\r\n                const response = await fetch(url);\r\n                const data = await response.json();\r\n                this.challenges = data.challenges\r\n            } catch (error) {\r\n                console.log(error)\r\n            }    \r\n        }\r\n\r\n        return this.challenges;\r\n    }\r\n}\n\n//# sourceURL=webpack://02-esc-website/./src/modules/DataRetriever.js?");

/***/ }),

/***/ "./src/modules/Filter.js":
/*!*******************************!*\
  !*** ./src/modules/Filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Filter\": () => (/* binding */ Filter)\n/* harmony export */ });\nclass Filter {\r\n    constructor(filtersObj) {\r\n        this.filters = filtersObj\r\n    }\r\n    filterArray(array) {\r\n        let newArray = [];\r\n        let filteredArray = [];\r\n        \r\n        if (this.filters.byOnline) {\r\n            filteredArray = array.filter(obj => {\r\n                return obj.type === 'online';\r\n            })\r\n            // Using spread to \"create\"/concat a new array with all values\r\n            newArray = [...newArray, ...filteredArray];\r\n        }\r\n    \r\n        if (this.filters.byOnsite) {\r\n            filteredArray = array.filter(obj => {\r\n                return obj.type === 'onsite';\r\n            })\r\n            // Using spread to \"create\"/concat a new array with all values\r\n            newArray = [...newArray, ...filteredArray];\r\n        }\r\n    \r\n        if (this.filters.byLabel) {\r\n            newArray = newArray.filter(obj => {\r\n                for(let i = 0; i < labelsFilters.length; i++) {\r\n                    return obj.labels.includes(this.labelsFilters[i]);\r\n                }\r\n            })\r\n        }\r\n    \r\n        if (this.filters.byRating) {\r\n            newArray = newArray.filter(obj => {\r\n                if(obj.rating >= this.filters.minRatingFilter && obj.rating <= this.filters.maxRatingFilter) {\r\n                    return obj;\r\n                }\r\n            });\r\n        }\r\n    \r\n        if (this.filters.byText) {\r\n            newArray = newArray.filter(obj => {\r\n                // returns obj with title or description that includes the value from textFilter\r\n                return obj.description.toUpperCase().includes(this.filters.textFilter.toUpperCase()) || obj.title.toUpperCase().includes(this.filters.textFilter.toUpperCase());\r\n            });\r\n        }\r\n    \r\n        console.log(newArray);\r\n        return newArray;    \r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://02-esc-website/./src/modules/Filter.js?");

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