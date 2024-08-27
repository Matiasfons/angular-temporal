(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_ajustes_ajustes_module_ts"],{

/***/ 22058:
/*!****************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/ajustes-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjustesPageRoutingModule": () => (/* binding */ AjustesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ajustes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajustes.page */ 20273);




const routes = [{
  path: '',
  component: _ajustes_page__WEBPACK_IMPORTED_MODULE_0__.AjustesPage
}, {
  path: 'account',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_ajustes_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 62172)).then(m => m.AccountPageModule)
}, {
  path: 'devices',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_ajustes_devices_devices_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./devices/devices.module */ 87651)).then(m => m.DevicesPageModule)
}, {
  path: 'backups',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_ajustes_backups_backups_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./backups/backups.module */ 63253)).then(m => m.BackupsPageModule)
}];
let AjustesPageRoutingModule = class AjustesPageRoutingModule {};
AjustesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AjustesPageRoutingModule);


/***/ }),

/***/ 69070:
/*!********************************************************!*\
  !*** ./src/app/pages/secure/ajustes/ajustes.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjustesPageModule": () => (/* binding */ AjustesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ajustes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajustes-routing.module */ 22058);
/* harmony import */ var _ajustes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajustes.page */ 20273);







let AjustesPageModule = class AjustesPageModule {};
AjustesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ajustes_routing_module__WEBPACK_IMPORTED_MODULE_0__.AjustesPageRoutingModule],
  declarations: [_ajustes_page__WEBPACK_IMPORTED_MODULE_1__.AjustesPage]
})], AjustesPageModule);


/***/ }),

/***/ 20273:
/*!******************************************************!*\
  !*** ./src/app/pages/secure/ajustes/ajustes.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjustesPage": () => (/* binding */ AjustesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ajustes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajustes.page.html?ngResource */ 34762);
/* harmony import */ var _ajustes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajustes.page.scss?ngResource */ 59075);
/* harmony import */ var _ajustes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ajustes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);









let AjustesPage = class AjustesPage {
  constructor(authService, loadingController, formBuilder, toastService, router) {
    this.authService = authService;
    this.loadingController = loadingController;
    this.formBuilder = formBuilder;
    this.toastService = toastService;
    this.router = router;
    this.nombre = "";
    this.correo = "";
    this.authService.getSession('persona').then(res => {
      this.nombre = res;
    });
    this.authService.getSession('correo').then(res => {
      this.correo = res;
    });
    this.authService.getSession("imgUrl").then(res => {
      this.imgUrl = res;
    });
  }
  ngOnInit() {}
  // Sign out
  signOut() {
    this.authService.closeSession();
  }
};
AjustesPage.ctorParameters = () => [{
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}];
AjustesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-ajustes',
  template: _ajustes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_ajustes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AjustesPage);


/***/ }),

/***/ 59075:
/*!*******************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/ajustes.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host ion-list {\n  background-color: var(--ion-color-primary);\n}\n\n.profile-card {\n  border-radius: 0;\n  background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary));\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  text-align: center;\n}\n.profile-card ion-avatar {\n  width: 128px;\n  height: 128px;\n  text-align: center;\n  margin-bottom: 30px;\n}\n.profile-card ion-avatar img {\n  height: 128px;\n  width: 128px;\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-light);\n  display: inline;\n  box-shadow: 0 0 28px hsla(0deg, 0%, 100%, 0.65);\n}", "",{"version":3,"sources":["webpack://./src/app/pages/secure/ajustes/ajustes.page.scss"],"names":[],"mappings":"AACE;EACE,0CAAA;AAAJ;;AAIA;EACE,gBAAA;EACA,oFAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;AADF;AAGE;EACE,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;AADJ;AAGI;EACE,aAAA;EACA,YAAA;EACA,kBAAA;EACA,wCAAA;EACA,eAAA;EACA,+CAAA;AADN","sourcesContent":[":host {\n  ion-list {\n    background-color: var(--ion-color-primary);\n  }\n}\n\n.profile-card {\n  border-radius: 0;\n  background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary));\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  text-align: center;\n\n  ion-avatar {\n    width: 128px;\n    height: 128px;\n    text-align: center;\n    margin-bottom: 30px;\n\n    img {\n      height: 128px;\n      width: 128px;\n      border-radius: 50%;\n      border: 2px solid var(--ion-color-light);\n      display: inline;\n      box-shadow: 0 0 28px hsl(0deg 0% 100% / 65%);\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 34762:
/*!*******************************************************************!*\
  !*** ./src/app/pages/secure/ajustes/ajustes.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" text=\"Back\" defaultHref=\"/home\">\n      </ion-back-button>\n    </ion-buttons>\n\n    <ion-title color=\"light\">\n      Ajustes\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-card class=\"ion-no-margin profile-card\">\n    <ion-card-content>\n      <ion-avatar class=\"avatar-center\">\n        <img [src]=\"imgUrl ?  imgUrl : '../../../../assets/icon/logo.png'\" />\n      </ion-avatar>\n  \n      <h1>\n        <ion-text color=\"tertiary\"><strong>{{nombre}}</strong></ion-text>\n      </h1>\n  \n      <p>\n        <ion-text color=\"medium\">{{correo}}</ion-text>\n      </p>\n    </ion-card-content>\n  </ion-card>\n  \n\n  <div class=\"ion-padding\">\n\n    <ion-list-header class=\"ion-list-header-small\">\n      <ion-label>\n        <ion-text color=\"tertiary\">Personal</ion-text>\n      </ion-label>\n    </ion-list-header>\n\n    <ion-list lines=\"full\">\n      <ion-item color=\"primary\" button routerLink=\"profile/edit\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"person\"></ion-icon>\n        <ion-label>\n          <h3>Profile</h3>\n        </ion-label>\n      </ion-item>\n      <ion-item color=\"primary\" button routerLink=\"account\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"person-circle\"></ion-icon>\n        <ion-label>\n          <h3>Account ajustes</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <hr class=\"hr-medium\">\n\n    <ion-list-header class=\"ion-list-header-small\">\n      <ion-label>\n        <ion-text color=\"tertiary\">Synchronisation</ion-text>\n      </ion-label>\n    </ion-list-header>\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item color=\"primary\" detail=\"false\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"scan\"></ion-icon>\n        <ion-label>\n          <h3>Smart sync</h3>\n        </ion-label>\n        <ion-toggle color=\"tertiary\" checked slot=\"end\"></ion-toggle>\n      </ion-item>\n      <ion-item color=\"primary\" button routerLink=\"devices\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"phone-portrait\"></ion-icon>\n        <ion-label>\n          <h3>Registered devices</h3>\n        </ion-label>\n        <ion-note slot=\"end\" color=\"tertiary\">3</ion-note>\n      </ion-item>\n    </ion-list>\n\n    <p>\n      <ion-text color=\"medium\">Smart Sync synchronises banking data safely between all your registered devices.</ion-text>\n    </p>\n\n    <hr class=\"hr-medium\">\n\n    <ion-list-header class=\"ion-list-header-small\">\n      <ion-label>\n        <ion-text color=\"tertiary\">Security</ion-text>\n      </ion-label>\n    </ion-list-header>\n\n    <ion-list lines=\"full\">\n      <ion-item color=\"primary\" button>\n        <ion-icon slot=\"start\" color=\"medium\" name=\"lock-closed\"></ion-icon>\n        <ion-label>\n          <h3>Bloqui Pin</h3>\n        </ion-label>\n      </ion-item>\n      <ion-item color=\"primary\" detail=\"false\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"scan\"></ion-icon>\n        <ion-label>\n          <h3>Face ID</h3>\n        </ion-label>\n        <ion-toggle color=\"tertiary\" slot=\"end\"></ion-toggle>\n      </ion-item>\n      <ion-item color=\"primary\" button routerLink=\"backups\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"cloud-circle\"></ion-icon>\n        <ion-label>\n          <h3>Backups</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <hr class=\"hr-medium\">\n\n    <ion-list class=\"list-custom\" lines=\"full\" (click)=\"signOut()\">\n      <ion-item color=\"primary\" button detail=false>\n        <ion-icon slot=\"start\" color=\"light\" name=\"log-out\"></ion-icon>\n        <ion-label color=\"light\">\n          <h3>Sign out</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_ajustes_ajustes_module_ts.js.map