(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wallet-import-wallet-import-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-import/wallet-import.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-import/wallet-import.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title translate=\"\">IMPORT_WALLET</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main\">\n        <div class=\"tabs\">\n            <div class=\"tab\" tappable (click)=\"toggleImportType('mnemonic')\"\n                [ngClass]=\"type == 'mnemonic' ? 'focus' : ''\">\n                <div class=\"label\" translate=\"\">MNEMONIC</div>\n            </div>\n            <div class=\"tab\" (click)=\"toggleImportType('private')\" [ngClass]=\"type == 'private' ? 'focus' : ''\">\n                <div class=\"label\" translate=\"\">PRIVATE_KEY</div>\n            </div>\n            <div class=\"tab\" (click)=\"toggleImportType('keystore')\" [ngClass]=\"type == 'keystore' ? 'focus' : ''\">\n                <div class=\"label\">Keystore</div>\n            </div>\n        </div>\n\n        <div class=\"mnemonic\" *ngIf=\"type == 'mnemonic'\">\n            <div class=\"tips\" translate=\"\">INPUT_MNEMONIC_TIPS</div>\n            <textarea name=\"mnemonic\" (input)=\"checkMnemonic()\" (keypress)= \"hideKeyboard($event)\" class=\"textarea\" [(ngModel)]=\"mnemonic\">\n            </textarea>\n        </div>\n\n        <div class=\"error-text\" *ngIf=\"mnemonicError && type == 'mnemonic'\">{{ mnemonicError }}</div>\n\n        <div class=\"mnemonic keystore\" *ngIf=\"type == 'private'\">\n            <div class=\"tips\" translate=\"\">COPY_PRIVATE_TIPS</div>\n            <div class=\"input-wrapper\">\n                <textarea name=\"private\" (input)=\"checkPrivate()\" (keypress)=\"hideKeyboard($event)\" class=\"textarea\" [(ngModel)]=\"private\">\n                </textarea>\n            </div>\n        </div>\n        \n        <div class=\"error-text\" *ngIf=\"privateError && type == 'private'\">{{ privateError }}</div>\n\n        <div class=\"mnemonic keystore\" *ngIf=\"type == 'keystore'\">\n            <div class=\"tips\" translate=\"\">COPY_KEYSTORE_TIPS</div>\n            <div class=\"input-wrapper\">\n                <textarea name=\"keystore\" (input)=\"checkKeystore()\" (keypress)= \"hideKeyboard($event)\" class=\"textarea\" [(ngModel)]=\"keystore\">\n                </textarea>\n            </div>\n        </div>\n\n        <div class=\"error-text\" *ngIf=\"keystoreError && type == 'keystore'\">{{ keystoreError }}</div>\n\n        <div class=\"input-password-wrapper\">\n            <div class=\"label\" *ngIf=\"type == 'mnemonic' || type == 'private'\" translate>SETUP_PASSWORD_TIPS</div>\n            <div class=\"label\" *ngIf=\"type == 'keystore'\" translate>INPUT_PASSWORD_TIPS</div>\n            <div class=\"input-wrapper\">\n                <input name=\"password\" *ngIf=\"type == 'mnemonic' || type == 'private'\" (keyup)=\"checkPassword()\" (keypress)= \"hideKeyboard($event)\" [type]=\"ifEyeOpen ? 'text' : 'password'\"\n                    [(ngModel)]=\"password\" placeholder=\"{{ 'PASSWORD_RULE' | translate }}\">\n                 <input name=\"password\" *ngIf=\"type == 'keystore'\" (keyup)=\"checkPassword()\" (keypress)= \"hideKeyboard($event)\" [type]=\"ifEyeOpen ? 'text' : 'password'\"\n                    [(ngModel)]=\"password\" placeholder=\"{{ 'INPUT_PASSWORD_TIPS' | translate }}\">\n            </div>\n\n            <div class=\"eye\" tappable (click)=\"toggleEyeOpen()\" [ngClass]=\"ifEyeOpen ? 'eye-open' : 'eye-close'\">\n            </div>\n        </div>\n\n        <div class=\"error-text\" *ngIf=\"passwordError\">{{ passwordError }}</div>\n\n        <div class=\"input-password-wrapper\" *ngIf=\"type == 'mnemonic' || type == 'private'\">\n            <div class=\"label\" translate>CONFIRM_PASSWORD</div>\n            <div class=\"input-wrapper\">\n                <input name=\"password1\" (keyup)=\"checkPassword1()\" (keypress)= \"hideKeyboard($event)\" [type]=\"ifEyeOpen1 ? 'text' : 'password'\"\n                    [(ngModel)]=\"password1\" placeholder=\"{{ 'CONFIRM_PASSWORD' | translate }}\">\n            </div>\n\n            <div class=\" eye\" tappable (click)=\"toggleEyeOpen1()\" [ngClass]=\"ifEyeOpen1 ? 'eye-open' : 'eye-close'\">\n            </div>\n        </div>\n\n        <div class=\"error-text\" *ngIf=\"passwordError1 && (type == 'mnemonic' || type == 'private')\">{{ passwordError1 }}</div>\n\n        <div class=\"buttons\">\n            <div class=\"confirm-button\" *ngIf=\"type == 'mnemonic'\" \n            [ngClass]=\"(mnemonicError || passwordError1 || passwordError || !mnemonic || !password1 || !password || (password1 != password)) ? 'disabled' : ''\" (click)=\"importWallet()\" \n            translate>START_IMPORT\n            </div>\n            <div class=\"confirm-button\" *ngIf=\"type == 'private'\"\n                [ngClass]=\"(privateError || passwordError1 || passwordError || !private || !password1 || !password || (password1 != password)) ? 'disabled' : ''\"\n                (click)=\"importWallet()\" translate>START_IMPORT\n            </div>\n            <div class=\"confirm-button\" *ngIf=\"type == 'keystore'\" \n            [ngClass]=\"(keystoreError || passwordError || !keystore || !password) ? 'disabled' : ''\" (click)=\"importWallet()\" \n            translate>START_IMPORT\n            </div>\n        </div>\n    </div>\n</ion-content>\n\n<div class=\"lds-css ng-scope\" *ngIf=\"ifShowLoading\">\n    <div class=\"lds-wrapper\">\n        <div class=\"lds-flickr\">\n            <div></div>\n            <div></div>\n            <div></div>\n        </div>\n        <!-- <div class=\"progress\">{{ rate }}%</div> -->\n    </div>\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = (".tabs {\n  display: -webkit-box;\n  display: flex;\n  background: #FFFFFF;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(11%, rgba(255, 255, 255, 0)), color-stop(83%, rgba(255, 255, 255, 0.84)));\n  background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 11%, rgba(255, 255, 255, 0.84) 83%);\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  margin: 14px var(--page-padding);\n}\n.tabs .tab {\n  font-size: 14px;\n  color: var(--tips-color);\n  text-align: center;\n  height: 48px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.tabs .tab .label {\n  line-height: 46px;\n  border-bottom: 2px solid #fff;\n  display: inline-block;\n}\n.tabs .tab.focus .label {\n  color: var(--main-color);\n  border-color: var(--main-color);\n}\n.mnemonic {\n  padding-bottom: 10px;\n}\n.mnemonic.keystore .textarea {\n  font-size: 12px;\n  height: 230px;\n}\n.mnemonic .tips {\n  padding: 0;\n  line-height: 22px;\n}\n.mnemonic .textarea {\n  outline: none;\n  display: block;\n  width: 100%;\n}\n.bottom-button {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jeXBoZXIwMS9nby9zcmMvZ2l0aHViLmNvbS9jeXBoZXJpdW0vd2FsbGV0YXBwL3NyYy9hcHAvcGFnZXMvd2FsbGV0LWltcG9ydC93YWxsZXQtaW1wb3J0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2FsbGV0LWltcG9ydC93YWxsZXQtaW1wb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0pBQUE7RUFBQSxxR0FBQTtFQUNBLDZFQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0NKO0FEQ0k7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNDUjtBRENRO0VBQ0ksaUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FDQ1o7QURHWTtFQUNJLHdCQUFBO0VBQ0EsK0JBQUE7QUNEaEI7QURRQTtFQUNJLG9CQUFBO0FDTEo7QURRUTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FDTlo7QURVSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQ1JSO0FEV0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNUUjtBRGFBO0VBQ0ksZ0JBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dhbGxldC1pbXBvcnQvd2FsbGV0LWltcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDApIDExJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg0KSA4MyUpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiAxNHB4IHZhcigtLXBhZ2UtcGFkZGluZyk7XG5cbiAgICAudGFiIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGlwcy1jb2xvcik7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5mb2N1cyB7XG4gICAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tbmVtb25pYyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiAgICAmLmtleXN0b3JlIHtcbiAgICAgICAgLnRleHRhcmVhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGhlaWdodDogMjMwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGlwcyB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIH1cblxuICAgIC50ZXh0YXJlYSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5ib3R0b20tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufSIsIi50YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODQpIDgzJSk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDE0cHggdmFyKC0tcGFnZS1wYWRkaW5nKTtcbn1cbi50YWJzIC50YWIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS10aXBzLWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZsZXg6IDE7XG59XG4udGFicyAudGFiIC5sYWJlbCB7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnRhYnMgLnRhYi5mb2N1cyAubGFiZWwge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi5tbmVtb25pYyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLm1uZW1vbmljLmtleXN0b3JlIC50ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAyMzBweDtcbn1cbi5tbmVtb25pYyAudGlwcyB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuLm1uZW1vbmljIC50ZXh0YXJlYSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvdHRvbS1idXR0b24ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufSJdfQ== */");

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
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");








let WalletImportPage = class WalletImportPage {
    constructor(router, helper, global, navCtrl, keyboard, Wallet) {
        this.router = router;
        this.helper = helper;
        this.global = global;
        this.navCtrl = navCtrl;
        this.keyboard = keyboard;
        this.Wallet = Wallet;
        this.mnemonic = "";
        this.private = "";
        this.password = "";
        this.password1 = "";
        this.passwordError = "";
        this.passwordError1 = "";
        this.ifEyeOpen1 = false;
        this.ifEyeOpen = false;
        this.mnemonicError = "";
        this.privateError = "";
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
        this.mnemonic = "";
        this.private = "";
        this.password = "";
        this.password1 = "";
        this.passwordError = "";
        this.passwordError1 = "";
        this.ifEyeOpen1 = false;
        this.ifEyeOpen = false;
        this.mnemonicError = "";
        this.privateError = "";
        this.keystore = "";
        this.keystoreError = "";
        this.type = type;
    }
    ngOnInit() {
    }
    checkMnemonic() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.mnemonic) {
                let error = yield this.helper.getTranslate('MNEMONIC_EMPTY');
                this.mnemonicError = error;
                return false;
            }
            let mnemonic = this.mnemonic.replace(/^\s+|\s+$/, '');
            let mnemonicList = mnemonic.split(/\s+/);
            if (mnemonicList.length !== 12) {
                let error = yield this.helper.getTranslate('MNEMONIC_LENGTH_ERROR');
                this.mnemonicError = error;
                return false;
            }
            if (!this.Wallet.validateMnemonic(mnemonic)) {
                let error = yield this.helper.getTranslate('MNEMONIC_ERROR');
                this.mnemonicError = error;
                return false;
            }
            this.mnemonicError = "";
            return true;
        });
    }
    checkPrivate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.private || this.private.replace(/^\s+|\s+$/, '').length !== 128) {
                let error = yield this.helper.getTranslate('PRIVATE_EMPTY');
                this.privateError = error;
                return false;
            }
            if (!this.Wallet.validatePrivate(this.private.replace(/^\s+|\s+$/, ''))) {
                let error = yield this.helper.getTranslate('PRIVATE_ERROR');
                this.privateError = error;
                return false;
            }
            this.privateError = "";
            return true;
        });
    }
    checkKeystore() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.keystore) {
                let error = yield this.helper.getTranslate('KEYSTORE_EMPTY');
                this.keystoreError = error;
                return false;
            }
            if (!this.helper.validateKeystore(this.keystore)) {
                let error = yield this.helper.getTranslate('KEYSTORE_FILE_ERROR');
                this.keystoreError = error;
                return false;
            }
            this.keystoreError = "";
            return true;
        });
    }
    checkPassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //为兼容旧版的密码设置规则
            if (this.type == 'keystore') {
                if (!this.password) {
                    let message = yield this.helper.getTranslate('PASSWORD_EMPTY');
                    this.passwordError = message;
                    return;
                }
                this.passwordError = "";
                return this.passwordError;
            }
            let regx = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
            if (this.password.match(regx) == null) {
                let message = yield this.helper.getTranslate('PASSWORD_RULE');
                this.passwordError = message;
                return;
            }
            this.passwordError = "";
            return this.passwordError;
        });
    }
    checkPassword1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.password1 != this.password) {
                let message = yield this.helper.getTranslate('PASSEORD_DIFFERENT');
                this.passwordError1 = message;
                return;
            }
            this.passwordError1 = "";
            return this.passwordError1;
        });
    }
    importKeystore() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        mnemonic = mnemonic.replace(/\s{2,}/g, ' '); // 替换多个空格为1个
        let wallet = this.Wallet.fromMnemonic(mnemonic);
        return wallet;
    }
    importPrivateKeyWallet() {
        let privateKey = this.private.replace(/^\s+|\s+$/, '').replace(/[\r\n]/g, '');
        let wallet = this.Wallet.fromPrivateKey(privateKey);
        return wallet;
    }
    importWallet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let check = true;
            if ((yield this.checkPassword()) !== '') {
                check = false;
            }
            if (this.type === 'mnemonic') {
                if ((yield this.checkMnemonic()) !== true) {
                    check = false;
                }
                if ((yield this.checkPassword1()) !== '') {
                    check = false;
                }
            }
            else if (this.type === 'private') {
                if ((yield this.checkPrivate()) !== true) {
                    check = false;
                }
                if ((yield this.checkPassword1()) !== '') {
                    check = false;
                }
            }
            else {
                if ((yield this.checkKeystore()) !== true) {
                    check = false;
                }
            }
            if (!check) {
                return;
            }
            let wallet;
            new Promise((resolve, reject) => {
                if (this.type === 'mnemonic') {
                    wallet = this.importMnemonicWallet();
                    resolve(wallet);
                }
                else if (this.type === 'keystore') {
                    this.importKeystore().then(resolve);
                }
                else if (this.type === 'private') {
                    wallet = this.importPrivateKeyWallet();
                    resolve(wallet);
                }
            }).then((wallet) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (!wallet) {
                    let error = yield this.helper.getTranslate('WALLET_IMPORT_FAILED');
                    this.keystoreError = this.keystoreError || error;
                    this.mnemonicError = this.mnemonicError || error;
                    return;
                }
                console.log("Wallet import succeed...", wallet);
                //检测钱包是否重复
                let found = this.global.gWalletList.find(item => item.addr === wallet.address);
                if (found) {
                    if (this.type === 'keystore') {
                        let error = yield this.helper.getTranslate('KEYSTORE_REPLICATE');
                        this.keystoreError = error;
                    }
                    else if (this.type === 'mnemonic') {
                        let error = yield this.helper.getTranslate('MNEMONIC_REPLICATE');
                        this.mnemonicError = error;
                    }
                    else {
                        // this.type === 'private'
                        let error = yield this.helper.getTranslate('MNEMONIC_REPLICATE');
                        this.privateError = error;
                    }
                    return;
                }
                this.helper.addWallet(wallet, this.password);
                let navigationExtras = {
                    state: {
                        privateKey: wallet.privateKey,
                        action: 'create'
                    }
                };
                this.navCtrl.navigateRoot('payment-password', navigationExtras);
            }));
        });
    }
    hideKeyboard(e) {
        if (e && (e.key === "Enter" || e.key === "Return")) {
            this.keyboard.hide();
        }
    }
};
WalletImportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] },
    { type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Keyboard"] },
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
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Keyboard"],
        _providers_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_6__["WalletService"]])
], WalletImportPage);



/***/ })

}]);
//# sourceMappingURL=pages-wallet-import-wallet-import-module-es2015.js.map