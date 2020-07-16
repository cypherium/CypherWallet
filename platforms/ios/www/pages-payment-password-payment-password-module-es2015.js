(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-password-payment-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-password/payment-password.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-password/payment-password.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'SET_PAYMENT_PASSWORD' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"input-password-wrapper\" *ngIf=\"isChange\">\n      <div class=\"label\" translate=\"\">ORIGINAL_PASSWORD</div>\n      <div class=\"input-wrapper\">\n        <input (keyup)=\"checkPassword()\"  [type]=\"ifEyeOpen ? 'number' : 'password'\" inputmode=\"decimal\" [(ngModel)]=\"password\"\n          placeholder=\"{{ 'INPUT_ORIGINAL_PASSWORD' | translate }}\">\n      </div>\n\n      <div class=\"eye\" tappable (click)=\"toggleEyeOpen()\" [ngClass]=\"ifEyeOpen ? 'eye-open' : 'eye-close'\">\n      </div>\n    </div>\n\n    <div class=\"error-text\" *ngIf=\"passwordError\">{{ passwordError }}</div>\n\n    <div class=\"input-password-wrapper\">\n      <div class=\"label\" translate>NEW_PASSWORD</div>\n      <div class=\"input-wrapper\">\n        <input (keyup)=\"checkPassword1()\" [type]=\"ifEyeOpen1 ? 'number' : 'password'\" inputmode=\"decimal\" [(ngModel)]=\"password1\"\n          placeholder=\"{{ 'PAYMENT_PASSWORD_RULE' | translate }}\">\n      </div>\n\n      <div class=\"eye\" tappable (click)=\"toggleEyeOpen1()\" [ngClass]=\"ifEyeOpen1 ? 'eye-open' : 'eye-close'\">\n      </div>\n    </div>\n\n    <div class=\"error-text\" *ngIf=\"passwordError1\">{{ passwordError1 }}</div>\n\n    <div class=\"input-password-wrapper\">\n      <div class=\"label\" translate=\"\">CONFIRM_PASSWORD</div>\n      <div class=\"input-wrapper\">\n        <input (keyup)=\"checkPassword2()\" [type]=\"ifEyeOpen2 ? 'number' : 'password'\" [(ngModel)]=\"password2\"\n          placeholder=\"{{ 'CONFIRM_PASSWORD' | translate }}\">\n      </div>\n\n      <div class=\" eye\" tappable (click)=\"toggleEyeOpen2()\" [ngClass]=\"ifEyeOpen2 ? 'eye-open' : 'eye-close'\">\n      </div>\n    </div>\n\n    <div class=\"error-text\" *ngIf=\"passwordError2\">{{ passwordError2 }}</div>\n\n    <div class=\"buttons\">\n      <div class=\"confirm-button\" [ngClass]=\"(passwordError || passwordError1 || passwordError2 || !password1 || !password2 || password1 != password2) ? 'disabled' : ''\"\n      tappable (click)=\"changePassword()\" translate>CONFIRM</div>\n    </div>\n  </div>\n</ion-content>\n\n<div class=\"lds-css ng-scope\" *ngIf=\"ifShowLoading\">\n  <div class=\"lds-wrapper\">\n    <div class=\"lds-flickr\">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n    <!-- <div class=\"progress\">{{ rate }}%</div> -->\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/pages/payment-password/payment-password.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/payment-password/payment-password.module.ts ***!
  \*******************************************************************/
/*! exports provided: PaymentPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPasswordPageModule", function() { return PaymentPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _payment_password_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment-password.page */ "./src/app/pages/payment-password/payment-password.page.ts");









const routes = [
    {
        path: '',
        component: _payment_password_page__WEBPACK_IMPORTED_MODULE_8__["PaymentPasswordPage"]
    }
];
let PaymentPasswordPageModule = class PaymentPasswordPageModule {
};
PaymentPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_payment_password_page__WEBPACK_IMPORTED_MODULE_8__["PaymentPasswordPage"]]
    })
], PaymentPasswordPageModule);



/***/ }),

/***/ "./src/app/pages/payment-password/payment-password.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/payment-password/payment-password.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  padding: 18px;\n}\n\nion-content {\n  --background: #fff;\n}\n\n.container {\n  padding: 20px var(--page-padding);\n}\n\n.buttons {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jeXBoZXIwMS9nby9zcmMvZ2l0aHViLmNvbS9jeXBoZXJpdW0vd2FsbGV0YXBwL3NyYy9hcHAvcGFnZXMvcGF5bWVudC1wYXNzd29yZC9wYXltZW50LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5bWVudC1wYXNzd29yZC9wYXltZW50LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQtcGFzc3dvcmQvcGF5bWVudC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgcGFkZGluZzogMThweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMjBweCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xufVxuXG4uYnV0dG9ucyB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn0iLCIubWFpbiB7XG4gIHBhZGRpbmc6IDE4cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xufVxuXG4uYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/payment-password/payment-password.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/payment-password/payment-password.page.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPasswordPage", function() { return PaymentPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/helper/helper.service */ "./src/app/providers/helper/helper.service.ts");
/* harmony import */ var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/global/global.service */ "./src/app/providers/global/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let PaymentPasswordPage = class PaymentPasswordPage {
    constructor(helper, navCtrl, global, router) {
        this.helper = helper;
        this.navCtrl = navCtrl;
        this.global = global;
        this.router = router;
        this.password = "";
        this.password1 = "";
        this.password2 = "";
        this.isChange = false;
        this.ifEyeOpen = false;
        this.ifEyeOpen1 = false;
        this.ifEyeOpen2 = false;
        this.passwordError = "";
        this.passwordError1 = "";
        this.passwordError2 = "";
        this.ifShowLoading = false;
        this.wallet = {};
        let state = this.router.getCurrentNavigation().extras.state;
        if (state) {
            this.privateKey = state.privateKey;
            this.action = state.action;
        }
    }
    ngOnInit() {
        this.wallet = this.global.gWalletList[this.global.currentWalletIndex];
    }
    toggleEyeOpen() {
        this.ifEyeOpen = !this.ifEyeOpen;
    }
    toggleEyeOpen1() {
        this.ifEyeOpen1 = !this.ifEyeOpen1;
    }
    toggleEyeOpen2() {
        this.ifEyeOpen2 = !this.ifEyeOpen2;
    }
    checkPassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.passwordError = "";
            if (!this.password) {
                let error = yield this.helper.getTranslate('ORIGINAL_PASSWORD_EMPTY');
                this.passwordError = error;
            }
        });
    }
    checkPassword1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.passwordError1 = "";
            if (!this.password1) {
                let error = yield this.helper.getTranslate('NEW_PASSWORD_EMPTY');
                this.passwordError1 = error;
            }
            else if (!/^\d{6}$/.test(this.password1)) {
                //密码格式错误
                let error = yield this.helper.getTranslate('PAYMENT_PASSWORD_RULE');
                this.passwordError1 = error;
            }
        });
    }
    checkPassword2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.passwordError2 = "";
            if (!this.password2) {
                let error = yield this.helper.getTranslate('NEW_PASSWORD_EMPTY');
                this.passwordError2 = error;
            }
            else if (this.password2 != this.password1) {
                let error = yield this.helper.getTranslate('PASSEORD_DIFFERENT');
                this.passwordError2 = error;
            }
        });
    }
    changePassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.isChange) {
                yield this.checkPassword();
                if (this.passwordError) {
                    return;
                }
            }
            yield this.checkPassword1();
            if (this.passwordError1) {
                return;
            }
            yield this.checkPassword2();
            if (this.passwordError2) {
                return;
            }
            //开始修改密码
            this.ifShowLoading = true;
            setTimeout(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.ifShowLoading = false;
                //计算新的payment-keystore
                if (this.privateKey) {
                    let keystore = this.helper.exportKeystore(this.privateKey, this.password1);
                    this.wallet.payment = keystore;
                    this.helper.saveWallet();
                    setTimeout(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        let error = yield this.helper.getTranslate('CHANGE_PASSWORD_SUCCEED');
                        this.helper.toast(error);
                    }), 50);
                    setTimeout(() => {
                        if (this.action !== 'create') {
                            this.navCtrl.pop();
                        }
                        else {
                            this.navCtrl.navigateRoot('wallet');
                        }
                    }, 1000);
                }
                else {
                    //密码错误
                    this.ifShowLoading = false;
                    let error = yield this.helper.getTranslate('PASSWORD_ERROR');
                    // this.passwordError = error;
                    this.helper.toast(error);
                    setTimeout(() => {
                        this.navCtrl.pop();
                    }, 1000);
                }
            }), 50);
        });
    }
};
PaymentPasswordPage.ctorParameters = () => [
    { type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PaymentPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-password/payment-password.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment-password.page.scss */ "./src/app/pages/payment-password/payment-password.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], PaymentPasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-password-payment-password-module-es2015.js.map