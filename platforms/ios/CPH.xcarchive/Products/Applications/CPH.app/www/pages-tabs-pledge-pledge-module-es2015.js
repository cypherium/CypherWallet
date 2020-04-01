(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-pledge-pledge-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/pledge/pledge.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/pledge/pledge.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n    <ion-toolbar>\n        <ion-title>{{ 'PLEDGE' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"header\">\n        <!-- <div class=\"title\">\n            <h2 class=\"text\" translate>PLEDGE</h2>\n        </div> -->\n\n        <div class=\"info\">\n            <div class=\"text\" translate>PLEDGE_MINING</div>\n            <p class=\"desc\" translate>PLEDGE_MINING_SLOGAN</p>\n        </div>\n    </div>\n\n    <div class=\"tab-btns\">\n        <div class=\"money pledge\" [ngClass]=\"businessType == 'pledge' ? 'focus' : ''\" tappable\n            (click)=\"setBusinessType('pledge')\">\n            <p class=\"text\" translate>PLEDGE</p>\n        </div>\n        <div class=\"money drawback\" [ngClass]=\"businessType != 'pledge' ? 'focus' : ''\" tappable\n            (click)=\"setBusinessType('drawback')\">\n            <p class=\"text\" translate>DRAWBACK</p>\n        </div>\n    </div>\n\n    <div class=\"main-content\">\n        <div class=\"title\">\n            <p class=\"text\" translate>SMART_CONTRACT_ADDRESS</p>\n            <p class=\"faq\"></p>\n        </div>\n\n        <div class=\"address\">\n            cph{{ pledgeContractAddr }}\n        </div>\n\n        <div class=\"content-grid\">\n            <div class=\"grid\">\n                <p class=\"label\">\n                    {{ businessType == 'pledge' ? ('AVAILBANCE_BALANCE' | translate)  : ('AVAILBANCE_DRAWBACK' | translate) }}\n                </p>\n                <p class=\"value\">{{ walletAmount | coinDisplay }}</p>\n            </div>\n            <div class=\"grid\">\n                <p class=\"label\" translate>PLEDGING</p>\n                <p class=\"value\">{{ pledgeAmount | coinDisplay }}</p>\n            </div>\n            <div class=\"grid\" *ngIf=\"businessType == 'pledge'\">\n                <p class=\"label\" translate>AVENUE_TIMES</p>\n                <p class=\"value\">{{ (times || 0).toFixed(2) }} X</p>\n            </div>\n            <div class=\"grid\" *ngIf=\"businessType == 'pledge'\">\n                <p class=\"label\" translate>DRAWBACKING</p>\n                <p class=\"value\">{{ 0 | coinDisplay }}</p>\n            </div>\n        </div>\n\n        <div class=\"pledge\" *ngIf=\"businessType == 'pledge'\">\n            <p class=\"label\" translate>PLEDGE_AMOUNT</p>\n            <div class=\"input-wrapper\">\n                <input type=\"tel\" [(ngModel)]=\"businessAmount\" placeholder=\"{{ 'INPUT_PLEDGE_AMOUNT' | translate }}\">\n            </div>\n        </div>\n\n        <div class=\"pledge\" *ngIf=\"businessType != 'pledge'\">\n            <p class=\"label\" translate>DRAWBACK_AMOUNT</p>\n            <div class=\"input-wrapper\">\n                <input type=\"tel\" [(ngModel)]=\"businessAmount\" placeholder=\"{{ 'INPUT_DRAWBACK_AMOUNT' | translate }}\">\n            </div>\n        </div>\n\n        <div class=\"error-text\" *ngIf=\"amountError\">{{ amountError }}</div>\n\n        <div class=\"confirm-button\" tappable (click)=\"doPledge()\" translate>\n            {{ businessType == 'pledge' ? ('PLEDGE' | translate) : ('DRAWBACK' | translate) }}</div>\n    </div>\n</ion-content>\n\n<app-my-tabs tab=\"pledge\"></app-my-tabs>\n\n<app-generate-privatekey *ngIf=\"ifShowPasswordPrompt\" promptDesc=\"{{ 'INPUT_PASSWORD_TIPS' | translate }}\"\n    cancelText=\"{{ 'CANCEL' | translate }}\" confirmText=\"{{ 'CONFIRM' | translate }}\" (cancel)=\"cancelPrompt()\"\n    (confirm)=\"confirmPrompt($event)\"></app-generate-privatekey>\n");

/***/ }),

/***/ "./src/app/pages/tabs/pledge/pledge.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/pledge/pledge.module.ts ***!
  \****************************************************/
/*! exports provided: PledgePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PledgePageModule", function() { return PledgePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pledge_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pledge.page */ "./src/app/pages/tabs/pledge/pledge.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");










const routes = [
    {
        path: '',
        component: _pledge_page__WEBPACK_IMPORTED_MODULE_6__["PledgePage"]
    }
];
let PledgePageModule = class PledgePageModule {
};
PledgePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_pledge_page__WEBPACK_IMPORTED_MODULE_6__["PledgePage"]]
    })
], PledgePageModule);



/***/ }),

/***/ "./src/app/pages/tabs/pledge/pledge.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/pledge/pledge.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  overflow: hidden;\n  --background: var(--ion-color-primary);\n}\n\n.header {\n  background: var(--ion-color-primary);\n  border-radius: 0px 0px 25px 25px;\n  height: 212px;\n  color: #fff;\n}\n\n.header .title {\n  height: 44px;\n}\n\n.header .title .text {\n  font-size: 17px;\n  line-height: 44px;\n  text-align: center;\n  margin: 0;\n}\n\n.header .info {\n  color: #fff;\n  margin: 0 18px;\n  background: url('pledge-banner@2x.png') center center no-repeat;\n  background-size: cover;\n  height: 125px;\n  padding: 30px 20px 0;\n}\n\n.header .info .text {\n  font-size: 22px;\n  line-height: 32px;\n  font-weight: bold;\n}\n\n.header .info .desc {\n  font-size: 14px;\n  line-height: 24px;\n}\n\n.tab-btns {\n  background: #FFFFFF;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(11%, rgba(255, 255, 255, 0)), color-stop(83%, rgba(255, 255, 255, 0.84)));\n  background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 11%, rgba(255, 255, 255, 0.84) 83%);\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  height: 48px;\n  margin: 0 18px;\n  display: -webkit-box;\n  display: flex;\n  margin-top: -24px;\n}\n\n.tab-btns .money {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  font-size: 14px;\n  color: #8E8E8E;\n  line-height: 46px;\n}\n\n.tab-btns .money .text {\n  border-bottom: 2px solid #fff;\n  padding: 0 2px;\n  margin: 0 auto;\n}\n\n.tab-btns .money.focus .text {\n  color: var(--ion-color-primary);\n  border-color: var(--ion-color-primary);\n}\n\n.tab-btns .money .icon {\n  background: url('receive.svg') center center no-repeat;\n  width: 36px;\n  height: 36px;\n  background-size: contain;\n  margin-right: 6px;\n}\n\n.tab-btns .money.transfer .icon {\n  background-image: url('transfer.svg');\n}\n\n.main-content {\n  margin: 10px 18px;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n  padding: 0 20px 24px;\n}\n\n.main-content .title {\n  height: 44px;\n  line-height: 44px;\n  font-size: 14px;\n  color: #000000;\n  display: -webkit-box;\n  display: flex;\n}\n\n.main-content .title .faq {\n  background: url('tips.svg') center center no-repeat;\n  background-size: 14px 14px;\n  width: 24px;\n  height: 44px;\n}\n\n.main-content .address {\n  background: #F8F8F8;\n  border: 1px solid #E8E8E8;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #000000;\n  line-height: 16px;\n  padding: 12px;\n}\n\n.main-content .content-grid {\n  overflow: hidden;\n  padding: 8px 0;\n}\n\n.main-content .content-grid .grid {\n  width: 50%;\n  float: left;\n  padding: 8px 0;\n}\n\n.main-content .content-grid .label {\n  font-size: 12px;\n  color: #999999;\n  line-height: 16px;\n}\n\n.main-content .content-grid .value {\n  font-size: 16px;\n  line-height: 20px;\n  margin-top: 5px;\n  color: #000000;\n  font-weight: 500;\n}\n\n.main-content .pledge {\n  font-size: 14px;\n  color: #000000;\n  line-height: 44px;\n  border-top: 1px solid #E8E8E8;\n}\n\n.main-content .pledge .input-wrapper {\n  border: 1px solid #E8E8E8;\n  height: 48px;\n}\n\n.main-content .pledge input {\n  background: #F8F8F8;\n  border-radius: 5px;\n  text-indent: 10px;\n  height: 48px;\n  line-height: normal;\n  font-size: 16px;\n  color: #333;\n  width: 100%;\n  font-size: 14px;\n}\n\n.main-content .pledge input::-webkit-input-placeholder {\n  font-size: 14px;\n  color: #999;\n}\n\n.main-content .pledge input::-moz-placeholder {\n  font-size: 14px;\n  color: #999;\n}\n\n.main-content .pledge input::-ms-input-placeholder {\n  font-size: 14px;\n  color: #999;\n}\n\n.main-content .pledge input::placeholder {\n  font-size: 14px;\n  color: #999;\n}\n\n.main-content .confirm-button {\n  margin-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93c3MvZ28vc3JjL2dpdGh1Yi5jb20vY3lwaGVyaXVtL3dhbGxldGFwcC9zcmMvYXBwL3BhZ2VzL3RhYnMvcGxlZGdlL3BsZWRnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYnMvcGxlZGdlL3BsZWRnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHNDQUFBO0FDQ0o7O0FES0E7RUFDSSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUVBLFdBQUE7QUNISjs7QURLSTtFQUNJLFlBWE87QUNRZjs7QURLUTtFQUNJLGVBQUE7RUFDQSxpQkFmRztFQWdCSCxrQkFBQTtFQUNBLFNBQUE7QUNIWjs7QURPSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsK0RBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ0xSOztBRE9RO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNMWjs7QURRUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ05aOztBRFdBO0VBQ0ksbUJBQUE7RUFDQSxzSkFBQTtFQUFBLHFHQUFBO0VBQ0EsNkVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVSTtFQUNJLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNSUjs7QURVUTtFQUNJLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNSWjs7QURZWTtFQUNJLCtCQUFBO0VBQ0Esc0NBQUE7QUNWaEI7O0FEY1E7RUFDSSxzREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQ1paOztBRGdCWTtFQUNJLHFDQUFBO0FDZGhCOztBRHFCQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZFQUFBO0VBQ0Esb0JBQUE7QUNsQko7O0FEb0JJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNsQlI7O0FEb0JRO0VBQ0ksbURBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDbEJaOztBRHNCSTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDcEJSOztBRHVCSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ3JCUjs7QUR1QlE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNyQlo7O0FEd0JRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ3RCWjs7QUR5QlE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDdkJaOztBRDJCSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ3pCUjs7QUQyQlE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUN6Qlo7O0FENEJRO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQzFCWjs7QUQ0Qlk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQzFCaEI7O0FEd0JZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUMxQmhCOztBRHdCWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDMUJoQjs7QUR3Qlk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQzFCaEI7O0FEK0JJO0VBQ0ksZ0JBQUE7QUM3QlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJzL3BsZWRnZS9wbGVkZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuJGhlYWRlckhlaWdodDogNDRweDtcbiRwYWdlUGFkZGluZzogMThweDtcblxuLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjVweCAyNXB4O1xuICAgIGhlaWdodDogMjEycHg7XG4gICAgLy8gcGFkZGluZy10b3A6IDQ0cHg7XG4gICAgY29sb3I6ICNmZmY7XG5cbiAgICAudGl0bGUge1xuICAgICAgICBoZWlnaHQ6ICRoZWFkZXJIZWlnaHQ7XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICRoZWFkZXJIZWlnaHQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mbyB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW46IDAgJHBhZ2VQYWRkaW5nO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcGxlZGdlLWJhbm5lckAyeC5wbmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBoZWlnaHQ6IDEyNXB4O1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDIwcHggMDtcblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2Mge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWItYnRucyB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAwKSAxMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NCkgODMlKTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBtYXJnaW46IDAgJHBhZ2VQYWRkaW5nO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogLTI0cHg7XG5cbiAgICAubW9uZXkge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjOEU4RThFO1xuICAgICAgICBsaW5lLWhlaWdodDogNDZweDtcblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAmLmZvY3VzIHtcbiAgICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3JlY2VpdmUuc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLnRyYW5zZmVyIHtcbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvdHJhbnNmZXIuc3ZnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgICBtYXJnaW46IDEwcHggMThweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgcGFkZGluZzogMCAyMHB4IDI0cHg7XG5cbiAgICAudGl0bGUge1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5mYXEge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3RpcHMuc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTRweCAxNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWRkcmVzcyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RTg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtZ3JpZCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xuXG4gICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudmFsdWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucGxlZGdlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRThFOEU4O1xuXG4gICAgICAgIC5pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RTg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb25maXJtLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyNXB4IDI1cHg7XG4gIGhlaWdodDogMjEycHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmhlYWRlciAudGl0bGUge1xuICBoZWlnaHQ6IDQ0cHg7XG59XG4uaGVhZGVyIC50aXRsZSAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xufVxuLmhlYWRlciAuaW5mbyB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDAgMThweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3BsZWRnZS1iYW5uZXJAMngucG5nKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgcGFkZGluZzogMzBweCAyMHB4IDA7XG59XG4uaGVhZGVyIC5pbmZvIC50ZXh0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaGVhZGVyIC5pbmZvIC5kZXNjIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLnRhYi1idG5zIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODQpIDgzJSk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbjogMCAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAtMjRweDtcbn1cbi50YWItYnRucyAubW9uZXkge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOEU4RThFO1xuICBsaW5lLWhlaWdodDogNDZweDtcbn1cbi50YWItYnRucyAubW9uZXkgLnRleHQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgcGFkZGluZzogMCAycHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnRhYi1idG5zIC5tb25leS5mb2N1cyAudGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLnRhYi1idG5zIC5tb25leSAuaWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9yZWNlaXZlLnN2ZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG4udGFiLWJ0bnMgLm1vbmV5LnRyYW5zZmVyIC5pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3RyYW5zZmVyLnN2Zyk7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBtYXJnaW46IDEwcHggMThweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHBhZGRpbmc6IDAgMjBweCAyNHB4O1xufVxuLm1haW4tY29udGVudCAudGl0bGUge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW4tY29udGVudCAudGl0bGUgLmZhcSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1ncy90aXBzLnN2ZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTRweCAxNHB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuLm1haW4tY29udGVudCAuYWRkcmVzcyB7XG4gIGJhY2tncm91bmQ6ICNGOEY4Rjg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RTg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmc6IDEycHg7XG59XG4ubWFpbi1jb250ZW50IC5jb250ZW50LWdyaWQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA4cHggMDtcbn1cbi5tYWluLWNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAuZ3JpZCB7XG4gIHdpZHRoOiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA4cHggMDtcbn1cbi5tYWluLWNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAubGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cbi5tYWluLWNvbnRlbnQgLmNvbnRlbnQtZ3JpZCAudmFsdWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm1haW4tY29udGVudCAucGxlZGdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRThFOEU4O1xufVxuLm1haW4tY29udGVudCAucGxlZGdlIC5pbnB1dC13cmFwcGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFODtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLm1haW4tY29udGVudCAucGxlZGdlIGlucHV0IHtcbiAgYmFja2dyb3VuZDogI0Y4RjhGODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWluZGVudDogMTBweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW4tY29udGVudCAucGxlZGdlIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5OTk7XG59XG4ubWFpbi1jb250ZW50IC5jb25maXJtLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/tabs/pledge/pledge.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/pledge/pledge.page.ts ***!
  \**************************************************/
/*! exports provided: PledgePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PledgePage", function() { return PledgePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/global/global.service */ "./src/app/providers/global/global.service.ts");
/* harmony import */ var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/helper/helper.service */ "./src/app/providers/helper/helper.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/web3/web3.service */ "./src/app/providers/web3/web3.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");








let PledgePage = class PledgePage {
    constructor(router, 
    // private clipboard: Clipboard,
    helper, global, storage, web3) {
        this.router = router;
        this.helper = helper;
        this.global = global;
        this.storage = storage;
        this.web3 = web3;
        this.promptDesc = "输入安全密码，确认赎回";
        this.businessType = "pledge";
        this.businessAmount = "";
        this.ifShowPasswordPrompt = false;
        this.walletAmount = "";
        this.wallet = {};
        this.pledgeAmount = "";
        this.amountError = "";
        this.paymentPassword = "";
        this.promptError = "";
        this.ifShowLoading = false;
        this.ifEyeOpen = false;
        this.interval = null;
        this.times = 1;
    }
    ngOnInit() {
        this.pledgeContractAddr = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].cypherium.pledgeContractAddr.replace('0x', '');
        this.wallet = this.global.gWalletList[this.global.currentWalletIndex];
        this.updateWalletInfo();
        this.interval = setInterval(() => {
            this.updateWalletInfo();
        }, 5000);
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
    updateWalletInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.walletAmount = await this.web3.getCphBalance(this.wallet.addr);
            this.web3.getCphBalance(this.wallet.addr, (v) => {
                if (this.walletAmount.toString() !== v.toString() && v !== undefined) {
                    this.walletAmount = v;
                    this.global.gWalletList[this.global.currentWalletIndex].amount = this.walletAmount;
                    this.helper.saveWallet();
                }
            });
            //获取抵押余额
            this.pledgeAmount = yield this.web3.getMortage(this.wallet.addr);
            this.getTimes();
        });
    }
    cancelPrompt() {
        this.ifShowPasswordPrompt = false;
    }
    confirmPrompt(privateKey) {
        console.log("Private key...", privateKey);
        this.ifShowPasswordPrompt = false;
        this.pledge(privateKey);
    }
    getTimes() {
        let amount = this.pledgeAmount;
        let exp = Math.exp(3 - 0.128 * amount);
        let y = 100 / (1 + exp);
        this.times = y / 4.74;
    }
    doPledge() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.amountError = "";
            let amount = +this.businessAmount;
            if (!(amount > 0)) {
                if (this.businessType == 'pledge') {
                    let message = yield this.helper.getTranslate('PLEDGE_AMOUNT_ERROR');
                    this.amountError = message;
                }
                else {
                    let message = yield this.helper.getTranslate('DRAWBACK_AMOUNT_ERROR');
                    this.amountError = message;
                }
                return;
            }
            else if (!(amount < +this.walletAmount)) {
                if (this.businessType == 'pledge') {
                    let message = yield this.helper.getTranslate('PLEDGE_AMOUNT_EXCCEED');
                    this.amountError = message;
                }
                else {
                    let message = yield this.helper.getTranslate('DRAWBACK_AMOUNT_EXCCEED');
                    this.amountError = message;
                }
                return;
            }
            this.paymentPassword = "";
            this.promptError = "";
            this.ifShowPasswordPrompt = true;
        });
    }
    toggleEyeOpen() {
        this.ifEyeOpen = !this.ifEyeOpen;
    }
    pledge(privateKey) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //执行抵押
            let business = this.businessType == 'pledge' ? 'mortgage' : 'redeem';
            this.web3.pledge(business, this.wallet.addr, +this.businessAmount, privateKey, (err, result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.ifShowLoading = false;
                if (!err) {
                    let pledgeSuccess = yield this.helper.getTranslate('PLEDGE_SUCCEED'), drawbackSuccess = yield this.helper.getTranslate('DRAWBACK_SUCCEED');
                    this.helper.toast(this.businessType == 'pledge' ? pledgeSuccess : drawbackSuccess);
                    //更新账户信息
                    this.updateWalletInfo();
                }
                else {
                    let pledgeFailure = yield this.helper.getTranslate('PLEDGE_FAILURE'), drawbackFailure = yield this.helper.getTranslate('DRAWBACK_FAILURE');
                    let message = this.businessType == 'pledge' ? pledgeFailure : drawbackFailure;
                    if (err.message.toLowerCase().indexOf('insufficient funds for gas') > -1) {
                        let info = yield this.helper.getTranslate('BALANCE_INFFICIENT');
                        message = message + ':' + info;
                    }
                    else if (err.message.toLowerCase().indexOf('replacement transaction underpriced') > -1) {
                        let info = yield this.helper.getTranslate('NONCE_ERROR');
                        message = message + ':' + info;
                    }
                    else {
                        message = message + ':' + err.message;
                    }
                    this.helper.toast(message);
                }
            }));
        });
    }
    setBusinessType(type) {
        this.businessType = type;
    }
};
PledgePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] },
    { type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_6__["Web3Service"] }
];
PledgePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pledge',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pledge.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/pledge/pledge.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pledge.page.scss */ "./src/app/pages/tabs/pledge/pledge.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"],
        _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _providers_web3_web3_service__WEBPACK_IMPORTED_MODULE_6__["Web3Service"]])
], PledgePage);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-pledge-pledge-module-es2015.js.map