(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_registro_registro_module_ts"],{

/***/ 37339:
/*!******************************************************************!*\
  !*** ./src/app/pages/public/registro/registro-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 23805);




const routes = [{
  path: '',
  component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
}];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], RegistroPageRoutingModule);


/***/ }),

/***/ 15556:
/*!**********************************************************!*\
  !*** ./src/app/pages/public/registro/registro.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 37339);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 23805);







let RegistroPageModule = class RegistroPageModule {};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
  declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
})], RegistroPageModule);


/***/ }),

/***/ 23805:
/*!********************************************************!*\
  !*** ./src/app/pages/public/registro/registro.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page.html?ngResource */ 10620);
/* harmony import */ var _registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.scss?ngResource */ 25706);
/* harmony import */ var _registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var _terminos_condiciones_terminos_condiciones_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terminos-condiciones/terminos-condiciones.page */ 19287);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);










let RegistroPage = class RegistroPage {
  constructor(authService, router, formBuilder, toastService, modalController) {
    this.authService = authService;
    this.router = router;
    this.formBuilder = formBuilder;
    this.toastService = toastService;
    this.modalController = modalController;
    this.codigo = '';
    this.nacionalidades = [];
    this.ciudades = [];
    this.provincias = [];
    this.txt_nombre = '';
    this.txt_apellido = '';
    this.txt_fecha_nacimiento = '';
    this.sel_ecivil = '';
    this.txt_otro_ecivil = '';
    this.sel_etnia = '';
    this.txt_otra_etnia = '';
    this.sel_discapacidad = '';
    this.txt_tipodis = '';
    this.txt_porcentajedis = '';
    this.txt_ncarnetdis = '';
    this.sel_ocupacion = '';
    this.txt_otra_ocupacion = '';
    this.sel_nacionalidad = '51';
    this.sel_ciudad = '15';
    this.sel_provincia = '11';
    this.txt_parroquia = '';
    this.txt_barrio = '';
    this.txt_calle1 = '';
    this.txt_calle2 = '';
    this.sel_neducacion = '';
    this.sel_genero = '';
    this.txt_otro_genero = '';
    this.txt_cedula = '';
    this.txt_correo = '';
    this.txt_clave = '';
    this.txt_telefono = '';
    this.sel_tipoced = '';
    this.claveType = 'password';
    this.confClaveType = 'password';
    this.current_year = new Date().getFullYear();
    this.submit_attempt = false;
    this.check_terminos = false;
    this.authService.getSession('persona').then(res => {
      this.lnacionalidades(this.codigo), this.lciudades(this.codigo);
      this.lprovincias(this.codigo);
    });
  }
  ngOnInit() {
    // Setup form
    this.registro_form = this.formBuilder.group({
      tipo_documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      cedula_extranjera: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])],
      cedula: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, this.cedulaEcuatorianaValidator()])],
      nombres: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      apellidos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      fecha_nacimiento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      ecivil: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      otroecivil: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      etnia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      otraetnia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      discapacidad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      tipodis: [''],
      porcentajedis: [''],
      ncarnetdis: [''],
      ocupacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      otraocupacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      nacionalidad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      ciudad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      provincia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      parroquia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      barrio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      calle1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      calle2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      neducacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      genero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      otrogenero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      correo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])],
      telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])],
      clave: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])],
      conf_clave: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])],
      terminos_condiciones: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.requiredTrue]
    });
    let datos = {
      // Otros campos...
      terminos_condiciones: this.registro_form.value.terminos_condiciones
    };
  }
  // Función openModal
  openModal(modalName) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      const modal = yield this.modalController.create({
        component: _terminos_condiciones_terminos_condiciones_page__WEBPACK_IMPORTED_MODULE_4__.TerminosCondicionesPage,
        componentProps: {
          modalName
        }
      });
      return yield modal.present();
    });
  }
  // Sign up
  registrar() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      // Check terminos y Condiciones
      if (this.registro_form.value.terminos_condiciones == false) {
        this.submit_attempt = true;
        // this.authService.showToast('Debes aceptar los terminos y Condiciones');
        // return;
      } else {
        //SI LOS CAMPOS OBLIGATIRIOS ESTAN VACIOS
        if (this.registro_form.value.correo == '' || this.registro_form.value.tipo_documento == '' || this.registro_form.value.nombres == '' || this.registro_form.value.apellidos == '' || this.registro_form.value.fecha_nacimiento == '' || this.registro_form.value.ecivil == '' || this.registro_form.value.etnia == '' || this.registro_form.value.discapacidad == '' || this.registro_form.value.ocupacion == '' || this.registro_form.value.nacionalidad == '' || this.registro_form.value.ciudad == '' || this.registro_form.value.provincia == '' || this.registro_form.value.parroquia == '' || this.registro_form.value.parroquia == '' || this.registro_form.value.barrio == '' || this.registro_form.value.calle1 == '' || this.registro_form.value.calle2 == '' || this.registro_form.value.neducacion == '' || this.registro_form.value.genero == '' || this.registro_form.value.cedula == '' || this.registro_form.value.correo == '' || this.registro_form.value.telefono == '' || this.registro_form.value.clave == '' || this.registro_form.value.conf_clave == '') {
          this.registro_form.value.btn_reg = this.authService.showToast('Todos los campos son obligatorios y no pueden estar vacíos');
        }
        if (this.registro_form.value.clave !== this.registro_form.value.conf_clave) {
          this.authService.showToast('Las contraseñas no coinciden');
          return;
        }
        if (!this.validateEmail(this.registro_form.value.correo)) {
          this.authService.showToast('El correo electrónico no es válido');
          return;
        }
        if (!this.validatePhoneNumber(this.registro_form.value.telefono)) {
          this.authService.showToast('El número de teléfono no es válido');
          return;
        }
        if (this.registro_form.get('cedula').errors && this.registro_form.get('cedula').errors.cedulaEcuatoriana) {
          this.authService.showToast('La cedula no es válida');
          return;
        }
        let datos = {
          accion: 'n_usuario',
          cedula: this.txt_cedula,
          tipoced: this.sel_tipoced,
          nombre: this.txt_nombre,
          apellido: this.txt_apellido,
          ecivil: this.sel_ecivil,
          otroecivil: this.txt_otro_ecivil,
          etnia: this.sel_etnia,
          otraetnia: this.txt_otra_etnia,
          discapacidad: this.sel_discapacidad,
          tipodis: this.txt_tipodis,
          porcentajedis: this.txt_porcentajedis,
          ncarnetdis: this.txt_ncarnetdis,
          ocupacion: this.sel_ocupacion,
          otraocupacion: this.txt_otra_ocupacion,
          nacionalidad: this.sel_nacionalidad,
          ciudad: this.sel_ciudad,
          provincia: this.sel_provincia,
          parroquia: this.txt_parroquia,
          barrio: this.txt_barrio,
          calle1: this.txt_calle1,
          calle2: this.txt_calle2,
          fecha_nacimiento: this.txt_fecha_nacimiento,
          genero: this.sel_genero,
          otrogenero: this.txt_otro_genero,
          neducacion: this.sel_neducacion,
          telefono: this.txt_telefono,
          correo: this.txt_correo,
          clave: this.txt_clave,
          conf_clave: this.txt_clave
        };
        this.authService.postData(datos).subscribe(res => {
          if (res.estado == true) {
            this.mostrarMensajeRegistroExitoso();
            this.router.navigate(['/login']); // Redirecciona al inicio de sesión
          } else {
            this.authService.showToast(res.mensaje);
          }
        });
      }
    });
  }
  mostrarMensajeRegistroExitoso() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      const toast = yield this.toastService.presentToast('Éxito', '¡Se ha registrado correctamente!', 'top', 'success', 3000);
    });
  }
  validateEmail(correo) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(correo);
  }
  validatePhoneNumber(telefono) {
    const phoneRegex = /^[0-9]{10}$/; // Asumiendo que el número de teléfono tiene 10 dígitos
    return phoneRegex.test(telefono);
  }
  cedulaEcuatorianaValidator() {
    return control => {
      const cedula = control.value;
      if (cedula.length === 10) {
        const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        let suma = 0;
        for (let i = 0; i < coeficientes.length; i++) {
          let resultado = parseInt(cedula.charAt(i)) * coeficientes[i];
          if (resultado > 9) {
            resultado -= 9;
          }
          suma += resultado;
        }
        const digitoVerificador = suma % 10 === 0 ? 0 : 10 - suma % 10;
        if (parseInt(cedula.charAt(9)) !== digitoVerificador) {
          return {
            cedulaEcuatoriana: true
          };
        }
      }
      return null;
    };
  }
  lnacionalidades(codigo) {
    let datos = {
      accion: 'lnacionalidad'
    };
    this.authService.postData(datos).subscribe(res => {
      if (res.estado == true) {
        this.nacionalidades = res.datos;
      } else {
        this.nacionalidades.showToast(res.mensaje);
      }
    });
  }
  lciudades(codigo) {
    let datos = {
      accion: 'lciudad'
    };
    this.authService.postData(datos).subscribe(res => {
      if (res.estado == true) {
        this.ciudades = res.datos;
      } else {
        this.ciudades.showToast(res.mensaje);
      }
    });
  }
  lprovincias(codigo) {
    let datos = {
      accion: 'lprovincia'
    };
    this.authService.postData(datos).subscribe(res => {
      if (res.estado == true) {
        this.provincias = res.datos;
      } else {
        this.provincias.showToast(res.mensaje);
      }
    });
  }
  togglePasswordVisibility(show) {
    this.claveType = show ? 'text' : 'password';
  }
  toggleConfirmPasswordVisibility(show) {
    this.confClaveType = show ? 'text' : 'password';
  }
};
RegistroPage.ctorParameters = () => [{
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}];
RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-registro',
  template: _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RegistroPage);


/***/ }),

/***/ 19287:
/*!********************************************************************************!*\
  !*** ./src/app/pages/public/terminos-condiciones/terminos-condiciones.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerminosCondicionesPage": () => (/* binding */ TerminosCondicionesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _terminos_condiciones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terminos-condiciones.page.html?ngResource */ 58013);
/* harmony import */ var _terminos_condiciones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terminos-condiciones.page.scss?ngResource */ 87526);
/* harmony import */ var _terminos_condiciones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_terminos_condiciones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let TerminosCondicionesPage = class TerminosCondicionesPage {
  constructor(modalController) {
    this.modalController = modalController;
  }
  closeModal() {
    this.modalController.dismiss();
  }
  ngOnInit() {}
};
TerminosCondicionesPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
}];
TerminosCondicionesPage.propDecorators = {
  modalName: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }]
};
TerminosCondicionesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-terminos-condiciones',
  template: _terminos_condiciones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_terminos_condiciones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TerminosCondicionesPage);


/***/ }),

/***/ 25706:
/*!*********************************************************************!*\
  !*** ./src/app/pages/public/registro/registro.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host body {\n  background-color: var(--ion-color-dark);\n}\n:host ion-content {\n  --background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(\"/src/assets/escudo.png\") no-repeat center center;\n  background-color: white;\n}\n:host ion-item {\n  --border-radius: 8px;\n  margin-bottom: 8px;\n}\n:host .logo-container {\n  text-align: center;\n}\n:host .logo-container h1 {\n  font-size: 32px;\n  font-weight: 800;\n}\n:host .logo-container p {\n  margin-bottom: 42px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/public/registro/registro.page.scss"],"names":[],"mappings":"AACE;EACE,uCAAA;AAAJ;AAGE;EACE,uIAAA;EACA,uBAAA;AADJ;AAIE;EACE,oBAAA;EACA,kBAAA;AAFJ;AAKE;EACE,kBAAA;AAHJ;AAKI;EACE,eAAA;EACA,gBAAA;AAHN;AAMI;EACE,mBAAA;AAJN","sourcesContent":[":host {\n  body {\n    background-color: var(--ion-color-dark);\n  }\n\n  ion-content {\n    --background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url('/src/assets/escudo.png') no-repeat center center;\n    background-color: white;\n  }\n\n  ion-item {\n    --border-radius: 8px;\n    margin-bottom: 8px;\n  }\n\n  .logo-container {\n    text-align: center;\n\n    h1 {\n      font-size: 32px;\n      font-weight: 800;\n    }\n\n    p {\n      margin-bottom: 42px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 87526:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/public/terminos-condiciones/terminos-condiciones.page.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".terms-container {\n  background-color: #797773;\n  padding: 16px;\n  font-family: Arial, sans-serif;\n}\n\n.terms-text {\n  color: #ffffff;\n  font-size: 14px;\n  line-height: 1.6;\n  margin-bottom: 16px;\n}\n\n.terms-heading {\n  color: #ffffff;\n  font-size: 18px;\n  margin-top: 24px;\n  font-weight: 800;\n}\n\n.terms-list {\n  color: #ffffff;\n  font-size: 14px;\n  line-height: 1.6;\n  list-style-type: disc;\n  margin-left: 20px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/public/terminos-condiciones/terminos-condiciones.page.scss"],"names":[],"mappings":"AAAA;EACI,yBAAA;EACA,aAAA;EACA,8BAAA;AACJ;;AAEE;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;AACJ;;AAEE;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AACJ;;AAEE;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,iBAAA;AACJ","sourcesContent":[".terms-container {\n    background-color: #797773;\n    padding: 16px;\n    font-family: Arial, sans-serif;\n  }\n  \n  .terms-text {\n    color: #ffffff;\n    font-size: 14px;\n    line-height: 1.6;\n    margin-bottom: 16px;\n  }\n  \n  .terms-heading {\n    color: #ffffff;\n    font-size: 18px;\n    margin-top: 24px;\n    font-weight: 800;\n  }\n  \n  .terms-list {\n    color: #ffffff;\n    font-size: 14px;\n    line-height: 1.6;\n    list-style-type: disc;\n    margin-left: 20px;\n  }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 10620:
/*!*********************************************************************!*\
  !*** ./src/app/pages/public/registro/registro.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" text=\"Inicio de sesion\" defaultHref=\"/login\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"ion-padding ion-full-height ion-flex ion-flex-center\">\n\n    <div class=\"logo-container\">\n      <h1 class=\"animate_animated animate_fadeInUp\">\n        <ion-text color=\"secundary\">Regístrate</ion-text>\n      </h1>\n      <p class=\"animate_animated animate_fadeInUp\">\n        <ion-text color=\"secondary\">Lleva tu negocio al siguiente nivel</ion-text>\n      </p>\n    </div>\n\n    <form class=\"form-default\" [formGroup]=\"registro_form\" (submit)=\"registrar()\">\n      <ion-item color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label>\n          <ion-icon name=\"card\" item-start></ion-icon>\n          Tipo de Documento\n        </ion-label>\n        <ion-select formControlName=\"tipo_documento\" placeholder=\"Seleccionar\" [(ngModel)]=\"sel_tipoced\" value=\"1\">\n          <ion-select-option value=\"1\">Cédula Ecuatoriana</ion-select-option>\n          <ion-select-option value=\"2\">Cédula Extranjera</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf=\"sel_tipoced === '1'\" color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"person\" item-start></ion-icon>\n          Número de Cédula\n        </ion-label>\n        <ion-input formControlName=\"cedula\" type=\"text\" [(ngModel)]=\"txt_cedula\" pattern=\"[0-9]*\" required\n          title=\"mínimo 10 caracteres\" maxlength=\"10\"></ion-input>\n        <div *ngIf=\"registro_form.get('cedula').errors && registro_form.get('cedula').dirty\">\n          <div style=\"color: #797773;\" *ngIf=\"registro_form.get('cedula').errors.cedulaEcuatoriana\">\n            La cédula no es válida.\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item *ngIf=\"sel_tipoced === '2'\" color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"person\" item-start></ion-icon>\n          Número de Documento Extranjero\n        </ion-label>\n        <ion-input formControlName=\"2\" type=\"text\" [(ngModel)]=\"txt_cedula\"></ion-input>\n        <div *ngIf=\"registro_form.get('2').errors && registro_form.get('2').dirty\">\n        </div>\n      </ion-item>\n\n      <ion-item color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label position=\"floating\">\n\n          <ion-icon name=\"person\" item-start></ion-icon>\n          Nombres\n        </ion-label>\n        <ion-input required color=\"dark\" formControlName=\"nombres\" type=\"text\" [(ngModel)]=\"txt_nombre\"></ion-input>\n      </ion-item>\n      <ion-item color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label position=\"floating\">\n\n          <ion-icon name=\"people\" item-start></ion-icon>\n          Apellidos\n        </ion-label>\n        <ion-input required color=\"dark\" formControlName=\"apellidos\" type=\"text\" [(ngModel)]=\"txt_apellido\"></ion-input>\n      </ion-item>\n      <ion-item color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label position=\"floating\">\n\n          <ion-icon name=\"calendar\" item-start></ion-icon>\n          Fecha de Nacimiento\n        </ion-label>\n        <ion-input required color=\"dark\" formControlName=\"fecha_nacimiento\" type=\"date\"\n          [(ngModel)]=\"txt_fecha_nacimiento\" placeholder=\"Selecciona Su Fecha De Nacimiento\"></ion-input>\n      </ion-item>\n\n      <!--     <ion-item color=\"dark\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"calendar\" item-start></ion-icon>\n          Edad\n        </ion-label>\n        <ion-input required color=\"light\" formControlName=\"edad\" type=\"text\" [(ngModel)]=\"txt_edad\" placeholder=\"Ingrese su Edad\"></ion-input>\n      </ion-item> -->\n\n      <ion-item color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label>\n          <ion-icon name=\"person-outline\" item-start></ion-icon>\n          Estado Civil\n        </ion-label>\n        <ion-select formControlName=\"ecivil\" [(ngModel)]=\"sel_ecivil\">\n          <ion-select-option value=\"soltero\">Soltero/a</ion-select-option>\n          <ion-select-option value=\"casado\">Casado/a</ion-select-option>\n          <ion-select-option value=\"viudo\">Viudo/a</ion-select-option>\n          <ion-select-option value=\"divorciado\">Divorciado/a</ion-select-option>\n          <ion-select-option value=\"Union de hecho\">Unión de hecho</ion-select-option>\n          <ion-select-option value=\"otro\">Otro</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <!-- Campo de texto adicional para \"Otro\" -->\n      <ion-item *ngIf=\"sel_ecivil === 'otro'\">\n        <ion-label position=\"floating\" color=\"dark\" class=\"animate_animated animate_fadeInUp\">\n          Especifique su estado civil\n        </ion-label>\n        <ion-input formControlName=\"otroecivil\" [(ngModel)]=\"txt_otro_ecivil\"></ion-input>\n      </ion-item>\n\n      <ion-item color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label>\n          <ion-icon name=\"globe-outline\" item-start></ion-icon>\n          Etnia\n        </ion-label>\n        <ion-select formControlName=\"etnia\" [(ngModel)]=\"sel_etnia\">\n          <ion-select-option value=\"Indigena\">Indigena</ion-select-option>\n          <ion-select-option value=\"Mestiza\">Mestiza</ion-select-option>\n          <ion-select-option value=\"Afro Ecuatoriana\">Afro Ecuatoriana</ion-select-option>\n          <ion-select-option value=\"Blanca\">Blanca</ion-select-option>\n          <ion-select-option value=\"otro\">Otro</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- Campo de texto adicional para \"Otro\" -->\n      <ion-item *ngIf=\"sel_etnia === 'otro'\">\n        <ion-label position=\"floating\" color=\"dark\" class=\"animate_animated animate_fadeInUp\">\n          Especifique su Etnia\n        </ion-label>\n        <ion-input formControlName=\"otraetnia\" [(ngModel)]=\"txt_otra_etnia\"></ion-input>\n      </ion-item>\n\n\n      <ion-item color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label>\n          <ion-icon name=\"accessibility-outline\" item-start></ion-icon>\n          Discapacidad\n        </ion-label>\n        <ion-select formControlName=\"discapacidad\" [(ngModel)]=\"sel_discapacidad\">\n          <ion-select-option value=\"Si\">Sí</ion-select-option>\n          <ion-select-option value=\"No\">No</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- Mostrar campos adicionales si se selecciona \"Sí\" -->\n      <div *ngIf=\"sel_discapacidad === 'Si'\">\n        <ion-item>\n          <ion-label>\n            <ion-icon name=\"eye-outline\" item-start></ion-icon>\n            Tipo de discapacidad\n          </ion-label>\n          <ion-input required color=\"dark\" formControlName=\"tipodis\" type=\"text\" [(ngModel)]=\"txt_tipodis\"\n            placeholder=\"Ingrese el tipo de discapacidad\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name=\"stats-chart-outline\" item-start></ion-icon>\n            Porcentaje\n          </ion-label>\n          <ion-input required color=\"dark\" formControlName=\"porcentajedis\" type=\"text\" [(ngModel)]=\"txt_porcentajedis\"\n            placeholder=\"Ingrese el porsentaje de discapacidad\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name=\"card-outline\" item-start></ion-icon>\n            N° Carnet\n          </ion-label>\n          <ion-input required color=\"dark\" formControlName=\"ncarnetdis\" type=\"text\" [(ngModel)]=\"txt_ncarnetdis\"\n            placeholder=\"Ingrese el numero de carnet\"></ion-input>\n        </ion-item>\n      </div>\n\n\n      <ion-item color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label>\n          <ion-icon name=\"briefcase-outline\" item-start></ion-icon>\n          Ocupación\n        </ion-label>\n        <ion-select formControlName=\"ocupacion\" [(ngModel)]=\"sel_ocupacion\">\n          <ion-select-option value=\"Sin Empleo\">Sin Empleo</ion-select-option>\n          <ion-select-option value=\"Ama de casa\">Ama de casa</ion-select-option>\n          <ion-select-option value=\"Estudiante\">Estudiante</ion-select-option>\n          <ion-select-option value=\"Dependiente privado\">Dependiente privado</ion-select-option>\n          <ion-select-option value=\"Servidor Público\">Servidor Público</ion-select-option>\n          <ion-select-option value=\"Artesano\">Artesano</ion-select-option>\n          <ion-select-option value=\"Jornalero\">Jornalero</ion-select-option>\n          <ion-select-option value=\"Emprendedor\">Emprendedor</ion-select-option>\n          <ion-select-option value=\"Jubilado\">Jubilado</ion-select-option>\n          <ion-select-option value=\"otro\">Otro</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- Campo de texto adicional para \"Otro\" -->\n      <ion-item *ngIf=\"sel_ocupacion === 'otro'\">\n        <ion-label position=\"floating\" color=\"dark\" class=\"animate_animated animate_fadeInUp\">\n          Especifique su ocupación\n        </ion-label>\n        <ion-input formControlName=\"otraocupacion\" [(ngModel)]=\"txt_otra_ocupacion\"></ion-input>\n      </ion-item>\n\n      <ion-item color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label>\n          <ion-icon name=\"flag-outline\" item-start></ion-icon>\n          Nacionalidad\n        </ion-label>\n        <ion-select formControlName=\"nacionalidad\" [(ngModel)]=\"sel_nacionalidad\">\n          <ion-select-option *ngFor=\"let nac of nacionalidades\" value={{nac.codigo}}>{{nac.nombre}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label>\n          <ion-icon name=\"map-outline\" item-start></ion-icon>\n          Provincia\n        </ion-label>\n        <ion-select formControlName=\"provincia\" [(ngModel)]=\"sel_provincia\">\n          <ion-select-option *ngFor=\"let prov of provincias\" value={{prov.codigo}}>{{prov.nombre}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- Mostrar campos adicionales si se selecciona una ciudad -->\n      <div *ngIf=\"sel_provincia\">\n        <ion-item>\n          <ion-label color=\"dark\" class=\"animate_animated animate_fadeInUp\">\n            <ion-icon name=\"flag-outline\" item-start></ion-icon>\n            Ciudad\n          </ion-label>\n          <ion-select formControlName=\"ciudad\" [(ngModel)]=\"sel_ciudad\">\n            <ion-select-option *ngFor=\"let ciu of ciudades\"\n              value={{ciu.codigo}}>{{ciu.nombre}}</ion-select-option></ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name=\"compass-outline\" item-start></ion-icon>\n            Parroquia\n          </ion-label>\n          <ion-input required color=\"dark\" formControlName=\"parroquia\" type=\"text\" [(ngModel)]=\"txt_parroquia\"\n            placeholder=\"Selecciona una Parroquia\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name=\"compass-outline\" item-start></ion-icon>\n            Barrio\n          </ion-label>\n          <ion-input required color=\"dark\" formControlName=\"barrio\" type=\"text\" [(ngModel)]=\"txt_barrio\"\n            placeholder=\"Ingrese el barrio\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <ion-icon name=\"compass-outline\" item-start></ion-icon>\n            Calle Principal\n          </ion-label>\n          <ion-input required color=\"dark\" formControlName=\"calle1\" type=\"text\" [(ngModel)]=\"txt_calle1\"\n            placeholder=\"Ingrese la calle principal\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <ion-icon name=\"compass-outline\" item-start></ion-icon>\n            Calle Secundaria\n          </ion-label>\n          <ion-input required color=\"dark\" formControlName=\"calle2\" type=\"text\" [(ngModel)]=\"txt_calle2\"\n            placeholder=\"Ingrese la calle secundaria\"></ion-input>\n        </ion-item>\n\n      </div>\n\n      <ion-item color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label>\n          <ion-icon name=\"add-circle\" item-start></ion-icon>\n          Género\n        </ion-label>\n        <ion-select formControlName=\"genero\" [(ngModel)]=\"sel_genero\">\n          <ion-select-option value=\"masculino\">Masculino</ion-select-option>\n          <ion-select-option value=\"femenino\">Femenino</ion-select-option>\n          <ion-select-option value=\"otro\">Otro</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- Campo de texto adicional para \"Otro\" -->\n      <ion-item *ngIf=\"sel_genero === 'otro'\">\n        <ion-label position=\"floating\" color=\"dark\" class=\"animate_animated animate_fadeInUp\">\n          Especifique su género\n        </ion-label>\n        <ion-input formControlName=\"otrogenero\" [(ngModel)]=\"txt_otro_genero\"></ion-input>\n      </ion-item>\n\n      <ion-item color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label>\n          <ion-icon name=\"school\" item-start></ion-icon>\n          Nivel de Educacion\n        </ion-label>\n        <ion-select formControlName=\"neducacion\" [(ngModel)]=\"sel_neducacion\">\n          <ion-select-option value=\"Educacion basica\">Educacion básica</ion-select-option>\n          <ion-select-option value=\"Bachillerato\">Bachillerato</ion-select-option>\n          <ion-select-option value=\"Superior Incompleto\">Superior Incompleto</ion-select-option>\n          <ion-select-option value=\"Tercer Nivel\">Tercer Nivel</ion-select-option>\n          <ion-select-option value=\"Cuarto Nivel\">Cuarto Nivel</ion-select-option>\n          <ion-select-option value=\"Ninguno\">Ninguno</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"mail\" item-start></ion-icon>\n          Correo Electrónico\n        </ion-label>\n        <ion-input required color=\"dark\" formControlName=\"correo\" type=\"email\" [(ngModel)]=\"txt_correo\"></ion-input>\n      </ion-item>\n\n      <ion-item color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"call\" item-start></ion-icon>\n          Numero Celular\n        </ion-label>\n        <ion-input required color=\"dark\" formControlName=\"telefono\" type=\"text\" [(ngModel)]=\"txt_telefono\"></ion-input>\n      </ion-item>\n\n      <ion-item color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"lock-closed-outline\"></ion-icon>\n          Contraseña\n        </ion-label>\n        <ion-input required color=\"dark\" formControlName=\"clave\" [type]=\"claveType\"\n          placeholder=\"Ingrese su contraseña, minimo 8 digitos\" [(ngModel)]=\"txt_clave\">\n        </ion-input>\n        <ion-button fill=\"clear\" size=\"small\" slot=\"end\" (mousedown)=\"togglePasswordVisibility(true)\"\n          (mouseup)=\"togglePasswordVisibility(false)\" (mouseleave)=\"togglePasswordVisibility(false)\">\n          <ion-icon name=\"eye-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n      <ion-item color=\"medium\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"lock-closed-outline\"></ion-icon>\n          Confirmar contraseña\n        </ion-label>\n        <ion-input required color=\"dark\" formControlName=\"conf_clave\" [type]=\"confClaveType\"\n          placeholder=\"Confirmar contraseña\">\n        </ion-input>\n        <ion-button fill=\"clear\" size=\"small\" slot=\"end\" (mousedown)=\"toggleConfirmPasswordVisibility(true)\"\n          (mouseup)=\"toggleConfirmPasswordVisibility(false)\" (mouseleave)=\"toggleConfirmPasswordVisibility(false)\">\n          <ion-icon name=\"eye-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n      <!-- Check terminos y Condiciones -->\n      <ion-item class=\"animate_animated animate_fadeInUp\">\n        <ion-label style=\"display: flex; align-items: center; justify-content: space-around;\">\n          <ion-checkbox [(ngModel)]=\"check_terminos\" formControlName=\"terminos_condiciones\"></ion-checkbox>\n          Acepto los Términos y Condiciones\n        </ion-label>\n        <!-- (click)=\"openModal('terminos-condiciones')\" -->\n      </ion-item>\n      <div *ngIf=\"submit_attempt && registro_form.get('terminos_condiciones').invalid\">\n        <ion-text color=\"danger\">Debe aceptar los términos y condiciones.</ion-text>\n      </div>\n      <div class=\"ion-text-center ion-margin-top\">\n        <strong><a (click)=\"openModal('terminos-condiciones')\" color=\"black\">Leer Términos y Condiciones\n            &raquo;</a></strong>\n      </div>\n\n      <ion-button class=\"ion-margin-top\" type=\"submit\" value=\"btn_reg\" expand=\"block\" size=\"large\" color=\"danger\">\n        Regístrarse\n      </ion-button>\n    </form>\n\n    <div class=\"ion-text-center ion-margin-top\">\n      <ion-text color=\"medium\">\n        <small>&copy;{{current_year}} Alcaldia De Ibarra</small>\n      </ion-text>\n    </div>\n\n  </div>\n\n</ion-content>";

/***/ }),

/***/ 58013:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/public/terminos-condiciones/terminos-condiciones.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Términos y Condiciones</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">Cerrar</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"terms-container\">\n    <p class=\"terms-text\">\n      Última actualización: 5 de agosto de 2024\n\n      Bienvenido a <strong>ACE</strong> (“la App”). Estos Términos y Condiciones (“Términos”) rigen el acceso y\n      uso de nuestra aplicación móvil y servicios relacionados. Al descargar, instalar y utilizar la App, usted acepta\n      estar sujeto a estos Términos. Si no está de acuerdo con estos Términos, no debe utilizar la App.\n    </p>\n\n    <h2 class=\"terms-heading\">1. Aceptación de los Términos</h2>\n    <p class=\"terms-text\">\n      Al acceder o utilizar la App, usted acepta cumplir y estar sujeto a estos Términos y a nuestra Política de\n      Privacidad, que se incorpora por referencia. Si no está de acuerdo con alguna parte de estos Términos, no debe\n      acceder ni utilizar la App.\n    </p>\n\n    <h2 class=\"terms-heading\">2. Modificaciones de los Términos</h2>\n    <p class=\"terms-text\">\n      Nos reservamos el derecho de modificar estos Términos en cualquier momento. Las modificaciones serán efectivas\n      inmediatamente después de la publicación de los Términos actualizados en la App. Su uso continuado de la App\n      después\n      de la publicación de las modificaciones constituye su aceptación de los Términos modificados.\n    </p>\n\n    <h2 class=\"terms-heading\">3. Registro y Cuenta de Usuario</h2>\n    <p class=\"terms-text\">\n      Para utilizar ciertas funciones de la App, es posible que deba registrarse y crear una cuenta de usuario. Usted es\n      responsable de mantener la confidencialidad de su cuenta y contraseña, y acepta notificar inmediatamente cualquier\n      uso no autorizado de su cuenta. No seremos responsables de ninguna pérdida o daño que surja de su incumplimiento\n      de\n      esta obligación.\n    </p>\n\n    <h2 class=\"terms-heading\">4. Uso de la App</h2>\n    <p class=\"terms-text\">\n      Usted acepta utilizar la App solo para fines legales y de acuerdo con estos Términos. Está prohibido:\n    </p>\n    <ul class=\"terms-list\">\n      <li>Utilizar la App de manera que infrinja cualquier ley o regulación aplicable.</li>\n      <li>Interferir con o perturbar el funcionamiento de la App.</li>\n      <li>Suplantar a cualquier persona o entidad, o falsificar su afiliación con cualquier persona o entidad.</li>\n      <li>Publicar, transmitir o distribuir cualquier contenido que sea ilegal, dañino, amenazante, abusivo, acosador,\n        difamatorio, obsceno o de otro modo objetable.</li>\n    </ul>\n\n    <h2 class=\"terms-heading\">5. Contenido Generado por el Usuario</h2>\n    <p class=\"terms-text\">\n      Usted es el único responsable de todo el contenido que publique, transmita o de otro modo ponga a disposición a\n      través de la App. Nos reservamos el derecho de eliminar cualquier contenido que consideremos inapropiado o que\n      infrinja estos Términos.\n    </p>\n\n    <h2 class=\"terms-heading\">6. Propiedad Intelectual</h2>\n    <p class=\"terms-text\">\n      Todos los derechos, títulos e intereses en y para la App y su contenido (excepto el contenido generado por el\n      usuario) son y seguirán siendo propiedad exclusiva de EmprendeFácil Inc. y sus licenciantes. No se otorga ningún\n      derecho o licencia sobre cualquier patente, derecho de autor, marca registrada o secreto comercial en virtud de\n      estos Términos.\n    </p>\n\n    <h2 class=\"terms-heading\">7. Enlaces a Sitios Web de Terceros</h2>\n    <p class=\"terms-text\">\n      La App puede contener enlaces a sitios web de terceros que no son propiedad ni están controlados por nosotros. No\n      tenemos control sobre, y no asumimos responsabilidad por, el contenido, las políticas de privacidad o las\n      prácticas\n      de cualquier sitio web de terceros.\n    </p>\n\n    <h2 class=\"terms-heading\">8. Exención de Garantías</h2>\n    <p class=\"terms-text\">\n      La App se proporciona \"tal cual\" y \"según disponibilidad\" sin garantías de ningún tipo, ya sean expresas o\n      implícitas. No garantizamos que la App estará libre de errores, segura o ininterrumpida.\n    </p>\n\n    <h2 class=\"terms-heading\">9. Limitación de Responsabilidad</h2>\n    <p class=\"terms-text\">\n      En la medida máxima permitida por la ley aplicable, en ningún caso seremos responsables por cualquier daño\n      indirecto, incidental, especial, consecuente o punitivo, o cualquier pérdida de beneficios o ingresos, incurridos\n      por usted o cualquier tercero, ya sea en una acción en contrato, agravio o de otro modo, que surja de su acceso a\n      o\n      uso de la App.\n    </p>\n\n    <h2 class=\"terms-heading\">10. Indemnización</h2>\n    <p class=\"terms-text\">\n      Usted acepta indemnizar, defender y mantener indemne a EmprendeFácil Inc. y sus directores, empleados, y agentes,\n      de\n      y contra cualquier reclamo, responsabilidad, daño, pérdida y gasto, incluyendo, entre otros, honorarios razonables\n      de abogados y costos, que surjan de o en cualquier forma relacionados con su acceso a o uso de la App, o su\n      violación de estos Términos.\n    </p>\n\n    <h2 class=\"terms-heading\">11. Terminación</h2>\n    <p class=\"terms-text\">\n      Nos reservamos el derecho de suspender o terminar su acceso a la App en cualquier momento, sin previo aviso, por\n      cualquier motivo, incluyendo, entre otros, su violación de estos Términos.\n    </p>\n\n    <h2 class=\"terms-heading\">12. Ley Aplicable</h2>\n    <p class=\"terms-text\">\n      Estos Términos se regirán e interpretarán de acuerdo con las leyes del Estado de California, sin tener en cuenta\n      sus\n      disposiciones sobre conflicto de leyes.\n    </p>\n\n    <h2 class=\"terms-heading\">13. Contacto</h2>\n    <p class=\"terms-text\">\n      Si tiene alguna pregunta sobre estos Términos, por favor contáctenos en soporte@emprendefacil.com.\n    </p>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_registro_registro_module_ts.js.map