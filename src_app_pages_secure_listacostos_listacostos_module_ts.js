(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_listacostos_listacostos_module_ts"],{

/***/ 31657:
/*!************************************************************************!*\
  !*** ./src/app/pages/secure/listacostos/listacostos-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListacostosPageRoutingModule": () => (/* binding */ ListacostosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _listacostos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listacostos.page */ 3420);




const routes = [{
  path: '',
  component: _listacostos_page__WEBPACK_IMPORTED_MODULE_0__.ListacostosPage
}];
let ListacostosPageRoutingModule = class ListacostosPageRoutingModule {};
ListacostosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ListacostosPageRoutingModule);


/***/ }),

/***/ 44086:
/*!****************************************************************!*\
  !*** ./src/app/pages/secure/listacostos/listacostos.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListacostosPageModule": () => (/* binding */ ListacostosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _listacostos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listacostos-routing.module */ 31657);
/* harmony import */ var _listacostos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listacostos.page */ 3420);







let ListacostosPageModule = class ListacostosPageModule {};
ListacostosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _listacostos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListacostosPageRoutingModule],
  declarations: [_listacostos_page__WEBPACK_IMPORTED_MODULE_1__.ListacostosPage]
})], ListacostosPageModule);


/***/ }),

/***/ 3420:
/*!**************************************************************!*\
  !*** ./src/app/pages/secure/listacostos/listacostos.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListacostosPage": () => (/* binding */ ListacostosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _listacostos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listacostos.page.html?ngResource */ 8103);
/* harmony import */ var _listacostos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listacostos.page.scss?ngResource */ 30122);
/* harmony import */ var _listacostos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_listacostos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);









let ListacostosPage = class ListacostosPage {
  constructor(authService, navCtrl, alertController, toastService, router) {
    this.authService = authService;
    this.navCtrl = navCtrl;
    this.alertController = alertController;
    this.toastService = toastService;
    this.router = router;
    this.codigo = '';
    this.productos = [];
    this.Productos = [];
    this.searchTerm = '';
    // Variables para paginación
    this.page = 1;
    this.pageSize = 10; // Número de elementos por página
    this.totalPages = 1;
  }
  ngOnInit() {}
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
  lproductos(codigo) {
    let datos = {
      accion: 'lproductos',
      cod_persona: this.codigo
    };
    this.authService.postData(datos).subscribe(res => {
      if (res.estado === true) {
        this.productos = res.datos;
        this.Productos = res.datos; // Inicialmente muestra todos los productos
        this.calculatePagination();
      } else {
        this.authService.showToast(res.mensaje);
      }
    });
  }
  calculatePagination() {
    this.totalPages = Math.ceil(this.Productos.length / this.pageSize); // Calcula el número total de páginas
  }
  // Metodos para paginación
  getPaginatedProductos() {
    const startIndex = (this.page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.Productos.slice(startIndex, endIndex);
  }
  // Metodos para paginación ir siguiente
  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
    }
  }
  // Metodos para paginación ir anterior
  previousPage() {
    if (this.page > 1) {
      this.page--;
    }
  }
  irEditar(codigo) {
    this.navCtrl.navigateRoot(['/editproducto']);
    this.authService.creatSession('id', codigo);
  }
  filterProductos(event) {
    const searchTerm = event.target.value.toLowerCase();
    this.Productos = this.productos.filter(producto => {
      return producto.nombre.toLowerCase().includes(searchTerm);
    });
  }
  // Metodo para eliminar un producto de la lista
  eliminarProducto(productoId) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
          handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let datos = {
              accion: 'eliminarProducto',
              productoId: productoId,
              cod_persona: this.codigo
            };
            try {
              const res = yield this.authService.postData(datos).toPromise();
              if (res.estado) {
                this.authService.showToast2('Producto eliminado con éxito');
                this.lproductos(this.codigo); // Actualiza la lista de productos
                window.location.reload();
              } else {
                this.authService.showToast(res.mensaje);
              }
            } catch (error) {
              this.authService.showToast('Error al eliminar el producto. Por favor, intenta de nuevo.');
            }
          })
        }]
      });
      yield alert.present();
    });
  }
};
ListacostosPage.ctorParameters = () => [{
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}];
ListacostosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-listacostos',
  template: _listacostos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_listacostos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ListacostosPage);


/***/ }),

/***/ 30122:
/*!***************************************************************************!*\
  !*** ./src/app/pages/secure/listacostos/listacostos.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.transparent-grid {\n  background-color: rgba(255, 255, 255, 0.85);\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.custom-table {\n  width: 100%;\n  margin-top: 20px;\n}\n\n.header-row {\n  background-color: #000000;\n  font-weight: bold;\n  text-align: center;\n  border-bottom: 2px solid #000000;\n}\n\n.data-row {\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2039215686);\n  color: #000000;\n}\n\n.header, .data {\n  padding: 10px 5px;\n  border-left: 1px solid rgba(0, 0, 0, 0.2039215686);\n}\n\n.actions {\n  display: flex;\n  justify-content: center;\n}\n\n.actions ion-button {\n  margin: 0 5px;\n}\n\n.even-row {\n  background-color: rgba(248, 245, 241, 0.1);\n}\n\n.odd-row {\n  background-color: rgba(95, 99, 98, 0.527);\n}\n\n.icon-space {\n  margin-right: 8px; /* Ajusta el valor según el espacio que desees */\n}\n\n.header, .data {\n  padding: 8px;\n  text-align: center;\n}\n\n.action-buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.action-buttons ion-button {\n  margin: 0 2px; /* Espacio entre los botones de acción */\n}\n\nion-searchbar {\n  margin: 10px;\n}\n\n.col-num {\n  flex: 0 0 75px; /* Ajusta el ancho según tus necesidades */\n  max-width: 75px;\n}\n.col-num .col-nombre {\n  flex: 0 0 200px; /* Ancho fijo para la columna Nombre */\n  max-width: 200px;\n}\n\n.col-acc {\n  max-width: 105px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.col-pvp {\n  flex: 0 0 80px; /* Ajusta el ancho según tus necesidades */\n  max-width: 80px;\n}\n\n/* Nuevas reglas para añadir márgenes */\n.searchbar-spacing {\n  margin: 0px; /* Ajusta el valor según tus necesidades */\n}\n\n.button-spacing {\n  margin-left: 16px; /* Ajusta el valor según tus necesidades */\n}", "",{"version":3,"sources":["webpack://./src/app/pages/secure/listacostos/listacostos.page.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACE,2CAAA;EACA,mBAAA;EACA,aAAA;AAEF;;AACA;EACE,WAAA;EACA,gBAAA;AAEF;;AACA;EACE,yBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gCAAA;AAEF;;AACA;EACE,kBAAA;EACA,oDAAA;EACA,cAAA;AAEF;;AACA;EACE,iBAAA;EACA,kDAAA;AAEF;;AACA;EACE,aAAA;EACA,uBAAA;AAEF;;AACA;EACE,aAAA;AAEF;;AACA;EACE,0CAAA;AAEF;;AACA;EACE,yCAAA;AAEF;;AACA;EACE,iBAAA,EAAA,gDAAA;AAEF;;AAEA;EACE,YAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA,EAAA,wCAAA;AACF;;AACA;EACE,YAAA;AAEF;;AAAA;EACE,cAAA,EAAA,0CAAA;EACA,eAAA;AAGF;AAFE;EACE,eAAA,EAAA,sCAAA;EACA,gBAAA;AAIJ;;AADA;EAEE,gBAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;AAGF;;AADA;EACE,cAAA,EAAA,0CAAA;EACA,eAAA;AAIF;;AAFA,uCAAA;AACA;EACE,WAAA,EAAA,0CAAA;AAKF;;AAFA;EACE,iBAAA,EAAA,0CAAA;AAKF","sourcesContent":[".transparent-grid {\n  background-color: rgba(255, 255, 255, 0.85); // 85% de transparencia\n  border-radius: 10px; // Esquinas redondeadas\n  padding: 10px; // Espacio interno\n}\n\n.custom-table {\n  width: 100%;\n  margin-top: 20px;\n}\n\n.header-row {\n  background-color: #000000; // Verde\n  font-weight: bold;\n  text-align: center;\n  border-bottom: 2px solid #000000; // Verde oscuro\n}\n\n.data-row {\n  text-align: center;\n  border-bottom: 1px solid #00000034; // Amarillo\n  color: #000000;\n}\n\n.header, .data {\n  padding: 10px 5px;\n  border-left: 1px solid #00000034; // Verde oscuro\n}\n\n.actions {\n  display: flex;\n  justify-content: center;\n}\n\n.actions ion-button {\n  margin: 0 5px;\n}\n\n.even-row {\n  background-color: rgba(248, 245, 241, 0.1); // Naranja claro\n}\n\n.odd-row {\n  background-color: rgba(95, 99, 98, 0.527); // Verde azulado claro / tabla\n}\n\n.icon-space {\n  margin-right: 8px; /* Ajusta el valor según el espacio que desees */\n}\n\n\n.header, .data {\n  padding: 8px;\n  text-align: center;\n}\n\n.action-buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.action-buttons ion-button {\n  margin: 0 2px; /* Espacio entre los botones de acción */\n}\nion-searchbar {\n  margin: 10px;\n}\n.col-num {\n  flex: 0 0 75px; /* Ajusta el ancho según tus necesidades */\n  max-width: 75px;\n  .col-nombre {\n    flex: 0 0 200px; /* Ancho fijo para la columna Nombre */\n    max-width: 200px;\n  }\n}\n.col-acc {\n  // flex: 0 0 90px; /* Ajusta el ancho según tus necesidades */\n  max-width: 105px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.col-pvp {\n  flex: 0 0 80px; /* Ajusta el ancho según tus necesidades */\n  max-width: 80px;\n}\n/* Nuevas reglas para añadir márgenes */\n.searchbar-spacing {\n  margin: -0px; /* Ajusta el valor según tus necesidades */\n}\n\n.button-spacing {\n  margin-left: 16px; /* Ajusta el valor según tus necesidades */\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8103:
/*!***************************************************************************!*\
  !*** ./src/app/pages/secure/listacostos/listacostos.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-title color=\"light\">Lista Costos</ion-title>\n    <ion-buttons slot=\"primary\">\n      <!--<ion-button color=\"light\" routerLink=\"/ajustes\">\n        <ion-icon slot=\"icon-only\" name=\"cog\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar class=\"searchbar-spacing\" color=\"medium\" [(ngModel)]=\"searchTerm\" (ionInput)=\"filterProductos($event)\"\n    placeholder=\"Buscar producto\"></ion-searchbar>\n\n  <ion-button color=\"danger\" routerLink=\"/charts\" class=\"floating-button button-spacing\">\n    <ion-icon name=\"duplicate-outline\" class=\"icon-space\"></ion-icon>\n    <strong>Nuevo Producto</strong>\n  </ion-button>\n\n  <ion-grid class=\"transparent-grid custom-table\">\n    <ion-row class=\"header-row\">\n      <!-- <ion-col class=\"header col-num\" color=\"light\">N°</ion-col> -->\n      <ion-col class=\"header col-nombre\" style=\"background-color: black; color: white;\">Nombre</ion-col>\n      <ion-col class=\"header col-pvp\" style=\"background-color: black; color: white;\">PVP</ion-col>\n      <ion-col class=\"header col-acc\" style=\"background-color: black; color: white;\">\n        <ion-icon name=\"settings-outline\"></ion-icon>Opcion\n      </ion-col>\n    </ion-row>\n\n    <!-- getPaginatedProductos() trae el array de Productos implementando el paginador -->\n    <ion-row *ngFor=\"let producto of getPaginatedProductos(); let i = index\" class=\"data-row\"\n      [ngClass]=\"{'even-row': i % 2 == 0, 'odd-row': i % 2 != 0}\">\n      <!-- <ion-col class=\"data col-num\">{{ (page - 1) * pageSize + i + 1 }}</ion-col> -->\n      <ion-col class=\"data col-nombre\">{{ producto.nombre }}</ion-col>\n      <ion-col class=\"data col-pvp\">{{ producto.pvp }}</ion-col>\n      <ion-col class=\"data col-acc actions\">\n        <div class=\"action-buttons\">\n          <ion-button size=\"small\" fill=\"clear\" color=\"black\" (click)=\"irEditar(producto.codigo)\">\n            <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n          </ion-button>\n          <ion-button size=\"small\" fill=\"clear\" color=\"danger\" (click)=\"eliminarProducto(producto.codigo)\">\n            <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row class=\"pagination-row\">\n    <ion-col class=\"pagination-controls\">\n      <ion-button (click)=\"previousPage()\" [disabled]=\"page === 1\">\n        Anterior\n      </ion-button>\n      <span>Página {{ page }} de {{ totalPages }}</span>\n      <ion-button (click)=\"nextPage()\" [disabled]=\"page === totalPages\">\n        Siguiente\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_listacostos_listacostos_module_ts.js.map