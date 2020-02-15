function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wallet-import-wallet-import-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-import/wallet-import.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-import/wallet-import.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWalletImportWalletImportPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title translate=\"\">IMPORT_WALLET</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main\">\n        <div class=\"tabs\">\n            <div class=\"tab\" tappable (click)=\"toggleImportType('mnemonic')\"\n                [ngClass]=\"type == 'mnemonic' ? 'focus' : ''\">\n                <div class=\"label\" translate=\"\">MNEMONIC</div>\n            </div>\n            <div class=\"tab\" (click)=\"toggleImportType('keystore')\" [ngClass]=\"type == 'keystore' ? 'focus' : ''\">\n                <div class=\"label\">Keystore</div>\n            </div>\n        </div>\n\n        <div class=\"mnemonic\" *ngIf=\"type == 'mnemonic'\">\n            <div class=\"tips\" translate=\"\">INPUT_MNEMONIC_TIPS</div>\n            <textarea name=\"mnemonic\" (blur)=\"checkMnemonic()\" class=\"textarea\" [(ngModel)]=\"mnemonic\">\n            </textarea>\n        </div>\n\n        <div class=\"error-text\" *ngIf=\"mnemonicError && type == 'mnemonic'\">{{ mnemonicError }}</div>\n\n\n        <div class=\"mnemonic keystore\" *ngIf=\"type == 'keystore'\">\n            <div class=\"tips\" translate=\"\">COPY_KEYSTORE_TIPS</div>\n            <div class=\"input-wrapper\">\n                <textarea name=\"keystore\" (blur)=\"checkKeystore()\" class=\"textarea\" [(ngModel)]=\"keystore\">\n                </textarea>\n            </div>\n        </div>\n\n        <div class=\"error-text\" *ngIf=\"keystoreError && type == 'keystore'\">{{ keystoreError }}</div>\n\n        <div class=\"input-password-wrapper\">\n            <div class=\"label\" *ngIf=\"type == 'mnemonic'\" translate>SETUP_PASSWORD_TIPS</div>\n            <div class=\"label\" *ngIf=\"type != 'mnemonic'\" translate>INPUT_PASSWORD_TIPS</div>\n            <div class=\"input-wrapper\">\n                <input name=\"password\" (blur)=\"checkPassword()\" [type]=\"ifEyeOpen ? 'text' : 'password'\"\n                    [(ngModel)]=\"password\" placeholder=\"{{ 'PASSWORD_RULE' | translate }}\">\n            </div>\n\n            <div class=\"eye\" tappable (click)=\"toggleEyeOpen()\" [ngClass]=\"ifEyeOpen ? 'eye-open' : 'eye-close'\">\n            </div>\n        </div>\n\n        <div class=\"error-text\" *ngIf=\"passwordError\">{{ passwordError }}</div>\n\n        <div class=\"input-password-wrapper\" *ngIf=\"type == 'mnemonic'\">\n            <div class=\"label\" translate>CONFIRM_PASSWORD</div>\n            <div class=\"input-wrapper\">\n                <input name=\"password1\" (blur)=\"checkPassword1()\" [type]=\"ifEyeOpen ? 'text' : 'password'\"\n                    [(ngModel)]=\"password1\" placeholder=\"{{ 'CONFIRM_PASSWORD' | translate }}\">\n            </div>\n\n            <div class=\" eye\" tappable (click)=\"toggleEyeOpen1()\" [ngClass]=\"ifEyeOpen1 ? 'eye-open' : 'eye-close'\">\n            </div>\n        </div>\n\n        <div class=\"error-text\" *ngIf=\"passwordError1 && type == 'mnemonic'\">{{ passwordError1 }}</div>\n\n        <div class=\"buttons bottom-button\">\n            <div class=\"confirm-button\" (click)=\"importWallet()\" translate>START_IMPORT</div>\n        </div>\n    </div>\n\n\n\n</ion-content>\n\n<div class=\"lds-css ng-scope\" *ngIf=\"ifShowLoading\">\n    <div class=\"lds-wrapper\">\n        <div class=\"lds-flickr\">\n            <div></div>\n            <div></div>\n            <div></div>\n        </div>\n        <!-- <div class=\"progress\">{{ rate }}%</div> -->\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/wallet-import/wallet-import.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/wallet-import/wallet-import.module.ts ***!
    \*************************************************************/

  /*! exports provided: WalletImportPageModule */

  /***/
  function srcAppPagesWalletImportWalletImportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletImportPageModule", function () {
      return WalletImportPageModule;
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


    var _wallet_import_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wallet-import.page */
    "./src/app/pages/wallet-import/wallet-import.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: '',
      component: _wallet_import_page__WEBPACK_IMPORTED_MODULE_6__["WalletImportPage"]
    }];

    var WalletImportPageModule = function WalletImportPageModule() {
      _classCallCheck(this, WalletImportPageModule);
    };

    WalletImportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_wallet_import_page__WEBPACK_IMPORTED_MODULE_6__["WalletImportPage"]]
    })], WalletImportPageModule);
    /***/
  },

  /***/
  "./src/app/pages/wallet-import/wallet-import.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/wallet-import/wallet-import.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWalletImportWalletImportPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tabs {\n  display: -webkit-box;\n  display: flex;\n  background: #FFFFFF;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(11%, rgba(255, 255, 255, 0)), color-stop(83%, rgba(255, 255, 255, 0.84)));\n  background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 11%, rgba(255, 255, 255, 0.84) 83%);\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  margin: 14px var(--page-padding);\n}\n.tabs .tab {\n  font-size: 14px;\n  color: var(--tips-color);\n  text-align: center;\n  height: 48px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.tabs .tab .label {\n  line-height: 46px;\n  border-bottom: 2px solid #fff;\n  display: inline-block;\n}\n.tabs .tab.focus .label {\n  color: var(--main-color);\n  border-color: var(--main-color);\n}\n.mnemonic {\n  padding-bottom: 10px;\n}\n.mnemonic.keystore .textarea {\n  font-size: 12px;\n  height: 230px;\n}\n.mnemonic .tips {\n  padding: 0;\n  line-height: 44px;\n}\n.mnemonic .textarea {\n  outline: none;\n  display: block;\n  width: 100%;\n}\n.bottom-button {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93c3MvZ28vc3JjL2dpdGh1Yi5jb20vY3lwaGVyaXVtL3dhbGxldGFwcC9zcmMvYXBwL3BhZ2VzL3dhbGxldC1pbXBvcnQvd2FsbGV0LWltcG9ydC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dhbGxldC1pbXBvcnQvd2FsbGV0LWltcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNKQUFBO0VBQUEscUdBQUE7RUFDQSw2RUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNDSjtBRENJO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDQ1I7QURDUTtFQUNJLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQ0NaO0FER1k7RUFDSSx3QkFBQTtFQUNBLCtCQUFBO0FDRGhCO0FEUUE7RUFDSSxvQkFBQTtBQ0xKO0FEUVE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQ05aO0FEVUk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUNSUjtBRFdJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDVFI7QURhQTtFQUNJLGdCQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93YWxsZXQtaW1wb3J0L3dhbGxldC1pbXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAwKSAxMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NCkgODMlKTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogMTRweCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xuXG4gICAgLnRhYiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRpcHMtY29sb3IpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgICYuZm9jdXMge1xuICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubW5lbW9uaWMge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgJi5rZXlzdG9yZSB7XG4gICAgICAgIC50ZXh0YXJlYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIzMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRpcHMge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICB9XG5cbiAgICAudGV4dGFyZWEge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uYm90dG9tLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn0iLCIudGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDExJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg0KSA4MyUpO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxNHB4IHZhcigtLXBhZ2UtcGFkZGluZyk7XG59XG4udGFicyAudGFiIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tdGlwcy1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmbGV4OiAxO1xufVxuLnRhYnMgLnRhYiAubGFiZWwge1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi50YWJzIC50YWIuZm9jdXMgLmxhYmVsIHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4ubW5lbW9uaWMge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5tbmVtb25pYy5rZXlzdG9yZSAudGV4dGFyZWEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogMjMwcHg7XG59XG4ubW5lbW9uaWMgLnRpcHMge1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogNDRweDtcbn1cbi5tbmVtb25pYyAudGV4dGFyZWEge1xuICBvdXRsaW5lOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3R0b20tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/wallet-import/wallet-import.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/wallet-import/wallet-import.page.ts ***!
    \***********************************************************/

  /*! exports provided: WalletImportPage */

  /***/
  function srcAppPagesWalletImportWalletImportPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletImportPage", function () {
      return WalletImportPage;
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


    var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ethers */
    "./node_modules/ethers/dist/ethers.min.js");
    /* harmony import */


    var ethers__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/global/global.service */
    "./src/app/providers/global/global.service.ts");
    /* harmony import */


    var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/helper/helper.service */
    "./src/app/providers/helper/helper.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var WalletImportPage =
    /*#__PURE__*/
    function () {
      function WalletImportPage(router, helper, global, navCtrl) {
        _classCallCheck(this, WalletImportPage);

        this.router = router;
        this.helper = helper;
        this.global = global;
        this.navCtrl = navCtrl;
        this.mnemonic = "";
        this.password = "";
        this.password1 = "";
        this.passwordError = "";
        this.passwordError1 = "";
        this.ifEyeOpen1 = false;
        this.ifEyeOpen = false;
        this.mnemonicError = "";
        this.type = 'mnemonic';
        this.keystore = "";
        this.keystoreError = "";
        this.rate = 0;
        this.ifShowLoading = false;
      }

      _createClass(WalletImportPage, [{
        key: "toggleEyeOpen",
        value: function toggleEyeOpen() {
          this.ifEyeOpen = !this.ifEyeOpen;
        }
      }, {
        key: "toggleEyeOpen1",
        value: function toggleEyeOpen1() {
          this.ifEyeOpen1 = !this.ifEyeOpen1;
        }
      }, {
        key: "toggleImportType",
        value: function toggleImportType(type) {
          this.type = type;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "importMnemonic",
        value: function importMnemonic() {
          var result = this.checkMnemonic();

          if (!result) {
            return null;
          } else {
            return this.importMnemonicWallet();
          }
        }
      }, {
        key: "importKeystore",
        value: function importKeystore() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var result, error, json;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.checkKeystore();

                  case 2:
                    result = _context2.sent;

                    if (result) {
                      _context2.next = 5;
                      break;
                    }

                    return _context2.abrupt("return", Promise.resolve(null));

                  case 5:
                    console.log("check password...");

                    if (this.password) {
                      _context2.next = 12;
                      break;
                    }

                    _context2.next = 9;
                    return this.helper.getTranslate('PASSWORD_EMPTY');

                  case 9:
                    error = _context2.sent;
                    this.passwordError = error;
                    return _context2.abrupt("return", Promise.resolve(null));

                  case 12:
                    json = this.keystore;
                    console.log("showloading...");
                    this.ifShowLoading = true;
                    return _context2.abrupt("return", new Promise(function (resolve, reject) {
                      setTimeout(function () {
                        resolve();
                      }, 50);
                    }).then(function () {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var _this2 = this;

                        var wallet, _error;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                wallet = this.helper.decryptPrivateKey(this.keystore, this.password);
                                setTimeout(function () {
                                  _this2.ifShowLoading = false;
                                }, 0);

                                if (!wallet.flag) {
                                  _context.next = 7;
                                  break;
                                }

                                this.keystoreError = "";
                                return _context.abrupt("return", wallet);

                              case 7:
                                _context.next = 9;
                                return this.helper.getTranslate('KEYSTORE_ERROR');

                              case 9:
                                _error = _context.sent;
                                this.keystoreError = _error;
                                return _context.abrupt("return", null);

                              case 12:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }));

                  case 16:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "importMnemonicWallet",
        value: function importMnemonicWallet() {
          var mnemonic = this.mnemonic.replace(/^\s+|\s+$/, '');
          mnemonic = mnemonic.replace(/\s{2,}/g, ' '); //替换多个空格为1个

          var wallet = ethers__WEBPACK_IMPORTED_MODULE_2__["Wallet"].fromMnemonic(mnemonic);
          return wallet;
        }
      }, {
        key: "checkMnemonic",
        value: function checkMnemonic() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var error, mnemonic, mnemonicList, _error2, _error3, _error4, _error5;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (this.mnemonic) {
                      _context3.next = 5;
                      break;
                    }

                    _context3.next = 3;
                    return this.helper.getTranslate('MNEMONIC_EMPTY');

                  case 3:
                    error = _context3.sent;
                    this.mnemonicError = error;

                  case 5:
                    mnemonic = this.mnemonic.replace(/^\s+|\s+$/, '');
                    mnemonicList = mnemonic.split(/\s+/);

                    if (!(mnemonicList.length !== 24)) {
                      _context3.next = 12;
                      break;
                    }

                    _context3.next = 10;
                    return this.helper.getTranslate('MNEMONIC_LENGTH_ERROR');

                  case 10:
                    _error2 = _context3.sent;
                    this.mnemonicError = _error2;

                  case 12:
                    if (!this.mnemonicError) {
                      _context3.next = 14;
                      break;
                    }

                    return _context3.abrupt("return", false);

                  case 14:
                    if (this.password) {
                      _context3.next = 20;
                      break;
                    }

                    _context3.next = 17;
                    return this.helper.getTranslate('PASSWORD_EMPTY');

                  case 17:
                    _error3 = _context3.sent;
                    this.passwordError = _error3;
                    return _context3.abrupt("return", false);

                  case 20:
                    if (this.password1) {
                      _context3.next = 26;
                      break;
                    }

                    _context3.next = 23;
                    return this.helper.getTranslate('PASSWORD_EMPTY');

                  case 23:
                    _error4 = _context3.sent;
                    this.passwordError1 = _error4;
                    return _context3.abrupt("return", false);

                  case 26:
                    if (!(this.password1 != this.password)) {
                      _context3.next = 32;
                      break;
                    }

                    _context3.next = 29;
                    return this.helper.getTranslate('PASSEORD_DIFFERENT');

                  case 29:
                    _error5 = _context3.sent;
                    this.passwordError1 = _error5;
                    return _context3.abrupt("return", false);

                  case 32:
                    this.mnemonicError = "";
                    return _context3.abrupt("return", true);

                  case 34:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "checkKeystore",
        value: function checkKeystore() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var error;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log("check keystore...");
                    this.keystoreError = "";
                    this.passwordError = "";

                    if (this.keystore) {
                      _context4.next = 8;
                      break;
                    }

                    _context4.next = 6;
                    return this.helper.getTranslate('KEYSTORE_EMPTY');

                  case 6:
                    error = _context4.sent;
                    this.keystoreError = error;

                  case 8:
                    if (!this.keystoreError) {
                      _context4.next = 10;
                      break;
                    }

                    return _context4.abrupt("return", false);

                  case 10:
                    return _context4.abrupt("return", true);

                  case 11:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "checkPassword",
        value: function checkPassword() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var error;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (this.password) {
                      _context5.next = 7;
                      break;
                    }

                    _context5.next = 3;
                    return this.helper.getTranslate('PASSWORD_EMPTY');

                  case 3:
                    error = _context5.sent;
                    this.passwordError = error;
                    _context5.next = 8;
                    break;

                  case 7:
                    this.passwordError = "";

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "checkPassword1",
        value: function checkPassword1() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var error, _error6;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (this.password1) {
                      _context6.next = 6;
                      break;
                    }

                    _context6.next = 3;
                    return this.helper.getTranslate('PASSWORD_EMPTY');

                  case 3:
                    error = _context6.sent;
                    this.passwordError1 = error;
                    return _context6.abrupt("return");

                  case 6:
                    if (!(this.password && this.password1 != this.password)) {
                      _context6.next = 11;
                      break;
                    }

                    _context6.next = 9;
                    return this.helper.getTranslate('PASSEORD_DIFFERENT');

                  case 9:
                    _error6 = _context6.sent;
                    this.passwordError1 = _error6;

                  case 11:
                    this.passwordError1 = "";

                  case 12:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "importWallet",
        value: function importWallet() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this3 = this;

            var wallet;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.mnemonicError = "";
                    this.passwordError = "";
                    this.passwordError1 = "";
                    new Promise(function (resolve, reject) {
                      if (_this3.type == 'mnemonic') {
                        wallet = _this3.importMnemonic(); //为了一致，这里需要生成keystore

                        resolve(wallet);
                      } else if (_this3.type == 'keystore') {
                        _this3.importKeystore().then(resolve);
                      }
                    }).then(function (wallet) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee7() {
                        var error, _error7;

                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                console.log("Wallet import succeed...", wallet);

                                if (wallet) {
                                  _context7.next = 3;
                                  break;
                                }

                                return _context7.abrupt("return");

                              case 3:
                                if (!this.global.gWalletList.find(function (item) {
                                  return item.address == wallet.address;
                                })) {
                                  _context7.next = 16;
                                  break;
                                }

                                if (!(this.type == 'keystore')) {
                                  _context7.next = 11;
                                  break;
                                }

                                _context7.next = 7;
                                return this.helper.getTranslate('KEYSTORE_REPLICATE');

                              case 7:
                                error = _context7.sent;
                                this.keystoreError = error;
                                _context7.next = 15;
                                break;

                              case 11:
                                _context7.next = 13;
                                return this.helper.getTranslate('MNEMONIC_REPLICATE');

                              case 13:
                                _error7 = _context7.sent;
                                this.mnemonicError = _error7;

                              case 15:
                                return _context7.abrupt("return");

                              case 16:
                                this.helper.addWallet(wallet, this.password); // this.router.navigate(['tabs']);

                                this.navCtrl.navigateRoot('wallet');

                              case 18:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, this);
                      }));
                    });

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return WalletImportPage;
    }();

    WalletImportPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]
      }, {
        type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }];
    };

    WalletImportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wallet-import',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wallet-import.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-import/wallet-import.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wallet-import.page.scss */
      "./src/app/pages/wallet-import/wallet-import.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"], _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])], WalletImportPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-wallet-import-wallet-import-module-es5.js.map