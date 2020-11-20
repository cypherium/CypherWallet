function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-password-payment-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-password/payment-password.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-password/payment-password.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPaymentPasswordPaymentPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'SET_PAYMENT_PASSWORD' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"input-password-wrapper\" *ngIf=\"isChange\">\n      <div class=\"label\" translate=\"\">ORIGINAL_PASSWORD</div>\n      <div class=\"input-wrapper\">\n        <input (keyup)=\"checkPassword()\"  [type]=\"ifEyeOpen ? 'number' : 'password'\" inputmode=\"decimal\" [(ngModel)]=\"password\"\n          placeholder=\"{{ 'INPUT_ORIGINAL_PASSWORD' | translate }}\">\n      </div>\n\n      <div class=\"eye\" tappable (click)=\"toggleEyeOpen()\" [ngClass]=\"ifEyeOpen ? 'eye-open' : 'eye-close'\">\n      </div>\n    </div>\n\n    <div class=\"error-text\" *ngIf=\"passwordError\">{{ passwordError }}</div>\n\n    <div class=\"input-password-wrapper\">\n      <div class=\"label\" translate>NEW_PASSWORD</div>\n      <div class=\"input-wrapper\">\n        <input (keyup)=\"checkPassword1()\" [type]=\"ifEyeOpen1 ? 'number' : 'password'\" inputmode=\"decimal\" [(ngModel)]=\"password1\"\n          placeholder=\"{{ 'PAYMENT_PASSWORD_RULE' | translate }}\">\n      </div>\n\n      <div class=\"eye\" tappable (click)=\"toggleEyeOpen1()\" [ngClass]=\"ifEyeOpen1 ? 'eye-open' : 'eye-close'\">\n      </div>\n    </div>\n\n    <div class=\"error-text\" *ngIf=\"passwordError1\">{{ passwordError1 }}</div>\n\n    <div class=\"input-password-wrapper\">\n      <div class=\"label\" translate=\"\">CONFIRM_PASSWORD</div>\n      <div class=\"input-wrapper\">\n        <input (keyup)=\"checkPassword2()\" [type]=\"ifEyeOpen2 ? 'number' : 'password'\" [(ngModel)]=\"password2\"\n          placeholder=\"{{ 'CONFIRM_PASSWORD' | translate }}\">\n      </div>\n\n      <div class=\" eye\" tappable (click)=\"toggleEyeOpen2()\" [ngClass]=\"ifEyeOpen2 ? 'eye-open' : 'eye-close'\">\n      </div>\n    </div>\n\n    <div class=\"error-text\" *ngIf=\"passwordError2\">{{ passwordError2 }}</div>\n\n    <div class=\"buttons\">\n      <div class=\"confirm-button\" [ngClass]=\"(passwordError || passwordError1 || passwordError2 || !password1 || !password2 || password1 != password2) ? 'disabled' : ''\"\n      tappable (click)=\"changePassword()\" translate>CONFIRM</div>\n    </div>\n  </div>\n</ion-content>\n\n<div class=\"lds-css ng-scope\" *ngIf=\"ifShowLoading\">\n  <div class=\"lds-wrapper\">\n    <div class=\"lds-flickr\">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n    <!-- <div class=\"progress\">{{ rate }}%</div> -->\n  </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/payment-password/payment-password.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/payment-password/payment-password.module.ts ***!
    \*******************************************************************/

  /*! exports provided: PaymentPasswordPageModule */

  /***/
  function srcAppPagesPaymentPasswordPaymentPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPasswordPageModule", function () {
      return PaymentPasswordPageModule;
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


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _payment_password_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./payment-password.page */
    "./src/app/pages/payment-password/payment-password.page.ts");

    var routes = [{
      path: '',
      component: _payment_password_page__WEBPACK_IMPORTED_MODULE_8__["PaymentPasswordPage"]
    }];

    var PaymentPasswordPageModule = function PaymentPasswordPageModule() {
      _classCallCheck(this, PaymentPasswordPageModule);
    };

    PaymentPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_payment_password_page__WEBPACK_IMPORTED_MODULE_8__["PaymentPasswordPage"]]
    })], PaymentPasswordPageModule);
    /***/
  },

  /***/
  "./src/app/pages/payment-password/payment-password.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/payment-password/payment-password.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPaymentPasswordPaymentPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main {\n  padding: 18px;\n}\n\nion-content {\n  --background: #fff;\n}\n\n.container {\n  padding: 20px var(--page-padding);\n}\n\n.buttons {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jeXBoZXIwMS9nby9zcmMvZ2l0aHViLmNvbS9jeXBoZXJpdW0vd2FsbGV0YXBwL3NyYy9hcHAvcGFnZXMvcGF5bWVudC1wYXNzd29yZC9wYXltZW50LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5bWVudC1wYXNzd29yZC9wYXltZW50LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQtcGFzc3dvcmQvcGF5bWVudC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgcGFkZGluZzogMThweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMjBweCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xufVxuXG4uYnV0dG9ucyB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn0iLCIubWFpbiB7XG4gIHBhZGRpbmc6IDE4cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xufVxuXG4uYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/payment-password/payment-password.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/payment-password/payment-password.page.ts ***!
    \*****************************************************************/

  /*! exports provided: PaymentPasswordPage */

  /***/
  function srcAppPagesPaymentPasswordPaymentPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPasswordPage", function () {
      return PaymentPasswordPage;
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


    var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/helper/helper.service */
    "./src/app/providers/helper/helper.service.ts");
    /* harmony import */


    var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/global/global.service */
    "./src/app/providers/global/global.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PaymentPasswordPage =
    /*#__PURE__*/
    function () {
      function PaymentPasswordPage(helper, navCtrl, global, router) {
        _classCallCheck(this, PaymentPasswordPage);

        this.helper = helper;
        this.navCtrl = navCtrl;
        this.global = global;
        this.router = router;
        this.password = "";
        this.password1 = "";
        this.password2 = "";
        this.isChange = false;
        this.ifEyeOpen = false;
        this.ifEyeOpen1 = false;
        this.ifEyeOpen2 = false;
        this.passwordError = "";
        this.passwordError1 = "";
        this.passwordError2 = "";
        this.ifShowLoading = false;
        this.wallet = {};
        var state = this.router.getCurrentNavigation().extras.state;

        if (state) {
          this.privateKey = state.privateKey;
          this.action = state.action;
        }
      }

      _createClass(PaymentPasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.wallet = this.global.gWalletList[this.global.currentWalletIndex];
        }
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
        key: "toggleEyeOpen2",
        value: function toggleEyeOpen2() {
          this.ifEyeOpen2 = !this.ifEyeOpen2;
        }
      }, {
        key: "checkPassword",
        value: function checkPassword() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var error;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.passwordError = "";

                    if (this.password) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 4;
                    return this.helper.getTranslate('ORIGINAL_PASSWORD_EMPTY');

                  case 4:
                    error = _context.sent;
                    this.passwordError = error;

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "checkPassword1",
        value: function checkPassword1() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var error, _error;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.passwordError1 = "";

                    if (this.password1) {
                      _context2.next = 8;
                      break;
                    }

                    _context2.next = 4;
                    return this.helper.getTranslate('NEW_PASSWORD_EMPTY');

                  case 4:
                    error = _context2.sent;
                    this.passwordError1 = error;
                    _context2.next = 13;
                    break;

                  case 8:
                    if (/^\d{6}$/.test(this.password1)) {
                      _context2.next = 13;
                      break;
                    }

                    _context2.next = 11;
                    return this.helper.getTranslate('PAYMENT_PASSWORD_RULE');

                  case 11:
                    _error = _context2.sent;
                    this.passwordError1 = _error;

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "checkPassword2",
        value: function checkPassword2() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var error, _error2;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.passwordError2 = "";

                    if (this.password2) {
                      _context3.next = 8;
                      break;
                    }

                    _context3.next = 4;
                    return this.helper.getTranslate('NEW_PASSWORD_EMPTY');

                  case 4:
                    error = _context3.sent;
                    this.passwordError2 = error;
                    _context3.next = 13;
                    break;

                  case 8:
                    if (!(this.password2 != this.password1)) {
                      _context3.next = 13;
                      break;
                    }

                    _context3.next = 11;
                    return this.helper.getTranslate('PASSEORD_DIFFERENT');

                  case 11:
                    _error2 = _context3.sent;
                    this.passwordError2 = _error2;

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "changePassword",
        value: function changePassword() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!this.isChange) {
                      _context6.next = 5;
                      break;
                    }

                    _context6.next = 3;
                    return this.checkPassword();

                  case 3:
                    if (!this.passwordError) {
                      _context6.next = 5;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 5:
                    _context6.next = 7;
                    return this.checkPassword1();

                  case 7:
                    if (!this.passwordError1) {
                      _context6.next = 9;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 9:
                    _context6.next = 11;
                    return this.checkPassword2();

                  case 11:
                    if (!this.passwordError2) {
                      _context6.next = 13;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 13:
                    //start to change password
                    this.ifShowLoading = true;
                    setTimeout(function () {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee5() {
                        var _this2 = this;

                        var keystore, error;
                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                this.ifShowLoading = false; //计算新的payment-keystore

                                if (!this.privateKey) {
                                  _context5.next = 9;
                                  break;
                                }

                                keystore = this.helper.exportKeystore(this.privateKey, this.password1);
                                this.wallet.payment = keystore;
                                this.helper.saveWallet();
                                setTimeout(function () {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
                                  /*#__PURE__*/
                                  regeneratorRuntime.mark(function _callee4() {
                                    var error;
                                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                      while (1) {
                                        switch (_context4.prev = _context4.next) {
                                          case 0:
                                            _context4.next = 2;
                                            return this.helper.getTranslate('CHANGE_PASSWORD_SUCCEED');

                                          case 2:
                                            error = _context4.sent;
                                            this.helper.toast(error);

                                          case 4:
                                          case "end":
                                            return _context4.stop();
                                        }
                                      }
                                    }, _callee4, this);
                                  }));
                                }, 50);
                                setTimeout(function () {
                                  if (_this2.action !== 'create') {
                                    _this2.navCtrl.pop();
                                  } else {
                                    _this2.navCtrl.navigateRoot('wallet');
                                  }
                                }, 1000);
                                _context5.next = 15;
                                break;

                              case 9:
                                //password error
                                this.ifShowLoading = false;
                                _context5.next = 12;
                                return this.helper.getTranslate('PASSWORD_ERROR');

                              case 12:
                                error = _context5.sent;
                                // this.passwordError = error;
                                this.helper.toast(error);
                                setTimeout(function () {
                                  _this2.navCtrl.pop();
                                }, 1000);

                              case 15:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    }, 50);

                  case 15:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return PaymentPasswordPage;
    }();

    PaymentPasswordPage.ctorParameters = function () {
      return [{
        type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    PaymentPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-payment-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payment-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-password/payment-password.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payment-password.page.scss */
      "./src/app/pages/payment-password/payment-password.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], PaymentPasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-payment-password-payment-password-module-es5.js.map
