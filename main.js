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
nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(contact);
body.appendChild(nav);

// Content
const content = document.createElement("div");
content.id = "content";
body.appendChild(content);
(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3RUFBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUVBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDO0FBQzFCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDO0FBQzFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0SkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3FCO0FBQ3JCO0FBQ2dDO0FBQ0E7QUFDTTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZDQUFVO0FBQ3pDO0FBQ0EsK0JBQStCLDZDQUFVO0FBQ3pDO0FBQ0E7QUFDQSxrQ0FBa0MsZ0RBQWE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2ID4gYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItdG9wOiBibGFjayAycHggc29saWQ7XFxyXFxuICBib3JkZXItYm90dG9tOiBibGFjayAycHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYgPiBidXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gIGJvcmRlci10b3A6IG9yYW5nZXJlZCAycHggc29saWQ7XFxyXFxuICBib3JkZXItYm90dG9tOiBvcmFuZ2VyZWQgMnB4IHNvbGlkO1xcclxcbn1cXHJcXG4ubmF2ID4gYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiKDIsIDIsIDExOSk7XFxyXFxuICBib3JkZXItdG9wOiByZ2IoMiwgMiwgMTE5KSAycHggc29saWQ7XFxyXFxuICBib3JkZXItYm90dG9tOiByZ2IoMiwgMiwgMTE5KSAycHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5yZXN0LW5hbWUge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogI2NvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHdpZHRoOiAxMDAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4vKiAjY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufSAqL1xcclxcblxcclxcbi5jb250ZW50LWhvbWUge1xcclxcbiAgZGlzcGxheTogZ3JpZDsgXFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnBob3RvLW1haW4ge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MzNweDtcXHJcXG4gIGdyaWQtcm93OiAxIC8gNjtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNpZGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zaWRlID4gKiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1zaWRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdC1zdW1tYXJ5IHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWJ0biB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG4ge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWViNGFlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG46aG92ZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZXJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWJ0bjphY3RpdmUge1xcclxcbiAgY29sb3I6IHJnYigyLCAyLCAxMTkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzcyB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ub3BlbmluZy1ob3VycyB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYSwuZm9vdGVyIGE6dmlzaXRlZCB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGE6YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMiwgMiwgMTE5KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVudS5qcyAqL1xcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhdGVnb3J5IHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIG1hcmdpbjogMCA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1kaXNoIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7IFxcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgZG90dGVkO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1kaXNoIGRpdjpmaXJzdC1jaGlsZCB7ICBcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZGlzaCBkaXY6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250YWN0LmpzICovXFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7IFxcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MDBweCBhdXRvO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5waG9uZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvdG8tY29udGFjdCB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxufSBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0Isa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBOzs7Ozs7OztHQVFHOztBQUVIOzs7R0FHRzs7QUFFSDtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBLGVBQWU7O0FBRWY7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLFFBQVE7RUFDUixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiA+IGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXRvcDogYmxhY2sgMnB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2ID4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICBib3JkZXItdG9wOiBvcmFuZ2VyZWQgMnB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogb3JhbmdlcmVkIDJweCBzb2xpZDtcXHJcXG59XFxyXFxuLm5hdiA+IGJ1dHRvbjphY3RpdmUge1xcclxcbiAgY29sb3I6IHJnYigyLCAyLCAxMTkpO1xcclxcbiAgYm9yZGVyLXRvcDogcmdiKDIsIDIsIDExOSkgMnB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogcmdiKDIsIDIsIDExOSkgMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdC1uYW1lIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qICNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB3aWR0aDogMTAwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59ICovXFxyXFxuXFxyXFxuLyogI2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uY29udGVudC1ob21lIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7IFxcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5waG90by1tYWluIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogNTMzcHg7XFxyXFxuICBncmlkLXJvdzogMSAvIDY7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zaWRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2lkZSA+ICoge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtc2lkZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3Qtc3VtbWFyeSB7XFxyXFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG4ge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRuIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllYjRhZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG46YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMiwgMiwgMTE5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3Mge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW5pbmctaG91cnMge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGEsLmZvb3RlciBhOnZpc2l0ZWQge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGE6aG92ZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZXJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBhOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiKDIsIDIsIDExOSk7XFxyXFxufVxcclxcblxcclxcbi8qIE1lbnUuanMgKi9cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXRlZ29yeSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBtYXJnaW46IDAgNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZGlzaCB7XFxyXFxuICBkaXNwbGF5OiBncmlkOyBcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIGRvdHRlZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZGlzaCBkaXY6Zmlyc3QtY2hpbGQgeyAgXFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWRpc2ggZGl2Om50aC1jaGlsZCgzKSB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGFjdC5qcyAqL1xcclxcblxcclxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkOyBcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAwcHggYXV0bztcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvbmUge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBob3RvLWNvbnRhY3Qge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbn0gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwaG90bzIgZnJvbSBcIi4vcGF0cmljay1zY2huZWlkZXItNXhsdFdNcGtOM0UtdW5zcGxhc2guanBnXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xyXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgICAvLyByZW1vdmUgY29udGVudCBmcm9tIGEgcHJldmlvdXMgcGFnZVxyXG4gICAgd2hpbGUgKGNvbnRlbnREaXYuZmlyc3RDaGlsZCkge1xyXG4gICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNvbnRlbnREaXYubGFzdENoaWxkKTtcclxuICAgIH1cclxuICAgIGNvbnRlbnREaXYuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtY29udGFjdFwiKTtcclxuXHJcbiAgICAvLyBhZGQgcGFnZSB0aXRsZSBhbmQgY29udGFpbmVyXHJcbiAgICBjb25zdCBjb250YWN0SDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBjb250YWN0SDEudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdEgxKTtcclxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XHJcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxlZnRTaWRlLmNsYXNzTGlzdC5hZGQoXCJsZWZ0LXNpZGVcIik7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRTaWRlKTtcclxuXHJcbiAgICBjb25zdCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJyaWdodC1zaWRlXCIpO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodFNpZGUpO1xyXG5cclxuICAgIC8vIHBob3RvXHJcbiAgICBjb25zdCBwaG90b0NvbnRhY3QgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHBob3RvQ29udGFjdC5zcmMgPSBwaG90bzI7XHJcbiAgICBwaG90b0NvbnRhY3QuY2xhc3NMaXN0LmFkZChcInBob3RvLWNvbnRhY3RcIik7XHJcbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQocGhvdG9Db250YWN0KTtcclxuXHJcbiAgICAvLyBmaWxsIHRoZSBwYWdlIHdpdGggZGF0YVxyXG4gICAgY29uc3QgY29udGFjdFBhcmFncmFwaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnRhY3RQYXJhZ3JhcGgxLnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleC5cIjtcclxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGNvbnRhY3RQYXJhZ3JhcGgxKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0UGFyYWdyYXBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29udGFjdFBhcmFncmFwaDIudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4LlwiO1xyXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoY29udGFjdFBhcmFncmFwaDIpO1xyXG5cclxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKFwiYWRkcmVzc1wiKTtcclxuICAgIGNvbnN0IGFkZHJlc3MxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZHJlc3MxLnRleHRDb250ZW50ID0gXCIzNTkgU3Vuc2hpbmUgQWxsZXksXCI7XHJcbiAgICBjb25zdCBhZGRyZXNzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhZGRyZXNzMi50ZXh0Q29udGVudCA9IFwiTmV3IFlvcmssIE5ZIDk5MjcxXCI7XHJcbiAgICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3MxKTtcclxuICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzczIpO1xyXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XHJcblxyXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZChcIm9wZW5pbmctaG91cnNcIik7XHJcbiAgICBjb25zdCBob3VyczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaG91cnMxLnRleHRDb250ZW50ID0gXCJNb24gLSBGcmk6IDEwYW0gLSA5cG1cIjtcclxuICAgIGNvbnN0IGhvdXJzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBob3VyczIudGV4dENvbnRlbnQgPSBcIlNhdCAtIFN1bjogMTBhbSAtIDExcG1cIjtcclxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGhvdXJzKTtcclxuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzMSk7XHJcbiAgICBob3Vycy5hcHBlbmRDaGlsZChob3VyczIpO1xyXG5cclxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBob25lLmNsYXNzTGlzdC5hZGQoXCJwaG9uZVwiKTtcclxuICAgIHBob25lLnRleHRDb250ZW50ID0gXCJDYWxsIHVzOiAxMjMgNDU2IDc4OVwiO1xyXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQocGhvbmUpO1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3Q7IiwiaW1wb3J0IHBob3RvMSBmcm9tIFwiLi9jaHJpcy1saXZlcmFuaS1vQ3NheHZHQ2VoTS11bnNwbGFzaC5qcGdcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZUhvbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gcmVtb3ZlIGNvbnRlbnQgZnJvbSBhIHByZXZpb3VzIHBhZ2VcclxuICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XHJcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcclxuICB9XHJcbiAgY29udGVudC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtaG9tZVwiKTtcclxuICBjb25zdCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChsZWZ0U2lkZSk7XHJcblxyXG4vLyBQaG90b1xyXG4gIGNvbnN0IHBob3RvTWFpbiA9IG5ldyBJbWFnZSgpO1xyXG4gIHBob3RvTWFpbi5zcmMgPSBwaG90bzE7XHJcbiAgcGhvdG9NYWluLmNsYXNzTGlzdC5hZGQoXCJwaG90by1tYWluXCIpO1xyXG4gIGxlZnRTaWRlLmFwcGVuZENoaWxkKHBob3RvTWFpbik7XHJcblxyXG5jb25zdCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKFwicmlnaHQtc2lkZVwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XHJcblxyXG4gIGNvbnN0IHJlc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZXN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicmVzdC1uYW1lXCIpO1xyXG4gIHJlc3ROYW1lLnRleHRDb250ZW50ID0gXCJUaGUgU2Vjb25kIFN1blwiO1xyXG4gIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChyZXN0TmFtZSk7XHJcblxyXG4gIGNvbnN0IHJlc3RTdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZXN0U3VtbWFyeS5jbGFzc0xpc3QuYWRkKFwicmVzdC1zdW1tYXJ5XCIpO1xyXG4gIHJlc3RTdW1tYXJ5LnRleHRDb250ZW50ID1cclxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXguIE9yZGVyIHlvdXIgZm9vZCBvbmxpbmUgb3IgdmlzaXQgb3VyIHBsYWNlIVwiO1xyXG4gIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChyZXN0U3VtbWFyeSk7XHJcblxyXG4gIGNvbnN0IG9yZGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBvcmRlckJ0bi5jbGFzc0xpc3QuYWRkKFwib3JkZXItYnRuXCIpO1xyXG4gIG9yZGVyQnRuLnRleHRDb250ZW50ID0gXCJPcmRlciBub3dcIjtcclxuICByaWdodFNpZGUuYXBwZW5kQ2hpbGQob3JkZXJCdG4pO1xyXG5cclxuIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImFkZHJlc3NcIik7XHJcbiAgY29uc3QgYWRkcmVzczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFkZHJlc3MxLnRleHRDb250ZW50ID0gXCIzNTkgU3Vuc2hpbmUgQWxsZXksXCI7XHJcbiAgY29uc3QgYWRkcmVzczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFkZHJlc3MyLnRleHRDb250ZW50ID0gXCJOZXcgWW9yaywgTlkgOTkyNzFcIjtcclxuICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3MxKTtcclxuICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3MyKTtcclxuICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XHJcblxyXG5cclxuY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJvcGVuaW5nLWhvdXJzXCIpO1xyXG4gIGNvbnN0IGhvdXJzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG91cnMxLnRleHRDb250ZW50ID0gXCJNb24gLSBGcmk6IDEwYW0gLSA5cG1cIjtcclxuICBjb25zdCBob3VyczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvdXJzMi50ZXh0Q29udGVudCA9IFwiU2F0IC0gU3VuOiAxMGFtIC0gMTFwbVwiO1xyXG4gIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChob3Vycyk7XHJcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnMxKTtcclxuICBob3Vycy5hcHBlbmRDaGlsZChob3VyczIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTtcclxuXHJcblxyXG5cclxuIiwibGV0IG1lbnUgPSBbXTtcclxuXHJcbmNsYXNzIG5ld0NhdGVnb3J5IHtcclxuICBjb25zdHJ1Y3RvcihjYXRlZ29yeSkge1xyXG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgdGhpcy5kaXNoZXMgPSBbXTtcclxuICAgIG1lbnUucHVzaCh0aGlzKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIG5ld0Rpc2gge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBjYXRlZ29yeSwgZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICBjb25zdCBtZW51Q2F0ZWdvcnkgPSBtZW51LmZpbmRJbmRleChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkgPT0gdGhpcy5jYXRlZ29yeVxyXG4gICAgKTtcclxuICAgIG1lbnVbbWVudUNhdGVnb3J5XS5kaXNoZXMucHVzaCh0aGlzKTtcclxuICAgIC8vbWVudS5tZW51Q2F0ZWdvcnkucHVzaCh0aGlzKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBDYXRlZ29yaWVzICovXHJcbmxldCBzdGFydGVycyA9IG5ldyBuZXdDYXRlZ29yeShcIlN0YXJ0ZXJzXCIpO1xyXG5sZXQgbWFpbnMgPSBuZXcgbmV3Q2F0ZWdvcnkoXCJNYWluIERpc2hlc1wiKTtcclxubGV0IHNpZGVzID0gbmV3IG5ld0NhdGVnb3J5KFwiU2lkZXNcIik7XHJcbmxldCBkZXNzZXJ0cyA9IG5ldyBuZXdDYXRlZ29yeShcIkRlc3NlcnRzXCIpO1xyXG5sZXQgZHJpbmtzID0gbmV3IG5ld0NhdGVnb3J5KFwiRHJpbmtzXCIpO1xyXG5cclxuLyogRGlzaGVzICovXHJcbmNvbnN0IGZpc2hDaGlwcyA9IG5ldyBuZXdEaXNoKFwiRmlzaCBhbmQgY2hpcHNcIiwgXCIxMi44MFwiLCBcIlN0YXJ0ZXJzXCIpO1xyXG5jb25zdCB0dW5hQm93bCA9IG5ldyBuZXdEaXNoKFwiVHVuYSBib3dsXCIsIFwiMTEuMjBcIiwgXCJTdGFydGVyc1wiKTtcclxuY29uc3QgcHJvc2NpdXR0byA9IG5ldyBuZXdEaXNoKFxyXG4gIFwiUHJvc2NpdXR0byB3cmFwcGVkIG1venphcmVsbGFcIixcclxuICBcIjEwLjQwXCIsXHJcbiAgXCJTdGFydGVyc1wiXHJcbik7XHJcbmNvbnN0IHNocmltcCA9IG5ldyBuZXdEaXNoKFwiU2hyaW1wIGNvY2t0YWlsXCIsIFwiMTIuMTBcIiwgXCJTdGFydGVyc1wiKTtcclxuXHJcbmNvbnN0IHNpcmxvaW4gPSBuZXcgbmV3RGlzaChcclxuICBcIkNsYXNzaWMgc2lybG9pblwiLFxyXG4gIFwiMjguMjBcIixcclxuICBcIk1haW4gRGlzaGVzXCIsXHJcbiAgXCJ3aXRoIGNyZWFtZWQgc3BpbmFjaFwiXHJcbik7XHJcbmNvbnN0IGNoaWNrZW5DYXNzID0gbmV3IG5ld0Rpc2goXHJcbiAgXCJTcGljeSBjaGlja2VuIGNhc3Nlcm9sZVwiLFxyXG4gIFwiMjUuMzBcIixcclxuICBcIk1haW4gRGlzaGVzXCIsXHJcbiAgXCJ3aXRoIHN3ZWV0IHBvdGF0b2VzIGFuZCBiYWJ5IGNhcnJvdHNcIlxyXG4pO1xyXG5jb25zdCBzcGFnaGV0dGkgPSBuZXcgbmV3RGlzaChcclxuICBcIlNwYWdoZXR0aVwiLFxyXG4gIFwiMjQuMTBcIixcclxuICBcIk1haW4gRGlzaGVzXCIsXHJcbiAgXCJ3aXRoIG1lYXRiYWxsc1wiXHJcbik7XHJcbmNvbnN0IHNhbG1vbiA9IG5ldyBuZXdEaXNoKFxyXG4gIFwiR3JpbGxlZCBzYWxtb25cIixcclxuICBcIjMwLjkwXCIsXHJcbiAgXCJNYWluIERpc2hlc1wiLFxyXG4gIFwid2l0aCBmcmVzaCBhc3BhcmFndXNcIlxyXG4pO1xyXG5jb25zdCBjcmFiQ2FrZXMgPSBuZXcgbmV3RGlzaChcclxuICBcIkNyYWIgY2FrZXNcIixcclxuICBcIjI3LjMwXCIsXHJcbiAgXCJNYWluIERpc2hlc1wiLFxyXG4gIFwid2l0aCB0b21hdG8gc2FsYWRcIlxyXG4pO1xyXG5cclxuY29uc3Qgb25pb25SaW5ncyA9IG5ldyBuZXdEaXNoKFwiT25pb24gcmluZ3NcIiwgXCI5LjIwXCIsIFwiU2lkZXNcIik7XHJcbmNvbnN0IGJha2VzUG90YXRvZXMgPSBuZXcgbmV3RGlzaChcIkJha2VkIHBvdGF0b2VzXCIsIFwiNy42MFwiLCBcIlNpZGVzXCIpO1xyXG5jb25zdCBrYWxlID0gbmV3IG5ld0Rpc2goXCJLYWxlIHNhbGFkXCIsIFwiOC45MFwiLCBcIlNpZGVzXCIpO1xyXG5jb25zdCBjZWFzYXIgPSBuZXcgbmV3RGlzaChcIkNlYXNhciBzYWxhZFwiLCBcIjcuNjBcIiwgXCJTaWRlc1wiKTtcclxuY29uc3QgdG9tYXRvU291cCA9IG5ldyBuZXdEaXNoKFwiVG9tYXRvIHNvdXBcIiwgXCI1LjkwXCIsIFwiU2lkZXNcIik7XHJcbmNvbnN0IHp1Y2NoaW5pU291cCA9IG5ldyBuZXdEaXNoKFwiWnVjY2hpbmkgc291cFwiLCBcIjYuNTBcIiwgXCJTaWRlc1wiKTtcclxuXHJcbmNvbnN0IGNob2NvbGF0ZUNha2UgPSBuZXcgbmV3RGlzaChcIkNob2NvbGF0ZSBjYWtlXCIsIFwiMTAuMjBcIiwgXCJEZXNzZXJ0c1wiKTtcclxuY29uc3QgY2Fycm90Q2FrZSA9IG5ldyBuZXdEaXNoKFwiQ2Fycm90IGNha2VcIiwgXCIxMi4xMFwiLCBcIkRlc3NlcnRzXCIpO1xyXG5jb25zdCBpY2VDcmVhbSA9IG5ldyBuZXdEaXNoKFwiSWNlIENyZWFtIEV4cGxvc2lvblwiLCBcIjkuNjBcIiwgXCJEZXNzZXJ0c1wiKTtcclxuY29uc3QgbGltZU1vdXNzZSA9IG5ldyBuZXdEaXNoKFwiTGltZSBNb3Vzc2VcIiwgXCIxMC44MFwiLCBcIkRlc3NlcnRzXCIpO1xyXG5jb25zdCBwZWFjaENydW1ibGUgPSBuZXcgbmV3RGlzaChcIlBlYWNoIENydW1ibGVcIiwgXCIxMS4yMFwiLCBcIkRlc3NlcnRzXCIpO1xyXG5jb25zdCBjaGVlc2VjYWtlID0gbmV3IG5ld0Rpc2goXCJCbGFja2JlcnJ5IENoZWVzZWNha2VcIiwgXCIxMi44MFwiLCBcIkRlc3NlcnRzXCIpO1xyXG5cclxuY29uc3Qgd2luZSA9IG5ldyBuZXdEaXNoKFxyXG4gIFwiR2xhc3Mgb2Ygd2luZVwiLFxyXG4gIFwiMTIuNjBcIixcclxuICBcIkRyaW5rc1wiLFxyXG4gIFwic3BhcmtsaW5nLCByb3PDqSwgcmVkLCB3aGl0ZVwiXHJcbik7XHJcbmNvbnN0IGJlZXIgPSBuZXcgbmV3RGlzaChcIkJlZXJcIiwgXCI4LjMwXCIsIFwiRHJpbmtzXCIsIFwibGFnZXIsIGFsZSwgY2lkZXJcIik7XHJcbmNvbnN0IHNvZGEgPSBuZXcgbmV3RGlzaChcIlNvZGFcIiwgXCI1LjgwXCIsIFwiRHJpbmtzXCIsIFwiY29rZSwgcGVwc2ksIGZhbnRhXCIpO1xyXG5jb25zdCB3YXRlciA9IG5ldyBuZXdEaXNoKFwiV2F0ZXJcIiwgXCJubyBjaGFyZ2VcIiwgXCJEcmlua3NcIiwgXCJzcGFya2xpbmcsIHN0aWxsXCIpO1xyXG5cclxuXHJcbi8vIENyZWF0ZSBtZW51IG9uIHBhZ2UgXHJcbmNvbnN0IGNyZWF0ZU1lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgLy8gcmVtb3ZlIGNvbnRlbnQgZnJvbSBhIHByZXZpb3VzIHBhZ2VcclxuICB3aGlsZSAoY29udGVudERpdi5maXJzdENoaWxkKSB7XHJcbiAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNvbnRlbnREaXYubGFzdENoaWxkKTtcclxuICB9XHJcbiAgY29udGVudERpdi5jbGFzc05hbWUgPSBcIlwiO1xyXG4gIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtbWVudVwiKTtcclxuXHJcbiAgLy8gYWRkIHBhZ2UgdGl0bGUgYW5kIGNvbnRhaW5lclxyXG4gIGNvbnN0IG1lbnVIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBtZW51SDEudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVIMSk7XHJcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcclxuXHJcbiAgLy8gZmlsbCB0aGUgbWVudSB3aXRoIGNhdGVnb3JpZXNcclxuICBtZW51LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGNhdGVnb3J5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhdGVnb3J5RGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhdGVnb3J5XCIpO1xyXG4gICAgY29uc3QgY2F0ZWdvcnlIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGNhdGVnb3J5SDIudGV4dENvbnRlbnQgPSBpdGVtLmNhdGVnb3J5O1xyXG4gICAgY2F0ZWdvcnlEaXYuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlIMik7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5RGl2KTtcclxuXHJcbiAgICAvLyBmaWxsIHRoZSBjYXRlZ29yaWVzIHdpdGggZGlzaGVzXHJcbiAgICBmdW5jdGlvbiBmaWxsQ2F0ZWdvcmllcygpIHtcclxuICAgICAgaXRlbS5kaXNoZXMuZm9yRWFjaCgoZGlzaCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRpc2gubmFtZSk7XHJcbiAgICAgICAgY29uc3QgZGlzaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGlzaERpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1kaXNoXCIpO1xyXG4gICAgICAgIGNvbnN0IGRpc2hOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBkaXNoUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IGRpc2hEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGlzaE5hbWUudGV4dENvbnRlbnQgPSBkaXNoLm5hbWU7XHJcbiAgICAgICAgZGlzaFByaWNlLnRleHRDb250ZW50ID0gZGlzaC5wcmljZTtcclxuICAgICAgICBkaXNoRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkaXNoLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICBkaXNoRGl2LmFwcGVuZENoaWxkKGRpc2hOYW1lKTtcclxuICAgICAgICBkaXNoRGl2LmFwcGVuZENoaWxkKGRpc2hQcmljZSk7XHJcbiAgICAgICAgZGlzaERpdi5hcHBlbmRDaGlsZChkaXNoRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGNhdGVnb3J5RGl2LmFwcGVuZENoaWxkKGRpc2hEaXYpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGZpbGxDYXRlZ29yaWVzKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIEltcG9ydHNcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG4vLyBOYXZpZ2F0aW9uXHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xyXG5jb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVIb21lKTtcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZU1lbnUpO1xyXG5tZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVDb250YWN0KTtcclxuY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG5uYXYuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbm5hdi5hcHBlbmRDaGlsZChtZW51KTtcclxubmF2LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG5ib2R5LmFwcGVuZENoaWxkKG5hdik7XHJcblxyXG4vLyBDb250ZW50XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb250ZW50LmlkID0gXCJjb250ZW50XCI7XHJcbmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbmNyZWF0ZUhvbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9