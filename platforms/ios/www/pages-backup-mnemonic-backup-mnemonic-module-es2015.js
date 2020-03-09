(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-backup-mnemonic-backup-mnemonic-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backup-mnemonic/backup-mnemonic.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backup-mnemonic/backup-mnemonic.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ 'BACKUP_MNEMONIC' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main\">\n        <div class=\"tips\" translate=\"\">CLICK_MNEMONIC</div>\n        <div class=\"textarea clear\">\n            <div class=\"word\" *ngFor=\"let item of backupList\">{{ item.mnemonic }}</div>\n        </div>\n\n        <div class=\"mnemonic-grid clear\">\n            <div class=\"grid\" tappable (click)=\"selectMnemonic(mnemonic, i)\"\n                [ngClass]=\"isSelect(mnemonic, i) > -1 ? 'active' : ''\" *ngFor=\"let mnemonic of mnemonicList; let i = index\">\n                {{mnemonic}}</div>\n        </div>\n    </div>\n\n    <div class=\"confirm-button bottom-button\" tappable (click)=\"verifyNmemonic()\"\n        [ngClass]=\"backupList.length == mnemonicList.length ? '' : 'disabled'\" translate>VERIFY\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/backup-mnemonic/backup-mnemonic.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/backup-mnemonic/backup-mnemonic.module.ts ***!
  \*****************************************************************/
/*! exports provided: BackupMnemonicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupMnemonicPageModule", function() { return BackupMnemonicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _backup_mnemonic_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./backup-mnemonic.page */ "./src/app/pages/backup-mnemonic/backup-mnemonic.page.ts");








const routes = [
    {
        path: '',
        component: _backup_mnemonic_page__WEBPACK_IMPORTED_MODULE_7__["BackupMnemonicPage"]
    }
];
let BackupMnemonicPageModule = class BackupMnemonicPageModule {
};
BackupMnemonicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_backup_mnemonic_page__WEBPACK_IMPORTED_MODULE_7__["BackupMnemonicPage"]]
    })
], BackupMnemonicPageModule);



/***/ }),

/***/ "./src/app/pages/backup-mnemonic/backup-mnemonic.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/backup-mnemonic/backup-mnemonic.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".textarea {\n  height: auto;\n  min-height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93c3MvZ28vc3JjL2dpdGh1Yi5jb20vY3lwaGVyaXVtL3dhbGxldGFwcC9zcmMvYXBwL3BhZ2VzL2JhY2t1cC1tbmVtb25pYy9iYWNrdXAtbW5lbW9uaWMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9iYWNrdXAtbW5lbW9uaWMvYmFja3VwLW1uZW1vbmljLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmFja3VwLW1uZW1vbmljL2JhY2t1cC1tbmVtb25pYy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGFyZWEge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xufSIsIi50ZXh0YXJlYSB7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogNjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/backup-mnemonic/backup-mnemonic.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/backup-mnemonic/backup-mnemonic.page.ts ***!
  \***************************************************************/
/*! exports provided: BackupMnemonicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupMnemonicPage", function() { return BackupMnemonicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/global/global.service */ "./src/app/providers/global/global.service.ts");
/* harmony import */ var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/helper/helper.service */ "./src/app/providers/helper/helper.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let BackupMnemonicPage = class BackupMnemonicPage {
    constructor(router, global, storage, helper, navCtrl, activeRouter) {
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
            console.log(this.wallet.privateKey);
            console.log(this.wallet.mnemonic);
            //获取助记词
            let mnemonicList = this.wallet.mnemonic.split(" ");
            this.mnemonicList = this.shuffle(mnemonicList);
            // console.log(Buffer)
            // try {
            //     var key = Buffer.from(this.wallet.privateKey.replace('0x', ''), 'hex');
            //     console.log(key)
            //     this.keystore = JSON.stringify(EthereumWallet.fromPrivateKey(key).toV3("123456", {
            //         n: 1024
            //     }));
            //     console.log(this.keystore)
            // } catch (e) {
            //     console.log(e.message)
            // }
            // this.wallet.encrypt("123456").then(res => {
            //     console.log("aaaaaa" + res)
            //     this.keystore = res;
            // }).catch(e => {
            //     console.log("sdfsdfds")
            // })
        }
    }
    shuffle(arr) {
        function randomsort(a, b) {
            return Math.random() > .5 ? -1 : 1;
        }
        arr.sort(randomsort);
        return arr;
    }
    ngOnInit() {
    }
    selectMnemonic(mnemonic, i) {
        // let index = this.backupList.indexOf(mnemonic);
        let index = this.isSelect(mnemonic, i);
        if (index > -1) {
            this.backupList.splice(index, 1);
        }
        else {
            this.backupList.push({ mnemonic, i });
        }
        console.log(this.backupList);
    }
    isSelect(mnemonic, i) {
        return this.backupList.findIndex(item => item.mnemonic === mnemonic && item.i === i);
    }
    verifyNmemonic() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("开始验证...", this.mnemonicList, this.backupList);
            let flag = true;
            let mnemonicList = this.wallet.mnemonic.split(' ');
            for (let i = 0; i < mnemonicList.length; i++) {
                if (mnemonicList[i] != this.backupList[i].mnemonic) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                if (this.global.walletName) {
                    this.wallet.name = this.global.walletName;
                }
                this.helper.addWallet(this.wallet, this.global.paymentPassword);
                this.global.walletName = "";
                //前往首页
                this.navCtrl.navigateRoot('wallet');
            }
            else {
                let error = yield this.helper.getTranslate('MNEMONIC_WRONG');
                this.helper.toast(error);
                this.backupList = [];
            }
        });
    }
};
BackupMnemonicPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
BackupMnemonicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-backup-mnemonic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./backup-mnemonic.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/backup-mnemonic/backup-mnemonic.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./backup-mnemonic.page.scss */ "./src/app/pages/backup-mnemonic/backup-mnemonic.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _providers_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], BackupMnemonicPage);



/***/ })

}]);
//# sourceMappingURL=pages-backup-mnemonic-backup-mnemonic-module-es2015.js.map