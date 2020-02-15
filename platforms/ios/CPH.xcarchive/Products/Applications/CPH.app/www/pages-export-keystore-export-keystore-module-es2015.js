(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-export-keystore-export-keystore-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/export-keystore/export-keystore.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/export-keystore/export-keystore.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ 'EXPORT_KEYSTORE' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main\">\n        <div class=\"tips\" translate>\n            WXPORT_KEYSTORE_TIPS\n        </div>\n\n        <div class=\"textarea\">\n            {{ keystore }}\n        </div>\n    </div>\n\n    <div class=\"bottom-button\">\n        <div class=\"confirm-button\" tappble (click)=\"copyKeystore()\" translate>COPY_KEYSTORE</div>\n        <div class=\"confirm-button outline-button\" (click)=\"exportKeystoreToMiner()\" translate>EXPORT_KEYSTORE_MINER\n        </div>\n    </div>\n</ion-content>\n\n<app-generate-privatekey *ngIf=\"ifShowPasswordPrompt\" promptDesc=\"{{ 'INPUT_PASSWORD_TIPS' | translate }}\"\n    cancelText=\"{{ 'CANCEL' | translate }}\" confirmText=\"{{ 'CONFIRM' | translate }}\" (cancel)=\"cancelPrompt()\"\n    (confirm)=\"confirmPrompt($event)\"></app-generate-privatekey>");

/***/ }),

/***/ "./src/app/pages/export-keystore/export-keystore.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/export-keystore/export-keystore.module.ts ***!
  \*****************************************************************/
/*! exports provided: ExportKeystorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportKeystorePageModule", function() { return ExportKeystorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _export_keystore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./export-keystore.page */ "./src/app/pages/export-keystore/export-keystore.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _export_keystore_page__WEBPACK_IMPORTED_MODULE_6__["ExportKeystorePage"]
    }
];
let ExportKeystorePageModule = class ExportKeystorePageModule {
};
ExportKeystorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_export_keystore_page__WEBPACK_IMPORTED_MODULE_6__["ExportKeystorePage"]]
    })
], ExportKeystorePageModule);



/***/ }),

/***/ "./src/app/pages/export-keystore/export-keystore.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/export-keystore/export-keystore.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".textarea {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93c3MvZ28vc3JjL2dpdGh1Yi5jb20vY3lwaGVyaXVtL3dhbGxldGFwcC9zcmMvYXBwL3BhZ2VzL2V4cG9ydC1rZXlzdG9yZS9leHBvcnQta2V5c3RvcmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9leHBvcnQta2V5c3RvcmUvZXhwb3J0LWtleXN0b3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cG9ydC1rZXlzdG9yZS9leHBvcnQta2V5c3RvcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRhcmVhIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59IiwiLnRleHRhcmVhIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/export-keystore/export-keystore.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/export-keystore/export-keystore.page.ts ***!
  \***************************************************************/
/*! exports provided: ExportKeystorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportKeystorePage", function() { return ExportKeystorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/global/global.service */ "./src/app/providers/global/global.service.ts");
/* harmony import */ var _providers_native_native_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/native/native.service */ "./src/app/providers/native/native.service.ts");
/* harmony import */ var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/helper/helper.service */ "./src/app/providers/helper/helper.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/http/http.service */ "./src/app/providers/http/http.service.ts");







let ExportKeystorePage = class ExportKeystorePage {
    constructor(global, native, helper, http, navCtrl) {
        this.global = global;
        this.native = native;
        this.helper = helper;
        this.http = http;
        this.navCtrl = navCtrl;
        this.keystore = "";
        this.wallet = {};
        this.ifShowPasswordPrompt = false;
    }
    ngOnInit() {
        this.wallet = this.global.gWalletList[this.global.currentWalletIndex];
        // this.keystore = this.wallet.keystore;
        setTimeout(() => {
            this.ifShowPasswordPrompt = true;
        }, 500);
    }
    copyKeystore() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.native.copy(this.keystore);
            let error = yield this.helper.getTranslate('KEYSTORE_COPYIED_SUCCRRF');
            this.helper.toast(error);
        });
    }
    cancelPrompt() {
        this.ifShowPasswordPrompt = false;
        this.navCtrl.pop();
    }
    confirmPrompt(privateKey) {
        this.ifShowPasswordPrompt = false;
        this.keystore = this.wallet.keystore;
    }
    exportKeystoreToMiner() {
        this.ifShowPasswordPrompt = false;
        // console.log("导出keystore到挖矿应用...");
        this.native.scan().then((res) => {
            console.log("Scan over...。。。" + JSON.stringify(res));
            // this.handleText(res.text);
            this.helper.handleText(res.text, (url) => {
                this.http.post(url, {
                    keystore: this.wallet.keystore
                }, {
                    ignoreError: true
                }).subscribe(res => {
                    console.log("keystore transmitted：" + res);
                });
            });
        });
    }
};
ExportKeystorePage.ctorParameters = () => [
    { type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _providers_native_native_service__WEBPACK_IMPORTED_MODULE_3__["NativeService"] },
    { type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] },
    { type: _providers_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
ExportKeystorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-export-keystore',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./export-keystore.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/export-keystore/export-keystore.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./export-keystore.page.scss */ "./src/app/pages/export-keystore/export-keystore.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
        _providers_native_native_service__WEBPACK_IMPORTED_MODULE_3__["NativeService"],
        _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"],
        _providers_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], ExportKeystorePage);



/***/ })

}]);
//# sourceMappingURL=pages-export-keystore-export-keystore-module-es2015.js.map