(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_editinventario_editinventario_module_ts"],{

/***/ 49890:
/*!******************************************************************************!*\
  !*** ./src/app/pages/secure/editinventario/editinventario-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditinventarioPageRoutingModule": () => (/* binding */ EditinventarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _editinventario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editinventario.page */ 69819);




const routes = [{
  path: '',
  component: _editinventario_page__WEBPACK_IMPORTED_MODULE_0__.EditinventarioPage
}];
let EditinventarioPageRoutingModule = class EditinventarioPageRoutingModule {};
EditinventarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], EditinventarioPageRoutingModule);


/***/ }),

/***/ 16599:
/*!**********************************************************************!*\
  !*** ./src/app/pages/secure/editinventario/editinventario.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditinventarioPageModule": () => (/* binding */ EditinventarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _editinventario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editinventario-routing.module */ 49890);
/* harmony import */ var _editinventario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editinventario.page */ 69819);







let EditinventarioPageModule = class EditinventarioPageModule {};
EditinventarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _editinventario_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditinventarioPageRoutingModule],
  declarations: [_editinventario_page__WEBPACK_IMPORTED_MODULE_1__.EditinventarioPage]
})], EditinventarioPageModule);


/***/ }),

/***/ 69819:
/*!********************************************************************!*\
  !*** ./src/app/pages/secure/editinventario/editinventario.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditinventarioPage": () => (/* binding */ EditinventarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _editinventario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editinventario.page.html?ngResource */ 11787);
/* harmony import */ var _editinventario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editinventario.page.scss?ngResource */ 45186);
/* harmony import */ var _editinventario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editinventario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);







let EditinventarioPage = class EditinventarioPage {
  constructor(route, http, router, toastController) {
    this.route = route;
    this.http = http;
    this.router = router;
    this.toastController = toastController;
    this.productos = []; // Arreglo de productos
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const riCodigo = params['ri_codigo'];
      const rfCodigo = params['rf_codigo'] || null;
      this.loadProductData(riCodigo, rfCodigo);
    });
  }
  onProductChange(event) {
    const selectedProductId = event.detail.value;
    this.selectedProduct = this.productos.find(product => product.id === selectedProductId);
    if (this.selectedProduct) {
      this.nombre = this.selectedProduct.nombre;
      this.initialQuantity = this.selectedProduct.RI_CANTIDAD_INICIAL;
      this.selectedPvp = this.selectedProduct.pvp;
      this.selledQuantity = this.selectedProduct.RF_CANTIDAD_VENDIDA || 0;
      this.giftProducts = this.selectedProduct.RF_PRODUCTOS_MUESTRA || 0;
      this.wasteProducts = this.selectedProduct.RF_PRODUCTOS_DESECHADOS || 0;
      this.date = this.selectedProduct.RI_FECHA;
    }
  }
  loadProductData(riCodigo, rfCodigo) {
    this.http.post('http://localhost/ACE/WsMunicipioIonic/ws_gad.php', {
      accion: 'cargar_productos3',
      ri_codigo: riCodigo,
      rf_codigo: rfCodigo
    }).subscribe(response => {
      if (response.estado) {
        this.productos = response.datos;
        console.log('Datos del producto cargados:', this.productos);
        if (this.productos.length > 0) {
          this.selectedProduct = this.productos[0];
          this.nombre = this.selectedProduct.nombre;
          this.initialQuantity = this.selectedProduct.RI_CANTIDAD_INICIAL;
          this.selectedPvp = this.selectedProduct.pvp;
          this.selledQuantity = this.selectedProduct.RF_CANTIDAD_VENDIDA || 0;
          this.giftProducts = this.selectedProduct.RF_PRODUCTOS_MUESTRA || 0;
          this.wasteProducts = this.selectedProduct.RF_PRODUCTOS_DESECHADOS || 0;
          this.date = this.selectedProduct.RI_FECHA;
        }
      } else {
        console.error('Error al cargar producto:', response.mensaje);
      }
    }, error => {
      console.error('Error en la solicitud:', error);
    });
  }
  saveProduct() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      if (this.selectedProduct) {
        const updateData = {
          accion: 'actualizar_cantidad_inicial',
          ri_codigo: this.selectedProduct.RI_CODIGO,
          nueva_cantidad: this.initialQuantity
        };
        this.http.post('http://localhost/ACE/WsMunicipioIonic/ws_gad.php', updateData).subscribe(response => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
          if (response.estado) {
            yield this.showToast('Cantidad inicial actualizada correctamente.');
            this.router.navigate(['/inventariomenu']).then(() => {
              window.location.reload(); // Recargar la página después de redirigir
            });
          } else {
            console.error('Error al actualizar cantidad inicial:', response.mensaje);
          }
        }), error => {
          console.error('Error en la solicitud:', error);
        });
      }
    });
  }
  saveFinal() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      if (this.selectedProduct) {
        if (this.selledQuantity > this.initialQuantity) {
          yield this.showToast('La cantidad final no debe exceder el valor de la cantida Inicial.');
          return;
        }
        const totalUsed = this.selledQuantity + this.giftProducts + this.wasteProducts;
        if (totalUsed > this.initialQuantity) {
          yield this.showToast('La cantidad final no debe exceder el valor de la cantida Inicial.');
          return;
        }
        const updateData = {
          accion: 'actualizar_registro_final',
          rf_codigo: this.selectedProduct.RF_CODIGO,
          ri_codigo: this.selectedProduct.RI_CODIGO,
          cantidad_vendida: this.selledQuantity,
          productos_muestra: this.giftProducts,
          productos_desechados: this.wasteProducts,
          dinero_total: this.selledQuantity * this.selectedPvp
        };
        this.http.post('http://localhost/ACE/WsMunicipioIonic/ws_gad.php', updateData).subscribe(response => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
          if (response.estado) {
            yield this.showToast('Registro final actualizado correctamente.');
            this.router.navigate(['/inventariomenu']).then(() => {
              window.location.reload(); // Recargar la página después de redirigir
            });
          } else {
            console.error('Error al actualizar registro final:', response.mensaje);
          }
        }), error => {
          console.error('Error en la solicitud:', error);
        });
      }
    });
  }
  showToast(message) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      const toast = yield this.toastController.create({
        message,
        duration: 2000,
        position: 'top',
        color: 'success'
      });
      toast.present();
    });
  }
};
EditinventarioPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}];
EditinventarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-editinventario',
  template: _editinventario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_editinventario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EditinventarioPage);


/***/ }),

/***/ 45186:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/secure/editinventario/editinventario.page.scss?ngResource ***!
  \*********************************************************************************/
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

/***/ 11787:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/secure/editinventario/editinventario.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/inventariomenu\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\"> Editar inventario </ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"secondary\" (click)=\"filterProductos($event)\">\n        <ion-icon slot=\"icon-only\" name=\"filter\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Registro Inicial -->\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Editar Registro Inicial</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Producto</ion-label>\n        <ion-input type=\"text\" [value]=\"nombre\" readonly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Editar Cantidad Inicial</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"initialQuantity\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">PVP</ion-label>\n        <ion-input type=\"number\" [value]=\"selectedPvp\" readonly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Fecha (YYYY-MM-DD)</ion-label>\n        <ion-input type=\"text\" [value]=\"date\" readonly></ion-input>\n      </ion-item>\n      <ion-button expand=\"full\" (click)=\"saveProduct()\">Guardar</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- Registro Final -->\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Editar Registro Final</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Cantidad Vendida</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"selledQuantity\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Productos de muestra</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"giftProducts\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Productos desechados</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"wasteProducts\"></ion-input>\n      </ion-item>\n      <ion-button expand=\"full\" (click)=\"saveFinal()\">Guardar</ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_editinventario_editinventario_module_ts.js.map