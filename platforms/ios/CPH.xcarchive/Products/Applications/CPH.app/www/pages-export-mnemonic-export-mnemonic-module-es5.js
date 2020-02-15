function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-export-mnemonic-export-mnemonic-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/export-mnemonic/export-mnemonic.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/export-mnemonic/export-mnemonic.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesExportMnemonicExportMnemonicPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ action ? ('BACKUP_MNEMONIC' | translate) : ('EXPORT_MNEMONIC' | translate) }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main\">\n        <div class=\"tips\" translate=\"\">BACKUP_MNEMONIC_TIPS</div>\n        <div class=\"mnemonic-grid clear\">\n            <div class=\"grid\" *ngFor=\"let mnemonic of mnemonicList\">\n                {{ mnemonic }}</div>\n        </div>\n    </div>\n\n    <div class=\"confirm-button bottom-button\" tappable (click)=\"goNext()\" [ngClass]=\"enabled ? '' : 'disabled'\"\n        translate=\"\">NEXT\n    </div>\n\n</ion-content>\n\n\n<div class=\"prompt-mask\" *ngIf=\"ifShowPasswordPrompt\">\n    <div class=\"content\">\n        <div class=\"desc\">{{ promptDesc }}</div>\n\n        <div class=\"input-password-wrapper\">\n            <div class=\"input-wrapper\">\n                <input [type]=\"ifEyeOpen ? 'text' : 'password'\" [(ngModel)]=\"paymentPassword\" placeholder=\"请输入您的安全密码\">\n            </div>\n            <div class=\"eye\" tappable (click)=\"toggleEyeOpen()\" [ngClass]=\"ifEyeOpen ? 'eye-open' : 'eye-close'\"></div>\n        </div>\n        <div class=\"error-text\" *ngIf=\"promptError\">{{ promptError }}</div>\n\n        <div class=\"btns\">\n            <div class=\"btn btn-close\" tappable (click)=\"cancelPrompt()\" translate=\"\">CANCEL</div>\n            <div class=\"btn btn-confirm\" (click)=\"confirmPrompt()\" translate=\"\">CONFIRM</div>\n        </div>\n    </div>\n</div>\n\n<div class=\"lds-css ng-scope\" *ngIf=\"ifShowLoading\">\n    <div class=\"lds-wrapper\">\n        <div class=\"lds-flickr\">\n            <div></div>\n            <div></div>\n            <div></div>\n        </div>\n        <!-- <div class=\"progress\">{{ rate }}%</div> -->\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/export-mnemonic/export-mnemonic.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/export-mnemonic/export-mnemonic.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ExportMnemonicPageModule */

  /***/
  function srcAppPagesExportMnemonicExportMnemonicModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExportMnemonicPageModule", function () {
      return ExportMnemonicPageModule;
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


    var _export_mnemonic_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./export-mnemonic.page */
    "./src/app/pages/export-mnemonic/export-mnemonic.page.ts");
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
      component: _export_mnemonic_page__WEBPACK_IMPORTED_MODULE_6__["ExportMnemonicPage"]
    }];

    var ExportMnemonicPageModule = function ExportMnemonicPageModule() {
      _classCallCheck(this, ExportMnemonicPageModule);
    };

    ExportMnemonicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_export_mnemonic_page__WEBPACK_IMPORTED_MODULE_6__["ExportMnemonicPage"]]
    })], ExportMnemonicPageModule);
    /***/
  },

  /***/
  "./src/app/pages/export-mnemonic/export-mnemonic.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/export-mnemonic/export-mnemonic.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesExportMnemonicExportMnemonicPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cG9ydC1tbmVtb25pYy9leHBvcnQtbW5lbW9uaWMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/export-mnemonic/export-mnemonic.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/export-mnemonic/export-mnemonic.page.ts ***!
    \***************************************************************/

  /*! exports provided: ExportMnemonicPage */

  /***/
  function srcAppPagesExportMnemonicExportMnemonicPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExportMnemonicPage", function () {
      return ExportMnemonicPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/global/global.service */
    "./src/app/providers/global/global.service.ts");
    /* harmony import */


    var _providers_native_native_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/native/native.service */
    "./src/app/providers/native/native.service.ts");
    /* harmony import */


    var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../providers/helper/helper.service */
    "./src/app/providers/helper/helper.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var ExportMnemonicPage =
    /*#__PURE__*/
    function () {
      function ExportMnemonicPage(router, activeRouter, global, native, helper, navCtrl) {
        _classCallCheck(this, ExportMnemonicPage);

        this.router = router;
        this.activeRouter = activeRouter;
        this.global = global;
        this.native = native;
        this.helper = helper;
        this.navCtrl = navCtrl;
        this.action = "";
        this.enabled = false;
        this.ifEyeOpen = false;
        this.mnemonicList = [];
        this.ifShowPasswordPrompt = false;
        this.paymentPassword = "";
        this.promptDesc = "";
        this.promptError = "";
        this.ifShowLoading = false;
        this.askForPassword = false;

        if (this.router.getCurrentNavigation().extras.state) {
          this.wallet = this.router.getCurrentNavigation().extras.state.wallet;
          this.action = this.router.getCurrentNavigation().extras.state.action;
          console.log(this.wallet.privateKey); //获取助记词

          this.mnemonicList = this.wallet.mnemonic.split(" "); // console.log(Buffer)
          // try {
          //     var key = Buffer.from(this.wallet.privateKey.replace('0x', ''), 'hex');
          //     console.log(key)
          //     this.keystore = JSON.stringify(EthereumWallet.fromPrivateKey(key).toV3("123456", {
          //         n: 1024
          //     }));
          //     console.log(this.keystore)
          // } catch (e) {
          //     console.log(e.message)
          // }
          // this.wallet.encrypt("123456").then(res => {
          //     console.log("aaaaaa" + res)
          //     this.keystore = res;
          // }).catch(e => {
          //     console.log("sdfsdfds")
          // })
        } else {
          //导出助记词
          this.wallet = this.global.gWalletList[this.global.currentWalletIndex];
          this.askForPassword = true;
        }
      }

      _createClass(ExportMnemonicPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var error;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.helper.getTranslate('EXPORT_NEED_PASSEORD');

                  case 2:
                    error = _context.sent;
                    this.promptDesc = error;
                    setTimeout(function () {
                      _this.enabled = true;
                    }, 3000);

                    if (this.askForPassword) {
                      setTimeout(function () {
                        //需要用户输入密码
                        _this.ifShowPasswordPrompt = true;
                      }, 500);
                    }

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "toggleEyeOpen",
        value: function toggleEyeOpen() {
          this.ifEyeOpen = !this.ifEyeOpen;
        }
      }, {
        key: "goNext",
        value: function goNext() {
          if (this.enabled) {
            var navigationExtras = {
              state: {
                wallet: this.wallet
              }
            }; //前往验证页

            this.router.navigate(['backup-mnemonic'], navigationExtras);
          }
        }
      }, {
        key: "cancelPrompt",
        value: function cancelPrompt() {
          var _this2 = this;

          this.ifShowPasswordPrompt = false;
          setTimeout(function () {
            _this2.navCtrl.pop();
          }, 50);
        }
      }, {
        key: "confirmPrompt",
        value: function confirmPrompt() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var error;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.promptError = "";

                    if (this.paymentPassword) {
                      _context3.next = 7;
                      break;
                    }

                    _context3.next = 4;
                    return this.helper.getTranslate('PASSWORD_EMPTY');

                  case 4:
                    error = _context3.sent;
                    this.promptError = error;
                    return _context3.abrupt("return");

                  case 7:
                    this.ifShowLoading = true;
                    setTimeout(function () {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2() {
                        var ret, _error;

                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                //解码
                                ret = this.helper.decryptPrivateKey(this.wallet.keystore, this.paymentPassword);

                                if (!ret.flag) {
                                  _context2.next = 9;
                                  break;
                                }

                                this.ifShowPasswordPrompt = false;
                                this.ifShowLoading = false; //根据私钥生成助记词    

                                this.wallet = this.helper.generateMnemonicWallet(ret.privateKey);
                                this.mnemonicList = this.wallet.mnemonic.split(" ");
                                return _context2.abrupt("return");

                              case 9:
                                this.ifShowLoading = false;
                                _context2.next = 12;
                                return this.helper.getTranslate('PASSEORD_ERROR');

                              case 12:
                                _error = _context2.sent;
                                this.promptError = _error;

                              case 14:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    }, 100);

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ExportMnemonicPage;
    }();

    ExportMnemonicPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
      }, {
        type: _providers_native_native_service__WEBPACK_IMPORTED_MODULE_4__["NativeService"]
      }, {
        type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }];
    };

    ExportMnemonicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-export-mnemonic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./export-mnemonic.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/export-mnemonic/export-mnemonic.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./export-mnemonic.page.scss */
      "./src/app/pages/export-mnemonic/export-mnemonic.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _providers_native_native_service__WEBPACK_IMPORTED_MODULE_4__["NativeService"], _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])], ExportMnemonicPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-export-mnemonic-export-mnemonic-module-es5.js.map