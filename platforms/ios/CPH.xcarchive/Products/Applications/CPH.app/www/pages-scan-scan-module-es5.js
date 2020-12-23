function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-scan-scan-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scan/scan.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scan/scan.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesScanScanPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-title>{{ 'SCAN' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{'qrscanner':isShow}\">\n    <div class=\"area\"></div>\n    <div class=\"line\"></div>\n</ion-content>\n\n<ion-footer *ngIf=\"showIcon\">\n    <div class=\"warp-icon\" tappable (click)=\"close()\">\n        <img src=\"./assets/imgs/qrscanner/close.svg\" alt=\"\">\n        <span translate=\"\">CANCEL</span>\n    </div>\n    <div class=\"warp-icon\" tappable (click)=\"toggleLight()\">\n        <img src=\"./assets/imgs/qrscanner/flashlight.svg\" alt=\"\">\n        <span translate=\"\">TORCH</span>\n    </div>\n</ion-footer>\n\n<app-alert [title]=\"alertTitle\" [desc]=\"alertDesc\" *ngIf=\"ifShowAlert\" cancelText=\"{{ 'CANCEL' | translate }}\"\n    (cancel)=\"cancelAlert()\" confirmText=\"{{ 'CONFIRM' | translate }}\" (confirm)=\"confirmAlert()\">\n</app-alert>";
    /***/
  },

  /***/
  "./src/app/pages/scan/scan.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/scan/scan.module.ts ***!
    \*******************************************/

  /*! exports provided: ScanPageModule */

  /***/
  function srcAppPagesScanScanModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScanPageModule", function () {
      return ScanPageModule;
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


    var _scan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./scan.page */
    "./src/app/pages/scan/scan.page.ts");
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
      component: _scan_page__WEBPACK_IMPORTED_MODULE_6__["ScanPage"]
    }];

    var ScanPageModule = function ScanPageModule() {
      _classCallCheck(this, ScanPageModule);
    };

    ScanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_scan_page__WEBPACK_IMPORTED_MODULE_6__["ScanPage"]]
    })], ScanPageModule);
    /***/
  },

  /***/
  "./src/app/pages/scan/scan.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/scan/scan.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesScanScanPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-app.cameraView,\nion-app.cameraView .nav-decor {\n  background: transparent none !important;\n}\nion-app.cameraView .tabbar.show-tabbar,\nion-app.cameraView .nav-decor .tabbar.show-tabbar {\n  opacity: 0;\n}\nion-app.cameraView ion-content {\n  --background: transparent none !important;\n}\n.qrscanner {\n  background: none;\n}\n.qrscanner .area {\n  margin-top: 30px;\n  width: 100%;\n  height: 90%;\n  background: url('scanner.svg') no-repeat center center;\n  background-size: contain;\n}\n.qrscanner .line {\n  left: 25%;\n  width: 50%;\n  height: 2px;\n  background: red;\n  position: absolute;\n  -webkit-animation: myfirst 2s linear infinite alternate;\n          animation: myfirst 2s linear infinite alternate;\n}\n@-webkit-keyframes myfirst {\n  0% {\n    background: red;\n    top: 34%;\n  }\n  25% {\n    background: yellow;\n    top: 40%;\n  }\n  50% {\n    background: blue;\n    top: 46%;\n  }\n  75% {\n    background: green;\n    top: 52%;\n  }\n  100% {\n    background: red;\n    top: 60%;\n  }\n}\n@keyframes myfirst {\n  0% {\n    background: red;\n    top: 34%;\n  }\n  25% {\n    background: yellow;\n    top: 40%;\n  }\n  50% {\n    background: blue;\n    top: 46%;\n  }\n  75% {\n    background: green;\n    top: 52%;\n  }\n  100% {\n    background: red;\n    top: 60%;\n  }\n}\nion-footer {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  padding: 22px;\n}\nion-footer .warp-icon {\n  width: 54px;\n  height: 54px;\n  background: #fff;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-footer .warp-icon span {\n  position: absolute;\n  margin-top: 38px;\n  font-size: 12px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jeXBoZXIwMS9nby9zcmMvZ2l0aHViLmNvbS9jeXBoZXJpdW0vd2FsbGV0YXBwL3NyYy9hcHAvcGFnZXMvc2Nhbi9zY2FuLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2Nhbi9zY2FuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSx1Q0FBQTtBQ0NKO0FEQ0k7O0VBQ0ksVUFBQTtBQ0VSO0FERUE7RUFDSSx5Q0FBQTtBQ0NKO0FESUE7RUFDSSxnQkFBQTtBQ0RKO0FER0k7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0RBQUE7RUFDQSx3QkFBQTtBQ0RSO0FESUk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtVQUFBLCtDQUFBO0FDRlI7QURLSTtFQUNJO0lBQ0ksZUFBQTtJQUNBLFFBQUE7RUNIVjtFRE1NO0lBQ0ksa0JBQUE7SUFDQSxRQUFBO0VDSlY7RURPTTtJQUNJLGdCQUFBO0lBQ0EsUUFBQTtFQ0xWO0VEUU07SUFDSSxpQkFBQTtJQUNBLFFBQUE7RUNOVjtFRFNNO0lBQ0ksZUFBQTtJQUNBLFFBQUE7RUNQVjtBQUNGO0FEakJJO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsUUFBQTtFQ0hWO0VETU07SUFDSSxrQkFBQTtJQUNBLFFBQUE7RUNKVjtFRE9NO0lBQ0ksZ0JBQUE7SUFDQSxRQUFBO0VDTFY7RURRTTtJQUNJLGlCQUFBO0lBQ0EsUUFBQTtFQ05WO0VEU007SUFDSSxlQUFBO0lBQ0EsUUFBQTtFQ1BWO0FBQ0Y7QURXQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQ1JKO0FEVUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1JSO0FEVVE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNSWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjYW4vc2Nhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXBwLmNhbWVyYVZpZXcsXG5pb24tYXBwLmNhbWVyYVZpZXcgLm5hdi1kZWNvciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbm9uZSAhaW1wb3J0YW50O1xuXG4gICAgLnRhYmJhci5zaG93LXRhYmJhciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuXG5pb24tYXBwLmNhbWVyYVZpZXcgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbm9uZSAhaW1wb3J0YW50O1xufVxuXG5cbi8vIHBhZ2Utc2NhbiB7XG4ucXJzY2FubmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuXG4gICAgLmFyZWEge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9xcnNjYW5uZXIvc2Nhbm5lci5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgfVxuXG4gICAgLmxpbmUge1xuICAgICAgICBsZWZ0OiAyNSU7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYW5pbWF0aW9uOiBteWZpcnN0IDJzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBteWZpcnN0IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgdG9wOiAzNCU7XG4gICAgICAgIH1cblxuICAgICAgICAyNSUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogeWVsbG93O1xuICAgICAgICAgICAgdG9wOiA0MCU7XG4gICAgICAgIH1cblxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICAgICAgICAgIHRvcDogNDYlO1xuICAgICAgICB9XG5cbiAgICAgICAgNzUlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgICAgICAgICAgdG9wOiA1MiU7XG4gICAgICAgIH1cblxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICAgIHRvcDogNjAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHBhZGRpbmc6IDIycHg7XG5cbiAgICAud2FycC1pY29uIHtcbiAgICAgICAgd2lkdGg6IDU0cHg7XG4gICAgICAgIGhlaWdodDogNTRweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDM4cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gfSIsImlvbi1hcHAuY2FtZXJhVmlldyxcbmlvbi1hcHAuY2FtZXJhVmlldyAubmF2LWRlY29yIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbm9uZSAhaW1wb3J0YW50O1xufVxuaW9uLWFwcC5jYW1lcmFWaWV3IC50YWJiYXIuc2hvdy10YWJiYXIsXG5pb24tYXBwLmNhbWVyYVZpZXcgLm5hdi1kZWNvciAudGFiYmFyLnNob3ctdGFiYmFyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuaW9uLWFwcC5jYW1lcmFWaWV3IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5xcnNjYW5uZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLnFyc2Nhbm5lciAuYXJlYSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL3Fyc2Nhbm5lci9zY2FubmVyLnN2Zykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbi5xcnNjYW5uZXIgLmxpbmUge1xuICBsZWZ0OiAyNSU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYW5pbWF0aW9uOiBteWZpcnN0IDJzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5Aa2V5ZnJhbWVzIG15Zmlyc3Qge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIHRvcDogMzQlO1xuICB9XG4gIDI1JSB7XG4gICAgYmFja2dyb3VuZDogeWVsbG93O1xuICAgIHRvcDogNDAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICB0b3A6IDQ2JTtcbiAgfVxuICA3NSUge1xuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIHRvcDogNTIlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICB0b3A6IDYwJTtcbiAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDIycHg7XG59XG5pb24tZm9vdGVyIC53YXJwLWljb24ge1xuICB3aWR0aDogNTRweDtcbiAgaGVpZ2h0OiA1NHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWZvb3RlciAud2FycC1pY29uIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDM4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/scan/scan.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/scan/scan.page.ts ***!
    \*****************************************/

  /*! exports provided: ScanPage */

  /***/
  function srcAppPagesScanScanPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScanPage", function () {
      return ScanPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/qr-scanner/ngx */
    "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
    /* harmony import */


    var _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/open-native-settings/ngx */
    "./node_modules/@ionic-native/open-native-settings/ngx/index.js");

    var ScanPage =
    /*#__PURE__*/
    function () {
      function ScanPage(navCtrl, events, // private global: GlobalProvider,
      openSetting, qrScanner) {
        _classCallCheck(this, ScanPage);

        this.navCtrl = navCtrl;
        this.events = events;
        this.openSetting = openSetting;
        this.qrScanner = qrScanner;
        this.light = false; // 判断闪光灯

        this.isShow = false; // 控制显示背景，避免切换页面卡顿

        this.showIcon = false;
        this.ifShowAlert = false;
      }

      _createClass(ScanPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.qrScanner.prepare().then(function (status) {
            if (status.authorized) {
              // 判断是否有摄像头权限
              var scanSub = _this.qrScanner.scan().subscribe(function (text) {
                _this.events.publish('qrscanner:result', text);

                scanSub.unsubscribe();
                _this.ifShowAlert = false;
                setTimeout(function () {
                  _this.navCtrl.pop();
                }, 100);
              }); // 打开摄像头


              _this.qrScanner.show();
            } else if (status.denied) {
              _this.permisionPopUp(); // this.nativeService.alert('没有权限', '没有摄像头权限，请前往设置中开启', () => {
              // this.qrScanner.openSettings();
              // });

            } else {
              _this.permisionPopUp(); // this.nativeService.alert('没有权限', '没有摄像头权限，请前往设置中开启', () => {
              // this.qrScanner.openSettings();
              // });

            }
          }).catch(function (e) {
            console.log("catch.........");

            _this.permisionPopUp();
          });
        }
      }, {
        key: "permisionPopUp",
        value: function permisionPopUp() {
          var _this2 = this;

          this.createAlert("权限申请", "扫码需要获取摄像头权限", "取消", "同意", function () {
            _this2.navCtrl.pop();
          }, function () {
            _this2.navCtrl.pop();

            _this2.qrScanner.openSettings(); // this.openSetting.open('application_details');

          }); // let promises = [
          //     this.global.getTranslate('PERMISIONCAMERA'),
          //     this.global.getTranslate("GETPERMISIONCAMERA"),
          //     this.global.getTranslate("DENY"),
          //     this.global.getTranslate("ALLOW")
          // ];
          // Promise.all(promises)
          //     .then((text: any) => {
          //         this.createAlert(text[0], text[1], text[2], text[3], () => {
          //             console.log("用户拒绝授予权限");
          //             this.navCtrl.pop();
          //         }, () => {
          //             console.log("用户同意授予权限")
          //             this.navCtrl.pop();
          //             this.qrScanner.openSettings();
          //             // this.openSetting.open('application_details');
          //         });
          //     })
        }
      }, {
        key: "createAlert",
        value: function createAlert(title, message) {
          var _this3 = this;

          var cancelText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var confirmText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
          var cancelAlert = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
          var confirmAlert = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {};
          this.alertTitle = title;
          this.alertDesc = message;
          this.alertCancelText = cancelText;
          this.alertConfirmText = confirmText;

          this.confirmAlert = function () {
            confirmAlert();

            _this3.closeAlert();
          };

          this.cancelAlert = function () {
            _this3.closeAlert();

            cancelAlert();
          };

          this.ifShowAlert = true;
        }
      }, {
        key: "closeAlert",
        value: function closeAlert() {
          this.ifShowAlert = false;
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          window.document.querySelector('ion-app').classList.add('cameraView'); // tslint:disable-line

          this.isShow = true; // 显示背景

          this.showIcon = true;
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          window.document.querySelector('ion-app').classList.remove('cameraView'); // tslint:disable-line

          this.qrScanner.hide(); // 需要关闭扫描，否则相机一直开着

          this.qrScanner.destroy(); // 关闭

          this.showIcon = false;
          this.events.unsubscribe('qrscanner:result'); // 退出页面取消所有订阅，进入页面前需订阅
        } // 开关手电筒

      }, {
        key: "toggleLight",
        value: function toggleLight() {
          this.light ? this.qrScanner.disableLight() : this.qrScanner.enableLight();
          this.light = !this.light;
        } // 取消扫描

      }, {
        key: "close",
        value: function close() {
          this.navCtrl.pop();
        }
      }]);

      return ScanPage;
    }();

    ScanPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_4__["OpenNativeSettings"]
      }, {
        type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["QRScanner"]
      }];
    };

    ScanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scan',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./scan.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scan/scan.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./scan.page.scss */
      "./src/app/pages/scan/scan.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_4__["OpenNativeSettings"], _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["QRScanner"]])], ScanPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-scan-scan-module-es5.js.map