function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutAboutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ 'ABOUTUS' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"gray-content\">\n    <div class=\"main\">\n        <div class=\"title\">\n            <div class=\"logo\">\n                <img src=\"assets/imgs/cypherium-full-logo.svg\" alt=\"\">\n                <p class=\"name\">{{ name }}</p>\n                <p class=\"version\">V {{ version }}</p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"item-list\">\n        <div class=\"item\">\n            <div class=\"label\">Website</div>\n            <div class=\"content\">www.cph.org</div>\n            <div class=\"next\"></div>\n        </div>\n        <div class=\"item\" (click)=\"update()\" tappable>\n            <div class=\"label\" translate=\"\">VERSION_UPDATE</div>\n        </div>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/about/about.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/about/about.module.ts ***!
    \*********************************************/

  /*! exports provided: AboutPageModule */

  /***/
  function srcAppPagesAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageModule", function () {
      return AboutPageModule;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _about_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./about.page */
    "./src/app/pages/about/about.page.ts");

    var routes = [{
      path: '',
      component: _about_page__WEBPACK_IMPORTED_MODULE_7__["AboutPage"]
    }];

    var AboutPageModule = function AboutPageModule() {
      _classCallCheck(this, AboutPageModule);
    };

    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_about_page__WEBPACK_IMPORTED_MODULE_7__["AboutPage"]]
    })], AboutPageModule);
    /***/
  },

  /***/
  "./src/app/pages/about/about.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/about/about.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAboutAboutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title {\n  padding-top: 66px;\n  padding-bottom: 10px;\n}\n.title .logo {\n  text-align: center;\n}\n.title .logo img {\n  width: 100px;\n}\n.title .name {\n  font-size: 16px;\n  color: #000000;\n  line-height: 40px;\n}\n.title .version {\n  font-size: 12px;\n  color: #8E8E8E;\n  line-height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93c3MvZ28vc3JjL2dpdGh1Yi5jb20vY3lwaGVyaXVtL3dhbGxldGFwcC9zcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtBQ0NSO0FEQ1E7RUFDSSxZQUFBO0FDQ1o7QURHSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNEUjtBRElJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogNjZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuICAgIC5sb2dvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC52ZXJzaW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzhFOEU4RTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgfVxufSIsIi50aXRsZSB7XG4gIHBhZGRpbmctdG9wOiA2NnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi50aXRsZSAubG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50aXRsZSAubG9nbyBpbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG4udGl0bGUgLm5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cbi50aXRsZSAudmVyc2lvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4RThFOEU7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/about/about.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/about/about.page.ts ***!
    \*******************************************/

  /*! exports provided: AboutPage */

  /***/
  function srcAppPagesAboutAboutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
      return AboutPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../providers/global/global.service */
    "./src/app/providers/global/global.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../providers/native/native.service */
    "./src/app/providers/native/native.service.ts");

    var AboutPage =
    /*#__PURE__*/
    function () {
      function AboutPage(router, global, storage, helper, navCtrl, platform, native, activeRouter) {
        _classCallCheck(this, AboutPage);

        this.router = router;
        this.global = global;
        this.storage = storage;
        this.helper = helper;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.native = native;
        this.activeRouter = activeRouter;
        this.name = "";
        this.version = "";
        this.packageName = "";
      }

      _createClass(AboutPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.platform.is('cordova')) {
            this.native.getAppVersionInfo().subscribe(function (res) {
              console.log("Get version：" + JSON.stringify(res));
              _this.version = res.versionNumber;
              _this.name = res.name;
              _this.packageName = res.packageName;
            });
          } else {
            this.version = '1.0.0';
            this.packageName = "com.cph.www";
            this.name = "CPH";
          }
        }
      }, {
        key: "update",
        value: function update() {
          if (this.platform.is('android')) {
            window.open("market://details?id=".concat(this.packageName), '_system');
          } else {
            window.open("https://itunes.apple.com/cn/app/id1466591583?mt=8");
          }
        }
      }]);

      return AboutPage;
    }();

    AboutPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.page.scss */
      "./src/app/pages/about/about.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _providers_global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], AboutPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-about-about-module-es5.js.map