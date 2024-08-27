(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_inventarioregistro_inventarioregistro_module_ts"],{

/***/ 95593:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/secure/inventarioregistro/inventarioregistro-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventarioregistroPageRoutingModule": () => (/* binding */ InventarioregistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _inventarioregistro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventarioregistro.page */ 1419);




const routes = [{
  path: '',
  component: _inventarioregistro_page__WEBPACK_IMPORTED_MODULE_0__.InventarioregistroPage
}];
let InventarioregistroPageRoutingModule = class InventarioregistroPageRoutingModule {};
InventarioregistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], InventarioregistroPageRoutingModule);


/***/ }),

/***/ 5233:
/*!******************************************************************************!*\
  !*** ./src/app/pages/secure/inventarioregistro/inventarioregistro.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventarioregistroPageModule": () => (/* binding */ InventarioregistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _inventarioregistro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventarioregistro-routing.module */ 95593);
/* harmony import */ var _inventarioregistro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventarioregistro.page */ 1419);







let InventarioregistroPageModule = class InventarioregistroPageModule {};
InventarioregistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _inventarioregistro_routing_module__WEBPACK_IMPORTED_MODULE_0__.InventarioregistroPageRoutingModule],
  declarations: [_inventarioregistro_page__WEBPACK_IMPORTED_MODULE_1__.InventarioregistroPage]
})], InventarioregistroPageModule);


/***/ }),

/***/ 1419:
/*!****************************************************************************!*\
  !*** ./src/app/pages/secure/inventarioregistro/inventarioregistro.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventarioregistroPage": () => (/* binding */ InventarioregistroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _inventarioregistro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventarioregistro.page.html?ngResource */ 64521);
/* harmony import */ var _inventarioregistro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventarioregistro.page.scss?ngResource */ 697);
/* harmony import */ var _inventarioregistro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inventarioregistro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);







let InventarioregistroPage = class InventarioregistroPage {
  constructor(http, route, router, toastController) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.toastController = toastController;
    this.productos = []; // Arreglo para almacenar los productos
    this.isDateModalOpen = false; // Calendario
  }

  ngOnInit() {
    this.idPersona = localStorage.getItem('CapacitorStorage.codigo');
    console.log('ID Persona:', this.idPersona);
    this.loadProducts();
    this.setCurrentDate();
  }
  loadProducts() {
    this.http.post('http://localhost/ACE/WsMunicipioIonic/ws_gad.php', {
      accion: 'cargar_productos',
      id_persona: this.idPersona
    }).subscribe(response => {
      console.log('Respuesta del servidor:', response); // Depuración
      if (response.estado) {
        this.productos = response.datos;
      } else {
        console.error('Error al cargar productos:', response.mensaje);
      }
    }, error => {
      console.error('Error en la solicitud:', error);
    });
  }
  //--------------------------Funciones necesarias para el calendario-------------------------
  openDateModal() {
    this.isDateModalOpen = true;
  }
  closeDateModal() {
    this.isDateModalOpen = false;
  }
  onDateModalDismiss(event) {
    var _a;
    const selectedDate = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.value;
    if (selectedDate) {
      this.date = selectedDate.split('T')[0];
    } else {
      console.log('Modal cerrado sin seleccionar fecha');
    }
    this.closeDateModal();
  }
  confirmDate(selectedDate) {
    this.date = selectedDate.split('T')[0];
    this.closeDateModal();
  }
  //----------------------------------------------------------------------------------------
  setCurrentDate() {
    const today = new Date();
    const offset = today.getTimezoneOffset(); // Obtener el desfase horario en minutos
    const localDate = new Date(today.getTime() - offset * 60 * 1000); // Ajustar la fecha para la zona local
    const formattedDate = localDate.toISOString().split('T')[0]; // Obtener la fecha en formato YYYY-MM-DD
    this.date = formattedDate;
  }
  onProductChange(event) {
    this.productId = event.detail.value;
    const product = this.productos.find(p => p.id === this.productId);
    if (product) {
      this.selectedPvp = product.pvp;
      this.loadInitialQuantity(this.productId); // Nueva función para obtener la cantidad inicial
    }
  }

  loadInitialQuantity(productId) {
    this.http.post('http://localhost/ACE/WsMunicipioIonic/ws_gad.php', {
      accion: 'obtener_cantidad_inicial',
      producto_id: productId
    }).subscribe(response => {
      if (response.estado) {
        this.initialQuantity = response.cantidad_inicial;
      } else {
        console.error('Error al obtener la cantidad inicial:', response.mensaje);
      }
    }, error => {
      console.error('Error en la solicitud:', error);
    });
  }
  saveProduct() {
    const datos = {
      accion: 'guardar_inventario',
      producto_id: this.productId,
      cantidad_inicial: this.initialQuantity,
      fecha_registro: this.date
    };
    this.http.post('http://localhost/ACE/WsMunicipioIonic/ws_gad.php', datos).subscribe(response => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      if (response.estado) {
        yield this.showToast('Producto guardado exitosamente.');
        this.router.navigate(['/inventariomenu']).then(() => {
          window.location.reload(); // Recargar la página después de redirigir
        });
      } else {
        yield this.showToast(response.mensaje); // Mostrar mensaje de error
      }
    }), error => {
      console.error('Error en la solicitud:', error);
    });
  }
  showToast(message) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      const toast = yield this.toastController.create({
        message,
        duration: 2000,
        position: 'top',
        color: 'danger' // Cambia el color a rojo para los mensajes de error
      });

      toast.present();
    });
  }
};
InventarioregistroPage.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}];
InventarioregistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-inventario-registro',
  template: _inventarioregistro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_inventarioregistro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], InventarioregistroPage);


/***/ }),

/***/ 697:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/secure/inventarioregistro/inventarioregistro.page.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-modal {\n  --background: var(--ion-background-color, #fff);\n  color: var(--ion-text-color, #000);\n}\n\nion-datetime {\n  --background: var(--ion-background-color, #fff);\n  color: var(--ion-text-color, #000);\n}", "",{"version":3,"sources":["webpack://./src/app/pages/secure/inventarioregistro/inventarioregistro.page.scss"],"names":[],"mappings":"AAAA;EACE,+CAAA;EACA,kCAAA;AACF;;AAEA;EACE,+CAAA;EACA,kCAAA;AACF","sourcesContent":["ion-modal {\n  --background: var(--ion-background-color, #fff);\n  color: var(--ion-text-color, #000);\n}\n\nion-datetime {\n  --background: var(--ion-background-color, #fff);\n  color: var(--ion-text-color, #000);\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 64521:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/secure/inventarioregistro/inventarioregistro.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/inventariomenu\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\"> Registro inventario </ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"secondary\" (click)=\"filterProductos($event)\">\n        <ion-icon slot=\"icon-only\" name=\"filter\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Registro Inicial -->\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Registro Inicial</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Producto</ion-label>\n        <ion-select\n          [(ngModel)]=\"productId\"\n          (ionChange)=\"onProductChange($event)\"\n        >\n          <ion-select-option\n            *ngFor=\"let product of productos\"\n            [value]=\"product.id\"\n          >\n            {{ product.nombre }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Cantidad Inicial</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"initialQuantity\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">PVP</ion-label>\n        <ion-input type=\"number\" [value]=\"selectedPvp\" readonly></ion-input>\n      </ion-item>\n\n      <!-- Nuevo formato de fecha para el guardado -->\n      <ion-item>\n        <ion-label position=\"floating\">Fecha (YYYY-MM-DD)</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"date\"></ion-input>\n        <ion-button fill=\"clear\" (click)=\"openDateModal()\" slot=\"end\">\n          <ion-icon name=\"calendar\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n      <ion-button expand=\"full\" (click)=\"saveProduct()\">Guardar</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- modal estilo del calendario -->\n  <ion-modal\n    [isOpen]=\"isDateModalOpen\"\n    (ionModalDidDismiss)=\"onDateModalDismiss($event)\"\n  >\n    <ng-template>\n      <div\n        style=\"\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          height: 100%;\n        \"\n      >\n        <ion-datetime\n          #dateTimeControl\n          displayFormat=\"YYYY-MM-DD\"\n          pickerFormat=\"YYYY-MM-DD\"\n          time-zone=\"local\"\n          presentation=\"date\"\n        >\n        </ion-datetime>\n      </div>\n      <ion-footer>\n        <ion-toolbar>\n          <ion-button expand=\"full\" (click)=\"confirmDate(dateTimeControl.value)\"\n            >Aceptar</ion-button\n          >\n        </ion-toolbar>\n      </ion-footer>\n    </ng-template>\n  </ion-modal>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_inventarioregistro_inventarioregistro_module_ts.js.map