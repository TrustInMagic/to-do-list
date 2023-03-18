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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --header-content-light: #f3f4f6;\n  --nav-light: #ffffff;\n  --brand-green: #059669;\n  --font-color: #44403c;\n  --font-color-light: #f1f5f9;\n  --hover-nav-color: #e7e5e4;\n  --nav-active: #a7f3d0;\n  --add-button-color: #22d3ee;\n  --pop-up-color: #e4e4e7;\n  --pop-up-hover: #d4d4d8;\n  --low-radio: #22d3ee;\n  --med-radio: #fb923c;\n  --high-radio: #ef4444;\n  --pop-up-header: #fca5a5;\n}\n\nbody {\n  min-height: 100vh;\n  color: var(--font-color);\n  font-family: sono, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n* .active {\n  background-color: var(--nav-active) !important;\n}\n\n@font-face {\n  font-family: sono;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n/* header */\n\n.header {\n  background-color: var(--header-content-light);\n  height: 80px;\n  border-bottom: var(--brand-green) solid 2px;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  grid-template-columns: 1fr repeat(2, auto) 1fr;\n}\n\n.hamburger {\n  margin-left: 10px;\n  justify-self: start;\n  font-size: 2.8rem;\n  cursor: pointer;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  padding-bottom: 3px;\n}\n\n.hamburger:hover {\n  background-color: var(--hover-nav-color);\n}\n\n.hamburger:active {\n  transform: scale(0.95);\n}\n\n.title-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n  \n}\n\nh1 {\n  font-size: 2.7rem;\n}\n\n.header img {\n  height: 45px;\n}\n\n.header span {\n  color: var(--brand-green);\n}\n\n.content {\n  display: flex;\n  min-height: calc(100vh - 80px);\n}\n\n/* nav */\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  width: min(20%, 350px);\n  min-width: 200px;\n  gap: 40px;\n  padding: 20px;\n  background-color: var(--nav-light);\n}\n\n.content .invisible {\n  display: none;\n  transition: 0.5s;\n}\n\n.nav h2 {\n  border-bottom: var(--font-color) solid 2px;\n}\n\n.nav button {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  margin-top: auto;\n  font-size: 2rem;\n  cursor: pointer;\n  background-color: var(--add-button-color);\n  border: none;\n  box-shadow: 2px 2px 5px var(--font-color);\n  transition: all 0.3s;\n  color: var(--nav-light);\n  visibility: visible;\n}\n\n.nav button:active {\n  transform: scale(0.95);\n}\n\n.nav button:hover {\n  transform: rotate(90deg);\n  transition: all 0.3s;\n}\n\n.nav img {\n  height: 25px;\n  width: 25px;\n}\n\n.home {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.home > div {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.2rem;\n  font-weight: 500;\n  cursor: pointer;\n  border-radius: 10px;\n  height: 35px;\n}\n\n.home > div:hover {\n  background-color: var(--hover-nav-color);\n}\n\nh2 {\n  font-size: 1.7rem;\n  font-weight: 900;\n}\n\n/* modal */\n\n.add-new-modal {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 400px;\n  max-width: 700px;\n  box-shadow: 2px 2px 30px;\n  border-radius: 10px !important;\n  background-color: var(--header-content-light);\n  transform: scale(0);\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 10px;\n  background-color: var(--brand-green);\n  font-size: 1.5rem;\n  color: var(--font-color-light);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.close {\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.close:hover {\n  transform: rotate(90deg);\n  transition: all 0.3s;\n}\n\n.modal-content {\n  display: flex;\n  flex: 1;\n}\n\n/* modal nav */\n\n.modal-nav {\n  background-color: var(--nav-light);\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 10px;\n  font-weight: 600;\n  border-bottom-left-radius: 10px;\n}\n\n.modal-content img {\n  height: 60px;\n}\n\n.modal-nav > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  border-radius: 10px;\n  height: 70px;\n}\n\n.modal-nav > div:hover {\n  background-color: var(--hover-nav-color);\n}\n\n.add-new-modal form {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n/* modal form */\n\n.add-new-modal form > div {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 10px;\n  padding: 20px;\n}\n\n.task-edit-form > div {\n  justify-content: space-between;\n}\n\nform > div > div {\n  display: flex;\n  gap: 10px;\n}\n\n/* modal input */\n\n.add-new-modal input,\n.add-new-modal textarea {\n  font-family: inherit;\n  font-size: 100%;\n  background-color: inherit;\n  resize: none;\n}\n\n.add-new-modal input[type='text'],\ntextarea {\n  appearance: none;\n  outline: none;\n  border: none;\n}\n\ninput[type='date'] {\n  border-radius: 5px;\n  padding: 2px 5px;\n  border: var(--brand-green) 1px solid;\n  color: var(--brand-green);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-transform: uppercase;\n}\n\n.date-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.priority-radio {\n  display: flex;\n  align-items: center;\n}\n\nform button {\n  margin-left: auto;\n  margin-top: auto;\n  height: 30px;\n  width: 120px;\n  border: var(--brand-green) solid 1px;\n  box-shadow: 2px 2px 5px;\n  color: var(--brand-green);\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n}\n\nform button:hover {\n  background-color: var(--brand-green);\n  color: white;\n  transition: 0.3s;\n}\n\nform select {\n  border-radius: 4px;\n  background-color: var(--hover-nav-color);\n  height: 20px;\n}\n\n/* modal radio-buttons */\n\n.radio-button {\n  float: left;\n  margin: 0 5px 0 0;\n  width: 80px;\n  height: 25px;\n  position: relative;\n  border-radius: 5px;\n}\n\n.radio-low {\n  border: var(--low-radio) solid 2px;\n  color: var(--low-radio);\n}\n\n.radio-low:hover {\n  background-color: var(--low-radio);\n  color: white;\n  transition: 0.3s;\n}\n\n.radio-medium {\n  border: var(--med-radio) solid 2px;\n  color: var(--med-radio);\n}\n\n.radio-medium:hover {\n  background-color: var(--med-radio);\n  color: white;\n  transition: 0.3s;\n}\n\n.radio-high {\n  border: var(--high-radio) solid 2px;\n  color: var(--high-radio);\n}\n\n.radio-high:hover {\n  background-color: var(--high-radio);\n  color: white;\n  transition: 0.3s;\n}\n\n.radio-button label,\n.radio-button input {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n}\n\n.radio-button input[type='radio'] {\n  opacity: 0.011;\n  z-index: 100;\n}\n\n.radio-low input[type='radio']:checked + label {\n  background-color: var(--low-radio);\n  color: white;\n}\n\n.radio-medium input[type='radio']:checked + label {\n  background-color: var(--med-radio);\n  color: white;\n}\n\n.radio-high input[type='radio']:checked + label {\n  background-color: #ef4444;\n  color: white;\n}\n\n.radio-button label {\n  cursor: pointer;\n  z-index: 90;\n  line-height: 1.8em;\n}\n\n/* project element*/\n\n.projects-area {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.projects-area .project {\n  display: flex;\n  gap: 5px;\n  width: 100%;\n  height: 30px;\n  font-size: 1.1rem;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n.project-container {\n  border-radius: 10px;\n  width: 100%;\n  padding: 3px;\n}\n\n.dots {\n  margin-left: auto;\n}\n\n.project-container:hover {\n  background-color: var(--hover-nav-color);\n}\n\n/* main-area */\n\n.main-area {\n  background-color: var(--header-content-light);\n  min-height: calc(100vh - 80px);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main-area-title {\n  background-color: var(--brand-green);\n  margin-top: 20px;\n  width: 75%;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--font-color-light);\n  font-size: 3rem;\n  font-weight: 600;\n}\n\n.main-area-content {\n  display: flex;\n  flex-direction: column;\n  margin-top: 30px;\n  background-color: var(--header-content-light);\n  width: 75%;\n  height: 100%;\n  gap: 10px;\n  align-items: center;\n  font-size: 1.4rem;\n  font-weight: 500;\n}\n\n/* task element */\n\n.main-area-content > div {\n  width: 100%;\n}\n\n.task-body {\n  width: 100%;\n  border-radius: 8px;\n  padding: 10px 10px;\n  display: grid;\n  grid-template-columns: 0.2fr 3fr 0.8fr;\n  align-items: center;\n  background: linear-gradient(#ffffff, #d7dde8);\n  box-shadow: 2px 2px 5px;\n  font-size: 1rem;\n}\n\n.task-body:hover {\n  cursor: pointer;\n}\n\n.task-body:hover:active {\n  transform: scale(0.995);\n}\n\n.task-body input {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  height: 15px;\n  justify-self: center;\n}\n\n.task-body .task-title {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n}\n\n.task-body .task-details {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  font-size: 0.8rem;\n  display: none;\n}\n\n.task-body .right-container {\n  grid-column: 3 / 4;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.show-details {\n  display: block !important;\n}\n\n/* task element checkbox */\n\n.task-body input {\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: #fff;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid currentColor;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n}\n\n.task-body input:before {\n  content: '';\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--brand-green);\n}\n\n.task-body input:checked:before {\n  transform: scale(1);\n}\n\n/* edit and delete popup */\n\n.pop-up {\n  background-color: var(--pop-up-color);\n  position: absolute;\n  bottom: 20px;\n  left: 5px;\n  height: 80px;\n  width: 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  border-radius: 10px;\n  padding: 10px;\n  transform: scale(0);\n  display: flex;\n  flex-direction: column;\n  box-shadow: 2px 2px 10px;\n}\n\n.project-container .dots {\n  position: relative;\n}\n\n.pop-up > div {\n  cursor: pointer;\n  height: 25px;\n  width: 100%;\n  border-radius: 5px;\n  padding-left: 5px;\n  display: flex;\n  align-items: center;\n}\n\n.pop-up > div:hover {\n  background-color: var(--pop-up-hover);\n}\n\n.popping {\n  transform: scale(1) !important;\n}\n\n.task-dots {\n  position: relative;\n}\n\n/* edit and delete popup (task) */\n\n.task-body .pop-up {\n  left: 10px;\n  bottom: 20px;\n}\n\n/* confirm delete pop-up */\n\n.confirm-delete-pop-up {\n  height: 250px;\n  width: 400px;\n  position: fixed;\n  bottom: 20%;\n  left: 0;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--nav-light);\n  box-shadow: 2px 2px 15px;\n  transform: scale(0);\n}\n\n.pop-up-header {\n  background-color: var(--pop-up-header);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  display: flex;\n  height: 50px;\n  align-items: center;\n  color: white;\n  font-size: 1.3rem;\n  padding: 5px 10px;\n}\n\n.pop-up-header .close {\n  margin-left: auto;\n  margin-bottom: auto;\n}\n\n.pop-up-message {\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid var(--hover-nav-color);\n  margin: 0px 10px;\n  height: 100px;\n  justify-content: space-evenly;\n  color: var(--font-color);\n}\n\n.pop-up-buttons {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0px 10px;\n  gap: 10px;\n  flex: 1;\n}\n\n.pop-up-button {\n  height: 40px;\n  width: 80px;\n  background-color: white;\n  border-radius: 10px;\n  cursor: pointer;\n  font-family: inherit;\n  font-weight: 500;\n  letter-spacing: 1px;\n  box-shadow: 1px 1px 5px;\n  border: none;\n}\n\n.pop-up-cancel {\n  color: var(--font-color);\n}\n\n.pop-up-delete {\n  color: var(--high-radio);\n}\n\n.pop-up-cancel:hover {\n  background-color: var(--font-color);\n  color: white;\n}\n\n.pop-up-delete:hover {\n  background-color: var(--high-radio);\n  color: white;\n}\n\nbutton:active {\n  transform: scale(0.95) !important;\n}\n\n/* task undo pop-up */\n\n.task-undo {\n  height: 40px;\n  width: 200px;\n  display: flex;\n  font-size: 0.9rem;\n  justify-content: space-around;\n  align-items: center;\n  position: fixed;\n  bottom: 5px;\n  margin-left: 50%;\n  box-shadow: 2px 2px 10px;\n  border-radius: 10px;\n  transform: scale(0);\n}\n\n.undo-button {\n  cursor: pointer;\n  color: var(--med-radio);\n  font-weight: 700;\n}\n\n.undo-button:active {\n  transform: scale(0.95);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --header-content-light: #f3f4f6;\n  --nav-light: #ffffff;\n  --brand-green: #059669;\n  --font-color: #44403c;\n  --font-color-light: #f1f5f9;\n  --hover-nav-color: #e7e5e4;\n  --nav-active: #a7f3d0;\n  --add-button-color: #22d3ee;\n  --pop-up-color: #e4e4e7;\n  --pop-up-hover: #d4d4d8;\n  --low-radio: #22d3ee;\n  --med-radio: #fb923c;\n  --high-radio: #ef4444;\n  --pop-up-header: #fca5a5;\n}\n\nbody {\n  min-height: 100vh;\n  color: var(--font-color);\n  font-family: sono, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n* .active {\n  background-color: var(--nav-active) !important;\n}\n\n@font-face {\n  font-family: sono;\n  src: url(./assets/Exo2-VariableFont_wght.ttf);\n}\n\n/* header */\n\n.header {\n  background-color: var(--header-content-light);\n  height: 80px;\n  border-bottom: var(--brand-green) solid 2px;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  grid-template-columns: 1fr repeat(2, auto) 1fr;\n}\n\n.hamburger {\n  margin-left: 10px;\n  justify-self: start;\n  font-size: 2.8rem;\n  cursor: pointer;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  padding-bottom: 3px;\n}\n\n.hamburger:hover {\n  background-color: var(--hover-nav-color);\n}\n\n.hamburger:active {\n  transform: scale(0.95);\n}\n\n.title-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n  \n}\n\nh1 {\n  font-size: 2.7rem;\n}\n\n.header img {\n  height: 45px;\n}\n\n.header span {\n  color: var(--brand-green);\n}\n\n.content {\n  display: flex;\n  min-height: calc(100vh - 80px);\n}\n\n/* nav */\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  width: min(20%, 350px);\n  min-width: 200px;\n  gap: 40px;\n  padding: 20px;\n  background-color: var(--nav-light);\n}\n\n.content .invisible {\n  display: none;\n  transition: 0.5s;\n}\n\n.nav h2 {\n  border-bottom: var(--font-color) solid 2px;\n}\n\n.nav button {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  margin-top: auto;\n  font-size: 2rem;\n  cursor: pointer;\n  background-color: var(--add-button-color);\n  border: none;\n  box-shadow: 2px 2px 5px var(--font-color);\n  transition: all 0.3s;\n  color: var(--nav-light);\n  visibility: visible;\n}\n\n.nav button:active {\n  transform: scale(0.95);\n}\n\n.nav button:hover {\n  transform: rotate(90deg);\n  transition: all 0.3s;\n}\n\n.nav img {\n  height: 25px;\n  width: 25px;\n}\n\n.home {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.home > div {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.2rem;\n  font-weight: 500;\n  cursor: pointer;\n  border-radius: 10px;\n  height: 35px;\n}\n\n.home > div:hover {\n  background-color: var(--hover-nav-color);\n}\n\nh2 {\n  font-size: 1.7rem;\n  font-weight: 900;\n}\n\n/* modal */\n\n.add-new-modal {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 400px;\n  max-width: 700px;\n  box-shadow: 2px 2px 30px;\n  border-radius: 10px !important;\n  background-color: var(--header-content-light);\n  transform: scale(0);\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 10px;\n  background-color: var(--brand-green);\n  font-size: 1.5rem;\n  color: var(--font-color-light);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.close {\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.close:hover {\n  transform: rotate(90deg);\n  transition: all 0.3s;\n}\n\n.modal-content {\n  display: flex;\n  flex: 1;\n}\n\n/* modal nav */\n\n.modal-nav {\n  background-color: var(--nav-light);\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 10px;\n  font-weight: 600;\n  border-bottom-left-radius: 10px;\n}\n\n.modal-content img {\n  height: 60px;\n}\n\n.modal-nav > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  border-radius: 10px;\n  height: 70px;\n}\n\n.modal-nav > div:hover {\n  background-color: var(--hover-nav-color);\n}\n\n.add-new-modal form {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n/* modal form */\n\n.add-new-modal form > div {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 10px;\n  padding: 20px;\n}\n\n.task-edit-form > div {\n  justify-content: space-between;\n}\n\nform > div > div {\n  display: flex;\n  gap: 10px;\n}\n\n/* modal input */\n\n.add-new-modal input,\n.add-new-modal textarea {\n  font-family: inherit;\n  font-size: 100%;\n  background-color: inherit;\n  resize: none;\n}\n\n.add-new-modal input[type='text'],\ntextarea {\n  appearance: none;\n  outline: none;\n  border: none;\n}\n\ninput[type='date'] {\n  border-radius: 5px;\n  padding: 2px 5px;\n  border: var(--brand-green) 1px solid;\n  color: var(--brand-green);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-transform: uppercase;\n}\n\n.date-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.priority-radio {\n  display: flex;\n  align-items: center;\n}\n\nform button {\n  margin-left: auto;\n  margin-top: auto;\n  height: 30px;\n  width: 120px;\n  border: var(--brand-green) solid 1px;\n  box-shadow: 2px 2px 5px;\n  color: var(--brand-green);\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n}\n\nform button:hover {\n  background-color: var(--brand-green);\n  color: white;\n  transition: 0.3s;\n}\n\nform select {\n  border-radius: 4px;\n  background-color: var(--hover-nav-color);\n  height: 20px;\n}\n\n/* modal radio-buttons */\n\n.radio-button {\n  float: left;\n  margin: 0 5px 0 0;\n  width: 80px;\n  height: 25px;\n  position: relative;\n  border-radius: 5px;\n}\n\n.radio-low {\n  border: var(--low-radio) solid 2px;\n  color: var(--low-radio);\n}\n\n.radio-low:hover {\n  background-color: var(--low-radio);\n  color: white;\n  transition: 0.3s;\n}\n\n.radio-medium {\n  border: var(--med-radio) solid 2px;\n  color: var(--med-radio);\n}\n\n.radio-medium:hover {\n  background-color: var(--med-radio);\n  color: white;\n  transition: 0.3s;\n}\n\n.radio-high {\n  border: var(--high-radio) solid 2px;\n  color: var(--high-radio);\n}\n\n.radio-high:hover {\n  background-color: var(--high-radio);\n  color: white;\n  transition: 0.3s;\n}\n\n.radio-button label,\n.radio-button input {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n}\n\n.radio-button input[type='radio'] {\n  opacity: 0.011;\n  z-index: 100;\n}\n\n.radio-low input[type='radio']:checked + label {\n  background-color: var(--low-radio);\n  color: white;\n}\n\n.radio-medium input[type='radio']:checked + label {\n  background-color: var(--med-radio);\n  color: white;\n}\n\n.radio-high input[type='radio']:checked + label {\n  background-color: #ef4444;\n  color: white;\n}\n\n.radio-button label {\n  cursor: pointer;\n  z-index: 90;\n  line-height: 1.8em;\n}\n\n/* project element*/\n\n.projects-area {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.projects-area .project {\n  display: flex;\n  gap: 5px;\n  width: 100%;\n  height: 30px;\n  font-size: 1.1rem;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n.project-container {\n  border-radius: 10px;\n  width: 100%;\n  padding: 3px;\n}\n\n.dots {\n  margin-left: auto;\n}\n\n.project-container:hover {\n  background-color: var(--hover-nav-color);\n}\n\n/* main-area */\n\n.main-area {\n  background-color: var(--header-content-light);\n  min-height: calc(100vh - 80px);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main-area-title {\n  background-color: var(--brand-green);\n  margin-top: 20px;\n  width: 75%;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--font-color-light);\n  font-size: 3rem;\n  font-weight: 600;\n}\n\n.main-area-content {\n  display: flex;\n  flex-direction: column;\n  margin-top: 30px;\n  background-color: var(--header-content-light);\n  width: 75%;\n  height: 100%;\n  gap: 10px;\n  align-items: center;\n  font-size: 1.4rem;\n  font-weight: 500;\n}\n\n/* task element */\n\n.main-area-content > div {\n  width: 100%;\n}\n\n.task-body {\n  width: 100%;\n  border-radius: 8px;\n  padding: 10px 10px;\n  display: grid;\n  grid-template-columns: 0.2fr 3fr 0.8fr;\n  align-items: center;\n  background: linear-gradient(#ffffff, #d7dde8);\n  box-shadow: 2px 2px 5px;\n  font-size: 1rem;\n}\n\n.task-body:hover {\n  cursor: pointer;\n}\n\n.task-body:hover:active {\n  transform: scale(0.995);\n}\n\n.task-body input {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  height: 15px;\n  justify-self: center;\n}\n\n.task-body .task-title {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n}\n\n.task-body .task-details {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  font-size: 0.8rem;\n  display: none;\n}\n\n.task-body .right-container {\n  grid-column: 3 / 4;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.show-details {\n  display: block !important;\n}\n\n/* task element checkbox */\n\n.task-body input {\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: #fff;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid currentColor;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n}\n\n.task-body input:before {\n  content: '';\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--brand-green);\n}\n\n.task-body input:checked:before {\n  transform: scale(1);\n}\n\n/* edit and delete popup */\n\n.pop-up {\n  background-color: var(--pop-up-color);\n  position: absolute;\n  bottom: 20px;\n  left: 5px;\n  height: 80px;\n  width: 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  border-radius: 10px;\n  padding: 10px;\n  transform: scale(0);\n  display: flex;\n  flex-direction: column;\n  box-shadow: 2px 2px 10px;\n}\n\n.project-container .dots {\n  position: relative;\n}\n\n.pop-up > div {\n  cursor: pointer;\n  height: 25px;\n  width: 100%;\n  border-radius: 5px;\n  padding-left: 5px;\n  display: flex;\n  align-items: center;\n}\n\n.pop-up > div:hover {\n  background-color: var(--pop-up-hover);\n}\n\n.popping {\n  transform: scale(1) !important;\n}\n\n.task-dots {\n  position: relative;\n}\n\n/* edit and delete popup (task) */\n\n.task-body .pop-up {\n  left: 10px;\n  bottom: 20px;\n}\n\n/* confirm delete pop-up */\n\n.confirm-delete-pop-up {\n  height: 250px;\n  width: 400px;\n  position: fixed;\n  bottom: 20%;\n  left: 0;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--nav-light);\n  box-shadow: 2px 2px 15px;\n  transform: scale(0);\n}\n\n.pop-up-header {\n  background-color: var(--pop-up-header);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  display: flex;\n  height: 50px;\n  align-items: center;\n  color: white;\n  font-size: 1.3rem;\n  padding: 5px 10px;\n}\n\n.pop-up-header .close {\n  margin-left: auto;\n  margin-bottom: auto;\n}\n\n.pop-up-message {\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid var(--hover-nav-color);\n  margin: 0px 10px;\n  height: 100px;\n  justify-content: space-evenly;\n  color: var(--font-color);\n}\n\n.pop-up-buttons {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0px 10px;\n  gap: 10px;\n  flex: 1;\n}\n\n.pop-up-button {\n  height: 40px;\n  width: 80px;\n  background-color: white;\n  border-radius: 10px;\n  cursor: pointer;\n  font-family: inherit;\n  font-weight: 500;\n  letter-spacing: 1px;\n  box-shadow: 1px 1px 5px;\n  border: none;\n}\n\n.pop-up-cancel {\n  color: var(--font-color);\n}\n\n.pop-up-delete {\n  color: var(--high-radio);\n}\n\n.pop-up-cancel:hover {\n  background-color: var(--font-color);\n  color: white;\n}\n\n.pop-up-delete:hover {\n  background-color: var(--high-radio);\n  color: white;\n}\n\nbutton:active {\n  transform: scale(0.95) !important;\n}\n\n/* task undo pop-up */\n\n.task-undo {\n  height: 40px;\n  width: 200px;\n  display: flex;\n  font-size: 0.9rem;\n  justify-content: space-around;\n  align-items: center;\n  position: fixed;\n  bottom: 5px;\n  margin-left: 50%;\n  box-shadow: 2px 2px 10px;\n  border-radius: 10px;\n  transform: scale(0);\n}\n\n.undo-button {\n  cursor: pointer;\n  color: var(--med-radio);\n  font-weight: 700;\n}\n\n.undo-button:active {\n  transform: scale(0.95);\n}\n"],"sourceRoot":""}]);
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
const hamburgerMenu = document.querySelector('.hamburger')
const navigation = document.querySelector('.nav')

addButton.addEventListener('click', () => (0,_modal_manipulation__WEBPACK_IMPORTED_MODULE_0__.popModal)());
closeModalButton.addEventListener('click', () => (0,_modal_manipulation__WEBPACK_IMPORTED_MODULE_0__.closeModal)());

function utilityRemoveActiveClass() {
  const allElements = document.querySelectorAll('div');
  allElements.forEach((element) => element.classList.remove('active'));
}

hamburgerMenu.addEventListener('click', () => {
  navigation.classList.toggle('invisible')
})

allTasks.addEventListener('click', () => {
  ;(0,_nav_utility__WEBPACK_IMPORTED_MODULE_3__.displayAllTasks)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLGFBQWEsT0FBTyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZ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QTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0JlZm9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Fzc2V0cy83LWRheXMucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXNzZXRzL2ltcG9ydGFudC1zdGFyLnN2ZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Fzc2V0cy9sb2dvLWljb24ucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXNzZXRzL21vZGFsLXByb2plY3QucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXNzZXRzL21vZGFsLXRhc2sucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXNzZXRzL3BhZ2UtaWNvbi5wbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hc3NldHMvdGFza3MucG5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXNzZXRzL3RvZGF5LnBuZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Fzc2V0cy93aGl0ZS1mbGFnLXN2Zy5zdmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYnVpbGQtcG9wLXVwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RhdGEtbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLWRpc3BsYXktcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS1kaXNwbGF5LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2RhbC1mb3JtLWJ1aWxkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kYWwtbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmF2LXV0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wb3B1bGF0ZS1tYWluLWFyZWEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvRXhvMi1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWhlYWRlci1jb250ZW50LWxpZ2h0OiAjZjNmNGY2O1xcbiAgLS1uYXYtbGlnaHQ6ICNmZmZmZmY7XFxuICAtLWJyYW5kLWdyZWVuOiAjMDU5NjY5O1xcbiAgLS1mb250LWNvbG9yOiAjNDQ0MDNjO1xcbiAgLS1mb250LWNvbG9yLWxpZ2h0OiAjZjFmNWY5O1xcbiAgLS1ob3Zlci1uYXYtY29sb3I6ICNlN2U1ZTQ7XFxuICAtLW5hdi1hY3RpdmU6ICNhN2YzZDA7XFxuICAtLWFkZC1idXR0b24tY29sb3I6ICMyMmQzZWU7XFxuICAtLXBvcC11cC1jb2xvcjogI2U0ZTRlNztcXG4gIC0tcG9wLXVwLWhvdmVyOiAjZDRkNGQ4O1xcbiAgLS1sb3ctcmFkaW86ICMyMmQzZWU7XFxuICAtLW1lZC1yYWRpbzogI2ZiOTIzYztcXG4gIC0taGlnaC1yYWRpbzogI2VmNDQ0NDtcXG4gIC0tcG9wLXVwLWhlYWRlcjogI2ZjYTVhNTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBzb25vLCAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiAuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1hY3RpdmUpICFpbXBvcnRhbnQ7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHNvbm87XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbi8qIGhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbnRlbnQtbGlnaHQpO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYnJhbmQtZ3JlZW4pIHNvbGlkIDJweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgcmVwZWF0KDIsIGF1dG8pIDFmcjtcXG59XFxuXFxuLmhhbWJ1cmdlciB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBmb250LXNpemU6IDIuOHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA0NXB4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxufVxcblxcbi5oYW1idXJnZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbmF2LWNvbG9yKTtcXG59XFxuXFxuLmhhbWJ1cmdlcjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyLjdyZW07XFxufVxcblxcbi5oZWFkZXIgaW1nIHtcXG4gIGhlaWdodDogNDVweDtcXG59XFxuXFxuLmhlYWRlciBzcGFuIHtcXG4gIGNvbG9yOiB2YXIoLS1icmFuZC1ncmVlbik7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxufVxcblxcbi8qIG5hdiAqL1xcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogbWluKDIwJSwgMzUwcHgpO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIGdhcDogNDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtbGlnaHQpO1xcbn1cXG5cXG4uY29udGVudCAuaW52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4ubmF2IGgyIHtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWZvbnQtY29sb3IpIHNvbGlkIDJweDtcXG59XFxuXFxuLm5hdiBidXR0b24ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkLWJ1dHRvbi1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCB2YXIoLS1mb250LWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgY29sb3I6IHZhcigtLW5hdi1saWdodCk7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4ubmF2IGJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLm5hdiBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5uYXYgaW1nIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4uaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmhvbWUgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5ob21lID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLW5hdi1jb2xvcik7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLyogbW9kYWwgKi9cXG5cXG4uYWRkLW5ldy1tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogNDAwcHg7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbnRlbnQtbGlnaHQpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtZ3JlZW4pO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jbG9zZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLyogbW9kYWwgbmF2ICovXFxuXFxuLm1vZGFsLW5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtbGlnaHQpO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCBpbWcge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ubW9kYWwtbmF2ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5tb2RhbC1uYXYgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbmF2LWNvbG9yKTtcXG59XFxuXFxuLmFkZC1uZXctbW9kYWwgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi8qIG1vZGFsIGZvcm0gKi9cXG5cXG4uYWRkLW5ldy1tb2RhbCBmb3JtID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi50YXNrLWVkaXQtZm9ybSA+IGRpdiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmZvcm0gPiBkaXYgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLyogbW9kYWwgaW5wdXQgKi9cXG5cXG4uYWRkLW5ldy1tb2RhbCBpbnB1dCxcXG4uYWRkLW5ldy1tb2RhbCB0ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5hZGQtbmV3LW1vZGFsIGlucHV0W3R5cGU9J3RleHQnXSxcXG50ZXh0YXJlYSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxuICBib3JkZXI6IHZhcigtLWJyYW5kLWdyZWVuKSAxcHggc29saWQ7XFxuICBjb2xvcjogdmFyKC0tYnJhbmQtZ3JlZW4pO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5kYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJpb3JpdHktcmFkaW8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGJvcmRlcjogdmFyKC0tYnJhbmQtZ3JlZW4pIHNvbGlkIDFweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4O1xcbiAgY29sb3I6IHZhcigtLWJyYW5kLWdyZWVuKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZm9ybSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtZ3JlZW4pO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuZm9ybSBzZWxlY3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbmF2LWNvbG9yKTtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLyogbW9kYWwgcmFkaW8tYnV0dG9ucyAqL1xcblxcbi5yYWRpby1idXR0b24ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW46IDAgNXB4IDAgMDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucmFkaW8tbG93IHtcXG4gIGJvcmRlcjogdmFyKC0tbG93LXJhZGlvKSBzb2xpZCAycHg7XFxuICBjb2xvcjogdmFyKC0tbG93LXJhZGlvKTtcXG59XFxuXFxuLnJhZGlvLWxvdzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcmFkaW8pO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnJhZGlvLW1lZGl1bSB7XFxuICBib3JkZXI6IHZhcigtLW1lZC1yYWRpbykgc29saWQgMnB4O1xcbiAgY29sb3I6IHZhcigtLW1lZC1yYWRpbyk7XFxufVxcblxcbi5yYWRpby1tZWRpdW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkLXJhZGlvKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5yYWRpby1oaWdoIHtcXG4gIGJvcmRlcjogdmFyKC0taGlnaC1yYWRpbykgc29saWQgMnB4O1xcbiAgY29sb3I6IHZhcigtLWhpZ2gtcmFkaW8pO1xcbn1cXG5cXG4ucmFkaW8taGlnaDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLXJhZGlvKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5yYWRpby1idXR0b24gbGFiZWwsXFxuLnJhZGlvLWJ1dHRvbiBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLnJhZGlvLWJ1dHRvbiBpbnB1dFt0eXBlPSdyYWRpbyddIHtcXG4gIG9wYWNpdHk6IDAuMDExO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4ucmFkaW8tbG93IGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1yYWRpbyk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yYWRpby1tZWRpdW0gaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkLXJhZGlvKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnJhZGlvLWhpZ2ggaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnJhZGlvLWJ1dHRvbiBsYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiA5MDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG59XFxuXFxuLyogcHJvamVjdCBlbGVtZW50Ki9cXG5cXG4ucHJvamVjdHMtYXJlYSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnByb2plY3RzLWFyZWEgLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi5kb3RzIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbmF2LWNvbG9yKTtcXG59XFxuXFxuLyogbWFpbi1hcmVhICovXFxuXFxuLm1haW4tYXJlYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29udGVudC1saWdodCk7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1hcmVhLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLWdyZWVuKTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogNzUlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFpbi1hcmVhLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbnRlbnQtbGlnaHQpO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi8qIHRhc2sgZWxlbWVudCAqL1xcblxcbi5tYWluLWFyZWEtY29udGVudCA+IGRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDNmciAwLjhmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZmZmZiwgI2Q3ZGRlOCk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stYm9keTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWJvZHk6aG92ZXI6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OTUpO1xcbn1cXG5cXG4udGFzay1ib2R5IGlucHV0IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGhlaWdodDogMTVweDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1ib2R5IC50YXNrLXRpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnRhc2stYm9keSAudGFzay1kZXRhaWxzIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stYm9keSAucmlnaHQtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaG93LWRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLyogdGFzayBlbGVtZW50IGNoZWNrYm94ICovXFxuXFxuLnRhc2stYm9keSBpbnB1dCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgd2lkdGg6IDEuMTVlbTtcXG4gIGhlaWdodDogMS4xNWVtO1xcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgY3VycmVudENvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xNWVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjA3NWVtKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWJvZHkgaW5wdXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDAuNjVlbTtcXG4gIGhlaWdodDogMC42NWVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tYnJhbmQtZ3JlZW4pO1xcbn1cXG5cXG4udGFzay1ib2R5IGlucHV0OmNoZWNrZWQ6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi8qIGVkaXQgYW5kIGRlbGV0ZSBwb3B1cCAqL1xcblxcbi5wb3AtdXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wLXVwLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGxlZnQ6IDVweDtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIgLmRvdHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucG9wLXVwID4gZGl2IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcC11cCA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3AtdXAtaG92ZXIpO1xcbn1cXG5cXG4ucG9wcGluZyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpICFpbXBvcnRhbnQ7XFxufVxcblxcbi50YXNrLWRvdHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBlZGl0IGFuZCBkZWxldGUgcG9wdXAgKHRhc2spICovXFxuXFxuLnRhc2stYm9keSAucG9wLXVwIHtcXG4gIGxlZnQ6IDEwcHg7XFxuICBib3R0b206IDIwcHg7XFxufVxcblxcbi8qIGNvbmZpcm0gZGVsZXRlIHBvcC11cCAqL1xcblxcbi5jb25maXJtLWRlbGV0ZS1wb3AtdXAge1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMjAlO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1saWdodCk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDE1cHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG5cXG4ucG9wLXVwLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3AtdXAtaGVhZGVyKTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuLnBvcC11cC1oZWFkZXIgLmNsb3NlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG59XFxuXFxuLnBvcC11cC1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWhvdmVyLW5hdi1jb2xvcik7XFxuICBtYXJnaW46IDBweCAxMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ucG9wLXVwLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwcHggMTBweDtcXG4gIGdhcDogMTBweDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5wb3AtdXAtYnV0dG9uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucG9wLXVwLWNhbmNlbCB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5wb3AtdXAtZGVsZXRlIHtcXG4gIGNvbG9yOiB2YXIoLS1oaWdoLXJhZGlvKTtcXG59XFxuXFxuLnBvcC11cC1jYW5jZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wb3AtdXAtZGVsZXRlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtcmFkaW8pO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogdGFzayB1bmRvIHBvcC11cCAqL1xcblxcbi50YXNrLXVuZG8ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA1cHg7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcblxcbi51bmRvLWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tbWVkLXJhZGlvKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi51bmRvLWJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIscUJB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O0VBQzdCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsT0FBTztBQUNUOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1oZWFkZXItY29udGVudC1saWdodDogI2YzZjRmNjtcXG4gIC0tbmF2LWxpZ2h0OiAjZmZmZmZmO1xcbiAgLS1icmFuZC1ncmVlbjogIzA1OTY2OTtcXG4gIC0tZm9udC1jb2xvcjogIzQ0NDAzYztcXG4gIC0tZm9udC1jb2xvci1saWdodDogI2YxZjVmOTtcXG4gIC0taG92ZXItbmF2LWNvbG9yOiAjZTdlNWU0O1xcbiAgLS1uYXYtYWN0aXZlOiAjYTdmM2QwO1xcbiAgLS1hZGQtYnV0dG9uLWNvbG9yOiAjMjJkM2VlO1xcbiAgLS1wb3AtdXAtY29sb3I6ICNlNGU0ZTc7XFxuICAtLXBvcC11cC1ob3ZlcjogI2Q0ZDRkODtcXG4gIC0tbG93LXJhZGlvOiAjMjJkM2VlO1xcbiAgLS1tZWQtcmFkaW86ICNmYjkyM2M7XFxuICAtLWhpZ2gtcmFkaW86ICNlZjQ0NDQ7XFxuICAtLXBvcC11cC1oZWFkZXI6ICNmY2E1YTU7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBmb250LWZhbWlseTogc29ubywgJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbiogLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYWN0aXZlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzb25vO1xcbiAgc3JjOiB1cmwoLi9hc3NldHMvRXhvMi1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb250ZW50LWxpZ2h0KTtcXG4gIGhlaWdodDogODBweDtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJyYW5kLWdyZWVuKSBzb2xpZCAycHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIHJlcGVhdCgyLCBhdXRvKSAxZnI7XFxufVxcblxcbi5oYW1idXJnZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAyLjhyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogNDVweDtcXG4gIGhlaWdodDogNDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbn1cXG5cXG4uaGFtYnVyZ2VyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLW5hdi1jb2xvcik7XFxufVxcblxcbi5oYW1idXJnZXI6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi50aXRsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgXFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMi43cmVtO1xcbn1cXG5cXG4uaGVhZGVyIGltZyB7XFxuICBoZWlnaHQ6IDQ1cHg7XFxufVxcblxcbi5oZWFkZXIgc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tYnJhbmQtZ3JlZW4pO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbn1cXG5cXG4vKiBuYXYgKi9cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IG1pbigyMCUsIDM1MHB4KTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBnYXA6IDQwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWxpZ2h0KTtcXG59XFxuXFxuLmNvbnRlbnQgLmludmlzaWJsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLm5hdiBoMiB7XFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1mb250LWNvbG9yKSBzb2xpZCAycHg7XFxufVxcblxcbi5uYXYgYnV0dG9uIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZC1idXR0b24tY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggdmFyKC0tZm9udC1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIGNvbG9yOiB2YXIoLS1uYXYtbGlnaHQpO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLm5hdiBidXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi5uYXYgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4ubmF2IGltZyB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLmhvbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5ob21lID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4uaG9tZSA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1uYXYtY29sb3IpO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi8qIG1vZGFsICovXFxuXFxuLmFkZC1uZXctbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb250ZW50LWxpZ2h0KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLWdyZWVuKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItbGlnaHQpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5jbG9zZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi8qIG1vZGFsIG5hdiAqL1xcblxcbi5tb2RhbC1uYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWxpZ2h0KTtcXG4gIHdpZHRoOiAyMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgaW1nIHtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuLm1vZGFsLW5hdiA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4ubW9kYWwtbmF2ID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLW5hdi1jb2xvcik7XFxufVxcblxcbi5hZGQtbmV3LW1vZGFsIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4vKiBtb2RhbCBmb3JtICovXFxuXFxuLmFkZC1uZXctbW9kYWwgZm9ybSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4udGFzay1lZGl0LWZvcm0gPiBkaXYge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5mb3JtID4gZGl2ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIG1vZGFsIGlucHV0ICovXFxuXFxuLmFkZC1uZXctbW9kYWwgaW5wdXQsXFxuLmFkZC1uZXctbW9kYWwgdGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uYWRkLW5ldy1tb2RhbCBpbnB1dFt0eXBlPSd0ZXh0J10sXFxudGV4dGFyZWEge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAycHggNXB4O1xcbiAgYm9yZGVyOiB2YXIoLS1icmFuZC1ncmVlbikgMXB4IHNvbGlkO1xcbiAgY29sb3I6IHZhcigtLWJyYW5kLWdyZWVuKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uZGF0ZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnByaW9yaXR5LXJhZGlvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTIwcHg7XFxuICBib3JkZXI6IHZhcigtLWJyYW5kLWdyZWVuKSBzb2xpZCAxcHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweDtcXG4gIGNvbG9yOiB2YXIoLS1icmFuZC1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLWdyZWVuKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbmZvcm0gc2VsZWN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLW5hdi1jb2xvcik7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi8qIG1vZGFsIHJhZGlvLWJ1dHRvbnMgKi9cXG5cXG4ucmFkaW8tYnV0dG9uIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luOiAwIDVweCAwIDA7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnJhZGlvLWxvdyB7XFxuICBib3JkZXI6IHZhcigtLWxvdy1yYWRpbykgc29saWQgMnB4O1xcbiAgY29sb3I6IHZhcigtLWxvdy1yYWRpbyk7XFxufVxcblxcbi5yYWRpby1sb3c6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXJhZGlvKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5yYWRpby1tZWRpdW0ge1xcbiAgYm9yZGVyOiB2YXIoLS1tZWQtcmFkaW8pIHNvbGlkIDJweDtcXG4gIGNvbG9yOiB2YXIoLS1tZWQtcmFkaW8pO1xcbn1cXG5cXG4ucmFkaW8tbWVkaXVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1yYWRpbyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ucmFkaW8taGlnaCB7XFxuICBib3JkZXI6IHZhcigtLWhpZ2gtcmFkaW8pIHNvbGlkIDJweDtcXG4gIGNvbG9yOiB2YXIoLS1oaWdoLXJhZGlvKTtcXG59XFxuXFxuLnJhZGlvLWhpZ2g6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1yYWRpbyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ucmFkaW8tYnV0dG9uIGxhYmVsLFxcbi5yYWRpby1idXR0b24gaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5yYWRpby1idXR0b24gaW5wdXRbdHlwZT0ncmFkaW8nXSB7XFxuICBvcGFjaXR5OiAwLjAxMTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnJhZGlvLWxvdyBpbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcmFkaW8pO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucmFkaW8tbWVkaXVtIGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1yYWRpbyk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yYWRpby1oaWdoIGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yYWRpby1idXR0b24gbGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogOTA7XFxuICBsaW5lLWhlaWdodDogMS44ZW07XFxufVxcblxcbi8qIHByb2plY3QgZWxlbWVudCovXFxuXFxuLnByb2plY3RzLWFyZWEge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0cy1hcmVhIC5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4uZG90cyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLW5hdi1jb2xvcik7XFxufVxcblxcbi8qIG1haW4tYXJlYSAqL1xcblxcbi5tYWluLWFyZWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbnRlbnQtbGlnaHQpO1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tYXJlYS10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1ncmVlbik7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDc1JTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItbGlnaHQpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1haW4tYXJlYS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb250ZW50LWxpZ2h0KTtcXG4gIHdpZHRoOiA3NSU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4vKiB0YXNrIGVsZW1lbnQgKi9cXG5cXG4ubWFpbi1hcmVhLWNvbnRlbnQgPiBkaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrLWJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAzZnIgMC44ZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmZmZmYsICNkN2RkZTgpO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWJvZHk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1ib2R5OmhvdmVyOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTk1KTtcXG59XFxuXFxuLnRhc2stYm9keSBpbnB1dCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stYm9keSAudGFzay10aXRsZSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi50YXNrLWJvZHkgLnRhc2stZGV0YWlscyB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWJvZHkgLnJpZ2h0LWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2hvdy1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIHRhc2sgZWxlbWVudCBjaGVja2JveCAqL1xcblxcbi50YXNrLWJvZHkgaW5wdXQge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW46IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIHdpZHRoOiAxLjE1ZW07XFxuICBoZWlnaHQ6IDEuMTVlbTtcXG4gIGJvcmRlcjogMC4xNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNzVlbSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzay1ib2R5IGlucHV0OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHdpZHRoOiAwLjY1ZW07XFxuICBoZWlnaHQ6IDAuNjVlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLWJyYW5kLWdyZWVuKTtcXG59XFxuXFxuLnRhc2stYm9keSBpbnB1dDpjaGVja2VkOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4vKiBlZGl0IGFuZCBkZWxldGUgcG9wdXAgKi9cXG5cXG4ucG9wLXVwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvcC11cC1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDIwcHg7XFxuICBsZWZ0OiA1cHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIC5kb3RzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBvcC11cCA+IGRpdiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3AtdXAgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wLXVwLWhvdmVyKTtcXG59XFxuXFxuLnBvcHBpbmcge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGFzay1kb3RzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogZWRpdCBhbmQgZGVsZXRlIHBvcHVwICh0YXNrKSAqL1xcblxcbi50YXNrLWJvZHkgLnBvcC11cCB7XFxuICBsZWZ0OiAxMHB4O1xcbiAgYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4vKiBjb25maXJtIGRlbGV0ZSBwb3AtdXAgKi9cXG5cXG4uY29uZmlybS1kZWxldGUtcG9wLXVwIHtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDIwJTtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtbGlnaHQpO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuXFxuLnBvcC11cC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wLXVwLWhlYWRlcik7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbi5wb3AtdXAtaGVhZGVyIC5jbG9zZSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcblxcbi5wb3AtdXAtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ob3Zlci1uYXYtY29sb3IpO1xcbiAgbWFyZ2luOiAwcHggMTBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLnBvcC11cC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMHB4IDEwcHg7XFxuICBnYXA6IDEwcHg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucG9wLXVwLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnBvcC11cC1jYW5jZWwge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ucG9wLXVwLWRlbGV0ZSB7XFxuICBjb2xvcjogdmFyKC0taGlnaC1yYWRpbyk7XFxufVxcblxcbi5wb3AtdXAtY2FuY2VsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucG9wLXVwLWRlbGV0ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLXJhZGlvKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIHRhc2sgdW5kbyBwb3AtdXAgKi9cXG5cXG4udGFzay11bmRvIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG5cXG4udW5kby1idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLW1lZC1yYWRpbyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udW5kby1idXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzQmVmb3JlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYmVmb3JlIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQmVmb3JlKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQmVmb3JlKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkaXJ0eURhdGVUb0NvbXBhcmUpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPCBkYXRlVG9Db21wYXJlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy83LWRheXMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9pbXBvcnRhbnQtc3Rhci5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2xvZ28taWNvbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL21vZGFsLXByb2plY3QucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9tb2RhbC10YXNrLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvcGFnZS1pY29uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdGFza3MucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy90b2RheS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3doaXRlLWZsYWctc3ZnLnN2Z1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGVsZW1lbnRGcm9tSHRtbCBmcm9tICcuL21vZGFsLWZvcm0tYnVpbGQnO1xuaW1wb3J0IHsgdG9nZ2xlQmx1ciB9IGZyb20gJy4vbW9kYWwtbWFuaXB1bGF0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29uZmlybURlbGV0ZVByb2plY3RQb3BVcCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgcG9wVXBDb250YWluZXIgPSBlbGVtZW50RnJvbUh0bWwoYFxuICA8ZGl2IGNsYXNzPVwiY29uZmlybS1kZWxldGUtcG9wLXVwIGFkZC1uZXctbW9kYWxcIj5cbiAgICA8ZGl2IGNsYXNzPVwicG9wLXVwLWhlYWRlclwiPlxuICAgICAgPGgzPkRlbGV0ZSBQcm9qZWN0PC9oMz5cbiAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZVwiPiYjeDI3MTU8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicG9wLXVwLW1lc3NhZ2VcIj5cbiAgICAgIDxzcGFuPkFyZSB5b3Ugc3VyZT88L3NwYW4+XG4gICAgICA8ZGl2PlByb2plY3QgPHN0cm9uZz48c3BhbiBjbGFzcz1cInByb2plY3QtbmFtZVwiPjwvc3Bhbj48L3N0cm9uZz4gV2lsbCBiZSBnb25lIGZvcmV2ZXIhPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBvcC11cC1idXR0b25zXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwLWJ1dHRvbiBwb3AtdXAtY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwLWJ1dHRvbiBwb3AtdXAtZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgKTtcblxuICBib2R5LmFwcGVuZENoaWxkKHBvcFVwQ29udGFpbmVyKTtcbiAgY29uc3QgcG9wVXBFbGVtZW50ID0gcG9wVXBDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNvbmZpcm0tZGVsZXRlLXBvcC11cCcpO1xuXG4gIChmdW5jdGlvbiBoYW5kbGVQb3BVcEFjdGlvbigpIHtcbiAgICBwb3BVcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncG9wcGluZycpO1xuICAgIHRvZ2dsZUJsdXIocG9wVXBFbGVtZW50KTtcbiAgfSkoKTtcblxuICAoZnVuY3Rpb24gaGFuZGxlUG9wVXBDbG9zZSgpIHtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IHBvcFVwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IHBvcFVwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXAtY2FuY2VsJylcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBwb3BVcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucG9wLXVwLWRlbGV0ZScpXG4gICAgY29uc3QgYWN0aW9uQ2FuY2VsQnV0dG9ucyA9IFtjbG9zZUJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBkZWxldGVCdXR0b25dXG4gICAgYWN0aW9uQ2FuY2VsQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBvcFVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwb3BwaW5nJyk7XG4gICAgICB0b2dnbGVCbHVyKHBvcFVwRWxlbWVudCk7XG4gICAgICBwb3BVcENvbnRhaW5lci5yZW1vdmUoKVxuICAgIH0pKVxuICB9KSgpXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVGFza0RlbGV0aW9uVW5kb1BvcFVwKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCB1bmRvUG9wVXBDb250YWluZXIgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXVuZG9cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1bmRvLW1lc3NhZ2VcIj4xIHRhc2sgY29tcGxldGVkPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidW5kby1idXR0b25cIj5VbmRvPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuXG4gIGNvbnN0IHVuZG9Qb3BVcEVsZW1lbnQgPSB1bmRvUG9wVXBDb250YWluZXIucXVlcnlTZWxlY3RvcignLnRhc2stdW5kbycpXG4gIGJvZHkuYXBwZW5kQ2hpbGQodW5kb1BvcFVwQ29udGFpbmVyKVxuICB1bmRvUG9wVXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BvcHBpbmcnKVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVBvcFVwKCkge1xuICAgIHVuZG9Qb3BVcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncG9wcGluZycpO1xuICAgIHVuZG9Qb3BVcENvbnRhaW5lci5yZW1vdmUoKVxuICB9XG5cbiAgc2V0VGltZW91dChyZW1vdmVQb3BVcCwgMzAwMClcbn0iLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuZXhwb3J0IHsgZ2V0RGF0YUZyb21Gb3JtcyB9O1xuXG5mdW5jdGlvbiBnZXREYXRhRnJvbUZvcm1zKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvL2NoZWNrIGlmIHRoZSBmb3JtIGlzIGFzc29jaWF0ZWQgd2l0aCBhZGRpbmcgYSB0YXNrIG9yIGEgcHJvamVjdFxuICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmluY2x1ZGVzKCd0YXNrJykpIHtcbiAgICBnZXREYXRhRnJvbVRhc2tGb3JtKCk7XG4gIH0gZWxzZSBnZXREYXRhRnJvbVByb2plY3RGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGdldERhdGFGcm9tVGFza0Zvcm0oKSB7XG4gIGNvbnN0IHRhc2tUaXRsZVF1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtICN0aXRsZScpO1xuICBjb25zdCBwcm9qZWN0VG9Bc3NpZ25RdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSBzZWxlY3QnKTtcbiAgY29uc3QgZGV0YWlsc1F1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIHRleHRhcmVhJyk7XG4gIGNvbnN0IGR1ZURhdGVRdWVyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSAjZGF0ZScpO1xuICBjb25zdCBwcmlvcml0eVF1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuXG4gIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tUaXRsZVF1ZXJpZXIudmFsdWU7XG4gIGNvbnN0IHByb2plY3RUb0Fzc2lnblRvID0gcHJvamVjdFRvQXNzaWduUXVlcmllci52YWx1ZTtcbiAgY29uc3QgZGV0YWlscyA9IGRldGFpbHNRdWVyaWVyLnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZVF1ZXJpZXIudmFsdWU7XG4gIGxldCBwcmlvcml0eTtcblxuICBwcmlvcml0eVF1ZXJpZXIuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICBpZiAocmFkaW8uY2hlY2tlZCkgcHJpb3JpdHkgPSByYWRpby52YWx1ZTtcbiAgfSk7XG5cbiAgY29uc3QgdGFza1RvQWRkID0gbmV3IFRhc2sodGFza1RpdGxlKTtcbiAgdGFza1RvQWRkLmFkZERldGFpbHMoZGV0YWlscyk7XG4gIHRhc2tUb0FkZC5hZGREdWVEYXRlKGR1ZURhdGUpO1xuICB0YXNrVG9BZGQuYWRkUHJpb3JpdHkocHJpb3JpdHkpO1xuXG4gIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGlmIChwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3RUb0Fzc2lnblRvKSB7XG4gICAgICBwcm9qZWN0LmFkZFRhc2sodGFza1RvQWRkKTtcbiAgICB9XG4gIH0pO1xuICB1cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdHMpXG59XG5cbmZ1bmN0aW9uIGdldERhdGFGcm9tUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IHByb2plY3RUaXRsZVF1ZXJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIC50aXRsZScpO1xuXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZVF1ZXJpZXIudmFsdWU7XG5cbiAgY29uc3QgcHJvamVjdFRvQWRkID0gbmV3IFByb2plY3QocHJvamVjdFRpdGxlKTtcbiAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChwcm9qZWN0VG9BZGQpO1xufVxuIiwiaW1wb3J0IGVsZW1lbnRGcm9tSHRtbCBmcm9tICcuL21vZGFsLWZvcm0tYnVpbGQnO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCB7IGJ1aWxkVGFza0RvbUVsZW1lbnQgfSBmcm9tICcuL2RvbS1kaXNwbGF5LXRhc2snO1xuaW1wb3J0IHsgYnVpbGRFZGl0SW50ZXJmYWNlLCBkZWxldGVQcm9qZWN0IH0gZnJvbSAnLi9lZGl0LXByb2plY3QnO1xuaW1wb3J0IHsgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzIH0gZnJvbSAnLi9pbmRleCc7XG5cbmNvbnN0IG1haW5BcmVhQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWFyZWEtY29udGVudCcpO1xuY29uc3QgbWFpbkFyZWFUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWFyZWEtdGl0bGUnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUHJvamVjdERvbUVsZW1lbnQocGFyZW50KSB7XG4gIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBsYXN0UHJvamVjdEFkZGVkID0gcHJvamVjdHNbaV07XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gbGFzdFByb2plY3RBZGRlZC5nZXRUaXRsZSgpO1xuICAgIGNvbnN0IHByb2plY3RJZCA9IGxhc3RQcm9qZWN0QWRkZWQuaWQ7XG4gXG4gICAgY29uc3QgcHJvamVjdCA9IGVsZW1lbnRGcm9tSHRtbChgXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtY29udGFpbmVyXCIgZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RcIiBkYXRhLWlkPVwiJHtwcm9qZWN0SWR9XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGFtYnVyZ2VyXCI+4piwPC9zcGFuPlxuICAgICAgICA8ZGl2PiR7cHJvamVjdFRpdGxlfTwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRvdHNcIiBkYXRhLWlkPVwiJHtwcm9qZWN0SWR9XCI+JiN4MjJFRVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBcIiBkYXRhLWlkPVwiJHtwcm9qZWN0SWR9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdFwiIGRhdGEtaWQ9XCIke3Byb2plY3RJZH1cIj5FZGl0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlXCIgZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiPkRlbGV0ZTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCk7XG4gICAgXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlbmRlclByb2plY3RUYXNrcyhsYXN0UHJvamVjdEFkZGVkKTtcbiAgICAgIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzcygpO1xuICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2plY3RFZGl0ID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCcuZG90cycpO1xuICAgIGNvbnN0IHBvcFVwID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwJyk7XG4gICAgY29uc3QgcmVuYW1lQnV0dG9uID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHByb2plY3QucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuXG4gICAgcmVuYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnVpbGRFZGl0SW50ZXJmYWNlKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQcm9qZWN0KTtcbiAgICBwcm9qZWN0RWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBvcFVwLmNsYXNzTGlzdC5hZGQoJ3BvcHBpbmcnKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ICE9PSBwcm9qZWN0RWRpdCkgcG9wVXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wcGluZycpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0VGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKCk7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gIG1haW5BcmVhVGl0bGUudGV4dENvbnRlbnQgPSBgUHJvamVjdDogJHtwcm9qZWN0VGl0bGV9YDtcbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIHByb2plY3RUYXNrcyk7XG5cbiAgaWYgKHByb2plY3RUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICBtYWluQXJlYUNvbnRlbnQudGV4dENvbnRlbnQgPVxuICAgICAgJ1RoaXMgcHJvamVjdCBhcHBlYXJzIGVtcHR5LiBBZGQgdGFza3MgdG8gZ2V0IHN0YXJ0ZWQhJztcbiAgfVxufVxuIiwiaW1wb3J0IGVsZW1lbnRGcm9tSHRtbCBmcm9tICcuL21vZGFsLWZvcm0tYnVpbGQnO1xuaW1wb3J0IHsgYnVpbGRUYXNrRWRpdEludGVyZmFjZSwgZGVsZXRlVGFzayB9IGZyb20gJy4vZWRpdC10YXNrJztcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgeyBidWlsZFRhc2tEZWxldGlvblVuZG9Qb3BVcCB9IGZyb20gJy4vYnVpbGQtcG9wLXVwcyc7XG5pbXBvcnQgcG9wdWxhdGVNYWluQXJlYSBmcm9tICcuL3BvcHVsYXRlLW1haW4tYXJlYSc7XG5pbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUYXNrRG9tRWxlbWVudChwYXJlbnQsIHRhc2tzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrc1tpXS50aXRsZTtcbiAgICBjb25zdCB0YXNrRGV0YWlscyA9IHRhc2tzW2ldLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFza3NbaV0uZGF0ZTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrc1tpXS5wcmlvcml0eTtcbiAgICBjb25zdCB0YXNrSWQgPSB0YXNrc1tpXS5pZDtcbiAgICBsZXQgZmxhZ0NvbG9yO1xuXG4gICAgbGV0IHRhc2tFbGVtZW50ID0gZWxlbWVudEZyb21IdG1sKGBcbiAgICA8ZGl2IGNsYXNzPVwidGFzay1ib2R5XCIgZGF0YS1pZD1cIiR7dGFza0lkfVwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidGFzay1jaGVja1wiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidGFzay10aXRsZVwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj4ke3Rhc2tUaXRsZX08L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxzXCIgZGF0YS1pZD1cIiR7dGFza0lkfVwiPiR7dGFza0RldGFpbHN9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWR1ZS1kYXRlXCIgZGF0YS1pZD1cIiR7dGFza0lkfVwiPiR7dGFza0R1ZURhdGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGFnLWNvbnRhaW5lclwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZG90c1wiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj4mI3gyMkVFXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cFwiIGRhdGEtaWQ9XCIke3Rhc2tJZH1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0XCIgZGF0YS1pZD1cIiR7dGFza0lkfVwiPkVkaXQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGVcIiBkYXRhLWlkPVwiJHt0YXNrSWR9XCI+RGVsZXRlPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGApO1xuXG4gICAgc3dpdGNoICh0YXNrUHJpb3JpdHkpIHtcbiAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgIGZsYWdDb2xvciA9ICcjMjJkM2VlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICBmbGFnQ29sb3IgPSAnI2ZiOTIzYyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgIGZsYWdDb2xvciA9ICcjZWY0NDQ0JztcbiAgICB9XG5cbiAgICBsZXQgZmxhZyA9IGVsZW1lbnRGcm9tSHRtbChgXG4gICAgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwidXRmLThcIj8+PCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT5cbiAgICAgIDxzdmcgd2lkdGg9XCIyMnB4XCIgaGVpZ2h0PVwiMjJweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiJHtmbGFnQ29sb3J9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgPHBhdGggb3BhY2l0eT1cIjAuMTVcIiBkPVwiTTQgNEgyMEwxNSA5TDIwIDE0SDRWNFpcIi8+XG4gICAgICA8cGF0aCBkPVwiTTQgMjFWMTRNNCAxNFY0SDIwTDE1IDlMMjAgMTRINFpcIiBzdHJva2U9XCIke2ZsYWdDb2xvcn1cIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XG4gICAgPC9zdmc+XG4gIGApO1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgICBjb25zdCBmbGFnQ29udGFpbmVyID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmZsYWctY29udGFpbmVyJyk7XG4gICAgY29uc3QgdGFza0RvbUVsZW1lbnQgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ib2R5Jyk7XG4gICAgY29uc3QgZGV0YWlsc0VsZW1lbnQgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWxzJyk7XG4gICAgY29uc3QgZWRpdFRhc2sgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kb3RzJyk7XG4gICAgY29uc3QgcmVuYW1lQnV0dG9uID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQnKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyk7XG4gICAgY29uc3QgcG9wVXAgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwJyk7XG4gICAgY29uc3QgdGFza0NoZWNrID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY2hlY2snKTtcblxuICAgIHJlbmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ1aWxkVGFza0VkaXRJbnRlcmZhY2UpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRhc2spO1xuICAgIGVkaXRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcG9wVXAuY2xhc3NMaXN0LmFkZCgncG9wcGluZycpKTtcbiAgICB0YXNrQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgaGFuZGxlVGFza0NvbXBsZXRpb24odGFza0VsZW1lbnQpXG4gICAgKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQgIT09IGVkaXRUYXNrKSBwb3BVcC5jbGFzc0xpc3QucmVtb3ZlKCdwb3BwaW5nJyk7XG4gICAgfSk7XG5cbiAgICBmbGFnQ29udGFpbmVyLmFwcGVuZENoaWxkKGZsYWcpO1xuICAgIHRhc2tEb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIGRldGFpbHNFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctZGV0YWlscycpXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUYXNrQ29tcGxldGlvbih0YXNrRWxlbWVudCkge1xuICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpO1xuICBjb25zdCB0YXNrQ2hlY2sgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jaGVjaycpO1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG5cbiAgaWYgKHRhc2tDaGVjay5jaGVja2VkKSB7XG4gICAgdGFza1RpdGxlLmlubmVySFRNTCA9IGA8cz4ke3Rhc2tUaXRsZS50ZXh0Q29udGVudH08L3M+YDtcbiAgfSBlbHNlIHRhc2tUaXRsZS5pbm5lckhUTUwgPSB0YXNrVGl0bGUudGV4dENvbnRlbnQ7XG5cbiAgbGV0IHNlbGVjdGVkVGFzaztcbiAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5BbGxUYXNrcygpO1xuICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suaWQgPT09IHRhc2tDaGVjay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkgc2VsZWN0ZWRUYXNrID0gdGFzaztcbiAgfSk7XG5cbiAgc2VsZWN0ZWRUYXNrLnRvZ2dsZUNvbXBsZXRpb25TdGF0dXMoKTtcblxuICBmdW5jdGlvbiBkZWxldGVDb21wbGV0ZWRUYXNrKCkge1xuICAgIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0Lm1vdmVUb0NvbXBsZXRlZFRhc2tzKCk7XG4gICAgfSk7XG4gICAgcG9wdWxhdGVNYWluQXJlYSgpO1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShhbGxQcm9qZWN0cyk7XG4gIH1cblxuICBmdW5jdGlvbiB1bmRvVGFza0RlbGV0aW9uKCkge1xuICAgIGNvbnN0IHVuZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5kby1idXR0b24nKTtcbiAgICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXVuZG8nKTtcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG5cbiAgICB1bmRvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAvL3N3aXRjaCB0aGUgY29tcGxldGlvbiBzdGF0dXMgYmFjayB0byBmYWxzZVxuICAgICAgICBzZWxlY3RlZFRhc2sudG9nZ2xlQ29tcGxldGlvblN0YXR1cygpO1xuICAgICAgICBwcm9qZWN0Lm1vdmVUb1VuY29tcGxldGVkVGFza3MoKTtcbiAgICAgICAgcG9wdWxhdGVNYWluQXJlYSgpO1xuICAgICAgICBwb3BVcC5yZW1vdmUoKTtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKGFsbFByb2plY3RzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VGltZW91dChidWlsZFRhc2tEZWxldGlvblVuZG9Qb3BVcCwgNzAwKTtcbiAgc2V0VGltZW91dChkZWxldGVDb21wbGV0ZWRUYXNrLCA3MDApO1xuICBzZXRUaW1lb3V0KHVuZG9UYXNrRGVsZXRpb24sIDcwMCk7XG5cbiAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4gcHJvamVjdC5jbGVhckNvbXBsZXRlZFRhc2tzKCkpO1xuICBzZXRUaW1lb3V0KHVwZGF0ZUxvY2FsU3RvcmFnZShhbGxQcm9qZWN0cyksIDcwMCk7XG59XG4iLCJpbXBvcnQgZWxlbWVudEZyb21IdG1sIGZyb20gJy4vbW9kYWwtZm9ybS1idWlsZCc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IHsgZGlzcGxheUFsbFRhc2tzIH0gZnJvbSAnLi9uYXYtdXRpbGl0eSc7XG5pbXBvcnQgeyBidWlsZENvbmZpcm1EZWxldGVQcm9qZWN0UG9wVXAgfSBmcm9tICcuL2J1aWxkLXBvcC11cHMnO1xuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRWRpdEludGVyZmFjZShlKSB7XG4gIGNvbnN0IGNsaWNrZWRQcm9qZWN0SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5Qcm9qZWN0cygpO1xuXG4gIGxldCBwcm9qZWN0VG9FZGl0O1xuICBmb3IgKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzKSB7XG4gICAgaWYgKHByb2plY3QuaWQgPT09IGNsaWNrZWRQcm9qZWN0SWQpIHByb2plY3RUb0VkaXQgPSBwcm9qZWN0O1xuICB9XG5cbiAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdFRvRWRpdC5nZXRUaXRsZSgpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0TW9kYWwgPSBlbGVtZW50RnJvbUh0bWwoYFxuICAgIDxkaXYgY2xhc3M9XCJhZGQtbmV3LW1vZGFsIHByb2plY3QtZWRpdC1tb2RhbC0ke2NsaWNrZWRQcm9qZWN0SWR9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgIDxoMz5FZGl0IFByb2plY3Q8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UgY2xvc2UtZWRpdC1wcm9qZWN0LSR7Y2xpY2tlZFByb2plY3RJZH1cIj4mI3gyNzE1PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1uYXZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9tb2RhbC1wcm9qZWN0LnBuZ1wiPlxuICAgICAgICAgICAgPGRpdj5Qcm9qZWN0PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cInByb2plY3QtZWRpdC1mb3JtLSR7Y2xpY2tlZFByb2plY3RJZH1cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidGl0bGUgZWRpdC10aXRsZS0ke2NsaWNrZWRQcm9qZWN0SWR9XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7cHJvamVjdFRpdGxlfVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJwcm9qZWN0LXN1Ym1pdFwiPlxuICAgICAgICAgICAgRWRpdCBQcm9qZWN0PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0TW9kYWwpO1xuICBjb25zdCBwcm9qZWN0RWRpdE1vZGFsID0gZWRpdFByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICAgIGAucHJvamVjdC1lZGl0LW1vZGFsLSR7Y2xpY2tlZFByb2plY3RJZH1gXG4gICk7XG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZWRpdFByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuY2xvc2UtZWRpdC1wcm9qZWN0LSR7Y2xpY2tlZFByb2plY3RJZH1gXG4gICk7XG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSBlZGl0UHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5wcm9qZWN0LWVkaXQtZm9ybS0ke2NsaWNrZWRQcm9qZWN0SWR9YFxuICApO1xuICBjb25zdCBlZGl0ZWRUaXRsZUlucHV0ID0gZWRpdFByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuZWRpdC10aXRsZS0ke2NsaWNrZWRQcm9qZWN0SWR9YFxuICApO1xuXG4gIHByb2plY3RFZGl0TW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDEpJztcblxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9qZWN0RWRpdE1vZGFsLnN0eWxlLmNzc1RleHQgPSAndHJhbnNmb3JtOiBzY2FsZSgwKSc7XG4gIH0pO1xuXG4gIHN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gZWRpdCBwcm9qZWN0IGluIGJ1c2luZXNzIGxvZ2ljXG4gICAgY29uc3QgZWRpdGVkVGl0bGUgPSBlZGl0ZWRUaXRsZUlucHV0LnZhbHVlO1xuICAgIHByb2plY3RUb0VkaXQuY2hhbmdlVGl0bGUoZWRpdGVkVGl0bGUpO1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShhbGxQcm9qZWN0cylcbiAgICAvL2VkaXQgcHJvamVjdCBpbiBET01cbiAgICBlZGl0UHJvamVjdE5hbWVGcm9tRG9tKGNsaWNrZWRQcm9qZWN0SWQsIGVkaXRlZFRpdGxlKTtcblxuICAgIHByb2plY3RFZGl0TW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDApJztcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgY29uc3QgY2xpY2tlZFByb2plY3RJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG5cbiAgYnVpbGRDb25maXJtRGVsZXRlUHJvamVjdFBvcFVwKCk7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXAtZGVsZXRlJyk7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpO1xuXG4gIGxldCBwcm9qZWN0VG9EZWxldGU7XG4gIGZvciAobGV0IHByb2plY3Qgb2YgYWxsUHJvamVjdHMpIHtcbiAgICBpZiAocHJvamVjdC5pZCA9PT0gY2xpY2tlZFByb2plY3RJZCkgcHJvamVjdFRvRGVsZXRlID0gcHJvamVjdDtcbiAgfVxuXG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdFRvRGVsZXRlLmdldFRpdGxlKCl9YFxuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVQcm9qZWN0QWZ0ZXJDb25maXJtKTtcblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0QWZ0ZXJDb25maXJtKCkge1xuICAgIC8vcmVtb3ZlIHByb2plY3QgZnJvbSBidXNpbmVzcyBsb2dpY1xuICAgIHByb2plY3RNYW5hZ2VyLnJlbW92ZVByb2plY3QocHJvamVjdFRvRGVsZXRlKTtcbiAgICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gRE9NXG4gICAgcmVtb3ZlUHJvamVjdEZyb21Eb20oY2xpY2tlZFByb2plY3RJZCk7XG4gICAgZGlzcGxheUFsbFRhc2tzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3ROYW1lRnJvbURvbShpZCwgZWRpdFZhbHVlKSB7XG4gIGNvbnN0IHByb2plY3REb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLnByb2plY3RbZGF0YS1pZD1cIiR7aWR9XCJdID4gZGl2YFxuICApO1xuICBwcm9qZWN0RG9tRWxlbWVudC50ZXh0Q29udGVudCA9IGVkaXRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEZyb21Eb20oaWQpIHtcbiAgY29uc3QgcHJvamVjdERvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAucHJvamVjdC1jb250YWluZXJbZGF0YS1pZD1cIiR7aWR9XCJdYFxuICApO1xuICBwcm9qZWN0RG9tRWxlbWVudC5yZW1vdmUoKTtcbn1cbiIsImltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgZWxlbWVudEZyb21IdG1sIGZyb20gJy4vbW9kYWwtZm9ybS1idWlsZCc7XG5pbXBvcnQgcG9wdWxhdGVNYWluQXJlYSBmcm9tICcuL3BvcHVsYXRlLW1haW4tYXJlYSc7XG5pbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUYXNrRWRpdEludGVyZmFjZShlKSB7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgY29uc3QgY2xpY2tlZFRhc2tJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCk7XG4gIGxldCB0YXNrVG9FZGl0O1xuICBmb3IgKGxldCB0YXNrIG9mIGFsbFRhc2tzKSB7XG4gICAgaWYgKHRhc2suaWQgPT09IGNsaWNrZWRUYXNrSWQpIHRhc2tUb0VkaXQgPSB0YXNrO1xuICB9XG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgdGFza1RpdGxlID0gdGFza1RvRWRpdC50aXRsZTtcbiAgY29uc3QgdGFza0RldGFpbHMgPSB0YXNrVG9FZGl0LmRlc2NyaXB0aW9uO1xuICBjb25zdCB0YXNrRGF0ZSA9IHRhc2tUb0VkaXQuZGF0ZTtcblxuICBjb25zdCBlZGl0VGFza01vZGFsID0gZWxlbWVudEZyb21IdG1sKGBcbiAgICA8ZGl2IGNsYXNzPVwiYWRkLW5ldy1tb2RhbCB0YXNrLWVkaXQtbW9kYWxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgPGgzPkVkaXQgVGFzazwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZSBjbG9zZS1lZGl0LXRhc2tcIj4mI3gyNzE1PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1uYXZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9tb2RhbC10YXNrLnBuZ1wiPlxuICAgICAgICAgICAgPGRpdj5UYXNrPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cInRhc2stZWRpdC1mb3JtXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlOiBQYXkgYmlsbHNcIlxuICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRpdGxlXCIgdmFsdWU9XCIke3Rhc2tUaXRsZX1cIiByZXF1aXJlZC8+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJEZXRhaWxzOiBlLmcgaW50ZXJuZXQsIHBob25lLCByZW50LlwiXG4gICAgICAgICAgICBjbGFzcz1cImVkaXQtZGV0YWlsc1wiPiR7dGFza0RldGFpbHN9PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+PGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJlZGl0LWRhdGVcIiB2YWx1ZT1cIiR7dGFza0RhdGV9XCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5LXJhZGlvXCI+XG4gICAgICAgICAgICAgIDxzcGFuPlByaW9yaXR5Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvLWJ1dHRvbiByYWRpby1sb3dcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJsb3dcIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImxvd1wiLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibG93XCI+TE9XPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpby1idXR0b24gcmFkaW8tbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwibWVkaXVtXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJtZWRpdW1cIi8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1lZGl1bVwiPk1FRElVTTwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW8tYnV0dG9uIHJhZGlvLWhpZ2hcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJoaWdoXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJoaWdoXCIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJoaWdoXCI+SElHSDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInRhc2sgdGFzay1zdWJtaXRcIj5FZGl0IFRhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChlZGl0VGFza01vZGFsKTtcblxuICAoZnVuY3Rpb24gYWRkVGFza1ByaW9yaXR5KCkge1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2tUb0VkaXQucHJpb3JpdHk7XG4gICAgY29uc3QgcmFkaW9CdXR0b25zID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcbiAgICBjb25zdCBsb3dSYWRpb0J1dHRvbiA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJsb3dcIl0nKTtcbiAgICBjb25zdCBtZWRpdW1SYWRpb0J1dHRvbiA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJtZWRpdW1cIl0nKTtcbiAgICBjb25zdCBoaWdoUmFkaW9CdXR0b24gPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiaGlnaFwiXScpO1xuXG4gICAgcmFkaW9CdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpKTtcblxuICAgIHN3aXRjaCAodGFza1ByaW9yaXR5KSB7XG4gICAgICBjYXNlICdsb3cnOlxuICAgICAgICBsb3dSYWRpb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgbWVkaXVtUmFkaW9CdXR0b24uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICBoaWdoUmFkaW9CdXR0b24uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pKCk7XG5cbiAgY29uc3QgdGFza0VkaXRNb2RhbCA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcignLnRhc2stZWRpdC1tb2RhbCcpO1xuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcignLmNsb3NlLWVkaXQtdGFzaycpO1xuICBjb25zdCBzdWJtaXRGb3JtID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0LWZvcm0nKTtcbiAgY29uc3QgZWRpdGVkVGl0bGVJbnB1dCA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcignLmVkaXQtdGl0bGUnKTtcbiAgY29uc3QgZWRpdGVkRGV0YWlsc0lucHV0ID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1kZXRhaWxzJyk7XG4gIGNvbnN0IGVkaXRlZERhdGVJbnB1dCA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcignLmVkaXQtZGF0ZScpO1xuXG4gIHRhc2tFZGl0TW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDEpJztcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGFza0VkaXRNb2RhbC5zdHlsZS5jc3NUZXh0ID0gJ3RyYW5zZm9ybTogc2NhbGUoMCknO1xuICB9KTtcblxuICBzdWJtaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGVkaXQgdGFzayBpbiBidXNpbmVzcyBsb2dpY1xuICAgIGNvbnN0IGVkaXRlZFRpdGxlID0gZWRpdGVkVGl0bGVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBlZGl0ZWREZXRhaWxzID0gZWRpdGVkRGV0YWlsc0lucHV0LnZhbHVlO1xuICAgIGNvbnN0IGVkaXRlZERhdGUgPSBlZGl0ZWREYXRlSW5wdXQudmFsdWU7XG4gICAgY29uc3QgcmFkaW9CdXR0b25zID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcblxuICAgIHRhc2tUb0VkaXQuY2hhbmdlVGl0bGUoZWRpdGVkVGl0bGUpO1xuICAgIHRhc2tUb0VkaXQuYWRkRGV0YWlscyhlZGl0ZWREZXRhaWxzKTtcbiAgICB0YXNrVG9FZGl0LmFkZER1ZURhdGUoZWRpdGVkRGF0ZSk7XG4gICAgcmFkaW9CdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKGJ1dHRvbi5jaGVja2VkKSB0YXNrVG9FZGl0LnByaW9yaXR5ID0gYnV0dG9uLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKGFsbFByb2plY3RzKVxuICAgIC8vZWRpdCBwcm9qZWN0IGluIERPTVxuICAgIHBvcHVsYXRlTWFpbkFyZWEoKTtcblxuICAgIHRhc2tFZGl0TW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDApJztcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKGUpIHtcbiAgY29uc3QgY2xpY2tlZFRhc2tJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCk7XG4gIGxldCB0YXNrVG9EZWxldGU7XG4gIGZvciAobGV0IHRhc2sgb2YgYWxsVGFza3MpIHtcbiAgICBpZiAodGFzay5pZCA9PT0gY2xpY2tlZFRhc2tJZCkgdGFza1RvRGVsZXRlID0gdGFzaztcbiAgfVxuICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gYnVzaW5lc3MgbG9naWNcbiAgdGFza1RvRGVsZXRlLmNvbXBsZXRpb25TdGF0dXMgPSB0cnVlO1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3QubW92ZVRvQ29tcGxldGVkVGFza3MoKSk7XG4gIFxuICB1cGRhdGVMb2NhbFN0b3JhZ2UoYWxsUHJvamVjdHMpXG4gIC8vcmVtb3ZlIHByb2plY3QgZnJvbSBET01cbiAgcG9wdWxhdGVNYWluQXJlYSgpO1xufVxuIiwiaW1wb3J0IHsgcG9wTW9kYWwsIGNsb3NlTW9kYWwgfSBmcm9tICcuL21vZGFsLW1hbmlwdWxhdGlvbic7XG5pbXBvcnQgeyBidWlsZFByb2plY3REb21FbGVtZW50IH0gZnJvbSAnLi9kb20tZGlzcGxheS1wcm9qZWN0JztcbmltcG9ydCB7IGJ1aWxkTG9jYWxTdG9yYWdlTmV3VXNlciB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQge1xuICBkaXNwbGF5QWxsVGFza3MsXG4gIGRpc3BsYXlJbXBvcnRhbnRUYXNrcyxcbiAgZGlzcGxheVRvZGF5VGFza3MsXG4gIGRpc3BsYXlXZWVrVGFza3MsXG59IGZyb20gJy4vbmF2LXV0aWxpdHknO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vYXNzZXRzL2xvZ28taWNvbi5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy83LWRheXMucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaW1wb3J0YW50LXN0YXIuc3ZnJztcbmltcG9ydCAnLi9hc3NldHMvbW9kYWwtcHJvamVjdC5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9tb2RhbC10YXNrLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL3BhZ2UtaWNvbi5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy90YXNrcy5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy90b2RheS5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy93aGl0ZS1mbGFnLXN2Zy5zdmcnO1xuXG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldycpO1xuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1oZWFkZXIgLmNsb3NlJyk7XG5jb25zdCBwcm9qZWN0c0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtYXJlYScpO1xuY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG5jb25zdCBuZXh0V2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXZlbi1kYXlzJyk7XG5jb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1wb3J0YW50Jyk7XG5jb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpXG5jb25zdCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpXG5cbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBvcE1vZGFsKCkpO1xuY2xvc2VNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlTW9kYWwoKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MoKSB7XG4gIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XG4gIGFsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xufVxuXG5oYW1idXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2ludmlzaWJsZScpXG59KVxuXG5hbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZGlzcGxheUFsbFRhc2tzKCk7XG4gIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzcygpO1xuICBhbGxUYXNrcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pO1xuXG50b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZGlzcGxheVRvZGF5VGFza3MoKTtcbiAgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSk7XG5cbm5leHRXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkaXNwbGF5V2Vla1Rhc2tzKCk7XG4gIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzcygpO1xuICBuZXh0V2Vlay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pO1xuXG5pbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRpc3BsYXlJbXBvcnRhbnRUYXNrcygpO1xuICB1dGlsaXR5UmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgaW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSk7XG5cbmJ1aWxkTG9jYWxTdG9yYWdlTmV3VXNlcigpO1xuYnVpbGRQcm9qZWN0RG9tRWxlbWVudChwcm9qZWN0c0FyZWEpO1xuZGlzcGxheUFsbFRhc2tzKCk7XG4iLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG4gIFxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZShkYikge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGInLCBKU09OLnN0cmluZ2lmeShkYikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0cmlldmVMb2NhbFN0b3JhZ2UoZGIpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcGFyc2VkTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYikpO1xuICAgIC8vIGFkZGluZyBiYWNrIGFsbCBvZiB0aGUgbWV0aG9kcyBvZiB0aGUgUHJvamVjdCBjbGFzcyBpbiBpdCdzIHByb3RvdHlwZSB0byBlYWNoIGluc3RhbmNlXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwYXJzZWRMb2NhbFN0b3JhZ2UpXG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YocHJvamVjdCwgUHJvamVjdC5wcm90b3R5cGUpO1xuICAgIC8vIGFkZGluZyBiYWNrIGFsbCBvZiB0aGUgbWV0aG9kcyBvZiB0aGUgVGFzayBjbGFzcyBpbiBpdCdzIHByb3RvdHlwZSB0byBlYWNoIGluc3RhbmNlXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwYXJzZWRMb2NhbFN0b3JhZ2UpIHtcbiAgICAgIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdC5nZXRUYXNrcygpO1xuICAgICAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4gT2JqZWN0LnNldFByb3RvdHlwZU9mKHRhc2ssIFRhc2sucHJvdG90eXBlKSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRMb2NhbFN0b3JhZ2U7XG4gIH0gZWxzZSByZXR1cm4gW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZExvY2FsU3RvcmFnZU5ld1VzZXIoKSB7XG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RiJykpIHtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdZb3VyIEZpcnN0IFByb2plY3QnKTtcbiAgICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVsZW1lbnRGcm9tSHRtbChodG1sKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gaHRtbC50cmltKCk7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IHRhc2tGb3JtID0gZWxlbWVudEZyb21IdG1sKGBcbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGU6IFBheSBiaWxsc1wiIHJlcXVpcmVkLz5cbiAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+XG4gICAgPGxhYmVsIGZvcj1cInByb2plY3RcIj5Qcm9qZWN0IHRvIGFzc2lnbiB0bzogPC9sYWJlbD5cbiAgICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cInByb2plY3RcIj48L3NlbGVjdD5cbiAgPC9kaXY+XG4gIDx0ZXh0YXJlYSBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIkRldGFpbHM6IGUuZyBpbnRlcm5ldCwgcGhvbmUsIHJlbnQuXCI+PC90ZXh0YXJlYT5cbiAgPGRpdiBjbGFzcz1cImRhdGUtY29udGFpbmVyXCI+XG4gICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+PGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgcmVxdWlyZWQvPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInByaW9yaXR5LXJhZGlvXCI+XG4gICAgPHNwYW4+UHJpb3JpdHk6PC9zcGFuPlxuICAgIDxkaXYgY2xhc3M9XCJyYWRpby1idXR0b24gcmFkaW8tbG93XCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJsb3dcIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImxvd1wiIGNoZWNrZWQvPlxuICAgICAgPGxhYmVsIGZvcj1cImxvd1wiPkxPVzwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJhZGlvLWJ1dHRvbiByYWRpby1tZWRpdW1cIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIm1lZGl1bVwiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibWVkaXVtXCIvPlxuICAgICAgPGxhYmVsIGZvcj1cIm1lZGl1bVwiPk1FRElVTTwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJhZGlvLWJ1dHRvbiByYWRpby1oaWdoXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJoaWdoXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJoaWdoXCIvPlxuICAgICAgPGxhYmVsIGZvcj1cImhpZ2hcIj5ISUdIPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInRhc2sgdGFzay1zdWJtaXRcIj5BZGQgVGFzazwvYnV0dG9uPlxuICA8L2Rpdj5cbmApO1xuXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGVsZW1lbnRGcm9tSHRtbChgXG4gIDxpbnB1dCBjbGFzcz1cInRpdGxlXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRpdGxlOiBIb3VzZSBSZW5vdmF0aW9uXCIgcmVxdWlyZWQ+XG4gIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwicHJvamVjdC1zdWJtaXRcIj5DcmVhdGUgUHJvamVjdDwvYnV0dG9uPlxuYCk7XG5cbmV4cG9ydCB7IHRhc2tGb3JtLCBwcm9qZWN0Rm9ybSB9O1xuIiwiaW1wb3J0IHsgYnVpbGRQcm9qZWN0RG9tRWxlbWVudCB9IGZyb20gJy4vZG9tLWRpc3BsYXktcHJvamVjdCc7XG5pbXBvcnQgeyB0YXNrRm9ybSwgcHJvamVjdEZvcm0gfSBmcm9tICcuL21vZGFsLWZvcm0tYnVpbGQnO1xuaW1wb3J0IHsgZ2V0RGF0YUZyb21Gb3JtcyB9IGZyb20gJy4vZGF0YS1tYW5pcHVsYXRpb24nO1xuaW1wb3J0IHBvcHVsYXRlTWFpbkFyZWEgZnJvbSAnLi9wb3B1bGF0ZS1tYWluLWFyZWEnO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmV4cG9ydCB7IHBvcE1vZGFsLCBjbG9zZU1vZGFsIH07XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctbW9kYWwnKTtcblxuZnVuY3Rpb24gdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzRnJvbU1vZGFsKCkge1xuICBjb25zdCBtb2RhbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC1uZXctbW9kYWwgZGl2Jyk7XG4gIG1vZGFsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVCbHVyKG1vZGFsKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIC8vY2hlY2sgaWYgJ3BvcHBpbmcnIGNsYXNzIGluIG1vZGFsOyBtZWFucyB3ZSBhcmUgb3BlbmluZyBtb2RhbFxuICBpZiAobW9kYWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmluY2x1ZGVzKCdwb3BwaW5nJykpIHtcbiAgICBoZWFkZXIuc3R5bGUuY3NzVGV4dCA9ICdmaWx0ZXI6IGJsdXIoM3B4KSc7XG4gICAgY29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2ZpbHRlcjogYmx1cigzcHgpJztcbiAgfSBlbHNlIHtcbiAgICBoZWFkZXIuc3R5bGUuY3NzVGV4dCA9ICdmaWx0ZXI6IGJsdXIoMHB4KSc7XG4gICAgY29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2ZpbHRlcjogYmx1cigwcHgpJztcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24oKSB7XG4gIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duIHNlbGVjdCcpO1xuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnJldHVyblByb2plY3RzKCk7XG4gIGNvbnN0IG9wdGlvbnMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSk7XG5cbiAgaWYgKGRyb3Bkb3duID09PSBudWxsKSByZXR1cm47XG5cbiAgZHJvcGRvd24uaW5uZXJIVE1MID0gJyc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgb3B0ID0gb3B0aW9uc1tpXTtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGVsLnRleHRDb250ZW50ID0gb3B0O1xuICAgIGVsLnZhbHVlID0gb3B0O1xuICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGVsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3BNb2RhbCgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3BvcHBpbmcnKTtcbiAgbW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDEpJztcbiAgdG9nZ2xlQmx1cihtb2RhbCk7XG4gIGZvcm0uaW5uZXJIVE1MID0gJyc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICAvL2FkZGluZyAndGFzaycgY2xhc3MgaW4gb3JkZXIgdG8gZGlmZmVyZW50aWF0ZSB0aGUgZm9ybSB0eXBlICh0YXNrIG9yIHByb2plY3QpXG4gIGZvcm0uY2xhc3NOYW1lID0gJyc7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICBwb3B1bGF0ZVByb2plY3RzRHJvcGRvd24oKTtcbiAgc3dpdGNoVG9UYXNrKCk7XG4gIHN3aXRjaFRvUHJvamVjdCgpO1xuICB0YXNrT3JQcm9qZWN0U3VibWl0KCk7XG5cbiAgdXRpbGl0eVJlbW92ZUFjdGl2ZUNsYXNzRnJvbU1vZGFsKCk7XG4gIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHBpbmcnKTtcbiAgbW9kYWwuc3R5bGUuY3NzVGV4dCA9ICd0cmFuc2Zvcm06IHNjYWxlKDApJztcbiAgdG9nZ2xlQmx1cihtb2RhbCk7XG4gIC8vcmVwbGFjaW5nIGZvcm0gbm9kZSB3aXRoIGl0J3MgY2xvbmUgc28gdGhhdCB3ZSByZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICBmb3JtLnJlcGxhY2VXaXRoKGZvcm0uY2xvbmVOb2RlKHRydWUpKTtcbiAgZm9ybS5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUb1Rhc2soKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbmF2IC50YXNrJyk7XG4gIHRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZm9ybS5pbm5lckhUTUwgPSAnJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICcnO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIHBvcHVsYXRlUHJvamVjdHNEcm9wZG93bigpO1xuICAgIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzc0Zyb21Nb2RhbCgpO1xuICAgIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUb1Byb2plY3QoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbmF2IC5wcm9qZWN0Jyk7XG4gIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZm9ybS5pbm5lckhUTUwgPSAnJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICcnO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIHV0aWxpdHlSZW1vdmVBY3RpdmVDbGFzc0Zyb21Nb2RhbCgpO1xuICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0YXNrT3JQcm9qZWN0U3VibWl0KCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZ2V0RGF0YUZyb21Gb3JtcyhlKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgaGFuZGxlRm9ybVN1Ym1pc3Npb24oKTtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVGb3JtU3VibWlzc2lvbigpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgcHJvamVjdHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWFyZWEnKTtcblxuICBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuaW5jbHVkZXMoJ3Rhc2snKSkge1xuICAgIHBvcHVsYXRlTWFpbkFyZWEoKTtcbiAgfSBlbHNlIHtcbiAgICBidWlsZFByb2plY3REb21FbGVtZW50KHByb2plY3RzQXJlYSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGJ1aWxkVGFza0RvbUVsZW1lbnQgfSBmcm9tICcuL2RvbS1kaXNwbGF5LXRhc2snO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCBpc1RvZGF5IGZyb20gJ2RhdGUtZm5zL2lzVG9kYXknO1xuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkRGF5cyc7XG5pbXBvcnQgaXNCZWZvcmUgZnJvbSAnZGF0ZS1mbnMvaXNCZWZvcmUnO1xuXG5jb25zdCBtYWluQXJlYVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJlYS10aXRsZScpO1xuY29uc3QgbWFpbkFyZWFDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYXJlYS1jb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGhhbmRsZU5vVGFza3ModGFza0xpc3QpIHtcbiAgaWYgKHRhc2tMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIG1haW5BcmVhQ29udGVudC50ZXh0Q29udGVudCA9ICdZYXkhIE5vIFRhc2tzISc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcbiAgY29uc3QgYWxsVGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxuICBtYWluQXJlYUNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIG1haW5BcmVhVGl0bGUudGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcbiAgYWxsVGFza3NCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgYnVpbGRUYXNrRG9tRWxlbWVudChtYWluQXJlYUNvbnRlbnQsIHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCkpO1xuICBoYW5kbGVOb1Rhc2tzKHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZGF5VGFza3MoKSB7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG5cbiAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0TWFuYWdlci5yZXR1cm5BbGxUYXNrcygpO1xuICBsZXQgdG9kYXlUYXNrcyA9IFtdO1xuXG4gIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZGF0ZSk7XG4gICAgaWYgKGlzVG9kYXkodGFza0RhdGUpKSB0b2RheVRhc2tzLnB1c2godGFzayk7XG4gIH0pO1xuXG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCB0b2RheVRhc2tzKTtcbiAgaGFuZGxlTm9UYXNrcyh0b2RheVRhc2tzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVdlZWtUYXNrcygpIHtcbiAgbWFpbkFyZWFDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBtYWluQXJlYVRpdGxlLnRleHRDb250ZW50ID0gJ05leHQgNyBEYXlzJztcblxuICBjb25zdCBhbGxUYXNrcyA9IHByb2plY3RNYW5hZ2VyLnJldHVybkFsbFRhc2tzKCk7XG4gIGxldCBzZXZlbkRheXNUYXNrcyA9IFtdO1xuXG4gIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kYXRlKTtcbiAgICBjb25zdCBvbmVXZWVrTGF0ZXJEYXRlID0gYWRkRGF5cyh0b2RheURhdGUsIDcpO1xuICAgIGlmIChpc0JlZm9yZSh0YXNrRGF0ZSwgb25lV2Vla0xhdGVyRGF0ZSkpIHNldmVuRGF5c1Rhc2tzLnB1c2godGFzayk7XG4gIH0pO1xuXG4gIGJ1aWxkVGFza0RvbUVsZW1lbnQobWFpbkFyZWFDb250ZW50LCBzZXZlbkRheXNUYXNrcyk7XG4gIGhhbmRsZU5vVGFza3Moc2V2ZW5EYXlzVGFza3MpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SW1wb3J0YW50VGFza3MoKSB7XG4gIG1haW5BcmVhQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgbWFpbkFyZWFUaXRsZS50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuXG4gIGNvbnN0IGFsbFRhc2tzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuQWxsVGFza3MoKTtcbiAgbGV0IGltcG9ydGFudFRhc2tzID0gW107XG5cbiAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgIGltcG9ydGFudFRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICB9KTtcblxuICBidWlsZFRhc2tEb21FbGVtZW50KG1haW5BcmVhQ29udGVudCwgaW1wb3J0YW50VGFza3MpO1xuICBoYW5kbGVOb1Rhc2tzKGltcG9ydGFudFRhc2tzKVxufVxuIiwiaW1wb3J0IHtcbiAgZGlzcGxheUFsbFRhc2tzLFxuICBkaXNwbGF5SW1wb3J0YW50VGFza3MsXG4gIGRpc3BsYXlUb2RheVRhc2tzLFxuICBkaXNwbGF5V2Vla1Rhc2tzLFxufSBmcm9tICcuL25hdi11dGlsaXR5JztcbmltcG9ydCB7IHJlbmRlclByb2plY3RUYXNrcyB9IGZyb20gJy4vZG9tLWRpc3BsYXktcHJvamVjdCc7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuXG4vLyB1c2luZyB0aGlzIHRvIGhlbHAgcG9wdWxhdGUgdGhlIG1haW4gYXJlYSB3aXRoIHRoZSBhZGVxdWF0ZSBmaWx0ZXJlZCBjb250ZW50XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZU1haW5BcmVhKCkge1xuICBjb25zdCBuYXZTZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lID4gZGl2Jyk7XG4gIGNvbnN0IHByb2plY3REb21FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy5wcm9qZWN0cy1hcmVhID4gZGl2ID4gZGl2J1xuICApO1xuICBjb25zdCBmdW5jdGlvblRvUnVuRGljdGlvbmFyeSA9IHtcbiAgICAndGFza3MgYWN0aXZlJzogZGlzcGxheUFsbFRhc2tzLFxuICAgICd0b2RheSBhY3RpdmUnOiBkaXNwbGF5VG9kYXlUYXNrcyxcbiAgICAnc2V2ZW4tZGF5cyBhY3RpdmUnOiBkaXNwbGF5V2Vla1Rhc2tzLFxuICAgICdpbXBvcnRhbnQgYWN0aXZlJzogZGlzcGxheUltcG9ydGFudFRhc2tzLFxuICB9O1xuXG4gIGZvciAobGV0IHNlY3Rpb24gb2YgbmF2U2VjdGlvbnMpIHtcbiAgICBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgIGZ1bmN0aW9uVG9SdW5EaWN0aW9uYXJ5W2NsYXNzTGlzdF0oKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdERvbUVsZW1lbnRzKSB7XG4gICAgaWYgKHByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdE1hbmFnZXIucmV0dXJuUHJvamVjdHMoKTtcbiAgICAgIGxldCBwcm9qZWN0VG9EaXNwbGF5O1xuICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0cykge1xuICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gcHJvamVjdElEKSBwcm9qZWN0VG9EaXNwbGF5ID0gcHJvamVjdDtcbiAgICAgIH1cbiAgICAgIHJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0VG9EaXNwbGF5KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vaWYgbm8gbmF2IGJ1dHRvbiBvciBwcm9qZWN0IGlzIHNlbGVjdGVkLCBzd2l0Y2ggdG8gQWxsIFRhc2tzICd0YWInXG4gIGRpc3BsYXlBbGxUYXNrcygpO1xufVxuIiwiaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlLCByZXRyaWV2ZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHByb2plY3RNYW5hZ2VyKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IHJldHJpZXZlTG9jYWxTdG9yYWdlKCdkYicpXG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgZm9yIChsZXQgaXRlcmF0ZWRQcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICBjb25zdCBwcm9qZWN0c1RpdGxlID0gW11cbiAgICAgIHByb2plY3RzVGl0bGUucHVzaChpdGVyYXRlZFByb2plY3QudGl0bGUpXG4gICAgICBpZiAocHJvamVjdHNUaXRsZS5pbmNsdWRlcyhwcm9qZWN0LnRpdGxlKSkgcmV0dXJuXG4gICAgfVxuICAgIHByb2plY3RzLnB1c2gocHJvamVjdClcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdHMpXG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3RzW2ldLnRpdGxlID09PSBwcm9qZWN0LnRpdGxlKSB7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbiAgfTtcblxuICBjb25zdCByZXR1cm5BbGxUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBhbGxUYXNrcyA9IFtdO1xuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgIGFsbFRhc2tzLnB1c2goLi4ucHJvamVjdC5nZXRUYXNrcygpKVxuICAgIH1cblxuICAgIHJldHVybiBhbGxUYXNrc1xuICB9XG5cbiAgY29uc3QgcmV0dXJuUHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcblxuICByZXR1cm4geyBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCByZXR1cm5Qcm9qZWN0cyAsIHJldHVybkFsbFRhc2tzfTtcbn0pKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMuY29tcGxldGVkVGFza3MgPSBbXTtcbiAgICB0aGlzLmdlbmVyYXRlSWQoKTtcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgfVxuXG4gIGNoYW5nZVRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgfVxuXG4gIGdlbmVyYXRlSWQoKSB7XG4gICAgdGhpcy5pZCA9IGBwcmotaWQke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpfWA7XG4gIH1cblxuICBtb3ZlVG9Db21wbGV0ZWRUYXNrcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnRhc2tzW2ldLmNvbXBsZXRpb25TdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRUYXNrcy5wdXNoKHRoaXMudGFza3NbaV0pO1xuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3ZlVG9VbmNvbXBsZXRlZFRhc2tzKCkge1xuICAgIGNvbnN0IHRhc2tUb01vdmUgPSB0aGlzLmNvbXBsZXRlZFRhc2tzW3RoaXMuY29tcGxldGVkVGFza3MubGVuZ3RoIC0gMV1cbiAgICB0aGlzLnRhc2tzLnB1c2godGFza1RvTW92ZSlcbiAgfVxuXG4gIGNsZWFyQ29tcGxldGVkVGFza3MoKSB7XG4gICAgdGhpcy5jb21wbGV0ZWRUYXNrcyA9IFtdXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmNvbXBsZXRpb25TdGF0dXMgPSBmYWxzZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5O1xuICAgIHRoaXMuZ2VuZXJhdGVJZCgpO1xuICB9XG5cbiAgY2hhbmdlVGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLnRpdGxlID0gdmFsdWU7XG4gIH1cblxuICBhZGREZXRhaWxzKHZhbHVlKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgYWRkRHVlRGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgYWRkUHJpb3JpdHkodmFsdWUpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWU7XG4gIH1cblxuICB0b2dnbGVDb21wbGV0aW9uU3RhdHVzKCkge1xuICAgIHRoaXMuY29tcGxldGlvblN0YXR1cyA9ICF0aGlzLmNvbXBsZXRpb25TdGF0dXM7XG4gIH1cblxuICBnZW5lcmF0ZUlkKCkge1xuICAgIHRoaXMuaWQgPSBgdHNrLWlkJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyKX1gO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9