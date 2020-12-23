function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-wallet-wallet-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/wallet/wallet.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/wallet/wallet.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsWalletWalletPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=\"menu\" tappable (click)=\"showWalletList()\"></ion-button>\n        </ion-buttons>\n        <ion-title>\n            {{ wallet.name }}\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button tappable (click)=\"scan()\">\n                <ion-icon size=\"small\" slot=\"icon-only\" src=\"assets/imgs/scan.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div class=\"wrapper\">\n        <div class=\"header\">\n            <div class=\"info\">\n                <p class=\"desc\" translate>WALLET_ASSET</p>\n                <div class=\"amount\">\n                    <div class=\"unit\">{{ global.selectedRate.symbol }}</div>\n                    <div class=\"interger\">{{ amountInOtherInterger }}</div>\n                    <div class=\"fraction\">{{ amountInOtherFraction }}</div>\n                </div>\n                <div class=\"wallet\">\n                    <p class=\"text\">{{ wallet.addr | addCphEllipsis }}</p>\n                    <div class=\"copy\" tappable (click)=\"copyAddr()\"></div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"btns\">\n            <div class=\"money transfer\" (click)=\"goCphSend()\" tappable>\n                <div class=\"icon\"></div>\n                <p class=\"text\" translate>SEND</p>\n            </div>\n            <div class=\"money receive\" (click)=\"goCphReceive()\" tappable>\n                <div class=\"icon\"></div>\n                <p class=\"text\" translate>RECEIVE</p>\n            </div>\n        </div>\n\n        <div class=\"wallet-list\" tappable (click)=\"goWalletDetail()\">\n            <div class=\"wallet\">\n                <div class=\"icon\"></div>\n                <div class=\"name\">CPH</div>\n                <div class=\"amount\">\n                    <p class=\"value\">{{ amount | coinDisplay }}</p>\n                    <p class=\"money-amount\">≈{{ amountInOtherDisplay }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n\n<app-my-tabs tab=\"wallet\"></app-my-tabs>\n\n<div class=\"select-wallet\" tappable *ngIf=\"ifShowWalletList\">\n    <div class=\"bg\" tappable (click)=\"closeWalletDialog()\"></div>\n    <div class=\"wallet-wrapper\">\n        <div class=\"title\">\n            <div class=\"label\" translate>SELECT_WALLET</div>\n            <div class=\"add\" tappable (click)=\"addWallet()\" *ngIf=\"global.gWalletList.length < global.maxWalletNum\">\n            </div>\n        </div>\n\n<ion-list>\n    <ion-item-sliding *ngFor=\"let wallet of global.gWalletList; let i = index\" [attr.track]=\"0\">\n        <ion-item color=\"primary\" tappable (click)=\"toggleWallet(i, wallet)\"\n                [ngClass]=\"this.wallet.walletAddr == wallet.walletAddr ? 'selected' : ''\">\n            <ion-label class=\"wallet-label\">\n                <h3>{{ wallet.name }}</h3>\n                <p>{{ wallet.addr | addCphEllipsis }}</p>\n            </ion-label>\n        </ion-item>\n        <ion-item-options>\n            <!-- <ion-item-option color=\"favorite\" (click)=\"addFavorite(slidingItem, session)\">\n                Favorite\n            </ion-item-option> -->\n            <!-- <ion-item-option color=\"danger\" (click)=\"removeFavorite(slidingItem, session, 'Remove Favorite')\"\n                *ngIf=\"segment === 'favorites'\"> -->\n                <ion-item-option color=\"warning\" (click)=\"deletWallet(i, wallet)\">\n                Remove\n            </ion-item-option>\n        </ion-item-options>\n    </ion-item-sliding>\n</ion-list>\n        <!-- <div class=\"wallet-list\" *ngFor=\"let wallet of global.gWalletList; let i = index\">\n            <div class=\"wallet\" tappable (click)=\"toggleWallet(i, wallet)\"\n                [ngClass]=\"this.wallet.walletAddr == wallet.walletAddr ? 'selected' : ''\">\n                <div class=\"wallet-name\">{{ wallet.name }}</div>\n                <div class=\"address\">{{ wallet.addr | addCphEllipsis }}</div>\n            </div>\n        </div> -->\n    </div>\n</div>\n\n<app-alert [title]=\"alertTitle\" [desc]=\"alertDesc\" *ngIf=\"ifShowAlert\" cancelText=\"{{ 'CANCEL' | translate }}\"\n    (cancel)=\"cancelAlert()\" confirmText=\"{{ 'CONFIRM' | translate }}\" (confirm)=\"confirmAlert()\">\n</app-alert>\n\n<app-generate-privatekey [needIndex] = \"needIndex\" *ngIf=\"ifShowPasswordPrompt\" promptDesc=\"{{ 'INPUT_PASSWORD_TIPS' | translate }}\"\n    cancelText=\"{{ 'CANCEL' | translate }}\" confirmText=\"{{ 'CONFIRM' | translate }}\" (cancel)=\"cancelPrompt()\"\n    (confirm)=\"confirmPrompt($event)\"></app-generate-privatekey>";
    /***/
  },

  /***/
  "./src/app/pages/tabs/wallet/wallet.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/tabs/wallet/wallet.module.ts ***!
    \****************************************************/

  /*! exports provided: WalletPageModule */

  /***/
  function srcAppPagesTabsWalletWalletModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletPageModule", function () {
      return WalletPageModule;
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


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _wallet_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./wallet.page */
    "./src/app/pages/tabs/wallet/wallet.page.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: '',
      component: _wallet_page__WEBPACK_IMPORTED_MODULE_7__["WalletPage"]
    }];

    var WalletPageModule = function WalletPageModule() {
      _classCallCheck(this, WalletPageModule);
    };

    WalletPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_7__["WalletPage"]]
    })], WalletPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs/wallet/wallet.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/tabs/wallet/wallet.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTabsWalletWalletPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: var(--ion-color-primary);\n  overflow: hidden;\n}\n\n.menu {\n  height: var(--header-height);\n  width: var(--header-height);\n  background: url('menu.svg') center center no-repeat;\n  background-size: 18px 18px;\n}\n\n.scan {\n  height: var(--header-height);\n  width: var(--header-height);\n  background-image: url('scan-white.svg') center center no-repeat !important;\n  background-size: 18px 18px;\n}\n\n.header {\n  background: var(--ion-color-primary);\n  border-radius: 0px 0px 15px 15px;\n  height: 200px;\n  color: #fff;\n}\n\n.header .title {\n  display: -webkit-box;\n  display: flex;\n  height: 44px;\n}\n\n.header .title .text {\n  -webkit-box-flex: 1;\n          flex: 1;\n  font-size: 17px;\n  line-height: 44px;\n  text-align: center;\n  margin: 0;\n}\n\n.header .info {\n  padding: 0 var(--page-padding);\n}\n\n.header .info .desc {\n  font-size: 14px;\n  line-height: 28px;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.header .info .amount {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  line-height: 1;\n  margin-top: 8px;\n}\n\n.header .info .amount .unit {\n  font-size: 10px;\n}\n\n.header .info .amount .interger {\n  font-size: 34px;\n  font-weight: bold;\n  margin: 0 2px -2px;\n}\n\n.header .info .amount .fraction {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.header .info .wallet {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 14px;\n}\n\n.header .info .wallet .text {\n  font-size: 14px;\n  line-height: 16px;\n}\n\n.header .info .wallet .copy {\n  margin-left: 8px;\n  background: url('copy-white.svg') center center no-repeat;\n  width: 12px;\n  height: 12px;\n  background-size: contain;\n}\n\n.btns {\n  background: #ffffff;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(11%, rgba(255, 255, 255, 0)), color-stop(83%, rgba(255, 255, 255, 0.84)));\n  background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 11%, rgba(255, 255, 255, 0.84) 83%);\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  height: 64px;\n  margin: 0 var(--page-padding);\n  display: -webkit-box;\n  display: flex;\n  margin-top: -32px;\n  padding: 8px 0;\n}\n\n.btns .money {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  font-size: 16px;\n  color: #000000;\n  line-height: 64px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.btns .money:first-child {\n  border-right: 1px solid #e0e0e0;\n}\n\n.btns .money .icon {\n  background: url('receive.svg') center center no-repeat;\n  width: 36px;\n  height: 36px;\n  background-size: contain;\n  margin-right: 6px;\n}\n\n.btns .money.transfer .icon {\n  background-image: url('transfer.svg');\n}\n\n.wallet-list {\n  margin-top: 15px;\n  padding: 0 var(--page-padding);\n}\n\n.wallet-list .wallet {\n  background: #ffffff;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(11%, rgba(255, 255, 255, 0)), color-stop(83%, rgba(255, 255, 255, 0.84)));\n  background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 11%, rgba(255, 255, 255, 0.84) 83%);\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n  margin-bottom: 14px;\n  display: -webkit-box;\n  display: flex;\n  height: 90px;\n  border-radius: 10px;\n  padding: 0 12px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.wallet-list .wallet .icon {\n  width: 48px;\n  height: 48px;\n  background: url('cypherium-full-logo.svg') center center no-repeat;\n  background-size: contain;\n  margin-right: 8px;\n}\n\n.wallet-list .wallet .name {\n  font-size: 22px;\n  color: #000;\n  font-weight: bold;\n  line-height: 2;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.wallet-list .wallet .amount {\n  text-align: right;\n}\n\n.wallet-list .wallet .amount .value {\n  font-size: 22px;\n  color: #000000;\n  font-weight: bold;\n}\n\n.wallet-list .wallet .amount .money-amount {\n  font-size: 14px;\n  color: #999999;\n}\n\n.select-wallet {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: var(--mask-color);\n}\n\n.select-wallet .bg {\n  width: 100%;\n  height: 100%;\n}\n\n.select-wallet .wallet-wrapper {\n  width: calc(100% - 2 * (var(--page-padding)));\n  padding: 14px 20px;\n  background: #fff;\n  border-radius: 15px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.select-wallet .wallet-wrapper .title {\n  display: -webkit-box;\n  display: flex;\n  height: 44px;\n  line-height: 44px;\n}\n\n.select-wallet .wallet-wrapper .title .label {\n  font-size: 14px;\n  color: var(--title-color);\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.select-wallet .wallet-wrapper .title .add {\n  width: 44px;\n  height: 44px;\n  background: url('add.svg') center center no-repeat;\n  background-size: 22px 22px;\n}\n\n.select-wallet .wallet-wrapper .wallet-list {\n  display: block;\n  padding: 0;\n}\n\n.select-wallet .wallet-wrapper .wallet-item {\n  border-radius: 10px;\n  color: var(--main-color);\n}\n\n.select-wallet .wallet-wrapper .wallet {\n  margin-top: 10px;\n  background: rgba(0, 176, 0, 0.1);\n  border-radius: 10px;\n  color: var(--main-color);\n  padding-left: 12px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 64px;\n  display: block;\n}\n\n.select-wallet .wallet-wrapper .wallet .wallet-name {\n  padding-top: 12px;\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.select-wallet .wallet-wrapper .wallet .address {\n  margin-top: 6px;\n  font-size: 12px;\n  line-height: 14px;\n}\n\n.select-wallet .wallet-wrapper .wallet.selected {\n  background: var(--main-color);\n  color: #fff;\n}\n\n.wallet-label {\n  border-left: 2px solid #f1f1f0;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jeXBoZXIwMS9nby9zcmMvZ2l0aHViLmNvbS9jeXBoZXJpdW0vd2FsbGV0YXBwL3NyYy9hcHAvcGFnZXMvdGFicy93YWxsZXQvd2FsbGV0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy93YWxsZXQvd2FsbGV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHNDQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0FDRkY7O0FESUE7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEVBQUE7RUFFQSwwQkFBQTtBQ0ZGOztBRE1BO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFFQSxXQUFBO0FDSkY7O0FETUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQVZXO0FDTWY7O0FEY0k7RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsaUJBdkJTO0VBd0JULGtCQUFBO0VBQ0EsU0FBQTtBQ1pOOztBRG9CRTtFQUVFLDhCQUFBO0FDbkJKOztBRHFCSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FDbkJOOztBRHNCSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ3BCTjs7QURzQk07RUFDRSxlQUFBO0FDcEJSOztBRHVCTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDckJSOztBRHdCTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ3RCUjs7QUQwQkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7QUN4Qk47O0FEMEJNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDeEJSOztBRDJCTTtFQUNFLGdCQUFBO0VBQ0EseURBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDMUJSOztBRGdDQTtFQUNFLG1CQUFBO0VBQ0Esc0pBQUE7RUFBQSxxR0FBQTtFQUtBLDZFQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNqQ0Y7O0FEbUNFO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDakNKOztBRG1DSTtFQUNFLCtCQUFBO0FDakNOOztBRG9DSTtFQUNFLHNEQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FDbkNOOztBRHVDTTtFQUNFLHFDQUFBO0FDckNSOztBRDJDQTtFQUNFLGdCQUFBO0VBQ0EsOEJBQUE7QUN4Q0Y7O0FEMENFO0VBQ0UsbUJBQUE7RUFDQSxzSkFBQTtFQUFBLHFHQUFBO0VBS0EsNkVBQUE7RUFFQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDN0NKOztBRCtDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0VBQUE7RUFFQSx3QkFBQTtFQUNBLGlCQUFBO0FDOUNOOztBRGlESTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDL0NOOztBRGtESTtFQUNFLGlCQUFBO0FDaEROOztBRGtETTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNoRFI7O0FEbURNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNqRFI7O0FEdURBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsNkJBQUE7QUNwREY7O0FEc0RFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNwREo7O0FEdURFO0VBQ0UsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ3JESjs7QUR1REk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNyRE47O0FEdURNO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDckRSOztBRHdETTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQkFBQTtBQ3REUjs7QUQwREk7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ3hETjs7QUQwREk7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0FDeEROOztBRDBESTtFQUNFLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUN4RE47O0FEMERNO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUN4RFI7O0FEMkRNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3pEUjs7QUQ0RE07RUFDRSw2QkFBQTtFQUNBLFdBQUE7QUMxRFI7O0FEb0ZBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtBQ2pGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taGVhZGVyIHtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gfVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWVudSB7XG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gIHdpZHRoOiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL21lbnUuc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxOHB4IDE4cHg7XG59XG4uc2NhbiB7XG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gIHdpZHRoOiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3NjYW4td2hpdGUuc3ZnKSBjZW50ZXIgY2VudGVyXG4gICAgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMThweCAxOHB4O1xufVxuXG4kaGVhZGVySGVpZ2h0OiA0NHB4O1xuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIC8vIHBhZGRpbmctdG9wOiA0NHB4O1xuICBjb2xvcjogI2ZmZjtcblxuICAudGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAkaGVhZGVySGVpZ2h0O1xuXG4gICAgLy8gLm1lbnUsXG4gICAgLy8gLnNjYW4ge1xuICAgIC8vICAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICAgIC8vICAgICB3aWR0aDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9tZW51LnN2ZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgLy8gICAgIGJhY2tncm91bmQtc2l6ZTogMThweCAxOHB4O1xuICAgIC8vIH1cblxuICAgIC50ZXh0IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBsaW5lLWhlaWdodDogJGhlYWRlckhlaWdodDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAvLyAuc2NhbiB7XG4gICAgLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9zY2FuLXdoaXRlLnN2Zyk7XG4gICAgLy8gfVxuICB9XG5cbiAgLmluZm8ge1xuICAgIC8vIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgcGFkZGluZzogMCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xuXG4gICAgLmRlc2Mge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIH1cblxuICAgIC5hbW91bnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuXG4gICAgICAudW5pdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmludGVyZ2VyIHtcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luOiAwIDJweCAtMnB4O1xuICAgICAgfVxuXG4gICAgICAuZnJhY3Rpb24ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC53YWxsZXQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuXG4gICAgICAudGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5jb3B5IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2NvcHktd2hpdGUuc3ZnKSBjZW50ZXIgY2VudGVyXG4gICAgICAgICAgbm8tcmVwZWF0O1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5idG5zIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIC0xODBkZWcsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMSUsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg0KSA4MyVcbiAgKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogNjRweDtcbiAgbWFyZ2luOiAwIHZhcigtLXBhZ2UtcGFkZGluZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IC0zMnB4O1xuICBwYWRkaW5nOiA4cHggMDtcblxuICAubW9uZXkge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTBlMDtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcmVjZWl2ZS5zdmcpIGNlbnRlciBjZW50ZXJcbiAgICAgICAgbm8tcmVwZWF0O1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICB9XG5cbiAgICAmLnRyYW5zZmVyIHtcbiAgICAgIC5pY29uIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3RyYW5zZmVyLnN2Zyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi53YWxsZXQtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmc6IDAgdmFyKC0tcGFnZS1wYWRkaW5nKTtcblxuICAud2FsbGV0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIC0xODBkZWcsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDExJSxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NCkgODMlXG4gICAgKTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSxcbiAgICAgIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmljb24ge1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvY3lwaGVyaXVtLWZ1bGwtbG9nby5zdmcpIGNlbnRlclxuICAgICAgICBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuXG4gICAgLm5hbWUge1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAuYW1vdW50IHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAudmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLm1vbmV5LWFtb3VudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zZWxlY3Qtd2FsbGV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1hc2stY29sb3IpO1xuXG4gIC5iZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLndhbGxldC13cmFwcGVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMiAqICh2YXIoLS1wYWdlLXBhZGRpbmcpKSk7XG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBsaW5lLWhlaWdodDogNDRweDtcblxuICAgICAgLmxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAuYWRkIHtcbiAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2FkZC5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIycHggMjJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAud2FsbGV0LWxpc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAud2FsbGV0LWl0ZW0ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTsgICBcbiAgICB9XG4gICAgLndhbGxldCB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxNzYsIDAsIDAuMSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogNjRweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAud2FsbGV0LW5hbWUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIH1cblxuICAgICAgLmFkZHJlc3Mge1xuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiRjYXRlZ29yaWVzOiAoXG4gIGlvbmljOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXG4gIGFuZ3VsYXI6ICNhYzI4MmIsXG4gIGNvbW11bmljYXRpb246ICM4ZThkOTMsXG4gIHRvb2xpbmc6ICNmZTRjNTIsXG4gIHNlcnZpY2VzOiAjZmQ4YjJkLFxuICBkZXNpZ246ICNmZWQwMzUsXG4gIHdvcmtzaG9wOiAjNjliYjdiLFxuICBmb29kOiAjM2JjN2M0LFxuICBkb2N1bWVudGF0aW9uOiAjYjE2YmUzLFxuICBuYXZpZ2F0aW9uOiAjNjYwMGNjXG4pO1xuXG4vLyBAZWFjaCAkdHJhY2ssICR2YWx1ZSBpbiBtYXAtcmVtb3ZlKCRjYXRlZ29yaWVzKSB7XG4vLyAgIGlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9JyN7JHRyYWNrfSddIGlvbi1sYWJlbCB7XG4vLyAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkdmFsdWU7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuLy8gICB9XG4vLyB9XG5cbi53YWxsZXQtbGFiZWwge1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2YxZjFmMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICB9XG4iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tZW51IHtcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbiAgd2lkdGg6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvbWVudS5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE4cHggMThweDtcbn1cblxuLnNjYW4ge1xuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICB3aWR0aDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9zY2FuLXdoaXRlLnN2ZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxOHB4IDE4cHg7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTVweCAxNXB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXIgLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuLmhlYWRlciAudGl0bGUgLnRleHQge1xuICBmbGV4OiAxO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cbi5oZWFkZXIgLmluZm8ge1xuICBwYWRkaW5nOiAwIHZhcigtLXBhZ2UtcGFkZGluZyk7XG59XG4uaGVhZGVyIC5pbmZvIC5kZXNjIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cbi5oZWFkZXIgLmluZm8gLmFtb3VudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5oZWFkZXIgLmluZm8gLmFtb3VudCAudW5pdCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5oZWFkZXIgLmluZm8gLmFtb3VudCAuaW50ZXJnZXIge1xuICBmb250LXNpemU6IDM0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDAgMnB4IC0ycHg7XG59XG4uaGVhZGVyIC5pbmZvIC5hbW91bnQgLmZyYWN0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5oZWFkZXIgLmluZm8gLndhbGxldCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG4uaGVhZGVyIC5pbmZvIC53YWxsZXQgLnRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuLmhlYWRlciAuaW5mbyAud2FsbGV0IC5jb3B5IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2NvcHktd2hpdGUuc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uYnRucyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDExJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg0KSA4MyUpO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDAgdmFyKC0tcGFnZS1wYWRkaW5nKTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogLTMycHg7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuLmJ0bnMgLm1vbmV5IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJ0bnMgLm1vbmV5OmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTBlMDtcbn1cbi5idG5zIC5tb25leSAuaWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9yZWNlaXZlLnN2ZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG4uYnRucyAubW9uZXkudHJhbnNmZXIgLmljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvdHJhbnNmZXIuc3ZnKTtcbn1cblxuLndhbGxldC1saXN0IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZzogMCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xufVxuLndhbGxldC1saXN0IC53YWxsZXQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NCkgODMlKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndhbGxldC1saXN0IC53YWxsZXQgLmljb24ge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvY3lwaGVyaXVtLWZ1bGwtbG9nby5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLndhbGxldC1saXN0IC53YWxsZXQgLm5hbWUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGZsZXg6IDE7XG59XG4ud2FsbGV0LWxpc3QgLndhbGxldCAuYW1vdW50IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ud2FsbGV0LWxpc3QgLndhbGxldCAuYW1vdW50IC52YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLndhbGxldC1saXN0IC53YWxsZXQgLmFtb3VudCAubW9uZXktYW1vdW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuLnNlbGVjdC13YWxsZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFzay1jb2xvcik7XG59XG4uc2VsZWN0LXdhbGxldCAuYmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNlbGVjdC13YWxsZXQgLndhbGxldC13cmFwcGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAodmFyKC0tcGFnZS1wYWRkaW5nKSkpO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uc2VsZWN0LXdhbGxldCAud2FsbGV0LXdyYXBwZXIgLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbn1cbi5zZWxlY3Qtd2FsbGV0IC53YWxsZXQtd3JhcHBlciAudGl0bGUgLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xuICBmbGV4OiAxO1xufVxuLnNlbGVjdC13YWxsZXQgLndhbGxldC13cmFwcGVyIC50aXRsZSAuYWRkIHtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2FkZC5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIycHggMjJweDtcbn1cbi5zZWxlY3Qtd2FsbGV0IC53YWxsZXQtd3JhcHBlciAud2FsbGV0LWxpc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMDtcbn1cbi5zZWxlY3Qtd2FsbGV0IC53YWxsZXQtd3JhcHBlciAud2FsbGV0LWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG4uc2VsZWN0LXdhbGxldCAud2FsbGV0LXdyYXBwZXIgLndhbGxldCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTc2LCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWxlY3Qtd2FsbGV0IC53YWxsZXQtd3JhcHBlciAud2FsbGV0IC53YWxsZXQtbmFtZSB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLnNlbGVjdC13YWxsZXQgLndhbGxldC13cmFwcGVyIC53YWxsZXQgLmFkZHJlc3Mge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG4uc2VsZWN0LXdhbGxldCAud2FsbGV0LXdyYXBwZXIgLndhbGxldC5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLndhbGxldC1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2YxZjFmMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/tabs/wallet/wallet.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/tabs/wallet/wallet.page.ts ***!
    \**************************************************/

  /*! exports provided: WalletPage */

  /***/
  function srcAppPagesTabsWalletWalletPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletPage", function () {
      return WalletPage;
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
    /*! ../../../providers/global/global.service */
    "./src/app/providers/global/global.service.ts");
    /* harmony import */


    var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/helper/helper.service */
    "./src/app/providers/helper/helper.service.ts");
    /* harmony import */


    var _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/web3c/web3c.service */
    "./src/app/providers/web3c/web3c.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../providers/http/http.service */
    "./src/app/providers/http/http.service.ts");
    /* harmony import */


    var _providers_native_native_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../providers/native/native.service */
    "./src/app/providers/native/native.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var WalletPage =
    /*#__PURE__*/
    function () {
      function WalletPage(router, helper, global, web3c, http, storage, native, events, zone, navCtrl) {
        _classCallCheck(this, WalletPage);

        this.router = router;
        this.helper = helper;
        this.global = global;
        this.web3c = web3c;
        this.http = http;
        this.storage = storage;
        this.native = native;
        this.events = events;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.ifShowAlert = false;
        this.ifShowWalletList = false;
        this.wallet = {};
        this.amount = 0;
        this.amountInOther = '';
        this.amountInOtherInterger = '';
        this.amountInOtherFraction = '';
        this.amountInOtherDisplay = '';
        this.alertTitle = "";
        this.alertDesc = "";
        this.ifShowPasswordPrompt = false;
        this.cancelPrompt = null;
        this.confirmPrompt = null;
        this.interval = null;
        console.log("Wallet constructor...");
      }

      _createClass(WalletPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("Wallet ngoninit..");
        }
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
                    console.log("wallet ngoninit +++++++++...");
                    this.wallet = this.global.gWalletList[this.global.currentWalletIndex || 0] || {};
                    console.log(this.wallet);
                    this.amount = this.wallet.amount || 0;
                    this.computeValue();
                    this.interval = setInterval(function () {
                      _this.computeValue();
                    }, 10000);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "computeValue",
        value: function computeValue() {
          var _this2 = this;

          this.getWalletInfo(this.wallet.addr); //Access to exchange rate information

          this.http.get(this.global.api['getRateInfo']).subscribe(function (res) {
            console.log("Exchange rate:", res.rates);
            var unit = _this2.global.settings.valueUnit || "USD";
            var value = res.rates.find(function (item) {
              return item.currency == unit;
            });

            if (!value) {
              value = res.rates[0];
            }

            _this2.global.selectedRate = value; // Calculate an estimate of the current amount

            _this2.amountInOther = _this2.amount * value.rate;
            _this2.amountInOtherInterger = Math.floor(_this2.amountInOther);
            var mod = Math.floor(Math.pow(10, value.significand));
            var amountInOtherFraction = Math.floor(_this2.amountInOther * mod) % mod;
            amountInOtherFraction = amountInOtherFraction + "";

            while (amountInOtherFraction.length < value.significand) {
              amountInOtherFraction = amountInOtherFraction + '0';
            }

            _this2.amountInOtherFraction = amountInOtherFraction;
            _this2.amountInOtherDisplay = _this2.amountInOtherInterger + '.' + _this2.amountInOtherFraction;
          });
        }
      }, {
        key: "cancelAlert",
        value: function cancelAlert() {
          this.ifShowAlert = false;
        }
      }, {
        key: "confirmAlert",
        value: function confirmAlert() {
          this.ifShowAlert = false;
          this.native.openSettings('application');
        }
      }, {
        key: "scan",
        value: function scan() {
          var _this3 = this;

          this.native.scan().then(function (res) {
            console.log("scan succeed。。。" + JSON.stringify(res)); // this.handleText(res.text);

            _this3.helper.handleText(res.text, function (url, method) {
              if (method == 'import') {
                _this3.ifShowPasswordPrompt = true;

                _this3.cancelPrompt = function () {
                  _this3.ifShowPasswordPrompt = false;
                };

                _this3.confirmPrompt = function () {
                  _this3.ifShowPasswordPrompt = false; //Password check successful, start transmission keystore

                  setTimeout(function () {
                    _this3.http.post(url, {
                      keystore: _this3.wallet.keystore
                    }, {
                      ignoreError: true
                    }).subscribe(function (res) {
                      console.log("keystore transfered：" + res);
                    });
                  }, 100);
                };
              } else if (method == 'transfer') {
                var navigationExtras = {
                  state: {
                    address: url
                  }
                };
                console.log("navigationExtras" + navigationExtras.state.address);

                _this3.router.navigate(['cph-send'], navigationExtras);
              }
            });
          });
        }
      }, {
        key: "goCphSend",
        value: function goCphSend() {
          this.router.navigate(['cph-send']);
        }
      }, {
        key: "goCphReceive",
        value: function goCphReceive() {
          this.router.navigate(['cph-receive']);
        }
      }, {
        key: "confirmCallback",
        value: function confirmCallback() {
          this.ifShowAlert = false;
        }
      }, {
        key: "addWallet",
        value: function addWallet() {
          this.ifShowWalletList = false;
          this.router.navigate(['wallet-create']);
        }
      }, {
        key: "showWalletList",
        value: function showWalletList() {
          this.ifShowWalletList = true;
        }
      }, {
        key: "closeWalletDialog",
        value: function closeWalletDialog() {
          this.ifShowWalletList = false;
        }
      }, {
        key: "goWalletDetail",
        value: function goWalletDetail() {
          this.router.navigate(['wallet-detail']);
        }
      }, {
        key: "copyAddr",
        value: function copyAddr() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var wallet, message;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log("开始拷贝钱包地址....");
                    wallet = 'CPH' + this.wallet.addr.replace('0x', '');
                    console.log("Addr:" + wallet);
                    this.native.copy(wallet);
                    _context2.next = 6;
                    return this.helper.getTranslate('COPY_WALLET_SUCCEED');

                  case 6:
                    message = _context2.sent;
                    this.helper.toast(message);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getWalletInfo",
        value: function getWalletInfo(addr) {
          var _this4 = this;

          this.web3c.getCphBalance(addr, function (v) {
            if (_this4.amount.toString() !== v.toString() && v !== undefined) {
              _this4.amount = v;
              _this4.global.gWalletList[_this4.global.currentWalletIndex].amount = _this4.amount;

              _this4.helper.saveWallet();
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
          }
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
          }
        }
      }, {
        key: "toggleWallet",
        value: function toggleWallet(index, wallet) {
          this.ifShowWalletList = false;

          if (this.wallet.name != wallet.name) {
            this.global.currentWalletIndex = index;
            this.storage.set('localwalletindex', this.global.currentWalletIndex);
            this.wallet = wallet; // this.global.currentWallet = wallet;

            this.computeValue();
          }
        }
      }, {
        key: "deletWallet",
        value: function deletWallet(index, wallet) {
          var _this5 = this;

          this.needIndex = index;
          this.ifShowPasswordPrompt = true;

          this.cancelPrompt = function () {
            _this5.ifShowPasswordPrompt = false;
          };

          this.confirmPrompt = function () {
            _this5.ifShowPasswordPrompt = false; // 如果账号只有一个或为空，直接删除，然后跳转到创建新账号

            if (_this5.global.gWalletList.length < 2) {
              _this5.global.gWalletList.splice(index, 1);

              _this5.storage.remove('localwallet');

              _this5.storage.remove('localwalletindex');

              _this5.navCtrl.navigateRoot('/wallet-create');
            } else {
              // 1.删除列表
              _this5.global.gWalletList.splice(index, 1);

              _this5.storage.set('localwallet', JSON.stringify(_this5.global.gWalletList));

              if (_this5.wallet.name != wallet.name) {
                _this5.global.currentWalletIndex = _this5.global.gWalletList.indexOf(_this5.wallet);
              } else {
                _this5.global.currentWalletIndex = 0;
              }

              _this5.storage.set('localwalletindex', _this5.global.currentWalletIndex);

              _this5.wallet = _this5.global.gWalletList[_this5.global.currentWalletIndex]; // this.global.currentWallet = wallet;

              _this5.computeValue();
            }
          };
        }
      }]);

      return WalletPage;
    }();

    WalletPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }, {
        type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
      }, {
        type: _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"]
      }, {
        type: _providers_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _providers_native_native_service__WEBPACK_IMPORTED_MODULE_8__["NativeService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Events"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]
      }];
    };

    WalletPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wallet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wallet.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/wallet/wallet.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wallet.page.scss */
      "./src/app/pages/tabs/wallet/wallet.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"], _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"], _providers_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _providers_native_native_service__WEBPACK_IMPORTED_MODULE_8__["NativeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Events"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]])], WalletPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-tabs-wallet-wallet-module-es5.js.map
