(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_profile_edit_edit_module_ts"],{

/***/ 73222:
/*!******************************************************************!*\
  !*** ./src/app/pages/secure/profile/edit/edit-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPageRoutingModule": () => (/* binding */ EditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.page */ 81996);




const routes = [{
  path: '',
  component: _edit_page__WEBPACK_IMPORTED_MODULE_0__.EditPage
}];
let EditPageRoutingModule = class EditPageRoutingModule {};
EditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], EditPageRoutingModule);


/***/ }),

/***/ 70630:
/*!**********************************************************!*\
  !*** ./src/app/pages/secure/profile/edit/edit.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPageModule": () => (/* binding */ EditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-routing.module */ 73222);
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.page */ 81996);







let EditPageModule = class EditPageModule {};
EditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
  declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_1__.EditPage]
})], EditPageModule);


/***/ }),

/***/ 81996:
/*!********************************************************!*\
  !*** ./src/app/pages/secure/profile/edit/edit.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPage": () => (/* binding */ EditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.page.html?ngResource */ 72257);
/* harmony import */ var _edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.page.scss?ngResource */ 44936);
/* harmony import */ var _edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/camera */ 4241);










let EditPage = class EditPage {
  constructor(authService, formBuilder, toastService, navController, actionSheetController, router) {
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.toastService = toastService;
    this.navController = navController;
    this.actionSheetController = actionSheetController;
    this.router = router;
    this.submit_attempt = false;
    this.txt_nombre = "";
    this.txt_apellido = "";
    this.txt_cedula = "";
    this.persona = "";
    this.correo = "";
    this.nombre = "";
    this.apellido = "";
    this.cedula = "";
    this.imgUrl = null;
    this.img = null;
    this.authService.getSession('persona').then(res => {
      this.persona = res;
    });
    this.authService.getSession('correo').then(res => {
      this.correo = res;
    });
    this.authService.getSession('nombre').then(res => {
      this.nombre = res;
    });
    this.authService.getSession('apellido').then(res => {
      this.apellido = res;
    });
    this.authService.getSession('cedula').then(res => {
      this.cedula = res;
    });
    this.authService.getSession('imgUrl').then(res => {
      this.imgUrl = res;
    });
  }
  ngOnInit() {
    // Setup form
    this.edit_profile_form = this.formBuilder.group({
      nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
  }
  actnombre() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      const nombreImg = 'avatar_user_' + this.cedula; //Nombre de la imagen
      let datos = {
        accion: "actnombre",
        cedula: this.cedula,
        nombre: this.txt_nombre ? this.txt_nombre : this.nombre,
        apellido: this.txt_apellido ? this.txt_apellido : this.apellido,
        imgUrl: 'http://localhost/ACE/WsMunicipioIonic/uploads/' + nombreImg + '.jpg'
      };
      this.authService.postData(datos).subscribe(res => {
        if (res.estado === true) {
          this.authService.showToast2(res.mensaje2);
          this.authService.signOut();
        } else {
          this.authService.showToast(res.mensaje);
        }
      });
      if (this.img != null) {
        const formData = new FormData();
        formData.append('image', this.img);
        formData.append('userId', nombreImg);
        this.authService.uploadIMG(formData).subscribe(res => {
          this.authService.showToast2(res.mensaje);
        }, error => {
          console.error(error);
          this.authService.showToast('Error al subir la imagen');
        });
      }
    });
  }
  // Update profile picture
  updateProfilePicture() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      const actionSheet = yield this.actionSheetController.create({
        header: 'Elija una foto existente o tome una nueva',
        cssClass: 'custom-action-sheet',
        buttons: [{
          text: 'Elegir de la galería',
          icon: 'images',
          handler: () => {
            const inputElement = document.createElement('input');
            inputElement.type = 'file';
            inputElement.accept = 'image/*';
            inputElement.click();
            inputElement.addEventListener('change', event => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
              const file = event.target.files[0];
              this.img = file;
              if (file) {
                const reader = new FileReader();
                reader.onload = e => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                  this.imgUrl = e.target.result;
                });
                reader.readAsDataURL(file);
              }
            }));
          }
        }, {
          text: 'Tomar foto',
          icon: 'camera',
          handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
              const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.DataUrl,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Camera
              });
              this.imgUrl = image.dataUrl;
              this.img = this.dataURLtoBlob(image.dataUrl);
              console.log(image);
            } catch (error) {
              console.error('Error tomando foto:', error);
              this.toastService.presentToast('Error', 'No se pudo tomar la foto. Intente de nuevo.', 'top', 'danger', 2000);
            }
          })
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    });
  }
  dataURLtoBlob(dataurl) {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
      type: mime
    });
  }
  // Submit form
  submit() {
    this.submit_attempt = true;
    // If form valid
    if (this.edit_profile_form.valid) {
      // Save form ...
      // Display success message and go back
      this.toastService.presentToast('Guardado', 'Perfil guardado correctamente', 'top', 'success', 2000);
      this.navController.back();
    } else {
      // Display error message
      this.toastService.presentToast('Error', 'Por favor, llene todos los campos', 'top', 'danger', 2000);
    }
  }
};
EditPage.ctorParameters = () => [{
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}];
EditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-edit',
  template: _edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EditPage);


/***/ }),

/***/ 34830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType),
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */
  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */
  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web */ 71327);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 34830);


const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => new _web__WEBPACK_IMPORTED_MODULE_1__.CameraWeb()
});



/***/ }),

/***/ 71327:
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/web.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "CameraWeb": () => (/* binding */ CameraWeb)
/* harmony export */ });
/* harmony import */ var _Users_matiasfonseca_Desktop_ionic_temp_ACE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 34830);



class CameraWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  getPhoto(options) {
    var _this = this;
    return (0,_Users_matiasfonseca_Desktop_ionic_temp_ACE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise( /*#__PURE__*/function () {
        var _ref = (0,_Users_matiasfonseca_Desktop_ionic_temp_ACE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          if (options.webUseInput || options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos) {
            _this.fileInputExperience(options, resolve, reject);
          } else if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Prompt) {
            let actionSheet = document.querySelector('pwa-action-sheet');
            if (!actionSheet) {
              actionSheet = document.createElement('pwa-action-sheet');
              document.body.appendChild(actionSheet);
            }
            actionSheet.header = options.promptLabelHeader || 'Photo';
            actionSheet.cancelable = false;
            actionSheet.options = [{
              title: options.promptLabelPhoto || 'From Photos'
            }, {
              title: options.promptLabelPicture || 'Take Picture'
            }];
            actionSheet.addEventListener('onSelection', /*#__PURE__*/function () {
              var _ref2 = (0,_Users_matiasfonseca_Desktop_ionic_temp_ACE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
                const selection = e.detail;
                if (selection === 0) {
                  _this.fileInputExperience(options, resolve, reject);
                } else {
                  _this.cameraExperience(options, resolve, reject);
                }
              });
              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());
          } else {
            _this.cameraExperience(options, resolve, reject);
          }
        });
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  pickImages(_options) {
    var _this2 = this;
    return (0,_Users_matiasfonseca_Desktop_ionic_temp_ACE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,_Users_matiasfonseca_Desktop_ionic_temp_ACE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          _this2.multipleFileInputExperience(resolve, reject);
        });
        return function (_x4, _x5) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
  cameraExperience(options, resolve, reject) {
    var _this3 = this;
    return (0,_Users_matiasfonseca_Desktop_ionic_temp_ACE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (customElements.get('pwa-camera-modal')) {
        const cameraModal = document.createElement('pwa-camera-modal');
        cameraModal.facingMode = options.direction === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection.Front ? 'user' : 'environment';
        document.body.appendChild(cameraModal);
        try {
          yield cameraModal.componentOnReady();
          cameraModal.addEventListener('onPhoto', /*#__PURE__*/function () {
            var _ref4 = (0,_Users_matiasfonseca_Desktop_ionic_temp_ACE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
              const photo = e.detail;
              if (photo === null) {
                reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
              } else if (photo instanceof Error) {
                reject(photo);
              } else {
                resolve(yield _this3._getCameraPhoto(photo, options));
              }
              cameraModal.dismiss();
              document.body.removeChild(cameraModal);
            });
            return function (_x6) {
              return _ref4.apply(this, arguments);
            };
          }());
          cameraModal.present();
        } catch (e) {
          _this3.fileInputExperience(options, resolve, reject);
        }
      } else {
        console.error(`Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements.`);
        _this3.fileInputExperience(options, resolve, reject);
      }
    })();
  }
  fileInputExperience(options, resolve, reject) {
    let input = document.querySelector('#_capacitor-camera-input');
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement('input');
      input.id = '_capacitor-camera-input';
      input.type = 'file';
      input.hidden = true;
      document.body.appendChild(input);
      input.addEventListener('change', _e => {
        const file = input.files[0];
        let format = 'jpeg';
        if (file.type === 'image/png') {
          format = 'png';
        } else if (file.type === 'image/gif') {
          format = 'gif';
        }
        if (options.resultType === 'dataUrl' || options.resultType === 'base64') {
          const reader = new FileReader();
          reader.addEventListener('load', () => {
            if (options.resultType === 'dataUrl') {
              resolve({
                dataUrl: reader.result,
                format
              });
            } else if (options.resultType === 'base64') {
              const b64 = reader.result.split(',')[1];
              resolve({
                base64String: b64,
                format
              });
            }
            cleanup();
          });
          reader.readAsDataURL(file);
        } else {
          resolve({
            webPath: URL.createObjectURL(file),
            format: format
          });
          cleanup();
        }
      });
      input.addEventListener('cancel', _e => {
        reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
        cleanup();
      });
    }
    input.accept = 'image/*';
    input.capture = true;
    if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos || options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Prompt) {
      input.removeAttribute('capture');
    } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection.Front) {
      input.capture = 'user';
    } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection.Rear) {
      input.capture = 'environment';
    }
    input.click();
  }
  multipleFileInputExperience(resolve, reject) {
    let input = document.querySelector('#_capacitor-camera-input-multiple');
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement('input');
      input.id = '_capacitor-camera-input-multiple';
      input.type = 'file';
      input.hidden = true;
      input.multiple = true;
      document.body.appendChild(input);
      input.addEventListener('change', _e => {
        const photos = [];
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < input.files.length; i++) {
          const file = input.files[i];
          let format = 'jpeg';
          if (file.type === 'image/png') {
            format = 'png';
          } else if (file.type === 'image/gif') {
            format = 'gif';
          }
          photos.push({
            webPath: URL.createObjectURL(file),
            format: format
          });
        }
        resolve({
          photos
        });
        cleanup();
      });
      input.addEventListener('cancel', _e => {
        reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
        cleanup();
      });
    }
    input.accept = 'image/*';
    input.click();
  }
  _getCameraPhoto(photo, options) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const format = photo.type.split('/')[1];
      if (options.resultType === 'uri') {
        resolve({
          webPath: URL.createObjectURL(photo),
          format: format,
          saved: false
        });
      } else {
        reader.readAsDataURL(photo);
        reader.onloadend = () => {
          const r = reader.result;
          if (options.resultType === 'dataUrl') {
            resolve({
              dataUrl: r,
              format: format,
              saved: false
            });
          } else {
            resolve({
              base64String: r.split(',')[1],
              format: format,
              saved: false
            });
          }
        };
        reader.onerror = e => {
          reject(e);
        };
      }
    });
  }
  checkPermissions() {
    var _this4 = this;
    return (0,_Users_matiasfonseca_Desktop_ionic_temp_ACE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof navigator === 'undefined' || !navigator.permissions) {
        throw _this4.unavailable('Permissions API not available in this browser');
      }
      try {
        // https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query
        // the specific permissions that are supported varies among browsers that implement the
        // permissions API, so we need a try/catch in case 'camera' is invalid
        const permission = yield window.navigator.permissions.query({
          name: 'camera'
        });
        return {
          camera: permission.state,
          photos: 'granted'
        };
      } catch (_a) {
        throw _this4.unavailable('Camera permissions are not available in this browser');
      }
    })();
  }
  requestPermissions() {
    var _this5 = this;
    return (0,_Users_matiasfonseca_Desktop_ionic_temp_ACE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this5.unimplemented('Not implemented on web.');
    })();
  }
  pickLimitedLibraryPhotos() {
    var _this6 = this;
    return (0,_Users_matiasfonseca_Desktop_ionic_temp_ACE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this6.unavailable('Not implemented on web.');
    })();
  }
  getLimitedLibraryPhotos() {
    var _this7 = this;
    return (0,_Users_matiasfonseca_Desktop_ionic_temp_ACE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this7.unavailable('Not implemented on web.');
    })();
  }
}
const Camera = new CameraWeb();


/***/ }),

/***/ 44936:
/*!*********************************************************************!*\
  !*** ./src/app/pages/secure/profile/edit/edit.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host ion-item {\n  --border-radius: 8px;\n  margin-bottom: 8px;\n}\n:host .form-default {\n  margin-top: 20px;\n}\n\n.profile-card {\n  border-radius: 0;\n  background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary));\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  text-align: center;\n}\n.profile-card ion-avatar {\n  width: 128px;\n  height: 128px;\n  text-align: center;\n  margin: 0 auto 30px;\n}\n.profile-card ion-avatar img {\n  height: 128px;\n  width: 128px;\n  border-radius: 50%;\n  border: 4px solid var(--ion-color-light);\n  display: inline;\n  box-shadow: 0 0 28px hsla(0deg, 0%, 100%, 0.65);\n}", "",{"version":3,"sources":["webpack://./src/app/pages/secure/profile/edit/edit.page.scss"],"names":[],"mappings":"AACE;EACE,oBAAA;EACA,kBAAA;AAAJ;AAGE;EACE,gBAAA;AADJ;;AAKA;EACE,gBAAA;EACA,oFAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;AAFF;AAIE;EACE,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;AAFJ;AAII;EACE,aAAA;EACA,YAAA;EACA,kBAAA;EACA,wCAAA;EACA,eAAA;EACA,+CAAA;AAFN","sourcesContent":[":host {\n  ion-item {\n    --border-radius: 8px;\n    margin-bottom: 8px;\n  }\n\n  .form-default {\n    margin-top: 20px;\n  }\n}\n\n.profile-card {\n  border-radius: 0;\n  background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary));\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  text-align: center;\n\n  ion-avatar {\n    width: 128px;\n    height: 128px;\n    text-align: center;\n    margin: 0 auto 30px;\n\n    img {\n      height: 128px;\n      width: 128px;\n      border-radius: 50%;\n      border: 4px solid var(--ion-color-light);\n      display: inline;\n      box-shadow: 0 0 28px hsl(0deg 0% 100% / 65%);\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 72257:
/*!*********************************************************************!*\
  !*** ./src/app/pages/secure/profile/edit/edit.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" text=\"Ajustes\" defaultHref=\"/ajustes\">\n      </ion-back-button>\n    </ion-buttons>\n\n    <ion-title color=\"light\">\n      Perfil\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <form [formGroup]=\"edit_profile_form\" (ngSubmit)=\"actnombre()\">\n        <ion-button color=\"light\" type=\"submit\">\n          Guardar\n        </ion-button>\n      </form>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-card class=\"ion-no-margin profile-card\">\n    <ion-card-content>\n      <ion-avatar>\n        <img [src]=\"imgUrl ?  imgUrl : '../../../../assets/icon/logo.png'\" />\n        \n      </ion-avatar>\n\n      <h1>\n        <ion-text color=\"tertiary\"><strong>{{persona}}</strong></ion-text>\n      </h1>\n\n      <p>\n        <ion-text color=\"tertiary\">{{correo}}</ion-text>\n      </p>\n\n      <ion-button class=\"ion-button-small\" color=\"tertiary\" (click)=\"updateProfilePicture()\">\n      Actualizar foto de perfil\n      </ion-button>\n      \n    </ion-card-content>\n  </ion-card>\n\n\n  <div class=\"ion-padding\">\n    <form class=\"form-default\" [formGroup]=\"edit_profile_form\" (submit)=\"actnombre()\">\n\n      \n      <ion-item color=\"dark\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label position=\"floating\">\n          Nombre\n        </ion-label>\n        <ion-input color=\"light\" formControlName=\"nombre\" [(ngModel)]=\"txt_nombre\" value=\"{{nombre}}\"></ion-input>\n      </ion-item>\n\n      <ion-item color=\"dark\" class=\"animate_animated animate_fadeInUp\">\n        <ion-label position=\"floating\">\n          Apellido\n        </ion-label>\n        <ion-input color=\"light\" formControlName=\"apellido\" [(ngModel)]=\"txt_apellido\" value=\"{{apellido}}\"></ion-input>\n      </ion-item>\n\n    </form>\n\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_profile_edit_edit_module_ts.js.map