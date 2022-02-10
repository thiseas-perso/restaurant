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
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHFDO0FBQ1U7OztBQUcvQztBQUNBLEdBQUcsNERBQVk7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHdDQUFTOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjJDO0FBQ0g7QUFDQTtBQUNPOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQSxvQ0FBb0MsRUFBRTtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQVk7QUFDbEIsTUFBTSx5REFBYztBQUNwQixNQUFNLHNEQUFZO0FBQ2xCLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2REFBWTtBQUNsQixNQUFNLHNEQUFjO0FBQ3BCLE1BQU0sc0RBQVk7QUFDbEIsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NsZWFuLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9uYXYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2xlYW5Db250ZW50KCkge1xuICAgY29uc29sZS5sb2coJ2NoZWNraW5nIGZvciBjbGVhbicpXG4gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKSkge1xuICAgICAgbGV0IHRlbXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgICB3aGlsZSAodGVtcENvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgIHRlbXBDb250YWluZXIucmVtb3ZlQ2hpbGQodGVtcENvbnRhaW5lci5sYXN0Q2hpbGQpXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnY2xlYW5kZWQnKVxuXG4gICB9XG4gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvb3RlcicpKSB7XG4gICAgICBsZXQgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb290ZXInKVxuICAgICAgd2hpbGUgKHRlbXBDb250YWluZXIubGFzdENoaWxkKSB7XG4gICAgICAgICB0ZW1wQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRlbXBDb250YWluZXIubGFzdENoaWxkKVxuICAgICAgfVxuICAgfVxufVxuXG5cbmV4cG9ydCB7IGNsZWFuQ29udGVudCB9IiwiZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuXG4gICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3RlcicpXG4gICBjb25zdCBmb290ZXJQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgIGZvb3RlclBhcmFncmFwaC5pbm5lclRleHQgPSAnVGhpcyBpcyB0aGUgZm9vdGVyJ1xuICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclBhcmFncmFwaClcbiAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKVxufVxuXG5leHBvcnQgeyBjcmVhdGVGb290ZXIgfSIsImltcG9ydCBpbWdIZWFkZXIgZnJvbSAnLi9oZWFkZXIuanBnJztcbmltcG9ydCB7IGNsZWFuQ29udGVudCB9IGZyb20gJy4vY2xlYW4tY29udGVudCc7XG5cblxuZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2UoKSB7XG4gICBjbGVhbkNvbnRlbnQoKTtcblxuICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgY29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKVxuXG4gICBjb25zdCBiYW5uZXJJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgIGJhbm5lckltZy5zcmMgPSBpbWdIZWFkZXJcblxuICAgY29uc3QgaGVhZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgaGVhZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJyNoZWFkZXInKVxuICAgaGVhZENvbnRhaW5lci5hcHBlbmRDaGlsZChiYW5uZXJJbWcpXG4gICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRDb250YWluZXIpXG5cblxuICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICB0aXRsZS5pbm5lclRleHQgPSBcIk1hbWEgaXRhbGlhXCJcbiAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG5cblxuICAgY29uc3QgbWFpblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgbWFpblBhcmFncmFwaC5pbm5lclRleHQgPSAnTWFtYSBpdGFsaWEgaXMgYSBncmVhdCByZXN0YXVyYW50IHRoYXQgZG9lcyBub3QgZXhpc3QgYW5kIHRoZXJlIGFyZSBubyBwbGFucyBmb3IgaXQgdG8gZXZlciBleGlzdC4nXG4gICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5QYXJhZ3JhcGgpXG5cbiAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcilcblxufVxuXG5cbmV4cG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH0iLCJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xuXG4gICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBjb250ZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpXG5cbiAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICBtZW51VGl0bGUuaW5uZXJUZXh0ID0gXCJNZW51XCJcbiAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRpdGxlKVxuXG4gICBjb25zdCBhbnRpUGFzdGlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgY29uc3QgYW50aVBhc3RpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICBhbnRpUGFzdGlUaXRsZS5pbm5lclRleHQgPSAnQW50aXBhc3RpJ1xuICAgY29uc3Qgc2FsYWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcblxuICAgY29uc3QgcGFzdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgY29uc3QgcGFzdGFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgIHBhc3RhVGl0bGUuaW5uZXJUZXh0ID0gJ1Bhc3RhJ1xuICAgY29uc3QgcG9tb2Rvcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcblxuICAgY29uc3QgZG9sY2lDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgY29uc3QgZG9sY2lUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgIGRvbGNpVGl0bGUuaW5uZXJUZXh0ID0gJ0RvbGNpJ1xuICAgY29uc3QgdGlyYW1pc3N1VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG5cblxuICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKVxuICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKVxufVxuXG5leHBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgY3JlYXRlTWVudVBhZ2UgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgY3JlYXRlRm9vdGVyIH0gZnJvbSAnLi9mb290ZXInO1xuaW1wb3J0IHsgY2xlYW5Db250ZW50IH0gZnJvbSAnLi9jbGVhbi1jb250ZW50JztcblxuZnVuY3Rpb24gY3JlYXRlTmF2YmFyKCkge1xuICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgY29uc3QgbGlBcnJheSA9IFtdO1xuICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgbGkuc2V0QXR0cmlidXRlKCdpZCcsIGBpdGVtLSR7aX1gKVxuICAgICAgbGlBcnJheS5wdXNoKGxpKVxuICAgfVxuXG4gICBjb25zdCBpdGVtT25lID0gbGlBcnJheVswXVxuICAgaXRlbU9uZS5pbm5lclRleHQgPSAnSG9tZSdcbiAgIGl0ZW1PbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY2xlYW5Db250ZW50KClcbiAgICAgIGNyZWF0ZUhvbWVQYWdlKClcbiAgICAgIGNyZWF0ZUZvb3RlcigpXG4gICB9KVxuXG4gICBjb25zdCBpdGVtVHdvID0gbGlBcnJheVsxXVxuICAgaXRlbVR3by5pbm5lclRleHQgPSAnTWVudSdcbiAgIGl0ZW1Ud28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY2xlYW5Db250ZW50KClcbiAgICAgIGNyZWF0ZU1lbnVQYWdlKClcbiAgICAgIGNyZWF0ZUZvb3RlcigpXG4gICB9KVxuXG4gICBjb25zdCBpdGVtVGhyZWUgPSBsaUFycmF5WzJdXG4gICBpdGVtVGhyZWUuaW5uZXJUZXh0ID0gJ0NvbnRhY3QnXG4gICBpdGVtVGhyZWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY3JlYXRlQ29udGFjdFBhZ2UoKSlcblxuICAgbGlBcnJheS5mb3JFYWNoKGxpID0+IHVsLmFwcGVuZENoaWxkKGxpKSlcbiAgIG5hdmJhci5hcHBlbmRDaGlsZCh1bClcbiAgIGJvZHkuYXBwZW5kQ2hpbGQobmF2YmFyKVxufVxuXG5leHBvcnQgeyBjcmVhdGVOYXZiYXIgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==