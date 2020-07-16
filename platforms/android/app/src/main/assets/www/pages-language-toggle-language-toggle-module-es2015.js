(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-language-toggle-language-toggle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/language-toggle/language-toggle.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/language-toggle/language-toggle.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ 'DISPLAY_LANGUAGE' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"gray-content\">\n    <div class=\"my-content\">\n        <div class=\"item-list\">\n            <div class=\"item\" tappable (click)=\"setLanguage('cn')\">\n                <div class=\"label\">简体中文</div>\n                <div class=\"content\"></div>\n                <div class=\"selector\" *ngIf=\"global.settings.language == 'cn'\"></div>\n            </div>\n            <div class=\"item\" tappable (click)=\"setLanguage('en')\">\n                <div class=\"label\">English</div>\n                <div class=\"content\"></div>\n                <div class=\"selector\" *ngIf=\"global.settings.language == 'en'\"></div>\n            </div>\n        </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/language-toggle/language-toggle.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/language-toggle/language-toggle.module.ts ***!
  \*****************************************************************/
/*! exports provided: LanguageTogglePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageTogglePageModule", function() { return LanguageTogglePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _language_toggle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./language-toggle.page */ "./src/app/pages/language-toggle/language-toggle.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _language_toggle_page__WEBPACK_IMPORTED_MODULE_6__["LanguageTogglePage"]
    }
];
let LanguageTogglePageModule = class LanguageTogglePageModule {
};
LanguageTogglePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_language_toggle_page__WEBPACK_IMPORTED_MODULE_6__["LanguageTogglePage"]]
    })
], LanguageTogglePageModule);



/***/ }),

/***/ "./src/app/pages/language-toggle/language-toggle.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/language-toggle/language-toggle.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmd1YWdlLXRvZ2dsZS9sYW5ndWFnZS10b2dnbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/language-toggle/language-toggle.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/language-toggle/language-toggle.page.ts ***!
  \***************************************************************/
/*! exports provided: LanguageTogglePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageTogglePage", function() { return LanguageTogglePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/global/global.service */ "./src/app/providers/global/global.service.ts");
/* harmony import */ var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/helper/helper.service */ "./src/app/providers/helper/helper.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let LanguageTogglePage = class LanguageTogglePage {
    constructor(router, global, storage, helper, navCtrl, translate, activeRouter) {
        this.router = router;
        this.global = global;
        this.storage = storage;
        this.helper = helper;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.activeRouter = activeRouter;
    }
    ngOnInit() {
    }
    setLanguage(lang) {
        if (lang != this.global.settings.language) {
            this.global.settings.language = lang;
            this.storage.set('localsetting', JSON.stringify(this.global.settings));
        }
        this.translate.use(lang);
        this.navCtrl.pop();
    }
};
LanguageTogglePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
LanguageTogglePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-language-toggle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./language-toggle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/language-toggle/language-toggle.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./language-toggle.page.scss */ "./src/app/pages/language-toggle/language-toggle.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _providers_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], LanguageTogglePage);



/***/ })

}]);
//# sourceMappingURL=pages-language-toggle-language-toggle-module-es2015.js.map