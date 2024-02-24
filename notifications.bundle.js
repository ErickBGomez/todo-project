/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/others/close.svg":
/*!**********************************!*\
  !*** ./src/img/others/close.svg ***!
  \**********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z\"></path></svg>"

/***/ }),

/***/ "./src/img/others/success-notification.svg":
/*!*************************************************!*\
  !*** ./src/img/others/success-notification.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"m424-408-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-408Zm56 328q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z\"></path></svg>"

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************!*\
  !*** ./src/design/notifications.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayNotification: () => (/* binding */ displayNotification),
/* harmony export */   renderNotifications: () => (/* binding */ renderNotifications)
/* harmony export */ });
/* harmony import */ var _img_others_success_notification_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/others/success-notification.svg */ "./src/img/others/success-notification.svg");
/* harmony import */ var _img_others_success_notification_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_others_success_notification_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_others_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/others/close.svg */ "./src/img/others/close.svg");
/* harmony import */ var _img_others_close_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_others_close_svg__WEBPACK_IMPORTED_MODULE_1__);



const closeTimeout = 5000;
let closeTimeoutId;

const renderNotifications = () => {
  const container = document.createElement("div");
  container.id = "notifications-container";

  document.body.appendChild(container);
};

const displayNotification = (label) => {
  const notificationsContainer = document.querySelector(
    "#notifications-container"
  );

  const newNotification = document.createElement("div");
  newNotification.className = "notification";

  const notificationIcon = document.createElement("span");
  notificationIcon.className = "notification-icon";
  notificationIcon.innerHTML = (_img_others_success_notification_svg__WEBPACK_IMPORTED_MODULE_0___default());

  const notificationLabel = document.createElement("p");
  notificationLabel.className = "notification-label";
  notificationLabel.textContent = label;

  const closeButton = document.createElement("button");
  closeButton.className = "close-notification";

  const closeButtonIcon = document.createElement("span");
  closeButtonIcon.className = "button-icon";
  closeButtonIcon.innerHTML = (_img_others_close_svg__WEBPACK_IMPORTED_MODULE_1___default());

  closeButton.appendChild(closeButtonIcon);

  newNotification.appendChild(notificationIcon);
  newNotification.appendChild(notificationLabel);
  newNotification.appendChild(closeButton);

  notificationsContainer.appendChild(newNotification);

  closeTimeoutId = setTimeout(
    closeNotification,
    closeTimeout,
    notificationsContainer,
    newNotification
  );

  closeNotificationEvent(closeButton, notificationsContainer, newNotification);
};

const closeNotification = (container, notification) => {
  notification.classList.add("closing");

  notification.addEventListener("animationend", () =>
    container.removeChild(notification)
  );
};

const closeNotificationEvent = (closeButton, container, notification) => {
  closeButton.addEventListener("click", () => {
    clearTimeout(closeTimeoutId);
    closeNotification(container, notification);
  });
};



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjRFO0FBQzdCOztBQUUvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQiw2RUFBc0I7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsOERBQVE7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVvRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbWcvb3RoZXJzL2Nsb3NlLnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL290aGVycy9zdWNjZXNzLW5vdGlmaWNhdGlvbi5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9kZXNpZ24vbm90aWZpY2F0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJtMjU2LTIwMC01Ni01NiAyMjQtMjI0LTIyNC0yMjQgNTYtNTYgMjI0IDIyNCAyMjQtMjI0IDU2IDU2LTIyNCAyMjQgMjI0IDIyNC01NiA1Ni0yMjQtMjI0LTIyNCAyMjRaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJtNDI0LTQwOC04Ni04NnEtMTEtMTEtMjgtMTF0LTI4IDExcS0xMSAxMS0xMSAyOHQxMSAyOGwxMTQgMTE0cTEyIDEyIDI4IDEydDI4LTEybDIyNi0yMjZxMTEtMTEgMTEtMjh0LTExLTI4cS0xMS0xMS0yOC0xMXQtMjggMTFMNDI0LTQwOFptNTYgMzI4cS04MyAwLTE1Ni0zMS41VDE5Ny0xOTdxLTU0LTU0LTg1LjUtMTI3VDgwLTQ4MHEwLTgzIDMxLjUtMTU2VDE5Ny03NjNxNTQtNTQgMTI3LTg1LjVUNDgwLTg4MHE4MyAwIDE1NiAzMS41VDc2My03NjNxNTQgNTQgODUuNSAxMjdUODgwLTQ4MHEwIDgzLTMxLjUgMTU2VDc2My0xOTdxLTU0IDU0LTEyNyA4NS41VDQ4MC04MFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc3VjY2Vzc05vdGlmaWNhdGlvblN2ZyBmcm9tIFwiLi4vaW1nL290aGVycy9zdWNjZXNzLW5vdGlmaWNhdGlvbi5zdmdcIjtcbmltcG9ydCBjbG9zZVN2ZyBmcm9tIFwiLi4vaW1nL290aGVycy9jbG9zZS5zdmdcIjtcblxuY29uc3QgY2xvc2VUaW1lb3V0ID0gNTAwMDtcbmxldCBjbG9zZVRpbWVvdXRJZDtcblxuY29uc3QgcmVuZGVyTm90aWZpY2F0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmlkID0gXCJub3RpZmljYXRpb25zLWNvbnRhaW5lclwiO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlOb3RpZmljYXRpb24gPSAobGFiZWwpID0+IHtcbiAgY29uc3Qgbm90aWZpY2F0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjbm90aWZpY2F0aW9ucy1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IG5ld05vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld05vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvblwiO1xuXG4gIGNvbnN0IG5vdGlmaWNhdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbm90aWZpY2F0aW9uSWNvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvbi1pY29uXCI7XG4gIG5vdGlmaWNhdGlvbkljb24uaW5uZXJIVE1MID0gc3VjY2Vzc05vdGlmaWNhdGlvblN2ZztcblxuICBjb25zdCBub3RpZmljYXRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBub3RpZmljYXRpb25MYWJlbC5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvbi1sYWJlbFwiO1xuICBub3RpZmljYXRpb25MYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gXCJjbG9zZS1ub3RpZmljYXRpb25cIjtcblxuICBjb25zdCBjbG9zZUJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY2xvc2VCdXR0b25JY29uLmNsYXNzTmFtZSA9IFwiYnV0dG9uLWljb25cIjtcbiAgY2xvc2VCdXR0b25JY29uLmlubmVySFRNTCA9IGNsb3NlU3ZnO1xuXG4gIGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uSWNvbik7XG5cbiAgbmV3Tm90aWZpY2F0aW9uLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbkljb24pO1xuICBuZXdOb3RpZmljYXRpb24uYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uTGFiZWwpO1xuICBuZXdOb3RpZmljYXRpb24uYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gIG5vdGlmaWNhdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Tm90aWZpY2F0aW9uKTtcblxuICBjbG9zZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoXG4gICAgY2xvc2VOb3RpZmljYXRpb24sXG4gICAgY2xvc2VUaW1lb3V0LFxuICAgIG5vdGlmaWNhdGlvbnNDb250YWluZXIsXG4gICAgbmV3Tm90aWZpY2F0aW9uXG4gICk7XG5cbiAgY2xvc2VOb3RpZmljYXRpb25FdmVudChjbG9zZUJ1dHRvbiwgbm90aWZpY2F0aW9uc0NvbnRhaW5lciwgbmV3Tm90aWZpY2F0aW9uKTtcbn07XG5cbmNvbnN0IGNsb3NlTm90aWZpY2F0aW9uID0gKGNvbnRhaW5lciwgbm90aWZpY2F0aW9uKSA9PiB7XG4gIG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKFwiY2xvc2luZ1wiKTtcblxuICBub3RpZmljYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PlxuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChub3RpZmljYXRpb24pXG4gICk7XG59O1xuXG5jb25zdCBjbG9zZU5vdGlmaWNhdGlvbkV2ZW50ID0gKGNsb3NlQnV0dG9uLCBjb250YWluZXIsIG5vdGlmaWNhdGlvbikgPT4ge1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dChjbG9zZVRpbWVvdXRJZCk7XG4gICAgY2xvc2VOb3RpZmljYXRpb24oY29udGFpbmVyLCBub3RpZmljYXRpb24pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlck5vdGlmaWNhdGlvbnMsIGRpc3BsYXlOb3RpZmljYXRpb24gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==