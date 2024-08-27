(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_password-form_password-form_module_ts"],{

/***/ 72519:
/*!****************************************************************************!*\
  !*** ./src/app/pages/public/password-form/password-form-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordFormPageRoutingModule": () => (/* binding */ PasswordFormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _password_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-form.page */ 68471);




const routes = [{
  path: '',
  component: _password_form_page__WEBPACK_IMPORTED_MODULE_0__.PasswordFormPage
}];
let PasswordFormPageRoutingModule = class PasswordFormPageRoutingModule {};
PasswordFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PasswordFormPageRoutingModule);


/***/ }),

/***/ 10443:
/*!********************************************************************!*\
  !*** ./src/app/pages/public/password-form/password-form.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordFormPageModule": () => (/* binding */ PasswordFormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _password_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-form-routing.module */ 72519);
/* harmony import */ var _password_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-form.page */ 68471);







let PasswordFormPageModule = class PasswordFormPageModule {};
PasswordFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _password_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.PasswordFormPageRoutingModule],
  declarations: [_password_form_page__WEBPACK_IMPORTED_MODULE_1__.PasswordFormPage]
})], PasswordFormPageModule);


/***/ }),

/***/ 68471:
/*!******************************************************************!*\
  !*** ./src/app/pages/public/password-form/password-form.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordFormPage": () => (/* binding */ PasswordFormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _password_form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-form.page.html?ngResource */ 72863);
/* harmony import */ var _password_form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-form.page.scss?ngResource */ 37475);
/* harmony import */ var _password_form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_password_form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);








let PasswordFormPage = class PasswordFormPage {
  constructor(activatedRoute, http, loadingController, toastService, router) {
    this.activatedRoute = activatedRoute;
    this.http = http;
    this.loadingController = loadingController;
    this.toastService = toastService;
    this.router = router;
    this.password = '';
    this.confirmPassword = '';
    this.submitAttempt = false;
    this.currentYear = new Date().getFullYear();
    this.token = '';
  }
  ngOnInit() {
    this.token = this.activatedRoute.snapshot.queryParams['token'];
    if (!this.token) {
      this.router.navigate(['/signin']);
    }
  }
  resetPassword() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      this.submitAttempt = true;
      if (this.password && this.confirmPassword && this.password === this.confirmPassword) {
        const loading = yield this.loadingController.create({
          cssClass: 'default-loading',
          message: '<p>Restableciendo contraseña...</p><span>Por favor, espere.</span>',
          spinner: 'crescent'
        });
        yield loading.present();
        const data = {
          accion: 'nueva_contrasena',
          token: this.token,
          nueva_contrasena: this.password
        };
        this.http.post("http://localhost/ACE/WsMunicipioIonic/ws_gad.php", data).subscribe(response => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
          yield loading.dismiss();
          if (response.estado) {
            yield this.toastService.presentToast('Éxito', response.mensaje, 'top', 'success', 2000);
            this.router.navigate(['/signin']);
          } else {
            yield this.toastService.presentToast('Error', response.mensaje, 'top', 'danger', 2000);
          }
        }), error => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
          yield loading.dismiss();
          yield this.toastService.presentToast('Error', 'Error al restablecer la contraseña.', 'top', 'danger', 2000);
        }));
      } else {
        yield this.toastService.presentToast('Error', 'Por favor ingrese contraseñas válidas y asegúrese de que coincidan.', 'top', 'danger', 2000);
      }
    });
  }
};
PasswordFormPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];
PasswordFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-password-reset-form',
  template: _password_form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_password_form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PasswordFormPage);


/***/ }),

/***/ 37475:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/public/password-form/password-form.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 72863:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/public/password-form/password-form.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Recuperar Contraseña\" color=\"light\" defaultHref=\"/login\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding ion-full-height ion-flex ion-flex-center\">\n    <div class=\"logo-container\">\n      <h1 class=\"animate__animated animate__fadeInUp\">\n        <ion-text color=\"light\">Restablecer Contraseña</ion-text>\n      </h1>\n      <p class=\"animate__animated animate__fadeInUp\">\n        <ion-text color=\"secondary\">Ingrese su nueva contraseña.</ion-text>\n      </p>\n    </div>\n\n    <form class=\"form-default\" (ngSubmit)=\"resetPassword()\">\n      <ion-item color=\"dark\" class=\"animate__animated animate__fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"lock-closed\" slot=\"start\"></ion-icon>\n          Nueva Contraseña\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" required></ion-input>\n      </ion-item>\n\n      <ion-item color=\"dark\" class=\"animate__animated animate__fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"lock-closed\" slot=\"start\"></ion-icon>\n          Confirmar Contraseña\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"password\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" required></ion-input>\n      </ion-item>\n\n      <ion-button expand=\"block\" size=\"large\" color=\"danger\" class=\"ion-margin-top\" type=\"submit\"\n        [disabled]=\"!password || !confirmPassword || password !== confirmPassword\">\n        Restablecer Contraseña\n      </ion-button>\n    </form>\n\n    <div class=\"ion-text-center ion-margin-top\">\n      <ion-text color=\"medium\">\n        <small>&copy;{{currentYear}} TuEmpresa</small>\n      </ion-text>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_password-form_password-form_module_ts.js.map