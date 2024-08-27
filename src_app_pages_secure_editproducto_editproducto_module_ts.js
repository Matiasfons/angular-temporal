(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_editproducto_editproducto_module_ts"],{

/***/ 9423:
/*!**************************************************************************!*\
  !*** ./src/app/pages/secure/editproducto/editproducto-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditproductoPageRoutingModule": () => (/* binding */ EditproductoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _editproducto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editproducto.page */ 79101);




const routes = [{
  path: '',
  component: _editproducto_page__WEBPACK_IMPORTED_MODULE_0__.EditproductoPage
}];
let EditproductoPageRoutingModule = class EditproductoPageRoutingModule {};
EditproductoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], EditproductoPageRoutingModule);


/***/ }),

/***/ 47296:
/*!******************************************************************!*\
  !*** ./src/app/pages/secure/editproducto/editproducto.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditproductoPageModule": () => (/* binding */ EditproductoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _editproducto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editproducto-routing.module */ 9423);
/* harmony import */ var _editproducto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editproducto.page */ 79101);







let EditproductoPageModule = class EditproductoPageModule {};
EditproductoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _editproducto_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditproductoPageRoutingModule],
  declarations: [_editproducto_page__WEBPACK_IMPORTED_MODULE_1__.EditproductoPage]
})], EditproductoPageModule);


/***/ }),

/***/ 79101:
/*!****************************************************************!*\
  !*** ./src/app/pages/secure/editproducto/editproducto.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditproductoPage": () => (/* binding */ EditproductoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _editproducto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editproducto.page.html?ngResource */ 88486);
/* harmony import */ var _editproducto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editproducto.page.scss?ngResource */ 12436);
/* harmony import */ var _editproducto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editproducto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helper/helper.service */ 60337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);












let EditproductoPage = class EditproductoPage {
  constructor(helperService, navCtrl, http, alertController, authService, toastService, router) {
    this.helperService = helperService;
    this.navCtrl = navCtrl;
    this.http = http;
    this.alertController = alertController;
    this.authService = authService;
    this.toastService = toastService;
    this.router = router;
    this.codigo = "";
    this.productoId = null;
    this.txt_producto = '';
    this.tproducto = 0;
    this.materiasPrimas = [{
      nombre: '',
      vtotal: 0,
      costo: 0,
      unidad: '',
      cantidad: 0
    }];
    this.manoDeObraList = [{
      nombre: '',
      sueldoMensual: 0,
      tipoTiempo: '',
      horasTrabajadas: 0,
      costo: 0
    }];
    this.costosIndirectosList = [{
      nombre: '',
      cantidadHoras: 0,
      valorMensual: 0,
      horas: 0,
      cantidadagua: 0,
      cantidadGas: 0,
      costo: 0
    }];
    this.otrosGastoList = [{
      nombre: '',
      vtotal: 0,
      costo: 0
    }];
    this.margenBeneficio = 0;
    this.utilidadv = 0;
    this.utilidadc = 0;
    this.impuestos = 0;
    this.costoProduccion = null;
    this.costoFabrica = null;
    this.costoDistribucion = null;
    this.pvp = null;
    this.content_loaded = false;
    this.barChartOptions = {
      elements: {
        line: {
          tension: 0.4
        }
      },
      animation: {
        easing: 'easeInOutElastic',
        delay: 25
      },
      responsive: true,
      scales: {
        x: {
          grid: {
            color: '#ccc'
          },
          ticks: {
            color: '#666',
            font: {
              family: 'Inter',
              weight: 'bold'
            }
          }
        },
        y: {
          position: 'right',
          grid: {
            color: '#ccc'
          },
          ticks: {
            color: '#666',
            callback: value => '$' + value
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#333',
          bodyColor: '#666',
          titleColor: '#fff',
          titleFont: {
            size: 14,
            weight: 'normal'
          },
          bodyFont: {
            size: 16,
            weight: 'bold'
          },
          padding: 12,
          boxWidth: 10,
          boxHeight: 10,
          boxPadding: 3,
          usePointStyle: true,
          callbacks: {
            label: context => {
              let label = context.dataset.label || '';
              if (label) label += ': ';
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(context.parsed.y);
              }
              return label;
            }
          }
        }
      }
    };
    this.barChartLabels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    this.barChartType = 'bar';
    this.barChartData = {
      labels: this.barChartLabels,
      datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A'
      }, {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B'
      }]
    };
    this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    this.polarAreaChartData = {
      labels: this.polarAreaChartLabels,
      datasets: [{
        data: [300, 500, 100, 40, 120],
        label: 'Series 1'
      }]
    };
    this.polarAreaLegend = true;
    this.polarAreaChartType = 'polarArea';
    this.authService.getSession('id').then(res => {
      this.codigo = res;
      this.consultarDato(this.codigo);
    });
  }
  ngOnInit() {
    this.createBarChart();
  }
  consultarDato(codigo) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      let datos = {
        accion: "consultarDatoProductos",
        id: codigo
      };
      this.authService.postData(datos).subscribe(res => {
        if (res.estado == true) {
          // Asignar datos generales
          this.productoId = res.productos[0].id;
          this.codigo = res.productos[0].codigo;
          this.txt_producto = res.productos[0].nombre;
          this.tproducto = res.productos[0].tproducto;
          this.margenBeneficio = res.productos[0].margenBeneficio;
          this.utilidadv = res.productos[0].utilidadVenta;
          this.utilidadc = res.productos[0].utilidadDis;
          this.impuestos = res.productos[0].impuestos;
          this.costoProduccion = res.productos[0].costoProduccion;
          this.costoFabrica = res.productos[0].costoFabrica;
          this.costoDistribucion = res.productos[0].costoDistribucion;
          this.pvp = res.productos[0].pvp;
          // Filtrar y asignar datos sin duplicados
          this.materiasPrimas = this.filterUniqueItems(res.productos[0].materiasPrimas, 'nombre');
          this.manoDeObraList = this.filterUniqueItems(res.productos[0].manoDeObraList, 'nombre');
          this.costosIndirectosList = this.filterUniqueItems(res.productos[0].costosIndirectosList, 'nombre');
          this.otrosGastoList = this.filterUniqueItems(res.productos[0].otrosGastoList, 'nombre');
        } else {
          this.authService.showToast(res.mensaje);
        }
      });
    });
  }
  // Función para filtrar elementos únicos por una propiedad específica
  filterUniqueItems(array, property) {
    return array.filter((item, index, self) => index === self.findIndex(t => t[property] === item[property]));
  }
  ionViewDidEnter() {
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }
  agregarMateriaPrima() {
    this.materiasPrimas.push({
      nombre: '',
      vtotal: 0,
      costo: 0,
      unidad: '',
      cantidad: 0
    });
  }
  quitarMateriaPrima(index) {
    this.materiasPrimas.splice(index, 1);
  }
  agregarManoDeObra() {
    this.manoDeObraList.push({
      nombre: '',
      sueldoMensual: 0,
      tipoTiempo: '',
      horasTrabajadas: 0,
      costo: 0
    });
  }
  quitarManoDeObra(index) {
    this.manoDeObraList.splice(index, 1);
  }
  agregarCostosIndirectos() {
    this.costosIndirectosList.push({
      nombre: '',
      cantidadHoras: 0,
      valorMensual: 0,
      horas: 0,
      cantidadagua: 0,
      cantidadGas: 0,
      costo: 0
    });
  }
  quitarCostosIndirectos(index) {
    this.costosIndirectosList.splice(index, 1);
  }
  agregarGasto() {
    this.otrosGastoList.push({
      nombre: '',
      vtotal: 0,
      costo: 0
    });
  }
  quitarGasto(index) {
    this.otrosGastoList.splice(index, 1);
  }
  shouldShowCantidad(unidad) {
    return unidad !== 'unidad' && unidad !== '';
  }
  calcular() {
    this.manoDeObraList.forEach((manoDeObra, index) => {
      const sueldoMensual = manoDeObra.sueldoMensual || 0;
      const tipoTiempo = +manoDeObra.tipoTiempo || 1; // Convertir a número
      const horasTrabajadas = manoDeObra.horasTrabajadas || 0;
      const cantidadProductos = this.tproducto || 1;
      console.log('Mano de obra:', sueldoMensual, tipoTiempo, horasTrabajadas, cantidadProductos);
      if (cantidadProductos > 0 && tipoTiempo > 0) {
        const costo = sueldoMensual / tipoTiempo * horasTrabajadas / cantidadProductos;
        this.manoDeObraList[index].costo = costo;
      } else {
        this.manoDeObraList[index].costo = 0;
      }
    });
    // Costos indirectos
    this.costosIndirectosList.forEach((costoIndirecto, i) => {
      console.log('Costo indirecto:', costoIndirecto.nombre, costoIndirecto);
      if (this.tproducto > 0) {
        switch (costoIndirecto.nombre) {
          case 'luz':
            const costoLuz = 0.09 * costoIndirecto.cantidadHoras / this.tproducto;
            this.costosIndirectosList[i].costo = costoLuz;
            break;
          case 'agua':
            const cantidadagua = costoIndirecto.cantidadagua;
            if (cantidadagua != null && cantidadagua > 0) {
              const costoAgua = cantidadagua / this.tproducto;
              this.costosIndirectosList[i].costo = costoAgua;
            } else {
              this.costosIndirectosList[i].costo = 0;
            }
            break;
          case 'gas':
            if (costoIndirecto.cantidadGas && costoIndirecto.cantidadGas > 0) {
              const costoGas = costoIndirecto.cantidadGas / this.tproducto;
              this.costosIndirectosList[i].costo = costoGas;
            }
            break;
          case 'telecomunicaciones':
            if (costoIndirecto.valorMensual && costoIndirecto.horas) {
              const costoTelecom = costoIndirecto.valorMensual / 720 * costoIndirecto.horas / this.tproducto;
              this.costosIndirectosList[i].costo = costoTelecom;
            }
            break;
          default:
            this.costosIndirectosList[i].costo = 0;
            break;
        }
      }
    });
    // Función para limpiar números y convertir a float
    const limpiarNumero = valor => {
      if (typeof valor === 'string') {
        valor = valor.replace(/[^0-9.-]+/g, ''); // Eliminar caracteres no numéricos
      }

      return parseFloat(valor) || 0; // Convertir a número y manejar NaN
    };

    const cantidadProductos = limpiarNumero(this.tproducto) || 1;
    // Costo unitario para materias primas
    this.materiasPrimas.forEach(materia => {
      if (cantidadProductos === 1) {
        materia.costo = limpiarNumero(materia.costo);
      } else {
        const valorTotalMateria = limpiarNumero(materia.vtotal) || 0;
        materia.costo = cantidadProductos > 0 ? valorTotalMateria / cantidadProductos : 0;
      }
    });
    // Costo total de materias primas
    const costoMateriasPrimas = this.materiasPrimas.reduce((total, materia) => {
      const costoUnitario = limpiarNumero(materia.costo);
      const cantidadMateria = limpiarNumero(materia.cantidad) || 1;
      return total + costoUnitario * cantidadMateria;
    }, 0);
    // Costo de otros gastos
    this.otrosGastoList.forEach(otroCosto => {
      if (cantidadProductos === 1) {
        otroCosto.costo = limpiarNumero(otroCosto.costo);
      } else {
        const valorTotalOtroCosto = limpiarNumero(otroCosto.vtotal) || 0;
        otroCosto.costo = cantidadProductos > 0 ? valorTotalOtroCosto / cantidadProductos : 0;
      }
    });
    const totalManoDeObra = this.manoDeObraList.reduce((total, mano) => total + limpiarNumero(mano.costo), 0);
    const totalCostosIndirectos = this.costosIndirectosList.reduce((total, costo) => total + limpiarNumero(costo.costo), 0);
    const totalOtrosGastos = this.otrosGastoList.reduce((total, costo) => total + limpiarNumero(costo.costo), 0);
    this.costoProduccion = parseFloat((costoMateriasPrimas + totalManoDeObra + totalCostosIndirectos + totalOtrosGastos).toFixed(2));
    const beneficio = parseFloat((this.costoProduccion * (this.margenBeneficio / 100)).toFixed(2));
    this.costoFabrica = parseFloat((this.costoProduccion + beneficio).toFixed(2));
    const utilidadVendedor = parseFloat((this.costoFabrica * (this.utilidadv / 100)).toFixed(2));
    this.costoDistribucion = parseFloat((this.costoFabrica + utilidadVendedor).toFixed(2));
    const utilidadComercial = parseFloat((this.costoDistribucion * (this.utilidadc / 100)).toFixed(2));
    const impuestosCalculados = parseFloat((this.costoDistribucion * (this.impuestos / 100)).toFixed(2));
    this.pvp = parseFloat((this.costoDistribucion + utilidadComercial + impuestosCalculados).toFixed(2));
    console.log('Cantidad de productos:', cantidadProductos);
    console.log('Costo Unitario por materia prima:', this.materiasPrimas.map(m => m.costo));
    console.log('Costo de materias primas:', costoMateriasPrimas);
    console.log('Total de mano de obra:', totalManoDeObra);
    console.log('Total de costos indirectos:', totalCostosIndirectos);
    console.log('Total de otros gastos:', totalOtrosGastos);
    console.log('Costo de producción:', this.costoProduccion);
    console.log('Costo de fábrica:', this.costoFabrica);
    console.log('Costo de distribución:', this.costoDistribucion);
    console.log('PVP:', this.pvp);
    console.log('Valor de tproducto:', this.tproducto);
  }
  unidadChange(event, index) {
    const selectedUnit = event.detail.value;
    this.materiasPrimas[index].unidad = selectedUnit;
  }
  guardarCambios() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      const datos = {
        accion: "editarProducto",
        productoId: this.productoId,
        codigo: this.codigo,
        nombre: this.txt_producto,
        tproducto: this.tproducto,
        margenBeneficio: this.margenBeneficio,
        impuestos: this.impuestos,
        costoProduccion: this.costoProduccion,
        costoFabrica: this.costoFabrica,
        costoDistribucion: this.costoDistribucion,
        utilidad_venta: this.utilidadv,
        utilidad_dis: this.utilidadc,
        pvp: this.pvp,
        materiasPrimas: this.materiasPrimas,
        manoDeObraList: this.manoDeObraList,
        costosIndirectosList: this.costosIndirectosList,
        otrosGastoList: this.otrosGastoList
      };
      try {
        const res = yield this.authService.postData(datos).toPromise();
        if (res.estado) {
          yield this.authService.showToast('Éxito: Producto actualizado correctamente');
          this.navCtrl.navigateRoot('/listacostos');
        } else {
          yield this.authService.showToast(`Error: ${res.mensaje}`);
        }
      } catch (error) {
        yield this.authService.showToast('Error: No se pudo completar la solicitud. Inténtalo de nuevo.');
      }
    });
  }
  createBarChart() {
    const data = [65, 59, 80, 81, 56, 55, 40];
    this.barChartData.datasets = [{
      data: data,
      label: 'Series A'
    }];
    this.barChartData.labels = ['01', '02', '03', '04', '05', '06', '07'];
    if (this.chart) {
      this.chart.update();
    }
  }
  onCostoChange(costoIndirecto) {
    // Lógica para manejar el cambio de costo indirecto (ej: si es luz, internet, etc.)
  }
  regresar() {
    this.navCtrl.back();
  }
  mostrarMensajeRegistroExitoso() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      yield this.authService.showToast('Éxito: Datos registrados correctamente');
    });
  }
};
EditproductoPage.ctorParameters = () => [{
  type: src_app_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__.HelperService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}, {
  type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}];
EditproductoPage.propDecorators = {
  chart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: [ng2_charts__WEBPACK_IMPORTED_MODULE_10__.BaseChartDirective]
  }]
};
EditproductoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-editproducto',
  template: _editproducto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_editproducto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EditproductoPage);


/***/ }),

/***/ 12436:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/secure/editproducto/editproducto.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n:host body {\n  background-color: var(--ion-color-dark);\n}\n:host ion-content {\n  --background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(\"/src/assets/escudo.png\") no-repeat center center;\n  background-color: white;\n}\n:host ion-list {\n  border-radius: 8px;\n  margin-bottom: 8px;\n  background-color: var(--ion-color-primary);\n}\n:host ion-label {\n  font-size: 16px;\n  font-weight: 700;\n}\n:host .button-container {\n  display: flex;\n  justify-content: left;\n  align-items: left;\n  height: 5vh; /* Esto es opcional, dependiendo de si quieres centrarlo verticalmente también */\n  margin: 6px;\n}\n\n.remove-button {\n  position: absolute;\n  top: -5px;\n  right: -7px;\n  z-index: 4;\n}\n\n.bordes-item {\n  position: relative;\n  border: 1px solid #1a1717;\n  padding: 10px;\n  margin-bottom: 10px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/secure/editproducto/editproducto.page.scss"],"names":[],"mappings":"AAAA,gBAAgB;AACZ;EACE,uCAAA;AACN;AAEI;EACE,uIAAA;EACF,uBAAA;AAAJ;AAII;EACE,kBAAA;EACA,kBAAA;EACA,0CAAA;AAFN;AAKI;EACE,eAAA;EACA,gBAAA;AAHN;AAMI;EACE,aAAA;EACA,qBAAA;EACA,iBAAA;EACA,WAAA,EAAA,gFAAA;EACA,WAAA;AAJN;;AAOE;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;AAJJ;;AAOE;EACE,kBAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;AAJJ","sourcesContent":[":host {\n    body {\n      background-color: var(--ion-color-dark);\n    }\n  \n    ion-content {\n      --background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url('/src/assets/escudo.png') no-repeat center center;\n    background-color: white;\n  \n    }\n  \n    ion-list {\n      border-radius: 8px;\n      margin-bottom: 8px;\n      background-color: var(--ion-color-primary);\n    }\n  \n    ion-label {\n      font-size: 16px;\n      font-weight: 700;\n    }\n  \n    .button-container {\n      display: flex;\n      justify-content: left;\n      align-items: left;\n      height: 5vh; /* Esto es opcional, dependiendo de si quieres centrarlo verticalmente también */\n      margin: 6px;\n    }\n  }\n  .remove-button {\n    position: absolute;\n    top: -5px;\n    right: -7px;\n    z-index: 4;\n  }\n  \n  .bordes-item {\n    position: relative;\n    border: 1px solid #1a1717;\n    padding: 10px;\n    margin-bottom: 10px;\n  }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 88486:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/secure/editproducto/editproducto.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"light\" routerLink=\"/ajustes\">\n        <ion-icon slot=\"icon-only\" name=\"cog\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"light\" style=\"text-align: center; flex: 1;\">Editar Producto</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" (click)=\"regresar()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon> \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"ion-padding\">\n    <!-- Formulario para ingresar datos de producción -->\n    <ion-card-header style=\"text-align: center;\">\n      <ion-card-title style=\"font-size: 25px; font-weight: bold;\">Ingrese los datos de producción</ion-card-title>\n    </ion-card-header>\n\n    <ion-card color=\"medium\">\n      <ion-card-header>\n        <ion-card-title>Ingrese el nombre del producto <span class=\"product-size\">(Especifique su tamaño)</span></ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Nombre del Producto</ion-label>\n          <ion-input [(ngModel)]=\"txt_producto\" type=\"text\"></ion-input>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"medium\">\n      <ion-card-header>\n        <ion-card-title>Seleccione el tipo de registro</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <!-- Caja de texto siempre visible -->\n        <ion-item>\n          <ion-label position=\"floating\">Cantidad de productos</ion-label>\n          <ion-input [(ngModel)]=\"tproducto\" type=\"number\"></ion-input>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    \n    <!-- Materia Prima -->\n    <ion-card color=\"medium\">\n      <ion-card-header>\n        <ion-card-title style=\"font-size: 22px; font-weight: bold;\">Materia Prima</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-card *ngFor=\"let materiaPrima of materiasPrimas; let i = index\" class=\"bordes-item\">\n          <!-- Botón de eliminar -->\n          <ion-button color=\"danger\" size=\"small\" (click)=\"quitarMateriaPrima(i)\" class=\"remove-button\">\n            <ion-icon name=\"close-outline\"></ion-icon>\n          </ion-button>\n          <!-- Campo para valor total siempre visible -->\n          <ion-item>\n            <ion-label position=\"floating\">Nombre de Materia Prima</ion-label>\n            <ion-input [(ngModel)]=\"materiasPrimas[i].nombre\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Valor Total</ion-label>\n            <ion-input [(ngModel)]=\"materiasPrimas[i].vtotal\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Costo</ion-label>\n            <ion-input [(ngModel)]=\"materiasPrimas[i].costo\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Unidad de Medida</ion-label>\n            <ion-select [(ngModel)]=\"materiasPrimas[i].unidad\" (ionChange)=\"unidadChange($event, i)\" interface=\"popover\">\n              <ion-select-option value=\"\" disabled selected hidden>Seleccionar</ion-select-option>\n              <ion-select-option value=\"unidad\">Unidad (u)</ion-select-option>\n              <ion-select-option value=\"kg\">Kilogramos (kg)</ion-select-option>\n              <ion-select-option value=\"g\">Gramos (g)</ion-select-option>\n              <ion-select-option value=\"lb\">Libras (lb)</ion-select-option>\n              <ion-select-option value=\"oz\">Onzas (oz)</ion-select-option>\n              <ion-select-option value=\"L\">Litros (L)</ion-select-option>\n              <ion-select-option value=\"mL\">Mililitros (mL)</ion-select-option>\n              <ion-select-option value=\"m³\">Metros cúbicos (m³)</ion-select-option>\n              <ion-select-option value=\"m\">Metros (m)</ion-select-option>\n              <ion-select-option value=\"cm\">Centímetros (cm)</ion-select-option>\n              <ion-select-option value=\"mm\">Milímetros (mm)</ion-select-option>\n              <ion-select-option value=\"in\">Pulgadas (in)</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-card>\n        <div class=\"button-container\">\n          <ion-button color=\"tertiary\" expand=\"small\" (click)=\"agregarMateriaPrima()\">\n            <ion-icon style=\"margin-right: 5px;\" name=\"add-circle-outline\"></ion-icon>Agregar\n          </ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    \n\n    <!-- Mano de Obra -->\n    <ion-card color=\"medium\">\n      <ion-card-header>\n        <ion-card-title style=\"font-size: 22px; font-weight: bold;\">Mano de Obra</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-card *ngFor=\"let manoDeObra of manoDeObraList; let i = index\" class=\"bordes-item\">\n          <ion-button color=\"danger\" size=\"small\" (click)=\"quitarManoDeObra(i)\" class=\"remove-button\">\n            <ion-icon name=\"close-outline\"></ion-icon>\n          </ion-button>\n          \n          <ion-item>\n            <ion-label position=\"floating\">Nombre de Mano de Obra</ion-label>\n            <ion-input [(ngModel)]=\"manoDeObraList[i].nombre\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n    \n          <!-- Campo para Sueldo Mensual -->\n          <ion-item>\n            <ion-label position=\"floating\" style=\"font-weight: normal;\">Sueldo Mensual</ion-label>\n            <ion-input [(ngModel)]=\"manoDeObraList[i].sueldoMensual\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n    \n          <!-- Selección de Tipo de Tiempo -->\n          <ion-item>\n            <ion-label position=\"floating\" style=\"font-weight: normal;\">Tipo de Tiempo</ion-label>\n            <ion-select [(ngModel)]=\"manoDeObraList[i].tipoTiempo\">\n              <ion-select-option value=\"160\">Tiempo Completo</ion-select-option>\n              <ion-select-option value=\"80\">Medio Tiempo</ion-select-option>\n            </ion-select>\n          </ion-item>\n    \n          <!-- Campo para Cantidad de Horas Trabajadas -->\n          <ion-item>\n            <ion-label position=\"floating\" style=\"font-weight: normal;\">Cantidad de Horas Trabajadas</ion-label>\n            <ion-input [(ngModel)]=\"manoDeObraList[i].horasTrabajadas\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n    \n          <!-- Campo para Costo -->\n          <ion-item>\n            <ion-label position=\"floating\">Costo</ion-label>\n            <ion-input [(ngModel)]=\"manoDeObraList[i].costo\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n          \n        </ion-card>\n        <div class=\"button-container\">\n          <ion-button color=\"tertiary\" expand=\"small\" (click)=\"agregarManoDeObra()\">\n            <ion-icon style=\"margin-right: 5px;\" name=\"add-circle-outline\"></ion-icon>Agregar\n          </ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    \n    \n\n    <!-- Costos Indirectos de Fabricación -->\n    <ion-card color=\"medium\">\n      <ion-card-header>\n        <ion-card-title style=\"font-size: 22px; font-weight: bold;\">Costos Indirectos de Fabricación</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-card *ngFor=\"let costoIndirecto of costosIndirectosList; let i = index\" class=\"bordes-item\">\n          <ion-button color=\"danger\" size=\"small\" (click)=\"quitarCostosIndirectos(i)\" class=\"remove-button\">\n            <ion-icon name=\"close-outline\"></ion-icon>\n          </ion-button> \n          <!-- Select para Nombre del Costo Indirecto -->\n          <ion-item>\n            <ion-label position=\"floating\">Nombre del Costo Indirecto</ion-label>\n            <ion-select [(ngModel)]=\"costosIndirectosList[i].nombre\" (ionChange)=\"onCostoChange(costosIndirectosList[i])\">\n              <ion-select-option value=\"agua\">Agua</ion-select-option>\n              <ion-select-option value=\"luz\">Luz</ion-select-option>\n              <ion-select-option value=\"telecomunicaciones\">Telecomunicaciones</ion-select-option>\n              <ion-select-option value=\"gas\">Gas</ion-select-option>\n            </ion-select>\n          </ion-item>\n    \n          <!-- Campo de texto para Luz -->\n          <ion-item *ngIf=\"costosIndirectosList[i].nombre === 'luz'\">\n            <ion-label position=\"floating\">Cantidad de Horas</ion-label>\n            <ion-input [(ngModel)]=\"costosIndirectosList[i].cantidadHoras\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n    \n          <!-- Campos de texto para Internet -->\n          <ion-item *ngIf=\"costosIndirectosList[i].nombre === 'telecomunicaciones'\">\n            <ion-label position=\"floating\">Valor Mensual</ion-label>\n            <ion-input [(ngModel)]=\"costosIndirectosList[i].valorMensual\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"costosIndirectosList[i].nombre === 'telecomunicaciones'\">\n            <ion-label position=\"floating\">Horas de Uso</ion-label>\n            <ion-input [(ngModel)]=\"costosIndirectosList[i].horas\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n    \n          <!-- Campo de texto para Agua -->\n          <ion-item *ngIf=\"costosIndirectosList[i].nombre === 'agua'\">\n            <ion-label position=\"floating\">Litros de Agua</ion-label>\n            <ion-input [(ngModel)]=\"costosIndirectosList[i].cantidadagua\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n    \n          <!-- Campo de texto para Gas -->\n          <ion-item *ngIf=\"costosIndirectosList[i].nombre === 'gas'\">\n            <ion-label position=\"floating\">Producción con Gas</ion-label>\n            <ion-input [(ngModel)]=\"costosIndirectosList[i].cantidadGas\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label position=\"floating\">Costo</ion-label>\n            <ion-input [(ngModel)]=\"costosIndirectosList[i].costo\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n        </ion-card>\n        \n        <div class=\"button-container\">\n          <ion-button color=\"tertiary\" expand=\"small\" (click)=\"agregarCostosIndirectos()\">\n            <ion-icon style=\"margin-right: 5px;\" name=\"add-circle-outline\"></ion-icon>Agregar\n          </ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    \n\n    <!-- Otros Costos -->\n<ion-card color=\"medium\">\n  <ion-card-header>\n    <ion-card-title style=\"font-size: 22px; font-weight: bold;\">Otros Costos</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-card *ngFor=\"let otroCosto of otrosGastoList; let i = index\" class=\"bordes-item\">\n      <!-- Botón para eliminar -->\n      <ion-button color=\"danger\" size=\"small\" (click)=\"quitarGasto(i)\" class=\"remove-button\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n      \n      <!-- Campo para el nombre del gasto general -->\n      <ion-item>\n        <ion-label position=\"floating\">Nombre de Gasto General</ion-label>\n        <ion-input [(ngModel)]=\"otrosGastoList[i].nombre\" (ionChange)=\"calcular()\"></ion-input>\n      </ion-item>\n      \n      <!-- Campo para el valor total -->\n      <ion-item>\n        <ion-label position=\"floating\">Valor Total</ion-label>\n        <ion-input [(ngModel)]=\"otrosGastoList[i].vtotal\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n      </ion-item>\n      \n      <!-- Campo para el costo -->\n      <ion-item>\n        <ion-label position=\"floating\">Costo</ion-label>\n        <ion-input [(ngModel)]=\"otrosGastoList[i].costo\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n      </ion-item>\n    </ion-card>\n    \n    <div class=\"button-container\">\n      <ion-button color=\"tertiary\" expand=\"small\" (click)=\"agregarGasto()\">\n        <ion-icon style=\"margin-right: 5px;\" name=\"add-circle-outline\"></ion-icon>Agregar\n      </ion-button>\n    </div>\n  </ion-card-content>\n</ion-card>\n\n    <!-- Márgenes y impuestos -->\n    <ion-card color=\"medium\">\n      <ion-card-header>\n        <ion-card-title style=\"font-size: 22px; font-weight: bold;\">Márgenes y Impuestos</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Margen de Beneficio (%)</ion-label>\n          <ion-input [(ngModel)]=\"margenBeneficio\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Utilidad Vendedor (%)</ion-label>\n          <ion-input [(ngModel)]=\"utilidadv\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Utilidad Comercial (%)</ion-label>\n          <ion-input [(ngModel)]=\"utilidadc\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Impuestos (%)</ion-label>\n          <ion-input [(ngModel)]=\"impuestos\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Resultados -->\n    <ion-card color=\"medium\">\n      <ion-card-content>\n        <ion-item color=\"medium\" *ngIf=\"costoProduccion !== null\">\n          <ion-label>Costo de Producción</ion-label>\n          <ion-badge style=\"color: white;\" slot=\"end\">{{ costoProduccion | currency }}</ion-badge>\n        </ion-item>\n        <ion-item color=\"medium\" *ngIf=\"costoFabrica !== null\">\n          <ion-label>Costo de Fábrica</ion-label>\n          <ion-badge style=\"color: white;\" slot=\"end\">{{ costoFabrica | currency }}</ion-badge>\n        </ion-item>\n        <ion-item color=\"medium\" *ngIf=\"costoDistribucion !== null\">\n          <ion-label>Costo de Distribución</ion-label>\n          <ion-badge style=\"color: white;\" slot=\"end\">{{ costoDistribucion | currency }}</ion-badge>\n        </ion-item>\n        <ion-item color=\"medium\" *ngIf=\"pvp !== null\">\n          <ion-label>PVP (recomendado)</ion-label>\n          <ion-badge color=\"success\" slot=\"end\">{{ pvp | currency }}</ion-badge>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-button class=\"button-container\" color=\"danger\" expand=\"small\" (click)=\"guardarCambios()\">Guardar</ion-button>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_editproducto_editproducto_module_ts.js.map