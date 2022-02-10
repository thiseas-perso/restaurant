/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZm1DO0FBQ007QUFDQTs7QUFFekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUNBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgaW1nU2FsYWQgZnJvbSAnLi9zYWxhZC5qcGcnO1xuaW1wb3J0IGltZ1BvbW9kb3JvIGZyb20gJy4vcG9tb2Rvcm8uanBnJztcbmltcG9ydCBpbWdUaXJhbWlzdSBmcm9tICcuL3RpcmFtaXN1LmpwZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xuXG4gICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBjb250ZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpXG5cbiAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICBtZW51VGl0bGUuaW5uZXJUZXh0ID0gXCJNZW51XCJcbiAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRpdGxlKVxuXG4gICBjb25zdCBhbnRpUGFzdGlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgYW50aVBhc3RpQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1jYXJkJylcbiAgIGNvbnN0IGFudGlQYXN0aVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgYW50aVBhc3RpVGl0bGUuaW5uZXJUZXh0ID0gJ0FudGlwYXN0aSdcbiAgIGNvbnN0IHNhbGFkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICBzYWxhZFRpdGxlLmlubmVyVGV4dCA9IFwiSW5zYWxhdGFcIlxuICAgY29uc3Qgc2FsYWRQYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgIHNhbGFkUGFyLmlubmVyVGV4dCA9ICdBbiBhbWF6aW5nIGFtYXppbmcgYW1hemluZyBhbWF6aW5nIGFtYXppbmcgYW1hemluZyBhbWF6aW5nIGFtYXppbmcgZ3JSZW4gc2FsYWQgYW1hemluZyBhbWF6aW5nIGFtYXppbmcgYW1hemluZyBncmVlbiBzYWxhZCBhbWF6aW5nIGdyRWVuIFNhbGFkIGFtYXppbmcgc2FsYWQgZ3JlZW4gYW1hemluZyBhbWF6aW5nIGFtYXppbmcgYW1hemluZyBhbWF6aW5nIGFtYXppbmcgR3JlZW4gc2FsYWQnXG4gICBjb25zdCBzYWxhZEltZyA9IG5ldyBJbWFnZSgpO1xuICAgc2FsYWRJbWcuc3JjID0gaW1nU2FsYWRcbiAgIGFudGlQYXN0aUNvbnRhaW5lci5hcHBlbmRDaGlsZChhbnRpUGFzdGlUaXRsZSlcbiAgIGFudGlQYXN0aUNvbnRhaW5lci5hcHBlbmRDaGlsZChzYWxhZFRpdGxlKVxuICAgYW50aVBhc3RpQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhbGFkSW1nKVxuICAgYW50aVBhc3RpQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhbGFkUGFyKVxuXG5cblxuXG4gICBjb25zdCBwYXN0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBwYXN0YUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtY2FyZCcpXG4gICBjb25zdCBwYXN0YVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgcGFzdGFUaXRsZS5pbm5lclRleHQgPSAnUGFzdGEnXG4gICBjb25zdCBwb21vZG9yb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgcG9tb2Rvcm9UaXRsZS5pbm5lclRleHQgPSAnUGFzdGEgY29uIGkgcG9tb2RvcmluaSdcbiAgIGNvbnN0IHBvbW9kb3JvUGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICBwb21vZG9yb1Bhci5pbm5lclRleHQgPSAnUGFzdGEgd2l0aCBjaGVyeSB0b21hdG9lcyBQYXN0YSB3aXRoIGNoZXJ5IHRvbWF0b2VzIFBhc3RhIHdpdGggY2hlcnkgdG9tYXRvZXMgUGFzdGEgd2l0aCBjaGVyeSB0b21hdG9lcyBQYXN0YSB3aXRoIGNoZXJ5IHRvbWF0b2VzIFBhc3RhIHdpdGggY2hlcnkgdG9tYXRvZXMgUGFzdGEgd2l0aCBjaGVyeSB0b21hdG9lcyBQYXN0YSB3aXRoIGNoZXJ5IHRvbWF0b2VzIFBhc3RhIHdpdGggY2hlcnkgdG9tYXRvZXMnXG4gICBjb25zdCBwb21vZG9yb0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgcG9tb2Rvcm9JbWcuc3JjID0gaW1nUG9tb2Rvcm9cbiAgIHBhc3RhQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhc3RhVGl0bGUpXG4gICBwYXN0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChwb21vZG9yb1RpdGxlKVxuICAgcGFzdGFDb250YWluZXIuYXBwZW5kQ2hpbGQocG9tb2Rvcm9JbWcpXG4gICBwYXN0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChwb21vZG9yb1BhcilcblxuXG5cblxuXG5cblxuICAgY29uc3QgZG9sY2lDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgZG9sY2lDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWNhcmQnKVxuICAgY29uc3QgZG9sY2lUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgIGRvbGNpVGl0bGUuaW5uZXJUZXh0ID0gJ0RvbGNpJ1xuICAgY29uc3QgdGlyYW1pc3VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgIHRpcmFtaXN1VGl0bGUuaW5uZXJUZXh0ID0gXCJUaXJhbWlzdVwiXG4gICBjb25zdCB0aXJhbWlzdVBhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgdGlyYW1pc3VQYXIuaW5uZXJUZXh0ID0gXCJBIGNsYXNzaWMgdGlyYW1pc3UgQSBjbGFzc2ljIHRpcmFtaXN1IHRpcmFtaXN1IGNsYXNzaWMgdGlyYW1pc3UgY2xhc3NpYyBBIGNsYXNzaWMgdGlyYW1pc3UgY2xhc3NpYyB0aXJhbWlzdSBjbGFzc2ljIHRpcmFtaXN1IGNsYXNzaWMgQSBjbGFzc2ljIHRpcmFtaXN1IGNsYXNzaWMgdGlyYW1pc3UgY2xhc3NpYyB0aXJhbWlzdSBjbGFzc2ljIHRpcmFtaXN1IGNsYXNzaWMgdGlyYW1pc3VcIlxuICAgY29uc3QgdGlyYW1pc3VJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgIHRpcmFtaXN1SW1nLnNyYyA9IGltZ1RpcmFtaXN1XG4gICBkb2xjaUNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2xjaVRpdGxlKVxuICAgZG9sY2lDb250YWluZXIuYXBwZW5kQ2hpbGQodGlyYW1pc3VUaXRsZSlcbiAgIGRvbGNpQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpcmFtaXN1SW1nKVxuICAgZG9sY2lDb250YWluZXIuYXBwZW5kQ2hpbGQodGlyYW1pc3VQYXIpXG5cblxuICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKVxuICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhbnRpUGFzdGlDb250YWluZXIpXG4gICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHBhc3RhQ29udGFpbmVyKVxuICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkb2xjaUNvbnRhaW5lcilcbiAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcilcbn1cblxuZXhwb3J0IHsgY3JlYXRlTWVudVBhZ2UgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==