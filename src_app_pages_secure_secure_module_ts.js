"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_secure_module_ts"],{

/***/ 34507:
/*!*******************************************************!*\
  !*** ./src/app/pages/secure/secure-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecureRoutingModule": () => (/* binding */ SecureRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



const routes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../../tabs/tabs.module */ 15564)).then(m => m.TabsPageModule)
}, {
  path: 'styleguide',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_styleguide_styleguide_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./styleguide/styleguide.module */ 95594)).then(m => m.StyleguidePageModule)
}, {
  path: 'ajustes',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_ajustes_ajustes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ajustes/ajustes.module */ 69070)).then(m => m.AjustesPageModule)
}, {
  path: 'ajustes/profile/edit',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_profile_edit_edit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/edit/edit.module */ 70630)).then(m => m.EditPageModule)
}, {
  path: 'payments/detail',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_payments_payment-detail_payment-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./payments/payment-detail/payment-detail.module */ 92925)).then(m => m.PaymentDetailPageModule)
}, {
  path: 'listacostos',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_listacostos_listacostos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./listacostos/listacostos.module */ 44086)).then(m => m.ListacostosPageModule)
}, {
  path: 'editproducto',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_editproducto_editproducto_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./editproducto/editproducto.module */ 47296)).then(m => m.EditproductoPageModule)
}, {
  path: 'registroinventario',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_registroinventario_registroinventario_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./registroinventario/registroinventario.module */ 48822)).then(m => m.RegistroinventarioPageModule)
}, {
  path: 'editinventario',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_editinventario_editinventario_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./editinventario/editinventario.module */ 16599)).then(m => m.EditinventarioPageModule)
}, {
  path: 'inventariomenu',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_inventariomenu_inventariomenu_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./inventariomenu/inventariomenu.module */ 77112)).then(m => m.InventariomenuPageModule)
}, {
  path: 'inventarioregistro',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_inventarioregistro_inventarioregistro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./inventarioregistro/inventarioregistro.module */ 5233)).then(m => m.InventarioregistroPageModule)
}, {
  path: 'report',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_report_report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./report/report.module */ 66051)).then(m => m.ReportPageModule)
}];
let SecureRoutingModule = class SecureRoutingModule {};
SecureRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
})], SecureRoutingModule);


/***/ }),

/***/ 53079:
/*!***********************************************!*\
  !*** ./src/app/pages/secure/secure.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecureModule": () => (/* binding */ SecureModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _secure_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secure-routing.module */ 34507);




let SecureModule = class SecureModule {};
SecureModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _secure_routing_module__WEBPACK_IMPORTED_MODULE_0__.SecureRoutingModule]
})], SecureModule);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_secure_module_ts.js.map