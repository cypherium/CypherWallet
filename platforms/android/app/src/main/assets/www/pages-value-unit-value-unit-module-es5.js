function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-value-unit-value-unit-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/value-unit/value-unit.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/value-unit/value-unit.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesValueUnitValueUnitPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ 'PRICE_UNIT' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"gray-content\">\n    <div class=\"my-content\">\n        <div class=\"item-list\">\n            <div class=\"item\" *ngFor=\"let rate of rateList\" (click)=\"toggleValueUnit(rate.currency)\">\n                <div class=\"label\">{{ rate.currency }}({{ rate.symbol }})</div>\n                <div class=\"content\"></div>\n                <div class=\"selector\" *ngIf=\"global.settings.valueUnit == rate.currency\"></div>\n            </div>\n        </div>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/value-unit/value-unit.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/value-unit/value-unit.module.ts ***!
    \*******************************************************/

  /*! exports provided: ValueUnitPageModule */

  /***/
  function srcAppPagesValueUnitValueUnitModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValueUnitPageModule", function () {
      return ValueUnitPageModule;
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


    var _value_unit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./value-unit.page */
    "./src/app/pages/value-unit/value-unit.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: '',
      component: _value_unit_page__WEBPACK_IMPORTED_MODULE_6__["ValueUnitPage"]
    }];

    var ValueUnitPageModule = function ValueUnitPageModule() {
      _classCallCheck(this, ValueUnitPageModule);
    };

    ValueUnitPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_value_unit_page__WEBPACK_IMPORTED_MODULE_6__["ValueUnitPage"]]
    })], ValueUnitPageModule);
    /***/
  },

  /***/
  "./src/app/pages/value-unit/value-unit.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/value-unit/value-unit.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesValueUnitValueUnitPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZhbHVlLXVuaXQvdmFsdWUtdW5pdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/value-unit/value-unit.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/value-unit/value-unit.page.ts ***!
    \*****************************************************/

  /*! exports provided: ValueUnitPage */

  /***/
  function srcAppPagesValueUnitValueUnitPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValueUnitPage", function () {
      return ValueUnitPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _providers_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../providers/http/http.service */
    "./src/app/providers/http/http.service.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");

    var ValueUnitPage =
    /*#__PURE__*/
    function () {
      function ValueUnitPage(router, global, storage, helper, navCtrl, activeRouter, http, httpn) {
        _classCallCheck(this, ValueUnitPage);

        this.router = router;
        this.global = global;
        this.storage = storage;
        this.helper = helper;
        this.navCtrl = navCtrl;
        this.activeRouter = activeRouter;
        this.http = http;
        this.httpn = httpn;
        this.rateList = [];
      }

      _createClass(ValueUnitPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.helper.getTranslate('COMING_SOON').then(function (msg) {
            _this.helper.toast(msg);
          });
          this.http.get(this.global.api['getRateInfo']).subscribe(function (res) {
            _this.rateList = res.rates;
          }); // this.httpn.get(environment.appServerUrl + this.global.api['getRateInfo'], {}, {})
          //     .then(data => {
          //         console.log(data.status);
          //         console.log(data.data); // data received by server
          //         console.log(data.headers);
          //         console.log(JSON.parse(data.data));
          //         this.rateList = JSON.parse(data.data).rates;
          //     })
          //     .catch(error => {
          //         console.log(error.status);
          //         console.log(error.error); // error message as string
          //         console.log(error.headers);
          //     });
        }
      }, {
        key: "toggleValueUnit",
        value: function toggleValueUnit(unit) {
          if (unit != this.global.settings.valueUnit) {
            this.global.settings.valueUnit = unit;
            this.storage.set('localsetting', JSON.stringify(this.global.settings));
          }

          this.navCtrl.pop();
        }
      }]);

      return ValueUnitPage;
    }();

    ValueUnitPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _providers_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"]
      }];
    };

    ValueUnitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-value-unit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./value-unit.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/value-unit/value-unit.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./value-unit.page.scss */
      "./src/app/pages/value-unit/value-unit.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _providers_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"]])], ValueUnitPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-value-unit-value-unit-module-es5.js.map