(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_recuperer_c_recuperer_c_module_ts"],{

/***/ 72151:
/*!****************************************************************!*\
  !*** ./src/app/pages/public/recuperer_c/recuperer_c.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetPageModule": () => (/* binding */ PasswordResetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _recuperer_ct_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recuperer_ct-routing.module */ 52986);
/* harmony import */ var _recuperer_c_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recuperer_c.page */ 27197);







let PasswordResetPageModule = class PasswordResetPageModule {};
PasswordResetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _recuperer_ct_routing_module__WEBPACK_IMPORTED_MODULE_0__.PasswordResetPageRoutingModule],
  declarations: [_recuperer_c_page__WEBPACK_IMPORTED_MODULE_1__.PasswordResetPage]
})], PasswordResetPageModule);


/***/ }),

/***/ 27197:
/*!**************************************************************!*\
  !*** ./src/app/pages/public/recuperer_c/recuperer_c.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetPage": () => (/* binding */ PasswordResetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _recuperer_c_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recuperer_c.page.html?ngResource */ 83083);
/* harmony import */ var _recuperer_c_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recuperer_c.page.scss?ngResource */ 29383);
/* harmony import */ var _recuperer_c_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_recuperer_c_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);









let PasswordResetPage = class PasswordResetPage {
  constructor(formBuilder, http, loadingController, toastService, router) {
    this.formBuilder = formBuilder;
    this.http = http;
    this.loadingController = loadingController;
    this.toastService = toastService;
    this.router = router;
    this.submit_attempt = false;
    this.current_year = new Date().getFullYear();
  }
  ngOnInit() {
    this.reset_form = this.formBuilder.group({
      cedula: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(10)])]
    });
  }
  resetPassword() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
      this.submit_attempt = true;
      if (this.reset_form.valid) {
        const loading = yield this.loadingController.create({
          cssClass: 'default-loading',
          message: '<p>Enviando solicitud...</p><span>Por favor, espere.</span>',
          spinner: 'crescent'
        });
        yield loading.present();
        const cedula = this.reset_form.value.cedula;
        const datos = {
          accion: 'recuperar_contrasena',
          cedula
        };
        this.http.post("http://localhost/ACE/WsMunicipioIonic/ws_gad.php", datos).subscribe(response => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
          loading.dismiss();
          if (response.estado) {
            yield this.toastService.presentToast('Éxito', response.mensaje, 'top', 'success', 2000);
          } else {
            yield this.toastService.presentToast('Error', response.mensaje, 'top', 'danger', 2000);
          }
        }), error => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
          loading.dismiss();
          yield this.toastService.presentToast('Error', 'Error al enviar la solicitud de recuperación de contraseña.', 'top', 'danger', 2000);
        }));
      } else {
        yield this.toastService.presentToast('Error', 'Por favor ingrese una cédula válida.', 'top', 'danger', 2000);
      }
    });
  }
};
PasswordResetPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}];
PasswordResetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-recuperer_c',
  template: _recuperer_c_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_recuperer_c_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PasswordResetPage);


/***/ }),

/***/ 52986:
/*!*************************************************************************!*\
  !*** ./src/app/pages/public/recuperer_c/recuperer_ct-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetPageRoutingModule": () => (/* binding */ PasswordResetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _recuperer_c_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recuperer_c.page */ 27197);




const routes = [{
  path: '',
  component: _recuperer_c_page__WEBPACK_IMPORTED_MODULE_0__.PasswordResetPage
}];
let PasswordResetPageRoutingModule = class PasswordResetPageRoutingModule {};
PasswordResetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PasswordResetPageRoutingModule);


/***/ }),

/***/ 29383:
/*!***************************************************************************!*\
  !*** ./src/app/pages/public/recuperer_c/recuperer_c.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host body {\n  background-color: var(--ion-color-dark);\n}\n:host ion-item {\n  --border-radius: 8px;\n  margin-bottom: 8px;\n}\n:host .logo-container {\n  text-align: center;\n}\n:host .logo-container h1 {\n  font-size: 32px;\n  font-weight: 800;\n}\n:host .logo-container p {\n  margin-bottom: 42px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/public/recuperer_c/recuperer_c.page.scss"],"names":[],"mappings":"AACE;EACE,uCAAA;AAAJ;AAGE;EACE,oBAAA;EACA,kBAAA;AADJ;AAIE;EACE,kBAAA;AAFJ;AAII;EACE,eAAA;EACA,gBAAA;AAFN;AAKI;EACE,mBAAA;AAHN","sourcesContent":[":host {\n  body {\n    background-color: var(--ion-color-dark);\n  }\n\n  ion-item {\n    --border-radius: 8px;\n    margin-bottom: 8px;\n  }\n\n  .logo-container {\n    text-align: center;\n\n    h1 {\n      font-size: 32px;\n      font-weight: 800;\n    }\n\n    p {\n      margin-bottom: 42px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 83083:
/*!***************************************************************************!*\
  !*** ./src/app/pages/public/recuperer_c/recuperer_c.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Recuperar Contraseña\" color=\"light\" defaultHref=\"/password-form\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding ion-full-height ion-flex ion-flex-center\">\n    <div class=\"logo-container\">\n      <h1 class=\"animate__animated animate__fadeInUp\">\n        <ion-text color=\"dark\">¿Olvidaste tu contraseña?</ion-text>\n      </h1>\n      <p class=\"animate__animated animate__fadeInUp\">\n        <ion-text color=\"secondary\">Ingresa tu cédula para recuperar tu contraseña.</ion-text>\n      </p>\n    </div>\n\n    <form class=\"form-default\" [formGroup]=\"reset_form\" (ngSubmit)=\"resetPassword()\">\n      <ion-item color=\"dark\" class=\"animate__animated animate__fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"person\" slot=\"start\"></ion-icon>\n          Cédula\n        </ion-label>\n        <ion-input color=\"light\" type=\"text\" formControlName=\"cedula\" maxlength=\"10\" pattern=\"[0-9]*\" inputmode=\"numeric\">\n        </ion-input>\n      </ion-item>   \n\n      <ion-button expand=\"block\" size=\"large\" color=\"danger\" class=\"ion-margin-top\" type=\"submit\" [disabled]=\"reset_form.invalid\">\n        Recuperar Contraseña\n      </ion-button>\n    </form>\n\n    <div class=\"ion-text-center ion-margin-top\">\n      <ion-text color=\"medium\">\n        <small>&copy;{{current_year}} TuEmpresa</small>\n      </ion-text>\n    </div>\n  </div>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_recuperer_c_recuperer_c_module_ts.js.map