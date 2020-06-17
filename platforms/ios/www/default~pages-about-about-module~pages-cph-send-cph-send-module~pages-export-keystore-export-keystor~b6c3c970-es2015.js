(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-about-about-module~pages-cph-send-cph-send-module~pages-export-keystore-export-keystor~b6c3c970"],{

/***/ "./src/app/providers/logger/logger.service.ts":
/*!****************************************************!*\
  !*** ./src/app/providers/logger/logger.service.ts ***!
  \****************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

var LoggerService_1;

/**
 * 帮助类：存放和业务有关的公共方法
 */
let LoggerService = LoggerService_1 = class LoggerService {
    static error(err, action) {
        this.log('Logger.error：', '#f04141', action, '\n ' + err);
    }
    static log(text, color = '#989aa2', ...detail) {
        console.log(`%c${text}`, `background-color: ${color}; color:white; padding: 2px 5px; border-radius: 2px`, ...detail);
    }
    static http(err, data) {
        console.log(Object.assign({}, data)); // 上报日志
        LoggerService_1.error(err, '请求出错');
    }
};
LoggerService = LoggerService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoggerService);



/***/ }),

/***/ "./src/app/providers/native/native.service.ts":
/*!****************************************************!*\
  !*** ./src/app/providers/native/native.service.ts ***!
  \****************************************************/
/*! exports provided: NativeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeService", function() { return NativeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _logger_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger/logger.service */ "./src/app/providers/logger/logger.service.ts");
/* harmony import */ var _helper_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/helper.service */ "./src/app/providers/helper/helper.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/app-minimize/ngx */ "./node_modules/@ionic-native/app-minimize/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/ngx/index.js");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../global/global.service */ "./src/app/providers/global/global.service.ts");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/open-native-settings/ngx */ "./node_modules/@ionic-native/open-native-settings/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");








// import { SocialSharing } from '@ionic-native/social-sharing/ngx';

// import { PhotoLibrary } from '@ionic-native/photo-library/ngx';








/**
 * Cordova插件（手机硬件）调用工具类
 */
let NativeService = class NativeService {
    constructor(statusBar, splashScreen, appVersion, 
    // private socialSharing: SocialSharing,
    minimize, 
    // private photoLibrary: PhotoLibrary,
    iab, network, vibration, qrScanner, global, clipboard, barcodeScanner, openNativeSettings, helper) {
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.appVersion = appVersion;
        this.minimize = minimize;
        this.iab = iab;
        this.network = network;
        this.vibration = vibration;
        this.qrScanner = qrScanner;
        this.global = global;
        this.clipboard = clipboard;
        this.barcodeScanner = barcodeScanner;
        this.openNativeSettings = openNativeSettings;
        this.helper = helper;
        this.AppVersionInfo = null;
    }
    /**
     * 设置状态栏样式
     * https://ionicframework.com/docs/native/status-bar
     */
    setStatusBarStyle() {
        // if (this.helper.isMobile()) {
        //     // this.statusBar.overlaysWebView(false);
        //     // this.statusBar.styleLightContent();
        //     this.statusBar.styleDefault(); // 使用黑色字体
        //     this.statusBar.backgroundColorByHexString('#fff'); // 设置背景色
        // }
    }
    copy(str) {
        this.clipboard.copy(str);
    }
    /**
     * 隐藏启动页
     * https://ionicframework.com/docs/native/splash-screen
     */
    hideSplashScreen() {
        if (this.helper.isMobile()) {
            this.splashScreen.hide();
        }
    }
    openSettings(setting) {
        this.openNativeSettings.open(setting);
    }
    scan() {
        return this.barcodeScanner.scan({
            showTorchButton: true
        }).then(barcodeData => {
            console.log('Barcode data', barcodeData);
            return barcodeData;
        }).catch(err => {
            console.log('Error', err);
            return {
                text: ''
            };
        });
        // return new Promise((resolve, reject) => {
        //     // Optionally request the permission early
        //     this.qrScanner.prepare()
        //         .then((status: QRScannerStatus) => {
        //             console.log("权限状态：" + JSON.stringify(status));
        //             if (status.authorized) {
        //                 console.log("获取权限成功......");
        //                 // camera permission was granted
        //                 // start scanning
        //                 let scanSub = this.qrScanner.scan().subscribe((text: string) => {
        //                     console.log('Scanned something', text);
        //                     this.qrScanner.hide(); // hide camera preview
        //                     scanSub.unsubscribe(); // stop scanning
        //                     resolve(text);
        //                 });
        //             } else if (status.denied) {
        //                 reject(1);
        //                 // camera permission was permanently denied
        //                 // you must use QRScanner.openSettings() method to guide the user to the settings page
        //                 // then they can grant the permission from there
        //             } else {
        //                 reject(0);
        //                 // permission was denied, but not permanently. You can ask for permission again at a later time.
        //             }
        //         })
        //         .catch((e: any) => console.log('Error is', () => {
        //             reject(e);
        //         }));
        // })
    }
    /**
     * 最小化app
     */
    appMinimize() {
        this.minimize.minimize();
    }
    /**
     * 通过系统浏览器打开url
     */
    openUrlBySystemBrowser(url) {
        this.iab.create(url, '_system');
    }
    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    getNetworkType() {
        this.helper.assertIsMobile();
        return this.network.type;
    }
    /**
     * 判断是否有网络
     */
    isConnecting() {
        return this.getNetworkType() !== 'none';
    }
    /**
     * 获取app名称，包名，版本号
     * https://ionicframework.com/docs/native/app-version
     */
    getAppVersionInfo() {
        this.helper.assertIsMobile();
        if (this.AppVersionInfo) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.AppVersionInfo);
        }
        const appInfo = {
            appName: '',
            packageName: '',
            versionNumber: '',
            name: '' // ionic2tabs
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(observer => {
            Promise.all([
                this.appVersion.getAppName(),
                this.appVersion.getPackageName(),
                this.appVersion.getVersionNumber()
            ]).then(result => {
                appInfo.appName = result[0];
                appInfo.packageName = result[1];
                appInfo.versionNumber = result[2];
                appInfo.name = result[1].split('.').pop();
                this.AppVersionInfo = appInfo;
                observer.next(appInfo);
            }).catch(err => {
                _logger_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"].error(err, 'NativeService.getAppVersionInfo');
                observer.error(false);
            });
        });
    }
    /**
   * 获得app版本号,如0.01
   * @description  对应/config.xml中version的值
   */
    getVersionNumber() {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(observer => {
            if (this.helper.isMobile()) {
                this.appVersion.getVersionNumber().then((value) => {
                    observer.next(value);
                }).catch(err => {
                    console.log(err, '获得app版本号失败');
                    observer.error(false);
                });
            }
            else {
                observer.next('1.0.7');
            }
        });
    }
    /**
     * 获得app name,如现场作业
     * @description  对应/config.xml中name的值
     */
    getAppName() {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(observer => {
            if (this.helper.isMobile()) {
                this.appVersion.getAppName().then((value) => {
                    observer.next(value);
                }).catch(err => {
                    console.log(err, '获得app name失败');
                    observer.error(false);
                });
            }
            else {
                observer.next('Mobbi');
            }
        });
    }
    /**
     * 获得app包名/id,如com.kit.ionic2tabs
     * @description  对应/config.xml中id的值
     */
    getPackageName() {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(observer => {
            if (this.helper.isMobile()) {
                this.appVersion.getPackageName().then((value) => {
                    observer.next(value);
                }).catch(err => {
                    console.log(err, '获得app包名失败');
                    observer.error(false);
                });
            }
            else {
                observer.next('com.mobbi.italy');
            }
        });
    }
    vibrate() {
        console.log("密码错误");
        this.vibration.vibrate(this.global.vibrationDuration);
    }
    /**
     * 获取照片 - 风格同微信获取照片
     * https://github.com/giantss/cordova-plugin-ImagePicker
     */
    getPictures(options = {}) {
        this.helper.assertIsMobile();
        const ops = Object.assign({ maximumImagesCount: 9, width: 1920, height: 1440, quality: 100 }, options);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(observer => {
            ImagePicker.getPictures(result => {
                observer.next(result.images);
            }, err => {
                err === '已取消' ? console.log(err) : _logger_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"].error(err, 'NativeService.getPictures');
                observer.error(false);
            }, ops);
        });
    }
    /**
     * 保存图片到本地相册
     * @param url 图片url或base64
     */
    savePicture(url) {
        this.helper.assertIsMobile();
        // return Observable.create(observer => {
        // 	// 请求权限
        // 	this.photoLibrary.requestAuthorization({ read: true, write: true }).then(() => {
        // 		// 获取app包名作为相册名称
        // 		this.getAppVersionInfo().subscribe(appInfo => {
        // 			// 执行保存操作
        // 			this.photoLibrary.saveImage(url, appInfo.name).then(res => {
        // 				observer.next(res);
        // 			}).catch(err => {
        // 				Logger.error(err, 'NativeService.savePicture');
        // 				observer.error(false);
        // 			});
        // 		});
        // 	}).catch(err => {
        // 		Logger.error(err, 'NativeService.savePicture');
        // 		observer.error(false);
        // 	});
        // });
    }
    /**
     * 调用系统分享功能  https://ionicframework.com/docs/native/social-sharing/
     * 注意：同时只能分享一种类型
     * @param message 分享文本
     * @param file 分享文件，如图片
     */
    share(message = null, file = null) {
        this.helper.assertIsMobile();
        // this.socialSharing.share(message, null, file);
    }
};
NativeService.ctorParameters = () => [
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__["AppVersion"] },
    { type: _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_8__["AppMinimize"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"] },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_11__["Vibration"] },
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_13__["QRScanner"] },
    { type: _global_global_service__WEBPACK_IMPORTED_MODULE_12__["GlobalService"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_15__["Clipboard"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_16__["BarcodeScanner"] },
    { type: _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_14__["OpenNativeSettings"] },
    { type: _helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] }
];
NativeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"],
        _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__["AppVersion"],
        _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_8__["AppMinimize"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"],
        _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_11__["Vibration"],
        _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_13__["QRScanner"],
        _global_global_service__WEBPACK_IMPORTED_MODULE_12__["GlobalService"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_15__["Clipboard"],
        _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_16__["BarcodeScanner"],
        _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_14__["OpenNativeSettings"],
        _helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]])
], NativeService);



/***/ })

}]);
//# sourceMappingURL=default~pages-about-about-module~pages-cph-send-cph-send-module~pages-export-keystore-export-keystor~b6c3c970-es2015.js.map