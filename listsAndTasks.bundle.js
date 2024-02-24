/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/lists/default.svg":
/*!***********************************!*\
  !*** ./src/img/lists/default.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M361.913-239.283h236.413q17.717 0 29.696-12.097Q640-263.478 640-281.196q0-17.717-11.978-29.695-11.979-11.979-29.696-11.979H361.674q-17.717 0-29.696 11.979Q320-298.913 320-281.196q0 17.718 12.098 29.816 12.098 12.097 29.815 12.097Zm0-160h236.413q17.717 0 29.696-12.097Q640-423.478 640-441.196q0-17.717-11.978-29.695-11.979-11.979-29.696-11.979H361.674q-17.717 0-29.696 11.979Q320-458.913 320-441.196q0 17.718 12.098 29.816 12.098 12.097 29.815 12.097ZM242.87-71.869q-37.783 0-64.392-26.61-26.609-26.608-26.609-64.391v-634.26q0-37.783 26.609-64.392 26.609-26.609 64.392-26.609h282.934q18.153 0 34.685 6.837 16.533 6.837 29.207 19.511l192.087 192.087q12.674 12.674 19.511 29.207 6.837 16.532 6.837 34.685v442.934q0 37.783-26.609 64.392Q754.913-71.87 717.13-71.87H242.87ZM517.13-642.63q0 19.152 13.174 32.326t32.326 13.174h154.5l-200-200v154.5Z\"></path></svg>"

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
/*!********************************!*\
  !*** ./src/lists-and-tasks.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   completeTask: () => (/* binding */ completeTask),
/* harmony export */   createList: () => (/* binding */ createList),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   deleteList: () => (/* binding */ deleteList),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editList: () => (/* binding */ editList),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   getCompletedLength: () => (/* binding */ getCompletedLength),
/* harmony export */   getCurrentList: () => (/* binding */ getCurrentList),
/* harmony export */   getListIndex: () => (/* binding */ getListIndex),
/* harmony export */   getListsNames: () => (/* binding */ getListsNames),
/* harmony export */   getListsNamesIcons: () => (/* binding */ getListsNamesIcons),
/* harmony export */   refreshLists: () => (/* binding */ refreshLists),
/* harmony export */   restoreTask: () => (/* binding */ restoreTask),
/* harmony export */   setCurrentList: () => (/* binding */ setCurrentList)
/* harmony export */ });
/* harmony import */ var _img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/lists/default.svg */ "./src/img/lists/default.svg");
/* harmony import */ var _img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0__);


class Task {
  constructor(title, description, date, priority) {
    this.id = Date.now().toString(16);
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}

class List {
  constructor(listName, icon) {
    this.name = listName;
    this.icon = icon;
    this.tasks = [];
    this.completed = [];
  }
}

let content;
let currentList;

const saveLists = () => {
  localStorage.setItem("lists", JSON.stringify(content));
};

const refreshLists = () => {
  // If lists is not created in localStorage, create an empty array
  if (!localStorage.getItem("lists")) {
    content = [];
    createList("My tasks", (_img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0___default()));
    saveLists();
  }

  content = JSON.parse(localStorage.getItem("lists"));
};

const createList = (listName, icon) => {
  // Avoid creating duplicated lists
  if (!getList(listName)) {
    content.push(new List(listName, icon));
    saveLists();
  }
};

const editList = (listName, newList = { name: "Name", icon: (_img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0___default()) }) => {
  const selectedList = getList(listName);

  selectedList.name = newList.name;
  selectedList.icon = newList.icon;

  saveLists();
};

const deleteList = (listName) => {
  const listIndex = getListIndex(listName);

  if (listIndex !== -1) {
    content.splice(listIndex, 1);
    saveLists();
  }
};

const getList = (listName) => content.find((list) => list.name === listName);

const createTask = (
  listName,
  newTask = {
    title: "Title",
    description: "Description",
    date: "Date",
    priority: "Priority",
  }
) => {
  const selectedList = getList(listName);

  // Remove any other possible value to priority that is not equal to the specified below
  if (
    !(
      newTask.priority === "Low" ||
      newTask.priority == "Medium" ||
      newTask.priority === "High"
    )
  )
    newTask.priority = "";

  selectedList.tasks.push(
    new Task(newTask.title, newTask.description, newTask.date, newTask.priority)
  );
  saveLists();
};

const getTask = (list, taskId) => {
  for (let key in list) {
    if (key === "tasks" || key === "completed") {
      const taskFound = list[key].find((task) => task.id === taskId);
      // If task is not found in "tasks" array, continue to "completed" array
      if (taskFound) return taskFound;
    }
  }
};

const getTaskIndex = (list, taskArray, taskId) =>
  list[taskArray].indexOf(getTask(list, taskId));

const completeTask = (listName, taskId) => {
  const selectedList = getList(listName);
  // Find task index to use it in splice() arguments
  const taskIndex = getTaskIndex(selectedList, "tasks", taskId);
  // Remove task from array and convert it to object (index 0)
  const completedTask = selectedList.tasks.splice(taskIndex, 1)[0];
  // Add task to the front of completed array
  selectedList.completed.unshift(completedTask);
  saveLists();
};

const restoreTask = (listName, taskId) => {
  const selectedList = getList(listName);
  // Find task index to use it in splice() arguments
  const taskIndex = getTaskIndex(selectedList, "completed", taskId);
  // Remove task from array and convert it to object (index 0)
  const completedTask = selectedList.completed.splice(taskIndex, 1)[0];
  // Add task to the front of completed array
  selectedList.tasks.push(completedTask);
  saveLists();
};

const moveTask = (taskId, fromListName, toListName) => {
  const fromList = getList(fromListName);
  const toList = getList(toListName);

  for (let key in fromList) {
    if (key === "tasks" || key === "completed") {
      const taskIndex = getTaskIndex(fromList, key, taskId);

      if (taskIndex !== -1) {
        const movedTask = fromList[key].splice(taskIndex, 1)[0];
        toList[key].push(movedTask);
        return;
      }
    }
  }
};

const editTask = (
  listName,
  taskId,
  newTask = {
    title: "Title",
    description: "Description",
    date: "Date",
    priority: "Priority",
  }
) => {
  if (listName !== currentList.name) {
    moveTask(taskId, currentList.name, listName);
  }

  const selectedList = getList(listName);
  const selectedTask = getTask(selectedList, taskId);

  // Remove any other possible value to priority that is not equal to the specified below
  if (
    !(
      newTask.priority === "Low" ||
      newTask.priority == "Medium" ||
      newTask.priority === "High"
    )
  )
    newTask.priority = "";

  selectedTask.title = newTask.title;
  selectedTask.description = newTask.description;
  selectedTask.date = newTask.date;
  selectedTask.priority = newTask.priority;

  saveLists();
};

const deleteTask = (listName, taskId) => {
  const selectedList = getList(listName);

  for (let key in selectedList) {
    // Iterate only in tasks and completed arrays to find tasks
    if (key === "tasks" || key === "completed") {
      const taskIndex = getTaskIndex(selectedList, key, taskId);

      if (taskIndex !== -1) {
        selectedList[key].splice(taskIndex, 1);
        saveLists();
        return;
      }
    }
  }
};

const setCurrentList = (listName) => {
  currentList = getList(listName);
};

const getCurrentList = () => currentList;

const getCompletedLength = (listName) => getList(listName).completed.length;

const getListsNames = () => {
  const namesArray = [];
  content.forEach((list) => namesArray.push(list.name));
  return namesArray;
};

const getListsNamesIcons = () => {
  const namesIconsArray = [];

  content.forEach((list) => {
    const propertiesToFilter = ["name", "icon"];

    // Return a new object with only "name" and "icon" properties
    const filteredList = Object.keys(list)
      .filter((key) => propertiesToFilter.includes(key))
      .reduce((object, key) => {
        object[key] = list[key];
        return object;
      }, {});

    namesIconsArray.push(filteredList);
  });

  return namesIconsArray;
};

const getListIndex = (listName) =>
  content.indexOf(content.find((list) => list.name == listName));



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHNBbmRUYXNrcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrREFBVTtBQUNyQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLG9CQUFvQiwrREFBVSxFQUFFO0FBQ3hFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLElBQUk7O0FBRVg7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFrQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL2xpc3RzL2RlZmF1bHQuc3ZnIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvbGlzdHMtYW5kLXRhc2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIk0zNjEuOTEzLTIzOS4yODNoMjM2LjQxM3ExNy43MTcgMCAyOS42OTYtMTIuMDk3UTY0MC0yNjMuNDc4IDY0MC0yODEuMTk2cTAtMTcuNzE3LTExLjk3OC0yOS42OTUtMTEuOTc5LTExLjk3OS0yOS42OTYtMTEuOTc5SDM2MS42NzRxLTE3LjcxNyAwLTI5LjY5NiAxMS45NzlRMzIwLTI5OC45MTMgMzIwLTI4MS4xOTZxMCAxNy43MTggMTIuMDk4IDI5LjgxNiAxMi4wOTggMTIuMDk3IDI5LjgxNSAxMi4wOTdabTAtMTYwaDIzNi40MTNxMTcuNzE3IDAgMjkuNjk2LTEyLjA5N1E2NDAtNDIzLjQ3OCA2NDAtNDQxLjE5NnEwLTE3LjcxNy0xMS45NzgtMjkuNjk1LTExLjk3OS0xMS45NzktMjkuNjk2LTExLjk3OUgzNjEuNjc0cS0xNy43MTcgMC0yOS42OTYgMTEuOTc5UTMyMC00NTguOTEzIDMyMC00NDEuMTk2cTAgMTcuNzE4IDEyLjA5OCAyOS44MTYgMTIuMDk4IDEyLjA5NyAyOS44MTUgMTIuMDk3Wk0yNDIuODctNzEuODY5cS0zNy43ODMgMC02NC4zOTItMjYuNjEtMjYuNjA5LTI2LjYwOC0yNi42MDktNjQuMzkxdi02MzQuMjZxMC0zNy43ODMgMjYuNjA5LTY0LjM5MiAyNi42MDktMjYuNjA5IDY0LjM5Mi0yNi42MDloMjgyLjkzNHExOC4xNTMgMCAzNC42ODUgNi44MzcgMTYuNTMzIDYuODM3IDI5LjIwNyAxOS41MTFsMTkyLjA4NyAxOTIuMDg3cTEyLjY3NCAxMi42NzQgMTkuNTExIDI5LjIwNyA2LjgzNyAxNi41MzIgNi44MzcgMzQuNjg1djQ0Mi45MzRxMCAzNy43ODMtMjYuNjA5IDY0LjM5MlE3NTQuOTEzLTcxLjg3IDcxNy4xMy03MS44N0gyNDIuODdaTTUxNy4xMy02NDIuNjNxMCAxOS4xNTIgMTMuMTc0IDMyLjMyNnQzMi4zMjYgMTMuMTc0aDE1NC41bC0yMDAtMjAwdjE1NC41WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkZWZhdWx0U3ZnIGZyb20gXCIuL2ltZy9saXN0cy9kZWZhdWx0LnN2Z1wiO1xuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKDE2KTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihsaXN0TmFtZSwgaWNvbikge1xuICAgIHRoaXMubmFtZSA9IGxpc3ROYW1lO1xuICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMuY29tcGxldGVkID0gW107XG4gIH1cbn1cblxubGV0IGNvbnRlbnQ7XG5sZXQgY3VycmVudExpc3Q7XG5cbmNvbnN0IHNhdmVMaXN0cyA9ICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0c1wiLCBKU09OLnN0cmluZ2lmeShjb250ZW50KSk7XG59O1xuXG5jb25zdCByZWZyZXNoTGlzdHMgPSAoKSA9PiB7XG4gIC8vIElmIGxpc3RzIGlzIG5vdCBjcmVhdGVkIGluIGxvY2FsU3RvcmFnZSwgY3JlYXRlIGFuIGVtcHR5IGFycmF5XG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0c1wiKSkge1xuICAgIGNvbnRlbnQgPSBbXTtcbiAgICBjcmVhdGVMaXN0KFwiTXkgdGFza3NcIiwgZGVmYXVsdFN2Zyk7XG4gICAgc2F2ZUxpc3RzKCk7XG4gIH1cblxuICBjb250ZW50ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RzXCIpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAobGlzdE5hbWUsIGljb24pID0+IHtcbiAgLy8gQXZvaWQgY3JlYXRpbmcgZHVwbGljYXRlZCBsaXN0c1xuICBpZiAoIWdldExpc3QobGlzdE5hbWUpKSB7XG4gICAgY29udGVudC5wdXNoKG5ldyBMaXN0KGxpc3ROYW1lLCBpY29uKSk7XG4gICAgc2F2ZUxpc3RzKCk7XG4gIH1cbn07XG5cbmNvbnN0IGVkaXRMaXN0ID0gKGxpc3ROYW1lLCBuZXdMaXN0ID0geyBuYW1lOiBcIk5hbWVcIiwgaWNvbjogZGVmYXVsdFN2ZyB9KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGdldExpc3QobGlzdE5hbWUpO1xuXG4gIHNlbGVjdGVkTGlzdC5uYW1lID0gbmV3TGlzdC5uYW1lO1xuICBzZWxlY3RlZExpc3QuaWNvbiA9IG5ld0xpc3QuaWNvbjtcblxuICBzYXZlTGlzdHMoKTtcbn07XG5cbmNvbnN0IGRlbGV0ZUxpc3QgPSAobGlzdE5hbWUpID0+IHtcbiAgY29uc3QgbGlzdEluZGV4ID0gZ2V0TGlzdEluZGV4KGxpc3ROYW1lKTtcblxuICBpZiAobGlzdEluZGV4ICE9PSAtMSkge1xuICAgIGNvbnRlbnQuc3BsaWNlKGxpc3RJbmRleCwgMSk7XG4gICAgc2F2ZUxpc3RzKCk7XG4gIH1cbn07XG5cbmNvbnN0IGdldExpc3QgPSAobGlzdE5hbWUpID0+IGNvbnRlbnQuZmluZCgobGlzdCkgPT4gbGlzdC5uYW1lID09PSBsaXN0TmFtZSk7XG5cbmNvbnN0IGNyZWF0ZVRhc2sgPSAoXG4gIGxpc3ROYW1lLFxuICBuZXdUYXNrID0ge1xuICAgIHRpdGxlOiBcIlRpdGxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb25cIixcbiAgICBkYXRlOiBcIkRhdGVcIixcbiAgICBwcmlvcml0eTogXCJQcmlvcml0eVwiLFxuICB9XG4pID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gZ2V0TGlzdChsaXN0TmFtZSk7XG5cbiAgLy8gUmVtb3ZlIGFueSBvdGhlciBwb3NzaWJsZSB2YWx1ZSB0byBwcmlvcml0eSB0aGF0IGlzIG5vdCBlcXVhbCB0byB0aGUgc3BlY2lmaWVkIGJlbG93XG4gIGlmIChcbiAgICAhKFxuICAgICAgbmV3VGFzay5wcmlvcml0eSA9PT0gXCJMb3dcIiB8fFxuICAgICAgbmV3VGFzay5wcmlvcml0eSA9PSBcIk1lZGl1bVwiIHx8XG4gICAgICBuZXdUYXNrLnByaW9yaXR5ID09PSBcIkhpZ2hcIlxuICAgIClcbiAgKVxuICAgIG5ld1Rhc2sucHJpb3JpdHkgPSBcIlwiO1xuXG4gIHNlbGVjdGVkTGlzdC50YXNrcy5wdXNoKFxuICAgIG5ldyBUYXNrKG5ld1Rhc2sudGl0bGUsIG5ld1Rhc2suZGVzY3JpcHRpb24sIG5ld1Rhc2suZGF0ZSwgbmV3VGFzay5wcmlvcml0eSlcbiAgKTtcbiAgc2F2ZUxpc3RzKCk7XG59O1xuXG5jb25zdCBnZXRUYXNrID0gKGxpc3QsIHRhc2tJZCkgPT4ge1xuICBmb3IgKGxldCBrZXkgaW4gbGlzdCkge1xuICAgIGlmIChrZXkgPT09IFwidGFza3NcIiB8fCBrZXkgPT09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgIGNvbnN0IHRhc2tGb3VuZCA9IGxpc3Rba2V5XS5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICAgICAgLy8gSWYgdGFzayBpcyBub3QgZm91bmQgaW4gXCJ0YXNrc1wiIGFycmF5LCBjb250aW51ZSB0byBcImNvbXBsZXRlZFwiIGFycmF5XG4gICAgICBpZiAodGFza0ZvdW5kKSByZXR1cm4gdGFza0ZvdW5kO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZ2V0VGFza0luZGV4ID0gKGxpc3QsIHRhc2tBcnJheSwgdGFza0lkKSA9PlxuICBsaXN0W3Rhc2tBcnJheV0uaW5kZXhPZihnZXRUYXNrKGxpc3QsIHRhc2tJZCkpO1xuXG5jb25zdCBjb21wbGV0ZVRhc2sgPSAobGlzdE5hbWUsIHRhc2tJZCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZExpc3QgPSBnZXRMaXN0KGxpc3ROYW1lKTtcbiAgLy8gRmluZCB0YXNrIGluZGV4IHRvIHVzZSBpdCBpbiBzcGxpY2UoKSBhcmd1bWVudHNcbiAgY29uc3QgdGFza0luZGV4ID0gZ2V0VGFza0luZGV4KHNlbGVjdGVkTGlzdCwgXCJ0YXNrc1wiLCB0YXNrSWQpO1xuICAvLyBSZW1vdmUgdGFzayBmcm9tIGFycmF5IGFuZCBjb252ZXJ0IGl0IHRvIG9iamVjdCAoaW5kZXggMClcbiAgY29uc3QgY29tcGxldGVkVGFzayA9IHNlbGVjdGVkTGlzdC50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKVswXTtcbiAgLy8gQWRkIHRhc2sgdG8gdGhlIGZyb250IG9mIGNvbXBsZXRlZCBhcnJheVxuICBzZWxlY3RlZExpc3QuY29tcGxldGVkLnVuc2hpZnQoY29tcGxldGVkVGFzayk7XG4gIHNhdmVMaXN0cygpO1xufTtcblxuY29uc3QgcmVzdG9yZVRhc2sgPSAobGlzdE5hbWUsIHRhc2tJZCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZExpc3QgPSBnZXRMaXN0KGxpc3ROYW1lKTtcbiAgLy8gRmluZCB0YXNrIGluZGV4IHRvIHVzZSBpdCBpbiBzcGxpY2UoKSBhcmd1bWVudHNcbiAgY29uc3QgdGFza0luZGV4ID0gZ2V0VGFza0luZGV4KHNlbGVjdGVkTGlzdCwgXCJjb21wbGV0ZWRcIiwgdGFza0lkKTtcbiAgLy8gUmVtb3ZlIHRhc2sgZnJvbSBhcnJheSBhbmQgY29udmVydCBpdCB0byBvYmplY3QgKGluZGV4IDApXG4gIGNvbnN0IGNvbXBsZXRlZFRhc2sgPSBzZWxlY3RlZExpc3QuY29tcGxldGVkLnNwbGljZSh0YXNrSW5kZXgsIDEpWzBdO1xuICAvLyBBZGQgdGFzayB0byB0aGUgZnJvbnQgb2YgY29tcGxldGVkIGFycmF5XG4gIHNlbGVjdGVkTGlzdC50YXNrcy5wdXNoKGNvbXBsZXRlZFRhc2spO1xuICBzYXZlTGlzdHMoKTtcbn07XG5cbmNvbnN0IG1vdmVUYXNrID0gKHRhc2tJZCwgZnJvbUxpc3ROYW1lLCB0b0xpc3ROYW1lKSA9PiB7XG4gIGNvbnN0IGZyb21MaXN0ID0gZ2V0TGlzdChmcm9tTGlzdE5hbWUpO1xuICBjb25zdCB0b0xpc3QgPSBnZXRMaXN0KHRvTGlzdE5hbWUpO1xuXG4gIGZvciAobGV0IGtleSBpbiBmcm9tTGlzdCkge1xuICAgIGlmIChrZXkgPT09IFwidGFza3NcIiB8fCBrZXkgPT09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGdldFRhc2tJbmRleChmcm9tTGlzdCwga2V5LCB0YXNrSWQpO1xuXG4gICAgICBpZiAodGFza0luZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCBtb3ZlZFRhc2sgPSBmcm9tTGlzdFtrZXldLnNwbGljZSh0YXNrSW5kZXgsIDEpWzBdO1xuICAgICAgICB0b0xpc3Rba2V5XS5wdXNoKG1vdmVkVGFzayk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGVkaXRUYXNrID0gKFxuICBsaXN0TmFtZSxcbiAgdGFza0lkLFxuICBuZXdUYXNrID0ge1xuICAgIHRpdGxlOiBcIlRpdGxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb25cIixcbiAgICBkYXRlOiBcIkRhdGVcIixcbiAgICBwcmlvcml0eTogXCJQcmlvcml0eVwiLFxuICB9XG4pID0+IHtcbiAgaWYgKGxpc3ROYW1lICE9PSBjdXJyZW50TGlzdC5uYW1lKSB7XG4gICAgbW92ZVRhc2sodGFza0lkLCBjdXJyZW50TGlzdC5uYW1lLCBsaXN0TmFtZSk7XG4gIH1cblxuICBjb25zdCBzZWxlY3RlZExpc3QgPSBnZXRMaXN0KGxpc3ROYW1lKTtcbiAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gZ2V0VGFzayhzZWxlY3RlZExpc3QsIHRhc2tJZCk7XG5cbiAgLy8gUmVtb3ZlIGFueSBvdGhlciBwb3NzaWJsZSB2YWx1ZSB0byBwcmlvcml0eSB0aGF0IGlzIG5vdCBlcXVhbCB0byB0aGUgc3BlY2lmaWVkIGJlbG93XG4gIGlmIChcbiAgICAhKFxuICAgICAgbmV3VGFzay5wcmlvcml0eSA9PT0gXCJMb3dcIiB8fFxuICAgICAgbmV3VGFzay5wcmlvcml0eSA9PSBcIk1lZGl1bVwiIHx8XG4gICAgICBuZXdUYXNrLnByaW9yaXR5ID09PSBcIkhpZ2hcIlxuICAgIClcbiAgKVxuICAgIG5ld1Rhc2sucHJpb3JpdHkgPSBcIlwiO1xuXG4gIHNlbGVjdGVkVGFzay50aXRsZSA9IG5ld1Rhc2sudGl0bGU7XG4gIHNlbGVjdGVkVGFzay5kZXNjcmlwdGlvbiA9IG5ld1Rhc2suZGVzY3JpcHRpb247XG4gIHNlbGVjdGVkVGFzay5kYXRlID0gbmV3VGFzay5kYXRlO1xuICBzZWxlY3RlZFRhc2sucHJpb3JpdHkgPSBuZXdUYXNrLnByaW9yaXR5O1xuXG4gIHNhdmVMaXN0cygpO1xufTtcblxuY29uc3QgZGVsZXRlVGFzayA9IChsaXN0TmFtZSwgdGFza0lkKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGdldExpc3QobGlzdE5hbWUpO1xuXG4gIGZvciAobGV0IGtleSBpbiBzZWxlY3RlZExpc3QpIHtcbiAgICAvLyBJdGVyYXRlIG9ubHkgaW4gdGFza3MgYW5kIGNvbXBsZXRlZCBhcnJheXMgdG8gZmluZCB0YXNrc1xuICAgIGlmIChrZXkgPT09IFwidGFza3NcIiB8fCBrZXkgPT09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGdldFRhc2tJbmRleChzZWxlY3RlZExpc3QsIGtleSwgdGFza0lkKTtcblxuICAgICAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgc2VsZWN0ZWRMaXN0W2tleV0uc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICAgIHNhdmVMaXN0cygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzZXRDdXJyZW50TGlzdCA9IChsaXN0TmFtZSkgPT4ge1xuICBjdXJyZW50TGlzdCA9IGdldExpc3QobGlzdE5hbWUpO1xufTtcblxuY29uc3QgZ2V0Q3VycmVudExpc3QgPSAoKSA9PiBjdXJyZW50TGlzdDtcblxuY29uc3QgZ2V0Q29tcGxldGVkTGVuZ3RoID0gKGxpc3ROYW1lKSA9PiBnZXRMaXN0KGxpc3ROYW1lKS5jb21wbGV0ZWQubGVuZ3RoO1xuXG5jb25zdCBnZXRMaXN0c05hbWVzID0gKCkgPT4ge1xuICBjb25zdCBuYW1lc0FycmF5ID0gW107XG4gIGNvbnRlbnQuZm9yRWFjaCgobGlzdCkgPT4gbmFtZXNBcnJheS5wdXNoKGxpc3QubmFtZSkpO1xuICByZXR1cm4gbmFtZXNBcnJheTtcbn07XG5cbmNvbnN0IGdldExpc3RzTmFtZXNJY29ucyA9ICgpID0+IHtcbiAgY29uc3QgbmFtZXNJY29uc0FycmF5ID0gW107XG5cbiAgY29udGVudC5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgY29uc3QgcHJvcGVydGllc1RvRmlsdGVyID0gW1wibmFtZVwiLCBcImljb25cIl07XG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgb2JqZWN0IHdpdGggb25seSBcIm5hbWVcIiBhbmQgXCJpY29uXCIgcHJvcGVydGllc1xuICAgIGNvbnN0IGZpbHRlcmVkTGlzdCA9IE9iamVjdC5rZXlzKGxpc3QpXG4gICAgICAuZmlsdGVyKChrZXkpID0+IHByb3BlcnRpZXNUb0ZpbHRlci5pbmNsdWRlcyhrZXkpKVxuICAgICAgLnJlZHVjZSgob2JqZWN0LCBrZXkpID0+IHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSBsaXN0W2tleV07XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICB9LCB7fSk7XG5cbiAgICBuYW1lc0ljb25zQXJyYXkucHVzaChmaWx0ZXJlZExpc3QpO1xuICB9KTtcblxuICByZXR1cm4gbmFtZXNJY29uc0FycmF5O1xufTtcblxuY29uc3QgZ2V0TGlzdEluZGV4ID0gKGxpc3ROYW1lKSA9PlxuICBjb250ZW50LmluZGV4T2YoY29udGVudC5maW5kKChsaXN0KSA9PiBsaXN0Lm5hbWUgPT0gbGlzdE5hbWUpKTtcblxuZXhwb3J0IHtcbiAgcmVmcmVzaExpc3RzLFxuICBjcmVhdGVMaXN0LFxuICBlZGl0TGlzdCxcbiAgZGVsZXRlTGlzdCxcbiAgY3JlYXRlVGFzayxcbiAgY29tcGxldGVUYXNrLFxuICByZXN0b3JlVGFzayxcbiAgZWRpdFRhc2ssXG4gIGRlbGV0ZVRhc2ssXG4gIHNldEN1cnJlbnRMaXN0LFxuICBnZXRDdXJyZW50TGlzdCxcbiAgZ2V0Q29tcGxldGVkTGVuZ3RoLFxuICBnZXRMaXN0c05hbWVzLFxuICBnZXRMaXN0c05hbWVzSWNvbnMsXG4gIGdldExpc3RJbmRleCxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=