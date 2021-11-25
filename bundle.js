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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChallengeGrid\": () => (/* binding */ ChallengeGrid)\n/* harmony export */ });\n/* harmony import */ var _Challenge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Challenge */ \"./src/modules/Challenge.js\");\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter */ \"./src/modules/Filter.js\");\n\r\n\r\n\r\nclass ChallengeGrid {\r\n    constructor(retriever, container) {\r\n        this.retriever = retriever;\r\n        this.container = container;\r\n        this.challengeItems = [];\r\n        this.filters = {\r\n            byOnline: true,\r\n            byOnsite: true,\r\n            byLabel: false,\r\n            byRating: false,\r\n            byText: false,\r\n            labelsFilters: [],\r\n            minRatingFilter: 0,\r\n            maxRatingFilter: 5,\r\n            textFilter: ''\r\n        };\r\n        this.labelsArray = [];\r\n        this.minStarsArray = [];\r\n        this.maxStarsArray = [];\r\n    }\r\n\r\n    async run() {\r\n        this.challenges = await this.retriever.load();\r\n       \r\n        this.render();\r\n    }\r\n\r\n    render() {\r\n        const filterInstance = new _Filter__WEBPACK_IMPORTED_MODULE_1__.Filter(this.filters);\r\n        const challengeArray = filterInstance.filterArray(this.challenges)\r\n        challengeArray.forEach(challengeData => {\r\n        const challengeInstance = new _Challenge__WEBPACK_IMPORTED_MODULE_0__.Challenge(challengeData);\r\n        const challengeItem = challengeInstance.render();\r\n        this.container.appendChild(challengeItem);\r\n        this.challengeItems.push(challengeData);\r\n        })\r\n\r\n        // FILTERBOX\r\n        const filterButton = document.querySelector('.filter-cta');\r\n        filterButton.addEventListener('click', () => \r\n            {\r\n                filterButton.style.display = 'none'; \r\n                filterBoard.style.display = \"block\";\r\n            }\r\n        );\r\n\r\n        const filterBoard = document.querySelector('.filter-board');\r\n        filterBoard.style.display = 'none';\r\n        \r\n        const filterMenu  = document.createElement('div');\r\n        filterMenu.classList.add(\"filter-menu\");\r\n        filterBoard.appendChild(filterMenu);\r\n        \r\n        const filterBoxTitle = document.createElement('h3');\r\n        filterBoxTitle.classList.add(\"filter-box-title\");\r\n        filterMenu.appendChild(filterBoxTitle);\r\n        filterBoxTitle.innerHTML = \"Filter challenges\";\r\n\r\n        const xButton = document.createElement('a');\r\n        xButton.classList.add(\"x-button-style\");\r\n        const btnSpan = document.createElement('p');\r\n        btnSpan.innerHTML = \"&#10005;\";\r\n        xButton.appendChild(btnSpan);\r\n        filterMenu.appendChild(xButton);\r\n        xButton.addEventListener('click', () => \r\n            {\r\n                filterButton.style.display = 'block';\r\n                filterBoard.style.display = \"none\";\r\n            }\r\n        );\r\n\r\n        const filtersToChoose = document.createElement('div');\r\n        filtersToChoose.classList.add('choose-filter-box');\r\n        filterMenu.appendChild(filtersToChoose);\r\n\r\n        const filterType = document.createElement('div');\r\n        filterType.classList.add(\"filter-by-type\");\r\n        filtersToChoose.appendChild(filterType);\r\n\r\n        const filterTypeTitle = document.createElement('h4');\r\n        filterTypeTitle.innerHTML = \"By Type\";\r\n        filterType.appendChild(filterTypeTitle);\r\n\r\n        const filterTypeList = document.createElement('ul');\r\n        filterType.appendChild(filterTypeList);\r\n\r\n        const filterListPoint1 = document.createElement('li');\r\n        filterTypeList.appendChild(filterListPoint1);\r\n        filterListPoint1.addEventListener('change', () => {\r\n            if (!this.filters.byOnline) {\r\n                this.filters.byOnline = true;\r\n                this.rerender()\r\n            } else {\r\n                this.filters.byOnline = false;\r\n                this.rerender()\r\n            }\r\n        });\r\n\r\n        const filterTypeCheck1 = document.createElement('input');\r\n        filterTypeCheck1.type = \"checkbox\";\r\n        filterTypeCheck1.checked = true\r\n        filterListPoint1.appendChild(filterTypeCheck1);\r\n\r\n        const filterTypeText1 = document.createElement('label');\r\n        filterTypeText1.innerHTML = \"&nbspInclude online challenges\";\r\n        filterListPoint1.appendChild(filterTypeText1);\r\n\r\n        const filterListPoint2 = document.createElement('li');\r\n        filterTypeList.appendChild(filterListPoint2);\r\n        filterListPoint2.addEventListener('change', () => {\r\n            if (!this.filters.byOnsite) {\r\n                this.filters.byOnsite = true;\r\n                this.rerender()\r\n            } else {\r\n                this.filters.byOnsite = false;\r\n                this.rerender()\r\n            }\r\n        });\r\n\r\n        const filterTypeCheck2 = document.createElement('input');\r\n        filterTypeCheck2.type = \"checkbox\";\r\n        filterTypeCheck2.checked = true\r\n        filterListPoint2.appendChild(filterTypeCheck2);\r\n\r\n        const filterTypeText2 = document.createElement('label');\r\n        filterTypeText2.innerHTML = \"&nbspInclude on-site challenges\";\r\n        filterListPoint2.appendChild(filterTypeText2);\r\n        \r\n        const filterRating = document.createElement('div');\r\n        filterRating.classList.add(\"filter-by-rating\");\r\n        filtersToChoose.appendChild(filterRating);\r\n\r\n        const filterRatingTitle = document.createElement('h4');\r\n        filterRatingTitle.innerHTML = \"By Rating\";\r\n        filterRating.appendChild(filterRatingTitle);\r\n\r\n        const filterRatingList = document.createElement('ul');\r\n        filterRating.appendChild(filterRatingList);\r\n\r\n        function createStars(starsArr) {\r\n            for (let i = 0; i < 5; i++) {\r\n                starsArr[i] = document.createElement('li');\r\n                starsArr[i].classList.add(\"filter-rating-star\");\r\n                starsArr[i].classList.add(\"off\");\r\n                filterRatingList.appendChild(starsArr[i]); \r\n                starsArr.push();  \r\n            } \r\n        }\r\n\r\n        createStars(this.minStarsArray);\r\n\r\n        this.minStarsArray.forEach(star => {\r\n            star.addEventListener('click', () => {\r\n                let i = this.minStarsArray.indexOf(star);\r\n                let clickedStar = i + 1;\r\n\r\n                if(star.classList.contains('off')) {\r\n                    for (i; i >= 0; i--) {\r\n                        this.minStarsArray[i].classList.add('on');\r\n                        this.minStarsArray[i].classList.remove('off');\r\n                    }\r\n                } else {\r\n                    clickedStar--\r\n                    for (i; i < this.minStarsArray.length; ++i) {\r\n                        this.minStarsArray[i].classList.add('off')\r\n                        this.minStarsArray[i].classList.remove('on')\r\n                    }\r\n                }\r\n\r\n                this.filters.minRatingFilter = clickedStar;\r\n                this.filters.byRating = true;\r\n                this.rerender()\r\n            })\r\n        })\r\n        \r\n        // Label \"to\" between stars\r\n        const filterStarLabel = document.createElement('li');\r\n        filterStarLabel.innerHTML = \"&nbspto&nbsp\";\r\n        filterStarLabel.style.textAlign = \"center\";\r\n        filterStarLabel.style.padding = \"0.5rem\";\r\n        filterRatingList.appendChild(filterStarLabel);\r\n\r\n        createStars(this.maxStarsArray);\r\n        \r\n        this.maxStarsArray.forEach(star => {\r\n            star.addEventListener('click', () => {\r\n                let i = this.maxStarsArray.indexOf(star);\r\n                let clickedStar = i + 1;\r\n                if(star.classList.contains('off')) {\r\n                    for (i; i >= 0; i--) {\r\n                        this.maxStarsArray[i].classList.add('on');\r\n                        this.maxStarsArray[i].classList.remove('off');\r\n                    }\r\n                } else {\r\n                    i+=1;\r\n                    for (i; i < this.maxStarsArray.length; ++i) {\r\n                        this.maxStarsArray[i].classList.add('off')\r\n                        this.maxStarsArray[i].classList.remove('on')\r\n                    }\r\n                }\r\n                this.filters.maxRatingFilter = clickedStar;\r\n                this.filters.byRating = true;\r\n                this.rerender()\r\n            })\r\n        })\r\n\r\n        // Tag creation\r\n        const filterTag = document.createElement('div');\r\n        filterTag.classList.add(\"filter-by-tag\");\r\n        filtersToChoose.appendChild(filterTag);\r\n\r\n        const filterTagTitle = document.createElement('h4');\r\n        filterTagTitle.innerHTML = \"By Tag\";\r\n        filterTag.appendChild(filterTagTitle);\r\n\r\n        const filterTagLabels = document.createElement('div');\r\n        filterTagLabels.classList.add(\"filter-by-tag-item\");\r\n        filterTag.appendChild(filterTagLabels);\r\n\r\n        // Creates array of all labels in all challenges\r\n        this.challenges.forEach(obj => {\r\n            obj.labels.forEach(label => {\r\n                if(!this.labelsArray.includes(label)) {\r\n                    this.labelsArray.push(label);\r\n                    const filterTagItem = document.createElement('label');\r\n                    filterTagItem.innerHTML = label;\r\n                    filterTagItem.style.backgroundColor = 'white';\r\n                    filterTagLabels.appendChild(filterTagItem);\r\n                    filterTagItem.addEventListener('click', (event) => {\r\n                        // Label selected conditional\r\n                        if (filterTagItem.style.backgroundColor == \"white\") {\r\n                            filterTagItem.style.backgroundColor = \"lightslategray\";\r\n                            filterTagItem.style.color = \"white\";\r\n                            filterTagItem.style.borderColor = \"lightslategray\";                          \r\n                        } else {\r\n                            filterTagItem.style.backgroundColor = \"white\";\r\n                            filterTagItem.style.color = \"gray\";\r\n                            filterTagItem.style.borderColor = \"lightgray\";\r\n                        }\r\n\r\n                        const value = event.target.innerText;\r\n                        const index = this.filters.labelsFilters.indexOf(value);\r\n                        this.filters.labelsFilters.includes(value) ? this.filters.labelsFilters.splice(index, 1) : this.filters.labelsFilters.push(value);\r\n                        this.filters.labelsFilters.length > 0 ? this.filters.byLabel = true : this.filters.byLabel = false;\r\n                        \r\n                        this.rerender()\r\n                    })\r\n                }\r\n            });\r\n        });\r\n\r\n        const filterSearchText = document.createElement('div');\r\n        filterSearchText.classList.add(\"filter-search-text\");\r\n        filterMenu.appendChild(filterSearchText);\r\n\r\n        const filterSearchTextTitle = document.createElement('h4');\r\n        filterSearchTextTitle.innerHTML = \"Or type to search for keyword\";\r\n        filterSearchText.appendChild(filterSearchTextTitle);\r\n\r\n        const searchText = document.createElement('input');\r\n        searchText.type = \"text\";\r\n        searchText.classList.add('filter-search-input');\r\n        searchText.placeholder = \"Start typing to filter\";\r\n        searchText.addEventListener('keyup', () => {\r\n            this.filters.byText = true;\r\n            this.filters.textFilter = searchText.value;\r\n            this.rerender()\r\n        });\r\n        filterSearchText.appendChild(searchText);\r\n    }\r\n\r\n    rerender() {\r\n        // Clear the DOM\r\n        this.container.innerHTML = '';\r\n\r\n        const filterInstance = new _Filter__WEBPACK_IMPORTED_MODULE_1__.Filter(this.filters);\r\n        const challengeArray = filterInstance.filterArray(this.challengeItems)\r\n        challengeArray.forEach(challengeData => {\r\n        const challengeInstance = new _Challenge__WEBPACK_IMPORTED_MODULE_0__.Challenge(challengeData);\r\n        const challengeItem = challengeInstance.render()\r\n        this.container.appendChild(challengeItem)\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://02-esc-website/./src/modules/ChallengeGrid.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Filter\": () => (/* binding */ Filter)\n/* harmony export */ });\nclass Filter {\r\n    constructor(filtersObj) {\r\n        this.filters = filtersObj\r\n    }\r\n    filterArray(array) {\r\n        let newArray = [];\r\n        let filteredArray = [];\r\n        \r\n        if (this.filters.byOnline) {\r\n            filteredArray = array.filter(obj => {\r\n                return obj.type === 'online';\r\n            })\r\n            // Using spread to \"create\"/concat a new array with all values\r\n            newArray = [...newArray, ...filteredArray];\r\n        }\r\n    \r\n        if (this.filters.byOnsite) {\r\n            filteredArray = array.filter(obj => {\r\n                return obj.type === 'onsite';\r\n            })\r\n            // Using spread to \"create\"/concat a new array with all values\r\n            newArray = [...newArray, ...filteredArray];\r\n        }\r\n    \r\n        if (this.filters.byLabel) {\r\n            newArray = newArray.filter(obj => {\r\n                return this.filters.labelsFilters.every(label => obj.labels.includes(label));\r\n            })\r\n        }\r\n    \r\n        if (this.filters.byRating) {\r\n            newArray = newArray.filter(obj => {\r\n                if(obj.rating >= this.filters.minRatingFilter && obj.rating <= this.filters.maxRatingFilter) {\r\n                    return obj;\r\n                }\r\n            });\r\n        }\r\n    \r\n        if (this.filters.byText) {\r\n            newArray = newArray.filter(obj => {\r\n                // returns obj with title or description that includes the value from textFilter\r\n                return obj.description.toUpperCase().includes(this.filters.textFilter.toUpperCase()) || obj.title.toUpperCase().includes(this.filters.textFilter.toUpperCase());\r\n            });\r\n        }\r\n    \r\n        return newArray;    \r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://02-esc-website/./src/modules/Filter.js?");

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