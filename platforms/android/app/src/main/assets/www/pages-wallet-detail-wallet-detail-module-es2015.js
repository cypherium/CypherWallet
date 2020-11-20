(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wallet-detail-wallet-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-detail/wallet-detail.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-detail/wallet-detail.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"white\" defaultHref=\"wallet\"></ion-back-button>\n            <!-- <ion-button  (click)=\"back()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n            </ion-button> -->\n        </ion-buttons>\n        <ion-title>{{ wallet.name }}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button tappable (click)=\"scan()\">\n                <ion-icon size=\"small\" slot=\"icon-only\" src=\"assets/imgs/scan.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- <div class=\"my-content\"> -->\n    <div class=\"header\">\n        <div class=\"info\">\n            <div class=\"amount\">{{ amount | coinDisplay }}</div>\n            <div class=\"money\">≈ {{ amountInOtherDisplay }}</div>\n        </div>\n    </div>\n\n    <div class=\"btns\">\n        <div class=\"money transfer\" tappable (click)=\"goTransferPage()\">\n            <div class=\"icon\"></div>\n            <p class=\"text\" translate>SEND</p>\n        </div>\n        <div class=\"money receive\" (click)=\"goReceivePage()\">\n            <div class=\"icon\"></div>\n            <p class=\"text\" translate>RECEIVE</p>\n        </div>\n    </div>\n\n    <div class=\"tabs\">\n        <div class=\"tab\" [ngClass]=\"type == 0 ? 'focus' : ''\" (click)=\"toggleType(0)\">\n            <div class=\"label\" translate>ALL</div>\n        </div>\n        <div class=\"tab\" [ngClass]=\"type == 1 ? 'focus' : ''\" (click)=\"toggleType(1)\">\n            <div class=\"label\" translate>SEND</div>\n        </div>\n        <div class=\"tab\" [ngClass]=\"type == 2 ? 'focus' : ''\" (click)=\"toggleType(2)\">\n            <div class=\"label\" translate>RECEIVE</div>\n        </div>\n        <!-- <div class=\"tab\" [ngClass]=\"type == 5 ? 'focus' : ''\" (click)=\"toggleType(5)\">\n            <div class=\"label\" translate>OTHERS</div>\n        </div> -->\n    </div>\n\n    <div class=\"transactions\">\n        <div class=\"transaction\" *ngFor=\"let transaction of allTransactionList\" tappable\n            (click)=\"goResultPage(transaction)\">\n            <div class=\"info\">\n                <div class=\"receiver\" *ngIf=\"transaction.tx_type != 3 && transaction.tx_type != 4\">\n                    {{ (transaction.tx_type != 2 ? transaction.to : transaction.from) | addCphEllipsis }}</div>\n\n                <div class=\"receiver\" *ngIf=\"transaction.tx_type == 3 || transaction.tx_type == 4\">\n                    {{ transaction.to }}</div>\n\n                <div class=\"date\">{{ transaction.timestamp/1000000 | timeDisplay }}</div>\n            </div>\n            <div class=\"detail\">\n                <div class=\"amount\"\n                    [ngClass]=\"(transaction.tx_type == 1 || transaction.tx_type == 3 )? 'send' : 'receive'\">\n                    {{ (transaction.tx_type == 1 || transaction.tx_type == 3 )? '-' : '+' }}{{ transaction.displayValue | coinDisplay }}\n                    CPH</div>\n                <div class=\"status\">{{ transaction.blockHeight }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"lds-css ng-scope\" *ngIf=\"loading\">\n        <div class=\"lds-wrapper\">\n            <div class=\"lds-flickr\">\n                <div></div>\n                <div></div>\n                <div></div>\n            </div>\n            <!-- <div class=\"progress\">{{ rate }}%</div> -->\n        </div>\n    </div>\n    <div class=\"no-more\" *ngIf=\"!more\" translate>NOMORE</div>\n    <!-- </div> -->\n\n\n    <ion-infinite-scroll (ionInfinite)=\"getMore($event)\">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/wallet-detail/wallet-detail.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/wallet-detail/wallet-detail.module.ts ***!
  \*************************************************************/
/*! exports provided: WalletDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletDetailPageModule", function() { return WalletDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wallet_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet-detail.page */ "./src/app/pages/wallet-detail/wallet-detail.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _wallet_detail_page__WEBPACK_IMPORTED_MODULE_6__["WalletDetailPage"]
    }
];
let WalletDetailPageModule = class WalletDetailPageModule {
};
WalletDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_wallet_detail_page__WEBPACK_IMPORTED_MODULE_6__["WalletDetailPage"]]
    })
], WalletDetailPageModule);



/***/ }),

/***/ "./src/app/pages/wallet-detail/wallet-detail.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/wallet-detail/wallet-detail.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--input-background-color);\n}\n\nion-toolbar {\n  --background: var(--main-color);\n  --color: #fff;\n}\n\nion-back-button {\n  --color: #fff;\n}\n\n.header {\n  background: var(--ion-color-primary);\n  border-radius: 0px 0px 15px 15px;\n  height: 180px;\n  color: #fff;\n}\n\n.header .title {\n  display: -webkit-box;\n  display: flex;\n  height: var(--header-height);\n}\n\n.header .title ion-back-button {\n  height: var(--header-height);\n  width: var(--header-height);\n  background: url('back.svg') center center no-repeat;\n  background-size: 15px 15px;\n}\n\n.header .title .text {\n  -webkit-box-flex: 1;\n          flex: 1;\n  font-size: 17px;\n  line-height: var(--header-height);\n  text-align: center;\n  margin: 0;\n}\n\n.header .info {\n  padding-top: 30px;\n  text-align: center;\n  color: #fff;\n}\n\n.header .info .amount {\n  font-size: 34px;\n  line-height: 40px;\n  font-weight: bold;\n}\n\n.header .info .money {\n  font-size: 14px;\n  line-height: 20px;\n  margin-top: 6px;\n}\n\n.btns {\n  background: #FFFFFF;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(11%, rgba(255, 255, 255, 0)), color-stop(83%, rgba(255, 255, 255, 0.84)));\n  background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 11%, rgba(255, 255, 255, 0.84) 83%);\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  height: 64px;\n  margin: 0 var(--page-padding);\n  display: -webkit-box;\n  display: flex;\n  margin-top: -32px;\n  padding: 8px 0;\n}\n\n.btns .money {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  font-size: 16px;\n  color: #000000;\n  line-height: 64px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.btns .money:first-child {\n  border-right: 1px solid #E0E0E0;\n}\n\n.btns .money .icon {\n  background: url('receive.svg') center center no-repeat;\n  width: 36px;\n  height: 36px;\n  background-size: contain;\n  margin-right: 6px;\n}\n\n.btns .money.transfer .icon {\n  background-image: url('transfer.svg');\n}\n\n.tabs {\n  display: -webkit-box;\n  display: flex;\n  background: #FFFFFF;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(11%, rgba(255, 255, 255, 0)), color-stop(83%, rgba(255, 255, 255, 0.84)));\n  background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 11%, rgba(255, 255, 255, 0.84) 83%);\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  margin: 14px var(--page-padding);\n}\n\n.tabs .tab {\n  font-size: 14px;\n  color: var(--tips-color);\n  text-align: center;\n  height: 48px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.tabs .tab .label {\n  line-height: 46px;\n  border-bottom: 2px solid #fff;\n  display: inline-block;\n}\n\n.tabs .tab.focus .label {\n  color: var(--main-color);\n  border-color: var(--main-color);\n}\n\n.no-more {\n  color: var(--tips-color);\n  font-size: 12px;\n  padding: 20px 0;\n  line-height: 18px;\n  text-align: center;\n}\n\n.transactions {\n  background: #FBFBFB;\n  margin: 0 var(--page-padding);\n}\n\n.transactions .transaction {\n  border-bottom: 1px solid var(--border-color);\n  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);\n  height: 64px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.transactions .transaction .info {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.transactions .transaction .info .receiver {\n  font-size: 14px;\n  line-height: 16px;\n  color: var(--title-color);\n}\n\n.transactions .transaction .info .date {\n  margin-top: 8px;\n  font-size: 12px;\n  color: var(--tips-color);\n}\n\n.transactions .transaction .detail {\n  text-align: right;\n}\n\n.transactions .transaction .detail .amount {\n  font-size: 16px;\n  line-height: 20px;\n  color: var(--main-color);\n}\n\n.transactions .transaction .detail .amount.receive {\n  color: var(--main-color);\n}\n\n.transactions .transaction .detail .amount.send {\n  color: #FF4521;\n}\n\n.transactions .transaction .detail .status {\n  margin-top: 4px;\n  font-size: 12px;\n  color: var(--tips-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jeXBoZXIwMS9nby9zcmMvZ2l0aHViLmNvbS9jeXBoZXJpdW0vd2FsbGV0YXBwL3NyYy9hcHAvcGFnZXMvd2FsbGV0LWRldGFpbC93YWxsZXQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2FsbGV0LWRldGFpbC93YWxsZXQtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJDQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBRUEsV0FBQTtBQ0FKOztBREVJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7QUNBUjs7QURFUTtFQUNJLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0FDQVo7O0FER1E7RUFDSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNEWjs7QURLSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDSFI7O0FES1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0haOztBRE1RO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0paOztBRFNBO0VBQ0ksbUJBQUE7RUFDQSxzSkFBQTtFQUFBLHFHQUFBO0VBQ0EsNkVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ05KOztBRFFJO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDTlI7O0FEUVE7RUFDSSwrQkFBQTtBQ05aOztBRFNRO0VBQ0ksc0RBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUNQWjs7QURXWTtFQUNJLHFDQUFBO0FDVGhCOztBRGVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzSkFBQTtFQUFBLHFHQUFBO0VBQ0EsNkVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDWko7O0FEY0k7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNaUjs7QURjUTtFQUNJLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQ1paOztBRGdCWTtFQUNJLHdCQUFBO0VBQ0EsK0JBQUE7QUNkaEI7O0FEcUJBO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNsQko7O0FEcUJBO0VBQ0ksbUJBQUE7RUFFQSw2QkFBQTtBQ25CSjs7QURxQkk7RUFDSSw0Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNuQlI7O0FEcUJRO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0FDbkJaOztBRHFCWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDbkJoQjs7QURzQlk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDcEJoQjs7QUR3QlE7RUFDSSxpQkFBQTtBQ3RCWjs7QUR3Qlk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQ3RCaEI7O0FEd0JnQjtFQUNJLHdCQUFBO0FDdEJwQjs7QUR3QmdCO0VBQ0ksY0FBQTtBQ3RCcEI7O0FEMEJZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ3hCaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93YWxsZXQtZGV0YWlsL3dhbGxldC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIC0tY29sb3I6ICNmZmY7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogI2ZmZjtcbn1cblxuLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTVweCAxNXB4O1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgLy8gcGFkZGluZy10b3A6IDQ0cHg7XG4gICAgY29sb3I6ICNmZmY7XG5cbiAgICAudGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuXG4gICAgICAgIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICAgICAgICAgICAgd2lkdGg6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2JhY2suc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTVweCAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbmZvIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG5cbiAgICAgICAgLmFtb3VudCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vbmV5IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYnRucyB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAwKSAxMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NCkgODMlKTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBtYXJnaW46IDAgdmFyKC0tcGFnZS1wYWRkaW5nKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IC0zMnB4O1xuICAgIHBhZGRpbmc6IDhweCAwO1xuXG4gICAgLm1vbmV5IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UwRTBFMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9yZWNlaXZlLnN2ZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi50cmFuc2ZlciB7XG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL3RyYW5zZmVyLnN2Zyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMCkgMTElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODQpIDgzJSk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46IDE0cHggdmFyKC0tcGFnZS1wYWRkaW5nKTtcblxuICAgIC50YWIge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10aXBzLWNvbG9yKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmLmZvY3VzIHtcbiAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm5vLW1vcmUge1xuICAgIGNvbG9yOiB2YXIoLS10aXBzLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRyYW5zYWN0aW9ucyB7XG4gICAgYmFja2dyb3VuZDogI0ZCRkJGQjtcbiAgICAvLyBib3gtc2hhZG93OiAwIDFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBtYXJnaW46IDAgdmFyKC0tcGFnZS1wYWRkaW5nKTtcblxuICAgIC50cmFuc2FjdGlvbiB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgICAgIC5yZWNlaXZlciB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kYXRlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXBzLWNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWwge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAgICAgICAgIC5hbW91bnQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG5cbiAgICAgICAgICAgICAgICAmLnJlY2VpdmUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuc2VuZCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkY0NTIxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGlwcy1jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTVweCAxNXB4O1xuICBoZWlnaHQ6IDE4MHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXIgLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbn1cbi5oZWFkZXIgLnRpdGxlIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gIHdpZHRoOiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2JhY2suc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxNXB4IDE1cHg7XG59XG4uaGVhZGVyIC50aXRsZSAudGV4dCB7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cbi5oZWFkZXIgLmluZm8ge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXIgLmluZm8gLmFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmhlYWRlciAuaW5mbyAubW9uZXkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5idG5zIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODQpIDgzJSk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbjogMCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAtMzJweDtcbiAgcGFkZGluZzogOHB4IDA7XG59XG4uYnRucyAubW9uZXkge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYnRucyAubW9uZXk6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRTBFMEUwO1xufVxuLmJ0bnMgLm1vbmV5IC5pY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL3JlY2VpdmUuc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbi5idG5zIC5tb25leS50cmFuc2ZlciAuaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy90cmFuc2Zlci5zdmcpO1xufVxuXG4udGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDExJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg0KSA4MyUpO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxNHB4IHZhcigtLXBhZ2UtcGFkZGluZyk7XG59XG4udGFicyAudGFiIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tdGlwcy1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmbGV4OiAxO1xufVxuLnRhYnMgLnRhYiAubGFiZWwge1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi50YWJzIC50YWIuZm9jdXMgLmxhYmVsIHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4ubm8tbW9yZSB7XG4gIGNvbG9yOiB2YXIoLS10aXBzLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50cmFuc2FjdGlvbnMge1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBtYXJnaW46IDAgdmFyKC0tcGFnZS1wYWRkaW5nKTtcbn1cbi50cmFuc2FjdGlvbnMgLnRyYW5zYWN0aW9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udHJhbnNhY3Rpb25zIC50cmFuc2FjdGlvbiAuaW5mbyB7XG4gIGZsZXg6IDE7XG59XG4udHJhbnNhY3Rpb25zIC50cmFuc2FjdGlvbiAuaW5mbyAucmVjZWl2ZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xufVxuLnRyYW5zYWN0aW9ucyAudHJhbnNhY3Rpb24gLmluZm8gLmRhdGUge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLXRpcHMtY29sb3IpO1xufVxuLnRyYW5zYWN0aW9ucyAudHJhbnNhY3Rpb24gLmRldGFpbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnRyYW5zYWN0aW9ucyAudHJhbnNhY3Rpb24gLmRldGFpbCAuYW1vdW50IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuLnRyYW5zYWN0aW9ucyAudHJhbnNhY3Rpb24gLmRldGFpbCAuYW1vdW50LnJlY2VpdmUge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG4udHJhbnNhY3Rpb25zIC50cmFuc2FjdGlvbiAuZGV0YWlsIC5hbW91bnQuc2VuZCB7XG4gIGNvbG9yOiAjRkY0NTIxO1xufVxuLnRyYW5zYWN0aW9ucyAudHJhbnNhY3Rpb24gLmRldGFpbCAuc3RhdHVzIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS10aXBzLWNvbG9yKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/wallet-detail/wallet-detail.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/wallet-detail/wallet-detail.page.ts ***!
  \***********************************************************/
/*! exports provided: WalletDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletDetailPage", function() { return WalletDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/global/global.service */ "./src/app/providers/global/global.service.ts");
/* harmony import */ var _providers_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/http/http.service */ "./src/app/providers/http/http.service.ts");
/* harmony import */ var _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/web3c/web3c.service */ "./src/app/providers/web3c/web3c.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/helper/helper.service */ "./src/app/providers/helper/helper.service.ts");
/* harmony import */ var _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/native/native.service */ "./src/app/providers/native/native.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









let WalletDetailPage = class WalletDetailPage {
    constructor(global, http, web3c, helper, native, nav, router) {
        this.global = global;
        this.http = http;
        this.web3c = web3c;
        this.helper = helper;
        this.native = native;
        this.nav = nav;
        this.router = router;
        this.allTransactionList = [];
        this.pageno = 1;
        this.pageSize = 20;
        this.type = 0;
        this.wallet = {};
        this.amount = "";
        this.amountInOther = "";
        this.amountInOtherDisplay = "";
        this.blockHeight = "";
        this.more = true;
        this.loading = false;
        this.interval = null;
        this.ifShowPasswordPrompt = false;
        this.cancelPrompt = null;
        this.confirmPrompt = null;
        this.wallet = this.global.gWalletList[this.global.currentWalletIndex];
        console.log("wallet:" + JSON.stringify(this.wallet));
        this.amount = this.wallet.amount || 0;
        this.getWalletInfo(this.wallet.addr);
        this.interval = setInterval(() => {
            this.getWalletInfo(this.wallet.addr);
        }, 10000);
    }
    ngOnInit() {
    }
    // back() {
    //     this.nav.navigateBack('/wallet');
    // }
    scan() {
        this.native.scan().then((res) => {
            console.log("scan succeed。。。" + JSON.stringify(res));
            // this.handleText(res.text);
            this.helper.handleText(res.text, (url, method) => {
                if (method == 'import') {
                    this.ifShowPasswordPrompt = true;
                    this.cancelPrompt = () => {
                        this.ifShowPasswordPrompt = false;
                    };
                    this.confirmPrompt = () => {
                        this.ifShowPasswordPrompt = false;
                        //Password check successful, start transmission keystore
                        setTimeout(() => {
                            this.http.post(url, {
                                keystore: this.wallet.keystore
                            }, {
                                ignoreError: true
                            }).subscribe(res => {
                                console.log("keystore transfered：" + res);
                            });
                        }, 100);
                    };
                }
                else if (method == 'transfer') {
                    let navigationExtras = {
                        state: {
                            address: url,
                        }
                    };
                    console.log("navigationExtras" + navigationExtras.state.address);
                    this.router.navigate(['cph-send'], navigationExtras);
                }
            });
        });
    }
    getWalletInfo(addr) {
        this.web3c.getCphBalance(addr, (v) => {
            if (this.amount.toString() !== v.toString() && v !== undefined) {
                this.amount = v;
                this.global.gWalletList[this.global.currentWalletIndex].amount = this.amount;
                this.helper.saveWallet();
            }
        });
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
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.blockHeight = await this.web3c.getBlockHeight();
            this.getTransactionList();
            //Access to exchange rate information
            this.http.get(this.global.api['getRateInfo']).subscribe(res => {
                console.log("Exchange rate:", res.rates);
                let unit = this.global.settings.valueUnit || "USD";
                let value = res.rates.find(item => item.currency == unit);
                if (!value) {
                    value = res.rates[0];
                }
                this.global.selectedRate = value;
                // Calculate an estimate of the current amount
                this.amountInOther = this.amount * value.rate;
                let amountInOtherInterger = Math.floor(this.amountInOther);
                let mod = Math.floor(Math.pow(10, value.significand));
                let amountInOtherFraction = Math.floor(this.amountInOther * mod) % mod;
                amountInOtherFraction = amountInOtherFraction + "";
                while (amountInOtherFraction.length < value.significand) {
                    amountInOtherFraction = amountInOtherFraction + '0';
                }
                this.amountInOtherDisplay = amountInOtherInterger + '.' + amountInOtherFraction;
            });
        });
    }
    goTransferPage() {
        this.router.navigate(['cph-send']);
    }
    goReceivePage() {
        this.router.navigate(['cph-receive']);
    }
    getTransactionList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let pledge = yield this.helper.getTranslate('PLEDGE_CONTRACT_MINING'), drawback = yield this.helper.getTranslate('DRAWBACK_CONTRACT_MINING');
            let finished = yield this.helper.getTranslate('FINISHED');
            this.loading = true;
            // Get a list of trades
            let url = this.global.api['getTransList'];
            return this.http.post(url, {
                addr: '0x' + this.wallet.addr.replace('0x', ''),
                txType: this.type,
                pageIndex: this.pageno,
                pageSize: this.pageSize
            }).subscribe(res => {
                this.loading = false;
                if (res.err_no == 0) {
                    this.blockHeight = this.web3c.getBlockHeight();
                    if (res.transactions) {
                        res.transactions.forEach(item => {
                            if (item.tx_type == 1 || item.tx_type == 2) {
                                item.displayValue = this.web3c.web3c.fromWei(item.value, 'cpher');
                            }
                            else {
                                item.displayValue = this.web3c.web3c.fromWei(item.tx_type_ext, 'cpher');
                            }
                            let height = this.blockHeight - item.block_number;
                            if (item.block_number == -2) {
                                item.blockHeight = "pending";
                            }
                            else if (height < 1) {
                                item.blockHeight = height + "/1";
                            }
                            else {
                                item.blockHeight = finished;
                            }
                            if (item.tx_type == 3) {
                                item.to = pledge;
                            }
                            else if (item.tx_type == 4) {
                                item.to = drawback;
                            }
                        });
                        // process sent to same adddress
                        let transactionsRes = [];
                        res.transactions.forEach(item => {
                            if (item.tx_type === 1 && item.from === item.to && this.type === 2) {
                                item.tx_type = 2;
                            }
                            else if (item.tx_type === 1 && item.from === item.to && this.type === 0) {
                                let newItem = Object.assign({}, item);
                                newItem.tx_type = 2;
                                transactionsRes = transactionsRes.concat(newItem);
                            }
                            transactionsRes = transactionsRes.concat(item);
                        });
                        if (this.pageno === 1) {
                            this.allTransactionList = transactionsRes || [];
                        }
                        else {
                            this.allTransactionList = this.allTransactionList.concat(transactionsRes || []);
                        }
                        // this.more = (this.allTransactionList.length < res.count);
                        if (Object.keys(res.transactions).length == this.pageSize) {
                            this.more = true;
                        }
                        else {
                            this.more = false;
                        }
                        console.log(this.allTransactionList.length, res.count);
                    }
                    else {
                        if (this.pageno > 1) {
                            this.pageno--;
                        }
                        else {
                            this.allTransactionList = [];
                        }
                        this.more = false;
                    }
                }
            }, e => {
                this.loading = false;
                this.helper.toast("The network is abnormal, please visit later.");
            });
        });
    }
    goResultPage(transaction) {
        let navigationExtras = {
            state: {
                tx: transaction.tx_hash,
                status: 0,
                time: transaction.timestamp / 1000000
            }
        };
        if (transaction.blockHeight === "pending") {
            navigationExtras.state.status = 1;
        }
        // Go to the transaction results page
        this.router.navigate(['transaction-result'], navigationExtras);
    }
    toggleType(type) {
        //update 
        this.getWalletInfo(this.wallet.addr);
        if (this.type != type) {
            this.type = type;
            this.pageno = 1;
            this.getTransactionList();
        }
    }
    getMore(infiniteScroll) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.more) {
                infiniteScroll.target.complete();
                return false;
            }
            this.pageno++;
            // this.loading = true;
            yield this.getTransactionList();
            // this.loading = false;
            infiniteScroll.target.complete();
        });
    }
};
WalletDetailPage.ctorParameters = () => [
    { type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _providers_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"] },
    { type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"] },
    { type: _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
WalletDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wallet-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wallet-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-detail/wallet-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wallet-detail.page.scss */ "./src/app/pages/wallet-detail/wallet-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
        _providers_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
        _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"],
        _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"],
        _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], WalletDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-wallet-detail-wallet-detail-module-es2015.js.map
