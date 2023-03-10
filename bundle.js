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
/* harmony export */   "buildProjectDomElement": () => (/* binding */ buildProjectDomElement)
/* harmony export */ });
/* harmony import */ var _modal_form_build__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-form-build */ "./src/modal-form-build.js");
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");
/* harmony import */ var _dom_display_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-display-task */ "./src/dom-display-task.js");
/* harmony import */ var _edit_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-project */ "./src/edit-project.js");





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
        <span class="dots dots-${projectIndex}">&#x22EE</span>
      </div>
      <div class="pop-up pop-up-${projectIndex}">
        <div class="edit edit-${projectIndex}">Rename</div>
        <div class="delete delete-${projectIndex}">Delete</div>
      </div>
    </div>
  `);

  parent.appendChild(project);
  project.addEventListener('click', () => renderProjectTasks(lastProjectAdded));

  const projectEdit = document.querySelector(`.dots-${projectIndex}`);
  const popUp = document.querySelector(`.pop-up-${projectIndex}`);
  const renameButton = document.querySelector(`.edit-${projectIndex}`);
  const deleteButton = document.querySelector(`.delete-${projectIndex}`);

  renameButton.addEventListener('click', (e) => (0,_edit_project__WEBPACK_IMPORTED_MODULE_3__.buildEditInterface)(e));
  deleteButton.addEventListener('click', (e) => (0,_edit_project__WEBPACK_IMPORTED_MODULE_3__.deleteProject)(e))
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
        <div class="task-dots task-dots-${i}">&#x22EE</div>
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
    const flagContainer = document.querySelector(`.flag-container-${i}`);
    const taskDomElement = document.querySelector(`.task-body-${i}`);
    const detailsElement = document.querySelector(`.task-details-${i}`);

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
  const projectEditModal = document.querySelector(
    `.project-edit-modal-${clickedProjectIndex}`
  );
  const closeButton = document.querySelector(
    `.close-edit-project-${clickedProjectIndex}`
  );
  const submitForm = document.querySelector(
    `.project-edit-form-${clickedProjectIndex}`
  );
  const editedTitleInput = document.querySelector(
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

  if (dropdown === null) return

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

function returnAllTasks() {
  const allTasks = [];
  const projects = _project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].returnProjects();

  projects.forEach((project) => {
    allTasks.push(...project.getTasks());
  });

  return allTasks;
}

function handleNoTasks(taskList) {
  if (taskList.length === 0) {
    mainAreaContent.textContent = 'Yay! No Tasks!';
  }
}

function displayAllTasks() {
  mainAreaContent.innerHTML = '';
  mainAreaTitle.textContent = 'All Tasks';

  (0,_dom_display_task__WEBPACK_IMPORTED_MODULE_0__.buildTaskDomElement)(mainAreaContent, returnAllTasks());
  handleNoTasks(returnAllTasks());
}

function displayTodayTasks() {
  mainAreaContent.innerHTML = '';
  mainAreaTitle.textContent = 'Today';

  const allTasks = returnAllTasks();
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

  const allTasks = returnAllTasks();
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

  const allTasks = returnAllTasks();
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


// using this to help populate the main area with the adequate filtered content
function populateMainArea() {
  const navSections = document.querySelectorAll('.home > div');
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

  const returnProjects = () => projects;

  return { addProject, removeProject, returnProjects };
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
    // this.project;
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

  // assignToProject(value) {
  //   this.project = value;
  // }
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
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
const navButtons = document.querySelectorAll('.home > div');

addButton.addEventListener('click', () => (0,_modal_manipulation__WEBPACK_IMPORTED_MODULE_0__.popModal)());
closeModalButton.addEventListener('click', () => (0,_modal_manipulation__WEBPACK_IMPORTED_MODULE_0__.closeModal)());

allTasks.addEventListener('click', () => {
  (0,_nav_utility__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)();
  navButtons.forEach((button) => {
    if (button.classList.contains('tasks')) {
      button.classList.add('active');
    } else button.classList.remove('active');
  });
});

today.addEventListener('click', () => {
  (0,_nav_utility__WEBPACK_IMPORTED_MODULE_2__.displayTodayTasks)();
  navButtons.forEach((button) => {
    if (button.classList.contains('today')) {
      button.classList.add('active');
    } else button.classList.remove('active');
  });
});

nextWeek.addEventListener('click', () => {
  (0,_nav_utility__WEBPACK_IMPORTED_MODULE_2__.displayWeekTasks)();
  navButtons.forEach((button) => {
    if (button.classList.contains('seven-days')) {
      button.classList.add('active');
    } else button.classList.remove('active');
  });
});

important.addEventListener('click', () => {
  (0,_nav_utility__WEBPACK_IMPORTED_MODULE_2__.displayImportantTasks)();
  navButtons.forEach((button) => {
    if (button.classList.contains('important')) {
      button.classList.add('active');
    } else button.classList.remove('active');
  });
});

(0,_dom_display_project__WEBPACK_IMPORTED_MODULE_1__.buildProjectDomElement)(projectsArea);
(0,_nav_utility__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEVBQUUsbUVBQXFCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixHQUFHO0FBQ0gsQ0FBQzs7QUFFRCw0RUFBc0I7QUFDdEIsNkRBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQmVmb3JlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGF0YS1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb20tZGlzcGxheS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLWRpc3BsYXktdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VkaXQtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZGFsLWZvcm0tYnVpbGQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2RhbC1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9uYXYtdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3BvcHVsYXRlLW1haW4tYXJlYS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzQmVmb3JlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYmVmb3JlIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQmVmb3JlKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQmVmb3JlKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkaXJ0eURhdGVUb0NvbXBhcmUpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPCBkYXRlVG9Db21wYXJlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuZXhwb3J0IHsgZ2V0RGF0YUZyb21Gb3JtcyB9O1xuXG5mdW5jdGlvbiBnZXREYXRhRnJvbUZvcm1zKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvL2NoZWNrIGlmIHRoZSBmb3JtIGlzIGFzc29jaWF0ZWQgd2l0aCBhZGRpbmcgYSB0YXNrIG9yIGEgcHJvamVjdFxuICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmluY2x1ZGVzKCd0YXNrJykpIHtcbiAgICBnZXREYXRhRnJvbVRhc2tGb3JtKCk7XG4gIH0gZWxzZSBnZXREYXRhRnJvbVByb2plY3RGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGdldERhdGFGcm9tVGFza0Zvcm0oKSB7XG4gIGNvbnN0IHRhc2tUaXRsZVF1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtICN0aXRsZScpO1xuICBjb25zdCBwcm9qZWN0VG9Bc3NpZ25RdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSBzZWxlY3QnKTtcbiAgY29uc3QgZGV0YWlsc1F1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIHRleHRhcmVhJyk7XG4gIGNvbnN0IGR1ZURhdGVRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSAjZGF0ZScpO1xuICBjb25zdCBwcmlvcml0eVF1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuXG4gIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tUaXRsZVF1ZXJpZXIudmFsdWU7XG4gIGNvbnN0IHByb2plY3RUb0Fzc2lnblRvID0gcHJvamVjdFRvQXNzaWduUXVlcmllci52YWx1ZTtcbiAgY29uc3QgZGV0YWlscyA9IGRldGFpbHNRdWVyaWVyLnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZVF1ZXJpZXIudmFsdWU7XG4gIGxldCBwcmlvcml0eTtcblxuICBwcmlvcml0eVF1ZXJpZXIuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICBpZiAocmFkaW8uY2hlY2tlZCkgcHJpb3JpdHkgPSByYWRpby52YWx1ZTtcbiAgfSk7XG5cbiAgY29uc3QgdGFza1RvQWRkID0gbmV3IFRhc2sodGFza1RpdGxlKTtcbiAgdGFza1RvQWRkLmFkZERldGFpbHMoZGV0YWlscyk7XG4gIHRhc2tUb0FkZC5hZGREdWVEYXRlKGR1ZURhdGUpO1xuICB0YXNrVG9BZGQuYWRkUHJpb3JpdHkocHJpb3JpdHkpO1xuXG4gIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGlmIChwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3RUb0Fzc2lnblRvKSB7XG4gICAgICBwcm9qZWN0LmFkZFRhc2sodGFza1RvQWRkKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhRnJvbVByb2plY3RGb3JtKCkge1xuICBjb25zdCBwcm9qZWN0VGl0bGVRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSAudGl0bGUnKTtcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGVRdWVyaWVyLnZhbHVlO1xuXG4gIGNvbnN0IHByb2plY3RUb0FkZCA9IG5ldyBQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QocHJvamVjdFRvQWRkKTtcbn1cbiIsImltcG9ydCBlbGVtZW50RnJvbUh0bWwgZnJvbSAnLi9tb2RhbC1mb3JtLWJ1aWxkJztcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgeyBidWlsZFRhc2tEb21FbGVtZW50IH0gZnJvbSAnLi9kb20tZGlzcGxheS10YXNrJztcbmltcG9ydCB7IGJ1aWxkRWRpdEludGVyZmFjZSwgZGVsZXRlUHJvamVjdCB9IGZyb20gJy4vZWRpdC1wcm9qZWN0JztcblxuY29uc3QgbWFpbkFyZWFDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJlYS1jb250ZW50Jyk7XG5jb25zdCBtYWluQXJlYVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJlYS10aXRsZScpO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRQcm9qZWN0RG9tRWxlbWVudChwYXJlbnQpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuICBjb25zdCBsYXN0UHJvamVjdEFkZGVkID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV07XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGxhc3RQcm9qZWN0QWRkZWQuZ2V0VGl0bGUoKTtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihsYXN0UHJvamVjdEFkZGVkKTtcblxuICBjb25zdCBwcm9qZWN0ID0gZWxlbWVudEZyb21IdG1sKGBcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1jb250YWluZXIgcHJvamVjdC1jb250YWluZXItJHtwcm9qZWN0SW5kZXh9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdCBwcm9qZWN0LSR7cHJvamVjdEluZGV4fVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhhbWJ1cmdlclwiPuKYsDwvc3Bhbj5cbiAgICAgICAgPGRpdj4ke3Byb2plY3RUaXRsZX08L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RzIGRvdHMtJHtwcm9qZWN0SW5kZXh9XCI+JiN4MjJFRTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBvcC11cCBwb3AtdXAtJHtwcm9qZWN0SW5kZXh9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0IGVkaXQtJHtwcm9qZWN0SW5kZXh9XCI+UmVuYW1lPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGUgZGVsZXRlLSR7cHJvamVjdEluZGV4fVwiPkRlbGV0ZTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlclByb2plY3RUYXNrcyhsYXN0UHJvamVjdEFkZGVkKSk7XG5cbiAgY29uc3QgcHJvamVjdEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZG90cy0ke3Byb2plY3RJbmRleH1gKTtcbiAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wLXVwLSR7cHJvamVjdEluZGV4fWApO1xuICBjb25zdCByZW5hbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWRpdC0ke3Byb2plY3RJbmRleH1gKTtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRlbGV0ZS0ke3Byb2plY3RJbmRleH1gKTtcblxuICByZW5hbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gYnVpbGRFZGl0SW50ZXJmYWNlKGUpKTtcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGRlbGV0ZVByb2plY3QoZSkpXG4gIHByb2plY3RFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcG9wVXAuY2xhc3NMaXN0LmFkZCgncG9wcGluZycpKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCAhPT0gcHJvamVjdEVkaXQpIHBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RUYXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICBtYWluQXJlYUNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9IGBQcm9qZWN0OiAke3Byb2plY3RUaXRsZX1gO1xuICBidWlsZFRhc2tEb21FbGVtZW50KG1haW5BcmVhQ29udGVudCwgcHJvamVjdFRhc2tzKTtcblxuICBpZiAocHJvamVjdFRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgIG1haW5BcmVhQ29udGVudC50ZXh0Q29udGVudCA9XG4gICAgICAnVGhpcyBwcm9qZWN0IGFwcGVhcnMgZW1wdHkuIEFkZCB0YXNrcyB0byBnZXQgc3RhcnRlZCEnO1xuICB9XG59XG4iLCJpbXBvcnQgZWxlbWVudEZyb21IdG1sIGZyb20gJy4vbW9kYWwtZm9ybS1idWlsZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRhc2tEb21FbGVtZW50KHBhcmVudCwgdGFza3MpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tzW2ldLnRpdGxlO1xuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gdGFza3NbaV0uZGVzY3JpcHRpb247XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSB0YXNrc1tpXS5kYXRlO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2tzW2ldLnByaW9yaXR5O1xuICAgIGxldCBmbGFnQ29sb3I7XG5cbiAgICBsZXQgdGFza0VsZW1lbnQgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWJvZHkgdGFzay1ib2R5LSR7aX1cIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRhc2stY2hlY2sgdGFzay1jaGVjay0ke2l9XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInRhc2stdGl0bGUgdGFzay10aXRsZS0ke2l9XCI+JHt0YXNrVGl0bGV9PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscyB0YXNrLWRldGFpbHMtJHtpfVwiPiR7dGFza0RldGFpbHN9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWR1ZS1kYXRlIHRhc2stZHVlLWRhdGUtJHtpfVwiPiR7dGFza0R1ZURhdGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGFnLWNvbnRhaW5lciBmbGFnLWNvbnRhaW5lci0ke2l9XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRvdHMgdGFzay1kb3RzLSR7aX1cIj4mI3gyMkVFPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCk7XG5cbiAgICBzd2l0Y2ggKHRhc2tQcmlvcml0eSkge1xuICAgICAgY2FzZSAnbG93JzpcbiAgICAgICAgZmxhZ0NvbG9yID0gJ2JsdWUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIGZsYWdDb2xvciA9ICdvcmFuZ2UnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICBmbGFnQ29sb3IgPSAncmVkJztcbiAgICB9XG5cbiAgICBsZXQgZmxhZyA9IGVsZW1lbnRGcm9tSHRtbChgXG4gICAgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwidXRmLThcIj8+PCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT5cbiAgICAgIDxzdmcgd2lkdGg9XCIyMnB4XCIgaGVpZ2h0PVwiMjJweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiJHtmbGFnQ29sb3J9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgPHBhdGggb3BhY2l0eT1cIjAuMTVcIiBkPVwiTTQgNEgyMEwxNSA5TDIwIDE0SDRWNFpcIi8+XG4gICAgICA8cGF0aCBkPVwiTTQgMjFWMTRNNCAxNFY0SDIwTDE1IDlMMjAgMTRINFpcIiBzdHJva2U9XCIke2ZsYWdDb2xvcn1cIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XG4gICAgPC9zdmc+XG4gIGApO1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgICBjb25zdCBmbGFnQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZsYWctY29udGFpbmVyLSR7aX1gKTtcbiAgICBjb25zdCB0YXNrRG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrLWJvZHktJHtpfWApO1xuICAgIGNvbnN0IGRldGFpbHNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2stZGV0YWlscy0ke2l9YCk7XG5cbiAgICBmbGFnQ29udGFpbmVyLmFwcGVuZENoaWxkKGZsYWcpO1xuICAgIHRhc2tEb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIGRldGFpbHNFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctZGV0YWlscycpXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVsZW1lbnRGcm9tSHRtbCBmcm9tICcuL21vZGFsLWZvcm0tYnVpbGQnO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCBwb3B1bGF0ZU1haW5BcmVhIGZyb20gJy4vcG9wdWxhdGUtbWFpbi1hcmVhJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRWRpdEludGVyZmFjZShlKSB7XG4gIGNvbnN0IGNsaWNrZWRQcm9qZWN0VW5pcXVlQ2xhc3MgPSBlLnRhcmdldC5jbGFzc0xpc3RbMV07XG4gIGNvbnN0IGNsaWNrZWRQcm9qZWN0SW5kZXggPVxuICAgIGNsaWNrZWRQcm9qZWN0VW5pcXVlQ2xhc3NbY2xpY2tlZFByb2plY3RVbmlxdWVDbGFzcy5sZW5ndGggLSAxXTtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuICBjb25zdCBwcm9qZWN0VG9FZGl0ID0gYWxsUHJvamVjdHNbY2xpY2tlZFByb2plY3RJbmRleF07XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RUb0VkaXQuZ2V0VGl0bGUoKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICBjb25zdCBlZGl0UHJvamVjdE1vZGFsID0gZWxlbWVudEZyb21IdG1sKGBcbiAgICA8ZGl2IGNsYXNzPVwiYWRkLW5ldy1tb2RhbCBwcm9qZWN0LWVkaXQtbW9kYWwtJHtjbGlja2VkUHJvamVjdEluZGV4fVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICA8aDM+RWRpdCBQcm9qZWN0PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlIGNsb3NlLWVkaXQtcHJvamVjdC0ke2NsaWNrZWRQcm9qZWN0SW5kZXh9XCI+JiN4MjcxNTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtbmF2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9tb2RhbC1wcm9qZWN0LnBuZ1wiPlxuICAgICAgICAgICAgPGRpdj5Qcm9qZWN0PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cInByb2plY3QtZWRpdC1mb3JtLSR7Y2xpY2tlZFByb2plY3RJbmRleH1cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidGl0bGUgZWRpdC10aXRsZS0ke2NsaWNrZWRQcm9qZWN0SW5kZXh9XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7cHJvamVjdFRpdGxlfVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJwcm9qZWN0LXN1Ym1pdFwiPlxuICAgICAgICAgICAgRWRpdCBQcm9qZWN0PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0TW9kYWwpO1xuICBjb25zdCBwcm9qZWN0RWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLnByb2plY3QtZWRpdC1tb2RhbC0ke2NsaWNrZWRQcm9qZWN0SW5kZXh9YFxuICApO1xuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5jbG9zZS1lZGl0LXByb2plY3QtJHtjbGlja2VkUHJvamVjdEluZGV4fWBcbiAgKTtcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5wcm9qZWN0LWVkaXQtZm9ybS0ke2NsaWNrZWRQcm9qZWN0SW5kZXh9YFxuICApO1xuICBjb25zdCBlZGl0ZWRUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLmVkaXQtdGl0bGUtJHtjbGlja2VkUHJvamVjdEluZGV4fWBcbiAgKTtcblxuICBwcm9qZWN0RWRpdE1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgxKSc7XG5cbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHJvamVjdEVkaXRNb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMCknO1xuICB9KTtcblxuICBzdWJtaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGVkaXQgcHJvamVjdCBpbiBidXNpbmVzcyBsb2dpY1xuICAgIGNvbnN0IGVkaXRlZFRpdGxlID0gZWRpdGVkVGl0bGVJbnB1dC52YWx1ZTtcbiAgICBwcm9qZWN0VG9FZGl0LmNoYW5nZVRpdGxlKGVkaXRlZFRpdGxlKTtcbiAgICAvL2VkaXQgcHJvamVjdCBpbiBET01cbiAgICBlZGl0UHJvamVjdE5hbWVGcm9tRG9tKGNsaWNrZWRQcm9qZWN0SW5kZXgsIGVkaXRlZFRpdGxlKTtcblxuICAgIHByb2plY3RFZGl0TW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDApJztcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcbiAgY29uc3QgY2xpY2tlZFByb2plY3RVbmlxdWVDbGFzcyA9IGUudGFyZ2V0LmNsYXNzTGlzdFsxXTtcbiAgY29uc3QgY2xpY2tlZFByb2plY3RJbmRleCA9XG4gICAgY2xpY2tlZFByb2plY3RVbmlxdWVDbGFzc1tjbGlja2VkUHJvamVjdFVuaXF1ZUNsYXNzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIGNvbnN0IHByb2plY3RUb0RlbGV0ZSA9IGFsbFByb2plY3RzW2NsaWNrZWRQcm9qZWN0SW5kZXhdO1xuXG4gIC8vcmVtb3ZlIHByb2plY3QgZnJvbSBidXNpbmVzcyBsb2dpY1xuICBwcm9qZWN0TWFuYWdlci5yZW1vdmVQcm9qZWN0KHByb2plY3RUb0RlbGV0ZSlcbiAgLy9yZW1vdmUgcHJvamVjdCBmcm9tIERPTVxuICByZW1vdmVQcm9qZWN0RnJvbURvbShjbGlja2VkUHJvamVjdEluZGV4KVxuICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cylcblxuICBwb3B1bGF0ZU1haW5BcmVhKClcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3ROYW1lRnJvbURvbShpbmRleCwgZWRpdFZhbHVlKSB7XG4gIGNvbnN0IHByb2plY3REb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QtJHtpbmRleH0gPiBkaXZgKTtcbiAgcHJvamVjdERvbUVsZW1lbnQudGV4dENvbnRlbnQgPSBlZGl0VmFsdWU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RGcm9tRG9tKGluZGV4KSB7XG4gIGNvbnN0IHByb2plY3REb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QtY29udGFpbmVyLSR7aW5kZXh9ID4gZGl2YCk7XG4gIHByb2plY3REb21FbGVtZW50LnJlbW92ZSgpXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWxlbWVudEZyb21IdG1sKGh0bWwpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sLnRyaW0oKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuY29uc3QgdGFza0Zvcm0gPSBlbGVtZW50RnJvbUh0bWwoYFxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZTogUGF5IGJpbGxzXCIgcmVxdWlyZWQvPlxuICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj5cbiAgICA8bGFiZWwgZm9yPVwicHJvamVjdFwiPlByb2plY3QgdG8gYXNzaWduIHRvOiA8L2xhYmVsPlxuICAgIDxzZWxlY3QgbmFtZT1cIlwiIGlkPVwicHJvamVjdFwiPjwvc2VsZWN0PlxuICA8L2Rpdj5cbiAgPHRleHRhcmVhIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiRGV0YWlsczogZS5nIGludGVybmV0LCBwaG9uZSwgcmVudC5cIj48L3RleHRhcmVhPlxuICA8ZGl2IGNsYXNzPVwiZGF0ZS1jb250YWluZXJcIj5cbiAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+XG4gICAgPGRpdiBjbGFzcz1cImRhdGVcIj48aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiAvPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInByaW9yaXR5LXJhZGlvXCI+XG4gICAgPHNwYW4+UHJpb3JpdHk6PC9zcGFuPlxuICAgIDxsYWJlbCBmb3I9XCJsb3dcIj5Mb3c8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImxvd1wiIGlkPVwibG93XCIgY2hlY2tlZC8+XG4gICAgPGxhYmVsIGZvcj1cIm1lZGl1bVwiPk1lZGl1bTwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibWVkaXVtXCIgaWQ9XCJtZWRpdW1cIi8+XG4gICAgPGxhYmVsIGZvcj1cImhpZ2hcIj5IaWdoPC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJoaWdoXCIgaWQ9XCJoaWdoXCIvPlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwidGFzayB0YXNrLXN1Ym1pdFwiPkFkZCBUYXNrPC9idXR0b24+XG4gIDwvZGl2PlxuYCk7XG5cbmNvbnN0IHByb2plY3RGb3JtID0gZWxlbWVudEZyb21IdG1sKGBcbiAgPGlucHV0IGNsYXNzPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGl0bGU6IEhvdXNlIFJlbm92YXRpb25cIiByZXF1aXJlZD5cbiAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJwcm9qZWN0LXN1Ym1pdFwiPkNyZWF0ZSBQcm9qZWN0PC9idXR0b24+XG5gKTtcblxuZXhwb3J0IHsgdGFza0Zvcm0sIHByb2plY3RGb3JtIH07XG4iLCJpbXBvcnQgeyBidWlsZFByb2plY3REb21FbGVtZW50IH0gZnJvbSAnLi9kb20tZGlzcGxheS1wcm9qZWN0JztcbmltcG9ydCB7IHRhc2tGb3JtLCBwcm9qZWN0Rm9ybSB9IGZyb20gJy4vbW9kYWwtZm9ybS1idWlsZCc7XG5pbXBvcnQgeyBnZXREYXRhRnJvbUZvcm1zIH0gZnJvbSAnLi9kYXRhLW1hbmlwdWxhdGlvbic7XG5pbXBvcnQgcG9wdWxhdGVNYWluQXJlYSBmcm9tICcuL3BvcHVsYXRlLW1haW4tYXJlYSc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmV4cG9ydCB7IHBvcE1vZGFsLCBjbG9zZU1vZGFsIH07XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctbW9kYWwnKTtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgnWW91ciBGaXJzdCBQcm9qZWN0Jyk7XG5wcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcblxuZnVuY3Rpb24gdG9nZ2xlQmx1cigpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy1tb2RhbCcpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAvL2NoZWNrIGlmICdwb3BwaW5nJyBjbGFzcyBpbiBtb2RhbDsgbWVhbnMgd2UgYXJlIG9wZW5pbmcgbW9kYWxcbiAgaWYgKG1vZGFsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5pbmNsdWRlcygncG9wcGluZycpKSB7XG4gICAgaGVhZGVyLnN0eWxlLmNzc1RleHQgPSAnZmlsdGVyOiBibHVyKDNweCknO1xuICAgIGNvbnRlbnQuc3R5bGUuY3NzVGV4dCA9ICdmaWx0ZXI6IGJsdXIoM3B4KSc7XG4gIH0gZWxzZSB7XG4gICAgaGVhZGVyLnN0eWxlLmNzc1RleHQgPSAnZmlsdGVyOiBibHVyKDBweCknO1xuICAgIGNvbnRlbnQuc3R5bGUuY3NzVGV4dCA9ICdmaWx0ZXI6IGJsdXIoMHB4KSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0c0Ryb3Bkb3duKCkge1xuICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93biBzZWxlY3QnKTtcbiAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuICBjb25zdCBvcHRpb25zID0gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkpO1xuXG4gIGlmIChkcm9wZG93biA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgZHJvcGRvd24uaW5uZXJIVE1MID0gJyc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgb3B0ID0gb3B0aW9uc1tpXTtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGVsLnRleHRDb250ZW50ID0gb3B0O1xuICAgIGVsLnZhbHVlID0gb3B0O1xuICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGVsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3BNb2RhbCgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgncG9wcGluZycpO1xuICBtb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMSknO1xuICB0b2dnbGVCbHVyKCk7XG4gIGZvcm0uaW5uZXJIVE1MID0gJyc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICAvL2FkZGluZyAndGFzaycgY2xhc3MgaW4gb3JkZXIgdG8gZGlmZmVyZW50aWF0ZSB0aGUgZm9ybSB0eXBlICh0YXNrIG9yIHByb2plY3QpXG4gIGZvcm0uY2xhc3NOYW1lID0gJyc7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24oKTtcbiAgc3dpdGNoVG9UYXNrKCk7XG4gIHN3aXRjaFRvUHJvamVjdCgpO1xuICB0YXNrT3JQcm9qZWN0U3VibWl0KCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgbW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDApJztcbiAgdG9nZ2xlQmx1cigpO1xuICAvL3JlcGxhY2luZyBmb3JtIG5vZGUgd2l0aCBpdCdzIGNsb25lIHNvIHRoYXQgd2UgcmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnNcbiAgZm9ybS5yZXBsYWNlV2l0aChmb3JtLmNsb25lTm9kZSh0cnVlKSk7XG4gIGZvcm0ucmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoVG9UYXNrKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW5hdiAudGFzaycpO1xuICB0YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZvcm0uaW5uZXJIVE1MID0gJyc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSAnJztcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFRvUHJvamVjdCgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1uYXYgLnByb2plY3QnKTtcbiAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmb3JtLmlubmVySFRNTCA9ICcnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuICAgIGZvcm0uY2xhc3NOYW1lID0gJyc7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0YXNrT3JQcm9qZWN0U3VibWl0KCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZ2V0RGF0YUZyb21Gb3JtcyhlKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgaGFuZGxlRm9ybVN1Ym1pc3Npb24oKTtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVGb3JtU3VibWlzc2lvbigpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgcHJvamVjdHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWFyZWEnKTtcblxuICBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuaW5jbHVkZXMoJ3Rhc2snKSkge1xuICAgIHdpbmRvdy5hbGVydCgnVGFzayBhZGRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICBwb3B1bGF0ZU1haW5BcmVhKCk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmFsZXJ0KCdQcm9qZWN0IGFkZGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgIGJ1aWxkUHJvamVjdERvbUVsZW1lbnQocHJvamVjdHNBcmVhKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgYnVpbGRUYXNrRG9tRWxlbWVudCB9IGZyb20gJy4vZG9tLWRpc3BsYXktdGFzayc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IGlzVG9kYXkgZnJvbSAnZGF0ZS1mbnMvaXNUb2RheSc7XG5pbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGREYXlzJztcbmltcG9ydCBpc0JlZm9yZSBmcm9tICdkYXRlLWZucy9pc0JlZm9yZSc7XG5cbmNvbnN0IG1haW5BcmVhVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1hcmVhLXRpdGxlJyk7XG5jb25zdCBtYWluQXJlYUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1hcmVhLWNvbnRlbnQnKTtcblxuZnVuY3Rpb24gcmV0dXJuQWxsVGFza3MoKSB7XG4gIGNvbnN0IGFsbFRhc2tzID0gW107XG4gIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcblxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgYWxsVGFza3MucHVzaCguLi5wcm9qZWN0LmdldFRhc2tzKCkpO1xuICB9KTtcblxuICByZXR1cm4gYWxsVGFza3M7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU5vVGFza3ModGFza0xpc3QpIHtcbiAgaWYgKHRhc2tMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIG1haW5BcmVhQ29udGVudC50ZXh0Q29udGVudCA9ICdZYXkhIE5vIFRhc2tzISc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBtYWluQXJlYVRpdGxlLnRleHRDb250ZW50ID0gJ0FsbCBUYXNrcyc7XG5cbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIHJldHVybkFsbFRhc2tzKCkpO1xuICBoYW5kbGVOb1Rhc2tzKHJldHVybkFsbFRhc2tzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZGF5VGFza3MoKSB7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG5cbiAgY29uc3QgYWxsVGFza3MgPSByZXR1cm5BbGxUYXNrcygpO1xuICBsZXQgdG9kYXlUYXNrcyA9IFtdO1xuXG4gIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZGF0ZSk7XG4gICAgaWYgKGlzVG9kYXkodGFza0RhdGUpKSB0b2RheVRhc2tzLnB1c2godGFzayk7XG4gIH0pO1xuXG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCB0b2RheVRhc2tzKTtcbiAgaGFuZGxlTm9UYXNrcyh0b2RheVRhc2tzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVdlZWtUYXNrcygpIHtcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBtYWluQXJlYVRpdGxlLnRleHRDb250ZW50ID0gJ05leHQgNyBEYXlzJztcblxuICBjb25zdCBhbGxUYXNrcyA9IHJldHVybkFsbFRhc2tzKCk7XG4gIGxldCBzZXZlbkRheXNUYXNrcyA9IFtdO1xuXG4gIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kYXRlKTtcbiAgICBjb25zdCBvbmVXZWVrTGF0ZXJEYXRlID0gYWRkRGF5cyh0b2RheURhdGUsIDcpO1xuICAgIGlmIChpc0JlZm9yZSh0YXNrRGF0ZSwgb25lV2Vla0xhdGVyRGF0ZSkpIHNldmVuRGF5c1Rhc2tzLnB1c2godGFzayk7XG4gIH0pO1xuXG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCBzZXZlbkRheXNUYXNrcyk7XG4gIGhhbmRsZU5vVGFza3Moc2V2ZW5EYXlzVGFza3MpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SW1wb3J0YW50VGFza3MoKSB7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuXG4gIGNvbnN0IGFsbFRhc2tzID0gcmV0dXJuQWxsVGFza3MoKTtcbiAgbGV0IGltcG9ydGFudFRhc2tzID0gW107XG5cbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgIGltcG9ydGFudFRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICB9KTtcblxuICBidWlsZFRhc2tEb21FbGVtZW50KG1haW5BcmVhQ29udGVudCwgaW1wb3J0YW50VGFza3MpO1xuICBoYW5kbGVOb1Rhc2tzKGltcG9ydGFudFRhc2tzKVxufVxuIiwiaW1wb3J0IHtcbiAgZGlzcGxheUFsbFRhc2tzLFxuICBkaXNwbGF5SW1wb3J0YW50VGFza3MsXG4gIGRpc3BsYXlUb2RheVRhc2tzLFxuICBkaXNwbGF5V2Vla1Rhc2tzLFxufSBmcm9tICcuL25hdi11dGlsaXR5JztcblxuLy8gdXNpbmcgdGhpcyB0byBoZWxwIHBvcHVsYXRlIHRoZSBtYWluIGFyZWEgd2l0aCB0aGUgYWRlcXVhdGUgZmlsdGVyZWQgY29udGVudFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdWxhdGVNYWluQXJlYSgpIHtcbiAgY29uc3QgbmF2U2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZSA+IGRpdicpO1xuICBjb25zdCBmdW5jdGlvblRvUnVuRGljdGlvbmFyeSA9IHtcbiAgICAndGFza3MgYWN0aXZlJzogZGlzcGxheUFsbFRhc2tzLFxuICAgICd0b2RheSBhY3RpdmUnOiBkaXNwbGF5VG9kYXlUYXNrcyxcbiAgICAnc2V2ZW4tZGF5cyBhY3RpdmUnOiBkaXNwbGF5V2Vla1Rhc2tzLFxuICAgICdpbXBvcnRhbnQgYWN0aXZlJzogZGlzcGxheUltcG9ydGFudFRhc2tzXG4gIH1cblxuICBmb3IgKGxldCBzZWN0aW9uIG9mIG5hdlNlY3Rpb25zKSB7XG4gICAgaWYgKHNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgY29uc3QgY2xhc3NMaXN0ID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ2NsYXNzJylcbiAgICAgIGZ1bmN0aW9uVG9SdW5EaWN0aW9uYXJ5W2NsYXNzTGlzdF0oKVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHByb2plY3RNYW5hZ2VyKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3RzW2ldLnRpdGxlID09PSBwcm9qZWN0LnRpdGxlKSB7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmV0dXJuUHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcblxuICByZXR1cm4geyBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCByZXR1cm5Qcm9qZWN0cyB9O1xufSkoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzaylcbiAgfVxuXG4gIGNoYW5nZVRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy50aXRsZSA9IHZhbHVlXG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZVxuICB9XG5cbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3NcbiAgfVxuXG4gIHJlbW92ZUNvbXBsZXRlZFRhc2tzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudGFza3NbaV0uY29tcGxldGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpLCAxKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY29tcGxldGlvblN0YXR1cyA9IGZhbHNlO1xuICAgIHRoaXMuZGVzY3JpcHRpb247XG4gICAgdGhpcy5kYXRlO1xuICAgIHRoaXMucHJpb3JpdHk7XG4gICAgLy8gdGhpcy5wcm9qZWN0O1xuICB9XG5cbiAgY2hhbmdlVGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLnRpdGxlID0gdmFsdWU7XG4gIH1cblxuICBhZGREZXRhaWxzKHZhbHVlKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgYWRkRHVlRGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgYWRkUHJpb3JpdHkodmFsdWUpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWU7XG4gIH1cblxuICB0b2dnbGVDb21wbGV0aW9uU3RhdHVzKCkge1xuICAgIHRoaXMuY29tcGxldGlvblN0YXR1cyA9ICF0aGlzLmNvbXBsZXRpb25TdGF0dXM7XG4gIH1cblxuICAvLyBhc3NpZ25Ub1Byb2plY3QodmFsdWUpIHtcbiAgLy8gICB0aGlzLnByb2plY3QgPSB2YWx1ZTtcbiAgLy8gfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwb3BNb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gJy4vbW9kYWwtbWFuaXB1bGF0aW9uJztcbmltcG9ydCB7IGJ1aWxkUHJvamVjdERvbUVsZW1lbnQgfSBmcm9tICcuL2RvbS1kaXNwbGF5LXByb2plY3QnO1xuaW1wb3J0IHtcbiAgZGlzcGxheUFsbFRhc2tzLFxuICBkaXNwbGF5SW1wb3J0YW50VGFza3MsXG4gIGRpc3BsYXlUb2RheVRhc2tzLFxuICBkaXNwbGF5V2Vla1Rhc2tzLFxufSBmcm9tICcuL25hdi11dGlsaXR5JztcblxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXcnKTtcbmNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtaGVhZGVyIC5jbG9zZScpO1xuY29uc3QgcHJvamVjdHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWFyZWEnKTtcbmNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpO1xuY29uc3QgbmV4dFdlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V2ZW4tZGF5cycpO1xuY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltcG9ydGFudCcpO1xuY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lID4gZGl2Jyk7XG5cbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBvcE1vZGFsKCkpO1xuY2xvc2VNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlTW9kYWwoKSk7XG5cbmFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkaXNwbGF5QWxsVGFza3MoKTtcbiAgbmF2QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygndGFza3MnKSkge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0pO1xufSk7XG5cbnRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkaXNwbGF5VG9kYXlUYXNrcygpO1xuICBuYXZCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RheScpKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSBlbHNlIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG59KTtcblxubmV4dFdlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRpc3BsYXlXZWVrVGFza3MoKTtcbiAgbmF2QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnc2V2ZW4tZGF5cycpKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSBlbHNlIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG59KTtcblxuaW1wb3J0YW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkaXNwbGF5SW1wb3J0YW50VGFza3MoKTtcbiAgbmF2QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnaW1wb3J0YW50JykpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9IGVsc2UgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9KTtcbn0pO1xuXG5idWlsZFByb2plY3REb21FbGVtZW50KHByb2plY3RzQXJlYSk7XG5kaXNwbGF5QWxsVGFza3MoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==