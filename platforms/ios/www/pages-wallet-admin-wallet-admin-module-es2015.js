(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wallet-admin-wallet-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-admin/wallet-admin.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-admin/wallet-admin.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ 'WALLET_TOOL' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"gray-content\">\n    <div class=\"my-content\">\n        <div class=\"item-list\">\n            <div class=\"item\" tappable (click)=\"changeWalletName()\">\n                <div class=\"label\" translate>WALLET_NAME</div>\n                <div class=\"content\">{{ wallet.name }}</div>\n                <div class=\"next\"></div>\n            </div>\n        </div>\n\n        <div class=\"item-list\">\n            <div class=\"item\" tappable (click)=\"exportWalletKeystore()\">\n                <div class=\"label\" translate>EXPORT_KEYSTORE</div>\n            </div>\n            <!-- <div class=\"item\" tappable (click)=\"exportWalletMnemonic()\">\n                <div class=\"label\" translate>EXPORT_MNEMONIC</div>\n            </div> -->\n            <div class=\"item\" tappable (click)=\"exportPrivateKey()\">\n                <div class=\"label\" translate>EXPORT_PRIVATEKEY</div>\n            </div>\n        </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/wallet-admin/wallet-admin.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/wallet-admin/wallet-admin.module.ts ***!
  \***********************************************************/
/*! exports provided: WalletAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletAdminPageModule", function() { return WalletAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wallet_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet-admin.page */ "./src/app/pages/wallet-admin/wallet-admin.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _wallet_admin_page__WEBPACK_IMPORTED_MODULE_6__["WalletAdminPage"]
    }
];
let WalletAdminPageModule = class WalletAdminPageModule {
};
WalletAdminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_wallet_admin_page__WEBPACK_IMPORTED_MODULE_6__["WalletAdminPage"]]
    })
], WalletAdminPageModule);



/***/ }),

/***/ "./src/app/pages/wallet-admin/wallet-admin.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/wallet-admin/wallet-admin.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dhbGxldC1hZG1pbi93YWxsZXQtYWRtaW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/wallet-admin/wallet-admin.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/wallet-admin/wallet-admin.page.ts ***!
  \*********************************************************/
/*! exports provided: WalletAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletAdminPage", function() { return WalletAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/global/global.service */ "./src/app/providers/global/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let WalletAdminPage = class WalletAdminPage {
    constructor(global, router) {
        this.global = global;
        this.router = router;
        this.wallet = {};
    }
    ngOnInit() {
        this.wallet = this.global.gWalletList[this.global.currentWalletIndex];
    }
    exportWalletKeystore() {
        console.log("导出keystore");
        this.router.navigate(['export-keystore']);
    }
    exportWalletMnemonic() {
        this.router.navigate(['export-mnemonic']);
    }
    changeWalletName() {
        this.router.navigate(['wallet-name']);
    }
    exportPrivateKey() {
        this.router.navigate(['export-privatekey']);
    }
};
WalletAdminPage.ctorParameters = () => [
    { type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
WalletAdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wallet-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wallet-admin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-admin/wallet-admin.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wallet-admin.page.scss */ "./src/app/pages/wallet-admin/wallet-admin.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], WalletAdminPage);



/***/ })

}]);
//# sourceMappingURL=pages-wallet-admin-wallet-admin-module-es2015.js.map