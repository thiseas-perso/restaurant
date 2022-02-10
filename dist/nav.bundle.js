/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clean-content.js":
/*!******************************!*\
  !*** ./src/clean-content.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanContent": () => (/* binding */ cleanContent)
/* harmony export */ });
function cleanContent() {
   console.log('checking for clean')
   const body = document.querySelector('body');
   if (document.querySelector('#content')) {
      let tempContainer = document.querySelector('#content')
      body.removeChild(tempContainer)
      console.log(tempContainer)

   }
   if (document.querySelector('#footer')) {
      let tempContainer = document.querySelector('#footer')
      body.removeChild(tempContainer)
   }
}




/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContactPage": () => (/* binding */ createContactPage)
/* harmony export */ });
function createContactPage() {
   const body = document.querySelector('body');
   const contentContainer = document.createElement('div')
   contentContainer.setAttribute('id', 'content')

   const contactContainer = document.createElement('div')
   contactContainer.setAttribute('id', 'contact-container')
   const contactTitle = document.createElement('h1')
   contactTitle.innerText = 'Contact us'

   const contactCard = document.createElement('div')
   contactCard.setAttribute('id', 'contact-card')
   const contactPar = document.createElement('p')
   contactPar.innerText = "Find us at : \n this address \n tel: 555-555-5555"


   contactContainer.appendChild(contactTitle)
   contactCard.appendChild(contactPar)
   contactContainer.appendChild(contactCard)
   contentContainer.appendChild(contactContainer)
   body.appendChild(contentContainer)
}



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
function createFooter() {

   const body = document.querySelector('body');
   const footer = document.createElement('footer')
   footer.setAttribute('id', 'footer')
   const footerParagraph = document.createElement('p')
   footerParagraph.innerText = 'This is the footer'
   footer.appendChild(footerParagraph)
   body.appendChild(footer)
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomePage": () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _header_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.jpg */ "./src/header.jpg");
/* harmony import */ var _clean_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clean-content */ "./src/clean-content.js");




function createHomePage() {


   const body = document.querySelector('body');
   const contentContainer = document.createElement('div')
   contentContainer.setAttribute('id', 'content')

   const bannerImg = new Image();
   bannerImg.src = _header_jpg__WEBPACK_IMPORTED_MODULE_0__

   const headContainer = document.createElement('div');
   headContainer.setAttribute('id', 'header')
   headContainer.appendChild(bannerImg)
   contentContainer.appendChild(headContainer)


   const title = document.createElement('h1')
   title.innerText = "Mama italia"
   contentContainer.appendChild(title)


   const mainParagraph = document.createElement('p')
   mainParagraph.innerText = 'Mama italia is a great restaurant that does not exist and there are no plans for it to ever exist. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
   contentContainer.appendChild(mainParagraph)

   body.appendChild(contentContainer)

}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuPage": () => (/* binding */ createMenuPage)
/* harmony export */ });
/* harmony import */ var _salad_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salad.jpg */ "./src/salad.jpg");
/* harmony import */ var _pomodoro_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pomodoro.jpg */ "./src/pomodoro.jpg");
/* harmony import */ var _tiramisu_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tiramisu.jpg */ "./src/tiramisu.jpg");




function createMenuPage() {

   const body = document.querySelector('body');
   const contentContainer = document.createElement('div')
   contentContainer.setAttribute('id', 'content')

   const menuContainer = document.createElement('div')

   const menuTitle = document.createElement('h1')
   menuTitle.innerText = "Menu"
   menuContainer.appendChild(menuTitle)

   const antiPastiContainer = document.createElement('div')
   antiPastiContainer.setAttribute('class', 'menu-card')
   const antiPastiTitle = document.createElement('h2')
   antiPastiTitle.innerText = 'Antipasti'
   const saladTitle = document.createElement('h3')
   saladTitle.innerText = "Insalata"
   const saladPar = document.createElement('p')
   saladPar.innerText = 'An amazing amazing amazing amazing amazing amazing amazing amazing grRen salad amazing amazing amazing amazing green salad amazing grEen Salad amazing salad green amazing amazing amazing amazing amazing amazing Green salad'
   const saladImg = new Image();
   saladImg.src = _salad_jpg__WEBPACK_IMPORTED_MODULE_0__
   antiPastiContainer.appendChild(antiPastiTitle)
   antiPastiContainer.appendChild(saladTitle)
   antiPastiContainer.appendChild(saladImg)
   antiPastiContainer.appendChild(saladPar)




   const pastaContainer = document.createElement('div')
   pastaContainer.setAttribute('class', 'menu-card')
   const pastaTitle = document.createElement('h2')
   pastaTitle.innerText = 'Pasta'
   const pomodoroTitle = document.createElement('h3')
   pomodoroTitle.innerText = 'Pasta con i pomodorini'
   const pomodoroPar = document.createElement('p')
   pomodoroPar.innerText = 'Pasta with chery tomatoes Pasta with chery tomatoes Pasta with chery tomatoes Pasta with chery tomatoes Pasta with chery tomatoes Pasta with chery tomatoes Pasta with chery tomatoes Pasta with chery tomatoes Pasta with chery tomatoes'
   const pomodoroImg = new Image();
   pomodoroImg.src = _pomodoro_jpg__WEBPACK_IMPORTED_MODULE_1__
   pastaContainer.appendChild(pastaTitle)
   pastaContainer.appendChild(pomodoroTitle)
   pastaContainer.appendChild(pomodoroImg)
   pastaContainer.appendChild(pomodoroPar)







   const dolciContainer = document.createElement('div')
   dolciContainer.setAttribute('class', 'menu-card')
   const dolciTitle = document.createElement('h2')
   dolciTitle.innerText = 'Dolci'
   const tiramisuTitle = document.createElement('h3')
   tiramisuTitle.innerText = "Tiramisu"
   const tiramisuPar = document.createElement('p')
   tiramisuPar.innerText = "A classic tiramisu A classic tiramisu tiramisu classic tiramisu classic A classic tiramisu classic tiramisu classic tiramisu classic A classic tiramisu classic tiramisu classic tiramisu classic tiramisu classic tiramisu"
   const tiramisuImg = new Image();
   tiramisuImg.src = _tiramisu_jpg__WEBPACK_IMPORTED_MODULE_2__
   dolciContainer.appendChild(dolciTitle)
   dolciContainer.appendChild(tiramisuTitle)
   dolciContainer.appendChild(tiramisuImg)
   dolciContainer.appendChild(tiramisuPar)


   contentContainer.appendChild(menuContainer)
   contentContainer.appendChild(antiPastiContainer)
   contentContainer.appendChild(pastaContainer)
   contentContainer.appendChild(dolciContainer)
   body.appendChild(contentContainer)
}



/***/ }),

/***/ "./src/header.jpg":
/*!************************!*\
  !*** ./src/header.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a3674a2841def1c3cb1.jpg";

/***/ }),

/***/ "./src/pomodoro.jpg":
/*!**************************!*\
  !*** ./src/pomodoro.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d0b9a9c009577536175.jpg";

/***/ }),

/***/ "./src/salad.jpg":
/*!***********************!*\
  !*** ./src/salad.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "129753f632c1480417d9.jpg";

/***/ }),

/***/ "./src/tiramisu.jpg":
/*!**************************!*\
  !*** ./src/tiramisu.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b5259baa1b82ae525d3.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNavbar": () => (/* binding */ createNavbar)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _clean_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clean-content */ "./src/clean-content.js");






function createNavbar() {
   const body = document.querySelector('body');
   const navbar = document.createElement('nav');
   const ul = document.createElement('ul');
   const liArray = [];
   for (let i = 1; i < 4; i++) {
      const li = document.createElement('li')
      li.setAttribute('id', `item-${i}`)
      liArray.push(li)
   }

   const itemOne = liArray[0]
   itemOne.innerText = 'Home'
   itemOne.addEventListener('click', (e) => {
      ;(0,_clean_content__WEBPACK_IMPORTED_MODULE_4__.cleanContent)()
      ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomePage)()
      ;(0,_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)()
   })

   const itemTwo = liArray[1]
   itemTwo.innerText = 'Menu'
   itemTwo.addEventListener('click', (e) => {
      ;(0,_clean_content__WEBPACK_IMPORTED_MODULE_4__.cleanContent)()
      ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenuPage)()
      ;(0,_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)()
   })

   const itemThree = liArray[2]
   itemThree.innerText = 'Contact'
   itemThree.addEventListener('click', (e) => {
      ;(0,_clean_content__WEBPACK_IMPORTED_MODULE_4__.cleanContent)()
      ;(0,_contact__WEBPACK_IMPORTED_MODULE_3__.createContactPage)()
      ;(0,_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)()
   })

   liArray.forEach(li => ul.appendChild(li))
   navbar.appendChild(ul)
   body.appendChild(navbar)
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RxQztBQUNVOzs7QUFHL0M7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix3Q0FBUzs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CbUM7QUFDTTtBQUNBOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1Q0FBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z3QztBQUNBO0FBQ0E7QUFDTTtBQUNDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQSxvQ0FBb0MsRUFBRTtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQVk7QUFDbEIsTUFBTSxzREFBYztBQUNwQixNQUFNLHNEQUFZO0FBQ2xCLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2REFBWTtBQUNsQixNQUFNLHNEQUFjO0FBQ3BCLE1BQU0sc0RBQVk7QUFDbEIsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZEQUFZO0FBQ2xCLE1BQU0sNERBQWlCO0FBQ3ZCLE1BQU0sc0RBQVk7QUFDbEIsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY2xlYW4tY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9uYXYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2xlYW5Db250ZW50KCkge1xuICAgY29uc29sZS5sb2coJ2NoZWNraW5nIGZvciBjbGVhbicpXG4gICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykpIHtcbiAgICAgIGxldCB0ZW1wQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgICAgYm9keS5yZW1vdmVDaGlsZCh0ZW1wQ29udGFpbmVyKVxuICAgICAgY29uc29sZS5sb2codGVtcENvbnRhaW5lcilcblxuICAgfVxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb290ZXInKSkge1xuICAgICAgbGV0IHRlbXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vdGVyJylcbiAgICAgIGJvZHkucmVtb3ZlQ2hpbGQodGVtcENvbnRhaW5lcilcbiAgIH1cbn1cblxuXG5leHBvcnQgeyBjbGVhbkNvbnRlbnQgfSIsImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RQYWdlKCkge1xuICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgY29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKVxuXG4gICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIGNvbnRhY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWNvbnRhaW5lcicpXG4gICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICBjb250YWN0VGl0bGUuaW5uZXJUZXh0ID0gJ0NvbnRhY3QgdXMnXG5cbiAgIGNvbnN0IGNvbnRhY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIGNvbnRhY3RDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1jYXJkJylcbiAgIGNvbnN0IGNvbnRhY3RQYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgIGNvbnRhY3RQYXIuaW5uZXJUZXh0ID0gXCJGaW5kIHVzIGF0IDogXFxuIHRoaXMgYWRkcmVzcyBcXG4gdGVsOiA1NTUtNTU1LTU1NTVcIlxuXG5cbiAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKVxuICAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQoY29udGFjdFBhcilcbiAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdENhcmQpXG4gICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpXG4gICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpXG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbnRhY3RQYWdlIH0iLCJmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG5cbiAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJylcbiAgIGNvbnN0IGZvb3RlclBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgZm9vdGVyUGFyYWdyYXBoLmlubmVyVGV4dCA9ICdUaGlzIGlzIHRoZSBmb290ZXInXG4gICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyUGFyYWdyYXBoKVxuICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpXG59XG5cbmV4cG9ydCB7IGNyZWF0ZUZvb3RlciB9IiwiaW1wb3J0IGltZ0hlYWRlciBmcm9tICcuL2hlYWRlci5qcGcnO1xuaW1wb3J0IHsgY2xlYW5Db250ZW50IH0gZnJvbSAnLi9jbGVhbi1jb250ZW50JztcblxuXG5mdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcblxuXG4gICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBjb250ZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpXG5cbiAgIGNvbnN0IGJhbm5lckltZyA9IG5ldyBJbWFnZSgpO1xuICAgYmFubmVySW1nLnNyYyA9IGltZ0hlYWRlclxuXG4gICBjb25zdCBoZWFkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICBoZWFkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJylcbiAgIGhlYWRDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFubmVySW1nKVxuICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkQ29udGFpbmVyKVxuXG5cbiAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJNYW1hIGl0YWxpYVwiXG4gICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKVxuXG5cbiAgIGNvbnN0IG1haW5QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgIG1haW5QYXJhZ3JhcGguaW5uZXJUZXh0ID0gJ01hbWEgaXRhbGlhIGlzIGEgZ3JlYXQgcmVzdGF1cmFudCB0aGF0IGRvZXMgbm90IGV4aXN0IGFuZCB0aGVyZSBhcmUgbm8gcGxhbnMgZm9yIGl0IHRvIGV2ZXIgZXhpc3QuIFxcbiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uJ1xuICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluUGFyYWdyYXBoKVxuXG4gICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpXG5cbn1cblxuXG5leHBvcnQgeyBjcmVhdGVIb21lUGFnZSB9IiwiaW1wb3J0IGltZ1NhbGFkIGZyb20gJy4vc2FsYWQuanBnJztcbmltcG9ydCBpbWdQb21vZG9ybyBmcm9tICcuL3BvbW9kb3JvLmpwZyc7XG5pbXBvcnQgaW1nVGlyYW1pc3UgZnJvbSAnLi90aXJhbWlzdS5qcGcnO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcblxuICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgY29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKVxuXG4gICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgbWVudVRpdGxlLmlubmVyVGV4dCA9IFwiTWVudVwiXG4gICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVUaXRsZSlcblxuICAgY29uc3QgYW50aVBhc3RpQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIGFudGlQYXN0aUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtY2FyZCcpXG4gICBjb25zdCBhbnRpUGFzdGlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgIGFudGlQYXN0aVRpdGxlLmlubmVyVGV4dCA9ICdBbnRpcGFzdGknXG4gICBjb25zdCBzYWxhZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgc2FsYWRUaXRsZS5pbm5lclRleHQgPSBcIkluc2FsYXRhXCJcbiAgIGNvbnN0IHNhbGFkUGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICBzYWxhZFBhci5pbm5lclRleHQgPSAnQW4gYW1hemluZyBhbWF6aW5nIGFtYXppbmcgYW1hemluZyBhbWF6aW5nIGFtYXppbmcgYW1hemluZyBhbWF6aW5nIGdyUmVuIHNhbGFkIGFtYXppbmcgYW1hemluZyBhbWF6aW5nIGFtYXppbmcgZ3JlZW4gc2FsYWQgYW1hemluZyBnckVlbiBTYWxhZCBhbWF6aW5nIHNhbGFkIGdyZWVuIGFtYXppbmcgYW1hemluZyBhbWF6aW5nIGFtYXppbmcgYW1hemluZyBhbWF6aW5nIEdyZWVuIHNhbGFkJ1xuICAgY29uc3Qgc2FsYWRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgIHNhbGFkSW1nLnNyYyA9IGltZ1NhbGFkXG4gICBhbnRpUGFzdGlDb250YWluZXIuYXBwZW5kQ2hpbGQoYW50aVBhc3RpVGl0bGUpXG4gICBhbnRpUGFzdGlDb250YWluZXIuYXBwZW5kQ2hpbGQoc2FsYWRUaXRsZSlcbiAgIGFudGlQYXN0aUNvbnRhaW5lci5hcHBlbmRDaGlsZChzYWxhZEltZylcbiAgIGFudGlQYXN0aUNvbnRhaW5lci5hcHBlbmRDaGlsZChzYWxhZFBhcilcblxuXG5cblxuICAgY29uc3QgcGFzdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgcGFzdGFDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWNhcmQnKVxuICAgY29uc3QgcGFzdGFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgIHBhc3RhVGl0bGUuaW5uZXJUZXh0ID0gJ1Bhc3RhJ1xuICAgY29uc3QgcG9tb2Rvcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgIHBvbW9kb3JvVGl0bGUuaW5uZXJUZXh0ID0gJ1Bhc3RhIGNvbiBpIHBvbW9kb3JpbmknXG4gICBjb25zdCBwb21vZG9yb1BhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgcG9tb2Rvcm9QYXIuaW5uZXJUZXh0ID0gJ1Bhc3RhIHdpdGggY2hlcnkgdG9tYXRvZXMgUGFzdGEgd2l0aCBjaGVyeSB0b21hdG9lcyBQYXN0YSB3aXRoIGNoZXJ5IHRvbWF0b2VzIFBhc3RhIHdpdGggY2hlcnkgdG9tYXRvZXMgUGFzdGEgd2l0aCBjaGVyeSB0b21hdG9lcyBQYXN0YSB3aXRoIGNoZXJ5IHRvbWF0b2VzIFBhc3RhIHdpdGggY2hlcnkgdG9tYXRvZXMgUGFzdGEgd2l0aCBjaGVyeSB0b21hdG9lcyBQYXN0YSB3aXRoIGNoZXJ5IHRvbWF0b2VzJ1xuICAgY29uc3QgcG9tb2Rvcm9JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgIHBvbW9kb3JvSW1nLnNyYyA9IGltZ1BvbW9kb3JvXG4gICBwYXN0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXN0YVRpdGxlKVxuICAgcGFzdGFDb250YWluZXIuYXBwZW5kQ2hpbGQocG9tb2Rvcm9UaXRsZSlcbiAgIHBhc3RhQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvbW9kb3JvSW1nKVxuICAgcGFzdGFDb250YWluZXIuYXBwZW5kQ2hpbGQocG9tb2Rvcm9QYXIpXG5cblxuXG5cblxuXG5cbiAgIGNvbnN0IGRvbGNpQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIGRvbGNpQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1jYXJkJylcbiAgIGNvbnN0IGRvbGNpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICBkb2xjaVRpdGxlLmlubmVyVGV4dCA9ICdEb2xjaSdcbiAgIGNvbnN0IHRpcmFtaXN1VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICB0aXJhbWlzdVRpdGxlLmlubmVyVGV4dCA9IFwiVGlyYW1pc3VcIlxuICAgY29uc3QgdGlyYW1pc3VQYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgIHRpcmFtaXN1UGFyLmlubmVyVGV4dCA9IFwiQSBjbGFzc2ljIHRpcmFtaXN1IEEgY2xhc3NpYyB0aXJhbWlzdSB0aXJhbWlzdSBjbGFzc2ljIHRpcmFtaXN1IGNsYXNzaWMgQSBjbGFzc2ljIHRpcmFtaXN1IGNsYXNzaWMgdGlyYW1pc3UgY2xhc3NpYyB0aXJhbWlzdSBjbGFzc2ljIEEgY2xhc3NpYyB0aXJhbWlzdSBjbGFzc2ljIHRpcmFtaXN1IGNsYXNzaWMgdGlyYW1pc3UgY2xhc3NpYyB0aXJhbWlzdSBjbGFzc2ljIHRpcmFtaXN1XCJcbiAgIGNvbnN0IHRpcmFtaXN1SW1nID0gbmV3IEltYWdlKCk7XG4gICB0aXJhbWlzdUltZy5zcmMgPSBpbWdUaXJhbWlzdVxuICAgZG9sY2lDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9sY2lUaXRsZSlcbiAgIGRvbGNpQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpcmFtaXN1VGl0bGUpXG4gICBkb2xjaUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXJhbWlzdUltZylcbiAgIGRvbGNpQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpcmFtaXN1UGFyKVxuXG5cbiAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcilcbiAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYW50aVBhc3RpQ29udGFpbmVyKVxuICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwYXN0YUNvbnRhaW5lcilcbiAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9sY2lDb250YWluZXIpXG4gICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpXG59XG5cbmV4cG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBjcmVhdGVIb21lUGFnZSB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tICcuL2Zvb3Rlcic7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0UGFnZSB9IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgeyBjbGVhbkNvbnRlbnQgfSBmcm9tICcuL2NsZWFuLWNvbnRlbnQnO1xuXG5mdW5jdGlvbiBjcmVhdGVOYXZiYXIoKSB7XG4gICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICBjb25zdCBsaUFycmF5ID0gW107XG4gICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGl0ZW0tJHtpfWApXG4gICAgICBsaUFycmF5LnB1c2gobGkpXG4gICB9XG5cbiAgIGNvbnN0IGl0ZW1PbmUgPSBsaUFycmF5WzBdXG4gICBpdGVtT25lLmlubmVyVGV4dCA9ICdIb21lJ1xuICAgaXRlbU9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjbGVhbkNvbnRlbnQoKVxuICAgICAgY3JlYXRlSG9tZVBhZ2UoKVxuICAgICAgY3JlYXRlRm9vdGVyKClcbiAgIH0pXG5cbiAgIGNvbnN0IGl0ZW1Ud28gPSBsaUFycmF5WzFdXG4gICBpdGVtVHdvLmlubmVyVGV4dCA9ICdNZW51J1xuICAgaXRlbVR3by5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjbGVhbkNvbnRlbnQoKVxuICAgICAgY3JlYXRlTWVudVBhZ2UoKVxuICAgICAgY3JlYXRlRm9vdGVyKClcbiAgIH0pXG5cbiAgIGNvbnN0IGl0ZW1UaHJlZSA9IGxpQXJyYXlbMl1cbiAgIGl0ZW1UaHJlZS5pbm5lclRleHQgPSAnQ29udGFjdCdcbiAgIGl0ZW1UaHJlZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjbGVhbkNvbnRlbnQoKVxuICAgICAgY3JlYXRlQ29udGFjdFBhZ2UoKVxuICAgICAgY3JlYXRlRm9vdGVyKClcbiAgIH0pXG5cbiAgIGxpQXJyYXkuZm9yRWFjaChsaSA9PiB1bC5hcHBlbmRDaGlsZChsaSkpXG4gICBuYXZiYXIuYXBwZW5kQ2hpbGQodWwpXG4gICBib2R5LmFwcGVuZENoaWxkKG5hdmJhcilcbn1cblxuZXhwb3J0IHsgY3JlYXRlTmF2YmFyIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=