function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-export-keystore-export-keystore-module~pages-export-privatekey-export-privatekey-modul~7daa9f50"], {
  /***/
  "./src/app/providers/http-helper/http-helper.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/providers/http-helper/http-helper.service.ts ***!
    \**************************************************************/

  /*! exports provided: HttpHelperService */

  /***/
  function srcAppProvidersHttpHelperHttpHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHelperService", function () {
      return HttpHelperService;
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


    var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../storage/storage.service */
    "./src/app/providers/storage/storage.service.ts");
    /* harmony import */


    var _logger_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../logger/logger.service */
    "./src/app/providers/logger/logger.service.ts");
    /* harmony import */


    var _helper_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../helper/helper.service */
    "./src/app/providers/helper/helper.service.ts");

    var HttpHelperService_1;
    /**
     * http工具类
     */

    var HttpHelperService = HttpHelperService_1 =
    /*#__PURE__*/
    function () {
      function HttpHelperService(helper) {
        _classCallCheck(this, HttpHelperService);

        this.helper = helper;
      }

      _createClass(HttpHelperService, [{
        key: "requestBefore",
        value: function requestBefore(options, setting) {
          this.showLoading(setting); // if (this.helper.isMobile() && GlobalService.showLog) {

          if (this.helper.isMobile()) {
            console.log("Before request:" + JSON.stringify(options));
          } else {
            _logger_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"].log('Before request:', '#3880ff', 'options:', options);
          }
        }
      }, {
        key: "requestSuccess",
        value: function requestSuccess(options) {
          this.hideLoading(); // if (this.helper.isMobile() && GlobalService.showLog) {

          if (this.helper.isMobile()) {
            console.log("Request succeed for:" + options.url);
          } else {
            _logger_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"].log('Request succeed:', '#10dc60', 'options:', options);
          }
        }
      }, {
        key: "requestError",
        value: function requestError(options) {
          this.hideLoading(); // if (this.helper.isMobile() && GlobalService.showLog) {

          if (this.helper.isMobile()) {
            console.log("Request error for:" + options.url);
          } else {
            _logger_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"].log('Request failed:', '#f04141', 'options:', options);
          }
        }
      }, {
        key: "showLoading",
        value: function showLoading(setting) {
          ++HttpHelperService_1.requestCount;
          setting.showLoading && this.helper.showLoading();
        }
      }, {
        key: "hideLoading",
        value: function hideLoading() {
          --HttpHelperService_1.requestCount === 0 && this.helper.hideLoading();
        }
      }], [{
        key: "getDefaultSetting",
        value: function getDefaultSetting(setting) {
          var defaultSetting = {
            useDefaultApi: true,
            needCache: false,
            showLoading: false,
            ignoreError: false
          };
          return setting ? Object.assign({}, defaultSetting, setting) : defaultSetting;
        }
      }, {
        key: "getCacheData",
        value: function getCacheData(options) {
          var cacheKey = HttpHelperService_1.getCacheKey(options);
          return _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].sessionStorage.get(cacheKey) || null;
        }
      }, {
        key: "setCacheData",
        value: function setCacheData(options, data) {
          var cacheKey = HttpHelperService_1.getCacheKey(options);

          _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].sessionStorage.set(cacheKey, data);
        }
      }, {
        key: "getCacheKey",
        value: function getCacheKey(options) {
          var strParams = JSON.stringify(options.params);
          var strBody = JSON.stringify(options.body);
          return options.url + strParams + strBody;
        }
      }]);

      return HttpHelperService;
    }();

    HttpHelperService.requestCount = 0; // 记录未完成的请求数量,当请求数为0关闭loading,当不为0显示loading

    HttpHelperService.ctorParameters = function () {
      return [{
        type: _helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]
      }];
    };

    HttpHelperService = HttpHelperService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]])], HttpHelperService);
    /***/
  },

  /***/
  "./src/app/providers/http/http.service.ts":
  /*!************************************************!*\
    !*** ./src/app/providers/http/http.service.ts ***!
    \************************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppProvidersHttpHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _logger_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../logger/logger.service */
    "./src/app/providers/logger/logger.service.ts");
    /* harmony import */


    var _util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../util/util.service */
    "./src/app/providers/util/util.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _native_native_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../native/native.service */
    "./src/app/providers/native/native.service.ts");
    /* harmony import */


    var _helper_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../helper/helper.service */
    "./src/app/providers/helper/helper.service.ts");
    /* harmony import */


    var _http_helper_http_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../http-helper/http-helper.service */
    "./src/app/providers/http-helper/http-helper.service.ts");
    /* harmony import */


    var _global_global_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../global/global.service */
    "./src/app/providers/global/global.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /**
     * 封装angular http
     */


    var HttpService =
    /*#__PURE__*/
    function (_http_helper_http_hel) {
      _inherits(HttpService, _http_helper_http_hel);

      function HttpService(http, helper, translateService, native) {
        var _this;

        _classCallCheck(this, HttpService);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(HttpService).call(this, helper));
        _this.http = http;
        _this.helper = helper;
        _this.translateService = translateService;
        _this.native = native;
        return _this;
      }

      _createClass(HttpService, [{
        key: "get",
        value: function get(url) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var setting = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          console.log("getgetget", url);
          var options = {
            method: 'GET',
            url: url,
            params: params
          };
          return this.doRequest(options, setting);
        }
      }, {
        key: "post",
        value: function post(url) {
          var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var setting = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var options = {
            method: 'POST',
            url: url,
            body: body,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json; charset=UTF-8'
            })
          };
          return this.doRequest(options, setting);
        }
      }, {
        key: "delete",
        value: function _delete(url) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var setting = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var options = {
            method: 'DELETE',
            url: url,
            params: params
          };
          return this.doRequest(options, setting);
        }
      }, {
        key: "postFormData",
        value: function postFormData(url) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var setting = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var options = {
            method: 'POST',
            url: url,
            params: params,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
          };
          return this.doRequest(options, setting);
        }
      }, {
        key: "doRequest",
        value: function doRequest(options, setting) {
          var defaultSetting = _http_helper_http_helper_service__WEBPACK_IMPORTED_MODULE_10__["HttpHelperService"].getDefaultSetting(setting);

          return defaultSetting.useDefaultApi ? this.defaultRequest(options, defaultSetting) : this.request(options, defaultSetting);
        }
        /**
         * 一个app可能有多个后台接口服务(api),针对主api添加业务处理
         */

      }, {
        key: "defaultRequest",
        value: function defaultRequest(options, setting) {
          var _this2 = this;

          //  使用默认API:APP_SERVE_URL
          if (!options.url.startsWith('http')) {
            options.url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].appServerUrl + options.url;
          }

          console.log("defaultRequest:" + options.url); //  添加请求头
          // if (GlobalService.token) {
          //     options.headers = options.headers || new HttpHeaders();
          //     options.headers = options.headers.set('Authorization', `Bearer ${GlobalService.token}`);  // 注：set append返回新的HttpHeaders
          // }

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this2.request(options, setting).subscribe(function (res) {
              observer.next(res); // data是主api约定返回的数据
            }, function (err) {
              observer.error(err);
            });
          });
        }
      }, {
        key: "request",
        value: function request(ops, set) {
          var _this3 = this;

          var options = Object.assign({
            url: '',
            method: 'POST',
            body: null,
            params: null,
            urlWithParams: false,
            headers: null,
            reportProgress: false,
            withCredentials: false,
            responseType: 'json',
            header: {
              "Content-Type": "application/json",
              'Accept': 'application/json, text/plain',
              "cache-control": "no-cache",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers",
              "Access-Control-Allow-Credentials": "true",
              "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT"
            }
          }, ops);

          var setting = _http_helper_http_helper_service__WEBPACK_IMPORTED_MODULE_10__["HttpHelperService"].getDefaultSetting(set);

          options.url = _util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].formatUrl(options.url);
          console.log(JSON.stringify(set));
          console.log("请求url:" + options.url);
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            // 如果需要缓存，先尝试从sessionStorage中取数据
            if (setting.needCache) {
              var cacheResult = _http_helper_http_helper_service__WEBPACK_IMPORTED_MODULE_10__["HttpHelperService"].getCacheData(options);

              if (cacheResult) {
                observer.next(cacheResult);
                return;
              }
            }

            _this3.requestBefore(options, setting);

            _this3.http.request(options.method, options.url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["timeout"])(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].requestTimeout)).subscribe(function (res) {
              setting.needCache && _http_helper_http_helper_service__WEBPACK_IMPORTED_MODULE_10__["HttpHelperService"].setCacheData(options, res); // 如果需要缓存，保存数据到sessionStorage中

              var code = res.err_no; //出错则弹出提示

              if (code && _global_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalService"].errorCode[code] && !set.ignoreError) {
                _this3.helper.toast(_global_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalService"].errorCode[code]);
              }

              if (!_this3.helper.IsMobile) {
                _logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"].log('Response', '#10dc60', options.url, res);
              } else if (_global_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalService"].showLog) {
                console.log("Request response:" + JSON.stringify(res) + " with url:" + options.url);
              }

              if (code && !set.ignoreError) {
                _this3.requestError(options);

                observer.error(_this3.requestFailedHandle(options.url, res.message));
              } else {
                observer.next(res);

                _this3.requestSuccess(options);
              }
            }, function (err) {
              if (!set.ignoreError) {
                _this3.requestError(options);

                observer.error(_this3.requestFailedHandle(options.url, err));
              }
            });
          });
        }
      }, {
        key: "getTranslate",
        value: function getTranslate(key) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var value;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return new Promise(function (resolve, reject) {
                      _this4.translateService.get(key).subscribe(function (value) {
                        resolve(value);
                      });
                    });

                  case 2:
                    value = _context.sent;
                    return _context.abrupt("return", value);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
        /**
         * 处理请求失败事件
         */

      }, {
        key: "requestFailedHandle",
        value: function requestFailedHandle(url, err) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var status, msg, errData, error, tips, info, _tips, _info, _tips2;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    status = err && err.status;
                    _context2.next = 3;
                    return this.getTranslate('REQUEST_ERROR');

                  case 3:
                    msg = _context2.sent;

                    if (!(status === 400)) {
                      _context2.next = 18;
                      break;
                    }

                    errData = err.error; //  401 token无效或过期需要重新登录

                    if (!(errData.code === 401)) {
                      _context2.next = 13;
                      break;
                    }

                    _context2.next = 9;
                    return this.getTranslate('PAASSWORD_EXPIRED');

                  case 9:
                    error = _context2.sent;
                    this.helper.toast(error);
                    _context2.next = 17;
                    break;

                  case 13:
                    _context2.next = 15;
                    return this.getTranslate('TIPS');

                  case 15:
                    tips = _context2.sent;
                    this.helper.alert(tips, _global_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalService"].errorCode[errData.code] || msg);

                  case 17:
                    return _context2.abrupt("return", errData);

                  case 18:
                    if (!(this.helper.isMobile() && !this.native.isConnecting())) {
                      _context2.next = 25;
                      break;
                    }

                    _context2.next = 21;
                    return this.getTranslate('NETWORK_ERROR');

                  case 21:
                    info = _context2.sent;
                    this.helper.alert(info);
                    _context2.next = 56;
                    break;

                  case 25:
                    if (!(err instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["TimeoutError"])) {
                      _context2.next = 35;
                      break;
                    }

                    _context2.next = 28;
                    return this.getTranslate('TIPS');

                  case 28:
                    _tips = _context2.sent;
                    _context2.next = 31;
                    return this.getTranslate('NETWORK_TIMEOUT');

                  case 31:
                    _info = _context2.sent;
                    this.helper.alert(_tips, _info);
                    _context2.next = 56;
                    break;

                  case 35:
                    if (!(status === 0)) {
                      _context2.next = 41;
                      break;
                    }

                    _context2.next = 38;
                    return this.getTranslate('BACKEND_ERROR');

                  case 38:
                    msg = _context2.sent;
                    _context2.next = 51;
                    break;

                  case 41:
                    if (!(status === 404)) {
                      _context2.next = 47;
                      break;
                    }

                    _context2.next = 44;
                    return this.getTranslate('BACKEND_NOT_EXIST');

                  case 44:
                    msg = _context2.sent;
                    _context2.next = 51;
                    break;

                  case 47:
                    if (!(status === 500)) {
                      _context2.next = 51;
                      break;
                    }

                    _context2.next = 50;
                    return this.getTranslate('BACKEND_ERROR1');

                  case 50:
                    msg = _context2.sent;

                  case 51:
                    _context2.next = 53;
                    return this.getTranslate('REQUEST_FAILURE');

                  case 53:
                    _tips2 = _context2.sent;
                    this.helper.alert(_tips2, msg);

                    _logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"].http(err, {
                      url: url,
                      status: status
                    });

                  case 56:
                    return _context2.abrupt("return", err);

                  case 57:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return HttpService;
    }(_http_helper_http_helper_service__WEBPACK_IMPORTED_MODULE_10__["HttpHelperService"]);

    HttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _helper_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]
      }, {
        type: _native_native_service__WEBPACK_IMPORTED_MODULE_8__["NativeService"]
      }];
    };

    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _helper_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"], _native_native_service__WEBPACK_IMPORTED_MODULE_8__["NativeService"]])], HttpService);
    /***/
  },

  /***/
  "./src/app/providers/storage/storage.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/providers/storage/storage.service.ts ***!
    \******************************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppProvidersStorageStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * 缓存工具类
     * 注：代码中务必使用此方法缓存数据，方便以后切换缓存机制
     */


    var StorageService = function StorageService() {
      _classCallCheck(this, StorageService);
    };

    StorageService.sessionStorage = {
      set: function set(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
      },
      get: function get(key) {
        var jsonString = sessionStorage.getItem(key);
        return jsonString ? JSON.parse(jsonString) : null;
      },
      remove: function remove(key) {
        sessionStorage.removeItem(key);
      },
      clear: function clear() {
        sessionStorage.clear();
      }
    };
    StorageService.localStorage = {
      set: function set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
      },
      get: function get(key) {
        var jsonString = localStorage.getItem(key);
        return jsonString ? JSON.parse(jsonString) : null;
      },
      remove: function remove(key) {
        localStorage.removeItem(key);
      },
      clear: function clear() {
        localStorage.clear();
      }
    };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StorageService);
    /***/
  },

  /***/
  "./src/app/providers/util/util.service.ts":
  /*!************************************************!*\
    !*** ./src/app/providers/util/util.service.ts ***!
    \************************************************/

  /*! exports provided: UtilService */

  /***/
  function srcAppProvidersUtilUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilService", function () {
      return UtilService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * 工具类：存放和业务无关的公共方法
     */


    var UtilService =
    /*#__PURE__*/
    function () {
      function UtilService() {
        _classCallCheck(this, UtilService);
      }

      _createClass(UtilService, null, [{
        key: "dateFormat",

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
        value: function dateFormat(date) {
          var sFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd';
          var time = {
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
          return sFormat.replace(/yyyy/ig, String(time.Year)).replace(/yyy/ig, String(time.Year)).replace(/yy/ig, time.TYear).replace(/y/ig, time.TYear).replace(/MM/g, time.TMonth).replace(/M/g, String(time.Month)).replace(/dd/ig, time.TDay).replace(/d/ig, String(time.Day)).replace(/HH/g, time.THour).replace(/H/g, String(time.Hour)).replace(/hh/g, time.Thour).replace(/h/g, String(time.hour)).replace(/mm/g, time.TMinute).replace(/m/g, String(time.Minute)).replace(/ss/ig, time.TSecond).replace(/s/ig, String(time.Second)).replace(/fff/ig, String(time.Millisecond));
        }
        /**
         * 返回字符串长度，中文计数为2
         */

      }, {
        key: "strLength",
        value: function strLength(str) {
          var len = 0;

          for (var i = 0, length = str.length; i < length; i++) {
            str.charCodeAt(i) > 255 ? len += 2 : len++;
          }

          return len;
        }
        /**
         * 密码强度 返回：low middle high
         */

      }, {
        key: "checkPass",
        value: function checkPass(pwd) {
          var m = 0;

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

      }, {
        key: "formatUrl",
        value: function formatUrl() {
          var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var index = 0;

          if (url.startsWith('http')) {
            index = 7;
          }

          return url.substring(0, index) + url.substring(index).replace(/\/\/*/g, '/');
        }
        /**
         * 产生一个随机的32位长度字符串
         */

      }, {
        key: "uuid",
        value: function uuid() {
          var text = '';
          var possible = 'abcdef0123456789';

          for (var i = 0; i < 19; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }

          return text + new Date().getTime();
        }
        /**
         * 根据图片路径把图片转为base64字符串格式
         */

      }, {
        key: "convertImgToBase64",
        value: function convertImgToBase64(url, callback) {
          var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          var outputFormat = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'image/jpg';
          var img = new Image();
          img.crossOrigin = 'anonymous';

          img.onload = function () {
            var canvas = document.createElement('canvas');
            canvas.width = width || img.width;
            canvas.height = height || img.height;
            var context = canvas.getContext('2d');
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            var imgBase64 = canvas.toDataURL(outputFormat);

            if (callback) {
              callback(imgBase64);
            }
          };

          img.src = url;
        }
      }]);

      return UtilService;
    }();

    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UtilService);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-export-keystore-export-keystore-module~pages-export-privatekey-export-privatekey-modul~7daa9f50-es5.js.map