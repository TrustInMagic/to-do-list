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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDataFromForms\": () => (/* binding */ getDataFromForms)\n/* harmony export */ });\n/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager */ \"./src/project-manager.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n\nfunction getDataFromForms(e) {\n  e.preventDefault();\n  //check if the form is associated with adding a task or a project\n  if (e.target.getAttribute('class').includes('task')) {\n    getDataFromTaskForm();\n  } else getDataFromProjectForm();\n}\n\nfunction getDataFromTaskForm() {\n  const taskTitleQuerier = document.querySelector('form #title');\n  const projectToAssignQuerier = document.querySelector('form select');\n  const detailsQuerier = document.querySelector('form textarea');\n  const dueDateQuerier = document.querySelector('form #date');\n  const priorityQuerier = document.querySelectorAll('form input[type=\"radio\"]');\n\n  const taskTitle = taskTitleQuerier.value;\n  const projectToAssignTo = projectToAssignQuerier.value;\n  const details = detailsQuerier.value;\n  const dueDate = dueDateQuerier.value;\n  let priority;\n\n  priorityQuerier.forEach((radio) => {\n    if (radio.checked) priority = radio.value;\n  });\n\n  const taskToAdd = new _task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](taskTitle);\n  taskToAdd.addDetails(details);\n  taskToAdd.addDueDate(dueDate);\n  taskToAdd.addPriority(priority);\n\n  const projects = _project_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].returnProjects();\n  projects.forEach((project) => {\n    if (project.getTitle() === projectToAssignTo) {\n      project.addTask(taskToAdd);\n    }\n  });\n\n  // const projectos = projectManager.returnProjects();\n  // projectos.forEach((project) => console.log(project.getTasks()));\n}\n\nfunction getDataFromProjectForm() {\n  const projectTitleQuerier = document.querySelector('form .title');\n\n  const projectTitle = projectTitleQuerier.value;\n\n  const projectToAdd = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectTitle);\n  _project_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(projectToAdd);\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/data-manipulation.js?");

/***/ }),

/***/ "./src/dom-display-project.js":
/*!************************************!*\
  !*** ./src/dom-display-project.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildProjectDomElement\": () => (/* binding */ buildProjectDomElement)\n/* harmony export */ });\n/* harmony import */ var _modal_form_build__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-form-build */ \"./src/modal-form-build.js\");\n/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-manager */ \"./src/project-manager.js\");\n\n\n\nfunction buildProjectDomElement(parent) {\n  const projects = _project_manager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].returnProjects();\n  const lastProjectAdded = projects[projects.length - 1];\n  const projectTitle = lastProjectAdded.getTitle();\n\n  console.log(projects);\n\n  const project = (0,_modal_form_build__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`\n    <div class=\"project\"><span class=\"hamburger\">☰</span>${projectTitle}\n    <span class=\"dots\">&#x22EE</span></div>\n  `);\n\n  project.addEventListener('click', () => renderProject());\n  parent.appendChild(project);\n}\n\nfunction renderProject() {}\n\n\n//# sourceURL=webpack://to-do-list/./src/dom-display-project.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-manipulation */ \"./src/modal-manipulation.js\");\n/* harmony import */ var _dom_display_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-display-project */ \"./src/dom-display-project.js\");\n/* harmony import */ var _nav_behaviour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-behaviour */ \"./src/nav-behaviour.js\");\n\n\n\n\nconst addButton = document.querySelector('.add-new');\nconst closeModalButton = document.querySelector('.modal-header .close');\nconst projectsArea = document.querySelector('.projects-area');\nconst allTasks = document.querySelector('.tasks');\nconst today = document.querySelector('.today');\nconst nextWeek = document.querySelector('.seven-days');\nconst important = document.querySelector('.important');\n\naddButton.addEventListener('click', () => (0,_modal_manipulation__WEBPACK_IMPORTED_MODULE_0__.popModal)());\ncloseModalButton.addEventListener('click', () => (0,_modal_manipulation__WEBPACK_IMPORTED_MODULE_0__.closeModal)());\nallTasks.addEventListener('click', () => (0,_nav_behaviour__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)());\ntoday.addEventListener('click', () => (0,_nav_behaviour__WEBPACK_IMPORTED_MODULE_2__.displayTodayTasks)());\nnextWeek.addEventListener('click', () => (0,_nav_behaviour__WEBPACK_IMPORTED_MODULE_2__.displayWeekTasks)());\nimportant.addEventListener('click', () => (0,_nav_behaviour__WEBPACK_IMPORTED_MODULE_2__.displayImportantTasks)());\n\n(0,_dom_display_project__WEBPACK_IMPORTED_MODULE_1__.buildProjectDomElement)(projectsArea);\n(0,_nav_behaviour__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modal-form-build.js":
/*!*********************************!*\
  !*** ./src/modal-form-build.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ elementFromHtml),\n/* harmony export */   \"projectForm\": () => (/* binding */ projectForm),\n/* harmony export */   \"taskForm\": () => (/* binding */ taskForm)\n/* harmony export */ });\nfunction elementFromHtml(html) {\n  const container = document.createElement('div');\n  container.innerHTML = html.trim();\n  return container;\n}\n\nconst taskForm = elementFromHtml(`\n  <input type=\"text\" id=\"title\" placeholder=\"Title: Pay bills\" required/>\n  <div class=\"dropdown\">\n    <label for=\"project\">Project to assign to: </label>\n    <select name=\"\" id=\"project\"></select>\n  </div>\n  <textarea cols=\"30\" rows=\"10\" placeholder=\"Details: e.g internet, phone, rent.\"></textarea>\n  <div class=\"date-container\">\n    <label for=\"date\">Due Date:</label>\n    <div class=\"date\"><input type=\"date\" id=\"date\" /></div>\n  </div>\n  <div class=\"priority-radio\">\n    <span>Priority:</span>\n    <label for=\"low\">Low</label>\n    <input type=\"radio\" name=\"priority\" value=\"low\" id=\"low\"/>\n    <label for=\"medium\">Medium</label>\n    <input type=\"radio\" name=\"priority\" value=\"medium\" id=\"medium\"/>\n    <label for=\"high\">High</label>\n    <input type=\"radio\" name=\"priority\" value=\"high\" id=\"high\"/>\n    <button type=\"submit\" class=\"task task-submit\">Add Task</button>\n  </div>\n`);\n\nconst projectForm = elementFromHtml(`\n  <input class=\"title\" type=\"text\" placeholder=\"Title: House Renovation\" required>\n  <button type=\"submit\" class=\"project-submit\">Create Project</button>\n`);\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modal-form-build.js?");

/***/ }),

/***/ "./src/modal-manipulation.js":
/*!***********************************!*\
  !*** ./src/modal-manipulation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"popModal\": () => (/* binding */ popModal)\n/* harmony export */ });\n/* harmony import */ var _dom_display_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-display-project */ \"./src/dom-display-project.js\");\n/* harmony import */ var _modal_form_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-form-build */ \"./src/modal-form-build.js\");\n/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-manipulation */ \"./src/data-manipulation.js\");\n/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-manager */ \"./src/project-manager.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n\n\n\n\nconst modal = document.querySelector('.add-new-modal');\n\nconst defaultProject = new _project__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('Your First Project');\n_project_manager__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addProject(defaultProject);\n\nfunction toggleBlur() {\n  const modal = document.querySelector('.add-new-modal');\n  const header = document.querySelector('.header');\n  const content = document.querySelector('.content');\n  //check if 'popping' class in modal; means we are opening modal\n  if (modal.getAttribute('class').includes('popping')) {\n    header.style.cssText = 'filter: blur(3px)';\n    content.style.cssText = 'filter: blur(3px)';\n  } else {\n    header.style.cssText = 'filter: blur(0px)';\n    content.style.cssText = 'filter: blur(0px)';\n  }\n}\n\nfunction populateProjectsDropdown() {\n  const dropdown = document.querySelector('.dropdown select');\n  const projects = _project_manager__WEBPACK_IMPORTED_MODULE_3__[\"default\"].returnProjects();\n  const options = projects.map((project) => project.getTitle());\n  dropdown.innerHTML = '';\n\n  for (let i = 0; i < options.length; i++) {\n    const opt = options[i];\n    const el = document.createElement('option');\n    el.textContent = opt;\n    el.value = opt;\n    dropdown.appendChild(el);\n  }\n}\n\nfunction popModal() {\n  const form = document.querySelector('form');\n  modal.classList.add('popping');\n  modal.style.cssText = 'transform: scale(1)';\n  toggleBlur();\n  form.innerHTML = '';\n  form.appendChild(_modal_form_build__WEBPACK_IMPORTED_MODULE_1__.taskForm);\n  //adding 'task' class in order to differentiate the form type (task or project)\n  form.className = '';\n  form.classList.add('task');\n  populateProjectsDropdown();\n  switchToTask();\n  switchToProject();\n  taskOrProjectSubmit();\n}\n\nfunction closeModal() {\n  const form = document.querySelector('form');\n  modal.classList.remove('popping');\n  modal.style.cssText = 'transform: scale(0)';\n  toggleBlur();\n  //replacing form node with it's clone so that we remove all event listeners\n  form.replaceWith(form.cloneNode(true));\n  form.reset();\n}\n\nfunction switchToTask() {\n  const form = document.querySelector('form');\n  const taskButton = document.querySelector('.modal-nav .task');\n  taskButton.addEventListener('click', () => {\n    form.innerHTML = '';\n    form.appendChild(_modal_form_build__WEBPACK_IMPORTED_MODULE_1__.taskForm);\n    form.className = '';\n    form.classList.add('task');\n    populateProjectsDropdown();\n  });\n}\n\nfunction switchToProject() {\n  const form = document.querySelector('form');\n  const projectButton = document.querySelector('.modal-nav .project');\n  projectButton.addEventListener('click', () => {\n    form.innerHTML = '';\n    form.appendChild(_modal_form_build__WEBPACK_IMPORTED_MODULE_1__.projectForm);\n    form.className = '';\n    form.classList.add('project');\n  });\n}\n\nfunction taskOrProjectSubmit() {\n  const form = document.querySelector('form');\n  form.addEventListener('submit', (e) => {\n    (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_2__.getDataFromForms)(e);\n    form.reset();\n    printFormSubmitStatus();\n  });\n}\n\nfunction printFormSubmitStatus() {\n  const form = document.querySelector('form');\n  const projectsArea = document.querySelector('.projects-area');\n\n  if (form.getAttribute('class').includes('task')) {\n    window.alert('Task added successfully');\n  } else {\n    window.alert('Project added successfully');\n    (0,_dom_display_project__WEBPACK_IMPORTED_MODULE_0__.buildProjectDomElement)(projectsArea);\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modal-manipulation.js?");

/***/ }),

/***/ "./src/nav-behaviour.js":
/*!******************************!*\
  !*** ./src/nav-behaviour.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayAllTasks\": () => (/* binding */ displayAllTasks),\n/* harmony export */   \"displayImportantTasks\": () => (/* binding */ displayImportantTasks),\n/* harmony export */   \"displayTodayTasks\": () => (/* binding */ displayTodayTasks),\n/* harmony export */   \"displayWeekTasks\": () => (/* binding */ displayWeekTasks)\n/* harmony export */ });\nconst mainAreaTitle = document.querySelector('.main-area-title')\n\nfunction displayAllTasks() {\n  mainAreaTitle.textContent = 'All Tasks'\n}\n\nfunction displayTodayTasks() {\n  mainAreaTitle.textContent = 'Today';\n}\n\nfunction displayWeekTasks() {\n  mainAreaTitle.textContent = 'Next 7 Days';\n}\n\nfunction displayImportantTasks() {\n  mainAreaTitle.textContent = 'Important';\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/nav-behaviour.js?");

/***/ }),

/***/ "./src/project-manager.js":
/*!********************************!*\
  !*** ./src/project-manager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function projectManager() {\n  const projects = [];\n\n  const addProject = (project) => {\n    projects.push(project);\n  };\n\n  const removeProject = (project) => {\n    for (let i = 0; i < projects.length; i++) {\n      if (projects[i].title === project) {\n        projects.splice(i, 1);\n      }\n    }\n  };\n\n  const returnProjects = () => projects;\n\n  return { addProject, removeProject, returnProjects };\n})());\n\n\n//# sourceURL=webpack://to-do-list/./src/project-manager.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(title) {\n    this.title = title;\n    this.tasks = [];\n  }\n\n  addTask(task) {\n    this.tasks.push(task)\n  }\n\n  changeTitle(value) {\n    this.title = value\n  }\n\n  getTitle() {\n    return this.title\n  }\n\n  getTasks() {\n    return this.tasks\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(title) {\n    this.title = title;\n    this.completionStatus = false;\n    this.description;\n    this.date;\n    this.priority;\n    // this.project;\n  }\n\n  changeTitle(value) {\n    this.title = value;\n  }\n\n  addDetails(value) {\n    this.description = value;\n  }\n\n  addDueDate(value) {\n    this.date = value;\n  }\n\n  addPriority(value) {\n    this.priority = value;\n  }\n\n  toggleCompletionStatus() {\n    this.completionStatus = !this.completionStatus;\n  }\n\n  // assignToProject(value) {\n  //   this.project = value;\n  // }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/task.js?");

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