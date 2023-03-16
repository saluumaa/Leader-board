"use strict";
(self["webpackChunkleader_board"] = self["webpackChunkleader_board"] || []).push([["index"],{

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg width=%2716%27 height=%2720%27 viewBox=%270 0 16 20%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27%239C92AC%27 fill-opacity=%270.4%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M8 0v20L0 10M16 0v10L8 0M16 10v10H8%27/%3E%3C/g%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg width=%2716%27 height=%2720%27 viewBox=%270 0 16 20%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27%239C92AC%27 fill-opacity=%270.4%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M8 0v20L0 10M16 0v10L8 0M16 10v10H8%27/%3E%3C/g%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: darkslategray;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  overflow: hidden;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.main-wrapper {\r\n  background: linear-gradient(70deg, #2a5a3b, #1e4886);\r\n  border-radius: 40px;\r\n  display: grid;\r\n  color: whitesmoke;\r\n  width: 100%;\r\n  box-shadow: 2px 4px 2px #1e488699;\r\n}\r\n\r\nh1 {\r\n  position: relative;\r\n  font-size: 1.5rem;\r\n  color: #2a5a3b;\r\n  padding-top: 1rem;\r\n  padding-left: 1rem;\r\n  letter-spacing: 0.1em;\r\n  -webkit-text-stroke: 0.3vw wheat;\r\n  text-transform: uppercase;\r\n}\r\n\r\nh1::before {\r\n  content: attr(data-text);\r\n  padding-left: 1rem;\r\n  position: absolute;\r\n  padding-top: 1rem;\r\n  top: 0;\r\n  left: 0;\r\n  right: 50%;\r\n  width: 0;\r\n  height: 100%;\r\n  color: #1e4886;\r\n  -webkit-text-stroke: 0 #383d52;\r\n  border-right: 1px solid #1e4886;\r\n  animation: main 8s linear infinite;\r\n  overflow: hidden;\r\n}\r\n\r\n@keyframes main {\r\n  0%,\r\n  10%,\r\n  100% {\r\n    width: 0;\r\n  }\r\n\r\n  70%,\r\n  90% {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\nh2 {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: wheat;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column-reverse;\r\n  gap: 2rem;\r\n  font-size: 1rem;\r\n  margin-top: 2rem; \r\n}\r\n\r\n.left-leader {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 2rem;\r\n  padding-right: 2rem;\r\n}\r\n\r\n.score-header {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.scores {\r\n  border: 4px solid darkslategray;\r\n  border-top-left-radius: 30px;\r\n  margin-top: 2rem;\r\n  max-height: 20%;\r\n  margin-bottom: 4rem;\r\n  overflow: scroll;\r\n  background-color: #00000090;\r\n  box-shadow: 3px 2px 4px #00000050;\r\n}\r\n\r\n.list-scores li {\r\n  list-style: none;\r\n  padding-bottom: 8px;\r\n  padding-top: 8px;\r\n  padding-left: 10px;\r\n  font-size: 17px;\r\n}\r\n\r\nul li:nth-child(even) {\r\n  background-color: darkslategray;\r\n  transition: 1s ease;\r\n}\r\n\r\nul li:nth-child(even):hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  margin-top: 15px;\r\n  margin-right: 1rem;\r\n  margin-left: 1rem;\r\n}\r\n\r\nform input {\r\n  padding: 15px 30px;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.submit {\r\n  margin-left: 10rem;\r\n}\r\n\r\n.btn {\r\n  cursor: pointer;\r\n  color: wheat;\r\n  position: relative;\r\n  padding: 12px;\r\n  font-size: 16px;\r\n  background: none;\r\n  transition: 1.5s ease;\r\n}\r\n\r\n.btn:hover {\r\n  color: white;\r\n  transform: scale(1.2);\r\n}\r\n\r\n.btn::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #2a5a3b;\r\n  z-index: -1;\r\n  transition: transform 0.9s;\r\n  transform-origin: 0 0;\r\n  transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);\r\n  transform: scaleX(0);\r\n}\r\n\r\n.btn:hover::before {\r\n  transform: scaleX(1);\r\n}\r\n\r\n.save {\r\n  margin-left: 50px;\r\n  color: aqua;\r\n  font-weight: 600;\r\n  margin-top: 18px;\r\n}\r\n\r\n@media only screen and (min-width:768px) {\r\n  \r\n  .main-wrapper {\r\n    width: 100%;\r\n    height: 80%;\r\n    top: 10%;\r\n    position: fixed;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n  }\r\n\r\n  .container {\r\n    flex-direction: row;\r\n    gap: 2rem;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 4rem;\r\n  }\r\n\r\n  .score-header {\r\n    gap: 12rem;\r\n  }\r\n\r\n  .scores {\r\n    margin-bottom: 2rem;\r\n    max-height: 25%;\r\n  }\r\n\r\n  .submit {\r\n    margin-left: 8rem;\r\n  }\r\n\r\n  form {\r\n    gap: 18px;\r\n    margin-top: 38px;\r\n    padding-right: 2rem;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (min-width:1205px){\r\n\r\n  .main-wrapper {\r\n    width: 70%;\r\n  }\r\n\r\n  .container {\r\n    gap: 8rem;\r\n  }\r\n\r\n  .scores {\r\n    margin-bottom: 2rem;\r\n    max-height: 25%;\r\n  }\r\n\r\n  .score-header {\r\n    gap: 12rem;\r\n  }\r\n\r\n  .submit {\r\n    margin-left: 8rem;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 4rem;\r\n  }\r\n\r\n  form {\r\n    gap: 18px;\r\n    margin-top: 38px;\r\n    margin-right: 2rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,+BAA+B;EAC/B,yDAAuQ;EACvQ,gBAAgB;EAChB,kCAAkC;AACpC;;AAEA;EACE,oDAAoD;EACpD,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,WAAW;EACX,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;EACrB,gCAAgC;EAChC,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,MAAM;EACN,OAAO;EACP,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,cAAc;EACd,8BAA8B;EAC9B,+BAA+B;EAC/B,kCAAkC;EAClC,gBAAgB;AAClB;;AAEA;EACE;;;IAGE,QAAQ;EACV;;EAEA;;IAEE,WAAW;EACb;AACF;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,8BAA8B;EAC9B,SAAS;EACT,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,+BAA+B;EAC/B,4BAA4B;EAC5B,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,2BAA2B;EAC3B,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,+BAA+B;EAC/B,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,0BAA0B;EAC1B,qBAAqB;EACrB,4DAA4D;EAC5D,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;;EAEE;IACE,WAAW;IACX,WAAW;IACX,QAAQ;IACR,eAAe;IACf,SAAS;IACT,2BAA2B;EAC7B;;EAEA;IACE,mBAAmB;IACnB,SAAS;EACX;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,mBAAmB;IACnB,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,SAAS;IACT,gBAAgB;IAChB,mBAAmB;EACrB;;AAEF;;AAEA;;EAEE;IACE,UAAU;EACZ;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,mBAAmB;IACnB,eAAe;EACjB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,SAAS;IACT,gBAAgB;IAChB,kBAAkB;EACpB;AACF","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: darkslategray;\r\n  background-image: url(\"data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E\");\r\n  overflow: hidden;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.main-wrapper {\r\n  background: linear-gradient(70deg, #2a5a3b, #1e4886);\r\n  border-radius: 40px;\r\n  display: grid;\r\n  color: whitesmoke;\r\n  width: 100%;\r\n  box-shadow: 2px 4px 2px #1e488699;\r\n}\r\n\r\nh1 {\r\n  position: relative;\r\n  font-size: 1.5rem;\r\n  color: #2a5a3b;\r\n  padding-top: 1rem;\r\n  padding-left: 1rem;\r\n  letter-spacing: 0.1em;\r\n  -webkit-text-stroke: 0.3vw wheat;\r\n  text-transform: uppercase;\r\n}\r\n\r\nh1::before {\r\n  content: attr(data-text);\r\n  padding-left: 1rem;\r\n  position: absolute;\r\n  padding-top: 1rem;\r\n  top: 0;\r\n  left: 0;\r\n  right: 50%;\r\n  width: 0;\r\n  height: 100%;\r\n  color: #1e4886;\r\n  -webkit-text-stroke: 0 #383d52;\r\n  border-right: 1px solid #1e4886;\r\n  animation: main 8s linear infinite;\r\n  overflow: hidden;\r\n}\r\n\r\n@keyframes main {\r\n  0%,\r\n  10%,\r\n  100% {\r\n    width: 0;\r\n  }\r\n\r\n  70%,\r\n  90% {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\nh2 {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: wheat;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column-reverse;\r\n  gap: 2rem;\r\n  font-size: 1rem;\r\n  margin-top: 2rem; \r\n}\r\n\r\n.left-leader {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 2rem;\r\n  padding-right: 2rem;\r\n}\r\n\r\n.score-header {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.scores {\r\n  border: 4px solid darkslategray;\r\n  border-top-left-radius: 30px;\r\n  margin-top: 2rem;\r\n  max-height: 20%;\r\n  margin-bottom: 4rem;\r\n  overflow: scroll;\r\n  background-color: #00000090;\r\n  box-shadow: 3px 2px 4px #00000050;\r\n}\r\n\r\n.list-scores li {\r\n  list-style: none;\r\n  padding-bottom: 8px;\r\n  padding-top: 8px;\r\n  padding-left: 10px;\r\n  font-size: 17px;\r\n}\r\n\r\nul li:nth-child(even) {\r\n  background-color: darkslategray;\r\n  transition: 1s ease;\r\n}\r\n\r\nul li:nth-child(even):hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  margin-top: 15px;\r\n  margin-right: 1rem;\r\n  margin-left: 1rem;\r\n}\r\n\r\nform input {\r\n  padding: 15px 30px;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.submit {\r\n  margin-left: 10rem;\r\n}\r\n\r\n.btn {\r\n  cursor: pointer;\r\n  color: wheat;\r\n  position: relative;\r\n  padding: 12px;\r\n  font-size: 16px;\r\n  background: none;\r\n  transition: 1.5s ease;\r\n}\r\n\r\n.btn:hover {\r\n  color: white;\r\n  transform: scale(1.2);\r\n}\r\n\r\n.btn::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #2a5a3b;\r\n  z-index: -1;\r\n  transition: transform 0.9s;\r\n  transform-origin: 0 0;\r\n  transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);\r\n  transform: scaleX(0);\r\n}\r\n\r\n.btn:hover::before {\r\n  transform: scaleX(1);\r\n}\r\n\r\n.save {\r\n  margin-left: 50px;\r\n  color: aqua;\r\n  font-weight: 600;\r\n  margin-top: 18px;\r\n}\r\n\r\n@media only screen and (min-width:768px) {\r\n  \r\n  .main-wrapper {\r\n    width: 100%;\r\n    height: 80%;\r\n    top: 10%;\r\n    position: fixed;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n  }\r\n\r\n  .container {\r\n    flex-direction: row;\r\n    gap: 2rem;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 4rem;\r\n  }\r\n\r\n  .score-header {\r\n    gap: 12rem;\r\n  }\r\n\r\n  .scores {\r\n    margin-bottom: 2rem;\r\n    max-height: 25%;\r\n  }\r\n\r\n  .submit {\r\n    margin-left: 8rem;\r\n  }\r\n\r\n  form {\r\n    gap: 18px;\r\n    margin-top: 38px;\r\n    padding-right: 2rem;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (min-width:1205px){\r\n\r\n  .main-wrapper {\r\n    width: 70%;\r\n  }\r\n\r\n  .container {\r\n    gap: 8rem;\r\n  }\r\n\r\n  .scores {\r\n    margin-bottom: 2rem;\r\n    max-height: 25%;\r\n  }\r\n\r\n  .score-header {\r\n    gap: 12rem;\r\n  }\r\n\r\n  .submit {\r\n    margin-left: 8rem;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 4rem;\r\n  }\r\n\r\n  form {\r\n    gap: 18px;\r\n    margin-top: 38px;\r\n    margin-right: 2rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getData.js */ "./src/modules/getData.js");
/* harmony import */ var _modules_refreshScore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/refreshScore.js */ "./src/modules/refreshScore.js");
/* harmony import */ var _modules_submitData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/submitData.js */ "./src/modules/submitData.js");





const submitBtn = document.querySelector('.submit');
const refreshbtn = document.querySelector('.refresh');

(0,_modules_getData_js__WEBPACK_IMPORTED_MODULE_1__.getData)();
document.addEventListener('DOMContentLoaded', _modules_refreshScore_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
refreshbtn.addEventListener('click', _modules_refreshScore_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
submitBtn.addEventListener('click', _modules_submitData_js__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiUrls": () => (/* binding */ apiUrls),
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
const apiUrls = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Wl1d9IletOTYVg2sdUf/scores/';

const getData = async () => {
  const response = await fetch(apiUrls, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};



/***/ }),

/***/ "./src/modules/refreshScore.js":
/*!*************************************!*\
  !*** ./src/modules/refreshScore.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ "./src/modules/getData.js");
/* eslit-disable import/no-cycle */


const listScores = document.querySelector('.list-scores');
const refreshData = async () => {
  const response = await fetch(_getData_js__WEBPACK_IMPORTED_MODULE_0__.apiUrls);
  const data = await response.json();
  listScores.innerHTML = '';
  data.result.forEach((score) => {
    listScores.innerHTML += `
        <li>${score.user} : ${score.score}</li>
    `;
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshData);


/***/ }),

/***/ "./src/modules/submitData.js":
/*!***********************************!*\
  !*** ./src/modules/submitData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ "./src/modules/getData.js");
/* harmony import */ var _refreshScore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refreshScore.js */ "./src/modules/refreshScore.js");
/* eslit-disable import/no-cycle */



const nameInput = document.getElementById('user');
const scoreInput = document.getElementById('score');

const saveScore = async (event) => {
  event.preventDefault();
  const response = await fetch(_getData_js__WEBPACK_IMPORTED_MODULE_0__.apiUrls, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: nameInput.value,
      score: scoreInput.value,
    }),
  });
  const data = await response.json();
  const saveMsg = document.querySelector('.save');
  saveMsg.innerHTML = `${data.result}`;
  setTimeout(() => {
    saveMsg.style.display = 'none';
  }, 2000);
  nameInput.value = '';
  scoreInput.value = '';
  (0,_refreshScore_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveScore);


/***/ }),

/***/ "data:image/svg+xml,%3Csvg width=%2716%27 height=%2720%27 viewBox=%270 0 16 20%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27%239C92AC%27 fill-opacity=%270.4%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M8 0v20L0 10M16 0v10L8 0M16 10v10H8%27/%3E%3C/g%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg width=%2716%27 height=%2720%27 viewBox=%270 0 16 20%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27%239C92AC%27 fill-opacity=%270.4%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M8 0v20L0 10M16 0v10L8 0M16 10v10H8%27/%3E%3C/g%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg width=%2716%27 height=%2720%27 viewBox=%270 0 16 20%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27%239C92AC%27 fill-opacity=%270.4%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M8 0v20L0 10M16 0v10L8 0M16 10v10H8%27/%3E%3C/g%3E%3C/svg%3E";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDMEI7QUFDSztBQUNKO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQU87QUFDUCw4Q0FBOEMsZ0VBQVc7QUFDekQscUNBQXFDLGdFQUFXO0FBQ2hELG9DQUFvQyw4REFBUzs7Ozs7Ozs7Ozs7Ozs7O0FDWDdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDNEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaNUI7QUFDdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdEQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxZQUFZLElBQUksWUFBWTtBQUMxQztBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkM0I7QUFDdUM7QUFDSztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0RBQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLHlCQUF5QixZQUFZO0FBQ3JDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUUsNERBQVc7QUFDYjtBQUNBLGlFQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlci1ib2FyZC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGVhZGVyLWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXItYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2xlYWRlci1ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWRlci1ib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFkZXItYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFkZXItYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xlYWRlci1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWRlci1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWRlci1ib2FyZC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFkZXItYm9hcmQvLi9zcmMvbW9kdWxlcy9nZXREYXRhLmpzIiwid2VicGFjazovL2xlYWRlci1ib2FyZC8uL3NyYy9tb2R1bGVzL3JlZnJlc2hTY29yZS5qcyIsIndlYnBhY2s6Ly9sZWFkZXItYm9hcmQvLi9zcmMvbW9kdWxlcy9zdWJtaXREYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSUyNzE2JTI3IGhlaWdodD0lMjcyMCUyNyB2aWV3Qm94PSUyNzAgMCAxNiAyMCUyNyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyUzRSUzQ2cgZmlsbD0lMjclMjM5QzkyQUMlMjcgZmlsbC1vcGFjaXR5PSUyNzAuNCUyNyBmaWxsLXJ1bGU9JTI3ZXZlbm9kZCUyNyUzRSUzQ3BhdGggZD0lMjdNOCAwdjIwTDAgMTBNMTYgMHYxMEw4IDBNMTYgMTB2MTBIOCUyNy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXdyYXBwZXIge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDcwZGVnLCAjMmE1YTNiLCAjMWU0ODg2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCA0cHggMnB4ICMxZTQ4ODY5OTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogIzJhNWEzYjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcclxcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC4zdncgd2hlYXQ7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5oMTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiA1MCU7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGNvbG9yOiAjMWU0ODg2O1xcclxcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMCAjMzgzZDUyO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzFlNDg4NjtcXHJcXG4gIGFuaW1hdGlvbjogbWFpbiA4cyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1haW4ge1xcclxcbiAgMCUsXFxyXFxuICAxMCUsXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA3MCUsXFxyXFxuICA5MCUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiB3aGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtOyBcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtbGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlcyB7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCBkYXJrc2xhdGVncmF5O1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBtYXgtaGVpZ2h0OiAyMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5MDtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAycHggNHB4ICMwMDAwMDA1MDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3Qtc2NvcmVzIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDhweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxudWwgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XFxyXFxuICB0cmFuc2l0aW9uOiAxcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG51bCBsaTpudGgtY2hpbGQoZXZlbik6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTByZW07XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHdoZWF0O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiAxLjVzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMmE1YTNiO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC45cztcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXHJcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41LCAxLjYsIDAuNCwgMC43KTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyOjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxufVxcclxcblxcclxcbi5zYXZlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgY29sb3I6IGFxdWE7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbWFyZ2luLXRvcDogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSB7XFxyXFxuICBcXHJcXG4gIC5tYWluLXdyYXBwZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIHRvcDogMTAlO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNjb3JlLWhlYWRlciB7XFxyXFxuICAgIGdhcDogMTJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2NvcmVzIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgbWF4LWhlaWdodDogMjUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnN1Ym1pdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA4cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9ybSB7XFxyXFxuICAgIGdhcDogMThweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzhweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMDVweCl7XFxyXFxuXFxyXFxuICAubWFpbi13cmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBnYXA6IDhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2NvcmVzIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgbWF4LWhlaWdodDogMjUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNjb3JlLWhlYWRlciB7XFxyXFxuICAgIGdhcDogMTJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3VibWl0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvcm0ge1xcclxcbiAgICBnYXA6IDE4cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDM4cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHlEQUF1UTtFQUN2USxnQkFBZ0I7RUFDaEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usb0RBQW9EO0VBQ3BELG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtFQUNWLFFBQVE7RUFDUixZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0Isa0NBQWtDO0VBQ2xDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFOzs7SUFHRSxRQUFRO0VBQ1Y7O0VBRUE7O0lBRUUsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsNERBQTREO0VBQzVELG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsUUFBUTtJQUNSLGVBQWU7SUFDZixTQUFTO0lBQ1QsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztBQUVGOztBQUVBOztFQUVFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsU0FBUztJQUNULGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzE2JyBoZWlnaHQ9JzIwJyB2aWV3Qm94PScwIDAgMTYgMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzlDOTJBQycgZmlsbC1vcGFjaXR5PScwLjQnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NwYXRoIGQ9J004IDB2MjBMMCAxME0xNiAwdjEwTDggME0xNiAxMHYxMEg4Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi13cmFwcGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg3MGRlZywgIzJhNWEzYiwgIzFlNDg4Nik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAycHggNHB4IDJweCAjMWU0ODg2OTk7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6ICMyYTVhM2I7XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXHJcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuM3Z3IHdoZWF0O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuaDE6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogNTAlO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjb2xvcjogIzFlNDg4NjtcXHJcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAgIzM4M2Q1MjtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxZTQ4ODY7XFxyXFxuICBhbmltYXRpb246IG1haW4gOHMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBtYWluIHtcXHJcXG4gIDAlLFxcclxcbiAgMTAlLFxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgNzAlLFxcclxcbiAgOTAlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogd2hlYXQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTsgXFxyXFxufVxcclxcblxcclxcbi5sZWZ0LWxlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5zY29yZS1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMge1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgZGFya3NsYXRlZ3JheTtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgbWF4LWhlaWdodDogMjAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOTA7XFxyXFxuICBib3gtc2hhZG93OiAzcHggMnB4IDRweCAjMDAwMDAwNTA7XFxyXFxufVxcclxcblxcclxcbi5saXN0LXNjb3JlcyBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXHJcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbnVsIGxpOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xcclxcbiAgdHJhbnNpdGlvbjogMXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxudWwgbGk6bnRoLWNoaWxkKGV2ZW4pOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGVhdDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogMS41cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogIzJhNWEzYjtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXM7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxyXFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNSwgMS42LCAwLjQsIDAuNyk7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2F2ZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gIGNvbG9yOiBhcXVhO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIG1hcmdpbi10b3A6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCkge1xcclxcbiAgXFxyXFxuICAubWFpbi13cmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICB0b3A6IDEwJTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zY29yZS1oZWFkZXIge1xcclxcbiAgICBnYXA6IDEycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNjb3JlcyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIG1heC1oZWlnaHQ6IDI1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zdWJtaXQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvcm0ge1xcclxcbiAgICBnYXA6IDE4cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDM4cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjA1cHgpe1xcclxcblxcclxcbiAgLm1haW4td3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgZ2FwOiA4cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNjb3JlcyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIG1heC1oZWlnaHQ6IDI1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zY29yZS1oZWFkZXIge1xcclxcbiAgICBnYXA6IDEycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnN1Ym1pdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA4cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgaDEge1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb3JtIHtcXHJcXG4gICAgZ2FwOiAxOHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAzOHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4vbW9kdWxlcy9nZXREYXRhLmpzJztcclxuaW1wb3J0IHJlZnJlc2hEYXRhIGZyb20gJy4vbW9kdWxlcy9yZWZyZXNoU2NvcmUuanMnO1xyXG5pbXBvcnQgc2F2ZVNjb3JlIGZyb20gJy4vbW9kdWxlcy9zdWJtaXREYXRhLmpzJztcclxuXHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcclxuY29uc3QgcmVmcmVzaGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoJyk7XHJcblxyXG5nZXREYXRhKCk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCByZWZyZXNoRGF0YSk7XHJcbnJlZnJlc2hidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWZyZXNoRGF0YSk7XHJcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVTY29yZSk7IiwiY29uc3QgYXBpVXJscyA9ICdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy9XbDFkOUlsZXRPVFlWZzJzZFVmL3Njb3Jlcy8nO1xyXG5cclxuY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybHMsIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcbmV4cG9ydCB7IGdldERhdGEsIGFwaVVybHMgfTtcclxuIiwiLyogZXNsaXQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IHsgYXBpVXJscyB9IGZyb20gJy4vZ2V0RGF0YS5qcyc7XHJcblxyXG5jb25zdCBsaXN0U2NvcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3Qtc2NvcmVzJyk7XHJcbmNvbnN0IHJlZnJlc2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJscyk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBsaXN0U2NvcmVzLmlubmVySFRNTCA9ICcnO1xyXG4gIGRhdGEucmVzdWx0LmZvckVhY2goKHNjb3JlKSA9PiB7XHJcbiAgICBsaXN0U2NvcmVzLmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGxpPiR7c2NvcmUudXNlcn0gOiAke3Njb3JlLnNjb3JlfTwvbGk+XHJcbiAgICBgO1xyXG4gIH0pO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCByZWZyZXNoRGF0YTtcclxuIiwiLyogZXNsaXQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IHsgYXBpVXJscyB9IGZyb20gJy4vZ2V0RGF0YS5qcyc7XHJcbmltcG9ydCByZWZyZXNoRGF0YSBmcm9tICcuL3JlZnJlc2hTY29yZS5qcyc7XHJcblxyXG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcicpO1xyXG5jb25zdCBzY29yZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XHJcblxyXG5jb25zdCBzYXZlU2NvcmUgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJscywge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICB1c2VyOiBuYW1lSW5wdXQudmFsdWUsXHJcbiAgICAgIHNjb3JlOiBzY29yZUlucHV0LnZhbHVlLFxyXG4gICAgfSksXHJcbiAgfSk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBjb25zdCBzYXZlTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUnKTtcclxuICBzYXZlTXNnLmlubmVySFRNTCA9IGAke2RhdGEucmVzdWx0fWA7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBzYXZlTXNnLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSwgMjAwMCk7XHJcbiAgbmFtZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgc2NvcmVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gIHJlZnJlc2hEYXRhKCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHNhdmVTY29yZTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9