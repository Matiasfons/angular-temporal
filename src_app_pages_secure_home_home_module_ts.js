(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_home_home_module_ts"],{

/***/ 92115:
/*!**********************************************************!*\
  !*** ./src/app/pages/secure/home/home-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 43455);




const routes = [{
  path: '',
  component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
}];
let HomePageRoutingModule = class HomePageRoutingModule {};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], HomePageRoutingModule);


/***/ }),

/***/ 66424:
/*!**************************************************!*\
  !*** ./src/app/pages/secure/home/home.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 92115);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 43455);







let HomePageModule = class HomePageModule {};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule],
  declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
})], HomePageModule);


/***/ }),

/***/ 43455:
/*!************************************************!*\
  !*** ./src/app/pages/secure/home/home.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 14923);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 13268);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ 83854);
/* harmony import */ var src_app_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/report/report.service */ 45945);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);








let HomePage = class HomePage {
  constructor(authService, reportService, alertController) {
    this.authService = authService;
    this.reportService = reportService;
    this.alertController = alertController;
    this.content_loaded = false;
    this.productos = [];
    this.totalGanancias = 0;
    this.totalCantidadVendida = 0; // Total de cantidad vendida
    this.myChart = null;
    this.myChart2 = null;
    this.codigo = '';
    this.searchTerm = '';
    this.stockAlerts = [];
    this.getData();
  }
  ionViewWillEnter() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
      try {
        const res = yield this.authService.getSession('codigo');
        this.codigo = res;
        yield this.verificarStock(this.codigo);
      } catch (error) {
        console.error('Error al inicializar los datos', error);
        this.authService.showToast('Error al cargar los datos. Por favor, intenta de nuevo.');
      }
    });
  }
  verificarStock(codigo) {
    let datos = {
      accion: 'lproductos',
      cod_persona: this.codigo
    };
    this.authService.postData(datos).subscribe(res => {
      if (res.estado === true) {
        // Verificar stock mínimo con lógica dinámica
        this.stockAlerts = this.authService.checkStockMinimo(res.datos);
        if (this.stockAlerts.length > 0) {
          this.showStockAlert();
        }
      } else {
        this.authService.showToast(res.mensaje);
      }
    });
  }
  showStockAlert() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
      const alert = yield this.alertController.create({
        header: 'Alertas de Stock',
        message: this.stockAlerts.join('<br>'),
        buttons: ['OK']
      });
      yield alert.present();
    });
  }
  generarColoresHexadecimales(cantidad) {
    const colores = [];
    const letrasHex = '89ABCDEF';
    while (colores.length < cantidad) {
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letrasHex[Math.floor(Math.random() * letrasHex.length)];
      }
      if (!colores.includes(color)) {
        colores.push(color);
      }
    }
    return colores;
  }
  getData() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
      const userCode = localStorage.getItem('CapacitorStorage.codigo');
      const datos = {
        accion: 'report',
        id_persona: userCode,
        page: 1,
        items_per_page: 1000000000,
        dateFrom: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0],
        dateTo: new Date().toISOString().split('T')[0]
      };
      this.reportService.getDataReport(datos).subscribe(res => {
        if (res.estado) {
          const products = res === null || res === void 0 ? void 0 : res.productos;
          if (products && Array.isArray(products)) {
            this.productos = products.sort((a, b) => b.RF_CANTIDAD_VENDIDA - a.RF_CANTIDAD_VENDIDA).slice(0, 4);
            const colors = this.generarColoresHexadecimales((this.productos || []).length);
            this.productos = this.productos.map((d, index) => ({
              name: d.nombre,
              value: d.RF_CANTIDAD_VENDIDA,
              ganancias: d.cuanto_gana,
              color: colors[index]
            }));
            // Calcular el total de ganancias
            this.totalGanancias = this.productos.reduce((total, producto) => total + producto.ganancias, 0);
            // Calcular el total de cantidad vendida
            this.totalCantidadVendida = this.productos.reduce((total, producto) => total + producto.value, 0);
            this.generarChart();
            this.generarChartPastel();
          } else {
            this.authService.showToast(res.mensaje);
          }
        } else {
          this.authService.showToast(res.mensaje);
        }
      });
    });
  }
  ngOnInit() {
    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }
  generarChart() {
    const canvas = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_5__.Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.productos.map(x => x.name),
        datasets: [{
          label: 'Productos más vendidos',
          data: this.productos.map(x => x.value),
          backgroundColor: this.productos.map(x => x.color),
          borderColor: this.productos.map(x => x.color),
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  generarChartPastel() {
    const canvas = document.getElementById('myChart2');
    const ctx = canvas.getContext('2d');
    this.myChart2 = new chart_js__WEBPACK_IMPORTED_MODULE_5__.Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.productos.map(x => x.name),
        datasets: [{
          label: 'Ganancias por producto',
          data: this.productos.map(x => x.ganancias),
          backgroundColor: this.productos.map(x => x.color),
          borderColor: this.productos.map(x => x.color),
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          tooltip: {
            enabled: true
          }
        }
      }
    });
  }
};
HomePage.ctorParameters = () => [{
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}, {
  type: src_app_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__.ReportService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HomePage);


/***/ }),

/***/ 13268:
/*!*************************************************************!*\
  !*** ./src/app/pages/secure/home/home.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host ion-list {\n  background-color: var(--ion-color-primary);\n}\n\n.chart-container {\n  position: relative;\n  margin: auto;\n}\n\n.custom-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 20px;\n  max-height: 800px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 10px;\n}\n\n.grid-item {\n  background-color: white;\n  border: 1px solid rgb(182, 182, 182);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  text-align: center;\n  border-radius: 8px;\n}\n\n.info-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.info-card h3 {\n  margin: 0px;\n  font-size: 20px;\n  margin-left: 5px;\n}\n\n.profits-card-result {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.profits-card-result ion-icon {\n  font-size: 22px;\n  font-weight: normal;\n}\n.profits-card-result p {\n  margin: 0px;\n  margin-left: 5px;\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.tabla-ventas {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 20px;\n  color: black;\n  background: white;\n  margin-bottom: 20px;\n}\n\n.tabla-ventas th,\n.tabla-ventas td {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: left;\n}\n\n.tabla-ventas th {\n  background-color: #f2f2f2;\n  text-align: center;\n}\n\n.tabla-ventas tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n.tabla-ventas tr:hover {\n  background-color: #ddd;\n}\n\n.productos-vendidos-title {\n  color: rgb(36, 36, 36);\n  text-align: center;\n  font-size: 30px;\n  margin-block: 25px;\n}\n\n.pie-chart {\n  margin-bottom: 25px;\n  overflow: auto;\n}\n\n.custom-tooltip p {\n  margin: 0px;\n  font-size: 30px;\n}\n\n.color-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.color-container div {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/secure/home/home.page.scss"],"names":[],"mappings":"AACE;EACE,0CAAA;AAAJ;;AAIA;EACE,kBAAA;EACA,YAAA;AADF;;AAIA;EACE,aAAA;EACA,8BAAA;EACA,cAAA;EACA,iBAAA;EACA,YAAA;EACA,cAAA;EACA,aAAA;AADF;;AAIA;EACE,uBAAA;EACA,oCAAA;EACA,wCAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;AADF;;AAIA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AADF;AAEE;EACE,WAAA;EACA,eAAA;EACA,gBAAA;AAAJ;;AAIA;EACE,aAAA;EACA,uBAAA;EACA,gBAAA;AADF;AAEE;EACE,eAAA;EACI,mBAAA;AAAR;AAEE;EACE,WAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AAAJ;;AAKA;EACE,WAAA;EACA,yBAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;AAFF;;AAKA;;EAEE,sBAAA;EACA,YAAA;EACA,gBAAA;AAFF;;AAKA;EACE,yBAAA;EACA,kBAAA;AAFF;;AAKA;EACE,yBAAA;AAFF;;AAKA;EACE,sBAAA;AAFF;;AAKA;EACE,sBAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;AAFF;;AAKA;EACE,mBAAA;EACA,cAAA;AAFF;;AAME;EACE,WAAA;EACA,eAAA;AAHJ;;AAOA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AAJF;AAKE;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AAHJ","sourcesContent":[":host {\n  ion-list {\n    background-color: var(--ion-color-primary);\n  }\n}\n\n.chart-container {\n  position: relative;\n  margin: auto;\n}\n\n.custom-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 20px;\n  max-height: 800px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 10px;\n}\n\n.grid-item {\n  background-color: white;\n  border: 1px solid rgb(182, 182, 182);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  text-align: center;\n  border-radius: 8px;\n}\n\n.info-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  h3 {\n    margin: 0px;\n    font-size: 20px;\n    margin-left: 5px;\n  }\n}\n\n.profits-card-result {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  ion-icon {\n    font-size: 22px;\n        font-weight: normal;\n  }\n  p {\n    margin: 0px;\n    margin-left: 5px;\n    font-size: 30px;\n    font-weight: bold;\n  }\n\n}\n\n.tabla-ventas {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 20px;\n  color: black;\n  background: white;\n  margin-bottom: 20px;\n}\n\n.tabla-ventas th,\n.tabla-ventas td {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: left;\n}\n\n.tabla-ventas th {\n  background-color: #f2f2f2;\n  text-align: center;\n}\n\n.tabla-ventas tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n.tabla-ventas tr:hover {\n  background-color: #ddd;\n}\n\n.productos-vendidos-title {\n  color: rgb(36, 36, 36);\n  text-align: center;\n  font-size: 30px;\n  margin-block: 25px;\n}\n\n.pie-chart {\n  margin-bottom: 25px;\n  overflow: auto\n}\n\n.custom-tooltip {\n  p {\n    margin: 0px;\n    font-size: 30px;\n  }\n}\n\n.color-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  div {\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n  }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 14923:
/*!*************************************************************!*\
  !*** ./src/app/pages/secure/home/home.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-title color=\"light\">Dashboard</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"light\" routerLink=\"/ajustes\">\n        <ion-icon slot=\"icon-only\" name=\"cog\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Dashboard</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-searchbar showCancelButton=\"focus\" placeholder=\"Company, category, expense ...\"></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"ion-padding\">\n    <div class=\"custom-grid\">\n      <div class=\"grid-item\" style=\"display: flex; flex-direction: column; align-items: center;\">\n        <div class=\"info-card\" style=\"color: #269726; text-align: center;\">\n          <ion-icon name=\"cash-outline\"></ion-icon>\n          <h3>Mis Ganancias</h3>\n        </div>\n        <div style=\"color: black; display: flex; align-items: center; justify-content: center;\"\n          class=\"profits-card-result\">\n          <ion-icon name=\"logo-usd\" style=\"font-size: 24px; margin-right: 8px;\"></ion-icon>\n          <p style=\"font-size: 24px;\">{{ totalGanancias }}</p>\n        </div>\n      </div>\n      <div class=\"grid-item\" style=\"display: flex; flex-direction: column; align-items: center;\">\n        <div class=\"info-card\" style=\"color: #0c1296; text-align: center;\">\n          <ion-icon name=\"cart-outline\"></ion-icon>\n          <h3>Productos Vendidos</h3>\n        </div>\n        <div style=\"color: black; display: flex; align-items: center; justify-content: center;\"\n          class=\"profits-card-result\">\n          <ion-icon name=\"cart-outline\"></ion-icon>\n          <p style=\"font-size: 24px;\">{{ totalCantidadVendida }}</p>\n        </div>\n      </div>\n    </div>\n\n\n    <!-- Gráfico Circular -->\n    <div class=\"grid-item\" style=\"margin-bottom: 20px; display: flex; flex-direction: column; align-items: center;\">\n      <div class=\"info-card\" style=\"color: #000000; text-align: center; width: 100%;\">\n        <h3>Mis Ganancias</h3>\n      </div>\n      <div class=\"chart-container\" style=\"padding: 16px; width: 100%;\">\n        <canvas id=\"myChart2\"></canvas>\n      </div>\n    </div>\n\n    <!-- Gráfico de Barras -->\n    <div class=\"grid-item\" style=\"display: flex; flex-direction: column; align-items: center;\">\n      <div class=\"info-card\" style=\"color: #000000; text-align: center; width: 100%;\">\n        <h3>Mis productos más vendidos</h3>\n      </div>\n      <div class=\"chart-container\" style=\"padding: 16px; width: 100%;\">\n        <canvas id=\"myChart\"></canvas>\n      </div>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_home_home_module_ts.js.map