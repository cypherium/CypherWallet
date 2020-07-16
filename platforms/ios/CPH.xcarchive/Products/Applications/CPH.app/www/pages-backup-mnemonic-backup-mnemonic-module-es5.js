function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-backup-mnemonic-backup-mnemonic-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backup-mnemonic/backup-mnemonic.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backup-mnemonic/backup-mnemonic.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBackupMnemonicBackupMnemonicPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ 'BACKUP_MNEMONIC' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main\">\n        <div class=\"tips\" translate=\"\">CLICK_MNEMONIC</div>\n        <div class=\"textarea clear\">\n            <div class=\"word\" *ngFor=\"let item of backupList\">{{ item.mnemonic }}</div>\n        </div>\n\n        <div class=\"mnemonic-grid clear\">\n            <div class=\"grid\" tappable (click)=\"selectMnemonic(mnemonic, i)\"\n                [ngClass]=\"isSelect(mnemonic, i) > -1 ? 'active' : ''\" *ngFor=\"let mnemonic of mnemonicList; let i = index\">\n                {{mnemonic}}</div>\n        </div>\n    </div>\n\n    <div class=\"confirm-button bottom-button\" tappable (click)=\"verifyNmemonic()\"\n        [ngClass]=\"backupList.length == mnemonicList.length ? '' : 'disabled'\" translate>VERIFY\n    </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/backup-mnemonic/backup-mnemonic.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/backup-mnemonic/backup-mnemonic.module.ts ***!
    \*****************************************************************/

  /*! exports provided: BackupMnemonicPageModule */

  /***/
  function srcAppPagesBackupMnemonicBackupMnemonicModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackupMnemonicPageModule", function () {
      return BackupMnemonicPageModule;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _backup_mnemonic_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./backup-mnemonic.page */
    "./src/app/pages/backup-mnemonic/backup-mnemonic.page.ts");

    var routes = [{
      path: '',
      component: _backup_mnemonic_page__WEBPACK_IMPORTED_MODULE_7__["BackupMnemonicPage"]
    }];

    var BackupMnemonicPageModule = function BackupMnemonicPageModule() {
      _classCallCheck(this, BackupMnemonicPageModule);
    };

    BackupMnemonicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_backup_mnemonic_page__WEBPACK_IMPORTED_MODULE_7__["BackupMnemonicPage"]]
    })], BackupMnemonicPageModule);
    /***/
  },

  /***/
  "./src/app/pages/backup-mnemonic/backup-mnemonic.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/backup-mnemonic/backup-mnemonic.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBackupMnemonicBackupMnemonicPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".textarea {\n  height: auto;\n  min-height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jeXBoZXIwMS9nby9zcmMvZ2l0aHViLmNvbS9jeXBoZXJpdW0vd2FsbGV0YXBwL3NyYy9hcHAvcGFnZXMvYmFja3VwLW1uZW1vbmljL2JhY2t1cC1tbmVtb25pYy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JhY2t1cC1tbmVtb25pYy9iYWNrdXAtbW5lbW9uaWMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iYWNrdXAtbW5lbW9uaWMvYmFja3VwLW1uZW1vbmljLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG59IiwiLnRleHRhcmVhIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/backup-mnemonic/backup-mnemonic.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/backup-mnemonic/backup-mnemonic.page.ts ***!
    \***************************************************************/

  /*! exports provided: BackupMnemonicPage */

  /***/
  function srcAppPagesBackupMnemonicBackupMnemonicPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackupMnemonicPage", function () {
      return BackupMnemonicPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/global/global.service */
    "./src/app/providers/global/global.service.ts");
    /* harmony import */


    var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/helper/helper.service */
    "./src/app/providers/helper/helper.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var BackupMnemonicPage =
    /*#__PURE__*/
    function () {
      function BackupMnemonicPage(router, global, storage, helper, navCtrl, activeRouter) {
        _classCallCheck(this, BackupMnemonicPage);

        this.router = router;
        this.global = global;
        this.storage = storage;
        this.helper = helper;
        this.navCtrl = navCtrl;
        this.activeRouter = activeRouter;
        this.mnemonicList = [];
        this.backupList = [];

        if (this.router.getCurrentNavigation().extras.state) {
          this.wallet = this.router.getCurrentNavigation().extras.state.wallet;
          console.log(this.wallet.mnemonic); //获取助记词

          var mnemonicList = this.wallet.mnemonic.split(" ");
          this.mnemonicList = this.shuffle(mnemonicList);
        }
      }

      _createClass(BackupMnemonicPage, [{
        key: "shuffle",
        value: function shuffle(arr) {
          function randomsort(a, b) {
            return Math.random() > .5 ? -1 : 1;
          }

          arr.sort(randomsort);
          return arr;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectMnemonic",
        value: function selectMnemonic(mnemonic, i) {
          // let index = this.backupList.indexOf(mnemonic);
          var index = this.isSelect(mnemonic, i);

          if (index > -1) {
            this.backupList.splice(index, 1);
          } else {
            this.backupList.push({
              mnemonic: mnemonic,
              i: i
            });
          }

          console.log(this.backupList);
        }
      }, {
        key: "isSelect",
        value: function isSelect(mnemonic, i) {
          return this.backupList.findIndex(function (item) {
            return item.mnemonic === mnemonic && item.i === i;
          });
        }
      }, {
        key: "verifyNmemonic",
        value: function verifyNmemonic() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var flag, mnemonicList, i, navigationExtras, error;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("开始验证...", this.mnemonicList, this.backupList);
                    flag = true;
                    mnemonicList = this.wallet.mnemonic.split(' ');
                    i = 0;

                  case 4:
                    if (!(i < mnemonicList.length)) {
                      _context.next = 11;
                      break;
                    }

                    if (!(mnemonicList[i] != this.backupList[i].mnemonic)) {
                      _context.next = 8;
                      break;
                    }

                    flag = false;
                    return _context.abrupt("break", 11);

                  case 8:
                    i++;
                    _context.next = 4;
                    break;

                  case 11:
                    if (!flag) {
                      _context.next = 19;
                      break;
                    }

                    if (this.global.walletName) {
                      this.wallet.name = this.global.walletName;
                    }

                    this.helper.addWallet(this.wallet, this.global.paymentPassword);
                    this.global.walletName = ""; //前往首页

                    navigationExtras = {
                      state: {
                        privateKey: this.wallet.privateKey,
                        action: 'create'
                      }
                    };
                    this.navCtrl.navigateRoot('payment-password', navigationExtras);
                    _context.next = 24;
                    break;

                  case 19:
                    _context.next = 21;
                    return this.helper.getTranslate('MNEMONIC_WRONG');

                  case 21:
                    error = _context.sent;
                    this.helper.toast(error);
                    this.backupList = [];

                  case 24:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return BackupMnemonicPage;
    }();

    BackupMnemonicPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    BackupMnemonicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-backup-mnemonic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./backup-mnemonic.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backup-mnemonic/backup-mnemonic.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./backup-mnemonic.page.scss */
      "./src/app/pages/backup-mnemonic/backup-mnemonic.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], BackupMnemonicPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-backup-mnemonic-backup-mnemonic-module-es5.js.map