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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_DataRetriever__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DataRetriever */ \"./src/modules/DataRetriever.js\");\n/* harmony import */ var _modules_ChallengeGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ChallengeGrid */ \"./src/modules/ChallengeGrid.js\");\n\n\n\nconst container = document.querySelector('.challenges-list');\nconst retriever = new _modules_DataRetriever__WEBPACK_IMPORTED_MODULE_0__.DataRetriever();\nconst grid = new _modules_ChallengeGrid__WEBPACK_IMPORTED_MODULE_1__.ChallengeGrid(retriever, container);\n\ngrid.run()\n\n//# sourceURL=webpack://02-esc-website/./src/main.js?");

/***/ }),

/***/ "./src/modules/Challenge.js":
/*!**********************************!*\
  !*** ./src/modules/Challenge.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Challenge\": () => (/* binding */ Challenge)\n/* harmony export */ });\nclass Challenge {\n    constructor(data) {\n        this.title = data.title;\n        this.rating = data.rating;\n        this.image = data.image;\n        this.description = data.description;\n        this.minParticipants = data.minParticipants;\n        this.maxParticipants = data.maxParticipants;\n    }\n\n    render() {\n        // Create elements for challenge card\n        let challengesItem = document.createElement('li');\n        challengesItem.classList.add('challenges-item');\n        \n        let challengesPicture = document.createElement('img')\n        challengesPicture.classList.add('challenge-picture');\n        challengesPicture.src=this.image;\n\n        let challengeTitle = document.createElement('h3');\n        challengeTitle.classList.add('challenge-title');\n        challengeTitle.innerHTML = this.title;\n\n        let challengeMeta = document.createElement('div');\n        challengeMeta.classList.add('challenge-meta');\n\n        let challengeRating = document.createElement('ul');\n        challengeRating.classList.add('challenge-rating');\n\n        // Create elements for rating stars\n        for(let i = 0; i < Math.floor(this.rating); i++) {\n            let challengeRatingStar = document.createElement('li');\n            challengeRatingStar.classList.add('challenge-rating-star');\n            challengeRatingStar.classList.add('on');\n            challengeRating.appendChild(challengeRatingStar);\n    \n        };\n\n        for(let i = Math.floor(this.rating); i < 5; i++) {\n            let challengeRatingStar = document.createElement('li');\n            challengeRatingStar.classList.add('challenge-rating-star');\n            challengeRatingStar.classList.add('off');\n            challengeRating.appendChild(challengeRatingStar);\n        };\n\n        let challengeSize = document.createElement('small');\n        challengeSize.classList.add('challenge-size');\n        challengeSize.innerHTML = `${this.minParticipants}-${this.maxParticipants} participants`;\n\n        let challengeDescription = document.createElement('p');\n        challengeDescription.classList.add('challenge-description');\n        challengeDescription.innerHTML = this.description\n\n        let challengeCta = document.createElement('a');\n        challengeCta.classList.add('challenge-cta');\n        challengeCta.innerHTML = \"Book the room\";\n\n        // Render/append on site\n        challengesItem.appendChild(challengesPicture);\n        challengesItem.appendChild(challengeTitle);\n        challengesItem.appendChild(challengeMeta)\n        challengeMeta.appendChild(challengeRating);\n        challengeMeta.appendChild(challengeSize);\n        challengesItem.appendChild(challengeDescription);\n        challengesItem.appendChild(challengeCta);\n\n        return challengesItem;\n    }\n}\n\n//# sourceURL=webpack://02-esc-website/./src/modules/Challenge.js?");

/***/ }),

/***/ "./src/modules/ChallengeGrid.js":
/*!**************************************!*\
  !*** ./src/modules/ChallengeGrid.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChallengeGrid\": () => (/* binding */ ChallengeGrid)\n/* harmony export */ });\n/* harmony import */ var _Challenge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Challenge */ \"./src/modules/Challenge.js\");\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter */ \"./src/modules/Filter.js\");\n\n\n\nclass ChallengeGrid {\n    constructor(retriever, container) {\n        this.retriever = retriever;\n        this.container = container;\n        this.challengeItems = [];\n        this.filters = {\n            byOnline: true,\n            byOnsite: true,\n            byLabel: false,\n            byRating: false,\n            byText: false,\n            labelsFilters: [],\n            minRatingFilter: 2,\n            maxRatingFilter: 5,\n            textFilter: ''\n        };\n        this.labelsArray = [];\n    }\n\n    async run() {\n        this.challenges = await this.retriever.load();\n       \n        this.render();\n    }\n\n    render() {\n        const filterInstance = new _Filter__WEBPACK_IMPORTED_MODULE_1__.Filter(this.filters);\n        const challengeArray = filterInstance.filterArray(this.challenges)\n        challengeArray.forEach(challengeData => {\n        const challengeInstance = new _Challenge__WEBPACK_IMPORTED_MODULE_0__.Challenge(challengeData);\n        const challengeItem = challengeInstance.render();\n        this.container.appendChild(challengeItem);\n        this.challengeItems.push(challengeData);\n        })\n\n        // FILTERBOX\n        // Filtr box - filter function\nconst filterButton = document.querySelector('.filter-cta');\n\nconst filterBoard = document.querySelector('.filter-board');\nfilterBoard.style.display = \"none\";\n\n\nconst filterMenu  = document.createElement('div');\nfilterMenu.classList.add(\"filter-menu\");\nfilterBoard.appendChild(filterMenu);\n\nconst filterBoxTitle = document.createElement('h3');\nfilterBoxTitle.classList.add(\"filter-box-title\");\nfilterMenu.appendChild(filterBoxTitle);\nfilterBoxTitle.innerHTML = \"Filter challenges\";\n\nconst xButton = document.createElement('a');\nxButton.classList.add(\"x-button-style\");\nconst btnSpan = document.createElement('p');\nbtnSpan.innerHTML = \"&#10005;\";\nxButton.appendChild(btnSpan);\nfilterMenu.appendChild(xButton);\n\nconst filtersToChoose = document.createElement('div');\nfiltersToChoose.classList.add('choose-filter-box');\nfilterMenu.appendChild(filtersToChoose);\n\nconst filterType = document.createElement('div');\nfilterType.classList.add(\"filter-by-type\");\nfiltersToChoose.appendChild(filterType);\n\nconst filterTypeTitle = document.createElement('h4');\nfilterTypeTitle.innerHTML = \"By Type\";\nfilterType.appendChild(filterTypeTitle);\n\nconst filterTypeList = document.createElement('ul');\nfilterType.appendChild(filterTypeList);\n\nconst filterListPoint1 = document.createElement('li');\nfilterTypeList.appendChild(filterListPoint1);\n\nconst filterTypeCheck1 = document.createElement('input');\nfilterTypeCheck1.type = \"checkbox\";\nfilterListPoint1.appendChild(filterTypeCheck1);\n\nconst filterTypeText1 = document.createElement('label');\nfilterTypeText1.innerHTML = \"&nbspInclude online challenges\";\nfilterListPoint1.appendChild(filterTypeText1);\n\nconst filterListPoint2 = document.createElement('li');\nfilterTypeList.appendChild(filterListPoint2);\n\nconst filterTypeCheck2 = document.createElement('input');\nfilterTypeCheck2.type = \"checkbox\";\nfilterListPoint2.appendChild(filterTypeCheck2);\n\nconst filterTypeText2 = document.createElement('label');\nfilterTypeText2.innerHTML = \"&nbspInclude on-site challenges\";\nfilterListPoint2.appendChild(filterTypeText2);\n\nconst filterRating = document.createElement('div');\nfilterRating.classList.add(\"filter-by-rating\");\nfiltersToChoose.appendChild(filterRating);\n\nconst filterRatingTitle = document.createElement('h4');\nfilterRatingTitle.innerHTML = \"By Rating\";\nfilterRating.appendChild(filterRatingTitle);\n\nconst filterRatingList = document.createElement('ul');\nfilterRating.appendChild(filterRatingList);\n\n\nconst starsArray = [];\n\nfor (let i = 0; i < 5; i++) {\n    starsArray[i] = document.createElement('li');\n    starsArray[i].classList.add(\"filter-rating-star\");\n    starsArray[i].classList.add(\"off\");\n    filterRatingList.appendChild(starsArray[i]); \n    starsArray.push();\n} \n\nfunction starRating(starsArray) {\nconst starLength = starsArray.length;\n\nstarsArray.forEach((star) => {\n    star.addEventListener('click', () =>  {\n        let i = starsArray.indexOf(star);\n        \n        if (star.classList.contains(\"off\")) {\n            for (i; i >= 0; --i) {\n                starsArray[i].classList.add(\"on\");\n                starsArray[i].classList.remove(\"off\");\n            }\n        }\n        else {                   \n            for (i; i < starLength; ++i) {\n                starsArray[i].classList.add(\"off\");\n                starsArray[i].classList.remove(\"on\");\n            } \n        }\n    }); \n}); }\n\nstarRating(starsArray);\n\n// Label \"to\" between stars\nconst filterStarLabel = document.createElement('li');\nfilterStarLabel.innerHTML = \"&nbspto&nbsp\";\nfilterStarLabel.style.textAlign = \"center\";\nfilterStarLabel.style.padding = \"0.5rem\";\nfilterRatingList.appendChild(filterStarLabel);\n\nfor (let i = 0; i < 5; i++) {\n    const filterRatingStar = document.createElement('li');\n    filterRatingStar.classList.add('filter-rating-star');\n    filterRatingStar.classList.add('on');\n    filterRatingList.appendChild(filterRatingStar);\n}\n\n// Tag creation\nconst filterTag = document.createElement('div');\nfilterTag.classList.add(\"filter-by-tag\");\nfiltersToChoose.appendChild(filterTag);\n\nconst filterTagTitle = document.createElement('h4');\nfilterTagTitle.innerHTML = \"By Tag\";\nfilterTag.appendChild(filterTagTitle);\n\nconst filterTagLabels = document.createElement('div');\nfilterTagLabels.classList.add(\"filter-by-tag-item\");\nfilterTag.appendChild(filterTagLabels);\n\nconst filterTagItem = document.createElement('label');\nfilterTagItem.innerHTML =  \"Web\";\nfilterTagLabels.appendChild(filterTagItem);\n\n\nfilterTagItem.addEventListener('click', () => \n    {   \n        if (filterTagItem.style.backgroundColor == \"white\") {\n                filterTagItem.style.backgroundColor = \"lightslategray\";\n                filterTagItem.style.color = \"white\";\n                filterTagItem.style.borderColor = \"lightslategray\";\n                filters.byLabel = true;\n                \n        }\n        else {\n            filterTagItem.style.backgroundColor = \"white\";\n            filterTagItem.style.color = \"gray\";\n            filterTagItem.style.borderColor = \"lightgray\";\n            filters.byLabel = false;\n        }\n    }    \n);\n\n\nconst filterSearchText = document.createElement('div');\nfilterSearchText.classList.add(\"filter-search-text\");\nfilterMenu.appendChild(filterSearchText);\n\nconst filterSearchTextTitle = document.createElement('h4');\nfilterSearchTextTitle.innerHTML = \"Or type to search for keyword\";\nfilterSearchText.appendChild(filterSearchTextTitle);\n\nconst searchText = document.createElement('input');\nsearchText.type = \"text\";\nsearchText.classList.add('filter-search-input');\nsearchText.placeholder = \"Start typing to filter\";\nsearchText.addEventListener('keyup', () => {\n    this.filters.byText = true;\n    this.filters.textFilter = searchText.value;\n    this.rerender()\n});\nfilterSearchText.appendChild(searchText);\n\n\n\nfilterListPoint1.addEventListener('click', () => {\n    if (!filters.byOnline) {\n        filters.byOnline = true;\n        filterArray(arr);\n    }\n    else {\n        filters.byOnline = false;\n    }\n});\n\nfilterListPoint2.addEventListener('click', () => {\n    if (!filters.byOnsite) {\n        filters.byOnsite = true;\n    }\n    else {\n        filters.byOnsite = false;\n    }\n});\n\nlet filters = {\n    byOnline: false,\n    byOnsite: false,\n    byLabel: false,\n    byRating: false,\n    byText: false\n}\n\n\n\n\nxButton.addEventListener('click',() => \n    {\n        filterButton.style.display = 'block';\n        filterBoard.style.display = \"none\";\n    }\n);\n\n\n\nfilterButton.addEventListener('click', () => \n    {\n        filterButton.style.display = 'none'; \n        filterBoard.style.display = \"block\";\n    }\n);\n\n\n        // FILTERBOX\n\n\n\n        // Creates array of all labels in all challenges\n        this.challenges.forEach(obj => {\n            obj.labels.forEach(label => {\n                if(!this.labelsArray.includes(label)) {\n                    this.labelsArray.push(label);\n                    const labelButton = document.createElement('span');\n                    labelButton.style.height = '50px';\n                    labelButton.style.marginRight = '10px'\n                    labelButton.innerText = label;\n                    const labelsEl = document.querySelector('.labels');\n                    labelsEl.appendChild(labelButton);\n                    labelButton.addEventListener('click', (event) => {\n                        const value = event.target.innerText;\n                        const index = this.filters.labelsFilters.indexOf(value);\n                        this.filters.labelsFilters.includes(value) ? this.filters.labelsFilters.splice(index, 1) : this.filters.labelsFilters.push(value);\n                        this.filters.labelsFilters > 0 ? this.filters.byLabel = true : this.filters.byLabel = false;\n\n                        // !! REMOVE ME LATER - test to display labels to filter\n                        this.rerender()\n                    })\n                }\n            });\n        });\n        \n    }\n\n    rerender() {\n        this.container.innerHTML = '';\n\n        const filterInstance = new _Filter__WEBPACK_IMPORTED_MODULE_1__.Filter(this.filters);\n        const challengeArray = filterInstance.filterArray(this.challengeItems)\n        challengeArray.forEach(challengeData => {\n        const challengeInstance = new _Challenge__WEBPACK_IMPORTED_MODULE_0__.Challenge(challengeData);\n        const challengeItem = challengeInstance.render()\n        this.container.appendChild(challengeItem)\n            \n        })\n    }\n}\n\n\n//# sourceURL=webpack://02-esc-website/./src/modules/ChallengeGrid.js?");

/***/ }),

/***/ "./src/modules/DataRetriever.js":
/*!**************************************!*\
  !*** ./src/modules/DataRetriever.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataRetriever\": () => (/* binding */ DataRetriever)\n/* harmony export */ });\nclass DataRetriever {\n    constructor() {\n        this.challenges = null\n    }\n    async load() {\n        const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';\n        if(!this.challenges) {\n            try {\n                const response = await fetch(url);\n                const data = await response.json();\n                this.challenges = data.challenges\n            } catch (error) {\n                console.log(error)\n            }    \n        }\n\n        return this.challenges;\n    }\n}\n\n//# sourceURL=webpack://02-esc-website/./src/modules/DataRetriever.js?");

/***/ }),

/***/ "./src/modules/Filter.js":
/*!*******************************!*\
  !*** ./src/modules/Filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Filter\": () => (/* binding */ Filter)\n/* harmony export */ });\nclass Filter {\n    constructor(filtersObj) {\n        this.filters = filtersObj\n    }\n    filterArray(array) {\n        let newArray = [];\n        let filteredArray = [];\n        \n        if (this.filters.byOnline) {\n            filteredArray = array.filter(obj => {\n                return obj.type === 'online';\n            })\n            // Using spread to \"create\"/concat a new array with all values\n            newArray = [...newArray, ...filteredArray];\n        }\n    \n        if (this.filters.byOnsite) {\n            filteredArray = array.filter(obj => {\n                return obj.type === 'onsite';\n            })\n            // Using spread to \"create\"/concat a new array with all values\n            newArray = [...newArray, ...filteredArray];\n        }\n    \n        if (this.filters.byLabel) {\n            newArray = newArray.filter(obj => {\n                for(let i = 0; i < this.filters.labelsFilters.length; i++) {\n                    return obj.labels.includes(this.filters.labelsFilters[i]);\n                }\n            })\n        }\n    \n        if (this.filters.byRating) {\n            newArray = newArray.filter(obj => {\n                if(obj.rating >= this.filters.minRatingFilter && obj.rating <= this.filters.maxRatingFilter) {\n                    return obj;\n                }\n            });\n        }\n    \n        if (this.filters.byText) {\n            newArray = newArray.filter(obj => {\n                // returns obj with title or description that includes the value from textFilter\n                return obj.description.toUpperCase().includes(this.filters.textFilter.toUpperCase()) || obj.title.toUpperCase().includes(this.filters.textFilter.toUpperCase());\n            });\n        }\n    \n        console.log(newArray);\n        return newArray;    \n    }\n}\n\n\n//# sourceURL=webpack://02-esc-website/./src/modules/Filter.js?");

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