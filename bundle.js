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
        project.moveToUncompletedTasks(selectedTask);
        (0,_populate_main_area__WEBPACK_IMPORTED_MODULE_4__["default"])();
        popUp.remove();
      });
    });
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_5__.updateLocalStorage)(allProjects);
  }

  setTimeout(_build_pop_ups__WEBPACK_IMPORTED_MODULE_3__.buildTaskDeletionUndoPopUp, 700);
  setTimeout(deleteCompletedTask, 700);
  setTimeout(undoTaskDeletion, 700);
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
    for (let i = 0; i < this.completedTasks.length; i++) {
      this.tasks.push(this.completedTasks[i]);
      this.completedTasks = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQmVmb3JlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYnVpbGQtcG9wLXVwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RhdGEtbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLWRpc3BsYXktcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS1kaXNwbGF5LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2RhbC1mb3JtLWJ1aWxkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kYWwtbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmF2LXV0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wb3B1bGF0ZS1tYWluLWFyZWEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzQmVmb3JlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYmVmb3JlIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQmVmb3JlKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQmVmb3JlKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkaXJ0eURhdGVUb0NvbXBhcmUpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPCBkYXRlVG9Db21wYXJlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IGVsZW1lbnRGcm9tSHRtbCBmcm9tICcuL21vZGFsLWZvcm0tYnVpbGQnO1xuaW1wb3J0IHsgdG9nZ2xlQmx1ciB9IGZyb20gJy4vbW9kYWwtbWFuaXB1bGF0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29uZmlybURlbGV0ZVByb2plY3RQb3BVcCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgcG9wVXBDb250YWluZXIgPSBlbGVtZW50RnJvbUh0bWwoYFxuICA8ZGl2IGNsYXNzPVwiY29uZmlybS1kZWxldGUtcG9wLXVwIGFkZC1uZXctbW9kYWxcIj5cbiAgICA8ZGl2IGNsYXNzPVwicG9wLXVwLWhlYWRlclwiPlxuICAgICAgPGgzPkRlbGV0ZSBQcm9qZWN0PC9oMz5cbiAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZVwiPiYjeDI3MTU8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicG9wLXVwLW1lc3NhZ2VcIj5cbiAgICAgIDxzcGFuPkFyZSB5b3Ugc3VyZT88L3NwYW4+XG4gICAgICA8ZGl2PlByb2plY3QgPHN0cm9uZz48c3BhbiBjbGFzcz1cInByb2plY3QtbmFtZVwiPjwvc3Bhbj48L3N0cm9uZz4gV2lsbCBiZSBnb25lIGZvcmV2ZXIhPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBvcC11cC1idXR0b25zXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwLWJ1dHRvbiBwb3AtdXAtY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwLWJ1dHRvbiBwb3AtdXAtZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgKTtcblxuICBib2R5LmFwcGVuZENoaWxkKHBvcFVwQ29udGFpbmVyKTtcbiAgY29uc3QgcG9wVXBFbGVtZW50ID0gcG9wVXBDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNvbmZpcm0tZGVsZXRlLXBvcC11cCcpO1xuXG4gIChmdW5jdGlvbiBoYW5kbGVQb3BVcEFjdGlvbigpIHtcbiAgICBwb3BVcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncG9wcGluZycpO1xuICAgIHRvZ2dsZUJsdXIocG9wVXBFbGVtZW50KTtcbiAgfSkoKTtcblxuICAoZnVuY3Rpb24gaGFuZGxlUG9wVXBDbG9zZSgpIHtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IHBvcFVwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IHBvcFVwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXAtY2FuY2VsJylcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBwb3BVcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucG9wLXVwLWRlbGV0ZScpXG4gICAgY29uc3QgYWN0aW9uQ2FuY2VsQnV0dG9ucyA9IFtjbG9zZUJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBkZWxldGVCdXR0b25dXG4gICAgYWN0aW9uQ2FuY2VsQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBvcFVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwb3BwaW5nJyk7XG4gICAgICB0b2dnbGVCbHVyKHBvcFVwRWxlbWVudCk7XG4gICAgICBwb3BVcENvbnRhaW5lci5yZW1vdmUoKVxuICAgIH0pKVxuICB9KSgpXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVGFza0RlbGV0aW9uVW5kb1BvcFVwKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCB1bmRvUG9wVXBDb250YWluZXIgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXVuZG9cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1bmRvLW1lc3NhZ2VcIj4xIHRhc2sgY29tcGxldGVkPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidW5kby1idXR0b25cIj5VbmRvPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuXG4gIGNvbnN0IHVuZG9Qb3BVcEVsZW1lbnQgPSB1bmRvUG9wVXBDb250YWluZXIucXVlcnlTZWxlY3RvcignLnRhc2stdW5kbycpXG4gIGJvZHkuYXBwZW5kQ2hpbGQodW5kb1BvcFVwQ29udGFpbmVyKVxuICB1bmRvUG9wVXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BvcHBpbmcnKVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVBvcFVwKCkge1xuICAgIHVuZG9Qb3BVcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncG9wcGluZycpO1xuICAgIHVuZG9Qb3BVcENvbnRhaW5lci5yZW1vdmUoKVxuICB9XG5cbiAgc2V0VGltZW91dChyZW1vdmVQb3BVcCwgMzAwMClcbn0iLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuZXhwb3J0IHsgZ2V0RGF0YUZyb21Gb3JtcyB9O1xuXG5mdW5jdGlvbiBnZXREYXRhRnJvbUZvcm1zKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvL2NoZWNrIGlmIHRoZSBmb3JtIGlzIGFzc29jaWF0ZWQgd2l0aCBhZGRpbmcgYSB0YXNrIG9yIGEgcHJvamVjdFxuICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmluY2x1ZGVzKCd0YXNrJykpIHtcbiAgICBnZXREYXRhRnJvbVRhc2tGb3JtKCk7XG4gIH0gZWxzZSBnZXREYXRhRnJvbVByb2plY3RGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGdldERhdGFGcm9tVGFza0Zvcm0oKSB7XG4gIGNvbnN0IHRhc2tUaXRsZVF1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtICN0aXRsZScpO1xuICBjb25zdCBwcm9qZWN0VG9Bc3NpZ25RdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSBzZWxlY3QnKTtcbiAgY29uc3QgZGV0YWlsc1F1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIHRleHRhcmVhJyk7XG4gIGNvbnN0IGR1ZURhdGVRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSAjZGF0ZScpO1xuICBjb25zdCBwcmlvcml0eVF1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuXG4gIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tUaXRsZVF1ZXJpZXIudmFsdWU7XG4gIGNvbnN0IHByb2plY3RUb0Fzc2lnblRvID0gcHJvamVjdFRvQXNzaWduUXVlcmllci52YWx1ZTtcbiAgY29uc3QgZGV0YWlscyA9IGRldGFpbHNRdWVyaWVyLnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZVF1ZXJpZXIudmFsdWU7XG4gIGxldCBwcmlvcml0eTtcblxuICBwcmlvcml0eVF1ZXJpZXIuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICBpZiAocmFkaW8uY2hlY2tlZCkgcHJpb3JpdHkgPSByYWRpby52YWx1ZTtcbiAgfSk7XG5cbiAgY29uc3QgdGFza1RvQWRkID0gbmV3IFRhc2sodGFza1RpdGxlKTtcbiAgdGFza1RvQWRkLmFkZERldGFpbHMoZGV0YWlscyk7XG4gIHRhc2tUb0FkZC5hZGREdWVEYXRlKGR1ZURhdGUpO1xuICB0YXNrVG9BZGQuYWRkUHJpb3JpdHkocHJpb3JpdHkpO1xuXG4gIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGlmIChwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3RUb0Fzc2lnblRvKSB7XG4gICAgICBwcm9qZWN0LmFkZFRhc2sodGFza1RvQWRkKTtcbiAgICB9XG4gIH0pO1xuICB1cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdHMpXG59XG5cbmZ1bmN0aW9uIGdldERhdGFGcm9tUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IHByb2plY3RUaXRsZVF1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIC50aXRsZScpO1xuXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZVF1ZXJpZXIudmFsdWU7XG5cbiAgY29uc3QgcHJvamVjdFRvQWRkID0gbmV3IFByb2plY3QocHJvamVjdFRpdGxlKTtcbiAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChwcm9qZWN0VG9BZGQpO1xufVxuIiwiaW1wb3J0IGVsZW1lbnRGcm9tSHRtbCBmcm9tICcuL21vZGFsLWZvcm0tYnVpbGQnO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCB7IGJ1aWxkVGFza0RvbUVsZW1lbnQgfSBmcm9tICcuL2RvbS1kaXNwbGF5LXRhc2snO1xuaW1wb3J0IHsgYnVpbGRFZGl0SW50ZXJmYWNlLCBkZWxldGVQcm9qZWN0IH0gZnJvbSAnLi9lZGl0LXByb2plY3QnO1xuaW1wb3J0IHsgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzIH0gZnJvbSAnLi9pbmRleCc7XG5cbmNvbnN0IG1haW5BcmVhQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWFyZWEtY29udGVudCcpO1xuY29uc3QgbWFpbkFyZWFUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWFyZWEtdGl0bGUnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUHJvamVjdERvbUVsZW1lbnQocGFyZW50KSB7XG4gIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBsYXN0UHJvamVjdEFkZGVkID0gcHJvamVjdHNbaV07XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gbGFzdFByb2plY3RBZGRlZC5nZXRUaXRsZSgpO1xuICAgIGNvbnN0IHByb2plY3RJZCA9IGxhc3RQcm9qZWN0QWRkZWQuaWQ7XG4gXG4gICAgY29uc3QgcHJvamVjdCA9IGVsZW1lbnRGcm9tSHRtbChgXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtY29udGFpbmVyXCIgZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RcIiBkYXRhLWlkPVwiJHtwcm9qZWN0SWR9XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGFtYnVyZ2VyXCI+4piwPC9zcGFuPlxuICAgICAgICA8ZGl2PiR7cHJvamVjdFRpdGxlfTwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRvdHNcIiBkYXRhLWlkPVwiJHtwcm9qZWN0SWR9XCI+JiN4MjJFRVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBcIiBkYXRhLWlkPVwiJHtwcm9qZWN0SWR9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdFwiIGRhdGEtaWQ9XCIke3Byb2plY3RJZH1cIj5FZGl0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlXCIgZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiPkRlbGV0ZTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCk7XG4gICAgXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlbmRlclByb2plY3RUYXNrcyhsYXN0UHJvamVjdEFkZGVkKTtcbiAgICAgIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzcygpO1xuICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2plY3RFZGl0ID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCcuZG90cycpO1xuICAgIGNvbnN0IHBvcFVwID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwJyk7XG4gICAgY29uc3QgcmVuYW1lQnV0dG9uID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuXG4gICAgcmVuYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnVpbGRFZGl0SW50ZXJmYWNlKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQcm9qZWN0KTtcbiAgICBwcm9qZWN0RWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBvcFVwLmNsYXNzTGlzdC5hZGQoJ3BvcHBpbmcnKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ICE9PSBwcm9qZWN0RWRpdCkgcG9wVXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wcGluZycpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0VGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKCk7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gIG1haW5BcmVhVGl0bGUudGV4dENvbnRlbnQgPSBgUHJvamVjdDogJHtwcm9qZWN0VGl0bGV9YDtcbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIHByb2plY3RUYXNrcyk7XG5cbiAgaWYgKHByb2plY3RUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICBtYWluQXJlYUNvbnRlbnQudGV4dENvbnRlbnQgPVxuICAgICAgJ1RoaXMgcHJvamVjdCBhcHBlYXJzIGVtcHR5LiBBZGQgdGFza3MgdG8gZ2V0IHN0YXJ0ZWQhJztcbiAgfVxufVxuIiwiaW1wb3J0IGVsZW1lbnRGcm9tSHRtbCBmcm9tICcuL21vZGFsLWZvcm0tYnVpbGQnO1xuaW1wb3J0IHsgYnVpbGRUYXNrRWRpdEludGVyZmFjZSwgZGVsZXRlVGFzayB9IGZyb20gJy4vZWRpdC10YXNrJztcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgeyBidWlsZFRhc2tEZWxldGlvblVuZG9Qb3BVcCB9IGZyb20gJy4vYnVpbGQtcG9wLXVwcyc7XG5pbXBvcnQgcG9wdWxhdGVNYWluQXJlYSBmcm9tICcuL3BvcHVsYXRlLW1haW4tYXJlYSc7XG5pbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUYXNrRG9tRWxlbWVudChwYXJlbnQsIHRhc2tzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrc1tpXS50aXRsZTtcbiAgICBjb25zdCB0YXNrRGV0YWlscyA9IHRhc2tzW2ldLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFza3NbaV0uZGF0ZTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrc1tpXS5wcmlvcml0eTtcbiAgICBjb25zdCB0YXNrSWQgPSB0YXNrc1tpXS5pZDtcbiAgICBsZXQgZmxhZ0NvbG9yO1xuXG4gICAgbGV0IHRhc2tFbGVtZW50ID0gZWxlbWVudEZyb21IdG1sKGBcbiAgICA8ZGl2IGNsYXNzPVwidGFzay1ib2R5XCIgZGF0YS1pZD1cIiR7dGFza0lkfVwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidGFzay1jaGVja1wiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidGFzay10aXRsZVwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj4ke3Rhc2tUaXRsZX08L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxzXCIgZGF0YS1pZD1cIiR7dGFza0lkfVwiPiR7dGFza0RldGFpbHN9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWR1ZS1kYXRlXCIgZGF0YS1pZD1cIiR7dGFza0lkfVwiPiR7dGFza0R1ZURhdGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGFnLWNvbnRhaW5lclwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZG90c1wiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj4mI3gyMkVFXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cFwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0XCIgZGF0YS1pZD1cIiR7dGFza0lkfVwiPkVkaXQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGVcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+RGVsZXRlPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuXG4gICAgc3dpdGNoICh0YXNrUHJpb3JpdHkpIHtcbiAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgIGZsYWdDb2xvciA9ICcjMjJkM2VlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICBmbGFnQ29sb3IgPSAnI2ZiOTIzYyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgIGZsYWdDb2xvciA9ICcjZWY0NDQ0JztcbiAgICB9XG5cbiAgICBsZXQgZmxhZyA9IGVsZW1lbnRGcm9tSHRtbChgXG4gICAgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwidXRmLThcIj8+PCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT5cbiAgICAgIDxzdmcgd2lkdGg9XCIyMnB4XCIgaGVpZ2h0PVwiMjJweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiJHtmbGFnQ29sb3J9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgPHBhdGggb3BhY2l0eT1cIjAuMTVcIiBkPVwiTTQgNEgyMEwxNSA5TDIwIDE0SDRWNFpcIi8+XG4gICAgICA8cGF0aCBkPVwiTTQgMjFWMTRNNCAxNFY0SDIwTDE1IDlMMjAgMTRINFpcIiBzdHJva2U9XCIke2ZsYWdDb2xvcn1cIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XG4gICAgPC9zdmc+XG4gIGApO1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgICBjb25zdCBmbGFnQ29udGFpbmVyID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmZsYWctY29udGFpbmVyJyk7XG4gICAgY29uc3QgdGFza0RvbUVsZW1lbnQgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ib2R5Jyk7XG4gICAgY29uc3QgZGV0YWlsc0VsZW1lbnQgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWxzJyk7XG4gICAgY29uc3QgZWRpdFRhc2sgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kb3RzJyk7XG4gICAgY29uc3QgcmVuYW1lQnV0dG9uID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQnKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyk7XG4gICAgY29uc3QgcG9wVXAgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwJyk7XG4gICAgY29uc3QgdGFza0NoZWNrID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY2hlY2snKTtcblxuICAgIHJlbmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ1aWxkVGFza0VkaXRJbnRlcmZhY2UpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRhc2spO1xuICAgIGVkaXRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcG9wVXAuY2xhc3NMaXN0LmFkZCgncG9wcGluZycpKTtcbiAgICB0YXNrQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgaGFuZGxlVGFza0NvbXBsZXRpb24odGFza0VsZW1lbnQpXG4gICAgKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQgIT09IGVkaXRUYXNrKSBwb3BVcC5jbGFzc0xpc3QucmVtb3ZlKCdwb3BwaW5nJyk7XG4gICAgfSk7XG5cbiAgICBmbGFnQ29udGFpbmVyLmFwcGVuZENoaWxkKGZsYWcpO1xuICAgIHRhc2tEb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIGRldGFpbHNFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctZGV0YWlscycpXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUYXNrQ29tcGxldGlvbih0YXNrRWxlbWVudCkge1xuICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpO1xuICBjb25zdCB0YXNrQ2hlY2sgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jaGVjaycpO1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG5cbiAgaWYgKHRhc2tDaGVjay5jaGVja2VkKSB7XG4gICAgdGFza1RpdGxlLmlubmVySFRNTCA9IGA8cz4ke3Rhc2tUaXRsZS50ZXh0Q29udGVudH08L3M+YDtcbiAgfSBlbHNlIHRhc2tUaXRsZS5pbm5lckhUTUwgPSB0YXNrVGl0bGUudGV4dENvbnRlbnQ7XG5cbiAgbGV0IHNlbGVjdGVkVGFzaztcbiAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5BbGxUYXNrcygpO1xuICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suaWQgPT09IHRhc2tDaGVjay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkgc2VsZWN0ZWRUYXNrID0gdGFzaztcbiAgfSk7XG5cbiAgc2VsZWN0ZWRUYXNrLnRvZ2dsZUNvbXBsZXRpb25TdGF0dXMoKTtcblxuICBmdW5jdGlvbiBkZWxldGVDb21wbGV0ZWRUYXNrKCkge1xuICAgIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0Lm1vdmVUb0NvbXBsZXRlZFRhc2tzKCk7XG4gICAgfSk7XG4gICAgcG9wdWxhdGVNYWluQXJlYSgpO1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShhbGxQcm9qZWN0cyk7XG4gIH1cblxuICBmdW5jdGlvbiB1bmRvVGFza0RlbGV0aW9uKCkge1xuICAgIGNvbnN0IHVuZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5kby1idXR0b24nKTtcbiAgICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXVuZG8nKTtcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG5cbiAgICB1bmRvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAvL3N3aXRjaCB0aGUgY29tcGxldGlvbiBzdGF0dXMgYmFjayB0byBmYWxzZVxuICAgICAgICBzZWxlY3RlZFRhc2sudG9nZ2xlQ29tcGxldGlvblN0YXR1cygpO1xuICAgICAgICBwcm9qZWN0Lm1vdmVUb1VuY29tcGxldGVkVGFza3Moc2VsZWN0ZWRUYXNrKTtcbiAgICAgICAgcG9wdWxhdGVNYWluQXJlYSgpO1xuICAgICAgICBwb3BVcC5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShhbGxQcm9qZWN0cyk7XG4gIH1cblxuICBzZXRUaW1lb3V0KGJ1aWxkVGFza0RlbGV0aW9uVW5kb1BvcFVwLCA3MDApO1xuICBzZXRUaW1lb3V0KGRlbGV0ZUNvbXBsZXRlZFRhc2ssIDcwMCk7XG4gIHNldFRpbWVvdXQodW5kb1Rhc2tEZWxldGlvbiwgNzAwKTtcbiAgc2V0VGltZW91dCh1cGRhdGVMb2NhbFN0b3JhZ2UoYWxsUHJvamVjdHMpLCA3MDApO1xufVxuIiwiaW1wb3J0IGVsZW1lbnRGcm9tSHRtbCBmcm9tICcuL21vZGFsLWZvcm0tYnVpbGQnO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCB7IGRpc3BsYXlBbGxUYXNrcyB9IGZyb20gJy4vbmF2LXV0aWxpdHknO1xuaW1wb3J0IHsgYnVpbGRDb25maXJtRGVsZXRlUHJvamVjdFBvcFVwIH0gZnJvbSAnLi9idWlsZC1wb3AtdXBzJztcbmltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEVkaXRJbnRlcmZhY2UoZSkge1xuICBjb25zdCBjbGlja2VkUHJvamVjdElkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcblxuICBsZXQgcHJvamVjdFRvRWRpdDtcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0cykge1xuICAgIGlmIChwcm9qZWN0LmlkID09PSBjbGlja2VkUHJvamVjdElkKSBwcm9qZWN0VG9FZGl0ID0gcHJvamVjdDtcbiAgfVxuXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RUb0VkaXQuZ2V0VGl0bGUoKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICBjb25zdCBlZGl0UHJvamVjdE1vZGFsID0gZWxlbWVudEZyb21IdG1sKGBcbiAgICA8ZGl2IGNsYXNzPVwiYWRkLW5ldy1tb2RhbCBwcm9qZWN0LWVkaXQtbW9kYWwtJHtjbGlja2VkUHJvamVjdElkfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICA8aDM+RWRpdCBQcm9qZWN0PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlIGNsb3NlLWVkaXQtcHJvamVjdC0ke2NsaWNrZWRQcm9qZWN0SWR9XCI+JiN4MjcxNTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtbmF2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9tb2RhbC1wcm9qZWN0LnBuZ1wiPlxuICAgICAgICAgICAgPGRpdj5Qcm9qZWN0PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cInByb2plY3QtZWRpdC1mb3JtLSR7Y2xpY2tlZFByb2plY3RJZH1cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidGl0bGUgZWRpdC10aXRsZS0ke2NsaWNrZWRQcm9qZWN0SWR9XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7cHJvamVjdFRpdGxlfVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJwcm9qZWN0LXN1Ym1pdFwiPlxuICAgICAgICAgICAgRWRpdCBQcm9qZWN0PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0TW9kYWwpO1xuICBjb25zdCBwcm9qZWN0RWRpdE1vZGFsID0gZWRpdFByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICAgIGAucHJvamVjdC1lZGl0LW1vZGFsLSR7Y2xpY2tlZFByb2plY3RJZH1gXG4gICk7XG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZWRpdFByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuY2xvc2UtZWRpdC1wcm9qZWN0LSR7Y2xpY2tlZFByb2plY3RJZH1gXG4gICk7XG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSBlZGl0UHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5wcm9qZWN0LWVkaXQtZm9ybS0ke2NsaWNrZWRQcm9qZWN0SWR9YFxuICApO1xuICBjb25zdCBlZGl0ZWRUaXRsZUlucHV0ID0gZWRpdFByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuZWRpdC10aXRsZS0ke2NsaWNrZWRQcm9qZWN0SWR9YFxuICApO1xuXG4gIHByb2plY3RFZGl0TW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDEpJztcblxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9qZWN0RWRpdE1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgwKSc7XG4gIH0pO1xuXG4gIHN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gZWRpdCBwcm9qZWN0IGluIGJ1c2luZXNzIGxvZ2ljXG4gICAgY29uc3QgZWRpdGVkVGl0bGUgPSBlZGl0ZWRUaXRsZUlucHV0LnZhbHVlO1xuICAgIHByb2plY3RUb0VkaXQuY2hhbmdlVGl0bGUoZWRpdGVkVGl0bGUpO1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShhbGxQcm9qZWN0cylcbiAgICAvL2VkaXQgcHJvamVjdCBpbiBET01cbiAgICBlZGl0UHJvamVjdE5hbWVGcm9tRG9tKGNsaWNrZWRQcm9qZWN0SWQsIGVkaXRlZFRpdGxlKTtcblxuICAgIHByb2plY3RFZGl0TW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDApJztcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgY29uc3QgY2xpY2tlZFByb2plY3RJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG5cbiAgYnVpbGRDb25maXJtRGVsZXRlUHJvamVjdFBvcFVwKCk7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXAtZGVsZXRlJyk7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpO1xuXG4gIGxldCBwcm9qZWN0VG9EZWxldGU7XG4gIGZvciAobGV0IHByb2plY3Qgb2YgYWxsUHJvamVjdHMpIHtcbiAgICBpZiAocHJvamVjdC5pZCA9PT0gY2xpY2tlZFByb2plY3RJZCkgcHJvamVjdFRvRGVsZXRlID0gcHJvamVjdDtcbiAgfVxuXG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdFRvRGVsZXRlLmdldFRpdGxlKCl9YFxuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVQcm9qZWN0QWZ0ZXJDb25maXJtKTtcblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0QWZ0ZXJDb25maXJtKCkge1xuICAgIC8vcmVtb3ZlIHByb2plY3QgZnJvbSBidXNpbmVzcyBsb2dpY1xuICAgIHByb2plY3RNYW5hZ2VyLnJlbW92ZVByb2plY3QocHJvamVjdFRvRGVsZXRlKTtcbiAgICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gRE9NXG4gICAgcmVtb3ZlUHJvamVjdEZyb21Eb20oY2xpY2tlZFByb2plY3RJZCk7XG4gICAgZGlzcGxheUFsbFRhc2tzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3ROYW1lRnJvbURvbShpZCwgZWRpdFZhbHVlKSB7XG4gIGNvbnN0IHByb2plY3REb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLnByb2plY3RbZGF0YS1pZD1cIiR7aWR9XCJdID4gZGl2YFxuICApO1xuICBwcm9qZWN0RG9tRWxlbWVudC50ZXh0Q29udGVudCA9IGVkaXRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEZyb21Eb20oaWQpIHtcbiAgY29uc3QgcHJvamVjdERvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAucHJvamVjdC1jb250YWluZXJbZGF0YS1pZD1cIiR7aWR9XCJdYFxuICApO1xuICBwcm9qZWN0RG9tRWxlbWVudC5yZW1vdmUoKTtcbn1cbiIsImltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgZWxlbWVudEZyb21IdG1sIGZyb20gJy4vbW9kYWwtZm9ybS1idWlsZCc7XG5pbXBvcnQgcG9wdWxhdGVNYWluQXJlYSBmcm9tICcuL3BvcHVsYXRlLW1haW4tYXJlYSc7XG5pbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUYXNrRWRpdEludGVyZmFjZShlKSB7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgY29uc3QgY2xpY2tlZFRhc2tJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCk7XG4gIGxldCB0YXNrVG9FZGl0O1xuICBmb3IgKGxldCB0YXNrIG9mIGFsbFRhc2tzKSB7XG4gICAgaWYgKHRhc2suaWQgPT09IGNsaWNrZWRUYXNrSWQpIHRhc2tUb0VkaXQgPSB0YXNrO1xuICB9XG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgdGFza1RpdGxlID0gdGFza1RvRWRpdC50aXRsZTtcbiAgY29uc3QgdGFza0RldGFpbHMgPSB0YXNrVG9FZGl0LmRlc2NyaXB0aW9uO1xuICBjb25zdCB0YXNrRGF0ZSA9IHRhc2tUb0VkaXQuZGF0ZTtcblxuICBjb25zdCBlZGl0VGFza01vZGFsID0gZWxlbWVudEZyb21IdG1sKGBcbiAgICA8ZGl2IGNsYXNzPVwiYWRkLW5ldy1tb2RhbCB0YXNrLWVkaXQtbW9kYWxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgPGgzPkVkaXQgVGFzazwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZSBjbG9zZS1lZGl0LXRhc2tcIj4mI3gyNzE1PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1uYXZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL21vZGFsLXRhc2sucG5nXCI+XG4gICAgICAgICAgICA8ZGl2PlRhc2s8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwidGFzay1lZGl0LWZvcm1cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGU6IFBheSBiaWxsc1wiXG4gICAgICAgICAgICBjbGFzcz1cImVkaXQtdGl0bGVcIiB2YWx1ZT1cIiR7dGFza1RpdGxlfVwiIHJlcXVpcmVkLz5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIkRldGFpbHM6IGUuZyBpbnRlcm5ldCwgcGhvbmUsIHJlbnQuXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZWRpdC1kZXRhaWxzXCI+JHt0YXNrRGV0YWlsc308L3RleHRhcmVhPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+RHVlIERhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj48aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIlxuICAgICAgICAgICAgICBjbGFzcz1cImVkaXQtZGF0ZVwiIHZhbHVlPVwiJHt0YXNrRGF0ZX1cIi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktcmFkaW9cIj5cbiAgICAgICAgICAgICAgPHNwYW4+UHJpb3JpdHk6PC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW8tYnV0dG9uIHJhZGlvLWxvd1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImxvd1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibG93XCIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb3dcIj5MT1c8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvLWJ1dHRvbiByYWRpby1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJtZWRpdW1cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cIm1lZGl1bVwiLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVkaXVtXCI+TUVESVVNPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpby1idXR0b24gcmFkaW8taGlnaFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImhpZ2hcIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImhpZ2hcIi8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImhpZ2hcIj5ISUdIPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwidGFzayB0YXNrLXN1Ym1pdFwiPkVkaXQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGVkaXRUYXNrTW9kYWwpO1xuXG4gIChmdW5jdGlvbiBhZGRUYXNrUHJpb3JpdHkoKSB7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGFza1RvRWRpdC5wcmlvcml0eTtcbiAgICBjb25zdCByYWRpb0J1dHRvbnMgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuICAgIGNvbnN0IGxvd1JhZGlvQnV0dG9uID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImxvd1wiXScpO1xuICAgIGNvbnN0IG1lZGl1bVJhZGlvQnV0dG9uID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cIm1lZGl1bVwiXScpO1xuICAgIGNvbnN0IGhpZ2hSYWRpb0J1dHRvbiA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJoaWdoXCJdJyk7XG5cbiAgICByYWRpb0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJykpO1xuXG4gICAgc3dpdGNoICh0YXNrUHJpb3JpdHkpIHtcbiAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgIGxvd1JhZGlvQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICBtZWRpdW1SYWRpb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgIGhpZ2hSYWRpb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSkoKTtcblxuICBjb25zdCB0YXNrRWRpdE1vZGFsID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0LW1vZGFsJyk7XG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZWRpdC10YXNrJyk7XG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXQtZm9ybScpO1xuICBjb25zdCBlZGl0ZWRUaXRsZUlucHV0ID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10aXRsZScpO1xuICBjb25zdCBlZGl0ZWREZXRhaWxzSW5wdXQgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWRldGFpbHMnKTtcbiAgY29uc3QgZWRpdGVkRGF0ZUlucHV0ID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1kYXRlJyk7XG5cbiAgdGFza0VkaXRNb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMSknO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YXNrRWRpdE1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgwKSc7XG4gIH0pO1xuXG4gIHN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gZWRpdCB0YXNrIGluIGJ1c2luZXNzIGxvZ2ljXG4gICAgY29uc3QgZWRpdGVkVGl0bGUgPSBlZGl0ZWRUaXRsZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGVkaXRlZERldGFpbHMgPSBlZGl0ZWREZXRhaWxzSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZWRpdGVkRGF0ZSA9IGVkaXRlZERhdGVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCByYWRpb0J1dHRvbnMgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuXG4gICAgdGFza1RvRWRpdC5jaGFuZ2VUaXRsZShlZGl0ZWRUaXRsZSk7XG4gICAgdGFza1RvRWRpdC5hZGREZXRhaWxzKGVkaXRlZERldGFpbHMpO1xuICAgIHRhc2tUb0VkaXQuYWRkRHVlRGF0ZShlZGl0ZWREYXRlKTtcbiAgICByYWRpb0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoYnV0dG9uLmNoZWNrZWQpIHRhc2tUb0VkaXQucHJpb3JpdHkgPSBidXR0b24udmFsdWU7XG4gICAgfSk7XG5cbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoYWxsUHJvamVjdHMpXG4gICAgLy9lZGl0IHByb2plY3QgaW4gRE9NXG4gICAgcG9wdWxhdGVNYWluQXJlYSgpO1xuXG4gICAgdGFza0VkaXRNb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMCknO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2soZSkge1xuICBjb25zdCBjbGlja2VkVGFza0lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuQWxsVGFza3MoKTtcbiAgbGV0IHRhc2tUb0RlbGV0ZTtcbiAgZm9yIChsZXQgdGFzayBvZiBhbGxUYXNrcykge1xuICAgIGlmICh0YXNrLmlkID09PSBjbGlja2VkVGFza0lkKSB0YXNrVG9EZWxldGUgPSB0YXNrO1xuICB9XG4gIC8vcmVtb3ZlIHByb2plY3QgZnJvbSBidXNpbmVzcyBsb2dpY1xuICB0YXNrVG9EZWxldGUuY29tcGxldGlvblN0YXR1cyA9IHRydWU7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4gcHJvamVjdC5tb3ZlVG9Db21wbGV0ZWRUYXNrcygpKTtcbiAgXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZShhbGxQcm9qZWN0cylcbiAgLy9yZW1vdmUgcHJvamVjdCBmcm9tIERPTVxuICBwb3B1bGF0ZU1haW5BcmVhKCk7XG59XG4iLCJpbXBvcnQgeyBwb3BNb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gJy4vbW9kYWwtbWFuaXB1bGF0aW9uJztcbmltcG9ydCB7IGJ1aWxkUHJvamVjdERvbUVsZW1lbnQgfSBmcm9tICcuL2RvbS1kaXNwbGF5LXByb2plY3QnO1xuaW1wb3J0IHsgYnVpbGRMb2NhbFN0b3JhZ2VOZXdVc2VyIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlJztcbmltcG9ydCB7XG4gIGRpc3BsYXlBbGxUYXNrcyxcbiAgZGlzcGxheUltcG9ydGFudFRhc2tzLFxuICBkaXNwbGF5VG9kYXlUYXNrcyxcbiAgZGlzcGxheVdlZWtUYXNrcyxcbn0gZnJvbSAnLi9uYXYtdXRpbGl0eSc7XG5cbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3Jyk7XG5jb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWhlYWRlciAuY2xvc2UnKTtcbmNvbnN0IHByb2plY3RzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1hcmVhJyk7XG5jb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXknKTtcbmNvbnN0IG5leHRXZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldmVuLWRheXMnKTtcbmNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbXBvcnRhbnQnKTtcblxuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcG9wTW9kYWwoKSk7XG5jbG9zZU1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VNb2RhbCgpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzcygpIHtcbiAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcbiAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG59XG5cbmFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkaXNwbGF5QWxsVGFza3MoKTtcbiAgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gIGFsbFRhc2tzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSk7XG5cbnRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkaXNwbGF5VG9kYXlUYXNrcygpO1xuICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgdG9kYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59KTtcblxubmV4dFdlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRpc3BsYXlXZWVrVGFza3MoKTtcbiAgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gIG5leHRXZWVrLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSk7XG5cbmltcG9ydGFudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZGlzcGxheUltcG9ydGFudFRhc2tzKCk7XG4gIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzcygpO1xuICBpbXBvcnRhbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59KTtcblxuYnVpbGRMb2NhbFN0b3JhZ2VOZXdVc2VyKCk7XG5idWlsZFByb2plY3REb21FbGVtZW50KHByb2plY3RzQXJlYSk7XG5kaXNwbGF5QWxsVGFza3MoKTtcbiIsImltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbiAgXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKGRiKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYicsIEpTT04uc3RyaW5naWZ5KGRiKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZUxvY2FsU3RvcmFnZShkYikge1xuICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBwYXJzZWRMb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRiKSk7XG4gICAgLy8gYWRkaW5nIGJhY2sgYWxsIG9mIHRoZSBtZXRob2RzIG9mIHRoZSBQcm9qZWN0IGNsYXNzIGluIGl0J3MgcHJvdG90eXBlIHRvIGVhY2ggaW5zdGFuY2VcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHBhcnNlZExvY2FsU3RvcmFnZSlcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihwcm9qZWN0LCBQcm9qZWN0LnByb3RvdHlwZSk7XG4gICAgLy8gYWRkaW5nIGJhY2sgYWxsIG9mIHRoZSBtZXRob2RzIG9mIHRoZSBUYXNrIGNsYXNzIGluIGl0J3MgcHJvdG90eXBlIHRvIGVhY2ggaW5zdGFuY2VcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHBhcnNlZExvY2FsU3RvcmFnZSkge1xuICAgICAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKCk7XG4gICAgICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiBPYmplY3Quc2V0UHJvdG90eXBlT2YodGFzaywgVGFzay5wcm90b3R5cGUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZExvY2FsU3RvcmFnZTtcbiAgfSBlbHNlIHJldHVybiBbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxTdG9yYWdlTmV3VXNlcigpIHtcbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGInKSkge1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ1lvdXIgRmlyc3QgUHJvamVjdCcpO1xuICAgIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWxlbWVudEZyb21IdG1sKGh0bWwpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sLnRyaW0oKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuY29uc3QgdGFza0Zvcm0gPSBlbGVtZW50RnJvbUh0bWwoYFxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZTogUGF5IGJpbGxzXCIgcmVxdWlyZWQvPlxuICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj5cbiAgICA8bGFiZWwgZm9yPVwicHJvamVjdFwiPlByb2plY3QgdG8gYXNzaWduIHRvOiA8L2xhYmVsPlxuICAgIDxzZWxlY3QgbmFtZT1cIlwiIGlkPVwicHJvamVjdFwiPjwvc2VsZWN0PlxuICA8L2Rpdj5cbiAgPHRleHRhcmVhIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiRGV0YWlsczogZS5nIGludGVybmV0LCBwaG9uZSwgcmVudC5cIj48L3RleHRhcmVhPlxuICA8ZGl2IGNsYXNzPVwiZGF0ZS1jb250YWluZXJcIj5cbiAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+XG4gICAgPGRpdiBjbGFzcz1cImRhdGVcIj48aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiByZXF1aXJlZC8+PC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktcmFkaW9cIj5cbiAgICA8c3Bhbj5Qcmlvcml0eTo8L3NwYW4+XG4gICAgPGRpdiBjbGFzcz1cInJhZGlvLWJ1dHRvbiByYWRpby1sb3dcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImxvd1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibG93XCIgY2hlY2tlZC8+XG4gICAgICA8bGFiZWwgZm9yPVwibG93XCI+TE9XPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmFkaW8tYnV0dG9uIHJhZGlvLW1lZGl1bVwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwibWVkaXVtXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJtZWRpdW1cIi8+XG4gICAgICA8bGFiZWwgZm9yPVwibWVkaXVtXCI+TUVESVVNPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmFkaW8tYnV0dG9uIHJhZGlvLWhpZ2hcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImhpZ2hcIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImhpZ2hcIi8+XG4gICAgICA8bGFiZWwgZm9yPVwiaGlnaFwiPkhJR0g8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwidGFzayB0YXNrLXN1Ym1pdFwiPkFkZCBUYXNrPC9idXR0b24+XG4gIDwvZGl2PlxuYCk7XG5cbmNvbnN0IHByb2plY3RGb3JtID0gZWxlbWVudEZyb21IdG1sKGBcbiAgPGlucHV0IGNsYXNzPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGl0bGU6IEhvdXNlIFJlbm92YXRpb25cIiByZXF1aXJlZD5cbiAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJwcm9qZWN0LXN1Ym1pdFwiPkNyZWF0ZSBQcm9qZWN0PC9idXR0b24+XG5gKTtcblxuZXhwb3J0IHsgdGFza0Zvcm0sIHByb2plY3RGb3JtIH07XG4iLCJpbXBvcnQgeyBidWlsZFByb2plY3REb21FbGVtZW50IH0gZnJvbSAnLi9kb20tZGlzcGxheS1wcm9qZWN0JztcbmltcG9ydCB7IHRhc2tGb3JtLCBwcm9qZWN0Rm9ybSB9IGZyb20gJy4vbW9kYWwtZm9ybS1idWlsZCc7XG5pbXBvcnQgeyBnZXREYXRhRnJvbUZvcm1zIH0gZnJvbSAnLi9kYXRhLW1hbmlwdWxhdGlvbic7XG5pbXBvcnQgcG9wdWxhdGVNYWluQXJlYSBmcm9tICcuL3BvcHVsYXRlLW1haW4tYXJlYSc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuZXhwb3J0IHsgcG9wTW9kYWwsIGNsb3NlTW9kYWwgfTtcblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy1tb2RhbCcpO1xuXG5mdW5jdGlvbiB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3NGcm9tTW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkLW5ldy1tb2RhbCBkaXYnKTtcbiAgbW9kYWxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUJsdXIobW9kYWwpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc29sZS5sb2cobW9kYWwpXG4gIC8vY2hlY2sgaWYgJ3BvcHBpbmcnIGNsYXNzIGluIG1vZGFsOyBtZWFucyB3ZSBhcmUgb3BlbmluZyBtb2RhbFxuICBpZiAobW9kYWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmluY2x1ZGVzKCdwb3BwaW5nJykpIHtcbiAgICBoZWFkZXIuc3R5bGUuY3NzVGV4dCA9ICdmaWx0ZXI6IGJsdXIoM3B4KSc7XG4gICAgY29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2ZpbHRlcjogYmx1cigzcHgpJztcbiAgfSBlbHNlIHtcbiAgICBoZWFkZXIuc3R5bGUuY3NzVGV4dCA9ICdmaWx0ZXI6IGJsdXIoMHB4KSc7XG4gICAgY29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2ZpbHRlcjogYmx1cigwcHgpJztcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24oKSB7XG4gIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duIHNlbGVjdCcpO1xuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIGNvbnN0IG9wdGlvbnMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSk7XG5cbiAgaWYgKGRyb3Bkb3duID09PSBudWxsKSByZXR1cm47XG5cbiAgZHJvcGRvd24uaW5uZXJIVE1MID0gJyc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgb3B0ID0gb3B0aW9uc1tpXTtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGVsLnRleHRDb250ZW50ID0gb3B0O1xuICAgIGVsLnZhbHVlID0gb3B0O1xuICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGVsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3BNb2RhbCgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3BvcHBpbmcnKTtcbiAgbW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDEpJztcbiAgdG9nZ2xlQmx1cihtb2RhbCk7XG4gIGZvcm0uaW5uZXJIVE1MID0gJyc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICAvL2FkZGluZyAndGFzaycgY2xhc3MgaW4gb3JkZXIgdG8gZGlmZmVyZW50aWF0ZSB0aGUgZm9ybSB0eXBlICh0YXNrIG9yIHByb2plY3QpXG4gIGZvcm0uY2xhc3NOYW1lID0gJyc7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24oKTtcbiAgc3dpdGNoVG9UYXNrKCk7XG4gIHN3aXRjaFRvUHJvamVjdCgpO1xuICB0YXNrT3JQcm9qZWN0U3VibWl0KCk7XG5cbiAgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzRnJvbU1vZGFsKCk7XG4gIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgbW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDApJztcbiAgdG9nZ2xlQmx1cihtb2RhbCk7XG4gIC8vcmVwbGFjaW5nIGZvcm0gbm9kZSB3aXRoIGl0J3MgY2xvbmUgc28gdGhhdCB3ZSByZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICBmb3JtLnJlcGxhY2VXaXRoKGZvcm0uY2xvbmVOb2RlKHRydWUpKTtcbiAgZm9ybS5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUb1Rhc2soKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbmF2IC50YXNrJyk7XG4gIHRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZm9ybS5pbm5lckhUTUwgPSAnJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICcnO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIHBvcHVsYXRlUHJvamVjdHNEcm9wZG93bigpO1xuICAgIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzc0Zyb21Nb2RhbCgpO1xuICAgIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUb1Byb2plY3QoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbmF2IC5wcm9qZWN0Jyk7XG4gIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZm9ybS5pbm5lckhUTUwgPSAnJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICcnO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzc0Zyb21Nb2RhbCgpO1xuICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0YXNrT3JQcm9qZWN0U3VibWl0KCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZ2V0RGF0YUZyb21Gb3JtcyhlKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgaGFuZGxlRm9ybVN1Ym1pc3Npb24oKTtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVGb3JtU3VibWlzc2lvbigpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgcHJvamVjdHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWFyZWEnKTtcblxuICBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuaW5jbHVkZXMoJ3Rhc2snKSkge1xuICAgIHBvcHVsYXRlTWFpbkFyZWEoKTtcbiAgfSBlbHNlIHtcbiAgICBidWlsZFByb2plY3REb21FbGVtZW50KHByb2plY3RzQXJlYSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGJ1aWxkVGFza0RvbUVsZW1lbnQgfSBmcm9tICcuL2RvbS1kaXNwbGF5LXRhc2snO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCBpc1RvZGF5IGZyb20gJ2RhdGUtZm5zL2lzVG9kYXknO1xuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkRGF5cyc7XG5pbXBvcnQgaXNCZWZvcmUgZnJvbSAnZGF0ZS1mbnMvaXNCZWZvcmUnO1xuXG5jb25zdCBtYWluQXJlYVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJlYS10aXRsZScpO1xuY29uc3QgbWFpbkFyZWFDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJlYS1jb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGhhbmRsZU5vVGFza3ModGFza0xpc3QpIHtcbiAgaWYgKHRhc2tMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIG1haW5BcmVhQ29udGVudC50ZXh0Q29udGVudCA9ICdZYXkhIE5vIFRhc2tzISc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcbiAgY29uc3QgYWxsVGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxuICBtYWluQXJlYUNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIG1haW5BcmVhVGl0bGUudGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcbiAgYWxsVGFza3NCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCkpO1xuICBoYW5kbGVOb1Rhc2tzKHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZGF5VGFza3MoKSB7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG5cbiAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5BbGxUYXNrcygpO1xuICBsZXQgdG9kYXlUYXNrcyA9IFtdO1xuXG4gIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZGF0ZSk7XG4gICAgaWYgKGlzVG9kYXkodGFza0RhdGUpKSB0b2RheVRhc2tzLnB1c2godGFzayk7XG4gIH0pO1xuXG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCB0b2RheVRhc2tzKTtcbiAgaGFuZGxlTm9UYXNrcyh0b2RheVRhc2tzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVdlZWtUYXNrcygpIHtcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBtYWluQXJlYVRpdGxlLnRleHRDb250ZW50ID0gJ05leHQgNyBEYXlzJztcblxuICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCk7XG4gIGxldCBzZXZlbkRheXNUYXNrcyA9IFtdO1xuXG4gIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kYXRlKTtcbiAgICBjb25zdCBvbmVXZWVrTGF0ZXJEYXRlID0gYWRkRGF5cyh0b2RheURhdGUsIDcpO1xuICAgIGlmIChpc0JlZm9yZSh0YXNrRGF0ZSwgb25lV2Vla0xhdGVyRGF0ZSkpIHNldmVuRGF5c1Rhc2tzLnB1c2godGFzayk7XG4gIH0pO1xuXG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCBzZXZlbkRheXNUYXNrcyk7XG4gIGhhbmRsZU5vVGFza3Moc2V2ZW5EYXlzVGFza3MpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SW1wb3J0YW50VGFza3MoKSB7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuXG4gIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuQWxsVGFza3MoKTtcbiAgbGV0IGltcG9ydGFudFRhc2tzID0gW107XG5cbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgIGltcG9ydGFudFRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICB9KTtcblxuICBidWlsZFRhc2tEb21FbGVtZW50KG1haW5BcmVhQ29udGVudCwgaW1wb3J0YW50VGFza3MpO1xuICBoYW5kbGVOb1Rhc2tzKGltcG9ydGFudFRhc2tzKVxufVxuIiwiaW1wb3J0IHtcbiAgZGlzcGxheUFsbFRhc2tzLFxuICBkaXNwbGF5SW1wb3J0YW50VGFza3MsXG4gIGRpc3BsYXlUb2RheVRhc2tzLFxuICBkaXNwbGF5V2Vla1Rhc2tzLFxufSBmcm9tICcuL25hdi11dGlsaXR5JztcbmltcG9ydCB7IHJlbmRlclByb2plY3RUYXNrcyB9IGZyb20gJy4vZG9tLWRpc3BsYXktcHJvamVjdCc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuXG4vLyB1c2luZyB0aGlzIHRvIGhlbHAgcG9wdWxhdGUgdGhlIG1haW4gYXJlYSB3aXRoIHRoZSBhZGVxdWF0ZSBmaWx0ZXJlZCBjb250ZW50XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZU1haW5BcmVhKCkge1xuICBjb25zdCBuYXZTZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lID4gZGl2Jyk7XG4gIGNvbnN0IHByb2plY3REb21FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy5wcm9qZWN0cy1hcmVhID4gZGl2ID4gZGl2J1xuICApO1xuICBjb25zdCBmdW5jdGlvblRvUnVuRGljdGlvbmFyeSA9IHtcbiAgICAndGFza3MgYWN0aXZlJzogZGlzcGxheUFsbFRhc2tzLFxuICAgICd0b2RheSBhY3RpdmUnOiBkaXNwbGF5VG9kYXlUYXNrcyxcbiAgICAnc2V2ZW4tZGF5cyBhY3RpdmUnOiBkaXNwbGF5V2Vla1Rhc2tzLFxuICAgICdpbXBvcnRhbnQgYWN0aXZlJzogZGlzcGxheUltcG9ydGFudFRhc2tzLFxuICB9O1xuXG4gIGZvciAobGV0IHNlY3Rpb24gb2YgbmF2U2VjdGlvbnMpIHtcbiAgICBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgIGZ1bmN0aW9uVG9SdW5EaWN0aW9uYXJ5W2NsYXNzTGlzdF0oKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdERvbUVsZW1lbnRzKSB7XG4gICAgaWYgKHByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgICAgIGxldCBwcm9qZWN0VG9EaXNwbGF5O1xuICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0cykge1xuICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gcHJvamVjdElEKSBwcm9qZWN0VG9EaXNwbGF5ID0gcHJvamVjdDtcbiAgICAgIH1cbiAgICAgIHJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0VG9EaXNwbGF5KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vaWYgbm8gbmF2IGJ1dHRvbiBvciBwcm9qZWN0IGlzIHNlbGVjdGVkLCBzd2l0Y2ggdG8gQWxsIFRhc2tzICd0YWInXG4gIGRpc3BsYXlBbGxUYXNrcygpO1xufVxuIiwiaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlLCByZXRyaWV2ZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHByb2plY3RNYW5hZ2VyKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IHJldHJpZXZlTG9jYWxTdG9yYWdlKCdkYicpXG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgZm9yIChsZXQgaXRlcmF0ZWRQcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICBjb25zdCBwcm9qZWN0c1RpdGxlID0gW11cbiAgICAgIHByb2plY3RzVGl0bGUucHVzaChpdGVyYXRlZFByb2plY3QudGl0bGUpXG4gICAgICBpZiAocHJvamVjdHNUaXRsZS5pbmNsdWRlcyhwcm9qZWN0LnRpdGxlKSkgcmV0dXJuXG4gICAgfVxuICAgIHByb2plY3RzLnB1c2gocHJvamVjdClcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdHMpXG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3RzW2ldLnRpdGxlID09PSBwcm9qZWN0LnRpdGxlKSB7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbiAgfTtcblxuICBjb25zdCByZXR1cm5BbGxUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBhbGxUYXNrcyA9IFtdO1xuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgIGFsbFRhc2tzLnB1c2goLi4ucHJvamVjdC5nZXRUYXNrcygpKVxuICAgIH1cblxuICAgIHJldHVybiBhbGxUYXNrc1xuICB9XG5cbiAgY29uc3QgcmV0dXJuUHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcblxuICByZXR1cm4geyBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCByZXR1cm5Qcm9qZWN0cyAsIHJldHVybkFsbFRhc2tzfTtcbn0pKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMuY29tcGxldGVkVGFza3MgPSBbXTtcbiAgICB0aGlzLmdlbmVyYXRlSWQoKTtcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgfVxuXG4gIGNoYW5nZVRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgfVxuXG4gIGdlbmVyYXRlSWQoKSB7XG4gICAgdGhpcy5pZCA9IGBwcmotaWQke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpfWA7XG4gIH1cblxuICBtb3ZlVG9Db21wbGV0ZWRUYXNrcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnRhc2tzW2ldLmNvbXBsZXRpb25TdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRUYXNrcy5wdXNoKHRoaXMudGFza3NbaV0pO1xuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3ZlVG9VbmNvbXBsZXRlZFRhc2tzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb21wbGV0ZWRUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy50YXNrcy5wdXNoKHRoaXMuY29tcGxldGVkVGFza3NbaV0pO1xuICAgICAgdGhpcy5jb21wbGV0ZWRUYXNrcyA9IFtdO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY29tcGxldGlvblN0YXR1cyA9IGZhbHNlO1xuICAgIHRoaXMuZGVzY3JpcHRpb247XG4gICAgdGhpcy5kYXRlO1xuICAgIHRoaXMucHJpb3JpdHk7XG4gICAgdGhpcy5nZW5lcmF0ZUlkKCk7XG4gIH1cblxuICBjaGFuZ2VUaXRsZSh2YWx1ZSkge1xuICAgIHRoaXMudGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGFkZERldGFpbHModmFsdWUpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cblxuICBhZGREdWVEYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5kYXRlID0gdmFsdWU7XG4gIH1cblxuICBhZGRQcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuXG4gIHRvZ2dsZUNvbXBsZXRpb25TdGF0dXMoKSB7XG4gICAgdGhpcy5jb21wbGV0aW9uU3RhdHVzID0gIXRoaXMuY29tcGxldGlvblN0YXR1cztcbiAgfVxuXG4gIGdlbmVyYXRlSWQoKSB7XG4gICAgdGhpcy5pZCA9IGB0c2staWQke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpfWA7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=