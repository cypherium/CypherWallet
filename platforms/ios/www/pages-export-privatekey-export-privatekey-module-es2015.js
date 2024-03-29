(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-export-privatekey-export-privatekey-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/export-privatekey/export-privatekey.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/export-privatekey/export-privatekey.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ 'EXPORT_PRIVATEKEY' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main\">\n        <div class=\"tips\" translate>\n            EXPORT_PRIVATEKEY_TIPS\n        </div>\n\n        <div class=\"textarea\">\n            {{ privateKey }}\n        </div>\n    </div>\n\n    <div class=\"bottom-button\">\n        <div class=\"confirm-button\" tappble (click)=\"copyKeystore()\" translate>COPY_PRIVATEKEY</div>\n        <div class=\"confirm-button\" (click)=\"exportKeystoreToMiner()\" translate>EXPORT_PRIVATEKEY_MINER\n        </div>\n    </div>\n</ion-content>\n\n<app-generate-privatekey *ngIf=\"ifShowPasswordPrompt\" promptDesc=\"{{ 'INPUT_PASSWORD_TIPS' | translate }}\"\n    cancelText=\"{{ 'CANCEL' | translate }}\" confirmText=\"{{ 'CONFIRM' | translate }}\" (cancel)=\"cancelPrompt()\"\n    (confirm)=\"confirmPrompt($event)\"></app-generate-privatekey>");

/***/ }),

/***/ "./src/app/pages/export-privatekey/export-privatekey.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/export-privatekey/export-privatekey.module.ts ***!
  \*********************************************************************/
/*! exports provided: ExportPrivatekeyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportPrivatekeyPageModule", function() { return ExportPrivatekeyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _export_privatekey_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./export-privatekey.page */ "./src/app/pages/export-privatekey/export-privatekey.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _export_privatekey_page__WEBPACK_IMPORTED_MODULE_6__["ExportPrivatekeyPage"]
    }
];
let ExportPrivatekeyPageModule = class ExportPrivatekeyPageModule {
};
ExportPrivatekeyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_export_privatekey_page__WEBPACK_IMPORTED_MODULE_6__["ExportPrivatekeyPage"]]
    })
], ExportPrivatekeyPageModule);



/***/ }),

/***/ "./src/app/pages/export-privatekey/export-privatekey.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/export-privatekey/export-privatekey.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".textarea {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jeXBoZXIwMS9nby9zcmMvZ2l0aHViLmNvbS9jeXBoZXJpdW0vd2FsbGV0YXBwL3NyYy9hcHAvcGFnZXMvZXhwb3J0LXByaXZhdGVrZXkvZXhwb3J0LXByaXZhdGVrZXkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9leHBvcnQtcHJpdmF0ZWtleS9leHBvcnQtcHJpdmF0ZWtleS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leHBvcnQtcHJpdmF0ZWtleS9leHBvcnQtcHJpdmF0ZWtleS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGFyZWEge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbn0iLCIudGV4dGFyZWEge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/export-privatekey/export-privatekey.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/export-privatekey/export-privatekey.page.ts ***!
  \*******************************************************************/
/*! exports provided: ExportPrivatekeyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportPrivatekeyPage", function() { return ExportPrivatekeyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/global/global.service */ "./src/app/providers/global/global.service.ts");
/* harmony import */ var _providers_native_native_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/native/native.service */ "./src/app/providers/native/native.service.ts");
/* harmony import */ var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/helper/helper.service */ "./src/app/providers/helper/helper.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/http/http.service */ "./src/app/providers/http/http.service.ts");







let ExportPrivatekeyPage = class ExportPrivatekeyPage {
    constructor(global, native, helper, http, navCtrl) {
        this.global = global;
        this.native = native;
        this.helper = helper;
        this.http = http;
        this.navCtrl = navCtrl;
        this.privateKey = "";
        this.wallet = {};
        this.ifShowPasswordPrompt = false;
    }
    ngOnInit() {
        this.wallet = this.global.gWalletList[this.global.currentWalletIndex];
        setTimeout(() => {
            this.ifShowPasswordPrompt = true;
        }, 500);
    }
    copyKeystore() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.native.copy(this.privateKey);
            let info = yield this.helper.getTranslate('KEYSTORE_COPYIED_SUCCRRF');
            this.helper.toast(info);
        });
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
    cancelPrompt() {
        this.ifShowPasswordPrompt = false;
        this.navCtrl.pop();
    }
    confirmPrompt(privateKey) {
        this.ifShowPasswordPrompt = false;
        this.privateKey = privateKey;
    }
};
ExportPrivatekeyPage.ctorParameters = () => [
    { type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _providers_native_native_service__WEBPACK_IMPORTED_MODULE_3__["NativeService"] },
    { type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] },
    { type: _providers_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
ExportPrivatekeyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-export-privatekey',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./export-privatekey.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/export-privatekey/export-privatekey.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./export-privatekey.page.scss */ "./src/app/pages/export-privatekey/export-privatekey.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
        _providers_native_native_service__WEBPACK_IMPORTED_MODULE_3__["NativeService"],
        _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"],
        _providers_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], ExportPrivatekeyPage);



/***/ })

}]);
//# sourceMappingURL=pages-export-privatekey-export-privatekey-module-es2015.js.map