(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cph-send-cph-send-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cph-send/cph-send.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cph-send/cph-send.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <!-- <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons> -->\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>{{ 'SEND' | translate }}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button tappable (click)=\"scan()\">\n                <ion-icon size=\"small\" slot=\"icon-only\" src=\"assets/imgs/scan.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main\">\n        <div class=\"input-text-wrapper\">\n            <div class=\"label\">\n                <div class=\"desc\">{{ 'SEND_AMOUNT' | translate }}</div>\n                <div class=\"amount\">\n                    <span class=\"tip\">{{ 'BALANCE' | translate }}</span> {{ amount | coinDisplay }} CPH\n                </div>\n            </div>\n            <div class=\"input-wrapper\">\n                <input type=\"number\" (keyup)=\"checkAmount()\" [(ngModel)]=\"payAmount\"\n                    placeholder=\"{{ 'INPUT_AMOUNT_TIPS' | translate }}\">\n            </div>\n        </div>\n        <div class=\"error-text\" *ngIf=\"amountError\">{{ amountError }}</div>\n\n        <div class=\"input-text-wrapper\">\n            <div class=\"label\" translate>RECEIVE_ADDRESS</div>\n            <div class=\"input-wrapper\">\n                <input type=\"text\" (keyup)=\"checkAddr()\" [(ngModel)]=\"receiveAddress\"\n                    placeholder=\"{{ 'INPUT_ADDR_TIPS' | translate }}\">\n            </div>\n        </div>\n        <div class=\"error-text\" *ngIf=\"addressError\">{{ addressError }}</div>\n\n        <div class=\"range-wrapper\">\n            <div class=\"label\">\n                <div class=\"desc\" translate>MINER_FEE</div>\n                <div class=\"amount\">\n                    <span class=\"tip\">{{ (range * 21000 / 1000000000) | coinDisplay }} CPH</span>\n                </div>\n            </div>\n\n            <div class=\"range\">\n                <ion-range mode=\"ios\" pin=\"true\" (ionChange)=\"changeRange($event)\" [(ngModel)]=\"range\" [min]=\"min\"\n                    [max]=\"max\"></ion-range>\n                <ion-label class=\"desc\">\n                    <p translate>SLOW</p>\n                    <p translate>QUICK</p>\n                </ion-label>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"confirm-button bottom-button hide-when-keyboard-shown\"\n        [ngClass]=\"(addressError || amountError || !receiveAddress || !amount) ? 'disabled' : ''\"\n        (click)=\"transferConfirm()\" translate=\"\">\n        CONFIRM</div>\n</ion-content>\n\n<app-generate-privatekey *ngIf=\"ifShowPasswordPrompt\" promptDesc=\"{{ 'INPUT_PASSWORD_TIPS' | translate }}\"\n    cancelText=\"{{ 'CANCEL' | translate }}\" confirmText=\"{{ 'CONFIRM' | translate }}\" (cancel)=\"cancelPrompt()\"\n    (confirm)=\"confirmPrompt($event)\"></app-generate-privatekey>\n\n<app-alert [title]=\"alertTitle\" [desc]=\"alertDesc\" *ngIf=\"ifShowAlert\" cancelText=\"{{ 'CANCEL' | translate }}\"\n    (cancel)=\"cancelAlert()\" confirmText=\"{{ 'CONFIRM' | translate }}\" (confirm)=\"confirmAlert()\">\n</app-alert>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  padding-top: 24px;\n}\n.main .label {\n  display: -webkit-box;\n  display: flex;\n}\n.main .label .desc {\n  -webkit-box-flex: 1;\n          flex: 1;\n  line-height: 44px;\n}\n.main .label .tip {\n  color: var(--tips-color);\n  font-size: 12px;\n  line-height: 44px;\n}\n.main .range-wrapper {\n  margin-top: 18px;\n}\n.main .range ion-range {\n  --bar-background: var(--border-color);\n  --bar-active-background: var(--main-color);\n  --bar-height: 4px;\n  --knob-background: var(--main-color);\n  --knob-size: 24px;\n  padding: 0;\n}\n.main .desc {\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--tip-color);\n  overflow: hidden;\n}\n.main .desc p {\n  float: left;\n}\n.main .desc p:last-child {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93c3MvZ28vc3JjL2dpdGh1Yi5jb20vY3lwaGVyaXVtL3dhbGxldGFwcC9zcmMvYXBwL3BhZ2VzL2NwaC1zZW5kL2NwaC1zZW5kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3BoLXNlbmQvY3BoLXNlbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjtBRENJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDQ1I7QURDUTtFQUNJLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGlCQUFBO0FDQ1o7QURFUTtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQVo7QURJSTtFQUNJLGdCQUFBO0FDRlI7QURRUTtFQUNJLHFDQUFBO0VBQ0EsMENBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDTlo7QURVSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNSUjtBRFVRO0VBQ0ksV0FBQTtBQ1JaO0FEV1E7RUFDSSxZQUFBO0FDVFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcGgtc2VuZC9jcGgtc2VuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG5cbiAgICAubGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5kZXNjIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXAge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRpcHMtY29sb3IpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucmFuZ2Utd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgfVxuXG4gICAgLnJhbmdlIHtcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDIwcHg7XG5cbiAgICAgICAgaW9uLXJhbmdlIHtcbiAgICAgICAgICAgIC0tYmFyLWJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgICAtLWJhci1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgICAgICAgICAtLWJhci1oZWlnaHQ6IDRweDtcbiAgICAgICAgICAgIC0ta25vYi1iYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICAgICAgICAgIC0ta25vYi1zaXplOiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kZXNjIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRpcC1jb2xvcik7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHA6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm1haW4ge1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cbi5tYWluIC5sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbiAubGFiZWwgLmRlc2Mge1xuICBmbGV4OiAxO1xuICBsaW5lLWhlaWdodDogNDRweDtcbn1cbi5tYWluIC5sYWJlbCAudGlwIHtcbiAgY29sb3I6IHZhcigtLXRpcHMtY29sb3IpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xufVxuLm1haW4gLnJhbmdlLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuLm1haW4gLnJhbmdlIGlvbi1yYW5nZSB7XG4gIC0tYmFyLWJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gIC0tYmFyLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgLS1iYXItaGVpZ2h0OiA0cHg7XG4gIC0ta25vYi1iYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgLS1rbm9iLXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDA7XG59XG4ubWFpbiAuZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS10aXAtY29sb3IpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1haW4gLmRlc2MgcCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm1haW4gLmRlc2MgcDpsYXN0LWNoaWxkIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */");

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
/* harmony import */ var _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/web3/web3.service */ "./src/app/providers/web3/web3.service.ts");
/* harmony import */ var _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/native/native.service */ "./src/app/providers/native/native.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









let CphSendPage = class CphSendPage {
    constructor(router, 
    // private clipboard: Clipboard,
    helper, global, storage, web3, nav, native) {
        this.router = router;
        this.helper = helper;
        this.global = global;
        this.storage = storage;
        this.web3 = web3;
        this.nav = nav;
        this.native = native;
        this.range = 18; //let price = await this.web3.cph.gasPrice(); price/1e9;
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
        this.amount = this.wallet.amount || 0;
        this.updateWalletInfo();
        this.interval = setInterval(() => {
            this.updateWalletInfo();
        }, 10000);
    }
    back() {
        this.nav.navigateBack('/wallet');
    }
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
            this.web3.getCphBalance(this.wallet.addr, (v) => {
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
                    let result = yield this.web3.isCphAddr(url);
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
    checkAddr() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.addressError = "";
            let result = yield this.web3.isCphAddr(this.receiveAddress.toLowerCase());
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
            this.ifShowPasswordPrompt = true;
        });
    }
    transfer(privatekey) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let address = this.receiveAddress.toLowerCase().replace('cph', '0x');
            this.web3.transferCph(this.wallet.addr, address, this.payAmount, this.range, privatekey, (err, tx) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log("Transaction callback.......", err, tx);
                if (err === null) {
                    // resolve(tx);
                    // this.helper.toast("交易成功");
                    let navigationExtras = {
                        state: {
                            tx: tx,
                            status: 1 //0-成功，1:打包中，2:失败
                        }
                    };
                    //前往交易结果页
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
    { type: _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"] }
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
        _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"]])
], CphSendPage);



/***/ })

}]);
//# sourceMappingURL=pages-cph-send-cph-send-module-es2015.js.map