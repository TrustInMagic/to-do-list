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




const mainAreaContent = document.querySelector('.main-area-content');

function buildProjectDomElement(parent) {
  const projects = _project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].returnProjects();
  const lastProjectAdded = projects[projects.length - 1];
  const projectTitle = lastProjectAdded.getTitle();

  const project = (0,_modal_form_build__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    <div class="project-container">
      <div class="project"><span class="hamburger">☰</span>${projectTitle}
      <span class="dots">&#x22EE</span></div>
      <div class="pop-up">
        <div class="edit">Rename</div>
        <div class="delete">Delete</div>
      </div>
    </div>
  `);

  project.addEventListener('click', () => renderProject(lastProjectAdded));
  parent.appendChild(project);

  const projectEdit = document.querySelector('.dots');
  const popUp = document.querySelector('.pop-up')

  projectEdit.addEventListener('click', () => {
    console.log(popUp)
    popUp.classList.toggle('popping')
  });
}

function renderProject(project) {
  mainAreaContent.innerHTML = '';
  const projectTasks = project.getTasks();
  (0,_dom_display_task__WEBPACK_IMPORTED_MODULE_2__.buildTaskDomElement)(mainAreaContent, projectTasks);
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

function displayAllTasks() {
  mainAreaContent.innerHTML = '';
  mainAreaTitle.textContent = 'All Tasks';

  (0,_dom_display_task__WEBPACK_IMPORTED_MODULE_0__.buildTaskDomElement)(mainAreaContent, returnAllTasks());
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
      if (projects[i].title === project) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONEQ7QUFDRztBQU14Qzs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsNkRBQVE7QUFDbEQsaURBQWlELCtEQUFVOztBQUUzRDtBQUNBLEVBQUUsNkRBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0EsRUFBRSwrREFBaUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0EsRUFBRSw4REFBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0EsRUFBRSxtRUFBcUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEdBQUc7QUFDSCxDQUFDOztBQUVELDRFQUFzQjtBQUN0Qiw2REFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNCZWZvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kYXRhLW1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS1kaXNwbGF5LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb20tZGlzcGxheS10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kYWwtZm9ybS1idWlsZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZGFsLW1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25hdi11dGlsaXR5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcG9wdWxhdGUtbWFpbi1hcmVhLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNCZWZvcmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGJlZm9yZSAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNCZWZvcmUobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNCZWZvcmUoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA8IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5leHBvcnQgeyBnZXREYXRhRnJvbUZvcm1zIH07XG5cbmZ1bmN0aW9uIGdldERhdGFGcm9tRm9ybXMoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vY2hlY2sgaWYgdGhlIGZvcm0gaXMgYXNzb2NpYXRlZCB3aXRoIGFkZGluZyBhIHRhc2sgb3IgYSBwcm9qZWN0XG4gIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuaW5jbHVkZXMoJ3Rhc2snKSkge1xuICAgIGdldERhdGFGcm9tVGFza0Zvcm0oKTtcbiAgfSBlbHNlIGdldERhdGFGcm9tUHJvamVjdEZvcm0oKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YUZyb21UYXNrRm9ybSgpIHtcbiAgY29uc3QgdGFza1RpdGxlUXVlcmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gI3RpdGxlJyk7XG4gIGNvbnN0IHByb2plY3RUb0Fzc2lnblF1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIHNlbGVjdCcpO1xuICBjb25zdCBkZXRhaWxzUXVlcmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gdGV4dGFyZWEnKTtcbiAgY29uc3QgZHVlRGF0ZVF1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtICNkYXRlJyk7XG4gIGNvbnN0IHByaW9yaXR5UXVlcmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0gaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG5cbiAgY29uc3QgdGFza1RpdGxlID0gdGFza1RpdGxlUXVlcmllci52YWx1ZTtcbiAgY29uc3QgcHJvamVjdFRvQXNzaWduVG8gPSBwcm9qZWN0VG9Bc3NpZ25RdWVyaWVyLnZhbHVlO1xuICBjb25zdCBkZXRhaWxzID0gZGV0YWlsc1F1ZXJpZXIudmFsdWU7XG4gIGNvbnN0IGR1ZURhdGUgPSBkdWVEYXRlUXVlcmllci52YWx1ZTtcbiAgbGV0IHByaW9yaXR5O1xuXG4gIHByaW9yaXR5UXVlcmllci5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgIGlmIChyYWRpby5jaGVja2VkKSBwcmlvcml0eSA9IHJhZGlvLnZhbHVlO1xuICB9KTtcblxuICBjb25zdCB0YXNrVG9BZGQgPSBuZXcgVGFzayh0YXNrVGl0bGUpO1xuICB0YXNrVG9BZGQuYWRkRGV0YWlscyhkZXRhaWxzKTtcbiAgdGFza1RvQWRkLmFkZER1ZURhdGUoZHVlRGF0ZSk7XG4gIHRhc2tUb0FkZC5hZGRQcmlvcml0eShwcmlvcml0eSk7XG5cbiAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gcHJvamVjdFRvQXNzaWduVG8pIHtcbiAgICAgIHByb2plY3QuYWRkVGFzayh0YXNrVG9BZGQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldERhdGFGcm9tUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IHByb2plY3RUaXRsZVF1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIC50aXRsZScpO1xuXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZVF1ZXJpZXIudmFsdWU7XG5cbiAgY29uc3QgcHJvamVjdFRvQWRkID0gbmV3IFByb2plY3QocHJvamVjdFRpdGxlKTtcbiAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChwcm9qZWN0VG9BZGQpO1xufVxuIiwiaW1wb3J0IGVsZW1lbnRGcm9tSHRtbCBmcm9tICcuL21vZGFsLWZvcm0tYnVpbGQnO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCB7IGJ1aWxkVGFza0RvbUVsZW1lbnQgfSBmcm9tICcuL2RvbS1kaXNwbGF5LXRhc2snO1xuXG5jb25zdCBtYWluQXJlYUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1hcmVhLWNvbnRlbnQnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUHJvamVjdERvbUVsZW1lbnQocGFyZW50KSB7XG4gIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgY29uc3QgbGFzdFByb2plY3RBZGRlZCA9IHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBsYXN0UHJvamVjdEFkZGVkLmdldFRpdGxlKCk7XG5cbiAgY29uc3QgcHJvamVjdCA9IGVsZW1lbnRGcm9tSHRtbChgXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFwiPjxzcGFuIGNsYXNzPVwiaGFtYnVyZ2VyXCI+4piwPC9zcGFuPiR7cHJvamVjdFRpdGxlfVxuICAgICAgPHNwYW4gY2xhc3M9XCJkb3RzXCI+JiN4MjJFRTwvc3Bhbj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRcIj5SZW5hbWU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZVwiPkRlbGV0ZTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuXG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJQcm9qZWN0KGxhc3RQcm9qZWN0QWRkZWQpKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gIGNvbnN0IHByb2plY3RFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvdHMnKTtcbiAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwJylcblxuICBwcm9qZWN0RWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwb3BVcClcbiAgICBwb3BVcC5jbGFzc0xpc3QudG9nZ2xlKCdwb3BwaW5nJylcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3QocHJvamVjdCkge1xuICBtYWluQXJlYUNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IHByb2plY3RUYXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKTtcbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIHByb2plY3RUYXNrcyk7XG59XG4iLCJpbXBvcnQgZWxlbWVudEZyb21IdG1sIGZyb20gJy4vbW9kYWwtZm9ybS1idWlsZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRhc2tEb21FbGVtZW50KHBhcmVudCwgdGFza3MpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tzW2ldLnRpdGxlO1xuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gdGFza3NbaV0uZGVzY3JpcHRpb247XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSB0YXNrc1tpXS5kYXRlO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2tzW2ldLnByaW9yaXR5O1xuICAgIGxldCBmbGFnQ29sb3I7XG5cbiAgICBsZXQgdGFza0VsZW1lbnQgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWJvZHlcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRhc2stY2hlY2tcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidGFzay10aXRsZVwiPiR7dGFza1RpdGxlfTwvc3Bhbj5cbiAgICAgPGRpdiBjbGFzcz1cInRhc2stZHVlLWRhdGVcIj4ke3Rhc2tEdWVEYXRlfTwvZGl2PlxuICAgICA8ZGl2IGNsYXNzPVwiZmxhZy1jb250YWluZXIke2l9XCI+PC9kaXY+XG4gICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRvdHNcIj4mI3gyMkVFPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuICAgIFxuICAgIHN3aXRjaCAodGFza1ByaW9yaXR5KSB7XG4gICAgICBjYXNlICdsb3cnOlxuICAgICAgICBmbGFnQ29sb3IgPSAnYmx1ZSdcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICBmbGFnQ29sb3IgPSAnb3JhbmdlJ1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgIGZsYWdDb2xvciA9ICdyZWQnXG4gICAgfVxuICAgIFxuICAgIGxldCBmbGFnID0gZWxlbWVudEZyb21IdG1sKGBcbiAgICA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJ1dGYtOFwiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPlxuICAgICAgPHN2ZyB3aWR0aD1cIjIycHhcIiBoZWlnaHQ9XCIyMnB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCIke2ZsYWdDb2xvcn1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICA8cGF0aCBvcGFjaXR5PVwiMC4xNVwiIGQ9XCJNNCA0SDIwTDE1IDlMMjAgMTRINFY0WlwiLz5cbiAgICAgIDxwYXRoIGQ9XCJNNCAyMVYxNE00IDE0VjRIMjBMMTUgOUwyMCAxNEg0WlwiIHN0cm9rZT1cIiR7ZmxhZ0NvbG9yfVwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cbiAgICA8L3N2Zz5cbiAgYCk7XG4gICAgXG4gICAgICAgIFxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudClcbiAgICBjb25zdCBmbGFnQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZsYWctY29udGFpbmVyJHtpfWApXG4gICAgZmxhZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChmbGFnKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbGVtZW50RnJvbUh0bWwoaHRtbCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWwudHJpbSgpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCB0YXNrRm9ybSA9IGVsZW1lbnRGcm9tSHRtbChgXG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlOiBQYXkgYmlsbHNcIiByZXF1aXJlZC8+XG4gIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiPlxuICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0XCI+UHJvamVjdCB0byBhc3NpZ24gdG86IDwvbGFiZWw+XG4gICAgPHNlbGVjdCBuYW1lPVwiXCIgaWQ9XCJwcm9qZWN0XCI+PC9zZWxlY3Q+XG4gIDwvZGl2PlxuICA8dGV4dGFyZWEgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJEZXRhaWxzOiBlLmcgaW50ZXJuZXQsIHBob25lLCByZW50LlwiPjwvdGV4dGFyZWE+XG4gIDxkaXYgY2xhc3M9XCJkYXRlLWNvbnRhaW5lclwiPlxuICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+RHVlIERhdGU6PC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPjxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIC8+PC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktcmFkaW9cIj5cbiAgICA8c3Bhbj5Qcmlvcml0eTo8L3NwYW4+XG4gICAgPGxhYmVsIGZvcj1cImxvd1wiPkxvdzwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibG93XCIgaWQ9XCJsb3dcIiBjaGVja2VkLz5cbiAgICA8bGFiZWwgZm9yPVwibWVkaXVtXCI+TWVkaXVtPC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJtZWRpdW1cIiBpZD1cIm1lZGl1bVwiLz5cbiAgICA8bGFiZWwgZm9yPVwiaGlnaFwiPkhpZ2g8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImhpZ2hcIiBpZD1cImhpZ2hcIi8+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJ0YXNrIHRhc2stc3VibWl0XCI+QWRkIFRhc2s8L2J1dHRvbj5cbiAgPC9kaXY+XG5gKTtcblxuY29uc3QgcHJvamVjdEZvcm0gPSBlbGVtZW50RnJvbUh0bWwoYFxuICA8aW5wdXQgY2xhc3M9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZTogSG91c2UgUmVub3ZhdGlvblwiIHJlcXVpcmVkPlxuICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInByb2plY3Qtc3VibWl0XCI+Q3JlYXRlIFByb2plY3Q8L2J1dHRvbj5cbmApO1xuXG5leHBvcnQgeyB0YXNrRm9ybSwgcHJvamVjdEZvcm0gfTtcbiIsImltcG9ydCB7IGJ1aWxkUHJvamVjdERvbUVsZW1lbnQgfSBmcm9tICcuL2RvbS1kaXNwbGF5LXByb2plY3QnO1xuaW1wb3J0IHsgdGFza0Zvcm0sIHByb2plY3RGb3JtIH0gZnJvbSAnLi9tb2RhbC1mb3JtLWJ1aWxkJztcbmltcG9ydCB7IGdldERhdGFGcm9tRm9ybXMgfSBmcm9tICcuL2RhdGEtbWFuaXB1bGF0aW9uJztcbmltcG9ydCBwb3B1bGF0ZU1haW5BcmVhIGZyb20gJy4vcG9wdWxhdGUtbWFpbi1hcmVhJztcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuZXhwb3J0IHsgcG9wTW9kYWwsIGNsb3NlTW9kYWwgfTtcblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy1tb2RhbCcpO1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdZb3VyIEZpcnN0IFByb2plY3QnKTtcbnByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuXG5mdW5jdGlvbiB0b2dnbGVCbHVyKCkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3LW1vZGFsJyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIC8vY2hlY2sgaWYgJ3BvcHBpbmcnIGNsYXNzIGluIG1vZGFsOyBtZWFucyB3ZSBhcmUgb3BlbmluZyBtb2RhbFxuICBpZiAobW9kYWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmluY2x1ZGVzKCdwb3BwaW5nJykpIHtcbiAgICBoZWFkZXIuc3R5bGUuY3NzVGV4dCA9ICdmaWx0ZXI6IGJsdXIoM3B4KSc7XG4gICAgY29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2ZpbHRlcjogYmx1cigzcHgpJztcbiAgfSBlbHNlIHtcbiAgICBoZWFkZXIuc3R5bGUuY3NzVGV4dCA9ICdmaWx0ZXI6IGJsdXIoMHB4KSc7XG4gICAgY29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2ZpbHRlcjogYmx1cigwcHgpJztcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24oKSB7XG4gIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duIHNlbGVjdCcpO1xuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIGNvbnN0IG9wdGlvbnMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSk7XG5cbiAgaWYgKGRyb3Bkb3duID09PSBudWxsKSByZXR1cm5cblxuICBkcm9wZG93bi5pbm5lckhUTUwgPSAnJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBvcHQgPSBvcHRpb25zW2ldO1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZWwudGV4dENvbnRlbnQgPSBvcHQ7XG4gICAgZWwudmFsdWUgPSBvcHQ7XG4gICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoZWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvcE1vZGFsKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdwb3BwaW5nJyk7XG4gIG1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgxKSc7XG4gIHRvZ2dsZUJsdXIoKTtcbiAgZm9ybS5pbm5lckhUTUwgPSAnJztcbiAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG4gIC8vYWRkaW5nICd0YXNrJyBjbGFzcyBpbiBvcmRlciB0byBkaWZmZXJlbnRpYXRlIHRoZSBmb3JtIHR5cGUgKHRhc2sgb3IgcHJvamVjdClcbiAgZm9ybS5jbGFzc05hbWUgPSAnJztcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gIHBvcHVsYXRlUHJvamVjdHNEcm9wZG93bigpO1xuICBzd2l0Y2hUb1Rhc2soKTtcbiAgc3dpdGNoVG9Qcm9qZWN0KCk7XG4gIHRhc2tPclByb2plY3RTdWJtaXQoKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgncG9wcGluZycpO1xuICBtb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMCknO1xuICB0b2dnbGVCbHVyKCk7XG4gIC8vcmVwbGFjaW5nIGZvcm0gbm9kZSB3aXRoIGl0J3MgY2xvbmUgc28gdGhhdCB3ZSByZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICBmb3JtLnJlcGxhY2VXaXRoKGZvcm0uY2xvbmVOb2RlKHRydWUpKTtcbiAgZm9ybS5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUb1Rhc2soKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbmF2IC50YXNrJyk7XG4gIHRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZm9ybS5pbm5lckhUTUwgPSAnJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICcnO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIHBvcHVsYXRlUHJvamVjdHNEcm9wZG93bigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoVG9Qcm9qZWN0KCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW5hdiAucHJvamVjdCcpO1xuICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZvcm0uaW5uZXJIVE1MID0gJyc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSAnJztcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRhc2tPclByb2plY3RTdWJtaXQoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBnZXREYXRhRnJvbUZvcm1zKGUpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBoYW5kbGVGb3JtU3VibWlzc2lvbigpO1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXNzaW9uKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCBwcm9qZWN0c0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtYXJlYScpO1xuXG4gIGlmIChmb3JtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5pbmNsdWRlcygndGFzaycpKSB7XG4gICAgd2luZG93LmFsZXJ0KCdUYXNrIGFkZGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgIHBvcHVsYXRlTWFpbkFyZWEoKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuYWxlcnQoJ1Byb2plY3QgYWRkZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgYnVpbGRQcm9qZWN0RG9tRWxlbWVudChwcm9qZWN0c0FyZWEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBidWlsZFRhc2tEb21FbGVtZW50IH0gZnJvbSAnLi9kb20tZGlzcGxheS10YXNrJztcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgaXNUb2RheSBmcm9tICdkYXRlLWZucy9pc1RvZGF5JztcbmltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZERheXMnO1xuaW1wb3J0IGlzQmVmb3JlIGZyb20gJ2RhdGUtZm5zL2lzQmVmb3JlJztcblxuY29uc3QgbWFpbkFyZWFUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWFyZWEtdGl0bGUnKTtcbmNvbnN0IG1haW5BcmVhQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWFyZWEtY29udGVudCcpO1xuXG5mdW5jdGlvbiByZXR1cm5BbGxUYXNrcygpIHtcbiAgY29uc3QgYWxsVGFza3MgPSBbXTtcbiAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuXG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBhbGxUYXNrcy5wdXNoKC4uLnByb2plY3QuZ2V0VGFza3MoKSk7XG4gIH0pO1xuXG4gIHJldHVybiBhbGxUYXNrcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBtYWluQXJlYVRpdGxlLnRleHRDb250ZW50ID0gJ0FsbCBUYXNrcyc7XG5cbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIHJldHVybkFsbFRhc2tzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZGF5VGFza3MoKSB7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG5cbiAgY29uc3QgYWxsVGFza3MgPSByZXR1cm5BbGxUYXNrcygpO1xuICBsZXQgdG9kYXlUYXNrcyA9IFtdO1xuXG4gIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZGF0ZSk7XG4gICAgaWYgKGlzVG9kYXkodGFza0RhdGUpKSB0b2RheVRhc2tzLnB1c2godGFzayk7XG4gIH0pO1xuXG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCB0b2RheVRhc2tzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlXZWVrVGFza3MoKSB7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9ICdOZXh0IDcgRGF5cyc7XG5cbiAgY29uc3QgYWxsVGFza3MgPSByZXR1cm5BbGxUYXNrcygpO1xuICBsZXQgc2V2ZW5EYXlzVGFza3MgPSBbXTtcblxuICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgdG9kYXlEYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZGF0ZSk7XG4gICAgY29uc3Qgb25lV2Vla0xhdGVyRGF0ZSA9IGFkZERheXModG9kYXlEYXRlLCA3KTtcbiAgICBpZiAoaXNCZWZvcmUodGFza0RhdGUsIG9uZVdlZWtMYXRlckRhdGUpKSBzZXZlbkRheXNUYXNrcy5wdXNoKHRhc2spO1xuICB9KTtcblxuICBidWlsZFRhc2tEb21FbGVtZW50KG1haW5BcmVhQ29udGVudCwgc2V2ZW5EYXlzVGFza3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUltcG9ydGFudFRhc2tzKCkge1xuICBtYWluQXJlYUNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIG1haW5BcmVhVGl0bGUudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JztcblxuICBjb25zdCBhbGxUYXNrcyA9IHJldHVybkFsbFRhc2tzKCk7XG4gIGxldCBpbXBvcnRhbnRUYXNrcyA9IFtdO1xuXG4gIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICBpbXBvcnRhbnRUYXNrcy5wdXNoKHRhc2spO1xuICAgIH1cbiAgfSk7XG5cbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIGltcG9ydGFudFRhc2tzKTtcbn1cbiIsImltcG9ydCB7XG4gIGRpc3BsYXlBbGxUYXNrcyxcbiAgZGlzcGxheUltcG9ydGFudFRhc2tzLFxuICBkaXNwbGF5VG9kYXlUYXNrcyxcbiAgZGlzcGxheVdlZWtUYXNrcyxcbn0gZnJvbSAnLi9uYXYtdXRpbGl0eSc7XG5cbi8vIHVzaW5nIHRoaXMgdG8gaGVscCBwb3B1bGF0ZSB0aGUgbWFpbiBhcmVhIHdpdGggdGhlIGFkZXF1YXRlIGZpbHRlcmVkIGNvbnRlbnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVsYXRlTWFpbkFyZWEoKSB7XG4gIGNvbnN0IG5hdlNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWUgPiBkaXYnKTtcbiAgY29uc3QgZnVuY3Rpb25Ub1J1bkRpY3Rpb25hcnkgPSB7XG4gICAgJ3Rhc2tzIGFjdGl2ZSc6IGRpc3BsYXlBbGxUYXNrcyxcbiAgICAndG9kYXkgYWN0aXZlJzogZGlzcGxheVRvZGF5VGFza3MsXG4gICAgJ3NldmVuLWRheXMgYWN0aXZlJzogZGlzcGxheVdlZWtUYXNrcyxcbiAgICAnaW1wb3J0YW50IGFjdGl2ZSc6IGRpc3BsYXlJbXBvcnRhbnRUYXNrc1xuICB9XG5cbiAgZm9yIChsZXQgc2VjdGlvbiBvZiBuYXZTZWN0aW9ucykge1xuICAgIGlmIChzZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdjbGFzcycpXG4gICAgICBmdW5jdGlvblRvUnVuRGljdGlvbmFyeVtjbGFzc0xpc3RdKClcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBwcm9qZWN0TWFuYWdlcigpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9qZWN0c1tpXS50aXRsZSA9PT0gcHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJldHVyblByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgcmV0dXJuIHsgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgcmV0dXJuUHJvamVjdHMgfTtcbn0pKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spXG4gIH1cblxuICBjaGFuZ2VUaXRsZSh2YWx1ZSkge1xuICAgIHRoaXMudGl0bGUgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGVcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzXG4gIH1cblxuICByZW1vdmVDb21wbGV0ZWRUYXNrcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnRhc2tzW2ldLmNvbXBsZXRpb25TdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaSwgMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmNvbXBsZXRpb25TdGF0dXMgPSBmYWxzZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5O1xuICAgIC8vIHRoaXMucHJvamVjdDtcbiAgfVxuXG4gIGNoYW5nZVRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgYWRkRGV0YWlscyh2YWx1ZSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGFkZER1ZURhdGUodmFsdWUpIHtcbiAgICB0aGlzLmRhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGFkZFByaW9yaXR5KHZhbHVlKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHZhbHVlO1xuICB9XG5cbiAgdG9nZ2xlQ29tcGxldGlvblN0YXR1cygpIHtcbiAgICB0aGlzLmNvbXBsZXRpb25TdGF0dXMgPSAhdGhpcy5jb21wbGV0aW9uU3RhdHVzO1xuICB9XG5cbiAgLy8gYXNzaWduVG9Qcm9qZWN0KHZhbHVlKSB7XG4gIC8vICAgdGhpcy5wcm9qZWN0ID0gdmFsdWU7XG4gIC8vIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcG9wTW9kYWwsIGNsb3NlTW9kYWwgfSBmcm9tICcuL21vZGFsLW1hbmlwdWxhdGlvbic7XG5pbXBvcnQgeyBidWlsZFByb2plY3REb21FbGVtZW50IH0gZnJvbSAnLi9kb20tZGlzcGxheS1wcm9qZWN0JztcbmltcG9ydCB7XG4gIGRpc3BsYXlBbGxUYXNrcyxcbiAgZGlzcGxheUltcG9ydGFudFRhc2tzLFxuICBkaXNwbGF5VG9kYXlUYXNrcyxcbiAgZGlzcGxheVdlZWtUYXNrcyxcbn0gZnJvbSAnLi9uYXYtdXRpbGl0eSc7XG5cbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3Jyk7XG5jb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWhlYWRlciAuY2xvc2UnKTtcbmNvbnN0IHByb2plY3RzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1hcmVhJyk7XG5jb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXknKTtcbmNvbnN0IG5leHRXZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldmVuLWRheXMnKTtcbmNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbXBvcnRhbnQnKTtcbmNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZSA+IGRpdicpO1xuXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwb3BNb2RhbCgpKTtcbmNsb3NlTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKCkpO1xuXG5hbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZGlzcGxheUFsbFRhc2tzKCk7XG4gIG5hdkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2tzJykpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9IGVsc2UgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9KTtcbn0pO1xuXG50b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZGlzcGxheVRvZGF5VGFza3MoKTtcbiAgbmF2QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygndG9kYXknKSkge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0pO1xufSk7XG5cbm5leHRXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkaXNwbGF5V2Vla1Rhc2tzKCk7XG4gIG5hdkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3NldmVuLWRheXMnKSkge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0pO1xufSk7XG5cbmltcG9ydGFudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZGlzcGxheUltcG9ydGFudFRhc2tzKCk7XG4gIG5hdkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ltcG9ydGFudCcpKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSBlbHNlIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG59KTtcblxuYnVpbGRQcm9qZWN0RG9tRWxlbWVudChwcm9qZWN0c0FyZWEpO1xuZGlzcGxheUFsbFRhc2tzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=