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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.nav > button {\r\n  background: none;\r\n  font-size: 1.3rem;\r\n  font-weight: 800;\r\n  border: none;\r\n  border-top: black 2px solid;\r\n  border-bottom: black 2px solid;\r\n}\r\n\r\n.nav > button:hover {\r\n  color: orangered;\r\n  border-top: orangered 2px solid;\r\n  border-bottom: orangered 2px solid;\r\n}\r\n.nav > button:active {\r\n  color: rgb(2, 2, 119);\r\n  border-top: rgb(2, 2, 119) 2px solid;\r\n  border-bottom: rgb(2, 2, 119) 2px solid;\r\n}\r\n\r\n.rest-name {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-size: 2rem;\r\n  align-self: center;\r\n}\r\n\r\n/* #content {\r\n  display: grid;\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n  grid-template-columns: auto auto;\r\n  gap: 5px;\r\n  justify-items: center;\r\n  align-items: center;\r\n} */\r\n\r\n#content {\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.content-home {\r\n  display: grid; \r\n  grid-template-columns: auto auto;\r\n  gap: 5px;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.photo-main {\r\n  width: 400px;\r\n  height: 533px;\r\n  grid-row: 1 / 6;\r\n}\r\n\r\n.right-side {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.right-side > * {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.rest-summary {\r\n  grid-column: 2 / 3;\r\n  width: 500px;\r\n}\r\n\r\n.order-btn {\r\n  width: 100px;\r\n  height: 50px;\r\n}\r\n\r\n.order-btn {\r\n  width: 150px;\r\n  height: 2.5rem;\r\n  background-color: #9eb4ae;\r\n  border: none;\r\n  border-radius: 20px;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  align-self: center;\r\n}\r\n\r\n.order-btn:hover {\r\n  color: orangered;\r\n}\r\n\r\n.order-btn:active {\r\n  color: rgb(2, 2, 119);\r\n}\r\n\r\n.address {\r\n  align-self: center;\r\n}\r\n\r\n.opening-hours {\r\n  align-self: center;\r\n}\r\n\r\n.footer {\r\n  margin: 10px 0;\r\n}\r\n\r\n.footer a,.footer a:visited {\r\n  color: black;\r\n}\r\n\r\n.footer a:hover {\r\n  color: orangered;\r\n}\r\n\r\n.footer a:active {\r\n  color: rgb(2, 2, 119);\r\n}\r\n\r\n/* Menu.js */\r\n\r\n.menu-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\nh2 {\r\n  text-decoration: underline;\r\n}\r\n\r\n.menu-category {\r\n  width: 400px;\r\n  margin: 0 40px;\r\n}\r\n\r\n.menu-dish {\r\n  display: grid; \r\n  grid-template-columns: auto auto;\r\n  justify-content: space-between;\r\n  border-bottom: 1px black dotted;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n.menu-dish div:first-child {  \r\n  font-weight: 800;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.menu-dish div:nth-child(3) {\r\n  font-style: italic;\r\n  font-size: 0.9rem;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,mDAAmD;AACrD;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,+BAA+B;EAC/B,kCAAkC;AACpC;AACA;EACE,qBAAqB;EACrB,oCAAoC;EACpC,uCAAuC;AACzC;;AAEA;EACE,qCAAqC;EACrC,eAAe;EACf,kBAAkB;AACpB;;AAEA;;;;;;;;GAQG;;AAEH;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,QAAQ;EACR,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,YAAY;;AAEZ;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,8BAA8B;EAC9B,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.nav > button {\r\n  background: none;\r\n  font-size: 1.3rem;\r\n  font-weight: 800;\r\n  border: none;\r\n  border-top: black 2px solid;\r\n  border-bottom: black 2px solid;\r\n}\r\n\r\n.nav > button:hover {\r\n  color: orangered;\r\n  border-top: orangered 2px solid;\r\n  border-bottom: orangered 2px solid;\r\n}\r\n.nav > button:active {\r\n  color: rgb(2, 2, 119);\r\n  border-top: rgb(2, 2, 119) 2px solid;\r\n  border-bottom: rgb(2, 2, 119) 2px solid;\r\n}\r\n\r\n.rest-name {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-size: 2rem;\r\n  align-self: center;\r\n}\r\n\r\n/* #content {\r\n  display: grid;\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n  grid-template-columns: auto auto;\r\n  gap: 5px;\r\n  justify-items: center;\r\n  align-items: center;\r\n} */\r\n\r\n#content {\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.content-home {\r\n  display: grid; \r\n  grid-template-columns: auto auto;\r\n  gap: 5px;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.photo-main {\r\n  width: 400px;\r\n  height: 533px;\r\n  grid-row: 1 / 6;\r\n}\r\n\r\n.right-side {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.right-side > * {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.rest-summary {\r\n  grid-column: 2 / 3;\r\n  width: 500px;\r\n}\r\n\r\n.order-btn {\r\n  width: 100px;\r\n  height: 50px;\r\n}\r\n\r\n.order-btn {\r\n  width: 150px;\r\n  height: 2.5rem;\r\n  background-color: #9eb4ae;\r\n  border: none;\r\n  border-radius: 20px;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  align-self: center;\r\n}\r\n\r\n.order-btn:hover {\r\n  color: orangered;\r\n}\r\n\r\n.order-btn:active {\r\n  color: rgb(2, 2, 119);\r\n}\r\n\r\n.address {\r\n  align-self: center;\r\n}\r\n\r\n.opening-hours {\r\n  align-self: center;\r\n}\r\n\r\n.footer {\r\n  margin: 10px 0;\r\n}\r\n\r\n.footer a,.footer a:visited {\r\n  color: black;\r\n}\r\n\r\n.footer a:hover {\r\n  color: orangered;\r\n}\r\n\r\n.footer a:active {\r\n  color: rgb(2, 2, 119);\r\n}\r\n\r\n/* Menu.js */\r\n\r\n.menu-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\nh2 {\r\n  text-decoration: underline;\r\n}\r\n\r\n.menu-category {\r\n  width: 400px;\r\n  margin: 0 40px;\r\n}\r\n\r\n.menu-dish {\r\n  display: grid; \r\n  grid-template-columns: auto auto;\r\n  justify-content: space-between;\r\n  border-bottom: 1px black dotted;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n.menu-dish div:first-child {  \r\n  font-weight: 800;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.menu-dish div:nth-child(3) {\r\n  font-style: italic;\r\n  font-size: 0.9rem;\r\n}"],"sourceRoot":""}]);
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

    // fill the page with data
    const contactParagraph = document.createElement("p");
    contactParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.";
    contactContainer.appendChild(contactParagraph);

    const address = document.createElement("div");
    address.classList.add("address");
    const address1 = document.createElement("div");
    address1.textContent = "359 Sunshine Alley,";
    const address2 = document.createElement("div");
    address2.textContent = "New York, NY 99271";
    address.appendChild(address1);
    address.appendChild(address2);
    contactContainer.appendChild(address);

    const phone = document.createElement("div");
    phone.classList.add("phone");
    phone.textContent = "Call us: 123 456 789";
    contactContainer.appendChild(phone);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQztBQUMxQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQztBQUMxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNxQjtBQUNyQjtBQUNnQztBQUNBO0FBQ007QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw2Q0FBVTtBQUN6QztBQUNBLCtCQUErQiw2Q0FBVTtBQUN6QztBQUNBO0FBQ0Esa0NBQWtDLGdEQUFhO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiA+IGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXRvcDogYmxhY2sgMnB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2ID4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICBib3JkZXItdG9wOiBvcmFuZ2VyZWQgMnB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogb3JhbmdlcmVkIDJweCBzb2xpZDtcXHJcXG59XFxyXFxuLm5hdiA+IGJ1dHRvbjphY3RpdmUge1xcclxcbiAgY29sb3I6IHJnYigyLCAyLCAxMTkpO1xcclxcbiAgYm9yZGVyLXRvcDogcmdiKDIsIDIsIDExOSkgMnB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogcmdiKDIsIDIsIDExOSkgMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdC1uYW1lIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qICNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB3aWR0aDogMTAwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59ICovXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1ob21lIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7IFxcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5waG90by1tYWluIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogNTMzcHg7XFxyXFxuICBncmlkLXJvdzogMSAvIDY7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zaWRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2lkZSA+ICoge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3Qtc3VtbWFyeSB7XFxyXFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG4ge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRuIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllYjRhZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG46YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMiwgMiwgMTE5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3Mge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3BlbmluZy1ob3VycyB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYSwuZm9vdGVyIGE6dmlzaXRlZCB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGE6YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMiwgMiwgMTE5KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVudS5qcyAqL1xcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXRlZ29yeSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBtYXJnaW46IDAgNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZGlzaCB7XFxyXFxuICBkaXNwbGF5OiBncmlkOyBcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIGRvdHRlZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZGlzaCBkaXY6Zmlyc3QtY2hpbGQgeyAgXFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWRpc2ggZGl2Om50aC1jaGlsZCgzKSB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7Ozs7R0FRRzs7QUFFSDtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiA+IGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXRvcDogYmxhY2sgMnB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2ID4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICBib3JkZXItdG9wOiBvcmFuZ2VyZWQgMnB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogb3JhbmdlcmVkIDJweCBzb2xpZDtcXHJcXG59XFxyXFxuLm5hdiA+IGJ1dHRvbjphY3RpdmUge1xcclxcbiAgY29sb3I6IHJnYigyLCAyLCAxMTkpO1xcclxcbiAgYm9yZGVyLXRvcDogcmdiKDIsIDIsIDExOSkgMnB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogcmdiKDIsIDIsIDExOSkgMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdC1uYW1lIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qICNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB3aWR0aDogMTAwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59ICovXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1ob21lIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7IFxcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5waG90by1tYWluIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogNTMzcHg7XFxyXFxuICBncmlkLXJvdzogMSAvIDY7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zaWRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2lkZSA+ICoge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3Qtc3VtbWFyeSB7XFxyXFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG4ge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRuIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllYjRhZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG46YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMiwgMiwgMTE5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3Mge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3BlbmluZy1ob3VycyB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYSwuZm9vdGVyIGE6dmlzaXRlZCB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGE6YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMiwgMiwgMTE5KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVudS5qcyAqL1xcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXRlZ29yeSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBtYXJnaW46IDAgNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZGlzaCB7XFxyXFxuICBkaXNwbGF5OiBncmlkOyBcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIGRvdHRlZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZGlzaCBkaXY6Zmlyc3QtY2hpbGQgeyAgXFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWRpc2ggZGl2Om50aC1jaGlsZCgzKSB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwaG90bzIgZnJvbSBcIi4vcGF0cmljay1zY2huZWlkZXItNXhsdFdNcGtOM0UtdW5zcGxhc2guanBnXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xyXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgICAvLyByZW1vdmUgY29udGVudCBmcm9tIGEgcHJldmlvdXMgcGFnZVxyXG4gICAgd2hpbGUgKGNvbnRlbnREaXYuZmlyc3RDaGlsZCkge1xyXG4gICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNvbnRlbnREaXYubGFzdENoaWxkKTtcclxuICAgIH1cclxuICAgIGNvbnRlbnREaXYuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtY29udGFjdFwiKTtcclxuXHJcbiAgICAvLyBhZGQgcGFnZSB0aXRsZSBhbmQgY29udGFpbmVyXHJcbiAgICBjb25zdCBjb250YWN0SDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBjb250YWN0SDEudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdEgxKTtcclxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XHJcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xyXG5cclxuICAgIC8vIGZpbGwgdGhlIHBhZ2Ugd2l0aCBkYXRhXHJcbiAgICBjb25zdCBjb250YWN0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb250YWN0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleC5cIjtcclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFBhcmFncmFwaCk7XHJcblxyXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzXCIpO1xyXG4gICAgY29uc3QgYWRkcmVzczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkcmVzczEudGV4dENvbnRlbnQgPSBcIjM1OSBTdW5zaGluZSBBbGxleSxcIjtcclxuICAgIGNvbnN0IGFkZHJlc3MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZHJlc3MyLnRleHRDb250ZW50ID0gXCJOZXcgWW9yaywgTlkgOTkyNzFcIjtcclxuICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzczEpO1xyXG4gICAgYWRkcmVzcy5hcHBlbmRDaGlsZChhZGRyZXNzMik7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xyXG5cclxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBob25lLmNsYXNzTGlzdC5hZGQoXCJwaG9uZVwiKTtcclxuICAgIHBob25lLnRleHRDb250ZW50ID0gXCJDYWxsIHVzOiAxMjMgNDU2IDc4OVwiO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZSk7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDsiLCJpbXBvcnQgcGhvdG8xIGZyb20gXCIuL2NocmlzLWxpdmVyYW5pLW9Dc2F4dkdDZWhNLXVuc3BsYXNoLmpwZ1wiO1xyXG5cclxuY29uc3QgY3JlYXRlSG9tZSA9IGZ1bmN0aW9uICgpIHtcclxuICAvLyByZW1vdmUgY29udGVudCBmcm9tIGEgcHJldmlvdXMgcGFnZVxyXG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xyXG4gIH1cclxuICBjb250ZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1ob21lXCIpO1xyXG4gIGNvbnN0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGxlZnRTaWRlKTtcclxuXHJcbi8vIFBob3RvXHJcbiAgY29uc3QgcGhvdG9NYWluID0gbmV3IEltYWdlKCk7XHJcbiAgcGhvdG9NYWluLnNyYyA9IHBob3RvMTtcclxuICBwaG90b01haW4uY2xhc3NMaXN0LmFkZChcInBob3RvLW1haW5cIik7XHJcbiAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQocGhvdG9NYWluKTtcclxuXHJcbmNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJyaWdodC1zaWRlXCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmlnaHRTaWRlKTtcclxuXHJcbiAgY29uc3QgcmVzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJlc3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJyZXN0LW5hbWVcIik7XHJcbiAgcmVzdE5hbWUudGV4dENvbnRlbnQgPSBcIlRoZSBTZWNvbmQgU3VuXCI7XHJcbiAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHJlc3ROYW1lKTtcclxuXHJcbiAgY29uc3QgcmVzdFN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJlc3RTdW1tYXJ5LmNsYXNzTGlzdC5hZGQoXCJyZXN0LXN1bW1hcnlcIik7XHJcbiAgcmVzdFN1bW1hcnkudGV4dENvbnRlbnQgPVxyXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleC4gT3JkZXIgeW91ciBmb29kIG9ubGluZSBvciB2aXNpdCBvdXIgcGxhY2UhXCI7XHJcbiAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHJlc3RTdW1tYXJ5KTtcclxuXHJcbiAgY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIG9yZGVyQnRuLmNsYXNzTGlzdC5hZGQoXCJvcmRlci1idG5cIik7XHJcbiAgb3JkZXJCdG4udGV4dENvbnRlbnQgPSBcIk9yZGVyIG5vd1wiO1xyXG4gIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChvcmRlckJ0bik7XHJcblxyXG4gY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKFwiYWRkcmVzc1wiKTtcclxuICBjb25zdCBhZGRyZXNzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWRkcmVzczEudGV4dENvbnRlbnQgPSBcIjM1OSBTdW5zaGluZSBBbGxleSxcIjtcclxuICBjb25zdCBhZGRyZXNzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWRkcmVzczIudGV4dENvbnRlbnQgPSBcIk5ldyBZb3JrLCBOWSA5OTI3MVwiO1xyXG4gIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzczEpO1xyXG4gIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzczIpO1xyXG4gIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChhZGRyZXNzKTtcclxuXHJcblxyXG5jb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG91cnMuY2xhc3NMaXN0LmFkZChcIm9wZW5pbmctaG91cnNcIik7XHJcbiAgY29uc3QgaG91cnMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBob3VyczEudGV4dENvbnRlbnQgPSBcIk1vbiAtIEZyaTogMTBhbSAtIDlwbVwiO1xyXG4gIGNvbnN0IGhvdXJzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG91cnMyLnRleHRDb250ZW50ID0gXCJTYXQgLSBTdW46IDEwYW0gLSAxMXBtXCI7XHJcbiAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGhvdXJzKTtcclxuICBob3Vycy5hcHBlbmRDaGlsZChob3VyczEpO1xyXG4gIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzMik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lO1xyXG5cclxuXHJcblxyXG4iLCJsZXQgbWVudSA9IFtdO1xyXG5cclxuY2xhc3MgbmV3Q2F0ZWdvcnkge1xyXG4gIGNvbnN0cnVjdG9yKGNhdGVnb3J5KSB7XHJcbiAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICB0aGlzLmRpc2hlcyA9IFtdO1xyXG4gICAgbWVudS5wdXNoKHRoaXMpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgbmV3RGlzaCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcclxuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IG1lbnVDYXRlZ29yeSA9IG1lbnUuZmluZEluZGV4KFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSA9PSB0aGlzLmNhdGVnb3J5XHJcbiAgICApO1xyXG4gICAgbWVudVttZW51Q2F0ZWdvcnldLmRpc2hlcy5wdXNoKHRoaXMpO1xyXG4gICAgLy9tZW51Lm1lbnVDYXRlZ29yeS5wdXNoKHRoaXMpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qIENhdGVnb3JpZXMgKi9cclxubGV0IHN0YXJ0ZXJzID0gbmV3IG5ld0NhdGVnb3J5KFwiU3RhcnRlcnNcIik7XHJcbmxldCBtYWlucyA9IG5ldyBuZXdDYXRlZ29yeShcIk1haW4gRGlzaGVzXCIpO1xyXG5sZXQgc2lkZXMgPSBuZXcgbmV3Q2F0ZWdvcnkoXCJTaWRlc1wiKTtcclxubGV0IGRlc3NlcnRzID0gbmV3IG5ld0NhdGVnb3J5KFwiRGVzc2VydHNcIik7XHJcbmxldCBkcmlua3MgPSBuZXcgbmV3Q2F0ZWdvcnkoXCJEcmlua3NcIik7XHJcblxyXG4vKiBEaXNoZXMgKi9cclxuY29uc3QgZmlzaENoaXBzID0gbmV3IG5ld0Rpc2goXCJGaXNoIGFuZCBjaGlwc1wiLCBcIjEyLjgwXCIsIFwiU3RhcnRlcnNcIik7XHJcbmNvbnN0IHR1bmFCb3dsID0gbmV3IG5ld0Rpc2goXCJUdW5hIGJvd2xcIiwgXCIxMS4yMFwiLCBcIlN0YXJ0ZXJzXCIpO1xyXG5jb25zdCBwcm9zY2l1dHRvID0gbmV3IG5ld0Rpc2goXHJcbiAgXCJQcm9zY2l1dHRvIHdyYXBwZWQgbW96emFyZWxsYVwiLFxyXG4gIFwiMTAuNDBcIixcclxuICBcIlN0YXJ0ZXJzXCJcclxuKTtcclxuY29uc3Qgc2hyaW1wID0gbmV3IG5ld0Rpc2goXCJTaHJpbXAgY29ja3RhaWxcIiwgXCIxMi4xMFwiLCBcIlN0YXJ0ZXJzXCIpO1xyXG5cclxuY29uc3Qgc2lybG9pbiA9IG5ldyBuZXdEaXNoKFxyXG4gIFwiQ2xhc3NpYyBzaXJsb2luXCIsXHJcbiAgXCIyOC4yMFwiLFxyXG4gIFwiTWFpbiBEaXNoZXNcIixcclxuICBcIndpdGggY3JlYW1lZCBzcGluYWNoXCJcclxuKTtcclxuY29uc3QgY2hpY2tlbkNhc3MgPSBuZXcgbmV3RGlzaChcclxuICBcIlNwaWN5IGNoaWNrZW4gY2Fzc2Vyb2xlXCIsXHJcbiAgXCIyNS4zMFwiLFxyXG4gIFwiTWFpbiBEaXNoZXNcIixcclxuICBcIndpdGggc3dlZXQgcG90YXRvZXMgYW5kIGJhYnkgY2Fycm90c1wiXHJcbik7XHJcbmNvbnN0IHNwYWdoZXR0aSA9IG5ldyBuZXdEaXNoKFxyXG4gIFwiU3BhZ2hldHRpXCIsXHJcbiAgXCIyNC4xMFwiLFxyXG4gIFwiTWFpbiBEaXNoZXNcIixcclxuICBcIndpdGggbWVhdGJhbGxzXCJcclxuKTtcclxuY29uc3Qgc2FsbW9uID0gbmV3IG5ld0Rpc2goXHJcbiAgXCJHcmlsbGVkIHNhbG1vblwiLFxyXG4gIFwiMzAuOTBcIixcclxuICBcIk1haW4gRGlzaGVzXCIsXHJcbiAgXCJ3aXRoIGZyZXNoIGFzcGFyYWd1c1wiXHJcbik7XHJcbmNvbnN0IGNyYWJDYWtlcyA9IG5ldyBuZXdEaXNoKFxyXG4gIFwiQ3JhYiBjYWtlc1wiLFxyXG4gIFwiMjcuMzBcIixcclxuICBcIk1haW4gRGlzaGVzXCIsXHJcbiAgXCJ3aXRoIHRvbWF0byBzYWxhZFwiXHJcbik7XHJcblxyXG5jb25zdCBvbmlvblJpbmdzID0gbmV3IG5ld0Rpc2goXCJPbmlvbiByaW5nc1wiLCBcIjkuMjBcIiwgXCJTaWRlc1wiKTtcclxuY29uc3QgYmFrZXNQb3RhdG9lcyA9IG5ldyBuZXdEaXNoKFwiQmFrZWQgcG90YXRvZXNcIiwgXCI3LjYwXCIsIFwiU2lkZXNcIik7XHJcbmNvbnN0IGthbGUgPSBuZXcgbmV3RGlzaChcIkthbGUgc2FsYWRcIiwgXCI4LjkwXCIsIFwiU2lkZXNcIik7XHJcbmNvbnN0IGNlYXNhciA9IG5ldyBuZXdEaXNoKFwiQ2Vhc2FyIHNhbGFkXCIsIFwiNy42MFwiLCBcIlNpZGVzXCIpO1xyXG5jb25zdCB0b21hdG9Tb3VwID0gbmV3IG5ld0Rpc2goXCJUb21hdG8gc291cFwiLCBcIjUuOTBcIiwgXCJTaWRlc1wiKTtcclxuY29uc3QgenVjY2hpbmlTb3VwID0gbmV3IG5ld0Rpc2goXCJadWNjaGluaSBzb3VwXCIsIFwiNi41MFwiLCBcIlNpZGVzXCIpO1xyXG5cclxuY29uc3QgY2hvY29sYXRlQ2FrZSA9IG5ldyBuZXdEaXNoKFwiQ2hvY29sYXRlIGNha2VcIiwgXCIxMC4yMFwiLCBcIkRlc3NlcnRzXCIpO1xyXG5jb25zdCBjYXJyb3RDYWtlID0gbmV3IG5ld0Rpc2goXCJDYXJyb3QgY2FrZVwiLCBcIjEyLjEwXCIsIFwiRGVzc2VydHNcIik7XHJcbmNvbnN0IGljZUNyZWFtID0gbmV3IG5ld0Rpc2goXCJJY2UgQ3JlYW0gRXhwbG9zaW9uXCIsIFwiOS42MFwiLCBcIkRlc3NlcnRzXCIpO1xyXG5jb25zdCBsaW1lTW91c3NlID0gbmV3IG5ld0Rpc2goXCJMaW1lIE1vdXNzZVwiLCBcIjEwLjgwXCIsIFwiRGVzc2VydHNcIik7XHJcbmNvbnN0IHBlYWNoQ3J1bWJsZSA9IG5ldyBuZXdEaXNoKFwiUGVhY2ggQ3J1bWJsZVwiLCBcIjExLjIwXCIsIFwiRGVzc2VydHNcIik7XHJcbmNvbnN0IGNoZWVzZWNha2UgPSBuZXcgbmV3RGlzaChcIkJsYWNrYmVycnkgQ2hlZXNlY2FrZVwiLCBcIjEyLjgwXCIsIFwiRGVzc2VydHNcIik7XHJcblxyXG5jb25zdCB3aW5lID0gbmV3IG5ld0Rpc2goXHJcbiAgXCJHbGFzcyBvZiB3aW5lXCIsXHJcbiAgXCIxMi42MFwiLFxyXG4gIFwiRHJpbmtzXCIsXHJcbiAgXCJzcGFya2xpbmcsIHJvc8OpLCByZWQsIHdoaXRlXCJcclxuKTtcclxuY29uc3QgYmVlciA9IG5ldyBuZXdEaXNoKFwiQmVlclwiLCBcIjguMzBcIiwgXCJEcmlua3NcIiwgXCJsYWdlciwgYWxlLCBjaWRlclwiKTtcclxuY29uc3Qgc29kYSA9IG5ldyBuZXdEaXNoKFwiU29kYVwiLCBcIjUuODBcIiwgXCJEcmlua3NcIiwgXCJjb2tlLCBwZXBzaSwgZmFudGFcIik7XHJcbmNvbnN0IHdhdGVyID0gbmV3IG5ld0Rpc2goXCJXYXRlclwiLCBcIm5vIGNoYXJnZVwiLCBcIkRyaW5rc1wiLCBcInNwYXJrbGluZywgc3RpbGxcIik7XHJcblxyXG5cclxuLy8gQ3JlYXRlIG1lbnUgb24gcGFnZSBcclxuY29uc3QgY3JlYXRlTWVudSA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICAvLyByZW1vdmUgY29udGVudCBmcm9tIGEgcHJldmlvdXMgcGFnZVxyXG4gIHdoaWxlIChjb250ZW50RGl2LmZpcnN0Q2hpbGQpIHtcclxuICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoY29udGVudERpdi5sYXN0Q2hpbGQpO1xyXG4gIH1cclxuICBjb250ZW50RGl2LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1tZW51XCIpO1xyXG5cclxuICAvLyBhZGQgcGFnZSB0aXRsZSBhbmQgY29udGFpbmVyXHJcbiAgY29uc3QgbWVudUgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIG1lbnVIMS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudUgxKTtcclxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xyXG5cclxuICAvLyBmaWxsIHRoZSBtZW51IHdpdGggY2F0ZWdvcmllc1xyXG4gIG1lbnUuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgY2F0ZWdvcnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2F0ZWdvcnlEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2F0ZWdvcnlcIik7XHJcbiAgICBjb25zdCBjYXRlZ29yeUgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY2F0ZWdvcnlIMi50ZXh0Q29udGVudCA9IGl0ZW0uY2F0ZWdvcnk7XHJcbiAgICBjYXRlZ29yeURpdi5hcHBlbmRDaGlsZChjYXRlZ29yeUgyKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlEaXYpO1xyXG5cclxuICAgIC8vIGZpbGwgdGhlIGNhdGVnb3JpZXMgd2l0aCBkaXNoZXNcclxuICAgIGZ1bmN0aW9uIGZpbGxDYXRlZ29yaWVzKCkge1xyXG4gICAgICBpdGVtLmRpc2hlcy5mb3JFYWNoKChkaXNoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGlzaC5uYW1lKTtcclxuICAgICAgICBjb25zdCBkaXNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXNoRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWRpc2hcIik7XHJcbiAgICAgICAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IGRpc2hQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgZGlzaERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXNoTmFtZS50ZXh0Q29udGVudCA9IGRpc2gubmFtZTtcclxuICAgICAgICBkaXNoUHJpY2UudGV4dENvbnRlbnQgPSBkaXNoLnByaWNlO1xyXG4gICAgICAgIGRpc2hEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRpc2guZGVzY3JpcHRpb247XHJcblxyXG4gICAgICAgIGRpc2hEaXYuYXBwZW5kQ2hpbGQoZGlzaE5hbWUpO1xyXG4gICAgICAgIGRpc2hEaXYuYXBwZW5kQ2hpbGQoZGlzaFByaWNlKTtcclxuICAgICAgICBkaXNoRGl2LmFwcGVuZENoaWxkKGRpc2hEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgY2F0ZWdvcnlEaXYuYXBwZW5kQ2hpbGQoZGlzaERpdik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZmlsbENhdGVnb3JpZXMoKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTtcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gSW1wb3J0c1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbi8vIE5hdmlnYXRpb25cclxuY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XHJcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5ob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUhvbWUpO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTWVudSk7XHJcbm1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUNvbnRhY3QpO1xyXG5jb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbm5hdi5hcHBlbmRDaGlsZChob21lKTtcclxubmF2LmFwcGVuZENoaWxkKG1lbnUpO1xyXG5uYXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcbmJvZHkuYXBwZW5kQ2hpbGQobmF2KTtcclxuXHJcbi8vIENvbnRlbnRcclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcclxuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuY3JlYXRlSG9tZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=