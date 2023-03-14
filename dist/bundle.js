/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isBefore/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isBefore/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/data-manipulation.js":
/*!**********************************!*\
  !*** ./src/data-manipulation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDataFromForms": () => (/* binding */ getDataFromForms)
/* harmony export */ });
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");





function getDataFromForms(e) {
  e.preventDefault();
  //check if the form is associated with adding a task or a project
  if (e.target.getAttribute('class').includes('task')) {
    getDataFromTaskForm();
  } else getDataFromProjectForm();
}

function getDataFromTaskForm() {
  const taskTitleQuerier = document.querySelector('form #title');
  const projectToAssignQuerier = document.querySelector('form select');
  const detailsQuerier = document.querySelector('form textarea');
  const dueDateQuerier = document.querySelector('form #date');
  const priorityQuerier = document.querySelectorAll('form input[type="radio"]');

  const taskTitle = taskTitleQuerier.value;
  const projectToAssignTo = projectToAssignQuerier.value;
  const details = detailsQuerier.value;
  const dueDate = dueDateQuerier.value;
  let priority;

  priorityQuerier.forEach((radio) => {
    if (radio.checked) priority = radio.value;
  });

  const taskToAdd = new _task__WEBPACK_IMPORTED_MODULE_2__["default"](taskTitle);
  taskToAdd.addDetails(details);
  taskToAdd.addDueDate(dueDate);
  taskToAdd.addPriority(priority);

  const projects = _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].returnProjects();
  projects.forEach((project) => {
    if (project.getTitle() === projectToAssignTo) {
      project.addTask(taskToAdd);
    }
  });
}

function getDataFromProjectForm() {
  const projectTitleQuerier = document.querySelector('form .title');

  const projectTitle = projectTitleQuerier.value;

  const projectToAdd = new _project__WEBPACK_IMPORTED_MODULE_1__["default"](projectTitle);
  _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(projectToAdd);
}


/***/ }),

/***/ "./src/dom-display-project.js":
/*!************************************!*\
  !*** ./src/dom-display-project.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildProjectDomElement": () => (/* binding */ buildProjectDomElement),
/* harmony export */   "renderProjectTasks": () => (/* binding */ renderProjectTasks)
/* harmony export */ });
/* harmony import */ var _modal_form_build__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-form-build */ "./src/modal-form-build.js");
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");
/* harmony import */ var _dom_display_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-display-task */ "./src/dom-display-task.js");
/* harmony import */ var _edit_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-project */ "./src/edit-project.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./src/index.js");






const mainAreaContent = document.querySelector('.main-area-content');
const mainAreaTitle = document.querySelector('.main-area-title');

function buildProjectDomElement(parent) {
  const projects = _project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].returnProjects();
  const lastProjectAdded = projects[projects.length - 1];
  const projectTitle = lastProjectAdded.getTitle();
  const projectId = lastProjectAdded.id;
  

  const project = (0,_modal_form_build__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    <div class="project-container" data-id="${projectId}">
      <div class="project" data-id="${projectId}">
        <span class="hamburger">☰</span>
        <div>${projectTitle}</div>
        <span class="dots" data-id="${projectId}">&#x22EE
          <div class="pop-up" data-id="${projectId}">
            <div class="edit" data-id="${projectId}">Edit</div>
            <div class="delete" data-id="${projectId}">Delete</div>
          </div>
        </span>
      </div>
    </div>
  `);

  parent.appendChild(project);

  const projectContainer = project.querySelector('.project-container');
  projectContainer.addEventListener('click', () => {
    renderProjectTasks(lastProjectAdded);
    (0,_index__WEBPACK_IMPORTED_MODULE_4__.utilityRemoveActiveClass)();
    projectContainer.classList.add('active');
  });

  const projectEdit = project.querySelector('.dots');
  const popUp = project.querySelector('.pop-up');
  const renameButton = project.querySelector('.edit');
  const deleteButton = project.querySelector('.delete');

  renameButton.addEventListener('click', _edit_project__WEBPACK_IMPORTED_MODULE_3__.buildEditInterface);
  deleteButton.addEventListener('click', _edit_project__WEBPACK_IMPORTED_MODULE_3__.deleteProject);
  projectEdit.addEventListener('click', () => popUp.classList.add('popping'));

  window.addEventListener('click', (e) => {
    if (e.target !== projectEdit) popUp.classList.remove('popping');
  });
}

function renderProjectTasks(project) {
  const projectTasks = project.getTasks();
  const projectTitle = project.getTitle();
  mainAreaContent.innerHTML = '';

  mainAreaTitle.textContent = `Project: ${projectTitle}`;
  (0,_dom_display_task__WEBPACK_IMPORTED_MODULE_2__.buildTaskDomElement)(mainAreaContent, projectTasks);

  if (projectTasks.length === 0) {
    mainAreaContent.textContent =
      'This project appears empty. Add tasks to get started!';
  }
}


/***/ }),

/***/ "./src/dom-display-task.js":
/*!*********************************!*\
  !*** ./src/dom-display-task.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildTaskDomElement": () => (/* binding */ buildTaskDomElement)
/* harmony export */ });
/* harmony import */ var _modal_form_build__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-form-build */ "./src/modal-form-build.js");
/* harmony import */ var _edit_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-task */ "./src/edit-task.js");



function buildTaskDomElement(parent, tasks) {
  for (let i = 0; i < tasks.length; i++) {
    const taskTitle = tasks[i].title;
    const taskDetails = tasks[i].description;
    const taskDueDate = tasks[i].date;
    const taskPriority = tasks[i].priority;
    const taskId = tasks[i].id;
    let flagColor;

    let taskElement = (0,_modal_form_build__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    <div class="task-body" data-id="${taskId}">
      <input type="checkbox" class="task-check" data-id="${taskId}">
      <span class="task-title" data-id="${taskId}">${taskTitle}</span>
      <div class="task-details" data-id="${taskId}">${taskDetails}</div>
      <div class="right-container">
        <div class="task-due-date" data-id="${taskId}">${taskDueDate}</div>
        <div class="flag-container" data-id="${taskId}"></div>
        <div class="task-dots" data-id="${taskId}">&#x22EE
          <div class="pop-up" data-id="${taskId}">
            <div class="edit" data-id="${taskId}">Edit</div>
            <div class="delete" data-id="${taskId}">Delete</div>
          </div>
        </div>
      </div>
    </div>
  `);

    switch (taskPriority) {
      case 'low':
        flagColor = '#22d3ee';
        break;
      case 'medium':
        flagColor = '#fb923c';
        break;
      case 'high':
        flagColor = '#ef4444';
    }

    let flag = (0,_modal_form_build__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
      <svg width="22px" height="22px" viewBox="0 0 24 24" fill="${flagColor}" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.15" d="M4 4H20L15 9L20 14H4V4Z"/>
      <path d="M4 21V14M4 14V4H20L15 9L20 14H4Z" stroke="${flagColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `);

    parent.appendChild(taskElement);
    const flagContainer = taskElement.querySelector('.flag-container');
    const taskDomElement = taskElement.querySelector('.task-body');
    const detailsElement = taskElement.querySelector('.task-details');
    const editTask = taskElement.querySelector('.task-dots');
    const renameButton = taskElement.querySelector('.edit');
    const deleteButton = taskElement.querySelector('.delete');
    const popUp = taskElement.querySelector('.pop-up');

    renameButton.addEventListener('click', _edit_task__WEBPACK_IMPORTED_MODULE_1__.buildTaskEditInterface);
    deleteButton.addEventListener('click', _edit_task__WEBPACK_IMPORTED_MODULE_1__.deleteTask);
    editTask.addEventListener('click', () => popUp.classList.add('popping'));

    window.addEventListener('click', (e) => {
      if (e.target !== editTask) popUp.classList.remove('popping');
    });

    flagContainer.appendChild(flag);
    taskDomElement.addEventListener('click', () =>
      detailsElement.classList.toggle('show-details')
    );
  }
}


/***/ }),

/***/ "./src/edit-project.js":
/*!*****************************!*\
  !*** ./src/edit-project.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildEditInterface": () => (/* binding */ buildEditInterface),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _modal_form_build__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-form-build */ "./src/modal-form-build.js");
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");
/* harmony import */ var _nav_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-utility */ "./src/nav-utility.js");




function buildEditInterface(e) {
  const clickedProjectId = e.target.getAttribute('data-id');
  const allProjects = _project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].returnProjects();
  
  let projectToEdit
  for (let project of allProjects) {
    if (project.id === clickedProjectId) projectToEdit = project
  }
    
  const projectTitle = projectToEdit.getTitle();
  const body = document.querySelector('body');

  const editProjectModal = (0,_modal_form_build__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    <div class="add-new-modal project-edit-modal-${clickedProjectId}">
      <div class="modal-header">
        <h3>Edit Project</h3>
        <div class="close close-edit-project-${clickedProjectId}">&#x2715</div>
      </div>
      <div class="modal-content">
        <div class="modal-nav">
          <div class="project">
            <img src="../src/assets/modal-project.png">
            <div>Project</div>
          </div>
        </div>
        <form action="" class="project-edit-form-${clickedProjectId}">
          <div>
            <input class="title edit-title-${clickedProjectId}" type="text" value="${projectTitle}" required>
            <button type="submit" class="project-submit">
            Edit Project</button>
          </div>
        </form>
      </div>
    </div>
  `);

  body.appendChild(editProjectModal);
  const projectEditModal = editProjectModal.querySelector(
    `.project-edit-modal-${clickedProjectId}`
  );
  const closeButton = editProjectModal.querySelector(
    `.close-edit-project-${clickedProjectId}`
  );
  const submitForm = editProjectModal.querySelector(
    `.project-edit-form-${clickedProjectId}`
  );
  const editedTitleInput = editProjectModal.querySelector(
    `.edit-title-${clickedProjectId}`
  );

  projectEditModal.style.cssText = 'transform: scale(1)';

  closeButton.addEventListener('click', () => {
    projectEditModal.style.cssText = 'transform: scale(0)';
  });

  submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // edit project in business logic
    const editedTitle = editedTitleInput.value;
    projectToEdit.changeTitle(editedTitle);
    //edit project in DOM
    editProjectNameFromDom(clickedProjectId, editedTitle);

    projectEditModal.style.cssText = 'transform: scale(0)';
  });
}

function deleteProject(e) {
  e.stopPropagation();
  const clickedProjectId = e.target.getAttribute('data-id');
  const allProjects = _project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].returnProjects();

  let projectToDelete;
  for (let project of allProjects) {
    if (project.id === clickedProjectId) projectToDelete = project;
  }

  //remove project from business logic
  _project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].removeProject(projectToDelete)
  //remove project from DOM
  removeProjectFromDom(clickedProjectId)
  ;(0,_nav_utility__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)()
}

function editProjectNameFromDom(id, editValue) {
  const projectDomElement = document.querySelector(`.project[data-id="${id}"] > div`);
  projectDomElement.textContent = editValue;
}

function removeProjectFromDom(id) {
  const projectDomElement = document.querySelector(`.project-container[data-id="${id}"]`);
  projectDomElement.remove()
}

/***/ }),

/***/ "./src/edit-task.js":
/*!**************************!*\
  !*** ./src/edit-task.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildTaskEditInterface": () => (/* binding */ buildTaskEditInterface),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask)
/* harmony export */ });
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");
/* harmony import */ var _modal_form_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-form-build */ "./src/modal-form-build.js");
/* harmony import */ var _populate_main_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populate-main-area */ "./src/populate-main-area.js");




function buildTaskEditInterface(e) {
  const clickedTaskId = e.target.getAttribute('data-id');
  const allTasks = _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].returnAllTasks();
  let taskToEdit;
  for (let task of allTasks) {
    if (task.id === clickedTaskId) taskToEdit = task;
  }

  const body = document.querySelector('body');
  const taskTitle = taskToEdit.title;
  const taskDetails = taskToEdit.description;
  const taskDate = taskToEdit.date;

  const editTaskModal = (0,_modal_form_build__WEBPACK_IMPORTED_MODULE_1__["default"])(`
    <div class="add-new-modal task-edit-modal">
      <div class="modal-header">
        <h3>Edit Task</h3>
        <div class="close close-edit-task">&#x2715</div>
      </div>
      <div class="modal-content">
        <div class="modal-nav">
          <div class="task">
            <img src="../src/assets/modal-task.png">
            <div>Task</div>
          </div>
        </div>
        <form action="" class="task-edit-form">
          <div>
            <input type="text" id="title" placeholder="Title: Pay bills"
            class="edit-title" value="${taskTitle}" required/>
            <textarea cols="30" rows="10" placeholder="Details: e.g internet, phone, rent."
            class="edit-details">${taskDetails}</textarea>
            <div class="date-container">
              <label for="date">Due Date:</label>
              <div class="date"><input type="date" id="date"
              class="edit-date" value="${taskDate}"/>
              </div>
            </div>
            <div class="priority-radio">
              <span>Priority:</span>
              <div class="radio-button radio-low">
                <input type="radio" id="low" name="priority" value="low"/>
                <label for="low">LOW</label>
              </div>
              <div class="radio-button radio-medium">
                <input type="radio" id="medium" name="priority" value="medium"/>
                <label for="medium">MEDIUM</label>
              </div>
              <div class="radio-button radio-high">
                <input type="radio" id="high" name="priority" value="high"/>
                <label for="high">HIGH</label>
              </div>
              <button type="submit" class="task task-submit">Add Task</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `);

  body.appendChild(editTaskModal);

  (function addTaskPriority() {
    const taskPriority = taskToEdit.priority;
    const radioButtons = editTaskModal.querySelectorAll('input[type="radio"]');
    const lowRadioButton = editTaskModal.querySelector('input[id="low"]');
    const mediumRadioButton = editTaskModal.querySelector('input[id="medium"]');
    const highRadioButton = editTaskModal.querySelector('input[id="high"]');

    radioButtons.forEach((button) => button.removeAttribute('checked'));

    switch (taskPriority) {
      case 'low':
        lowRadioButton.setAttribute('checked', '');
        break;
      case 'medium':
        mediumRadioButton.setAttribute('checked', '');
        break;
      case 'high':
        highRadioButton.setAttribute('checked', '');
        break;
    }
  })();

  const taskEditModal = editTaskModal.querySelector('.task-edit-modal');
  const closeButton = editTaskModal.querySelector('.close-edit-task');
  const submitForm = editTaskModal.querySelector('.task-edit-form');
  const editedTitleInput = editTaskModal.querySelector('.edit-title');
  const editedDetailsInput = editTaskModal.querySelector('.edit-details');
  const editedDateInput = editTaskModal.querySelector('.edit-date');

  taskEditModal.style.cssText = 'transform: scale(1)';
  closeButton.addEventListener('click', () => {
    taskEditModal.style.cssText = 'transform: scale(0)';
  });

  submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // edit task in business logic
    const editedTitle = editedTitleInput.value;
    const editedDetails = editedDetailsInput.value;
    const editedDate = editedDateInput.value;
    const radioButtons = editTaskModal.querySelectorAll('input[type="radio"]');

    taskToEdit.changeTitle(editedTitle);
    taskToEdit.addDetails(editedDetails);
    taskToEdit.addDueDate(editedDate);
    radioButtons.forEach((button) => {
      if (button.checked) taskToEdit.priority = button.value;
    });
    //edit project in DOM
    (0,_populate_main_area__WEBPACK_IMPORTED_MODULE_2__["default"])();

    taskEditModal.style.cssText = 'transform: scale(0)';
  });
}

function deleteTask(e) {
  const clickedTaskId = e.target.getAttribute('data-id');
  const allTasks = _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].returnAllTasks();
  let taskToDelete;
  for (let task of allTasks) {
    if (task.id === clickedTaskId) taskToDelete = task;
  }
  //remove project from business logic
  taskToDelete.completionStatus = true;
  const allProjects = _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].returnProjects();
  allProjects.forEach((project) => project.removeCompletedTasks());
  //remove project from DOM
  (0,_populate_main_area__WEBPACK_IMPORTED_MODULE_2__["default"])();
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "utilityRemoveActiveClass": () => (/* binding */ utilityRemoveActiveClass)
/* harmony export */ });
/* harmony import */ var _modal_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-manipulation */ "./src/modal-manipulation.js");
/* harmony import */ var _dom_display_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-display-project */ "./src/dom-display-project.js");
/* harmony import */ var _nav_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-utility */ "./src/nav-utility.js");




const addButton = document.querySelector('.add-new');
const closeModalButton = document.querySelector('.modal-header .close');
const projectsArea = document.querySelector('.projects-area');
const allTasks = document.querySelector('.tasks');
const today = document.querySelector('.today');
const nextWeek = document.querySelector('.seven-days');
const important = document.querySelector('.important');

addButton.addEventListener('click', () => (0,_modal_manipulation__WEBPACK_IMPORTED_MODULE_0__.popModal)());
closeModalButton.addEventListener('click', () => (0,_modal_manipulation__WEBPACK_IMPORTED_MODULE_0__.closeModal)());

function utilityRemoveActiveClass() {
  const allElements = document.querySelectorAll('div');
  allElements.forEach((element) => element.classList.remove('active'));
}

allTasks.addEventListener('click', () => {
  (0,_nav_utility__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)();
  utilityRemoveActiveClass();
  allTasks.classList.add('active');
});

today.addEventListener('click', () => {
  (0,_nav_utility__WEBPACK_IMPORTED_MODULE_2__.displayTodayTasks)();
  utilityRemoveActiveClass();
  today.classList.add('active');
});

nextWeek.addEventListener('click', () => {
  (0,_nav_utility__WEBPACK_IMPORTED_MODULE_2__.displayWeekTasks)();
  utilityRemoveActiveClass();
  nextWeek.classList.add('active');
});

important.addEventListener('click', () => {
  (0,_nav_utility__WEBPACK_IMPORTED_MODULE_2__.displayImportantTasks)();
  utilityRemoveActiveClass();
  important.classList.add('active');
});

(0,_dom_display_project__WEBPACK_IMPORTED_MODULE_1__.buildProjectDomElement)(projectsArea);
(0,_nav_utility__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)();


/***/ }),

/***/ "./src/modal-form-build.js":
/*!*********************************!*\
  !*** ./src/modal-form-build.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ elementFromHtml),
/* harmony export */   "projectForm": () => (/* binding */ projectForm),
/* harmony export */   "taskForm": () => (/* binding */ taskForm)
/* harmony export */ });
function elementFromHtml(html) {
  const container = document.createElement('div');
  container.innerHTML = html.trim();
  return container;
}

const taskForm = elementFromHtml(`
  <input type="text" id="title" placeholder="Title: Pay bills" required/>
  <div class="dropdown">
    <label for="project">Project to assign to: </label>
    <select name="" id="project"></select>
  </div>
  <textarea cols="30" rows="10" placeholder="Details: e.g internet, phone, rent."></textarea>
  <div class="date-container">
    <label for="date">Due Date:</label>
    <div class="date"><input type="date" id="date" /></div>
  </div>
  <div class="priority-radio">
    <span>Priority:</span>
    <div class="radio-button radio-low">
      <input type="radio" id="low" name="priority" value="low"/>
      <label for="low">LOW</label>
    </div>
    <div class="radio-button radio-medium">
      <input type="radio" id="medium" name="priority" value="medium"/>
      <label for="medium">MEDIUM</label>
    </div>
    <div class="radio-button radio-high">
      <input type="radio" id="high" name="priority" value="high"/>
      <label for="high">HIGH</label>
    </div>
    <button type="submit" class="task task-submit">Add Task</button>
  </div>
`);

const projectForm = elementFromHtml(`
  <input class="title" type="text" placeholder="Title: House Renovation" required>
  <button type="submit" class="project-submit">Create Project</button>
`);




/***/ }),

/***/ "./src/modal-manipulation.js":
/*!***********************************!*\
  !*** ./src/modal-manipulation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "popModal": () => (/* binding */ popModal)
/* harmony export */ });
/* harmony import */ var _dom_display_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-display-project */ "./src/dom-display-project.js");
/* harmony import */ var _modal_form_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-form-build */ "./src/modal-form-build.js");
/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-manipulation */ "./src/data-manipulation.js");
/* harmony import */ var _populate_main_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./populate-main-area */ "./src/populate-main-area.js");
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ "./src/project.js");








const modal = document.querySelector('.add-new-modal');

const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_5__["default"]('Your First Project');
_project_manager__WEBPACK_IMPORTED_MODULE_4__["default"].addProject(defaultProject);

function utilityRemoveActiveClassFromModal() {
  const modalElements = document.querySelectorAll('.add-new-modal div');
  modalElements.forEach((element) => element.classList.remove('active'));
}

function toggleBlur() {
  const modal = document.querySelector('.add-new-modal');
  const header = document.querySelector('.header');
  const content = document.querySelector('.content');
  //check if 'popping' class in modal; means we are opening modal
  if (modal.getAttribute('class').includes('popping')) {
    header.style.cssText = 'filter: blur(3px)';
    content.style.cssText = 'filter: blur(3px)';
  } else {
    header.style.cssText = 'filter: blur(0px)';
    content.style.cssText = 'filter: blur(0px)';
  }
}

function populateProjectsDropdown() {
  const dropdown = document.querySelector('.dropdown select');
  const projects = _project_manager__WEBPACK_IMPORTED_MODULE_4__["default"].returnProjects();
  const options = projects.map((project) => project.getTitle());

  if (dropdown === null) return;

  dropdown.innerHTML = '';

  for (let i = 0; i < options.length; i++) {
    const opt = options[i];
    const el = document.createElement('option');
    el.textContent = opt;
    el.value = opt;
    dropdown.appendChild(el);
  }
}

function popModal() {
  const form = document.querySelector('form');
  const taskButton = document.querySelector('.task');
  modal.classList.add('popping');
  modal.style.cssText = 'transform: scale(1)';
  toggleBlur();
  form.innerHTML = '';
  form.appendChild(_modal_form_build__WEBPACK_IMPORTED_MODULE_1__.taskForm);
  //adding 'task' class in order to differentiate the form type (task or project)
  form.className = '';
  form.classList.add('task');
  populateProjectsDropdown();
  switchToTask();
  switchToProject();
  taskOrProjectSubmit();

  utilityRemoveActiveClassFromModal();
  taskButton.classList.add('active');
}

function closeModal() {
  const form = document.querySelector('form');
  modal.classList.remove('popping');
  modal.style.cssText = 'transform: scale(0)';
  toggleBlur();
  //replacing form node with it's clone so that we remove all event listeners
  form.replaceWith(form.cloneNode(true));
  form.reset();
}

function switchToTask() {
  const form = document.querySelector('form');
  const taskButton = document.querySelector('.modal-nav .task');
  taskButton.addEventListener('click', () => {
    form.innerHTML = '';
    form.appendChild(_modal_form_build__WEBPACK_IMPORTED_MODULE_1__.taskForm);
    form.className = '';
    form.classList.add('task');
    populateProjectsDropdown();
    utilityRemoveActiveClassFromModal();
    taskButton.classList.add('active');
  });
}

function switchToProject() {
  const form = document.querySelector('form');
  const projectButton = document.querySelector('.modal-nav .project');
  projectButton.addEventListener('click', () => {
    form.innerHTML = '';
    form.appendChild(_modal_form_build__WEBPACK_IMPORTED_MODULE_1__.projectForm);
    form.className = '';
    form.classList.add('project');
    utilityRemoveActiveClassFromModal();
    projectButton.classList.add('active');
  });
}

function taskOrProjectSubmit() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_2__.getDataFromForms)(e);
    form.reset();
    handleFormSubmission();
    closeModal();
  });
}

function handleFormSubmission() {
  const form = document.querySelector('form');
  const projectsArea = document.querySelector('.projects-area');

  if (form.getAttribute('class').includes('task')) {
    window.alert('Task added successfully');
    (0,_populate_main_area__WEBPACK_IMPORTED_MODULE_3__["default"])();
  } else {
    window.alert('Project added successfully');
    (0,_dom_display_project__WEBPACK_IMPORTED_MODULE_0__.buildProjectDomElement)(projectsArea);
  }
}


/***/ }),

/***/ "./src/nav-utility.js":
/*!****************************!*\
  !*** ./src/nav-utility.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAllTasks": () => (/* binding */ displayAllTasks),
/* harmony export */   "displayImportantTasks": () => (/* binding */ displayImportantTasks),
/* harmony export */   "displayTodayTasks": () => (/* binding */ displayTodayTasks),
/* harmony export */   "displayWeekTasks": () => (/* binding */ displayWeekTasks)
/* harmony export */ });
/* harmony import */ var _dom_display_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-display-task */ "./src/dom-display-task.js");
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns_addDays__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/addDays */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var date_fns_isBefore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/isBefore */ "./node_modules/date-fns/esm/isBefore/index.js");






const mainAreaTitle = document.querySelector('.main-area-title');
const mainAreaContent = document.querySelector('.main-area-content');

function handleNoTasks(taskList) {
  if (taskList.length === 0) {
    mainAreaContent.textContent = 'Yay! No Tasks!';
  }
}

function displayAllTasks() {
  const allTasksButton = document.querySelector('.tasks')
  mainAreaContent.innerHTML = '';
  mainAreaTitle.textContent = 'All Tasks';
  allTasksButton.classList.add('active')
  ;(0,_dom_display_task__WEBPACK_IMPORTED_MODULE_0__.buildTaskDomElement)(mainAreaContent, _project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].returnAllTasks());
  handleNoTasks(_project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].returnAllTasks());
}

function displayTodayTasks() {
  mainAreaContent.innerHTML = '';
  mainAreaTitle.textContent = 'Today';

  const allTasks = _project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].returnAllTasks();
  let todayTasks = [];

  allTasks.forEach((task) => {
    const taskDate = new Date(task.date);
    if ((0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_2__["default"])(taskDate)) todayTasks.push(task);
  });

  (0,_dom_display_task__WEBPACK_IMPORTED_MODULE_0__.buildTaskDomElement)(mainAreaContent, todayTasks);
  handleNoTasks(todayTasks)
}

function displayWeekTasks() {
  mainAreaContent.innerHTML = '';
  mainAreaTitle.textContent = 'Next 7 Days';

  const allTasks = _project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].returnAllTasks();
  let sevenDaysTasks = [];

  allTasks.forEach((task) => {
    const todayDate = new Date();
    const taskDate = new Date(task.date);
    const oneWeekLaterDate = (0,date_fns_addDays__WEBPACK_IMPORTED_MODULE_3__["default"])(todayDate, 7);
    if ((0,date_fns_isBefore__WEBPACK_IMPORTED_MODULE_4__["default"])(taskDate, oneWeekLaterDate)) sevenDaysTasks.push(task);
  });

  (0,_dom_display_task__WEBPACK_IMPORTED_MODULE_0__.buildTaskDomElement)(mainAreaContent, sevenDaysTasks);
  handleNoTasks(sevenDaysTasks)
}

function displayImportantTasks() {
  mainAreaContent.innerHTML = '';
  mainAreaTitle.textContent = 'Important';

  const allTasks = _project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].returnAllTasks();
  let importantTasks = [];

  allTasks.forEach((task) => {
    if (task.priority === 'high') {
      importantTasks.push(task);
    }
  });

  (0,_dom_display_task__WEBPACK_IMPORTED_MODULE_0__.buildTaskDomElement)(mainAreaContent, importantTasks);
  handleNoTasks(importantTasks)
}


/***/ }),

/***/ "./src/populate-main-area.js":
/*!***********************************!*\
  !*** ./src/populate-main-area.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateMainArea)
/* harmony export */ });
/* harmony import */ var _nav_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-utility */ "./src/nav-utility.js");
/* harmony import */ var _dom_display_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-display-project */ "./src/dom-display-project.js");
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");




// using this to help populate the main area with the adequate filtered content
function populateMainArea() {
  const navSections = document.querySelectorAll('.home > div');
  const projectDomElements = document.querySelectorAll(
    '.projects-area > div > div'
  );
  const functionToRunDictionary = {
    'tasks active': _nav_utility__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks,
    'today active': _nav_utility__WEBPACK_IMPORTED_MODULE_0__.displayTodayTasks,
    'seven-days active': _nav_utility__WEBPACK_IMPORTED_MODULE_0__.displayWeekTasks,
    'important active': _nav_utility__WEBPACK_IMPORTED_MODULE_0__.displayImportantTasks,
  };

  for (let section of navSections) {
    if (section.classList.contains('active')) {
      const classList = section.getAttribute('class');
      functionToRunDictionary[classList]();
      break;
    }
  }

  for (let project of projectDomElements) {
    if (project.classList.contains('active')) {
      const projectID = project.getAttribute('data-id');
      const allProjects = _project_manager__WEBPACK_IMPORTED_MODULE_2__["default"].returnProjects();
      let projectToDisplay;
      for (let project of allProjects) {
        if (project.id === projectID) projectToDisplay = project;
      }
      (0,_dom_display_project__WEBPACK_IMPORTED_MODULE_1__.renderProjectTasks)(projectToDisplay);
      break;
    }
  }

  //if no nav button or project is selected, switch to All Tasks 'tab'
  (0,_nav_utility__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks)();
}


/***/ }),

/***/ "./src/project-manager.js":
/*!********************************!*\
  !*** ./src/project-manager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function projectManager() {
  const projects = [];

  const addProject = (project) => {
    projects.push(project);
  };

  const removeProject = (project) => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].title === project.title) {
        projects.splice(i, 1);
      }
    }
  };

  const returnAllTasks = () => {
    const allTasks = [];
    for (let project of projects) {
      allTasks.push(...project.getTasks())
    }

    return allTasks
  }

  const returnProjects = () => projects;

  return { addProject, removeProject, returnProjects , returnAllTasks};
})());


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
    this.generateId();
  }

  addTask(task) {
    this.tasks.push(task)
  }

  changeTitle(value) {
    this.title = value
  }

  getTitle() {
    return this.title
  }

  getTasks() {
    return this.tasks
  }

  generateId() {
    this.id = `prj-id${Math.random().toString(16).slice(2)}`
  }

  removeCompletedTasks() {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].completionStatus === true) {
        this.tasks.splice(i, 1)
      }
    }
  }
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(title) {
    this.title = title;
    this.completionStatus = false;
    this.description;
    this.date;
    this.priority;
    this.generateId();
  }

  changeTitle(value) {
    this.title = value;
  }

  addDetails(value) {
    this.description = value;
  }

  addDueDate(value) {
    this.date = value;
  }

  addPriority(value) {
    this.priority = value;
  }

  toggleCompletionStatus() {
    this.completionStatus = !this.completionStatus;
  }

  generateId() {
    this.id = `tsk-id${Math.random().toString(16).slice(2)}`;
  }
}


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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNKZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNabUQ7QUFDWDtBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CLGVBQWUsbUVBQVM7O0FBRXhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q3dDO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkIsc0JBQXNCLDREQUFNO0FBQzVCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmdEO0FBQ1M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCwyQkFBMkIsZ0VBQVU7QUFDckMsNEJBQTRCLGdFQUFVO0FBQ3RDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQzhDO0FBQ1c7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLFNBQVMsK0RBQVM7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQndDO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBLHdCQUF3QiwyQkFBMkIsMkVBQTJFLGtDQUFrQyx3QkFBd0IsT0FBTyxrQ0FBa0MsbUlBQW1JOztBQUUzUztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLDBPQUEwTzs7QUFFMU87QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckQrQztBQUNmO0FBQ047QUFDRTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCx3QkFBd0IsNkNBQUk7QUFDNUI7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix1RUFBNkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkIsZ0RBQU87QUFDbEMsRUFBRSxtRUFBeUI7QUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEaUQ7QUFDRjtBQUNVO0FBQ1U7QUFDaEI7O0FBRW5EO0FBQ0E7O0FBRU87QUFDUCxtQkFBbUIsdUVBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiw2REFBZTtBQUNqQyw4Q0FBOEMsVUFBVTtBQUN4RCxzQ0FBc0MsVUFBVTtBQUNoRDtBQUNBLGVBQWUsYUFBYTtBQUM1QixzQ0FBc0MsVUFBVTtBQUNoRCx5Q0FBeUMsVUFBVTtBQUNuRCx5Q0FBeUMsVUFBVTtBQUNuRCwyQ0FBMkMsVUFBVTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQXdCO0FBQzVCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsNkRBQWtCO0FBQzNELHlDQUF5Qyx3REFBYTtBQUN0RDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxhQUFhO0FBQ3ZELEVBQUUsc0VBQW1COztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFaUQ7QUFDZ0I7O0FBRTFEO0FBQ1Asa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLDZEQUFlO0FBQ3JDLHNDQUFzQyxPQUFPO0FBQzdDLDJEQUEyRCxPQUFPO0FBQ2xFLDBDQUEwQyxPQUFPLElBQUksVUFBVTtBQUMvRCwyQ0FBMkMsT0FBTyxJQUFJLFlBQVk7QUFDbEU7QUFDQSw4Q0FBOEMsT0FBTyxJQUFJLFlBQVk7QUFDckUsK0NBQStDLE9BQU87QUFDdEQsMENBQTBDLE9BQU87QUFDakQseUNBQXlDLE9BQU87QUFDaEQseUNBQXlDLE9BQU87QUFDaEQsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLDZEQUFlO0FBQzlCO0FBQ0Esa0VBQWtFLFVBQVU7QUFDNUU7QUFDQSwyREFBMkQsVUFBVTtBQUNyRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDLDhEQUFzQjtBQUNqRSwyQ0FBMkMsa0RBQVU7QUFDckQ7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVpRDtBQUNGO0FBQ0E7O0FBRXhDO0FBQ1A7QUFDQSxzQkFBc0IsdUVBQTZCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLDZEQUFlO0FBQzFDLG1EQUFtRCxpQkFBaUI7QUFDcEU7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxpQkFBaUI7QUFDcEU7QUFDQSw2Q0FBNkMsaUJBQWlCLHVCQUF1QixhQUFhO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQSwwQkFBMEIsaUJBQWlCO0FBQzNDO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBLHNCQUFzQix1RUFBNkI7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxzRUFBNEI7QUFDOUI7QUFDQTtBQUNBLEVBQUUsOERBQWU7QUFDakI7O0FBRUE7QUFDQSx3RUFBd0UsR0FBRztBQUMzRTtBQUNBOztBQUVBO0FBQ0Esa0ZBQWtGLEdBQUc7QUFDckY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakcrQztBQUNFO0FBQ0c7O0FBRTdDO0FBQ1A7QUFDQSxtQkFBbUIsdUVBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qiw2REFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsVUFBVTtBQUNsRDtBQUNBLG1DQUFtQyxZQUFZO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJLCtEQUFnQjs7QUFFcEI7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBLG1CQUFtQix1RUFBNkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVFQUE2QjtBQUNuRDtBQUNBO0FBQ0EsRUFBRSwrREFBZ0I7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RJNEQ7QUFDRztBQU14Qzs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLDZEQUFRO0FBQ2xELGlEQUFpRCwrREFBVTs7QUFFcEQ7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDZEQUFlO0FBQ2pCO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsRUFBRSwrREFBaUI7QUFDbkI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxFQUFFLDhEQUFnQjtBQUNsQjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsbUVBQXFCO0FBQ3ZCO0FBQ0E7QUFDQSxDQUFDOztBQUVELDRFQUFzQjtBQUN0Qiw2REFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QzhCO0FBQ0o7QUFDSjtBQUNIO0FBQ0w7QUFDZjtBQUNBOztBQUVoQzs7QUFFQSwyQkFBMkIsZ0RBQU87QUFDbEMsbUVBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQix1RUFBNkI7QUFDaEQ7O0FBRUE7O0FBRUE7O0FBRUEsa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1REFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdURBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBEQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0VBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksK0RBQWdCO0FBQ3BCLElBQUk7QUFDSjtBQUNBLElBQUksNEVBQXNCO0FBQzFCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEl5RDtBQUNWO0FBQ1I7QUFDQTtBQUNFOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUVBQW1CLGtCQUFrQix1RUFBNkI7QUFDcEUsZ0JBQWdCLHVFQUE2QjtBQUM3Qzs7QUFFTztBQUNQO0FBQ0E7O0FBRUEsbUJBQW1CLHVFQUE2QjtBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsUUFBUSw0REFBTztBQUNmLEdBQUc7O0FBRUgsRUFBRSxzRUFBbUI7QUFDckI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUEsbUJBQW1CLHVFQUE2QjtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNERBQU87QUFDcEMsUUFBUSw2REFBUTtBQUNoQixHQUFHOztBQUVILEVBQUUsc0VBQW1CO0FBQ3JCO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBLG1CQUFtQix1RUFBNkI7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILEVBQUUsc0VBQW1CO0FBQ3JCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFdUI7QUFDb0M7QUFDWjs7QUFFL0M7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseURBQWU7QUFDbkMsb0JBQW9CLDJEQUFpQjtBQUNyQyx5QkFBeUIsMERBQWdCO0FBQ3pDLHdCQUF3QiwrREFBcUI7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVFQUE2QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0VBQWtCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsNkRBQWU7QUFDakI7Ozs7Ozs7Ozs7Ozs7OztBQzdDQSxpRUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsV0FBVztBQUNYLENBQUMsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzQlU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixvQ0FBb0M7QUFDM0Q7O0FBRUE7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLG9DQUFvQztBQUMzRDtBQUNBOzs7Ozs7O1VDakNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0JlZm9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RhdGEtbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLWRpc3BsYXktcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS1kaXNwbGF5LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZGFsLWZvcm0tYnVpbGQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2RhbC1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9uYXYtdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3BvcHVsYXRlLW1haW4tYXJlYS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNCZWZvcmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGJlZm9yZSAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNCZWZvcmUobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNCZWZvcmUoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA8IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5leHBvcnQgeyBnZXREYXRhRnJvbUZvcm1zIH07XG5cbmZ1bmN0aW9uIGdldERhdGFGcm9tRm9ybXMoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vY2hlY2sgaWYgdGhlIGZvcm0gaXMgYXNzb2NpYXRlZCB3aXRoIGFkZGluZyBhIHRhc2sgb3IgYSBwcm9qZWN0XG4gIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuaW5jbHVkZXMoJ3Rhc2snKSkge1xuICAgIGdldERhdGFGcm9tVGFza0Zvcm0oKTtcbiAgfSBlbHNlIGdldERhdGFGcm9tUHJvamVjdEZvcm0oKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YUZyb21UYXNrRm9ybSgpIHtcbiAgY29uc3QgdGFza1RpdGxlUXVlcmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gI3RpdGxlJyk7XG4gIGNvbnN0IHByb2plY3RUb0Fzc2lnblF1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIHNlbGVjdCcpO1xuICBjb25zdCBkZXRhaWxzUXVlcmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gdGV4dGFyZWEnKTtcbiAgY29uc3QgZHVlRGF0ZVF1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtICNkYXRlJyk7XG4gIGNvbnN0IHByaW9yaXR5UXVlcmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0gaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG5cbiAgY29uc3QgdGFza1RpdGxlID0gdGFza1RpdGxlUXVlcmllci52YWx1ZTtcbiAgY29uc3QgcHJvamVjdFRvQXNzaWduVG8gPSBwcm9qZWN0VG9Bc3NpZ25RdWVyaWVyLnZhbHVlO1xuICBjb25zdCBkZXRhaWxzID0gZGV0YWlsc1F1ZXJpZXIudmFsdWU7XG4gIGNvbnN0IGR1ZURhdGUgPSBkdWVEYXRlUXVlcmllci52YWx1ZTtcbiAgbGV0IHByaW9yaXR5O1xuXG4gIHByaW9yaXR5UXVlcmllci5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgIGlmIChyYWRpby5jaGVja2VkKSBwcmlvcml0eSA9IHJhZGlvLnZhbHVlO1xuICB9KTtcblxuICBjb25zdCB0YXNrVG9BZGQgPSBuZXcgVGFzayh0YXNrVGl0bGUpO1xuICB0YXNrVG9BZGQuYWRkRGV0YWlscyhkZXRhaWxzKTtcbiAgdGFza1RvQWRkLmFkZER1ZURhdGUoZHVlRGF0ZSk7XG4gIHRhc2tUb0FkZC5hZGRQcmlvcml0eShwcmlvcml0eSk7XG5cbiAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gcHJvamVjdFRvQXNzaWduVG8pIHtcbiAgICAgIHByb2plY3QuYWRkVGFzayh0YXNrVG9BZGQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldERhdGFGcm9tUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IHByb2plY3RUaXRsZVF1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIC50aXRsZScpO1xuXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZVF1ZXJpZXIudmFsdWU7XG5cbiAgY29uc3QgcHJvamVjdFRvQWRkID0gbmV3IFByb2plY3QocHJvamVjdFRpdGxlKTtcbiAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChwcm9qZWN0VG9BZGQpO1xufVxuIiwiaW1wb3J0IGVsZW1lbnRGcm9tSHRtbCBmcm9tICcuL21vZGFsLWZvcm0tYnVpbGQnO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCB7IGJ1aWxkVGFza0RvbUVsZW1lbnQgfSBmcm9tICcuL2RvbS1kaXNwbGF5LXRhc2snO1xuaW1wb3J0IHsgYnVpbGRFZGl0SW50ZXJmYWNlLCBkZWxldGVQcm9qZWN0IH0gZnJvbSAnLi9lZGl0LXByb2plY3QnO1xuaW1wb3J0IHsgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzIH0gZnJvbSAnLi9pbmRleCc7XG5cbmNvbnN0IG1haW5BcmVhQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWFyZWEtY29udGVudCcpO1xuY29uc3QgbWFpbkFyZWFUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWFyZWEtdGl0bGUnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUHJvamVjdERvbUVsZW1lbnQocGFyZW50KSB7XG4gIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgY29uc3QgbGFzdFByb2plY3RBZGRlZCA9IHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBsYXN0UHJvamVjdEFkZGVkLmdldFRpdGxlKCk7XG4gIGNvbnN0IHByb2plY3RJZCA9IGxhc3RQcm9qZWN0QWRkZWQuaWQ7XG4gIFxuXG4gIGNvbnN0IHByb2plY3QgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWNvbnRhaW5lclwiIGRhdGEtaWQ9XCIke3Byb2plY3RJZH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0XCIgZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhhbWJ1cmdlclwiPuKYsDwvc3Bhbj5cbiAgICAgICAgPGRpdj4ke3Byb2plY3RUaXRsZX08L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RzXCIgZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiPiYjeDIyRUVcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwXCIgZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRcIiBkYXRhLWlkPVwiJHtwcm9qZWN0SWR9XCI+RWRpdDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZVwiIGRhdGEtaWQ9XCIke3Byb2plY3RJZH1cIj5EZWxldGU8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcbiAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZW5kZXJQcm9qZWN0VGFza3MobGFzdFByb2plY3RBZGRlZCk7XG4gICAgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSk7XG5cbiAgY29uc3QgcHJvamVjdEVkaXQgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5kb3RzJyk7XG4gIGNvbnN0IHBvcFVwID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwJyk7XG4gIGNvbnN0IHJlbmFtZUJ1dHRvbiA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLmVkaXQnKTtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyk7XG5cbiAgcmVuYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnVpbGRFZGl0SW50ZXJmYWNlKTtcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlUHJvamVjdCk7XG4gIHByb2plY3RFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcG9wVXAuY2xhc3NMaXN0LmFkZCgncG9wcGluZycpKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCAhPT0gcHJvamVjdEVkaXQpIHBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0VGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKCk7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gIG1haW5BcmVhVGl0bGUudGV4dENvbnRlbnQgPSBgUHJvamVjdDogJHtwcm9qZWN0VGl0bGV9YDtcbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIHByb2plY3RUYXNrcyk7XG5cbiAgaWYgKHByb2plY3RUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICBtYWluQXJlYUNvbnRlbnQudGV4dENvbnRlbnQgPVxuICAgICAgJ1RoaXMgcHJvamVjdCBhcHBlYXJzIGVtcHR5LiBBZGQgdGFza3MgdG8gZ2V0IHN0YXJ0ZWQhJztcbiAgfVxufVxuIiwiaW1wb3J0IGVsZW1lbnRGcm9tSHRtbCBmcm9tICcuL21vZGFsLWZvcm0tYnVpbGQnO1xuaW1wb3J0IHsgYnVpbGRUYXNrRWRpdEludGVyZmFjZSwgZGVsZXRlVGFzayB9IGZyb20gJy4vZWRpdC10YXNrJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVGFza0RvbUVsZW1lbnQocGFyZW50LCB0YXNrcykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza1RpdGxlID0gdGFza3NbaV0udGl0bGU7XG4gICAgY29uc3QgdGFza0RldGFpbHMgPSB0YXNrc1tpXS5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2tzW2ldLmRhdGU7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGFza3NbaV0ucHJpb3JpdHk7XG4gICAgY29uc3QgdGFza0lkID0gdGFza3NbaV0uaWQ7XG4gICAgbGV0IGZsYWdDb2xvcjtcblxuICAgIGxldCB0YXNrRWxlbWVudCA9IGVsZW1lbnRGcm9tSHRtbChgXG4gICAgPGRpdiBjbGFzcz1cInRhc2stYm9keVwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRhc2stY2hlY2tcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInRhc2stdGl0bGVcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+JHt0YXNrVGl0bGV9PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlsc1wiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj4ke3Rhc2tEZXRhaWxzfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kdWUtZGF0ZVwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj4ke3Rhc2tEdWVEYXRlfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxhZy1jb250YWluZXJcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRvdHNcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+JiN4MjJFRVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdFwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj5FZGl0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlXCIgZGF0YS1pZD1cIiR7dGFza0lkfVwiPkRlbGV0ZTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgKTtcblxuICAgIHN3aXRjaCAodGFza1ByaW9yaXR5KSB7XG4gICAgICBjYXNlICdsb3cnOlxuICAgICAgICBmbGFnQ29sb3IgPSAnIzIyZDNlZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgZmxhZ0NvbG9yID0gJyNmYjkyM2MnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICBmbGFnQ29sb3IgPSAnI2VmNDQ0NCc7XG4gICAgfVxuXG4gICAgbGV0IGZsYWcgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cInV0Zi04XCI/PjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+XG4gICAgICA8c3ZnIHdpZHRoPVwiMjJweFwiIGhlaWdodD1cIjIycHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIiR7ZmxhZ0NvbG9yfVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgIDxwYXRoIG9wYWNpdHk9XCIwLjE1XCIgZD1cIk00IDRIMjBMMTUgOUwyMCAxNEg0VjRaXCIvPlxuICAgICAgPHBhdGggZD1cIk00IDIxVjE0TTQgMTRWNEgyMEwxNSA5TDIwIDE0SDRaXCIgc3Ryb2tlPVwiJHtmbGFnQ29sb3J9XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxuICAgIDwvc3ZnPlxuICBgKTtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gICAgY29uc3QgZmxhZ0NvbnRhaW5lciA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGFnLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRhc2tEb21FbGVtZW50ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYm9keScpO1xuICAgIGNvbnN0IGRldGFpbHNFbGVtZW50ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlscycpO1xuICAgIGNvbnN0IGVkaXRUYXNrID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZG90cycpO1xuICAgIGNvbnN0IHJlbmFtZUJ1dHRvbiA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuICAgIGNvbnN0IHBvcFVwID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cCcpO1xuXG4gICAgcmVuYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnVpbGRUYXNrRWRpdEludGVyZmFjZSk7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVGFzayk7XG4gICAgZWRpdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwb3BVcC5jbGFzc0xpc3QuYWRkKCdwb3BwaW5nJykpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCAhPT0gZWRpdFRhc2spIHBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgICB9KTtcblxuICAgIGZsYWdDb250YWluZXIuYXBwZW5kQ2hpbGQoZmxhZyk7XG4gICAgdGFza0RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgZGV0YWlsc0VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1kZXRhaWxzJylcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZWxlbWVudEZyb21IdG1sIGZyb20gJy4vbW9kYWwtZm9ybS1idWlsZCc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IHsgZGlzcGxheUFsbFRhc2tzIH0gZnJvbSAnLi9uYXYtdXRpbGl0eSdcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRWRpdEludGVyZmFjZShlKSB7XG4gIGNvbnN0IGNsaWNrZWRQcm9qZWN0SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuICBcbiAgbGV0IHByb2plY3RUb0VkaXRcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0cykge1xuICAgIGlmIChwcm9qZWN0LmlkID09PSBjbGlja2VkUHJvamVjdElkKSBwcm9qZWN0VG9FZGl0ID0gcHJvamVjdFxuICB9XG4gICAgXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RUb0VkaXQuZ2V0VGl0bGUoKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICBjb25zdCBlZGl0UHJvamVjdE1vZGFsID0gZWxlbWVudEZyb21IdG1sKGBcbiAgICA8ZGl2IGNsYXNzPVwiYWRkLW5ldy1tb2RhbCBwcm9qZWN0LWVkaXQtbW9kYWwtJHtjbGlja2VkUHJvamVjdElkfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICA8aDM+RWRpdCBQcm9qZWN0PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlIGNsb3NlLWVkaXQtcHJvamVjdC0ke2NsaWNrZWRQcm9qZWN0SWR9XCI+JiN4MjcxNTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtbmF2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9tb2RhbC1wcm9qZWN0LnBuZ1wiPlxuICAgICAgICAgICAgPGRpdj5Qcm9qZWN0PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cInByb2plY3QtZWRpdC1mb3JtLSR7Y2xpY2tlZFByb2plY3RJZH1cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidGl0bGUgZWRpdC10aXRsZS0ke2NsaWNrZWRQcm9qZWN0SWR9XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7cHJvamVjdFRpdGxlfVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJwcm9qZWN0LXN1Ym1pdFwiPlxuICAgICAgICAgICAgRWRpdCBQcm9qZWN0PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0TW9kYWwpO1xuICBjb25zdCBwcm9qZWN0RWRpdE1vZGFsID0gZWRpdFByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICAgIGAucHJvamVjdC1lZGl0LW1vZGFsLSR7Y2xpY2tlZFByb2plY3RJZH1gXG4gICk7XG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZWRpdFByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuY2xvc2UtZWRpdC1wcm9qZWN0LSR7Y2xpY2tlZFByb2plY3RJZH1gXG4gICk7XG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSBlZGl0UHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5wcm9qZWN0LWVkaXQtZm9ybS0ke2NsaWNrZWRQcm9qZWN0SWR9YFxuICApO1xuICBjb25zdCBlZGl0ZWRUaXRsZUlucHV0ID0gZWRpdFByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuZWRpdC10aXRsZS0ke2NsaWNrZWRQcm9qZWN0SWR9YFxuICApO1xuXG4gIHByb2plY3RFZGl0TW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDEpJztcblxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9qZWN0RWRpdE1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgwKSc7XG4gIH0pO1xuXG4gIHN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gZWRpdCBwcm9qZWN0IGluIGJ1c2luZXNzIGxvZ2ljXG4gICAgY29uc3QgZWRpdGVkVGl0bGUgPSBlZGl0ZWRUaXRsZUlucHV0LnZhbHVlO1xuICAgIHByb2plY3RUb0VkaXQuY2hhbmdlVGl0bGUoZWRpdGVkVGl0bGUpO1xuICAgIC8vZWRpdCBwcm9qZWN0IGluIERPTVxuICAgIGVkaXRQcm9qZWN0TmFtZUZyb21Eb20oY2xpY2tlZFByb2plY3RJZCwgZWRpdGVkVGl0bGUpO1xuXG4gICAgcHJvamVjdEVkaXRNb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMCknO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSkge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBjb25zdCBjbGlja2VkUHJvamVjdElkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcblxuICBsZXQgcHJvamVjdFRvRGVsZXRlO1xuICBmb3IgKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzKSB7XG4gICAgaWYgKHByb2plY3QuaWQgPT09IGNsaWNrZWRQcm9qZWN0SWQpIHByb2plY3RUb0RlbGV0ZSA9IHByb2plY3Q7XG4gIH1cblxuICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gYnVzaW5lc3MgbG9naWNcbiAgcHJvamVjdE1hbmFnZXIucmVtb3ZlUHJvamVjdChwcm9qZWN0VG9EZWxldGUpXG4gIC8vcmVtb3ZlIHByb2plY3QgZnJvbSBET01cbiAgcmVtb3ZlUHJvamVjdEZyb21Eb20oY2xpY2tlZFByb2plY3RJZClcbiAgZGlzcGxheUFsbFRhc2tzKClcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3ROYW1lRnJvbURvbShpZCwgZWRpdFZhbHVlKSB7XG4gIGNvbnN0IHByb2plY3REb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RbZGF0YS1pZD1cIiR7aWR9XCJdID4gZGl2YCk7XG4gIHByb2plY3REb21FbGVtZW50LnRleHRDb250ZW50ID0gZWRpdFZhbHVlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0RnJvbURvbShpZCkge1xuICBjb25zdCBwcm9qZWN0RG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWNvbnRhaW5lcltkYXRhLWlkPVwiJHtpZH1cIl1gKTtcbiAgcHJvamVjdERvbUVsZW1lbnQucmVtb3ZlKClcbn0iLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IGVsZW1lbnRGcm9tSHRtbCBmcm9tICcuL21vZGFsLWZvcm0tYnVpbGQnO1xuaW1wb3J0IHBvcHVsYXRlTWFpbkFyZWEgZnJvbSAnLi9wb3B1bGF0ZS1tYWluLWFyZWEnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUYXNrRWRpdEludGVyZmFjZShlKSB7XG4gIGNvbnN0IGNsaWNrZWRUYXNrSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5BbGxUYXNrcygpO1xuICBsZXQgdGFza1RvRWRpdDtcbiAgZm9yIChsZXQgdGFzayBvZiBhbGxUYXNrcykge1xuICAgIGlmICh0YXNrLmlkID09PSBjbGlja2VkVGFza0lkKSB0YXNrVG9FZGl0ID0gdGFzaztcbiAgfVxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tUb0VkaXQudGl0bGU7XG4gIGNvbnN0IHRhc2tEZXRhaWxzID0gdGFza1RvRWRpdC5kZXNjcmlwdGlvbjtcbiAgY29uc3QgdGFza0RhdGUgPSB0YXNrVG9FZGl0LmRhdGU7XG5cbiAgY29uc3QgZWRpdFRhc2tNb2RhbCA9IGVsZW1lbnRGcm9tSHRtbChgXG4gICAgPGRpdiBjbGFzcz1cImFkZC1uZXctbW9kYWwgdGFzay1lZGl0LW1vZGFsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgIDxoMz5FZGl0IFRhc2s8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UgY2xvc2UtZWRpdC10YXNrXCI+JiN4MjcxNTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtbmF2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9tb2RhbC10YXNrLnBuZ1wiPlxuICAgICAgICAgICAgPGRpdj5UYXNrPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cInRhc2stZWRpdC1mb3JtXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlOiBQYXkgYmlsbHNcIlxuICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRpdGxlXCIgdmFsdWU9XCIke3Rhc2tUaXRsZX1cIiByZXF1aXJlZC8+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJEZXRhaWxzOiBlLmcgaW50ZXJuZXQsIHBob25lLCByZW50LlwiXG4gICAgICAgICAgICBjbGFzcz1cImVkaXQtZGV0YWlsc1wiPiR7dGFza0RldGFpbHN9PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+PGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJlZGl0LWRhdGVcIiB2YWx1ZT1cIiR7dGFza0RhdGV9XCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5LXJhZGlvXCI+XG4gICAgICAgICAgICAgIDxzcGFuPlByaW9yaXR5Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvLWJ1dHRvbiByYWRpby1sb3dcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJsb3dcIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImxvd1wiLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibG93XCI+TE9XPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpby1idXR0b24gcmFkaW8tbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwibWVkaXVtXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJtZWRpdW1cIi8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1lZGl1bVwiPk1FRElVTTwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW8tYnV0dG9uIHJhZGlvLWhpZ2hcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJoaWdoXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJoaWdoXCIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJoaWdoXCI+SElHSDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInRhc2sgdGFzay1zdWJtaXRcIj5BZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGVkaXRUYXNrTW9kYWwpO1xuXG4gIChmdW5jdGlvbiBhZGRUYXNrUHJpb3JpdHkoKSB7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGFza1RvRWRpdC5wcmlvcml0eTtcbiAgICBjb25zdCByYWRpb0J1dHRvbnMgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuICAgIGNvbnN0IGxvd1JhZGlvQnV0dG9uID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImxvd1wiXScpO1xuICAgIGNvbnN0IG1lZGl1bVJhZGlvQnV0dG9uID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cIm1lZGl1bVwiXScpO1xuICAgIGNvbnN0IGhpZ2hSYWRpb0J1dHRvbiA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJoaWdoXCJdJyk7XG5cbiAgICByYWRpb0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJykpO1xuXG4gICAgc3dpdGNoICh0YXNrUHJpb3JpdHkpIHtcbiAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgIGxvd1JhZGlvQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICBtZWRpdW1SYWRpb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgIGhpZ2hSYWRpb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSkoKTtcblxuICBjb25zdCB0YXNrRWRpdE1vZGFsID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0LW1vZGFsJyk7XG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZWRpdC10YXNrJyk7XG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXQtZm9ybScpO1xuICBjb25zdCBlZGl0ZWRUaXRsZUlucHV0ID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10aXRsZScpO1xuICBjb25zdCBlZGl0ZWREZXRhaWxzSW5wdXQgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWRldGFpbHMnKTtcbiAgY29uc3QgZWRpdGVkRGF0ZUlucHV0ID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1kYXRlJyk7XG5cbiAgdGFza0VkaXRNb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMSknO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YXNrRWRpdE1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgwKSc7XG4gIH0pO1xuXG4gIHN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gZWRpdCB0YXNrIGluIGJ1c2luZXNzIGxvZ2ljXG4gICAgY29uc3QgZWRpdGVkVGl0bGUgPSBlZGl0ZWRUaXRsZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGVkaXRlZERldGFpbHMgPSBlZGl0ZWREZXRhaWxzSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZWRpdGVkRGF0ZSA9IGVkaXRlZERhdGVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCByYWRpb0J1dHRvbnMgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuXG4gICAgdGFza1RvRWRpdC5jaGFuZ2VUaXRsZShlZGl0ZWRUaXRsZSk7XG4gICAgdGFza1RvRWRpdC5hZGREZXRhaWxzKGVkaXRlZERldGFpbHMpO1xuICAgIHRhc2tUb0VkaXQuYWRkRHVlRGF0ZShlZGl0ZWREYXRlKTtcbiAgICByYWRpb0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoYnV0dG9uLmNoZWNrZWQpIHRhc2tUb0VkaXQucHJpb3JpdHkgPSBidXR0b24udmFsdWU7XG4gICAgfSk7XG4gICAgLy9lZGl0IHByb2plY3QgaW4gRE9NXG4gICAgcG9wdWxhdGVNYWluQXJlYSgpO1xuXG4gICAgdGFza0VkaXRNb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMCknO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2soZSkge1xuICBjb25zdCBjbGlja2VkVGFza0lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuQWxsVGFza3MoKTtcbiAgbGV0IHRhc2tUb0RlbGV0ZTtcbiAgZm9yIChsZXQgdGFzayBvZiBhbGxUYXNrcykge1xuICAgIGlmICh0YXNrLmlkID09PSBjbGlja2VkVGFza0lkKSB0YXNrVG9EZWxldGUgPSB0YXNrO1xuICB9XG4gIC8vcmVtb3ZlIHByb2plY3QgZnJvbSBidXNpbmVzcyBsb2dpY1xuICB0YXNrVG9EZWxldGUuY29tcGxldGlvblN0YXR1cyA9IHRydWU7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4gcHJvamVjdC5yZW1vdmVDb21wbGV0ZWRUYXNrcygpKTtcbiAgLy9yZW1vdmUgcHJvamVjdCBmcm9tIERPTVxuICBwb3B1bGF0ZU1haW5BcmVhKCk7XG59XG4iLCJpbXBvcnQgeyBwb3BNb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gJy4vbW9kYWwtbWFuaXB1bGF0aW9uJztcbmltcG9ydCB7IGJ1aWxkUHJvamVjdERvbUVsZW1lbnQgfSBmcm9tICcuL2RvbS1kaXNwbGF5LXByb2plY3QnO1xuaW1wb3J0IHtcbiAgZGlzcGxheUFsbFRhc2tzLFxuICBkaXNwbGF5SW1wb3J0YW50VGFza3MsXG4gIGRpc3BsYXlUb2RheVRhc2tzLFxuICBkaXNwbGF5V2Vla1Rhc2tzLFxufSBmcm9tICcuL25hdi11dGlsaXR5JztcblxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXcnKTtcbmNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtaGVhZGVyIC5jbG9zZScpO1xuY29uc3QgcHJvamVjdHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWFyZWEnKTtcbmNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpO1xuY29uc3QgbmV4dFdlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V2ZW4tZGF5cycpO1xuY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltcG9ydGFudCcpO1xuXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwb3BNb2RhbCgpKTtcbmNsb3NlTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKCkpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzKCkge1xuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xuICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbn1cblxuYWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRpc3BsYXlBbGxUYXNrcygpO1xuICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgYWxsVGFza3MuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59KTtcblxudG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRpc3BsYXlUb2RheVRhc2tzKCk7XG4gIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzcygpO1xuICB0b2RheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pO1xuXG5uZXh0V2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZGlzcGxheVdlZWtUYXNrcygpO1xuICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgbmV4dFdlZWsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59KTtcblxuaW1wb3J0YW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkaXNwbGF5SW1wb3J0YW50VGFza3MoKTtcbiAgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gIGltcG9ydGFudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pO1xuXG5idWlsZFByb2plY3REb21FbGVtZW50KHByb2plY3RzQXJlYSk7XG5kaXNwbGF5QWxsVGFza3MoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVsZW1lbnRGcm9tSHRtbChodG1sKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gaHRtbC50cmltKCk7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IHRhc2tGb3JtID0gZWxlbWVudEZyb21IdG1sKGBcbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGU6IFBheSBiaWxsc1wiIHJlcXVpcmVkLz5cbiAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+XG4gICAgPGxhYmVsIGZvcj1cInByb2plY3RcIj5Qcm9qZWN0IHRvIGFzc2lnbiB0bzogPC9sYWJlbD5cbiAgICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cInByb2plY3RcIj48L3NlbGVjdD5cbiAgPC9kaXY+XG4gIDx0ZXh0YXJlYSBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIkRldGFpbHM6IGUuZyBpbnRlcm5ldCwgcGhvbmUsIHJlbnQuXCI+PC90ZXh0YXJlYT5cbiAgPGRpdiBjbGFzcz1cImRhdGUtY29udGFpbmVyXCI+XG4gICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+PGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgLz48L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1yYWRpb1wiPlxuICAgIDxzcGFuPlByaW9yaXR5Ojwvc3Bhbj5cbiAgICA8ZGl2IGNsYXNzPVwicmFkaW8tYnV0dG9uIHJhZGlvLWxvd1wiPlxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwibG93XCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJsb3dcIi8+XG4gICAgICA8bGFiZWwgZm9yPVwibG93XCI+TE9XPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmFkaW8tYnV0dG9uIHJhZGlvLW1lZGl1bVwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwibWVkaXVtXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJtZWRpdW1cIi8+XG4gICAgICA8bGFiZWwgZm9yPVwibWVkaXVtXCI+TUVESVVNPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmFkaW8tYnV0dG9uIHJhZGlvLWhpZ2hcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImhpZ2hcIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImhpZ2hcIi8+XG4gICAgICA8bGFiZWwgZm9yPVwiaGlnaFwiPkhJR0g8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwidGFzayB0YXNrLXN1Ym1pdFwiPkFkZCBUYXNrPC9idXR0b24+XG4gIDwvZGl2PlxuYCk7XG5cbmNvbnN0IHByb2plY3RGb3JtID0gZWxlbWVudEZyb21IdG1sKGBcbiAgPGlucHV0IGNsYXNzPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGl0bGU6IEhvdXNlIFJlbm92YXRpb25cIiByZXF1aXJlZD5cbiAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJwcm9qZWN0LXN1Ym1pdFwiPkNyZWF0ZSBQcm9qZWN0PC9idXR0b24+XG5gKTtcblxuZXhwb3J0IHsgdGFza0Zvcm0sIHByb2plY3RGb3JtIH07XG4iLCJpbXBvcnQgeyBidWlsZFByb2plY3REb21FbGVtZW50IH0gZnJvbSAnLi9kb20tZGlzcGxheS1wcm9qZWN0JztcbmltcG9ydCB7IHRhc2tGb3JtLCBwcm9qZWN0Rm9ybSB9IGZyb20gJy4vbW9kYWwtZm9ybS1idWlsZCc7XG5pbXBvcnQgeyBnZXREYXRhRnJvbUZvcm1zIH0gZnJvbSAnLi9kYXRhLW1hbmlwdWxhdGlvbic7XG5pbXBvcnQgcG9wdWxhdGVNYWluQXJlYSBmcm9tICcuL3BvcHVsYXRlLW1haW4tYXJlYSc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmV4cG9ydCB7IHBvcE1vZGFsLCBjbG9zZU1vZGFsIH07XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctbW9kYWwnKTtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgnWW91ciBGaXJzdCBQcm9qZWN0Jyk7XG5wcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcblxuZnVuY3Rpb24gdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzRnJvbU1vZGFsKCkge1xuICBjb25zdCBtb2RhbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC1uZXctbW9kYWwgZGl2Jyk7XG4gIG1vZGFsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUJsdXIoKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctbW9kYWwnKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgLy9jaGVjayBpZiAncG9wcGluZycgY2xhc3MgaW4gbW9kYWw7IG1lYW5zIHdlIGFyZSBvcGVuaW5nIG1vZGFsXG4gIGlmIChtb2RhbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuaW5jbHVkZXMoJ3BvcHBpbmcnKSkge1xuICAgIGhlYWRlci5zdHlsZS5jc3NUZXh0ID0gJ2ZpbHRlcjogYmx1cigzcHgpJztcbiAgICBjb250ZW50LnN0eWxlLmNzc1RleHQgPSAnZmlsdGVyOiBibHVyKDNweCknO1xuICB9IGVsc2Uge1xuICAgIGhlYWRlci5zdHlsZS5jc3NUZXh0ID0gJ2ZpbHRlcjogYmx1cigwcHgpJztcbiAgICBjb250ZW50LnN0eWxlLmNzc1RleHQgPSAnZmlsdGVyOiBibHVyKDBweCknO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdHNEcm9wZG93bigpIHtcbiAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24gc2VsZWN0Jyk7XG4gIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUaXRsZSgpKTtcblxuICBpZiAoZHJvcGRvd24gPT09IG51bGwpIHJldHVybjtcblxuICBkcm9wZG93bi5pbm5lckhUTUwgPSAnJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBvcHQgPSBvcHRpb25zW2ldO1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZWwudGV4dENvbnRlbnQgPSBvcHQ7XG4gICAgZWwudmFsdWUgPSBvcHQ7XG4gICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoZWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvcE1vZGFsKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgncG9wcGluZycpO1xuICBtb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMSknO1xuICB0b2dnbGVCbHVyKCk7XG4gIGZvcm0uaW5uZXJIVE1MID0gJyc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICAvL2FkZGluZyAndGFzaycgY2xhc3MgaW4gb3JkZXIgdG8gZGlmZmVyZW50aWF0ZSB0aGUgZm9ybSB0eXBlICh0YXNrIG9yIHByb2plY3QpXG4gIGZvcm0uY2xhc3NOYW1lID0gJyc7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24oKTtcbiAgc3dpdGNoVG9UYXNrKCk7XG4gIHN3aXRjaFRvUHJvamVjdCgpO1xuICB0YXNrT3JQcm9qZWN0U3VibWl0KCk7XG5cbiAgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzRnJvbU1vZGFsKCk7XG4gIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgbW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDApJztcbiAgdG9nZ2xlQmx1cigpO1xuICAvL3JlcGxhY2luZyBmb3JtIG5vZGUgd2l0aCBpdCdzIGNsb25lIHNvIHRoYXQgd2UgcmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnNcbiAgZm9ybS5yZXBsYWNlV2l0aChmb3JtLmNsb25lTm9kZSh0cnVlKSk7XG4gIGZvcm0ucmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoVG9UYXNrKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW5hdiAudGFzaycpO1xuICB0YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZvcm0uaW5uZXJIVE1MID0gJyc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSAnJztcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24oKTtcbiAgICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3NGcm9tTW9kYWwoKTtcbiAgICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoVG9Qcm9qZWN0KCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW5hdiAucHJvamVjdCcpO1xuICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZvcm0uaW5uZXJIVE1MID0gJyc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSAnJztcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3NGcm9tTW9kYWwoKTtcbiAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdGFza09yUHJvamVjdFN1Ym1pdCgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGdldERhdGFGcm9tRm9ybXMoZSk7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGhhbmRsZUZvcm1TdWJtaXNzaW9uKCk7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pc3Npb24oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IHByb2plY3RzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1hcmVhJyk7XG5cbiAgaWYgKGZvcm0uZ2V0QXR0cmlidXRlKCdjbGFzcycpLmluY2x1ZGVzKCd0YXNrJykpIHtcbiAgICB3aW5kb3cuYWxlcnQoJ1Rhc2sgYWRkZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgcG9wdWxhdGVNYWluQXJlYSgpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5hbGVydCgnUHJvamVjdCBhZGRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICBidWlsZFByb2plY3REb21FbGVtZW50KHByb2plY3RzQXJlYSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGJ1aWxkVGFza0RvbUVsZW1lbnQgfSBmcm9tICcuL2RvbS1kaXNwbGF5LXRhc2snO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCBpc1RvZGF5IGZyb20gJ2RhdGUtZm5zL2lzVG9kYXknO1xuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkRGF5cyc7XG5pbXBvcnQgaXNCZWZvcmUgZnJvbSAnZGF0ZS1mbnMvaXNCZWZvcmUnO1xuXG5jb25zdCBtYWluQXJlYVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJlYS10aXRsZScpO1xuY29uc3QgbWFpbkFyZWFDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJlYS1jb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGhhbmRsZU5vVGFza3ModGFza0xpc3QpIHtcbiAgaWYgKHRhc2tMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIG1haW5BcmVhQ29udGVudC50ZXh0Q29udGVudCA9ICdZYXkhIE5vIFRhc2tzISc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcbiAgY29uc3QgYWxsVGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxuICBtYWluQXJlYUNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIG1haW5BcmVhVGl0bGUudGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcbiAgYWxsVGFza3NCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCkpO1xuICBoYW5kbGVOb1Rhc2tzKHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZGF5VGFza3MoKSB7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG5cbiAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5BbGxUYXNrcygpO1xuICBsZXQgdG9kYXlUYXNrcyA9IFtdO1xuXG4gIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZGF0ZSk7XG4gICAgaWYgKGlzVG9kYXkodGFza0RhdGUpKSB0b2RheVRhc2tzLnB1c2godGFzayk7XG4gIH0pO1xuXG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCB0b2RheVRhc2tzKTtcbiAgaGFuZGxlTm9UYXNrcyh0b2RheVRhc2tzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVdlZWtUYXNrcygpIHtcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBtYWluQXJlYVRpdGxlLnRleHRDb250ZW50ID0gJ05leHQgNyBEYXlzJztcblxuICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCk7XG4gIGxldCBzZXZlbkRheXNUYXNrcyA9IFtdO1xuXG4gIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kYXRlKTtcbiAgICBjb25zdCBvbmVXZWVrTGF0ZXJEYXRlID0gYWRkRGF5cyh0b2RheURhdGUsIDcpO1xuICAgIGlmIChpc0JlZm9yZSh0YXNrRGF0ZSwgb25lV2Vla0xhdGVyRGF0ZSkpIHNldmVuRGF5c1Rhc2tzLnB1c2godGFzayk7XG4gIH0pO1xuXG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCBzZXZlbkRheXNUYXNrcyk7XG4gIGhhbmRsZU5vVGFza3Moc2V2ZW5EYXlzVGFza3MpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SW1wb3J0YW50VGFza3MoKSB7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuXG4gIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuQWxsVGFza3MoKTtcbiAgbGV0IGltcG9ydGFudFRhc2tzID0gW107XG5cbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgIGltcG9ydGFudFRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICB9KTtcblxuICBidWlsZFRhc2tEb21FbGVtZW50KG1haW5BcmVhQ29udGVudCwgaW1wb3J0YW50VGFza3MpO1xuICBoYW5kbGVOb1Rhc2tzKGltcG9ydGFudFRhc2tzKVxufVxuIiwiaW1wb3J0IHtcbiAgZGlzcGxheUFsbFRhc2tzLFxuICBkaXNwbGF5SW1wb3J0YW50VGFza3MsXG4gIGRpc3BsYXlUb2RheVRhc2tzLFxuICBkaXNwbGF5V2Vla1Rhc2tzLFxufSBmcm9tICcuL25hdi11dGlsaXR5JztcbmltcG9ydCB7IHJlbmRlclByb2plY3RUYXNrcyB9IGZyb20gJy4vZG9tLWRpc3BsYXktcHJvamVjdCc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuXG4vLyB1c2luZyB0aGlzIHRvIGhlbHAgcG9wdWxhdGUgdGhlIG1haW4gYXJlYSB3aXRoIHRoZSBhZGVxdWF0ZSBmaWx0ZXJlZCBjb250ZW50XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZU1haW5BcmVhKCkge1xuICBjb25zdCBuYXZTZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lID4gZGl2Jyk7XG4gIGNvbnN0IHByb2plY3REb21FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy5wcm9qZWN0cy1hcmVhID4gZGl2ID4gZGl2J1xuICApO1xuICBjb25zdCBmdW5jdGlvblRvUnVuRGljdGlvbmFyeSA9IHtcbiAgICAndGFza3MgYWN0aXZlJzogZGlzcGxheUFsbFRhc2tzLFxuICAgICd0b2RheSBhY3RpdmUnOiBkaXNwbGF5VG9kYXlUYXNrcyxcbiAgICAnc2V2ZW4tZGF5cyBhY3RpdmUnOiBkaXNwbGF5V2Vla1Rhc2tzLFxuICAgICdpbXBvcnRhbnQgYWN0aXZlJzogZGlzcGxheUltcG9ydGFudFRhc2tzLFxuICB9O1xuXG4gIGZvciAobGV0IHNlY3Rpb24gb2YgbmF2U2VjdGlvbnMpIHtcbiAgICBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgIGZ1bmN0aW9uVG9SdW5EaWN0aW9uYXJ5W2NsYXNzTGlzdF0oKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdERvbUVsZW1lbnRzKSB7XG4gICAgaWYgKHByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgICAgIGxldCBwcm9qZWN0VG9EaXNwbGF5O1xuICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0cykge1xuICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gcHJvamVjdElEKSBwcm9qZWN0VG9EaXNwbGF5ID0gcHJvamVjdDtcbiAgICAgIH1cbiAgICAgIHJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0VG9EaXNwbGF5KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vaWYgbm8gbmF2IGJ1dHRvbiBvciBwcm9qZWN0IGlzIHNlbGVjdGVkLCBzd2l0Y2ggdG8gQWxsIFRhc2tzICd0YWInXG4gIGRpc3BsYXlBbGxUYXNrcygpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHByb2plY3RNYW5hZ2VyKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3RzW2ldLnRpdGxlID09PSBwcm9qZWN0LnRpdGxlKSB7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmV0dXJuQWxsVGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsVGFza3MgPSBbXTtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICBhbGxUYXNrcy5wdXNoKC4uLnByb2plY3QuZ2V0VGFza3MoKSlcbiAgICB9XG5cbiAgICByZXR1cm4gYWxsVGFza3NcbiAgfVxuXG4gIGNvbnN0IHJldHVyblByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgcmV0dXJuIHsgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgcmV0dXJuUHJvamVjdHMgLCByZXR1cm5BbGxUYXNrc307XG59KSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLmdlbmVyYXRlSWQoKTtcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKVxuICB9XG5cbiAgY2hhbmdlVGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLnRpdGxlID0gdmFsdWVcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlXG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrc1xuICB9XG5cbiAgZ2VuZXJhdGVJZCgpIHtcbiAgICB0aGlzLmlkID0gYHByai1pZCR7TWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMil9YFxuICB9XG5cbiAgcmVtb3ZlQ29tcGxldGVkVGFza3MoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50YXNrc1tpXS5jb21wbGV0aW9uU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGksIDEpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb21wbGV0aW9uU3RhdHVzID0gZmFsc2U7XG4gICAgdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRhdGU7XG4gICAgdGhpcy5wcmlvcml0eTtcbiAgICB0aGlzLmdlbmVyYXRlSWQoKTtcbiAgfVxuXG4gIGNoYW5nZVRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgYWRkRGV0YWlscyh2YWx1ZSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGFkZER1ZURhdGUodmFsdWUpIHtcbiAgICB0aGlzLmRhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGFkZFByaW9yaXR5KHZhbHVlKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHZhbHVlO1xuICB9XG5cbiAgdG9nZ2xlQ29tcGxldGlvblN0YXR1cygpIHtcbiAgICB0aGlzLmNvbXBsZXRpb25TdGF0dXMgPSAhdGhpcy5jb21wbGV0aW9uU3RhdHVzO1xuICB9XG5cbiAgZ2VuZXJhdGVJZCgpIHtcbiAgICB0aGlzLmlkID0gYHRzay1pZCR7TWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMil9YDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==