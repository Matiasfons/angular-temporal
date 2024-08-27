(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_report_report_module_ts"],{

/***/ 99916:
/*!**************************************************************!*\
  !*** ./src/app/pages/secure/report/report-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPageRoutingModule": () => (/* binding */ ReportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report.page */ 932);




const routes = [{
  path: '',
  component: _report_page__WEBPACK_IMPORTED_MODULE_0__.ReportPage
}];
let ReportPageRoutingModule = class ReportPageRoutingModule {};
ReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ReportPageRoutingModule);


/***/ }),

/***/ 66051:
/*!******************************************************!*\
  !*** ./src/app/pages/secure/report/report.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPageModule": () => (/* binding */ ReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-routing.module */ 99916);
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.page */ 932);







let ReportPageModule = class ReportPageModule {};
ReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _report_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportPageRoutingModule],
  declarations: [_report_page__WEBPACK_IMPORTED_MODULE_1__.ReportPage]
})], ReportPageModule);


/***/ }),

/***/ 932:
/*!****************************************************!*\
  !*** ./src/app/pages/secure/report/report.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPage": () => (/* binding */ ReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report.page.html?ngResource */ 24156);
/* harmony import */ var _report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.page.scss?ngResource */ 63051);
/* harmony import */ var _report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_report_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/report/report.service */ 45945);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ 83854);






let ReportPage = class ReportPage {
  constructor(reportService) {
    this.reportService = reportService;
    this.reportType = 'daily_sales';
    this.reportData = [];
    this.exportFormat = '';
    this.currentPage = 1;
    this.totalPages = 1;
    this.isAccordionOpen = true;
    this.isShowChart = false;
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.generateReport(this.currentPage);
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.generateReport(this.currentPage);
    }
  }
  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }
  loadChart() {
    const ctx = document.getElementById('barChart');
    if (ctx) {
      new chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.reportData.map(item => item.nombre),
          datasets: [{
            label: 'Ganancias',
            data: this.reportData.map(item => item.RF_CANTIDAD_VENDIDA),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
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
  }
  generateReport(page) {
    const requestBody = {
      accion: 'report',
      id_persona: localStorage.getItem('CapacitorStorage.codigo'),
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      items_per_page: 10,
      page: page || 1
    };
    this.reportService.getDataReport(requestBody).subscribe(response => {
      if (response.estado) {
        this.reportData = response.productos;
        this.currentPage = response.pagination.current_page;
        this.totalPages = response.pagination.total_pages;
        this.isAccordionOpen = false;
        setTimeout(() => {
          this.loadChart();
        }, 500);
      } else {
        console.error('Error al generar el reporte', response.mensaje);
      }
    });
  }
};
ReportPage.ctorParameters = () => [{
  type: src_app_services_report_report_service__WEBPACK_IMPORTED_MODULE_2__.ReportService
}];
ReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-report',
  template: _report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ReportPage);


/***/ }),

/***/ 63051:
/*!*****************************************************************!*\
  !*** ./src/app/pages/secure/report/report.page.scss?ngResource ***!
  \*****************************************************************/
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

/***/ 24156:
/*!*****************************************************************!*\
  !*** ./src/app/pages/secure/report/report.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-title color=\"light\" class=\"ion-text-center\">Reportes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n<ion-accordion-group>\n  <ion-accordion [value]=\"isAccordionOpen ? 'reportFilters' : null\">\n    <ion-item slot=\"header\" color=\"light\">\n      <ion-icon name=\"filter\" slot=\"start\"></ion-icon>\n      <ion-label>Filtros de Reporte</ion-label>\n    </ion-item>\n    <ion-card slot=\"content\">\n      <ion-card-content>\n        <ion-item>\n          <ion-label>Desde</ion-label>\n          <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"dateFrom\"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Hasta</ion-label>\n          <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"dateTo\"></ion-datetime>\n        </ion-item>\n        <ion-button expand=\"block\" color=\"danger\" (click)=\"generateReport()\">Generar Reporte</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ion-accordion>\n</ion-accordion-group>\n\n\n\n<ion-accordion-group value=\"reportFilters\" *ngIf=\"reportData && reportData.length > 0\">\n  <ion-accordion value=\"reportFilters\">\n    <ion-item slot=\"header\" color=\"light\">\n      <ion-icon name=\"filter\" slot=\"start\"></ion-icon>\n      <ion-label>Gráficos</ion-label>\n    </ion-item>\n    <ion-card slot=\"content\">\n      <ion-card-content>\n        <canvas id=\"barChart\"></canvas>\n      </ion-card-content>\n    </ion-card>\n  </ion-accordion>\n</ion-accordion-group>\n\n\n  <ion-list *ngIf=\"reportData && reportData.length > 0\">\n    <ion-item>\n      <ion-label>Nombre Producto</ion-label>\n      <ion-label>Cantidad Vendida</ion-label>\n      <ion-label>Ganancia</ion-label>\n    </ion-item>\n    <ion-item *ngFor=\"let item of reportData\">\n      <ion-label>\n        {{ item.nombre }}\n      </ion-label>\n      <ion-label>\n        {{ item.RF_CANTIDAD_VENDIDA }}\n      </ion-label>\n      <ion-label>\n        {{ item.cuanto_gana }}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n    <ion-footer *ngIf=\"reportData && reportData.length > 0\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"previousPage()\" [disabled]=\"currentPage === 1\">Anterior</ion-button>\n      </ion-buttons>\n      <ion-title>Página {{ currentPage }} de {{ totalPages }}</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"nextPage()\" [disabled]=\"currentPage === totalPages\">Siguiente</ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_report_report_module_ts.js.map