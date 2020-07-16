function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-change-password-change-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChangePasswordChangePasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ 'CHANGE_PASSWORD' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"container\">\n        <div class=\"input-password-wrapper\">\n            <div class=\"label\" translate=\"\">ORIGINAL_PASSWORD</div>\n            <div class=\"input-wrapper\">\n                <input (input)=\"checkPassword()\" [type]=\"ifEyeOpen ? 'text' : 'password'\" [(ngModel)]=\"password\"\n                    placeholder=\"{{ 'INPUT_ORIGINAL_PASSWORD' | translate }}\">\n            </div>\n\n            <div class=\"eye\" tappable (click)=\"toggleEyeOpen()\" [ngClass]=\"ifEyeOpen ? 'eye-open' : 'eye-close'\">\n            </div>\n        </div>\n\n        <div class=\"error-text\" *ngIf=\"passwordError\">{{ passwordError }}</div>\n\n        <div class=\"input-password-wrapper\">\n            <div class=\"label\" translate>NEW_PASSWORD</div>\n            <div class=\"input-wrapper\">\n                <input (input)=\"checkPassword1()\" [type]=\"ifEyeOpen1 ? 'text' : 'password'\" [(ngModel)]=\"password1\"\n                    placeholder=\"{{ 'PASSWORD_RULE' | translate }}\">\n            </div>\n\n            <div class=\"eye\" tappable (click)=\"toggleEyeOpen1()\" [ngClass]=\"ifEyeOpen1 ? 'eye-open' : 'eye-close'\">\n            </div>\n        </div>\n\n        <div class=\"error-text\" *ngIf=\"passwordError1\">{{ passwordError1 }}</div>\n\n        <div class=\"input-password-wrapper\">\n            <div class=\"label\" translate=\"\">CONFIRM_PASSWORD</div>\n            <div class=\"input-wrapper\">\n                <input (input)=\"checkPassword2()\" [type]=\"ifEyeOpen2 ? 'text' : 'password'\" [(ngModel)]=\"password2\"\n                    placeholder=\"{{ 'CONFIRM_PASSWORD' | translate }}\">\n            </div>\n\n            <div class=\" eye\" tappable (click)=\"toggleEyeOpen2()\" [ngClass]=\"ifEyeOpen2 ? 'eye-open' : 'eye-close'\">\n            </div>\n        </div>\n\n        <div class=\"error-text\" *ngIf=\"passwordError2\">{{ passwordError2 }}</div>\n\n        <div class=\"buttons\">\n            <div class=\"confirm-button\" [ngClass]=\"(passwordError1 || passwordError2 || passwordError || !password1|| !password2 || !password || (password1 != password2)) ? 'disabled' : ''\" tappable (click)=\"changePassword()\" translate>CONFIRM</div>\n        </div>\n    </div>\n</ion-content>\n\n<div class=\"lds-css ng-scope\" *ngIf=\"ifShowLoading\">\n    <div class=\"lds-wrapper\">\n        <div class=\"lds-flickr\">\n            <div></div>\n            <div></div>\n            <div></div>\n        </div>\n        <!-- <div class=\"progress\">{{ rate }}%</div> -->\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/change-password/change-password.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/change-password/change-password.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ChangePasswordPageModule */

  /***/
  function srcAppPagesChangePasswordChangePasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function () {
      return ChangePasswordPageModule;
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


    var _change_password_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./change-password.page */
    "./src/app/pages/change-password/change-password.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: '',
      component: _change_password_page__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordPage"]
    }];

    var ChangePasswordPageModule = function ChangePasswordPageModule() {
      _classCallCheck(this, ChangePasswordPageModule);
    };

    ChangePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordPage"]]
    })], ChangePasswordPageModule);
    /***/
  },

  /***/
  "./src/app/pages/change-password/change-password.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/change-password/change-password.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesChangePasswordChangePasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main {\n  padding: 18px;\n}\n\nion-content {\n  --background: #fff;\n}\n\n.container {\n  padding: 20px var(--page-padding);\n}\n\n.buttons {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jeXBoZXIwMS9nby9zcmMvZ2l0aHViLmNvbS9jeXBoZXJpdW0vd2FsbGV0YXBwL3NyYy9hcHAvcGFnZXMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGlDQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgcGFkZGluZzogMThweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMjBweCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xufVxuXG4uYnV0dG9ucyB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn0iLCIubWFpbiB7XG4gIHBhZGRpbmc6IDE4cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xufVxuXG4uYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/change-password/change-password.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/change-password/change-password.page.ts ***!
    \***************************************************************/

  /*! exports provided: ChangePasswordPage */

  /***/
  function srcAppPagesChangePasswordChangePasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function () {
      return ChangePasswordPage;
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

    var ChangePasswordPage =
    /*#__PURE__*/
    function () {
      function ChangePasswordPage(helper, navCtrl, global) {
        _classCallCheck(this, ChangePasswordPage);

        this.helper = helper;
        this.navCtrl = navCtrl;
        this.global = global;
        this.password = "";
        this.password1 = "";
        this.password2 = "";
        this.ifEyeOpen = false;
        this.ifEyeOpen1 = false;
        this.ifEyeOpen2 = false;
        this.passwordError = "";
        this.passwordError1 = "";
        this.passwordError2 = "";
        this.ifShowLoading = false;
        this.wallet = {};
      }

      _createClass(ChangePasswordPage, [{
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
                    if (!(!/^[\da-zA-Z]{6,18}$/.test(this.password1) || /^[\d]+$/.test(this.password1) || /^[a-zA-Z]+$/.test(this.password1))) {
                      _context2.next = 13;
                      break;
                    }

                    _context2.next = 11;
                    return this.helper.getTranslate('PASSWORD_RULE');

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
                    _context6.next = 2;
                    return this.checkPassword();

                  case 2:
                    if (!this.passwordError) {
                      _context6.next = 4;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 4:
                    _context6.next = 6;
                    return this.checkPassword1();

                  case 6:
                    if (!this.passwordError1) {
                      _context6.next = 8;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 8:
                    _context6.next = 10;
                    return this.checkPassword2();

                  case 10:
                    if (!this.passwordError2) {
                      _context6.next = 12;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 12:
                    //开始修改密码
                    this.ifShowLoading = true;
                    setTimeout(function () {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee5() {
                        var _this2 = this;

                        var ret, privateKey, keystore, error;
                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                //获取私钥
                                ret = this.helper.decryptPrivateKey(this.wallet.keystore, this.password);

                                if (!ret.flag) {
                                  _context5.next = 11;
                                  break;
                                }

                                this.ifShowLoading = false; //获取到私钥

                                privateKey = ret.privateKey; //计算新的keystore

                                keystore = this.helper.exportKeystore(privateKey, this.password1);
                                this.wallet.keystore = keystore;
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
                                  _this2.navCtrl.pop();
                                }, 1000);
                                _context5.next = 16;
                                break;

                              case 11:
                                //密码错误
                                this.ifShowLoading = false;
                                _context5.next = 14;
                                return this.helper.getTranslate('PASSWORD_ERROR');

                              case 14:
                                error = _context5.sent;
                                this.passwordError = error;

                              case 16:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    }, 50);

                  case 14:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return ChangePasswordPage;
    }();

    ChangePasswordPage.ctorParameters = function () {
      return [{
        type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
      }];
    };

    ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change-password.page.scss */
      "./src/app/pages/change-password/change-password.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])], ChangePasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-change-password-change-password-module-es5.js.map