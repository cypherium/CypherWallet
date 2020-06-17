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


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"full-content\">\n        <div class=\"header\">\n            <img src=\"./assets/imgs/cypherium-full-logo.svg\" alt=\"\">\n            <p class=\"title\" translate>CREATE_WALLET</p>\n        </div>\n\n        <div class=\"container\">\n            <div class=\"input-text-wrapper\">\n                <div class=\"label\" translate>WALLET_NAME</div>\n                <div class=\"input-wrapper\">\n                    <input type=\"text\" (keyup)=\"checkWalletName()\" (keypress)= \"hideKeyboard($event)\" [(ngModel)]=\"walletName\"\n                        placeholder=\"{{ 'INPUT_WALLET_NAME' | translate }}\">\n                </div>\n            </div>\n\n            <div class=\"error-text\" *ngIf=\"walletNameError\">{{ walletNameError }}</div>\n\n            <div class=\"input-password-wrapper\">\n                <div class=\"label\" translate>NEW_PASSWORD</div>\n                <div class=\"input-wrapper\">\n                    <input (keyup)=\"checkPassword()\" (keypress)= \"hideKeyboard($event)\" [type]=\"ifEyeOpen ? 'text' : 'password'\" [(ngModel)]=\"password\"\n                        placeholder=\"{{ 'WALLET_RULE' | translate }}\">\n                </div>\n\n                <div class=\"eye\" tappable (click)=\"toggleEyeOpen()\" [ngClass]=\"ifEyeOpen ? 'eye-open' : 'eye-close'\">\n                </div>\n            </div>\n\n            <div class=\"error-text\" *ngIf=\"passwordError\">{{ passwordError }}</div>\n\n            <div class=\"input-password-wrapper\">\n                <div class=\"label\" translate>REPEAT_PASSWORD</div>\n                <div class=\"input-wrapper\">\n                    <input (keyup)=\"checkPassword1()\" (keypress)= \"hideKeyboard($event)\" [type]=\"ifEyeOpen1 ? 'text' : 'password'\" [(ngModel)]=\"password1\"\n                        placeholder=\"{{ 'CONFIRM_PASSWORD' | translate }}\">\n                </div>\n                <div class=\"eye\" tappable (click)=\"toggleEyeOpen1()\" [ngClass]=\"ifEyeOpen1 ? 'eye-open' : 'eye-close'\">\n                </div>\n            </div>\n\n            <div class=\"error-text\" *ngIf=\"passwordError1\">{{ passwordError1 }}</div>\n\n            <div class=\"buttons\">\n                <div class=\"confirm-button\" (click)=\"createWallet()\" \n                [ngClass]=\"(walletNameError || passwordError || passwordError1 || !password1 || !password || !walletName) ? 'disabled' : ''\"\n                translate>NEXT</div>\n                <div class=\"confirm-button\" tappable (click)=\"importWallet()\" translate>IMPORT_WALLET\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n";
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


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: var(--main-color);\n  --color: #fff;\n  --border-width: 0;\n}\nion-toolbar ion-back-button {\n  --color: #fff;\n}\n.header {\n  padding-top: 20px;\n  height: 212px;\n  background: var(--main-color);\n  text-align: center;\n}\n.header img {\n  width: 140px;\n}\n.header .title {\n  font-size: 22px;\n  color: #FFFFFF;\n  font-weight: bold;\n  line-height: 42px;\n  margin-top: 10px;\n}\n.full-content {\n  height: 100%;\n}\n.container {\n  padding: 16px var(--page-padding);\n  background: #FFFFFF;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  margin-top: -20px;\n  height: 100%;\n}\n.buttons {\n  margin-top: 56px;\n  padding-bottom: 10px;\n}\n.buttons .confirm-button {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jeXBoZXIwMS9nby9zcmMvZ2l0aHViLmNvbS9jeXBoZXJpdW0vd2FsbGV0YXBwL3NyYy9hcHAvcGFnZXMvd2FsbGV0LWNyZWF0ZS93YWxsZXQtY3JlYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2FsbGV0LWNyZWF0ZS93YWxsZXQtY3JlYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7QUNDUjtBRE9BO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0pKO0FETUk7RUFDSSxZQUFBO0FDSlI7QURPSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDTFI7QURTQTtFQUNJLFlBQUE7QUNOSjtBRFFBO0VBQ0ksaUNBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0xKO0FEUUE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FDTEo7QURPSTtFQUNJLG1CQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93YWxsZXQtY3JlYXRlL3dhbGxldC1jcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlci13aWR0aDogMDtcblxuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgIC0tY29sb3I6ICNmZmY7XG4gICAgfVxufVxuXG4vLyBpb24tY29udGVudCB7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjMDBhY2UxO1xuLy8gfVxuXG4uaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBoZWlnaHQ6IDIxMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxufVxuXG4uZnVsbC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4IHZhcigtLXBhZ2UtcGFkZGluZyk7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMCk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5idXR0b25zIHtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgLmNvbmZpcm0tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICAtLWNvbG9yOiAjZmZmO1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cbmlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgaGVpZ2h0OiAyMTJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oZWFkZXIgaW1nIHtcbiAgd2lkdGg6IDE0MHB4O1xufVxuLmhlYWRlciAudGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5mdWxsLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4IHZhcigtLXBhZ2UtcGFkZGluZyk7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiA1NnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5idXR0b25zIC5jb25maXJtLWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */";
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
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/ngx/index.js");
    /* harmony import */


    var _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/badge/ngx */
    "./node_modules/@ionic-native/badge/ngx/index.js");

    var WalletCreatePage =
    /*#__PURE__*/
    function () {
      function WalletCreatePage(router, helper, global, keyboard, Wallet, badge) {
        _classCallCheck(this, WalletCreatePage);

        this.router = router;
        this.helper = helper;
        this.global = global;
        this.keyboard = keyboard;
        this.Wallet = Wallet;
        this.badge = badge;
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
            var wallet, navigationExtras;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.badge.set(11);
                    _context.next = 3;
                    return this.checkWalletName();

                  case 3:
                    _context.t0 = _context.sent;

                    if (!(_context.t0 !== "")) {
                      _context.next = 6;
                      break;
                    }

                    return _context.abrupt("return");

                  case 6:
                    _context.next = 8;
                    return this.checkPassword();

                  case 8:
                    _context.t1 = _context.sent;

                    if (!(_context.t1 !== "")) {
                      _context.next = 11;
                      break;
                    }

                    return _context.abrupt("return");

                  case 11:
                    _context.next = 13;
                    return this.checkPassword1();

                  case 13:
                    _context.t2 = _context.sent;

                    if (!(_context.t2 !== "")) {
                      _context.next = 16;
                      break;
                    }

                    return _context.abrupt("return");

                  case 16:
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

                  case 21:
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
        value: function checkWalletName() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var regx;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    regx = /^[0-9a-zA-Z]{1,20}$/;

                    if (!(this.walletName.match(regx) == null)) {
                      _context2.next = 7;
                      break;
                    }

                    _context2.next = 4;
                    return this.helper.getTranslate('WALLET_NAME_EMPTY');

                  case 4:
                    this.walletNameError = _context2.sent;
                    _context2.next = 8;
                    break;

                  case 7:
                    this.walletNameError = "";

                  case 8:
                    return _context2.abrupt("return", this.walletNameError);

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "checkPassword",
        value: function checkPassword() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var regx, message;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    regx = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;

                    if (!(this.password.match(regx) == null)) {
                      _context3.next = 9;
                      break;
                    }

                    _context3.next = 4;
                    return this.helper.getTranslate('PASSWORD_RULE');

                  case 4:
                    message = _context3.sent;
                    this.passwordError = message;
                    return _context3.abrupt("return");

                  case 9:
                    this.passwordError = "";

                  case 10:
                    return _context3.abrupt("return", this.passwordError);

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "checkPassword1",
        value: function checkPassword1() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var message;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(this.password1 != this.password)) {
                      _context4.next = 8;
                      break;
                    }

                    _context4.next = 3;
                    return this.helper.getTranslate('PASSEORD_DIFFERENT');

                  case 3:
                    message = _context4.sent;
                    this.passwordError1 = message;
                    return _context4.abrupt("return");

                  case 8:
                    this.passwordError1 = "";

                  case 9:
                    return _context4.abrupt("return", this.passwordError1);

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "hideKeyboard",
        value: function hideKeyboard(e) {
          if (e && (e.key === "Enter" || e.key === "Return")) {
            this.keyboard.hide();
          }
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
        type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Keyboard"]
      }, {
        type: _providers_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_5__["WalletService"]
      }, {
        type: _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_7__["Badge"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"], _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Keyboard"], _providers_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_5__["WalletService"], _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_7__["Badge"]])], WalletCreatePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-wallet-create-wallet-create-module-es5.js.map