(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transaction-result-transaction-result-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transaction-result/transaction-result.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transaction-result/transaction-result.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <!-- <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons> -->\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>{{ 'TRANSACTION_DETAIL' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main\">\n        <div class=\"header\">\n            <div class=\"logo\" [ngClass]=\"{'0': 'success', '1': 'warning', '2': ''}[status]\"></div>\n            <p class=\"label\">\n                {{ {'0': ('TRSACTION_SUCCEED' | translate), '1': ('TRSACTION_PACKAGING' | translate), '2': ('TRSACTION_FAILURE' | translate)}[status] }}\n            </p>\n        </div>\n\n        <div class=\"info-list\">\n            <div class=\"info\">\n                <div class=\"key\" translate>TRSACTION_AMOUNT</div>\n                <div class=\"value\">{{ detail.value | coinDisplay }} CPH</div>\n            </div>\n            <div class=\"info\">\n                <div class=\"key\" translate>{{ {'0': ('FINISHED_FEE' | translate), '1': ('MINER_FEE' | translate), '2': ('MINER_FEE' | translate)}[status] }}</div>\n                <div class=\"value\">{{ miningFee | coinDisplay }} CPH</div>\n            </div>\n\n            <div class=\"split\"></div>\n\n            <div class=\"info focus\" tappable (click)=\"goAddress(detail.from)\">\n                <div class=\"key\" translate>SEND_ADDRESS</div>\n                <div class=\"value\">{{ detail.from | addCphEllipsis }}</div>\n            </div>\n            <div class=\"info focus\" tappable (click)=\"goAddress(detail.to)\">\n                <div class=\"key\" translate>RECEIVER_ADDRESS</div>\n                <div class=\"value\">{{ detail.to | addCphEllipsis }}</div>\n            </div>\n        </div>\n\n        <div class=\"split\"></div>\n\n        <div class=\"info-list\">\n            <div class=\"info focus\" (click)=\"goHash(detail.hash)\">\n                <div class=\"key\" translate>TRANSACTION_HASH</div>\n                <div class=\"value\">{{ detail.hash | addCphEllipsis }}</div>\n            </div>\n\n            <div class=\"info\" [ngClass]=\"status != 1 ? 'focus' : ''\" tappable (click)=\"goHeight(detail.blockNumber)\">\n                <div class=\"key\" translate>BLOCKCHAIN_HEIGHT</div>\n                <div class=\"value\">{{ status !== 1 ? detail.blockNumber : ('TRSACTION_PROCESSING' | translate) }}</div>\n            </div>\n\n            <div class=\"info\">\n                <div class=\"key\" translate>TRANSACTION_TIME</div>\n                <div class=\"value\">{{ time | timeDisplay }}</div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/transaction-result/transaction-result.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/transaction-result/transaction-result.module.ts ***!
  \***********************************************************************/
/*! exports provided: TransactionResultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionResultPageModule", function() { return TransactionResultPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _transaction_result_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction-result.page */ "./src/app/pages/transaction-result/transaction-result.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _transaction_result_page__WEBPACK_IMPORTED_MODULE_6__["TransactionResultPage"]
    }
];
let TransactionResultPageModule = class TransactionResultPageModule {
};
TransactionResultPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_transaction_result_page__WEBPACK_IMPORTED_MODULE_6__["TransactionResultPage"]]
    })
], TransactionResultPageModule);



/***/ }),

/***/ "./src/app/pages/transaction-result/transaction-result.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/transaction-result/transaction-result.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main .header {\n  padding-top: 24px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n.main .header .logo {\n  width: 44px;\n  height: 44px;\n  background: url('failure.svg') center center repeat;\n  background-size: cover;\n  margin: 0 auto;\n}\n.main .header .logo.success {\n  background-image: url('success.svg');\n}\n.main .header .logo.warning {\n  background-image: url('warning.svg');\n}\n.main .header .label {\n  margin-top: 18px;\n  line-height: 20px;\n  font-size: 14px;\n  color: var(--title-color);\n}\n.main .split {\n  background: var(--input-background-color);\n  height: 20px;\n  margin: 0 -18px;\n}\n.info-list .info {\n  height: 44px;\n  display: -webkit-box;\n  display: flex;\n  line-height: 44px;\n}\n.info-list .key {\n  color: var(--tips-color);\n  font-size: 14px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.info-list .value {\n  color: var(--title-color);\n  font-size: 14px;\n  text-align: right;\n  word-break: break-all;\n}\n.info-list .focus .value {\n  color: var(--main-color);\n}\n.info-list .address .value {\n  line-height: 18px;\n  color: var(--main-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jeXBoZXIwMS9nby9zcmMvZ2l0aHViLmNvbS9jeXBoZXJpdW0vd2FsbGV0YXBwL3NyYy9hcHAvcGFnZXMvdHJhbnNhY3Rpb24tcmVzdWx0L3RyYW5zYWN0aW9uLXJlc3VsdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RyYW5zYWN0aW9uLXJlc3VsdC90cmFuc2FjdGlvbi1yZXN1bHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURFUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbURBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNBWjtBREVZO0VBQ0ksb0NBQUE7QUNBaEI7QURHWTtFQUNJLG9DQUFBO0FDRGhCO0FES1E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDSFo7QURPSTtFQUNJLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNMUjtBRFdJO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0FDUlI7QURXSTtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ1RSO0FEWUk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFFQSxpQkFBQTtFQUNBLHFCQUFBO0FDWFI7QURjSTtFQUNJLHdCQUFBO0FDWlI7QURlSTtFQUNJLGlCQUFBO0VBQ0Esd0JBQUE7QUNiUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYW5zYWN0aW9uLXJlc3VsdC90cmFuc2FjdGlvbi1yZXN1bHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICAgIC5oZWFkZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICB3aWR0aDogNDRweDtcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9mYWlsdXJlLnN2ZykgY2VudGVyIGNlbnRlciByZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgICAgICYuc3VjY2VzcyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL3N1Y2Nlc3Muc3ZnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi53YXJuaW5nIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3Mvd2FybmluZy5zdmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc3BsaXQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW46IDAgLTE4cHg7XG4gICAgfVxufVxuXG5cbi5pbmZvLWxpc3Qge1xuICAgIC5pbmZvIHtcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICB9XG5cbiAgICAua2V5IHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRpcHMtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLnZhbHVlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAvLyB3aWR0aDogMjAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgfVxuXG4gICAgLmZvY3VzIC52YWx1ZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuYWRkcmVzcyAudmFsdWUge1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIH1cbn0iLCIubWFpbiAuaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbiAuaGVhZGVyIC5sb2dvIHtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2ZhaWx1cmUuc3ZnKSBjZW50ZXIgY2VudGVyIHJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubWFpbiAuaGVhZGVyIC5sb2dvLnN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3Mvc3VjY2Vzcy5zdmcpO1xufVxuLm1haW4gLmhlYWRlciAubG9nby53YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL3dhcm5pbmcuc3ZnKTtcbn1cbi5tYWluIC5oZWFkZXIgLmxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbn1cbi5tYWluIC5zcGxpdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJhY2tncm91bmQtY29sb3IpO1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMCAtMThweDtcbn1cblxuLmluZm8tbGlzdCAuaW5mbyB7XG4gIGhlaWdodDogNDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG4uaW5mby1saXN0IC5rZXkge1xuICBjb2xvcjogdmFyKC0tdGlwcy1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZmxleDogMTtcbn1cbi5pbmZvLWxpc3QgLnZhbHVlIHtcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLmluZm8tbGlzdCAuZm9jdXMgLnZhbHVlIHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuLmluZm8tbGlzdCAuYWRkcmVzcyAudmFsdWUge1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/transaction-result/transaction-result.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/transaction-result/transaction-result.page.ts ***!
  \*********************************************************************/
/*! exports provided: TransactionResultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionResultPage", function() { return TransactionResultPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/web3c/web3c.service */ "./src/app/providers/web3c/web3c.service.ts");
/* harmony import */ var _providers_native_native_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/native/native.service */ "./src/app/providers/native/native.service.ts");
/* harmony import */ var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/global/global.service */ "./src/app/providers/global/global.service.ts");
/* harmony import */ var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/helper/helper.service */ "./src/app/providers/helper/helper.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








let TransactionResultPage = class TransactionResultPage {
    constructor(router, activatedRoute, web3c, global, helper, nav, native) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.web3c = web3c;
        this.global = global;
        this.helper = helper;
        this.nav = nav;
        this.native = native;
        this.status = 0;
        this.tx = "";
        this.detail = {};
        this.miningFee = '';
        this.time = '';
        this.wallet = "";
        let state = this.router.getCurrentNavigation().extras.state;
        if (state) {
            this.status = state.status || 0;
            this.tx = state.tx || "";
            this.time = state.time || Date.now();
            if (this.tx) {
                this.getDetailByTx();
            }
        }
        this.wallet = this.global.gWalletList[this.global.currentWalletIndex];
    }
    getDetailByTx() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //查询交易信息
            this.detail = yield this.web3c.getTxDetail(this.tx);
            console.log("Transaction detail：" + JSON.stringify(this.detail));
            this.miningFee = this.detail.gas * this.detail.gasPrice;
            this.detail.from = this.detail.from;
            this.detail.to = this.detail.to;
            // this.detail.from = this.detail.senderKey.replace(/^0x/, 'cph');
            // this.detail.to = this.detail.to.replace(/^0x/, 'cph');
        });
    }
    goHashPage() {
        this.helper.getTranslate('COMING_SOON').then(msg => {
            this.helper.toast(msg);
        });
        // if (this.status != 1) {
        //     let url = "http://scan.cph.com/#/txhash/" + this.tx;
        //     this.native.openUrlBySystemBrowser(url);
        // }
    }
    back() {
        this.nav.navigateBack('/wallet-detail');
        // this.nav.pop().then(() => this.nav.pop());
    }
    goHash(hash) {
        hash = hash.replace('0x', '');
        this.helper.toast('CPH' + hash.toUpperCase());
        // this.helper.getTranslate('COMING_SOON').then(msg => {
        //     this.helper.toast(msg);
        // });
        // if (this.status != 1) {
        //     let url = "http://scan.cph.com/#/txhash/" + this.tx;
        //     this.native.openUrlBySystemBrowser(url);
        // }
    }
    goAddress(addr) {
        addr = addr.replace('0x', '');
        this.helper.toast('CPH' + addr.toUpperCase());
        // this.helper.getTranslate('COMING_SOON').then(msg => {
        //     this.helper.toast(msg);
        // });
        // if (this.status != 1) {
        //     let url = "http://scan.cph.com/#/address/" + addr;
        //     this.native.openUrlBySystemBrowser(url);
        // }
    }
    goHeight(height) {
        this.helper.getTranslate('COMING_SOON').then(msg => {
            this.helper.toast(msg);
        });
        // if (this.status != 1) {
        //     let url = "http://scan.cph.com/#/block/" + height;
        //     this.native.openUrlBySystemBrowser(url);
        // }
    }
    ngOnInit() {
    }
};
TransactionResultPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"] },
    { type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _providers_native_native_service__WEBPACK_IMPORTED_MODULE_4__["NativeService"] }
];
TransactionResultPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transaction-result',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transaction-result.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transaction-result/transaction-result.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transaction-result.page.scss */ "./src/app/pages/transaction-result/transaction-result.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"],
        _providers_global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"],
        _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        _providers_native_native_service__WEBPACK_IMPORTED_MODULE_4__["NativeService"]])
], TransactionResultPage);



/***/ })

}]);
//# sourceMappingURL=pages-transaction-result-transaction-result-module-es2015.js.map
