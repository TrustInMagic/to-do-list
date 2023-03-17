/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Exo2-VariableFont_wght.ttf */ "./src/assets/Exo2-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --header-content-light: #f3f4f6;\n  --nav-light: #ffffff;\n  --brand-green: #059669;\n  --font-color: #44403c;\n  --font-color-light: #f1f5f9;\n  --hover-nav-color: #e7e5e4;\n  --nav-active: #a7f3d0;\n  --add-button-color: #22d3ee;\n  --pop-up-color: #e4e4e7;\n  --pop-up-hover: #d4d4d8;\n  --low-radio: #22d3ee;\n  --med-radio: #fb923c;\n  --high-radio: #ef4444;\n  --pop-up-header: #fca5a5;\n}\n\nbody {\n  min-height: 100vh;\n  color: var(--font-color);\n  font-family: sono, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n* .active {\n  background-color: var(--nav-active) !important;\n}\n\n@font-face {\n  font-family: sono;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n/* header */\n\n.header {\n  background-color: var(--header-content-light);\n  height: 80px;\n  border-bottom: var(--brand-green) solid 2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n\nh1 {\n  font-size: 2.7rem;\n}\n\n.header img {\n  height: 35px;\n}\n\n.header span {\n  color: var(--brand-green);\n}\n\n.content {\n  display: flex;\n  min-height: calc(100vh - 80px);\n}\n\n/* nav */\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  width: min(20%, 350px);\n  min-width: 200px;\n  gap: 40px;\n  padding: 20px;\n  background-color: var(--nav-light);\n}\n\n.nav h2 {\n  border-bottom: var(--font-color) solid 2px;\n}\n\n.nav button {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  margin-top: auto;\n  font-size: 2rem;\n  cursor: pointer;\n  background-color: var(--add-button-color);\n  border: none;\n  box-shadow: 2px 2px 5px var(--font-color);\n  transition: all 0.3s;\n  color: var(--nav-light);\n}\n\n.nav button:active {\n  transform: scale(0.95);\n}\n\n.nav button:hover {\n  transform: rotate(90deg);\n  transition: all 0.3s;\n}\n\n.nav img {\n  height: 25px;\n  width: 25px;\n}\n\n.home {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.home > div {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.2rem;\n  font-weight: 500;\n  cursor: pointer;\n  border-radius: 10px;\n  height: 35px;\n}\n\n.home > div:hover {\n  background-color: var(--hover-nav-color);\n}\n\nh2 {\n  font-size: 1.7rem;\n  font-weight: 900;\n}\n\n/* modal */\n\n.add-new-modal {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 400px;\n  max-width: 700px;\n  box-shadow: 2px 2px 30px;\n  border-radius: 10px !important;\n  background-color: var(--header-content-light);\n  transform: scale(0);\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 10px;\n  background-color: var(--brand-green);\n  font-size: 1.5rem;\n  color: var(--font-color-light);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.close {\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.close:hover {\n  transform: rotate(90deg);\n  transition: all 0.3s;\n}\n\n.modal-content {\n  display: flex;\n  flex: 1;\n}\n\n/* modal nav */\n\n.modal-nav {\n  background-color: var(--nav-light);\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 10px;\n  font-weight: 600;\n  border-bottom-left-radius: 10px;\n}\n\n.modal-content img {\n  height: 60px;\n}\n\n.modal-nav > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  border-radius: 10px;\n  height: 70px;\n}\n\n.modal-nav > div:hover {\n  background-color: var(--hover-nav-color);\n}\n\n.add-new-modal form {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n/* modal form */\n\n.add-new-modal form > div {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 10px;\n  padding: 20px;\n}\n\n.task-edit-form > div {\n  justify-content: space-between;\n}\n\nform > div > div {\n  display: flex;\n  gap: 10px;\n}\n\n/* modal input */\n\n.add-new-modal input,\n.add-new-modal textarea {\n  font-family: inherit;\n  font-size: 100%;\n  background-color: inherit;\n  resize: none;\n}\n\n.add-new-modal input[type='text'],\ntextarea {\n  appearance: none;\n  outline: none;\n  border: none;\n}\n\ninput[type='date'] {\n  border-radius: 5px;\n  padding: 2px 5px;\n  border: var(--brand-green) 1px solid;\n  color: var(--brand-green);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-transform: uppercase;\n}\n\n.date-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.priority-radio {\n  display: flex;\n  align-items: center;\n}\n\nform button {\n  margin-left: auto;\n  margin-top: auto;\n  height: 30px;\n  width: 120px;\n  border: var(--brand-green) solid 1px;\n  box-shadow: 2px 2px 5px;\n  color: var(--brand-green);\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n}\n\nform button:hover {\n  background-color: var(--brand-green);\n  color: white;\n  transition: 0.3s;\n}\n\nform select {\n  border-radius: 4px;\n  background-color: var(--hover-nav-color);\n  height: 20px;\n}\n\n/* modal radio-buttons */\n\n.radio-button {\n  float: left;\n  margin: 0 5px 0 0;\n  width: 80px;\n  height: 25px;\n  position: relative;\n  border-radius: 5px;\n}\n\n.radio-low {\n  border: var(--low-radio) solid 2px;\n  color: var(--low-radio);\n}\n\n.radio-low:hover {\n  background-color: var(--low-radio);\n  color: white;\n  transition: 0.3s;\n}\n\n.radio-medium {\n  border: var(--med-radio) solid 2px;\n  color: var(--med-radio);\n}\n\n.radio-medium:hover {\n  background-color: var(--med-radio);\n  color: white;\n  transition: 0.3s;\n}\n\n.radio-high {\n  border: var(--high-radio) solid 2px;\n  color: var(--high-radio);\n}\n\n.radio-high:hover {\n  background-color: var(--high-radio);\n  color: white;\n  transition: 0.3s;\n}\n\n.radio-button label,\n.radio-button input {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n}\n\n.radio-button input[type='radio'] {\n  opacity: 0.011;\n  z-index: 100;\n}\n\n.radio-low input[type='radio']:checked + label {\n  background-color: var(--low-radio);\n  color: white;\n}\n\n.radio-medium input[type='radio']:checked + label {\n  background-color: var(--med-radio);\n  color: white;\n}\n\n.radio-high input[type='radio']:checked + label {\n  background-color: #ef4444;\n  color: white;\n}\n\n.radio-button label {\n  cursor: pointer;\n  z-index: 90;\n  line-height: 1.8em;\n}\n\n/* project element*/\n\n.projects-area {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.projects-area .project {\n  display: flex;\n  gap: 5px;\n  width: 100%;\n  height: 30px;\n  font-size: 1.1rem;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n.project-container {\n  border-radius: 10px;\n  width: 100%;\n  padding: 3px;\n}\n\n.dots {\n  margin-left: auto;\n}\n\n.project-container:hover {\n  background-color: var(--hover-nav-color);\n}\n\n/* main-area */\n\n.main-area {\n  background-color: var(--header-content-light);\n  min-height: calc(100vh - 80px);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main-area-title {\n  background-color: var(--brand-green);\n  margin-top: 20px;\n  width: 75%;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--font-color-light);\n  font-size: 3rem;\n  font-weight: 600;\n}\n\n.main-area-content {\n  display: flex;\n  flex-direction: column;\n  margin-top: 30px;\n  background-color: var(--header-content-light);\n  width: 75%;\n  height: 100%;\n  gap: 10px;\n  align-items: center;\n  font-size: 1.4rem;\n  font-weight: 500;\n}\n\n/* task element */\n\n.main-area-content > div {\n  width: 100%;\n}\n\n.task-body {\n  width: 100%;\n  border-radius: 8px;\n  padding: 10px 10px;\n  display: grid;\n  grid-template-columns: 0.2fr 3fr 0.8fr;\n  align-items: center;\n  background: linear-gradient(#ffffff, #d7dde8);\n  box-shadow: 2px 2px 5px;\n  font-size: 1rem;\n}\n\n.task-body:hover {\n  cursor: pointer;\n}\n\n.task-body:hover:active {\n  transform: scale(0.995);\n}\n\n.task-body input {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  height: 15px;\n  justify-self: center;\n}\n\n.task-body .task-title {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n}\n\n.task-body .task-details {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  font-size: 0.8rem;\n  display: none;\n}\n\n.task-body .right-container {\n  grid-column: 3 / 4;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.show-details {\n  display: block !important;\n}\n\n/* task element checkbox */\n\n.task-body input {\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: #fff;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid currentColor;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n}\n\n.task-body input:before {\n  content: '';\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--brand-green);\n}\n\n.task-body input:checked:before {\n  transform: scale(1);\n}\n\n/* edit and delete popup */\n\n.pop-up {\n  background-color: var(--pop-up-color);\n  position: absolute;\n  bottom: 20px;\n  left: 5px;\n  height: 80px;\n  width: 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  border-radius: 10px;\n  padding: 10px;\n  transform: scale(0);\n  display: flex;\n  flex-direction: column;\n  box-shadow: 2px 2px 10px;\n}\n\n.project-container .dots {\n  position: relative;\n}\n\n.pop-up > div {\n  cursor: pointer;\n  height: 25px;\n  width: 100%;\n  border-radius: 5px;\n  padding-left: 5px;\n  display: flex;\n  align-items: center;\n}\n\n.pop-up > div:hover {\n  background-color: var(--pop-up-hover);\n}\n\n.popping {\n  transform: scale(1) !important;\n}\n\n.task-dots {\n  position: relative;\n}\n\n/* edit and delete popup (task) */\n\n.task-body .pop-up {\n  left: 10px;\n  bottom: 20px;\n}\n\n/* confirm delete pop-up */\n\n.confirm-delete-pop-up {\n  height: 250px;\n  width: 400px;\n  position: fixed;\n  bottom: 20%;\n  left: 0;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--nav-light);\n  box-shadow: 2px 2px 15px;\n  transform: scale(0);\n}\n\n.pop-up-header {\n  background-color: var(--pop-up-header);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  display: flex;\n  height: 50px;\n  align-items: center;\n  color: white;\n  font-size: 1.3rem;\n  padding: 5px 10px;\n}\n\n.pop-up-header .close {\n  margin-left: auto;\n  margin-bottom: auto;\n}\n\n.pop-up-message {\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid var(--hover-nav-color);\n  margin: 0px 10px;\n  height: 100px;\n  justify-content: space-evenly;\n  color: var(--font-color);\n}\n\n.pop-up-buttons {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0px 10px;\n  gap: 10px;\n  flex: 1;\n}\n\n.pop-up-button {\n  height: 40px;\n  width: 80px;\n  background-color: white;\n  border-radius: 10px;\n  cursor: pointer;\n  font-family: inherit;\n  font-weight: 500;\n  letter-spacing: 1px;\n  box-shadow: 1px 1px 5px;\n  border: none;\n}\n\n.pop-up-cancel {\n  color: var(--font-color);\n}\n\n.pop-up-delete {\n  color: var(--high-radio);\n}\n\n.pop-up-cancel:hover {\n  background-color: var(--font-color);\n  color: white;\n}\n\n.pop-up-delete:hover {\n  background-color: var(--high-radio);\n  color: white;\n}\n\nbutton:active {\n  transform: scale(0.95) !important;\n}\n\n/* task undo pop-up */\n\n.task-undo {\n  height: 40px;\n  width: 200px;\n  display: flex;\n  font-size: 0.9rem;\n  justify-content: space-around;\n  align-items: center;\n  position: fixed;\n  bottom: 5px;\n  margin-left: 50%;\n  box-shadow: 2px 2px 10px;\n  border-radius: 10px;\n  transform: scale(0);\n  \n\n}\n\n.undo-button {\n  cursor: pointer;\n  color: var(--med-radio);\n  font-weight: 700;\n}\n\n.undo-button:active {\n  transform: scale(0.95);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --header-content-light: #f3f4f6;\n  --nav-light: #ffffff;\n  --brand-green: #059669;\n  --font-color: #44403c;\n  --font-color-light: #f1f5f9;\n  --hover-nav-color: #e7e5e4;\n  --nav-active: #a7f3d0;\n  --add-button-color: #22d3ee;\n  --pop-up-color: #e4e4e7;\n  --pop-up-hover: #d4d4d8;\n  --low-radio: #22d3ee;\n  --med-radio: #fb923c;\n  --high-radio: #ef4444;\n  --pop-up-header: #fca5a5;\n}\n\nbody {\n  min-height: 100vh;\n  color: var(--font-color);\n  font-family: sono, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n* .active {\n  background-color: var(--nav-active) !important;\n}\n\n@font-face {\n  font-family: sono;\n  src: url(./assets/Exo2-VariableFont_wght.ttf);\n}\n\n/* header */\n\n.header {\n  background-color: var(--header-content-light);\n  height: 80px;\n  border-bottom: var(--brand-green) solid 2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n\nh1 {\n  font-size: 2.7rem;\n}\n\n.header img {\n  height: 35px;\n}\n\n.header span {\n  color: var(--brand-green);\n}\n\n.content {\n  display: flex;\n  min-height: calc(100vh - 80px);\n}\n\n/* nav */\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  width: min(20%, 350px);\n  min-width: 200px;\n  gap: 40px;\n  padding: 20px;\n  background-color: var(--nav-light);\n}\n\n.nav h2 {\n  border-bottom: var(--font-color) solid 2px;\n}\n\n.nav button {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  margin-top: auto;\n  font-size: 2rem;\n  cursor: pointer;\n  background-color: var(--add-button-color);\n  border: none;\n  box-shadow: 2px 2px 5px var(--font-color);\n  transition: all 0.3s;\n  color: var(--nav-light);\n}\n\n.nav button:active {\n  transform: scale(0.95);\n}\n\n.nav button:hover {\n  transform: rotate(90deg);\n  transition: all 0.3s;\n}\n\n.nav img {\n  height: 25px;\n  width: 25px;\n}\n\n.home {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.home > div {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.2rem;\n  font-weight: 500;\n  cursor: pointer;\n  border-radius: 10px;\n  height: 35px;\n}\n\n.home > div:hover {\n  background-color: var(--hover-nav-color);\n}\n\nh2 {\n  font-size: 1.7rem;\n  font-weight: 900;\n}\n\n/* modal */\n\n.add-new-modal {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 400px;\n  max-width: 700px;\n  box-shadow: 2px 2px 30px;\n  border-radius: 10px !important;\n  background-color: var(--header-content-light);\n  transform: scale(0);\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 10px;\n  background-color: var(--brand-green);\n  font-size: 1.5rem;\n  color: var(--font-color-light);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.close {\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.close:hover {\n  transform: rotate(90deg);\n  transition: all 0.3s;\n}\n\n.modal-content {\n  display: flex;\n  flex: 1;\n}\n\n/* modal nav */\n\n.modal-nav {\n  background-color: var(--nav-light);\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 10px;\n  font-weight: 600;\n  border-bottom-left-radius: 10px;\n}\n\n.modal-content img {\n  height: 60px;\n}\n\n.modal-nav > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  border-radius: 10px;\n  height: 70px;\n}\n\n.modal-nav > div:hover {\n  background-color: var(--hover-nav-color);\n}\n\n.add-new-modal form {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n/* modal form */\n\n.add-new-modal form > div {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 10px;\n  padding: 20px;\n}\n\n.task-edit-form > div {\n  justify-content: space-between;\n}\n\nform > div > div {\n  display: flex;\n  gap: 10px;\n}\n\n/* modal input */\n\n.add-new-modal input,\n.add-new-modal textarea {\n  font-family: inherit;\n  font-size: 100%;\n  background-color: inherit;\n  resize: none;\n}\n\n.add-new-modal input[type='text'],\ntextarea {\n  appearance: none;\n  outline: none;\n  border: none;\n}\n\ninput[type='date'] {\n  border-radius: 5px;\n  padding: 2px 5px;\n  border: var(--brand-green) 1px solid;\n  color: var(--brand-green);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-transform: uppercase;\n}\n\n.date-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.priority-radio {\n  display: flex;\n  align-items: center;\n}\n\nform button {\n  margin-left: auto;\n  margin-top: auto;\n  height: 30px;\n  width: 120px;\n  border: var(--brand-green) solid 1px;\n  box-shadow: 2px 2px 5px;\n  color: var(--brand-green);\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n}\n\nform button:hover {\n  background-color: var(--brand-green);\n  color: white;\n  transition: 0.3s;\n}\n\nform select {\n  border-radius: 4px;\n  background-color: var(--hover-nav-color);\n  height: 20px;\n}\n\n/* modal radio-buttons */\n\n.radio-button {\n  float: left;\n  margin: 0 5px 0 0;\n  width: 80px;\n  height: 25px;\n  position: relative;\n  border-radius: 5px;\n}\n\n.radio-low {\n  border: var(--low-radio) solid 2px;\n  color: var(--low-radio);\n}\n\n.radio-low:hover {\n  background-color: var(--low-radio);\n  color: white;\n  transition: 0.3s;\n}\n\n.radio-medium {\n  border: var(--med-radio) solid 2px;\n  color: var(--med-radio);\n}\n\n.radio-medium:hover {\n  background-color: var(--med-radio);\n  color: white;\n  transition: 0.3s;\n}\n\n.radio-high {\n  border: var(--high-radio) solid 2px;\n  color: var(--high-radio);\n}\n\n.radio-high:hover {\n  background-color: var(--high-radio);\n  color: white;\n  transition: 0.3s;\n}\n\n.radio-button label,\n.radio-button input {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n}\n\n.radio-button input[type='radio'] {\n  opacity: 0.011;\n  z-index: 100;\n}\n\n.radio-low input[type='radio']:checked + label {\n  background-color: var(--low-radio);\n  color: white;\n}\n\n.radio-medium input[type='radio']:checked + label {\n  background-color: var(--med-radio);\n  color: white;\n}\n\n.radio-high input[type='radio']:checked + label {\n  background-color: #ef4444;\n  color: white;\n}\n\n.radio-button label {\n  cursor: pointer;\n  z-index: 90;\n  line-height: 1.8em;\n}\n\n/* project element*/\n\n.projects-area {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.projects-area .project {\n  display: flex;\n  gap: 5px;\n  width: 100%;\n  height: 30px;\n  font-size: 1.1rem;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n.project-container {\n  border-radius: 10px;\n  width: 100%;\n  padding: 3px;\n}\n\n.dots {\n  margin-left: auto;\n}\n\n.project-container:hover {\n  background-color: var(--hover-nav-color);\n}\n\n/* main-area */\n\n.main-area {\n  background-color: var(--header-content-light);\n  min-height: calc(100vh - 80px);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main-area-title {\n  background-color: var(--brand-green);\n  margin-top: 20px;\n  width: 75%;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--font-color-light);\n  font-size: 3rem;\n  font-weight: 600;\n}\n\n.main-area-content {\n  display: flex;\n  flex-direction: column;\n  margin-top: 30px;\n  background-color: var(--header-content-light);\n  width: 75%;\n  height: 100%;\n  gap: 10px;\n  align-items: center;\n  font-size: 1.4rem;\n  font-weight: 500;\n}\n\n/* task element */\n\n.main-area-content > div {\n  width: 100%;\n}\n\n.task-body {\n  width: 100%;\n  border-radius: 8px;\n  padding: 10px 10px;\n  display: grid;\n  grid-template-columns: 0.2fr 3fr 0.8fr;\n  align-items: center;\n  background: linear-gradient(#ffffff, #d7dde8);\n  box-shadow: 2px 2px 5px;\n  font-size: 1rem;\n}\n\n.task-body:hover {\n  cursor: pointer;\n}\n\n.task-body:hover:active {\n  transform: scale(0.995);\n}\n\n.task-body input {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  height: 15px;\n  justify-self: center;\n}\n\n.task-body .task-title {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n}\n\n.task-body .task-details {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  font-size: 0.8rem;\n  display: none;\n}\n\n.task-body .right-container {\n  grid-column: 3 / 4;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.show-details {\n  display: block !important;\n}\n\n/* task element checkbox */\n\n.task-body input {\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: #fff;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid currentColor;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n}\n\n.task-body input:before {\n  content: '';\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--brand-green);\n}\n\n.task-body input:checked:before {\n  transform: scale(1);\n}\n\n/* edit and delete popup */\n\n.pop-up {\n  background-color: var(--pop-up-color);\n  position: absolute;\n  bottom: 20px;\n  left: 5px;\n  height: 80px;\n  width: 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  border-radius: 10px;\n  padding: 10px;\n  transform: scale(0);\n  display: flex;\n  flex-direction: column;\n  box-shadow: 2px 2px 10px;\n}\n\n.project-container .dots {\n  position: relative;\n}\n\n.pop-up > div {\n  cursor: pointer;\n  height: 25px;\n  width: 100%;\n  border-radius: 5px;\n  padding-left: 5px;\n  display: flex;\n  align-items: center;\n}\n\n.pop-up > div:hover {\n  background-color: var(--pop-up-hover);\n}\n\n.popping {\n  transform: scale(1) !important;\n}\n\n.task-dots {\n  position: relative;\n}\n\n/* edit and delete popup (task) */\n\n.task-body .pop-up {\n  left: 10px;\n  bottom: 20px;\n}\n\n/* confirm delete pop-up */\n\n.confirm-delete-pop-up {\n  height: 250px;\n  width: 400px;\n  position: fixed;\n  bottom: 20%;\n  left: 0;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--nav-light);\n  box-shadow: 2px 2px 15px;\n  transform: scale(0);\n}\n\n.pop-up-header {\n  background-color: var(--pop-up-header);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  display: flex;\n  height: 50px;\n  align-items: center;\n  color: white;\n  font-size: 1.3rem;\n  padding: 5px 10px;\n}\n\n.pop-up-header .close {\n  margin-left: auto;\n  margin-bottom: auto;\n}\n\n.pop-up-message {\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid var(--hover-nav-color);\n  margin: 0px 10px;\n  height: 100px;\n  justify-content: space-evenly;\n  color: var(--font-color);\n}\n\n.pop-up-buttons {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0px 10px;\n  gap: 10px;\n  flex: 1;\n}\n\n.pop-up-button {\n  height: 40px;\n  width: 80px;\n  background-color: white;\n  border-radius: 10px;\n  cursor: pointer;\n  font-family: inherit;\n  font-weight: 500;\n  letter-spacing: 1px;\n  box-shadow: 1px 1px 5px;\n  border: none;\n}\n\n.pop-up-cancel {\n  color: var(--font-color);\n}\n\n.pop-up-delete {\n  color: var(--high-radio);\n}\n\n.pop-up-cancel:hover {\n  background-color: var(--font-color);\n  color: white;\n}\n\n.pop-up-delete:hover {\n  background-color: var(--high-radio);\n  color: white;\n}\n\nbutton:active {\n  transform: scale(0.95) !important;\n}\n\n/* task undo pop-up */\n\n.task-undo {\n  height: 40px;\n  width: 200px;\n  display: flex;\n  font-size: 0.9rem;\n  justify-content: space-around;\n  align-items: center;\n  position: fixed;\n  bottom: 5px;\n  margin-left: 50%;\n  box-shadow: 2px 2px 10px;\n  border-radius: 10px;\n  transform: scale(0);\n  \n\n}\n\n.undo-button {\n  cursor: pointer;\n  color: var(--med-radio);\n  font-weight: 700;\n}\n\n.undo-button:active {\n  transform: scale(0.95);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






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
    this.tasks.push(taskToMove)
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


/***/ }),

/***/ "./src/assets/Exo2-VariableFont_wght.ttf":
/*!***********************************************!*\
  !*** ./src/assets/Exo2-VariableFont_wght.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "718ec91358aa7ee8083b.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxhQUFhLE9BQU8sWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFP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QUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsb0NBQW9DO0FBQzNEOztBQUVBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixvQ0FBb0M7QUFDM0Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNCZWZvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYnVpbGQtcG9wLXVwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RhdGEtbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLWRpc3BsYXktcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS1kaXNwbGF5LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2RhbC1mb3JtLWJ1aWxkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kYWwtbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmF2LXV0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wb3B1bGF0ZS1tYWluLWFyZWEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9FeG8yLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0taGVhZGVyLWNvbnRlbnQtbGlnaHQ6ICNmM2Y0ZjY7XFxuICAtLW5hdi1saWdodDogI2ZmZmZmZjtcXG4gIC0tYnJhbmQtZ3JlZW46ICMwNTk2Njk7XFxuICAtLWZvbnQtY29sb3I6ICM0NDQwM2M7XFxuICAtLWZvbnQtY29sb3ItbGlnaHQ6ICNmMWY1Zjk7XFxuICAtLWhvdmVyLW5hdi1jb2xvcjogI2U3ZTVlNDtcXG4gIC0tbmF2LWFjdGl2ZTogI2E3ZjNkMDtcXG4gIC0tYWRkLWJ1dHRvbi1jb2xvcjogIzIyZDNlZTtcXG4gIC0tcG9wLXVwLWNvbG9yOiAjZTRlNGU3O1xcbiAgLS1wb3AtdXAtaG92ZXI6ICNkNGQ0ZDg7XFxuICAtLWxvdy1yYWRpbzogIzIyZDNlZTtcXG4gIC0tbWVkLXJhZGlvOiAjZmI5MjNjO1xcbiAgLS1oaWdoLXJhZGlvOiAjZWY0NDQ0O1xcbiAgLS1wb3AtdXAtaGVhZGVyOiAjZmNhNWE1O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IHNvbm8sICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWFjdGl2ZSkgIWltcG9ydGFudDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc29ubztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29udGVudC1saWdodCk7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1icmFuZC1ncmVlbikgc29saWQgMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDIuN3JlbTtcXG59XFxuXFxuLmhlYWRlciBpbWcge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4uaGVhZGVyIHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLWJyYW5kLWdyZWVuKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXG59XFxuXFxuLyogbmF2ICovXFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiBtaW4oMjAlLCAzNTBweCk7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgZ2FwOiA0MHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1saWdodCk7XFxufVxcblxcbi5uYXYgaDIge1xcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tZm9udC1jb2xvcikgc29saWQgMnB4O1xcbn1cXG5cXG4ubmF2IGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtYnV0dG9uLWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICBjb2xvcjogdmFyKC0tbmF2LWxpZ2h0KTtcXG59XFxuXFxuLm5hdiBidXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi5uYXYgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4ubmF2IGltZyB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLmhvbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5ob21lID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4uaG9tZSA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1uYXYtY29sb3IpO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi8qIG1vZGFsICovXFxuXFxuLmFkZC1uZXctbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb250ZW50LWxpZ2h0KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLWdyZWVuKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItbGlnaHQpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5jbG9zZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi8qIG1vZGFsIG5hdiAqL1xcblxcbi5tb2RhbC1uYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWxpZ2h0KTtcXG4gIHdpZHRoOiAyMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgaW1nIHtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuLm1vZGFsLW5hdiA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4ubW9kYWwtbmF2ID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLW5hdi1jb2xvcik7XFxufVxcblxcbi5hZGQtbmV3LW1vZGFsIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4vKiBtb2RhbCBmb3JtICovXFxuXFxuLmFkZC1uZXctbW9kYWwgZm9ybSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4udGFzay1lZGl0LWZvcm0gPiBkaXYge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5mb3JtID4gZGl2ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIG1vZGFsIGlucHV0ICovXFxuXFxuLmFkZC1uZXctbW9kYWwgaW5wdXQsXFxuLmFkZC1uZXctbW9kYWwgdGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uYWRkLW5ldy1tb2RhbCBpbnB1dFt0eXBlPSd0ZXh0J10sXFxudGV4dGFyZWEge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAycHggNXB4O1xcbiAgYm9yZGVyOiB2YXIoLS1icmFuZC1ncmVlbikgMXB4IHNvbGlkO1xcbiAgY29sb3I6IHZhcigtLWJyYW5kLWdyZWVuKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uZGF0ZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnByaW9yaXR5LXJhZGlvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTIwcHg7XFxuICBib3JkZXI6IHZhcigtLWJyYW5kLWdyZWVuKSBzb2xpZCAxcHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweDtcXG4gIGNvbG9yOiB2YXIoLS1icmFuZC1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLWdyZWVuKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbmZvcm0gc2VsZWN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLW5hdi1jb2xvcik7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi8qIG1vZGFsIHJhZGlvLWJ1dHRvbnMgKi9cXG5cXG4ucmFkaW8tYnV0dG9uIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luOiAwIDVweCAwIDA7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnJhZGlvLWxvdyB7XFxuICBib3JkZXI6IHZhcigtLWxvdy1yYWRpbykgc29saWQgMnB4O1xcbiAgY29sb3I6IHZhcigtLWxvdy1yYWRpbyk7XFxufVxcblxcbi5yYWRpby1sb3c6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXJhZGlvKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5yYWRpby1tZWRpdW0ge1xcbiAgYm9yZGVyOiB2YXIoLS1tZWQtcmFkaW8pIHNvbGlkIDJweDtcXG4gIGNvbG9yOiB2YXIoLS1tZWQtcmFkaW8pO1xcbn1cXG5cXG4ucmFkaW8tbWVkaXVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1yYWRpbyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ucmFkaW8taGlnaCB7XFxuICBib3JkZXI6IHZhcigtLWhpZ2gtcmFkaW8pIHNvbGlkIDJweDtcXG4gIGNvbG9yOiB2YXIoLS1oaWdoLXJhZGlvKTtcXG59XFxuXFxuLnJhZGlvLWhpZ2g6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1yYWRpbyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ucmFkaW8tYnV0dG9uIGxhYmVsLFxcbi5yYWRpby1idXR0b24gaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5yYWRpby1idXR0b24gaW5wdXRbdHlwZT0ncmFkaW8nXSB7XFxuICBvcGFjaXR5OiAwLjAxMTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnJhZGlvLWxvdyBpbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcmFkaW8pO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucmFkaW8tbWVkaXVtIGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1yYWRpbyk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yYWRpby1oaWdoIGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yYWRpby1idXR0b24gbGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogOTA7XFxuICBsaW5lLWhlaWdodDogMS44ZW07XFxufVxcblxcbi8qIHByb2plY3QgZWxlbWVudCovXFxuXFxuLnByb2plY3RzLWFyZWEge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0cy1hcmVhIC5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4uZG90cyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLW5hdi1jb2xvcik7XFxufVxcblxcbi8qIG1haW4tYXJlYSAqL1xcblxcbi5tYWluLWFyZWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbnRlbnQtbGlnaHQpO1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tYXJlYS10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1ncmVlbik7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDc1JTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItbGlnaHQpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1haW4tYXJlYS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb250ZW50LWxpZ2h0KTtcXG4gIHdpZHRoOiA3NSU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4vKiB0YXNrIGVsZW1lbnQgKi9cXG5cXG4ubWFpbi1hcmVhLWNvbnRlbnQgPiBkaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrLWJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAzZnIgMC44ZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmZmZmYsICNkN2RkZTgpO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWJvZHk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1ib2R5OmhvdmVyOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTk1KTtcXG59XFxuXFxuLnRhc2stYm9keSBpbnB1dCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stYm9keSAudGFzay10aXRsZSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi50YXNrLWJvZHkgLnRhc2stZGV0YWlscyB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWJvZHkgLnJpZ2h0LWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2hvdy1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIHRhc2sgZWxlbWVudCBjaGVja2JveCAqL1xcblxcbi50YXNrLWJvZHkgaW5wdXQge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW46IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIHdpZHRoOiAxLjE1ZW07XFxuICBoZWlnaHQ6IDEuMTVlbTtcXG4gIGJvcmRlcjogMC4xNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNzVlbSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzay1ib2R5IGlucHV0OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHdpZHRoOiAwLjY1ZW07XFxuICBoZWlnaHQ6IDAuNjVlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLWJyYW5kLWdyZWVuKTtcXG59XFxuXFxuLnRhc2stYm9keSBpbnB1dDpjaGVja2VkOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4vKiBlZGl0IGFuZCBkZWxldGUgcG9wdXAgKi9cXG5cXG4ucG9wLXVwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvcC11cC1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDIwcHg7XFxuICBsZWZ0OiA1cHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIC5kb3RzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBvcC11cCA+IGRpdiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3AtdXAgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wLXVwLWhvdmVyKTtcXG59XFxuXFxuLnBvcHBpbmcge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGFzay1kb3RzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogZWRpdCBhbmQgZGVsZXRlIHBvcHVwICh0YXNrKSAqL1xcblxcbi50YXNrLWJvZHkgLnBvcC11cCB7XFxuICBsZWZ0OiAxMHB4O1xcbiAgYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4vKiBjb25maXJtIGRlbGV0ZSBwb3AtdXAgKi9cXG5cXG4uY29uZmlybS1kZWxldGUtcG9wLXVwIHtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDIwJTtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtbGlnaHQpO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuXFxuLnBvcC11cC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wLXVwLWhlYWRlcik7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbi5wb3AtdXAtaGVhZGVyIC5jbG9zZSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcblxcbi5wb3AtdXAtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ob3Zlci1uYXYtY29sb3IpO1xcbiAgbWFyZ2luOiAwcHggMTBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLnBvcC11cC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMHB4IDEwcHg7XFxuICBnYXA6IDEwcHg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucG9wLXVwLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnBvcC11cC1jYW5jZWwge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ucG9wLXVwLWRlbGV0ZSB7XFxuICBjb2xvcjogdmFyKC0taGlnaC1yYWRpbyk7XFxufVxcblxcbi5wb3AtdXAtY2FuY2VsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucG9wLXVwLWRlbGV0ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLXJhZGlvKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIHRhc2sgdW5kbyBwb3AtdXAgKi9cXG5cXG4udGFzay11bmRvIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgXFxuXFxufVxcblxcbi51bmRvLWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tbWVkLXJhZGlvKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi51bmRvLWJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsa0VBQWtFO0FBQ3BFOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDRDQUE2QztBQUMvQzs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsNkNBQTZDO0VBQzdDLFlBQVk7RUFDWiwyQ0FBMkM7RUFDM0MsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQSxRQUFROztBQUVSO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsMENB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QUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwrQ0FBK0M7RUFDL0MsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixtQkFBbUI7OztBQUdyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0taGVhZGVyLWNvbnRlbnQtbGlnaHQ6ICNmM2Y0ZjY7XFxuICAtLW5hdi1saWdodDogI2ZmZmZmZjtcXG4gIC0tYnJhbmQtZ3JlZW46ICMwNTk2Njk7XFxuICAtLWZvbnQtY29sb3I6ICM0NDQwM2M7XFxuICAtLWZvbnQtY29sb3ItbGlnaHQ6ICNmMWY1Zjk7XFxuICAtLWhvdmVyLW5hdi1jb2xvcjogI2U3ZTVlNDtcXG4gIC0tbmF2LWFjdGl2ZTogI2E3ZjNkMDtcXG4gIC0tYWRkLWJ1dHRvbi1jb2xvcjogIzIyZDNlZTtcXG4gIC0tcG9wLXVwLWNvbG9yOiAjZTRlNGU3O1xcbiAgLS1wb3AtdXAtaG92ZXI6ICNkNGQ0ZDg7XFxuICAtLWxvdy1yYWRpbzogIzIyZDNlZTtcXG4gIC0tbWVkLXJhZGlvOiAjZmI5MjNjO1xcbiAgLS1oaWdoLXJhZGlvOiAjZWY0NDQ0O1xcbiAgLS1wb3AtdXAtaGVhZGVyOiAjZmNhNWE1O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IHNvbm8sICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWFjdGl2ZSkgIWltcG9ydGFudDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc29ubztcXG4gIHNyYzogdXJsKC4vYXNzZXRzL0V4bzItVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29udGVudC1saWdodCk7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1icmFuZC1ncmVlbikgc29saWQgMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDIuN3JlbTtcXG59XFxuXFxuLmhlYWRlciBpbWcge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4uaGVhZGVyIHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLWJyYW5kLWdyZWVuKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXG59XFxuXFxuLyogbmF2ICovXFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiBtaW4oMjAlLCAzNTBweCk7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgZ2FwOiA0MHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1saWdodCk7XFxufVxcblxcbi5uYXYgaDIge1xcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tZm9udC1jb2xvcikgc29saWQgMnB4O1xcbn1cXG5cXG4ubmF2IGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtYnV0dG9uLWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICBjb2xvcjogdmFyKC0tbmF2LWxpZ2h0KTtcXG59XFxuXFxuLm5hdiBidXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi5uYXYgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4ubmF2IGltZyB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLmhvbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5ob21lID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4uaG9tZSA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1uYXYtY29sb3IpO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi8qIG1vZGFsICovXFxuXFxuLmFkZC1uZXctbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb250ZW50LWxpZ2h0KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLWdyZWVuKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItbGlnaHQpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5jbG9zZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi8qIG1vZGFsIG5hdiAqL1xcblxcbi5tb2RhbC1uYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWxpZ2h0KTtcXG4gIHdpZHRoOiAyMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgaW1nIHtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuLm1vZGFsLW5hdiA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4ubW9kYWwtbmF2ID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLW5hdi1jb2xvcik7XFxufVxcblxcbi5hZGQtbmV3LW1vZGFsIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4vKiBtb2RhbCBmb3JtICovXFxuXFxuLmFkZC1uZXctbW9kYWwgZm9ybSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4udGFzay1lZGl0LWZvcm0gPiBkaXYge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5mb3JtID4gZGl2ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIG1vZGFsIGlucHV0ICovXFxuXFxuLmFkZC1uZXctbW9kYWwgaW5wdXQsXFxuLmFkZC1uZXctbW9kYWwgdGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uYWRkLW5ldy1tb2RhbCBpbnB1dFt0eXBlPSd0ZXh0J10sXFxudGV4dGFyZWEge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAycHggNXB4O1xcbiAgYm9yZGVyOiB2YXIoLS1icmFuZC1ncmVlbikgMXB4IHNvbGlkO1xcbiAgY29sb3I6IHZhcigtLWJyYW5kLWdyZWVuKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uZGF0ZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnByaW9yaXR5LXJhZGlvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTIwcHg7XFxuICBib3JkZXI6IHZhcigtLWJyYW5kLWdyZWVuKSBzb2xpZCAxcHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweDtcXG4gIGNvbG9yOiB2YXIoLS1icmFuZC1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLWdyZWVuKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbmZvcm0gc2VsZWN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLW5hdi1jb2xvcik7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi8qIG1vZGFsIHJhZGlvLWJ1dHRvbnMgKi9cXG5cXG4ucmFkaW8tYnV0dG9uIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luOiAwIDVweCAwIDA7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnJhZGlvLWxvdyB7XFxuICBib3JkZXI6IHZhcigtLWxvdy1yYWRpbykgc29saWQgMnB4O1xcbiAgY29sb3I6IHZhcigtLWxvdy1yYWRpbyk7XFxufVxcblxcbi5yYWRpby1sb3c6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXJhZGlvKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5yYWRpby1tZWRpdW0ge1xcbiAgYm9yZGVyOiB2YXIoLS1tZWQtcmFkaW8pIHNvbGlkIDJweDtcXG4gIGNvbG9yOiB2YXIoLS1tZWQtcmFkaW8pO1xcbn1cXG5cXG4ucmFkaW8tbWVkaXVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1yYWRpbyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ucmFkaW8taGlnaCB7XFxuICBib3JkZXI6IHZhcigtLWhpZ2gtcmFkaW8pIHNvbGlkIDJweDtcXG4gIGNvbG9yOiB2YXIoLS1oaWdoLXJhZGlvKTtcXG59XFxuXFxuLnJhZGlvLWhpZ2g6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1yYWRpbyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ucmFkaW8tYnV0dG9uIGxhYmVsLFxcbi5yYWRpby1idXR0b24gaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5yYWRpby1idXR0b24gaW5wdXRbdHlwZT0ncmFkaW8nXSB7XFxuICBvcGFjaXR5OiAwLjAxMTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnJhZGlvLWxvdyBpbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcmFkaW8pO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucmFkaW8tbWVkaXVtIGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1yYWRpbyk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yYWRpby1oaWdoIGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yYWRpby1idXR0b24gbGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogOTA7XFxuICBsaW5lLWhlaWdodDogMS44ZW07XFxufVxcblxcbi8qIHByb2plY3QgZWxlbWVudCovXFxuXFxuLnByb2plY3RzLWFyZWEge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0cy1hcmVhIC5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4uZG90cyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLW5hdi1jb2xvcik7XFxufVxcblxcbi8qIG1haW4tYXJlYSAqL1xcblxcbi5tYWluLWFyZWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbnRlbnQtbGlnaHQpO1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tYXJlYS10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1ncmVlbik7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDc1JTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItbGlnaHQpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1haW4tYXJlYS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb250ZW50LWxpZ2h0KTtcXG4gIHdpZHRoOiA3NSU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4vKiB0YXNrIGVsZW1lbnQgKi9cXG5cXG4ubWFpbi1hcmVhLWNvbnRlbnQgPiBkaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrLWJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAzZnIgMC44ZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmZmZmYsICNkN2RkZTgpO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWJvZHk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1ib2R5OmhvdmVyOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTk1KTtcXG59XFxuXFxuLnRhc2stYm9keSBpbnB1dCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stYm9keSAudGFzay10aXRsZSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi50YXNrLWJvZHkgLnRhc2stZGV0YWlscyB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWJvZHkgLnJpZ2h0LWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2hvdy1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIHRhc2sgZWxlbWVudCBjaGVja2JveCAqL1xcblxcbi50YXNrLWJvZHkgaW5wdXQge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW46IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIHdpZHRoOiAxLjE1ZW07XFxuICBoZWlnaHQ6IDEuMTVlbTtcXG4gIGJvcmRlcjogMC4xNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNzVlbSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzay1ib2R5IGlucHV0OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHdpZHRoOiAwLjY1ZW07XFxuICBoZWlnaHQ6IDAuNjVlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLWJyYW5kLWdyZWVuKTtcXG59XFxuXFxuLnRhc2stYm9keSBpbnB1dDpjaGVja2VkOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4vKiBlZGl0IGFuZCBkZWxldGUgcG9wdXAgKi9cXG5cXG4ucG9wLXVwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvcC11cC1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDIwcHg7XFxuICBsZWZ0OiA1cHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIC5kb3RzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBvcC11cCA+IGRpdiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3AtdXAgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wLXVwLWhvdmVyKTtcXG59XFxuXFxuLnBvcHBpbmcge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGFzay1kb3RzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogZWRpdCBhbmQgZGVsZXRlIHBvcHVwICh0YXNrKSAqL1xcblxcbi50YXNrLWJvZHkgLnBvcC11cCB7XFxuICBsZWZ0OiAxMHB4O1xcbiAgYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4vKiBjb25maXJtIGRlbGV0ZSBwb3AtdXAgKi9cXG5cXG4uY29uZmlybS1kZWxldGUtcG9wLXVwIHtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDIwJTtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtbGlnaHQpO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuXFxuLnBvcC11cC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wLXVwLWhlYWRlcik7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbi5wb3AtdXAtaGVhZGVyIC5jbG9zZSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcblxcbi5wb3AtdXAtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ob3Zlci1uYXYtY29sb3IpO1xcbiAgbWFyZ2luOiAwcHggMTBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLnBvcC11cC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMHB4IDEwcHg7XFxuICBnYXA6IDEwcHg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucG9wLXVwLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnBvcC11cC1jYW5jZWwge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ucG9wLXVwLWRlbGV0ZSB7XFxuICBjb2xvcjogdmFyKC0taGlnaC1yYWRpbyk7XFxufVxcblxcbi5wb3AtdXAtY2FuY2VsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucG9wLXVwLWRlbGV0ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLXJhZGlvKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIHRhc2sgdW5kbyBwb3AtdXAgKi9cXG5cXG4udGFzay11bmRvIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgXFxuXFxufVxcblxcbi51bmRvLWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tbWVkLXJhZGlvKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi51bmRvLWJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNCZWZvcmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGJlZm9yZSAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNCZWZvcmUobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNCZWZvcmUoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA8IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBlbGVtZW50RnJvbUh0bWwgZnJvbSAnLi9tb2RhbC1mb3JtLWJ1aWxkJztcbmltcG9ydCB7IHRvZ2dsZUJsdXIgfSBmcm9tICcuL21vZGFsLW1hbmlwdWxhdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENvbmZpcm1EZWxldGVQcm9qZWN0UG9wVXAoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IHBvcFVwQ29udGFpbmVyID0gZWxlbWVudEZyb21IdG1sKGBcbiAgPGRpdiBjbGFzcz1cImNvbmZpcm0tZGVsZXRlLXBvcC11cCBhZGQtbmV3LW1vZGFsXCI+XG4gICAgPGRpdiBjbGFzcz1cInBvcC11cC1oZWFkZXJcIj5cbiAgICAgIDxoMz5EZWxldGUgUHJvamVjdDwvaDM+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VcIj4mI3gyNzE1PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBvcC11cC1tZXNzYWdlXCI+XG4gICAgICA8c3Bhbj5BcmUgeW91IHN1cmU/PC9zcGFuPlxuICAgICAgPGRpdj5Qcm9qZWN0IDxzdHJvbmc+PHNwYW4gY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj48L3NwYW4+PC9zdHJvbmc+IFdpbGwgYmUgZ29uZSBmb3JldmVyITwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwb3AtdXAtYnV0dG9uc1wiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cC1idXR0b24gcG9wLXVwLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cC1idXR0b24gcG9wLXVwLWRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYCk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChwb3BVcENvbnRhaW5lcik7XG4gIGNvbnN0IHBvcFVwRWxlbWVudCA9IHBvcFVwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLWRlbGV0ZS1wb3AtdXAnKTtcblxuICAoZnVuY3Rpb24gaGFuZGxlUG9wVXBBY3Rpb24oKSB7XG4gICAgcG9wVXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BvcHBpbmcnKTtcbiAgICB0b2dnbGVCbHVyKHBvcFVwRWxlbWVudCk7XG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uIGhhbmRsZVBvcFVwQ2xvc2UoKSB7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBwb3BVcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBwb3BVcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucG9wLXVwLWNhbmNlbCcpXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gcG9wVXBDb250YWluZXIucXVlcnlTZWxlY3RvcignLnBvcC11cC1kZWxldGUnKVxuICAgIGNvbnN0IGFjdGlvbkNhbmNlbEJ1dHRvbnMgPSBbY2xvc2VCdXR0b24sIGNhbmNlbEJ1dHRvbiwgZGVsZXRlQnV0dG9uXVxuICAgIGFjdGlvbkNhbmNlbEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwb3BVcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncG9wcGluZycpO1xuICAgICAgdG9nZ2xlQmx1cihwb3BVcEVsZW1lbnQpO1xuICAgICAgcG9wVXBDb250YWluZXIucmVtb3ZlKClcbiAgICB9KSlcbiAgfSkoKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRhc2tEZWxldGlvblVuZG9Qb3BVcCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgdW5kb1BvcFVwQ29udGFpbmVyID0gZWxlbWVudEZyb21IdG1sKGBcbiAgICA8ZGl2IGNsYXNzPVwidGFzay11bmRvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidW5kby1tZXNzYWdlXCI+MSB0YXNrIGNvbXBsZXRlZDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInVuZG8tYnV0dG9uXCI+VW5kbzwvZGl2PlxuICAgIDwvZGl2PlxuICBgKTtcblxuICBjb25zdCB1bmRvUG9wVXBFbGVtZW50ID0gdW5kb1BvcFVwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXVuZG8nKVxuICBib2R5LmFwcGVuZENoaWxkKHVuZG9Qb3BVcENvbnRhaW5lcilcbiAgdW5kb1BvcFVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwb3BwaW5nJylcblxuICBmdW5jdGlvbiByZW1vdmVQb3BVcCgpIHtcbiAgICB1bmRvUG9wVXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgICB1bmRvUG9wVXBDb250YWluZXIucmVtb3ZlKClcbiAgfVxuXG4gIHNldFRpbWVvdXQocmVtb3ZlUG9wVXAsIDMwMDApXG59IiwiaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlJztcbmV4cG9ydCB7IGdldERhdGFGcm9tRm9ybXMgfTtcblxuZnVuY3Rpb24gZ2V0RGF0YUZyb21Gb3JtcyhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy9jaGVjayBpZiB0aGUgZm9ybSBpcyBhc3NvY2lhdGVkIHdpdGggYWRkaW5nIGEgdGFzayBvciBhIHByb2plY3RcbiAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5pbmNsdWRlcygndGFzaycpKSB7XG4gICAgZ2V0RGF0YUZyb21UYXNrRm9ybSgpO1xuICB9IGVsc2UgZ2V0RGF0YUZyb21Qcm9qZWN0Rm9ybSgpO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhRnJvbVRhc2tGb3JtKCkge1xuICBjb25zdCB0YXNrVGl0bGVRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSAjdGl0bGUnKTtcbiAgY29uc3QgcHJvamVjdFRvQXNzaWduUXVlcmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gc2VsZWN0Jyk7XG4gIGNvbnN0IGRldGFpbHNRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSB0ZXh0YXJlYScpO1xuICBjb25zdCBkdWVEYXRlUXVlcmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gI2RhdGUnKTtcbiAgY29uc3QgcHJpb3JpdHlRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybSBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcblxuICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrVGl0bGVRdWVyaWVyLnZhbHVlO1xuICBjb25zdCBwcm9qZWN0VG9Bc3NpZ25UbyA9IHByb2plY3RUb0Fzc2lnblF1ZXJpZXIudmFsdWU7XG4gIGNvbnN0IGRldGFpbHMgPSBkZXRhaWxzUXVlcmllci52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVRdWVyaWVyLnZhbHVlO1xuICBsZXQgcHJpb3JpdHk7XG5cbiAgcHJpb3JpdHlRdWVyaWVyLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgaWYgKHJhZGlvLmNoZWNrZWQpIHByaW9yaXR5ID0gcmFkaW8udmFsdWU7XG4gIH0pO1xuXG4gIGNvbnN0IHRhc2tUb0FkZCA9IG5ldyBUYXNrKHRhc2tUaXRsZSk7XG4gIHRhc2tUb0FkZC5hZGREZXRhaWxzKGRldGFpbHMpO1xuICB0YXNrVG9BZGQuYWRkRHVlRGF0ZShkdWVEYXRlKTtcbiAgdGFza1RvQWRkLmFkZFByaW9yaXR5KHByaW9yaXR5KTtcblxuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBpZiAocHJvamVjdC5nZXRUaXRsZSgpID09PSBwcm9qZWN0VG9Bc3NpZ25Ubykge1xuICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2tUb0FkZCk7XG4gICAgfVxuICB9KTtcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKHByb2plY3RzKVxufVxuXG5mdW5jdGlvbiBnZXREYXRhRnJvbVByb2plY3RGb3JtKCkge1xuICBjb25zdCBwcm9qZWN0VGl0bGVRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSAudGl0bGUnKTtcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGVRdWVyaWVyLnZhbHVlO1xuXG4gIGNvbnN0IHByb2plY3RUb0FkZCA9IG5ldyBQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QocHJvamVjdFRvQWRkKTtcbn1cbiIsImltcG9ydCBlbGVtZW50RnJvbUh0bWwgZnJvbSAnLi9tb2RhbC1mb3JtLWJ1aWxkJztcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgeyBidWlsZFRhc2tEb21FbGVtZW50IH0gZnJvbSAnLi9kb20tZGlzcGxheS10YXNrJztcbmltcG9ydCB7IGJ1aWxkRWRpdEludGVyZmFjZSwgZGVsZXRlUHJvamVjdCB9IGZyb20gJy4vZWRpdC1wcm9qZWN0JztcbmltcG9ydCB7IHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzcyB9IGZyb20gJy4vaW5kZXgnO1xuXG5jb25zdCBtYWluQXJlYUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1hcmVhLWNvbnRlbnQnKTtcbmNvbnN0IG1haW5BcmVhVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1hcmVhLXRpdGxlJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFByb2plY3REb21FbGVtZW50KHBhcmVudCkge1xuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIHBhcmVudC5pbm5lckhUTUwgPSAnJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbGFzdFByb2plY3RBZGRlZCA9IHByb2plY3RzW2ldO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGxhc3RQcm9qZWN0QWRkZWQuZ2V0VGl0bGUoKTtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBsYXN0UHJvamVjdEFkZGVkLmlkO1xuIFxuICAgIGNvbnN0IHByb2plY3QgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWNvbnRhaW5lclwiIGRhdGEtaWQ9XCIke3Byb2plY3RJZH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0XCIgZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhhbWJ1cmdlclwiPuKYsDwvc3Bhbj5cbiAgICAgICAgPGRpdj4ke3Byb2plY3RUaXRsZX08L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RzXCIgZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiPiYjeDIyRUVcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwXCIgZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRcIiBkYXRhLWlkPVwiJHtwcm9qZWN0SWR9XCI+RWRpdDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZVwiIGRhdGEtaWQ9XCIke3Byb2plY3RJZH1cIj5EZWxldGU8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuICAgIFxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW5kZXJQcm9qZWN0VGFza3MobGFzdFByb2plY3RBZGRlZCk7XG4gICAgICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9qZWN0RWRpdCA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLmRvdHMnKTtcbiAgICBjb25zdCBwb3BVcCA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLnBvcC11cCcpO1xuICAgIGNvbnN0IHJlbmFtZUJ1dHRvbiA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLmVkaXQnKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcblxuICAgIHJlbmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ1aWxkRWRpdEludGVyZmFjZSk7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlUHJvamVjdCk7XG4gICAgcHJvamVjdEVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwb3BVcC5jbGFzc0xpc3QuYWRkKCdwb3BwaW5nJykpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCAhPT0gcHJvamVjdEVkaXQpIHBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdFRhc2tzID0gcHJvamVjdC5nZXRUYXNrcygpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICBtYWluQXJlYVRpdGxlLnRleHRDb250ZW50ID0gYFByb2plY3Q6ICR7cHJvamVjdFRpdGxlfWA7XG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCBwcm9qZWN0VGFza3MpO1xuXG4gIGlmIChwcm9qZWN0VGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgbWFpbkFyZWFDb250ZW50LnRleHRDb250ZW50ID1cbiAgICAgICdUaGlzIHByb2plY3QgYXBwZWFycyBlbXB0eS4gQWRkIHRhc2tzIHRvIGdldCBzdGFydGVkISc7XG4gIH1cbn1cbiIsImltcG9ydCBlbGVtZW50RnJvbUh0bWwgZnJvbSAnLi9tb2RhbC1mb3JtLWJ1aWxkJztcbmltcG9ydCB7IGJ1aWxkVGFza0VkaXRJbnRlcmZhY2UsIGRlbGV0ZVRhc2sgfSBmcm9tICcuL2VkaXQtdGFzayc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IHsgYnVpbGRUYXNrRGVsZXRpb25VbmRvUG9wVXAgfSBmcm9tICcuL2J1aWxkLXBvcC11cHMnO1xuaW1wb3J0IHBvcHVsYXRlTWFpbkFyZWEgZnJvbSAnLi9wb3B1bGF0ZS1tYWluLWFyZWEnO1xuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVGFza0RvbUVsZW1lbnQocGFyZW50LCB0YXNrcykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza1RpdGxlID0gdGFza3NbaV0udGl0bGU7XG4gICAgY29uc3QgdGFza0RldGFpbHMgPSB0YXNrc1tpXS5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2tzW2ldLmRhdGU7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGFza3NbaV0ucHJpb3JpdHk7XG4gICAgY29uc3QgdGFza0lkID0gdGFza3NbaV0uaWQ7XG4gICAgbGV0IGZsYWdDb2xvcjtcblxuICAgIGxldCB0YXNrRWxlbWVudCA9IGVsZW1lbnRGcm9tSHRtbChgXG4gICAgPGRpdiBjbGFzcz1cInRhc2stYm9keVwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRhc2stY2hlY2tcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInRhc2stdGl0bGVcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+JHt0YXNrVGl0bGV9PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlsc1wiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj4ke3Rhc2tEZXRhaWxzfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kdWUtZGF0ZVwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj4ke3Rhc2tEdWVEYXRlfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxhZy1jb250YWluZXJcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRvdHNcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+JiN4MjJFRVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdFwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj5FZGl0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlXCIgZGF0YS1pZD1cIiR7dGFza0lkfVwiPkRlbGV0ZTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgKTtcblxuICAgIHN3aXRjaCAodGFza1ByaW9yaXR5KSB7XG4gICAgICBjYXNlICdsb3cnOlxuICAgICAgICBmbGFnQ29sb3IgPSAnIzIyZDNlZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgZmxhZ0NvbG9yID0gJyNmYjkyM2MnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICBmbGFnQ29sb3IgPSAnI2VmNDQ0NCc7XG4gICAgfVxuXG4gICAgbGV0IGZsYWcgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cInV0Zi04XCI/PjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+XG4gICAgICA8c3ZnIHdpZHRoPVwiMjJweFwiIGhlaWdodD1cIjIycHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIiR7ZmxhZ0NvbG9yfVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgIDxwYXRoIG9wYWNpdHk9XCIwLjE1XCIgZD1cIk00IDRIMjBMMTUgOUwyMCAxNEg0VjRaXCIvPlxuICAgICAgPHBhdGggZD1cIk00IDIxVjE0TTQgMTRWNEgyMEwxNSA5TDIwIDE0SDRaXCIgc3Ryb2tlPVwiJHtmbGFnQ29sb3J9XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxuICAgIDwvc3ZnPlxuICBgKTtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gICAgY29uc3QgZmxhZ0NvbnRhaW5lciA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGFnLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRhc2tEb21FbGVtZW50ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYm9keScpO1xuICAgIGNvbnN0IGRldGFpbHNFbGVtZW50ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlscycpO1xuICAgIGNvbnN0IGVkaXRUYXNrID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZG90cycpO1xuICAgIGNvbnN0IHJlbmFtZUJ1dHRvbiA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuICAgIGNvbnN0IHBvcFVwID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cCcpO1xuICAgIGNvbnN0IHRhc2tDaGVjayA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNoZWNrJyk7XG5cbiAgICByZW5hbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidWlsZFRhc2tFZGl0SW50ZXJmYWNlKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUYXNrKTtcbiAgICBlZGl0VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBvcFVwLmNsYXNzTGlzdC5hZGQoJ3BvcHBpbmcnKSk7XG4gICAgdGFza0NoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIGhhbmRsZVRhc2tDb21wbGV0aW9uKHRhc2tFbGVtZW50KVxuICAgICk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ICE9PSBlZGl0VGFzaykgcG9wVXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wcGluZycpO1xuICAgIH0pO1xuXG4gICAgZmxhZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChmbGFnKTtcbiAgICB0YXNrRG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICBkZXRhaWxzRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LWRldGFpbHMnKVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0NvbXBsZXRpb24odGFza0VsZW1lbnQpIHtcbiAgY29uc3QgdGFza1RpdGxlID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKTtcbiAgY29uc3QgdGFza0NoZWNrID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY2hlY2snKTtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuXG4gIGlmICh0YXNrQ2hlY2suY2hlY2tlZCkge1xuICAgIHRhc2tUaXRsZS5pbm5lckhUTUwgPSBgPHM+JHt0YXNrVGl0bGUudGV4dENvbnRlbnR9PC9zPmA7XG4gIH0gZWxzZSB0YXNrVGl0bGUuaW5uZXJIVE1MID0gdGFza1RpdGxlLnRleHRDb250ZW50O1xuXG4gIGxldCBzZWxlY3RlZFRhc2s7XG4gIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuQWxsVGFza3MoKTtcbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrQ2hlY2suZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpIHNlbGVjdGVkVGFzayA9IHRhc2s7XG4gIH0pO1xuXG4gIHNlbGVjdGVkVGFzay50b2dnbGVDb21wbGV0aW9uU3RhdHVzKCk7XG5cbiAgZnVuY3Rpb24gZGVsZXRlQ29tcGxldGVkVGFzaygpIHtcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5tb3ZlVG9Db21wbGV0ZWRUYXNrcygpO1xuICAgIH0pO1xuICAgIHBvcHVsYXRlTWFpbkFyZWEoKTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoYWxsUHJvamVjdHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5kb1Rhc2tEZWxldGlvbigpIHtcbiAgICBjb25zdCB1bmRvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuZG8tYnV0dG9uJyk7XG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay11bmRvJyk7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuXG4gICAgdW5kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgLy9zd2l0Y2ggdGhlIGNvbXBsZXRpb24gc3RhdHVzIGJhY2sgdG8gZmFsc2VcbiAgICAgICAgc2VsZWN0ZWRUYXNrLnRvZ2dsZUNvbXBsZXRpb25TdGF0dXMoKTtcbiAgICAgICAgcHJvamVjdC5tb3ZlVG9VbmNvbXBsZXRlZFRhc2tzKCk7XG4gICAgICAgIHBvcHVsYXRlTWFpbkFyZWEoKTtcbiAgICAgICAgcG9wVXAucmVtb3ZlKCk7XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShhbGxQcm9qZWN0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRpbWVvdXQoYnVpbGRUYXNrRGVsZXRpb25VbmRvUG9wVXAsIDcwMCk7XG4gIHNldFRpbWVvdXQoZGVsZXRlQ29tcGxldGVkVGFzaywgNzAwKTtcbiAgc2V0VGltZW91dCh1bmRvVGFza0RlbGV0aW9uLCA3MDApO1xuXG4gIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3QuY2xlYXJDb21wbGV0ZWRUYXNrcygpKVxuICBzZXRUaW1lb3V0KHVwZGF0ZUxvY2FsU3RvcmFnZShhbGxQcm9qZWN0cyksIDcwMCk7XG59XG4iLCJpbXBvcnQgZWxlbWVudEZyb21IdG1sIGZyb20gJy4vbW9kYWwtZm9ybS1idWlsZCc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IHsgZGlzcGxheUFsbFRhc2tzIH0gZnJvbSAnLi9uYXYtdXRpbGl0eSc7XG5pbXBvcnQgeyBidWlsZENvbmZpcm1EZWxldGVQcm9qZWN0UG9wVXAgfSBmcm9tICcuL2J1aWxkLXBvcC11cHMnO1xuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRWRpdEludGVyZmFjZShlKSB7XG4gIGNvbnN0IGNsaWNrZWRQcm9qZWN0SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuXG4gIGxldCBwcm9qZWN0VG9FZGl0O1xuICBmb3IgKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzKSB7XG4gICAgaWYgKHByb2plY3QuaWQgPT09IGNsaWNrZWRQcm9qZWN0SWQpIHByb2plY3RUb0VkaXQgPSBwcm9qZWN0O1xuICB9XG5cbiAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdFRvRWRpdC5nZXRUaXRsZSgpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0TW9kYWwgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJhZGQtbmV3LW1vZGFsIHByb2plY3QtZWRpdC1tb2RhbC0ke2NsaWNrZWRQcm9qZWN0SWR9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgIDxoMz5FZGl0IFByb2plY3Q8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UgY2xvc2UtZWRpdC1wcm9qZWN0LSR7Y2xpY2tlZFByb2plY3RJZH1cIj4mI3gyNzE1PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1uYXZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL21vZGFsLXByb2plY3QucG5nXCI+XG4gICAgICAgICAgICA8ZGl2PlByb2plY3Q8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwicHJvamVjdC1lZGl0LWZvcm0tJHtjbGlja2VkUHJvamVjdElkfVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0aXRsZSBlZGl0LXRpdGxlLSR7Y2xpY2tlZFByb2plY3RJZH1cIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHtwcm9qZWN0VGl0bGV9XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInByb2plY3Qtc3VibWl0XCI+XG4gICAgICAgICAgICBFZGl0IFByb2plY3Q8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZWRpdFByb2plY3RNb2RhbCk7XG4gIGNvbnN0IHByb2plY3RFZGl0TW9kYWwgPSBlZGl0UHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5wcm9qZWN0LWVkaXQtbW9kYWwtJHtjbGlja2VkUHJvamVjdElkfWBcbiAgKTtcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBlZGl0UHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5jbG9zZS1lZGl0LXByb2plY3QtJHtjbGlja2VkUHJvamVjdElkfWBcbiAgKTtcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGVkaXRQcm9qZWN0TW9kYWwucXVlcnlTZWxlY3RvcihcbiAgICBgLnByb2plY3QtZWRpdC1mb3JtLSR7Y2xpY2tlZFByb2plY3RJZH1gXG4gICk7XG4gIGNvbnN0IGVkaXRlZFRpdGxlSW5wdXQgPSBlZGl0UHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5lZGl0LXRpdGxlLSR7Y2xpY2tlZFByb2plY3RJZH1gXG4gICk7XG5cbiAgcHJvamVjdEVkaXRNb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMSknO1xuXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3RFZGl0TW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDApJztcbiAgfSk7XG5cbiAgc3VibWl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBlZGl0IHByb2plY3QgaW4gYnVzaW5lc3MgbG9naWNcbiAgICBjb25zdCBlZGl0ZWRUaXRsZSA9IGVkaXRlZFRpdGxlSW5wdXQudmFsdWU7XG4gICAgcHJvamVjdFRvRWRpdC5jaGFuZ2VUaXRsZShlZGl0ZWRUaXRsZSk7XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKGFsbFByb2plY3RzKVxuICAgIC8vZWRpdCBwcm9qZWN0IGluIERPTVxuICAgIGVkaXRQcm9qZWN0TmFtZUZyb21Eb20oY2xpY2tlZFByb2plY3RJZCwgZWRpdGVkVGl0bGUpO1xuXG4gICAgcHJvamVjdEVkaXRNb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMCknO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSkge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBjb25zdCBjbGlja2VkUHJvamVjdElkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcblxuICBidWlsZENvbmZpcm1EZWxldGVQcm9qZWN0UG9wVXAoKTtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cC1kZWxldGUnKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJyk7XG5cbiAgbGV0IHByb2plY3RUb0RlbGV0ZTtcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0cykge1xuICAgIGlmIChwcm9qZWN0LmlkID09PSBjbGlja2VkUHJvamVjdElkKSBwcm9qZWN0VG9EZWxldGUgPSBwcm9qZWN0O1xuICB9XG5cbiAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0VG9EZWxldGUuZ2V0VGl0bGUoKX1gXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVByb2plY3RBZnRlckNvbmZpcm0pO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3RBZnRlckNvbmZpcm0oKSB7XG4gICAgLy9yZW1vdmUgcHJvamVjdCBmcm9tIGJ1c2luZXNzIGxvZ2ljXG4gICAgcHJvamVjdE1hbmFnZXIucmVtb3ZlUHJvamVjdChwcm9qZWN0VG9EZWxldGUpO1xuICAgIC8vcmVtb3ZlIHByb2plY3QgZnJvbSBET01cbiAgICByZW1vdmVQcm9qZWN0RnJvbURvbShjbGlja2VkUHJvamVjdElkKTtcbiAgICBkaXNwbGF5QWxsVGFza3MoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdE5hbWVGcm9tRG9tKGlkLCBlZGl0VmFsdWUpIHtcbiAgY29uc3QgcHJvamVjdERvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAucHJvamVjdFtkYXRhLWlkPVwiJHtpZH1cIl0gPiBkaXZgXG4gICk7XG4gIHByb2plY3REb21FbGVtZW50LnRleHRDb250ZW50ID0gZWRpdFZhbHVlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0RnJvbURvbShpZCkge1xuICBjb25zdCBwcm9qZWN0RG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5wcm9qZWN0LWNvbnRhaW5lcltkYXRhLWlkPVwiJHtpZH1cIl1gXG4gICk7XG4gIHByb2plY3REb21FbGVtZW50LnJlbW92ZSgpO1xufVxuIiwiaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCBlbGVtZW50RnJvbUh0bWwgZnJvbSAnLi9tb2RhbC1mb3JtLWJ1aWxkJztcbmltcG9ydCBwb3B1bGF0ZU1haW5BcmVhIGZyb20gJy4vcG9wdWxhdGUtbWFpbi1hcmVhJztcbmltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRhc2tFZGl0SW50ZXJmYWNlKGUpIHtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuICBjb25zdCBjbGlja2VkVGFza0lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuQWxsVGFza3MoKTtcbiAgbGV0IHRhc2tUb0VkaXQ7XG4gIGZvciAobGV0IHRhc2sgb2YgYWxsVGFza3MpIHtcbiAgICBpZiAodGFzay5pZCA9PT0gY2xpY2tlZFRhc2tJZCkgdGFza1RvRWRpdCA9IHRhc2s7XG4gIH1cblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrVG9FZGl0LnRpdGxlO1xuICBjb25zdCB0YXNrRGV0YWlscyA9IHRhc2tUb0VkaXQuZGVzY3JpcHRpb247XG4gIGNvbnN0IHRhc2tEYXRlID0gdGFza1RvRWRpdC5kYXRlO1xuXG4gIGNvbnN0IGVkaXRUYXNrTW9kYWwgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJhZGQtbmV3LW1vZGFsIHRhc2stZWRpdC1tb2RhbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICA8aDM+RWRpdCBUYXNrPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlIGNsb3NlLWVkaXQtdGFza1wiPiYjeDI3MTU8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLW5hdlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9hc3NldHMvbW9kYWwtdGFzay5wbmdcIj5cbiAgICAgICAgICAgIDxkaXY+VGFzazwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJ0YXNrLWVkaXQtZm9ybVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZTogUGF5IGJpbGxzXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZWRpdC10aXRsZVwiIHZhbHVlPVwiJHt0YXNrVGl0bGV9XCIgcmVxdWlyZWQvPlxuICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiRGV0YWlsczogZS5nIGludGVybmV0LCBwaG9uZSwgcmVudC5cIlxuICAgICAgICAgICAgY2xhc3M9XCJlZGl0LWRldGFpbHNcIj4ke3Rhc2tEZXRhaWxzfTwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPjxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZWRpdC1kYXRlXCIgdmFsdWU9XCIke3Rhc2tEYXRlfVwiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1yYWRpb1wiPlxuICAgICAgICAgICAgICA8c3Bhbj5Qcmlvcml0eTo8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpby1idXR0b24gcmFkaW8tbG93XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwibG93XCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJsb3dcIi8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvd1wiPkxPVzwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW8tYnV0dG9uIHJhZGlvLW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIm1lZGl1bVwiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibWVkaXVtXCIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZWRpdW1cIj5NRURJVU08L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvLWJ1dHRvbiByYWRpby1oaWdoXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiaGlnaFwiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwiaGlnaFwiLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaGlnaFwiPkhJR0g8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJ0YXNrIHRhc2stc3VibWl0XCI+RWRpdCBUYXNrPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZWRpdFRhc2tNb2RhbCk7XG5cbiAgKGZ1bmN0aW9uIGFkZFRhc2tQcmlvcml0eSgpIHtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrVG9FZGl0LnByaW9yaXR5O1xuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG4gICAgY29uc3QgbG93UmFkaW9CdXR0b24gPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwibG93XCJdJyk7XG4gICAgY29uc3QgbWVkaXVtUmFkaW9CdXR0b24gPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwibWVkaXVtXCJdJyk7XG4gICAgY29uc3QgaGlnaFJhZGlvQnV0dG9uID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImhpZ2hcIl0nKTtcblxuICAgIHJhZGlvQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKSk7XG5cbiAgICBzd2l0Y2ggKHRhc2tQcmlvcml0eSkge1xuICAgICAgY2FzZSAnbG93JzpcbiAgICAgICAgbG93UmFkaW9CdXR0b24uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIG1lZGl1bVJhZGlvQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgaGlnaFJhZGlvQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KSgpO1xuXG4gIGNvbnN0IHRhc2tFZGl0TW9kYWwgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXQtbW9kYWwnKTtcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1lZGl0LXRhc2snKTtcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcignLnRhc2stZWRpdC1mb3JtJyk7XG4gIGNvbnN0IGVkaXRlZFRpdGxlSW5wdXQgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRpdGxlJyk7XG4gIGNvbnN0IGVkaXRlZERldGFpbHNJbnB1dCA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcignLmVkaXQtZGV0YWlscycpO1xuICBjb25zdCBlZGl0ZWREYXRlSW5wdXQgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWRhdGUnKTtcblxuICB0YXNrRWRpdE1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgxKSc7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRhc2tFZGl0TW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDApJztcbiAgfSk7XG5cbiAgc3VibWl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBlZGl0IHRhc2sgaW4gYnVzaW5lc3MgbG9naWNcbiAgICBjb25zdCBlZGl0ZWRUaXRsZSA9IGVkaXRlZFRpdGxlSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZWRpdGVkRGV0YWlscyA9IGVkaXRlZERldGFpbHNJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBlZGl0ZWREYXRlID0gZWRpdGVkRGF0ZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG5cbiAgICB0YXNrVG9FZGl0LmNoYW5nZVRpdGxlKGVkaXRlZFRpdGxlKTtcbiAgICB0YXNrVG9FZGl0LmFkZERldGFpbHMoZWRpdGVkRGV0YWlscyk7XG4gICAgdGFza1RvRWRpdC5hZGREdWVEYXRlKGVkaXRlZERhdGUpO1xuICAgIHJhZGlvQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChidXR0b24uY2hlY2tlZCkgdGFza1RvRWRpdC5wcmlvcml0eSA9IGJ1dHRvbi52YWx1ZTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShhbGxQcm9qZWN0cylcbiAgICAvL2VkaXQgcHJvamVjdCBpbiBET01cbiAgICBwb3B1bGF0ZU1haW5BcmVhKCk7XG5cbiAgICB0YXNrRWRpdE1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgwKSc7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhlKSB7XG4gIGNvbnN0IGNsaWNrZWRUYXNrSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5BbGxUYXNrcygpO1xuICBsZXQgdGFza1RvRGVsZXRlO1xuICBmb3IgKGxldCB0YXNrIG9mIGFsbFRhc2tzKSB7XG4gICAgaWYgKHRhc2suaWQgPT09IGNsaWNrZWRUYXNrSWQpIHRhc2tUb0RlbGV0ZSA9IHRhc2s7XG4gIH1cbiAgLy9yZW1vdmUgcHJvamVjdCBmcm9tIGJ1c2luZXNzIGxvZ2ljXG4gIHRhc2tUb0RlbGV0ZS5jb21wbGV0aW9uU3RhdHVzID0gdHJ1ZTtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm1vdmVUb0NvbXBsZXRlZFRhc2tzKCkpO1xuICBcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKGFsbFByb2plY3RzKVxuICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gRE9NXG4gIHBvcHVsYXRlTWFpbkFyZWEoKTtcbn1cbiIsImltcG9ydCB7IHBvcE1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSAnLi9tb2RhbC1tYW5pcHVsYXRpb24nO1xuaW1wb3J0IHsgYnVpbGRQcm9qZWN0RG9tRWxlbWVudCB9IGZyb20gJy4vZG9tLWRpc3BsYXktcHJvamVjdCc7XG5pbXBvcnQgeyBidWlsZExvY2FsU3RvcmFnZU5ld1VzZXIgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHtcbiAgZGlzcGxheUFsbFRhc2tzLFxuICBkaXNwbGF5SW1wb3J0YW50VGFza3MsXG4gIGRpc3BsYXlUb2RheVRhc2tzLFxuICBkaXNwbGF5V2Vla1Rhc2tzLFxufSBmcm9tICcuL25hdi11dGlsaXR5JztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldycpO1xuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1oZWFkZXIgLmNsb3NlJyk7XG5jb25zdCBwcm9qZWN0c0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtYXJlYScpO1xuY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG5jb25zdCBuZXh0V2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXZlbi1kYXlzJyk7XG5jb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1wb3J0YW50Jyk7XG5cbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBvcE1vZGFsKCkpO1xuY2xvc2VNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlTW9kYWwoKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MoKSB7XG4gIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XG4gIGFsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xufVxuXG5hbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZGlzcGxheUFsbFRhc2tzKCk7XG4gIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzcygpO1xuICBhbGxUYXNrcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pO1xuXG50b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZGlzcGxheVRvZGF5VGFza3MoKTtcbiAgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSk7XG5cbm5leHRXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkaXNwbGF5V2Vla1Rhc2tzKCk7XG4gIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzcygpO1xuICBuZXh0V2Vlay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pO1xuXG5pbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRpc3BsYXlJbXBvcnRhbnRUYXNrcygpO1xuICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgaW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSk7XG5cbmJ1aWxkTG9jYWxTdG9yYWdlTmV3VXNlcigpO1xuYnVpbGRQcm9qZWN0RG9tRWxlbWVudChwcm9qZWN0c0FyZWEpO1xuZGlzcGxheUFsbFRhc2tzKCk7XG4iLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG4gIFxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZShkYikge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGInLCBKU09OLnN0cmluZ2lmeShkYikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0cmlldmVMb2NhbFN0b3JhZ2UoZGIpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcGFyc2VkTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYikpO1xuICAgIC8vIGFkZGluZyBiYWNrIGFsbCBvZiB0aGUgbWV0aG9kcyBvZiB0aGUgUHJvamVjdCBjbGFzcyBpbiBpdCdzIHByb3RvdHlwZSB0byBlYWNoIGluc3RhbmNlXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwYXJzZWRMb2NhbFN0b3JhZ2UpXG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YocHJvamVjdCwgUHJvamVjdC5wcm90b3R5cGUpO1xuICAgIC8vIGFkZGluZyBiYWNrIGFsbCBvZiB0aGUgbWV0aG9kcyBvZiB0aGUgVGFzayBjbGFzcyBpbiBpdCdzIHByb3RvdHlwZSB0byBlYWNoIGluc3RhbmNlXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwYXJzZWRMb2NhbFN0b3JhZ2UpIHtcbiAgICAgIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdC5nZXRUYXNrcygpO1xuICAgICAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4gT2JqZWN0LnNldFByb3RvdHlwZU9mKHRhc2ssIFRhc2sucHJvdG90eXBlKSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRMb2NhbFN0b3JhZ2U7XG4gIH0gZWxzZSByZXR1cm4gW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZExvY2FsU3RvcmFnZU5ld1VzZXIoKSB7XG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RiJykpIHtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdZb3VyIEZpcnN0IFByb2plY3QnKTtcbiAgICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVsZW1lbnRGcm9tSHRtbChodG1sKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gaHRtbC50cmltKCk7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IHRhc2tGb3JtID0gZWxlbWVudEZyb21IdG1sKGBcbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGU6IFBheSBiaWxsc1wiIHJlcXVpcmVkLz5cbiAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+XG4gICAgPGxhYmVsIGZvcj1cInByb2plY3RcIj5Qcm9qZWN0IHRvIGFzc2lnbiB0bzogPC9sYWJlbD5cbiAgICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cInByb2plY3RcIj48L3NlbGVjdD5cbiAgPC9kaXY+XG4gIDx0ZXh0YXJlYSBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIkRldGFpbHM6IGUuZyBpbnRlcm5ldCwgcGhvbmUsIHJlbnQuXCI+PC90ZXh0YXJlYT5cbiAgPGRpdiBjbGFzcz1cImRhdGUtY29udGFpbmVyXCI+XG4gICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+PGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgcmVxdWlyZWQvPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInByaW9yaXR5LXJhZGlvXCI+XG4gICAgPHNwYW4+UHJpb3JpdHk6PC9zcGFuPlxuICAgIDxkaXYgY2xhc3M9XCJyYWRpby1idXR0b24gcmFkaW8tbG93XCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJsb3dcIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImxvd1wiIGNoZWNrZWQvPlxuICAgICAgPGxhYmVsIGZvcj1cImxvd1wiPkxPVzwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJhZGlvLWJ1dHRvbiByYWRpby1tZWRpdW1cIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIm1lZGl1bVwiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibWVkaXVtXCIvPlxuICAgICAgPGxhYmVsIGZvcj1cIm1lZGl1bVwiPk1FRElVTTwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJhZGlvLWJ1dHRvbiByYWRpby1oaWdoXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJoaWdoXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJoaWdoXCIvPlxuICAgICAgPGxhYmVsIGZvcj1cImhpZ2hcIj5ISUdIPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInRhc2sgdGFzay1zdWJtaXRcIj5BZGQgVGFzazwvYnV0dG9uPlxuICA8L2Rpdj5cbmApO1xuXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGVsZW1lbnRGcm9tSHRtbChgXG4gIDxpbnB1dCBjbGFzcz1cInRpdGxlXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRpdGxlOiBIb3VzZSBSZW5vdmF0aW9uXCIgcmVxdWlyZWQ+XG4gIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwicHJvamVjdC1zdWJtaXRcIj5DcmVhdGUgUHJvamVjdDwvYnV0dG9uPlxuYCk7XG5cbmV4cG9ydCB7IHRhc2tGb3JtLCBwcm9qZWN0Rm9ybSB9O1xuIiwiaW1wb3J0IHsgYnVpbGRQcm9qZWN0RG9tRWxlbWVudCB9IGZyb20gJy4vZG9tLWRpc3BsYXktcHJvamVjdCc7XG5pbXBvcnQgeyB0YXNrRm9ybSwgcHJvamVjdEZvcm0gfSBmcm9tICcuL21vZGFsLWZvcm0tYnVpbGQnO1xuaW1wb3J0IHsgZ2V0RGF0YUZyb21Gb3JtcyB9IGZyb20gJy4vZGF0YS1tYW5pcHVsYXRpb24nO1xuaW1wb3J0IHBvcHVsYXRlTWFpbkFyZWEgZnJvbSAnLi9wb3B1bGF0ZS1tYWluLWFyZWEnO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmV4cG9ydCB7IHBvcE1vZGFsLCBjbG9zZU1vZGFsIH07XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctbW9kYWwnKTtcblxuZnVuY3Rpb24gdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzRnJvbU1vZGFsKCkge1xuICBjb25zdCBtb2RhbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC1uZXctbW9kYWwgZGl2Jyk7XG4gIG1vZGFsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVCbHVyKG1vZGFsKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIC8vY2hlY2sgaWYgJ3BvcHBpbmcnIGNsYXNzIGluIG1vZGFsOyBtZWFucyB3ZSBhcmUgb3BlbmluZyBtb2RhbFxuICBpZiAobW9kYWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmluY2x1ZGVzKCdwb3BwaW5nJykpIHtcbiAgICBoZWFkZXIuc3R5bGUuY3NzVGV4dCA9ICdmaWx0ZXI6IGJsdXIoM3B4KSc7XG4gICAgY29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2ZpbHRlcjogYmx1cigzcHgpJztcbiAgfSBlbHNlIHtcbiAgICBoZWFkZXIuc3R5bGUuY3NzVGV4dCA9ICdmaWx0ZXI6IGJsdXIoMHB4KSc7XG4gICAgY29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2ZpbHRlcjogYmx1cigwcHgpJztcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24oKSB7XG4gIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duIHNlbGVjdCcpO1xuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIGNvbnN0IG9wdGlvbnMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSk7XG5cbiAgaWYgKGRyb3Bkb3duID09PSBudWxsKSByZXR1cm47XG5cbiAgZHJvcGRvd24uaW5uZXJIVE1MID0gJyc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgb3B0ID0gb3B0aW9uc1tpXTtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGVsLnRleHRDb250ZW50ID0gb3B0O1xuICAgIGVsLnZhbHVlID0gb3B0O1xuICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGVsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3BNb2RhbCgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3BvcHBpbmcnKTtcbiAgbW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDEpJztcbiAgdG9nZ2xlQmx1cihtb2RhbCk7XG4gIGZvcm0uaW5uZXJIVE1MID0gJyc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICAvL2FkZGluZyAndGFzaycgY2xhc3MgaW4gb3JkZXIgdG8gZGlmZmVyZW50aWF0ZSB0aGUgZm9ybSB0eXBlICh0YXNrIG9yIHByb2plY3QpXG4gIGZvcm0uY2xhc3NOYW1lID0gJyc7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24oKTtcbiAgc3dpdGNoVG9UYXNrKCk7XG4gIHN3aXRjaFRvUHJvamVjdCgpO1xuICB0YXNrT3JQcm9qZWN0U3VibWl0KCk7XG5cbiAgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzRnJvbU1vZGFsKCk7XG4gIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgbW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDApJztcbiAgdG9nZ2xlQmx1cihtb2RhbCk7XG4gIC8vcmVwbGFjaW5nIGZvcm0gbm9kZSB3aXRoIGl0J3MgY2xvbmUgc28gdGhhdCB3ZSByZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICBmb3JtLnJlcGxhY2VXaXRoKGZvcm0uY2xvbmVOb2RlKHRydWUpKTtcbiAgZm9ybS5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUb1Rhc2soKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbmF2IC50YXNrJyk7XG4gIHRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZm9ybS5pbm5lckhUTUwgPSAnJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICcnO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIHBvcHVsYXRlUHJvamVjdHNEcm9wZG93bigpO1xuICAgIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzc0Zyb21Nb2RhbCgpO1xuICAgIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUb1Byb2plY3QoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbmF2IC5wcm9qZWN0Jyk7XG4gIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZm9ybS5pbm5lckhUTUwgPSAnJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICcnO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzc0Zyb21Nb2RhbCgpO1xuICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0YXNrT3JQcm9qZWN0U3VibWl0KCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZ2V0RGF0YUZyb21Gb3JtcyhlKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgaGFuZGxlRm9ybVN1Ym1pc3Npb24oKTtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVGb3JtU3VibWlzc2lvbigpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgcHJvamVjdHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWFyZWEnKTtcblxuICBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuaW5jbHVkZXMoJ3Rhc2snKSkge1xuICAgIHBvcHVsYXRlTWFpbkFyZWEoKTtcbiAgfSBlbHNlIHtcbiAgICBidWlsZFByb2plY3REb21FbGVtZW50KHByb2plY3RzQXJlYSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGJ1aWxkVGFza0RvbUVsZW1lbnQgfSBmcm9tICcuL2RvbS1kaXNwbGF5LXRhc2snO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCBpc1RvZGF5IGZyb20gJ2RhdGUtZm5zL2lzVG9kYXknO1xuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkRGF5cyc7XG5pbXBvcnQgaXNCZWZvcmUgZnJvbSAnZGF0ZS1mbnMvaXNCZWZvcmUnO1xuXG5jb25zdCBtYWluQXJlYVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJlYS10aXRsZScpO1xuY29uc3QgbWFpbkFyZWFDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJlYS1jb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGhhbmRsZU5vVGFza3ModGFza0xpc3QpIHtcbiAgaWYgKHRhc2tMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIG1haW5BcmVhQ29udGVudC50ZXh0Q29udGVudCA9ICdZYXkhIE5vIFRhc2tzISc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcbiAgY29uc3QgYWxsVGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxuICBtYWluQXJlYUNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIG1haW5BcmVhVGl0bGUudGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcbiAgYWxsVGFza3NCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCkpO1xuICBoYW5kbGVOb1Rhc2tzKHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZGF5VGFza3MoKSB7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG5cbiAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5BbGxUYXNrcygpO1xuICBsZXQgdG9kYXlUYXNrcyA9IFtdO1xuXG4gIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZGF0ZSk7XG4gICAgaWYgKGlzVG9kYXkodGFza0RhdGUpKSB0b2RheVRhc2tzLnB1c2godGFzayk7XG4gIH0pO1xuXG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCB0b2RheVRhc2tzKTtcbiAgaGFuZGxlTm9UYXNrcyh0b2RheVRhc2tzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVdlZWtUYXNrcygpIHtcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBtYWluQXJlYVRpdGxlLnRleHRDb250ZW50ID0gJ05leHQgNyBEYXlzJztcblxuICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCk7XG4gIGxldCBzZXZlbkRheXNUYXNrcyA9IFtdO1xuXG4gIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kYXRlKTtcbiAgICBjb25zdCBvbmVXZWVrTGF0ZXJEYXRlID0gYWRkRGF5cyh0b2RheURhdGUsIDcpO1xuICAgIGlmIChpc0JlZm9yZSh0YXNrRGF0ZSwgb25lV2Vla0xhdGVyRGF0ZSkpIHNldmVuRGF5c1Rhc2tzLnB1c2godGFzayk7XG4gIH0pO1xuXG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCBzZXZlbkRheXNUYXNrcyk7XG4gIGhhbmRsZU5vVGFza3Moc2V2ZW5EYXlzVGFza3MpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SW1wb3J0YW50VGFza3MoKSB7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuXG4gIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuQWxsVGFza3MoKTtcbiAgbGV0IGltcG9ydGFudFRhc2tzID0gW107XG5cbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgIGltcG9ydGFudFRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICB9KTtcblxuICBidWlsZFRhc2tEb21FbGVtZW50KG1haW5BcmVhQ29udGVudCwgaW1wb3J0YW50VGFza3MpO1xuICBoYW5kbGVOb1Rhc2tzKGltcG9ydGFudFRhc2tzKVxufVxuIiwiaW1wb3J0IHtcbiAgZGlzcGxheUFsbFRhc2tzLFxuICBkaXNwbGF5SW1wb3J0YW50VGFza3MsXG4gIGRpc3BsYXlUb2RheVRhc2tzLFxuICBkaXNwbGF5V2Vla1Rhc2tzLFxufSBmcm9tICcuL25hdi11dGlsaXR5JztcbmltcG9ydCB7IHJlbmRlclByb2plY3RUYXNrcyB9IGZyb20gJy4vZG9tLWRpc3BsYXktcHJvamVjdCc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuXG4vLyB1c2luZyB0aGlzIHRvIGhlbHAgcG9wdWxhdGUgdGhlIG1haW4gYXJlYSB3aXRoIHRoZSBhZGVxdWF0ZSBmaWx0ZXJlZCBjb250ZW50XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZU1haW5BcmVhKCkge1xuICBjb25zdCBuYXZTZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lID4gZGl2Jyk7XG4gIGNvbnN0IHByb2plY3REb21FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy5wcm9qZWN0cy1hcmVhID4gZGl2ID4gZGl2J1xuICApO1xuICBjb25zdCBmdW5jdGlvblRvUnVuRGljdGlvbmFyeSA9IHtcbiAgICAndGFza3MgYWN0aXZlJzogZGlzcGxheUFsbFRhc2tzLFxuICAgICd0b2RheSBhY3RpdmUnOiBkaXNwbGF5VG9kYXlUYXNrcyxcbiAgICAnc2V2ZW4tZGF5cyBhY3RpdmUnOiBkaXNwbGF5V2Vla1Rhc2tzLFxuICAgICdpbXBvcnRhbnQgYWN0aXZlJzogZGlzcGxheUltcG9ydGFudFRhc2tzLFxuICB9O1xuXG4gIGZvciAobGV0IHNlY3Rpb24gb2YgbmF2U2VjdGlvbnMpIHtcbiAgICBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgIGZ1bmN0aW9uVG9SdW5EaWN0aW9uYXJ5W2NsYXNzTGlzdF0oKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdERvbUVsZW1lbnRzKSB7XG4gICAgaWYgKHByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgICAgIGxldCBwcm9qZWN0VG9EaXNwbGF5O1xuICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0cykge1xuICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gcHJvamVjdElEKSBwcm9qZWN0VG9EaXNwbGF5ID0gcHJvamVjdDtcbiAgICAgIH1cbiAgICAgIHJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0VG9EaXNwbGF5KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vaWYgbm8gbmF2IGJ1dHRvbiBvciBwcm9qZWN0IGlzIHNlbGVjdGVkLCBzd2l0Y2ggdG8gQWxsIFRhc2tzICd0YWInXG4gIGRpc3BsYXlBbGxUYXNrcygpO1xufVxuIiwiaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlLCByZXRyaWV2ZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHByb2plY3RNYW5hZ2VyKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IHJldHJpZXZlTG9jYWxTdG9yYWdlKCdkYicpXG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgZm9yIChsZXQgaXRlcmF0ZWRQcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICBjb25zdCBwcm9qZWN0c1RpdGxlID0gW11cbiAgICAgIHByb2plY3RzVGl0bGUucHVzaChpdGVyYXRlZFByb2plY3QudGl0bGUpXG4gICAgICBpZiAocHJvamVjdHNUaXRsZS5pbmNsdWRlcyhwcm9qZWN0LnRpdGxlKSkgcmV0dXJuXG4gICAgfVxuICAgIHByb2plY3RzLnB1c2gocHJvamVjdClcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdHMpXG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3RzW2ldLnRpdGxlID09PSBwcm9qZWN0LnRpdGxlKSB7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbiAgfTtcblxuICBjb25zdCByZXR1cm5BbGxUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBhbGxUYXNrcyA9IFtdO1xuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgIGFsbFRhc2tzLnB1c2goLi4ucHJvamVjdC5nZXRUYXNrcygpKVxuICAgIH1cblxuICAgIHJldHVybiBhbGxUYXNrc1xuICB9XG5cbiAgY29uc3QgcmV0dXJuUHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcblxuICByZXR1cm4geyBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCByZXR1cm5Qcm9qZWN0cyAsIHJldHVybkFsbFRhc2tzfTtcbn0pKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMuY29tcGxldGVkVGFza3MgPSBbXTtcbiAgICB0aGlzLmdlbmVyYXRlSWQoKTtcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgfVxuXG4gIGNoYW5nZVRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgfVxuXG4gIGdlbmVyYXRlSWQoKSB7XG4gICAgdGhpcy5pZCA9IGBwcmotaWQke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpfWA7XG4gIH1cblxuICBtb3ZlVG9Db21wbGV0ZWRUYXNrcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnRhc2tzW2ldLmNvbXBsZXRpb25TdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRUYXNrcy5wdXNoKHRoaXMudGFza3NbaV0pO1xuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3ZlVG9VbmNvbXBsZXRlZFRhc2tzKCkge1xuICAgIGNvbnN0IHRhc2tUb01vdmUgPSB0aGlzLmNvbXBsZXRlZFRhc2tzW3RoaXMuY29tcGxldGVkVGFza3MubGVuZ3RoIC0gMV1cbiAgICB0aGlzLnRhc2tzLnB1c2godGFza1RvTW92ZSlcbiAgfVxuXG4gIGNsZWFyQ29tcGxldGVkVGFza3MoKSB7XG4gICAgdGhpcy5jb21wbGV0ZWRUYXNrcyA9IFtdXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmNvbXBsZXRpb25TdGF0dXMgPSBmYWxzZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5O1xuICAgIHRoaXMuZ2VuZXJhdGVJZCgpO1xuICB9XG5cbiAgY2hhbmdlVGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLnRpdGxlID0gdmFsdWU7XG4gIH1cblxuICBhZGREZXRhaWxzKHZhbHVlKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgYWRkRHVlRGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgYWRkUHJpb3JpdHkodmFsdWUpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWU7XG4gIH1cblxuICB0b2dnbGVDb21wbGV0aW9uU3RhdHVzKCkge1xuICAgIHRoaXMuY29tcGxldGlvblN0YXR1cyA9ICF0aGlzLmNvbXBsZXRpb25TdGF0dXM7XG4gIH1cblxuICBnZW5lcmF0ZUlkKCkge1xuICAgIHRoaXMuaWQgPSBgdHNrLWlkJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyKX1gO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==