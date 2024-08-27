(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_payments_payments_module_ts"],{

/***/ 1740:
/*!******************************************************************!*\
  !*** ./src/app/pages/secure/payments/payments-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPageRoutingModule": () => (/* binding */ PaymentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments.page */ 22936);




const routes = [{
  path: '',
  component: _payments_page__WEBPACK_IMPORTED_MODULE_0__.PaymentsPage
}, {
  path: 'filter',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_payments_filter_filter_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./filter/filter.module */ 41199)).then(m => m.FilterPageModule)
}];
let PaymentsPageRoutingModule = class PaymentsPageRoutingModule {};
PaymentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PaymentsPageRoutingModule);


/***/ }),

/***/ 59891:
/*!**********************************************************!*\
  !*** ./src/app/pages/secure/payments/payments.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPageModule": () => (/* binding */ PaymentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments-routing.module */ 1740);
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments.page */ 22936);







let PaymentsPageModule = class PaymentsPageModule {};
PaymentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _payments_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentsPageRoutingModule],
  declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_1__.PaymentsPage]
})], PaymentsPageModule);


/***/ }),

/***/ 22936:
/*!********************************************************!*\
  !*** ./src/app/pages/secure/payments/payments.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPage": () => (/* binding */ PaymentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _payments_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments.page.html?ngResource */ 8390);
/* harmony import */ var _payments_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments.page.scss?ngResource */ 76027);
/* harmony import */ var _payments_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_payments_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);










let PaymentsPage = class PaymentsPage {
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
    // Variables para paginación
    this.page = 1;
    this.pageSize = 10; // Número de elementos por página
    this.totalPages = 1;
    this.authService.getSession('productos').then(res => {
      this.codigo = res.codigo;
      this.productosInventario(this.codigo);
    });
  }
  ngOnInit() {
    // Puedes inicializar aquí el formulario si es necesario
  }
  ionViewWillEnter() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
      try {
        const res = yield this.authService.getSession('codigo');
        this.codigo = res;
        yield this.productosInventario(this.codigo);
      } catch (error) {
        console.error('Error al inicializar los datos', error);
        this.authService.showToast('Error al cargar los datos. Por favor, intenta de nuevo.');
      }
    });
  }
  productosInventario(codigo) {
    let datos = {
      accion: 'productosInventario',
      cod_persona: this.codigo
    };
    this.authService.postData(datos).subscribe(res => {
      if (res.estado === true) {
        this.productos = res.datos;
        this.Productos = res.datos; // Inicialmente muestra todos los productos
        this.calculatePagination(); // Llama a la función para calcular la página actual
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
  filterProductos(event) {
    const searchTerm = event.target.value.toLowerCase();
    this.Productos = this.productos.filter(producto => {
      return producto.nombre.toLowerCase().includes(searchTerm);
    });
  }
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
              accion: 'eliminarProductoInventario',
              productoId: productoId,
              cod_persona: this.codigo
            };
            try {
              const res = yield this.authService.postData(datos).toPromise();
              if (res.estado) {
                this.authService.showToast2('Producto eliminado con éxito');
                this.productosInventario(this.codigo); // Actualiza la lista de productos
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
  // Método para navegar a la página de edición del producto
  editarProducto(codigo) {
    this.navCtrl.navigateRoot(['/editinventario']);
    this.authService.creatSession('id', codigo);
  }
};
PaymentsPage.ctorParameters = () => [{
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
PaymentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-payments',
  template: _payments_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_payments_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PaymentsPage);


/***/ }),

/***/ 76027:
/*!*********************************************************************!*\
  !*** ./src/app/pages/secure/payments/payments.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n:host body {\n  background-color: var(--ion-color-dark);\n}\n:host ion-content,\n:host .toolbar-search {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary), url(\"/src/assets/escudo.png\"));\n}\n:host ion-list {\n  border-radius: 8px;\n  margin-bottom: 8px;\n  background-color: var(--ion-color-primary);\n}\n:host ion-label {\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.transparent-grid {\n  background-color: rgba(255, 255, 255, 0.85);\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.custom-table {\n  width: 100%;\n  margin-top: 20px;\n}\n\n.header-row {\n  background-color: #5ba5c7;\n  font-weight: bold;\n  text-align: center;\n  border-bottom: 2px solid rgba(91, 165, 199, 0.568627451);\n}\n\n.data-row {\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2039215686);\n  color: #000000;\n}\n\n.header, .data {\n  padding: 10px 5px;\n  border-left: 1px solid rgba(0, 0, 0, 0.2039215686);\n}\n\n.actions {\n  display: flex;\n  justify-content: center;\n}\n\n.actions ion-button {\n  margin: 0 5px;\n}\n\n.even-row {\n  background-color: rgba(248, 245, 241, 0.1);\n}\n\n.odd-row {\n  background-color: rgba(132, 167, 162, 0.527);\n}\n\n.icon-space {\n  margin-right: 8px; /* Ajusta el valor según el espacio que desees */\n}\n\n.header, .data {\n  padding: 8px;\n  text-align: center;\n}\n\n.action-buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.action-buttons ion-button {\n  margin: 0 2px; /* Espacio entre los botones de acción */\n}\n\nion-searchbar {\n  margin: 10px;\n}\n\n.col-num {\n  flex: 0 0 75px; /* Ajusta el ancho según tus necesidades */\n  max-width: 75px;\n}\n.col-num .col-nombre {\n  flex: 0 0 200px; /* Ancho fijo para la columna Nombre */\n  max-width: 200px;\n}\n\n.col-acc {\n  max-width: 105px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.col-pvp {\n  flex: 0 0 80px; /* Ajusta el ancho según tus necesidades */\n  max-width: 80px;\n}\n\n/* Nuevas reglas para añadir márgenes */\n.searchbar-spacing {\n  margin: 0px; /* Ajusta el valor según tus necesidades */\n}\n\n.button-spacing {\n  margin-left: 16px; /* Ajusta el valor según tus necesidades */\n}", "",{"version":3,"sources":["webpack://./src/app/pages/secure/payments/payments.page.scss"],"names":[],"mappings":"AAAA,gBAAgB;AACd;EACE,uCAAA;AACJ;AAEE;;EAEE,qHAAA;AAAJ;AAGE;EACE,kBAAA;EACA,kBAAA;EACA,0CAAA;AADJ;AAIE;EACE,eAAA;EACA,gBAAA;AAFJ;;AAOA;EACE,2CAAA;EACA,mBAAA;EACA,aAAA;AAJF;;AAOA;EACE,WAAA;EACA,gBAAA;AAJF;;AAOA;EACE,yBAAA;EACA,iBAAA;EACA,kBAAA;EACA,wDAAA;AAJF;;AAOA;EACE,kBAAA;EACA,oDAAA;EACA,cAAA;AAJF;;AAOA;EACE,iBAAA;EACA,kDAAA;AAJF;;AAOA;EACE,aAAA;EACA,uBAAA;AAJF;;AAOA;EACE,aAAA;AAJF;;AAOA;EACE,0CAAA;AAJF;;AAOA;EACE,4CAAA;AAJF;;AAOA;EACE,iBAAA,EAAA,gDAAA;AAJF;;AAQA;EACE,YAAA;EACA,kBAAA;AALF;;AAQA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AALF;;AAQA;EACE,aAAA,EAAA,wCAAA;AALF;;AAOA;EACE,YAAA;AAJF;;AAMA;EACE,cAAA,EAAA,0CAAA;EACA,eAAA;AAHF;AAIE;EACE,eAAA,EAAA,sCAAA;EACA,gBAAA;AAFJ;;AAKA;EAEE,gBAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;AAHF;;AAKA;EACE,cAAA,EAAA,0CAAA;EACA,eAAA;AAFF;;AAIA,uCAAA;AACA;EACE,WAAA,EAAA,0CAAA;AADF;;AAIA;EACE,iBAAA,EAAA,0CAAA;AADF","sourcesContent":[":host {\n  body {\n    background-color: var(--ion-color-dark);\n  }\n\n  ion-content,\n  .toolbar-search {\n    --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary), url('/src/assets/escudo.png'));\n  }\n\n  ion-list {\n    border-radius: 8px;\n    margin-bottom: 8px;\n    background-color: var(--ion-color-primary);\n  }\n\n  ion-label {\n    font-size: 16px;\n    font-weight: 700;\n  }\n\n}\n\n.transparent-grid {\n  background-color: rgba(255, 255, 255, 0.85); // 85% de transparencia\n  border-radius: 10px; // Esquinas redondeadas\n  padding: 10px; // Espacio interno\n}\n\n.custom-table {\n  width: 100%;\n  margin-top: 20px;\n}\n\n.header-row {\n  background-color: #5ba5c7; // Verde\n  font-weight: bold;\n  text-align: center;\n  border-bottom: 2px solid #5ba5c791; // Verde oscuro\n}\n\n.data-row {\n  text-align: center;\n  border-bottom: 1px solid #00000034; // Amarillo\n  color: #000000; // Letras de color negro\n}\n\n.header, .data {\n  padding: 10px 5px;\n  border-left: 1px solid #00000034; // Verde oscuro\n}\n\n.actions {\n  display: flex;\n  justify-content: center;\n}\n\n.actions ion-button {\n  margin: 0 5px;\n}\n\n.even-row {\n  background-color: rgba(248, 245, 241, 0.1); // Naranja claro\n}\n\n.odd-row {\n  background-color: rgba(132, 167, 162, 0.527); // Verde azulado claro\n}\n\n.icon-space {\n  margin-right: 8px; /* Ajusta el valor según el espacio que desees */\n}\n\n\n.header, .data {\n  padding: 8px;\n  text-align: center;\n}\n\n.action-buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.action-buttons ion-button {\n  margin: 0 2px; /* Espacio entre los botones de acción */\n}\nion-searchbar {\n  margin: 10px;\n}\n.col-num {\n  flex: 0 0 75px; /* Ajusta el ancho según tus necesidades */\n  max-width: 75px;\n  .col-nombre {\n    flex: 0 0 200px; /* Ancho fijo para la columna Nombre */\n    max-width: 200px;\n  }\n}\n.col-acc {\n  // flex: 0 0 90px; /* Ajusta el ancho según tus necesidades */\n  max-width: 105px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.col-pvp {\n  flex: 0 0 80px; /* Ajusta el ancho según tus necesidades */\n  max-width: 80px;\n}\n/* Nuevas reglas para añadir márgenes */\n.searchbar-spacing {\n  margin: -0px; /* Ajusta el valor según tus necesidades */\n}\n\n.button-spacing {\n  margin-left: 16px; /* Ajusta el valor según tus necesidades */\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8390:
/*!*********************************************************************!*\
  !*** ./src/app/pages/secure/payments/payments.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-title color=\"light\">Inventario</ion-title>\n    <ion-buttons slot=\"primary\">\n      <!--<ion-button color=\"light\" routerLink=\"/ajustes\">\n        <ion-icon slot=\"icon-only\" name=\"cog\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar class=\"searchbar-spacing\" color=\"medium\" [(ngModel)]=\"searchTerm\" (ionInput)=\"filterProductos($event)\"\n    placeholder=\"Buscar producto\"></ion-searchbar>\n\n  <ion-button color=\"tertiary\" routerLink=\"/registroinventario\" class=\"floating-button button-spacing\">\n    <ion-icon color=\"dark\" name=\"duplicate-outline\" class=\"icon-space\"></ion-icon>\n    <strong>Registrar Inventario</strong>\n  </ion-button>\n\n  <ion-grid class=\"transparent-grid custom-table\">\n    <ion-row class=\"header-row\">\n      <ion-col class=\"header col-nombre\" color=\"light\">Producto</ion-col>\n      <ion-col class=\"header col-cantidad_inicial\" color=\"light\">Cantidad</ion-col>\n      <ion-col class=\"header col-acc\" color=\"light\">\n        <ion-icon name=\"settings-outline\"></ion-icon>Opcion\n      </ion-col>\n    </ion-row>\n\n    <!-- getPaginatedProductos() trae el array de Productos implementando el paginador -->\n    <ion-row *ngFor=\"let producto of getPaginatedProductos(); let i = index\" class=\"data-row\"\n      [ngClass]=\"{'even-row': i % 2 == 0, 'odd-row': i % 2 != 0}\">\n      <ion-col class=\"data col-nombre\">{{ producto.nombre }}</ion-col>\n      <ion-col class=\"data col-cantidad_inicial\">{{ producto.cantidad_inicial }}</ion-col>\n      <ion-col class=\"data col-acc actions\">\n        <div class=\"action-buttons\">\n          <ion-button size=\"small\" fill=\"clear\" color=\"tertiary\" (click)=\"editarProducto(producto.codigo)\">\n            <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n          </ion-button>\n          <ion-button size=\"small\" fill=\"clear\" color=\"danger\" (click)=\"eliminarProducto(producto.codigo)\">\n            <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row class=\"pagination-row\">\n    <ion-col class=\"pagination-controls\">\n      <ion-button (click)=\"previousPage()\" [disabled]=\"page === 1\">\n        Anterior\n      </ion-button>\n      <span>Página {{ page }} de {{ totalPages }}</span>\n      <ion-button (click)=\"nextPage()\" [disabled]=\"page === totalPages\">\n        Siguiente\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_payments_payments_module_ts.js.map