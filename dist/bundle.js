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

/***/ "./src/data-manipulation.js":
/*!**********************************!*\
  !*** ./src/data-manipulation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataFromForms\": () => (/* binding */ dataFromForms)\n/* harmony export */ });\n\n\nfunction dataFromForms(event) {\n  event.preventDefault();\n  console.log('cacat')\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/data-manipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-manager */ \"./src/project-manager.js\");\n/* harmony import */ var _modal_manipulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-manipulation */ \"./src/modal-manipulation.js\");\n\n\n\n\n\nconst addButton = document.querySelector('.add-new');\nconst closeModalButton = document.querySelector('.modal-header .close');\n\naddButton.addEventListener('click', () => (0,_modal_manipulation__WEBPACK_IMPORTED_MODULE_3__.popModal)());\ncloseModalButton.addEventListener('click', () => (0,_modal_manipulation__WEBPACK_IMPORTED_MODULE_3__.closeModal)());\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modal-form-build.js":
/*!*********************************!*\
  !*** ./src/modal-form-build.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectForm\": () => (/* binding */ projectForm),\n/* harmony export */   \"taskForm\": () => (/* binding */ taskForm)\n/* harmony export */ });\nfunction elementFromHtml(html) {\n  const container = document.createElement('div');\n  container.innerHTML = html.trim();\n  return container;\n}\n\nconst taskForm = elementFromHtml(`\n  <input type=\"text\" id=\"title\" placeholder=\"Title: Pay bills\" required/>\n  <div class=\"dropdown\">\n    <label for=\"project\">Project to assign to: </label>\n    <select name=\"\" id=\"project\"></select>\n  </div>\n  <textarea\n    name=\"\"\n    id=\"\"\n    cols=\"30\"\n    rows=\"10\"\n    placeholder=\"Details: e.g internet, phone, rent.\">\n  </textarea>\n  <div class=\"date-container\">\n    <label for=\"date\">Due Date:</label>\n    <div class=\"date\"><input type=\"date\" id=\"date\" /></div>\n  </div>\n  <div class=\"priority-radio\">\n    <span>Priority:</span>\n    <label for=\"low\">Low</label>\n    <input type=\"radio\" name=\"priority\" value=\"low\" id=\"low\"/>\n    <label for=\"medium\">Medium</label>\n    <input type=\"radio\" name=\"priority\" value=\"medium\" id=\"medium\"/>\n    <label for=\"high\">High</label>\n    <input type=\"radio\" name=\"priority\" value=\"high\" id=\"high\"/>\n    <button type=\"submit\" class=\"task\">Add Task</button>\n  </div>\n`);\n\n\nconst projectForm = elementFromHtml(`\ncacat pansat\n`)\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modal-form-build.js?");

/***/ }),

/***/ "./src/modal-manipulation.js":
/*!***********************************!*\
  !*** ./src/modal-manipulation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"popModal\": () => (/* binding */ popModal)\n/* harmony export */ });\n/* harmony import */ var _modal_form_build__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-form-build */ \"./src/modal-form-build.js\");\n/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-manipulation */ \"./src/data-manipulation.js\");\n\n\n\n\nfunction toggleBlur() {\n  const modal = document.querySelector('.add-new-modal');\n  const header = document.querySelector('.header');\n  const content = document.querySelector('.content');\n  //check if 'popping' class in modal; means we are opening modal\n  if (modal.getAttribute('class').includes('popping')) {\n    header.style.cssText = 'filter: blur(3px)';\n    content.style.cssText = 'filter: blur(3px)';\n  } else {\n    header.style.cssText = 'filter: blur(0px)';\n    content.style.cssText = 'filter: blur(0px)';\n  }\n}\n\nfunction popModal() {\n  const modal = document.querySelector('.add-new-modal');\n  const form = document.querySelector('form');\n  modal.classList.add('popping');\n  modal.style.cssText = 'transform: scale(1)';\n  toggleBlur();\n  form.innerHTML = '';\n  form.appendChild(_modal_form_build__WEBPACK_IMPORTED_MODULE_0__.taskForm);\n  taskSubmit();\n}\n\nfunction closeModal() {\n  const modal = document.querySelector('.add-new-modal');\n  modal.classList.remove('popping');\n  modal.style.cssText = 'transform: scale(0)';\n  toggleBlur();\n}\n\n(function switchToTask() {\n  const taskButton = document.querySelector('.modal-nav .task');\n  const form = document.querySelector('form');\n  taskButton.addEventListener('click', () => {\n    form.innerHTML = '';\n    form.appendChild(_modal_form_build__WEBPACK_IMPORTED_MODULE_0__.taskForm);\n  });\n})();\n\n(function switchToProject() {\n  const projectButton = document.querySelector('.modal-nav .project');\n  const form = document.querySelector('form');\n  projectButton.addEventListener('click', () => {\n    form.innerHTML = '';\n    form.appendChild(_modal_form_build__WEBPACK_IMPORTED_MODULE_0__.projectForm);\n  });\n})();\n\nfunction taskSubmit() {\n  const taskSubmitButton = document.querySelector('form .task');\n  taskSubmitButton.removeEventListener('click', (event) => (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_1__.dataFromForms)(event));\n  taskSubmitButton.addEventListener('click', (event) => (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_1__.dataFromForms)(event));\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modal-manipulation.js?");

/***/ }),

/***/ "./src/project-manager.js":
/*!********************************!*\
  !*** ./src/project-manager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectManager)\n/* harmony export */ });\nfunction projectManager() {\n  const projects = [];\n\n  const addProject = (project) => {\n    projects.push(project);\n  };\n\n  const removeProject = (project) => {\n    for (let i = 0; i < projects.length; i++) {\n      if (projects[i].title === project) {\n        projects.splice(i, 1);\n      }\n    }\n  };\n\n  const returnProjects = () => projects;\n\n  return { addProject, removeProject, returnProjects };\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/project-manager.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(title) {\n    this.title = title;\n    this.tasks = [];\n  }\n\n  addTask(task) {\n    this.tasks.push(task)\n  }\n\n  changeTitle(value) {\n    this.title = value\n  }\n\n  get title() {\n    return this.title\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(title, project) {\n    this.title = title;\n    this.completionStatus = false;\n    this.description;\n    this.date;\n    this.priority;\n    this.project = project\n  }\n\n  set title(value) {\n    this.title = value;\n  }\n\n  addDescription(value) {\n    this.description = value;\n  }\n\n  addDueDate(value) {\n    this.date = value;\n  }\n\n  addPriority(value) {\n    this.priority = value;\n  }\n\n  toggleCompletionStatus() {\n    this.completionStatus = !this.completionStatus;\n  }\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/task.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;