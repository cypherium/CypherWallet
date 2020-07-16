function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cph-send-cph-send-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cph-send/cph-send.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cph-send/cph-send.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCphSendCphSendPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <!-- <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons> -->\n        <ion-title>{{ 'SEND' | translate }}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button tappable (click)=\"scan()\">\n                <ion-icon size=\"small\" slot=\"icon-only\" src=\"assets/imgs/scan.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main\">\n        <div class=\"input-text-wrapper\">\n            <div class=\"label\">\n                <div class=\"desc\">{{ 'SEND_AMOUNT' | translate }}</div>\n                <div class=\"amount\">\n                    <span class=\"tip\">{{ 'BALANCE' | translate }}</span> {{ amount | coinDisplay }} CPH\n                </div>\n            </div>\n            <div class=\"input-wrapper\">\n                <input type=\"number\" inputmode='decimal' (keyup)=\"checkAmount()\" (keypress)= \"hideKeyboard($event)\" [(ngModel)]=\"payAmount\"\n                    placeholder=\"{{ 'INPUT_AMOUNT_TIPS' | translate }}\">\n            </div>\n        </div>\n        <div class=\"error-text\" *ngIf=\"amountError\">{{ amountError }}</div>\n\n        <div class=\"input-text-wrapper\">\n            <div class=\"label\" translate>RECEIVE_ADDRESS</div>\n            <div class=\"input-wrapper\">\n                <input type=\"text\" (keyup)=\"checkAddr()\" (keypress)= \"hideKeyboard($event)\" [(ngModel)]=\"receiveAddress\"\n                    placeholder=\"{{ 'INPUT_ADDR_TIPS' | translate }}\">\n            </div>\n        </div>\n        <div class=\"error-text\" *ngIf=\"addressError\">{{ addressError }}</div>\n\n        <div class=\"range-wrapper\">\n            <div class=\"label\">\n                <div class=\"desc\" translate>MINER_FEE</div>\n                <div class=\"amount\">\n                    <span class=\"tip\">{{ (range * 21000 / 1000000000) | coinDisplay }} CPH</span>\n                </div>\n            </div>\n\n            <div class=\"range\">\n                <ion-range mode=\"ios\" (ionChange)=\"changeRange($event)\" [(ngModel)]=\"range\" [min]=\"min\"\n                    [max]=\"max\"></ion-range>\n                <ion-label class=\"desc\">\n                    <p translate>SLOW</p>\n                    <p translate>QUICK</p>\n                </ion-label>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"confirm-button\"\n        [ngClass]=\"(!payAmount || addressError || amountError || !receiveAddress || !amount) ? 'disabled' : ''\"\n        (click)=\"transferConfirm()\" translate=\"\">\n        CONFIRM</div>\n        <div>    <ion-button (click)=\"showFingerprintAuthDlg()\">show fingerprint auth dialog  </ion-button>\n        </div>\n</ion-content>\n\n<app-generate-privatekey *ngIf=\"ifShowPasswordPrompt\" promptDesc=\"{{ 'INPUT_PASSWORD_TIPS' | translate }}\"\n    cancelText=\"{{ 'CANCEL' | translate }}\" confirmText=\"{{ 'CONFIRM' | translate }}\" (cancel)=\"cancelPrompt()\"\n    (confirm)=\"confirmPrompt($event)\"></app-generate-privatekey>\n\n<app-alert [title]=\"alertTitle\" [desc]=\"alertDesc\" *ngIf=\"ifShowAlert\" cancelText=\"{{ 'CANCEL' | translate }}\"\n    (cancel)=\"cancelAlert()\" confirmText=\"{{ 'CONFIRM' | translate }}\" (confirm)=\"confirmAlert()\">\n</app-alert>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pincode-modal/pincode-modal.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pincode-modal/pincode-modal.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPincodeModalPincodeModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button outline (click)=\"dismiss(false)\">Cancel</ion-button>\n      </ion-buttons>\n      <ion-title class=\"ion-text-center\">{{ title }}</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button outline (click)=\"forgotPinCode()\">Forgot</ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  <app-keypad [codeViewStyle]=\"codeViewStyle\" (change)=\"eventCapture($event)\"></app-keypad>\n      <app-generate-privatekey *ngIf=\"ifShowPasswordPrompt\" promptDesc=\"{{ 'INPUT_PASSWORD_TIPS' | translate }}\"\n        cancelText=\"{{ 'CANCEL' | translate }}\" confirmText=\"{{ 'CONFIRM' | translate }}\" (cancel)=\"cancelPrompt()\"\n        (confirm)=\"confirmPrompt($event)\"></app-generate-privatekey>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/cph-send/cph-send.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/cph-send/cph-send.module.ts ***!
    \***************************************************/

  /*! exports provided: CphSendPageModule */

  /***/
  function srcAppPagesCphSendCphSendModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CphSendPageModule", function () {
      return CphSendPageModule;
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


    var _cph_send_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cph-send.page */
    "./src/app/pages/cph-send/cph-send.page.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _pincode_modal_pincode_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../pincode-modal/pincode-modal.module */
    "./src/app/pages/pincode-modal/pincode-modal.module.ts");

    var routes = [{
      path: '',
      component: _cph_send_page__WEBPACK_IMPORTED_MODULE_6__["CphSendPage"]
    }];

    var CphSendPageModule = function CphSendPageModule() {
      _classCallCheck(this, CphSendPageModule);
    };

    CphSendPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], _pincode_modal_pincode_modal_module__WEBPACK_IMPORTED_MODULE_10__["PincodeModalPageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_cph_send_page__WEBPACK_IMPORTED_MODULE_6__["CphSendPage"]]
    })], CphSendPageModule);
    /***/
  },

  /***/
  "./src/app/pages/cph-send/cph-send.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/cph-send/cph-send.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCphSendCphSendPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main {\n  padding-top: 24px;\n}\n.main .label {\n  display: -webkit-box;\n  display: flex;\n}\n.main .label .desc {\n  -webkit-box-flex: 1;\n          flex: 1;\n  line-height: 44px;\n}\n.main .label .tip {\n  color: var(--tips-color);\n  font-size: 12px;\n  line-height: 44px;\n}\n.main .range-wrapper {\n  margin-top: 18px;\n}\n.main .range ion-range {\n  --bar-background: var(--border-color);\n  --bar-active-background: var(--main-color);\n  --bar-height: 4px;\n  --knob-background: var(--main-color);\n  --knob-size: 24px;\n  padding: 0;\n}\n.main .desc {\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--tip-color);\n  overflow: hidden;\n}\n.main .desc p {\n  float: left;\n}\n.main .desc p:last-child {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jeXBoZXIwMS9nby9zcmMvZ2l0aHViLmNvbS9jeXBoZXJpdW0vd2FsbGV0YXBwL3NyYy9hcHAvcGFnZXMvY3BoLXNlbmQvY3BoLXNlbmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcGgtc2VuZC9jcGgtc2VuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKO0FEQ0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNDUjtBRENRO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EsaUJBQUE7QUNDWjtBREVRO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBWjtBRElJO0VBQ0ksZ0JBQUE7QUNGUjtBRFFRO0VBQ0kscUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNOWjtBRFVJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ1JSO0FEVVE7RUFDSSxXQUFBO0FDUlo7QURXUTtFQUNJLFlBQUE7QUNUWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NwaC1zZW5kL2NwaC1zZW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcblxuICAgIC5sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgLmRlc2Mge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpcCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGlwcy1jb2xvcik7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5yYW5nZS13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICB9XG5cbiAgICAucmFuZ2Uge1xuICAgICAgICAvLyBwYWRkaW5nLXRvcDogMjBweDtcblxuICAgICAgICBpb24tcmFuZ2Uge1xuICAgICAgICAgICAgLS1iYXItYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICAgIC0tYmFyLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICAgICAgICAgIC0tYmFyLWhlaWdodDogNHB4O1xuICAgICAgICAgICAgLS1rbm9iLWJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICAgICAgICAgICAgLS1rbm9iLXNpemU6IDI0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRlc2Mge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGlwLWNvbG9yKTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgcDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIubWFpbiB7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xufVxuLm1haW4gLmxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluIC5sYWJlbCAuZGVzYyB7XG4gIGZsZXg6IDE7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xufVxuLm1haW4gLmxhYmVsIC50aXAge1xuICBjb2xvcjogdmFyKC0tdGlwcy1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG4ubWFpbiAucmFuZ2Utd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG4ubWFpbiAucmFuZ2UgaW9uLXJhbmdlIHtcbiAgLS1iYXItYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgLS1iYXItYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICAtLWJhci1oZWlnaHQ6IDRweDtcbiAgLS1rbm9iLWJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICAtLWtub2Itc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMDtcbn1cbi5tYWluIC5kZXNjIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6IHZhcigtLXRpcC1jb2xvcik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbiAuZGVzYyBwIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubWFpbiAuZGVzYyBwOmxhc3QtY2hpbGQge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/cph-send/cph-send.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/cph-send/cph-send.page.ts ***!
    \*************************************************/

  /*! exports provided: CphSendPage */

  /***/
  function srcAppPagesCphSendCphSendPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CphSendPage", function () {
      return CphSendPage;
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


    var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/helper/helper.service */
    "./src/app/providers/helper/helper.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../providers/web3/web3.service */
    "./src/app/providers/web3/web3.service.ts");
    /* harmony import */


    var _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../providers/native/native.service */
    "./src/app/providers/native/native.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/ngx/index.js");
    /* harmony import */


    var _pincode_modal_pincode_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../pincode-modal/pincode-modal.page */
    "./src/app/pages/pincode-modal/pincode-modal.page.ts");
    /* harmony import */


    var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/fingerprint-aio/ngx */
    "./node_modules/@ionic-native/fingerprint-aio/ngx/index.js");

    var CphSendPage =
    /*#__PURE__*/
    function () {
      function CphSendPage(router, // private clipboard: Clipboard,
      helper, global, storage, web3, nav, platform, keyboard, native, modalController, alertController, fingerAuth) {
        var _this = this;

        _classCallCheck(this, CphSendPage);

        this.router = router;
        this.helper = helper;
        this.global = global;
        this.storage = storage;
        this.web3 = web3;
        this.nav = nav;
        this.platform = platform;
        this.keyboard = keyboard;
        this.native = native;
        this.modalController = modalController;
        this.alertController = alertController;
        this.fingerAuth = fingerAuth;
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
        var state = this.router.getCurrentNavigation().extras.state;

        if (state) {
          this.receiveAddress = state.address;
        }

        this.wallet = this.global.gWalletList[this.global.currentWalletIndex];

        if (!this.wallet.payment) {
          this.presentAlertConfirm();
        }

        this.amount = this.wallet.amount || 0;
        this.updateWalletInfo();
        this.interval = setInterval(function () {
          _this.updateWalletInfo();
        }, 10000);
      }

      _createClass(CphSendPage, [{
        key: "showFingerprintAuthDlg",
        value: function showFingerprintAuthDlg() {
          var _this2 = this;

          this.fingerAuth.isAvailable().then(function (result) {
            console.log('showFingerprintAuthDlg' + result);

            _this2.fingerAuth.show({
              // clientId: 'fingerprint-Demo',
              // clientSecret: 'password', //Only necessary for Android
              // disableBackup:true  //Only for Android(optional)
              title: "face id",
              subtitle: "face id test",
              description: "Some biometric description"
            }).then(function (result) {
              return console.log('fingerAuth.show' + result);
            }).catch(function (error) {
              return console.log('fingerAuth.show error' + error.message);
            });
          }).catch(function (error) {
            return console.log('showFingerprintAuthDlg error' + error.message);
          });
          ;
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var header, message, comfirm, cancel, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.helper.getTranslate('PAYMENT_PASSWORD');

                  case 2:
                    header = _context.sent;
                    _context.next = 5;
                    return this.helper.getTranslate('PAYMENT_PASSWORD_M');

                  case 5:
                    message = _context.sent;
                    _context.next = 8;
                    return this.helper.getTranslate('CONFIRM');

                  case 8:
                    comfirm = _context.sent;
                    _context.next = 11;
                    return this.helper.getTranslate('CANCEL');

                  case 11:
                    cancel = _context.sent;
                    _context.next = 14;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: [{
                        text: cancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          _this3.nav.pop();
                        }
                      }, {
                        text: comfirm,
                        handler: function handler() {
                          _this3.router.navigate(['/setting']);
                        }
                      }]
                    });

                  case 14:
                    alert = _context.sent;
                    _context.next = 17;
                    return alert.present();

                  case 17:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // back() {
        //     this.nav.navigateBack('/wallet');
        // }

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
        key: "updateWalletInfo",
        value: function updateWalletInfo() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.web3.getCphBalance(this.wallet.addr, function (v) {
                      if (_this4.amount.toString() !== v.toString() && v !== undefined) {
                        _this4.amount = v;
                        _this4.global.gWalletList[_this4.global.currentWalletIndex].amount = _this4.amount;

                        _this4.helper.saveWallet();
                      }
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "scan",
        value: function scan() {
          var _this5 = this;

          this.native.scan().then(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee5() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log("SCAN RESULT：", res);
                      this.helper.handleText(res.text, function (url, method) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this6, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee4() {
                          var result, message;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  if (!(method == 'transfer')) {
                                    _context4.next = 12;
                                    break;
                                  }

                                  _context4.next = 3;
                                  return this.web3.isCphAddr(url);

                                case 3:
                                  result = _context4.sent;

                                  if (!(result == 0)) {
                                    _context4.next = 8;
                                    break;
                                  }

                                  this.receiveAddress = url;
                                  _context4.next = 12;
                                  break;

                                case 8:
                                  _context4.next = 10;
                                  return this.helper.getTranslate('UNKNOWN_RESULT');

                                case 10:
                                  message = _context4.sent;
                                  this.helper.toast(message);

                                case 12:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }, function (res) {// if (res == 1) {
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
      }, {
        key: "cancelPrompt",
        value: function cancelPrompt() {
          this.ifShowPasswordPrompt = false;
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this7 = this;

            var title, modal;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.helper.getTranslate('PAYMENT_PASSWORD');

                  case 2:
                    title = _context7.sent;
                    _context7.next = 5;
                    return this.modalController.create({
                      component: _pincode_modal_pincode_modal_page__WEBPACK_IMPORTED_MODULE_10__["PincodeModalPage"],
                      cssClass: "pincode-modal",
                      componentProps: {
                        'title': title
                      }
                    });

                  case 5:
                    modal = _context7.sent;
                    _context7.next = 8;
                    return modal.present();

                  case 8:
                    modal.onDidDismiss().then(function (s) {
                      if (typeof s.data !== 'undefined' && s.data.dismissed !== false) {
                        //获取私钥
                        setTimeout(function () {
                          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this7, void 0, void 0,
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee6() {
                            var ret, error;
                            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                              while (1) {
                                switch (_context6.prev = _context6.next) {
                                  case 0:
                                    ret = this.helper.decryptPrivateKey(this.wallet.payment, s.data.dismissed);

                                    if (!ret.flag) {
                                      _context6.next = 5;
                                      break;
                                    }

                                    this.transfer(ret.privateKey);
                                    _context6.next = 9;
                                    break;

                                  case 5:
                                    _context6.next = 7;
                                    return this.helper.getTranslate('PAYMENT_PASSWORD_ERROR');

                                  case 7:
                                    error = _context6.sent;
                                    this.helper.toast(error);

                                  case 9:
                                  case "end":
                                    return _context6.stop();
                                }
                              }
                            }, _callee6, this);
                          }));
                        }, 50);
                      }
                    });

                  case 9:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "confirmPrompt",
        value: function confirmPrompt(privateKey) {
          console.log("Private key...", privateKey);
          this.ifShowPasswordPrompt = false;
          this.transfer(privateKey);
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
        key: "checkAmount",
        value: function checkAmount() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var amount, message, _message, _message2;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.amountError = "";
                    amount = +this.payAmount;

                    if (!(amount <= 0)) {
                      _context8.next = 8;
                      break;
                    }

                    _context8.next = 5;
                    return this.helper.getTranslate('AMOUNT_ILLEGAL');

                  case 5:
                    message = _context8.sent;
                    this.amountError = message;
                    return _context8.abrupt("return");

                  case 8:
                    if (!(amount <= 0.0001)) {
                      _context8.next = 14;
                      break;
                    }

                    _context8.next = 11;
                    return this.helper.getTranslate('AMOUNT_SMALL');

                  case 11:
                    _message = _context8.sent;
                    this.amountError = _message;
                    return _context8.abrupt("return");

                  case 14:
                    console.log("".concat(amount, ", ").concat(this.range, ", ").concat(this.amount));

                    if (!(amount + this.range * 21000 / 1000000000 > this.amount)) {
                      _context8.next = 21;
                      break;
                    }

                    _context8.next = 18;
                    return this.helper.getTranslate('BALANCE_INFFICIENT');

                  case 18:
                    _message2 = _context8.sent;
                    this.amountError = _message2;
                    return _context8.abrupt("return");

                  case 21:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "hideKeyboard",
        value: function hideKeyboard(e) {
          if (e && (e.key === "Enter" || e.key === "Return")) {
            this.keyboard.hide();
          }
        }
      }, {
        key: "checkAddr",
        value: function checkAddr() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var result, message, _message3;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.addressError = "";
                    _context9.next = 3;
                    return this.web3.isCphAddr(this.receiveAddress.toLowerCase());

                  case 3:
                    result = _context9.sent;

                    if (!(result == -1)) {
                      _context9.next = 11;
                      break;
                    }

                    _context9.next = 7;
                    return this.helper.getTranslate('ADDRESS_EMPTY');

                  case 7:
                    message = _context9.sent;
                    this.addressError = message;
                    _context9.next = 16;
                    break;

                  case 11:
                    if (!(result == -2)) {
                      _context9.next = 16;
                      break;
                    }

                    _context9.next = 14;
                    return this.helper.getTranslate('ADDRESS_ERROR');

                  case 14:
                    _message3 = _context9.sent;
                    this.addressError = _message3;

                  case 16:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "changeRange",
        value: function changeRange(e) {}
      }, {
        key: "transferConfirm",
        value: function transferConfirm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.checkAmount();

                  case 2:
                    if (!this.amountError) {
                      _context10.next = 4;
                      break;
                    }

                    return _context10.abrupt("return");

                  case 4:
                    _context10.next = 6;
                    return this.checkAddr();

                  case 6:
                    if (!this.addressError) {
                      _context10.next = 8;
                      break;
                    }

                    return _context10.abrupt("return");

                  case 8:
                    //引导用户输入密码
                    // this.ifShowPasswordPrompt = true;
                    //引导用户输入支付密码
                    this.presentModal();

                  case 9:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "transfer",
        value: function transfer(privatekey) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var _this8 = this;

            var address;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    address = this.receiveAddress.toLowerCase().replace('cph', '0x');
                    this.web3.transferCph(this.wallet.addr, address, this.payAmount, this.range, privatekey, function (err, tx) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this8, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee11() {
                        var navigationExtras, message;
                        return regeneratorRuntime.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                console.log("Transaction callback.......", err, tx);

                                if (!(err === null)) {
                                  _context11.next = 6;
                                  break;
                                }

                                // resolve(tx);
                                // this.helper.toast("交易成功");
                                navigationExtras = {
                                  state: {
                                    tx: tx,
                                    status: 1 //0-成功，1:打包中，2:失败

                                  }
                                }; //前往交易结果页

                                this.router.navigate(['transaction-result'], navigationExtras);
                                _context11.next = 23;
                                break;

                              case 6:
                                _context11.next = 8;
                                return this.helper.getTranslate('TRANSACTION_FAILED');

                              case 8:
                                message = _context11.sent;

                                if (!(err.message.toLowerCase().indexOf('insufficient funds for gas') > -1)) {
                                  _context11.next = 15;
                                  break;
                                }

                                _context11.next = 12;
                                return this.helper.getTranslate('BALANCE_INFFICIENT');

                              case 12:
                                message = _context11.sent;
                                _context11.next = 22;
                                break;

                              case 15:
                                if (!(err.message.toLowerCase().indexOf('replacement transaction underpriced') > -1)) {
                                  _context11.next = 21;
                                  break;
                                }

                                _context11.next = 18;
                                return this.helper.getTranslate('NONCE_ERROR');

                              case 18:
                                message = _context11.sent;
                                _context11.next = 22;
                                break;

                              case 21:
                                message = message + ': ' + err.message;

                              case 22:
                                this.helper.toast(message);

                              case 23:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11, this);
                      }));
                    });

                  case 2:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }]);

      return CphSendPage;
    }();

    CphSendPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }, {
        type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_6__["Web3Service"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
      }, {
        type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Keyboard"]
      }, {
        type: _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
      }, {
        type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_11__["FingerprintAIO"]
      }];
    };

    CphSendPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cph-send',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cph-send.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cph-send/cph-send.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cph-send.page.scss */
      "./src/app/pages/cph-send/cph-send.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"], _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_6__["Web3Service"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Keyboard"], _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_11__["FingerprintAIO"]])], CphSendPage);
    /***/
  },

  /***/
  "./src/app/pages/pincode-modal/pincode-modal.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/pincode-modal/pincode-modal.module.ts ***!
    \*************************************************************/

  /*! exports provided: PincodeModalPageModule */

  /***/
  function srcAppPagesPincodeModalPincodeModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PincodeModalPageModule", function () {
      return PincodeModalPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _pincode_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pincode-modal.page */
    "./src/app/pages/pincode-modal/pincode-modal.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js"); // import { KeypadComponent } from '../../components/keypad/keypad.component';


    var routes = [{
      path: '',
      component: _pincode_modal_page__WEBPACK_IMPORTED_MODULE_5__["PincodeModalPage"]
    }];

    var PincodeModalPageModule = function PincodeModalPageModule() {
      _classCallCheck(this, PincodeModalPageModule);
    };

    PincodeModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]],
      entryComponents: [_pincode_modal_page__WEBPACK_IMPORTED_MODULE_5__["PincodeModalPage"]],
      declarations: [_pincode_modal_page__WEBPACK_IMPORTED_MODULE_5__["PincodeModalPage"]]
    })], PincodeModalPageModule);
    /***/
  },

  /***/
  "./src/app/pages/pincode-modal/pincode-modal.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/pincode-modal/pincode-modal.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPincodeModalPincodeModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BpbmNvZGUtbW9kYWwvcGluY29kZS1tb2RhbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/pincode-modal/pincode-modal.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/pincode-modal/pincode-modal.page.ts ***!
    \***********************************************************/

  /*! exports provided: PincodeModalPage */

  /***/
  function srcAppPagesPincodeModalPincodeModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PincodeModalPage", function () {
      return PincodeModalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PincodeModalPage =
    /*#__PURE__*/
    function () {
      function PincodeModalPage(router, modalCtrl) {
        _classCallCheck(this, PincodeModalPage);

        this.router = router;
        this.modalCtrl = modalCtrl;
        this.codeViewStyle = 'star'; // star or value

        this.ifShowPasswordPrompt = false;
        this.confirmPrompt = null;
        this.cancelPrompt = null;
      }

      _createClass(PincodeModalPage, [{
        key: "dismiss",
        value: function dismiss(s) {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalCtrl.dismiss({
            'dismissed': s
          });
        }
      }, {
        key: "forgotPinCode",
        value: function forgotPinCode() {
          var _this9 = this;

          this.ifShowPasswordPrompt = true;

          this.cancelPrompt = function () {
            _this9.ifShowPasswordPrompt = false;
          };

          this.confirmPrompt = function (prv) {
            _this9.ifShowPasswordPrompt = false;
            var navigationExtras = {
              state: {
                privateKey: prv
              }
            };

            _this9.router.navigate(['payment-password'], navigationExtras);

            _this9.dismiss(false);
          };
        }
      }, {
        key: "eventCapture",
        value: function eventCapture(event) {
          this.Pin = event;
          this.dismiss(this.Pin);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onKeyboardButtonClick",
        value: function onKeyboardButtonClick(key) {
          // Log the pressed key
          console.log(key);
        }
      }]);

      return PincodeModalPage;
    }();

    PincodeModalPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    PincodeModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pincode-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pincode-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pincode-modal/pincode-modal.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pincode-modal.page.scss */
      "./src/app/pages/pincode-modal/pincode-modal.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], PincodeModalPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-cph-send-cph-send-module-es5.js.map