(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{ 'ABOUTUS' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"gray-content\">\n    <div class=\"main\">\n        <div class=\"title\">\n            <div class=\"logo\">\n                <img src=\"assets/imgs/cypherium-full-logo.svg\" alt=\"\">\n                <p class=\"name\">{{ name }}</p>\n                <p class=\"version\">V {{ version }}</p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"item-list\">\n        <div class=\"item\" (click)=\"openWebsite()\">\n            <div class=\"label\">Website</div>\n            <div class=\"content\">www.cypherium.io</div>\n            <div class=\"next\"></div>\n        </div>\n        <div class=\"item\">\n            <div class=\"label\">Email</div>\n            <!-- <div class=\"content\">contact@cypherium.io</div> -->\n            <div class=\"content\"><a href=\"mailto:contact@cypherium.io\">contact@cypherium.io</a></div>\n            <div class=\"next\"></div>\n        </div>\n        <div class=\"item\" (click)=\"openTwitter()\">\n            <div class=\"label\">Twitter</div>\n            <div class=\"content\">twitter.com/cypheriumchain</div>\n            <div class=\"next\"></div>\n        </div>\n        <div class=\"item\" (click)=\"openGithub()\">\n            <div class=\"label\">Github</div>\n            <div class=\"content\">github.com/cypherium</div>\n            <div class=\"next\"></div>\n        </div>\n        <div class=\"item\" (click)=\"openFacebook()\">\n            <div class=\"label\">Facebook</div>\n            <div class=\"content\">facebook.com/CypheriumChain</div>\n            <div class=\"next\"></div>\n        </div>\n        <div class=\"item\" (click)=\"openTelegram()\">\n            <div class=\"label\">Telegram</div>\n            <div class=\"content\">t.me/cypherium_supergroup</div>\n            <div class=\"next\"></div>\n        </div>        \n        <div class=\"item\" (click)=\"update()\" tappable>\n            <div class=\"label\" translate=\"\">VERSION_UPDATE</div>\n        </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about.page */ "./src/app/pages/about/about.page.ts");








const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_7__["AboutPage"]
    }
];
let AboutPageModule = class AboutPageModule {
};
AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_7__["AboutPage"]]
    })
], AboutPageModule);



/***/ }),

/***/ "./src/app/pages/about/about.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  padding-top: 66px;\n  padding-bottom: 10px;\n}\n.title .logo {\n  text-align: center;\n}\n.title .logo img {\n  width: 100px;\n}\n.title .name {\n  font-size: 16px;\n  color: #000000;\n  line-height: 40px;\n}\n.title .version {\n  font-size: 12px;\n  color: #8E8E8E;\n  line-height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jeXBoZXIwMS9nby9zcmMvZ2l0aHViLmNvbS9jeXBoZXJpdW0vd2FsbGV0YXBwL3NyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0FDQ1I7QURDUTtFQUNJLFlBQUE7QUNDWjtBREdJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0RSO0FESUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiA2NnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgLmxvZ28ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLnZlcnNpb24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjOEU4RThFO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB9XG59IiwiLnRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDY2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnRpdGxlIC5sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpdGxlIC5sb2dvIGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi50aXRsZSAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuLnRpdGxlIC52ZXJzaW9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzhFOEU4RTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/about/about.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/helper/helper.service */ "./src/app/providers/helper/helper.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/global/global.service */ "./src/app/providers/global/global.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/native/native.service */ "./src/app/providers/native/native.service.ts");








let AboutPage = class AboutPage {
    constructor(router, global, storage, helper, navCtrl, platform, native, activeRouter) {
        this.router = router;
        this.global = global;
        this.storage = storage;
        this.helper = helper;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.native = native;
        this.activeRouter = activeRouter;
        this.name = "";
        this.version = "";
        this.packageName = "";
    }
    ngOnInit() {
        if (this.platform.is('cordova')) {
            this.native.getAppVersionInfo().subscribe(res => {
                console.log("Get version：" + JSON.stringify(res));
                this.version = res.versionNumber;
                this.name = res.name + 'Wallet';
                this.packageName = res.packageName;
            });
        }
        else {
            this.version = '1.0.0';
            this.packageName = "com.cph.www";
            this.name = "light Wallet";
        }
    }
    update() {
        if (this.platform.is('android')) {
            window.open(`market://details?id=${this.packageName}`, '_system');
        }
        else {
            window.open(`https://itunes.apple.com/id??`);
        }
    }
    openWebsite() {
        window.open(`https://www.cypherium.io`);
    }
    opentEmail() {
        window.open(`mailto:contact@cypherium.io`);
    }
    openTwitter() {
        window.open(`https://twitter.com/cypheriumchain`);
    }
    openGithub() {
        window.open(`https://www.github.com/cypherium`);
    }
    openFacebook() {
        window.open(`https://www.facebook.com/CypheriumChain`);
    }
    openTelegram() {
        // window.open(`https://t.me/cypherium_supergroup`);
        this.native.openUrlBySystemBrowser("https://t.me/cypherium_supergroup");
        // this.native.openUrlBySystemBrowser("tg://resolve?domain=cypherium_supergroup");
    }
};
AboutPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _providers_global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.page.scss */ "./src/app/pages/about/about.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _providers_global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _providers_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _providers_native_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], AboutPage);



/***/ })

}]);
//# sourceMappingURL=pages-about-about-module-es2015.js.map