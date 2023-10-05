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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.nav > button {\r\n  background: none;\r\n  font-size: 1.3rem;\r\n  font-weight: 800;\r\n  border: none;\r\n  border-top: black 2px solid;\r\n  border-bottom: black 2px solid;\r\n}\r\n\r\n.nav > button:hover {\r\n  color: orangered;\r\n  border-top: orangered 2px solid;\r\n  border-bottom: orangered 2px solid;\r\n}\r\n.nav > button:active {\r\n  color: rgb(2, 2, 119);\r\n  border-top: rgb(2, 2, 119) 2px solid;\r\n  border-bottom: rgb(2, 2, 119) 2px solid;\r\n}\r\n\r\n.rest-name {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-size: 2rem;\r\n  align-self: center;\r\n}\r\n\r\n/* #content {\r\n  display: grid;\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n  grid-template-columns: auto auto;\r\n  gap: 5px;\r\n  justify-items: center;\r\n  align-items: center;\r\n} */\r\n\r\n/* #content {\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n} */\r\n\r\n.content-home {\r\n  display: grid; \r\n  grid-template-columns: auto auto;\r\n  gap: 5px;\r\n  justify-items: center;\r\n  align-items: center;\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.photo-main {\r\n  width: 400px;\r\n  height: 533px;\r\n  grid-row: 1 / 6;\r\n}\r\n\r\n.right-side {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.right-side > * {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.left-side {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.rest-summary {\r\n  grid-column: 2 / 3;\r\n  width: 500px;\r\n}\r\n\r\n.order-btn {\r\n  width: 100px;\r\n  height: 50px;\r\n}\r\n\r\n.order-btn {\r\n  width: 150px;\r\n  height: 2.5rem;\r\n  background-color: #9eb4ae;\r\n  border: none;\r\n  border-radius: 20px;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  align-self: center;\r\n}\r\n\r\n.order-btn:hover {\r\n  color: orangered;\r\n}\r\n\r\n.order-btn:active {\r\n  color: rgb(2, 2, 119);\r\n}\r\n\r\n.address {\r\n  align-self: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.opening-hours {\r\n  align-self: center;\r\n}\r\n\r\n.footer {\r\n  margin: 10px 0;\r\n}\r\n\r\n.footer a,.footer a:visited {\r\n  color: black;\r\n}\r\n\r\n.footer a:hover {\r\n  color: orangered;\r\n}\r\n\r\n.footer a:active {\r\n  color: rgb(2, 2, 119);\r\n}\r\n\r\n/* Menu.js */\r\n\r\n.menu-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\nh2 {\r\n  text-decoration: underline;\r\n}\r\n\r\n.menu-category {\r\n  width: 400px;\r\n  margin: 0 40px;\r\n}\r\n\r\n.menu-dish {\r\n  display: grid; \r\n  grid-template-columns: auto auto;\r\n  justify-content: space-between;\r\n  border-bottom: 1px black dotted;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n.menu-dish div:first-child {  \r\n  font-weight: 800;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.menu-dish div:nth-child(3) {\r\n  font-style: italic;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n/* Contact.js */\r\n\r\n.contact-container {\r\n  display: grid; \r\n  grid-template-columns: 500px auto;\r\n  gap: 5px;\r\n  justify-items: center;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.phone {\r\n  align-self: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.photo-contact {\r\n  width: 300px;\r\n} ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,mDAAmD;AACrD;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,+BAA+B;EAC/B,kCAAkC;AACpC;AACA;EACE,qBAAqB;EACrB,oCAAoC;EACpC,uCAAuC;AACzC;;AAEA;EACE,qCAAqC;EACrC,eAAe;EACf,kBAAkB;AACpB;;AAEA;;;;;;;;GAQG;;AAEH;;;GAGG;;AAEH;EACE,aAAa;EACb,gCAAgC;EAChC,QAAQ;EACR,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,YAAY;;AAEZ;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,8BAA8B;EAC9B,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA,eAAe;;AAEf;EACE,aAAa;EACb,iCAAiC;EACjC,QAAQ;EACR,qBAAqB;EACrB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.nav > button {\r\n  background: none;\r\n  font-size: 1.3rem;\r\n  font-weight: 800;\r\n  border: none;\r\n  border-top: black 2px solid;\r\n  border-bottom: black 2px solid;\r\n}\r\n\r\n.nav > button:hover {\r\n  color: orangered;\r\n  border-top: orangered 2px solid;\r\n  border-bottom: orangered 2px solid;\r\n}\r\n.nav > button:active {\r\n  color: rgb(2, 2, 119);\r\n  border-top: rgb(2, 2, 119) 2px solid;\r\n  border-bottom: rgb(2, 2, 119) 2px solid;\r\n}\r\n\r\n.rest-name {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-size: 2rem;\r\n  align-self: center;\r\n}\r\n\r\n/* #content {\r\n  display: grid;\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n  grid-template-columns: auto auto;\r\n  gap: 5px;\r\n  justify-items: center;\r\n  align-items: center;\r\n} */\r\n\r\n/* #content {\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n} */\r\n\r\n.content-home {\r\n  display: grid; \r\n  grid-template-columns: auto auto;\r\n  gap: 5px;\r\n  justify-items: center;\r\n  align-items: center;\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.photo-main {\r\n  width: 400px;\r\n  height: 533px;\r\n  grid-row: 1 / 6;\r\n}\r\n\r\n.right-side {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.right-side > * {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.left-side {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.rest-summary {\r\n  grid-column: 2 / 3;\r\n  width: 500px;\r\n}\r\n\r\n.order-btn {\r\n  width: 100px;\r\n  height: 50px;\r\n}\r\n\r\n.order-btn {\r\n  width: 150px;\r\n  height: 2.5rem;\r\n  background-color: #9eb4ae;\r\n  border: none;\r\n  border-radius: 20px;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  align-self: center;\r\n}\r\n\r\n.order-btn:hover {\r\n  color: orangered;\r\n}\r\n\r\n.order-btn:active {\r\n  color: rgb(2, 2, 119);\r\n}\r\n\r\n.address {\r\n  align-self: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.opening-hours {\r\n  align-self: center;\r\n}\r\n\r\n.footer {\r\n  margin: 10px 0;\r\n}\r\n\r\n.footer a,.footer a:visited {\r\n  color: black;\r\n}\r\n\r\n.footer a:hover {\r\n  color: orangered;\r\n}\r\n\r\n.footer a:active {\r\n  color: rgb(2, 2, 119);\r\n}\r\n\r\n/* Menu.js */\r\n\r\n.menu-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\nh2 {\r\n  text-decoration: underline;\r\n}\r\n\r\n.menu-category {\r\n  width: 400px;\r\n  margin: 0 40px;\r\n}\r\n\r\n.menu-dish {\r\n  display: grid; \r\n  grid-template-columns: auto auto;\r\n  justify-content: space-between;\r\n  border-bottom: 1px black dotted;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n.menu-dish div:first-child {  \r\n  font-weight: 800;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.menu-dish div:nth-child(3) {\r\n  font-style: italic;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n/* Contact.js */\r\n\r\n.contact-container {\r\n  display: grid; \r\n  grid-template-columns: 500px auto;\r\n  gap: 5px;\r\n  justify-items: center;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.phone {\r\n  align-self: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.photo-contact {\r\n  width: 300px;\r\n} "],"sourceRoot":""}]);
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Resources: https://unsplash.com/photos/5xltWMpkN3E
// https://unsplash.com/photos/oCsaxvGCehM

function createAbout() {
    const contentDiv = document.querySelector("#content");

    // remove content from a previous page
    while (contentDiv.firstChild) {
      contentDiv.removeChild(contentDiv.lastChild);
    }
    contentDiv.className = "";
    contentDiv.classList.add("content-about");

    // add page title and container
    const aboutH1 = document.createElement("h1");
    aboutH1.textContent = "About";
    contentDiv.appendChild(aboutH1);
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    contentDiv.appendChild(aboutContainer);

const resPhoto1 = document.createElement("a");
resPhoto1.setAttribute("href", "https://unsplash.com/@patrick_schneider?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash");
resPhoto1.textContent = "Photo by Patrick Schneider from Unsplash";

const resPhoto2 = document.createElement("a");
resPhoto2.setAttribute("href", "https://unsplash.com/@chrisliverani?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash");
resPhoto2.textContent = "Photo by Chris Liverani from Unsplash";

aboutContainer.appendChild(resPhoto1);
aboutContainer.appendChild(resPhoto2);

}
// Photo by <a href="https://unsplash.com/@patrick_schneider?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Patrick Schneider</a> on <a href="https://unsplash.com/photos/5xltWMpkN3E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
// Photo by <a href="https://unsplash.com/@chrisliverani?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Chris Liverani</a> on <a href="https://unsplash.com/photos/oCsaxvGCehM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patrick_schneider_5xltWMpkN3E_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patrick-schneider-5xltWMpkN3E-unsplash.jpg */ "./src/patrick-schneider-5xltWMpkN3E-unsplash.jpg");


function createContact() {
    const contentDiv = document.querySelector("#content");

    // remove content from a previous page
    while (contentDiv.firstChild) {
      contentDiv.removeChild(contentDiv.lastChild);
    }
    contentDiv.className = "";
    contentDiv.classList.add("content-contact");

    // add page title and container
    const contactH1 = document.createElement("h1");
    contactH1.textContent = "Contact";
    contentDiv.appendChild(contactH1);
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    contentDiv.appendChild(contactContainer);

    const leftSide = document.createElement("div");
    leftSide.classList.add("left-side");
    contactContainer.appendChild(leftSide);

    const rightSide = document.createElement("div");
    rightSide.classList.add("right-side");
    contactContainer.appendChild(rightSide);

    // photo
    const photoContact = new Image();
    photoContact.src = _patrick_schneider_5xltWMpkN3E_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;
    photoContact.classList.add("photo-contact");
    rightSide.appendChild(photoContact);

    // fill the page with data
    const contactParagraph1 = document.createElement("p");
    contactParagraph1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.";
    leftSide.appendChild(contactParagraph1);

    const contactParagraph2 = document.createElement("p");
    contactParagraph2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.";
    leftSide.appendChild(contactParagraph2);

    const address = document.createElement("div");
    address.classList.add("address");
    const address1 = document.createElement("div");
    address1.textContent = "359 Sunshine Alley,";
    const address2 = document.createElement("div");
    address2.textContent = "New York, NY 99271";
    address.appendChild(address1);
    address.appendChild(address2);
    leftSide.appendChild(address);

    const hours = document.createElement("div");
    hours.classList.add("opening-hours");
    const hours1 = document.createElement("div");
    hours1.textContent = "Mon - Fri: 10am - 9pm";
    const hours2 = document.createElement("div");
    hours2.textContent = "Sat - Sun: 10am - 11pm";
    leftSide.appendChild(hours);
    hours.appendChild(hours1);
    hours.appendChild(hours2);

    const phone = document.createElement("div");
    phone.classList.add("phone");
    phone.textContent = "Call us: 123 456 789";
    leftSide.appendChild(phone);


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chris_liverani_oCsaxvGCehM_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chris-liverani-oCsaxvGCehM-unsplash.jpg */ "./src/chris-liverani-oCsaxvGCehM-unsplash.jpg");


const createHome = function () {
  // remove content from a previous page
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  content.className = "";
  content.classList.add("content-home");
  const leftSide = document.createElement("div");
  content.appendChild(leftSide);

// Photo
  const photoMain = new Image();
  photoMain.src = _chris_liverani_oCsaxvGCehM_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;
  photoMain.classList.add("photo-main");
  leftSide.appendChild(photoMain);

const rightSide = document.createElement("div");
  rightSide.classList.add("right-side");
  content.appendChild(rightSide);

  const restName = document.createElement("div");
  restName.classList.add("rest-name");
  restName.textContent = "The Second Sun";
  rightSide.appendChild(restName);

  const restSummary = document.createElement("div");
  restSummary.classList.add("rest-summary");
  restSummary.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Order your food online or visit our place!";
  rightSide.appendChild(restSummary);

  const orderBtn = document.createElement("button");
  orderBtn.classList.add("order-btn");
  orderBtn.textContent = "Order now";
  rightSide.appendChild(orderBtn);

 const address = document.createElement("div");
  address.classList.add("address");
  const address1 = document.createElement("div");
  address1.textContent = "359 Sunshine Alley,";
  const address2 = document.createElement("div");
  address2.textContent = "New York, NY 99271";
  address.appendChild(address1);
  address.appendChild(address2);
  rightSide.appendChild(address);


const hours = document.createElement("div");
  hours.classList.add("opening-hours");
  const hours1 = document.createElement("div");
  hours1.textContent = "Mon - Fri: 10am - 9pm";
  const hours2 = document.createElement("div");
  hours2.textContent = "Sat - Sun: 10am - 11pm";
  rightSide.appendChild(hours);
  hours.appendChild(hours1);
  hours.appendChild(hours2);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);





/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let menu = [];

class newCategory {
  constructor(category) {
    this.category = category;
    this.dishes = [];
    menu.push(this);
  }
}

class newDish {
  constructor(name, price, category, description) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.description = description;
    const menuCategory = menu.findIndex(
      (item) => item.category == this.category
    );
    menu[menuCategory].dishes.push(this);
    //menu.menuCategory.push(this);
  }
}


/* Categories */
let starters = new newCategory("Starters");
let mains = new newCategory("Main Dishes");
let sides = new newCategory("Sides");
let desserts = new newCategory("Desserts");
let drinks = new newCategory("Drinks");

/* Dishes */
const fishChips = new newDish("Fish and chips", "12.80", "Starters");
const tunaBowl = new newDish("Tuna bowl", "11.20", "Starters");
const prosciutto = new newDish(
  "Prosciutto wrapped mozzarella",
  "10.40",
  "Starters"
);
const shrimp = new newDish("Shrimp cocktail", "12.10", "Starters");

const sirloin = new newDish(
  "Classic sirloin",
  "28.20",
  "Main Dishes",
  "with creamed spinach"
);
const chickenCass = new newDish(
  "Spicy chicken casserole",
  "25.30",
  "Main Dishes",
  "with sweet potatoes and baby carrots"
);
const spaghetti = new newDish(
  "Spaghetti",
  "24.10",
  "Main Dishes",
  "with meatballs"
);
const salmon = new newDish(
  "Grilled salmon",
  "30.90",
  "Main Dishes",
  "with fresh asparagus"
);
const crabCakes = new newDish(
  "Crab cakes",
  "27.30",
  "Main Dishes",
  "with tomato salad"
);

const onionRings = new newDish("Onion rings", "9.20", "Sides");
const bakesPotatoes = new newDish("Baked potatoes", "7.60", "Sides");
const kale = new newDish("Kale salad", "8.90", "Sides");
const ceasar = new newDish("Ceasar salad", "7.60", "Sides");
const tomatoSoup = new newDish("Tomato soup", "5.90", "Sides");
const zucchiniSoup = new newDish("Zucchini soup", "6.50", "Sides");

const chocolateCake = new newDish("Chocolate cake", "10.20", "Desserts");
const carrotCake = new newDish("Carrot cake", "12.10", "Desserts");
const iceCream = new newDish("Ice Cream Explosion", "9.60", "Desserts");
const limeMousse = new newDish("Lime Mousse", "10.80", "Desserts");
const peachCrumble = new newDish("Peach Crumble", "11.20", "Desserts");
const cheesecake = new newDish("Blackberry Cheesecake", "12.80", "Desserts");

const wine = new newDish(
  "Glass of wine",
  "12.60",
  "Drinks",
  "sparkling, rosé, red, white"
);
const beer = new newDish("Beer", "8.30", "Drinks", "lager, ale, cider");
const soda = new newDish("Soda", "5.80", "Drinks", "coke, pepsi, fanta");
const water = new newDish("Water", "no charge", "Drinks", "sparkling, still");


// Create menu on page 
const createMenu = function () {
  const contentDiv = document.querySelector("#content");

  // remove content from a previous page
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
  contentDiv.className = "";
  contentDiv.classList.add("content-menu");

  // add page title and container
  const menuH1 = document.createElement("h1");
  menuH1.textContent = "Menu";
  contentDiv.appendChild(menuH1);
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  contentDiv.appendChild(menuContainer);

  // fill the menu with categories
  menu.forEach((item) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("menu-category");
    const categoryH2 = document.createElement("h2");
    categoryH2.textContent = item.category;
    categoryDiv.appendChild(categoryH2);
    menuContainer.appendChild(categoryDiv);

    // fill the categories with dishes
    function fillCategories() {
      item.dishes.forEach((dish) => {
        console.log(dish.name);
        const dishDiv = document.createElement("div");
        dishDiv.classList.add("menu-dish");
        const dishName = document.createElement("div");
        const dishPrice = document.createElement("div");
        const dishDescription = document.createElement("div");
        dishName.textContent = dish.name;
        dishPrice.textContent = dish.price;
        dishDescription.textContent = dish.description;

        dishDiv.appendChild(dishName);
        dishDiv.appendChild(dishPrice);
        dishDiv.appendChild(dishDescription);
        categoryDiv.appendChild(dishDiv);
      });
    }
    fillCategories();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);



/***/ }),

/***/ "./src/chris-liverani-oCsaxvGCehM-unsplash.jpg":
/*!*****************************************************!*\
  !*** ./src/chris-liverani-oCsaxvGCehM-unsplash.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "317ec3d4dc90660b4590.jpg";

/***/ }),

/***/ "./src/patrick-schneider-5xltWMpkN3E-unsplash.jpg":
/*!********************************************************!*\
  !*** ./src/patrick-schneider-5xltWMpkN3E-unsplash.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32d7b4f73d5572b6a8e4.jpg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./src/about.js");
// Imports







const body = document.querySelector("body");

// Navigation
const nav = document.createElement("div");
nav.classList.add("nav");
const home = document.createElement("button");
home.textContent = "Home";
home.addEventListener("click", _home__WEBPACK_IMPORTED_MODULE_2__["default"]);
const menu = document.createElement("button");
menu.addEventListener("click", _menu__WEBPACK_IMPORTED_MODULE_1__["default"]);
menu.textContent = "Menu";
const contact = document.createElement("button");
contact.addEventListener("click", _contact__WEBPACK_IMPORTED_MODULE_3__["default"]);
contact.textContent = "Contact";
const about = document.createElement("button");
about.addEventListener("click", _about__WEBPACK_IMPORTED_MODULE_4__["default"]);
about.textContent = "About";
nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(contact);
nav.appendChild(about);
body.appendChild(nav);

// Content
const content = document.createElement("div");
content.id = "content";
body.appendChild(content);
(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ3BDd0M7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3RUFBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUVBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDO0FBQzFCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDO0FBQzFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0SkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNxQjtBQUNyQjtBQUNnQztBQUNBO0FBQ007QUFDSjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZDQUFVO0FBQ3pDO0FBQ0EsK0JBQStCLDZDQUFVO0FBQ3pDO0FBQ0E7QUFDQSxrQ0FBa0MsZ0RBQWE7QUFDL0M7QUFDQTtBQUNBLGdDQUFnQyw4Q0FBVztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYgPiBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci10b3A6IGJsYWNrIDJweCBzb2xpZDtcXHJcXG4gIGJvcmRlci1ib3R0b206IGJsYWNrIDJweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiA+IGJ1dHRvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgYm9yZGVyLXRvcDogb3JhbmdlcmVkIDJweCBzb2xpZDtcXHJcXG4gIGJvcmRlci1ib3R0b206IG9yYW5nZXJlZCAycHggc29saWQ7XFxyXFxufVxcclxcbi5uYXYgPiBidXR0b246YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMiwgMiwgMTE5KTtcXHJcXG4gIGJvcmRlci10b3A6IHJnYigyLCAyLCAxMTkpIDJweCBzb2xpZDtcXHJcXG4gIGJvcmRlci1ib3R0b206IHJnYigyLCAyLCAxMTkpIDJweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3QtbmFtZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAjY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgd2lkdGg6IDEwMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufSAqL1xcclxcblxcclxcbi8qICNjb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59ICovXFxyXFxuXFxyXFxuLmNvbnRlbnQtaG9tZSB7XFxyXFxuICBkaXNwbGF5OiBncmlkOyBcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvdG8tbWFpbiB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDUzM3B4O1xcclxcbiAgZ3JpZC1yb3c6IDEgLyA2O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2lkZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNpZGUgPiAqIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LXNpZGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5yZXN0LXN1bW1hcnkge1xcclxcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWJ0biB7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZWI0YWU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRuOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiKDIsIDIsIDExOSk7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5vcGVuaW5nLWhvdXJzIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBhLC5mb290ZXIgYTp2aXNpdGVkIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYTphY3RpdmUge1xcclxcbiAgY29sb3I6IHJnYigyLCAyLCAxMTkpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNZW51LmpzICovXFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2F0ZWdvcnkge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgbWFyZ2luOiAwIDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWRpc2gge1xcclxcbiAgZGlzcGxheTogZ3JpZDsgXFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBibGFjayBkb3R0ZWQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWRpc2ggZGl2OmZpcnN0LWNoaWxkIHsgIFxcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1kaXNoIGRpdjpudGgtY2hpbGQoMykge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi8qIENvbnRhY3QuanMgKi9cXHJcXG5cXHJcXG4uY29udGFjdC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDsgXFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwMHB4IGF1dG87XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnBob25lIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5waG90by1jb250YWN0IHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59IFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7Ozs7O0dBUUc7O0FBRUg7OztHQUdHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUEsZUFBZTs7QUFFZjtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2ID4gYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItdG9wOiBibGFjayAycHggc29saWQ7XFxyXFxuICBib3JkZXItYm90dG9tOiBibGFjayAycHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYgPiBidXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gIGJvcmRlci10b3A6IG9yYW5nZXJlZCAycHggc29saWQ7XFxyXFxuICBib3JkZXItYm90dG9tOiBvcmFuZ2VyZWQgMnB4IHNvbGlkO1xcclxcbn1cXHJcXG4ubmF2ID4gYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiKDIsIDIsIDExOSk7XFxyXFxuICBib3JkZXItdG9wOiByZ2IoMiwgMiwgMTE5KSAycHggc29saWQ7XFxyXFxuICBib3JkZXItYm90dG9tOiByZ2IoMiwgMiwgMTE5KSAycHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5yZXN0LW5hbWUge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogI2NvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHdpZHRoOiAxMDAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4vKiAjY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufSAqL1xcclxcblxcclxcbi5jb250ZW50LWhvbWUge1xcclxcbiAgZGlzcGxheTogZ3JpZDsgXFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnBob3RvLW1haW4ge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MzNweDtcXHJcXG4gIGdyaWQtcm93OiAxIC8gNjtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNpZGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zaWRlID4gKiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1zaWRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdC1zdW1tYXJ5IHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWJ0biB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG4ge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWViNGFlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG46aG92ZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZXJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWJ0bjphY3RpdmUge1xcclxcbiAgY29sb3I6IHJnYigyLCAyLCAxMTkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzcyB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ub3BlbmluZy1ob3VycyB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYSwuZm9vdGVyIGE6dmlzaXRlZCB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGE6YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMiwgMiwgMTE5KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVudS5qcyAqL1xcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhdGVnb3J5IHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIG1hcmdpbjogMCA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1kaXNoIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7IFxcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgZG90dGVkO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1kaXNoIGRpdjpmaXJzdC1jaGlsZCB7ICBcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZGlzaCBkaXY6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250YWN0LmpzICovXFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7IFxcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MDBweCBhdXRvO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5waG9uZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvdG8tY29udGFjdCB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxufSBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gUmVzb3VyY2VzOiBodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvNXhsdFdNcGtOM0VcclxuLy8gaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL29Dc2F4dkdDZWhNXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBYm91dCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gICAgLy8gcmVtb3ZlIGNvbnRlbnQgZnJvbSBhIHByZXZpb3VzIHBhZ2VcclxuICAgIHdoaWxlIChjb250ZW50RGl2LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgY29udGVudERpdi5yZW1vdmVDaGlsZChjb250ZW50RGl2Lmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICBjb250ZW50RGl2LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWFib3V0XCIpO1xyXG5cclxuICAgIC8vIGFkZCBwYWdlIHRpdGxlIGFuZCBjb250YWluZXJcclxuICAgIGNvbnN0IGFib3V0SDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBhYm91dEgxLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xyXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChhYm91dEgxKTtcclxuICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1jb250YWluZXJcIik7XHJcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKTtcclxuXHJcbmNvbnN0IHJlc1Bob3RvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5yZXNQaG90bzEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vdW5zcGxhc2guY29tL0BwYXRyaWNrX3NjaG5laWRlcj91dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dW5zcGxhc2hcIik7XHJcbnJlc1Bob3RvMS50ZXh0Q29udGVudCA9IFwiUGhvdG8gYnkgUGF0cmljayBTY2huZWlkZXIgZnJvbSBVbnNwbGFzaFwiO1xyXG5cclxuY29uc3QgcmVzUGhvdG8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbnJlc1Bob3RvMi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGNocmlzbGl2ZXJhbmk/dXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHQmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fc291cmNlPXVuc3BsYXNoXCIpO1xyXG5yZXNQaG90bzIudGV4dENvbnRlbnQgPSBcIlBob3RvIGJ5IENocmlzIExpdmVyYW5pIGZyb20gVW5zcGxhc2hcIjtcclxuXHJcbmFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlc1Bob3RvMSk7XHJcbmFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlc1Bob3RvMik7XHJcblxyXG59XHJcbi8vIFBob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AcGF0cmlja19zY2huZWlkZXI/dXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHQmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fc291cmNlPXVuc3BsYXNoXCI+UGF0cmljayBTY2huZWlkZXI8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvNXhsdFdNcGtOM0U/dXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHQmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fc291cmNlPXVuc3BsYXNoXCI+VW5zcGxhc2g8L2E+XHJcbiAgXHJcbi8vIFBob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AY2hyaXNsaXZlcmFuaT91dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dW5zcGxhc2hcIj5DaHJpcyBMaXZlcmFuaTwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9vQ3NheHZHQ2VoTT91dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dW5zcGxhc2hcIj5VbnNwbGFzaDwvYT5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWJvdXQ7IiwiaW1wb3J0IHBob3RvMiBmcm9tIFwiLi9wYXRyaWNrLXNjaG5laWRlci01eGx0V01wa04zRS11bnNwbGFzaC5qcGdcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XHJcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICAgIC8vIHJlbW92ZSBjb250ZW50IGZyb20gYSBwcmV2aW91cyBwYWdlXHJcbiAgICB3aGlsZSAoY29udGVudERpdi5maXJzdENoaWxkKSB7XHJcbiAgICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoY29udGVudERpdi5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgY29udGVudERpdi5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1jb250YWN0XCIpO1xyXG5cclxuICAgIC8vIGFkZCBwYWdlIHRpdGxlIGFuZCBjb250YWluZXJcclxuICAgIGNvbnN0IGNvbnRhY3RIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGNvbnRhY3RIMS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWN0SDEpO1xyXG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgbGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGVmdFNpZGUuY2xhc3NMaXN0LmFkZChcImxlZnQtc2lkZVwiKTtcclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdFNpZGUpO1xyXG5cclxuICAgIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByaWdodFNpZGUuY2xhc3NMaXN0LmFkZChcInJpZ2h0LXNpZGVcIik7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XHJcblxyXG4gICAgLy8gcGhvdG9cclxuICAgIGNvbnN0IHBob3RvQ29udGFjdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgcGhvdG9Db250YWN0LnNyYyA9IHBob3RvMjtcclxuICAgIHBob3RvQ29udGFjdC5jbGFzc0xpc3QuYWRkKFwicGhvdG8tY29udGFjdFwiKTtcclxuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChwaG90b0NvbnRhY3QpO1xyXG5cclxuICAgIC8vIGZpbGwgdGhlIHBhZ2Ugd2l0aCBkYXRhXHJcbiAgICBjb25zdCBjb250YWN0UGFyYWdyYXBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29udGFjdFBhcmFncmFwaDEudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4LlwiO1xyXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoY29udGFjdFBhcmFncmFwaDEpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RQYXJhZ3JhcGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb250YWN0UGFyYWdyYXBoMi50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXguXCI7XHJcbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChjb250YWN0UGFyYWdyYXBoMik7XHJcblxyXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzXCIpO1xyXG4gICAgY29uc3QgYWRkcmVzczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkcmVzczEudGV4dENvbnRlbnQgPSBcIjM1OSBTdW5zaGluZSBBbGxleSxcIjtcclxuICAgIGNvbnN0IGFkZHJlc3MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZHJlc3MyLnRleHRDb250ZW50ID0gXCJOZXcgWW9yaywgTlkgOTkyNzFcIjtcclxuICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzczEpO1xyXG4gICAgYWRkcmVzcy5hcHBlbmRDaGlsZChhZGRyZXNzMik7XHJcbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChhZGRyZXNzKTtcclxuXHJcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKFwib3BlbmluZy1ob3Vyc1wiKTtcclxuICAgIGNvbnN0IGhvdXJzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBob3VyczEudGV4dENvbnRlbnQgPSBcIk1vbiAtIEZyaTogMTBhbSAtIDlwbVwiO1xyXG4gICAgY29uc3QgaG91cnMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvdXJzMi50ZXh0Q29udGVudCA9IFwiU2F0IC0gU3VuOiAxMGFtIC0gMTFwbVwiO1xyXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoaG91cnMpO1xyXG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnMxKTtcclxuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzMik7XHJcblxyXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGhvbmUuY2xhc3NMaXN0LmFkZChcInBob25lXCIpO1xyXG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSBcIkNhbGwgdXM6IDEyMyA0NTYgNzg5XCI7XHJcbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChwaG9uZSk7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDsiLCJpbXBvcnQgcGhvdG8xIGZyb20gXCIuL2NocmlzLWxpdmVyYW5pLW9Dc2F4dkdDZWhNLXVuc3BsYXNoLmpwZ1wiO1xyXG5cclxuY29uc3QgY3JlYXRlSG9tZSA9IGZ1bmN0aW9uICgpIHtcclxuICAvLyByZW1vdmUgY29udGVudCBmcm9tIGEgcHJldmlvdXMgcGFnZVxyXG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xyXG4gIH1cclxuICBjb250ZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1ob21lXCIpO1xyXG4gIGNvbnN0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGxlZnRTaWRlKTtcclxuXHJcbi8vIFBob3RvXHJcbiAgY29uc3QgcGhvdG9NYWluID0gbmV3IEltYWdlKCk7XHJcbiAgcGhvdG9NYWluLnNyYyA9IHBob3RvMTtcclxuICBwaG90b01haW4uY2xhc3NMaXN0LmFkZChcInBob3RvLW1haW5cIik7XHJcbiAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQocGhvdG9NYWluKTtcclxuXHJcbmNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJyaWdodC1zaWRlXCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmlnaHRTaWRlKTtcclxuXHJcbiAgY29uc3QgcmVzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJlc3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJyZXN0LW5hbWVcIik7XHJcbiAgcmVzdE5hbWUudGV4dENvbnRlbnQgPSBcIlRoZSBTZWNvbmQgU3VuXCI7XHJcbiAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHJlc3ROYW1lKTtcclxuXHJcbiAgY29uc3QgcmVzdFN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJlc3RTdW1tYXJ5LmNsYXNzTGlzdC5hZGQoXCJyZXN0LXN1bW1hcnlcIik7XHJcbiAgcmVzdFN1bW1hcnkudGV4dENvbnRlbnQgPVxyXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleC4gT3JkZXIgeW91ciBmb29kIG9ubGluZSBvciB2aXNpdCBvdXIgcGxhY2UhXCI7XHJcbiAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHJlc3RTdW1tYXJ5KTtcclxuXHJcbiAgY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIG9yZGVyQnRuLmNsYXNzTGlzdC5hZGQoXCJvcmRlci1idG5cIik7XHJcbiAgb3JkZXJCdG4udGV4dENvbnRlbnQgPSBcIk9yZGVyIG5vd1wiO1xyXG4gIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChvcmRlckJ0bik7XHJcblxyXG4gY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKFwiYWRkcmVzc1wiKTtcclxuICBjb25zdCBhZGRyZXNzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWRkcmVzczEudGV4dENvbnRlbnQgPSBcIjM1OSBTdW5zaGluZSBBbGxleSxcIjtcclxuICBjb25zdCBhZGRyZXNzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWRkcmVzczIudGV4dENvbnRlbnQgPSBcIk5ldyBZb3JrLCBOWSA5OTI3MVwiO1xyXG4gIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzczEpO1xyXG4gIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzczIpO1xyXG4gIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChhZGRyZXNzKTtcclxuXHJcblxyXG5jb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG91cnMuY2xhc3NMaXN0LmFkZChcIm9wZW5pbmctaG91cnNcIik7XHJcbiAgY29uc3QgaG91cnMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBob3VyczEudGV4dENvbnRlbnQgPSBcIk1vbiAtIEZyaTogMTBhbSAtIDlwbVwiO1xyXG4gIGNvbnN0IGhvdXJzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG91cnMyLnRleHRDb250ZW50ID0gXCJTYXQgLSBTdW46IDEwYW0gLSAxMXBtXCI7XHJcbiAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGhvdXJzKTtcclxuICBob3Vycy5hcHBlbmRDaGlsZChob3VyczEpO1xyXG4gIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzMik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lO1xyXG5cclxuXHJcblxyXG4iLCJsZXQgbWVudSA9IFtdO1xyXG5cclxuY2xhc3MgbmV3Q2F0ZWdvcnkge1xyXG4gIGNvbnN0cnVjdG9yKGNhdGVnb3J5KSB7XHJcbiAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICB0aGlzLmRpc2hlcyA9IFtdO1xyXG4gICAgbWVudS5wdXNoKHRoaXMpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgbmV3RGlzaCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcclxuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IG1lbnVDYXRlZ29yeSA9IG1lbnUuZmluZEluZGV4KFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSA9PSB0aGlzLmNhdGVnb3J5XHJcbiAgICApO1xyXG4gICAgbWVudVttZW51Q2F0ZWdvcnldLmRpc2hlcy5wdXNoKHRoaXMpO1xyXG4gICAgLy9tZW51Lm1lbnVDYXRlZ29yeS5wdXNoKHRoaXMpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qIENhdGVnb3JpZXMgKi9cclxubGV0IHN0YXJ0ZXJzID0gbmV3IG5ld0NhdGVnb3J5KFwiU3RhcnRlcnNcIik7XHJcbmxldCBtYWlucyA9IG5ldyBuZXdDYXRlZ29yeShcIk1haW4gRGlzaGVzXCIpO1xyXG5sZXQgc2lkZXMgPSBuZXcgbmV3Q2F0ZWdvcnkoXCJTaWRlc1wiKTtcclxubGV0IGRlc3NlcnRzID0gbmV3IG5ld0NhdGVnb3J5KFwiRGVzc2VydHNcIik7XHJcbmxldCBkcmlua3MgPSBuZXcgbmV3Q2F0ZWdvcnkoXCJEcmlua3NcIik7XHJcblxyXG4vKiBEaXNoZXMgKi9cclxuY29uc3QgZmlzaENoaXBzID0gbmV3IG5ld0Rpc2goXCJGaXNoIGFuZCBjaGlwc1wiLCBcIjEyLjgwXCIsIFwiU3RhcnRlcnNcIik7XHJcbmNvbnN0IHR1bmFCb3dsID0gbmV3IG5ld0Rpc2goXCJUdW5hIGJvd2xcIiwgXCIxMS4yMFwiLCBcIlN0YXJ0ZXJzXCIpO1xyXG5jb25zdCBwcm9zY2l1dHRvID0gbmV3IG5ld0Rpc2goXHJcbiAgXCJQcm9zY2l1dHRvIHdyYXBwZWQgbW96emFyZWxsYVwiLFxyXG4gIFwiMTAuNDBcIixcclxuICBcIlN0YXJ0ZXJzXCJcclxuKTtcclxuY29uc3Qgc2hyaW1wID0gbmV3IG5ld0Rpc2goXCJTaHJpbXAgY29ja3RhaWxcIiwgXCIxMi4xMFwiLCBcIlN0YXJ0ZXJzXCIpO1xyXG5cclxuY29uc3Qgc2lybG9pbiA9IG5ldyBuZXdEaXNoKFxyXG4gIFwiQ2xhc3NpYyBzaXJsb2luXCIsXHJcbiAgXCIyOC4yMFwiLFxyXG4gIFwiTWFpbiBEaXNoZXNcIixcclxuICBcIndpdGggY3JlYW1lZCBzcGluYWNoXCJcclxuKTtcclxuY29uc3QgY2hpY2tlbkNhc3MgPSBuZXcgbmV3RGlzaChcclxuICBcIlNwaWN5IGNoaWNrZW4gY2Fzc2Vyb2xlXCIsXHJcbiAgXCIyNS4zMFwiLFxyXG4gIFwiTWFpbiBEaXNoZXNcIixcclxuICBcIndpdGggc3dlZXQgcG90YXRvZXMgYW5kIGJhYnkgY2Fycm90c1wiXHJcbik7XHJcbmNvbnN0IHNwYWdoZXR0aSA9IG5ldyBuZXdEaXNoKFxyXG4gIFwiU3BhZ2hldHRpXCIsXHJcbiAgXCIyNC4xMFwiLFxyXG4gIFwiTWFpbiBEaXNoZXNcIixcclxuICBcIndpdGggbWVhdGJhbGxzXCJcclxuKTtcclxuY29uc3Qgc2FsbW9uID0gbmV3IG5ld0Rpc2goXHJcbiAgXCJHcmlsbGVkIHNhbG1vblwiLFxyXG4gIFwiMzAuOTBcIixcclxuICBcIk1haW4gRGlzaGVzXCIsXHJcbiAgXCJ3aXRoIGZyZXNoIGFzcGFyYWd1c1wiXHJcbik7XHJcbmNvbnN0IGNyYWJDYWtlcyA9IG5ldyBuZXdEaXNoKFxyXG4gIFwiQ3JhYiBjYWtlc1wiLFxyXG4gIFwiMjcuMzBcIixcclxuICBcIk1haW4gRGlzaGVzXCIsXHJcbiAgXCJ3aXRoIHRvbWF0byBzYWxhZFwiXHJcbik7XHJcblxyXG5jb25zdCBvbmlvblJpbmdzID0gbmV3IG5ld0Rpc2goXCJPbmlvbiByaW5nc1wiLCBcIjkuMjBcIiwgXCJTaWRlc1wiKTtcclxuY29uc3QgYmFrZXNQb3RhdG9lcyA9IG5ldyBuZXdEaXNoKFwiQmFrZWQgcG90YXRvZXNcIiwgXCI3LjYwXCIsIFwiU2lkZXNcIik7XHJcbmNvbnN0IGthbGUgPSBuZXcgbmV3RGlzaChcIkthbGUgc2FsYWRcIiwgXCI4LjkwXCIsIFwiU2lkZXNcIik7XHJcbmNvbnN0IGNlYXNhciA9IG5ldyBuZXdEaXNoKFwiQ2Vhc2FyIHNhbGFkXCIsIFwiNy42MFwiLCBcIlNpZGVzXCIpO1xyXG5jb25zdCB0b21hdG9Tb3VwID0gbmV3IG5ld0Rpc2goXCJUb21hdG8gc291cFwiLCBcIjUuOTBcIiwgXCJTaWRlc1wiKTtcclxuY29uc3QgenVjY2hpbmlTb3VwID0gbmV3IG5ld0Rpc2goXCJadWNjaGluaSBzb3VwXCIsIFwiNi41MFwiLCBcIlNpZGVzXCIpO1xyXG5cclxuY29uc3QgY2hvY29sYXRlQ2FrZSA9IG5ldyBuZXdEaXNoKFwiQ2hvY29sYXRlIGNha2VcIiwgXCIxMC4yMFwiLCBcIkRlc3NlcnRzXCIpO1xyXG5jb25zdCBjYXJyb3RDYWtlID0gbmV3IG5ld0Rpc2goXCJDYXJyb3QgY2FrZVwiLCBcIjEyLjEwXCIsIFwiRGVzc2VydHNcIik7XHJcbmNvbnN0IGljZUNyZWFtID0gbmV3IG5ld0Rpc2goXCJJY2UgQ3JlYW0gRXhwbG9zaW9uXCIsIFwiOS42MFwiLCBcIkRlc3NlcnRzXCIpO1xyXG5jb25zdCBsaW1lTW91c3NlID0gbmV3IG5ld0Rpc2goXCJMaW1lIE1vdXNzZVwiLCBcIjEwLjgwXCIsIFwiRGVzc2VydHNcIik7XHJcbmNvbnN0IHBlYWNoQ3J1bWJsZSA9IG5ldyBuZXdEaXNoKFwiUGVhY2ggQ3J1bWJsZVwiLCBcIjExLjIwXCIsIFwiRGVzc2VydHNcIik7XHJcbmNvbnN0IGNoZWVzZWNha2UgPSBuZXcgbmV3RGlzaChcIkJsYWNrYmVycnkgQ2hlZXNlY2FrZVwiLCBcIjEyLjgwXCIsIFwiRGVzc2VydHNcIik7XHJcblxyXG5jb25zdCB3aW5lID0gbmV3IG5ld0Rpc2goXHJcbiAgXCJHbGFzcyBvZiB3aW5lXCIsXHJcbiAgXCIxMi42MFwiLFxyXG4gIFwiRHJpbmtzXCIsXHJcbiAgXCJzcGFya2xpbmcsIHJvc8OpLCByZWQsIHdoaXRlXCJcclxuKTtcclxuY29uc3QgYmVlciA9IG5ldyBuZXdEaXNoKFwiQmVlclwiLCBcIjguMzBcIiwgXCJEcmlua3NcIiwgXCJsYWdlciwgYWxlLCBjaWRlclwiKTtcclxuY29uc3Qgc29kYSA9IG5ldyBuZXdEaXNoKFwiU29kYVwiLCBcIjUuODBcIiwgXCJEcmlua3NcIiwgXCJjb2tlLCBwZXBzaSwgZmFudGFcIik7XHJcbmNvbnN0IHdhdGVyID0gbmV3IG5ld0Rpc2goXCJXYXRlclwiLCBcIm5vIGNoYXJnZVwiLCBcIkRyaW5rc1wiLCBcInNwYXJrbGluZywgc3RpbGxcIik7XHJcblxyXG5cclxuLy8gQ3JlYXRlIG1lbnUgb24gcGFnZSBcclxuY29uc3QgY3JlYXRlTWVudSA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICAvLyByZW1vdmUgY29udGVudCBmcm9tIGEgcHJldmlvdXMgcGFnZVxyXG4gIHdoaWxlIChjb250ZW50RGl2LmZpcnN0Q2hpbGQpIHtcclxuICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoY29udGVudERpdi5sYXN0Q2hpbGQpO1xyXG4gIH1cclxuICBjb250ZW50RGl2LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1tZW51XCIpO1xyXG5cclxuICAvLyBhZGQgcGFnZSB0aXRsZSBhbmQgY29udGFpbmVyXHJcbiAgY29uc3QgbWVudUgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIG1lbnVIMS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudUgxKTtcclxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xyXG5cclxuICAvLyBmaWxsIHRoZSBtZW51IHdpdGggY2F0ZWdvcmllc1xyXG4gIG1lbnUuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgY2F0ZWdvcnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2F0ZWdvcnlEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2F0ZWdvcnlcIik7XHJcbiAgICBjb25zdCBjYXRlZ29yeUgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY2F0ZWdvcnlIMi50ZXh0Q29udGVudCA9IGl0ZW0uY2F0ZWdvcnk7XHJcbiAgICBjYXRlZ29yeURpdi5hcHBlbmRDaGlsZChjYXRlZ29yeUgyKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlEaXYpO1xyXG5cclxuICAgIC8vIGZpbGwgdGhlIGNhdGVnb3JpZXMgd2l0aCBkaXNoZXNcclxuICAgIGZ1bmN0aW9uIGZpbGxDYXRlZ29yaWVzKCkge1xyXG4gICAgICBpdGVtLmRpc2hlcy5mb3JFYWNoKChkaXNoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGlzaC5uYW1lKTtcclxuICAgICAgICBjb25zdCBkaXNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXNoRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWRpc2hcIik7XHJcbiAgICAgICAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IGRpc2hQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgZGlzaERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXNoTmFtZS50ZXh0Q29udGVudCA9IGRpc2gubmFtZTtcclxuICAgICAgICBkaXNoUHJpY2UudGV4dENvbnRlbnQgPSBkaXNoLnByaWNlO1xyXG4gICAgICAgIGRpc2hEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRpc2guZGVzY3JpcHRpb247XHJcblxyXG4gICAgICAgIGRpc2hEaXYuYXBwZW5kQ2hpbGQoZGlzaE5hbWUpO1xyXG4gICAgICAgIGRpc2hEaXYuYXBwZW5kQ2hpbGQoZGlzaFByaWNlKTtcclxuICAgICAgICBkaXNoRGl2LmFwcGVuZENoaWxkKGRpc2hEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgY2F0ZWdvcnlEaXYuYXBwZW5kQ2hpbGQoZGlzaERpdik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZmlsbENhdGVnb3JpZXMoKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTtcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gSW1wb3J0c1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuaW1wb3J0IGNyZWF0ZUFib3V0IGZyb20gXCIuL2Fib3V0XCI7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG4vLyBOYXZpZ2F0aW9uXHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xyXG5jb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVIb21lKTtcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZU1lbnUpO1xyXG5tZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVDb250YWN0KTtcclxuY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG5jb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbmFib3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVBYm91dCk7XHJcbmFib3V0LnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xyXG5uYXYuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbm5hdi5hcHBlbmRDaGlsZChtZW51KTtcclxubmF2LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG5uYXYuYXBwZW5kQ2hpbGQoYWJvdXQpO1xyXG5ib2R5LmFwcGVuZENoaWxkKG5hdik7XHJcblxyXG4vLyBDb250ZW50XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb250ZW50LmlkID0gXCJjb250ZW50XCI7XHJcbmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbmNyZWF0ZUhvbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9