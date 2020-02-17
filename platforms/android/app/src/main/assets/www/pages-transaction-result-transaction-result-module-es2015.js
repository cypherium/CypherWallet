(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transaction-result-transaction-result-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transaction-result/transaction-result.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transaction-result/transaction-result.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ 'TRANSACTION_DETAIL' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main\">\n        <div class=\"header\">\n            <div class=\"logo\" [ngClass]=\"{'0': 'success', '1': 'warning', '2': ''}[status]\"></div>\n            <p class=\"label\">\n                {{ {'0': ('TRSACTION_SUCCEED' | translate), '1': ('TRSACTION_PACKAGING' | translate), '2': ('TRSACTION_FAILURE' | translate)}[status] }}\n            </p>\n        </div>\n\n        <div class=\"info-list\">\n            <div class=\"info\">\n                <div class=\"key\" translate>TRSACTION_AMOUNT</div>\n                <div class=\"value\">{{ detail.value | coinDisplay }} CPH</div>\n            </div>\n            <div class=\"info\">\n                <div class=\"key\" translate>MINER_FEE</div>\n                <div class=\"value\">{{ miningFee | coinDisplay }} CPH</div>\n            </div>\n            <div class=\"info address\" tappable (click)=\"goAddress(detail.from)\">\n                <div class=\"key\" translate>SEND_ADDRESS</div>\n                <div class=\"value\">{{ detail.from }}</div>\n            </div>\n            <div class=\"info address\" tappable (click)=\"goAddress(detail.to)\">\n                <div class=\"key\" translate>RECEIVER_ADDRESS</div>\n                <div class=\"value\">{{ detail.to }}</div>\n            </div>\n        </div>\n\n        <div class=\"split\"></div>\n\n        <div class=\"info-list\">\n            <div class=\"info focus\" (click)=\"goHash(detail.hash)\">\n                <div class=\"key\" translate>TRANSACTION_HASH</div>\n                <div class=\"value\">{{ detail.hash | addCphEllipsis }}</div>\n            </div>\n\n            <div class=\"info\" [ngClass]=\"status != 1 ? 'focus' : ''\" tappable (click)=\"goHeight(detail.blockNumber)\">\n                <div class=\"key\" translate>BLOCKCHAIN_HEIGHT</div>\n                <div class=\"value\">{{ status !== 1 ? detail.blockNumber : '打包中' }}</div>\n            </div>\n\n            <div class=\"info\">\n                <div class=\"key\" translate>TRANSACTION_TIME</div>\n                <div class=\"value\">{{ time | timeDisplay }}</div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".main .header {\n  padding-top: 24px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n.main .header .logo {\n  width: 44px;\n  height: 44px;\n  background: url('failure.svg') center center repeat;\n  background-size: cover;\n  margin: 0 auto;\n}\n.main .header .logo.success {\n  background-image: url('success.svg');\n}\n.main .header .logo.warning {\n  background-image: url('warning.svg');\n}\n.main .header .label {\n  margin-top: 18px;\n  line-height: 20px;\n  font-size: 14px;\n  color: var(--title-color);\n}\n.main .split {\n  background: var(--input-background-color);\n  height: 20px;\n  margin: 0 -18px;\n}\n.info-list .info {\n  height: 44px;\n  display: -webkit-box;\n  display: flex;\n  line-height: 44px;\n}\n.info-list .key {\n  color: var(--tips-color);\n  font-size: 14px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.info-list .value {\n  color: var(--title-color);\n  font-size: 14px;\n  width: 200px;\n  text-align: right;\n  word-break: break-all;\n}\n.info-list .focus .value {\n  color: var(--main-color);\n}\n.info-list .address .value {\n  line-height: 18px;\n  color: var(--main-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93c3MvZ28vc3JjL2dpdGh1Yi5jb20vY3lwaGVyaXVtL3dhbGxldGFwcC9zcmMvYXBwL3BhZ2VzL3RyYW5zYWN0aW9uLXJlc3VsdC90cmFuc2FjdGlvbi1yZXN1bHQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90cmFuc2FjdGlvbi1yZXN1bHQvdHJhbnNhY3Rpb24tcmVzdWx0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FERVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1EQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDQVo7QURFWTtFQUNJLG9DQUFBO0FDQWhCO0FER1k7RUFDSSxvQ0FBQTtBQ0RoQjtBREtRO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0haO0FET0k7RUFDSSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTFI7QURXSTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtBQ1JSO0FEV0k7RUFDSSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNUUjtBRFlJO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNWUjtBRGFJO0VBQ0ksd0JBQUE7QUNYUjtBRGNJO0VBQ0ksaUJBQUE7RUFDQSx3QkFBQTtBQ1pSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHJhbnNhY3Rpb24tcmVzdWx0L3RyYW5zYWN0aW9uLXJlc3VsdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgLmhlYWRlciB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2ZhaWx1cmUuc3ZnKSBjZW50ZXIgY2VudGVyIHJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgICAgICAgJi5zdWNjZXNzIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3Mvc3VjY2Vzcy5zdmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLndhcm5pbmcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy93YXJuaW5nLnN2Zyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zcGxpdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogMCAtMThweDtcbiAgICB9XG59XG5cblxuLmluZm8tbGlzdCB7XG4gICAgLmluZm8ge1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgIH1cblxuICAgIC5rZXkge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGlwcy1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAudmFsdWUge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICB9XG5cbiAgICAuZm9jdXMgLnZhbHVlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIH1cblxuICAgIC5hZGRyZXNzIC52YWx1ZSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgfVxufSIsIi5tYWluIC5oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMjRweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluIC5oZWFkZXIgLmxvZ28ge1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvZmFpbHVyZS5zdmcpIGNlbnRlciBjZW50ZXIgcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tYWluIC5oZWFkZXIgLmxvZ28uc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9zdWNjZXNzLnN2Zyk7XG59XG4ubWFpbiAuaGVhZGVyIC5sb2dvLndhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3Mvd2FybmluZy5zdmcpO1xufVxuLm1haW4gLmhlYWRlciAubGFiZWwge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xufVxuLm1haW4gLnNwbGl0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmFja2dyb3VuZC1jb2xvcik7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwIC0xOHB4O1xufVxuXG4uaW5mby1saXN0IC5pbmZvIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbn1cbi5pbmZvLWxpc3QgLmtleSB7XG4gIGNvbG9yOiB2YXIoLS10aXBzLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbGV4OiAxO1xufVxuLmluZm8tbGlzdCAudmFsdWUge1xuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi5pbmZvLWxpc3QgLmZvY3VzIC52YWx1ZSB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cbi5pbmZvLWxpc3QgLmFkZHJlc3MgLnZhbHVlIHtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn0iXX0= */");

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





let TransactionResultPage = class TransactionResultPage {
    constructor(router, activatedRoute, web3, native) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.web3 = web3;
        this.native = native;
        this.status = 0;
        this.tx = "";
        this.detail = {};
        this.miningFee = '';
        this.time = '';
        let state = this.router.getCurrentNavigation().extras.state;
        if (state) {
            this.status = state.status || 0;
            this.tx = state.tx || "";
            this.time = state.time || Date.now();
            if (this.tx) {
                this.getDetailByTx();
            }
        }
    }
    getDetailByTx() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //查询交易信息
            this.detail = yield this.web3.getTxDetail(this.tx);
            console.log("Transaction detail：" + JSON.stringify(this.detail));
            this.miningFee = this.detail.gas * this.detail.gasPrice;
            this.detail.from = this.detail.from.replace(/^0x/, 'cph');
            this.detail.to = this.detail.to.replace(/^0x/, 'cph');
        });
    }
    goHashPage() {
        if (this.status != 1) {
            let url = "http://scan.cph.com/#/txhash/" + this.tx;
            this.native.openUrlBySystemBrowser(url);
        }
    }
    goHash(hash) {
        if (this.status != 1) {
            let url = "http://scan.cph.com/#/txhash/" + this.tx;
            this.native.openUrlBySystemBrowser(url);
        }
    }
    goAddress(addr) {
        if (this.status != 1) {
            let url = "http://scan.cph.com/#/address/" + addr;
            this.native.openUrlBySystemBrowser(url);
        }
    }
    goHeight(height) {
        if (this.status != 1) {
            let url = "http://scan.cph.com/#/block/" + height;
            this.native.openUrlBySystemBrowser(url);
        }
    }
    ngOnInit() {
    }
};
TransactionResultPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"] },
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
        _providers_native_native_service__WEBPACK_IMPORTED_MODULE_4__["NativeService"]])
], TransactionResultPage);



/***/ })

}]);
//# sourceMappingURL=pages-transaction-result-transaction-result-module-es2015.js.map