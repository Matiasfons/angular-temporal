(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_ajustes_account_account_module_ts"],{

/***/ 91021:
/*!************************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/account/account-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageRoutingModule": () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 31041);




const routes = [{
  path: '',
  component: _account_page__WEBPACK_IMPORTED_MODULE_0__.AccountPage
}];
let AccountPageRoutingModule = class AccountPageRoutingModule {};
AccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AccountPageRoutingModule);


/***/ }),

/***/ 62172:
/*!****************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/account/account.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageModule": () => (/* binding */ AccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 91021);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page */ 31041);







let AccountPageModule = class AccountPageModule {};
AccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule],
  declarations: [_account_page__WEBPACK_IMPORTED_MODULE_1__.AccountPage]
})], AccountPageModule);


/***/ }),

/***/ 31041:
/*!**************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/account/account.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPage": () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page.html?ngResource */ 78497);
/* harmony import */ var _account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page.scss?ngResource */ 29665);
/* harmony import */ var _account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AccountPage = class AccountPage {
  constructor() {}
  ngOnInit() {}
};
AccountPage.ctorParameters = () => [];
AccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-account',
  template: _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AccountPage);


/***/ }),

/***/ 29665:
/*!***************************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/account/account.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host ion-list {\n  background-color: var(--ion-color-primary);\n}", "",{"version":3,"sources":["webpack://./src/app/pages/secure/ajustes/account/account.page.scss"],"names":[],"mappings":"AACE;EACE,0CAAA;AAAJ","sourcesContent":[":host {\n  ion-list {\n    background-color: var(--ion-color-primary);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 78497:
/*!***************************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/account/account.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"secondary\" text=\"Ajustes\" defaultHref=\"/ajustes\">\n      </ion-back-button>\n    </ion-buttons>\n\n    <ion-title color=\"light\">\n      Account\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div class=\"ion-padding\">\n\n    <ion-list-header class=\"ion-list-header-small\">\n      <ion-label>\n        <ion-text color=\"tertiary\">Privacy</ion-text>\n      </ion-label>\n    </ion-list-header>\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item color=\"primary\" detail=\"false\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"notifications\"></ion-icon>\n        <ion-label>\n          <h3>Notifications</h3>\n        </ion-label>\n        <ion-toggle color=\"tertiary\" checked slot=\"end\"></ion-toggle>\n      </ion-item>\n    </ion-list>\n\n    <p>\n      <ion-text color=\"medium\">We never display sensible data in your notifications.</ion-text>\n    </p>\n\n    <hr class=\"hr-medium\">\n\n    <ion-list-header class=\"ion-list-header-small\">\n      <ion-label>\n        <ion-text color=\"tertiary\">Feedback & Reports</ion-text>\n      </ion-label>\n    </ion-list-header>\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item color=\"primary\" detail=\"false\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"bug\"></ion-icon>\n        <ion-label>\n          <h3>Share crash reports</h3>\n        </ion-label>\n        <ion-toggle color=\"tertiary\" slot=\"end\"></ion-toggle>\n      </ion-item>\n\n      <ion-item color=\"primary\" detail=\"false\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"document\"></ion-icon>\n        <ion-label>\n          <h3>Protocols</h3>\n        </ion-label>\n        <ion-toggle color=\"tertiary\" slot=\"end\"></ion-toggle>\n      </ion-item>\n    </ion-list>\n\n    <p>\n      <ion-text color=\"medium\">Activate this function to auto share crash reports with us. Important: no personal or financial data is shared.</ion-text>\n    </p>\n\n    <hr class=\"hr-medium\">\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item color=\"primary\" button detail=false>\n        <ion-icon slot=\"start\" color=\"tertiary\" name=\"close\"></ion-icon>\n        <ion-label color=\"tertiary\">\n          <h3>Delete account</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_ajustes_account_account_module_ts.js.map