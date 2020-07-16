function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wallet-name-wallet-name-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-name/wallet-name.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-name/wallet-name.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWalletNameWalletNamePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ 'CHANGE_WALLET_NAME' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"wallet-modify-content\">\n        <div class=\"input-text-wrapper\">\n            <div class=\"label\" translate>WALLET_NAME</div>\n            <div class=\"input-wrapper\">\n                <input type=\"text\" (blur)=\"checkWalletName()\" (keypress)= \"hideKeyboard($event)\" [(ngModel)]=\"walletName\"\n                    placeholder=\"{{ 'INPUT_WALLET_NAME' | translate }}\">\n            </div>\n        </div>\n\n        <div class=\"error-text\" *ngIf=\"walletNameError\">{{ walletNameError }}</div>\n    </div>\n\n    <div class=\"confirm-button\" tappable (click)=\"doSave()\" translate>\n        SAVE\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/wallet-name/wallet-name.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/wallet-name/wallet-name.module.ts ***!
    \*********************************************************/

  /*! exports provided: WalletNamePageModule */

  /***/
  function srcAppPagesWalletNameWalletNameModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletNamePageModule", function () {
      return WalletNamePageModule;
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


    var _wallet_name_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wallet-name.page */
    "./src/app/pages/wallet-name/wallet-name.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: '',
      component: _wallet_name_page__WEBPACK_IMPORTED_MODULE_6__["WalletNamePage"]
    }];

    var WalletNamePageModule = function WalletNamePageModule() {
      _classCallCheck(this, WalletNamePageModule);
    };

    WalletNamePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_wallet_name_page__WEBPACK_IMPORTED_MODULE_6__["WalletNamePage"]]
    })], WalletNamePageModule);
    /***/
  },

  /***/
  "./src/app/pages/wallet-name/wallet-name.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/wallet-name/wallet-name.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWalletNameWalletNamePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wallet-modify-content {\n  padding: 10px var(--page-padding);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jeXBoZXIwMS9nby9zcmMvZ2l0aHViLmNvbS9jeXBoZXJpdW0vd2FsbGV0YXBwL3NyYy9hcHAvcGFnZXMvd2FsbGV0LW5hbWUvd2FsbGV0LW5hbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy93YWxsZXQtbmFtZS93YWxsZXQtbmFtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2FsbGV0LW5hbWUvd2FsbGV0LW5hbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhbGxldC1tb2RpZnktY29udGVudCB7XG4gICAgcGFkZGluZzogMTBweCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xufSIsIi53YWxsZXQtbW9kaWZ5LWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4IHZhcigtLXBhZ2UtcGFkZGluZyk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/wallet-name/wallet-name.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/wallet-name/wallet-name.page.ts ***!
    \*******************************************************/

  /*! exports provided: WalletNamePage */

  /***/
  function srcAppPagesWalletNameWalletNamePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletNamePage", function () {
      return WalletNamePage;
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


    var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/helper/helper.service */
    "./src/app/providers/helper/helper.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/ngx/index.js");

    var WalletNamePage =
    /*#__PURE__*/
    function () {
      function WalletNamePage(global, helper, keyboard, navCtrl) {
        _classCallCheck(this, WalletNamePage);

        this.global = global;
        this.helper = helper;
        this.keyboard = keyboard;
        this.navCtrl = navCtrl;
        this.wallet = {};
        this.walletName = "";
        this.walletNameError = "";
      }

      _createClass(WalletNamePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.wallet = this.global.gWalletList[this.global.currentWalletIndex];
          this.walletName = this.wallet.name;
        }
      }, {
        key: "checkWalletName",
        value: function checkWalletName() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var error;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.walletNameError = "";

                    if (this.walletName) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 4;
                    return this.helper.getTranslate('WALLET_NAME_EMPTY');

                  case 4:
                    error = _context.sent;
                    this.walletNameError = error;

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "doSave",
        value: function doSave() {
          this.wallet.name = this.walletName;
          this.helper.saveWallet();
          this.navCtrl.pop();
        }
      }, {
        key: "hideKeyboard",
        value: function hideKeyboard(e) {
          if (e && (e.key === "Enter" || e.key === "Return")) {
            this.keyboard.hide();
          }
        }
      }]);

      return WalletNamePage;
    }();

    WalletNamePage.ctorParameters = function () {
      return [{
        type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
      }, {
        type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }, {
        type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    WalletNamePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wallet-name',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wallet-name.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-name/wallet-name.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wallet-name.page.scss */
      "./src/app/pages/wallet-name/wallet-name.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], WalletNamePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-wallet-name-wallet-name-module-es5.js.map