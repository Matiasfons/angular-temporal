(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_login_login_module_ts"],{

/***/ 92805:
/*!************************************************************!*\
  !*** ./src/app/pages/public/login/login-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 62437);




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
let LoginPageRoutingModule = class LoginPageRoutingModule {};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LoginPageRoutingModule);


/***/ }),

/***/ 88893:
/*!****************************************************!*\
  !*** ./src/app/pages/public/login/login.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 92805);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 62437);







let LoginPageModule = class LoginPageModule {};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
  declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
})], LoginPageModule);


/***/ }),

/***/ 62437:
/*!**************************************************!*\
  !*** ./src/app/pages/public/login/login.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 89769);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 74718);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);










let LoginPage = class LoginPage {
  constructor(authService, loadingController, formBuilder, toastService, router, navCtrl) {
    this.authService = authService;
    this.loadingController = loadingController;
    this.formBuilder = formBuilder;
    this.toastService = toastService;
    this.router = router;
    this.navCtrl = navCtrl;
    this.txt_usuario = "";
    this.txt_cedula = "";
    this.txt_clave = "";
    this.clave = "";
    this.claveType = 'password';
    this.backgroundImage = "url('/assets/obelisco.png')";
    this.current_year = new Date().getFullYear();
    this.submit_attempt = false;
  }
  ngOnInit() {
    // Setup form
    this.login_form = this.formBuilder.group({
      cedula: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])],
      clave: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])]
    });
  }
  // Sign in
  /*async login() {
       this.submit_attempt = true;
       // If email or password empty
    if (this.login_form.value.txt_cedula == '' || this.login_form.value.txt_clave == '') {
      this.toastService.presentToast('Error', 'Please input email and password', 'top', 'danger', 2000);
       } else {
         // Proceed with loading overlay
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p>Loging in...</p><span>Please be patient.</span>',
        spinner: 'crescent'
      });
      await loading.present();
         // Fake timeout
      setTimeout(async () => {
        // Sign in success
        await this.router.navigate(['/home']);
        loading.dismiss();
      }, 2000);
       }
    
  }*/
  login() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      let datos = {
        accion: "login",
        usuario: this.txt_cedula,
        clave: this.txt_clave
      };
      this.authService.postData(datos).subscribe(res => {
        if (this.login_form.value.cedula == '' || this.login_form.value.clave == '') {
          this.toastService.presentToast('Error', 'Ingrese su cédula y contraseña', 'top', 'danger', 2000);
        }
        if (res.estado == true) {
          this.authService.creatSession('codigo', res.persona[0].codigo);
          this.authService.creatSession('persona', res.persona[0].nombre + " " + res.persona[0].apellido);
          this.authService.creatSession('nombre', res.persona[0].nombre);
          this.authService.creatSession('apellido', res.persona[0].apellido);
          this.authService.creatSession('cedula', res.persona[0].cedula);
          this.authService.creatSession('correo', res.persona[0].correo);
          this.authService.creatSession("imgUrl", res.persona[0].img_perfil);
          this.authService.showToast2('Bienvenido');
          this.navCtrl.navigateRoot(['/home']);
        } else {
          this.authService.showToast(res.mensaje);
        }
      });
    });
  }
  togglePasswordVisibility(show) {
    this.claveType = show ? 'text' : 'password';
  }
  setBackgroundImage(imageUrl) {
    this.backgroundImage = `url('${imageUrl}')`;
  }
};
LoginPage.ctorParameters = () => [{
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LoginPage);


/***/ }),

/***/ 74718:
/*!***************************************************************!*\
  !*** ./src/app/pages/public/login/login.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n:host body {\n  background-color: var(--ion-color-dark);\n}\n:host ion-content {\n  --background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(\"/src/assets/obelisco.png\");\n}\n:host ion-item {\n  --border-radius: 8px;\n  margin-bottom: 8px;\n}\n:host .logo-container {\n  text-align: center;\n  margin-bottom: 60px; /* Ajusta según sea necesario */\n  margin-top: 100px; /* Agrega un margen superior */\n}\n:host .logo-container h1 {\n  font-size: 40px;\n  font-weight: 800;\n  margin-bottom: 10px; /* Ajusta según sea necesario */\n}\n:host p {\n  margin-bottom: 10px; /* Ajusta según sea necesario */\n}\n:host .social-icons-container {\n  margin-top: 60px; /* Agrega un margen superior */\n}\n\n.center-container {\n  display: flex;\n  justify-content: center;\n}\n\n.small-width-button {\n  width: 150px;\n  font-size: 12px;\n  padding: 4px 8px;\n  display: flex;\n  align-items: center;\n}\n\n.icon-spacing {\n  margin-right: 3px;\n  font-size: 19px; /* Ajusta el tamaño del ícono según sea necesario */\n}\n\n.button-text {\n  color: rgb(255, 255, 255);\n}", "",{"version":3,"sources":["webpack://./src/app/pages/public/login/login.page.scss"],"names":[],"mappings":"AAAA,gBAAgB;AACd;EACE,uCAAA;AACJ;AAEE;EACE,kHAAA;AAAJ;AAGE;EACE,oBAAA;EACA,kBAAA;AADJ;AAIE;EACE,kBAAA;EACA,mBAAA,EAAA,+BAAA;EACA,iBAAA,EAAA,8BAAA;AAFJ;AAKE;EACE,eAAA;EACA,gBAAA;EACA,mBAAA,EAAA,+BAAA;AAHJ;AAME;EACE,mBAAA,EAAA,+BAAA;AAJJ;AAOE;EACE,gBAAA,EAAA,8BAAA;AALJ;;AAQA;EACE,aAAA;EACA,uBAAA;AALF;;AAQA;EACE,YAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;AALF;;AAQA;EACE,iBAAA;EACA,eAAA,EAAA,mDAAA;AALF;;AAQA;EACE,yBAAA;AALF","sourcesContent":[":host {\n  body {\n    background-color: var(--ion-color-dark);\n  }\n\n  ion-content {\n    --background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/src/assets/obelisco.png');\n  }\n\n  ion-item {\n    --border-radius: 8px;\n    margin-bottom: 8px;\n  }\n\n  .logo-container {\n    text-align: center;\n    margin-bottom: 60px; /* Ajusta según sea necesario */\n    margin-top: 100px; /* Agrega un margen superior */\n  }\n\n  .logo-container h1 {\n    font-size: 40px;\n    font-weight: 800;\n    margin-bottom: 10px; /* Ajusta según sea necesario */\n  }\n\n  p {\n    margin-bottom: 10px; /* Ajusta según sea necesario */\n  }\n\n  .social-icons-container {\n    margin-top: 60px; /* Agrega un margen superior */\n  }\n}\n.center-container {\n  display: flex;\n  justify-content: center;\n}\n\n.small-width-button {\n  width: 150px;\n  font-size: 12px;\n  padding: 4px 8px;\n  display: flex;\n  align-items: center;\n}\n\n.icon-spacing {\n  margin-right: 3px;\n  font-size: 19px; /* Ajusta el tamaño del ícono según sea necesario */\n}\n\n.button-text {\n  color: rgb(255, 255, 255);\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 89769:
/*!***************************************************************!*\
  !*** ./src/app/pages/public/login/login.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n</ion-header>\n\n<ion-content class=\"content-container\" [ngStyle]=\"{'background-image': backgroundImage, 'background-size': 'cover', 'background-position': 'center'}\">\n  <div class=\"ion-padding ion-full-height ion-flex ion-flex-center\">\n    <div class=\"logo-container\">\n      <h1 class=\"animate__animated animate__fadeInUp\">\n        <ion-text color=\"secondary\">Ingreso</ion-text>\n      </h1>\n      <p class=\"animate__animated animate__fadeInUp\">\n        <ion-text color=\"secondary\">Ingrese a su cuenta</ion-text>\n      </p>\n    </div>\n\n    <!-- Login form -->\n    <form class=\"form-default\" [formGroup]=\"login_form\" (submit)=\"login()\">\n      <ion-item color=\"medium\" class=\"animate__animated animate__fadeInUp\">\n        <ion-label  position=\"floating\">\n          <ion-icon name=\"card\" item-start></ion-icon>\n          Cédula\n        </ion-label>\n        <ion-input color=\"dark\" type=\"text\" formControlName=\"cedula\" [(ngModel)]=\"txt_cedula\"></ion-input>\n      </ion-item>\n\n      <ion-item color=\"medium\" class=\"animate__animated animate__fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon  name=\"lock-closed-outline\"></ion-icon>\n          Contraseña\n        </ion-label>\n        <ion-input\n          required\n          color=\"dark\"\n          formControlName=\"clave\"\n          [type]=\"claveType\"\n          placeholder=\"Ingrese su contraseña, mínimo 8 dígitos\"\n          [(ngModel)]=\"txt_clave\">\n        </ion-input>\n        <ion-button\n          fill=\"clear\"\n          size=\"small\"\n          slot=\"end\"\n          (mousedown)=\"togglePasswordVisibility(true)\"\n          (mouseup)=\"togglePasswordVisibility(false)\"\n          (mouseleave)=\"togglePasswordVisibility(false)\">\n          <ion-icon [name]=\"claveType === 'password' ? 'eye-outline' : 'eye-off-outline'\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n      <ion-button class=\"ion-margin-top\" type=\"submit\" expand=\"block\" size=\"large\" color=\"danger\">\n        INICIAR SESIÓN\n      </ion-button>\n     \n      <ion-button color=\"secondary\" fill=\"clear\" expand=\"block\" class=\"ion-button-small ion-margin-top-medium\" routerLink=\"/recuperer_c\">\n        ¿Olvidé mi contraseña?\n      </ion-button>\n\n      <div color=\"white\" class=\"center-container\">\n        <ion-button color=\"dark\" class=\"center-container\" routerLink=\"/registro\">\n          <ion-icon color=\"medium\" name=\"person-add-outline\" class=\"icon-spacing\"></ion-icon>\n          <span class=\"button-text\">Registrarse</span>\n        </ion-button>\n      </div>\n    </form>\n  </div>\n  \n  <!-- Social media icons -->\n  <div  class=\"ion-text-center ion-margin-top social-icons-container\">\n    <ion-button fill=\"clear\" href=\"https://www.facebook.com/AlcaldiaIbarra/?locale=es_LA\">\n      <ion-icon color=\"dark\" name=\"logo-facebook\" size=\"large\"></ion-icon>\n    </ion-button>\n    <ion-button fill=\"clear\" href=\"https://www.instagram.com/alcaldiaibarra/?hl=es\">\n      <ion-icon color=\"dark\" name=\"logo-instagram\" size=\"large\"></ion-icon>\n    </ion-button>\n    <ion-button fill=\"clear\" href=\"https://x.com/alcaldiaibarra?lang=es\">\n      <ion-icon color=\"dark\" name=\"logo-twitter\" size=\"large\"></ion-icon>\n    </ion-button>\n  </div>\n  <div class=\"ion-text-center ion-margin-top\">\n    <ion-text color=\"dark\">\n      <small>&copy; Gad Municipal - Ibarra {{current_year}}</small>\n    </ion-text>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_login_login_module_ts.js.map