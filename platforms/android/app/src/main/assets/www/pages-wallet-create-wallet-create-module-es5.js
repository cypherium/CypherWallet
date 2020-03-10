function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wallet-create-wallet-create-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-create/wallet-create.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-create/wallet-create.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWalletCreateWalletCreatePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"full-content\">\n        <div class=\"header\">\n            <img src=\"./assets/imgs/cypherium-full-logo.svg\" alt=\"\">\n            <p class=\"title\" translate>CREATE_WALLET</p>\n        </div>\n\n        <div class=\"container\">\n            <div class=\"input-text-wrapper\">\n                <div class=\"label\" translate>WALLET_NAME</div>\n                <div class=\"input-wrapper\">\n                    <input type=\"text\" (blur)=\"checkWalletName()\" [(ngModel)]=\"walletName\"\n                        placeholder=\"{{ 'INPUT_WALLET_NAME' | translate }}\">\n                </div>\n            </div>\n\n            <div class=\"error-text\" *ngIf=\"walletNameError\">{{ walletNameError }}</div>\n\n            <div class=\"input-password-wrapper\">\n                <div class=\"label\" translate>NEW_PASSWORD</div>\n                <div class=\"input-wrapper\">\n                    <input (keyup)=\"checkPassword()\" [type]=\"ifEyeOpen ? 'text' : 'password'\" [(ngModel)]=\"password\"\n                        placeholder=\"{{ 'WALLET_RULE' | translate }}\">\n                </div>\n\n                <div class=\"eye\" tappable (click)=\"toggleEyeOpen()\" [ngClass]=\"ifEyeOpen ? 'eye-open' : 'eye-close'\">\n                </div>\n            </div>\n\n            <div class=\"error-text\" *ngIf=\"passwordError\">{{ passwordError }}</div>\n\n            <div class=\"input-password-wrapper\">\n                <div class=\"label\" translate>REPEAT_PASSWORD</div>\n                <div class=\"input-wrapper\">\n                    <input (keyup)=\"checkPassword1()\" [type]=\"ifEyeOpen1 ? 'text' : 'password'\" [(ngModel)]=\"password1\"\n                        placeholder=\"{{ 'CONFIRM_PASSWORD' | translate }}\">\n                </div>\n                <div class=\"eye\" tappable (click)=\"toggleEyeOpen1()\" [ngClass]=\"ifEyeOpen1 ? 'eye-open' : 'eye-close'\">\n                </div>\n            </div>\n\n            <div class=\"error-text\" *ngIf=\"passwordError1\">{{ passwordError1 }}</div>\n\n            <div class=\"buttons\">\n                <div class=\"confirm-button\" (click)=\"createWallet()\" translate>NEXT</div>\n                <div class=\"confirm-button\" tappable (click)=\"importWallet()\" translate>IMPORT_WALLET\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/wallet-create/wallet-create.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/wallet-create/wallet-create.module.ts ***!
    \*************************************************************/

  /*! exports provided: WalletCreatePageModule */

  /***/
  function srcAppPagesWalletCreateWalletCreateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletCreatePageModule", function () {
      return WalletCreatePageModule;
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


    var _wallet_create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wallet-create.page */
    "./src/app/pages/wallet-create/wallet-create.page.ts");
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
      component: _wallet_create_page__WEBPACK_IMPORTED_MODULE_6__["WalletCreatePage"]
    }];

    var WalletCreatePageModule = function WalletCreatePageModule() {
      _classCallCheck(this, WalletCreatePageModule);
    };

    WalletCreatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_wallet_create_page__WEBPACK_IMPORTED_MODULE_6__["WalletCreatePage"]]
    })], WalletCreatePageModule);
    /***/
  },

  /***/
  "./src/app/pages/wallet-create/wallet-create.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/wallet-create/wallet-create.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWalletCreateWalletCreatePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: var(--main-color);\n  --color: #fff;\n  --border-width: 0;\n}\nion-toolbar ion-back-button {\n  --color: #fff;\n}\n.header {\n  padding-top: 20px;\n  height: 212px;\n  background: var(--main-color);\n  text-align: center;\n}\n.header img {\n  width: 140px;\n}\n.header .title {\n  font-size: 22px;\n  color: #FFFFFF;\n  font-weight: bold;\n  line-height: 42px;\n  margin-top: 10px;\n}\n.container {\n  padding: 16px var(--page-padding);\n  background: #FFFFFF;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  margin-top: -20px;\n}\n.buttons {\n  margin-top: 56px;\n  padding-bottom: 10px;\n}\n.buttons .confirm-button {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93c3MvZ28vc3JjL2dpdGh1Yi5jb20vY3lwaGVyaXVtL3dhbGxldGFwcC9zcmMvYXBwL3BhZ2VzL3dhbGxldC1jcmVhdGUvd2FsbGV0LWNyZWF0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dhbGxldC1jcmVhdGUvd2FsbGV0LWNyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0FDQ1I7QURHQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBQ0ksWUFBQTtBQ0FSO0FER0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0RSO0FES0E7RUFDSSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUNGSjtBREtBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBQ0ZKO0FESUk7RUFDSSxtQkFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2FsbGV0LWNyZWF0ZS93YWxsZXQtY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XG5cbiAgICBpb24tYmFjay1idXR0b24ge1xuICAgICAgICAtLWNvbG9yOiAjZmZmO1xuICAgIH1cbn1cblxuLmhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMTJweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTApO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi5idXR0b25zIHtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgLmNvbmZpcm0tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICAtLWNvbG9yOiAjZmZmO1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cbmlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgaGVpZ2h0OiAyMTJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oZWFkZXIgaW1nIHtcbiAgd2lkdGg6IDE0MHB4O1xufVxuLmhlYWRlciAudGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4IHZhcigtLXBhZ2UtcGFkZGluZyk7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi5idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogNTZweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uYnV0dG9ucyAuY29uZmlybS1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/wallet-create/wallet-create.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/wallet-create/wallet-create.page.ts ***!
    \***********************************************************/

  /*! exports provided: WalletCreatePage */

  /***/
  function srcAppPagesWalletCreateWalletCreatePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletCreatePage", function () {
      return WalletCreatePage;
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


    var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/helper/helper.service */
    "./src/app/providers/helper/helper.service.ts");
    /* harmony import */


    var _providers_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../providers/wallet/wallet.service */
    "./src/app/providers/wallet/wallet.service.ts");

    var WalletCreatePage =
    /*#__PURE__*/
    function () {
      function WalletCreatePage(router, helper, global, Wallet) {
        _classCallCheck(this, WalletCreatePage);

        this.router = router;
        this.helper = helper;
        this.global = global;
        this.Wallet = Wallet;
        this.password = "";
        this.password1 = "";
        this.walletName = "";
        this.walletNameError = "";
        this.ifEyeOpen = false;
        this.ifEyeOpen1 = false;
        this.passwordError = "";
        this.passwordError1 = "";
      }

      _createClass(WalletCreatePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
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
        key: "createWallet",
        value: function createWallet() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var message, _message, _message2, _message3, wallet, navigationExtras;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.walletNameError = "";
                    this.passwordError = "";
                    this.passwordError1 = "";

                    if (this.walletName) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 6;
                    return this.helper.getTranslate('WALLET_NAME_EMPTY');

                  case 6:
                    message = _context.sent;
                    this.walletNameError = message;
                    return _context.abrupt("return");

                  case 9:
                    if (this.password) {
                      _context.next = 15;
                      break;
                    }

                    _context.next = 12;
                    return this.helper.getTranslate('PASSWORD_EMPTY');

                  case 12:
                    _message = _context.sent;
                    this.passwordError = _message;
                    return _context.abrupt("return");

                  case 15:
                    if (this.password1) {
                      _context.next = 21;
                      break;
                    }

                    _context.next = 18;
                    return this.helper.getTranslate('PASSWORD_EMPTY');

                  case 18:
                    _message2 = _context.sent;
                    this.passwordError1 = _message2;
                    return _context.abrupt("return");

                  case 21:
                    if (!(this.password1 != this.password)) {
                      _context.next = 27;
                      break;
                    }

                    _context.next = 24;
                    return this.helper.getTranslate('PASSEORD_DIFFERENT');

                  case 24:
                    _message3 = _context.sent;
                    this.passwordError1 = _message3;
                    return _context.abrupt("return");

                  case 27:
                    // let wallet = ethers.Wallet.createRandom();
                    wallet = this.Wallet.createRandom();
                    navigationExtras = {
                      state: {
                        wallet: wallet,
                        action: 'backup'
                      }
                    };
                    this.global.walletName = this.walletName;
                    this.global.paymentPassword = this.password;
                    this.router.navigate(['export-mnemonic'], navigationExtras);

                  case 32:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "importWallet",
        value: function importWallet() {
          this.router.navigate(['wallet-import']);
        }
      }, {
        key: "checkWalletName",
        value: function checkWalletName() {}
      }, {
        key: "checkPassword",
        value: function checkPassword() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var message, regx, _message4;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.password.length < 6 || this.password.length > 18)) {
                      _context2.next = 8;
                      break;
                    }

                    _context2.next = 3;
                    return this.helper.getTranslate('PASSWORD_RULE');

                  case 3:
                    message = _context2.sent;
                    this.passwordError = message;
                    return _context2.abrupt("return");

                  case 8:
                    this.passwordError = "";

                  case 9:
                    regx = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;

                    if (!(this.password.match(regx) == null)) {
                      _context2.next = 18;
                      break;
                    }

                    _context2.next = 13;
                    return this.helper.getTranslate('PASSWORD_RULE');

                  case 13:
                    _message4 = _context2.sent;
                    this.passwordError = _message4;
                    return _context2.abrupt("return");

                  case 18:
                    this.passwordError = "";

                  case 19:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "checkPassword1",
        value: function checkPassword1() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var message;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(this.password1 != this.password)) {
                      _context3.next = 8;
                      break;
                    }

                    _context3.next = 3;
                    return this.helper.getTranslate('PASSEORD_DIFFERENT');

                  case 3:
                    message = _context3.sent;
                    this.passwordError1 = message;
                    return _context3.abrupt("return");

                  case 8:
                    this.passwordError1 = "";

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return WalletCreatePage;
    }();

    WalletCreatePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]
      }, {
        type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
      }, {
        type: _providers_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_5__["WalletService"]
      }];
    };

    WalletCreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wallet-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wallet-create.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-create/wallet-create.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wallet-create.page.scss */
      "./src/app/pages/wallet-create/wallet-create.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"], _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _providers_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_5__["WalletService"]])], WalletCreatePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-wallet-create-wallet-create-module-es5.js.map