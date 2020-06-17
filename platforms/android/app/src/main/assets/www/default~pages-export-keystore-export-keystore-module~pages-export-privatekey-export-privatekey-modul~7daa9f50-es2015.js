(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-export-keystore-export-keystore-module~pages-export-privatekey-export-privatekey-modul~7daa9f50"],{

/***/ "./src/app/providers/http-helper/http-helper.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/providers/http-helper/http-helper.service.ts ***!
  \**************************************************************/
/*! exports provided: HttpHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHelperService", function() { return HttpHelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/providers/storage/storage.service.ts");
/* harmony import */ var _logger_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger/logger.service */ "./src/app/providers/logger/logger.service.ts");
/* harmony import */ var _helper_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/helper.service */ "./src/app/providers/helper/helper.service.ts");

var HttpHelperService_1;




/**
 * http工具类
 */
let HttpHelperService = HttpHelperService_1 = class HttpHelperService {
    constructor(helper) {
        this.helper = helper;
    }
    static getDefaultSetting(setting) {
        const defaultSetting = {
            useDefaultApi: true,
            needCache: false,
            showLoading: false,
            ignoreError: false
        };
        return setting ? Object.assign({}, defaultSetting, setting) : defaultSetting;
    }
    static getCacheData(options) {
        const cacheKey = HttpHelperService_1.getCacheKey(options);
        return _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].sessionStorage.get(cacheKey) || null;
    }
    static setCacheData(options, data) {
        const cacheKey = HttpHelperService_1.getCacheKey(options);
        _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].sessionStorage.set(cacheKey, data);
    }
    static getCacheKey(options) {
        const strParams = JSON.stringify(options.params);
        const strBody = JSON.stringify(options.body);
        return options.url + strParams + strBody;
    }
    requestBefore(options, setting) {
        this.showLoading(setting);
        // if (this.helper.isMobile() && GlobalService.showLog) {
        if (this.helper.isMobile()) {
            console.log("Before request:" + JSON.stringify(options));
        }
        else {
            _logger_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"].log('Before request:', '#3880ff', 'options:', options);
        }
    }
    requestSuccess(options) {
        this.hideLoading();
        // if (this.helper.isMobile() && GlobalService.showLog) {
        if (this.helper.isMobile()) {
            console.log("Request succeed for:" + options.url);
        }
        else {
            _logger_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"].log('Request succeed:', '#10dc60', 'options:', options);
        }
    }
    requestError(options) {
        this.hideLoading();
        // if (this.helper.isMobile() && GlobalService.showLog) {
        if (this.helper.isMobile()) {
            console.log("Request error for:" + options.url);
        }
        else {
            _logger_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"].log('Request failed:', '#f04141', 'options:', options);
        }
    }
    showLoading(setting) {
        ++HttpHelperService_1.requestCount;
        setting.showLoading && this.helper.showLoading();
    }
    hideLoading() {
        --HttpHelperService_1.requestCount === 0 && this.helper.hideLoading();
    }
};
HttpHelperService.requestCount = 0; // 记录未完成的请求数量,当请求数为0关闭loading,当不为0显示loading
HttpHelperService.ctorParameters = () => [
    { type: _helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] }
];
HttpHelperService = HttpHelperService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]])
], HttpHelperService);



/***/ }),

/***/ "./src/app/providers/http/http.service.ts":
/*!************************************************!*\
  !*** ./src/app/providers/http/http.service.ts ***!
  \************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _logger_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logger/logger.service */ "./src/app/providers/logger/logger.service.ts");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/util.service */ "./src/app/providers/util/util.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _native_native_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../native/native.service */ "./src/app/providers/native/native.service.ts");
/* harmony import */ var _helper_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helper/helper.service */ "./src/app/providers/helper/helper.service.ts");
/* harmony import */ var _http_helper_http_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../http-helper/http-helper.service */ "./src/app/providers/http-helper/http-helper.service.ts");
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../global/global.service */ "./src/app/providers/global/global.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");













/**
 * 封装angular http
 */
let HttpService = class HttpService extends _http_helper_http_helper_service__WEBPACK_IMPORTED_MODULE_10__["HttpHelperService"] {
    constructor(http, helper, translateService, native) {
        super(helper);
        this.http = http;
        this.helper = helper;
        this.translateService = translateService;
        this.native = native;
    }
    get(url, params = {}, setting = {}) {
        console.log("getgetget", url);
        const options = {
            method: 'GET',
            url: url,
            params
        };
        return this.doRequest(options, setting);
    }
    post(url, body = {}, setting = {}) {
        const options = {
            method: 'POST',
            url: url,
            body,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        };
        return this.doRequest(options, setting);
    }
    delete(url, params = {}, setting = {}) {
        const options = {
            method: 'DELETE',
            url: url,
            params
        };
        return this.doRequest(options, setting);
    }
    postFormData(url, params = {}, setting = {}) {
        const options = {
            method: 'POST',
            url: url,
            params,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
        };
        return this.doRequest(options, setting);
    }
    doRequest(options, setting) {
        const defaultSetting = _http_helper_http_helper_service__WEBPACK_IMPORTED_MODULE_10__["HttpHelperService"].getDefaultSetting(setting);
        return defaultSetting.useDefaultApi ? this.defaultRequest(options, defaultSetting) : this.request(options, defaultSetting);
    }
    /**
     * 一个app可能有多个后台接口服务(api),针对主api添加业务处理
     */
    defaultRequest(options, setting) {
        //  使用默认API:APP_SERVE_URL
        if (!options.url.startsWith('http')) {
            options.url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].appServerUrl + options.url;
        }
        console.log("defaultRequest:" + options.url);
        //  添加请求头
        // if (GlobalService.token) {
        //     options.headers = options.headers || new HttpHeaders();
        //     options.headers = options.headers.set('Authorization', `Bearer ${GlobalService.token}`);  // 注：set append返回新的HttpHeaders
        // }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            this.request(options, setting).subscribe(res => {
                observer.next(res); // data是主api约定返回的数据
            }, err => {
                observer.error(err);
            });
        });
    }
    request(ops, set) {
        const options = Object.assign({ url: '', method: 'POST', body: null, params: null, urlWithParams: false, headers: null, reportProgress: false, withCredentials: false, responseType: 'json', header: {
                "Content-Type": "application/json",
                'Accept': 'application/json, text/plain',
                "cache-control": "no-cache",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT",
            } }, ops);
        const setting = _http_helper_http_helper_service__WEBPACK_IMPORTED_MODULE_10__["HttpHelperService"].getDefaultSetting(set);
        options.url = _util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].formatUrl(options.url);
        console.log(JSON.stringify(set));
        console.log("请求url:" + options.url);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            // 如果需要缓存，先尝试从sessionStorage中取数据
            if (setting.needCache) {
                const cacheResult = _http_helper_http_helper_service__WEBPACK_IMPORTED_MODULE_10__["HttpHelperService"].getCacheData(options);
                if (cacheResult) {
                    observer.next(cacheResult);
                    return;
                }
            }
            this.requestBefore(options, setting);
            this.http.request(options.method, options.url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["timeout"])(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].requestTimeout)).subscribe((res) => {
                setting.needCache && _http_helper_http_helper_service__WEBPACK_IMPORTED_MODULE_10__["HttpHelperService"].setCacheData(options, res); // 如果需要缓存，保存数据到sessionStorage中
                let code = res.err_no; //出错则弹出提示
                if (code && _global_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalService"].errorCode[code] && !set.ignoreError) {
                    this.helper.toast(_global_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalService"].errorCode[code]);
                }
                if (!this.helper.IsMobile) {
                    _logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"].log('Response', '#10dc60', options.url, res);
                }
                else if (_global_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalService"].showLog) {
                    console.log("Request response:" + JSON.stringify(res) + " with url:" + options.url);
                }
                if (code && !set.ignoreError) {
                    this.requestError(options);
                    observer.error(this.requestFailedHandle(options.url, res.message));
                }
                else {
                    observer.next(res);
                    this.requestSuccess(options);
                }
            }, err => {
                if (!set.ignoreError) {
                    this.requestError(options);
                    observer.error(this.requestFailedHandle(options.url, err));
                }
            });
        });
    }
    getTranslate(key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let value = yield new Promise((resolve, reject) => {
                this.translateService.get(key).subscribe((value) => {
                    resolve(value);
                });
            });
            return value;
        });
    }
    /**
     * 处理请求失败事件
     */
    requestFailedHandle(url, err) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const status = err && err.status;
            let msg = yield this.getTranslate('REQUEST_ERROR');
            // 与后台约定，状态码为400即为业务异常
            if (status === 400) {
                const errData = err.error;
                //  401 token无效或过期需要重新登录
                if (errData.code === 401) {
                    let error = yield this.getTranslate('PAASSWORD_EXPIRED');
                    this.helper.toast(error);
                }
                else {
                    let tips = yield this.getTranslate('TIPS');
                    this.helper.alert(tips, _global_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalService"].errorCode[errData.code] || msg);
                }
                return errData;
            }
            if (this.helper.isMobile() && !this.native.isConnecting()) {
                let info = yield this.getTranslate('NETWORK_ERROR');
                this.helper.alert(info);
            }
            else if (err instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["TimeoutError"]) {
                let tips = yield this.getTranslate('TIPS');
                let info = yield this.getTranslate('NETWORK_TIMEOUT');
                this.helper.alert(tips, info);
            }
            else {
                if (status === 0) {
                    msg = yield this.getTranslate('BACKEND_ERROR');
                }
                else if (status === 404) {
                    msg = yield this.getTranslate('BACKEND_NOT_EXIST');
                }
                else if (status === 500) {
                    msg = yield this.getTranslate('BACKEND_ERROR1');
                }
                let tips = yield this.getTranslate('REQUEST_FAILURE');
                this.helper.alert(tips, msg);
                _logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"].http(err, {
                    url,
                    status
                });
            }
            return err;
        });
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _helper_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] },
    { type: _native_native_service__WEBPACK_IMPORTED_MODULE_8__["NativeService"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _helper_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"],
        _native_native_service__WEBPACK_IMPORTED_MODULE_8__["NativeService"]])
], HttpService);



/***/ }),

/***/ "./src/app/providers/storage/storage.service.ts":
/*!******************************************************!*\
  !*** ./src/app/providers/storage/storage.service.ts ***!
  \******************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * 缓存工具类
 * 注：代码中务必使用此方法缓存数据，方便以后切换缓存机制
 */
let StorageService = class StorageService {
};
StorageService.sessionStorage = {
    set(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
        const jsonString = sessionStorage.getItem(key);
        return jsonString ? JSON.parse(jsonString) : null;
    },
    remove(key) {
        sessionStorage.removeItem(key);
    },
    clear() {
        sessionStorage.clear();
    }
};
StorageService.localStorage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
        const jsonString = localStorage.getItem(key);
        return jsonString ? JSON.parse(jsonString) : null;
    },
    remove(key) {
        localStorage.removeItem(key);
    },
    clear() {
        localStorage.clear();
    }
};
StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "./src/app/providers/util/util.service.ts":
/*!************************************************!*\
  !*** ./src/app/providers/util/util.service.ts ***!
  \************************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * 工具类：存放和业务无关的公共方法
 */
let UtilService = class UtilService {
    /**
     * 日期对象转为日期字符串
     * @param date 需要格式化的日期对象
     * @param sFormat 输出格式,默认为yyyy-MM-dd                        年：y，月：M，日：d，时：h，分：m，秒：s
     * @example  dateFormat(new Date())                               "2017-02-28"
     * @example  dateFormat(new Date(),'yyyy-MM-dd')                  "2017-02-28"
     * @example  dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss')         "2017-02-28 13:24:00"   ps:HH:24小时制
     * @example  dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss')         "2017-02-28 01:24:00"   ps:hh:12小时制
     * @example  dateFormat(new Date(),'hh:mm')                       "09:24"
     * @example  dateFormat(new Date(),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
     * @example  dateFormat(new Date('2017-02-28 13:24:00'),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
     */
    static dateFormat(date, sFormat = 'yyyy-MM-dd') {
        const time = {
            Year: 0,
            TYear: '0',
            Month: 0,
            TMonth: '0',
            Day: 0,
            TDay: '0',
            Hour: 0,
            THour: '0',
            hour: 0,
            Thour: '0',
            Minute: 0,
            TMinute: '0',
            Second: 0,
            TSecond: '0',
            Millisecond: 0
        };
        time.Year = date.getFullYear();
        time.TYear = String(time.Year).substr(2);
        time.Month = date.getMonth() + 1;
        time.TMonth = time.Month < 10 ? '0' + time.Month : String(time.Month);
        time.Day = date.getDate();
        time.TDay = time.Day < 10 ? '0' + time.Day : String(time.Day);
        time.Hour = date.getHours();
        time.THour = time.Hour < 10 ? '0' + time.Hour : String(time.Hour);
        time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
        time.Thour = time.hour < 10 ? '0' + time.hour : String(time.hour);
        time.Minute = date.getMinutes();
        time.TMinute = time.Minute < 10 ? '0' + time.Minute : String(time.Minute);
        time.Second = date.getSeconds();
        time.TSecond = time.Second < 10 ? '0' + time.Second : String(time.Second);
        time.Millisecond = date.getMilliseconds();
        return sFormat.replace(/yyyy/ig, String(time.Year))
            .replace(/yyy/ig, String(time.Year))
            .replace(/yy/ig, time.TYear)
            .replace(/y/ig, time.TYear)
            .replace(/MM/g, time.TMonth)
            .replace(/M/g, String(time.Month))
            .replace(/dd/ig, time.TDay)
            .replace(/d/ig, String(time.Day))
            .replace(/HH/g, time.THour)
            .replace(/H/g, String(time.Hour))
            .replace(/hh/g, time.Thour)
            .replace(/h/g, String(time.hour))
            .replace(/mm/g, time.TMinute)
            .replace(/m/g, String(time.Minute))
            .replace(/ss/ig, time.TSecond)
            .replace(/s/ig, String(time.Second))
            .replace(/fff/ig, String(time.Millisecond));
    }
    /**
     * 返回字符串长度，中文计数为2
     */
    static strLength(str) {
        let len = 0;
        for (let i = 0, length = str.length; i < length; i++) {
            str.charCodeAt(i) > 255 ? len += 2 : len++;
        }
        return len;
    }
    /**
     * 密码强度 返回：low middle high
     */
    static checkPass(pwd) {
        let m = 0;
        if (pwd.length <= 6) {
            return 'low'; // 密码长度小于等于6
        }
        if (/\d/.test(pwd)) {
            m++; // 纯数字密码
        }
        if (/[a-z]/.test(pwd)) {
            m++; // 密码包含小写字母
        }
        if (/[A-Z]/.test(pwd)) {
            m++; // 密码包含大写字母
        }
        if (/\W/.test(pwd)) {
            m++; // 密码包含特殊字符
        }
        if (pwd.length > 15) {
            m = 4; // 密码长度大于15
        }
        if (m < 2) {
            return 'low';
        }
        if (m === 2) {
            return 'middle';
        }
        if (m >= 3) {
            return 'high';
        }
    }
    /**
     * 把url中的双斜杠替换为单斜杠
     * 如:http://localhost:8080//api//demo.替换后http://localhost:8080/api/demo
     */
    static formatUrl(url = '') {
        let index = 0;
        if (url.startsWith('http')) {
            index = 7;
        }
        return url.substring(0, index) + url.substring(index).replace(/\/\/*/g, '/');
    }
    /**
     * 产生一个随机的32位长度字符串
     */
    static uuid() {
        let text = '';
        const possible = 'abcdef0123456789';
        for (let i = 0; i < 19; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + new Date().getTime();
    }
    /**
     * 根据图片路径把图片转为base64字符串格式
     */
    static convertImgToBase64(url, callback, width = null, height = null, outputFormat = 'image/jpg') {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function () {
            const canvas = document.createElement('canvas');
            canvas.width = width || img.width;
            canvas.height = height || img.height;
            const context = canvas.getContext('2d');
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            const imgBase64 = canvas.toDataURL(outputFormat);
            if (callback) {
                callback(imgBase64);
            }
        };
        img.src = url;
    }
};
UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilService);



/***/ })

}]);
//# sourceMappingURL=default~pages-export-keystore-export-keystore-module~pages-export-privatekey-export-privatekey-modul~7daa9f50-es2015.js.map