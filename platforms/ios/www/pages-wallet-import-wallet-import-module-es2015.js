(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wallet-import-wallet-import-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-import/wallet-import.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-import/wallet-import.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title translate=\"\">IMPORT_WALLET</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main\">\n        <div class=\"tabs\">\n            <div class=\"tab\" tappable (click)=\"toggleImportType('mnemonic')\"\n                [ngClass]=\"type == 'mnemonic' ? 'focus' : ''\">\n                <div class=\"label\" translate=\"\">MNEMONIC</div>\n            </div>\n            <div class=\"tab\" (click)=\"toggleImportType('keystore')\" [ngClass]=\"type == 'keystore' ? 'focus' : ''\">\n                <div class=\"label\">Keystore</div>\n            </div>\n        </div>\n\n        <div class=\"mnemonic\" *ngIf=\"type == 'mnemonic'\">\n            <div class=\"tips\" translate=\"\">INPUT_MNEMONIC_TIPS</div>\n            <textarea name=\"mnemonic\" (blur)=\"checkMnemonic()\" class=\"textarea\" [(ngModel)]=\"mnemonic\">\n            </textarea>\n        </div>\n\n        <div class=\"error-text\" *ngIf=\"mnemonicError && type == 'mnemonic'\">{{ mnemonicError }}</div>\n\n\n        <div class=\"mnemonic keystore\" *ngIf=\"type == 'keystore'\">\n            <div class=\"tips\" translate=\"\">COPY_KEYSTORE_TIPS</div>\n            <div class=\"input-wrapper\">\n                <textarea name=\"keystore\" (blur)=\"checkKeystore()\" class=\"textarea\" [(ngModel)]=\"keystore\">\n                </textarea>\n            </div>\n        </div>\n\n        <div class=\"error-text\" *ngIf=\"keystoreError && type == 'keystore'\">{{ keystoreError }}</div>\n\n        <div class=\"input-password-wrapper\">\n            <div class=\"label\" *ngIf=\"type == 'mnemonic'\" translate>SETUP_PASSWORD_TIPS</div>\n            <div class=\"label\" *ngIf=\"type != 'mnemonic'\" translate>INPUT_PASSWORD_TIPS</div>\n            <div class=\"input-wrapper\">\n                <input name=\"password\" (blur)=\"checkPassword()\" [type]=\"ifEyeOpen ? 'text' : 'password'\"\n                    [(ngModel)]=\"password\" placeholder=\"{{ 'PASSWORD_RULE' | translate }}\">\n            </div>\n\n            <div class=\"eye\" tappable (click)=\"toggleEyeOpen()\" [ngClass]=\"ifEyeOpen ? 'eye-open' : 'eye-close'\">\n            </div>\n        </div>\n\n        <div class=\"error-text\" *ngIf=\"passwordError\">{{ passwordError }}</div>\n\n        <div class=\"input-password-wrapper\" *ngIf=\"type == 'mnemonic'\">\n            <div class=\"label\" translate>CONFIRM_PASSWORD</div>\n            <div class=\"input-wrapper\">\n                <input name=\"password1\" (blur)=\"checkPassword1()\" [type]=\"ifEyeOpen ? 'text' : 'password'\"\n                    [(ngModel)]=\"password1\" placeholder=\"{{ 'CONFIRM_PASSWORD' | translate }}\">\n            </div>\n\n            <div class=\" eye\" tappable (click)=\"toggleEyeOpen1()\" [ngClass]=\"ifEyeOpen1 ? 'eye-open' : 'eye-close'\">\n            </div>\n        </div>\n\n        <div class=\"error-text\" *ngIf=\"passwordError1 && type == 'mnemonic'\">{{ passwordError1 }}</div>\n\n        <div class=\"buttons bottom-button\">\n            <div class=\"confirm-button\" (click)=\"importWallet()\" translate>START_IMPORT</div>\n        </div>\n    </div>\n\n\n\n</ion-content>\n\n<div class=\"lds-css ng-scope\" *ngIf=\"ifShowLoading\">\n    <div class=\"lds-wrapper\">\n        <div class=\"lds-flickr\">\n            <div></div>\n            <div></div>\n            <div></div>\n        </div>\n        <!-- <div class=\"progress\">{{ rate }}%</div> -->\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/pages/wallet-import/wallet-import.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/wallet-import/wallet-import.module.ts ***!
  \*************************************************************/
/*! exports provided: WalletImportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletImportPageModule", function() { return WalletImportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wallet_import_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet-import.page */ "./src/app/pages/wallet-import/wallet-import.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _wallet_import_page__WEBPACK_IMPORTED_MODULE_6__["WalletImportPage"]
    }
];
let WalletImportPageModule = class WalletImportPageModule {
};
WalletImportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_wallet_import_page__WEBPACK_IMPORTED_MODULE_6__["WalletImportPage"]]
    })
], WalletImportPageModule);



/***/ }),

/***/ "./src/app/pages/wallet-import/wallet-import.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/wallet-import/wallet-import.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabs {\n  display: -webkit-box;\n  display: flex;\n  background: #FFFFFF;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(11%, rgba(255, 255, 255, 0)), color-stop(83%, rgba(255, 255, 255, 0.84)));\n  background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 11%, rgba(255, 255, 255, 0.84) 83%);\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  margin: 14px var(--page-padding);\n}\n.tabs .tab {\n  font-size: 14px;\n  color: var(--tips-color);\n  text-align: center;\n  height: 48px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.tabs .tab .label {\n  line-height: 46px;\n  border-bottom: 2px solid #fff;\n  display: inline-block;\n}\n.tabs .tab.focus .label {\n  color: var(--main-color);\n  border-color: var(--main-color);\n}\n.mnemonic {\n  padding-bottom: 10px;\n}\n.mnemonic.keystore .textarea {\n  font-size: 12px;\n  height: 230px;\n}\n.mnemonic .tips {\n  padding: 0;\n  line-height: 44px;\n}\n.mnemonic .textarea {\n  outline: none;\n  display: block;\n  width: 100%;\n}\n.bottom-button {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93c3MvZ28vc3JjL2dpdGh1Yi5jb20vY3lwaGVyaXVtL3dhbGxldGFwcC9zcmMvYXBwL3BhZ2VzL3dhbGxldC1pbXBvcnQvd2FsbGV0LWltcG9ydC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dhbGxldC1pbXBvcnQvd2FsbGV0LWltcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNKQUFBO0VBQUEscUdBQUE7RUFDQSw2RUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNDSjtBRENJO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDQ1I7QURDUTtFQUNJLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQ0NaO0FER1k7RUFDSSx3QkFBQTtFQUNBLCtCQUFBO0FDRGhCO0FEUUE7RUFDSSxvQkFBQTtBQ0xKO0FEUVE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQ05aO0FEVUk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUNSUjtBRFdJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDVFI7QURhQTtFQUNJLGdCQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93YWxsZXQtaW1wb3J0L3dhbGxldC1pbXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAwKSAxMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NCkgODMlKTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogMTRweCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xuXG4gICAgLnRhYiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRpcHMtY29sb3IpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgICYuZm9jdXMge1xuICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubW5lbW9uaWMge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgJi5rZXlzdG9yZSB7XG4gICAgICAgIC50ZXh0YXJlYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIzMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRpcHMge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICB9XG5cbiAgICAudGV4dGFyZWEge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uYm90dG9tLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn0iLCIudGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDExJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg0KSA4MyUpO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxNHB4IHZhcigtLXBhZ2UtcGFkZGluZyk7XG59XG4udGFicyAudGFiIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tdGlwcy1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmbGV4OiAxO1xufVxuLnRhYnMgLnRhYiAubGFiZWwge1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi50YWJzIC50YWIuZm9jdXMgLmxhYmVsIHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4ubW5lbW9uaWMge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5tbmVtb25pYy5rZXlzdG9yZSAudGV4dGFyZWEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogMjMwcHg7XG59XG4ubW5lbW9uaWMgLnRpcHMge1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogNDRweDtcbn1cbi5tbmVtb25pYyAudGV4dGFyZWEge1xuICBvdXRsaW5lOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3R0b20tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/wallet-import/wallet-import.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/wallet-import/wallet-import.page.ts ***!
  \***********************************************************/
/*! exports provided: WalletImportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletImportPage", function() { return WalletImportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/global/global.service */ "./src/app/providers/global/global.service.ts");
/* harmony import */ var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/helper/helper.service */ "./src/app/providers/helper/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/wallet/wallet.service */ "./src/app/providers/wallet/wallet.service.ts");







let WalletImportPage = class WalletImportPage {
    constructor(router, helper, global, navCtrl, Wallet) {
        this.router = router;
        this.helper = helper;
        this.global = global;
        this.navCtrl = navCtrl;
        this.Wallet = Wallet;
        this.mnemonic = "";
        this.password = "";
        this.password1 = "";
        this.passwordError = "";
        this.passwordError1 = "";
        this.ifEyeOpen1 = false;
        this.ifEyeOpen = false;
        this.mnemonicError = "";
        this.type = 'mnemonic';
        this.keystore = "";
        this.keystoreError = "";
        this.rate = 0;
        this.ifShowLoading = false;
    }
    toggleEyeOpen() {
        this.ifEyeOpen = !this.ifEyeOpen;
    }
    toggleEyeOpen1() {
        this.ifEyeOpen1 = !this.ifEyeOpen1;
    }
    toggleImportType(type) {
        this.type = type;
    }
    ngOnInit() {
    }
    importMnemonic() {
        let result = this.checkMnemonic();
        if (!result) {
            return null;
        }
        else {
            return this.importMnemonicWallet();
        }
    }
    importKeystore() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let result = yield this.checkKeystore();
            if (!result) {
                return Promise.resolve(null);
            }
            console.log("check password...");
            if (!this.password) {
                let error = yield this.helper.getTranslate('PASSWORD_EMPTY');
                this.passwordError = error;
                return Promise.resolve(null);
            }
            let json = this.keystore;
            console.log("showloading...");
            this.ifShowLoading = true;
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, 50);
            }).then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let wallet = this.helper.decryptPrivateKey(this.keystore, this.password);
                setTimeout(() => {
                    this.ifShowLoading = false;
                }, 0);
                if (wallet.flag) {
                    this.keystoreError = "";
                    return wallet;
                }
                else {
                    let error = yield this.helper.getTranslate('KEYSTORE_ERROR');
                    this.keystoreError = error;
                    return null;
                }
            }));
        });
    }
    importMnemonicWallet() {
        let mnemonic = this.mnemonic.replace(/^\s+|\s+$/, '');
        mnemonic = mnemonic.replace(/\s{2,}/g, ' '); //替换多个空格为1个
        let wallet = this.Wallet.fromMnemonic(mnemonic);
        return wallet;
    }
    checkMnemonic() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.mnemonic) {
                let error = yield this.helper.getTranslate('MNEMONIC_EMPTY');
                this.mnemonicError = error;
            }
            let mnemonic = this.mnemonic.replace(/^\s+|\s+$/, '');
            let mnemonicList = mnemonic.split(/\s+/);
            if (mnemonicList.length !== 12) {
                let error = yield this.helper.getTranslate('MNEMONIC_LENGTH_ERROR');
                this.mnemonicError = error;
            }
            else {
                this.mnemonicError = "";
            }
            if (this.mnemonicError) {
                return false;
            }
            if (!this.password) {
                let error = yield this.helper.getTranslate('PASSWORD_EMPTY');
                this.passwordError = error;
                return false;
            }
            if (!this.password1) {
                let error = yield this.helper.getTranslate('PASSWORD_EMPTY');
                this.passwordError1 = error;
                return false;
            }
            if (this.password1 != this.password) {
                let error = yield this.helper.getTranslate('PASSEORD_DIFFERENT');
                this.passwordError1 = error;
                return false;
            }
            this.mnemonicError = "";
            return true;
        });
    }
    checkKeystore() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("check keystore...");
            this.keystoreError = "";
            this.passwordError = "";
            if (!this.keystore) {
                let error = yield this.helper.getTranslate('KEYSTORE_EMPTY');
                this.keystoreError = error;
            }
            if (this.keystoreError) {
                return false;
            }
            return true;
        });
    }
    checkPassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.password) {
                let error = yield this.helper.getTranslate('PASSWORD_EMPTY');
                this.passwordError = error;
            }
            else {
                this.passwordError = "";
            }
        });
    }
    checkPassword1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.password1) {
                let error = yield this.helper.getTranslate('PASSWORD_EMPTY');
                this.passwordError1 = error;
                return;
            }
            if (this.password && this.password1 != this.password) {
                let error = yield this.helper.getTranslate('PASSEORD_DIFFERENT');
                this.passwordError1 = error;
            }
            this.passwordError1 = "";
        });
    }
    importWallet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.mnemonicError = "";
            this.passwordError = "";
            this.passwordError1 = "";
            let wallet;
            new Promise((resolve, reject) => {
                if (this.type == 'mnemonic') {
                    wallet = this.importMnemonic();
                    //为了一致，这里需要生成keystore
                    resolve(wallet);
                }
                else if (this.type == 'keystore') {
                    this.importKeystore().then(resolve);
                }
            }).then((wallet) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log("Wallet import succeed...", wallet);
                if (!wallet) {
                    return;
                }
                //检测钱包是否重复
                if (this.global.gWalletList.find(item => item.address == wallet.address)) {
                    if (this.type == 'keystore') {
                        let error = yield this.helper.getTranslate('KEYSTORE_REPLICATE');
                        this.keystoreError = error;
                    }
                    else {
                        let error = yield this.helper.getTranslate('MNEMONIC_REPLICATE');
                        this.mnemonicError = error;
                    }
                    return;
                }
                this.helper.addWallet(wallet, this.password);
                // this.router.navigate(['tabs']);
                this.navCtrl.navigateRoot('wallet');
            }));
        });
    }
};
WalletImportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] },
    { type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _providers_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_6__["WalletService"] }
];
WalletImportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wallet-import',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wallet-import.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-import/wallet-import.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wallet-import.page.scss */ "./src/app/pages/wallet-import/wallet-import.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"],
        _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _providers_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_6__["WalletService"]])
], WalletImportPage);



/***/ })

}]);
//# sourceMappingURL=pages-wallet-import-wallet-import-module-es2015.js.map