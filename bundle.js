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

/***/ "./src/build-pop-ups.js":
/*!******************************!*\
  !*** ./src/build-pop-ups.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildConfirmDeleteProjectPopUp": () => (/* binding */ buildConfirmDeleteProjectPopUp),
/* harmony export */   "buildTaskDeletionUndoPopUp": () => (/* binding */ buildTaskDeletionUndoPopUp)
/* harmony export */ });
/* harmony import */ var _modal_form_build__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-form-build */ "./src/modal-form-build.js");
/* harmony import */ var _modal_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-manipulation */ "./src/modal-manipulation.js");



function buildConfirmDeleteProjectPopUp() {
  const body = document.querySelector('body');
  const popUpContainer = (0,_modal_form_build__WEBPACK_IMPORTED_MODULE_0__["default"])(`
  <div class="confirm-delete-pop-up add-new-modal">
    <div class="pop-up-header">
      <h3>Delete Project</h3>
      <div class="close">&#x2715</div>
    </div>
    <div class="pop-up-message">
      <span>Are you sure?</span>
      <div>Project <strong><span class="project-name"></span></strong> Will be gone forever!</div>
    </div>
    <div class="pop-up-buttons">
      <button class="pop-up-button pop-up-cancel">Cancel</button>
      <button class="pop-up-button pop-up-delete">Delete</button>
    </div>
  </div>
  `);

  body.appendChild(popUpContainer);
  const popUpElement = popUpContainer.querySelector('.confirm-delete-pop-up');

  (function handlePopUpAction() {
    popUpElement.classList.add('popping');
    (0,_modal_manipulation__WEBPACK_IMPORTED_MODULE_1__.toggleBlur)(popUpElement);
  })();

  (function handlePopUpClose() {
    const closeButton = popUpContainer.querySelector('.close');
    const cancelButton = popUpContainer.querySelector('.pop-up-cancel')
    const deleteButton = popUpContainer.querySelector('.pop-up-delete')
    const actionCancelButtons = [closeButton, cancelButton, deleteButton]
    actionCancelButtons.forEach((button) => button.addEventListener('click', () => {
      popUpElement.classList.remove('popping');
      (0,_modal_manipulation__WEBPACK_IMPORTED_MODULE_1__.toggleBlur)(popUpElement);
      popUpContainer.remove()
    }))
  })()
}


function buildTaskDeletionUndoPopUp() {
  const body = document.querySelector('body');
  const undoPopUpContainer = (0,_modal_form_build__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    <div class="task-undo">
      <div class="undo-message">1 task completed</div>
      <div class="undo-button">Undo</div>
    </div>
  `);

  const undoPopUpElement = undoPopUpContainer.querySelector('.task-undo')
  body.appendChild(undoPopUpContainer)
  undoPopUpElement.classList.add('popping')

  function removePopUp() {
    undoPopUpElement.classList.remove('popping');
    undoPopUpContainer.remove()
  }

  setTimeout(removePopUp, 3000)
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
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");






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
  (0,_local_storage__WEBPACK_IMPORTED_MODULE_3__.updateLocalStorage)(projects)
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
  parent.innerHTML = '';

  for (let i = 0; i < projects.length; i++) {
    const lastProjectAdded = projects[i];
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
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");
/* harmony import */ var _build_pop_ups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./build-pop-ups */ "./src/build-pop-ups.js");
/* harmony import */ var _populate_main_area__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./populate-main-area */ "./src/populate-main-area.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");







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
    const taskCheck = taskElement.querySelector('.task-check');

    renameButton.addEventListener('click', _edit_task__WEBPACK_IMPORTED_MODULE_1__.buildTaskEditInterface);
    deleteButton.addEventListener('click', _edit_task__WEBPACK_IMPORTED_MODULE_1__.deleteTask);
    editTask.addEventListener('click', () => popUp.classList.add('popping'));
    taskCheck.addEventListener('click', () =>
      handleTaskCompletion(taskElement)
    );

    window.addEventListener('click', (e) => {
      if (e.target !== editTask) popUp.classList.remove('popping');
    });

    flagContainer.appendChild(flag);
    taskDomElement.addEventListener('click', () =>
      detailsElement.classList.toggle('show-details')
    );
  }
}

function handleTaskCompletion(taskElement) {
  const taskTitle = taskElement.querySelector('.task-title');
  const taskCheck = taskElement.querySelector('.task-check');
  const allProjects = _project_manager__WEBPACK_IMPORTED_MODULE_2__["default"].returnProjects();

  if (taskCheck.checked) {
    taskTitle.innerHTML = `<s>${taskTitle.textContent}</s>`;
  } else taskTitle.innerHTML = taskTitle.textContent;

  let selectedTask;
  const allTasks = _project_manager__WEBPACK_IMPORTED_MODULE_2__["default"].returnAllTasks();
  allTasks.forEach((task) => {
    if (task.id === taskCheck.getAttribute('data-id')) selectedTask = task;
  });

  selectedTask.toggleCompletionStatus();

  function deleteCompletedTask() {
    const allProjects = _project_manager__WEBPACK_IMPORTED_MODULE_2__["default"].returnProjects();
    allProjects.forEach((project) => {
      project.moveToCompletedTasks();
    });
    (0,_populate_main_area__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_5__.updateLocalStorage)(allProjects);
  }

  function undoTaskDeletion() {
    const undoButton = document.querySelector('.undo-button');
    const popUp = document.querySelector('.task-undo');
    const allProjects = _project_manager__WEBPACK_IMPORTED_MODULE_2__["default"].returnProjects();

    undoButton.addEventListener('click', () => {
      allProjects.forEach((project) => {
        //switch the completion status back to false
        selectedTask.toggleCompletionStatus();
        project.moveToUncompletedTasks();
        (0,_populate_main_area__WEBPACK_IMPORTED_MODULE_4__["default"])();
        popUp.remove();
        (0,_local_storage__WEBPACK_IMPORTED_MODULE_5__.updateLocalStorage)(allProjects);
      });
    });
  }

  setTimeout(_build_pop_ups__WEBPACK_IMPORTED_MODULE_3__.buildTaskDeletionUndoPopUp, 700);
  setTimeout(deleteCompletedTask, 700);
  setTimeout(undoTaskDeletion, 700);

  allProjects.forEach((project) => project.clearCompletedTasks())
  setTimeout((0,_local_storage__WEBPACK_IMPORTED_MODULE_5__.updateLocalStorage)(allProjects), 700);
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
/* harmony import */ var _build_pop_ups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./build-pop-ups */ "./src/build-pop-ups.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");






function buildEditInterface(e) {
  const clickedProjectId = e.target.getAttribute('data-id');
  const allProjects = _project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].returnProjects();

  let projectToEdit;
  for (let project of allProjects) {
    if (project.id === clickedProjectId) projectToEdit = project;
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
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_4__.updateLocalStorage)(allProjects)
    //edit project in DOM
    editProjectNameFromDom(clickedProjectId, editedTitle);

    projectEditModal.style.cssText = 'transform: scale(0)';
  });
}

function deleteProject(e) {
  e.stopPropagation();
  const clickedProjectId = e.target.getAttribute('data-id');
  const allProjects = _project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].returnProjects();

  (0,_build_pop_ups__WEBPACK_IMPORTED_MODULE_3__.buildConfirmDeleteProjectPopUp)();
  const deleteButton = document.querySelector('.pop-up-delete');
  const projectName = document.querySelector('.project-name');

  let projectToDelete;
  for (let project of allProjects) {
    if (project.id === clickedProjectId) projectToDelete = project;
  }

  projectName.textContent = `${projectToDelete.getTitle()}`
  deleteButton.addEventListener('click', removeProjectAfterConfirm);

  function removeProjectAfterConfirm() {
    //remove project from business logic
    _project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].removeProject(projectToDelete);
    //remove project from DOM
    removeProjectFromDom(clickedProjectId);
    (0,_nav_utility__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)();
  }
}

function editProjectNameFromDom(id, editValue) {
  const projectDomElement = document.querySelector(
    `.project[data-id="${id}"] > div`
  );
  projectDomElement.textContent = editValue;
}

function removeProjectFromDom(id) {
  const projectDomElement = document.querySelector(
    `.project-container[data-id="${id}"]`
  );
  projectDomElement.remove();
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
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");





function buildTaskEditInterface(e) {
  const allProjects = _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].returnProjects();
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

    (0,_local_storage__WEBPACK_IMPORTED_MODULE_3__.updateLocalStorage)(allProjects)
    //edit project in DOM
    ;(0,_populate_main_area__WEBPACK_IMPORTED_MODULE_2__["default"])();

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
  allProjects.forEach((project) => project.moveToCompletedTasks());
  
  (0,_local_storage__WEBPACK_IMPORTED_MODULE_3__.updateLocalStorage)(allProjects)
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
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* harmony import */ var _nav_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-utility */ "./src/nav-utility.js");





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
  (0,_nav_utility__WEBPACK_IMPORTED_MODULE_3__.displayAllTasks)();
  utilityRemoveActiveClass();
  allTasks.classList.add('active');
});

today.addEventListener('click', () => {
  (0,_nav_utility__WEBPACK_IMPORTED_MODULE_3__.displayTodayTasks)();
  utilityRemoveActiveClass();
  today.classList.add('active');
});

nextWeek.addEventListener('click', () => {
  (0,_nav_utility__WEBPACK_IMPORTED_MODULE_3__.displayWeekTasks)();
  utilityRemoveActiveClass();
  nextWeek.classList.add('active');
});

important.addEventListener('click', () => {
  (0,_nav_utility__WEBPACK_IMPORTED_MODULE_3__.displayImportantTasks)();
  utilityRemoveActiveClass();
  important.classList.add('active');
});

(0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.buildLocalStorageNewUser)();
(0,_dom_display_project__WEBPACK_IMPORTED_MODULE_1__.buildProjectDomElement)(projectsArea);
(0,_nav_utility__WEBPACK_IMPORTED_MODULE_3__.displayAllTasks)();


/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildLocalStorageNewUser": () => (/* binding */ buildLocalStorageNewUser),
/* harmony export */   "retrieveLocalStorage": () => (/* binding */ retrieveLocalStorage),
/* harmony export */   "updateLocalStorage": () => (/* binding */ updateLocalStorage)
/* harmony export */ });
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");



  
function updateLocalStorage(db) {
  localStorage.setItem('db', JSON.stringify(db));
}

function retrieveLocalStorage(db) {
  if (localStorage.length > 0) {
    const parsedLocalStorage = JSON.parse(localStorage.getItem(db));
    // adding back all of the methods of the Project class in it's prototype to each instance
    for (let project of parsedLocalStorage)
      Object.setPrototypeOf(project, _project__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
    // adding back all of the methods of the Task class in it's prototype to each instance
    for (let project of parsedLocalStorage) {
      const allTasks = project.getTasks();
      allTasks.forEach((task) => Object.setPrototypeOf(task, _task__WEBPACK_IMPORTED_MODULE_2__["default"].prototype));
    }
    return parsedLocalStorage;
  } else return [];
}

function buildLocalStorageNewUser() {
  if (!localStorage.getItem('db')) {
    const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_1__["default"]('Your First Project');
    _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(defaultProject);
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
    <div class="date"><input type="date" id="date" required/></div>
  </div>
  <div class="priority-radio">
    <span>Priority:</span>
    <div class="radio-button radio-low">
      <input type="radio" id="low" name="priority" value="low" checked/>
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
/* harmony export */   "popModal": () => (/* binding */ popModal),
/* harmony export */   "toggleBlur": () => (/* binding */ toggleBlur)
/* harmony export */ });
/* harmony import */ var _dom_display_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-display-project */ "./src/dom-display-project.js");
/* harmony import */ var _modal_form_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-form-build */ "./src/modal-form-build.js");
/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-manipulation */ "./src/data-manipulation.js");
/* harmony import */ var _populate_main_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./populate-main-area */ "./src/populate-main-area.js");
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");







const modal = document.querySelector('.add-new-modal');

function utilityRemoveActiveClassFromModal() {
  const modalElements = document.querySelectorAll('.add-new-modal div');
  modalElements.forEach((element) => element.classList.remove('active'));
}

function toggleBlur(modal) {
  const header = document.querySelector('.header');
  const content = document.querySelector('.content');
  console.log(modal)
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
  toggleBlur(modal);
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
  toggleBlur(modal);
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
    (0,_populate_main_area__WEBPACK_IMPORTED_MODULE_3__["default"])();
  } else {
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
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function projectManager() {
  const projects = (0,_local_storage__WEBPACK_IMPORTED_MODULE_0__.retrieveLocalStorage)('db')

  const addProject = (project) => {
    for (let iteratedProject of projects) {
      const projectsTitle = []
      projectsTitle.push(iteratedProject.title)
      if (projectsTitle.includes(project.title)) return
    }
    projects.push(project)
    ;(0,_local_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(projects)
  };

  const removeProject = (project) => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].title === project.title) {
        projects.splice(i, 1);
      }
    }
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(projects);
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
    this.completedTasks = [];
    this.generateId();
  }

  addTask(task) {
    this.tasks.push(task);
  }

  changeTitle(value) {
    this.title = value;
  }

  getTitle() {
    return this.title;
  }

  getTasks() {
    return this.tasks;
  }

  generateId() {
    this.id = `prj-id${Math.random().toString(16).slice(2)}`;
  }

  moveToCompletedTasks() {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].completionStatus === true) {
        this.completedTasks.push(this.tasks[i]);
        this.tasks.splice(i, 1);
      }
    }
  }

  moveToUncompletedTasks() {
    const taskToMove = this.completedTasks[this.completedTasks.length - 1]
    console.log(taskToMove)
    this.tasks.push(taskToMove)
    console.log(this.tasks)
  }

  clearCompletedTasks() {
    this.completedTasks = []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0JlZm9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2J1aWxkLXBvcC11cHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kYXRhLW1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS1kaXNwbGF5LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb20tZGlzcGxheS10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdC1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdC10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kYWwtZm9ybS1idWlsZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZGFsLW1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25hdi11dGlsaXR5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcG9wdWxhdGUtbWFpbi1hcmVhLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGJlZm9yZSB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYmVmb3JlIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0JlZm9yZShkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIDwgZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCBlbGVtZW50RnJvbUh0bWwgZnJvbSAnLi9tb2RhbC1mb3JtLWJ1aWxkJztcbmltcG9ydCB7IHRvZ2dsZUJsdXIgfSBmcm9tICcuL21vZGFsLW1hbmlwdWxhdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENvbmZpcm1EZWxldGVQcm9qZWN0UG9wVXAoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IHBvcFVwQ29udGFpbmVyID0gZWxlbWVudEZyb21IdG1sKGBcbiAgPGRpdiBjbGFzcz1cImNvbmZpcm0tZGVsZXRlLXBvcC11cCBhZGQtbmV3LW1vZGFsXCI+XG4gICAgPGRpdiBjbGFzcz1cInBvcC11cC1oZWFkZXJcIj5cbiAgICAgIDxoMz5EZWxldGUgUHJvamVjdDwvaDM+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VcIj4mI3gyNzE1PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBvcC11cC1tZXNzYWdlXCI+XG4gICAgICA8c3Bhbj5BcmUgeW91IHN1cmU/PC9zcGFuPlxuICAgICAgPGRpdj5Qcm9qZWN0IDxzdHJvbmc+PHNwYW4gY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj48L3NwYW4+PC9zdHJvbmc+IFdpbGwgYmUgZ29uZSBmb3JldmVyITwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwb3AtdXAtYnV0dG9uc1wiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cC1idXR0b24gcG9wLXVwLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cC1idXR0b24gcG9wLXVwLWRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYCk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChwb3BVcENvbnRhaW5lcik7XG4gIGNvbnN0IHBvcFVwRWxlbWVudCA9IHBvcFVwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLWRlbGV0ZS1wb3AtdXAnKTtcblxuICAoZnVuY3Rpb24gaGFuZGxlUG9wVXBBY3Rpb24oKSB7XG4gICAgcG9wVXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BvcHBpbmcnKTtcbiAgICB0b2dnbGVCbHVyKHBvcFVwRWxlbWVudCk7XG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uIGhhbmRsZVBvcFVwQ2xvc2UoKSB7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBwb3BVcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBwb3BVcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucG9wLXVwLWNhbmNlbCcpXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gcG9wVXBDb250YWluZXIucXVlcnlTZWxlY3RvcignLnBvcC11cC1kZWxldGUnKVxuICAgIGNvbnN0IGFjdGlvbkNhbmNlbEJ1dHRvbnMgPSBbY2xvc2VCdXR0b24sIGNhbmNlbEJ1dHRvbiwgZGVsZXRlQnV0dG9uXVxuICAgIGFjdGlvbkNhbmNlbEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwb3BVcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncG9wcGluZycpO1xuICAgICAgdG9nZ2xlQmx1cihwb3BVcEVsZW1lbnQpO1xuICAgICAgcG9wVXBDb250YWluZXIucmVtb3ZlKClcbiAgICB9KSlcbiAgfSkoKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRhc2tEZWxldGlvblVuZG9Qb3BVcCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgdW5kb1BvcFVwQ29udGFpbmVyID0gZWxlbWVudEZyb21IdG1sKGBcbiAgICA8ZGl2IGNsYXNzPVwidGFzay11bmRvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidW5kby1tZXNzYWdlXCI+MSB0YXNrIGNvbXBsZXRlZDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInVuZG8tYnV0dG9uXCI+VW5kbzwvZGl2PlxuICAgIDwvZGl2PlxuICBgKTtcblxuICBjb25zdCB1bmRvUG9wVXBFbGVtZW50ID0gdW5kb1BvcFVwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXVuZG8nKVxuICBib2R5LmFwcGVuZENoaWxkKHVuZG9Qb3BVcENvbnRhaW5lcilcbiAgdW5kb1BvcFVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwb3BwaW5nJylcblxuICBmdW5jdGlvbiByZW1vdmVQb3BVcCgpIHtcbiAgICB1bmRvUG9wVXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgICB1bmRvUG9wVXBDb250YWluZXIucmVtb3ZlKClcbiAgfVxuXG4gIHNldFRpbWVvdXQocmVtb3ZlUG9wVXAsIDMwMDApXG59IiwiaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlJztcbmV4cG9ydCB7IGdldERhdGFGcm9tRm9ybXMgfTtcblxuZnVuY3Rpb24gZ2V0RGF0YUZyb21Gb3JtcyhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy9jaGVjayBpZiB0aGUgZm9ybSBpcyBhc3NvY2lhdGVkIHdpdGggYWRkaW5nIGEgdGFzayBvciBhIHByb2plY3RcbiAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5pbmNsdWRlcygndGFzaycpKSB7XG4gICAgZ2V0RGF0YUZyb21UYXNrRm9ybSgpO1xuICB9IGVsc2UgZ2V0RGF0YUZyb21Qcm9qZWN0Rm9ybSgpO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhRnJvbVRhc2tGb3JtKCkge1xuICBjb25zdCB0YXNrVGl0bGVRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSAjdGl0bGUnKTtcbiAgY29uc3QgcHJvamVjdFRvQXNzaWduUXVlcmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gc2VsZWN0Jyk7XG4gIGNvbnN0IGRldGFpbHNRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSB0ZXh0YXJlYScpO1xuICBjb25zdCBkdWVEYXRlUXVlcmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gI2RhdGUnKTtcbiAgY29uc3QgcHJpb3JpdHlRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybSBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcblxuICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrVGl0bGVRdWVyaWVyLnZhbHVlO1xuICBjb25zdCBwcm9qZWN0VG9Bc3NpZ25UbyA9IHByb2plY3RUb0Fzc2lnblF1ZXJpZXIudmFsdWU7XG4gIGNvbnN0IGRldGFpbHMgPSBkZXRhaWxzUXVlcmllci52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVRdWVyaWVyLnZhbHVlO1xuICBsZXQgcHJpb3JpdHk7XG5cbiAgcHJpb3JpdHlRdWVyaWVyLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgaWYgKHJhZGlvLmNoZWNrZWQpIHByaW9yaXR5ID0gcmFkaW8udmFsdWU7XG4gIH0pO1xuXG4gIGNvbnN0IHRhc2tUb0FkZCA9IG5ldyBUYXNrKHRhc2tUaXRsZSk7XG4gIHRhc2tUb0FkZC5hZGREZXRhaWxzKGRldGFpbHMpO1xuICB0YXNrVG9BZGQuYWRkRHVlRGF0ZShkdWVEYXRlKTtcbiAgdGFza1RvQWRkLmFkZFByaW9yaXR5KHByaW9yaXR5KTtcblxuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBpZiAocHJvamVjdC5nZXRUaXRsZSgpID09PSBwcm9qZWN0VG9Bc3NpZ25Ubykge1xuICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2tUb0FkZCk7XG4gICAgfVxuICB9KTtcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKHByb2plY3RzKVxufVxuXG5mdW5jdGlvbiBnZXREYXRhRnJvbVByb2plY3RGb3JtKCkge1xuICBjb25zdCBwcm9qZWN0VGl0bGVRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSAudGl0bGUnKTtcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGVRdWVyaWVyLnZhbHVlO1xuXG4gIGNvbnN0IHByb2plY3RUb0FkZCA9IG5ldyBQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QocHJvamVjdFRvQWRkKTtcbn1cbiIsImltcG9ydCBlbGVtZW50RnJvbUh0bWwgZnJvbSAnLi9tb2RhbC1mb3JtLWJ1aWxkJztcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgeyBidWlsZFRhc2tEb21FbGVtZW50IH0gZnJvbSAnLi9kb20tZGlzcGxheS10YXNrJztcbmltcG9ydCB7IGJ1aWxkRWRpdEludGVyZmFjZSwgZGVsZXRlUHJvamVjdCB9IGZyb20gJy4vZWRpdC1wcm9qZWN0JztcbmltcG9ydCB7IHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzcyB9IGZyb20gJy4vaW5kZXgnO1xuXG5jb25zdCBtYWluQXJlYUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1hcmVhLWNvbnRlbnQnKTtcbmNvbnN0IG1haW5BcmVhVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1hcmVhLXRpdGxlJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFByb2plY3REb21FbGVtZW50KHBhcmVudCkge1xuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIHBhcmVudC5pbm5lckhUTUwgPSAnJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbGFzdFByb2plY3RBZGRlZCA9IHByb2plY3RzW2ldO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGxhc3RQcm9qZWN0QWRkZWQuZ2V0VGl0bGUoKTtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBsYXN0UHJvamVjdEFkZGVkLmlkO1xuIFxuICAgIGNvbnN0IHByb2plY3QgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWNvbnRhaW5lclwiIGRhdGEtaWQ9XCIke3Byb2plY3RJZH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0XCIgZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhhbWJ1cmdlclwiPuKYsDwvc3Bhbj5cbiAgICAgICAgPGRpdj4ke3Byb2plY3RUaXRsZX08L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RzXCIgZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiPiYjeDIyRUVcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwXCIgZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRcIiBkYXRhLWlkPVwiJHtwcm9qZWN0SWR9XCI+RWRpdDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZVwiIGRhdGEtaWQ9XCIke3Byb2plY3RJZH1cIj5EZWxldGU8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuICAgIFxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW5kZXJQcm9qZWN0VGFza3MobGFzdFByb2plY3RBZGRlZCk7XG4gICAgICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9qZWN0RWRpdCA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLmRvdHMnKTtcbiAgICBjb25zdCBwb3BVcCA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLnBvcC11cCcpO1xuICAgIGNvbnN0IHJlbmFtZUJ1dHRvbiA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLmVkaXQnKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcblxuICAgIHJlbmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ1aWxkRWRpdEludGVyZmFjZSk7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlUHJvamVjdCk7XG4gICAgcHJvamVjdEVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwb3BVcC5jbGFzc0xpc3QuYWRkKCdwb3BwaW5nJykpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCAhPT0gcHJvamVjdEVkaXQpIHBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdFRhc2tzID0gcHJvamVjdC5nZXRUYXNrcygpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICBtYWluQXJlYVRpdGxlLnRleHRDb250ZW50ID0gYFByb2plY3Q6ICR7cHJvamVjdFRpdGxlfWA7XG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCBwcm9qZWN0VGFza3MpO1xuXG4gIGlmIChwcm9qZWN0VGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgbWFpbkFyZWFDb250ZW50LnRleHRDb250ZW50ID1cbiAgICAgICdUaGlzIHByb2plY3QgYXBwZWFycyBlbXB0eS4gQWRkIHRhc2tzIHRvIGdldCBzdGFydGVkISc7XG4gIH1cbn1cbiIsImltcG9ydCBlbGVtZW50RnJvbUh0bWwgZnJvbSAnLi9tb2RhbC1mb3JtLWJ1aWxkJztcbmltcG9ydCB7IGJ1aWxkVGFza0VkaXRJbnRlcmZhY2UsIGRlbGV0ZVRhc2sgfSBmcm9tICcuL2VkaXQtdGFzayc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IHsgYnVpbGRUYXNrRGVsZXRpb25VbmRvUG9wVXAgfSBmcm9tICcuL2J1aWxkLXBvcC11cHMnO1xuaW1wb3J0IHBvcHVsYXRlTWFpbkFyZWEgZnJvbSAnLi9wb3B1bGF0ZS1tYWluLWFyZWEnO1xuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVGFza0RvbUVsZW1lbnQocGFyZW50LCB0YXNrcykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza1RpdGxlID0gdGFza3NbaV0udGl0bGU7XG4gICAgY29uc3QgdGFza0RldGFpbHMgPSB0YXNrc1tpXS5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2tzW2ldLmRhdGU7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGFza3NbaV0ucHJpb3JpdHk7XG4gICAgY29uc3QgdGFza0lkID0gdGFza3NbaV0uaWQ7XG4gICAgbGV0IGZsYWdDb2xvcjtcblxuICAgIGxldCB0YXNrRWxlbWVudCA9IGVsZW1lbnRGcm9tSHRtbChgXG4gICAgPGRpdiBjbGFzcz1cInRhc2stYm9keVwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRhc2stY2hlY2tcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInRhc2stdGl0bGVcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+JHt0YXNrVGl0bGV9PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlsc1wiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj4ke3Rhc2tEZXRhaWxzfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kdWUtZGF0ZVwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj4ke3Rhc2tEdWVEYXRlfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxhZy1jb250YWluZXJcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRvdHNcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+JiN4MjJFRVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdFwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj5FZGl0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlXCIgZGF0YS1pZD1cIiR7dGFza0lkfVwiPkRlbGV0ZTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgKTtcblxuICAgIHN3aXRjaCAodGFza1ByaW9yaXR5KSB7XG4gICAgICBjYXNlICdsb3cnOlxuICAgICAgICBmbGFnQ29sb3IgPSAnIzIyZDNlZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgZmxhZ0NvbG9yID0gJyNmYjkyM2MnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICBmbGFnQ29sb3IgPSAnI2VmNDQ0NCc7XG4gICAgfVxuXG4gICAgbGV0IGZsYWcgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cInV0Zi04XCI/PjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+XG4gICAgICA8c3ZnIHdpZHRoPVwiMjJweFwiIGhlaWdodD1cIjIycHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIiR7ZmxhZ0NvbG9yfVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgIDxwYXRoIG9wYWNpdHk9XCIwLjE1XCIgZD1cIk00IDRIMjBMMTUgOUwyMCAxNEg0VjRaXCIvPlxuICAgICAgPHBhdGggZD1cIk00IDIxVjE0TTQgMTRWNEgyMEwxNSA5TDIwIDE0SDRaXCIgc3Ryb2tlPVwiJHtmbGFnQ29sb3J9XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxuICAgIDwvc3ZnPlxuICBgKTtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gICAgY29uc3QgZmxhZ0NvbnRhaW5lciA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGFnLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRhc2tEb21FbGVtZW50ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYm9keScpO1xuICAgIGNvbnN0IGRldGFpbHNFbGVtZW50ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlscycpO1xuICAgIGNvbnN0IGVkaXRUYXNrID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZG90cycpO1xuICAgIGNvbnN0IHJlbmFtZUJ1dHRvbiA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuICAgIGNvbnN0IHBvcFVwID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cCcpO1xuICAgIGNvbnN0IHRhc2tDaGVjayA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNoZWNrJyk7XG5cbiAgICByZW5hbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidWlsZFRhc2tFZGl0SW50ZXJmYWNlKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUYXNrKTtcbiAgICBlZGl0VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBvcFVwLmNsYXNzTGlzdC5hZGQoJ3BvcHBpbmcnKSk7XG4gICAgdGFza0NoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIGhhbmRsZVRhc2tDb21wbGV0aW9uKHRhc2tFbGVtZW50KVxuICAgICk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ICE9PSBlZGl0VGFzaykgcG9wVXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wcGluZycpO1xuICAgIH0pO1xuXG4gICAgZmxhZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChmbGFnKTtcbiAgICB0YXNrRG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICBkZXRhaWxzRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LWRldGFpbHMnKVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0NvbXBsZXRpb24odGFza0VsZW1lbnQpIHtcbiAgY29uc3QgdGFza1RpdGxlID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKTtcbiAgY29uc3QgdGFza0NoZWNrID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY2hlY2snKTtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuXG4gIGlmICh0YXNrQ2hlY2suY2hlY2tlZCkge1xuICAgIHRhc2tUaXRsZS5pbm5lckhUTUwgPSBgPHM+JHt0YXNrVGl0bGUudGV4dENvbnRlbnR9PC9zPmA7XG4gIH0gZWxzZSB0YXNrVGl0bGUuaW5uZXJIVE1MID0gdGFza1RpdGxlLnRleHRDb250ZW50O1xuXG4gIGxldCBzZWxlY3RlZFRhc2s7XG4gIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuQWxsVGFza3MoKTtcbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrQ2hlY2suZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpIHNlbGVjdGVkVGFzayA9IHRhc2s7XG4gIH0pO1xuXG4gIHNlbGVjdGVkVGFzay50b2dnbGVDb21wbGV0aW9uU3RhdHVzKCk7XG5cbiAgZnVuY3Rpb24gZGVsZXRlQ29tcGxldGVkVGFzaygpIHtcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5tb3ZlVG9Db21wbGV0ZWRUYXNrcygpO1xuICAgIH0pO1xuICAgIHBvcHVsYXRlTWFpbkFyZWEoKTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoYWxsUHJvamVjdHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5kb1Rhc2tEZWxldGlvbigpIHtcbiAgICBjb25zdCB1bmRvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuZG8tYnV0dG9uJyk7XG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay11bmRvJyk7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuXG4gICAgdW5kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgLy9zd2l0Y2ggdGhlIGNvbXBsZXRpb24gc3RhdHVzIGJhY2sgdG8gZmFsc2VcbiAgICAgICAgc2VsZWN0ZWRUYXNrLnRvZ2dsZUNvbXBsZXRpb25TdGF0dXMoKTtcbiAgICAgICAgcHJvamVjdC5tb3ZlVG9VbmNvbXBsZXRlZFRhc2tzKCk7XG4gICAgICAgIHBvcHVsYXRlTWFpbkFyZWEoKTtcbiAgICAgICAgcG9wVXAucmVtb3ZlKCk7XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShhbGxQcm9qZWN0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRpbWVvdXQoYnVpbGRUYXNrRGVsZXRpb25VbmRvUG9wVXAsIDcwMCk7XG4gIHNldFRpbWVvdXQoZGVsZXRlQ29tcGxldGVkVGFzaywgNzAwKTtcbiAgc2V0VGltZW91dCh1bmRvVGFza0RlbGV0aW9uLCA3MDApO1xuXG4gIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3QuY2xlYXJDb21wbGV0ZWRUYXNrcygpKVxuICBzZXRUaW1lb3V0KHVwZGF0ZUxvY2FsU3RvcmFnZShhbGxQcm9qZWN0cyksIDcwMCk7XG59XG4iLCJpbXBvcnQgZWxlbWVudEZyb21IdG1sIGZyb20gJy4vbW9kYWwtZm9ybS1idWlsZCc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IHsgZGlzcGxheUFsbFRhc2tzIH0gZnJvbSAnLi9uYXYtdXRpbGl0eSc7XG5pbXBvcnQgeyBidWlsZENvbmZpcm1EZWxldGVQcm9qZWN0UG9wVXAgfSBmcm9tICcuL2J1aWxkLXBvcC11cHMnO1xuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRWRpdEludGVyZmFjZShlKSB7XG4gIGNvbnN0IGNsaWNrZWRQcm9qZWN0SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuXG4gIGxldCBwcm9qZWN0VG9FZGl0O1xuICBmb3IgKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzKSB7XG4gICAgaWYgKHByb2plY3QuaWQgPT09IGNsaWNrZWRQcm9qZWN0SWQpIHByb2plY3RUb0VkaXQgPSBwcm9qZWN0O1xuICB9XG5cbiAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdFRvRWRpdC5nZXRUaXRsZSgpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0TW9kYWwgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJhZGQtbmV3LW1vZGFsIHByb2plY3QtZWRpdC1tb2RhbC0ke2NsaWNrZWRQcm9qZWN0SWR9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgIDxoMz5FZGl0IFByb2plY3Q8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UgY2xvc2UtZWRpdC1wcm9qZWN0LSR7Y2xpY2tlZFByb2plY3RJZH1cIj4mI3gyNzE1PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1uYXZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL21vZGFsLXByb2plY3QucG5nXCI+XG4gICAgICAgICAgICA8ZGl2PlByb2plY3Q8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwicHJvamVjdC1lZGl0LWZvcm0tJHtjbGlja2VkUHJvamVjdElkfVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0aXRsZSBlZGl0LXRpdGxlLSR7Y2xpY2tlZFByb2plY3RJZH1cIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHtwcm9qZWN0VGl0bGV9XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInByb2plY3Qtc3VibWl0XCI+XG4gICAgICAgICAgICBFZGl0IFByb2plY3Q8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZWRpdFByb2plY3RNb2RhbCk7XG4gIGNvbnN0IHByb2plY3RFZGl0TW9kYWwgPSBlZGl0UHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5wcm9qZWN0LWVkaXQtbW9kYWwtJHtjbGlja2VkUHJvamVjdElkfWBcbiAgKTtcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBlZGl0UHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5jbG9zZS1lZGl0LXByb2plY3QtJHtjbGlja2VkUHJvamVjdElkfWBcbiAgKTtcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGVkaXRQcm9qZWN0TW9kYWwucXVlcnlTZWxlY3RvcihcbiAgICBgLnByb2plY3QtZWRpdC1mb3JtLSR7Y2xpY2tlZFByb2plY3RJZH1gXG4gICk7XG4gIGNvbnN0IGVkaXRlZFRpdGxlSW5wdXQgPSBlZGl0UHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5lZGl0LXRpdGxlLSR7Y2xpY2tlZFByb2plY3RJZH1gXG4gICk7XG5cbiAgcHJvamVjdEVkaXRNb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMSknO1xuXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3RFZGl0TW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDApJztcbiAgfSk7XG5cbiAgc3VibWl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBlZGl0IHByb2plY3QgaW4gYnVzaW5lc3MgbG9naWNcbiAgICBjb25zdCBlZGl0ZWRUaXRsZSA9IGVkaXRlZFRpdGxlSW5wdXQudmFsdWU7XG4gICAgcHJvamVjdFRvRWRpdC5jaGFuZ2VUaXRsZShlZGl0ZWRUaXRsZSk7XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKGFsbFByb2plY3RzKVxuICAgIC8vZWRpdCBwcm9qZWN0IGluIERPTVxuICAgIGVkaXRQcm9qZWN0TmFtZUZyb21Eb20oY2xpY2tlZFByb2plY3RJZCwgZWRpdGVkVGl0bGUpO1xuXG4gICAgcHJvamVjdEVkaXRNb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMCknO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSkge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBjb25zdCBjbGlja2VkUHJvamVjdElkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcblxuICBidWlsZENvbmZpcm1EZWxldGVQcm9qZWN0UG9wVXAoKTtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cC1kZWxldGUnKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJyk7XG5cbiAgbGV0IHByb2plY3RUb0RlbGV0ZTtcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0cykge1xuICAgIGlmIChwcm9qZWN0LmlkID09PSBjbGlja2VkUHJvamVjdElkKSBwcm9qZWN0VG9EZWxldGUgPSBwcm9qZWN0O1xuICB9XG5cbiAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0VG9EZWxldGUuZ2V0VGl0bGUoKX1gXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVByb2plY3RBZnRlckNvbmZpcm0pO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3RBZnRlckNvbmZpcm0oKSB7XG4gICAgLy9yZW1vdmUgcHJvamVjdCBmcm9tIGJ1c2luZXNzIGxvZ2ljXG4gICAgcHJvamVjdE1hbmFnZXIucmVtb3ZlUHJvamVjdChwcm9qZWN0VG9EZWxldGUpO1xuICAgIC8vcmVtb3ZlIHByb2plY3QgZnJvbSBET01cbiAgICByZW1vdmVQcm9qZWN0RnJvbURvbShjbGlja2VkUHJvamVjdElkKTtcbiAgICBkaXNwbGF5QWxsVGFza3MoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdE5hbWVGcm9tRG9tKGlkLCBlZGl0VmFsdWUpIHtcbiAgY29uc3QgcHJvamVjdERvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAucHJvamVjdFtkYXRhLWlkPVwiJHtpZH1cIl0gPiBkaXZgXG4gICk7XG4gIHByb2plY3REb21FbGVtZW50LnRleHRDb250ZW50ID0gZWRpdFZhbHVlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0RnJvbURvbShpZCkge1xuICBjb25zdCBwcm9qZWN0RG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5wcm9qZWN0LWNvbnRhaW5lcltkYXRhLWlkPVwiJHtpZH1cIl1gXG4gICk7XG4gIHByb2plY3REb21FbGVtZW50LnJlbW92ZSgpO1xufVxuIiwiaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCBlbGVtZW50RnJvbUh0bWwgZnJvbSAnLi9tb2RhbC1mb3JtLWJ1aWxkJztcbmltcG9ydCBwb3B1bGF0ZU1haW5BcmVhIGZyb20gJy4vcG9wdWxhdGUtbWFpbi1hcmVhJztcbmltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRhc2tFZGl0SW50ZXJmYWNlKGUpIHtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuICBjb25zdCBjbGlja2VkVGFza0lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuQWxsVGFza3MoKTtcbiAgbGV0IHRhc2tUb0VkaXQ7XG4gIGZvciAobGV0IHRhc2sgb2YgYWxsVGFza3MpIHtcbiAgICBpZiAodGFzay5pZCA9PT0gY2xpY2tlZFRhc2tJZCkgdGFza1RvRWRpdCA9IHRhc2s7XG4gIH1cblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrVG9FZGl0LnRpdGxlO1xuICBjb25zdCB0YXNrRGV0YWlscyA9IHRhc2tUb0VkaXQuZGVzY3JpcHRpb247XG4gIGNvbnN0IHRhc2tEYXRlID0gdGFza1RvRWRpdC5kYXRlO1xuXG4gIGNvbnN0IGVkaXRUYXNrTW9kYWwgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJhZGQtbmV3LW1vZGFsIHRhc2stZWRpdC1tb2RhbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICA8aDM+RWRpdCBUYXNrPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlIGNsb3NlLWVkaXQtdGFza1wiPiYjeDI3MTU8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLW5hdlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9hc3NldHMvbW9kYWwtdGFzay5wbmdcIj5cbiAgICAgICAgICAgIDxkaXY+VGFzazwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJ0YXNrLWVkaXQtZm9ybVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZTogUGF5IGJpbGxzXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZWRpdC10aXRsZVwiIHZhbHVlPVwiJHt0YXNrVGl0bGV9XCIgcmVxdWlyZWQvPlxuICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiRGV0YWlsczogZS5nIGludGVybmV0LCBwaG9uZSwgcmVudC5cIlxuICAgICAgICAgICAgY2xhc3M9XCJlZGl0LWRldGFpbHNcIj4ke3Rhc2tEZXRhaWxzfTwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPjxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZWRpdC1kYXRlXCIgdmFsdWU9XCIke3Rhc2tEYXRlfVwiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1yYWRpb1wiPlxuICAgICAgICAgICAgICA8c3Bhbj5Qcmlvcml0eTo8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpby1idXR0b24gcmFkaW8tbG93XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwibG93XCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJsb3dcIi8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvd1wiPkxPVzwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW8tYnV0dG9uIHJhZGlvLW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIm1lZGl1bVwiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibWVkaXVtXCIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZWRpdW1cIj5NRURJVU08L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvLWJ1dHRvbiByYWRpby1oaWdoXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiaGlnaFwiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwiaGlnaFwiLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaGlnaFwiPkhJR0g8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJ0YXNrIHRhc2stc3VibWl0XCI+RWRpdCBUYXNrPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZWRpdFRhc2tNb2RhbCk7XG5cbiAgKGZ1bmN0aW9uIGFkZFRhc2tQcmlvcml0eSgpIHtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrVG9FZGl0LnByaW9yaXR5O1xuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG4gICAgY29uc3QgbG93UmFkaW9CdXR0b24gPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwibG93XCJdJyk7XG4gICAgY29uc3QgbWVkaXVtUmFkaW9CdXR0b24gPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwibWVkaXVtXCJdJyk7XG4gICAgY29uc3QgaGlnaFJhZGlvQnV0dG9uID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImhpZ2hcIl0nKTtcblxuICAgIHJhZGlvQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKSk7XG5cbiAgICBzd2l0Y2ggKHRhc2tQcmlvcml0eSkge1xuICAgICAgY2FzZSAnbG93JzpcbiAgICAgICAgbG93UmFkaW9CdXR0b24uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIG1lZGl1bVJhZGlvQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgaGlnaFJhZGlvQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KSgpO1xuXG4gIGNvbnN0IHRhc2tFZGl0TW9kYWwgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXQtbW9kYWwnKTtcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1lZGl0LXRhc2snKTtcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcignLnRhc2stZWRpdC1mb3JtJyk7XG4gIGNvbnN0IGVkaXRlZFRpdGxlSW5wdXQgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRpdGxlJyk7XG4gIGNvbnN0IGVkaXRlZERldGFpbHNJbnB1dCA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcignLmVkaXQtZGV0YWlscycpO1xuICBjb25zdCBlZGl0ZWREYXRlSW5wdXQgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWRhdGUnKTtcblxuICB0YXNrRWRpdE1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgxKSc7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRhc2tFZGl0TW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDApJztcbiAgfSk7XG5cbiAgc3VibWl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBlZGl0IHRhc2sgaW4gYnVzaW5lc3MgbG9naWNcbiAgICBjb25zdCBlZGl0ZWRUaXRsZSA9IGVkaXRlZFRpdGxlSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZWRpdGVkRGV0YWlscyA9IGVkaXRlZERldGFpbHNJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBlZGl0ZWREYXRlID0gZWRpdGVkRGF0ZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG5cbiAgICB0YXNrVG9FZGl0LmNoYW5nZVRpdGxlKGVkaXRlZFRpdGxlKTtcbiAgICB0YXNrVG9FZGl0LmFkZERldGFpbHMoZWRpdGVkRGV0YWlscyk7XG4gICAgdGFza1RvRWRpdC5hZGREdWVEYXRlKGVkaXRlZERhdGUpO1xuICAgIHJhZGlvQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChidXR0b24uY2hlY2tlZCkgdGFza1RvRWRpdC5wcmlvcml0eSA9IGJ1dHRvbi52YWx1ZTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShhbGxQcm9qZWN0cylcbiAgICAvL2VkaXQgcHJvamVjdCBpbiBET01cbiAgICBwb3B1bGF0ZU1haW5BcmVhKCk7XG5cbiAgICB0YXNrRWRpdE1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgwKSc7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhlKSB7XG4gIGNvbnN0IGNsaWNrZWRUYXNrSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5BbGxUYXNrcygpO1xuICBsZXQgdGFza1RvRGVsZXRlO1xuICBmb3IgKGxldCB0YXNrIG9mIGFsbFRhc2tzKSB7XG4gICAgaWYgKHRhc2suaWQgPT09IGNsaWNrZWRUYXNrSWQpIHRhc2tUb0RlbGV0ZSA9IHRhc2s7XG4gIH1cbiAgLy9yZW1vdmUgcHJvamVjdCBmcm9tIGJ1c2luZXNzIGxvZ2ljXG4gIHRhc2tUb0RlbGV0ZS5jb21wbGV0aW9uU3RhdHVzID0gdHJ1ZTtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm1vdmVUb0NvbXBsZXRlZFRhc2tzKCkpO1xuICBcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKGFsbFByb2plY3RzKVxuICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gRE9NXG4gIHBvcHVsYXRlTWFpbkFyZWEoKTtcbn1cbiIsImltcG9ydCB7IHBvcE1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSAnLi9tb2RhbC1tYW5pcHVsYXRpb24nO1xuaW1wb3J0IHsgYnVpbGRQcm9qZWN0RG9tRWxlbWVudCB9IGZyb20gJy4vZG9tLWRpc3BsYXktcHJvamVjdCc7XG5pbXBvcnQgeyBidWlsZExvY2FsU3RvcmFnZU5ld1VzZXIgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHtcbiAgZGlzcGxheUFsbFRhc2tzLFxuICBkaXNwbGF5SW1wb3J0YW50VGFza3MsXG4gIGRpc3BsYXlUb2RheVRhc2tzLFxuICBkaXNwbGF5V2Vla1Rhc2tzLFxufSBmcm9tICcuL25hdi11dGlsaXR5JztcblxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXcnKTtcbmNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtaGVhZGVyIC5jbG9zZScpO1xuY29uc3QgcHJvamVjdHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWFyZWEnKTtcbmNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpO1xuY29uc3QgbmV4dFdlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V2ZW4tZGF5cycpO1xuY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltcG9ydGFudCcpO1xuXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwb3BNb2RhbCgpKTtcbmNsb3NlTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKCkpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzKCkge1xuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xuICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbn1cblxuYWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRpc3BsYXlBbGxUYXNrcygpO1xuICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgYWxsVGFza3MuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59KTtcblxudG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRpc3BsYXlUb2RheVRhc2tzKCk7XG4gIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzcygpO1xuICB0b2RheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pO1xuXG5uZXh0V2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZGlzcGxheVdlZWtUYXNrcygpO1xuICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgbmV4dFdlZWsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59KTtcblxuaW1wb3J0YW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkaXNwbGF5SW1wb3J0YW50VGFza3MoKTtcbiAgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gIGltcG9ydGFudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pO1xuXG5idWlsZExvY2FsU3RvcmFnZU5ld1VzZXIoKTtcbmJ1aWxkUHJvamVjdERvbUVsZW1lbnQocHJvamVjdHNBcmVhKTtcbmRpc3BsYXlBbGxUYXNrcygpO1xuIiwiaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuICBcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoZGIpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RiJywgSlNPTi5zdHJpbmdpZnkoZGIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHJpZXZlTG9jYWxTdG9yYWdlKGRiKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHBhcnNlZExvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGIpKTtcbiAgICAvLyBhZGRpbmcgYmFjayBhbGwgb2YgdGhlIG1ldGhvZHMgb2YgdGhlIFByb2plY3QgY2xhc3MgaW4gaXQncyBwcm90b3R5cGUgdG8gZWFjaCBpbnN0YW5jZVxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcGFyc2VkTG9jYWxTdG9yYWdlKVxuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb2plY3QsIFByb2plY3QucHJvdG90eXBlKTtcbiAgICAvLyBhZGRpbmcgYmFjayBhbGwgb2YgdGhlIG1ldGhvZHMgb2YgdGhlIFRhc2sgY2xhc3MgaW4gaXQncyBwcm90b3R5cGUgdG8gZWFjaCBpbnN0YW5jZVxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcGFyc2VkTG9jYWxTdG9yYWdlKSB7XG4gICAgICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKTtcbiAgICAgIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IE9iamVjdC5zZXRQcm90b3R5cGVPZih0YXNrLCBUYXNrLnByb3RvdHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkTG9jYWxTdG9yYWdlO1xuICB9IGVsc2UgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRMb2NhbFN0b3JhZ2VOZXdVc2VyKCkge1xuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYicpKSB7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgnWW91ciBGaXJzdCBQcm9qZWN0Jyk7XG4gICAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbGVtZW50RnJvbUh0bWwoaHRtbCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWwudHJpbSgpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCB0YXNrRm9ybSA9IGVsZW1lbnRGcm9tSHRtbChgXG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlOiBQYXkgYmlsbHNcIiByZXF1aXJlZC8+XG4gIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiPlxuICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0XCI+UHJvamVjdCB0byBhc3NpZ24gdG86IDwvbGFiZWw+XG4gICAgPHNlbGVjdCBuYW1lPVwiXCIgaWQ9XCJwcm9qZWN0XCI+PC9zZWxlY3Q+XG4gIDwvZGl2PlxuICA8dGV4dGFyZWEgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJEZXRhaWxzOiBlLmcgaW50ZXJuZXQsIHBob25lLCByZW50LlwiPjwvdGV4dGFyZWE+XG4gIDxkaXYgY2xhc3M9XCJkYXRlLWNvbnRhaW5lclwiPlxuICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+RHVlIERhdGU6PC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPjxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIHJlcXVpcmVkLz48L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1yYWRpb1wiPlxuICAgIDxzcGFuPlByaW9yaXR5Ojwvc3Bhbj5cbiAgICA8ZGl2IGNsYXNzPVwicmFkaW8tYnV0dG9uIHJhZGlvLWxvd1wiPlxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwibG93XCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJsb3dcIiBjaGVja2VkLz5cbiAgICAgIDxsYWJlbCBmb3I9XCJsb3dcIj5MT1c8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyYWRpby1idXR0b24gcmFkaW8tbWVkaXVtXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJtZWRpdW1cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cIm1lZGl1bVwiLz5cbiAgICAgIDxsYWJlbCBmb3I9XCJtZWRpdW1cIj5NRURJVU08L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyYWRpby1idXR0b24gcmFkaW8taGlnaFwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiaGlnaFwiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwiaGlnaFwiLz5cbiAgICAgIDxsYWJlbCBmb3I9XCJoaWdoXCI+SElHSDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJ0YXNrIHRhc2stc3VibWl0XCI+QWRkIFRhc2s8L2J1dHRvbj5cbiAgPC9kaXY+XG5gKTtcblxuY29uc3QgcHJvamVjdEZvcm0gPSBlbGVtZW50RnJvbUh0bWwoYFxuICA8aW5wdXQgY2xhc3M9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZTogSG91c2UgUmVub3ZhdGlvblwiIHJlcXVpcmVkPlxuICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInByb2plY3Qtc3VibWl0XCI+Q3JlYXRlIFByb2plY3Q8L2J1dHRvbj5cbmApO1xuXG5leHBvcnQgeyB0YXNrRm9ybSwgcHJvamVjdEZvcm0gfTtcbiIsImltcG9ydCB7IGJ1aWxkUHJvamVjdERvbUVsZW1lbnQgfSBmcm9tICcuL2RvbS1kaXNwbGF5LXByb2plY3QnO1xuaW1wb3J0IHsgdGFza0Zvcm0sIHByb2plY3RGb3JtIH0gZnJvbSAnLi9tb2RhbC1mb3JtLWJ1aWxkJztcbmltcG9ydCB7IGdldERhdGFGcm9tRm9ybXMgfSBmcm9tICcuL2RhdGEtbWFuaXB1bGF0aW9uJztcbmltcG9ydCBwb3B1bGF0ZU1haW5BcmVhIGZyb20gJy4vcG9wdWxhdGUtbWFpbi1hcmVhJztcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5leHBvcnQgeyBwb3BNb2RhbCwgY2xvc2VNb2RhbCB9O1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3LW1vZGFsJyk7XG5cbmZ1bmN0aW9uIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzc0Zyb21Nb2RhbCgpIHtcbiAgY29uc3QgbW9kYWxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtbmV3LW1vZGFsIGRpdicpO1xuICBtb2RhbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQmx1cihtb2RhbCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zb2xlLmxvZyhtb2RhbClcbiAgLy9jaGVjayBpZiAncG9wcGluZycgY2xhc3MgaW4gbW9kYWw7IG1lYW5zIHdlIGFyZSBvcGVuaW5nIG1vZGFsXG4gIGlmIChtb2RhbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuaW5jbHVkZXMoJ3BvcHBpbmcnKSkge1xuICAgIGhlYWRlci5zdHlsZS5jc3NUZXh0ID0gJ2ZpbHRlcjogYmx1cigzcHgpJztcbiAgICBjb250ZW50LnN0eWxlLmNzc1RleHQgPSAnZmlsdGVyOiBibHVyKDNweCknO1xuICB9IGVsc2Uge1xuICAgIGhlYWRlci5zdHlsZS5jc3NUZXh0ID0gJ2ZpbHRlcjogYmx1cigwcHgpJztcbiAgICBjb250ZW50LnN0eWxlLmNzc1RleHQgPSAnZmlsdGVyOiBibHVyKDBweCknO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdHNEcm9wZG93bigpIHtcbiAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24gc2VsZWN0Jyk7XG4gIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUaXRsZSgpKTtcblxuICBpZiAoZHJvcGRvd24gPT09IG51bGwpIHJldHVybjtcblxuICBkcm9wZG93bi5pbm5lckhUTUwgPSAnJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBvcHQgPSBvcHRpb25zW2ldO1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZWwudGV4dENvbnRlbnQgPSBvcHQ7XG4gICAgZWwudmFsdWUgPSBvcHQ7XG4gICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoZWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvcE1vZGFsKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgncG9wcGluZycpO1xuICBtb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMSknO1xuICB0b2dnbGVCbHVyKG1vZGFsKTtcbiAgZm9ybS5pbm5lckhUTUwgPSAnJztcbiAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG4gIC8vYWRkaW5nICd0YXNrJyBjbGFzcyBpbiBvcmRlciB0byBkaWZmZXJlbnRpYXRlIHRoZSBmb3JtIHR5cGUgKHRhc2sgb3IgcHJvamVjdClcbiAgZm9ybS5jbGFzc05hbWUgPSAnJztcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gIHBvcHVsYXRlUHJvamVjdHNEcm9wZG93bigpO1xuICBzd2l0Y2hUb1Rhc2soKTtcbiAgc3dpdGNoVG9Qcm9qZWN0KCk7XG4gIHRhc2tPclByb2plY3RTdWJtaXQoKTtcblxuICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3NGcm9tTW9kYWwoKTtcbiAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgncG9wcGluZycpO1xuICBtb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMCknO1xuICB0b2dnbGVCbHVyKG1vZGFsKTtcbiAgLy9yZXBsYWNpbmcgZm9ybSBub2RlIHdpdGggaXQncyBjbG9uZSBzbyB0aGF0IHdlIHJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzXG4gIGZvcm0ucmVwbGFjZVdpdGgoZm9ybS5jbG9uZU5vZGUodHJ1ZSkpO1xuICBmb3JtLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFRvVGFzaygpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1uYXYgLnRhc2snKTtcbiAgdGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmb3JtLmlubmVySFRNTCA9ICcnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICAgIGZvcm0uY2xhc3NOYW1lID0gJyc7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgcG9wdWxhdGVQcm9qZWN0c0Ryb3Bkb3duKCk7XG4gICAgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzRnJvbU1vZGFsKCk7XG4gICAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFRvUHJvamVjdCgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1uYXYgLnByb2plY3QnKTtcbiAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmb3JtLmlubmVySFRNTCA9ICcnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuICAgIGZvcm0uY2xhc3NOYW1lID0gJyc7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzRnJvbU1vZGFsKCk7XG4gICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRhc2tPclByb2plY3RTdWJtaXQoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBnZXREYXRhRnJvbUZvcm1zKGUpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBoYW5kbGVGb3JtU3VibWlzc2lvbigpO1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXNzaW9uKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCBwcm9qZWN0c0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtYXJlYScpO1xuXG4gIGlmIChmb3JtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5pbmNsdWRlcygndGFzaycpKSB7XG4gICAgcG9wdWxhdGVNYWluQXJlYSgpO1xuICB9IGVsc2Uge1xuICAgIGJ1aWxkUHJvamVjdERvbUVsZW1lbnQocHJvamVjdHNBcmVhKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgYnVpbGRUYXNrRG9tRWxlbWVudCB9IGZyb20gJy4vZG9tLWRpc3BsYXktdGFzayc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IGlzVG9kYXkgZnJvbSAnZGF0ZS1mbnMvaXNUb2RheSc7XG5pbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGREYXlzJztcbmltcG9ydCBpc0JlZm9yZSBmcm9tICdkYXRlLWZucy9pc0JlZm9yZSc7XG5cbmNvbnN0IG1haW5BcmVhVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1hcmVhLXRpdGxlJyk7XG5jb25zdCBtYWluQXJlYUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1hcmVhLWNvbnRlbnQnKTtcblxuZnVuY3Rpb24gaGFuZGxlTm9UYXNrcyh0YXNrTGlzdCkge1xuICBpZiAodGFza0xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgbWFpbkFyZWFDb250ZW50LnRleHRDb250ZW50ID0gJ1lheSEgTm8gVGFza3MhJztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFsbFRhc2tzKCkge1xuICBjb25zdCBhbGxUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpXG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9ICdBbGwgVGFza3MnO1xuICBhbGxUYXNrc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICBidWlsZFRhc2tEb21FbGVtZW50KG1haW5BcmVhQ29udGVudCwgcHJvamVjdE1hbmFnZXIucmV0dXJuQWxsVGFza3MoKSk7XG4gIGhhbmRsZU5vVGFza3MocHJvamVjdE1hbmFnZXIucmV0dXJuQWxsVGFza3MoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VG9kYXlUYXNrcygpIHtcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBtYWluQXJlYVRpdGxlLnRleHRDb250ZW50ID0gJ1RvZGF5JztcblxuICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCk7XG4gIGxldCB0b2RheVRhc2tzID0gW107XG5cbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kYXRlKTtcbiAgICBpZiAoaXNUb2RheSh0YXNrRGF0ZSkpIHRvZGF5VGFza3MucHVzaCh0YXNrKTtcbiAgfSk7XG5cbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIHRvZGF5VGFza3MpO1xuICBoYW5kbGVOb1Rhc2tzKHRvZGF5VGFza3MpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5V2Vla1Rhc2tzKCkge1xuICBtYWluQXJlYUNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIG1haW5BcmVhVGl0bGUudGV4dENvbnRlbnQgPSAnTmV4dCA3IERheXMnO1xuXG4gIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuQWxsVGFza3MoKTtcbiAgbGV0IHNldmVuRGF5c1Rhc2tzID0gW107XG5cbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLmRhdGUpO1xuICAgIGNvbnN0IG9uZVdlZWtMYXRlckRhdGUgPSBhZGREYXlzKHRvZGF5RGF0ZSwgNyk7XG4gICAgaWYgKGlzQmVmb3JlKHRhc2tEYXRlLCBvbmVXZWVrTGF0ZXJEYXRlKSkgc2V2ZW5EYXlzVGFza3MucHVzaCh0YXNrKTtcbiAgfSk7XG5cbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIHNldmVuRGF5c1Rhc2tzKTtcbiAgaGFuZGxlTm9UYXNrcyhzZXZlbkRheXNUYXNrcylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlJbXBvcnRhbnRUYXNrcygpIHtcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBtYWluQXJlYVRpdGxlLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG5cbiAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5BbGxUYXNrcygpO1xuICBsZXQgaW1wb3J0YW50VGFza3MgPSBbXTtcblxuICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgaW1wb3J0YW50VGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG4gIH0pO1xuXG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCBpbXBvcnRhbnRUYXNrcyk7XG4gIGhhbmRsZU5vVGFza3MoaW1wb3J0YW50VGFza3MpXG59XG4iLCJpbXBvcnQge1xuICBkaXNwbGF5QWxsVGFza3MsXG4gIGRpc3BsYXlJbXBvcnRhbnRUYXNrcyxcbiAgZGlzcGxheVRvZGF5VGFza3MsXG4gIGRpc3BsYXlXZWVrVGFza3MsXG59IGZyb20gJy4vbmF2LXV0aWxpdHknO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFRhc2tzIH0gZnJvbSAnLi9kb20tZGlzcGxheS1wcm9qZWN0JztcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5cbi8vIHVzaW5nIHRoaXMgdG8gaGVscCBwb3B1bGF0ZSB0aGUgbWFpbiBhcmVhIHdpdGggdGhlIGFkZXF1YXRlIGZpbHRlcmVkIGNvbnRlbnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVsYXRlTWFpbkFyZWEoKSB7XG4gIGNvbnN0IG5hdlNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWUgPiBkaXYnKTtcbiAgY29uc3QgcHJvamVjdERvbUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLnByb2plY3RzLWFyZWEgPiBkaXYgPiBkaXYnXG4gICk7XG4gIGNvbnN0IGZ1bmN0aW9uVG9SdW5EaWN0aW9uYXJ5ID0ge1xuICAgICd0YXNrcyBhY3RpdmUnOiBkaXNwbGF5QWxsVGFza3MsXG4gICAgJ3RvZGF5IGFjdGl2ZSc6IGRpc3BsYXlUb2RheVRhc2tzLFxuICAgICdzZXZlbi1kYXlzIGFjdGl2ZSc6IGRpc3BsYXlXZWVrVGFza3MsXG4gICAgJ2ltcG9ydGFudCBhY3RpdmUnOiBkaXNwbGF5SW1wb3J0YW50VGFza3MsXG4gIH07XG5cbiAgZm9yIChsZXQgc2VjdGlvbiBvZiBuYXZTZWN0aW9ucykge1xuICAgIGlmIChzZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgZnVuY3Rpb25Ub1J1bkRpY3Rpb25hcnlbY2xhc3NMaXN0XSgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0RG9tRWxlbWVudHMpIHtcbiAgICBpZiAocHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuICAgICAgbGV0IHByb2plY3RUb0Rpc3BsYXk7XG4gICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzKSB7XG4gICAgICAgIGlmIChwcm9qZWN0LmlkID09PSBwcm9qZWN0SUQpIHByb2plY3RUb0Rpc3BsYXkgPSBwcm9qZWN0O1xuICAgICAgfVxuICAgICAgcmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3RUb0Rpc3BsYXkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy9pZiBubyBuYXYgYnV0dG9uIG9yIHByb2plY3QgaXMgc2VsZWN0ZWQsIHN3aXRjaCB0byBBbGwgVGFza3MgJ3RhYidcbiAgZGlzcGxheUFsbFRhc2tzKCk7XG59XG4iLCJpbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UsIHJldHJpZXZlTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gcHJvamVjdE1hbmFnZXIoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gcmV0cmlldmVMb2NhbFN0b3JhZ2UoJ2RiJylcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBmb3IgKGxldCBpdGVyYXRlZFByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgIGNvbnN0IHByb2plY3RzVGl0bGUgPSBbXVxuICAgICAgcHJvamVjdHNUaXRsZS5wdXNoKGl0ZXJhdGVkUHJvamVjdC50aXRsZSlcbiAgICAgIGlmIChwcm9qZWN0c1RpdGxlLmluY2x1ZGVzKHByb2plY3QudGl0bGUpKSByZXR1cm5cbiAgICB9XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KVxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShwcm9qZWN0cylcbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvamVjdHNbaV0udGl0bGUgPT09IHByb2plY3QudGl0bGUpIHtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdHMpO1xuICB9O1xuXG4gIGNvbnN0IHJldHVybkFsbFRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsbFRhc2tzID0gW107XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgYWxsVGFza3MucHVzaCguLi5wcm9qZWN0LmdldFRhc2tzKCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFsbFRhc2tzXG4gIH1cblxuICBjb25zdCByZXR1cm5Qcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gIHJldHVybiB7IGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIHJldHVyblByb2plY3RzICwgcmV0dXJuQWxsVGFza3N9O1xufSkoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gICAgdGhpcy5jb21wbGV0ZWRUYXNrcyA9IFtdO1xuICAgIHRoaXMuZ2VuZXJhdGVJZCgpO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICB9XG5cbiAgY2hhbmdlVGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLnRpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgZ2VuZXJhdGVJZCgpIHtcbiAgICB0aGlzLmlkID0gYHByai1pZCR7TWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMil9YDtcbiAgfVxuXG4gIG1vdmVUb0NvbXBsZXRlZFRhc2tzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudGFza3NbaV0uY29tcGxldGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZFRhc2tzLnB1c2godGhpcy50YXNrc1tpXSk7XG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdmVUb1VuY29tcGxldGVkVGFza3MoKSB7XG4gICAgY29uc3QgdGFza1RvTW92ZSA9IHRoaXMuY29tcGxldGVkVGFza3NbdGhpcy5jb21wbGV0ZWRUYXNrcy5sZW5ndGggLSAxXVxuICAgIGNvbnNvbGUubG9nKHRhc2tUb01vdmUpXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2tUb01vdmUpXG4gICAgY29uc29sZS5sb2codGhpcy50YXNrcylcbiAgfVxuXG4gIGNsZWFyQ29tcGxldGVkVGFza3MoKSB7XG4gICAgdGhpcy5jb21wbGV0ZWRUYXNrcyA9IFtdXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmNvbXBsZXRpb25TdGF0dXMgPSBmYWxzZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5O1xuICAgIHRoaXMuZ2VuZXJhdGVJZCgpO1xuICB9XG5cbiAgY2hhbmdlVGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLnRpdGxlID0gdmFsdWU7XG4gIH1cblxuICBhZGREZXRhaWxzKHZhbHVlKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgYWRkRHVlRGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgYWRkUHJpb3JpdHkodmFsdWUpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWU7XG4gIH1cblxuICB0b2dnbGVDb21wbGV0aW9uU3RhdHVzKCkge1xuICAgIHRoaXMuY29tcGxldGlvblN0YXR1cyA9ICF0aGlzLmNvbXBsZXRpb25TdGF0dXM7XG4gIH1cblxuICBnZW5lcmF0ZUlkKCkge1xuICAgIHRoaXMuaWQgPSBgdHNrLWlkJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyKX1gO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9