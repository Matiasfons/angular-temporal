(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_ajustes_devices_devices_module_ts"],{

/***/ 43632:
/*!************************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/devices/devices-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevicesPageRoutingModule": () => (/* binding */ DevicesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _devices_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devices.page */ 42893);




const routes = [{
  path: '',
  component: _devices_page__WEBPACK_IMPORTED_MODULE_0__.DevicesPage
}];
let DevicesPageRoutingModule = class DevicesPageRoutingModule {};
DevicesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], DevicesPageRoutingModule);


/***/ }),

/***/ 87651:
/*!****************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/devices/devices.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevicesPageModule": () => (/* binding */ DevicesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _devices_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devices-routing.module */ 43632);
/* harmony import */ var _devices_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devices.page */ 42893);







let DevicesPageModule = class DevicesPageModule {};
DevicesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _devices_routing_module__WEBPACK_IMPORTED_MODULE_0__.DevicesPageRoutingModule],
  declarations: [_devices_page__WEBPACK_IMPORTED_MODULE_1__.DevicesPage]
})], DevicesPageModule);


/***/ }),

/***/ 42893:
/*!**************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/devices/devices.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevicesPage": () => (/* binding */ DevicesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _devices_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devices.page.html?ngResource */ 27316);
/* harmony import */ var _devices_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devices.page.scss?ngResource */ 40222);
/* harmony import */ var _devices_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_devices_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let DevicesPage = class DevicesPage {
  constructor() {}
  ngOnInit() {}
};
DevicesPage.ctorParameters = () => [];
DevicesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-devices',
  template: _devices_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_devices_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DevicesPage);


/***/ }),

/***/ 40222:
/*!***************************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/devices/devices.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host ion-list {\n  background-color: var(--ion-color-primary);\n}", "",{"version":3,"sources":["webpack://./src/app/pages/secure/ajustes/devices/devices.page.scss"],"names":[],"mappings":"AACE;EACE,0CAAA;AAAJ","sourcesContent":[":host {\n  ion-list {\n    background-color: var(--ion-color-primary);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 27316:
/*!***************************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/devices/devices.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"secondary\" text=\"Ajustes\" defaultHref=\"/ajustes\">\n      </ion-back-button>\n    </ion-buttons>\n\n    <ion-title color=\"light\">\n      Devices\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div class=\"ion-padding\">\n\n    <ion-list-header class=\"ion-list-header-small\">\n      <ion-label>\n        <ion-text color=\"tertiary\">Registered devices (3)</ion-text>\n      </ion-label>\n    </ion-list-header>\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item color=\"primary\" detail=\"false\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"phone-portrait\"></ion-icon>\n        <ion-label>\n          <h3>John's iPhone</h3>\n          <p class=\"font-size-smallest\">Registered: 01 Jan, 2023</p>\n        </ion-label>\n        <ion-badge color=\"secondary\" mode=\"ios\" slot=\"end\">Main device</ion-badge>\n      </ion-item>\n\n      <ion-item color=\"primary\" detail=\"false\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"laptop\"></ion-icon>\n        <ion-label>\n          <h3>John's MacBook Pro</h3>\n          <p class=\"font-size-smallest\">Registered: 04 Feb, 2023</p>\n        </ion-label>\n        <ion-button slot=\"end\" color=\"danger\">\n          Remove\n        </ion-button>\n      </ion-item>\n\n      <ion-item color=\"primary\" detail=\"false\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"tablet-portrait\"></ion-icon>\n        <ion-label>\n          <h3>John's iPad</h3>\n          <p class=\"font-size-smallest\">Registered: 11 Feb, 2023</p>\n        </ion-label>\n        <ion-button slot=\"end\" color=\"danger\">\n          Remove\n        </ion-button>\n      </ion-item>\n    </ion-list>\n\n    <p>\n      <ion-text color=\"medium\">To remove your current main device, you have to set another one as your main device.</ion-text>\n    </p>\n\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_ajustes_devices_devices_module_ts.js.map