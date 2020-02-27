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


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <!-- <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons> -->\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>{{ 'SEND' | translate }}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button tappable (click)=\"scan()\">\n                <ion-icon size=\"small\" slot=\"icon-only\" src=\"assets/imgs/scan.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main\">\n        <div class=\"input-text-wrapper\">\n            <div class=\"label\">\n                <div class=\"desc\">{{ 'SEND_AMOUNT' | translate }}</div>\n                <div class=\"amount\">\n                    <span class=\"tip\">{{ 'BALANCE' | translate }}</span> {{ amount | coinDisplay }} CPH\n                </div>\n            </div>\n            <div class=\"input-wrapper\">\n                <input type=\"tel\" (keyup)=\"checkAmount()\" [(ngModel)]=\"payAmount\"\n                    placeholder=\"{{ 'INPUT_AMOUNT_TIPS' | translate }}\">\n            </div>\n        </div>\n        <div class=\"error-text\" *ngIf=\"amountError\">{{ amountError }}</div>\n\n        <div class=\"input-text-wrapper\">\n            <div class=\"label\" translate>RECEIVE_ADDRESS</div>\n            <div class=\"input-wrapper\">\n                <input type=\"text\" (keyup)=\"checkAddr()\" [(ngModel)]=\"receiveAddress\"\n                    placeholder=\"{{ 'INPUT_ADDR_TIPS' | translate }}\">\n            </div>\n        </div>\n        <div class=\"error-text\" *ngIf=\"addressError\">{{ addressError }}</div>\n\n        <div class=\"range-wrapper\">\n            <div class=\"label\">\n                <div class=\"desc\" translate>MINER_FEE</div>\n                <div class=\"amount\">\n                    <span class=\"tip\">{{ (range * 21000 / 1000000000) | coinDisplay }} CPH</span>\n                </div>\n            </div>\n\n            <div class=\"range\">\n                <ion-range mode=\"ios\" pin=\"true\" (ionChange)=\"changeRange($event)\" [(ngModel)]=\"range\" [min]=\"min\"\n                    [max]=\"max\"></ion-range>\n                <ion-label class=\"desc\">\n                    <p translate>QUICK</p>\n                    <p translate>SLOW</p>\n                </ion-label>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"confirm-button bottom-button hide-when-keyboard-shown\"\n        [ngClass]=\"(addressError || amountError || !receiveAddress || !amount) ? 'disabled' : ''\"\n        (click)=\"transferConfirm()\" translate=\"\">\n        CONFIRM</div>\n</ion-content>\n\n<app-generate-privatekey *ngIf=\"ifShowPasswordPrompt\" promptDesc=\"{{ 'INPUT_PASSWORD_TIPS' | translate }}\"\n    cancelText=\"{{ 'CANCEL' | translate }}\" confirmText=\"{{ 'CONFIRM' | translate }}\" (cancel)=\"cancelPrompt()\"\n    (confirm)=\"confirmPrompt($event)\"></app-generate-privatekey>\n\n<app-alert [title]=\"alertTitle\" [desc]=\"alertDesc\" *ngIf=\"ifShowAlert\" cancelText=\"{{ 'CANCEL' | translate }}\"\n    (cancel)=\"cancelAlert()\" confirmText=\"{{ 'CONFIRM' | translate }}\" (confirm)=\"confirmAlert()\">\n</app-alert>\n";
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

    var routes = [{
      path: '',
      component: _cph_send_page__WEBPACK_IMPORTED_MODULE_6__["CphSendPage"]
    }];

    var CphSendPageModule = function CphSendPageModule() {
      _classCallCheck(this, CphSendPageModule);
    };

    CphSendPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
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


    __webpack_exports__["default"] = ".main {\n  padding-top: 24px;\n}\n.main .label {\n  display: -webkit-box;\n  display: flex;\n}\n.main .label .desc {\n  -webkit-box-flex: 1;\n          flex: 1;\n  line-height: 44px;\n}\n.main .label .tip {\n  color: var(--tips-color);\n  font-size: 12px;\n  line-height: 44px;\n}\n.main .range-wrapper {\n  margin-top: 18px;\n}\n.main .range ion-range {\n  --bar-background: var(--border-color);\n  --bar-active-background: var(--main-color);\n  --bar-height: 4px;\n  --knob-background: var(--main-color);\n  --knob-size: 24px;\n  padding: 0;\n}\n.main .desc {\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--tip-color);\n  overflow: hidden;\n}\n.main .desc p {\n  float: left;\n}\n.main .desc p:last-child {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93c3MvZ28vc3JjL2dpdGh1Yi5jb20vY3lwaGVyaXVtL3dhbGxldGFwcC9zcmMvYXBwL3BhZ2VzL2NwaC1zZW5kL2NwaC1zZW5kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3BoLXNlbmQvY3BoLXNlbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjtBRENJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDQ1I7QURDUTtFQUNJLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGlCQUFBO0FDQ1o7QURFUTtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQVo7QURJSTtFQUNJLGdCQUFBO0FDRlI7QURRUTtFQUNJLHFDQUFBO0VBQ0EsMENBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDTlo7QURVSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNSUjtBRFVRO0VBQ0ksV0FBQTtBQ1JaO0FEV1E7RUFDSSxZQUFBO0FDVFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcGgtc2VuZC9jcGgtc2VuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG5cbiAgICAubGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5kZXNjIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXAge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRpcHMtY29sb3IpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucmFuZ2Utd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgfVxuXG4gICAgLnJhbmdlIHtcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDIwcHg7XG5cbiAgICAgICAgaW9uLXJhbmdlIHtcbiAgICAgICAgICAgIC0tYmFyLWJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgICAtLWJhci1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgICAgICAgICAtLWJhci1oZWlnaHQ6IDRweDtcbiAgICAgICAgICAgIC0ta25vYi1iYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICAgICAgICAgIC0ta25vYi1zaXplOiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kZXNjIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRpcC1jb2xvcik7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHA6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm1haW4ge1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cbi5tYWluIC5sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbiAubGFiZWwgLmRlc2Mge1xuICBmbGV4OiAxO1xuICBsaW5lLWhlaWdodDogNDRweDtcbn1cbi5tYWluIC5sYWJlbCAudGlwIHtcbiAgY29sb3I6IHZhcigtLXRpcHMtY29sb3IpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xufVxuLm1haW4gLnJhbmdlLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuLm1haW4gLnJhbmdlIGlvbi1yYW5nZSB7XG4gIC0tYmFyLWJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gIC0tYmFyLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgLS1iYXItaGVpZ2h0OiA0cHg7XG4gIC0ta25vYi1iYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgLS1rbm9iLXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDA7XG59XG4ubWFpbiAuZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS10aXAtY29sb3IpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1haW4gLmRlc2MgcCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm1haW4gLmRlc2MgcDpsYXN0LWNoaWxkIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */";
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

    var CphSendPage =
    /*#__PURE__*/
    function () {
      function CphSendPage(router, // private clipboard: Clipboard,
      helper, global, storage, web3, nav, native) {
        _classCallCheck(this, CphSendPage);

        this.router = router;
        this.helper = helper;
        this.global = global;
        this.storage = storage;
        this.web3 = web3;
        this.nav = nav;
        this.native = native;
        this.range = 25;
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
      }

      _createClass(CphSendPage, [{
        key: "back",
        value: function back() {
          this.nav.navigateBack('/wallet');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var state, obj;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.wallet = this.global.gWalletList[this.global.currentWalletIndex];
                    console.log(this.global.gWalletList, this.global.currentWalletIndex); //获取余额

                    _context.next = 4;
                    return this.web3.getCphBalance(this.wallet.addr);

                  case 4:
                    this.amount = _context.sent;
                    state = this.router.getCurrentNavigation();

                    if (state) {
                      obj = state.extras.state;
                      this.receiveAddress = obj.address;
                    }

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "scan",
        value: function scan() {
          var _this = this;

          this.native.scan().then(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log("SCAN RESULT：", res);
                      this.helper.handleText(res.text, function (url, method) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee2() {
                          var result, message;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  if (!(method == 'transfer')) {
                                    _context2.next = 12;
                                    break;
                                  }

                                  _context2.next = 3;
                                  return this.web3.isCphAddr(url);

                                case 3:
                                  result = _context2.sent;

                                  if (!(result == 0)) {
                                    _context2.next = 8;
                                    break;
                                  }

                                  this.receiveAddress = res;
                                  _context2.next = 12;
                                  break;

                                case 8:
                                  _context2.next = 10;
                                  return this.helper.getTranslate('UNKNOWN_RESULT');

                                case 10:
                                  message = _context2.sent;
                                  this.helper.toast(message);

                                case 12:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
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
          regeneratorRuntime.mark(function _callee4() {
            var amount, message, _message;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.amountError = "";
                    amount = +this.payAmount;

                    if (!(amount <= 0)) {
                      _context4.next = 8;
                      break;
                    }

                    _context4.next = 5;
                    return this.helper.getTranslate('AMOUNT_ILLEGAL');

                  case 5:
                    message = _context4.sent;
                    this.amountError = message;
                    return _context4.abrupt("return");

                  case 8:
                    console.log("".concat(amount, ", ").concat(this.range, ", ").concat(this.amount));

                    if (!(amount + this.range * 21000 / 1000000000 > this.amount)) {
                      _context4.next = 15;
                      break;
                    }

                    _context4.next = 12;
                    return this.helper.getTranslate('BALANCE_INFFICIENT');

                  case 12:
                    _message = _context4.sent;
                    this.amountError = _message;
                    return _context4.abrupt("return");

                  case 15:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "checkAddr",
        value: function checkAddr() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var result, message, _message2;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.addressError = "";
                    _context5.next = 3;
                    return this.web3.isCphAddr(this.receiveAddress.toLowerCase());

                  case 3:
                    result = _context5.sent;

                    if (!(result == -1)) {
                      _context5.next = 11;
                      break;
                    }

                    _context5.next = 7;
                    return this.helper.getTranslate('ADDRESS_EMPTY');

                  case 7:
                    message = _context5.sent;
                    this.addressError = message;
                    _context5.next = 16;
                    break;

                  case 11:
                    if (!(result == -2)) {
                      _context5.next = 16;
                      break;
                    }

                    _context5.next = 14;
                    return this.helper.getTranslate('ADDRESS_ERROR');

                  case 14:
                    _message2 = _context5.sent;
                    this.addressError = _message2;

                  case 16:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
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
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.checkAmount();

                  case 2:
                    if (!this.amountError) {
                      _context6.next = 4;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 4:
                    _context6.next = 6;
                    return this.checkAddr();

                  case 6:
                    if (!this.addressError) {
                      _context6.next = 8;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 8:
                    //引导用户输入密码
                    this.ifShowPasswordPrompt = true;

                  case 9:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "transfer",
        value: function transfer(privatekey) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this3 = this;

            var address;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    address = this.receiveAddress.toLowerCase().replace('cph', '0x');
                    this.web3.transferCph(this.wallet.addr, address, this.payAmount, this.range, privatekey, function (err, tx) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee7() {
                        var navigationExtras, message;
                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                console.log("Transaction callback.......", err, tx);

                                if (!(err === null)) {
                                  _context7.next = 6;
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
                                _context7.next = 23;
                                break;

                              case 6:
                                _context7.next = 8;
                                return this.helper.getTranslate('TRANSACTION_FAILED');

                              case 8:
                                message = _context7.sent;

                                if (!(err.message.toLowerCase().indexOf('insufficient funds for gas') > -1)) {
                                  _context7.next = 15;
                                  break;
                                }

                                _context7.next = 12;
                                return this.helper.getTranslate('BALANCE_INFFICIENT');

                              case 12:
                                message = _context7.sent;
                                _context7.next = 22;
                                break;

                              case 15:
                                if (!(err.message.toLowerCase().indexOf('replacement transaction underpriced') > -1)) {
                                  _context7.next = 21;
                                  break;
                                }

                                _context7.next = 18;
                                return this.helper.getTranslate('NONCE_ERROR');

                              case 18:
                                message = _context7.sent;
                                _context7.next = 22;
                                break;

                              case 21:
                                message = message + ': ' + err.message;

                              case 22:
                                this.helper.toast(message);

                              case 23:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, this);
                      }));
                    });

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
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
        type: _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"], _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_6__["Web3Service"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"], _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"]])], CphSendPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-cph-send-cph-send-module-es5.js.map