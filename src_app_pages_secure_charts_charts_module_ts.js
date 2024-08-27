(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_charts_charts_module_ts"],{

/***/ 1241:
/*!**************************************************************!*\
  !*** ./src/app/pages/secure/charts/charts-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsPageRoutingModule": () => (/* binding */ ChartsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _charts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts.page */ 96220);




const routes = [{
  path: '',
  component: _charts_page__WEBPACK_IMPORTED_MODULE_0__.ChartsPage
}];
let ChartsPageRoutingModule = class ChartsPageRoutingModule {};
ChartsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ChartsPageRoutingModule);


/***/ }),

/***/ 76806:
/*!******************************************************!*\
  !*** ./src/app/pages/secure/charts/charts.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsPageModule": () => (/* binding */ ChartsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _charts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts-routing.module */ 1241);
/* harmony import */ var _charts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts.page */ 96220);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 31208);







// NgCharts

let ChartsPageModule = class ChartsPageModule {};
ChartsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _charts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChartsPageRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_7__.NgChartsModule],
  declarations: [_charts_page__WEBPACK_IMPORTED_MODULE_1__.ChartsPage]
})], ChartsPageModule);


/***/ }),

/***/ 96220:
/*!****************************************************!*\
  !*** ./src/app/pages/secure/charts/charts.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsPage": () => (/* binding */ ChartsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _charts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts.page.html?ngResource */ 67012);
/* harmony import */ var _charts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts.page.scss?ngResource */ 62058);
/* harmony import */ var _charts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_charts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helper/helper.service */ 60337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);












let ChartsPage = class ChartsPage {
  constructor(helperService, http, alertController, authService, toastService, router, navCtrl) {
    this.helperService = helperService;
    this.http = http;
    this.alertController = alertController;
    this.authService = authService;
    this.toastService = toastService;
    this.router = router;
    this.navCtrl = navCtrl;
    this.codigo = "";
    this.margenBeneficio = 35; // Porcentaje
    this.impuestos = 15; // Porcentaje
    this.costoProduccion = null;
    this.costoFabrica = null;
    this.costoDistribucion = null;
    this.pvp = null;
    this.txt_producto = '';
    this.utilidadv = 0;
    this.utilidadc = 0;
    this.materiasPrimas = [{
      nombre: '',
      costo: 0,
      unidad: '',
      vtotal: 0
    }];
    this.manoDeObraList = [{
      nombre: '',
      costo: 0,
      sueldoMensual: 0,
      tipoTiempo: '',
      horasTrabajadas: 0
    }];
    this.costosIndirectosList = [{
      nombre: '',
      costo: 0,
      horas: 0,
      cantidadagua: 0,
      cantidadGas: 0
    }];
    this.otrosGastoList = [{
      nombre: '',
      costo: 0,
      vtotal: 0
    }];
    this.tipoRegistro = 'unico'; // 'unico' o 'varios'
    this.tproducto = null;
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
            callback: function (value) {
              return '$' + value;
            }
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
            label: function (context) {
              var label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
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
    this.content_loaded = false;
    this.authService.getSession('codigo').then(res => {
      this.codigo = res;
    });
  }
  ngOnInit() {
    this.createBarChart();
  }
  ionViewDidEnter() {
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }
  shouldShowCantidad(unidad) {
    return unidad !== 'unidad' && unidad !== '';
  }
  agregarMateriaPrima() {
    this.materiasPrimas.push({
      nombre: '',
      costo: 0,
      unidad: '',
      vtotal: 0
    });
  }
  quitarMateriaPrima(index) {
    if (this.materiasPrimas.length > 1) {
      this.materiasPrimas.splice(index, 1);
    }
  }
  agregarManoDeObra() {
    this.manoDeObraList.push({
      nombre: '',
      costo: 0
    });
  }
  quitarManoDeObra(index) {
    if (this.manoDeObraList.length > 1) {
      this.manoDeObraList.splice(index, 1);
    }
  }
  agregarCostosIndirectos() {
    this.costosIndirectosList.push({
      nombre: '',
      costo: 0
    });
  }
  quitarCostosIndirectos(index) {
    if (this.costosIndirectosList.length > 1) {
      this.costosIndirectosList.splice(index, 1);
    }
  }
  agregarGasto() {
    this.otrosGastoList.push({
      nombre: '',
      costo: 0,
      vtotal: 0
    });
  }
  quitarGasto(index) {
    if (this.otrosGastoList.length > 1) {
      this.otrosGastoList.splice(index, 1);
    }
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
  createBarChart() {
    let helperService = this.helperService;
    let rand_numbers = [...Array(12)].map(e => Math.random() * 100 | 0);
    this.barChartData.labels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    this.barChartData.datasets = [{
      data: rand_numbers,
      backgroundColor: function (context) {
        const chart = context.chart;
        const {
          ctx,
          chartArea
        } = chart;
        if (!chartArea) {
          return null;
        }
        return helperService.createGradientChart(ctx, 'tertiary', 'tertiary');
      },
      barThickness: 10,
      borderRadius: 4,
      borderColor: helperService.getColorVariable('secondary'),
      hoverBackgroundColor: helperService.getColorVariable('secondary'),
      pointStyle: 'circle'
    }];
  }
  guardarDatos() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      if (!this.txt_producto || !this.margenBeneficio || !this.impuestos || !this.costoProduccion || !this.costoFabrica || !this.costoDistribucion || !this.pvp || !this.materiasPrimas.length || !this.manoDeObraList.length || !this.costosIndirectosList.length || !this.otrosGastoList.length) {
        this.authService.showToast('Por favor, completa todos los campos antes de guardar.');
        return;
      }
      let datos = {
        accion: "guardar_costos_produccion",
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
          this.mostrarMensajeRegistroExitoso();
          this.navCtrl.navigateRoot(['/listacostos']);
        } else {
          this.authService.showToast(res.mensaje);
        }
      } catch (error) {
        this.authService.showToast('Error al guardar los datos. Por favor, intenta de nuevo.');
      }
    });
  }
  mostrarMensajeRegistroExitoso() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      const toast = yield this.authService.showToast2('Éxito, ¡Datos registrados correctamente!');
    });
  }
  unidadChange(event, index) {
    if (event.detail.value === 'unidad') {
      this.materiasPrimas[index].cantidad = 1; // Asigna una cantidad por defecto
    } else {
      this.materiasPrimas[index].cantidad = null; // No asigna cantidad si la unidad no es 'unidad'
    }

    this.calcular(); // Recalcula después de cambiar la unidad
  }

  onCostoChange(costoIndirecto) {
    // Lógica para manejar el cambio de costo indirecto (ej: si es luz, internet, etc.)
  }
};
ChartsPage.ctorParameters = () => [{
  type: src_app_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__.HelperService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}, {
  type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
}];
ChartsPage.propDecorators = {
  chart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: [ng2_charts__WEBPACK_IMPORTED_MODULE_10__.BaseChartDirective]
  }]
};
ChartsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-charts',
  template: _charts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_charts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ChartsPage);


/***/ }),

/***/ 62058:
/*!*****************************************************************!*\
  !*** ./src/app/pages/secure/charts/charts.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n:host body {\n  background-color: var(--ion-color-dark);\n}\n:host ion-content {\n  --background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(\"/src/assets/escudo.png\") no-repeat center center;\n  background-color: white;\n}\n:host ion-list {\n  border-radius: 8px;\n  margin-bottom: 8px;\n  background-color: var(--ion-color-primary);\n}\n:host ion-label {\n  font-size: 16px;\n  font-weight: 700;\n}\n:host .button-container {\n  display: flex;\n  justify-content: left;\n  align-items: left;\n  height: 5vh; /* Esto es opcional, dependiendo de si quieres centrarlo verticalmente también */\n  margin: 6px;\n}\n\n.remove-button {\n  position: absolute;\n  top: -5px;\n  right: -7px;\n  z-index: 4;\n}\n\n.bordes-item {\n  position: relative;\n  border: 1px solid #1a1717;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n\n.product-size {\n  font-size: 0.75rem; /* Ajusta el tamaño de la fuente según sea necesario */\n  color: var(--ion-color-dark); /* Puedes cambiar el color si lo deseas */\n}", "",{"version":3,"sources":["webpack://./src/app/pages/secure/charts/charts.page.scss"],"names":[],"mappings":"AAAA,gBAAgB;AACd;EACE,uCAAA;AACJ;AAEE;EACE,uIAAA;EACF,uBAAA;AAAF;AAIE;EACE,kBAAA;EACA,kBAAA;EACA,0CAAA;AAFJ;AAKE;EACE,eAAA;EACA,gBAAA;AAHJ;AAME;EACE,aAAA;EACA,qBAAA;EACA,iBAAA;EACA,WAAA,EAAA,gFAAA;EACA,WAAA;AAJJ;;AAOA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;AAJF;;AAOA;EACE,kBAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;AAJF;;AAMA;EACE,kBAAA,EAAA,sDAAA;EACA,4BAAA,EAAA,yCAAA;AAHF","sourcesContent":[":host {\n  body {\n    background-color: var(--ion-color-dark);\n  }\n\n  ion-content {\n    --background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url('/src/assets/escudo.png') no-repeat center center;\n  background-color: white;\n\n  }\n\n  ion-list {\n    border-radius: 8px;\n    margin-bottom: 8px;\n    background-color: var(--ion-color-primary);\n  }\n\n  ion-label {\n    font-size: 16px;\n    font-weight: 700;\n  }\n\n  .button-container {\n    display: flex;\n    justify-content: left;\n    align-items: left;\n    height: 5vh; /* Esto es opcional, dependiendo de si quieres centrarlo verticalmente también */\n    margin: 6px;\n  }\n}\n.remove-button {\n  position: absolute;\n  top: -5px;\n  right: -7px;\n  z-index: 4;\n}\n\n.bordes-item {\n  position: relative;\n  border: 1px solid #1a1717;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.product-size {\n  font-size: 0.75rem; /* Ajusta el tamaño de la fuente según sea necesario */\n  color: var(--ion-color-dark); /* Puedes cambiar el color si lo deseas */\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 67012:
/*!*****************************************************************!*\
  !*** ./src/app/pages/secure/charts/charts.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" routerLink=\"/listacostos\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"light\" style=\"text-align: center; flex: 1;\">Costos de Producción</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"light\" routerLink=\"/ajustes\">\n        <ion-icon slot=\"icon-only\" name=\"cog\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"ion-padding\">\n    <!-- Formulario para ingresar datos de producción -->\n    <ion-card-header style=\"text-align: center;\">\n      <ion-card-title style=\"font-size: 25px; font-weight: bold;\">Ingrese los datos de producción</ion-card-title>\n    </ion-card-header>\n\n    <ion-card color=\"medium\">\n      <ion-card-header>\n        <ion-card-title>Ingrese el nombre del producto <span class=\"product-size\">(Especifique su tamaño)</span></ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Nombre del Producto</ion-label>\n          <ion-input [(ngModel)]=\"txt_producto\" type=\"text\"></ion-input>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color=\"medium\">\n      <ion-card-header>\n        <ion-card-title>Seleccione el tipo de registro</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <!-- Caja de texto siempre visible -->\n        <ion-item>\n          <ion-label position=\"floating\">Cantidad de productos</ion-label>\n          <ion-input [(ngModel)]=\"tproducto\" type=\"number\"></ion-input>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    \n    <!-- Materia Prima -->\n    <ion-card color=\"medium\">\n      <ion-card-header>\n        <ion-card-title style=\"font-size: 22px; font-weight: bold;\">Materia Prima</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-card *ngFor=\"let materiaPrima of materiasPrimas; let i = index\" class=\"bordes-item\">\n          <!-- Botón de eliminar -->\n          <ion-button color=\"danger\" size=\"small\" (click)=\"quitarMateriaPrima(i)\" class=\"remove-button\">\n            <ion-icon name=\"close-outline\"></ion-icon>\n          </ion-button>\n          <!-- Campo para valor total siempre visible -->\n          <ion-item>\n            <ion-label position=\"floating\">Nombre de Materia Prima</ion-label>\n            <ion-input [(ngModel)]=\"materiasPrimas[i].nombre\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Valor Total</ion-label>\n            <ion-input [(ngModel)]=\"materiasPrimas[i].vtotal\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Costo</ion-label>\n            <ion-input [(ngModel)]=\"materiasPrimas[i].costo\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Unidad de Medida</ion-label>\n            <ion-select [(ngModel)]=\"materiasPrimas[i].unidad\" (ionChange)=\"unidadChange($event, i)\" interface=\"popover\">\n              <ion-select-option value=\"\" disabled selected hidden>Seleccionar</ion-select-option>\n              <ion-select-option value=\"unidad\">Unidad (u)</ion-select-option>\n              <ion-select-option value=\"kg\">Kilogramos (kg)</ion-select-option>\n              <ion-select-option value=\"g\">Gramos (g)</ion-select-option>\n              <ion-select-option value=\"lb\">Libras (lb)</ion-select-option>\n              <ion-select-option value=\"oz\">Onzas (oz)</ion-select-option>\n              <ion-select-option value=\"L\">Litros (L)</ion-select-option>\n              <ion-select-option value=\"mL\">Mililitros (mL)</ion-select-option>\n              <ion-select-option value=\"m³\">Metros cúbicos (m³)</ion-select-option>\n              <ion-select-option value=\"m\">Metros (m)</ion-select-option>\n              <ion-select-option value=\"cm\">Centímetros (cm)</ion-select-option>\n              <ion-select-option value=\"mm\">Milímetros (mm)</ion-select-option>\n              <ion-select-option value=\"in\">Pulgadas (in)</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-card>\n        <div class=\"button-container\">\n          <ion-button color=\"tertiary\" expand=\"small\" (click)=\"agregarMateriaPrima()\">\n            <ion-icon style=\"margin-right: 5px;\" name=\"add-circle-outline\"></ion-icon>Agregar\n          </ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    \n\n    <!-- Mano de Obra -->\n    <ion-card color=\"medium\">\n      <ion-card-header>\n        <ion-card-title style=\"font-size: 22px; font-weight: bold;\">Mano de Obra</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-card *ngFor=\"let manoDeObra of manoDeObraList; let i = index\" class=\"bordes-item\">\n          <ion-button color=\"danger\" size=\"small\" (click)=\"quitarManoDeObra(i)\" class=\"remove-button\">\n            <ion-icon name=\"close-outline\"></ion-icon>\n          </ion-button>\n          \n          <ion-item>\n            <ion-label position=\"floating\">Nombre de Mano de Obra</ion-label>\n            <ion-input [(ngModel)]=\"manoDeObraList[i].nombre\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n    \n          <!-- Campo para Sueldo Mensual -->\n          <ion-item>\n            <ion-label position=\"floating\" style=\"font-weight: normal;\">Sueldo Mensual</ion-label>\n            <ion-input [(ngModel)]=\"manoDeObraList[i].sueldoMensual\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n    \n          <!-- Selección de Tipo de Tiempo -->\n          <ion-item>\n            <ion-label position=\"floating\" style=\"font-weight: normal;\">Tipo de Tiempo</ion-label>\n            <ion-select [(ngModel)]=\"manoDeObraList[i].tipoTiempo\">\n              <ion-select-option value=\"160\">Tiempo Completo</ion-select-option>\n              <ion-select-option value=\"80\">Medio Tiempo</ion-select-option>\n            </ion-select>\n          </ion-item>\n    \n          <!-- Campo para Cantidad de Horas Trabajadas -->\n          <ion-item>\n            <ion-label position=\"floating\" style=\"font-weight: normal;\">Cantidad de Horas Trabajadas</ion-label>\n            <ion-input [(ngModel)]=\"manoDeObraList[i].horasTrabajadas\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n    \n          <!-- Campo para Costo -->\n          <ion-item>\n            <ion-label position=\"floating\">Costo</ion-label>\n            <ion-input [(ngModel)]=\"manoDeObraList[i].costo\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n          \n        </ion-card>\n        <div class=\"button-container\">\n          <ion-button color=\"tertiary\" expand=\"small\" (click)=\"agregarManoDeObra()\">\n            <ion-icon style=\"margin-right: 5px;\" name=\"add-circle-outline\"></ion-icon>Agregar\n          </ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    \n    \n\n    <!-- Costos Indirectos de Fabricación -->\n    <ion-card color=\"medium\">\n      <ion-card-header>\n        <ion-card-title style=\"font-size: 22px; font-weight: bold;\">Costos Indirectos de Fabricación</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-card *ngFor=\"let costoIndirecto of costosIndirectosList; let i = index\" class=\"bordes-item\">\n          <ion-button color=\"danger\" size=\"small\" (click)=\"quitarCostosIndirectos(i)\" class=\"remove-button\">\n            <ion-icon name=\"close-outline\"></ion-icon>\n          </ion-button> \n          <!-- Select para Nombre del Costo Indirecto -->\n          <ion-item>\n            <ion-label position=\"floating\">Nombre del Costo Indirecto</ion-label>\n            <ion-select [(ngModel)]=\"costosIndirectosList[i].nombre\" (ionChange)=\"onCostoChange(costosIndirectosList[i])\">\n              <ion-select-option value=\"agua\">Agua</ion-select-option>\n              <ion-select-option value=\"luz\">Luz</ion-select-option>\n              <ion-select-option value=\"telecomunicaciones\">Telecomunicaciones</ion-select-option>\n              <ion-select-option value=\"gas\">Gas</ion-select-option>\n            </ion-select>\n          </ion-item>\n    \n          <!-- Campo de texto para Luz -->\n          <ion-item *ngIf=\"costosIndirectosList[i].nombre === 'luz'\">\n            <ion-label position=\"floating\">Cantidad de Horas</ion-label>\n            <ion-input [(ngModel)]=\"costosIndirectosList[i].cantidadHoras\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n    \n          <!-- Campos de texto para Internet -->\n          <ion-item *ngIf=\"costosIndirectosList[i].nombre === 'telecomunicaciones'\">\n            <ion-label position=\"floating\">Valor Mensual</ion-label>\n            <ion-input [(ngModel)]=\"costosIndirectosList[i].valorMensual\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"costosIndirectosList[i].nombre === 'telecomunicaciones'\">\n            <ion-label position=\"floating\">Horas de Uso</ion-label>\n            <ion-input [(ngModel)]=\"costosIndirectosList[i].horas\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n    \n          <!-- Campo de texto para Agua -->\n          <ion-item *ngIf=\"costosIndirectosList[i].nombre === 'agua'\">\n            <ion-label position=\"floating\">Litros de Agua</ion-label>\n            <ion-input [(ngModel)]=\"costosIndirectosList[i].cantidadagua\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n    \n          <!-- Campo de texto para Gas -->\n          <ion-item *ngIf=\"costosIndirectosList[i].nombre === 'gas'\">\n            <ion-label position=\"floating\">Producción con Gas</ion-label>\n            <ion-input [(ngModel)]=\"costosIndirectosList[i].cantidadGas\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label position=\"floating\">Costo</ion-label>\n            <ion-input [(ngModel)]=\"costosIndirectosList[i].costo\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n          </ion-item>\n        </ion-card>\n        \n        <div class=\"button-container\">\n          <ion-button color=\"tertiary\" expand=\"small\" (click)=\"agregarCostosIndirectos()\">\n            <ion-icon style=\"margin-right: 5px;\" name=\"add-circle-outline\"></ion-icon>Agregar\n          </ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    \n\n    <!-- Otros Costos -->\n<ion-card color=\"medium\">\n  <ion-card-header>\n    <ion-card-title style=\"font-size: 22px; font-weight: bold;\">Otros Costos</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-card *ngFor=\"let otroCosto of otrosGastoList; let i = index\" class=\"bordes-item\">\n      <!-- Botón para eliminar -->\n      <ion-button color=\"danger\" size=\"small\" (click)=\"quitarGasto(i)\" class=\"remove-button\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n      \n      <!-- Campo para el nombre del gasto general -->\n      <ion-item>\n        <ion-label position=\"floating\">Nombre de Gasto General</ion-label>\n        <ion-input [(ngModel)]=\"otrosGastoList[i].nombre\" (ionChange)=\"calcular()\"></ion-input>\n      </ion-item>\n      \n      <!-- Campo para el valor total -->\n      <ion-item>\n        <ion-label position=\"floating\">Valor Total</ion-label>\n        <ion-input [(ngModel)]=\"otrosGastoList[i].vtotal\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n      </ion-item>\n      \n      <!-- Campo para el costo -->\n      <ion-item>\n        <ion-label position=\"floating\">Costo</ion-label>\n        <ion-input [(ngModel)]=\"otrosGastoList[i].costo\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n      </ion-item>\n    </ion-card>\n    \n    <div class=\"button-container\">\n      <ion-button color=\"tertiary\" expand=\"small\" (click)=\"agregarGasto()\">\n        <ion-icon style=\"margin-right: 5px;\" name=\"add-circle-outline\"></ion-icon>Agregar\n      </ion-button>\n    </div>\n  </ion-card-content>\n</ion-card>\n\n    <!-- Márgenes y impuestos -->\n    <ion-card color=\"medium\">\n      <ion-card-header>\n        <ion-card-title style=\"font-size: 22px; font-weight: bold;\">Márgenes y Impuestos</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Margen de Beneficio (%)</ion-label>\n          <ion-input [(ngModel)]=\"margenBeneficio\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Utilidad Vendedor (%)</ion-label>\n          <ion-input [(ngModel)]=\"utilidadv\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Utilidad Comercial (%)</ion-label>\n          <ion-input [(ngModel)]=\"utilidadc\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Impuestos (%)</ion-label>\n          <ion-input [(ngModel)]=\"impuestos\" type=\"number\" (ionChange)=\"calcular()\"></ion-input>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Resultados -->\n    <ion-card color=\"medium\">\n      <ion-card-content>\n        <ion-item color=\"medium\" *ngIf=\"costoProduccion !== null\">\n          <ion-label>Costo de Producción</ion-label>\n          <ion-badge style=\"color: white;\" slot=\"end\">{{ costoProduccion | currency }}</ion-badge>\n        </ion-item>\n        <ion-item color=\"medium\" *ngIf=\"costoFabrica !== null\">\n          <ion-label>Costo de Fábrica</ion-label>\n          <ion-badge style=\"color: white;\" slot=\"end\">{{ costoFabrica | currency }}</ion-badge>\n        </ion-item>\n        <ion-item color=\"medium\" *ngIf=\"costoDistribucion !== null\">\n          <ion-label>Costo de Distribución</ion-label>\n          <ion-badge style=\"color: white;\" slot=\"end\">{{ costoDistribucion | currency }}</ion-badge>\n        </ion-item>\n        <ion-item color=\"medium\" *ngIf=\"pvp !== null\">\n          <ion-label>PVP (recomendado)</ion-label>\n          <ion-badge color=\"success\" slot=\"end\">{{ pvp | currency }}</ion-badge>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-button class=\"button-container\" color=\"danger\" expand=\"small\" (click)=\"guardarDatos()\">Guardar</ion-button>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_charts_charts_module_ts.js.map