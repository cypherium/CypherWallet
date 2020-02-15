function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-setting-setting-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/setting/setting.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/setting/setting.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsSettingSettingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-title>{{ 'MINE' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"gray-content\">\n    <!-- <div class=\"header\">\n        <div class=\"title\">{{ 'MINE' | translate }}</div>\n    </div> -->\n\n    <div class=\"item-list\">\n        <div class=\"item\" (click)=\"goSetValueUnitPage()\">\n            <div class=\"icon icon-unit\" tappable></div>\n            <div class=\"label\" translate>PRICE_UNIT</div>\n            <div class=\"content\">{{ getCurrency().currency }}({{ getCurrency().symbol }})</div>\n            <div class=\"next\"></div>\n        </div>\n        <div class=\"item\" tappable (click)=\"goSetLanguagePage()\">\n            <div class=\"icon icon-language\"></div>\n            <div class=\"label\" translate>LANGUAGE</div>\n            <div class=\"content\" *ngIf=\"global.settings.language == 'cn'\">简体中文</div>\n            <div class=\"content\" *ngIf=\"global.settings.language == 'en'\">English</div>\n            <div class=\"next\"></div>\n        </div>\n        <div class=\"item\" tappable (click)=\"goWalletToolPage()\">\n            <div class=\"icon icon-wallet\"></div>\n            <div class=\"label\" translate>WALLET_TOOL</div>\n            <div class=\"content\"></div>\n            <div class=\"next\"></div>\n        </div>\n        <div class=\"item\" tappable (click)=\"goChangePassword()\">\n            <div class=\"icon icon-password\"></div>\n            <div class=\"label\" translate>PAYMENT_PASSWORD</div>\n            <div class=\"content\"></div>\n            <div class=\"next\"></div>\n        </div>\n    </div>\n\n    <div class=\"item-list\" (click)=\"goBrowser()\">\n        <div class=\"item\">\n            <div class=\"icon icon-browser\"></div>\n            <div class=\"label\" translate>BLOCKCHAIN_BROWSER</div>\n            <div class=\"content\"></div>\n            <div class=\"next\"></div>\n        </div>\n    </div>\n\n    <div class=\"item-list\" tappable (click)=\"goAboutPage()\">\n        <div class=\"item\">\n            <div class=\"icon icon-about\"></div>\n            <div class=\"label\" translate>ABOUTUS</div>\n            <div class=\"content\"></div>\n            <div class=\"next\"></div>\n        </div>\n    </div>\n</ion-content>\n\n<app-my-tabs tab=\"setting\"></app-my-tabs>";
    /***/
  },

  /***/
  "./src/app/pages/tabs/setting/setting.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/tabs/setting/setting.module.ts ***!
    \******************************************************/

  /*! exports provided: SettingPageModule */

  /***/
  function srcAppPagesTabsSettingSettingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPageModule", function () {
      return SettingPageModule;
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
    /*! ../../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _setting_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./setting.page */
    "./src/app/pages/tabs/setting/setting.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: '',
      component: _setting_page__WEBPACK_IMPORTED_MODULE_7__["SettingPage"]
    }];

    var SettingPageModule = function SettingPageModule() {
      _classCallCheck(this, SettingPageModule);
    };

    SettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_7__["SettingPage"]]
    })], SettingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs/setting/setting.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/tabs/setting/setting.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTabsSettingSettingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  height: 44px;\n  line-height: 44px;\n  font-size: 17px;\n  color: #030303;\n  border-bottom: 1px solid #f1f1f1;\n  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);\n  background: #fff;\n  text-align: center;\n}\n\n.item-list {\n  margin-top: 10px;\n}\n\n.item .icon {\n  width: 22px;\n  height: 22px;\n  background: url('dollar.svg') center center no-repeat;\n  background-size: contain;\n  margin-right: 10px;\n}\n\n.item .icon.icon-language {\n  background-image: url('language.svg');\n}\n\n.item .icon.icon-wallet {\n  background-image: url('password.svg');\n}\n\n.item .icon.icon-password {\n  background-image: url('lock.svg');\n}\n\n.item .icon.icon-browser {\n  background-image: url('browser.svg');\n}\n\n.item .icon.icon-about {\n  background-image: url('about.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93c3MvZ28vc3JjL2dpdGh1Yi5jb20vY3lwaGVyaXVtL3dhbGxldGFwcC9zcmMvYXBwL3BhZ2VzL3RhYnMvc2V0dGluZy9zZXR0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy9zZXR0aW5nL3NldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7QUNESjs7QURLSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FDRlI7O0FESVE7RUFDSSxxQ0FBQTtBQ0ZaOztBREtRO0VBQ0kscUNBQUE7QUNIWjs7QURNUTtFQUNJLGlDQUFBO0FDSlo7O0FET1E7RUFDSSxvQ0FBQTtBQ0xaOztBRFFRO0VBQ0ksa0NBQUE7QUNOWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvc2V0dGluZy9zZXR0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwYWdlUGFkZGluZzogMThweDtcblxuLmhlYWRlciB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogIzAzMDMwMztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjEwKTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLml0ZW0tbGlzdCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLml0ZW0ge1xuICAgIC5pY29uIHtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2RvbGxhci5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgICAgICAmLmljb24tbGFuZ3VhZ2Uge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2xhbmd1YWdlLnN2Zyk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmljb24td2FsbGV0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9wYXNzd29yZC5zdmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pY29uLXBhc3N3b3JkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9sb2NrLnN2Zyk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmljb24tYnJvd3NlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYnJvd3Nlci5zdmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pY29uLWFib3V0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9hYm91dC5zdmcpO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5oZWFkZXIge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDMwMzAzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaXRlbS1saXN0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLml0ZW0gLmljb24ge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvZG9sbGFyLnN2ZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLml0ZW0gLmljb24uaWNvbi1sYW5ndWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9sYW5ndWFnZS5zdmcpO1xufVxuLml0ZW0gLmljb24uaWNvbi13YWxsZXQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcGFzc3dvcmQuc3ZnKTtcbn1cbi5pdGVtIC5pY29uLmljb24tcGFzc3dvcmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvbG9jay5zdmcpO1xufVxuLml0ZW0gLmljb24uaWNvbi1icm93c2VyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2Jyb3dzZXIuc3ZnKTtcbn1cbi5pdGVtIC5pY29uLmljb24tYWJvdXQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYWJvdXQuc3ZnKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/tabs/setting/setting.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/tabs/setting/setting.page.ts ***!
    \****************************************************/

  /*! exports provided: SettingPage */

  /***/
  function srcAppPagesTabsSettingSettingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPage", function () {
      return SettingPage;
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
    /*! ../../../providers/global/global.service */
    "./src/app/providers/global/global.service.ts");
    /* harmony import */


    var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/helper/helper.service */
    "./src/app/providers/helper/helper.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../providers/http/http.service */
    "./src/app/providers/http/http.service.ts");

    var SettingPage =
    /*#__PURE__*/
    function () {
      function SettingPage(router, global, storage, helper, http, activeRouter) {
        _classCallCheck(this, SettingPage);

        this.router = router;
        this.global = global;
        this.storage = storage;
        this.helper = helper;
        this.http = http;
        this.activeRouter = activeRouter;
        this.displayValue = {};
        this.rateList = [];
      }

      _createClass(SettingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.http.get(this.global.api['getRateInfo']).subscribe(function (res) {
            var unit = _this.global.settings.valueUnit;
            _this.rateList = res.rates;
          });
        }
      }, {
        key: "getCurrency",
        value: function getCurrency() {
          if (this.rateList.length > 0) {
            var unit = this.global.settings.valueUnit;
            var value = this.rateList.find(function (item) {
              return item.currency == unit;
            });

            if (!value) {
              value = this.rateList[0];
            }

            return value;
          } else {
            return {
              symbol: "$",
              currency: "USD"
            };
          }
        }
      }, {
        key: "goSetValueUnitPage",
        value: function goSetValueUnitPage() {
          this.router.navigate(['value-unit']);
        }
      }, {
        key: "goSetLanguagePage",
        value: function goSetLanguagePage() {
          this.router.navigate(['language-toggle']);
        }
      }, {
        key: "goAboutPage",
        value: function goAboutPage() {
          this.router.navigate(['about']);
        }
      }, {
        key: "goBrowser",
        value: function goBrowser() {
          window.open('http://scan.cph.com');
        }
      }, {
        key: "goWalletToolPage",
        value: function goWalletToolPage() {
          this.router.navigate(['wallet-admin']);
        }
      }, {
        key: "goChangePassword",
        value: function goChangePassword() {
          this.router.navigate(['change-password']);
        }
      }]);

      return SettingPage;
    }();

    SettingPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }, {
        type: _providers_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    SettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-setting',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./setting.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/setting/setting.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./setting.page.scss */
      "./src/app/pages/tabs/setting/setting.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"], _providers_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], SettingPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-tabs-setting-setting-module-es5.js.map