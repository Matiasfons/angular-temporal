(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_styleguide_styleguide_module_ts"],{

/***/ 266:
/*!**********************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleguidePageRoutingModule": () => (/* binding */ StyleguidePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _styleguide_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleguide.page */ 44236);




const routes = [{
  path: '',
  component: _styleguide_page__WEBPACK_IMPORTED_MODULE_0__.StyleguidePage
}];
let StyleguidePageRoutingModule = class StyleguidePageRoutingModule {};
StyleguidePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], StyleguidePageRoutingModule);


/***/ }),

/***/ 95594:
/*!**************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleguidePageModule": () => (/* binding */ StyleguidePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _styleguide_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleguide-routing.module */ 266);
/* harmony import */ var _styleguide_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleguide.page */ 44236);







let StyleguidePageModule = class StyleguidePageModule {};
StyleguidePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _styleguide_routing_module__WEBPACK_IMPORTED_MODULE_0__.StyleguidePageRoutingModule],
  declarations: [_styleguide_page__WEBPACK_IMPORTED_MODULE_1__.StyleguidePage]
})], StyleguidePageModule);


/***/ }),

/***/ 44236:
/*!************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleguidePage": () => (/* binding */ StyleguidePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _styleguide_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleguide.page.html?ngResource */ 14629);
/* harmony import */ var _styleguide_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleguide.page.scss?ngResource */ 36026);
/* harmony import */ var _styleguide_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styleguide_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let StyleguidePage = class StyleguidePage {
  constructor() {
    this.diaryEntries = [{
      date: '2024-05-21',
      transactions: [{
        account: 'Caja',
        debit: '100.00',
        credit: ''
      }, {
        account: 'Ventas',
        debit: '',
        credit: '100.00'
      }]
    }, {
      date: '2024-05-22',
      transactions: [{
        account: 'Bancos',
        debit: '200.00',
        credit: ''
      }, {
        account: 'Clientes',
        debit: '',
        credit: '200.00'
      }]
    }];
  }
  ngOnInit() {}
};
StyleguidePage.ctorParameters = () => [];
StyleguidePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-styleguide',
  template: _styleguide_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_styleguide_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], StyleguidePage);


/***/ }),

/***/ 36026:
/*!*************************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host ion-list {\n  background-color: var(--ion-color-primary);\n}", "",{"version":3,"sources":["webpack://./src/app/pages/secure/styleguide/styleguide.page.scss"],"names":[],"mappings":"AACE;EACE,0CAAA;AAAJ","sourcesContent":[":host {\n  ion-list {\n    background-color: var(--ion-color-primary);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 14629:
/*!*************************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-title color=\"light\">\n      Style Guide\n    </ion-title>\n\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"secondary\" routerLink=\"/ajustes\">\n        <ion-icon slot=\"icon-only\" name=\"cog\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card *ngFor=\"let entry of diaryEntries\" class=\"ion-margin\">\n    <ion-card-header>\n      <ion-card-title>{{ entry.date }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\"><strong>Cuenta</strong></ion-col>\n          <ion-col size=\"3\"><strong>Debe</strong></ion-col>\n          <ion-col size=\"3\"><strong>Haber</strong></ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let transaction of entry.transactions\">\n          <ion-col size=\"6\">{{ transaction.account }}</ion-col>\n          <ion-col size=\"3\">{{ transaction.debit }}</ion-col>\n          <ion-col size=\"3\">{{ transaction.credit }}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_styleguide_styleguide_module_ts.js.map