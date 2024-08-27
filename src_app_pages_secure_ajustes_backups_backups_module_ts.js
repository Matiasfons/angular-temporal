(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_ajustes_backups_backups_module_ts"],{

/***/ 39245:
/*!************************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/backups/backups-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackupsPageRoutingModule": () => (/* binding */ BackupsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _backups_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backups.page */ 2651);




const routes = [{
  path: '',
  component: _backups_page__WEBPACK_IMPORTED_MODULE_0__.BackupsPage
}];
let BackupsPageRoutingModule = class BackupsPageRoutingModule {};
BackupsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], BackupsPageRoutingModule);


/***/ }),

/***/ 63253:
/*!****************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/backups/backups.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackupsPageModule": () => (/* binding */ BackupsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _backups_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backups-routing.module */ 39245);
/* harmony import */ var _backups_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backups.page */ 2651);







let BackupsPageModule = class BackupsPageModule {};
BackupsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _backups_routing_module__WEBPACK_IMPORTED_MODULE_0__.BackupsPageRoutingModule],
  declarations: [_backups_page__WEBPACK_IMPORTED_MODULE_1__.BackupsPage]
})], BackupsPageModule);


/***/ }),

/***/ 2651:
/*!**************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/backups/backups.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackupsPage": () => (/* binding */ BackupsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _backups_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backups.page.html?ngResource */ 56079);
/* harmony import */ var _backups_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backups.page.scss?ngResource */ 70054);
/* harmony import */ var _backups_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backups_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let BackupsPage = class BackupsPage {
  constructor() {}
  ngOnInit() {}
};
BackupsPage.ctorParameters = () => [];
BackupsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-backups',
  template: _backups_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_backups_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BackupsPage);


/***/ }),

/***/ 70054:
/*!***************************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/backups/backups.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host ion-list {\n  background-color: var(--ion-color-primary);\n}", "",{"version":3,"sources":["webpack://./src/app/pages/secure/ajustes/backups/backups.page.scss"],"names":[],"mappings":"AACE;EACE,0CAAA;AAAJ","sourcesContent":[":host {\n  ion-list {\n    background-color: var(--ion-color-primary);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 56079:
/*!***************************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/backups/backups.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"secondary\" text=\"Ajustes\" defaultHref=\"/ajustes\">\n      </ion-back-button>\n    </ion-buttons>\n\n    <ion-title color=\"light\">\n      Backups\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div class=\"ion-padding\">\n\n    <ion-list-header class=\"ion-list-header-small\">\n      <ion-label>\n        <ion-text color=\"tertiary\">Backups (3)</ion-text>\n      </ion-label>\n    </ion-list-header>\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item color=\"primary\" detail=\"false\">\n        <ion-label>\n          <h3>01 Jan, 2023</h3>\n          <p class=\"font-size-smallest\">10:00 AM &middot; 6.98 MB</p>\n        </ion-label>\n        <ion-button slot=\"end\" color=\"secondary\">\n          Restore\n        </ion-button>\n      </ion-item>\n\n      <ion-item color=\"primary\" detail=\"false\">\n        <ion-label>\n          <h3>01 Dec, 2022</h3>\n          <p class=\"font-size-smallest\">10:00 AM &middot; 6.40 MB</p>\n        </ion-label>\n        <ion-button slot=\"end\" color=\"secondary\">\n          Restore\n        </ion-button>\n      </ion-item>\n\n      <ion-item color=\"primary\" detail=\"false\">\n        <ion-label>\n          <h3>01 Nov, 2022</h3>\n          <p class=\"font-size-smallest\">10:00 AM &middot; 5.15 MB</p>\n        </ion-label>\n        <ion-button slot=\"end\" color=\"secondary\">\n          Restore\n        </ion-button>\n      </ion-item>\n    </ion-list>\n    <p class=\"list-description\">\n      <ion-text color=\"medium\">After restoring a backup you have to login again.</ion-text>\n    </p>\n\n    <hr class=\"hr-medium\">\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item color=\"primary\" button detail=false>\n        <ion-icon slot=\"start\" color=\"tertiary\" name=\"cloud-upload\"></ion-icon>\n        <ion-label color=\"tertiary\">\n          <h3>Create backup now</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_ajustes_backups_backups_module_ts.js.map