(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 40083:
/*!*********************************!*\
  !*** ./src/app/reload.guard.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReloadGuard": () => (/* binding */ ReloadGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let ReloadGuard = class ReloadGuard {
  canActivate(route, state) {
    return true;
  }
};
ReloadGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], ReloadGuard);


/***/ }),

/***/ 80530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _reload_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reload.guard */ 40083);




 // Importa tu guard
const routes = [{
  path: '',
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
  children: [{
    path: 'home',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/secure/home/home.module */ 66424)).then(m => m.HomePageModule),
    canActivate: [_reload_guard__WEBPACK_IMPORTED_MODULE_1__.ReloadGuard] // Aplica el guard aquí
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'charts',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_charts_charts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/secure/charts/charts.module */ 76806)).then(m => m.ChartsPageModule),
    canActivate: [_reload_guard__WEBPACK_IMPORTED_MODULE_1__.ReloadGuard] // Aplica el guard aquí
  }, {
    path: 'listacostos',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_listacostos_listacostos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/secure/listacostos/listacostos.module */ 44086)).then(m => m.ListacostosPageModule),
    canActivate: [_reload_guard__WEBPACK_IMPORTED_MODULE_1__.ReloadGuard] // Aplica el guard aquí
  }, {
    path: 'payments',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_payments_payments_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/secure/payments/payments.module */ 59891)).then(m => m.PaymentsPageModule),
    canActivate: [_reload_guard__WEBPACK_IMPORTED_MODULE_1__.ReloadGuard] // Aplica el guard aquí
  }, {
    path: 'report',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_report_report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/secure/report/report.module */ 66051)).then(m => m.ReportPageModule),
    canActivate: [_reload_guard__WEBPACK_IMPORTED_MODULE_1__.ReloadGuard] // Aplica el guard aquí
  }, {
    path: 'styleguide',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_styleguide_styleguide_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/secure/styleguide/styleguide.module */ 95594)).then(m => m.StyleguidePageModule),
    canActivate: [_reload_guard__WEBPACK_IMPORTED_MODULE_1__.ReloadGuard] // Aplica el guard aquí
  }, {
    path: 'editproducto',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_editproducto_editproducto_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/secure/editproducto/editproducto.module */ 47296)).then(m => m.EditproductoPageModule),
    canActivate: [_reload_guard__WEBPACK_IMPORTED_MODULE_1__.ReloadGuard] // Aplica el guard aquí
  }, {
    //inventariomenu
    path: 'inventariomenu',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_inventariomenu_inventariomenu_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/secure/inventariomenu/inventariomenu.module */ 77112)).then(m => m.InventariomenuPageModule),
    canActivate: [_reload_guard__WEBPACK_IMPORTED_MODULE_1__.ReloadGuard] // Aplica el guard aquí
  },
  //inventarioregistro
  {
    path: 'inventarioregistro',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_inventarioregistro_inventarioregistro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/secure/inventarioregistro/inventarioregistro.module */ 5233)).then(m => m.InventarioregistroPageModule),
    canActivate: [_reload_guard__WEBPACK_IMPORTED_MODULE_1__.ReloadGuard] // Aplica el guard aquí
  }]
}];

let TabsPageRoutingModule = class TabsPageRoutingModule {};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], TabsPageRoutingModule);


/***/ }),

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 80530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule],
  declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
})], TabsPageModule);


/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 65230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 62146);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);





let TabsPage = class TabsPage {
  constructor(actionSheetController) {
    this.actionSheetController = actionSheetController;
  }
  // Select action
  selectAction() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      const actionSheet = yield this.actionSheetController.create({
        header: 'Choose an action',
        cssClass: 'custom-action-sheet',
        buttons: [{
          text: 'Add something',
          icon: 'wallet',
          handler: () => {
            // Put in logic ...
          }
        }, {
          text: 'Change something',
          icon: 'swap-horizontal-outline',
          handler: () => {
            // Put in logic ...
          }
        }, {
          text: 'Set something',
          icon: 'calculator',
          handler: () => {
            // Put in logic ...
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    });
  }
};
TabsPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController
}];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-tabs',
  template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabsPage);


/***/ }),

/***/ 62146:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-label {\n  font-size: 12px;\n  font-weight: 500;\n}", "",{"version":3,"sources":["webpack://./src/app/tabs/tabs.page.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,gBAAA;AACF","sourcesContent":["ion-label {\n  font-size: 12px;\n  font-weight: 500;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 65230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-tabs>\n  <ion-tab-bar color=\"secondary\" slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Inicio</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"listacostos\">\n      <ion-icon name=\"cash-outline\"></ion-icon>\n      <ion-label>Costos</ion-label>\n    </ion-tab-button>\n\n    <!-- Placeholder for fab button -->\n    <ion-tab-button class=\"ion-tab-button-placeholder\"> </ion-tab-button>\n\n    <ion-tab-button tab=\"inventariomenu\">\n      <ion-icon name=\"swap-horizontal\"></ion-icon>\n      <ion-label>Inventario</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"report\">\n      <ion-icon name=\"color-palette-outline\"></ion-icon>\n      <ion-label>Reportes</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n  <ion-fab\n    class=\"ion-fab-custom\"\n    vertical=\"bottom\"\n    horizontal=\"center\"\n    slot=\"fixed\"\n    (click)=\"selectAction()\"\n  >\n    <ion-fab-button color=\"danger\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map