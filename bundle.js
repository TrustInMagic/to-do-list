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

/***/ "./src/assets/7-days.png":
/*!*******************************!*\
  !*** ./src/assets/7-days.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/7-days.png");

/***/ }),

/***/ "./src/assets/important-star.svg":
/*!***************************************!*\
  !*** ./src/assets/important-star.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/important-star.svg");

/***/ }),

/***/ "./src/assets/logo-icon.png":
/*!**********************************!*\
  !*** ./src/assets/logo-icon.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/logo-icon.png");

/***/ }),

/***/ "./src/assets/modal-project.png":
/*!**************************************!*\
  !*** ./src/assets/modal-project.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/modal-project.png");

/***/ }),

/***/ "./src/assets/modal-task.png":
/*!***********************************!*\
  !*** ./src/assets/modal-task.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/modal-task.png");

/***/ }),

/***/ "./src/assets/page-icon.png":
/*!**********************************!*\
  !*** ./src/assets/page-icon.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/page-icon.png");

/***/ }),

/***/ "./src/assets/tasks.png":
/*!******************************!*\
  !*** ./src/assets/tasks.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/tasks.png");

/***/ }),

/***/ "./src/assets/today.png":
/*!******************************!*\
  !*** ./src/assets/today.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/today.png");

/***/ }),

/***/ "./src/assets/white-flag-svg.svg":
/*!***************************************!*\
  !*** ./src/assets/white-flag-svg.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/white-flag-svg.svg");

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

  allProjects.forEach((project) => project.clearCompletedTasks());
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
            <img src="./images/modal-project.png">
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
            <img src="./images/modal-task.png">
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
/* harmony import */ var _assets_logo_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/logo-icon.png */ "./src/assets/logo-icon.png");
/* harmony import */ var _assets_7_days_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/7-days.png */ "./src/assets/7-days.png");
/* harmony import */ var _assets_important_star_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/important-star.svg */ "./src/assets/important-star.svg");
/* harmony import */ var _assets_modal_project_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/modal-project.png */ "./src/assets/modal-project.png");
/* harmony import */ var _assets_modal_task_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/modal-task.png */ "./src/assets/modal-task.png");
/* harmony import */ var _assets_page_icon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/page-icon.png */ "./src/assets/page-icon.png");
/* harmony import */ var _assets_tasks_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/tasks.png */ "./src/assets/tasks.png");
/* harmony import */ var _assets_today_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/today.png */ "./src/assets/today.png");
/* harmony import */ var _assets_white_flag_svg_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/white-flag-svg.svg */ "./src/assets/white-flag-svg.svg");















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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxhQUFhLE9BQU8sWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFP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NUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNCZWZvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hc3NldHMvNy1kYXlzLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Fzc2V0cy9pbXBvcnRhbnQtc3Rhci5zdmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hc3NldHMvbG9nby1pY29uLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Fzc2V0cy9tb2RhbC1wcm9qZWN0LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Fzc2V0cy9tb2RhbC10YXNrLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Fzc2V0cy9wYWdlLWljb24ucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXNzZXRzL3Rhc2tzLnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Fzc2V0cy90b2RheS5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hc3NldHMvd2hpdGUtZmxhZy1zdmcuc3ZnIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2J1aWxkLXBvcC11cHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kYXRhLW1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS1kaXNwbGF5LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb20tZGlzcGxheS10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdC1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdC10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kYWwtZm9ybS1idWlsZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZGFsLW1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25hdi11dGlsaXR5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcG9wdWxhdGUtbWFpbi1hcmVhLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL0V4bzItVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1oZWFkZXItY29udGVudC1saWdodDogI2YzZjRmNjtcXG4gIC0tbmF2LWxpZ2h0OiAjZmZmZmZmO1xcbiAgLS1icmFuZC1ncmVlbjogIzA1OTY2OTtcXG4gIC0tZm9udC1jb2xvcjogIzQ0NDAzYztcXG4gIC0tZm9udC1jb2xvci1saWdodDogI2YxZjVmOTtcXG4gIC0taG92ZXItbmF2LWNvbG9yOiAjZTdlNWU0O1xcbiAgLS1uYXYtYWN0aXZlOiAjYTdmM2QwO1xcbiAgLS1hZGQtYnV0dG9uLWNvbG9yOiAjMjJkM2VlO1xcbiAgLS1wb3AtdXAtY29sb3I6ICNlNGU0ZTc7XFxuICAtLXBvcC11cC1ob3ZlcjogI2Q0ZDRkODtcXG4gIC0tbG93LXJhZGlvOiAjMjJkM2VlO1xcbiAgLS1tZWQtcmFkaW86ICNmYjkyM2M7XFxuICAtLWhpZ2gtcmFkaW86ICNlZjQ0NDQ7XFxuICAtLXBvcC11cC1oZWFkZXI6ICNmY2E1YTU7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBmb250LWZhbWlseTogc29ubywgJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbiogLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYWN0aXZlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzb25vO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb250ZW50LWxpZ2h0KTtcXG4gIGhlaWdodDogODBweDtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJyYW5kLWdyZWVuKSBzb2xpZCAycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMi43cmVtO1xcbn1cXG5cXG4uaGVhZGVyIGltZyB7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5oZWFkZXIgc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tYnJhbmQtZ3JlZW4pO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbn1cXG5cXG4vKiBuYXYgKi9cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IG1pbigyMCUsIDM1MHB4KTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBnYXA6IDQwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWxpZ2h0KTtcXG59XFxuXFxuLm5hdiBoMiB7XFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1mb250LWNvbG9yKSBzb2xpZCAycHg7XFxufVxcblxcbi5uYXYgYnV0dG9uIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZC1idXR0b24tY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggdmFyKC0tZm9udC1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIGNvbG9yOiB2YXIoLS1uYXYtbGlnaHQpO1xcbn1cXG5cXG4ubmF2IGJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLm5hdiBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5uYXYgaW1nIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4uaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmhvbWUgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5ob21lID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLW5hdi1jb2xvcik7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLyogbW9kYWwgKi9cXG5cXG4uYWRkLW5ldy1tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogNDAwcHg7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbnRlbnQtbGlnaHQpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtZ3JlZW4pO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jbG9zZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLyogbW9kYWwgbmF2ICovXFxuXFxuLm1vZGFsLW5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtbGlnaHQpO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCBpbWcge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ubW9kYWwtbmF2ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5tb2RhbC1uYXYgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbmF2LWNvbG9yKTtcXG59XFxuXFxuLmFkZC1uZXctbW9kYWwgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi8qIG1vZGFsIGZvcm0gKi9cXG5cXG4uYWRkLW5ldy1tb2RhbCBmb3JtID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi50YXNrLWVkaXQtZm9ybSA+IGRpdiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmZvcm0gPiBkaXYgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLyogbW9kYWwgaW5wdXQgKi9cXG5cXG4uYWRkLW5ldy1tb2RhbCBpbnB1dCxcXG4uYWRkLW5ldy1tb2RhbCB0ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5hZGQtbmV3LW1vZGFsIGlucHV0W3R5cGU9J3RleHQnXSxcXG50ZXh0YXJlYSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxuICBib3JkZXI6IHZhcigtLWJyYW5kLWdyZWVuKSAxcHggc29saWQ7XFxuICBjb2xvcjogdmFyKC0tYnJhbmQtZ3JlZW4pO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5kYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJpb3JpdHktcmFkaW8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGJvcmRlcjogdmFyKC0tYnJhbmQtZ3JlZW4pIHNvbGlkIDFweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4O1xcbiAgY29sb3I6IHZhcigtLWJyYW5kLWdyZWVuKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZm9ybSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtZ3JlZW4pO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuZm9ybSBzZWxlY3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbmF2LWNvbG9yKTtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLyogbW9kYWwgcmFkaW8tYnV0dG9ucyAqL1xcblxcbi5yYWRpby1idXR0b24ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW46IDAgNXB4IDAgMDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucmFkaW8tbG93IHtcXG4gIGJvcmRlcjogdmFyKC0tbG93LXJhZGlvKSBzb2xpZCAycHg7XFxuICBjb2xvcjogdmFyKC0tbG93LXJhZGlvKTtcXG59XFxuXFxuLnJhZGlvLWxvdzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcmFkaW8pO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnJhZGlvLW1lZGl1bSB7XFxuICBib3JkZXI6IHZhcigtLW1lZC1yYWRpbykgc29saWQgMnB4O1xcbiAgY29sb3I6IHZhcigtLW1lZC1yYWRpbyk7XFxufVxcblxcbi5yYWRpby1tZWRpdW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkLXJhZGlvKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5yYWRpby1oaWdoIHtcXG4gIGJvcmRlcjogdmFyKC0taGlnaC1yYWRpbykgc29saWQgMnB4O1xcbiAgY29sb3I6IHZhcigtLWhpZ2gtcmFkaW8pO1xcbn1cXG5cXG4ucmFkaW8taGlnaDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLXJhZGlvKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5yYWRpby1idXR0b24gbGFiZWwsXFxuLnJhZGlvLWJ1dHRvbiBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLnJhZGlvLWJ1dHRvbiBpbnB1dFt0eXBlPSdyYWRpbyddIHtcXG4gIG9wYWNpdHk6IDAuMDExO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4ucmFkaW8tbG93IGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1yYWRpbyk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yYWRpby1tZWRpdW0gaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkLXJhZGlvKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnJhZGlvLWhpZ2ggaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnJhZGlvLWJ1dHRvbiBsYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiA5MDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG59XFxuXFxuLyogcHJvamVjdCBlbGVtZW50Ki9cXG5cXG4ucHJvamVjdHMtYXJlYSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnByb2plY3RzLWFyZWEgLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi5kb3RzIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbmF2LWNvbG9yKTtcXG59XFxuXFxuLyogbWFpbi1hcmVhICovXFxuXFxuLm1haW4tYXJlYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29udGVudC1saWdodCk7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1hcmVhLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLWdyZWVuKTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogNzUlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFpbi1hcmVhLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbnRlbnQtbGlnaHQpO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi8qIHRhc2sgZWxlbWVudCAqL1xcblxcbi5tYWluLWFyZWEtY29udGVudCA+IGRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDNmciAwLjhmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZmZmZiwgI2Q3ZGRlOCk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stYm9keTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWJvZHk6aG92ZXI6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OTUpO1xcbn1cXG5cXG4udGFzay1ib2R5IGlucHV0IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGhlaWdodDogMTVweDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1ib2R5IC50YXNrLXRpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnRhc2stYm9keSAudGFzay1kZXRhaWxzIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stYm9keSAucmlnaHQtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaG93LWRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLyogdGFzayBlbGVtZW50IGNoZWNrYm94ICovXFxuXFxuLnRhc2stYm9keSBpbnB1dCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgd2lkdGg6IDEuMTVlbTtcXG4gIGhlaWdodDogMS4xNWVtO1xcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgY3VycmVudENvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xNWVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjA3NWVtKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWJvZHkgaW5wdXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDAuNjVlbTtcXG4gIGhlaWdodDogMC42NWVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tYnJhbmQtZ3JlZW4pO1xcbn1cXG5cXG4udGFzay1ib2R5IGlucHV0OmNoZWNrZWQ6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi8qIGVkaXQgYW5kIGRlbGV0ZSBwb3B1cCAqL1xcblxcbi5wb3AtdXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wLXVwLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGxlZnQ6IDVweDtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIgLmRvdHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucG9wLXVwID4gZGl2IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcC11cCA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3AtdXAtaG92ZXIpO1xcbn1cXG5cXG4ucG9wcGluZyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpICFpbXBvcnRhbnQ7XFxufVxcblxcbi50YXNrLWRvdHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBlZGl0IGFuZCBkZWxldGUgcG9wdXAgKHRhc2spICovXFxuXFxuLnRhc2stYm9keSAucG9wLXVwIHtcXG4gIGxlZnQ6IDEwcHg7XFxuICBib3R0b206IDIwcHg7XFxufVxcblxcbi8qIGNvbmZpcm0gZGVsZXRlIHBvcC11cCAqL1xcblxcbi5jb25maXJtLWRlbGV0ZS1wb3AtdXAge1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMjAlO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1saWdodCk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDE1cHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG5cXG4ucG9wLXVwLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3AtdXAtaGVhZGVyKTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuLnBvcC11cC1oZWFkZXIgLmNsb3NlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG59XFxuXFxuLnBvcC11cC1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWhvdmVyLW5hdi1jb2xvcik7XFxuICBtYXJnaW46IDBweCAxMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ucG9wLXVwLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwcHggMTBweDtcXG4gIGdhcDogMTBweDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5wb3AtdXAtYnV0dG9uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucG9wLXVwLWNhbmNlbCB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5wb3AtdXAtZGVsZXRlIHtcXG4gIGNvbG9yOiB2YXIoLS1oaWdoLXJhZGlvKTtcXG59XFxuXFxuLnBvcC11cC1jYW5jZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wb3AtdXAtZGVsZXRlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtcmFkaW8pO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogdGFzayB1bmRvIHBvcC11cCAqL1xcblxcbi50YXNrLXVuZG8ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA1cHg7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBcXG5cXG59XFxuXFxuLnVuZG8tYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1tZWQtcmFkaW8pO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnVuZG8tYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixrRUFBa0U7QUFDcEU7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNENBQTZDO0FBQy9DOztBQUVBLFdBQVc7O0FBRVg7RUFDRSw2Q0FBNkM7RUFDN0MsWUFBWTtFQUNaLDJDQUEyQztFQUMzQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VB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ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1oZWFkZXItY29udGVudC1saWdodDogI2YzZjRmNjtcXG4gIC0tbmF2LWxpZ2h0OiAjZmZmZmZmO1xcbiAgLS1icmFuZC1ncmVlbjogIzA1OTY2OTtcXG4gIC0tZm9udC1jb2xvcjogIzQ0NDAzYztcXG4gIC0tZm9udC1jb2xvci1saWdodDogI2YxZjVmOTtcXG4gIC0taG92ZXItbmF2LWNvbG9yOiAjZTdlNWU0O1xcbiAgLS1uYXYtYWN0aXZlOiAjYTdmM2QwO1xcbiAgLS1hZGQtYnV0dG9uLWNvbG9yOiAjMjJkM2VlO1xcbiAgLS1wb3AtdXAtY29sb3I6ICNlNGU0ZTc7XFxuICAtLXBvcC11cC1ob3ZlcjogI2Q0ZDRkODtcXG4gIC0tbG93LXJhZGlvOiAjMjJkM2VlO1xcbiAgLS1tZWQtcmFkaW86ICNmYjkyM2M7XFxuICAtLWhpZ2gtcmFkaW86ICNlZjQ0NDQ7XFxuICAtLXBvcC11cC1oZWFkZXI6ICNmY2E1YTU7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBmb250LWZhbWlseTogc29ubywgJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbiogLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYWN0aXZlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzb25vO1xcbiAgc3JjOiB1cmwoLi9hc3NldHMvRXhvMi1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb250ZW50LWxpZ2h0KTtcXG4gIGhlaWdodDogODBweDtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJyYW5kLWdyZWVuKSBzb2xpZCAycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMi43cmVtO1xcbn1cXG5cXG4uaGVhZGVyIGltZyB7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5oZWFkZXIgc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tYnJhbmQtZ3JlZW4pO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbn1cXG5cXG4vKiBuYXYgKi9cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IG1pbigyMCUsIDM1MHB4KTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBnYXA6IDQwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWxpZ2h0KTtcXG59XFxuXFxuLm5hdiBoMiB7XFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1mb250LWNvbG9yKSBzb2xpZCAycHg7XFxufVxcblxcbi5uYXYgYnV0dG9uIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZC1idXR0b24tY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggdmFyKC0tZm9udC1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIGNvbG9yOiB2YXIoLS1uYXYtbGlnaHQpO1xcbn1cXG5cXG4ubmF2IGJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLm5hdiBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5uYXYgaW1nIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4uaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmhvbWUgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5ob21lID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLW5hdi1jb2xvcik7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLyogbW9kYWwgKi9cXG5cXG4uYWRkLW5ldy1tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogNDAwcHg7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbnRlbnQtbGlnaHQpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtZ3JlZW4pO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jbG9zZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLyogbW9kYWwgbmF2ICovXFxuXFxuLm1vZGFsLW5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtbGlnaHQpO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCBpbWcge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ubW9kYWwtbmF2ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5tb2RhbC1uYXYgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbmF2LWNvbG9yKTtcXG59XFxuXFxuLmFkZC1uZXctbW9kYWwgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi8qIG1vZGFsIGZvcm0gKi9cXG5cXG4uYWRkLW5ldy1tb2RhbCBmb3JtID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi50YXNrLWVkaXQtZm9ybSA+IGRpdiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmZvcm0gPiBkaXYgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLyogbW9kYWwgaW5wdXQgKi9cXG5cXG4uYWRkLW5ldy1tb2RhbCBpbnB1dCxcXG4uYWRkLW5ldy1tb2RhbCB0ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5hZGQtbmV3LW1vZGFsIGlucHV0W3R5cGU9J3RleHQnXSxcXG50ZXh0YXJlYSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxuICBib3JkZXI6IHZhcigtLWJyYW5kLWdyZWVuKSAxcHggc29saWQ7XFxuICBjb2xvcjogdmFyKC0tYnJhbmQtZ3JlZW4pO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5kYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJpb3JpdHktcmFkaW8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGJvcmRlcjogdmFyKC0tYnJhbmQtZ3JlZW4pIHNvbGlkIDFweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4O1xcbiAgY29sb3I6IHZhcigtLWJyYW5kLWdyZWVuKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZm9ybSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtZ3JlZW4pO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuZm9ybSBzZWxlY3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbmF2LWNvbG9yKTtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLyogbW9kYWwgcmFkaW8tYnV0dG9ucyAqL1xcblxcbi5yYWRpby1idXR0b24ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW46IDAgNXB4IDAgMDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucmFkaW8tbG93IHtcXG4gIGJvcmRlcjogdmFyKC0tbG93LXJhZGlvKSBzb2xpZCAycHg7XFxuICBjb2xvcjogdmFyKC0tbG93LXJhZGlvKTtcXG59XFxuXFxuLnJhZGlvLWxvdzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcmFkaW8pO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnJhZGlvLW1lZGl1bSB7XFxuICBib3JkZXI6IHZhcigtLW1lZC1yYWRpbykgc29saWQgMnB4O1xcbiAgY29sb3I6IHZhcigtLW1lZC1yYWRpbyk7XFxufVxcblxcbi5yYWRpby1tZWRpdW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkLXJhZGlvKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5yYWRpby1oaWdoIHtcXG4gIGJvcmRlcjogdmFyKC0taGlnaC1yYWRpbykgc29saWQgMnB4O1xcbiAgY29sb3I6IHZhcigtLWhpZ2gtcmFkaW8pO1xcbn1cXG5cXG4ucmFkaW8taGlnaDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLXJhZGlvKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5yYWRpby1idXR0b24gbGFiZWwsXFxuLnJhZGlvLWJ1dHRvbiBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLnJhZGlvLWJ1dHRvbiBpbnB1dFt0eXBlPSdyYWRpbyddIHtcXG4gIG9wYWNpdHk6IDAuMDExO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4ucmFkaW8tbG93IGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1yYWRpbyk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yYWRpby1tZWRpdW0gaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkLXJhZGlvKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnJhZGlvLWhpZ2ggaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnJhZGlvLWJ1dHRvbiBsYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiA5MDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG59XFxuXFxuLyogcHJvamVjdCBlbGVtZW50Ki9cXG5cXG4ucHJvamVjdHMtYXJlYSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnByb2plY3RzLWFyZWEgLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi5kb3RzIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbmF2LWNvbG9yKTtcXG59XFxuXFxuLyogbWFpbi1hcmVhICovXFxuXFxuLm1haW4tYXJlYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29udGVudC1saWdodCk7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1hcmVhLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLWdyZWVuKTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogNzUlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFpbi1hcmVhLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbnRlbnQtbGlnaHQpO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi8qIHRhc2sgZWxlbWVudCAqL1xcblxcbi5tYWluLWFyZWEtY29udGVudCA+IGRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDNmciAwLjhmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZmZmZiwgI2Q3ZGRlOCk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stYm9keTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWJvZHk6aG92ZXI6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OTUpO1xcbn1cXG5cXG4udGFzay1ib2R5IGlucHV0IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGhlaWdodDogMTVweDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1ib2R5IC50YXNrLXRpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnRhc2stYm9keSAudGFzay1kZXRhaWxzIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stYm9keSAucmlnaHQtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaG93LWRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLyogdGFzayBlbGVtZW50IGNoZWNrYm94ICovXFxuXFxuLnRhc2stYm9keSBpbnB1dCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgd2lkdGg6IDEuMTVlbTtcXG4gIGhlaWdodDogMS4xNWVtO1xcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgY3VycmVudENvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xNWVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjA3NWVtKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWJvZHkgaW5wdXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDAuNjVlbTtcXG4gIGhlaWdodDogMC42NWVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tYnJhbmQtZ3JlZW4pO1xcbn1cXG5cXG4udGFzay1ib2R5IGlucHV0OmNoZWNrZWQ6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi8qIGVkaXQgYW5kIGRlbGV0ZSBwb3B1cCAqL1xcblxcbi5wb3AtdXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wLXVwLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGxlZnQ6IDVweDtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIgLmRvdHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucG9wLXVwID4gZGl2IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcC11cCA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3AtdXAtaG92ZXIpO1xcbn1cXG5cXG4ucG9wcGluZyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpICFpbXBvcnRhbnQ7XFxufVxcblxcbi50YXNrLWRvdHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBlZGl0IGFuZCBkZWxldGUgcG9wdXAgKHRhc2spICovXFxuXFxuLnRhc2stYm9keSAucG9wLXVwIHtcXG4gIGxlZnQ6IDEwcHg7XFxuICBib3R0b206IDIwcHg7XFxufVxcblxcbi8qIGNvbmZpcm0gZGVsZXRlIHBvcC11cCAqL1xcblxcbi5jb25maXJtLWRlbGV0ZS1wb3AtdXAge1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMjAlO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1saWdodCk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDE1cHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG5cXG4ucG9wLXVwLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3AtdXAtaGVhZGVyKTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuLnBvcC11cC1oZWFkZXIgLmNsb3NlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG59XFxuXFxuLnBvcC11cC1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWhvdmVyLW5hdi1jb2xvcik7XFxuICBtYXJnaW46IDBweCAxMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ucG9wLXVwLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwcHggMTBweDtcXG4gIGdhcDogMTBweDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5wb3AtdXAtYnV0dG9uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucG9wLXVwLWNhbmNlbCB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5wb3AtdXAtZGVsZXRlIHtcXG4gIGNvbG9yOiB2YXIoLS1oaWdoLXJhZGlvKTtcXG59XFxuXFxuLnBvcC11cC1jYW5jZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wb3AtdXAtZGVsZXRlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtcmFkaW8pO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogdGFzayB1bmRvIHBvcC11cCAqL1xcblxcbi50YXNrLXVuZG8ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA1cHg7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBcXG5cXG59XFxuXFxuLnVuZG8tYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1tZWQtcmFkaW8pO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnVuZG8tYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGJlZm9yZSB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYmVmb3JlIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0JlZm9yZShkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIDwgZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvNy1kYXlzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvaW1wb3J0YW50LXN0YXIuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9sb2dvLWljb24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9tb2RhbC1wcm9qZWN0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbW9kYWwtdGFzay5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3BhZ2UtaWNvbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3Rhc2tzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdG9kYXkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy93aGl0ZS1mbGFnLXN2Zy5zdmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBlbGVtZW50RnJvbUh0bWwgZnJvbSAnLi9tb2RhbC1mb3JtLWJ1aWxkJztcbmltcG9ydCB7IHRvZ2dsZUJsdXIgfSBmcm9tICcuL21vZGFsLW1hbmlwdWxhdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENvbmZpcm1EZWxldGVQcm9qZWN0UG9wVXAoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IHBvcFVwQ29udGFpbmVyID0gZWxlbWVudEZyb21IdG1sKGBcbiAgPGRpdiBjbGFzcz1cImNvbmZpcm0tZGVsZXRlLXBvcC11cCBhZGQtbmV3LW1vZGFsXCI+XG4gICAgPGRpdiBjbGFzcz1cInBvcC11cC1oZWFkZXJcIj5cbiAgICAgIDxoMz5EZWxldGUgUHJvamVjdDwvaDM+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VcIj4mI3gyNzE1PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBvcC11cC1tZXNzYWdlXCI+XG4gICAgICA8c3Bhbj5BcmUgeW91IHN1cmU/PC9zcGFuPlxuICAgICAgPGRpdj5Qcm9qZWN0IDxzdHJvbmc+PHNwYW4gY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj48L3NwYW4+PC9zdHJvbmc+IFdpbGwgYmUgZ29uZSBmb3JldmVyITwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwb3AtdXAtYnV0dG9uc1wiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cC1idXR0b24gcG9wLXVwLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cC1idXR0b24gcG9wLXVwLWRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYCk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChwb3BVcENvbnRhaW5lcik7XG4gIGNvbnN0IHBvcFVwRWxlbWVudCA9IHBvcFVwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLWRlbGV0ZS1wb3AtdXAnKTtcblxuICAoZnVuY3Rpb24gaGFuZGxlUG9wVXBBY3Rpb24oKSB7XG4gICAgcG9wVXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BvcHBpbmcnKTtcbiAgICB0b2dnbGVCbHVyKHBvcFVwRWxlbWVudCk7XG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uIGhhbmRsZVBvcFVwQ2xvc2UoKSB7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBwb3BVcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBwb3BVcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucG9wLXVwLWNhbmNlbCcpXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gcG9wVXBDb250YWluZXIucXVlcnlTZWxlY3RvcignLnBvcC11cC1kZWxldGUnKVxuICAgIGNvbnN0IGFjdGlvbkNhbmNlbEJ1dHRvbnMgPSBbY2xvc2VCdXR0b24sIGNhbmNlbEJ1dHRvbiwgZGVsZXRlQnV0dG9uXVxuICAgIGFjdGlvbkNhbmNlbEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwb3BVcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncG9wcGluZycpO1xuICAgICAgdG9nZ2xlQmx1cihwb3BVcEVsZW1lbnQpO1xuICAgICAgcG9wVXBDb250YWluZXIucmVtb3ZlKClcbiAgICB9KSlcbiAgfSkoKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRhc2tEZWxldGlvblVuZG9Qb3BVcCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgdW5kb1BvcFVwQ29udGFpbmVyID0gZWxlbWVudEZyb21IdG1sKGBcbiAgICA8ZGl2IGNsYXNzPVwidGFzay11bmRvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidW5kby1tZXNzYWdlXCI+MSB0YXNrIGNvbXBsZXRlZDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInVuZG8tYnV0dG9uXCI+VW5kbzwvZGl2PlxuICAgIDwvZGl2PlxuICBgKTtcblxuICBjb25zdCB1bmRvUG9wVXBFbGVtZW50ID0gdW5kb1BvcFVwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXVuZG8nKVxuICBib2R5LmFwcGVuZENoaWxkKHVuZG9Qb3BVcENvbnRhaW5lcilcbiAgdW5kb1BvcFVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwb3BwaW5nJylcblxuICBmdW5jdGlvbiByZW1vdmVQb3BVcCgpIHtcbiAgICB1bmRvUG9wVXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgICB1bmRvUG9wVXBDb250YWluZXIucmVtb3ZlKClcbiAgfVxuXG4gIHNldFRpbWVvdXQocmVtb3ZlUG9wVXAsIDMwMDApXG59IiwiaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlJztcbmV4cG9ydCB7IGdldERhdGFGcm9tRm9ybXMgfTtcblxuZnVuY3Rpb24gZ2V0RGF0YUZyb21Gb3JtcyhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy9jaGVjayBpZiB0aGUgZm9ybSBpcyBhc3NvY2lhdGVkIHdpdGggYWRkaW5nIGEgdGFzayBvciBhIHByb2plY3RcbiAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5pbmNsdWRlcygndGFzaycpKSB7XG4gICAgZ2V0RGF0YUZyb21UYXNrRm9ybSgpO1xuICB9IGVsc2UgZ2V0RGF0YUZyb21Qcm9qZWN0Rm9ybSgpO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhRnJvbVRhc2tGb3JtKCkge1xuICBjb25zdCB0YXNrVGl0bGVRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSAjdGl0bGUnKTtcbiAgY29uc3QgcHJvamVjdFRvQXNzaWduUXVlcmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gc2VsZWN0Jyk7XG4gIGNvbnN0IGRldGFpbHNRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSB0ZXh0YXJlYScpO1xuICBjb25zdCBkdWVEYXRlUXVlcmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gI2RhdGUnKTtcbiAgY29uc3QgcHJpb3JpdHlRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybSBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcblxuICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrVGl0bGVRdWVyaWVyLnZhbHVlO1xuICBjb25zdCBwcm9qZWN0VG9Bc3NpZ25UbyA9IHByb2plY3RUb0Fzc2lnblF1ZXJpZXIudmFsdWU7XG4gIGNvbnN0IGRldGFpbHMgPSBkZXRhaWxzUXVlcmllci52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVRdWVyaWVyLnZhbHVlO1xuICBsZXQgcHJpb3JpdHk7XG5cbiAgcHJpb3JpdHlRdWVyaWVyLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgaWYgKHJhZGlvLmNoZWNrZWQpIHByaW9yaXR5ID0gcmFkaW8udmFsdWU7XG4gIH0pO1xuXG4gIGNvbnN0IHRhc2tUb0FkZCA9IG5ldyBUYXNrKHRhc2tUaXRsZSk7XG4gIHRhc2tUb0FkZC5hZGREZXRhaWxzKGRldGFpbHMpO1xuICB0YXNrVG9BZGQuYWRkRHVlRGF0ZShkdWVEYXRlKTtcbiAgdGFza1RvQWRkLmFkZFByaW9yaXR5KHByaW9yaXR5KTtcblxuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBpZiAocHJvamVjdC5nZXRUaXRsZSgpID09PSBwcm9qZWN0VG9Bc3NpZ25Ubykge1xuICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2tUb0FkZCk7XG4gICAgfVxuICB9KTtcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKHByb2plY3RzKVxufVxuXG5mdW5jdGlvbiBnZXREYXRhRnJvbVByb2plY3RGb3JtKCkge1xuICBjb25zdCBwcm9qZWN0VGl0bGVRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSAudGl0bGUnKTtcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGVRdWVyaWVyLnZhbHVlO1xuXG4gIGNvbnN0IHByb2plY3RUb0FkZCA9IG5ldyBQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QocHJvamVjdFRvQWRkKTtcbn1cbiIsImltcG9ydCBlbGVtZW50RnJvbUh0bWwgZnJvbSAnLi9tb2RhbC1mb3JtLWJ1aWxkJztcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgeyBidWlsZFRhc2tEb21FbGVtZW50IH0gZnJvbSAnLi9kb20tZGlzcGxheS10YXNrJztcbmltcG9ydCB7IGJ1aWxkRWRpdEludGVyZmFjZSwgZGVsZXRlUHJvamVjdCB9IGZyb20gJy4vZWRpdC1wcm9qZWN0JztcbmltcG9ydCB7IHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzcyB9IGZyb20gJy4vaW5kZXgnO1xuXG5jb25zdCBtYWluQXJlYUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1hcmVhLWNvbnRlbnQnKTtcbmNvbnN0IG1haW5BcmVhVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1hcmVhLXRpdGxlJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFByb2plY3REb21FbGVtZW50KHBhcmVudCkge1xuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIHBhcmVudC5pbm5lckhUTUwgPSAnJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbGFzdFByb2plY3RBZGRlZCA9IHByb2plY3RzW2ldO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGxhc3RQcm9qZWN0QWRkZWQuZ2V0VGl0bGUoKTtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBsYXN0UHJvamVjdEFkZGVkLmlkO1xuIFxuICAgIGNvbnN0IHByb2plY3QgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWNvbnRhaW5lclwiIGRhdGEtaWQ9XCIke3Byb2plY3RJZH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0XCIgZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhhbWJ1cmdlclwiPuKYsDwvc3Bhbj5cbiAgICAgICAgPGRpdj4ke3Byb2plY3RUaXRsZX08L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RzXCIgZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiPiYjeDIyRUVcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwXCIgZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRcIiBkYXRhLWlkPVwiJHtwcm9qZWN0SWR9XCI+RWRpdDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZVwiIGRhdGEtaWQ9XCIke3Byb2plY3RJZH1cIj5EZWxldGU8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuICAgIFxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW5kZXJQcm9qZWN0VGFza3MobGFzdFByb2plY3RBZGRlZCk7XG4gICAgICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9qZWN0RWRpdCA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLmRvdHMnKTtcbiAgICBjb25zdCBwb3BVcCA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLnBvcC11cCcpO1xuICAgIGNvbnN0IHJlbmFtZUJ1dHRvbiA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLmVkaXQnKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcblxuICAgIHJlbmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ1aWxkRWRpdEludGVyZmFjZSk7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlUHJvamVjdCk7XG4gICAgcHJvamVjdEVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwb3BVcC5jbGFzc0xpc3QuYWRkKCdwb3BwaW5nJykpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCAhPT0gcHJvamVjdEVkaXQpIHBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdFRhc2tzID0gcHJvamVjdC5nZXRUYXNrcygpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICBtYWluQXJlYVRpdGxlLnRleHRDb250ZW50ID0gYFByb2plY3Q6ICR7cHJvamVjdFRpdGxlfWA7XG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCBwcm9qZWN0VGFza3MpO1xuXG4gIGlmIChwcm9qZWN0VGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgbWFpbkFyZWFDb250ZW50LnRleHRDb250ZW50ID1cbiAgICAgICdUaGlzIHByb2plY3QgYXBwZWFycyBlbXB0eS4gQWRkIHRhc2tzIHRvIGdldCBzdGFydGVkISc7XG4gIH1cbn1cbiIsImltcG9ydCBlbGVtZW50RnJvbUh0bWwgZnJvbSAnLi9tb2RhbC1mb3JtLWJ1aWxkJztcbmltcG9ydCB7IGJ1aWxkVGFza0VkaXRJbnRlcmZhY2UsIGRlbGV0ZVRhc2sgfSBmcm9tICcuL2VkaXQtdGFzayc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IHsgYnVpbGRUYXNrRGVsZXRpb25VbmRvUG9wVXAgfSBmcm9tICcuL2J1aWxkLXBvcC11cHMnO1xuaW1wb3J0IHBvcHVsYXRlTWFpbkFyZWEgZnJvbSAnLi9wb3B1bGF0ZS1tYWluLWFyZWEnO1xuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVGFza0RvbUVsZW1lbnQocGFyZW50LCB0YXNrcykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza1RpdGxlID0gdGFza3NbaV0udGl0bGU7XG4gICAgY29uc3QgdGFza0RldGFpbHMgPSB0YXNrc1tpXS5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2tzW2ldLmRhdGU7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGFza3NbaV0ucHJpb3JpdHk7XG4gICAgY29uc3QgdGFza0lkID0gdGFza3NbaV0uaWQ7XG4gICAgbGV0IGZsYWdDb2xvcjtcblxuICAgIGxldCB0YXNrRWxlbWVudCA9IGVsZW1lbnRGcm9tSHRtbChgXG4gICAgPGRpdiBjbGFzcz1cInRhc2stYm9keVwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRhc2stY2hlY2tcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInRhc2stdGl0bGVcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+JHt0YXNrVGl0bGV9PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlsc1wiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj4ke3Rhc2tEZXRhaWxzfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kdWUtZGF0ZVwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj4ke3Rhc2tEdWVEYXRlfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxhZy1jb250YWluZXJcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRvdHNcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+JiN4MjJFRVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdFwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj5FZGl0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlXCIgZGF0YS1pZD1cIiR7dGFza0lkfVwiPkRlbGV0ZTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgKTtcblxuICAgIHN3aXRjaCAodGFza1ByaW9yaXR5KSB7XG4gICAgICBjYXNlICdsb3cnOlxuICAgICAgICBmbGFnQ29sb3IgPSAnIzIyZDNlZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgZmxhZ0NvbG9yID0gJyNmYjkyM2MnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICBmbGFnQ29sb3IgPSAnI2VmNDQ0NCc7XG4gICAgfVxuXG4gICAgbGV0IGZsYWcgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cInV0Zi04XCI/PjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+XG4gICAgICA8c3ZnIHdpZHRoPVwiMjJweFwiIGhlaWdodD1cIjIycHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIiR7ZmxhZ0NvbG9yfVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgIDxwYXRoIG9wYWNpdHk9XCIwLjE1XCIgZD1cIk00IDRIMjBMMTUgOUwyMCAxNEg0VjRaXCIvPlxuICAgICAgPHBhdGggZD1cIk00IDIxVjE0TTQgMTRWNEgyMEwxNSA5TDIwIDE0SDRaXCIgc3Ryb2tlPVwiJHtmbGFnQ29sb3J9XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxuICAgIDwvc3ZnPlxuICBgKTtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gICAgY29uc3QgZmxhZ0NvbnRhaW5lciA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGFnLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRhc2tEb21FbGVtZW50ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYm9keScpO1xuICAgIGNvbnN0IGRldGFpbHNFbGVtZW50ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlscycpO1xuICAgIGNvbnN0IGVkaXRUYXNrID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZG90cycpO1xuICAgIGNvbnN0IHJlbmFtZUJ1dHRvbiA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuICAgIGNvbnN0IHBvcFVwID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cCcpO1xuICAgIGNvbnN0IHRhc2tDaGVjayA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNoZWNrJyk7XG5cbiAgICByZW5hbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidWlsZFRhc2tFZGl0SW50ZXJmYWNlKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUYXNrKTtcbiAgICBlZGl0VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBvcFVwLmNsYXNzTGlzdC5hZGQoJ3BvcHBpbmcnKSk7XG4gICAgdGFza0NoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIGhhbmRsZVRhc2tDb21wbGV0aW9uKHRhc2tFbGVtZW50KVxuICAgICk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ICE9PSBlZGl0VGFzaykgcG9wVXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wcGluZycpO1xuICAgIH0pO1xuXG4gICAgZmxhZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChmbGFnKTtcbiAgICB0YXNrRG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICBkZXRhaWxzRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LWRldGFpbHMnKVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0NvbXBsZXRpb24odGFza0VsZW1lbnQpIHtcbiAgY29uc3QgdGFza1RpdGxlID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKTtcbiAgY29uc3QgdGFza0NoZWNrID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY2hlY2snKTtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuXG4gIGlmICh0YXNrQ2hlY2suY2hlY2tlZCkge1xuICAgIHRhc2tUaXRsZS5pbm5lckhUTUwgPSBgPHM+JHt0YXNrVGl0bGUudGV4dENvbnRlbnR9PC9zPmA7XG4gIH0gZWxzZSB0YXNrVGl0bGUuaW5uZXJIVE1MID0gdGFza1RpdGxlLnRleHRDb250ZW50O1xuXG4gIGxldCBzZWxlY3RlZFRhc2s7XG4gIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuQWxsVGFza3MoKTtcbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrQ2hlY2suZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpIHNlbGVjdGVkVGFzayA9IHRhc2s7XG4gIH0pO1xuXG4gIHNlbGVjdGVkVGFzay50b2dnbGVDb21wbGV0aW9uU3RhdHVzKCk7XG5cbiAgZnVuY3Rpb24gZGVsZXRlQ29tcGxldGVkVGFzaygpIHtcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5tb3ZlVG9Db21wbGV0ZWRUYXNrcygpO1xuICAgIH0pO1xuICAgIHBvcHVsYXRlTWFpbkFyZWEoKTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoYWxsUHJvamVjdHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5kb1Rhc2tEZWxldGlvbigpIHtcbiAgICBjb25zdCB1bmRvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuZG8tYnV0dG9uJyk7XG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay11bmRvJyk7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuXG4gICAgdW5kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgLy9zd2l0Y2ggdGhlIGNvbXBsZXRpb24gc3RhdHVzIGJhY2sgdG8gZmFsc2VcbiAgICAgICAgc2VsZWN0ZWRUYXNrLnRvZ2dsZUNvbXBsZXRpb25TdGF0dXMoKTtcbiAgICAgICAgcHJvamVjdC5tb3ZlVG9VbmNvbXBsZXRlZFRhc2tzKCk7XG4gICAgICAgIHBvcHVsYXRlTWFpbkFyZWEoKTtcbiAgICAgICAgcG9wVXAucmVtb3ZlKCk7XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShhbGxQcm9qZWN0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRpbWVvdXQoYnVpbGRUYXNrRGVsZXRpb25VbmRvUG9wVXAsIDcwMCk7XG4gIHNldFRpbWVvdXQoZGVsZXRlQ29tcGxldGVkVGFzaywgNzAwKTtcbiAgc2V0VGltZW91dCh1bmRvVGFza0RlbGV0aW9uLCA3MDApO1xuXG4gIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3QuY2xlYXJDb21wbGV0ZWRUYXNrcygpKTtcbiAgc2V0VGltZW91dCh1cGRhdGVMb2NhbFN0b3JhZ2UoYWxsUHJvamVjdHMpLCA3MDApO1xufVxuIiwiaW1wb3J0IGVsZW1lbnRGcm9tSHRtbCBmcm9tICcuL21vZGFsLWZvcm0tYnVpbGQnO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCB7IGRpc3BsYXlBbGxUYXNrcyB9IGZyb20gJy4vbmF2LXV0aWxpdHknO1xuaW1wb3J0IHsgYnVpbGRDb25maXJtRGVsZXRlUHJvamVjdFBvcFVwIH0gZnJvbSAnLi9idWlsZC1wb3AtdXBzJztcbmltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEVkaXRJbnRlcmZhY2UoZSkge1xuICBjb25zdCBjbGlja2VkUHJvamVjdElkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcblxuICBsZXQgcHJvamVjdFRvRWRpdDtcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0cykge1xuICAgIGlmIChwcm9qZWN0LmlkID09PSBjbGlja2VkUHJvamVjdElkKSBwcm9qZWN0VG9FZGl0ID0gcHJvamVjdDtcbiAgfVxuXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RUb0VkaXQuZ2V0VGl0bGUoKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICBjb25zdCBlZGl0UHJvamVjdE1vZGFsID0gZWxlbWVudEZyb21IdG1sKGBcbiAgICA8ZGl2IGNsYXNzPVwiYWRkLW5ldy1tb2RhbCBwcm9qZWN0LWVkaXQtbW9kYWwtJHtjbGlja2VkUHJvamVjdElkfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICA8aDM+RWRpdCBQcm9qZWN0PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlIGNsb3NlLWVkaXQtcHJvamVjdC0ke2NsaWNrZWRQcm9qZWN0SWR9XCI+JiN4MjcxNTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtbmF2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvbW9kYWwtcHJvamVjdC5wbmdcIj5cbiAgICAgICAgICAgIDxkaXY+UHJvamVjdDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJwcm9qZWN0LWVkaXQtZm9ybS0ke2NsaWNrZWRQcm9qZWN0SWR9XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInRpdGxlIGVkaXQtdGl0bGUtJHtjbGlja2VkUHJvamVjdElkfVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3Byb2plY3RUaXRsZX1cIiByZXF1aXJlZD5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwicHJvamVjdC1zdWJtaXRcIj5cbiAgICAgICAgICAgIEVkaXQgUHJvamVjdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChlZGl0UHJvamVjdE1vZGFsKTtcbiAgY29uc3QgcHJvamVjdEVkaXRNb2RhbCA9IGVkaXRQcm9qZWN0TW9kYWwucXVlcnlTZWxlY3RvcihcbiAgICBgLnByb2plY3QtZWRpdC1tb2RhbC0ke2NsaWNrZWRQcm9qZWN0SWR9YFxuICApO1xuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGVkaXRQcm9qZWN0TW9kYWwucXVlcnlTZWxlY3RvcihcbiAgICBgLmNsb3NlLWVkaXQtcHJvamVjdC0ke2NsaWNrZWRQcm9qZWN0SWR9YFxuICApO1xuICBjb25zdCBzdWJtaXRGb3JtID0gZWRpdFByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICAgIGAucHJvamVjdC1lZGl0LWZvcm0tJHtjbGlja2VkUHJvamVjdElkfWBcbiAgKTtcbiAgY29uc3QgZWRpdGVkVGl0bGVJbnB1dCA9IGVkaXRQcm9qZWN0TW9kYWwucXVlcnlTZWxlY3RvcihcbiAgICBgLmVkaXQtdGl0bGUtJHtjbGlja2VkUHJvamVjdElkfWBcbiAgKTtcblxuICBwcm9qZWN0RWRpdE1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgxKSc7XG5cbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHJvamVjdEVkaXRNb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMCknO1xuICB9KTtcblxuICBzdWJtaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGVkaXQgcHJvamVjdCBpbiBidXNpbmVzcyBsb2dpY1xuICAgIGNvbnN0IGVkaXRlZFRpdGxlID0gZWRpdGVkVGl0bGVJbnB1dC52YWx1ZTtcbiAgICBwcm9qZWN0VG9FZGl0LmNoYW5nZVRpdGxlKGVkaXRlZFRpdGxlKTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoYWxsUHJvamVjdHMpXG4gICAgLy9lZGl0IHByb2plY3QgaW4gRE9NXG4gICAgZWRpdFByb2plY3ROYW1lRnJvbURvbShjbGlja2VkUHJvamVjdElkLCBlZGl0ZWRUaXRsZSk7XG5cbiAgICBwcm9qZWN0RWRpdE1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgwKSc7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGNvbnN0IGNsaWNrZWRQcm9qZWN0SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuXG4gIGJ1aWxkQ29uZmlybURlbGV0ZVByb2plY3RQb3BVcCgpO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwLWRlbGV0ZScpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKTtcblxuICBsZXQgcHJvamVjdFRvRGVsZXRlO1xuICBmb3IgKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzKSB7XG4gICAgaWYgKHByb2plY3QuaWQgPT09IGNsaWNrZWRQcm9qZWN0SWQpIHByb2plY3RUb0RlbGV0ZSA9IHByb2plY3Q7XG4gIH1cblxuICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RUb0RlbGV0ZS5nZXRUaXRsZSgpfWBcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlUHJvamVjdEFmdGVyQ29uZmlybSk7XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEFmdGVyQ29uZmlybSgpIHtcbiAgICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gYnVzaW5lc3MgbG9naWNcbiAgICBwcm9qZWN0TWFuYWdlci5yZW1vdmVQcm9qZWN0KHByb2plY3RUb0RlbGV0ZSk7XG4gICAgLy9yZW1vdmUgcHJvamVjdCBmcm9tIERPTVxuICAgIHJlbW92ZVByb2plY3RGcm9tRG9tKGNsaWNrZWRQcm9qZWN0SWQpO1xuICAgIGRpc3BsYXlBbGxUYXNrcygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0TmFtZUZyb21Eb20oaWQsIGVkaXRWYWx1ZSkge1xuICBjb25zdCBwcm9qZWN0RG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5wcm9qZWN0W2RhdGEtaWQ9XCIke2lkfVwiXSA+IGRpdmBcbiAgKTtcbiAgcHJvamVjdERvbUVsZW1lbnQudGV4dENvbnRlbnQgPSBlZGl0VmFsdWU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RGcm9tRG9tKGlkKSB7XG4gIGNvbnN0IHByb2plY3REb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLnByb2plY3QtY29udGFpbmVyW2RhdGEtaWQ9XCIke2lkfVwiXWBcbiAgKTtcbiAgcHJvamVjdERvbUVsZW1lbnQucmVtb3ZlKCk7XG59XG4iLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IGVsZW1lbnRGcm9tSHRtbCBmcm9tICcuL21vZGFsLWZvcm0tYnVpbGQnO1xuaW1wb3J0IHBvcHVsYXRlTWFpbkFyZWEgZnJvbSAnLi9wb3B1bGF0ZS1tYWluLWFyZWEnO1xuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVGFza0VkaXRJbnRlcmZhY2UoZSkge1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIGNvbnN0IGNsaWNrZWRUYXNrSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5BbGxUYXNrcygpO1xuICBsZXQgdGFza1RvRWRpdDtcbiAgZm9yIChsZXQgdGFzayBvZiBhbGxUYXNrcykge1xuICAgIGlmICh0YXNrLmlkID09PSBjbGlja2VkVGFza0lkKSB0YXNrVG9FZGl0ID0gdGFzaztcbiAgfVxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tUb0VkaXQudGl0bGU7XG4gIGNvbnN0IHRhc2tEZXRhaWxzID0gdGFza1RvRWRpdC5kZXNjcmlwdGlvbjtcbiAgY29uc3QgdGFza0RhdGUgPSB0YXNrVG9FZGl0LmRhdGU7XG5cbiAgY29uc3QgZWRpdFRhc2tNb2RhbCA9IGVsZW1lbnRGcm9tSHRtbChgXG4gICAgPGRpdiBjbGFzcz1cImFkZC1uZXctbW9kYWwgdGFzay1lZGl0LW1vZGFsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgIDxoMz5FZGl0IFRhc2s8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UgY2xvc2UtZWRpdC10YXNrXCI+JiN4MjcxNTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtbmF2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvbW9kYWwtdGFzay5wbmdcIj5cbiAgICAgICAgICAgIDxkaXY+VGFzazwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJ0YXNrLWVkaXQtZm9ybVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZTogUGF5IGJpbGxzXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZWRpdC10aXRsZVwiIHZhbHVlPVwiJHt0YXNrVGl0bGV9XCIgcmVxdWlyZWQvPlxuICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiRGV0YWlsczogZS5nIGludGVybmV0LCBwaG9uZSwgcmVudC5cIlxuICAgICAgICAgICAgY2xhc3M9XCJlZGl0LWRldGFpbHNcIj4ke3Rhc2tEZXRhaWxzfTwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPjxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZWRpdC1kYXRlXCIgdmFsdWU9XCIke3Rhc2tEYXRlfVwiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1yYWRpb1wiPlxuICAgICAgICAgICAgICA8c3Bhbj5Qcmlvcml0eTo8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpby1idXR0b24gcmFkaW8tbG93XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwibG93XCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJsb3dcIi8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvd1wiPkxPVzwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW8tYnV0dG9uIHJhZGlvLW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIm1lZGl1bVwiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibWVkaXVtXCIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZWRpdW1cIj5NRURJVU08L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvLWJ1dHRvbiByYWRpby1oaWdoXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiaGlnaFwiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwiaGlnaFwiLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaGlnaFwiPkhJR0g8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJ0YXNrIHRhc2stc3VibWl0XCI+RWRpdCBUYXNrPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZWRpdFRhc2tNb2RhbCk7XG5cbiAgKGZ1bmN0aW9uIGFkZFRhc2tQcmlvcml0eSgpIHtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrVG9FZGl0LnByaW9yaXR5O1xuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG4gICAgY29uc3QgbG93UmFkaW9CdXR0b24gPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwibG93XCJdJyk7XG4gICAgY29uc3QgbWVkaXVtUmFkaW9CdXR0b24gPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwibWVkaXVtXCJdJyk7XG4gICAgY29uc3QgaGlnaFJhZGlvQnV0dG9uID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImhpZ2hcIl0nKTtcblxuICAgIHJhZGlvQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKSk7XG5cbiAgICBzd2l0Y2ggKHRhc2tQcmlvcml0eSkge1xuICAgICAgY2FzZSAnbG93JzpcbiAgICAgICAgbG93UmFkaW9CdXR0b24uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIG1lZGl1bVJhZGlvQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgaGlnaFJhZGlvQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KSgpO1xuXG4gIGNvbnN0IHRhc2tFZGl0TW9kYWwgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXQtbW9kYWwnKTtcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1lZGl0LXRhc2snKTtcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcignLnRhc2stZWRpdC1mb3JtJyk7XG4gIGNvbnN0IGVkaXRlZFRpdGxlSW5wdXQgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRpdGxlJyk7XG4gIGNvbnN0IGVkaXRlZERldGFpbHNJbnB1dCA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcignLmVkaXQtZGV0YWlscycpO1xuICBjb25zdCBlZGl0ZWREYXRlSW5wdXQgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWRhdGUnKTtcblxuICB0YXNrRWRpdE1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgxKSc7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRhc2tFZGl0TW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDApJztcbiAgfSk7XG5cbiAgc3VibWl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBlZGl0IHRhc2sgaW4gYnVzaW5lc3MgbG9naWNcbiAgICBjb25zdCBlZGl0ZWRUaXRsZSA9IGVkaXRlZFRpdGxlSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZWRpdGVkRGV0YWlscyA9IGVkaXRlZERldGFpbHNJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBlZGl0ZWREYXRlID0gZWRpdGVkRGF0ZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG5cbiAgICB0YXNrVG9FZGl0LmNoYW5nZVRpdGxlKGVkaXRlZFRpdGxlKTtcbiAgICB0YXNrVG9FZGl0LmFkZERldGFpbHMoZWRpdGVkRGV0YWlscyk7XG4gICAgdGFza1RvRWRpdC5hZGREdWVEYXRlKGVkaXRlZERhdGUpO1xuICAgIHJhZGlvQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChidXR0b24uY2hlY2tlZCkgdGFza1RvRWRpdC5wcmlvcml0eSA9IGJ1dHRvbi52YWx1ZTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShhbGxQcm9qZWN0cylcbiAgICAvL2VkaXQgcHJvamVjdCBpbiBET01cbiAgICBwb3B1bGF0ZU1haW5BcmVhKCk7XG5cbiAgICB0YXNrRWRpdE1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgwKSc7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhlKSB7XG4gIGNvbnN0IGNsaWNrZWRUYXNrSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5BbGxUYXNrcygpO1xuICBsZXQgdGFza1RvRGVsZXRlO1xuICBmb3IgKGxldCB0YXNrIG9mIGFsbFRhc2tzKSB7XG4gICAgaWYgKHRhc2suaWQgPT09IGNsaWNrZWRUYXNrSWQpIHRhc2tUb0RlbGV0ZSA9IHRhc2s7XG4gIH1cbiAgLy9yZW1vdmUgcHJvamVjdCBmcm9tIGJ1c2luZXNzIGxvZ2ljXG4gIHRhc2tUb0RlbGV0ZS5jb21wbGV0aW9uU3RhdHVzID0gdHJ1ZTtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm1vdmVUb0NvbXBsZXRlZFRhc2tzKCkpO1xuICBcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKGFsbFByb2plY3RzKVxuICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gRE9NXG4gIHBvcHVsYXRlTWFpbkFyZWEoKTtcbn1cbiIsImltcG9ydCB7IHBvcE1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSAnLi9tb2RhbC1tYW5pcHVsYXRpb24nO1xuaW1wb3J0IHsgYnVpbGRQcm9qZWN0RG9tRWxlbWVudCB9IGZyb20gJy4vZG9tLWRpc3BsYXktcHJvamVjdCc7XG5pbXBvcnQgeyBidWlsZExvY2FsU3RvcmFnZU5ld1VzZXIgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHtcbiAgZGlzcGxheUFsbFRhc2tzLFxuICBkaXNwbGF5SW1wb3J0YW50VGFza3MsXG4gIGRpc3BsYXlUb2RheVRhc2tzLFxuICBkaXNwbGF5V2Vla1Rhc2tzLFxufSBmcm9tICcuL25hdi11dGlsaXR5JztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9sb2dvLWljb24ucG5nJztcbmltcG9ydCAnLi9hc3NldHMvNy1kYXlzLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltcG9ydGFudC1zdGFyLnN2Zyc7XG5pbXBvcnQgJy4vYXNzZXRzL21vZGFsLXByb2plY3QucG5nJztcbmltcG9ydCAnLi9hc3NldHMvbW9kYWwtdGFzay5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9wYWdlLWljb24ucG5nJztcbmltcG9ydCAnLi9hc3NldHMvdGFza3MucG5nJztcbmltcG9ydCAnLi9hc3NldHMvdG9kYXkucG5nJztcbmltcG9ydCAnLi9hc3NldHMvd2hpdGUtZmxhZy1zdmcuc3ZnJztcblxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXcnKTtcbmNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtaGVhZGVyIC5jbG9zZScpO1xuY29uc3QgcHJvamVjdHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWFyZWEnKTtcbmNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpO1xuY29uc3QgbmV4dFdlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V2ZW4tZGF5cycpO1xuY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltcG9ydGFudCcpO1xuXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwb3BNb2RhbCgpKTtcbmNsb3NlTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKCkpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzKCkge1xuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xuICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbn1cblxuYWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRpc3BsYXlBbGxUYXNrcygpO1xuICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgYWxsVGFza3MuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59KTtcblxudG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRpc3BsYXlUb2RheVRhc2tzKCk7XG4gIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzcygpO1xuICB0b2RheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pO1xuXG5uZXh0V2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZGlzcGxheVdlZWtUYXNrcygpO1xuICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgbmV4dFdlZWsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59KTtcblxuaW1wb3J0YW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkaXNwbGF5SW1wb3J0YW50VGFza3MoKTtcbiAgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gIGltcG9ydGFudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pO1xuXG5idWlsZExvY2FsU3RvcmFnZU5ld1VzZXIoKTtcbmJ1aWxkUHJvamVjdERvbUVsZW1lbnQocHJvamVjdHNBcmVhKTtcbmRpc3BsYXlBbGxUYXNrcygpO1xuIiwiaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuICBcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoZGIpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RiJywgSlNPTi5zdHJpbmdpZnkoZGIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHJpZXZlTG9jYWxTdG9yYWdlKGRiKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHBhcnNlZExvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGIpKTtcbiAgICAvLyBhZGRpbmcgYmFjayBhbGwgb2YgdGhlIG1ldGhvZHMgb2YgdGhlIFByb2plY3QgY2xhc3MgaW4gaXQncyBwcm90b3R5cGUgdG8gZWFjaCBpbnN0YW5jZVxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcGFyc2VkTG9jYWxTdG9yYWdlKVxuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb2plY3QsIFByb2plY3QucHJvdG90eXBlKTtcbiAgICAvLyBhZGRpbmcgYmFjayBhbGwgb2YgdGhlIG1ldGhvZHMgb2YgdGhlIFRhc2sgY2xhc3MgaW4gaXQncyBwcm90b3R5cGUgdG8gZWFjaCBpbnN0YW5jZVxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcGFyc2VkTG9jYWxTdG9yYWdlKSB7XG4gICAgICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKTtcbiAgICAgIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IE9iamVjdC5zZXRQcm90b3R5cGVPZih0YXNrLCBUYXNrLnByb3RvdHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkTG9jYWxTdG9yYWdlO1xuICB9IGVsc2UgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRMb2NhbFN0b3JhZ2VOZXdVc2VyKCkge1xuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYicpKSB7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgnWW91ciBGaXJzdCBQcm9qZWN0Jyk7XG4gICAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbGVtZW50RnJvbUh0bWwoaHRtbCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWwudHJpbSgpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCB0YXNrRm9ybSA9IGVsZW1lbnRGcm9tSHRtbChgXG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlOiBQYXkgYmlsbHNcIiByZXF1aXJlZC8+XG4gIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiPlxuICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0XCI+UHJvamVjdCB0byBhc3NpZ24gdG86IDwvbGFiZWw+XG4gICAgPHNlbGVjdCBuYW1lPVwiXCIgaWQ9XCJwcm9qZWN0XCI+PC9zZWxlY3Q+XG4gIDwvZGl2PlxuICA8dGV4dGFyZWEgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJEZXRhaWxzOiBlLmcgaW50ZXJuZXQsIHBob25lLCByZW50LlwiPjwvdGV4dGFyZWE+XG4gIDxkaXYgY2xhc3M9XCJkYXRlLWNvbnRhaW5lclwiPlxuICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+RHVlIERhdGU6PC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPjxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIHJlcXVpcmVkLz48L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1yYWRpb1wiPlxuICAgIDxzcGFuPlByaW9yaXR5Ojwvc3Bhbj5cbiAgICA8ZGl2IGNsYXNzPVwicmFkaW8tYnV0dG9uIHJhZGlvLWxvd1wiPlxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwibG93XCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJsb3dcIiBjaGVja2VkLz5cbiAgICAgIDxsYWJlbCBmb3I9XCJsb3dcIj5MT1c8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyYWRpby1idXR0b24gcmFkaW8tbWVkaXVtXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJtZWRpdW1cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cIm1lZGl1bVwiLz5cbiAgICAgIDxsYWJlbCBmb3I9XCJtZWRpdW1cIj5NRURJVU08L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyYWRpby1idXR0b24gcmFkaW8taGlnaFwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiaGlnaFwiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwiaGlnaFwiLz5cbiAgICAgIDxsYWJlbCBmb3I9XCJoaWdoXCI+SElHSDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJ0YXNrIHRhc2stc3VibWl0XCI+QWRkIFRhc2s8L2J1dHRvbj5cbiAgPC9kaXY+XG5gKTtcblxuY29uc3QgcHJvamVjdEZvcm0gPSBlbGVtZW50RnJvbUh0bWwoYFxuICA8aW5wdXQgY2xhc3M9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZTogSG91c2UgUmVub3ZhdGlvblwiIHJlcXVpcmVkPlxuICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInByb2plY3Qtc3VibWl0XCI+Q3JlYXRlIFByb2plY3Q8L2J1dHRvbj5cbmApO1xuXG5leHBvcnQgeyB0YXNrRm9ybSwgcHJvamVjdEZvcm0gfTtcbiIsImltcG9ydCB7IGJ1aWxkUHJvamVjdERvbUVsZW1lbnQgfSBmcm9tICcuL2RvbS1kaXNwbGF5LXByb2plY3QnO1xuaW1wb3J0IHsgdGFza0Zvcm0sIHByb2plY3RGb3JtIH0gZnJvbSAnLi9tb2RhbC1mb3JtLWJ1aWxkJztcbmltcG9ydCB7IGdldERhdGFGcm9tRm9ybXMgfSBmcm9tICcuL2RhdGEtbWFuaXB1bGF0aW9uJztcbmltcG9ydCBwb3B1bGF0ZU1haW5BcmVhIGZyb20gJy4vcG9wdWxhdGUtbWFpbi1hcmVhJztcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5leHBvcnQgeyBwb3BNb2RhbCwgY2xvc2VNb2RhbCB9O1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3LW1vZGFsJyk7XG5cbmZ1bmN0aW9uIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzc0Zyb21Nb2RhbCgpIHtcbiAgY29uc3QgbW9kYWxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtbmV3LW1vZGFsIGRpdicpO1xuICBtb2RhbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQmx1cihtb2RhbCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAvL2NoZWNrIGlmICdwb3BwaW5nJyBjbGFzcyBpbiBtb2RhbDsgbWVhbnMgd2UgYXJlIG9wZW5pbmcgbW9kYWxcbiAgaWYgKG1vZGFsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5pbmNsdWRlcygncG9wcGluZycpKSB7XG4gICAgaGVhZGVyLnN0eWxlLmNzc1RleHQgPSAnZmlsdGVyOiBibHVyKDNweCknO1xuICAgIGNvbnRlbnQuc3R5bGUuY3NzVGV4dCA9ICdmaWx0ZXI6IGJsdXIoM3B4KSc7XG4gIH0gZWxzZSB7XG4gICAgaGVhZGVyLnN0eWxlLmNzc1RleHQgPSAnZmlsdGVyOiBibHVyKDBweCknO1xuICAgIGNvbnRlbnQuc3R5bGUuY3NzVGV4dCA9ICdmaWx0ZXI6IGJsdXIoMHB4KSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0c0Ryb3Bkb3duKCkge1xuICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93biBzZWxlY3QnKTtcbiAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuICBjb25zdCBvcHRpb25zID0gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkpO1xuXG4gIGlmIChkcm9wZG93biA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gIGRyb3Bkb3duLmlubmVySFRNTCA9ICcnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG9wdCA9IG9wdGlvbnNbaV07XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBlbC50ZXh0Q29udGVudCA9IG9wdDtcbiAgICBlbC52YWx1ZSA9IG9wdDtcbiAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChlbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9wTW9kYWwoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdwb3BwaW5nJyk7XG4gIG1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgxKSc7XG4gIHRvZ2dsZUJsdXIobW9kYWwpO1xuICBmb3JtLmlubmVySFRNTCA9ICcnO1xuICBmb3JtLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbiAgLy9hZGRpbmcgJ3Rhc2snIGNsYXNzIGluIG9yZGVyIHRvIGRpZmZlcmVudGlhdGUgdGhlIGZvcm0gdHlwZSAodGFzayBvciBwcm9qZWN0KVxuICBmb3JtLmNsYXNzTmFtZSA9ICcnO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgcG9wdWxhdGVQcm9qZWN0c0Ryb3Bkb3duKCk7XG4gIHN3aXRjaFRvVGFzaygpO1xuICBzd2l0Y2hUb1Byb2plY3QoKTtcbiAgdGFza09yUHJvamVjdFN1Ym1pdCgpO1xuXG4gIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzc0Zyb21Nb2RhbCgpO1xuICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdwb3BwaW5nJyk7XG4gIG1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgwKSc7XG4gIHRvZ2dsZUJsdXIobW9kYWwpO1xuICAvL3JlcGxhY2luZyBmb3JtIG5vZGUgd2l0aCBpdCdzIGNsb25lIHNvIHRoYXQgd2UgcmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnNcbiAgZm9ybS5yZXBsYWNlV2l0aChmb3JtLmNsb25lTm9kZSh0cnVlKSk7XG4gIGZvcm0ucmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoVG9UYXNrKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW5hdiAudGFzaycpO1xuICB0YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZvcm0uaW5uZXJIVE1MID0gJyc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSAnJztcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24oKTtcbiAgICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3NGcm9tTW9kYWwoKTtcbiAgICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoVG9Qcm9qZWN0KCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW5hdiAucHJvamVjdCcpO1xuICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZvcm0uaW5uZXJIVE1MID0gJyc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSAnJztcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3NGcm9tTW9kYWwoKTtcbiAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdGFza09yUHJvamVjdFN1Ym1pdCgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGdldERhdGFGcm9tRm9ybXMoZSk7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGhhbmRsZUZvcm1TdWJtaXNzaW9uKCk7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pc3Npb24oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IHByb2plY3RzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1hcmVhJyk7XG5cbiAgaWYgKGZvcm0uZ2V0QXR0cmlidXRlKCdjbGFzcycpLmluY2x1ZGVzKCd0YXNrJykpIHtcbiAgICBwb3B1bGF0ZU1haW5BcmVhKCk7XG4gIH0gZWxzZSB7XG4gICAgYnVpbGRQcm9qZWN0RG9tRWxlbWVudChwcm9qZWN0c0FyZWEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBidWlsZFRhc2tEb21FbGVtZW50IH0gZnJvbSAnLi9kb20tZGlzcGxheS10YXNrJztcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgaXNUb2RheSBmcm9tICdkYXRlLWZucy9pc1RvZGF5JztcbmltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZERheXMnO1xuaW1wb3J0IGlzQmVmb3JlIGZyb20gJ2RhdGUtZm5zL2lzQmVmb3JlJztcblxuY29uc3QgbWFpbkFyZWFUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWFyZWEtdGl0bGUnKTtcbmNvbnN0IG1haW5BcmVhQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWFyZWEtY29udGVudCcpO1xuXG5mdW5jdGlvbiBoYW5kbGVOb1Rhc2tzKHRhc2tMaXN0KSB7XG4gIGlmICh0YXNrTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICBtYWluQXJlYUNvbnRlbnQudGV4dENvbnRlbnQgPSAnWWF5ISBObyBUYXNrcyEnO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XG4gIGNvbnN0IGFsbFRhc2tzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBtYWluQXJlYVRpdGxlLnRleHRDb250ZW50ID0gJ0FsbCBUYXNrcyc7XG4gIGFsbFRhc2tzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCBwcm9qZWN0TWFuYWdlci5yZXR1cm5BbGxUYXNrcygpKTtcbiAgaGFuZGxlTm9UYXNrcyhwcm9qZWN0TWFuYWdlci5yZXR1cm5BbGxUYXNrcygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUb2RheVRhc2tzKCkge1xuICBtYWluQXJlYUNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIG1haW5BcmVhVGl0bGUudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuXG4gIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuQWxsVGFza3MoKTtcbiAgbGV0IHRvZGF5VGFza3MgPSBbXTtcblxuICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLmRhdGUpO1xuICAgIGlmIChpc1RvZGF5KHRhc2tEYXRlKSkgdG9kYXlUYXNrcy5wdXNoKHRhc2spO1xuICB9KTtcblxuICBidWlsZFRhc2tEb21FbGVtZW50KG1haW5BcmVhQ29udGVudCwgdG9kYXlUYXNrcyk7XG4gIGhhbmRsZU5vVGFza3ModG9kYXlUYXNrcylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlXZWVrVGFza3MoKSB7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9ICdOZXh0IDcgRGF5cyc7XG5cbiAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5BbGxUYXNrcygpO1xuICBsZXQgc2V2ZW5EYXlzVGFza3MgPSBbXTtcblxuICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgdG9kYXlEYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZGF0ZSk7XG4gICAgY29uc3Qgb25lV2Vla0xhdGVyRGF0ZSA9IGFkZERheXModG9kYXlEYXRlLCA3KTtcbiAgICBpZiAoaXNCZWZvcmUodGFza0RhdGUsIG9uZVdlZWtMYXRlckRhdGUpKSBzZXZlbkRheXNUYXNrcy5wdXNoKHRhc2spO1xuICB9KTtcblxuICBidWlsZFRhc2tEb21FbGVtZW50KG1haW5BcmVhQ29udGVudCwgc2V2ZW5EYXlzVGFza3MpO1xuICBoYW5kbGVOb1Rhc2tzKHNldmVuRGF5c1Rhc2tzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUltcG9ydGFudFRhc2tzKCkge1xuICBtYWluQXJlYUNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIG1haW5BcmVhVGl0bGUudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JztcblxuICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCk7XG4gIGxldCBpbXBvcnRhbnRUYXNrcyA9IFtdO1xuXG4gIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICBpbXBvcnRhbnRUYXNrcy5wdXNoKHRhc2spO1xuICAgIH1cbiAgfSk7XG5cbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIGltcG9ydGFudFRhc2tzKTtcbiAgaGFuZGxlTm9UYXNrcyhpbXBvcnRhbnRUYXNrcylcbn1cbiIsImltcG9ydCB7XG4gIGRpc3BsYXlBbGxUYXNrcyxcbiAgZGlzcGxheUltcG9ydGFudFRhc2tzLFxuICBkaXNwbGF5VG9kYXlUYXNrcyxcbiAgZGlzcGxheVdlZWtUYXNrcyxcbn0gZnJvbSAnLi9uYXYtdXRpbGl0eSc7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0VGFza3MgfSBmcm9tICcuL2RvbS1kaXNwbGF5LXByb2plY3QnO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcblxuLy8gdXNpbmcgdGhpcyB0byBoZWxwIHBvcHVsYXRlIHRoZSBtYWluIGFyZWEgd2l0aCB0aGUgYWRlcXVhdGUgZmlsdGVyZWQgY29udGVudFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdWxhdGVNYWluQXJlYSgpIHtcbiAgY29uc3QgbmF2U2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZSA+IGRpdicpO1xuICBjb25zdCBwcm9qZWN0RG9tRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcucHJvamVjdHMtYXJlYSA+IGRpdiA+IGRpdidcbiAgKTtcbiAgY29uc3QgZnVuY3Rpb25Ub1J1bkRpY3Rpb25hcnkgPSB7XG4gICAgJ3Rhc2tzIGFjdGl2ZSc6IGRpc3BsYXlBbGxUYXNrcyxcbiAgICAndG9kYXkgYWN0aXZlJzogZGlzcGxheVRvZGF5VGFza3MsXG4gICAgJ3NldmVuLWRheXMgYWN0aXZlJzogZGlzcGxheVdlZWtUYXNrcyxcbiAgICAnaW1wb3J0YW50IGFjdGl2ZSc6IGRpc3BsYXlJbXBvcnRhbnRUYXNrcyxcbiAgfTtcblxuICBmb3IgKGxldCBzZWN0aW9uIG9mIG5hdlNlY3Rpb25zKSB7XG4gICAgaWYgKHNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgY29uc3QgY2xhc3NMaXN0ID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICBmdW5jdGlvblRvUnVuRGljdGlvbmFyeVtjbGFzc0xpc3RdKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3REb21FbGVtZW50cykge1xuICAgIGlmIChwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIGNvbnN0IHByb2plY3RJRCA9IHByb2plY3QuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gICAgICBsZXQgcHJvamVjdFRvRGlzcGxheTtcbiAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgYWxsUHJvamVjdHMpIHtcbiAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IHByb2plY3RJRCkgcHJvamVjdFRvRGlzcGxheSA9IHByb2plY3Q7XG4gICAgICB9XG4gICAgICByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdFRvRGlzcGxheSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvL2lmIG5vIG5hdiBidXR0b24gb3IgcHJvamVjdCBpcyBzZWxlY3RlZCwgc3dpdGNoIHRvIEFsbCBUYXNrcyAndGFiJ1xuICBkaXNwbGF5QWxsVGFza3MoKTtcbn1cbiIsImltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSwgcmV0cmlldmVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBwcm9qZWN0TWFuYWdlcigpIHtcbiAgY29uc3QgcHJvamVjdHMgPSByZXRyaWV2ZUxvY2FsU3RvcmFnZSgnZGInKVxuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGZvciAobGV0IGl0ZXJhdGVkUHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgY29uc3QgcHJvamVjdHNUaXRsZSA9IFtdXG4gICAgICBwcm9qZWN0c1RpdGxlLnB1c2goaXRlcmF0ZWRQcm9qZWN0LnRpdGxlKVxuICAgICAgaWYgKHByb2plY3RzVGl0bGUuaW5jbHVkZXMocHJvamVjdC50aXRsZSkpIHJldHVyblxuICAgIH1cbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKHByb2plY3RzKVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9qZWN0c1tpXS50aXRsZSA9PT0gcHJvamVjdC50aXRsZSkge1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShwcm9qZWN0cyk7XG4gIH07XG5cbiAgY29uc3QgcmV0dXJuQWxsVGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsVGFza3MgPSBbXTtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICBhbGxUYXNrcy5wdXNoKC4uLnByb2plY3QuZ2V0VGFza3MoKSlcbiAgICB9XG5cbiAgICByZXR1cm4gYWxsVGFza3NcbiAgfVxuXG4gIGNvbnN0IHJldHVyblByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgcmV0dXJuIHsgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgcmV0dXJuUHJvamVjdHMgLCByZXR1cm5BbGxUYXNrc307XG59KSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLmNvbXBsZXRlZFRhc2tzID0gW107XG4gICAgdGhpcy5nZW5lcmF0ZUlkKCk7XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gIH1cblxuICBjaGFuZ2VUaXRsZSh2YWx1ZSkge1xuICAgIHRoaXMudGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3M7XG4gIH1cblxuICBnZW5lcmF0ZUlkKCkge1xuICAgIHRoaXMuaWQgPSBgcHJqLWlkJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyKX1gO1xuICB9XG5cbiAgbW92ZVRvQ29tcGxldGVkVGFza3MoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50YXNrc1tpXS5jb21wbGV0aW9uU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkVGFza3MucHVzaCh0aGlzLnRhc2tzW2ldKTtcbiAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW92ZVRvVW5jb21wbGV0ZWRUYXNrcygpIHtcbiAgICBjb25zdCB0YXNrVG9Nb3ZlID0gdGhpcy5jb21wbGV0ZWRUYXNrc1t0aGlzLmNvbXBsZXRlZFRhc2tzLmxlbmd0aCAtIDFdXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2tUb01vdmUpXG4gIH1cblxuICBjbGVhckNvbXBsZXRlZFRhc2tzKCkge1xuICAgIHRoaXMuY29tcGxldGVkVGFza3MgPSBbXVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb21wbGV0aW9uU3RhdHVzID0gZmFsc2U7XG4gICAgdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRhdGU7XG4gICAgdGhpcy5wcmlvcml0eTtcbiAgICB0aGlzLmdlbmVyYXRlSWQoKTtcbiAgfVxuXG4gIGNoYW5nZVRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgYWRkRGV0YWlscyh2YWx1ZSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGFkZER1ZURhdGUodmFsdWUpIHtcbiAgICB0aGlzLmRhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGFkZFByaW9yaXR5KHZhbHVlKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHZhbHVlO1xuICB9XG5cbiAgdG9nZ2xlQ29tcGxldGlvblN0YXR1cygpIHtcbiAgICB0aGlzLmNvbXBsZXRpb25TdGF0dXMgPSAhdGhpcy5jb21wbGV0aW9uU3RhdHVzO1xuICB9XG5cbiAgZ2VuZXJhdGVJZCgpIHtcbiAgICB0aGlzLmlkID0gYHRzay1pZCR7TWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMil9YDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==