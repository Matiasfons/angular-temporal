(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_inventariomenu_inventariomenu_module_ts"],{

/***/ 95579:
/*!******************************************************************************!*\
  !*** ./src/app/pages/secure/inventariomenu/inventariomenu-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventariomenuPageRoutingModule": () => (/* binding */ InventariomenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _inventariomenu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventariomenu.page */ 66097);




const routes = [{
  path: '',
  component: _inventariomenu_page__WEBPACK_IMPORTED_MODULE_0__.InventariomenuPage
}];
let InventariomenuPageRoutingModule = class InventariomenuPageRoutingModule {};
InventariomenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], InventariomenuPageRoutingModule);


/***/ }),

/***/ 77112:
/*!**********************************************************************!*\
  !*** ./src/app/pages/secure/inventariomenu/inventariomenu.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventariomenuPageModule": () => (/* binding */ InventariomenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _inventariomenu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventariomenu-routing.module */ 95579);
/* harmony import */ var _inventariomenu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventariomenu.page */ 66097);







let InventariomenuPageModule = class InventariomenuPageModule {};
InventariomenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _inventariomenu_routing_module__WEBPACK_IMPORTED_MODULE_0__.InventariomenuPageRoutingModule],
  declarations: [_inventariomenu_page__WEBPACK_IMPORTED_MODULE_1__.InventariomenuPage]
})], InventariomenuPageModule);


/***/ }),

/***/ 66097:
/*!********************************************************************!*\
  !*** ./src/app/pages/secure/inventariomenu/inventariomenu.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventariomenuPage": () => (/* binding */ InventariomenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _inventariomenu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventariomenu.page.html?ngResource */ 83016);
/* harmony import */ var _inventariomenu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventariomenu.page.scss?ngResource */ 50759);
/* harmony import */ var _inventariomenu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inventariomenu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);







let InventariomenuPage = class InventariomenuPage {
  constructor(http, router, alertController, modalController) {
    this.http = http;
    this.router = router;
    this.alertController = alertController;
    this.modalController = modalController;
    this.productos = [];
    this.productInfoVisible = {};
    this.isDateModalOpen = false;
  }
  ngOnInit() {
    this.idPersona = localStorage.getItem('CapacitorStorage.codigo');
    console.log('ID Persona:', this.idPersona);
    this.setCurrentDate();
    this.selectedDate = this.currentDate;
    this.loadProducts();
  }
  setCurrentDate() {
    const today = new Date();
    const offset = today.getTimezoneOffset(); // Obtener el desfase horario en minutos
    const localDate = new Date(today.getTime() - offset * 60 * 1000); // Ajustar la fecha para la zona local
    const formattedDate = localDate.toISOString().split('T')[0]; // Obtener la fecha en formato YYYY-MM-DD
    this.currentDate = formattedDate;
  }
  loadProducts() {
    if (!this.idPersona) {
      console.error('ID de persona no disponible');
      return;
    }
    this.http.post('http://localhost/ACE/WsMunicipioIonic/ws_gad.php', {
      accion: 'cargar_productos2',
      id_persona: this.idPersona,
      fecha: this.selectedDate
    }).subscribe(response => {
      if (response.estado) {
        this.productos = response.datos;
        this.productos.forEach(producto => {
          this.productInfoVisible[producto.id] = false;
        });
      } else {
        console.error('Error al cargar productos:', response.mensaje);
      }
    }, error => {
      console.error('Error en la solicitud:', error);
    });
  }
  toggleProductInfo(producto) {
    // Alternar visibilidad del producto seleccionado
    this.productInfoVisible[producto.id] = !this.productInfoVisible[producto.id];
    // Cerrar la información de los otros productos
    for (let id in this.productInfoVisible) {
      if (id !== producto.id.toString()) {
        this.productInfoVisible[id] = false;
      }
    }
  }
  editarProducto(riCodigo, rfCodigo) {
    this.router.navigate(['/editinventario', {
      ri_codigo: riCodigo,
      rf_codigo: rfCodigo
    }]);
  }
  eliminarProducto(riCodigo) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      const alert = yield this.alertController.create({
        header: 'Confirmar eliminación',
        message: '¿Estás seguro de que deseas eliminar este producto?',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            this.http.post('http://localhost/ACE/WsMunicipioIonic/ws_gad.php', {
              accion: 'eliminar',
              RI_CODIGO: riCodigo
            }).subscribe(response => {
              if (response.estado) {
                this.loadProducts(); // Recargar productos después de eliminar
              } else {
                console.error('Error al eliminar producto:', response.mensaje);
              }
            }, error => {
              console.error('Error en la solicitud:', error);
            });
          }
        }]
      });
      yield alert.present();
    });
  }
  openDateModal() {
    this.modalDate = this.selectedDate; // Inicializar el modal con la fecha seleccionada
    this.isDateModalOpen = true;
  }
  saveDate() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      this.isDateModalOpen = false;
      this.selectedDate = this.modalDate;
      this.loadProducts();
    });
  }
  closeDateModal() {
    this.isDateModalOpen = false;
  }
  onDateModalDismiss() {
    this.closeDateModal();
  }
};
InventariomenuPage.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}];
InventariomenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-inventariomenu',
  template: _inventariomenu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_inventariomenu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], InventariomenuPage);


/***/ }),

/***/ 50759:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/secure/inventariomenu/inventariomenu.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.header {\n  font-weight: bold;\n  background-color: #000000; /* Negro para el encabezado */\n  color: #ffffff; /* Blanco para el texto del encabezado */\n}\n\n.data {\n  padding: 8px;\n  background-color: #e0e0e0; /* Gris claro para el fondo de los datos */\n  color: #000000; /* Negro para el texto de los datos */\n}\n\n.header-row ion-col,\n.data-row ion-col {\n  border: 1px solid #666666; /* Gris oscuro para el borde */\n  border-width: 0 0 1px 0;\n}\n\n.action-buttons {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.header-row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.col-label {\n  flex: 1;\n}\n\n.col-value {\n  flex: 3;\n  text-align: left;\n}\n\n.transparent-grid {\n  width: 100%;\n}\n\n.pagination-controls {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 16px;\n}\n\nion-button[color=danger] {\n  --background: #ff4d4d; /* Rojo para el fondo del botón */\n  --color: #ffffff; /* Blanco para el texto del botón */\n}", "",{"version":3,"sources":["webpack://./src/app/pages/secure/inventariomenu/inventariomenu.page.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACE,iBAAA;EACA,yBAAA,EAAA,6BAAA;EACA,cAAA,EAAA,wCAAA;AAEF;;AACA;EACE,YAAA;EACA,yBAAA,EAAA,0CAAA;EACA,cAAA,EAAA,qCAAA;AAEF;;AACA;;EAEE,yBAAA,EAAA,8BAAA;EACA,uBAAA;AAEF;;AACA;EACE,aAAA;EACA,2BAAA;AAEF;;AACA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;AAEF;;AACA;EACE,OAAA;AAEF;;AACA;EACE,OAAA;EACA,gBAAA;AAEF;;AACA;EACE,WAAA;AAEF;;AACA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;AAEF;;AAAA;EACE,qBAAA,EAAA,iCAAA;EACA,gBAAA,EAAA,mCAAA;AAGF","sourcesContent":[".header {\n  font-weight: bold;\n  background-color: #000000; /* Negro para el encabezado */\n  color: #ffffff; /* Blanco para el texto del encabezado */\n}\n\n.data {\n  padding: 8px;\n  background-color: #e0e0e0; /* Gris claro para el fondo de los datos */\n  color: #000000; /* Negro para el texto de los datos */\n}\n\n.header-row ion-col,\n.data-row ion-col {\n  border: 1px solid #666666; /* Gris oscuro para el borde */\n  border-width: 0 0 1px 0;\n}\n\n.action-buttons {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.header-row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.col-label {\n  flex: 1;\n}\n\n.col-value {\n  flex: 3;\n  text-align: left;\n}\n\n.transparent-grid {\n  width: 100%;\n}\n\n.pagination-controls {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 16px;\n}\nion-button[color=\"danger\"] {\n  --background: #ff4d4d; /* Rojo para el fondo del botón */\n  --color: #ffffff; /* Blanco para el texto del botón */\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 83016:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/secure/inventariomenu/inventariomenu.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-title color=\"light\">Inventario Menu</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br />\n\n  <ion-button\n    color=\"danger\"\n    [routerLink]=\"['/inventarioregistro', { accion: 'nuevo' }]\"\n  >\n    <ion-icon color=\"light\" name=\"duplicate-outline\"></ion-icon>\n    <strong>Registrar Inventario</strong>\n  </ion-button>\n\n  <ion-button (click)=\"openDateModal()\">Seleccionar Fecha</ion-button>\n\n  <ion-grid class=\"transparent-grid custom-table\">\n    <!-- Fila para la fecha seleccionada -->\n    <ion-row>\n      <ion-col class=\"header col-label\" color=\"light\">Fecha</ion-col>\n      <ion-col class=\"data col-value\">{{ selectedDate }}</ion-col>\n    </ion-row>\n    <br />\n\n    <!-- Fila para cada producto y su detalle -->\n    <ng-container *ngFor=\"let producto of productos\">\n      <ion-row class=\"header-row\">\n        <ion-col class=\"header col-label\" color=\"light\">Producto</ion-col>\n        <ion-col class=\"data col-value\">\n          {{ producto.nombre }}\n          <ion-button\n            size=\"small\"\n            fill=\"clear\"\n            color=\"primary\"\n            (click)=\"toggleProductInfo(producto)\"\n          >\n            <ion-icon\n              slot=\"icon-only\"\n              [name]=\"productInfoVisible[producto.id] ? 'chevron-up-outline' : 'chevron-down-outline'\"\n            ></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <!-- Detalles del producto, visibles solo si está seleccionado -->\n      <ion-row *ngIf=\"productInfoVisible[producto.id]\">\n        <ion-col class=\"header col-label\" color=\"light\"\n          >Cantidad inicial</ion-col\n        >\n        <ion-col class=\"data col-value\"\n          >{{ producto.RI_CANTIDAD_INICIAL }}</ion-col\n        >\n      </ion-row>\n\n      <ion-row *ngIf=\"productInfoVisible[producto.id]\">\n        <ion-col class=\"header col-label\" color=\"light\">Precio</ion-col>\n        <ion-col class=\"data col-value\">{{ producto.pvp }}</ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"productInfoVisible[producto.id]\">\n        <ion-col class=\"header col-label\" color=\"light\"\n          >Cantidad vendida</ion-col\n        >\n        <ion-col class=\"data col-value\"\n          >{{ producto.RF_CANTIDAD_VENDIDA }}</ion-col\n        >\n      </ion-row>\n\n      <ion-row *ngIf=\"productInfoVisible[producto.id]\">\n        <ion-col class=\"header col-label\" color=\"light\">Ganancia</ion-col>\n        <ion-col class=\"data col-value\"\n          >{{ producto.RS_GANANCIA_PERDIDA }}</ion-col\n        >\n      </ion-row>\n\n      <ion-row *ngIf=\"productInfoVisible[producto.id]\">\n        <ion-col class=\"header col-label\" color=\"light\">Desechos</ion-col>\n        <ion-col class=\"data col-value\"\n          >{{ producto.total_muestra_desechados }}</ion-col\n        >\n      </ion-row>\n\n      <ion-row *ngIf=\"productInfoVisible[producto.id]\">\n        <ion-col class=\"header col-label\" color=\"light\">Perdida</ion-col>\n        <ion-col class=\"data col-value\"\n          >{{ producto.RS_TOTAL_PERDIDA }}</ion-col\n        >\n      </ion-row>\n\n      <ion-row *ngIf=\"productInfoVisible[producto.id]\">\n        <ion-col class=\"header col-label\" color=\"light\">Opciones</ion-col>\n        <ion-col class=\"data col-value\">\n          <div class=\"action-buttons\">\n            <!-- Botón de editar -->\n            <ion-button\n              size=\"small\"\n              fill=\"clear\"\n              color=\"tertiary\"\n              [routerLink]=\"['/editinventario', { ri_codigo: producto.RI_CODIGO, rf_codigo: producto.RF_CODIGO }]\"\n            >\n              <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n            </ion-button>\n            <ion-button\n              size=\"small\"\n              fill=\"clear\"\n              color=\"danger\"\n              (click)=\"eliminarProducto(producto.RI_CODIGO)\"\n            >\n              <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ng-container>\n  </ion-grid>\n\n  <!-- Modal para seleccionar fecha -->\n  <ion-modal\n    [isOpen]=\"isDateModalOpen\"\n    (ionModalDidDismiss)=\"onDateModalDismiss()\"\n  >\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Seleccionar Fecha</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"closeDateModal()\">Cerrar</ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-datetime\n          [(ngModel)]=\"modalDate\"\n          display-format=\"YYYY-MM-DD\"\n        ></ion-datetime>\n        <ion-button expand=\"full\" (click)=\"saveDate()\">Guardar</ion-button>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_inventariomenu_inventariomenu_module_ts.js.map