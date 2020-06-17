function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-export-keystore-export-keystore-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/export-keystore/export-keystore.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/export-keystore/export-keystore.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesExportKeystoreExportKeystorePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ 'EXPORT_KEYSTORE' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main\">\n        <div class=\"tips\" translate>\n            WXPORT_KEYSTORE_TIPS\n        </div>\n\n        <div class=\"textarea\">\n            {{ keystore }}\n        </div>\n    </div>\n\n    <div class=\"bottom-button\">\n        <div class=\"confirm-button\" tappble (click)=\"copyKeystore()\" translate>COPY_KEYSTORE</div>\n        <div class=\"confirm-button\" (click)=\"exportKeystoreToMiner()\" translate>EXPORT_KEYSTORE_MINER\n        </div>\n    </div>\n</ion-content>\n\n<app-generate-privatekey *ngIf=\"ifShowPasswordPrompt\" promptDesc=\"{{ 'INPUT_PASSWORD_TIPS' | translate }}\"\n    cancelText=\"{{ 'CANCEL' | translate }}\" confirmText=\"{{ 'CONFIRM' | translate }}\" (cancel)=\"cancelPrompt()\"\n    (confirm)=\"confirmPrompt($event)\"></app-generate-privatekey>";
    /***/
  },

  /***/
  "./src/app/pages/export-keystore/export-keystore.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/export-keystore/export-keystore.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ExportKeystorePageModule */

  /***/
  function srcAppPagesExportKeystoreExportKeystoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExportKeystorePageModule", function () {
      return ExportKeystorePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _export_keystore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./export-keystore.page */
    "./src/app/pages/export-keystore/export-keystore.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: '',
      component: _export_keystore_page__WEBPACK_IMPORTED_MODULE_6__["ExportKeystorePage"]
    }];

    var ExportKeystorePageModule = function ExportKeystorePageModule() {
      _classCallCheck(this, ExportKeystorePageModule);
    };

    ExportKeystorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_export_keystore_page__WEBPACK_IMPORTED_MODULE_6__["ExportKeystorePage"]]
    })], ExportKeystorePageModule);
    /***/
  },

  /***/
  "./src/app/pages/export-keystore/export-keystore.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/export-keystore/export-keystore.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesExportKeystoreExportKeystorePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".textarea {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jeXBoZXIwMS9nby9zcmMvZ2l0aHViLmNvbS9jeXBoZXJpdW0vd2FsbGV0YXBwL3NyYy9hcHAvcGFnZXMvZXhwb3J0LWtleXN0b3JlL2V4cG9ydC1rZXlzdG9yZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2V4cG9ydC1rZXlzdG9yZS9leHBvcnQta2V5c3RvcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXhwb3J0LWtleXN0b3JlL2V4cG9ydC1rZXlzdG9yZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGFyZWEge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbn0iLCIudGV4dGFyZWEge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/export-keystore/export-keystore.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/export-keystore/export-keystore.page.ts ***!
    \***************************************************************/

  /*! exports provided: ExportKeystorePage */

  /***/
  function srcAppPagesExportKeystoreExportKeystorePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExportKeystorePage", function () {
      return ExportKeystorePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/global/global.service */
    "./src/app/providers/global/global.service.ts");
    /* harmony import */


    var _providers_native_native_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/native/native.service */
    "./src/app/providers/native/native.service.ts");
    /* harmony import */


    var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/helper/helper.service */
    "./src/app/providers/helper/helper.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _providers_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../providers/http/http.service */
    "./src/app/providers/http/http.service.ts");

    var ExportKeystorePage =
    /*#__PURE__*/
    function () {
      function ExportKeystorePage(global, native, helper, http, navCtrl) {
        _classCallCheck(this, ExportKeystorePage);

        this.global = global;
        this.native = native;
        this.helper = helper;
        this.http = http;
        this.navCtrl = navCtrl;
        this.keystore = "";
        this.wallet = {};
        this.ifShowPasswordPrompt = false;
      }

      _createClass(ExportKeystorePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.wallet = this.global.gWalletList[this.global.currentWalletIndex]; // this.keystore = this.wallet.keystore;

          setTimeout(function () {
            _this.ifShowPasswordPrompt = true;
          }, 500);
        }
      }, {
        key: "copyKeystore",
        value: function copyKeystore() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var error;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.native.copy(this.keystore);
                    _context.next = 3;
                    return this.helper.getTranslate('KEYSTORE_COPYIED_SUCCRRF');

                  case 3:
                    error = _context.sent;
                    this.helper.toast(error);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "cancelPrompt",
        value: function cancelPrompt() {
          this.ifShowPasswordPrompt = false;
          this.navCtrl.pop();
        }
      }, {
        key: "confirmPrompt",
        value: function confirmPrompt(privateKey) {
          this.ifShowPasswordPrompt = false;
          this.keystore = this.wallet.keystore;
        }
      }, {
        key: "exportKeystoreToMiner",
        value: function exportKeystoreToMiner() {
          var _this2 = this;

          this.ifShowPasswordPrompt = false; // console.log("导出keystore到挖矿应用...");

          this.native.scan().then(function (res) {
            console.log("Scan over...。。。" + JSON.stringify(res)); // this.handleText(res.text);

            _this2.helper.handleText(res.text, function (url) {
              _this2.http.post(url, {
                keystore: _this2.wallet.keystore
              }, {
                ignoreError: true
              }).subscribe(function (res) {
                console.log("keystore transmitted：" + res);
              });
            });
          });
        }
      }]);

      return ExportKeystorePage;
    }();

    ExportKeystorePage.ctorParameters = function () {
      return [{
        type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
      }, {
        type: _providers_native_native_service__WEBPACK_IMPORTED_MODULE_3__["NativeService"]
      }, {
        type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]
      }, {
        type: _providers_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }];
    };

    ExportKeystorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-export-keystore',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./export-keystore.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/export-keystore/export-keystore.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./export-keystore.page.scss */
      "./src/app/pages/export-keystore/export-keystore.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _providers_native_native_service__WEBPACK_IMPORTED_MODULE_3__["NativeService"], _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"], _providers_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], ExportKeystorePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-export-keystore-export-keystore-module-es5.js.map