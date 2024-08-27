(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_registroinventario_registroinventario_module_ts"],{

/***/ 12650:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/secure/registroinventario/registroinventario-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroinventarioPageRoutingModule": () => (/* binding */ RegistroinventarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _registroinventario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registroinventario.page */ 52826);




const routes = [{
  path: '',
  component: _registroinventario_page__WEBPACK_IMPORTED_MODULE_0__.RegistroinventarioPage
}];
let RegistroinventarioPageRoutingModule = class RegistroinventarioPageRoutingModule {};
RegistroinventarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], RegistroinventarioPageRoutingModule);


/***/ }),

/***/ 48822:
/*!******************************************************************************!*\
  !*** ./src/app/pages/secure/registroinventario/registroinventario.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroinventarioPageModule": () => (/* binding */ RegistroinventarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _registroinventario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registroinventario-routing.module */ 12650);
/* harmony import */ var _registroinventario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registroinventario.page */ 52826);







let RegistroinventarioPageModule = class RegistroinventarioPageModule {};
RegistroinventarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _registroinventario_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroinventarioPageRoutingModule],
  declarations: [_registroinventario_page__WEBPACK_IMPORTED_MODULE_1__.RegistroinventarioPage]
})], RegistroinventarioPageModule);


/***/ }),

/***/ 52826:
/*!****************************************************************************!*\
  !*** ./src/app/pages/secure/registroinventario/registroinventario.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroinventarioPage": () => (/* binding */ RegistroinventarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _registroinventario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registroinventario.page.html?ngResource */ 75059);
/* harmony import */ var _registroinventario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registroinventario.page.scss?ngResource */ 59603);
/* harmony import */ var _registroinventario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_registroinventario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);










let RegistroinventarioPage = class RegistroinventarioPage {
  constructor(authService, router, formBuilder, toastService, http, navCtrl, alertController) {
    this.authService = authService;
    this.router = router;
    this.formBuilder = formBuilder;
    this.toastService = toastService;
    this.http = http;
    this.navCtrl = navCtrl;
    this.alertController = alertController;
    this.codigo = '';
    this.productos = [];
    this.Productos = [];
    this.searchTerm = '';
    this.initial = {
      product: '',
      productName: '',
      quantity: 0,
      price: 0,
      fechaRegistro: '' // Fecha de registro
    };

    this.final = {
      sold: 0,
      totalMoney: 0,
      gifted: 0
    };
    this.results = {
      profitLoss: 0,
      giftedLoss: 0,
      remainingProducts: 0
    };
    this.authService.getSession('productos').then(res => {
      this.codigo = res.codigo;
      this.lproductos(this.codigo);
    });
  }
  ngOnInit() {
    // Inicializa la fecha de registro con la fecha actual
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Meses de 1 a 12
    const day = String(today.getDate()).padStart(2, '0'); // Día del mes
    this.initial.fechaRegistro = `${year}-${month}-${day}`;
  }
  ionViewWillEnter() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
      try {
        const res = yield this.authService.getSession('codigo');
        this.codigo = res;
        yield this.lproductos(this.codigo);
      } catch (error) {
        console.error('Error al inicializar los datos', error);
        this.authService.showToast('Error al cargar los datos. Por favor, intenta de nuevo.');
      }
    });
  }
  registerInitial() {
    if (!this.initial.product) {
      console.error('Por favor selecciona un producto.');
      return;
    }
    // Asegúrate de que `this.initial.product` sea un número
    const productId = parseInt(this.initial.product, 10);
    console.log('ID del producto seleccionado:', productId);
    console.log('Lista de productos:', this.productos);
    // Busca el objeto producto correspondiente al id seleccionado
    const selectedProduct = this.productos.find(product => parseInt(product.codigo, 10) === productId);
    if (!selectedProduct) {
      console.error('No se encontró el producto seleccionado en la lista.');
      return;
    }
    // Asigna el nombre del producto seleccionado al objeto inicial
    this.initial.productName = selectedProduct.nombre;
    this.initial.price = parseFloat(selectedProduct.pvp);
    // Llama al método para guardar los datos iniciales
    this.guardarDatos();
  }
  guardarDatos() {
    let datos = {
      accion: 'guardar_inventario',
      producto_id: this.initial.product,
      cantidad_inicial: this.initial.quantity,
      precio_venta: this.initial.price,
      cantidad_vendida: this.final.sold,
      dinero_total: this.final.totalMoney,
      muestras: this.final.gifted,
      ganancias_perdidas: this.results.profitLoss,
      perdidas_productos_regalados: this.results.giftedLoss,
      productos_no_vendidos: this.results.remainingProducts,
      fecha_registro: this.initial.fechaRegistro // Agregar la fecha de registro
    };

    console.log('Datos a guardar:', datos); // Verifica los datos que se envían
    this.http.post('http://localhost/ACE/WsMunicipioIonic/ws_gad.php', datos).subscribe(response => {
      console.log('Datos guardados correctamente:', response);
      if (response.estado) {
        this.authService.showToast('Datos guardados correctamente.');
      } else {
        this.authService.showToast(response.mensaje);
      }
    }, error => {
      console.error('Error en la solicitud:', error);
      this.authService.showToast('Error al guardar los datos. Intenta de nuevo.');
    });
  }
  lproductos(codigo) {
    let datos = {
      accion: 'lproductos',
      cod_persona: this.codigo
    };
    this.authService.postData(datos).subscribe(res => {
      if (res.estado === true) {
        this.productos = res.datos;
        this.Productos = res.datos; // Inicialmente muestra todos los productos
        console.log('Productos cargados:', this.productos); // Verifica los productos cargados
      } else {
        this.authService.showToast(res.mensaje);
      }
    });
  }
  filterProductos(event) {
    const searchTerm = event.target.value.toLowerCase();
    this.Productos = this.productos.filter(producto => {
      return producto.nombre.toLowerCase().includes(searchTerm);
    });
  }
  updatePrice() {
    if (!this.initial.product) {
      console.warn('No se ha seleccionado ningún producto.');
      return;
    }
    const selectedProduct = this.productos.find(product => product.codigo === this.initial.product // Asegúrate de que coincida el campo correcto
    );

    if (selectedProduct) {
      console.log('Producto seleccionado:', selectedProduct);
      if (selectedProduct.pvp !== undefined) {
        this.initial.price = parseFloat(selectedProduct.pvp); // Convertir a número
        console.log('Precio actualizado:', this.initial.price);
      } else {
        console.warn('El campo del precio no está definido para el producto seleccionado.');
      }
    }
    this.updateTotalMoney();
  }
  updateTotalMoney() {
    // Asegúrate de que `this.final.sold` y `this.initial.price` tengan valores válidos
    if (this.final.sold >= 0 && this.initial.price >= 0) {
      this.final.totalMoney = this.final.sold * this.initial.price;
    } else {
      console.warn('Cantidad vendida o precio no válidos.');
    }
  }
  registerFinal() {}
};
RegistroinventarioPage.ctorParameters = () => [{
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}, {
  type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}];
RegistroinventarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-registroinventario',
  template: _registroinventario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_registroinventario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RegistroinventarioPage);


/***/ }),

/***/ 59603:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/secure/registroinventario/registroinventario.page.scss?ngResource ***!
  \*****************************************************************************************/
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

/***/ 75059:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/secure/registroinventario/registroinventario.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/payments\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      Registro inventario\n    </ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"secondary\" (click)=\"filterProductos($event)\">\n        <ion-icon slot=\"icon-only\" name=\"filter\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Registro Inicial</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Producto</ion-label>\n        <ion-select [(ngModel)]=\"initial.product\" (ionChange)=\"updatePrice()\">\n          <ion-select-option *ngFor=\"let product of productos\" [value]=\"product.codigo\">{{ product.nombre }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Cantidad Inicial</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"initial.quantity\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Precio de Venta</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"initial.price\" readonly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Fecha de Registro</ion-label>\n        <ion-input type=\"text\" [value]=\"initial.fechaRegistro\" readonly></ion-input>\n      </ion-item>\n      <ion-button expand=\"block\" (click)=\"registerInitial()\">Registrar</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Registro Final</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Cantidad Vendida</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"final.sold\" (ionChange)=\"updateTotalMoney()\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Dinero Total</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"final.totalMoney\" readonly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Productos Regalados</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"final.gifted\"></ion-input>\n      </ion-item>\n      <ion-button expand=\"block\" (click)=\"registerFinal()\">Registrar</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Resultados</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label>Ganancias/Pérdidas</ion-label>\n        <ion-input readonly [(ngModel)]=\"results.profitLoss\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Pérdidas por Productos Regalados</ion-label>\n        <ion-input readonly [(ngModel)]=\"results.giftedLoss\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Productos No Vendidos</ion-label>\n        <ion-input readonly [(ngModel)]=\"results.remainingProducts\"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_registroinventario_registroinventario_module_ts.js.map