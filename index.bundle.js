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
/* harmony export */   "cleanConent": () => (/* binding */ cleanConent)
/* harmony export */ });
function cleanConent() {
   console.log('checking for clean')
   if (document.querySelector('#content')) {
      let tempContainer = document.querySelector('#content')
      while (tempContainer.lastChild) {
         tempContainer.removeChild(tempContainer.lastChild)
      }
      console.log('cleanded')
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
   (0,_clean_content__WEBPACK_IMPORTED_MODULE_1__.cleanConent)();
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
/* harmony import */ var _clean_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clean-content */ "./src/clean-content.js");


function createMenuPage() {
   (0,_clean_content__WEBPACK_IMPORTED_MODULE_0__.cleanConent)();
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

   const pastaContainer = document.createElement('div')
   const pastaTitle = document.createElement('h2')
   pastaTitle.innerText = 'Pasta'

   const dolciContainer = document.createElement('div')
   const dolciTitle = document.createElement('h2')
   dolciTitle.innerText = 'Dolci'


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
   itemOne.addEventListener('click', (e) => (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomePage)())

   const itemTwo = liArray[1]
   itemTwo.innerText = 'Menu'
   itemTwo.addEventListener('click', (e) => (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenuPage)())

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUcUM7QUFDUzs7QUFFOUM7QUFDQSxHQUFHLDJEQUFXO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHdDQUFTOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCOEM7O0FBRTlDO0FBQ0EsR0FBRywyREFBVztBQUNkO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0IyQztBQUNIO0FBQ0E7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBLG9DQUFvQyxFQUFFO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qyx3REFBYzs7QUFFMUQ7QUFDQTtBQUNBLDRDQUE0QyxxREFBYzs7QUFFMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZnVDO0FBQ0c7QUFDSDtBQUN2QyxxREFBWTtBQUNaLHdEQUFjO0FBQ2QscURBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NsZWFuLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjbGVhbkNvbmVudCgpIHtcbiAgIGNvbnNvbGUubG9nKCdjaGVja2luZyBmb3IgY2xlYW4nKVxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykpIHtcbiAgICAgIGxldCB0ZW1wQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgICAgd2hpbGUgKHRlbXBDb250YWluZXIubGFzdENoaWxkKSB7XG4gICAgICAgICB0ZW1wQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRlbXBDb250YWluZXIubGFzdENoaWxkKVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ2NsZWFuZGVkJylcbiAgIH1cbn1cblxuXG5leHBvcnQgeyBjbGVhbkNvbmVudCB9IiwiZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuXG4gICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgY29uc3QgZm9vdGVyUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICBmb290ZXJQYXJhZ3JhcGguaW5uZXJUZXh0ID0gJ1RoaXMgaXMgdGhlIGZvb3RlcidcbiAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJQYXJhZ3JhcGgpXG4gICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcilcbn1cblxuZXhwb3J0IHsgY3JlYXRlRm9vdGVyIH0iLCJpbXBvcnQgaW1nSGVhZGVyIGZyb20gJy4vaGVhZGVyLmpwZyc7XG5pbXBvcnQgeyBjbGVhbkNvbmVudCB9IGZyb20gJy4vY2xlYW4tY29udGVudCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICAgY2xlYW5Db25lbnQoKTtcbiAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIGNvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50JylcblxuICAgY29uc3QgYmFubmVySW1nID0gbmV3IEltYWdlKCk7XG4gICBiYW5uZXJJbWcuc3JjID0gaW1nSGVhZGVyXG5cbiAgIGNvbnN0IGhlYWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgIGhlYWRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICcjaGVhZGVyJylcbiAgIGhlYWRDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFubmVySW1nKVxuICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkQ29udGFpbmVyKVxuXG5cbiAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJNYW1hIGl0YWxpYVwiXG4gICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKVxuXG5cbiAgIGNvbnN0IG1haW5QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgIG1haW5QYXJhZ3JhcGguaW5uZXJUZXh0ID0gJ01hbWEgaXRhbGlhIGlzIGEgZ3JlYXQgcmVzdGF1cmFudCB0aGF0IGRvZXMgbm90IGV4aXN0IGFuZCB0aGVyZSBhcmUgbm8gcGxhbnMgZm9yIGl0IHRvIGV2ZXIgZXhpc3QuJ1xuICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluUGFyYWdyYXBoKVxuXG4gICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpXG5cbn1cblxuXG5leHBvcnQgeyBjcmVhdGVIb21lUGFnZSB9IiwiaW1wb3J0IHsgY2xlYW5Db25lbnQgfSBmcm9tICcuL2NsZWFuLWNvbnRlbnQnO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcbiAgIGNsZWFuQ29uZW50KCk7XG4gICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBjb250ZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpXG5cbiAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICBtZW51VGl0bGUuaW5uZXJUZXh0ID0gXCJNZW51XCJcbiAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRpdGxlKVxuXG4gICBjb25zdCBhbnRpUGFzdGlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgY29uc3QgYW50aVBhc3RpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICBhbnRpUGFzdGlUaXRsZS5pbm5lclRleHQgPSAnQW50aXBhc3RpJ1xuXG4gICBjb25zdCBwYXN0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBjb25zdCBwYXN0YVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgcGFzdGFUaXRsZS5pbm5lclRleHQgPSAnUGFzdGEnXG5cbiAgIGNvbnN0IGRvbGNpQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIGNvbnN0IGRvbGNpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICBkb2xjaVRpdGxlLmlubmVyVGV4dCA9ICdEb2xjaSdcblxuXG59XG5cbmV4cG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0iLCJpbXBvcnQgeyBjcmVhdGVIb21lUGFnZSB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tICcuL2Zvb3Rlcic7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdmJhcigpIHtcbiAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgIGNvbnN0IGxpQXJyYXkgPSBbXTtcbiAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgIGxpLnNldEF0dHJpYnV0ZSgnaWQnLCBgaXRlbS0ke2l9YClcbiAgICAgIGxpQXJyYXkucHVzaChsaSlcbiAgIH1cblxuICAgY29uc3QgaXRlbU9uZSA9IGxpQXJyYXlbMF1cbiAgIGl0ZW1PbmUuaW5uZXJUZXh0ID0gJ0hvbWUnXG4gICBpdGVtT25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNyZWF0ZUhvbWVQYWdlKCkpXG5cbiAgIGNvbnN0IGl0ZW1Ud28gPSBsaUFycmF5WzFdXG4gICBpdGVtVHdvLmlubmVyVGV4dCA9ICdNZW51J1xuICAgaXRlbVR3by5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjcmVhdGVNZW51UGFnZSgpKVxuXG4gICBjb25zdCBpdGVtVGhyZWUgPSBsaUFycmF5WzJdXG4gICBpdGVtVGhyZWUuaW5uZXJUZXh0ID0gJ0NvbnRhY3QnXG4gICBpdGVtVGhyZWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY3JlYXRlQ29udGFjdFBhZ2UoKSlcblxuICAgbGlBcnJheS5mb3JFYWNoKGxpID0+IHVsLmFwcGVuZENoaWxkKGxpKSlcbiAgIG5hdmJhci5hcHBlbmRDaGlsZCh1bClcbiAgIGJvZHkuYXBwZW5kQ2hpbGQobmF2YmFyKVxufVxuXG5leHBvcnQgeyBjcmVhdGVOYXZiYXIgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGNyZWF0ZU5hdmJhciB9IGZyb20gJy4vbmF2LmpzJ1xuaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tICcuL2hvbWUuanMnXG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tICcuL2Zvb3RlcidcbmNyZWF0ZU5hdmJhcigpO1xuY3JlYXRlSG9tZVBhZ2UoKTtcbmNyZWF0ZUZvb3RlcigpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==