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
    <div class="task-body">
      <input type="checkbox" class="task-check">
      <span class="task-title">${taskTitle}</span>
     <div class="task-due-date">${taskDueDate}</div>
     <div class="flag-container${i}"></div>
     <div class="task-dots">&#x22EE</div>
    </div>
  `);
    
    switch (taskPriority) {
      case 'low':
        flagColor = 'blue'
        break;
      case 'medium':
        flagColor = 'orange'
        break
      case 'high':
        flagColor = 'red'
    }
    
    let flag = (0,_modal_form_build__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
      <svg width="22px" height="22px" viewBox="0 0 24 24" fill="${flagColor}" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.15" d="M4 4H20L15 9L20 14H4V4Z"/>
      <path d="M4 21V14M4 14V4H20L15 9L20 14H4Z" stroke="${flagColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `);
    
        
    parent.appendChild(taskElement)
    const flagContainer = document.querySelector(`.flag-container${i}`)
    flagContainer.appendChild(flag)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQmVmb3JlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGF0YS1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb20tZGlzcGxheS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLWRpc3BsYXktdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VkaXQtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZGFsLWZvcm0tYnVpbGQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2RhbC1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9uYXYtdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3BvcHVsYXRlLW1haW4tYXJlYS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzQmVmb3JlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYmVmb3JlIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQmVmb3JlKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQmVmb3JlKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkaXJ0eURhdGVUb0NvbXBhcmUpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPCBkYXRlVG9Db21wYXJlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuZXhwb3J0IHsgZ2V0RGF0YUZyb21Gb3JtcyB9O1xuXG5mdW5jdGlvbiBnZXREYXRhRnJvbUZvcm1zKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvL2NoZWNrIGlmIHRoZSBmb3JtIGlzIGFzc29jaWF0ZWQgd2l0aCBhZGRpbmcgYSB0YXNrIG9yIGEgcHJvamVjdFxuICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmluY2x1ZGVzKCd0YXNrJykpIHtcbiAgICBnZXREYXRhRnJvbVRhc2tGb3JtKCk7XG4gIH0gZWxzZSBnZXREYXRhRnJvbVByb2plY3RGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGdldERhdGFGcm9tVGFza0Zvcm0oKSB7XG4gIGNvbnN0IHRhc2tUaXRsZVF1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtICN0aXRsZScpO1xuICBjb25zdCBwcm9qZWN0VG9Bc3NpZ25RdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSBzZWxlY3QnKTtcbiAgY29uc3QgZGV0YWlsc1F1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIHRleHRhcmVhJyk7XG4gIGNvbnN0IGR1ZURhdGVRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSAjZGF0ZScpO1xuICBjb25zdCBwcmlvcml0eVF1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuXG4gIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tUaXRsZVF1ZXJpZXIudmFsdWU7XG4gIGNvbnN0IHByb2plY3RUb0Fzc2lnblRvID0gcHJvamVjdFRvQXNzaWduUXVlcmllci52YWx1ZTtcbiAgY29uc3QgZGV0YWlscyA9IGRldGFpbHNRdWVyaWVyLnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZVF1ZXJpZXIudmFsdWU7XG4gIGxldCBwcmlvcml0eTtcblxuICBwcmlvcml0eVF1ZXJpZXIuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICBpZiAocmFkaW8uY2hlY2tlZCkgcHJpb3JpdHkgPSByYWRpby52YWx1ZTtcbiAgfSk7XG5cbiAgY29uc3QgdGFza1RvQWRkID0gbmV3IFRhc2sodGFza1RpdGxlKTtcbiAgdGFza1RvQWRkLmFkZERldGFpbHMoZGV0YWlscyk7XG4gIHRhc2tUb0FkZC5hZGREdWVEYXRlKGR1ZURhdGUpO1xuICB0YXNrVG9BZGQuYWRkUHJpb3JpdHkocHJpb3JpdHkpO1xuXG4gIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGlmIChwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3RUb0Fzc2lnblRvKSB7XG4gICAgICBwcm9qZWN0LmFkZFRhc2sodGFza1RvQWRkKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhRnJvbVByb2plY3RGb3JtKCkge1xuICBjb25zdCBwcm9qZWN0VGl0bGVRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSAudGl0bGUnKTtcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGVRdWVyaWVyLnZhbHVlO1xuXG4gIGNvbnN0IHByb2plY3RUb0FkZCA9IG5ldyBQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QocHJvamVjdFRvQWRkKTtcbn1cbiIsImltcG9ydCBlbGVtZW50RnJvbUh0bWwgZnJvbSAnLi9tb2RhbC1mb3JtLWJ1aWxkJztcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgeyBidWlsZFRhc2tEb21FbGVtZW50IH0gZnJvbSAnLi9kb20tZGlzcGxheS10YXNrJztcbmltcG9ydCB7IGJ1aWxkRWRpdEludGVyZmFjZSwgZGVsZXRlUHJvamVjdCB9IGZyb20gJy4vZWRpdC1wcm9qZWN0JztcblxuY29uc3QgbWFpbkFyZWFDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJlYS1jb250ZW50Jyk7XG5jb25zdCBtYWluQXJlYVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJlYS10aXRsZScpO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRQcm9qZWN0RG9tRWxlbWVudChwYXJlbnQpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuICBjb25zdCBsYXN0UHJvamVjdEFkZGVkID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV07XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGxhc3RQcm9qZWN0QWRkZWQuZ2V0VGl0bGUoKTtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihsYXN0UHJvamVjdEFkZGVkKTtcblxuICBjb25zdCBwcm9qZWN0ID0gZWxlbWVudEZyb21IdG1sKGBcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1jb250YWluZXIgcHJvamVjdC1jb250YWluZXItJHtwcm9qZWN0SW5kZXh9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdCBwcm9qZWN0LSR7cHJvamVjdEluZGV4fVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhhbWJ1cmdlclwiPuKYsDwvc3Bhbj5cbiAgICAgICAgPGRpdj4ke3Byb2plY3RUaXRsZX08L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RzIGRvdHMtJHtwcm9qZWN0SW5kZXh9XCI+JiN4MjJFRTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBvcC11cCBwb3AtdXAtJHtwcm9qZWN0SW5kZXh9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0IGVkaXQtJHtwcm9qZWN0SW5kZXh9XCI+UmVuYW1lPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGUgZGVsZXRlLSR7cHJvamVjdEluZGV4fVwiPkRlbGV0ZTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlclByb2plY3RUYXNrcyhsYXN0UHJvamVjdEFkZGVkKSk7XG5cbiAgY29uc3QgcHJvamVjdEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZG90cy0ke3Byb2plY3RJbmRleH1gKTtcbiAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wLXVwLSR7cHJvamVjdEluZGV4fWApO1xuICBjb25zdCByZW5hbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWRpdC0ke3Byb2plY3RJbmRleH1gKTtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRlbGV0ZS0ke3Byb2plY3RJbmRleH1gKTtcblxuICByZW5hbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gYnVpbGRFZGl0SW50ZXJmYWNlKGUpKTtcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGRlbGV0ZVByb2plY3QoZSkpXG4gIHByb2plY3RFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcG9wVXAuY2xhc3NMaXN0LmFkZCgncG9wcGluZycpKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCAhPT0gcHJvamVjdEVkaXQpIHBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RUYXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICBtYWluQXJlYUNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9IGBQcm9qZWN0OiAke3Byb2plY3RUaXRsZX1gO1xuICBidWlsZFRhc2tEb21FbGVtZW50KG1haW5BcmVhQ29udGVudCwgcHJvamVjdFRhc2tzKTtcblxuICBpZiAocHJvamVjdFRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgIG1haW5BcmVhQ29udGVudC50ZXh0Q29udGVudCA9XG4gICAgICAnVGhpcyBwcm9qZWN0IGFwcGVhcnMgZW1wdHkuIEFkZCB0YXNrcyB0byBnZXQgc3RhcnRlZCEnO1xuICB9XG59XG4iLCJpbXBvcnQgZWxlbWVudEZyb21IdG1sIGZyb20gJy4vbW9kYWwtZm9ybS1idWlsZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRhc2tEb21FbGVtZW50KHBhcmVudCwgdGFza3MpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tzW2ldLnRpdGxlO1xuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gdGFza3NbaV0uZGVzY3JpcHRpb247XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSB0YXNrc1tpXS5kYXRlO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2tzW2ldLnByaW9yaXR5O1xuICAgIGxldCBmbGFnQ29sb3I7XG5cbiAgICBsZXQgdGFza0VsZW1lbnQgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWJvZHlcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRhc2stY2hlY2tcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidGFzay10aXRsZVwiPiR7dGFza1RpdGxlfTwvc3Bhbj5cbiAgICAgPGRpdiBjbGFzcz1cInRhc2stZHVlLWRhdGVcIj4ke3Rhc2tEdWVEYXRlfTwvZGl2PlxuICAgICA8ZGl2IGNsYXNzPVwiZmxhZy1jb250YWluZXIke2l9XCI+PC9kaXY+XG4gICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRvdHNcIj4mI3gyMkVFPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuICAgIFxuICAgIHN3aXRjaCAodGFza1ByaW9yaXR5KSB7XG4gICAgICBjYXNlICdsb3cnOlxuICAgICAgICBmbGFnQ29sb3IgPSAnYmx1ZSdcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICBmbGFnQ29sb3IgPSAnb3JhbmdlJ1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgIGZsYWdDb2xvciA9ICdyZWQnXG4gICAgfVxuICAgIFxuICAgIGxldCBmbGFnID0gZWxlbWVudEZyb21IdG1sKGBcbiAgICA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJ1dGYtOFwiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPlxuICAgICAgPHN2ZyB3aWR0aD1cIjIycHhcIiBoZWlnaHQ9XCIyMnB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCIke2ZsYWdDb2xvcn1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICA8cGF0aCBvcGFjaXR5PVwiMC4xNVwiIGQ9XCJNNCA0SDIwTDE1IDlMMjAgMTRINFY0WlwiLz5cbiAgICAgIDxwYXRoIGQ9XCJNNCAyMVYxNE00IDE0VjRIMjBMMTUgOUwyMCAxNEg0WlwiIHN0cm9rZT1cIiR7ZmxhZ0NvbG9yfVwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cbiAgICA8L3N2Zz5cbiAgYCk7XG4gICAgXG4gICAgICAgIFxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudClcbiAgICBjb25zdCBmbGFnQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZsYWctY29udGFpbmVyJHtpfWApXG4gICAgZmxhZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChmbGFnKVxuICB9XG59XG4iLCJpbXBvcnQgZWxlbWVudEZyb21IdG1sIGZyb20gJy4vbW9kYWwtZm9ybS1idWlsZCc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IHBvcHVsYXRlTWFpbkFyZWEgZnJvbSAnLi9wb3B1bGF0ZS1tYWluLWFyZWEnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFZGl0SW50ZXJmYWNlKGUpIHtcbiAgY29uc3QgY2xpY2tlZFByb2plY3RVbmlxdWVDbGFzcyA9IGUudGFyZ2V0LmNsYXNzTGlzdFsxXTtcbiAgY29uc3QgY2xpY2tlZFByb2plY3RJbmRleCA9XG4gICAgY2xpY2tlZFByb2plY3RVbmlxdWVDbGFzc1tjbGlja2VkUHJvamVjdFVuaXF1ZUNsYXNzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIGNvbnN0IHByb2plY3RUb0VkaXQgPSBhbGxQcm9qZWN0c1tjbGlja2VkUHJvamVjdEluZGV4XTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdFRvRWRpdC5nZXRUaXRsZSgpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0TW9kYWwgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJhZGQtbmV3LW1vZGFsIHByb2plY3QtZWRpdC1tb2RhbC0ke2NsaWNrZWRQcm9qZWN0SW5kZXh9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgIDxoMz5FZGl0IFByb2plY3Q8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UgY2xvc2UtZWRpdC1wcm9qZWN0LSR7Y2xpY2tlZFByb2plY3RJbmRleH1cIj4mI3gyNzE1PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1uYXZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL21vZGFsLXByb2plY3QucG5nXCI+XG4gICAgICAgICAgICA8ZGl2PlByb2plY3Q8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwicHJvamVjdC1lZGl0LWZvcm0tJHtjbGlja2VkUHJvamVjdEluZGV4fVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0aXRsZSBlZGl0LXRpdGxlLSR7Y2xpY2tlZFByb2plY3RJbmRleH1cIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHtwcm9qZWN0VGl0bGV9XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInByb2plY3Qtc3VibWl0XCI+XG4gICAgICAgICAgICBFZGl0IFByb2plY3Q8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZWRpdFByb2plY3RNb2RhbCk7XG4gIGNvbnN0IHByb2plY3RFZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAucHJvamVjdC1lZGl0LW1vZGFsLSR7Y2xpY2tlZFByb2plY3RJbmRleH1gXG4gICk7XG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLmNsb3NlLWVkaXQtcHJvamVjdC0ke2NsaWNrZWRQcm9qZWN0SW5kZXh9YFxuICApO1xuICBjb25zdCBzdWJtaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLnByb2plY3QtZWRpdC1mb3JtLSR7Y2xpY2tlZFByb2plY3RJbmRleH1gXG4gICk7XG4gIGNvbnN0IGVkaXRlZFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuZWRpdC10aXRsZS0ke2NsaWNrZWRQcm9qZWN0SW5kZXh9YFxuICApO1xuXG4gIHByb2plY3RFZGl0TW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDEpJztcblxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9qZWN0RWRpdE1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgwKSc7XG4gIH0pO1xuXG4gIHN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gZWRpdCBwcm9qZWN0IGluIGJ1c2luZXNzIGxvZ2ljXG4gICAgY29uc3QgZWRpdGVkVGl0bGUgPSBlZGl0ZWRUaXRsZUlucHV0LnZhbHVlO1xuICAgIHByb2plY3RUb0VkaXQuY2hhbmdlVGl0bGUoZWRpdGVkVGl0bGUpO1xuICAgIC8vZWRpdCBwcm9qZWN0IGluIERPTVxuICAgIGVkaXRQcm9qZWN0TmFtZUZyb21Eb20oY2xpY2tlZFByb2plY3RJbmRleCwgZWRpdGVkVGl0bGUpO1xuXG4gICAgcHJvamVjdEVkaXRNb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMCknO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSkge1xuICBjb25zdCBjbGlja2VkUHJvamVjdFVuaXF1ZUNsYXNzID0gZS50YXJnZXQuY2xhc3NMaXN0WzFdO1xuICBjb25zdCBjbGlja2VkUHJvamVjdEluZGV4ID1cbiAgICBjbGlja2VkUHJvamVjdFVuaXF1ZUNsYXNzW2NsaWNrZWRQcm9qZWN0VW5pcXVlQ2xhc3MubGVuZ3RoIC0gMV07XG4gIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gYWxsUHJvamVjdHNbY2xpY2tlZFByb2plY3RJbmRleF07XG5cbiAgLy9yZW1vdmUgcHJvamVjdCBmcm9tIGJ1c2luZXNzIGxvZ2ljXG4gIHByb2plY3RNYW5hZ2VyLnJlbW92ZVByb2plY3QocHJvamVjdFRvRGVsZXRlKVxuICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gRE9NXG4gIHJlbW92ZVByb2plY3RGcm9tRG9tKGNsaWNrZWRQcm9qZWN0SW5kZXgpXG4gIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKVxuXG4gIHBvcHVsYXRlTWFpbkFyZWEoKVxufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdE5hbWVGcm9tRG9tKGluZGV4LCBlZGl0VmFsdWUpIHtcbiAgY29uc3QgcHJvamVjdERvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC0ke2luZGV4fSA+IGRpdmApO1xuICBwcm9qZWN0RG9tRWxlbWVudC50ZXh0Q29udGVudCA9IGVkaXRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEZyb21Eb20oaW5kZXgpIHtcbiAgY29uc3QgcHJvamVjdERvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1jb250YWluZXItJHtpbmRleH0gPiBkaXZgKTtcbiAgcHJvamVjdERvbUVsZW1lbnQucmVtb3ZlKClcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbGVtZW50RnJvbUh0bWwoaHRtbCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWwudHJpbSgpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCB0YXNrRm9ybSA9IGVsZW1lbnRGcm9tSHRtbChgXG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlOiBQYXkgYmlsbHNcIiByZXF1aXJlZC8+XG4gIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiPlxuICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0XCI+UHJvamVjdCB0byBhc3NpZ24gdG86IDwvbGFiZWw+XG4gICAgPHNlbGVjdCBuYW1lPVwiXCIgaWQ9XCJwcm9qZWN0XCI+PC9zZWxlY3Q+XG4gIDwvZGl2PlxuICA8dGV4dGFyZWEgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJEZXRhaWxzOiBlLmcgaW50ZXJuZXQsIHBob25lLCByZW50LlwiPjwvdGV4dGFyZWE+XG4gIDxkaXYgY2xhc3M9XCJkYXRlLWNvbnRhaW5lclwiPlxuICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+RHVlIERhdGU6PC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPjxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIC8+PC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktcmFkaW9cIj5cbiAgICA8c3Bhbj5Qcmlvcml0eTo8L3NwYW4+XG4gICAgPGxhYmVsIGZvcj1cImxvd1wiPkxvdzwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibG93XCIgaWQ9XCJsb3dcIiBjaGVja2VkLz5cbiAgICA8bGFiZWwgZm9yPVwibWVkaXVtXCI+TWVkaXVtPC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJtZWRpdW1cIiBpZD1cIm1lZGl1bVwiLz5cbiAgICA8bGFiZWwgZm9yPVwiaGlnaFwiPkhpZ2g8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImhpZ2hcIiBpZD1cImhpZ2hcIi8+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJ0YXNrIHRhc2stc3VibWl0XCI+QWRkIFRhc2s8L2J1dHRvbj5cbiAgPC9kaXY+XG5gKTtcblxuY29uc3QgcHJvamVjdEZvcm0gPSBlbGVtZW50RnJvbUh0bWwoYFxuICA8aW5wdXQgY2xhc3M9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZTogSG91c2UgUmVub3ZhdGlvblwiIHJlcXVpcmVkPlxuICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInByb2plY3Qtc3VibWl0XCI+Q3JlYXRlIFByb2plY3Q8L2J1dHRvbj5cbmApO1xuXG5leHBvcnQgeyB0YXNrRm9ybSwgcHJvamVjdEZvcm0gfTtcbiIsImltcG9ydCB7IGJ1aWxkUHJvamVjdERvbUVsZW1lbnQgfSBmcm9tICcuL2RvbS1kaXNwbGF5LXByb2plY3QnO1xuaW1wb3J0IHsgdGFza0Zvcm0sIHByb2plY3RGb3JtIH0gZnJvbSAnLi9tb2RhbC1mb3JtLWJ1aWxkJztcbmltcG9ydCB7IGdldERhdGFGcm9tRm9ybXMgfSBmcm9tICcuL2RhdGEtbWFuaXB1bGF0aW9uJztcbmltcG9ydCBwb3B1bGF0ZU1haW5BcmVhIGZyb20gJy4vcG9wdWxhdGUtbWFpbi1hcmVhJztcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuZXhwb3J0IHsgcG9wTW9kYWwsIGNsb3NlTW9kYWwgfTtcblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy1tb2RhbCcpO1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdZb3VyIEZpcnN0IFByb2plY3QnKTtcbnByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuXG5mdW5jdGlvbiB0b2dnbGVCbHVyKCkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3LW1vZGFsJyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIC8vY2hlY2sgaWYgJ3BvcHBpbmcnIGNsYXNzIGluIG1vZGFsOyBtZWFucyB3ZSBhcmUgb3BlbmluZyBtb2RhbFxuICBpZiAobW9kYWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmluY2x1ZGVzKCdwb3BwaW5nJykpIHtcbiAgICBoZWFkZXIuc3R5bGUuY3NzVGV4dCA9ICdmaWx0ZXI6IGJsdXIoM3B4KSc7XG4gICAgY29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2ZpbHRlcjogYmx1cigzcHgpJztcbiAgfSBlbHNlIHtcbiAgICBoZWFkZXIuc3R5bGUuY3NzVGV4dCA9ICdmaWx0ZXI6IGJsdXIoMHB4KSc7XG4gICAgY29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2ZpbHRlcjogYmx1cigwcHgpJztcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24oKSB7XG4gIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duIHNlbGVjdCcpO1xuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIGNvbnN0IG9wdGlvbnMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSk7XG5cbiAgaWYgKGRyb3Bkb3duID09PSBudWxsKSByZXR1cm5cblxuICBkcm9wZG93bi5pbm5lckhUTUwgPSAnJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBvcHQgPSBvcHRpb25zW2ldO1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZWwudGV4dENvbnRlbnQgPSBvcHQ7XG4gICAgZWwudmFsdWUgPSBvcHQ7XG4gICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoZWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvcE1vZGFsKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdwb3BwaW5nJyk7XG4gIG1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgxKSc7XG4gIHRvZ2dsZUJsdXIoKTtcbiAgZm9ybS5pbm5lckhUTUwgPSAnJztcbiAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG4gIC8vYWRkaW5nICd0YXNrJyBjbGFzcyBpbiBvcmRlciB0byBkaWZmZXJlbnRpYXRlIHRoZSBmb3JtIHR5cGUgKHRhc2sgb3IgcHJvamVjdClcbiAgZm9ybS5jbGFzc05hbWUgPSAnJztcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gIHBvcHVsYXRlUHJvamVjdHNEcm9wZG93bigpO1xuICBzd2l0Y2hUb1Rhc2soKTtcbiAgc3dpdGNoVG9Qcm9qZWN0KCk7XG4gIHRhc2tPclByb2plY3RTdWJtaXQoKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgncG9wcGluZycpO1xuICBtb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMCknO1xuICB0b2dnbGVCbHVyKCk7XG4gIC8vcmVwbGFjaW5nIGZvcm0gbm9kZSB3aXRoIGl0J3MgY2xvbmUgc28gdGhhdCB3ZSByZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICBmb3JtLnJlcGxhY2VXaXRoKGZvcm0uY2xvbmVOb2RlKHRydWUpKTtcbiAgZm9ybS5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUb1Rhc2soKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbmF2IC50YXNrJyk7XG4gIHRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZm9ybS5pbm5lckhUTUwgPSAnJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICcnO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIHBvcHVsYXRlUHJvamVjdHNEcm9wZG93bigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoVG9Qcm9qZWN0KCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW5hdiAucHJvamVjdCcpO1xuICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZvcm0uaW5uZXJIVE1MID0gJyc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSAnJztcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRhc2tPclByb2plY3RTdWJtaXQoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBnZXREYXRhRnJvbUZvcm1zKGUpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBoYW5kbGVGb3JtU3VibWlzc2lvbigpO1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXNzaW9uKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCBwcm9qZWN0c0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtYXJlYScpO1xuXG4gIGlmIChmb3JtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5pbmNsdWRlcygndGFzaycpKSB7XG4gICAgd2luZG93LmFsZXJ0KCdUYXNrIGFkZGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgIHBvcHVsYXRlTWFpbkFyZWEoKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuYWxlcnQoJ1Byb2plY3QgYWRkZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgYnVpbGRQcm9qZWN0RG9tRWxlbWVudChwcm9qZWN0c0FyZWEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBidWlsZFRhc2tEb21FbGVtZW50IH0gZnJvbSAnLi9kb20tZGlzcGxheS10YXNrJztcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgaXNUb2RheSBmcm9tICdkYXRlLWZucy9pc1RvZGF5JztcbmltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZERheXMnO1xuaW1wb3J0IGlzQmVmb3JlIGZyb20gJ2RhdGUtZm5zL2lzQmVmb3JlJztcblxuY29uc3QgbWFpbkFyZWFUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWFyZWEtdGl0bGUnKTtcbmNvbnN0IG1haW5BcmVhQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWFyZWEtY29udGVudCcpO1xuXG5mdW5jdGlvbiByZXR1cm5BbGxUYXNrcygpIHtcbiAgY29uc3QgYWxsVGFza3MgPSBbXTtcbiAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuXG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBhbGxUYXNrcy5wdXNoKC4uLnByb2plY3QuZ2V0VGFza3MoKSk7XG4gIH0pO1xuXG4gIHJldHVybiBhbGxUYXNrcztcbn1cblxuZnVuY3Rpb24gaGFuZGxlTm9UYXNrcyh0YXNrTGlzdCkge1xuICBpZiAodGFza0xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgbWFpbkFyZWFDb250ZW50LnRleHRDb250ZW50ID0gJ1lheSEgTm8gVGFza3MhJztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFsbFRhc2tzKCkge1xuICBtYWluQXJlYUNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIG1haW5BcmVhVGl0bGUudGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcblxuICBidWlsZFRhc2tEb21FbGVtZW50KG1haW5BcmVhQ29udGVudCwgcmV0dXJuQWxsVGFza3MoKSk7XG4gIGhhbmRsZU5vVGFza3MocmV0dXJuQWxsVGFza3MoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VG9kYXlUYXNrcygpIHtcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBtYWluQXJlYVRpdGxlLnRleHRDb250ZW50ID0gJ1RvZGF5JztcblxuICBjb25zdCBhbGxUYXNrcyA9IHJldHVybkFsbFRhc2tzKCk7XG4gIGxldCB0b2RheVRhc2tzID0gW107XG5cbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kYXRlKTtcbiAgICBpZiAoaXNUb2RheSh0YXNrRGF0ZSkpIHRvZGF5VGFza3MucHVzaCh0YXNrKTtcbiAgfSk7XG5cbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIHRvZGF5VGFza3MpO1xuICBoYW5kbGVOb1Rhc2tzKHRvZGF5VGFza3MpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5V2Vla1Rhc2tzKCkge1xuICBtYWluQXJlYUNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIG1haW5BcmVhVGl0bGUudGV4dENvbnRlbnQgPSAnTmV4dCA3IERheXMnO1xuXG4gIGNvbnN0IGFsbFRhc2tzID0gcmV0dXJuQWxsVGFza3MoKTtcbiAgbGV0IHNldmVuRGF5c1Rhc2tzID0gW107XG5cbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLmRhdGUpO1xuICAgIGNvbnN0IG9uZVdlZWtMYXRlckRhdGUgPSBhZGREYXlzKHRvZGF5RGF0ZSwgNyk7XG4gICAgaWYgKGlzQmVmb3JlKHRhc2tEYXRlLCBvbmVXZWVrTGF0ZXJEYXRlKSkgc2V2ZW5EYXlzVGFza3MucHVzaCh0YXNrKTtcbiAgfSk7XG5cbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIHNldmVuRGF5c1Rhc2tzKTtcbiAgaGFuZGxlTm9UYXNrcyhzZXZlbkRheXNUYXNrcylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlJbXBvcnRhbnRUYXNrcygpIHtcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBtYWluQXJlYVRpdGxlLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG5cbiAgY29uc3QgYWxsVGFza3MgPSByZXR1cm5BbGxUYXNrcygpO1xuICBsZXQgaW1wb3J0YW50VGFza3MgPSBbXTtcblxuICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgaW1wb3J0YW50VGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG4gIH0pO1xuXG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCBpbXBvcnRhbnRUYXNrcyk7XG4gIGhhbmRsZU5vVGFza3MoaW1wb3J0YW50VGFza3MpXG59XG4iLCJpbXBvcnQge1xuICBkaXNwbGF5QWxsVGFza3MsXG4gIGRpc3BsYXlJbXBvcnRhbnRUYXNrcyxcbiAgZGlzcGxheVRvZGF5VGFza3MsXG4gIGRpc3BsYXlXZWVrVGFza3MsXG59IGZyb20gJy4vbmF2LXV0aWxpdHknO1xuXG4vLyB1c2luZyB0aGlzIHRvIGhlbHAgcG9wdWxhdGUgdGhlIG1haW4gYXJlYSB3aXRoIHRoZSBhZGVxdWF0ZSBmaWx0ZXJlZCBjb250ZW50XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZU1haW5BcmVhKCkge1xuICBjb25zdCBuYXZTZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lID4gZGl2Jyk7XG4gIGNvbnN0IGZ1bmN0aW9uVG9SdW5EaWN0aW9uYXJ5ID0ge1xuICAgICd0YXNrcyBhY3RpdmUnOiBkaXNwbGF5QWxsVGFza3MsXG4gICAgJ3RvZGF5IGFjdGl2ZSc6IGRpc3BsYXlUb2RheVRhc2tzLFxuICAgICdzZXZlbi1kYXlzIGFjdGl2ZSc6IGRpc3BsYXlXZWVrVGFza3MsXG4gICAgJ2ltcG9ydGFudCBhY3RpdmUnOiBkaXNwbGF5SW1wb3J0YW50VGFza3NcbiAgfVxuXG4gIGZvciAobGV0IHNlY3Rpb24gb2YgbmF2U2VjdGlvbnMpIHtcbiAgICBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZSgnY2xhc3MnKVxuICAgICAgZnVuY3Rpb25Ub1J1bkRpY3Rpb25hcnlbY2xhc3NMaXN0XSgpXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gcHJvamVjdE1hbmFnZXIoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvamVjdHNbaV0udGl0bGUgPT09IHByb2plY3QudGl0bGUpIHtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXR1cm5Qcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gIHJldHVybiB7IGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIHJldHVyblByb2plY3RzIH07XG59KSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKVxuICB9XG5cbiAgY2hhbmdlVGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLnRpdGxlID0gdmFsdWVcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlXG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrc1xuICB9XG5cbiAgcmVtb3ZlQ29tcGxldGVkVGFza3MoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50YXNrc1tpXS5jb21wbGV0aW9uU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGksIDEpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb21wbGV0aW9uU3RhdHVzID0gZmFsc2U7XG4gICAgdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRhdGU7XG4gICAgdGhpcy5wcmlvcml0eTtcbiAgICAvLyB0aGlzLnByb2plY3Q7XG4gIH1cblxuICBjaGFuZ2VUaXRsZSh2YWx1ZSkge1xuICAgIHRoaXMudGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGFkZERldGFpbHModmFsdWUpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cblxuICBhZGREdWVEYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5kYXRlID0gdmFsdWU7XG4gIH1cblxuICBhZGRQcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuXG4gIHRvZ2dsZUNvbXBsZXRpb25TdGF0dXMoKSB7XG4gICAgdGhpcy5jb21wbGV0aW9uU3RhdHVzID0gIXRoaXMuY29tcGxldGlvblN0YXR1cztcbiAgfVxuXG4gIC8vIGFzc2lnblRvUHJvamVjdCh2YWx1ZSkge1xuICAvLyAgIHRoaXMucHJvamVjdCA9IHZhbHVlO1xuICAvLyB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHBvcE1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSAnLi9tb2RhbC1tYW5pcHVsYXRpb24nO1xuaW1wb3J0IHsgYnVpbGRQcm9qZWN0RG9tRWxlbWVudCB9IGZyb20gJy4vZG9tLWRpc3BsYXktcHJvamVjdCc7XG5pbXBvcnQge1xuICBkaXNwbGF5QWxsVGFza3MsXG4gIGRpc3BsYXlJbXBvcnRhbnRUYXNrcyxcbiAgZGlzcGxheVRvZGF5VGFza3MsXG4gIGRpc3BsYXlXZWVrVGFza3MsXG59IGZyb20gJy4vbmF2LXV0aWxpdHknO1xuXG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldycpO1xuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1oZWFkZXIgLmNsb3NlJyk7XG5jb25zdCBwcm9qZWN0c0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtYXJlYScpO1xuY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG5jb25zdCBuZXh0V2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXZlbi1kYXlzJyk7XG5jb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1wb3J0YW50Jyk7XG5jb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWUgPiBkaXYnKTtcblxuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcG9wTW9kYWwoKSk7XG5jbG9zZU1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VNb2RhbCgpKTtcblxuYWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRpc3BsYXlBbGxUYXNrcygpO1xuICBuYXZCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrcycpKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSBlbHNlIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG59KTtcblxudG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRpc3BsYXlUb2RheVRhc2tzKCk7XG4gIG5hdkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZGF5JykpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9IGVsc2UgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9KTtcbn0pO1xuXG5uZXh0V2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZGlzcGxheVdlZWtUYXNrcygpO1xuICBuYXZCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZXZlbi1kYXlzJykpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9IGVsc2UgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9KTtcbn0pO1xuXG5pbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRpc3BsYXlJbXBvcnRhbnRUYXNrcygpO1xuICBuYXZCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbXBvcnRhbnQnKSkge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0pO1xufSk7XG5cbmJ1aWxkUHJvamVjdERvbUVsZW1lbnQocHJvamVjdHNBcmVhKTtcbmRpc3BsYXlBbGxUYXNrcygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9