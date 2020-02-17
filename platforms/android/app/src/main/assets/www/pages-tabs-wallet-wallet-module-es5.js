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


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=\"menu\" tappable (click)=\"showWalletList()\"></ion-button>\n        </ion-buttons>\n        <ion-title>\n            {{ wallet.name }}\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button tappable (click)=\"scan()\">\n                <ion-icon size=\"small\" slot=\"icon-only\" src=\"assets/imgs/scan.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div class=\"wrapper\">\n        <div class=\"header\">\n            <div class=\"info\">\n                <p class=\"desc\" translate>WALLET_ASSET</p>\n                <div class=\"amount\">\n                    <div class=\"unit\">{{ global.selectedRate.symbol }}</div>\n                    <div class=\"interger\">{{ amountInOtherInterger }}</div>\n                    <div class=\"fraction\">{{ amountInOtherFraction }}</div>\n                </div>\n                <div class=\"wallet\">\n                    <p class=\"text\">{{ wallet.addr | addCphEllipsis }}</p>\n                    <div class=\"copy\" tappable (click)=\"copyAddr()\"></div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"btns\">\n            <div class=\"money transfer\" (click)=\"goCphSend()\" tappable>\n                <div class=\"icon\"></div>\n                <p class=\"text\" translate>SEND</p>\n            </div>\n            <div class=\"money receive\" (click)=\"goCphReceive()\" tappable>\n                <div class=\"icon\"></div>\n                <p class=\"text\" translate>RECEIVE</p>\n            </div>\n        </div>\n\n        <div class=\"wallet-list\" tappable (click)=\"goWalletDetail()\">\n            <div class=\"wallet\">\n                <div class=\"icon\"></div>\n                <div class=\"name\">CPH</div>\n                <div class=\"amount\">\n                    <p class=\"value\">{{ amount | coinDisplay }}</p>\n                    <p class=\"money-amount\">≈{{ amountInOtherDisplay }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n\n<app-my-tabs tab=\"wallet\"></app-my-tabs>\n\n<div class=\"select-wallet\" tappable *ngIf=\"ifShowWalletList\">\n    <div class=\"bg\" tappable (click)=\"closeWalletDialog()\"></div>\n    <div class=\"wallet-wrapper\">\n        <div class=\"title\">\n            <div class=\"label\" translate>SELECT_WALLET</div>\n            <div class=\"add\" tappable (click)=\"addWallet()\" *ngIf=\"global.gWalletList.length < global.maxWalletNum\">\n            </div>\n        </div>\n        <div class=\"wallet-list\" *ngFor=\"let wallet of global.gWalletList; let i = index\">\n            <div class=\"wallet\" tappable (click)=\"toggleWallet(i, wallet)\"\n                [ngClass]=\"this.wallet.walletAddr == wallet.walletAddr ? 'selected' : ''\">\n                <div class=\"wallet-name\">{{ wallet.name }}</div>\n                <div class=\"address\">{{ wallet.addr | addCphEllipsis }}</div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-alert [title]=\"alertTitle\" [desc]=\"alertDesc\" *ngIf=\"ifShowAlert\" cancelText=\"{{ 'CANCEL' | translate }}\"\n    (cancel)=\"cancelAlert()\" confirmText=\"{{ 'CONFIRM' | translate }}\" (confirm)=\"confirmAlert()\">\n</app-alert>\n\n<app-generate-privatekey *ngIf=\"ifShowPasswordPrompt\" promptDesc=\"{{ 'INPUT_PASSWORD_TIPS' | translate }}\"\n    cancelText=\"{{ 'CANCEL' | translate }}\" confirmText=\"{{ 'CONFIRM' | translate }}\" (cancel)=\"cancelPrompt()\"\n    (confirm)=\"confirmPrompt($event)\"></app-generate-privatekey>";
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


    __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: var(--ion-color-primary);\n  overflow: hidden;\n}\n\n.menu {\n  height: var(--header-height);\n  width: var(--header-height);\n  background: url('menu.svg') center center no-repeat;\n  background-size: 18px 18px;\n}\n\n.scan {\n  height: var(--header-height);\n  width: var(--header-height);\n  background-image: url('scan-white.svg') center center no-repeat !important;\n  background-size: 18px 18px;\n}\n\n.header {\n  background: var(--ion-color-primary);\n  border-radius: 0px 0px 15px 15px;\n  height: 200px;\n  color: #fff;\n}\n\n.header .title {\n  display: -webkit-box;\n  display: flex;\n  height: 44px;\n}\n\n.header .title .text {\n  -webkit-box-flex: 1;\n          flex: 1;\n  font-size: 17px;\n  line-height: 44px;\n  text-align: center;\n  margin: 0;\n}\n\n.header .info {\n  padding: 0 var(--page-padding);\n}\n\n.header .info .desc {\n  font-size: 14px;\n  line-height: 28px;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.header .info .amount {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  line-height: 1;\n  margin-top: 8px;\n}\n\n.header .info .amount .unit {\n  font-size: 10px;\n}\n\n.header .info .amount .interger {\n  font-size: 34px;\n  font-weight: bold;\n  margin: 0 2px -2px;\n}\n\n.header .info .amount .fraction {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.header .info .wallet {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 14px;\n}\n\n.header .info .wallet .text {\n  font-size: 14px;\n  line-height: 16px;\n}\n\n.header .info .wallet .copy {\n  margin-left: 8px;\n  background: url('copy-white.svg') center center no-repeat;\n  width: 12px;\n  height: 12px;\n  background-size: contain;\n}\n\n.btns {\n  background: #ffffff;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(11%, rgba(255, 255, 255, 0)), color-stop(83%, rgba(255, 255, 255, 0.84)));\n  background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 11%, rgba(255, 255, 255, 0.84) 83%);\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  height: 64px;\n  margin: 0 var(--page-padding);\n  display: -webkit-box;\n  display: flex;\n  margin-top: -32px;\n  padding: 8px 0;\n}\n\n.btns .money {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  font-size: 16px;\n  color: #000000;\n  line-height: 64px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.btns .money:first-child {\n  border-right: 1px solid #e0e0e0;\n}\n\n.btns .money .icon {\n  background: url('receive.svg') center center no-repeat;\n  width: 36px;\n  height: 36px;\n  background-size: contain;\n  margin-right: 6px;\n}\n\n.btns .money.transfer .icon {\n  background-image: url('transfer.svg');\n}\n\n.wallet-list {\n  margin-top: 15px;\n  padding: 0 var(--page-padding);\n}\n\n.wallet-list .wallet {\n  background: #ffffff;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(11%, rgba(255, 255, 255, 0)), color-stop(83%, rgba(255, 255, 255, 0.84)));\n  background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 11%, rgba(255, 255, 255, 0.84) 83%);\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n  margin-bottom: 14px;\n  display: -webkit-box;\n  display: flex;\n  height: 90px;\n  border-radius: 10px;\n  padding: 0 12px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.wallet-list .wallet .icon {\n  width: 48px;\n  height: 48px;\n  background: url('cypherium-full-logo.svg') center center no-repeat;\n  background-size: contain;\n  margin-right: 8px;\n}\n\n.wallet-list .wallet .name {\n  font-size: 22px;\n  color: #000;\n  font-weight: bold;\n  line-height: 2;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.wallet-list .wallet .amount {\n  text-align: right;\n}\n\n.wallet-list .wallet .amount .value {\n  font-size: 22px;\n  color: #000000;\n  font-weight: bold;\n}\n\n.wallet-list .wallet .amount .money-amount {\n  font-size: 14px;\n  color: #999999;\n}\n\n.select-wallet {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: var(--mask-color);\n}\n\n.select-wallet .bg {\n  width: 100%;\n  height: 100%;\n}\n\n.select-wallet .wallet-wrapper {\n  width: calc(100% - 2 * (var(--page-padding)));\n  padding: 14px 20px;\n  background: #fff;\n  border-radius: 15px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.select-wallet .wallet-wrapper .title {\n  display: -webkit-box;\n  display: flex;\n  height: 44px;\n  line-height: 44px;\n}\n\n.select-wallet .wallet-wrapper .title .label {\n  font-size: 14px;\n  color: var(--title-color);\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.select-wallet .wallet-wrapper .title .add {\n  width: 44px;\n  height: 44px;\n  background: url('add.svg') center center no-repeat;\n  background-size: 22px 22px;\n}\n\n.select-wallet .wallet-wrapper .wallet-list {\n  display: block;\n  padding: 0;\n}\n\n.select-wallet .wallet-wrapper .wallet {\n  margin-top: 10px;\n  background: rgba(0, 176, 0, 0.1);\n  border-radius: 10px;\n  color: var(--main-color);\n  padding-left: 12px;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 64px;\n  display: block;\n}\n\n.select-wallet .wallet-wrapper .wallet .wallet-name {\n  padding-top: 12px;\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.select-wallet .wallet-wrapper .wallet .address {\n  margin-top: 6px;\n  font-size: 12px;\n  line-height: 14px;\n}\n\n.select-wallet .wallet-wrapper .wallet.selected {\n  background: var(--main-color);\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93c3MvZ28vc3JjL2dpdGh1Yi5jb20vY3lwaGVyaXVtL3dhbGxldGFwcC9zcmMvYXBwL3BhZ2VzL3RhYnMvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYnMvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxzQ0FBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQ0ZGOztBRElBO0VBQ0UsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBFQUFBO0VBRUEsMEJBQUE7QUNGRjs7QURNQTtFQUNFLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBRUEsV0FBQTtBQ0pGOztBRE1FO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFWVztBQ01mOztBRGNJO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQXZCUztFQXdCVCxrQkFBQTtFQUNBLFNBQUE7QUNaTjs7QURvQkU7RUFFRSw4QkFBQTtBQ25CSjs7QURxQkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQ25CTjs7QURzQkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNwQk47O0FEc0JNO0VBQ0UsZUFBQTtBQ3BCUjs7QUR1Qk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ3JCUjs7QUR3Qk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUN0QlI7O0FEMEJJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FDeEJOOztBRDBCTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ3hCUjs7QUQyQk07RUFDRSxnQkFBQTtFQUNBLHlEQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQzFCUjs7QURnQ0E7RUFDRSxtQkFBQTtFQUNBLHNKQUFBO0VBQUEscUdBQUE7RUFLQSw2RUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDakNGOztBRG1DRTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ2pDSjs7QURtQ0k7RUFDRSwrQkFBQTtBQ2pDTjs7QURvQ0k7RUFDRSxzREFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQ25DTjs7QUR1Q007RUFDRSxxQ0FBQTtBQ3JDUjs7QUQyQ0E7RUFDRSxnQkFBQTtFQUNBLDhCQUFBO0FDeENGOztBRDBDRTtFQUNFLG1CQUFBO0VBQ0Esc0pBQUE7RUFBQSxxR0FBQTtFQUtBLDZFQUFBO0VBRUEsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQzdDSjs7QUQrQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtFQUFBO0VBRUEsd0JBQUE7RUFDQSxpQkFBQTtBQzlDTjs7QURpREk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQy9DTjs7QURrREk7RUFDRSxpQkFBQTtBQ2hETjs7QURrRE07RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDaERSOztBRG1ETTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDakRSOztBRHVEQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDZCQUFBO0FDcERGOztBRHNERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDcERKOztBRHVERTtFQUNFLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNyREo7O0FEdURJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDckROOztBRHVETTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ3JEUjs7QUR3RE07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsMEJBQUE7QUN0RFI7O0FEMERJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUN4RE47O0FEMkRJO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ3pETjs7QUQyRE07RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3pEUjs7QUQ0RE07RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDMURSOztBRDZETTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtBQzNEUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taGVhZGVyIHtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gfVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWVudSB7XG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gIHdpZHRoOiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL21lbnUuc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxOHB4IDE4cHg7XG59XG4uc2NhbiB7XG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gIHdpZHRoOiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3NjYW4td2hpdGUuc3ZnKSBjZW50ZXIgY2VudGVyXG4gICAgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMThweCAxOHB4O1xufVxuXG4kaGVhZGVySGVpZ2h0OiA0NHB4O1xuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIC8vIHBhZGRpbmctdG9wOiA0NHB4O1xuICBjb2xvcjogI2ZmZjtcblxuICAudGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAkaGVhZGVySGVpZ2h0O1xuXG4gICAgLy8gLm1lbnUsXG4gICAgLy8gLnNjYW4ge1xuICAgIC8vICAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICAgIC8vICAgICB3aWR0aDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9tZW51LnN2ZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgLy8gICAgIGJhY2tncm91bmQtc2l6ZTogMThweCAxOHB4O1xuICAgIC8vIH1cblxuICAgIC50ZXh0IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBsaW5lLWhlaWdodDogJGhlYWRlckhlaWdodDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAvLyAuc2NhbiB7XG4gICAgLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9zY2FuLXdoaXRlLnN2Zyk7XG4gICAgLy8gfVxuICB9XG5cbiAgLmluZm8ge1xuICAgIC8vIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgcGFkZGluZzogMCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xuXG4gICAgLmRlc2Mge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIH1cblxuICAgIC5hbW91bnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuXG4gICAgICAudW5pdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmludGVyZ2VyIHtcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luOiAwIDJweCAtMnB4O1xuICAgICAgfVxuXG4gICAgICAuZnJhY3Rpb24ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC53YWxsZXQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuXG4gICAgICAudGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5jb3B5IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2NvcHktd2hpdGUuc3ZnKSBjZW50ZXIgY2VudGVyXG4gICAgICAgICAgbm8tcmVwZWF0O1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5idG5zIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIC0xODBkZWcsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMSUsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg0KSA4MyVcbiAgKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogNjRweDtcbiAgbWFyZ2luOiAwIHZhcigtLXBhZ2UtcGFkZGluZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IC0zMnB4O1xuICBwYWRkaW5nOiA4cHggMDtcblxuICAubW9uZXkge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTBlMDtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcmVjZWl2ZS5zdmcpIGNlbnRlciBjZW50ZXJcbiAgICAgICAgbm8tcmVwZWF0O1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICB9XG5cbiAgICAmLnRyYW5zZmVyIHtcbiAgICAgIC5pY29uIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3RyYW5zZmVyLnN2Zyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi53YWxsZXQtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmc6IDAgdmFyKC0tcGFnZS1wYWRkaW5nKTtcblxuICAud2FsbGV0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIC0xODBkZWcsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDExJSxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NCkgODMlXG4gICAgKTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSxcbiAgICAgIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmljb24ge1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvY3lwaGVyaXVtLWZ1bGwtbG9nby5zdmcpIGNlbnRlclxuICAgICAgICBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuXG4gICAgLm5hbWUge1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAuYW1vdW50IHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAudmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLm1vbmV5LWFtb3VudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zZWxlY3Qtd2FsbGV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1hc2stY29sb3IpO1xuXG4gIC5iZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLndhbGxldC13cmFwcGVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMiAqICh2YXIoLS1wYWdlLXBhZGRpbmcpKSk7XG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBsaW5lLWhlaWdodDogNDRweDtcblxuICAgICAgLmxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAuYWRkIHtcbiAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2FkZC5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIycHggMjJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAud2FsbGV0LWxpc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIC53YWxsZXQge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTc2LCAwLCAwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgLndhbGxldC1uYW1lIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5hZGRyZXNzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgfVxuXG4gICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWVudSB7XG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gIHdpZHRoOiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL21lbnUuc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxOHB4IDE4cHg7XG59XG5cbi5zY2FuIHtcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbiAgd2lkdGg6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3Mvc2Nhbi13aGl0ZS5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMThweCAxOHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggMTVweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uaGVhZGVyIC50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDRweDtcbn1cbi5oZWFkZXIgLnRpdGxlIC50ZXh0IHtcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG4uaGVhZGVyIC5pbmZvIHtcbiAgcGFkZGluZzogMCB2YXIoLS1wYWdlLXBhZGRpbmcpO1xufVxuLmhlYWRlciAuaW5mbyAuZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG4uaGVhZGVyIC5pbmZvIC5hbW91bnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uaGVhZGVyIC5pbmZvIC5hbW91bnQgLnVuaXQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uaGVhZGVyIC5pbmZvIC5hbW91bnQgLmludGVyZ2VyIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwIDJweCAtMnB4O1xufVxuLmhlYWRlciAuaW5mbyAuYW1vdW50IC5mcmFjdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaGVhZGVyIC5pbmZvIC53YWxsZXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuLmhlYWRlciAuaW5mbyAud2FsbGV0IC50ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cbi5oZWFkZXIgLmluZm8gLndhbGxldCAuY29weSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9jb3B5LXdoaXRlLnN2ZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLmJ0bnMge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NCkgODMlKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogNjRweDtcbiAgbWFyZ2luOiAwIHZhcigtLXBhZ2UtcGFkZGluZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IC0zMnB4O1xuICBwYWRkaW5nOiA4cHggMDtcbn1cbi5idG5zIC5tb25leSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5idG5zIC5tb25leTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XG59XG4uYnRucyAubW9uZXkgLmljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcmVjZWl2ZS5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuLmJ0bnMgLm1vbmV5LnRyYW5zZmVyIC5pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3RyYW5zZmVyLnN2Zyk7XG59XG5cbi53YWxsZXQtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmc6IDAgdmFyKC0tcGFnZS1wYWRkaW5nKTtcbn1cbi53YWxsZXQtbGlzdCAud2FsbGV0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODQpIDgzJSk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53YWxsZXQtbGlzdCAud2FsbGV0IC5pY29uIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2N5cGhlcml1bS1mdWxsLWxvZ28uc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi53YWxsZXQtbGlzdCAud2FsbGV0IC5uYW1lIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBmbGV4OiAxO1xufVxuLndhbGxldC1saXN0IC53YWxsZXQgLmFtb3VudCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLndhbGxldC1saXN0IC53YWxsZXQgLmFtb3VudCAudmFsdWUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi53YWxsZXQtbGlzdCAud2FsbGV0IC5hbW91bnQgLm1vbmV5LWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5zZWxlY3Qtd2FsbGV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1hc2stY29sb3IpO1xufVxuLnNlbGVjdC13YWxsZXQgLmJnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zZWxlY3Qtd2FsbGV0IC53YWxsZXQtd3JhcHBlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyICogKHZhcigtLXBhZ2UtcGFkZGluZykpKTtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLnNlbGVjdC13YWxsZXQgLndhbGxldC13cmFwcGVyIC50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDRweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG4uc2VsZWN0LXdhbGxldCAud2FsbGV0LXdyYXBwZXIgLnRpdGxlIC5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbiAgZmxleDogMTtcbn1cbi5zZWxlY3Qtd2FsbGV0IC53YWxsZXQtd3JhcHBlciAudGl0bGUgLmFkZCB7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9hZGQuc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMnB4IDIycHg7XG59XG4uc2VsZWN0LXdhbGxldCAud2FsbGV0LXdyYXBwZXIgLndhbGxldC1saXN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG59XG4uc2VsZWN0LXdhbGxldCAud2FsbGV0LXdyYXBwZXIgLndhbGxldCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTc2LCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWxlY3Qtd2FsbGV0IC53YWxsZXQtd3JhcHBlciAud2FsbGV0IC53YWxsZXQtbmFtZSB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLnNlbGVjdC13YWxsZXQgLndhbGxldC13cmFwcGVyIC53YWxsZXQgLmFkZHJlc3Mge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG4uc2VsZWN0LXdhbGxldCAud2FsbGV0LXdyYXBwZXIgLndhbGxldC5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */";
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
    /*! ../../../providers/web3/web3.service */
    "./src/app/providers/web3/web3.service.ts");
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
      function WalletPage(router, helper, global, web3, http, storage, native, events, zone) {
        _classCallCheck(this, WalletPage);

        this.router = router;
        this.helper = helper;
        this.global = global;
        this.web3 = web3;
        this.http = http;
        this.storage = storage;
        this.native = native;
        this.events = events;
        this.zone = zone;
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
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("wallet ngoninit +++++++++...");
                    this.wallet = this.global.gWalletList[this.global.currentWalletIndex || 0] || {};
                    console.log(this.wallet);
                    this.computeValue();

                  case 4:
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.getWalletInfo(this.wallet.addr);

                  case 2:
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
                      _this.amountInOtherInterger = Math.floor(_this.amountInOther);
                      var mod = Math.floor(Math.pow(10, value.significand));
                      var amountInOtherFraction = Math.floor(_this.amountInOther * mod) % mod;
                      amountInOtherFraction = amountInOtherFraction + "";

                      while (amountInOtherFraction.length < value.significand) {
                        amountInOtherFraction = amountInOtherFraction + '0';
                      }

                      _this.amountInOtherFraction = amountInOtherFraction;
                      _this.amountInOtherDisplay = _this.amountInOtherInterger + '.' + _this.amountInOtherFraction;
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
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
          var _this2 = this;

          this.native.scan().then(function (res) {
            console.log("scan succeed。。。" + JSON.stringify(res)); // this.handleText(res.text);

            _this2.helper.handleText(res.text, function (url, method) {
              if (method == 'import') {
                _this2.ifShowPasswordPrompt = true;

                _this2.cancelPrompt = function () {
                  _this2.ifShowPasswordPrompt = false;
                };

                _this2.confirmPrompt = function () {
                  _this2.ifShowPasswordPrompt = false; //密码校验成功,开始传输keystore

                  setTimeout(function () {
                    _this2.http.post(url, {
                      keystore: _this2.wallet.keystore
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

                _this2.router.navigate(['cph-send'], navigationExtras);
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
          regeneratorRuntime.mark(function _callee3() {
            var wallet, message;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log("开始拷贝钱包地址....");
                    wallet = 'CPH' + this.wallet.addr.replace('0x', '');
                    console.log("Addr:" + wallet);
                    this.native.copy(wallet);
                    _context3.next = 6;
                    return this.helper.getTranslate('COPY_WALLET_SUCCEED');

                  case 6:
                    message = _context3.sent;
                    this.helper.toast(message);

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getWalletInfo",
        value: function getWalletInfo(addr) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.web3.getCphBalance(addr);

                  case 2:
                    this.amount = _context4.sent;

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"], _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"], _providers_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _providers_native_native_service__WEBPACK_IMPORTED_MODULE_8__["NativeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Events"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], WalletPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-tabs-wallet-wallet-module-es5.js.map