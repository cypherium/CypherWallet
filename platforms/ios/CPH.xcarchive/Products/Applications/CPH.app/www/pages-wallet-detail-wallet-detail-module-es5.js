function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wallet-detail-wallet-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-detail/wallet-detail.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-detail/wallet-detail.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWalletDetailWalletDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"white\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ wallet.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- <div class=\"my-content\"> -->\n    <div class=\"header\">\n        <div class=\"info\">\n            <div class=\"amount\">{{ amount | coinDisplay }}</div>\n            <div class=\"money\">≈ {{ amountInOtherDisplay }}</div>\n        </div>\n    </div>\n\n    <div class=\"btns\">\n        <div class=\"money transfer\" tappable (click)=\"goTransferPage()\">\n            <div class=\"icon\"></div>\n            <p class=\"text\" translate>SEND</p>\n        </div>\n        <div class=\"money receive\" (click)=\"goReceivePage()\">\n            <div class=\"icon\"></div>\n            <p class=\"text\" translate>RECEIVE</p>\n        </div>\n    </div>\n\n    <div class=\"tabs\">\n        <div class=\"tab\" [ngClass]=\"type == 0 ? 'focus' : ''\" (click)=\"toggleType(0)\">\n            <div class=\"label\" translate>ALL</div>\n        </div>\n        <div class=\"tab\" [ngClass]=\"type == 1 ? 'focus' : ''\" (click)=\"toggleType(1)\">\n            <div class=\"label\" translate>SEND</div>\n        </div>\n        <div class=\"tab\" [ngClass]=\"type == 2 ? 'focus' : ''\" (click)=\"toggleType(2)\">\n            <div class=\"label\" translate>RECEIVE</div>\n        </div>\n        <div class=\"tab\" [ngClass]=\"type == 5 ? 'focus' : ''\" (click)=\"toggleType(5)\">\n            <div class=\"label\" translate>OTHERS</div>\n        </div>\n    </div>\n\n    <div class=\"transactions\">\n        <div class=\"transaction\" *ngFor=\"let transaction of allTransactionList\" tappable\n            (click)=\"goResultPage(transaction)\">\n            <div class=\"info\">\n                <div class=\"receiver\" *ngIf=\"transaction.tx_type != 3 && transaction.tx_type != 4\">\n                    {{ (transaction.tx_type != 2 ? transaction.to : transaction.from) | addCphEllipsis }}</div>\n\n                <div class=\"receiver\" *ngIf=\"transaction.tx_type == 3 || transaction.tx_type == 4\">\n                    {{ transaction.to }}</div>\n\n                <div class=\"date\">{{ transaction.timestamp | timeDisplay }}</div>\n            </div>\n            <div class=\"detail\">\n                <div class=\"amount\"\n                    [ngClass]=\"(transaction.tx_type == 1 || transaction.tx_type == 3 )? 'send' : 'receive'\">\n                    {{ (transaction.tx_type == 1 || transaction.tx_type == 3 )? '-' : '+' }}{{ transaction.displayValue | coinDisplay }}\n                    CPH</div>\n                <div class=\"status\">{{ transaction.blockHeight }}</div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"no-more\" *ngIf=\"!loading\" translate>NOMORE</div>\n    <!-- </div> -->\n\n\n    <ion-infinite-scroll (ionInfinite)=\"getMore($event)\">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/wallet-detail/wallet-detail.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/wallet-detail/wallet-detail.module.ts ***!
    \*************************************************************/

  /*! exports provided: WalletDetailPageModule */

  /***/
  function srcAppPagesWalletDetailWalletDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletDetailPageModule", function () {
      return WalletDetailPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _wallet_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wallet-detail.page */
    "./src/app/pages/wallet-detail/wallet-detail.page.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: '',
      component: _wallet_detail_page__WEBPACK_IMPORTED_MODULE_6__["WalletDetailPage"]
    }];

    var WalletDetailPageModule = function WalletDetailPageModule() {
      _classCallCheck(this, WalletDetailPageModule);
    };

    WalletDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_wallet_detail_page__WEBPACK_IMPORTED_MODULE_6__["WalletDetailPage"]]
    })], WalletDetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/wallet-detail/wallet-detail.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/wallet-detail/wallet-detail.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWalletDetailWalletDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: var(--input-background-color);\n}\n\nion-toolbar {\n  --background: var(--main-color);\n  --color: #fff;\n}\n\nion-back-button {\n  --color: #fff;\n}\n\n.header {\n  background: var(--ion-color-primary);\n  border-radius: 0px 0px 15px 15px;\n  height: 180px;\n  color: #fff;\n}\n\n.header .title {\n  display: -webkit-box;\n  display: flex;\n  height: var(--header-height);\n}\n\n.header .title ion-back-button {\n  height: var(--header-height);\n  width: var(--header-height);\n  background: url('back.svg') center center no-repeat;\n  background-size: 15px 15px;\n}\n\n.header .title .text {\n  -webkit-box-flex: 1;\n          flex: 1;\n  font-size: 17px;\n  line-height: var(--header-height);\n  text-align: center;\n  margin: 0;\n}\n\n.header .info {\n  padding-top: 30px;\n  text-align: center;\n  color: #fff;\n}\n\n.header .info .amount {\n  font-size: 34px;\n  line-height: 40px;\n  font-weight: bold;\n}\n\n.header .info .money {\n  font-size: 14px;\n  line-height: 20px;\n  margin-top: 6px;\n}\n\n.btns {\n  background: #FFFFFF;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(11%, rgba(255, 255, 255, 0)), color-stop(83%, rgba(255, 255, 255, 0.84)));\n  background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 11%, rgba(255, 255, 255, 0.84) 83%);\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  height: 64px;\n  margin: 0 var(--page-padding);\n  display: -webkit-box;\n  display: flex;\n  margin-top: -32px;\n  padding: 8px 0;\n}\n\n.btns .money {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  font-size: 16px;\n  color: #000000;\n  line-height: 64px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.btns .money:first-child {\n  border-right: 1px solid #E0E0E0;\n}\n\n.btns .money .icon {\n  background: url('receive.svg') center center no-repeat;\n  width: 36px;\n  height: 36px;\n  background-size: contain;\n  margin-right: 6px;\n}\n\n.btns .money.transfer .icon {\n  background-image: url('transfer.svg');\n}\n\n.tabs {\n  display: -webkit-box;\n  display: flex;\n  background: #FFFFFF;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(11%, rgba(255, 255, 255, 0)), color-stop(83%, rgba(255, 255, 255, 0.84)));\n  background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 11%, rgba(255, 255, 255, 0.84) 83%);\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  margin: 14px var(--page-padding);\n}\n\n.tabs .tab {\n  font-size: 14px;\n  color: var(--tips-color);\n  text-align: center;\n  height: 48px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.tabs .tab .label {\n  line-height: 46px;\n  border-bottom: 2px solid #fff;\n  display: inline-block;\n}\n\n.tabs .tab.focus .label {\n  color: var(--main-color);\n  border-color: var(--main-color);\n}\n\n.no-more {\n  color: var(--tips-color);\n  font-size: 12px;\n  padding: 20px 0;\n  line-height: 18px;\n  text-align: center;\n}\n\n.transactions {\n  background: #FAFAFA;\n  margin: 0 var(--page-padding);\n}\n\n.transactions .transaction {\n  border-bottom: 1px solid var(--border-color);\n  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);\n  height: 64px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.transactions .transaction .info {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.transactions .transaction .info .receiver {\n  font-size: 14px;\n  line-height: 16px;\n  color: var(--title-color);\n}\n\n.transactions .transaction .info .date {\n  margin-top: 8px;\n  font-size: 12px;\n  color: var(--tips-color);\n}\n\n.transactions .transaction .detail {\n  text-align: right;\n}\n\n.transactions .transaction .detail .amount {\n  font-size: 16px;\n  line-height: 20px;\n  color: var(--main-color);\n}\n\n.transactions .transaction .detail .amount.receive {\n  color: #FF4521;\n}\n\n.transactions .transaction .detail .status {\n  margin-top: 4px;\n  font-size: 12px;\n  color: var(--tips-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93c3MvZ28vc3JjL2dpdGh1Yi5jb20vY3lwaGVyaXVtL3dhbGxldGFwcC9zcmMvYXBwL3BhZ2VzL3dhbGxldC1kZXRhaWwvd2FsbGV0LWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dhbGxldC1kZXRhaWwvd2FsbGV0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQ0FBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUVBLFdBQUE7QUNBSjs7QURFSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0FDQVI7O0FERVE7RUFDSSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQ0FaOztBREdRO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDRFo7O0FES0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0hSOztBREtRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNIWjs7QURNUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNKWjs7QURTQTtFQUNJLG1CQUFBO0VBQ0Esc0pBQUE7RUFBQSxxR0FBQTtFQUNBLDZFQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNOSjs7QURRSTtFQUNJLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ05SOztBRFFRO0VBQ0ksK0JBQUE7QUNOWjs7QURTUTtFQUNJLHNEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FDUFo7O0FEV1k7RUFDSSxxQ0FBQTtBQ1RoQjs7QURlQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0pBQUE7RUFBQSxxR0FBQTtFQUNBLDZFQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ1pKOztBRGNJO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDWlI7O0FEY1E7RUFDSSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUNaWjs7QURnQlk7RUFDSSx3QkFBQTtFQUNBLCtCQUFBO0FDZGhCOztBRHFCQTtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDbEJKOztBRHFCQTtFQUNJLG1CQUFBO0VBRUEsNkJBQUE7QUNuQko7O0FEcUJJO0VBQ0ksNENBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDbkJSOztBRHFCUTtFQUNJLG1CQUFBO1VBQUEsT0FBQTtBQ25CWjs7QURxQlk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ25CaEI7O0FEc0JZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ3BCaEI7O0FEd0JRO0VBQ0ksaUJBQUE7QUN0Qlo7O0FEd0JZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUN0QmhCOztBRHdCZ0I7RUFDSSxjQUFBO0FDdEJwQjs7QUQwQlk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDeEJoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dhbGxldC1kZXRhaWwvd2FsbGV0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgLS1jb2xvcjogI2ZmZjtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICAtLWNvbG9yOiAjZmZmO1xufVxuXG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICAvLyBwYWRkaW5nLXRvcDogNDRweDtcbiAgICBjb2xvcjogI2ZmZjtcblxuICAgIC50aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG5cbiAgICAgICAgaW9uLWJhY2stYnV0dG9uIHtcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gICAgICAgICAgICB3aWR0aDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmFjay5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNXB4IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmluZm8ge1xuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2ZmZjtcblxuICAgICAgICAuYW1vdW50IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAubW9uZXkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5idG5zIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDApIDExJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg0KSA4MyUpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIG1hcmdpbjogMCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogLTMycHg7XG4gICAgcGFkZGluZzogOHB4IDA7XG5cbiAgICAubW9uZXkge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRTBFMEUwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL3JlY2VpdmUuc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLnRyYW5zZmVyIHtcbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvdHJhbnNmZXIuc3ZnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAwKSAxMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NCkgODMlKTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogMTRweCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xuXG4gICAgLnRhYiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRpcHMtY29sb3IpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgICYuZm9jdXMge1xuICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubm8tbW9yZSB7XG4gICAgY29sb3I6IHZhcigtLXRpcHMtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udHJhbnNhY3Rpb25zIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICAgIC8vIGJveC1zaGFkb3c6IDAgMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIG1hcmdpbjogMCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xuXG4gICAgLnRyYW5zYWN0aW9uIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgZmxleDogMTtcblxuICAgICAgICAgICAgLnJlY2VpdmVyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRpcHMtY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgICAgICAgLmFtb3VudCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcblxuICAgICAgICAgICAgICAgICYucmVjZWl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkY0NTIxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGlwcy1jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTVweCAxNXB4O1xuICBoZWlnaHQ6IDE4MHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXIgLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbn1cbi5oZWFkZXIgLnRpdGxlIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gIHdpZHRoOiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2JhY2suc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxNXB4IDE1cHg7XG59XG4uaGVhZGVyIC50aXRsZSAudGV4dCB7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cbi5oZWFkZXIgLmluZm8ge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXIgLmluZm8gLmFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmhlYWRlciAuaW5mbyAubW9uZXkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5idG5zIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODQpIDgzJSk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbjogMCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAtMzJweDtcbiAgcGFkZGluZzogOHB4IDA7XG59XG4uYnRucyAubW9uZXkge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYnRucyAubW9uZXk6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRTBFMEUwO1xufVxuLmJ0bnMgLm1vbmV5IC5pY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL3JlY2VpdmUuc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbi5idG5zIC5tb25leS50cmFuc2ZlciAuaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy90cmFuc2Zlci5zdmcpO1xufVxuXG4udGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDExJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg0KSA4MyUpO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxNHB4IHZhcigtLXBhZ2UtcGFkZGluZyk7XG59XG4udGFicyAudGFiIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tdGlwcy1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmbGV4OiAxO1xufVxuLnRhYnMgLnRhYiAubGFiZWwge1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi50YWJzIC50YWIuZm9jdXMgLmxhYmVsIHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4ubm8tbW9yZSB7XG4gIGNvbG9yOiB2YXIoLS10aXBzLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50cmFuc2FjdGlvbnMge1xuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICBtYXJnaW46IDAgdmFyKC0tcGFnZS1wYWRkaW5nKTtcbn1cbi50cmFuc2FjdGlvbnMgLnRyYW5zYWN0aW9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udHJhbnNhY3Rpb25zIC50cmFuc2FjdGlvbiAuaW5mbyB7XG4gIGZsZXg6IDE7XG59XG4udHJhbnNhY3Rpb25zIC50cmFuc2FjdGlvbiAuaW5mbyAucmVjZWl2ZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xufVxuLnRyYW5zYWN0aW9ucyAudHJhbnNhY3Rpb24gLmluZm8gLmRhdGUge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLXRpcHMtY29sb3IpO1xufVxuLnRyYW5zYWN0aW9ucyAudHJhbnNhY3Rpb24gLmRldGFpbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnRyYW5zYWN0aW9ucyAudHJhbnNhY3Rpb24gLmRldGFpbCAuYW1vdW50IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuLnRyYW5zYWN0aW9ucyAudHJhbnNhY3Rpb24gLmRldGFpbCAuYW1vdW50LnJlY2VpdmUge1xuICBjb2xvcjogI0ZGNDUyMTtcbn1cbi50cmFuc2FjdGlvbnMgLnRyYW5zYWN0aW9uIC5kZXRhaWwgLnN0YXR1cyB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tdGlwcy1jb2xvcik7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/wallet-detail/wallet-detail.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/wallet-detail/wallet-detail.page.ts ***!
    \***********************************************************/

  /*! exports provided: WalletDetailPage */

  /***/
  function srcAppPagesWalletDetailWalletDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletDetailPage", function () {
      return WalletDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/global/global.service */
    "./src/app/providers/global/global.service.ts");
    /* harmony import */


    var _providers_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/http/http.service */
    "./src/app/providers/http/http.service.ts");
    /* harmony import */


    var _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/web3/web3.service */
    "./src/app/providers/web3/web3.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../providers/helper/helper.service */
    "./src/app/providers/helper/helper.service.ts");

    var WalletDetailPage =
    /*#__PURE__*/
    function () {
      function WalletDetailPage(global, http, web3, helper, router) {
        _classCallCheck(this, WalletDetailPage);

        this.global = global;
        this.http = http;
        this.web3 = web3;
        this.helper = helper;
        this.router = router;
        this.allTransactionList = [];
        this.pageno = 1;
        this.pageSize = 10;
        this.type = 0;
        this.wallet = {};
        this.amount = "";
        this.amountInOther = "";
        this.amountInOtherDisplay = "";
        this.blockHeight = "";
        this.more = false;
        this.loading = true;
      }

      _createClass(WalletDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.wallet = this.global.gWalletList[this.global.currentWalletIndex];
                    console.log("钱包：" + JSON.stringify(this.wallet));
                    _context.next = 4;
                    return this.web3.getBlockHeight();

                  case 4:
                    this.blockHeight = _context.sent;
                    this.getTransactionList();
                    _context.next = 8;
                    return this.web3.getCphBalance(this.wallet.addr);

                  case 8:
                    this.amount = _context.sent;
                    //获取汇率信息
                    this.http.get(this.global.api['getRateInfo']).subscribe(function (res) {
                      console.log("汇率：", res.rates);
                      var unit = _this.global.settings.valueUnit || "USD";
                      var value = res.rates.find(function (item) {
                        return item.currency == unit;
                      });

                      if (!value) {
                        value = res.rates[0];
                      }

                      _this.global.selectedRate = value; //计算当前金额的估算

                      _this.amountInOther = _this.amount * value.rate;
                      var amountInOtherInterger = Math.floor(_this.amountInOther);
                      var mod = Math.floor(Math.pow(10, value.significand));
                      var amountInOtherFraction = Math.floor(_this.amountInOther * mod) % mod;
                      amountInOtherFraction = amountInOtherFraction + "";

                      while (amountInOtherFraction.length < value.significand) {
                        amountInOtherFraction = amountInOtherFraction + '0';
                      }

                      _this.amountInOtherDisplay = amountInOtherInterger + '.' + amountInOtherFraction;
                    });

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "goTransferPage",
        value: function goTransferPage() {
          this.router.navigate(['cph-send']);
        }
      }, {
        key: "goReceivePage",
        value: function goReceivePage() {
          this.router.navigate(['cph-receive']);
        }
      }, {
        key: "getTransactionList",
        value: function getTransactionList() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var pledge, drawback, finished, url;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.helper.getTranslate('PLEDGE_CONTRACT_MINING');

                  case 2:
                    pledge = _context2.sent;
                    _context2.next = 5;
                    return this.helper.getTranslate('DRAWBACK_CONTRACT_MINING');

                  case 5:
                    drawback = _context2.sent;
                    _context2.next = 8;
                    return this.helper.getTranslate('FINISHED');

                  case 8:
                    finished = _context2.sent;
                    this.loading = true; //获取交易列表

                    url = this.global.api['getTransList'];
                    return _context2.abrupt("return", this.http.post(url, {
                      addr: '0x' + this.wallet.addr.replace('0x', ''),
                      txType: this.type,
                      pageIndex: this.pageno,
                      pageSize: this.pageSize
                    }).subscribe(function (res) {
                      if (res.err_no == 0) {
                        _this2.loading = false;

                        if (res.transactions) {
                          res.transactions.forEach(function (item) {
                            if (item.tx_type == 1 || item.tx_type == 2) {
                              item.displayValue = _this2.web3.web3.utils.fromWei(item.value, 'ether');
                            } else {
                              item.displayValue = _this2.web3.web3.utils.fromWei(item.tx_type_ext, 'ether');
                            }

                            var height = _this2.blockHeight - item.block_number;

                            if (item.block_number == -2) {
                              item.blockHeight = "pending";
                            } else if (height < 12) {
                              item.blockHeight = height + "/12";
                            } else {
                              item.blockHeight = finished;
                            }

                            if (item.tx_type == 3) {
                              item.to = pledge;
                            } else if (item.tx_type == 4) {
                              item.to = drawback;
                            }
                          });

                          if (_this2.pageno == 1) {
                            _this2.allTransactionList = res.transactions || [];
                          } else {
                            _this2.allTransactionList = _this2.allTransactionList.concat(res.transactions || []);
                          }

                          _this2.more = _this2.allTransactionList.length < res.count;
                          console.log(_this2.allTransactionList.length, res.count);
                        } else {
                          _this2.allTransactionList = [];
                        }
                      }
                    }));

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "goResultPage",
        value: function goResultPage(transaction) {
          var navigationExtras = {
            state: {
              tx: transaction.tx_hash,
              status: 0 //0-成功，1:打包中，2:失败

            }
          }; //前往交易结果页

          this.router.navigate(['transaction-result'], navigationExtras);
        }
      }, {
        key: "toggleType",
        value: function toggleType(type) {
          if (this.type != type) {
            this.type = type;
            this.pageno = 1;
            this.getTransactionList();
          }
        }
      }, {
        key: "getMore",
        value: function getMore(infiniteScroll) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (this.more) {
                      _context3.next = 3;
                      break;
                    }

                    infiniteScroll.target.complete();
                    return _context3.abrupt("return", false);

                  case 3:
                    this.pageno++;
                    this.loading = true;
                    _context3.next = 7;
                    return this.getTransactionList();

                  case 7:
                    this.loading = false;
                    infiniteScroll.target.complete();

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return WalletDetailPage;
    }();

    WalletDetailPage.ctorParameters = function () {
      return [{
        type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
      }, {
        type: _providers_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }, {
        type: _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"]
      }, {
        type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    WalletDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wallet-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wallet-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet-detail/wallet-detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wallet-detail.page.scss */
      "./src/app/pages/wallet-detail/wallet-detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _providers_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"], _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], WalletDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-wallet-detail-wallet-detail-module-es5.js.map