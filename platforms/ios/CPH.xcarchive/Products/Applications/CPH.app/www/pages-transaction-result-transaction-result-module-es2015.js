(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transaction-result-transaction-result-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transaction-result/transaction-result.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transaction-result/transaction-result.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ 'TRANSACTION_DETAIL' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main\">\n        <div class=\"header\">\n            <div class=\"logo\" [ngClass]=\"{'0': 'success', '1': 'warning', '2': ''}[status]\"></div>\n            <p class=\"label\">\n                {{ {'0': ('TRSACTION_SUCCEED' | translate), '1': ('TRSACTION_PACKAGING' | translate), '2': ('TRSACTION_FAILURE' | translate)}[status] }}\n            </p>\n        </div>\n\n        <div class=\"info-list\">\n            <div class=\"info\">\n                <div class=\"key\" translate>TRSACTION_AMOUNT</div>\n                <div class=\"value\">{{ detail.value | coinDisplay }} CPH</div>\n            </div>\n            <div class=\"info\">\n                <div class=\"key\" translate>{{ {'0': ('FINISHED_FEE' | translate), '1': ('MINER_FEE' | translate), '2': ('MINER_FEE' | translate)}[status] }}</div>\n                <div class=\"value\">{{ miningFee | coinDisplay }} CPH</div>\n            </div>\n\n            <div class=\"split\"></div>\n\n            <div class=\"info focus\" tappable (click)=\"goAddress(detail.from)\">\n                <div class=\"key\" translate>SEND_ADDRESS</div>\n                <div class=\"value\">{{ detail.from | addCphEllipsis }}</div>\n            </div>\n            <div class=\"info focus\" tappable (click)=\"goAddress(detail.to)\">\n                <div class=\"key\" translate>RECEIVER_ADDRESS</div>\n                <div class=\"value\">{{ detail.to | addCphEllipsis }}</div>\n            </div>\n        </div>\n\n        <div class=\"split\"></div>\n\n        <div class=\"info-list\">\n            <div class=\"info focus\" (click)=\"goHash(detail.hash)\">\n                <div class=\"key\" translate>TRANSACTION_HASH</div>\n                <div class=\"value\">{{ detail.hash | addCphEllipsis }}</div>\n            </div>\n\n            <div class=\"info\" [ngClass]=\"status != 1 ? 'focus' : ''\" tappable (click)=\"goHeight(detail.blockNumber)\">\n                <div class=\"key\" translate>BLOCKCHAIN_HEIGHT</div>\n                <div class=\"value\">{{ status !== 1 ? detail.blockNumber : ('TRSACTION_PROCESSING' | translate) }}</div>\n            </div>\n\n            <div class=\"info\">\n                <div class=\"key\" translate>TRANSACTION_TIME</div>\n                <div class=\"value\">{{ time | timeDisplay }}</div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".main .header {\n  padding-top: 24px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n.main .header .logo {\n  width: 44px;\n  height: 44px;\n  background: url('failure.svg') center center repeat;\n  background-size: cover;\n  margin: 0 auto;\n}\n.main .header .logo.success {\n  background-image: url('success.svg');\n}\n.main .header .logo.warning {\n  background-image: url('warning.svg');\n}\n.main .header .label {\n  margin-top: 18px;\n  line-height: 20px;\n  font-size: 14px;\n  color: var(--title-color);\n}\n.main .split {\n  background: var(--input-background-color);\n  height: 20px;\n  margin: 0 -18px;\n}\n.info-list .info {\n  height: 44px;\n  display: -webkit-box;\n  display: flex;\n  line-height: 44px;\n}\n.info-list .key {\n  color: var(--tips-color);\n  font-size: 14px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.info-list .value {\n  color: var(--title-color);\n  font-size: 14px;\n  text-align: right;\n  word-break: break-all;\n}\n.info-list .focus .value {\n  color: var(--main-color);\n}\n.info-list .address .value {\n  line-height: 18px;\n  color: var(--main-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93c3MvZ28vc3JjL2dpdGh1Yi5jb20vY3lwaGVyaXVtL3dhbGxldGFwcC9zcmMvYXBwL3BhZ2VzL3RyYW5zYWN0aW9uLXJlc3VsdC90cmFuc2FjdGlvbi1yZXN1bHQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90cmFuc2FjdGlvbi1yZXN1bHQvdHJhbnNhY3Rpb24tcmVzdWx0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FERVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1EQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDQVo7QURFWTtFQUNJLG9DQUFBO0FDQWhCO0FER1k7RUFDSSxvQ0FBQTtBQ0RoQjtBREtRO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0haO0FET0k7RUFDSSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTFI7QURXSTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtBQ1JSO0FEV0k7RUFDSSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNUUjtBRFlJO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBRUEsaUJBQUE7RUFDQSxxQkFBQTtBQ1hSO0FEY0k7RUFDSSx3QkFBQTtBQ1pSO0FEZUk7RUFDSSxpQkFBQTtFQUNBLHdCQUFBO0FDYlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmFuc2FjdGlvbi1yZXN1bHQvdHJhbnNhY3Rpb24tcmVzdWx0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDI0cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvZmFpbHVyZS5zdmcpIGNlbnRlciBjZW50ZXIgcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgICAgICAgICAmLnN1Y2Nlc3Mge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9zdWNjZXNzLnN2Zyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYud2FybmluZyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL3dhcm5pbmcuc3ZnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNwbGl0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luOiAwIC0xOHB4O1xuICAgIH1cbn1cblxuXG4uaW5mby1saXN0IHtcbiAgICAuaW5mbyB7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgfVxuXG4gICAgLmtleSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10aXBzLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC52YWx1ZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgLy8gd2lkdGg6IDIwMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIH1cblxuICAgIC5mb2N1cyAudmFsdWUge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFkZHJlc3MgLnZhbHVlIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICB9XG59IiwiLm1haW4gLmhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW4gLmhlYWRlciAubG9nbyB7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9mYWlsdXJlLnN2ZykgY2VudGVyIGNlbnRlciByZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm1haW4gLmhlYWRlciAubG9nby5zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL3N1Y2Nlc3Muc3ZnKTtcbn1cbi5tYWluIC5oZWFkZXIgLmxvZ28ud2FybmluZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy93YXJuaW5nLnN2Zyk7XG59XG4ubWFpbiAuaGVhZGVyIC5sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XG59XG4ubWFpbiAuc3BsaXQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDAgLTE4cHg7XG59XG5cbi5pbmZvLWxpc3QgLmluZm8ge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xufVxuLmluZm8tbGlzdCAua2V5IHtcbiAgY29sb3I6IHZhcigtLXRpcHMtY29sb3IpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsZXg6IDE7XG59XG4uaW5mby1saXN0IC52YWx1ZSB7XG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi5pbmZvLWxpc3QgLmZvY3VzIC52YWx1ZSB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cbi5pbmZvLWxpc3QgLmFkZHJlc3MgLnZhbHVlIHtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn0iXX0= */");

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
/* harmony import */ var _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/web3/web3.service */ "./src/app/providers/web3/web3.service.ts");
/* harmony import */ var _providers_native_native_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/native/native.service */ "./src/app/providers/native/native.service.ts");
/* harmony import */ var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/global/global.service */ "./src/app/providers/global/global.service.ts");
/* harmony import */ var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/helper/helper.service */ "./src/app/providers/helper/helper.service.ts");







let TransactionResultPage = class TransactionResultPage {
    constructor(router, activatedRoute, web3, global, helper, native) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.web3 = web3;
        this.global = global;
        this.helper = helper;
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
            this.detail = yield this.web3.getTxDetail(this.tx);
            console.log("Transaction detail：" + JSON.stringify(this.detail));
            this.miningFee = this.detail.gas * this.detail.gasPrice;
            this.detail.from = this.wallet.addr.toLowerCase(); //this.detail.from;
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
    goHash(hash) {
        this.helper.getTranslate('COMING_SOON').then(msg => {
            this.helper.toast(msg);
        });
        // if (this.status != 1) {
        //     let url = "http://scan.cph.com/#/txhash/" + this.tx;
        //     this.native.openUrlBySystemBrowser(url);
        // }
    }
    goAddress(addr) {
        this.helper.getTranslate('COMING_SOON').then(msg => {
            this.helper.toast(msg);
        });
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
        _providers_native_native_service__WEBPACK_IMPORTED_MODULE_4__["NativeService"]])
], TransactionResultPage);



/***/ })

}]);
//# sourceMappingURL=pages-transaction-result-transaction-result-module-es2015.js.map