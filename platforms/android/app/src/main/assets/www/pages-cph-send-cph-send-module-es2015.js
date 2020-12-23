(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cph-send-cph-send-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cph-send/cph-send.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cph-send/cph-send.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <!-- <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons> -->\n        <ion-title>{{ 'SEND' | translate }}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button tappable (click)=\"scan()\">\n                <ion-icon size=\"small\" slot=\"icon-only\" src=\"assets/imgs/scan.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main\">\n        <div class=\"input-text-wrapper\">\n            <div class=\"label\">\n                <div class=\"desc\">{{ 'SEND_AMOUNT' | translate }}</div>\n                <div class=\"amount\">\n                    <span class=\"tip\">{{ 'BALANCE' | translate }}</span> {{ amount | coinDisplay }} CPH\n                </div>\n            </div>\n            <div class=\"input-wrapper\">\n                <input type=\"number\" inputmode='decimal' (keyup)=\"checkAmount()\" (keypress)= \"hideKeyboard($event)\" [(ngModel)]=\"payAmount\"\n                    placeholder=\"{{ 'INPUT_AMOUNT_TIPS' | translate }}\">\n            </div>\n        </div>\n        <div class=\"error-text\" *ngIf=\"amountError\">{{ amountError }}</div>\n\n        <div class=\"input-text-wrapper\">\n            <div class=\"label\" translate>RECEIVE_ADDRESS</div>\n            <div class=\"input-wrapper\">\n                <input type=\"text\" (keyup)=\"checkAddr()\" (keypress)= \"hideKeyboard($event)\" [(ngModel)]=\"receiveAddress\"\n                    placeholder=\"{{ 'INPUT_ADDR_TIPS' | translate }}\">\n            </div>\n        </div>\n        <div class=\"error-text\" *ngIf=\"addressError\">{{ addressError }}</div>\n\n        <div class=\"range-wrapper\">\n            <div class=\"label\">\n                <div class=\"desc\" translate>MINER_FEE</div>\n                <div class=\"amount\">\n                    <span class=\"tip\">{{ (range * 21000 / 1000000000) | coinDisplay }} CPH</span>\n                </div>\n            </div>\n\n            <div class=\"range\">\n                <ion-range mode=\"ios\" (ionChange)=\"changeRange($event)\" [(ngModel)]=\"range\" [min]=\"min\"\n                    [max]=\"max\"></ion-range>\n                <ion-label class=\"desc\">\n                    <p translate>SLOW</p>\n                    <p translate>QUICK</p>\n                </ion-label>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"confirm-button\"\n        [ngClass]=\"(!payAmount || addressError || amountError || !receiveAddress || !amount) ? 'disabled' : ''\"\n        (click)=\"transferConfirm()\" translate=\"\">\n        CONFIRM</div>\n        <div>    <ion-button (click)=\"showFingerprintAuthDlg()\">show fingerprint auth dialog  </ion-button>\n        </div>\n</ion-content>\n\n<app-generate-privatekey *ngIf=\"ifShowPasswordPrompt\" promptDesc=\"{{ 'INPUT_PASSWORD_TIPS' | translate }}\"\n    cancelText=\"{{ 'CANCEL' | translate }}\" confirmText=\"{{ 'CONFIRM' | translate }}\" (cancel)=\"cancelPrompt()\"\n    (confirm)=\"confirmPrompt($event)\"></app-generate-privatekey>\n\n<app-alert [title]=\"alertTitle\" [desc]=\"alertDesc\" *ngIf=\"ifShowAlert\" cancelText=\"{{ 'CANCEL' | translate }}\"\n    (cancel)=\"cancelAlert()\" confirmText=\"{{ 'CONFIRM' | translate }}\" (confirm)=\"confirmAlert()\">\n</app-alert>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pincode-modal/pincode-modal.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pincode-modal/pincode-modal.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button outline (click)=\"dismiss(false)\">Cancel</ion-button>\n      </ion-buttons>\n      <ion-title class=\"ion-text-center\">{{ title }}</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button outline (click)=\"forgotPinCode()\">Forgot</ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  <app-keypad [codeViewStyle]=\"codeViewStyle\" (change)=\"eventCapture($event)\"></app-keypad>\n      <app-generate-privatekey *ngIf=\"ifShowPasswordPrompt\" promptDesc=\"{{ 'INPUT_PASSWORD_TIPS' | translate }}\"\n        cancelText=\"{{ 'CANCEL' | translate }}\" confirmText=\"{{ 'CONFIRM' | translate }}\" (cancel)=\"cancelPrompt()\"\n        (confirm)=\"confirmPrompt($event)\"></app-generate-privatekey>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/cph-send/cph-send.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cph-send/cph-send.module.ts ***!
  \***************************************************/
/*! exports provided: CphSendPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CphSendPageModule", function() { return CphSendPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cph_send_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cph-send.page */ "./src/app/pages/cph-send/cph-send.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _pincode_modal_pincode_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pincode-modal/pincode-modal.module */ "./src/app/pages/pincode-modal/pincode-modal.module.ts");











const routes = [
    {
        path: '',
        component: _cph_send_page__WEBPACK_IMPORTED_MODULE_6__["CphSendPage"]
    }
];
let CphSendPageModule = class CphSendPageModule {
};
CphSendPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
            _pincode_modal_pincode_modal_module__WEBPACK_IMPORTED_MODULE_10__["PincodeModalPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cph_send_page__WEBPACK_IMPORTED_MODULE_6__["CphSendPage"]]
    })
], CphSendPageModule);



/***/ }),

/***/ "./src/app/pages/cph-send/cph-send.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/cph-send/cph-send.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  padding-top: 24px;\n}\n.main .label {\n  display: -webkit-box;\n  display: flex;\n}\n.main .label .desc {\n  -webkit-box-flex: 1;\n          flex: 1;\n  line-height: 44px;\n}\n.main .label .tip {\n  color: var(--tips-color);\n  font-size: 12px;\n  line-height: 44px;\n}\n.main .range-wrapper {\n  margin-top: 18px;\n}\n.main .range ion-range {\n  --bar-background: var(--border-color);\n  --bar-active-background: var(--main-color);\n  --bar-height: 4px;\n  --knob-background: var(--main-color);\n  --knob-size: 24px;\n  padding: 0;\n}\n.main .desc {\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--tip-color);\n  overflow: hidden;\n}\n.main .desc p {\n  float: left;\n}\n.main .desc p:last-child {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jeXBoZXIwMS9nby9zcmMvZ2l0aHViLmNvbS9jeXBoZXJpdW0vd2FsbGV0YXBwL3NyYy9hcHAvcGFnZXMvY3BoLXNlbmQvY3BoLXNlbmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcGgtc2VuZC9jcGgtc2VuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKO0FEQ0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNDUjtBRENRO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EsaUJBQUE7QUNDWjtBREVRO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBWjtBRElJO0VBQ0ksZ0JBQUE7QUNGUjtBRFFRO0VBQ0kscUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNOWjtBRFVJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ1JSO0FEVVE7RUFDSSxXQUFBO0FDUlo7QURXUTtFQUNJLFlBQUE7QUNUWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NwaC1zZW5kL2NwaC1zZW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcblxuICAgIC5sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgLmRlc2Mge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpcCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGlwcy1jb2xvcik7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5yYW5nZS13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICB9XG5cbiAgICAucmFuZ2Uge1xuICAgICAgICAvLyBwYWRkaW5nLXRvcDogMjBweDtcblxuICAgICAgICBpb24tcmFuZ2Uge1xuICAgICAgICAgICAgLS1iYXItYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICAgIC0tYmFyLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICAgICAgICAgIC0tYmFyLWhlaWdodDogNHB4O1xuICAgICAgICAgICAgLS1rbm9iLWJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICAgICAgICAgICAgLS1rbm9iLXNpemU6IDI0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRlc2Mge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGlwLWNvbG9yKTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgcDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIubWFpbiB7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xufVxuLm1haW4gLmxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluIC5sYWJlbCAuZGVzYyB7XG4gIGZsZXg6IDE7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xufVxuLm1haW4gLmxhYmVsIC50aXAge1xuICBjb2xvcjogdmFyKC0tdGlwcy1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG4ubWFpbiAucmFuZ2Utd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG4ubWFpbiAucmFuZ2UgaW9uLXJhbmdlIHtcbiAgLS1iYXItYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgLS1iYXItYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICAtLWJhci1oZWlnaHQ6IDRweDtcbiAgLS1rbm9iLWJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICAtLWtub2Itc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMDtcbn1cbi5tYWluIC5kZXNjIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6IHZhcigtLXRpcC1jb2xvcik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbiAuZGVzYyBwIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubWFpbiAuZGVzYyBwOmxhc3QtY2hpbGQge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/cph-send/cph-send.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/cph-send/cph-send.page.ts ***!
  \*************************************************/
/*! exports provided: CphSendPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CphSendPage", function() { return CphSendPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/global/global.service */ "./src/app/providers/global/global.service.ts");
/* harmony import */ var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/helper/helper.service */ "./src/app/providers/helper/helper.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/web3c/web3c.service */ "./src/app/providers/web3c/web3c.service.ts");
/* harmony import */ var _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/native/native.service */ "./src/app/providers/native/native.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _pincode_modal_pincode_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pincode-modal/pincode-modal.page */ "./src/app/pages/pincode-modal/pincode-modal.page.ts");
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ "./node_modules/@ionic-native/fingerprint-aio/ngx/index.js");













let CphSendPage = class CphSendPage {
    constructor(router, 
    // private clipboard: Clipboard,
    helper, global, storage, web3c, nav, platform, keyboard, native, modalController, alertController, fingerAuth) {
        this.router = router;
        this.helper = helper;
        this.global = global;
        this.storage = storage;
        this.web3c = web3c;
        this.nav = nav;
        this.platform = platform;
        this.keyboard = keyboard;
        this.native = native;
        this.modalController = modalController;
        this.alertController = alertController;
        this.fingerAuth = fingerAuth;
        this.range = 18; //let price = await this.web3c.cph.gasPrice(); price/1e9;
        this.wallet = {};
        this.amount = 0;
        this.receiveAddress = "";
        this.payAmount = "";
        this.min = 1;
        this.max = 100;
        this.amountError = "";
        this.addressError = "";
        this.ifShowPasswordPrompt = false;
        this.ifShowAlert = false;
        this.alertTitle = "";
        this.alertDesc = "";
        this.interval = null;
        let state = this.router.getCurrentNavigation().extras.state;
        if (state) {
            this.receiveAddress = state.address;
        }
        this.wallet = this.global.gWalletList[this.global.currentWalletIndex];
        if (!this.wallet.payment) {
            this.presentAlertConfirm();
        }
        this.amount = this.wallet.amount || 0;
        this.updateWalletInfo();
        this.interval = setInterval(() => {
            this.updateWalletInfo();
        }, 10000);
    }
    showFingerprintAuthDlg() {
        this.fingerAuth.isAvailable().then(result => {
            console.log('showFingerprintAuthDlg' + result);
            this.fingerAuth.show({
                // clientId: 'fingerprint-Demo',
                // clientSecret: 'password', //Only necessary for Android
                // disableBackup:true  //Only for Android(optional)
                title: "face id",
                subtitle: "face id test",
                description: "Some biometric description"
            })
                .then((result) => console.log('fingerAuth.show' + result))
                .catch((error) => console.log('fingerAuth.show error' + error.message));
        }).catch((error) => console.log('showFingerprintAuthDlg error' + error.message));
        ;
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let header = yield this.helper.getTranslate('PAYMENT_PASSWORD');
            let message = yield this.helper.getTranslate('PAYMENT_PASSWORD_M');
            let comfirm = yield this.helper.getTranslate('CONFIRM');
            let cancel = yield this.helper.getTranslate('CANCEL');
            const alert = yield this.alertController.create({
                header: header,
                message: message,
                buttons: [
                    {
                        text: cancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.nav.pop();
                        }
                    },
                    {
                        text: comfirm,
                        handler: () => {
                            this.router.navigate(['/setting']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // back() {
    //     this.nav.navigateBack('/wallet');
    // }
    ngOnDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
    ionViewWillLeave() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
    updateWalletInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.web3c.getCphBalance(this.wallet.addr, (v) => {
                if (this.amount.toString() !== v.toString() && v !== undefined) {
                    this.amount = v;
                    this.global.gWalletList[this.global.currentWalletIndex].amount = this.amount;
                    this.helper.saveWallet();
                }
            });
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(this.global.gWalletList, this.global.currentWalletIndex);
            //获取余额
            // let state = this.router.getCurrentNavigation().extras.state;
            // console.log("state" + state)
            // if (state) {
            //     // let obj = state.extras.state;
            //     this.receiveAddress = state.address;
            // }
        });
    }
    scan() {
        this.native.scan().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("SCAN RESULT：", res);
            this.helper.handleText(res.text, (url, method) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (method == 'transfer') {
                    let result = yield this.web3c.isCphAddr(url);
                    if (result == 0) {
                        this.receiveAddress = url;
                    }
                    else {
                        let message = yield this.helper.getTranslate('UNKNOWN_RESULT');
                        this.helper.toast(message);
                    }
                }
            }));
        }), res => {
            // if (res == 1) {
            //     //临时拒绝
            // } else if (res == 0) {
            //     //永久拒绝
            //     this.ifShowAlert = true;
            //     this.alertTitle = "权限拒绝";
            //     this.alertDesc = "您已拒绝摄像头权限，请前往应用管理打开";
            // } else {
            //     this.helper.toast("扫码失败");
            // }
        });
    }
    cancelPrompt() {
        this.ifShowPasswordPrompt = false;
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let title = yield this.helper.getTranslate('PAYMENT_PASSWORD');
            const modal = yield this.modalController.create({
                component: _pincode_modal_pincode_modal_page__WEBPACK_IMPORTED_MODULE_10__["PincodeModalPage"],
                cssClass: "pincode-modal",
                componentProps: {
                    'title': title,
                }
            });
            yield modal.present();
            modal.onDidDismiss().then((s) => {
                if (typeof (s.data) !== 'undefined' && s.data.dismissed !== false) {
                    //get private key
                    setTimeout(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        let ret = this.helper.decryptPrivateKey(this.wallet.payment, s.data.dismissed);
                        if (ret.flag) {
                            this.transfer(ret.privateKey);
                        }
                        else {
                            //password error
                            let error = yield this.helper.getTranslate('PAYMENT_PASSWORD_ERROR');
                            this.helper.toast(error);
                        }
                    }), 50);
                }
            });
        });
    }
    confirmPrompt(privateKey) {
        console.log("Private key...", privateKey);
        this.ifShowPasswordPrompt = false;
        this.transfer(privateKey);
    }
    cancelAlert() {
        this.ifShowAlert = false;
    }
    confirmAlert() {
        this.ifShowAlert = false;
        this.native.openSettings('application');
    }
    checkAmount() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.amountError = "";
            let amount = +this.payAmount;
            if (amount <= 0) {
                let message = yield this.helper.getTranslate('AMOUNT_ILLEGAL');
                this.amountError = message;
                return;
            }
            if (amount <= 0.0001) {
                let message = yield this.helper.getTranslate('AMOUNT_SMALL');
                this.amountError = message;
                return;
            }
            console.log(`${amount}, ${this.range}, ${this.amount}`);
            if (amount + this.range * 21000 / 1000000000 > this.amount) {
                let message = yield this.helper.getTranslate('BALANCE_INFFICIENT');
                this.amountError = message;
                return;
            }
        });
    }
    hideKeyboard(e) {
        if (e && (e.key === "Enter" || e.key === "Return")) {
            this.keyboard.hide();
        }
    }
    checkAddr() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.addressError = "";
            let result = yield this.web3c.isCphAddr(this.receiveAddress.toLowerCase());
            if (result == -1) {
                let message = yield this.helper.getTranslate('ADDRESS_EMPTY');
                this.addressError = message;
            }
            else if (result == -2) {
                let message = yield this.helper.getTranslate('ADDRESS_ERROR');
                this.addressError = message;
            }
        });
    }
    changeRange(e) {
    }
    transferConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.checkAmount();
            if (this.amountError) {
                return;
            }
            yield this.checkAddr();
            if (this.addressError) {
                return;
            }
            //引导用户输入密码
            // this.ifShowPasswordPrompt = true;
            //引导用户输入支付密码
            this.presentModal();
        });
    }
    transfer(privatekey) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let address = this.receiveAddress.toLowerCase().replace('cph', '0x');
            this.web3c.transferCph(this.wallet.addr, address, this.payAmount, this.range, privatekey, (err, tx) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log("Transaction callback.......", err, tx);
                if (err === null) {
                    // resolve(tx);
                    // this.helper.toast("交易成功");
                    let navigationExtras = {
                        state: {
                            tx: tx,
                            status: 1 //0- success, 1: packed, 2: failure
                        }
                    };
                    // Go to the transaction results page
                    this.router.navigate(['transaction-result'], navigationExtras);
                }
                else {
                    let message = yield this.helper.getTranslate('TRANSACTION_FAILED');
                    if (err.message.toLowerCase().indexOf('insufficient funds for gas') > -1) {
                        message = yield this.helper.getTranslate('BALANCE_INFFICIENT');
                    }
                    else if (err.message.toLowerCase().indexOf('replacement transaction underpriced') > -1) {
                        message = yield this.helper.getTranslate('NONCE_ERROR');
                    }
                    else {
                        message = message + ': ' + err.message;
                    }
                    this.helper.toast(message);
                }
            }));
        });
    }
};
CphSendPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] },
    { type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_6__["Web3Service"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Keyboard"] },
    { type: _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_11__["FingerprintAIO"] }
];
CphSendPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cph-send',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cph-send.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cph-send/cph-send.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cph-send.page.scss */ "./src/app/pages/cph-send/cph-send.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"],
        _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_6__["Web3Service"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Keyboard"],
        _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
        _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_11__["FingerprintAIO"]])
], CphSendPage);



/***/ }),

/***/ "./src/app/pages/pincode-modal/pincode-modal.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/pincode-modal/pincode-modal.module.ts ***!
  \*************************************************************/
/*! exports provided: PincodeModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PincodeModalPageModule", function() { return PincodeModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pincode_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pincode-modal.page */ "./src/app/pages/pincode-modal/pincode-modal.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");







// import { KeypadComponent } from '../../components/keypad/keypad.component';


const routes = [
    {
        path: '',
        component: _pincode_modal_page__WEBPACK_IMPORTED_MODULE_5__["PincodeModalPage"]
    }
];
let PincodeModalPageModule = class PincodeModalPageModule {
};
PincodeModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
        ],
        entryComponents: [
            _pincode_modal_page__WEBPACK_IMPORTED_MODULE_5__["PincodeModalPage"],
        ],
        declarations: [_pincode_modal_page__WEBPACK_IMPORTED_MODULE_5__["PincodeModalPage"]]
    })
], PincodeModalPageModule);



/***/ }),

/***/ "./src/app/pages/pincode-modal/pincode-modal.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/pincode-modal/pincode-modal.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BpbmNvZGUtbW9kYWwvcGluY29kZS1tb2RhbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/pincode-modal/pincode-modal.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/pincode-modal/pincode-modal.page.ts ***!
  \***********************************************************/
/*! exports provided: PincodeModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PincodeModalPage", function() { return PincodeModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PincodeModalPage = class PincodeModalPage {
    constructor(router, modalCtrl) {
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.codeViewStyle = 'star'; // star or value
        this.ifShowPasswordPrompt = false;
        this.confirmPrompt = null;
        this.cancelPrompt = null;
    }
    dismiss(s) {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': s
        });
    }
    forgotPinCode() {
        this.ifShowPasswordPrompt = true;
        this.cancelPrompt = () => {
            this.ifShowPasswordPrompt = false;
        };
        this.confirmPrompt = (prv) => {
            this.ifShowPasswordPrompt = false;
            let navigationExtras = {
                state: {
                    privateKey: prv,
                }
            };
            this.router.navigate(['payment-password'], navigationExtras);
            this.dismiss(false);
        };
    }
    eventCapture(event) {
        this.Pin = event;
        this.dismiss(this.Pin);
    }
    ngOnInit() {
    }
    onKeyboardButtonClick(key) {
        // Log the pressed key
        console.log(key);
    }
};
PincodeModalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
PincodeModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pincode-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pincode-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pincode-modal/pincode-modal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pincode-modal.page.scss */ "./src/app/pages/pincode-modal/pincode-modal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], PincodeModalPage);



/***/ })

}]);
//# sourceMappingURL=pages-cph-send-cph-send-module-es2015.js.map
