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
   if (document.querySelector('#content')) {
      let tempContainer = document.querySelector('#content')
      while (tempContainer.lastChild) {
         tempContainer.removeChild(tempContainer.lastChild)
      }
      console.log('cleanded')

   }
   if (document.querySelector('#footer')) {
      let tempContainer = document.querySelector('#footer')
      while (tempContainer.lastChild) {
         tempContainer.removeChild(tempContainer.lastChild)
      }
   }
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
   (0,_clean_content__WEBPACK_IMPORTED_MODULE_1__.cleanContent)();

   const body = document.querySelector('body');
   const contentContainer = document.createElement('div')
   contentContainer.setAttribute('id', 'content')

   const bannerImg = new Image();
   bannerImg.src = _header_jpg__WEBPACK_IMPORTED_MODULE_0__

   const headContainer = document.createElement('div');
   headContainer.setAttribute('id', '#header')
   headContainer.appendChild(bannerImg)
   contentContainer.appendChild(headContainer)


   const title = document.createElement('h1')
   title.innerText = "Mama italia"
   contentContainer.appendChild(title)


   const mainParagraph = document.createElement('p')
   mainParagraph.innerText = 'Mama italia is a great restaurant that does not exist and there are no plans for it to ever exist.'
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

function createMenuPage() {

   const body = document.querySelector('body');
   const contentContainer = document.createElement('div')
   contentContainer.setAttribute('id', 'content')

   const menuContainer = document.createElement('div')

   const menuTitle = document.createElement('h1')
   menuTitle.innerText = "Menu"
   menuContainer.appendChild(menuTitle)

   const antiPastiContainer = document.createElement('div')
   const antiPastiTitle = document.createElement('h2')
   antiPastiTitle.innerText = 'Antipasti'
   const saladTitle = document.createElement('h3')

   const pastaContainer = document.createElement('div')
   const pastaTitle = document.createElement('h2')
   pastaTitle.innerText = 'Pasta'
   const pomodoroTitle = document.createElement('h3')

   const dolciContainer = document.createElement('div')
   const dolciTitle = document.createElement('h2')
   dolciTitle.innerText = 'Dolci'
   const tiramissuTitle = document.createElement('h3')


   contentContainer.appendChild(menuContainer)
   body.appendChild(contentContainer)
}



/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNavbar": () => (/* binding */ createNavbar)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _clean_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clean-content */ "./src/clean-content.js");





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
      ;(0,_clean_content__WEBPACK_IMPORTED_MODULE_3__.cleanContent)()
      ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomePage)()
      ;(0,_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)()
   })

   const itemTwo = liArray[1]
   itemTwo.innerText = 'Menu'
   itemTwo.addEventListener('click', (e) => {
      ;(0,_clean_content__WEBPACK_IMPORTED_MODULE_3__.cleanContent)()
      ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenuPage)()
      ;(0,_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)()
   })

   const itemThree = liArray[2]
   itemThree.innerText = 'Contact'
   itemThree.addEventListener('click', (e) => createContactPage())

   liArray.forEach(li => ul.appendChild(li))
   navbar.appendChild(ul)
   body.appendChild(navbar)
}



/***/ }),

/***/ "./src/header.jpg":
/*!************************!*\
  !*** ./src/header.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a3674a2841def1c3cb1.jpg";

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");



(0,_nav_js__WEBPACK_IMPORTED_MODULE_0__.createNavbar)();
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();
(0,_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUcUM7QUFDVTs7O0FBRy9DO0FBQ0EsR0FBRyw0REFBWTs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsd0NBQVM7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQjJDO0FBQ0g7QUFDQTtBQUNPOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQSxvQ0FBb0MsRUFBRTtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQVk7QUFDbEIsTUFBTSx5REFBYztBQUNwQixNQUFNLHNEQUFZO0FBQ2xCLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2REFBWTtBQUNsQixNQUFNLHNEQUFjO0FBQ3BCLE1BQU0sc0RBQVk7QUFDbEIsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmdUM7QUFDRztBQUNIO0FBQ3ZDLHFEQUFZO0FBQ1osd0RBQWM7QUFDZCxxREFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY2xlYW4tY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNsZWFuQ29udGVudCgpIHtcbiAgIGNvbnNvbGUubG9nKCdjaGVja2luZyBmb3IgY2xlYW4nKVxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykpIHtcbiAgICAgIGxldCB0ZW1wQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgICAgd2hpbGUgKHRlbXBDb250YWluZXIubGFzdENoaWxkKSB7XG4gICAgICAgICB0ZW1wQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRlbXBDb250YWluZXIubGFzdENoaWxkKVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ2NsZWFuZGVkJylcblxuICAgfVxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb290ZXInKSkge1xuICAgICAgbGV0IHRlbXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vdGVyJylcbiAgICAgIHdoaWxlICh0ZW1wQ29udGFpbmVyLmxhc3RDaGlsZCkge1xuICAgICAgICAgdGVtcENvbnRhaW5lci5yZW1vdmVDaGlsZCh0ZW1wQ29udGFpbmVyLmxhc3RDaGlsZClcbiAgICAgIH1cbiAgIH1cbn1cblxuXG5leHBvcnQgeyBjbGVhbkNvbnRlbnQgfSIsImZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcblxuICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG4gICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKVxuICAgY29uc3QgZm9vdGVyUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICBmb290ZXJQYXJhZ3JhcGguaW5uZXJUZXh0ID0gJ1RoaXMgaXMgdGhlIGZvb3RlcidcbiAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJQYXJhZ3JhcGgpXG4gICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcilcbn1cblxuZXhwb3J0IHsgY3JlYXRlRm9vdGVyIH0iLCJpbXBvcnQgaW1nSGVhZGVyIGZyb20gJy4vaGVhZGVyLmpwZyc7XG5pbXBvcnQgeyBjbGVhbkNvbnRlbnQgfSBmcm9tICcuL2NsZWFuLWNvbnRlbnQnO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICAgY2xlYW5Db250ZW50KCk7XG5cbiAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIGNvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50JylcblxuICAgY29uc3QgYmFubmVySW1nID0gbmV3IEltYWdlKCk7XG4gICBiYW5uZXJJbWcuc3JjID0gaW1nSGVhZGVyXG5cbiAgIGNvbnN0IGhlYWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgIGhlYWRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICcjaGVhZGVyJylcbiAgIGhlYWRDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFubmVySW1nKVxuICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkQ29udGFpbmVyKVxuXG5cbiAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJNYW1hIGl0YWxpYVwiXG4gICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKVxuXG5cbiAgIGNvbnN0IG1haW5QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgIG1haW5QYXJhZ3JhcGguaW5uZXJUZXh0ID0gJ01hbWEgaXRhbGlhIGlzIGEgZ3JlYXQgcmVzdGF1cmFudCB0aGF0IGRvZXMgbm90IGV4aXN0IGFuZCB0aGVyZSBhcmUgbm8gcGxhbnMgZm9yIGl0IHRvIGV2ZXIgZXhpc3QuJ1xuICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluUGFyYWdyYXBoKVxuXG4gICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpXG5cbn1cblxuXG5leHBvcnQgeyBjcmVhdGVIb21lUGFnZSB9IiwiXG5mdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcblxuICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgY29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKVxuXG4gICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgbWVudVRpdGxlLmlubmVyVGV4dCA9IFwiTWVudVwiXG4gICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVUaXRsZSlcblxuICAgY29uc3QgYW50aVBhc3RpQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIGNvbnN0IGFudGlQYXN0aVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgYW50aVBhc3RpVGl0bGUuaW5uZXJUZXh0ID0gJ0FudGlwYXN0aSdcbiAgIGNvbnN0IHNhbGFkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG5cbiAgIGNvbnN0IHBhc3RhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIGNvbnN0IHBhc3RhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICBwYXN0YVRpdGxlLmlubmVyVGV4dCA9ICdQYXN0YSdcbiAgIGNvbnN0IHBvbW9kb3JvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG5cbiAgIGNvbnN0IGRvbGNpQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIGNvbnN0IGRvbGNpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICBkb2xjaVRpdGxlLmlubmVyVGV4dCA9ICdEb2xjaSdcbiAgIGNvbnN0IHRpcmFtaXNzdVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuXG5cbiAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcilcbiAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcilcbn1cblxuZXhwb3J0IHsgY3JlYXRlTWVudVBhZ2UgfSIsImltcG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCB7IGNsZWFuQ29udGVudCB9IGZyb20gJy4vY2xlYW4tY29udGVudCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdmJhcigpIHtcbiAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgIGNvbnN0IGxpQXJyYXkgPSBbXTtcbiAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgIGxpLnNldEF0dHJpYnV0ZSgnaWQnLCBgaXRlbS0ke2l9YClcbiAgICAgIGxpQXJyYXkucHVzaChsaSlcbiAgIH1cblxuICAgY29uc3QgaXRlbU9uZSA9IGxpQXJyYXlbMF1cbiAgIGl0ZW1PbmUuaW5uZXJUZXh0ID0gJ0hvbWUnXG4gICBpdGVtT25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNsZWFuQ29udGVudCgpXG4gICAgICBjcmVhdGVIb21lUGFnZSgpXG4gICAgICBjcmVhdGVGb290ZXIoKVxuICAgfSlcblxuICAgY29uc3QgaXRlbVR3byA9IGxpQXJyYXlbMV1cbiAgIGl0ZW1Ud28uaW5uZXJUZXh0ID0gJ01lbnUnXG4gICBpdGVtVHdvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNsZWFuQ29udGVudCgpXG4gICAgICBjcmVhdGVNZW51UGFnZSgpXG4gICAgICBjcmVhdGVGb290ZXIoKVxuICAgfSlcblxuICAgY29uc3QgaXRlbVRocmVlID0gbGlBcnJheVsyXVxuICAgaXRlbVRocmVlLmlubmVyVGV4dCA9ICdDb250YWN0J1xuICAgaXRlbVRocmVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNyZWF0ZUNvbnRhY3RQYWdlKCkpXG5cbiAgIGxpQXJyYXkuZm9yRWFjaChsaSA9PiB1bC5hcHBlbmRDaGlsZChsaSkpXG4gICBuYXZiYXIuYXBwZW5kQ2hpbGQodWwpXG4gICBib2R5LmFwcGVuZENoaWxkKG5hdmJhcilcbn1cblxuZXhwb3J0IHsgY3JlYXRlTmF2YmFyIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBjcmVhdGVOYXZiYXIgfSBmcm9tICcuL25hdi5qcydcbmltcG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH0gZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IHsgY3JlYXRlRm9vdGVyIH0gZnJvbSAnLi9mb290ZXInXG5jcmVhdGVOYXZiYXIoKTtcbmNyZWF0ZUhvbWVQYWdlKCk7XG5jcmVhdGVGb290ZXIoKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=