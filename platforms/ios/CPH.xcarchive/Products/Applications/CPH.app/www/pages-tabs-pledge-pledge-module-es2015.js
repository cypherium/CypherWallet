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
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  overflow: hidden;\n  --background: var(--ion-color-primary);\n}\n\n.header {\n  background: var(--ion-color-primary);\n  border-radius: 0px 0px 25px 25px;\n  height: 212px;\n  color: #fff;\n}\n\n.header .title {\n  height: 44px;\n}\n\n.header .title .text {\n  font-size: 17px;\n  line-height: 44px;\n  text-align: center;\n  margin: 0;\n}\n\n.header .info {\n  color: #fff;\n  margin: 0 18px;\n  background: url('pledge-banner@2x.png') center center no-repeat;\n  background-size: cover;\n  height: 125px;\n  padding: 30px 20px 0;\n}\n\n.header .info .text {\n  font-size: 22px;\n  line-height: 32px;\n  font-weight: bold;\n}\n\n.header .info .desc {\n  font-size: 14px;\n  line-height: 24px;\n}\n\n.tab-btns {\n  background: #FFFFFF;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(11%, rgba(255, 255, 255, 0)), color-stop(83%, rgba(255, 255, 255, 0.84)));\n  background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 11%, rgba(255, 255, 255, 0.84) 83%);\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  height: 48px;\n  margin: 0 18px;\n  display: -webkit-box;\n  display: flex;\n  margin-top: -24px;\n}\n\n.tab-btns .money {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  font-size: 14px;\n  color: #8E8E8E;\n  line-height: 46px;\n}\n\n.tab-btns .money .text {\n  border-bottom: 2px solid #fff;\n  padding: 0 2px;\n  margin: 0 auto;\n}\n\n.tab-btns .money.focus .text {\n  color: var(--ion-color-primary);\n  border-color: var(--ion-color-primary);\n}\n\n.tab-btns .money .icon {\n  background: url('receive.svg') center center no-repeat;\n  width: 36px;\n  height: 36px;\n  background-size: contain;\n  margin-right: 6px;\n}\n\n.tab-btns .money.transfer .icon {\n  background-image: url('transfer.svg');\n}\n\n.main-content {\n  margin: 10px 18px;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n  padding: 0 20px 24px;\n}\n\n.main-content .title {\n  height: 44px;\n  line-height: 44px;\n  font-size: 14px;\n  color: #000000;\n  display: -webkit-box;\n  display: flex;\n}\n\n.main-content .title .faq {\n  background: url('tips.svg') center center no-repeat;\n  background-size: 14px 14px;\n  width: 24px;\n  height: 44px;\n}\n\n.main-content .address {\n  background: #F8F8F8;\n  border: 1px solid #E8E8E8;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #000000;\n  line-height: 16px;\n  padding: 12px;\n}\n\n.main-content .content-grid {\n  overflow: hidden;\n  padding: 8px 0;\n}\n\n.main-content .content-grid .grid {\n  width: 50%;\n  float: left;\n  padding: 8px 0;\n}\n\n.main-content .content-grid .label {\n  font-size: 12px;\n  color: #999999;\n  line-height: 16px;\n}\n\n.main-content .content-grid .value {\n  font-size: 16px;\n  line-height: 20px;\n  margin-top: 5px;\n  color: #000000;\n  font-weight: 500;\n}\n\n.main-content .pledge {\n  font-size: 14px;\n  color: #000000;\n  line-height: 44px;\n  border-top: 1px solid #E8E8E8;\n}\n\n.main-content .pledge .input-wrapper {\n  border: 1px solid #E8E8E8;\n  height: 48px;\n}\n\n.main-content .pledge input {\n  background: #F8F8F8;\n  border-radius: 5px;\n  text-indent: 10px;\n  height: 48px;\n  line-height: normal;\n  font-size: 16px;\n  color: #333;\n  width: 100%;\n  font-size: 14px;\n}\n\n.main-content .pledge input::-webkit-input-placeholder {\n  font-size: 14px;\n  color: #999;\n}\n\n.main-content .pledge input::-moz-placeholder {\n  font-size: 14px;\n  color: #999;\n}\n\n.main-content .pledge input::-ms-input-placeholder {\n  font-size: 14px;\n  color: #999;\n}\n\n.main-content .pledge input::placeholder {\n  font-size: 14px;\n  color: #999;\n}\n\n.main-content .confirm-button {\n  margin-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jeXBoZXIwMS9nby9zcmMvZ2l0aHViLmNvbS9jeXBoZXJpdW0vd2FsbGV0YXBwL3NyYy9hcHAvcGFnZXMvdGFicy9wbGVkZ2UvcGxlZGdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy9wbGVkZ2UvcGxlZGdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esc0NBQUE7QUNDSjs7QURLQTtFQUNJLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBRUEsV0FBQTtBQ0hKOztBREtJO0VBQ0ksWUFYTztBQ1FmOztBREtRO0VBQ0ksZUFBQTtFQUNBLGlCQWZHO0VBZ0JILGtCQUFBO0VBQ0EsU0FBQTtBQ0haOztBRE9JO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSwrREFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDTFI7O0FET1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0xaOztBRFFRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDTlo7O0FEV0E7RUFDSSxtQkFBQTtFQUNBLHNKQUFBO0VBQUEscUdBQUE7RUFDQSw2RUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFVJO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ1JSOztBRFVRO0VBQ0ksNkJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ1JaOztBRFlZO0VBQ0ksK0JBQUE7RUFDQSxzQ0FBQTtBQ1ZoQjs7QURjUTtFQUNJLHNEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FDWlo7O0FEZ0JZO0VBQ0kscUNBQUE7QUNkaEI7O0FEcUJBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkVBQUE7RUFDQSxvQkFBQTtBQ2xCSjs7QURvQkk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ2xCUjs7QURvQlE7RUFDSSxtREFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNsQlo7O0FEc0JJO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNwQlI7O0FEdUJJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDckJSOztBRHVCUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ3JCWjs7QUR3QlE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDdEJaOztBRHlCUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUN2Qlo7O0FEMkJJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDekJSOztBRDJCUTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ3pCWjs7QUQ0QlE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDMUJaOztBRDRCWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDMUJoQjs7QUR3Qlk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQzFCaEI7O0FEd0JZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUMxQmhCOztBRHdCWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDMUJoQjs7QUQrQkk7RUFDSSxnQkFBQTtBQzdCUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvcGxlZGdlL3BsZWRnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4kaGVhZGVySGVpZ2h0OiA0NHB4O1xuJHBhZ2VQYWRkaW5nOiAxOHB4O1xuXG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyNXB4IDI1cHg7XG4gICAgaGVpZ2h0OiAyMTJweDtcbiAgICAvLyBwYWRkaW5nLXRvcDogNDRweDtcbiAgICBjb2xvcjogI2ZmZjtcblxuICAgIC50aXRsZSB7XG4gICAgICAgIGhlaWdodDogJGhlYWRlckhlaWdodDtcblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJGhlYWRlckhlaWdodDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbmZvIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG1hcmdpbjogMCAkcGFnZVBhZGRpbmc7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9wbGVkZ2UtYmFubmVyQDJ4LnBuZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGhlaWdodDogMTI1cHg7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMjBweCAwO1xuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzYyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYi1idG5zIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDApIDExJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg0KSA4MyUpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIG1hcmdpbjogMCAkcGFnZVBhZGRpbmc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAtMjRweDtcblxuICAgIC5tb25leSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICM4RThFOEU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogMCAycHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgICYuZm9jdXMge1xuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcmVjZWl2ZS5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYudHJhbnNmZXIge1xuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1ncy90cmFuc2Zlci5zdmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi5tYWluLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMTBweCAxOHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBwYWRkaW5nOiAwIDIwcHggMjRweDtcblxuICAgIC50aXRsZSB7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgLmZhcSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvdGlwcy5zdmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNHB4IDE0cHg7XG4gICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hZGRyZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0Y4RjhGODtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICB9XG5cbiAgICAuY29udGVudC1ncmlkIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG5cbiAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YWx1ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wbGVkZ2Uge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFOEU4RTg7XG5cbiAgICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFODtcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbmZpcm0tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDI1cHggMjVweDtcbiAgaGVpZ2h0OiAyMTJweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uaGVhZGVyIC50aXRsZSB7XG4gIGhlaWdodDogNDRweDtcbn1cbi5oZWFkZXIgLnRpdGxlIC50ZXh0IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG4uaGVhZGVyIC5pbmZvIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMCAxOHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcGxlZGdlLWJhbm5lckAyeC5wbmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEyNXB4O1xuICBwYWRkaW5nOiAzMHB4IDIwcHggMDtcbn1cbi5oZWFkZXIgLmluZm8gLnRleHQge1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5oZWFkZXIgLmluZm8gLmRlc2Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4udGFiLWJ0bnMge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NCkgODMlKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luOiAwIDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xufVxuLnRhYi1idG5zIC5tb25leSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4RThFOEU7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xufVxuLnRhYi1idG5zIC5tb25leSAudGV4dCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICBwYWRkaW5nOiAwIDJweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4udGFiLWJ0bnMgLm1vbmV5LmZvY3VzIC50ZXh0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4udGFiLWJ0bnMgLm1vbmV5IC5pY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3JlY2VpdmUuc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbi50YWItYnRucyAubW9uZXkudHJhbnNmZXIgLmljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ3MvdHJhbnNmZXIuc3ZnKTtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIG1hcmdpbjogMTBweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgcGFkZGluZzogMCAyMHB4IDI0cHg7XG59XG4ubWFpbi1jb250ZW50IC50aXRsZSB7XG4gIGhlaWdodDogNDRweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbi1jb250ZW50IC50aXRsZSAuZmFxIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3RpcHMuc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxNHB4IDE0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG59XG4ubWFpbi1jb250ZW50IC5hZGRyZXNzIHtcbiAgYmFja2dyb3VuZDogI0Y4RjhGODtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgcGFkZGluZzogMTJweDtcbn1cbi5tYWluLWNvbnRlbnQgLmNvbnRlbnQtZ3JpZCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuLm1haW4tY29udGVudCAuY29udGVudC1ncmlkIC5ncmlkIHtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuLm1haW4tY29udGVudCAuY29udGVudC1ncmlkIC5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuLm1haW4tY29udGVudCAuY29udGVudC1ncmlkIC52YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubWFpbi1jb250ZW50IC5wbGVkZ2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFOEU4RTg7XG59XG4ubWFpbi1jb250ZW50IC5wbGVkZ2UgLmlucHV0LXdyYXBwZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRThFOEU4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4ubWFpbi1jb250ZW50IC5wbGVkZ2UgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtaW5kZW50OiAxMHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzM7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbi1jb250ZW50IC5wbGVkZ2UgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk5OTtcbn1cbi5tYWluLWNvbnRlbnQgLmNvbmZpcm0tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn0iXX0= */");

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