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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDataFromForms\": () => (/* binding */ getDataFromForms)\n/* harmony export */ });\n/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager */ \"./src/project-manager.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n\nfunction getDataFromForms(e) {\n  e.preventDefault();\n  //check if the form is associated with adding a task or a project\n  if (e.target.getAttribute('class').includes('task')) {\n    getDataFromTaskForm();\n  } else getDataFromProjectForm();\n}\n\nfunction getDataFromTaskForm() {\n  const taskTitleQuerier = document.querySelector('form #title');\n  const projectToAssignQuerier = document.querySelector('form select');\n  const detailsQuerier = document.querySelector('form textarea');\n  const dueDateQuerier = document.querySelector('form #date');\n  const priorityQuerier = document.querySelectorAll('form input[type=\"radio\"]');\n\n  const taskTitle = taskTitleQuerier.value;\n  const projectToAssignTo = projectToAssignQuerier.value;\n  const details = detailsQuerier.value;\n  const dueDate = dueDateQuerier.value;\n  let priority;\n\n  priorityQuerier.forEach((radio) => {\n    if (radio.checked) priority = radio.value;\n  });\n\n  const taskToAdd = new _task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](taskTitle);\n  taskToAdd.addDetails(details);\n  taskToAdd.addDueDate(dueDate);\n  taskToAdd.addPriority(priority);\n\n  const projects = _project_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].returnProjects();\n  projects.forEach((project) => {\n    if (project.getTitle() === projectToAssignTo) {\n      project.addTask(taskToAdd);\n    }\n  });\n}\n\nfunction getDataFromProjectForm() {\n  const projectTitleQuerier = document.querySelector('form .title');\n\n  const projectTitle = projectTitleQuerier.value;\n\n  const projectToAdd = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectTitle);\n  _project_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(projectToAdd);\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/data-manipulation.js?");

/***/ }),

/***/ "./src/dom-display-project.js":
/*!************************************!*\
  !*** ./src/dom-display-project.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildProjectDomElement\": () => (/* binding */ buildProjectDomElement)\n/* harmony export */ });\n/* harmony import */ var _modal_form_build__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-form-build */ \"./src/modal-form-build.js\");\n/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-manager */ \"./src/project-manager.js\");\n\n\n\nfunction buildProjectDomElement(parent) {\n  const projects = _project_manager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].returnProjects();\n  const lastProjectAdded = projects[projects.length - 1];\n  const projectTitle = lastProjectAdded.getTitle();\n\n  const project = (0,_modal_form_build__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`\n    <div class=\"project\"><span class=\"hamburger\">☰</span>${projectTitle}\n    <span class=\"dots\">&#x22EE</span></div>\n  `);\n\n  project.addEventListener('click', () => renderProject());\n  parent.appendChild(project);\n}\n\nfunction renderProject() {}\n\n\n//# sourceURL=webpack://to-do-list/./src/dom-display-project.js?");

/***/ }),

/***/ "./src/dom-display-task.js":
/*!*********************************!*\
  !*** ./src/dom-display-task.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildTaskDomElement\": () => (/* binding */ buildTaskDomElement)\n/* harmony export */ });\n/* harmony import */ var _modal_form_build__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-form-build */ \"./src/modal-form-build.js\");\n\n\nfunction buildTaskDomElement(parent, tasks) {\n  for (let i = 0; i < tasks.length; i++) {\n    const taskTitle = tasks[i].title;\n    const taskDetails = tasks[i].description;\n    const taskDueDate = tasks[i].date;\n    const taskPriority = tasks[i].priority;\n    let flagColor;\n\n    let taskElement = (0,_modal_form_build__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`\n    <div class=\"task-body\">\n      <input type=\"checkbox\" class=\"task-check\">\n      <span class=\"task-title\">${taskTitle}</span>\n     <div class=\"task-due-date\">${taskDueDate}</div>\n     <div class=\"flag-container${i}\"></div>\n     <div class=\"task-dots\">&#x22EE</div>\n    </div>\n  `);\n    \n    switch (taskPriority) {\n      case 'low':\n        flagColor = 'blue'\n        break;\n      case 'medium':\n        flagColor = 'orange'\n        break\n      case 'high':\n        flagColor = 'red'\n    }\n    \n    let flag = (0,_modal_form_build__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`\n    <?xml version=\"1.0\" encoding=\"utf-8\"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\n      <svg width=\"22px\" height=\"22px\" viewBox=\"0 0 24 24\" fill=\"${flagColor}\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path opacity=\"0.15\" d=\"M4 4H20L15 9L20 14H4V4Z\"/>\n      <path d=\"M4 21V14M4 14V4H20L15 9L20 14H4Z\" stroke=\"${flagColor}\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </svg>\n  `);\n    \n        \n    parent.appendChild(taskElement)\n    const flagContainer = document.querySelector(`.flag-container${i}`)\n    flagContainer.appendChild(flag)\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/dom-display-task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-manipulation */ \"./src/modal-manipulation.js\");\n/* harmony import */ var _dom_display_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-display-project */ \"./src/dom-display-project.js\");\n/* harmony import */ var _nav_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-utility */ \"./src/nav-utility.js\");\n\n\n\n\nconst addButton = document.querySelector('.add-new');\nconst closeModalButton = document.querySelector('.modal-header .close');\nconst projectsArea = document.querySelector('.projects-area');\nconst allTasks = document.querySelector('.tasks');\nconst today = document.querySelector('.today');\nconst nextWeek = document.querySelector('.seven-days');\nconst important = document.querySelector('.important');\nconst navButtons = document.querySelectorAll('.home > div');\n\naddButton.addEventListener('click', () => (0,_modal_manipulation__WEBPACK_IMPORTED_MODULE_0__.popModal)());\ncloseModalButton.addEventListener('click', () => (0,_modal_manipulation__WEBPACK_IMPORTED_MODULE_0__.closeModal)());\n\nallTasks.addEventListener('click', () => {\n  (0,_nav_utility__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)();\n  navButtons.forEach((button) => {\n    if (button.classList.contains('tasks')) {\n      button.classList.add('active');\n    } else button.classList.remove('active');\n  });\n});\n\ntoday.addEventListener('click', () => {\n  (0,_nav_utility__WEBPACK_IMPORTED_MODULE_2__.displayTodayTasks)();\n  navButtons.forEach((button) => {\n    if (button.classList.contains('today')) {\n      button.classList.add('active');\n    } else button.classList.remove('active');\n  });\n});\n\nnextWeek.addEventListener('click', () => {\n  (0,_nav_utility__WEBPACK_IMPORTED_MODULE_2__.displayWeekTasks)();\n  navButtons.forEach((button) => {\n    if (button.classList.contains('seven-days')) {\n      button.classList.add('active');\n    } else button.classList.remove('active');\n  });\n});\n\nimportant.addEventListener('click', () => {\n  (0,_nav_utility__WEBPACK_IMPORTED_MODULE_2__.displayImportantTasks)();\n  navButtons.forEach((button) => {\n    if (button.classList.contains('important')) {\n      button.classList.add('active');\n    } else button.classList.remove('active');\n  });\n});\n\n(0,_dom_display_project__WEBPACK_IMPORTED_MODULE_1__.buildProjectDomElement)(projectsArea);\n(0,_nav_utility__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modal-form-build.js":
/*!*********************************!*\
  !*** ./src/modal-form-build.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ elementFromHtml),\n/* harmony export */   \"projectForm\": () => (/* binding */ projectForm),\n/* harmony export */   \"taskForm\": () => (/* binding */ taskForm)\n/* harmony export */ });\nfunction elementFromHtml(html) {\n  const container = document.createElement('div');\n  container.innerHTML = html.trim();\n  return container;\n}\n\nconst taskForm = elementFromHtml(`\n  <input type=\"text\" id=\"title\" placeholder=\"Title: Pay bills\" required/>\n  <div class=\"dropdown\">\n    <label for=\"project\">Project to assign to: </label>\n    <select name=\"\" id=\"project\"></select>\n  </div>\n  <textarea cols=\"30\" rows=\"10\" placeholder=\"Details: e.g internet, phone, rent.\"></textarea>\n  <div class=\"date-container\">\n    <label for=\"date\">Due Date:</label>\n    <div class=\"date\"><input type=\"date\" id=\"date\" /></div>\n  </div>\n  <div class=\"priority-radio\">\n    <span>Priority:</span>\n    <label for=\"low\">Low</label>\n    <input type=\"radio\" name=\"priority\" value=\"low\" id=\"low\" checked/>\n    <label for=\"medium\">Medium</label>\n    <input type=\"radio\" name=\"priority\" value=\"medium\" id=\"medium\"/>\n    <label for=\"high\">High</label>\n    <input type=\"radio\" name=\"priority\" value=\"high\" id=\"high\"/>\n    <button type=\"submit\" class=\"task task-submit\">Add Task</button>\n  </div>\n`);\n\nconst projectForm = elementFromHtml(`\n  <input class=\"title\" type=\"text\" placeholder=\"Title: House Renovation\" required>\n  <button type=\"submit\" class=\"project-submit\">Create Project</button>\n`);\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modal-form-build.js?");

/***/ }),

/***/ "./src/modal-manipulation.js":
/*!***********************************!*\
  !*** ./src/modal-manipulation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"popModal\": () => (/* binding */ popModal)\n/* harmony export */ });\n/* harmony import */ var _dom_display_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-display-project */ \"./src/dom-display-project.js\");\n/* harmony import */ var _modal_form_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-form-build */ \"./src/modal-form-build.js\");\n/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-manipulation */ \"./src/data-manipulation.js\");\n/* harmony import */ var _populate_main_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./populate-main-area */ \"./src/populate-main-area.js\");\n/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-manager */ \"./src/project-manager.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n\n\n\n\n\nconst modal = document.querySelector('.add-new-modal');\n\nconst defaultProject = new _project__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('Your First Project');\n_project_manager__WEBPACK_IMPORTED_MODULE_4__[\"default\"].addProject(defaultProject);\n\nfunction toggleBlur() {\n  const modal = document.querySelector('.add-new-modal');\n  const header = document.querySelector('.header');\n  const content = document.querySelector('.content');\n  //check if 'popping' class in modal; means we are opening modal\n  if (modal.getAttribute('class').includes('popping')) {\n    header.style.cssText = 'filter: blur(3px)';\n    content.style.cssText = 'filter: blur(3px)';\n  } else {\n    header.style.cssText = 'filter: blur(0px)';\n    content.style.cssText = 'filter: blur(0px)';\n  }\n}\n\nfunction populateProjectsDropdown() {\n  const dropdown = document.querySelector('.dropdown select');\n  const projects = _project_manager__WEBPACK_IMPORTED_MODULE_4__[\"default\"].returnProjects();\n  const options = projects.map((project) => project.getTitle());\n\n  if (dropdown === null) return\n\n  dropdown.innerHTML = '';\n\n  for (let i = 0; i < options.length; i++) {\n    const opt = options[i];\n    const el = document.createElement('option');\n    el.textContent = opt;\n    el.value = opt;\n    dropdown.appendChild(el);\n  }\n}\n\nfunction popModal() {\n  const form = document.querySelector('form');\n  modal.classList.add('popping');\n  modal.style.cssText = 'transform: scale(1)';\n  toggleBlur();\n  form.innerHTML = '';\n  form.appendChild(_modal_form_build__WEBPACK_IMPORTED_MODULE_1__.taskForm);\n  //adding 'task' class in order to differentiate the form type (task or project)\n  form.className = '';\n  form.classList.add('task');\n  populateProjectsDropdown();\n  switchToTask();\n  switchToProject();\n  taskOrProjectSubmit();\n}\n\nfunction closeModal() {\n  const form = document.querySelector('form');\n  modal.classList.remove('popping');\n  modal.style.cssText = 'transform: scale(0)';\n  toggleBlur();\n  //replacing form node with it's clone so that we remove all event listeners\n  form.replaceWith(form.cloneNode(true));\n  form.reset();\n}\n\nfunction switchToTask() {\n  const form = document.querySelector('form');\n  const taskButton = document.querySelector('.modal-nav .task');\n  taskButton.addEventListener('click', () => {\n    form.innerHTML = '';\n    form.appendChild(_modal_form_build__WEBPACK_IMPORTED_MODULE_1__.taskForm);\n    form.className = '';\n    form.classList.add('task');\n    populateProjectsDropdown();\n  });\n}\n\nfunction switchToProject() {\n  const form = document.querySelector('form');\n  const projectButton = document.querySelector('.modal-nav .project');\n  projectButton.addEventListener('click', () => {\n    form.innerHTML = '';\n    form.appendChild(_modal_form_build__WEBPACK_IMPORTED_MODULE_1__.projectForm);\n    form.className = '';\n    form.classList.add('project');\n  });\n}\n\nfunction taskOrProjectSubmit() {\n  const form = document.querySelector('form');\n  form.addEventListener('submit', (e) => {\n    (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_2__.getDataFromForms)(e);\n    form.reset();\n    handleFormSubmission();\n    closeModal();\n  });\n}\n\nfunction handleFormSubmission() {\n  const form = document.querySelector('form');\n  const projectsArea = document.querySelector('.projects-area');\n\n  if (form.getAttribute('class').includes('task')) {\n    window.alert('Task added successfully');\n    (0,_populate_main_area__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  } else {\n    window.alert('Project added successfully');\n    (0,_dom_display_project__WEBPACK_IMPORTED_MODULE_0__.buildProjectDomElement)(projectsArea);\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modal-manipulation.js?");

/***/ }),

/***/ "./src/nav-utility.js":
/*!****************************!*\
  !*** ./src/nav-utility.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayAllTasks\": () => (/* binding */ displayAllTasks),\n/* harmony export */   \"displayImportantTasks\": () => (/* binding */ displayImportantTasks),\n/* harmony export */   \"displayTodayTasks\": () => (/* binding */ displayTodayTasks),\n/* harmony export */   \"displayWeekTasks\": () => (/* binding */ displayWeekTasks)\n/* harmony export */ });\n/* harmony import */ var _dom_display_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-display-task */ \"./src/dom-display-task.js\");\n/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-manager */ \"./src/project-manager.js\");\n\n\n\nconst mainAreaTitle = document.querySelector('.main-area-title');\nconst mainAreaContent = document.querySelector('.main-area-content');\n\nfunction displayAllTasks() {\n  mainAreaContent.innerHTML = '';\n  mainAreaTitle.textContent = 'All Tasks';\n\n  const allTasks = [];\n  const projects = _project_manager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].returnProjects();\n  \n  projects.forEach((project) => {\n    allTasks.push(...project.getTasks());\n  });\n\n  (0,_dom_display_task__WEBPACK_IMPORTED_MODULE_0__.buildTaskDomElement)(mainAreaContent, allTasks);\n}\n\nfunction displayTodayTasks() {\n  mainAreaTitle.textContent = 'Today';\n}\n\nfunction displayWeekTasks() {\n  mainAreaTitle.textContent = 'Next 7 Days';\n}\n\nfunction displayImportantTasks() {\n  mainAreaTitle.textContent = 'Important';\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/nav-utility.js?");

/***/ }),

/***/ "./src/populate-main-area.js":
/*!***********************************!*\
  !*** ./src/populate-main-area.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ populateMainArea)\n/* harmony export */ });\n/* harmony import */ var _nav_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-utility */ \"./src/nav-utility.js\");\n\n\n// using this to help populate the main area with the adequate filtered content\nfunction populateMainArea() {\n  const navSections = document.querySelectorAll('.home > div');\n  const functionToRunDictionary = {\n    'tasks active': (0,_nav_utility__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks)(),\n    'today active': (0,_nav_utility__WEBPACK_IMPORTED_MODULE_0__.displayTodayTasks)(),\n    'seven-days active': (0,_nav_utility__WEBPACK_IMPORTED_MODULE_0__.displayWeekTasks)(),\n    'important active': (0,_nav_utility__WEBPACK_IMPORTED_MODULE_0__.displayImportantTasks)()\n  }\n\n  for (let section of navSections) {\n    if (section.classList.contains('active')) {\n      const classList = section.getAttribute('class')\n\n      functionToRunDictionary[classList]\n    }\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/populate-main-area.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(title) {\n    this.title = title;\n    this.tasks = [];\n  }\n\n  addTask(task) {\n    this.tasks.push(task)\n  }\n\n  changeTitle(value) {\n    this.title = value\n  }\n\n  getTitle() {\n    return this.title\n  }\n\n  getTasks() {\n    return this.tasks\n  }\n\n  removeCompletedTasks() {\n    for (let i = 0; i < this.tasks.length; i++) {\n      if (this.tasks[i].completionStatus === true) {\n        this.tasks.splice(i, 1)\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/project.js?");

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