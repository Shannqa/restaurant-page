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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.nav > button {\r\n  background: none;\r\n  font-size: 1.3rem;\r\n  font-weight: 800;\r\n  border: none;\r\n  border-top: black 2px solid;\r\n  border-bottom: black 2px solid;\r\n}\r\n\r\n.nav > button:hover {\r\n  color: orangered;\r\n  border-top: orangered 2px solid;\r\n  border-bottom: orangered 2px solid;\r\n}\r\n.nav > button:active {\r\n  color: rgb(2, 2, 119);\r\n  border-top: rgb(2, 2, 119) 2px solid;\r\n  border-bottom: rgb(2, 2, 119) 2px solid;\r\n}\r\n\r\n.rest-name {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-size: 2rem;\r\n  align-self: center;\r\n}\r\n\r\n/* #content {\r\n  display: grid;\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n  grid-template-columns: auto auto;\r\n  gap: 5px;\r\n  justify-items: center;\r\n  align-items: center;\r\n} */\r\n\r\n/* #content {\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n} */\r\n\r\n.content-home {\r\n  display: grid; \r\n  grid-template-columns: auto auto;\r\n  gap: 5px;\r\n  justify-items: center;\r\n  align-items: center;\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.photo-main {\r\n  width: 400px;\r\n  height: 533px;\r\n  grid-row: 1 / 6;\r\n}\r\n\r\n.right-side {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.right-side > * {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.left-side {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.rest-summary {\r\n  grid-column: 2 / 3;\r\n  width: 500px;\r\n}\r\n\r\n.order-btn {\r\n  width: 100px;\r\n  height: 50px;\r\n}\r\n\r\n.order-btn {\r\n  width: 150px;\r\n  height: 2.5rem;\r\n  background-color: #9eb4ae;\r\n  border: none;\r\n  border-radius: 20px;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  align-self: center;\r\n}\r\n\r\n.order-btn:hover {\r\n  color: orangered;\r\n}\r\n\r\n.order-btn:active {\r\n  color: rgb(2, 2, 119);\r\n}\r\n\r\n.address {\r\n  align-self: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.opening-hours {\r\n  align-self: center;\r\n}\r\n\r\n.footer {\r\n  margin: 10px 0;\r\n}\r\n\r\n.footer a,.footer a:visited {\r\n  color: black;\r\n}\r\n\r\n.footer a:hover {\r\n  color: orangered;\r\n}\r\n\r\n.footer a:active {\r\n  color: rgb(2, 2, 119);\r\n}\r\n\r\n/* Menu.js */\r\n\r\n.menu-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\nh2 {\r\n  text-decoration: underline;\r\n}\r\n\r\n.menu-category {\r\n  width: 400px;\r\n  margin: 0 40px;\r\n}\r\n\r\n.menu-dish {\r\n  display: grid; \r\n  grid-template-columns: auto auto;\r\n  justify-content: space-between;\r\n  border-bottom: 1px black dotted;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n.menu-dish div:first-child {  \r\n  font-weight: 800;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.menu-dish div:nth-child(3) {\r\n  font-style: italic;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n/* Contact.js */\r\n\r\n.contact-container {\r\n  display: grid; \r\n  grid-template-columns: 500px auto;\r\n  gap: 5px;\r\n  justify-items: center;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.phone {\r\n  align-self: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.photo-contact {\r\n  width: 300px;\r\n} \r\n\r\n/* About.js */\r\na, a:visited {\r\n  color: black;\r\n}\r\n\r\na:hover {\r\n  color: orangered;\r\n}\r\n\r\na:active {\r\n  color: rgb(2, 2, 119);\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,mDAAmD;AACrD;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,+BAA+B;EAC/B,kCAAkC;AACpC;AACA;EACE,qBAAqB;EACrB,oCAAoC;EACpC,uCAAuC;AACzC;;AAEA;EACE,qCAAqC;EACrC,eAAe;EACf,kBAAkB;AACpB;;AAEA;;;;;;;;GAQG;;AAEH;;;GAGG;;AAEH;EACE,aAAa;EACb,gCAAgC;EAChC,QAAQ;EACR,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,YAAY;;AAEZ;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,8BAA8B;EAC9B,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA,eAAe;;AAEf;EACE,aAAa;EACb,iCAAiC;EACjC,QAAQ;EACR,qBAAqB;EACrB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA,aAAa;AACb;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.nav > button {\r\n  background: none;\r\n  font-size: 1.3rem;\r\n  font-weight: 800;\r\n  border: none;\r\n  border-top: black 2px solid;\r\n  border-bottom: black 2px solid;\r\n}\r\n\r\n.nav > button:hover {\r\n  color: orangered;\r\n  border-top: orangered 2px solid;\r\n  border-bottom: orangered 2px solid;\r\n}\r\n.nav > button:active {\r\n  color: rgb(2, 2, 119);\r\n  border-top: rgb(2, 2, 119) 2px solid;\r\n  border-bottom: rgb(2, 2, 119) 2px solid;\r\n}\r\n\r\n.rest-name {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-size: 2rem;\r\n  align-self: center;\r\n}\r\n\r\n/* #content {\r\n  display: grid;\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n  grid-template-columns: auto auto;\r\n  gap: 5px;\r\n  justify-items: center;\r\n  align-items: center;\r\n} */\r\n\r\n/* #content {\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n} */\r\n\r\n.content-home {\r\n  display: grid; \r\n  grid-template-columns: auto auto;\r\n  gap: 5px;\r\n  justify-items: center;\r\n  align-items: center;\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.photo-main {\r\n  width: 400px;\r\n  height: 533px;\r\n  grid-row: 1 / 6;\r\n}\r\n\r\n.right-side {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.right-side > * {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.left-side {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.rest-summary {\r\n  grid-column: 2 / 3;\r\n  width: 500px;\r\n}\r\n\r\n.order-btn {\r\n  width: 100px;\r\n  height: 50px;\r\n}\r\n\r\n.order-btn {\r\n  width: 150px;\r\n  height: 2.5rem;\r\n  background-color: #9eb4ae;\r\n  border: none;\r\n  border-radius: 20px;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  align-self: center;\r\n}\r\n\r\n.order-btn:hover {\r\n  color: orangered;\r\n}\r\n\r\n.order-btn:active {\r\n  color: rgb(2, 2, 119);\r\n}\r\n\r\n.address {\r\n  align-self: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.opening-hours {\r\n  align-self: center;\r\n}\r\n\r\n.footer {\r\n  margin: 10px 0;\r\n}\r\n\r\n.footer a,.footer a:visited {\r\n  color: black;\r\n}\r\n\r\n.footer a:hover {\r\n  color: orangered;\r\n}\r\n\r\n.footer a:active {\r\n  color: rgb(2, 2, 119);\r\n}\r\n\r\n/* Menu.js */\r\n\r\n.menu-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\nh2 {\r\n  text-decoration: underline;\r\n}\r\n\r\n.menu-category {\r\n  width: 400px;\r\n  margin: 0 40px;\r\n}\r\n\r\n.menu-dish {\r\n  display: grid; \r\n  grid-template-columns: auto auto;\r\n  justify-content: space-between;\r\n  border-bottom: 1px black dotted;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n.menu-dish div:first-child {  \r\n  font-weight: 800;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.menu-dish div:nth-child(3) {\r\n  font-style: italic;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n/* Contact.js */\r\n\r\n.contact-container {\r\n  display: grid; \r\n  grid-template-columns: 500px auto;\r\n  gap: 5px;\r\n  justify-items: center;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.phone {\r\n  align-self: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.photo-contact {\r\n  width: 300px;\r\n} \r\n\r\n/* About.js */\r\na, a:visited {\r\n  color: black;\r\n}\r\n\r\na:hover {\r\n  color: orangered;\r\n}\r\n\r\na:active {\r\n  color: rgb(2, 2, 119);\r\n}\r\n\r\n"],"sourceRoot":""}]);
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

    const spanAuthor = document.createElement("span");
    const aAuthor = document.createElement("a");
    const h2 = document.createElement("h2");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");

    spanAuthor.textContent = "Website created by Shannqa. Check out ";
    aAuthor.textContent = "my other projects."
    aAuthor.setAttribute("href", "https://shannqa.github.io/homepage/index.html");
    h2.textContent = "Resources";

    const resPhoto1 = document.createElement("a");
    resPhoto1.setAttribute("href", "https://unsplash.com/@patrick_schneider?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash");
    resPhoto1.textContent = "Photo by Patrick Schneider from Unsplash";

    const resPhoto2 = document.createElement("a");
    resPhoto2.setAttribute("href", "https://unsplash.com/@chrisliverani?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash");
    resPhoto2.textContent = "Photo by Chris Liverani from Unsplash";

    li1.appendChild(resPhoto1);
    li2.appendChild(resPhoto2);
    ul.appendChild(li1);
    ul.appendChild(li2);
    aboutContainer.appendChild(spanAuthor);
    aboutContainer.appendChild(aAuthor);
    aboutContainer.appendChild(h2);
    aboutContainer.appendChild(ul);
    contentDiv.appendChild(aboutContainer);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDL0NvQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdFQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDdkVtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxRUFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7QUFDMUI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7QUFDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3FCO0FBQ3JCO0FBQ2dDO0FBQ0E7QUFDTTtBQUNKO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkNBQVU7QUFDekM7QUFDQSwrQkFBK0IsNkNBQVU7QUFDekM7QUFDQTtBQUNBLGtDQUFrQyxnREFBYTtBQUMvQztBQUNBO0FBQ0EsZ0NBQWdDLDhDQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiA+IGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXRvcDogYmxhY2sgMnB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2ID4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICBib3JkZXItdG9wOiBvcmFuZ2VyZWQgMnB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogb3JhbmdlcmVkIDJweCBzb2xpZDtcXHJcXG59XFxyXFxuLm5hdiA+IGJ1dHRvbjphY3RpdmUge1xcclxcbiAgY29sb3I6IHJnYigyLCAyLCAxMTkpO1xcclxcbiAgYm9yZGVyLXRvcDogcmdiKDIsIDIsIDExOSkgMnB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogcmdiKDIsIDIsIDExOSkgMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdC1uYW1lIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qICNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB3aWR0aDogMTAwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59ICovXFxyXFxuXFxyXFxuLyogI2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uY29udGVudC1ob21lIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7IFxcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5waG90by1tYWluIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogNTMzcHg7XFxyXFxuICBncmlkLXJvdzogMSAvIDY7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zaWRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2lkZSA+ICoge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtc2lkZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3Qtc3VtbWFyeSB7XFxyXFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG4ge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRuIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllYjRhZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG46YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMiwgMiwgMTE5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3Mge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW5pbmctaG91cnMge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGEsLmZvb3RlciBhOnZpc2l0ZWQge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGE6aG92ZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZXJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBhOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiKDIsIDIsIDExOSk7XFxyXFxufVxcclxcblxcclxcbi8qIE1lbnUuanMgKi9cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXRlZ29yeSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBtYXJnaW46IDAgNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZGlzaCB7XFxyXFxuICBkaXNwbGF5OiBncmlkOyBcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIGRvdHRlZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZGlzaCBkaXY6Zmlyc3QtY2hpbGQgeyAgXFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWRpc2ggZGl2Om50aC1jaGlsZCgzKSB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGFjdC5qcyAqL1xcclxcblxcclxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkOyBcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAwcHggYXV0bztcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvbmUge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBob3RvLWNvbnRhY3Qge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbn0gXFxyXFxuXFxyXFxuLyogQWJvdXQuanMgKi9cXHJcXG5hLCBhOnZpc2l0ZWQge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxufVxcclxcblxcclxcbmE6YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMiwgMiwgMTE5KTtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7Ozs7R0FRRzs7QUFFSDs7O0dBR0c7O0FBRUg7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLFFBQVE7RUFDUixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxZQUFZOztBQUVaO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxhQUFhO0FBQ2I7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2ID4gYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItdG9wOiBibGFjayAycHggc29saWQ7XFxyXFxuICBib3JkZXItYm90dG9tOiBibGFjayAycHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYgPiBidXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gIGJvcmRlci10b3A6IG9yYW5nZXJlZCAycHggc29saWQ7XFxyXFxuICBib3JkZXItYm90dG9tOiBvcmFuZ2VyZWQgMnB4IHNvbGlkO1xcclxcbn1cXHJcXG4ubmF2ID4gYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiKDIsIDIsIDExOSk7XFxyXFxuICBib3JkZXItdG9wOiByZ2IoMiwgMiwgMTE5KSAycHggc29saWQ7XFxyXFxuICBib3JkZXItYm90dG9tOiByZ2IoMiwgMiwgMTE5KSAycHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5yZXN0LW5hbWUge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogI2NvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHdpZHRoOiAxMDAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4vKiAjY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufSAqL1xcclxcblxcclxcbi5jb250ZW50LWhvbWUge1xcclxcbiAgZGlzcGxheTogZ3JpZDsgXFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnBob3RvLW1haW4ge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MzNweDtcXHJcXG4gIGdyaWQtcm93OiAxIC8gNjtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNpZGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zaWRlID4gKiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1zaWRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdC1zdW1tYXJ5IHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWJ0biB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG4ge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWViNGFlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG46aG92ZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZXJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWJ0bjphY3RpdmUge1xcclxcbiAgY29sb3I6IHJnYigyLCAyLCAxMTkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzcyB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ub3BlbmluZy1ob3VycyB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYSwuZm9vdGVyIGE6dmlzaXRlZCB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGE6YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMiwgMiwgMTE5KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVudS5qcyAqL1xcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhdGVnb3J5IHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIG1hcmdpbjogMCA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1kaXNoIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7IFxcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgZG90dGVkO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1kaXNoIGRpdjpmaXJzdC1jaGlsZCB7ICBcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZGlzaCBkaXY6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250YWN0LmpzICovXFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7IFxcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MDBweCBhdXRvO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5waG9uZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvdG8tY29udGFjdCB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxufSBcXHJcXG5cXHJcXG4vKiBBYm91dC5qcyAqL1xcclxcbmEsIGE6dmlzaXRlZCB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmE6aG92ZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZXJlZDtcXHJcXG59XFxyXFxuXFxyXFxuYTphY3RpdmUge1xcclxcbiAgY29sb3I6IHJnYigyLCAyLCAxMTkpO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlQWJvdXQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICAgIC8vIHJlbW92ZSBjb250ZW50IGZyb20gYSBwcmV2aW91cyBwYWdlXHJcbiAgICB3aGlsZSAoY29udGVudERpdi5maXJzdENoaWxkKSB7XHJcbiAgICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoY29udGVudERpdi5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgY29udGVudERpdi5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1hYm91dFwiKTtcclxuXHJcbiAgICAvLyBhZGQgcGFnZSB0aXRsZSBhbmQgY29udGFpbmVyXHJcbiAgICBjb25zdCBhYm91dEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgYWJvdXRIMS50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWJvdXRIMSk7XHJcbiAgICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IHNwYW5BdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGNvbnN0IGFBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG4gICAgc3BhbkF1dGhvci50ZXh0Q29udGVudCA9IFwiV2Vic2l0ZSBjcmVhdGVkIGJ5IFNoYW5ucWEuIENoZWNrIG91dCBcIjtcclxuICAgIGFBdXRob3IudGV4dENvbnRlbnQgPSBcIm15IG90aGVyIHByb2plY3RzLlwiXHJcbiAgICBhQXV0aG9yLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3NoYW5ucWEuZ2l0aHViLmlvL2hvbWVwYWdlL2luZGV4Lmh0bWxcIik7XHJcbiAgICBoMi50ZXh0Q29udGVudCA9IFwiUmVzb3VyY2VzXCI7XHJcblxyXG4gICAgY29uc3QgcmVzUGhvdG8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICByZXNQaG90bzEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vdW5zcGxhc2guY29tL0BwYXRyaWNrX3NjaG5laWRlcj91dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dW5zcGxhc2hcIik7XHJcbiAgICByZXNQaG90bzEudGV4dENvbnRlbnQgPSBcIlBob3RvIGJ5IFBhdHJpY2sgU2NobmVpZGVyIGZyb20gVW5zcGxhc2hcIjtcclxuXHJcbiAgICBjb25zdCByZXNQaG90bzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIHJlc1Bob3RvMi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGNocmlzbGl2ZXJhbmk/dXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHQmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fc291cmNlPXVuc3BsYXNoXCIpO1xyXG4gICAgcmVzUGhvdG8yLnRleHRDb250ZW50ID0gXCJQaG90byBieSBDaHJpcyBMaXZlcmFuaSBmcm9tIFVuc3BsYXNoXCI7XHJcblxyXG4gICAgbGkxLmFwcGVuZENoaWxkKHJlc1Bob3RvMSk7XHJcbiAgICBsaTIuYXBwZW5kQ2hpbGQocmVzUGhvdG8yKTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpMSk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaTIpO1xyXG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhbkF1dGhvcik7XHJcbiAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhQXV0aG9yKTtcclxuICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGgyKTtcclxuICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHVsKTtcclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xyXG59XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjcmVhdGVBYm91dDsiLCJpbXBvcnQgcGhvdG8yIGZyb20gXCIuL3BhdHJpY2stc2NobmVpZGVyLTV4bHRXTXBrTjNFLXVuc3BsYXNoLmpwZ1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gICAgLy8gcmVtb3ZlIGNvbnRlbnQgZnJvbSBhIHByZXZpb3VzIHBhZ2VcclxuICAgIHdoaWxlIChjb250ZW50RGl2LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgY29udGVudERpdi5yZW1vdmVDaGlsZChjb250ZW50RGl2Lmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICBjb250ZW50RGl2LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWNvbnRhY3RcIik7XHJcblxyXG4gICAgLy8gYWRkIHBhZ2UgdGl0bGUgYW5kIGNvbnRhaW5lclxyXG4gICAgY29uc3QgY29udGFjdEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgY29udGFjdEgxLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RIMSk7XHJcbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY29udGFpbmVyXCIpO1xyXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZWZ0U2lkZS5jbGFzc0xpc3QuYWRkKFwibGVmdC1zaWRlXCIpO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0U2lkZSk7XHJcblxyXG4gICAgY29uc3QgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKFwicmlnaHQtc2lkZVwiKTtcclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRTaWRlKTtcclxuXHJcbiAgICAvLyBwaG90b1xyXG4gICAgY29uc3QgcGhvdG9Db250YWN0ID0gbmV3IEltYWdlKCk7XHJcbiAgICBwaG90b0NvbnRhY3Quc3JjID0gcGhvdG8yO1xyXG4gICAgcGhvdG9Db250YWN0LmNsYXNzTGlzdC5hZGQoXCJwaG90by1jb250YWN0XCIpO1xyXG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHBob3RvQ29udGFjdCk7XHJcblxyXG4gICAgLy8gZmlsbCB0aGUgcGFnZSB3aXRoIGRhdGFcclxuICAgIGNvbnN0IGNvbnRhY3RQYXJhZ3JhcGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb250YWN0UGFyYWdyYXBoMS50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXguXCI7XHJcbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChjb250YWN0UGFyYWdyYXBoMSk7XHJcblxyXG4gICAgY29uc3QgY29udGFjdFBhcmFncmFwaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnRhY3RQYXJhZ3JhcGgyLnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleC5cIjtcclxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGNvbnRhY3RQYXJhZ3JhcGgyKTtcclxuXHJcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImFkZHJlc3NcIik7XHJcbiAgICBjb25zdCBhZGRyZXNzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhZGRyZXNzMS50ZXh0Q29udGVudCA9IFwiMzU5IFN1bnNoaW5lIEFsbGV5LFwiO1xyXG4gICAgY29uc3QgYWRkcmVzczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkcmVzczIudGV4dENvbnRlbnQgPSBcIk5ldyBZb3JrLCBOWSA5OTI3MVwiO1xyXG4gICAgYWRkcmVzcy5hcHBlbmRDaGlsZChhZGRyZXNzMSk7XHJcbiAgICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3MyKTtcclxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xyXG5cclxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJvcGVuaW5nLWhvdXJzXCIpO1xyXG4gICAgY29uc3QgaG91cnMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvdXJzMS50ZXh0Q29udGVudCA9IFwiTW9uIC0gRnJpOiAxMGFtIC0gOXBtXCI7XHJcbiAgICBjb25zdCBob3VyczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaG91cnMyLnRleHRDb250ZW50ID0gXCJTYXQgLSBTdW46IDEwYW0gLSAxMXBtXCI7XHJcbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChob3Vycyk7XHJcbiAgICBob3Vycy5hcHBlbmRDaGlsZChob3VyczEpO1xyXG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnMyKTtcclxuXHJcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwaG9uZS5jbGFzc0xpc3QuYWRkKFwicGhvbmVcIik7XHJcbiAgICBwaG9uZS50ZXh0Q29udGVudCA9IFwiQ2FsbCB1czogMTIzIDQ1NiA3ODlcIjtcclxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKHBob25lKTtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0OyIsImltcG9ydCBwaG90bzEgZnJvbSBcIi4vY2hyaXMtbGl2ZXJhbmktb0NzYXh2R0NlaE0tdW5zcGxhc2guanBnXCI7XHJcblxyXG5jb25zdCBjcmVhdGVIb21lID0gZnVuY3Rpb24gKCkge1xyXG4gIC8vIHJlbW92ZSBjb250ZW50IGZyb20gYSBwcmV2aW91cyBwYWdlXHJcbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XHJcbiAgfVxyXG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJcIjtcclxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWhvbWVcIik7XHJcbiAgY29uc3QgbGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGVmdFNpZGUpO1xyXG5cclxuLy8gUGhvdG9cclxuICBjb25zdCBwaG90b01haW4gPSBuZXcgSW1hZ2UoKTtcclxuICBwaG90b01haW4uc3JjID0gcGhvdG8xO1xyXG4gIHBob3RvTWFpbi5jbGFzc0xpc3QuYWRkKFwicGhvdG8tbWFpblwiKTtcclxuICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChwaG90b01haW4pO1xyXG5cclxuY29uc3QgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByaWdodFNpZGUuY2xhc3NMaXN0LmFkZChcInJpZ2h0LXNpZGVcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChyaWdodFNpZGUpO1xyXG5cclxuICBjb25zdCByZXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcmVzdE5hbWUuY2xhc3NMaXN0LmFkZChcInJlc3QtbmFtZVwiKTtcclxuICByZXN0TmFtZS50ZXh0Q29udGVudCA9IFwiVGhlIFNlY29uZCBTdW5cIjtcclxuICByaWdodFNpZGUuYXBwZW5kQ2hpbGQocmVzdE5hbWUpO1xyXG5cclxuICBjb25zdCByZXN0U3VtbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcmVzdFN1bW1hcnkuY2xhc3NMaXN0LmFkZChcInJlc3Qtc3VtbWFyeVwiKTtcclxuICByZXN0U3VtbWFyeS50ZXh0Q29udGVudCA9XHJcbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4LiBPcmRlciB5b3VyIGZvb2Qgb25saW5lIG9yIHZpc2l0IG91ciBwbGFjZSFcIjtcclxuICByaWdodFNpZGUuYXBwZW5kQ2hpbGQocmVzdFN1bW1hcnkpO1xyXG5cclxuICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgb3JkZXJCdG4uY2xhc3NMaXN0LmFkZChcIm9yZGVyLWJ0blwiKTtcclxuICBvcmRlckJ0bi50ZXh0Q29udGVudCA9IFwiT3JkZXIgbm93XCI7XHJcbiAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKG9yZGVyQnRuKTtcclxuXHJcbiBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzXCIpO1xyXG4gIGNvbnN0IGFkZHJlc3MxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhZGRyZXNzMS50ZXh0Q29udGVudCA9IFwiMzU5IFN1bnNoaW5lIEFsbGV5LFwiO1xyXG4gIGNvbnN0IGFkZHJlc3MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhZGRyZXNzMi50ZXh0Q29udGVudCA9IFwiTmV3IFlvcmssIE5ZIDk5MjcxXCI7XHJcbiAgYWRkcmVzcy5hcHBlbmRDaGlsZChhZGRyZXNzMSk7XHJcbiAgYWRkcmVzcy5hcHBlbmRDaGlsZChhZGRyZXNzMik7XHJcbiAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xyXG5cclxuXHJcbmNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBob3Vycy5jbGFzc0xpc3QuYWRkKFwib3BlbmluZy1ob3Vyc1wiKTtcclxuICBjb25zdCBob3VyczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvdXJzMS50ZXh0Q29udGVudCA9IFwiTW9uIC0gRnJpOiAxMGFtIC0gOXBtXCI7XHJcbiAgY29uc3QgaG91cnMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBob3VyczIudGV4dENvbnRlbnQgPSBcIlNhdCAtIFN1bjogMTBhbSAtIDExcG1cIjtcclxuICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoaG91cnMpO1xyXG4gIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzMSk7XHJcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnMyKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7XHJcblxyXG5cclxuXHJcbiIsImxldCBtZW51ID0gW107XHJcblxyXG5jbGFzcyBuZXdDYXRlZ29yeSB7XHJcbiAgY29uc3RydWN0b3IoY2F0ZWdvcnkpIHtcclxuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgIHRoaXMuZGlzaGVzID0gW107XHJcbiAgICBtZW51LnB1c2godGhpcyk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBuZXdEaXNoIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgY29uc3QgbWVudUNhdGVnb3J5ID0gbWVudS5maW5kSW5kZXgoXHJcbiAgICAgIChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5ID09IHRoaXMuY2F0ZWdvcnlcclxuICAgICk7XHJcbiAgICBtZW51W21lbnVDYXRlZ29yeV0uZGlzaGVzLnB1c2godGhpcyk7XHJcbiAgICAvL21lbnUubWVudUNhdGVnb3J5LnB1c2godGhpcyk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyogQ2F0ZWdvcmllcyAqL1xyXG5sZXQgc3RhcnRlcnMgPSBuZXcgbmV3Q2F0ZWdvcnkoXCJTdGFydGVyc1wiKTtcclxubGV0IG1haW5zID0gbmV3IG5ld0NhdGVnb3J5KFwiTWFpbiBEaXNoZXNcIik7XHJcbmxldCBzaWRlcyA9IG5ldyBuZXdDYXRlZ29yeShcIlNpZGVzXCIpO1xyXG5sZXQgZGVzc2VydHMgPSBuZXcgbmV3Q2F0ZWdvcnkoXCJEZXNzZXJ0c1wiKTtcclxubGV0IGRyaW5rcyA9IG5ldyBuZXdDYXRlZ29yeShcIkRyaW5rc1wiKTtcclxuXHJcbi8qIERpc2hlcyAqL1xyXG5jb25zdCBmaXNoQ2hpcHMgPSBuZXcgbmV3RGlzaChcIkZpc2ggYW5kIGNoaXBzXCIsIFwiMTIuODBcIiwgXCJTdGFydGVyc1wiKTtcclxuY29uc3QgdHVuYUJvd2wgPSBuZXcgbmV3RGlzaChcIlR1bmEgYm93bFwiLCBcIjExLjIwXCIsIFwiU3RhcnRlcnNcIik7XHJcbmNvbnN0IHByb3NjaXV0dG8gPSBuZXcgbmV3RGlzaChcclxuICBcIlByb3NjaXV0dG8gd3JhcHBlZCBtb3p6YXJlbGxhXCIsXHJcbiAgXCIxMC40MFwiLFxyXG4gIFwiU3RhcnRlcnNcIlxyXG4pO1xyXG5jb25zdCBzaHJpbXAgPSBuZXcgbmV3RGlzaChcIlNocmltcCBjb2NrdGFpbFwiLCBcIjEyLjEwXCIsIFwiU3RhcnRlcnNcIik7XHJcblxyXG5jb25zdCBzaXJsb2luID0gbmV3IG5ld0Rpc2goXHJcbiAgXCJDbGFzc2ljIHNpcmxvaW5cIixcclxuICBcIjI4LjIwXCIsXHJcbiAgXCJNYWluIERpc2hlc1wiLFxyXG4gIFwid2l0aCBjcmVhbWVkIHNwaW5hY2hcIlxyXG4pO1xyXG5jb25zdCBjaGlja2VuQ2FzcyA9IG5ldyBuZXdEaXNoKFxyXG4gIFwiU3BpY3kgY2hpY2tlbiBjYXNzZXJvbGVcIixcclxuICBcIjI1LjMwXCIsXHJcbiAgXCJNYWluIERpc2hlc1wiLFxyXG4gIFwid2l0aCBzd2VldCBwb3RhdG9lcyBhbmQgYmFieSBjYXJyb3RzXCJcclxuKTtcclxuY29uc3Qgc3BhZ2hldHRpID0gbmV3IG5ld0Rpc2goXHJcbiAgXCJTcGFnaGV0dGlcIixcclxuICBcIjI0LjEwXCIsXHJcbiAgXCJNYWluIERpc2hlc1wiLFxyXG4gIFwid2l0aCBtZWF0YmFsbHNcIlxyXG4pO1xyXG5jb25zdCBzYWxtb24gPSBuZXcgbmV3RGlzaChcclxuICBcIkdyaWxsZWQgc2FsbW9uXCIsXHJcbiAgXCIzMC45MFwiLFxyXG4gIFwiTWFpbiBEaXNoZXNcIixcclxuICBcIndpdGggZnJlc2ggYXNwYXJhZ3VzXCJcclxuKTtcclxuY29uc3QgY3JhYkNha2VzID0gbmV3IG5ld0Rpc2goXHJcbiAgXCJDcmFiIGNha2VzXCIsXHJcbiAgXCIyNy4zMFwiLFxyXG4gIFwiTWFpbiBEaXNoZXNcIixcclxuICBcIndpdGggdG9tYXRvIHNhbGFkXCJcclxuKTtcclxuXHJcbmNvbnN0IG9uaW9uUmluZ3MgPSBuZXcgbmV3RGlzaChcIk9uaW9uIHJpbmdzXCIsIFwiOS4yMFwiLCBcIlNpZGVzXCIpO1xyXG5jb25zdCBiYWtlc1BvdGF0b2VzID0gbmV3IG5ld0Rpc2goXCJCYWtlZCBwb3RhdG9lc1wiLCBcIjcuNjBcIiwgXCJTaWRlc1wiKTtcclxuY29uc3Qga2FsZSA9IG5ldyBuZXdEaXNoKFwiS2FsZSBzYWxhZFwiLCBcIjguOTBcIiwgXCJTaWRlc1wiKTtcclxuY29uc3QgY2Vhc2FyID0gbmV3IG5ld0Rpc2goXCJDZWFzYXIgc2FsYWRcIiwgXCI3LjYwXCIsIFwiU2lkZXNcIik7XHJcbmNvbnN0IHRvbWF0b1NvdXAgPSBuZXcgbmV3RGlzaChcIlRvbWF0byBzb3VwXCIsIFwiNS45MFwiLCBcIlNpZGVzXCIpO1xyXG5jb25zdCB6dWNjaGluaVNvdXAgPSBuZXcgbmV3RGlzaChcIlp1Y2NoaW5pIHNvdXBcIiwgXCI2LjUwXCIsIFwiU2lkZXNcIik7XHJcblxyXG5jb25zdCBjaG9jb2xhdGVDYWtlID0gbmV3IG5ld0Rpc2goXCJDaG9jb2xhdGUgY2FrZVwiLCBcIjEwLjIwXCIsIFwiRGVzc2VydHNcIik7XHJcbmNvbnN0IGNhcnJvdENha2UgPSBuZXcgbmV3RGlzaChcIkNhcnJvdCBjYWtlXCIsIFwiMTIuMTBcIiwgXCJEZXNzZXJ0c1wiKTtcclxuY29uc3QgaWNlQ3JlYW0gPSBuZXcgbmV3RGlzaChcIkljZSBDcmVhbSBFeHBsb3Npb25cIiwgXCI5LjYwXCIsIFwiRGVzc2VydHNcIik7XHJcbmNvbnN0IGxpbWVNb3Vzc2UgPSBuZXcgbmV3RGlzaChcIkxpbWUgTW91c3NlXCIsIFwiMTAuODBcIiwgXCJEZXNzZXJ0c1wiKTtcclxuY29uc3QgcGVhY2hDcnVtYmxlID0gbmV3IG5ld0Rpc2goXCJQZWFjaCBDcnVtYmxlXCIsIFwiMTEuMjBcIiwgXCJEZXNzZXJ0c1wiKTtcclxuY29uc3QgY2hlZXNlY2FrZSA9IG5ldyBuZXdEaXNoKFwiQmxhY2tiZXJyeSBDaGVlc2VjYWtlXCIsIFwiMTIuODBcIiwgXCJEZXNzZXJ0c1wiKTtcclxuXHJcbmNvbnN0IHdpbmUgPSBuZXcgbmV3RGlzaChcclxuICBcIkdsYXNzIG9mIHdpbmVcIixcclxuICBcIjEyLjYwXCIsXHJcbiAgXCJEcmlua3NcIixcclxuICBcInNwYXJrbGluZywgcm9zw6ksIHJlZCwgd2hpdGVcIlxyXG4pO1xyXG5jb25zdCBiZWVyID0gbmV3IG5ld0Rpc2goXCJCZWVyXCIsIFwiOC4zMFwiLCBcIkRyaW5rc1wiLCBcImxhZ2VyLCBhbGUsIGNpZGVyXCIpO1xyXG5jb25zdCBzb2RhID0gbmV3IG5ld0Rpc2goXCJTb2RhXCIsIFwiNS44MFwiLCBcIkRyaW5rc1wiLCBcImNva2UsIHBlcHNpLCBmYW50YVwiKTtcclxuY29uc3Qgd2F0ZXIgPSBuZXcgbmV3RGlzaChcIldhdGVyXCIsIFwibm8gY2hhcmdlXCIsIFwiRHJpbmtzXCIsIFwic3BhcmtsaW5nLCBzdGlsbFwiKTtcclxuXHJcblxyXG4vLyBDcmVhdGUgbWVudSBvbiBwYWdlIFxyXG5jb25zdCBjcmVhdGVNZW51ID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gIC8vIHJlbW92ZSBjb250ZW50IGZyb20gYSBwcmV2aW91cyBwYWdlXHJcbiAgd2hpbGUgKGNvbnRlbnREaXYuZmlyc3RDaGlsZCkge1xyXG4gICAgY29udGVudERpdi5yZW1vdmVDaGlsZChjb250ZW50RGl2Lmxhc3RDaGlsZCk7XHJcbiAgfVxyXG4gIGNvbnRlbnREaXYuY2xhc3NOYW1lID0gXCJcIjtcclxuICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LW1lbnVcIik7XHJcblxyXG4gIC8vIGFkZCBwYWdlIHRpdGxlIGFuZCBjb250YWluZXJcclxuICBjb25zdCBtZW51SDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgbWVudUgxLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51SDEpO1xyXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcblxyXG4gIC8vIGZpbGwgdGhlIG1lbnUgd2l0aCBjYXRlZ29yaWVzXHJcbiAgbWVudS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXRlZ29yeURpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1jYXRlZ29yeVwiKTtcclxuICAgIGNvbnN0IGNhdGVnb3J5SDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBjYXRlZ29yeUgyLnRleHRDb250ZW50ID0gaXRlbS5jYXRlZ29yeTtcclxuICAgIGNhdGVnb3J5RGl2LmFwcGVuZENoaWxkKGNhdGVnb3J5SDIpO1xyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeURpdik7XHJcblxyXG4gICAgLy8gZmlsbCB0aGUgY2F0ZWdvcmllcyB3aXRoIGRpc2hlc1xyXG4gICAgZnVuY3Rpb24gZmlsbENhdGVnb3JpZXMoKSB7XHJcbiAgICAgIGl0ZW0uZGlzaGVzLmZvckVhY2goKGRpc2gpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkaXNoLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGRpc2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpc2hEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtZGlzaFwiKTtcclxuICAgICAgICBjb25zdCBkaXNoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgZGlzaFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBkaXNoRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpc2hOYW1lLnRleHRDb250ZW50ID0gZGlzaC5uYW1lO1xyXG4gICAgICAgIGRpc2hQcmljZS50ZXh0Q29udGVudCA9IGRpc2gucHJpY2U7XHJcbiAgICAgICAgZGlzaERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGlzaC5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgZGlzaERpdi5hcHBlbmRDaGlsZChkaXNoTmFtZSk7XHJcbiAgICAgICAgZGlzaERpdi5hcHBlbmRDaGlsZChkaXNoUHJpY2UpO1xyXG4gICAgICAgIGRpc2hEaXYuYXBwZW5kQ2hpbGQoZGlzaERlc2NyaXB0aW9uKTtcclxuICAgICAgICBjYXRlZ29yeURpdi5hcHBlbmRDaGlsZChkaXNoRGl2KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmaWxsQ2F0ZWdvcmllcygpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51O1xyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBJbXBvcnRzXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgY3JlYXRlQWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbi8vIE5hdmlnYXRpb25cclxuY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XHJcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5ob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUhvbWUpO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTWVudSk7XHJcbm1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUNvbnRhY3QpO1xyXG5jb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbmNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuYWJvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUFib3V0KTtcclxuYWJvdXQudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XHJcbm5hdi5hcHBlbmRDaGlsZChob21lKTtcclxubmF2LmFwcGVuZENoaWxkKG1lbnUpO1xyXG5uYXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcbm5hdi5hcHBlbmRDaGlsZChhYm91dCk7XHJcbmJvZHkuYXBwZW5kQ2hpbGQobmF2KTtcclxuXHJcbi8vIENvbnRlbnRcclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcclxuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuY3JlYXRlSG9tZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=