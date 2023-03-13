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
  const projectIndex = projects.indexOf(lastProjectAdded);

  const project = (0,_modal_form_build__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    <div class="project-container project-container-${projectIndex}">
      <div class="project project-${projectIndex}">
        <span class="hamburger">☰</span>
        <div>${projectTitle}</div>
        <span class="dots dots-${projectIndex}">&#x22EE
          <div class="pop-up pop-up-${projectIndex}">
            <div class="edit edit-${projectIndex}">Rename</div>
            <div class="delete delete-${projectIndex}">Delete</div>
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

  const projectEdit = document.querySelector(`.dots-${projectIndex}`);
  const popUp = document.querySelector(`.pop-up-${projectIndex}`);
  const renameButton = document.querySelector(`.edit-${projectIndex}`);
  const deleteButton = document.querySelector(`.delete-${projectIndex}`);

  renameButton.addEventListener('click', (e) => (0,_edit_project__WEBPACK_IMPORTED_MODULE_3__.buildEditInterface)(e));
  deleteButton.addEventListener('click', (e) => (0,_edit_project__WEBPACK_IMPORTED_MODULE_3__.deleteProject)(e));
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
    let flagColor;

    let taskElement = (0,_modal_form_build__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    <div class="task-body task-body-${i}">
      <input type="checkbox" class="task-check task-check-${i}">
      <span class="task-title task-title-${i}">${taskTitle}</span>
      <div class="task-details task-details-${i}">${taskDetails}</div>
      <div class="right-container">
        <div class="task-due-date task-due-date-${i}">${taskDueDate}</div>
        <div class="flag-container flag-container-${i}"></div>
        <div class="task-dots task-dots-${i}">&#x22EE
          <div class="pop-up task-pop-up-${i}">
            <div class="edit task-edit-${i}">Edit</div>
            <div class="delete task-delete-${i}">Delete</div>
          </div>
        </div>
      </div>
    </div>
  `);

    switch (taskPriority) {
      case 'low':
        flagColor = 'blue';
        break;
      case 'medium':
        flagColor = 'orange';
        break;
      case 'high':
        flagColor = 'red';
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
/* harmony import */ var _populate_main_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populate-main-area */ "./src/populate-main-area.js");




function buildEditInterface(e) {
  const clickedProjectUniqueClass = e.target.classList[1];
  const clickedProjectIndex =
    clickedProjectUniqueClass[clickedProjectUniqueClass.length - 1];
  const allProjects = _project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].returnProjects();
  const projectToEdit = allProjects[clickedProjectIndex];
  const projectTitle = projectToEdit.getTitle();
  const body = document.querySelector('body');

  const editProjectModal = (0,_modal_form_build__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    <div class="add-new-modal project-edit-modal-${clickedProjectIndex}">
      <div class="modal-header">
        <h3>Edit Project</h3>
        <div class="close close-edit-project-${clickedProjectIndex}">&#x2715</div>
      </div>
      <div class="modal-content">
        <div class="modal-nav">
          <div class="project">
            <img src="../src/assets/modal-project.png">
            <div>Project</div>
          </div>
        </div>
        <form action="" class="project-edit-form-${clickedProjectIndex}">
          <div>
            <input class="title edit-title-${clickedProjectIndex}" type="text" value="${projectTitle}" required>
            <button type="submit" class="project-submit">
            Edit Project</button>
          </div>
        </form>
      </div>
    </div>
  `);

  body.appendChild(editProjectModal);
  const projectEditModal = editProjectModal.querySelector(
    `.project-edit-modal-${clickedProjectIndex}`
  );
  const closeButton = editProjectModal.querySelector(
    `.close-edit-project-${clickedProjectIndex}`
  );
  const submitForm = editProjectModal.querySelector(
    `.project-edit-form-${clickedProjectIndex}`
  );
  const editedTitleInput = editProjectModal.querySelector(
    `.edit-title-${clickedProjectIndex}`
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
    editProjectNameFromDom(clickedProjectIndex, editedTitle);

    projectEditModal.style.cssText = 'transform: scale(0)';
  });
}

function deleteProject(e) {
  const clickedProjectUniqueClass = e.target.classList[1];
  const clickedProjectIndex =
    clickedProjectUniqueClass[clickedProjectUniqueClass.length - 1];
  const allProjects = _project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].returnProjects();
  const projectToDelete = allProjects[clickedProjectIndex];

  //remove project from business logic
  _project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].removeProject(projectToDelete)
  //remove project from DOM
  removeProjectFromDom(clickedProjectIndex)
  console.log(allProjects)

  ;(0,_populate_main_area__WEBPACK_IMPORTED_MODULE_2__["default"])()
}

function editProjectNameFromDom(index, editValue) {
  const projectDomElement = document.querySelector(`.project-${index} > div`);
  projectDomElement.textContent = editValue;
}

function removeProjectFromDom(index) {
  const projectDomElement = document.querySelector(`.project-container-${index} > div`);
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
  const clickedTaskUniqueClass = e.target.classList[1];
  const clickedTaskIndex =
    clickedTaskUniqueClass[clickedTaskUniqueClass.length - 1];
  const allTasks = _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].returnAllTasks();
  const taskToEdit = allTasks[clickedTaskIndex];
  const body = document.querySelector('body');

  console.log(taskToEdit)

  const taskTitle = taskToEdit.title;
  const taskDetails = taskToEdit.description;
  const taskDate = taskToEdit.date;

  const editTaskModal = (0,_modal_form_build__WEBPACK_IMPORTED_MODULE_1__["default"])(`
    <div class="add-new-modal task-edit-modal-${clickedTaskIndex}">
      <div class="modal-header">
        <h3>Edit Task</h3>
        <div class="close close-edit-task-${clickedTaskIndex}">&#x2715</div>
      </div>
      <div class="modal-content">
        <div class="modal-nav">
          <div class="task">
            <img src="../src/assets/modal-task.png">
            <div>Task</div>
          </div>
        </div>
        <form action="" class="task-edit-form-${clickedTaskIndex}">
          <div>
            <input type="text" id="title" placeholder="Title: Pay bills"
            class="edit-title-${clickedTaskIndex}" value="${taskTitle}" required/>
            <textarea cols="30" rows="10" placeholder="Details: e.g internet, phone, rent."
            class="edit-details-${clickedTaskIndex}">${taskDetails}</textarea>
            <div class="date-container">
              <label for="date">Due Date:</label>
              <div class="date"><input type="date" id="date"
              class="edit-date-${clickedTaskIndex}" value="${taskDate}"/>
              </div>
            </div>
            <div class="priority-radio">
              <span>Priority:</span>
              <label for="low">Low</label>
              <input type="radio" name="priority" value="low" id="low" checked/>
              <label for="medium">Medium</label>
              <input type="radio" name="priority" value="medium" id="medium"/>
              <label for="high">High</label>
              <input type="radio" name="priority" value="high" id="high"/>
              <button type="submit" class="task task-submit">Edit Task</button>
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

  const taskEditModal = editTaskModal.querySelector(
    `.task-edit-modal-${clickedTaskIndex}`
  );
  const closeButton = editTaskModal.querySelector(
    `.close-edit-task-${clickedTaskIndex}`
  );
  const submitForm = editTaskModal.querySelector(
    `.task-edit-form-${clickedTaskIndex}`
  );
  const editedTitleInput = editTaskModal.querySelector(
    `.edit-title-${clickedTaskIndex}`
  );
  const editedDetailsInput = editTaskModal.querySelector(
    `.edit-title-${clickedTaskIndex}`
  );
  const editedDateInput = editTaskModal.querySelector(`
  .edit-date-${clickedTaskIndex}`);

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
  const clickedTaskUniqueClass = e.target.classList[1];
  const clickedTaskIndex =
    clickedTaskUniqueClass[clickedTaskUniqueClass.length - 1];
  const allTasks = _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].returnAllTasks();
  const taskToDelete = allTasks[clickedTaskIndex];

  console.log(taskToDelete);

  //remove project from business logic
  taskToDelete.completionStatus = true;
  const allProjects = _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].returnProjects();
  allProjects.forEach((project) => project.removeCompletedTasks())  
  //remove project from DOM
  ;(0,_populate_main_area__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
    <label for="low">Low</label>
    <input type="radio" name="priority" value="low" id="low" checked/>
    <label for="medium">Medium</label>
    <input type="radio" name="priority" value="medium" id="medium"/>
    <label for="high">High</label>
    <input type="radio" name="priority" value="high" id="high"/>
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
  mainAreaContent.innerHTML = '';
  mainAreaTitle.textContent = 'All Tasks';

  (0,_dom_display_task__WEBPACK_IMPORTED_MODULE_0__.buildTaskDomElement)(mainAreaContent, _project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].returnAllTasks());
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



// using this to help populate the main area with the adequate filtered content
function populateMainArea() {
  const navSections = document.querySelectorAll('.home > div');
  const projectDomElements = document.querySelector('.projects-area > div > div')
  const functionToRunDictionary = {
    'tasks active': _nav_utility__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks,
    'today active': _nav_utility__WEBPACK_IMPORTED_MODULE_0__.displayTodayTasks,
    'seven-days active': _nav_utility__WEBPACK_IMPORTED_MODULE_0__.displayWeekTasks,
    'important active': _nav_utility__WEBPACK_IMPORTED_MODULE_0__.displayImportantTasks
  }

  for (let section of navSections) {
    if (section.classList.contains('active')) {
      const classList = section.getAttribute('class')
      functionToRunDictionary[classList]()
    }
  }

  console.log(projectDomElements)
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
    this.id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM3QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQmVmb3JlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGF0YS1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb20tZGlzcGxheS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLWRpc3BsYXktdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VkaXQtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VkaXQtdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kYWwtZm9ybS1idWlsZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZGFsLW1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25hdi11dGlsaXR5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcG9wdWxhdGUtbWFpbi1hcmVhLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGJlZm9yZSB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYmVmb3JlIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0JlZm9yZShkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIDwgZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmV4cG9ydCB7IGdldERhdGFGcm9tRm9ybXMgfTtcblxuZnVuY3Rpb24gZ2V0RGF0YUZyb21Gb3JtcyhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy9jaGVjayBpZiB0aGUgZm9ybSBpcyBhc3NvY2lhdGVkIHdpdGggYWRkaW5nIGEgdGFzayBvciBhIHByb2plY3RcbiAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5pbmNsdWRlcygndGFzaycpKSB7XG4gICAgZ2V0RGF0YUZyb21UYXNrRm9ybSgpO1xuICB9IGVsc2UgZ2V0RGF0YUZyb21Qcm9qZWN0Rm9ybSgpO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhRnJvbVRhc2tGb3JtKCkge1xuICBjb25zdCB0YXNrVGl0bGVRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSAjdGl0bGUnKTtcbiAgY29uc3QgcHJvamVjdFRvQXNzaWduUXVlcmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gc2VsZWN0Jyk7XG4gIGNvbnN0IGRldGFpbHNRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSB0ZXh0YXJlYScpO1xuICBjb25zdCBkdWVEYXRlUXVlcmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gI2RhdGUnKTtcbiAgY29uc3QgcHJpb3JpdHlRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybSBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcblxuICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrVGl0bGVRdWVyaWVyLnZhbHVlO1xuICBjb25zdCBwcm9qZWN0VG9Bc3NpZ25UbyA9IHByb2plY3RUb0Fzc2lnblF1ZXJpZXIudmFsdWU7XG4gIGNvbnN0IGRldGFpbHMgPSBkZXRhaWxzUXVlcmllci52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVRdWVyaWVyLnZhbHVlO1xuICBsZXQgcHJpb3JpdHk7XG5cbiAgcHJpb3JpdHlRdWVyaWVyLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgaWYgKHJhZGlvLmNoZWNrZWQpIHByaW9yaXR5ID0gcmFkaW8udmFsdWU7XG4gIH0pO1xuXG4gIGNvbnN0IHRhc2tUb0FkZCA9IG5ldyBUYXNrKHRhc2tUaXRsZSk7XG4gIHRhc2tUb0FkZC5hZGREZXRhaWxzKGRldGFpbHMpO1xuICB0YXNrVG9BZGQuYWRkRHVlRGF0ZShkdWVEYXRlKTtcbiAgdGFza1RvQWRkLmFkZFByaW9yaXR5KHByaW9yaXR5KTtcblxuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBpZiAocHJvamVjdC5nZXRUaXRsZSgpID09PSBwcm9qZWN0VG9Bc3NpZ25Ubykge1xuICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2tUb0FkZCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YUZyb21Qcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgcHJvamVjdFRpdGxlUXVlcmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gLnRpdGxlJyk7XG5cbiAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlUXVlcmllci52YWx1ZTtcblxuICBjb25zdCBwcm9qZWN0VG9BZGQgPSBuZXcgUHJvamVjdChwcm9qZWN0VGl0bGUpO1xuICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHByb2plY3RUb0FkZCk7XG59XG4iLCJpbXBvcnQgZWxlbWVudEZyb21IdG1sIGZyb20gJy4vbW9kYWwtZm9ybS1idWlsZCc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IHsgYnVpbGRUYXNrRG9tRWxlbWVudCB9IGZyb20gJy4vZG9tLWRpc3BsYXktdGFzayc7XG5pbXBvcnQgeyBidWlsZEVkaXRJbnRlcmZhY2UsIGRlbGV0ZVByb2plY3QgfSBmcm9tICcuL2VkaXQtcHJvamVjdCc7XG5pbXBvcnQgeyB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MgfSBmcm9tICcuL2luZGV4JztcblxuY29uc3QgbWFpbkFyZWFDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJlYS1jb250ZW50Jyk7XG5jb25zdCBtYWluQXJlYVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJlYS10aXRsZScpO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRQcm9qZWN0RG9tRWxlbWVudChwYXJlbnQpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuICBjb25zdCBsYXN0UHJvamVjdEFkZGVkID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV07XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGxhc3RQcm9qZWN0QWRkZWQuZ2V0VGl0bGUoKTtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihsYXN0UHJvamVjdEFkZGVkKTtcblxuICBjb25zdCBwcm9qZWN0ID0gZWxlbWVudEZyb21IdG1sKGBcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1jb250YWluZXIgcHJvamVjdC1jb250YWluZXItJHtwcm9qZWN0SW5kZXh9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdCBwcm9qZWN0LSR7cHJvamVjdEluZGV4fVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhhbWJ1cmdlclwiPuKYsDwvc3Bhbj5cbiAgICAgICAgPGRpdj4ke3Byb2plY3RUaXRsZX08L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RzIGRvdHMtJHtwcm9qZWN0SW5kZXh9XCI+JiN4MjJFRVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXAgcG9wLXVwLSR7cHJvamVjdEluZGV4fVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQgZWRpdC0ke3Byb2plY3RJbmRleH1cIj5SZW5hbWU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGUgZGVsZXRlLSR7cHJvamVjdEluZGV4fVwiPkRlbGV0ZTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCk7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbmRlclByb2plY3RUYXNrcyhsYXN0UHJvamVjdEFkZGVkKTtcbiAgICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9KTtcblxuICBjb25zdCBwcm9qZWN0RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kb3RzLSR7cHJvamVjdEluZGV4fWApO1xuICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3AtdXAtJHtwcm9qZWN0SW5kZXh9YCk7XG4gIGNvbnN0IHJlbmFtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lZGl0LSR7cHJvamVjdEluZGV4fWApO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGVsZXRlLSR7cHJvamVjdEluZGV4fWApO1xuXG4gIHJlbmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBidWlsZEVkaXRJbnRlcmZhY2UoZSkpO1xuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZGVsZXRlUHJvamVjdChlKSk7XG4gIHByb2plY3RFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcG9wVXAuY2xhc3NMaXN0LmFkZCgncG9wcGluZycpKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCAhPT0gcHJvamVjdEVkaXQpIHBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0VGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKCk7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gIG1haW5BcmVhVGl0bGUudGV4dENvbnRlbnQgPSBgUHJvamVjdDogJHtwcm9qZWN0VGl0bGV9YDtcbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIHByb2plY3RUYXNrcyk7XG5cbiAgaWYgKHByb2plY3RUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICBtYWluQXJlYUNvbnRlbnQudGV4dENvbnRlbnQgPVxuICAgICAgJ1RoaXMgcHJvamVjdCBhcHBlYXJzIGVtcHR5LiBBZGQgdGFza3MgdG8gZ2V0IHN0YXJ0ZWQhJztcbiAgfVxufVxuIiwiaW1wb3J0IGVsZW1lbnRGcm9tSHRtbCBmcm9tICcuL21vZGFsLWZvcm0tYnVpbGQnO1xuaW1wb3J0IHsgYnVpbGRUYXNrRWRpdEludGVyZmFjZSwgZGVsZXRlVGFzayB9IGZyb20gJy4vZWRpdC10YXNrJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVGFza0RvbUVsZW1lbnQocGFyZW50LCB0YXNrcykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza1RpdGxlID0gdGFza3NbaV0udGl0bGU7XG4gICAgY29uc3QgdGFza0RldGFpbHMgPSB0YXNrc1tpXS5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2tzW2ldLmRhdGU7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGFza3NbaV0ucHJpb3JpdHk7XG4gICAgbGV0IGZsYWdDb2xvcjtcblxuICAgIGxldCB0YXNrRWxlbWVudCA9IGVsZW1lbnRGcm9tSHRtbChgXG4gICAgPGRpdiBjbGFzcz1cInRhc2stYm9keSB0YXNrLWJvZHktJHtpfVwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidGFzay1jaGVjayB0YXNrLWNoZWNrLSR7aX1cIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidGFzay10aXRsZSB0YXNrLXRpdGxlLSR7aX1cIj4ke3Rhc2tUaXRsZX08L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxzIHRhc2stZGV0YWlscy0ke2l9XCI+JHt0YXNrRGV0YWlsc308L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZHVlLWRhdGUgdGFzay1kdWUtZGF0ZS0ke2l9XCI+JHt0YXNrRHVlRGF0ZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsYWctY29udGFpbmVyIGZsYWctY29udGFpbmVyLSR7aX1cIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZG90cyB0YXNrLWRvdHMtJHtpfVwiPiYjeDIyRUVcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwIHRhc2stcG9wLXVwLSR7aX1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0IHRhc2stZWRpdC0ke2l9XCI+RWRpdDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZSB0YXNrLWRlbGV0ZS0ke2l9XCI+RGVsZXRlPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuXG4gICAgc3dpdGNoICh0YXNrUHJpb3JpdHkpIHtcbiAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgIGZsYWdDb2xvciA9ICdibHVlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICBmbGFnQ29sb3IgPSAnb3JhbmdlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgZmxhZ0NvbG9yID0gJ3JlZCc7XG4gICAgfVxuXG4gICAgbGV0IGZsYWcgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cInV0Zi04XCI/PjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+XG4gICAgICA8c3ZnIHdpZHRoPVwiMjJweFwiIGhlaWdodD1cIjIycHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIiR7ZmxhZ0NvbG9yfVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgIDxwYXRoIG9wYWNpdHk9XCIwLjE1XCIgZD1cIk00IDRIMjBMMTUgOUwyMCAxNEg0VjRaXCIvPlxuICAgICAgPHBhdGggZD1cIk00IDIxVjE0TTQgMTRWNEgyMEwxNSA5TDIwIDE0SDRaXCIgc3Ryb2tlPVwiJHtmbGFnQ29sb3J9XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxuICAgIDwvc3ZnPlxuICBgKTtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gICAgY29uc3QgZmxhZ0NvbnRhaW5lciA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGFnLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRhc2tEb21FbGVtZW50ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYm9keScpO1xuICAgIGNvbnN0IGRldGFpbHNFbGVtZW50ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlscycpO1xuICAgIGNvbnN0IGVkaXRUYXNrID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZG90cycpO1xuICAgIGNvbnN0IHJlbmFtZUJ1dHRvbiA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuICAgIGNvbnN0IHBvcFVwID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cCcpO1xuXG4gICAgcmVuYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnVpbGRUYXNrRWRpdEludGVyZmFjZSk7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVGFzayk7XG4gICAgZWRpdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwb3BVcC5jbGFzc0xpc3QuYWRkKCdwb3BwaW5nJykpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCAhPT0gZWRpdFRhc2spIHBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgICB9KTtcblxuICAgIGZsYWdDb250YWluZXIuYXBwZW5kQ2hpbGQoZmxhZyk7XG4gICAgdGFza0RvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgZGV0YWlsc0VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1kZXRhaWxzJylcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZWxlbWVudEZyb21IdG1sIGZyb20gJy4vbW9kYWwtZm9ybS1idWlsZCc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IHBvcHVsYXRlTWFpbkFyZWEgZnJvbSAnLi9wb3B1bGF0ZS1tYWluLWFyZWEnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFZGl0SW50ZXJmYWNlKGUpIHtcbiAgY29uc3QgY2xpY2tlZFByb2plY3RVbmlxdWVDbGFzcyA9IGUudGFyZ2V0LmNsYXNzTGlzdFsxXTtcbiAgY29uc3QgY2xpY2tlZFByb2plY3RJbmRleCA9XG4gICAgY2xpY2tlZFByb2plY3RVbmlxdWVDbGFzc1tjbGlja2VkUHJvamVjdFVuaXF1ZUNsYXNzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIGNvbnN0IHByb2plY3RUb0VkaXQgPSBhbGxQcm9qZWN0c1tjbGlja2VkUHJvamVjdEluZGV4XTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdFRvRWRpdC5nZXRUaXRsZSgpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0TW9kYWwgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJhZGQtbmV3LW1vZGFsIHByb2plY3QtZWRpdC1tb2RhbC0ke2NsaWNrZWRQcm9qZWN0SW5kZXh9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgIDxoMz5FZGl0IFByb2plY3Q8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UgY2xvc2UtZWRpdC1wcm9qZWN0LSR7Y2xpY2tlZFByb2plY3RJbmRleH1cIj4mI3gyNzE1PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1uYXZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL21vZGFsLXByb2plY3QucG5nXCI+XG4gICAgICAgICAgICA8ZGl2PlByb2plY3Q8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwicHJvamVjdC1lZGl0LWZvcm0tJHtjbGlja2VkUHJvamVjdEluZGV4fVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0aXRsZSBlZGl0LXRpdGxlLSR7Y2xpY2tlZFByb2plY3RJbmRleH1cIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHtwcm9qZWN0VGl0bGV9XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInByb2plY3Qtc3VibWl0XCI+XG4gICAgICAgICAgICBFZGl0IFByb2plY3Q8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZWRpdFByb2plY3RNb2RhbCk7XG4gIGNvbnN0IHByb2plY3RFZGl0TW9kYWwgPSBlZGl0UHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5wcm9qZWN0LWVkaXQtbW9kYWwtJHtjbGlja2VkUHJvamVjdEluZGV4fWBcbiAgKTtcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBlZGl0UHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5jbG9zZS1lZGl0LXByb2plY3QtJHtjbGlja2VkUHJvamVjdEluZGV4fWBcbiAgKTtcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGVkaXRQcm9qZWN0TW9kYWwucXVlcnlTZWxlY3RvcihcbiAgICBgLnByb2plY3QtZWRpdC1mb3JtLSR7Y2xpY2tlZFByb2plY3RJbmRleH1gXG4gICk7XG4gIGNvbnN0IGVkaXRlZFRpdGxlSW5wdXQgPSBlZGl0UHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5lZGl0LXRpdGxlLSR7Y2xpY2tlZFByb2plY3RJbmRleH1gXG4gICk7XG5cbiAgcHJvamVjdEVkaXRNb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMSknO1xuXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3RFZGl0TW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDApJztcbiAgfSk7XG5cbiAgc3VibWl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBlZGl0IHByb2plY3QgaW4gYnVzaW5lc3MgbG9naWNcbiAgICBjb25zdCBlZGl0ZWRUaXRsZSA9IGVkaXRlZFRpdGxlSW5wdXQudmFsdWU7XG4gICAgcHJvamVjdFRvRWRpdC5jaGFuZ2VUaXRsZShlZGl0ZWRUaXRsZSk7XG4gICAgLy9lZGl0IHByb2plY3QgaW4gRE9NXG4gICAgZWRpdFByb2plY3ROYW1lRnJvbURvbShjbGlja2VkUHJvamVjdEluZGV4LCBlZGl0ZWRUaXRsZSk7XG5cbiAgICBwcm9qZWN0RWRpdE1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgwKSc7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKSB7XG4gIGNvbnN0IGNsaWNrZWRQcm9qZWN0VW5pcXVlQ2xhc3MgPSBlLnRhcmdldC5jbGFzc0xpc3RbMV07XG4gIGNvbnN0IGNsaWNrZWRQcm9qZWN0SW5kZXggPVxuICAgIGNsaWNrZWRQcm9qZWN0VW5pcXVlQ2xhc3NbY2xpY2tlZFByb2plY3RVbmlxdWVDbGFzcy5sZW5ndGggLSAxXTtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSBhbGxQcm9qZWN0c1tjbGlja2VkUHJvamVjdEluZGV4XTtcblxuICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gYnVzaW5lc3MgbG9naWNcbiAgcHJvamVjdE1hbmFnZXIucmVtb3ZlUHJvamVjdChwcm9qZWN0VG9EZWxldGUpXG4gIC8vcmVtb3ZlIHByb2plY3QgZnJvbSBET01cbiAgcmVtb3ZlUHJvamVjdEZyb21Eb20oY2xpY2tlZFByb2plY3RJbmRleClcbiAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpXG5cbiAgcG9wdWxhdGVNYWluQXJlYSgpXG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0TmFtZUZyb21Eb20oaW5kZXgsIGVkaXRWYWx1ZSkge1xuICBjb25zdCBwcm9qZWN0RG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LSR7aW5kZXh9ID4gZGl2YCk7XG4gIHByb2plY3REb21FbGVtZW50LnRleHRDb250ZW50ID0gZWRpdFZhbHVlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0RnJvbURvbShpbmRleCkge1xuICBjb25zdCBwcm9qZWN0RG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWNvbnRhaW5lci0ke2luZGV4fSA+IGRpdmApO1xuICBwcm9qZWN0RG9tRWxlbWVudC5yZW1vdmUoKVxufSIsImltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgZWxlbWVudEZyb21IdG1sIGZyb20gJy4vbW9kYWwtZm9ybS1idWlsZCc7XG5pbXBvcnQgcG9wdWxhdGVNYWluQXJlYSBmcm9tICcuL3BvcHVsYXRlLW1haW4tYXJlYSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRhc2tFZGl0SW50ZXJmYWNlKGUpIHtcbiAgY29uc3QgY2xpY2tlZFRhc2tVbmlxdWVDbGFzcyA9IGUudGFyZ2V0LmNsYXNzTGlzdFsxXTtcbiAgY29uc3QgY2xpY2tlZFRhc2tJbmRleCA9XG4gICAgY2xpY2tlZFRhc2tVbmlxdWVDbGFzc1tjbGlja2VkVGFza1VuaXF1ZUNsYXNzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCk7XG4gIGNvbnN0IHRhc2tUb0VkaXQgPSBhbGxUYXNrc1tjbGlja2VkVGFza0luZGV4XTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICBjb25zb2xlLmxvZyh0YXNrVG9FZGl0KVxuXG4gIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tUb0VkaXQudGl0bGU7XG4gIGNvbnN0IHRhc2tEZXRhaWxzID0gdGFza1RvRWRpdC5kZXNjcmlwdGlvbjtcbiAgY29uc3QgdGFza0RhdGUgPSB0YXNrVG9FZGl0LmRhdGU7XG5cbiAgY29uc3QgZWRpdFRhc2tNb2RhbCA9IGVsZW1lbnRGcm9tSHRtbChgXG4gICAgPGRpdiBjbGFzcz1cImFkZC1uZXctbW9kYWwgdGFzay1lZGl0LW1vZGFsLSR7Y2xpY2tlZFRhc2tJbmRleH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgPGgzPkVkaXQgVGFzazwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZSBjbG9zZS1lZGl0LXRhc2stJHtjbGlja2VkVGFza0luZGV4fVwiPiYjeDI3MTU8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLW5hdlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9hc3NldHMvbW9kYWwtdGFzay5wbmdcIj5cbiAgICAgICAgICAgIDxkaXY+VGFzazwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJ0YXNrLWVkaXQtZm9ybS0ke2NsaWNrZWRUYXNrSW5kZXh9XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlOiBQYXkgYmlsbHNcIlxuICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRpdGxlLSR7Y2xpY2tlZFRhc2tJbmRleH1cIiB2YWx1ZT1cIiR7dGFza1RpdGxlfVwiIHJlcXVpcmVkLz5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIkRldGFpbHM6IGUuZyBpbnRlcm5ldCwgcGhvbmUsIHJlbnQuXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZWRpdC1kZXRhaWxzLSR7Y2xpY2tlZFRhc2tJbmRleH1cIj4ke3Rhc2tEZXRhaWxzfTwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPjxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZWRpdC1kYXRlLSR7Y2xpY2tlZFRhc2tJbmRleH1cIiB2YWx1ZT1cIiR7dGFza0RhdGV9XCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5LXJhZGlvXCI+XG4gICAgICAgICAgICAgIDxzcGFuPlByaW9yaXR5Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvd1wiPkxvdzwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImxvd1wiIGlkPVwibG93XCIgY2hlY2tlZC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZWRpdW1cIj5NZWRpdW08L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJtZWRpdW1cIiBpZD1cIm1lZGl1bVwiLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImhpZ2hcIj5IaWdoPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwiaGlnaFwiIGlkPVwiaGlnaFwiLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJ0YXNrIHRhc2stc3VibWl0XCI+RWRpdCBUYXNrPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZWRpdFRhc2tNb2RhbCk7XG5cbiAgKGZ1bmN0aW9uIGFkZFRhc2tQcmlvcml0eSgpIHtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrVG9FZGl0LnByaW9yaXR5O1xuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG4gICAgY29uc3QgbG93UmFkaW9CdXR0b24gPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwibG93XCJdJyk7XG4gICAgY29uc3QgbWVkaXVtUmFkaW9CdXR0b24gPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwibWVkaXVtXCJdJyk7XG4gICAgY29uc3QgaGlnaFJhZGlvQnV0dG9uID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImhpZ2hcIl0nKTtcblxuICAgIHJhZGlvQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKSk7XG5cbiAgICBzd2l0Y2ggKHRhc2tQcmlvcml0eSkge1xuICAgICAgY2FzZSAnbG93JzpcbiAgICAgICAgbG93UmFkaW9CdXR0b24uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIG1lZGl1bVJhZGlvQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgaGlnaFJhZGlvQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KSgpO1xuXG4gIGNvbnN0IHRhc2tFZGl0TW9kYWwgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC50YXNrLWVkaXQtbW9kYWwtJHtjbGlja2VkVGFza0luZGV4fWBcbiAgKTtcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5jbG9zZS1lZGl0LXRhc2stJHtjbGlja2VkVGFza0luZGV4fWBcbiAgKTtcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcihcbiAgICBgLnRhc2stZWRpdC1mb3JtLSR7Y2xpY2tlZFRhc2tJbmRleH1gXG4gICk7XG4gIGNvbnN0IGVkaXRlZFRpdGxlSW5wdXQgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5lZGl0LXRpdGxlLSR7Y2xpY2tlZFRhc2tJbmRleH1gXG4gICk7XG4gIGNvbnN0IGVkaXRlZERldGFpbHNJbnB1dCA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcihcbiAgICBgLmVkaXQtdGl0bGUtJHtjbGlja2VkVGFza0luZGV4fWBcbiAgKTtcbiAgY29uc3QgZWRpdGVkRGF0ZUlucHV0ID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKGBcbiAgLmVkaXQtZGF0ZS0ke2NsaWNrZWRUYXNrSW5kZXh9YCk7XG5cbiAgdGFza0VkaXRNb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMSknO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YXNrRWRpdE1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgwKSc7XG4gIH0pO1xuXG4gIHN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gZWRpdCB0YXNrIGluIGJ1c2luZXNzIGxvZ2ljXG4gICAgY29uc3QgZWRpdGVkVGl0bGUgPSBlZGl0ZWRUaXRsZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGVkaXRlZERldGFpbHMgPSBlZGl0ZWREZXRhaWxzSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZWRpdGVkRGF0ZSA9IGVkaXRlZERhdGVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCByYWRpb0J1dHRvbnMgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuXG4gICAgdGFza1RvRWRpdC5jaGFuZ2VUaXRsZShlZGl0ZWRUaXRsZSk7XG4gICAgdGFza1RvRWRpdC5hZGREZXRhaWxzKGVkaXRlZERldGFpbHMpO1xuICAgIHRhc2tUb0VkaXQuYWRkRHVlRGF0ZShlZGl0ZWREYXRlKTtcbiAgICByYWRpb0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoYnV0dG9uLmNoZWNrZWQpIHRhc2tUb0VkaXQucHJpb3JpdHkgPSBidXR0b24udmFsdWU7XG4gICAgfSk7XG4gICAgLy9lZGl0IHByb2plY3QgaW4gRE9NXG4gICAgcG9wdWxhdGVNYWluQXJlYSgpO1xuXG4gICAgdGFza0VkaXRNb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMCknO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2soZSkge1xuICBjb25zdCBjbGlja2VkVGFza1VuaXF1ZUNsYXNzID0gZS50YXJnZXQuY2xhc3NMaXN0WzFdO1xuICBjb25zdCBjbGlja2VkVGFza0luZGV4ID1cbiAgICBjbGlja2VkVGFza1VuaXF1ZUNsYXNzW2NsaWNrZWRUYXNrVW5pcXVlQ2xhc3MubGVuZ3RoIC0gMV07XG4gIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuQWxsVGFza3MoKTtcbiAgY29uc3QgdGFza1RvRGVsZXRlID0gYWxsVGFza3NbY2xpY2tlZFRhc2tJbmRleF07XG5cbiAgY29uc29sZS5sb2codGFza1RvRGVsZXRlKTtcblxuICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gYnVzaW5lc3MgbG9naWNcbiAgdGFza1RvRGVsZXRlLmNvbXBsZXRpb25TdGF0dXMgPSB0cnVlO1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3QucmVtb3ZlQ29tcGxldGVkVGFza3MoKSkgIFxuICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gRE9NXG4gIHBvcHVsYXRlTWFpbkFyZWEoKTtcbn1cbiIsImltcG9ydCB7IHBvcE1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSAnLi9tb2RhbC1tYW5pcHVsYXRpb24nO1xuaW1wb3J0IHsgYnVpbGRQcm9qZWN0RG9tRWxlbWVudCB9IGZyb20gJy4vZG9tLWRpc3BsYXktcHJvamVjdCc7XG5pbXBvcnQge1xuICBkaXNwbGF5QWxsVGFza3MsXG4gIGRpc3BsYXlJbXBvcnRhbnRUYXNrcyxcbiAgZGlzcGxheVRvZGF5VGFza3MsXG4gIGRpc3BsYXlXZWVrVGFza3MsXG59IGZyb20gJy4vbmF2LXV0aWxpdHknO1xuXG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldycpO1xuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1oZWFkZXIgLmNsb3NlJyk7XG5jb25zdCBwcm9qZWN0c0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtYXJlYScpO1xuY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG5jb25zdCBuZXh0V2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXZlbi1kYXlzJyk7XG5jb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1wb3J0YW50Jyk7XG5cbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBvcE1vZGFsKCkpO1xuY2xvc2VNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlTW9kYWwoKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MoKSB7XG4gIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XG4gIGFsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xufVxuXG5hbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZGlzcGxheUFsbFRhc2tzKCk7XG4gIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzcygpO1xuICBhbGxUYXNrcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pO1xuXG50b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZGlzcGxheVRvZGF5VGFza3MoKTtcbiAgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSk7XG5cbm5leHRXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkaXNwbGF5V2Vla1Rhc2tzKCk7XG4gIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzcygpO1xuICBuZXh0V2Vlay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pO1xuXG5pbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRpc3BsYXlJbXBvcnRhbnRUYXNrcygpO1xuICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgaW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSk7XG5cbmJ1aWxkUHJvamVjdERvbUVsZW1lbnQocHJvamVjdHNBcmVhKTtcbmRpc3BsYXlBbGxUYXNrcygpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWxlbWVudEZyb21IdG1sKGh0bWwpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sLnRyaW0oKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuY29uc3QgdGFza0Zvcm0gPSBlbGVtZW50RnJvbUh0bWwoYFxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZTogUGF5IGJpbGxzXCIgcmVxdWlyZWQvPlxuICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj5cbiAgICA8bGFiZWwgZm9yPVwicHJvamVjdFwiPlByb2plY3QgdG8gYXNzaWduIHRvOiA8L2xhYmVsPlxuICAgIDxzZWxlY3QgbmFtZT1cIlwiIGlkPVwicHJvamVjdFwiPjwvc2VsZWN0PlxuICA8L2Rpdj5cbiAgPHRleHRhcmVhIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiRGV0YWlsczogZS5nIGludGVybmV0LCBwaG9uZSwgcmVudC5cIj48L3RleHRhcmVhPlxuICA8ZGl2IGNsYXNzPVwiZGF0ZS1jb250YWluZXJcIj5cbiAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+XG4gICAgPGRpdiBjbGFzcz1cImRhdGVcIj48aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiAvPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInByaW9yaXR5LXJhZGlvXCI+XG4gICAgPHNwYW4+UHJpb3JpdHk6PC9zcGFuPlxuICAgIDxsYWJlbCBmb3I9XCJsb3dcIj5Mb3c8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImxvd1wiIGlkPVwibG93XCIgY2hlY2tlZC8+XG4gICAgPGxhYmVsIGZvcj1cIm1lZGl1bVwiPk1lZGl1bTwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibWVkaXVtXCIgaWQ9XCJtZWRpdW1cIi8+XG4gICAgPGxhYmVsIGZvcj1cImhpZ2hcIj5IaWdoPC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJoaWdoXCIgaWQ9XCJoaWdoXCIvPlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwidGFzayB0YXNrLXN1Ym1pdFwiPkFkZCBUYXNrPC9idXR0b24+XG4gIDwvZGl2PlxuYCk7XG5cbmNvbnN0IHByb2plY3RGb3JtID0gZWxlbWVudEZyb21IdG1sKGBcbiAgPGlucHV0IGNsYXNzPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGl0bGU6IEhvdXNlIFJlbm92YXRpb25cIiByZXF1aXJlZD5cbiAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJwcm9qZWN0LXN1Ym1pdFwiPkNyZWF0ZSBQcm9qZWN0PC9idXR0b24+XG5gKTtcblxuZXhwb3J0IHsgdGFza0Zvcm0sIHByb2plY3RGb3JtIH07XG4iLCJpbXBvcnQgeyBidWlsZFByb2plY3REb21FbGVtZW50IH0gZnJvbSAnLi9kb20tZGlzcGxheS1wcm9qZWN0JztcbmltcG9ydCB7IHRhc2tGb3JtLCBwcm9qZWN0Rm9ybSB9IGZyb20gJy4vbW9kYWwtZm9ybS1idWlsZCc7XG5pbXBvcnQgeyBnZXREYXRhRnJvbUZvcm1zIH0gZnJvbSAnLi9kYXRhLW1hbmlwdWxhdGlvbic7XG5pbXBvcnQgcG9wdWxhdGVNYWluQXJlYSBmcm9tICcuL3BvcHVsYXRlLW1haW4tYXJlYSc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmV4cG9ydCB7IHBvcE1vZGFsLCBjbG9zZU1vZGFsIH07XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctbW9kYWwnKTtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgnWW91ciBGaXJzdCBQcm9qZWN0Jyk7XG5wcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcblxuZnVuY3Rpb24gdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzRnJvbU1vZGFsKCkge1xuICBjb25zdCBtb2RhbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC1uZXctbW9kYWwgZGl2Jyk7XG4gIG1vZGFsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUJsdXIoKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctbW9kYWwnKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgLy9jaGVjayBpZiAncG9wcGluZycgY2xhc3MgaW4gbW9kYWw7IG1lYW5zIHdlIGFyZSBvcGVuaW5nIG1vZGFsXG4gIGlmIChtb2RhbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuaW5jbHVkZXMoJ3BvcHBpbmcnKSkge1xuICAgIGhlYWRlci5zdHlsZS5jc3NUZXh0ID0gJ2ZpbHRlcjogYmx1cigzcHgpJztcbiAgICBjb250ZW50LnN0eWxlLmNzc1RleHQgPSAnZmlsdGVyOiBibHVyKDNweCknO1xuICB9IGVsc2Uge1xuICAgIGhlYWRlci5zdHlsZS5jc3NUZXh0ID0gJ2ZpbHRlcjogYmx1cigwcHgpJztcbiAgICBjb250ZW50LnN0eWxlLmNzc1RleHQgPSAnZmlsdGVyOiBibHVyKDBweCknO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdHNEcm9wZG93bigpIHtcbiAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24gc2VsZWN0Jyk7XG4gIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUaXRsZSgpKTtcblxuICBpZiAoZHJvcGRvd24gPT09IG51bGwpIHJldHVybjtcblxuICBkcm9wZG93bi5pbm5lckhUTUwgPSAnJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBvcHQgPSBvcHRpb25zW2ldO1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZWwudGV4dENvbnRlbnQgPSBvcHQ7XG4gICAgZWwudmFsdWUgPSBvcHQ7XG4gICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoZWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvcE1vZGFsKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgncG9wcGluZycpO1xuICBtb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMSknO1xuICB0b2dnbGVCbHVyKCk7XG4gIGZvcm0uaW5uZXJIVE1MID0gJyc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICAvL2FkZGluZyAndGFzaycgY2xhc3MgaW4gb3JkZXIgdG8gZGlmZmVyZW50aWF0ZSB0aGUgZm9ybSB0eXBlICh0YXNrIG9yIHByb2plY3QpXG4gIGZvcm0uY2xhc3NOYW1lID0gJyc7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24oKTtcbiAgc3dpdGNoVG9UYXNrKCk7XG4gIHN3aXRjaFRvUHJvamVjdCgpO1xuICB0YXNrT3JQcm9qZWN0U3VibWl0KCk7XG5cbiAgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzRnJvbU1vZGFsKCk7XG4gIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgbW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDApJztcbiAgdG9nZ2xlQmx1cigpO1xuICAvL3JlcGxhY2luZyBmb3JtIG5vZGUgd2l0aCBpdCdzIGNsb25lIHNvIHRoYXQgd2UgcmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnNcbiAgZm9ybS5yZXBsYWNlV2l0aChmb3JtLmNsb25lTm9kZSh0cnVlKSk7XG4gIGZvcm0ucmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoVG9UYXNrKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW5hdiAudGFzaycpO1xuICB0YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZvcm0uaW5uZXJIVE1MID0gJyc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSAnJztcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24oKTtcbiAgICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3NGcm9tTW9kYWwoKTtcbiAgICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoVG9Qcm9qZWN0KCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW5hdiAucHJvamVjdCcpO1xuICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZvcm0uaW5uZXJIVE1MID0gJyc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSAnJztcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3NGcm9tTW9kYWwoKTtcbiAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdGFza09yUHJvamVjdFN1Ym1pdCgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGdldERhdGFGcm9tRm9ybXMoZSk7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGhhbmRsZUZvcm1TdWJtaXNzaW9uKCk7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pc3Npb24oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IHByb2plY3RzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1hcmVhJyk7XG5cbiAgaWYgKGZvcm0uZ2V0QXR0cmlidXRlKCdjbGFzcycpLmluY2x1ZGVzKCd0YXNrJykpIHtcbiAgICB3aW5kb3cuYWxlcnQoJ1Rhc2sgYWRkZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgcG9wdWxhdGVNYWluQXJlYSgpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5hbGVydCgnUHJvamVjdCBhZGRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICBidWlsZFByb2plY3REb21FbGVtZW50KHByb2plY3RzQXJlYSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGJ1aWxkVGFza0RvbUVsZW1lbnQgfSBmcm9tICcuL2RvbS1kaXNwbGF5LXRhc2snO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCBpc1RvZGF5IGZyb20gJ2RhdGUtZm5zL2lzVG9kYXknO1xuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkRGF5cyc7XG5pbXBvcnQgaXNCZWZvcmUgZnJvbSAnZGF0ZS1mbnMvaXNCZWZvcmUnO1xuXG5jb25zdCBtYWluQXJlYVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJlYS10aXRsZScpO1xuY29uc3QgbWFpbkFyZWFDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJlYS1jb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGhhbmRsZU5vVGFza3ModGFza0xpc3QpIHtcbiAgaWYgKHRhc2tMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIG1haW5BcmVhQ29udGVudC50ZXh0Q29udGVudCA9ICdZYXkhIE5vIFRhc2tzISc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBtYWluQXJlYVRpdGxlLnRleHRDb250ZW50ID0gJ0FsbCBUYXNrcyc7XG5cbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCkpO1xuICBoYW5kbGVOb1Rhc2tzKHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZGF5VGFza3MoKSB7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG5cbiAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5BbGxUYXNrcygpO1xuICBsZXQgdG9kYXlUYXNrcyA9IFtdO1xuXG4gIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZGF0ZSk7XG4gICAgaWYgKGlzVG9kYXkodGFza0RhdGUpKSB0b2RheVRhc2tzLnB1c2godGFzayk7XG4gIH0pO1xuXG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCB0b2RheVRhc2tzKTtcbiAgaGFuZGxlTm9UYXNrcyh0b2RheVRhc2tzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVdlZWtUYXNrcygpIHtcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBtYWluQXJlYVRpdGxlLnRleHRDb250ZW50ID0gJ05leHQgNyBEYXlzJztcblxuICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCk7XG4gIGxldCBzZXZlbkRheXNUYXNrcyA9IFtdO1xuXG4gIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kYXRlKTtcbiAgICBjb25zdCBvbmVXZWVrTGF0ZXJEYXRlID0gYWRkRGF5cyh0b2RheURhdGUsIDcpO1xuICAgIGlmIChpc0JlZm9yZSh0YXNrRGF0ZSwgb25lV2Vla0xhdGVyRGF0ZSkpIHNldmVuRGF5c1Rhc2tzLnB1c2godGFzayk7XG4gIH0pO1xuXG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCBzZXZlbkRheXNUYXNrcyk7XG4gIGhhbmRsZU5vVGFza3Moc2V2ZW5EYXlzVGFza3MpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SW1wb3J0YW50VGFza3MoKSB7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuXG4gIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuQWxsVGFza3MoKTtcbiAgbGV0IGltcG9ydGFudFRhc2tzID0gW107XG5cbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgIGltcG9ydGFudFRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICB9KTtcblxuICBidWlsZFRhc2tEb21FbGVtZW50KG1haW5BcmVhQ29udGVudCwgaW1wb3J0YW50VGFza3MpO1xuICBoYW5kbGVOb1Rhc2tzKGltcG9ydGFudFRhc2tzKVxufVxuIiwiaW1wb3J0IHtcbiAgZGlzcGxheUFsbFRhc2tzLFxuICBkaXNwbGF5SW1wb3J0YW50VGFza3MsXG4gIGRpc3BsYXlUb2RheVRhc2tzLFxuICBkaXNwbGF5V2Vla1Rhc2tzLFxufSBmcm9tICcuL25hdi11dGlsaXR5JztcbmltcG9ydCB7IHJlbmRlclByb2plY3RUYXNrcyB9IGZyb20gJy4vZG9tLWRpc3BsYXktcHJvamVjdCc7XG5cbi8vIHVzaW5nIHRoaXMgdG8gaGVscCBwb3B1bGF0ZSB0aGUgbWFpbiBhcmVhIHdpdGggdGhlIGFkZXF1YXRlIGZpbHRlcmVkIGNvbnRlbnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVsYXRlTWFpbkFyZWEoKSB7XG4gIGNvbnN0IG5hdlNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWUgPiBkaXYnKTtcbiAgY29uc3QgcHJvamVjdERvbUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWFyZWEgPiBkaXYgPiBkaXYnKVxuICBjb25zdCBmdW5jdGlvblRvUnVuRGljdGlvbmFyeSA9IHtcbiAgICAndGFza3MgYWN0aXZlJzogZGlzcGxheUFsbFRhc2tzLFxuICAgICd0b2RheSBhY3RpdmUnOiBkaXNwbGF5VG9kYXlUYXNrcyxcbiAgICAnc2V2ZW4tZGF5cyBhY3RpdmUnOiBkaXNwbGF5V2Vla1Rhc2tzLFxuICAgICdpbXBvcnRhbnQgYWN0aXZlJzogZGlzcGxheUltcG9ydGFudFRhc2tzXG4gIH1cblxuICBmb3IgKGxldCBzZWN0aW9uIG9mIG5hdlNlY3Rpb25zKSB7XG4gICAgaWYgKHNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgY29uc3QgY2xhc3NMaXN0ID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ2NsYXNzJylcbiAgICAgIGZ1bmN0aW9uVG9SdW5EaWN0aW9uYXJ5W2NsYXNzTGlzdF0oKVxuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKHByb2plY3REb21FbGVtZW50cylcbn1cbiIsImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBwcm9qZWN0TWFuYWdlcigpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9qZWN0c1tpXS50aXRsZSA9PT0gcHJvamVjdC50aXRsZSkge1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJldHVybkFsbFRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsbFRhc2tzID0gW107XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgYWxsVGFza3MucHVzaCguLi5wcm9qZWN0LmdldFRhc2tzKCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFsbFRhc2tzXG4gIH1cblxuICBjb25zdCByZXR1cm5Qcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gIHJldHVybiB7IGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIHJldHVyblByb2plY3RzICwgcmV0dXJuQWxsVGFza3N9O1xufSkoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzaylcbiAgfVxuXG4gIGNoYW5nZVRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy50aXRsZSA9IHZhbHVlXG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZVxuICB9XG5cbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3NcbiAgfVxuXG4gIHJlbW92ZUNvbXBsZXRlZFRhc2tzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudGFza3NbaV0uY29tcGxldGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpLCAxKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY29tcGxldGlvblN0YXR1cyA9IGZhbHNlO1xuICAgIHRoaXMuZGVzY3JpcHRpb247XG4gICAgdGhpcy5kYXRlO1xuICAgIHRoaXMucHJpb3JpdHk7XG4gICAgdGhpcy5pZDtcbiAgfVxuXG4gIGNoYW5nZVRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgYWRkRGV0YWlscyh2YWx1ZSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGFkZER1ZURhdGUodmFsdWUpIHtcbiAgICB0aGlzLmRhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGFkZFByaW9yaXR5KHZhbHVlKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHZhbHVlO1xuICB9XG5cbiAgdG9nZ2xlQ29tcGxldGlvblN0YXR1cygpIHtcbiAgICB0aGlzLmNvbXBsZXRpb25TdGF0dXMgPSAhdGhpcy5jb21wbGV0aW9uU3RhdHVzO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9