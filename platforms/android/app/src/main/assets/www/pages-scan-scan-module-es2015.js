(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-scan-scan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scan/scan.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scan/scan.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>{{ 'SCAN' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{'qrscanner':isShow}\">\n    <div class=\"area\"></div>\n    <div class=\"line\"></div>\n</ion-content>\n\n<ion-footer *ngIf=\"showIcon\">\n    <div class=\"warp-icon\" tappable (click)=\"close()\">\n        <img src=\"./assets/imgs/qrscanner/close.svg\" alt=\"\">\n        <span translate=\"\">CANCEL</span>\n    </div>\n    <div class=\"warp-icon\" tappable (click)=\"toggleLight()\">\n        <img src=\"./assets/imgs/qrscanner/flashlight.svg\" alt=\"\">\n        <span translate=\"\">TORCH</span>\n    </div>\n</ion-footer>\n\n<app-alert [title]=\"alertTitle\" [desc]=\"alertDesc\" *ngIf=\"ifShowAlert\" cancelText=\"{{ 'CANCEL' | translate }}\"\n    (cancel)=\"cancelAlert()\" confirmText=\"{{ 'CONFIRM' | translate }}\" (confirm)=\"confirmAlert()\">\n</app-alert>");

/***/ }),

/***/ "./src/app/pages/scan/scan.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/scan/scan.module.ts ***!
  \*******************************************/
/*! exports provided: ScanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPageModule", function() { return ScanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _scan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scan.page */ "./src/app/pages/scan/scan.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _scan_page__WEBPACK_IMPORTED_MODULE_6__["ScanPage"]
    }
];
let ScanPageModule = class ScanPageModule {
};
ScanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_scan_page__WEBPACK_IMPORTED_MODULE_6__["ScanPage"]]
    })
], ScanPageModule);



/***/ }),

/***/ "./src/app/pages/scan/scan.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/scan/scan.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-app.cameraView,\nion-app.cameraView .nav-decor {\n  background: transparent none !important;\n}\nion-app.cameraView .tabbar.show-tabbar,\nion-app.cameraView .nav-decor .tabbar.show-tabbar {\n  opacity: 0;\n}\nion-app.cameraView ion-content {\n  --background: transparent none !important;\n}\n.qrscanner {\n  background: none;\n}\n.qrscanner .area {\n  margin-top: 30px;\n  width: 100%;\n  height: 90%;\n  background: url('scanner.svg') no-repeat center center;\n  background-size: contain;\n}\n.qrscanner .line {\n  left: 25%;\n  width: 50%;\n  height: 2px;\n  background: red;\n  position: absolute;\n  -webkit-animation: myfirst 2s linear infinite alternate;\n          animation: myfirst 2s linear infinite alternate;\n}\n@-webkit-keyframes myfirst {\n  0% {\n    background: red;\n    top: 34%;\n  }\n  25% {\n    background: yellow;\n    top: 40%;\n  }\n  50% {\n    background: blue;\n    top: 46%;\n  }\n  75% {\n    background: green;\n    top: 52%;\n  }\n  100% {\n    background: red;\n    top: 60%;\n  }\n}\n@keyframes myfirst {\n  0% {\n    background: red;\n    top: 34%;\n  }\n  25% {\n    background: yellow;\n    top: 40%;\n  }\n  50% {\n    background: blue;\n    top: 46%;\n  }\n  75% {\n    background: green;\n    top: 52%;\n  }\n  100% {\n    background: red;\n    top: 60%;\n  }\n}\nion-footer {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  padding: 22px;\n}\nion-footer .warp-icon {\n  width: 54px;\n  height: 54px;\n  background: #fff;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-footer .warp-icon span {\n  position: absolute;\n  margin-top: 38px;\n  font-size: 12px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93c3MvZ28vc3JjL2dpdGh1Yi5jb20vY3lwaGVyaXVtL3dhbGxldGFwcC9zcmMvYXBwL3BhZ2VzL3NjYW4vc2Nhbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NjYW4vc2Nhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksdUNBQUE7QUNDSjtBRENJOztFQUNJLFVBQUE7QUNFUjtBREVBO0VBQ0kseUNBQUE7QUNDSjtBRElBO0VBQ0ksZ0JBQUE7QUNESjtBREdJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNEQUFBO0VBQ0Esd0JBQUE7QUNEUjtBRElJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7VUFBQSwrQ0FBQTtBQ0ZSO0FES0k7RUFDSTtJQUNJLGVBQUE7SUFDQSxRQUFBO0VDSFY7RURNTTtJQUNJLGtCQUFBO0lBQ0EsUUFBQTtFQ0pWO0VET007SUFDSSxnQkFBQTtJQUNBLFFBQUE7RUNMVjtFRFFNO0lBQ0ksaUJBQUE7SUFDQSxRQUFBO0VDTlY7RURTTTtJQUNJLGVBQUE7SUFDQSxRQUFBO0VDUFY7QUFDRjtBRGpCSTtFQUNJO0lBQ0ksZUFBQTtJQUNBLFFBQUE7RUNIVjtFRE1NO0lBQ0ksa0JBQUE7SUFDQSxRQUFBO0VDSlY7RURPTTtJQUNJLGdCQUFBO0lBQ0EsUUFBQTtFQ0xWO0VEUU07SUFDSSxpQkFBQTtJQUNBLFFBQUE7RUNOVjtFRFNNO0lBQ0ksZUFBQTtJQUNBLFFBQUE7RUNQVjtBQUNGO0FEV0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUNSSjtBRFVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNSUjtBRFVRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDUloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zY2FuL3NjYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWFwcC5jYW1lcmFWaWV3LFxuaW9uLWFwcC5jYW1lcmFWaWV3IC5uYXYtZGVjb3Ige1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vbmUgIWltcG9ydGFudDtcblxuICAgIC50YWJiYXIuc2hvdy10YWJiYXIge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuaW9uLWFwcC5jYW1lcmFWaWV3IGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vbmUgIWltcG9ydGFudDtcbn1cblxuXG4vLyBwYWdlLXNjYW4ge1xuLnFyc2Nhbm5lciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcblxuICAgIC5hcmVhIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcXJzY2FubmVyL3NjYW5uZXIuc3ZnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIH1cblxuICAgIC5saW5lIHtcbiAgICAgICAgbGVmdDogMjUlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGFuaW1hdGlvbjogbXlmaXJzdCAycyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgbXlmaXJzdCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICAgIHRvcDogMzQlO1xuICAgICAgICB9XG5cbiAgICAgICAgMjUlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgICAgIHRvcDogNDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsdWU7XG4gICAgICAgICAgICB0b3A6IDQ2JTtcbiAgICAgICAgfVxuXG4gICAgICAgIDc1JSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICAgIHRvcDogNTIlO1xuICAgICAgICB9XG5cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICB0b3A6IDYwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwYWRkaW5nOiAyMnB4O1xuXG4gICAgLndhcnAtaWNvbiB7XG4gICAgICAgIHdpZHRoOiA1NHB4O1xuICAgICAgICBoZWlnaHQ6IDU0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzOHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIH0iLCJpb24tYXBwLmNhbWVyYVZpZXcsXG5pb24tYXBwLmNhbWVyYVZpZXcgLm5hdi1kZWNvciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vbmUgIWltcG9ydGFudDtcbn1cbmlvbi1hcHAuY2FtZXJhVmlldyAudGFiYmFyLnNob3ctdGFiYmFyLFxuaW9uLWFwcC5jYW1lcmFWaWV3IC5uYXYtZGVjb3IgLnRhYmJhci5zaG93LXRhYmJhciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbmlvbi1hcHAuY2FtZXJhVmlldyBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucXJzY2FubmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5xcnNjYW5uZXIgLmFyZWEge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9xcnNjYW5uZXIvc2Nhbm5lci5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG4ucXJzY2FubmVyIC5saW5lIHtcbiAgbGVmdDogMjUlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFuaW1hdGlvbjogbXlmaXJzdCAycyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuQGtleWZyYW1lcyBteWZpcnN0IHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICB0b3A6IDM0JTtcbiAgfVxuICAyNSUge1xuICAgIGJhY2tncm91bmQ6IHllbGxvdztcbiAgICB0b3A6IDQwJTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQ6IGJsdWU7XG4gICAgdG9wOiA0NiU7XG4gIH1cbiAgNzUlIHtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICB0b3A6IDUyJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgdG9wOiA2MCU7XG4gIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nOiAyMnB4O1xufVxuaW9uLWZvb3RlciAud2FycC1pY29uIHtcbiAgd2lkdGg6IDU0cHg7XG4gIGhlaWdodDogNTRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1mb290ZXIgLndhcnAtaWNvbiBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAzOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/scan/scan.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/scan/scan.page.ts ***!
  \*****************************************/
/*! exports provided: ScanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPage", function() { return ScanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/open-native-settings/ngx */ "./node_modules/@ionic-native/open-native-settings/ngx/index.js");





let ScanPage = class ScanPage {
    constructor(navCtrl, events, 
    // private global: GlobalProvider,
    openSetting, qrScanner) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.openSetting = openSetting;
        this.qrScanner = qrScanner;
        this.light = false; // 判断闪光灯
        this.isShow = false; // 控制显示背景，避免切换页面卡顿
        this.showIcon = false;
        this.ifShowAlert = false;
    }
    ngOnInit() {
        this.qrScanner.prepare().then((status) => {
            if (status.authorized) { // 判断是否有摄像头权限
                let scanSub = this.qrScanner.scan().subscribe((text) => {
                    this.events.publish('qrscanner:result', text);
                    scanSub.unsubscribe();
                    this.ifShowAlert = false;
                    setTimeout(() => {
                        this.navCtrl.pop();
                    }, 100);
                });
                // 打开摄像头
                this.qrScanner.show();
            }
            else if (status.denied) {
                this.permisionPopUp();
                // this.nativeService.alert('没有权限', '没有摄像头权限，请前往设置中开启', () => {
                // this.qrScanner.openSettings();
                // });
            }
            else {
                this.permisionPopUp();
                // this.nativeService.alert('没有权限', '没有摄像头权限，请前往设置中开启', () => {
                // this.qrScanner.openSettings();
                // });
            }
        }).catch((e) => {
            console.log("catch.........");
            this.permisionPopUp();
        });
    }
    permisionPopUp() {
        this.createAlert("权限申请", "扫码需要获取摄像头权限", "取消", "同意", () => {
            this.navCtrl.pop();
        }, () => {
            this.navCtrl.pop();
            this.qrScanner.openSettings();
            // this.openSetting.open('application_details');
        });
        // let promises = [
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
    createAlert(title, message, cancelText = '', confirmText = '', cancelAlert = null, confirmAlert = () => { }) {
        this.alertTitle = title;
        this.alertDesc = message;
        this.alertCancelText = cancelText;
        this.alertConfirmText = confirmText;
        this.confirmAlert = () => {
            confirmAlert();
            this.closeAlert();
        };
        this.cancelAlert = () => {
            this.closeAlert();
            cancelAlert();
        };
        this.ifShowAlert = true;
    }
    closeAlert() {
        this.ifShowAlert = false;
    }
    ionViewWillEnter() {
        window.document.querySelector('ion-app').classList.add('cameraView'); // tslint:disable-line
        this.isShow = true; // 显示背景
        this.showIcon = true;
    }
    ionViewWillLeave() {
        window.document.querySelector('ion-app').classList.remove('cameraView'); // tslint:disable-line
        this.qrScanner.hide(); // 需要关闭扫描，否则相机一直开着
        this.qrScanner.destroy(); // 关闭
        this.showIcon = false;
        this.events.unsubscribe('qrscanner:result'); // 退出页面取消所有订阅，进入页面前需订阅
    }
    // 开关手电筒
    toggleLight() {
        this.light ? this.qrScanner.disableLight() : this.qrScanner.enableLight();
        this.light = !this.light;
    }
    // 取消扫描
    close() {
        this.navCtrl.pop();
    }
};
ScanPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_4__["OpenNativeSettings"] },
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["QRScanner"] }
];
ScanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scan.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scan/scan.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scan.page.scss */ "./src/app/pages/scan/scan.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_4__["OpenNativeSettings"],
        _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["QRScanner"]])
], ScanPage);



/***/ })

}]);
//# sourceMappingURL=pages-scan-scan-module-es2015.js.map