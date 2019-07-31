(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("MsSupportSdk", [], factory);
	else if(typeof exports === 'object')
		exports["MsSupportSdk"] = factory();
	else
		root["MsSupportSdk"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var internal;
	(function (internal) {
	    internal.PROMISE_STATE_PENDING = "pending";
	    internal.SDK_QUERY_PARAM_NAME = {
	        APP_ID: "appid",
	        PARTNER_ID: "partnerid",
	        MS_CV: "ms-cv",
	        COMPONENT_ID: "sdk_componentid",
	        TARGET_ORIGIN: "sdk_targetorigin",
	        HOST_TYPE: "sdk_hosttype",
	        XFRAME: "sdk_xframe",
	        IS_PROXY: "sdk_isproxy",
	        TIMEOUT: "sdk_timeout",
	        SESSION_ID: "sdk_sessionid"
	    };
	    (function (HostType) {
	        HostType[HostType["NONE"] = 0] = "NONE";
	        HostType[HostType["IFRAME"] = 1] = "IFRAME";
	        HostType[HostType["POPUP"] = 2] = "POPUP";
	        HostType[HostType["EMBEDDED"] = 3] = "EMBEDDED";
	        HostType[HostType["IOS"] = 4] = "IOS";
	        HostType[HostType["ANDROID"] = 5] = "ANDROID";
	        HostType[HostType["UWP"] = 6] = "UWP";
	    })(internal.HostType || (internal.HostType = {}));
	    var HostType = internal.HostType;
	    (function (CommonEvent) {
	        CommonEvent[CommonEvent["UNLOADED"] = "Unloaded"] = "UNLOADED";
	        CommonEvent[CommonEvent["ERROR"] = "Error"] = "ERROR";
	        CommonEvent[CommonEvent["SIGNIN_REQUEST"] = "SignInRequest"] = "SIGNIN_REQUEST";
	        CommonEvent[CommonEvent["SIGNIN_RESPONSE"] = "SignInResponse"] = "SIGNIN_RESPONSE";
	        CommonEvent[CommonEvent["SIGNIN_REDIRECT"] = "SignInRedirect"] = "SIGNIN_REDIRECT";
	    })(internal.CommonEvent || (internal.CommonEvent = {}));
	    var CommonEvent = internal.CommonEvent;
	    var InternalEvent;
	    (function (InternalEvent) {
	        InternalEvent.LOADED = "Loaded";
	        InternalEvent.HEIGHT_CHANGED = "HeightChanged";
	        InternalEvent.CLIENT_CONFIG_UPDATE = "__ClientConfigUpdate__";
	    })(InternalEvent = internal.InternalEvent || (internal.InternalEvent = {}));
	    var Platform;
	    (function (Platform) {
	        Platform.WEB = "Web";
	        Platform.IOS = "iOS";
	        Platform.ANDROID = "Android";
	        Platform.UWP = "UWP";
	    })(Platform = internal.Platform || (internal.Platform = {}));
	    var SMCEnvironment;
	    (function (SMCEnvironment) {
	        SMCEnvironment.SG1 = "sg1.support.services.microsoft.com";
	        SMCEnvironment.DEV = "dev.support.services.microsoft.com";
	        SMCEnvironment.STAGING = "staging.support.services.microsoft.com";
	        SMCEnvironment.UAT = "support-uat.microsoft.com";
	        SMCEnvironment.PARTNER = "partner.support.services.microsoft.com";
	        SMCEnvironment.PRODUCTION = "support.microsoft.com";
	    })(SMCEnvironment = internal.SMCEnvironment || (internal.SMCEnvironment = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    ;
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var utils;
	    (function (utils) {
	        function generateUniqueId() {
	            function s4() {
	                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	            }
	            return (s4() + s4() + s4() + "4" + s4().substr(0, 3) + s4() + s4() + s4() + s4()).toLowerCase();
	        }
	        utils.generateUniqueId = generateUniqueId;
	        function createFormattedGuid() {
	            var guidPattern = "xxxxxxxx-xxxx-4xxx-Rxxx-xxxxxxxxxxxx";
	            function randomHexDigit() {
	                return Math.floor(Math.random() * 16).toString(16);
	            }
	            var result = guidPattern.replace(/x/g, randomHexDigit);
	            return result.replace("R", (8 | Math.floor(Math.random() * 3)).toString(16));
	        }
	        utils.createFormattedGuid = createFormattedGuid;
	    })(utils = internal.utils || (internal.utils = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var utils;
	    (function (utils) {
	        function cloneObject(target) {
	            var sources = [];
	            for (var _i = 1; _i < arguments.length; _i++) {
	                sources[_i - 1] = arguments[_i];
	            }
	            if (typeof Object.assign != "function") {
	                if (target == null) {
	                    throw new TypeError("Cannot convert undefined or null to object");
	                }
	                var to = Object(target);
	                for (var index = 0; index < sources.length; index++) {
	                    var nextSource = sources[index];
	                    if (nextSource != null) {
	                        for (var nextKey in nextSource) {
	                            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
	                                to[nextKey] = nextSource[nextKey];
	                            }
	                        }
	                    }
	                }
	                return to;
	            }
	            else {
	                return Object.assign.apply(Object, [target].concat(sources));
	            }
	        }
	        utils.cloneObject = cloneObject;
	        function stringify(value) {
	            return typeof value === "string" ? value : JSON.stringify(value);
	        }
	        utils.stringify = stringify;
	        function parse(value) {
	            return typeof value === "string" ? JSON.parse(value) : value;
	        }
	        utils.parse = parse;
	        function hasKeyOrValue(obj, value) {
	            for (var key in obj) {
	                if (value === key || value === obj[key]) {
	                    return true;
	                }
	            }
	            return false;
	        }
	        utils.hasKeyOrValue = hasKeyOrValue;
	    })(utils = internal.utils || (internal.utils = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var SdkConfig = (function () {
	        function SdkConfig(clientConfig) {
	            if (clientConfig && clientConfig.partnerId && clientConfig.appId) {
	                this.sessionId = clientConfig.sessionId || internal.utils.generateUniqueId();
	                this.partnerId = clientConfig.partnerId;
	                this.appId = clientConfig.appId;
	                this.platform = internal.Platform.WEB;
	                this.logger = clientConfig.logger;
	                this.correlationVector = clientConfig.correlationVector;
	            }
	        }
	        return SdkConfig;
	    }());
	    internal.SdkConfig = SdkConfig;
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var utils;
	    (function (utils) {
	        function isString(object, required) {
	            return isType(object, "string", required);
	        }
	        utils.isString = isString;
	        ;
	        function isBoolean(object, required) {
	            return isType(object, "boolean", required);
	        }
	        utils.isBoolean = isBoolean;
	        ;
	        function isNumber(object, required) {
	            return isType(object, "number", required);
	        }
	        utils.isNumber = isNumber;
	        ;
	        function isFunction(object, required) {
	            return isType(object, "function", required);
	        }
	        utils.isFunction = isFunction;
	        ;
	        function isArray(object, required) {
	            var isArray = isType(object, "object", required);
	            if (isArray && object && typeof object.length === "undefined") {
	                isArray = false;
	            }
	            return isArray;
	        }
	        utils.isArray = isArray;
	        ;
	        function isType(object, expectedType, required) {
	            if (required && (typeof object === "undefined" || object == null)) {
	                return false;
	            }
	            if (typeof object !== expectedType && typeof object !== "undefined" && object != null) {
	                return false;
	            }
	            return true;
	        }
	        ;
	        function verifyString(name, object, required) {
	            verifyType(name, object, required, "string", isString);
	        }
	        utils.verifyString = verifyString;
	        ;
	        function verifyBoolean(name, object, required) {
	            verifyType(name, object, required, "boolean", isBoolean);
	        }
	        utils.verifyBoolean = verifyBoolean;
	        ;
	        function verifyNumber(name, object, required) {
	            verifyType(name, object, required, "number", isNumber);
	        }
	        utils.verifyNumber = verifyNumber;
	        ;
	        function verifyFunction(name, object, required) {
	            verifyType(name, object, required, "function", isFunction);
	        }
	        utils.verifyFunction = verifyFunction;
	        ;
	        function verifyArray(name, object, required) {
	            verifyType(name, object, required, "array", isArray);
	        }
	        utils.verifyArray = verifyArray;
	        ;
	        function verifyNotNull(name, object) {
	            if (object == null) {
	                throw new Error(name + " must NOT be null");
	            }
	        }
	        utils.verifyNotNull = verifyNotNull;
	        function verifyType(name, object, required, displayType, typeValidator) {
	            if (!typeValidator(object, required)) {
	                throw new TypeError(name + " must be of type " + displayType);
	            }
	        }
	        ;
	    })(utils = internal.utils || (internal.utils = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var utils;
	    (function (utils) {
	        function isLessThanMinimum(existingVersionParts, minVersionParts) {
	            var existingVersionInts = [];
	            var minVersionInts = [];
	            for (var i = 0; i < existingVersionParts.length; i++) {
	                existingVersionInts.push(parseInt(existingVersionParts[i]));
	            }
	            for (var i = 0; i < minVersionParts.length; i++) {
	                minVersionInts.push(parseInt(minVersionParts[i]));
	            }
	            while (existingVersionInts.length < minVersionInts.length) {
	                existingVersionInts.push(0);
	            }
	            for (var i = 0; i < existingVersionInts.length && i < minVersionInts.length; i++) {
	                if (existingVersionInts[i] < minVersionInts[i]) {
	                    return true;
	                }
	                else if (existingVersionInts[i] > minVersionInts[i]) {
	                    return false;
	                }
	            }
	            return false;
	        }
	        utils.isLessThanMinimum = isLessThanMinimum;
	        ;
	    })(utils = internal.utils || (internal.utils = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var SdkVersion = (function () {
	        function SdkVersion() {
	        }
	        Object.defineProperty(SdkVersion, "version", {
	            get: function () {
	                return "2.0.19101.1";
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return SdkVersion;
	    }());
	    internal.SdkVersion = SdkVersion;
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var telemetry;
	    (function (telemetry) {
	        var model;
	        (function (model) {
	            var WEBSDK_APPID = "Microsoft.Support.Sdk";
	            var BaseEvent = (function () {
	                function BaseEvent(name, config) {
	                    config = config || internal.SdkConfig.current;
	                    this.name = name;
	                    this.sdkVersion = internal.SdkVersion.version;
	                    this.partnerId = config.partnerId;
	                    this.partnerAppId = config.appId;
	                    this.sessionId = config.sessionId;
	                    this.platform = config.platform || internal.Platform.WEB;
	                    this.appId = telemetry.appId || WEBSDK_APPID;
	                    this.origin = internal.utils.getCurrentOrigin();
	                }
	                return BaseEvent;
	            }());
	            model.BaseEvent = BaseEvent;
	        })(model = telemetry.model || (telemetry.model = {}));
	    })(telemetry = internal.telemetry || (internal.telemetry = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var telemetry;
	    (function (telemetry) {
	        var model;
	        (function (model) {
	            var CLIENT_ERROR_EVENT_NAME = "Microsoft.Support.Sdk.ClientError";
	            var ClientError = (function (_super) {
	                __extends(ClientError, _super);
	                function ClientError(config) {
	                    return _super.call(this, CLIENT_ERROR_EVENT_NAME, config) || this;
	                }
	                return ClientError;
	            }(model.BaseEvent));
	            model.ClientError = ClientError;
	        })(model = telemetry.model || (telemetry.model = {}));
	    })(telemetry = internal.telemetry || (internal.telemetry = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var telemetry;
	    (function (telemetry) {
	        var model;
	        (function (model) {
	            var QosEvent = (function (_super) {
	                __extends(QosEvent, _super);
	                function QosEvent(name, operationName, config) {
	                    var _this = _super.call(this, name, config) || this;
	                    internal.utils.verifyString("operationName", operationName, true);
	                    _this.operationName = operationName;
	                    _this.startTimer();
	                    return _this;
	                }
	                QosEvent.prototype.startTimer = function () {
	                    this._startTime = Date.now();
	                };
	                QosEvent.prototype.stopTimer = function () {
	                    this.latencyMs = Date.now() - this._startTime;
	                };
	                return QosEvent;
	            }(model.BaseEvent));
	            model.QosEvent = QosEvent;
	        })(model = telemetry.model || (telemetry.model = {}));
	    })(telemetry = internal.telemetry || (internal.telemetry = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var utils;
	    (function (utils) {
	        function parseUrl(url) {
	            if (utils.isString(url) && url) {
	                var a = document.createElement("a");
	                a.href = url;
	                if (!a.hostname) {
	                    a.href = a.href;
	                }
	                return {
	                    protocol: a.protocol || undefined,
	                    hostname: a.hostname || undefined,
	                    port: a.port || undefined,
	                    pathname: (a.pathname && a.pathname.replace(/(^\/?)/, "/")) || undefined,
	                    search: a.search || undefined,
	                    host: a.host || undefined,
	                    hash: a.hash || undefined
	                };
	            }
	            return undefined;
	        }
	        utils.parseUrl = parseUrl;
	        function parseQueryString(query, decode) {
	            var params = {};
	            query && query.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function ($0, $1, $2, $3) { return params[$1] = decode ? decodeURIComponent($3) : $3; });
	            return params;
	        }
	        utils.parseQueryString = parseQueryString;
	        ;
	        function getPropertyValue(obj, prop) {
	            utils.verifyNotNull("obj", obj);
	            for (var key in obj) {
	                if (obj.hasOwnProperty(key) && key.toLowerCase() === prop.toLowerCase()) {
	                    return obj[key];
	                }
	            }
	            return undefined;
	        }
	        utils.getPropertyValue = getPropertyValue;
	        ;
	        function getCurrentOrigin() {
	            return window.location.origin || window.location.protocol + "//" + window.location.host;
	        }
	        utils.getCurrentOrigin = getCurrentOrigin;
	        ;
	        function getOriginFromUrl(url) {
	            var obj = parseUrl(url);
	            var port = (obj.port && shouldIncludePort(obj.protocol, obj.port)) ? ":" + obj.port : "";
	            return obj.protocol + "//" + (obj.hostname || "") + port;
	        }
	        utils.getOriginFromUrl = getOriginFromUrl;
	        ;
	        function appendParams(link, params, overwrite) {
	            var url = parseUrl(link);
	            var queryParams = parseQueryString((url && url.search) || "", true);
	            for (var name_1 in params) {
	                if (queryParams[name_1]) {
	                    if (overwrite && queryParams[name_1] != params[name_1]) {
	                        queryParams[name_1] = params[name_1];
	                    }
	                }
	                else {
	                    queryParams[name_1] = params[name_1];
	                }
	            }
	            var result;
	            var queryString = jQuery.param(queryParams);
	            var index = link.indexOf("?");
	            if (index > 0) {
	                result = link.substr(0, index + 1) + queryString;
	            }
	            else {
	                result = link + "?" + queryString;
	            }
	            return result;
	        }
	        utils.appendParams = appendParams;
	        ;
	        function getReferrer() {
	            return window && window.document && window.document.referrer || window["MsSupportSdk.referrer"];
	        }
	        utils.getReferrer = getReferrer;
	        function shouldIncludePort(protocol, port) {
	            return !!port && !(protocol === "https:" && port === "443") && !(protocol === "http:" && port === "80");
	        }
	    })(utils = internal.utils || (internal.utils = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var telemetry;
	    (function (telemetry) {
	        var model;
	        (function (model) {
	            var INCOMING_REQUEST_EVENT_NAME = "Microsoft.Support.Sdk.IncomingRequest";
	            var IncomingRequest = (function (_super) {
	                __extends(IncomingRequest, _super);
	                function IncomingRequest(operationName, config) {
	                    var _this = _super.call(this, INCOMING_REQUEST_EVENT_NAME, operationName, config) || this;
	                    _this.referrer = internal.utils.getReferrer();
	                    return _this;
	                }
	                return IncomingRequest;
	            }(model.QosEvent));
	            model.IncomingRequest = IncomingRequest;
	        })(model = telemetry.model || (telemetry.model = {}));
	    })(telemetry = internal.telemetry || (internal.telemetry = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var telemetry;
	    (function (telemetry) {
	        var model;
	        (function (model) {
	            var OUTGOMING_REQUEST_EVENT_NAME = "Microsoft.Support.Sdk.OutgoingRequest";
	            var OutgoingRequest = (function (_super) {
	                __extends(OutgoingRequest, _super);
	                function OutgoingRequest(operationName, config) {
	                    return _super.call(this, OUTGOMING_REQUEST_EVENT_NAME, operationName, config) || this;
	                }
	                return OutgoingRequest;
	            }(model.QosEvent));
	            model.OutgoingRequest = OutgoingRequest;
	        })(model = telemetry.model || (telemetry.model = {}));
	    })(telemetry = internal.telemetry || (internal.telemetry = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var telemetry;
	    (function (telemetry) {
	        var stringify = internal.utils.stringify;
	        var DefaultEventWriter = (function () {
	            function DefaultEventWriter(config) {
	                this._config = config;
	            }
	            DefaultEventWriter.prototype.captureOutgoingRequestAsync = function (trackingFunction, operationName, targetUri, requestMethod, dependencyName, dependencyOperationName) {
	                var _this = this;
	                var qos = this.createOutgoingRequest(operationName, targetUri, requestMethod, dependencyName, dependencyOperationName);
	                return this.trackQosAsync(qos, trackingFunction, function (data) { return _this.writeEvent(data); });
	            };
	            DefaultEventWriter.prototype.captureIncomingRequestAsync = function (trackingFunction, operationName, componentName, uiInfo) {
	                var _this = this;
	                var qos = this.createIncomingRequest(operationName, componentName, uiInfo);
	                return this.trackQosAsync(qos, trackingFunction, function (data) { return _this.writeEvent(data); });
	            };
	            DefaultEventWriter.prototype.captureOutgoingRequest = function (trackingFunction, operationName, targetUri, requestMethod, dependencyName, dependencyOperationName) {
	                var _this = this;
	                var qos = this.createOutgoingRequest(operationName, targetUri, requestMethod, dependencyName, dependencyOperationName);
	                return this.trackQos(qos, trackingFunction, function (data) { return _this.writeEvent(data); });
	            };
	            DefaultEventWriter.prototype.captureIncomingRequest = function (trackingFunction, operationName, componentName, uiInfo) {
	                var _this = this;
	                var qos = this.createIncomingRequest(operationName, componentName, uiInfo);
	                return this.trackQos(qos, trackingFunction, function (data) { return _this.writeEvent(data); });
	            };
	            DefaultEventWriter.prototype.captureError = function (errorMessage, errorName) {
	                this.writeEvent(this.createClientError(errorMessage, errorName));
	            };
	            DefaultEventWriter.prototype.createOutgoingRequest = function (operationName, targetUri, requestMethod, dependencyName, dependencyOperationName) {
	                var event = new telemetry.model.OutgoingRequest(operationName, this._config);
	                event.targetUri = targetUri;
	                event.requestMethod = requestMethod;
	                event.dependencyName = dependencyName;
	                event.dependencyOperationName = dependencyOperationName;
	                return event;
	            };
	            DefaultEventWriter.prototype.createIncomingRequest = function (operationName, componentName, uiInfo) {
	                var event = new telemetry.model.IncomingRequest(operationName, this._config);
	                event.componentName = componentName;
	                event.uiInfo = stringify(uiInfo);
	                return event;
	            };
	            DefaultEventWriter.prototype.createClientError = function (errorMessage, errorName) {
	                var clientError = new telemetry.model.ClientError(this._config);
	                clientError.errorMessage = errorMessage;
	                clientError.errorName = errorName;
	                return clientError;
	            };
	            DefaultEventWriter.prototype.trackQos = function (qos, func, writeEventFunc) {
	                var succeeded = false;
	                var result;
	                qos.startTimer();
	                try {
	                    result = func(qos);
	                    succeeded = (qos.succeeded != null) ? !!(qos.succeeded) : true;
	                }
	                catch (e) {
	                    qos.message = stringify(e.message);
	                    throw e;
	                }
	                finally {
	                    qos.stopTimer();
	                    qos.succeeded = succeeded;
	                    writeEventFunc(qos);
	                }
	                return result;
	            };
	            DefaultEventWriter.prototype.trackQosAsync = function (qos, asyncFunc, writeEventFunc) {
	                var deferred = jQuery.Deferred();
	                try {
	                    qos.startTimer();
	                    asyncFunc(qos).then(function (data) {
	                        qos.stopTimer();
	                        qos.succeeded = (qos.succeeded != null) ? !!(qos.succeeded) : true;
	                        qos.statusCode = qos.statusCode || "200";
	                        writeEventFunc(qos);
	                        deferred.resolve(data);
	                    }, function (error) {
	                        qos.stopTimer();
	                        qos.succeeded = false;
	                        qos.statusCode = qos.statusCode || ((error && error.status) ? error.status.toString() : "500");
	                        qos.message = stringify(error);
	                        writeEventFunc(qos);
	                        deferred.reject(error);
	                    });
	                }
	                catch (e) {
	                    qos.stopTimer();
	                    qos.succeeded = false;
	                    qos.message = stringify(e.message);
	                    writeEventFunc(qos);
	                    deferred.reject(e);
	                }
	                return deferred.promise();
	            };
	            DefaultEventWriter.prototype.writeEvent = function (event) {
	                if (this._config && this._config.logger && this._config.logger.writeEvent instanceof Function) {
	                    this._config.logger.writeEvent(event);
	                }
	            };
	            return DefaultEventWriter;
	        }());
	        telemetry.DefaultEventWriter = DefaultEventWriter;
	    })(telemetry = internal.telemetry || (internal.telemetry = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var telemetry;
	    (function (telemetry) {
	        var awa;
	        (function (awa) {
	            function registerSchemas() {
	                var jsll = window.awa || window.Asimov;
	                jsll && jsll._registerSchemas([{
	                        "name": "Microsoft.Support.Sdk.IncomingRequest",
	                        "Ms.Qos.IncomingServiceRequest": {
	                            "part": "B",
	                            "def": {
	                                "fields": [
	                                    {
	                                        "req": true,
	                                        "name": "operationName",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "targetUri",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "latencyMs",
	                                        "type": "int32"
	                                    },
	                                    {
	                                        "name": "serviceErrorCode",
	                                        "type": "int32"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "succeeded",
	                                        "type": "bool"
	                                    },
	                                    {
	                                        "name": "requestMethod",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "responseContentType",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "protocol",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "protocolStatusCode",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "operationVersion",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "callerIpAddress",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "callerName",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "requestSizeBytes",
	                                        "type": "int32"
	                                    },
	                                    {
	                                        "name": "requestStatus",
	                                        "type": "int32"
	                                    }
	                                ]
	                            }
	                        },
	                        "Microsoft.Support.Sdk.IncomingRequest": {
	                            "part": "C",
	                            "def": {
	                                "fields": [
	                                    {
	                                        "name": "message",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "uiInfo",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "sdkVersion",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "partnerId",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "sessionId",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "componentName",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "partnerAppId",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "platform",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "referrer",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "origin",
	                                        "type": "string"
	                                    }
	                                ]
	                            }
	                        }
	                    },
	                    {
	                        "name": "Microsoft.Support.Sdk.OutgoingRequest",
	                        "Ms.Qos.OutgoingServiceRequest": {
	                            "part": "B",
	                            "def": {
	                                "fields": [
	                                    {
	                                        "req": true,
	                                        "name": "operationName",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "targetUri",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "latencyMs",
	                                        "type": "int32"
	                                    },
	                                    {
	                                        "name": "serviceErrorCode",
	                                        "type": "int32"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "succeeded",
	                                        "type": "bool"
	                                    },
	                                    {
	                                        "name": "requestMethod",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "responseContentType",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "protocol",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "protocolStatusCode",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "dependencyOperationName",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "dependencyOperationVersion",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "dependencyName",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "dependencyType",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "responseSizeBytes",
	                                        "type": "int32"
	                                    },
	                                    {
	                                        "name": "requestStatus",
	                                        "type": "int32"
	                                    }
	                                ]
	                            }
	                        },
	                        "Microsoft.Support.Sdk.OutgoingRequest": {
	                            "part": "C",
	                            "def": {
	                                "fields": [
	                                    {
	                                        "name": "message",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "sdkVersion",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "partnerId",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "sessionId",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "partnerAppId",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "platform",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "origin",
	                                        "type": "string"
	                                    }
	                                ]
	                            }
	                        }
	                    },
	                    {
	                        "name": "Microsoft.Support.Sdk.ClientError",
	                        "Ms.Telemetry.Error": {
	                            "part": "B",
	                            "def": {
	                                "fields": [
	                                    {
	                                        "name": "errorName",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "errorMessage",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "severity",
	                                        "type": "int32"
	                                    },
	                                    {
	                                        "name": "errorType",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "errorCode",
	                                        "type": "int32"
	                                    },
	                                    {
	                                        "name": "lineNumber",
	                                        "type": "uint32"
	                                    },
	                                    {
	                                        "name": "isDisplayed",
	                                        "type": "bool"
	                                    },
	                                    {
	                                        "name": "errorLocation",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "errorMethod",
	                                        "type": "string"
	                                    }
	                                ]
	                            }
	                        },
	                        "Microsoft.Support.Sdk.ClientError": {
	                            "part": "C",
	                            "def": {
	                                "fields": [
	                                    {
	                                        "name": "uiInfo",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "sdkVersion",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "partnerId",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "sessionId",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "partnerAppId",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "platform",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "origin",
	                                        "type": "string"
	                                    }
	                                ]
	                            }
	                        }
	                    },
	                    {
	                        "name": "survey.support.services.microsoft.com.SurveyOffer",
	                        "survey.support.services.microsoft.com.SurveyOffer": {
	                            "part": "C",
	                            "def": {
	                                "fields": [
	                                    {
	                                        "req": true,
	                                        "name": "responseId",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "partnerId",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "surveyId",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "flightId",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "locale",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "offerState",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "partnerContextJson",
	                                        "type": "string"
	                                    }
	                                ]
	                            }
	                        }
	                    },
	                    {
	                        "name": "survey.support.services.microsoft.com.SurveyResponse",
	                        "survey.support.services.microsoft.com.SurveyResponse": {
	                            "part": "C",
	                            "def": {
	                                "fields": [
	                                    {
	                                        "req": true,
	                                        "name": "responseId",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "partnerId",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "surveyId",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "flightId",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "quality",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "mode",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "type",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "locale",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "isPartialResponse",
	                                        "type": "bool"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "displayTime",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "req": true,
	                                        "name": "surveyResponseJson",
	                                        "type": "string"
	                                    },
	                                    {
	                                        "name": "partnerContextJson",
	                                        "type": "string"
	                                    }
	                                ]
	                            }
	                        }
	                    }
	                ]);
	            }
	            awa.registerSchemas = registerSchemas;
	        })(awa = telemetry.awa || (telemetry.awa = {}));
	    })(telemetry = internal.telemetry || (internal.telemetry = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var telemetry;
	    (function (telemetry) {
	        var awa;
	        (function (awa) {
	            var BaseEventBuilder = (function () {
	                function BaseEventBuilder() {
	                }
	                BaseEventBuilder.prototype.createBaseEventNoData = function (eventName, appId) {
	                    var baseEvent = { name: eventName, appId: appId };
	                    var content = {};
	                    content[eventName] = {};
	                    this.setContent(baseEvent, content);
	                    return baseEvent;
	                };
	                BaseEventBuilder.prototype.createBaseEvent = function (data) {
	                    var eventName = data.name;
	                    var baseEvent = { name: eventName, appId: data.appId };
	                    var content = {};
	                    content[eventName] = {};
	                    updatePartC(content, eventName, "sdkVersion", data.sdkVersion);
	                    updatePartC(content, eventName, "partnerId", data.partnerId);
	                    updatePartC(content, eventName, "partnerAppId", data.partnerAppId);
	                    updatePartC(content, eventName, "sessionId", data.sessionId);
	                    updatePartC(content, eventName, "platform", data.platform);
	                    updatePartC(content, eventName, "origin", data.origin);
	                    this.setContent(baseEvent, content);
	                    return baseEvent;
	                };
	                return BaseEventBuilder;
	            }());
	            awa.BaseEventBuilder = BaseEventBuilder;
	            function updatePartC(content, eventName, propertyName, value) {
	                propertyName && content && content[eventName] && (content[eventName][propertyName] = value);
	            }
	            awa.updatePartC = updatePartC;
	            function updatePartB(content, baseEventName, propertyName, value) {
	                propertyName && content && content[baseEventName] && (content[baseEventName][propertyName] = value);
	            }
	            awa.updatePartB = updatePartB;
	        })(awa = telemetry.awa || (telemetry.awa = {}));
	    })(telemetry = internal.telemetry || (internal.telemetry = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var telemetry;
	    (function (telemetry) {
	        var awa;
	        (function (awa) {
	            var INCOMING_REQUEST_BASE_EVENT_NAME = "Ms.Qos.IncomingServiceRequest";
	            var OUTGOING_REQUEST_BASE_EVENT_NAME = "Ms.Qos.OutgoingServiceRequest";
	            var CLIENT_ERROR_BASE_EVENT_NAME = "Ms.Telemetry.Error";
	            var QosEventBuilder = (function () {
	                function QosEventBuilder() {
	                }
	                QosEventBuilder.prototype.createIncomingRequest = function (data) {
	                    var incomingRequest = this.createQosEvent(data, INCOMING_REQUEST_BASE_EVENT_NAME);
	                    var content = this.eventBuilder.getContent(incomingRequest);
	                    var eventName = data.name;
	                    awa.updatePartC(content, eventName, "componentName", data.componentName);
	                    awa.updatePartC(content, eventName, "uiInfo", internal.utils.stringify(data.uiInfo));
	                    awa.updatePartC(content, eventName, "referrer", data.referrer);
	                    return incomingRequest;
	                };
	                QosEventBuilder.prototype.createOutgoingRequest = function (data) {
	                    var outgoingRequest = this.createQosEvent(data, OUTGOING_REQUEST_BASE_EVENT_NAME);
	                    var content = this.eventBuilder.getContent(outgoingRequest);
	                    awa.updatePartB(content, OUTGOING_REQUEST_BASE_EVENT_NAME, "targetUri", internal.utils.stringify(data.targetUri));
	                    awa.updatePartB(content, OUTGOING_REQUEST_BASE_EVENT_NAME, "requestMethod", internal.utils.stringify(data.requestMethod));
	                    awa.updatePartB(content, OUTGOING_REQUEST_BASE_EVENT_NAME, "dependencyOperationName", data.dependencyOperationName || "None");
	                    awa.updatePartB(content, OUTGOING_REQUEST_BASE_EVENT_NAME, "dependencyName", data.dependencyName || "None");
	                    return outgoingRequest;
	                };
	                QosEventBuilder.prototype.createClientError = function (data) {
	                    this.eventBuilder = telemetry.awa.createBaseEventBuilder();
	                    var clientError = this.eventBuilder.createBaseEvent(data);
	                    var content = this.eventBuilder.getContent(clientError);
	                    content[CLIENT_ERROR_BASE_EVENT_NAME] = {};
	                    awa.updatePartB(content, CLIENT_ERROR_BASE_EVENT_NAME, "errorMessage", data.errorMessage);
	                    awa.updatePartB(content, CLIENT_ERROR_BASE_EVENT_NAME, "errorName", data.errorName);
	                    return clientError;
	                };
	                QosEventBuilder.prototype.createQosEvent = function (data, baseEventName) {
	                    this.eventBuilder = telemetry.awa.createBaseEventBuilder();
	                    var qosEvent = this.eventBuilder.createBaseEvent(data);
	                    var content = this.eventBuilder.getContent(qosEvent);
	                    content[baseEventName] = {};
	                    internal.utils.verifyString("operationName", data.operationName, true);
	                    awa.updatePartB(content, baseEventName, "operationName", data.operationName);
	                    awa.updatePartB(content, baseEventName, "latencyMs", data.latencyMs);
	                    awa.updatePartB(content, baseEventName, "protocolStatusCode", data.statusCode);
	                    awa.updatePartB(content, baseEventName, "succeeded", data.succeeded);
	                    awa.updatePartC(content, data.name, "message", internal.utils.stringify(data.message || ""));
	                    return qosEvent;
	                };
	                return QosEventBuilder;
	            }());
	            awa.QosEventBuilder = QosEventBuilder;
	        })(awa = telemetry.awa || (telemetry.awa = {}));
	    })(telemetry = internal.telemetry || (internal.telemetry = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var telemetry;
	    (function (telemetry) {
	        var awa;
	        (function (awa) {
	            var CONTENT_PROPERTY_NAME = "content";
	            var BaseEventBuilderV3 = (function (_super) {
	                __extends(BaseEventBuilderV3, _super);
	                function BaseEventBuilderV3() {
	                    return _super.apply(this, arguments) || this;
	                }
	                BaseEventBuilderV3.prototype.setContent = function (event, content) {
	                    event && (event[CONTENT_PROPERTY_NAME] = content);
	                };
	                BaseEventBuilderV3.prototype.getContent = function (event) {
	                    return event && event[CONTENT_PROPERTY_NAME];
	                };
	                return BaseEventBuilderV3;
	            }(awa.BaseEventBuilder));
	            awa.BaseEventBuilderV3 = BaseEventBuilderV3;
	        })(awa = telemetry.awa || (telemetry.awa = {}));
	    })(telemetry = internal.telemetry || (internal.telemetry = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var telemetry;
	    (function (telemetry) {
	        var awa;
	        (function (awa) {
	            var DATA_PROPERTY_NAME = "data";
	            var BaseEventBuilderV4 = (function (_super) {
	                __extends(BaseEventBuilderV4, _super);
	                function BaseEventBuilderV4() {
	                    return _super.apply(this, arguments) || this;
	                }
	                BaseEventBuilderV4.prototype.setContent = function (event, content) {
	                    event && (event[DATA_PROPERTY_NAME] = content);
	                };
	                BaseEventBuilderV4.prototype.getContent = function (event) {
	                    return event && event[DATA_PROPERTY_NAME];
	                };
	                return BaseEventBuilderV4;
	            }(awa.BaseEventBuilder));
	            awa.BaseEventBuilderV4 = BaseEventBuilderV4;
	        })(awa = telemetry.awa || (telemetry.awa = {}));
	    })(telemetry = internal.telemetry || (internal.telemetry = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var telemetry;
	    (function (telemetry) {
	        var awa;
	        (function (awa) {
	            var EventWriter = (function (_super) {
	                __extends(EventWriter, _super);
	                function EventWriter(config) {
	                    var _this = _super.call(this, config) || this;
	                    awa.registerSchemas();
	                    var awaInstance = telemetry.getAwaInstance();
	                    config && config.correlationVector && awaInstance.cv.setValue(config.correlationVector);
	                    awaInstance.cv.getValue() || awaInstance.cv.init();
	                    return _this;
	                }
	                EventWriter.prototype.captureOutgoingRequestAsync = function (trackingFunction, operationName, targetUri, requestMethod, dependencyName, dependencyOperationName) {
	                    return this.trackQosAsync(this.createOutgoingRequest(operationName, targetUri, requestMethod, dependencyName, dependencyOperationName), trackingFunction, function (e) {
	                        var qosEventBuilder = new awa.QosEventBuilder();
	                        var awaEvent = qosEventBuilder.createOutgoingRequest(e);
	                        writeAwaEvent(awaEvent);
	                    });
	                };
	                EventWriter.prototype.captureIncomingRequestAsync = function (trackingFunction, operationName, componentName, uiInfo) {
	                    return this.trackQosAsync(this.createIncomingRequest(operationName, componentName, uiInfo), trackingFunction, function (e) {
	                        var qosEventBuilder = new awa.QosEventBuilder();
	                        var awaEvent = qosEventBuilder.createIncomingRequest(e);
	                        writeAwaEvent(awaEvent);
	                    });
	                };
	                EventWriter.prototype.captureOutgoingRequest = function (trackingFunction, operationName, targetUri, requestMethod, dependencyName, dependencyOperationName) {
	                    return this.trackQos(this.createOutgoingRequest(operationName, targetUri, requestMethod, dependencyName, dependencyOperationName), trackingFunction, function (e) {
	                        var qosEventBuilder = new awa.QosEventBuilder();
	                        var awaEvent = qosEventBuilder.createOutgoingRequest(e);
	                        telemetry.awa.writeAwaEvent(awaEvent);
	                    });
	                };
	                EventWriter.prototype.captureIncomingRequest = function (trackingFunction, operationName, componentName, uiInfo) {
	                    return this.trackQos(this.createIncomingRequest(operationName, componentName, uiInfo), trackingFunction, function (e) {
	                        var qosEventBuilder = new awa.QosEventBuilder();
	                        var awaEvent = qosEventBuilder.createIncomingRequest(e);
	                        telemetry.awa.writeAwaEvent(awaEvent);
	                    });
	                };
	                EventWriter.prototype.captureError = function (errorMessage, errorName) {
	                    var event = this.createClientError(errorMessage, errorName);
	                    var qosEventBuilder = new awa.QosEventBuilder();
	                    var awaEvent = qosEventBuilder.createClientError(event);
	                    telemetry.awa.writeAwaEvent(awaEvent);
	                };
	                return EventWriter;
	            }(telemetry.DefaultEventWriter));
	            awa.EventWriter = EventWriter;
	            function writeAwaEvent(event) {
	                var originalAppId;
	                var awaInstance = telemetry.getAwaInstance();
	                if (event && event.appId && awaInstance) {
	                    try {
	                        if (telemetry.getAwaMajorVersion() === "3" && awaInstance.ids && awaInstance.ids.getAppId instanceof Function) {
	                            originalAppId = awaInstance.ids.getAppId();
	                            awaInstance.ids.setAppId(event.appId);
	                        }
	                        awaInstance.writeEvent(event);
	                    }
	                    finally {
	                        if (originalAppId) {
	                            awaInstance.ids.setAppId(originalAppId);
	                        }
	                    }
	                }
	            }
	            awa.writeAwaEvent = writeAwaEvent;
	            function createBaseEventBuilder() {
	                var baseEventBuilder;
	                var awaVersion = telemetry.getAwaMajorVersion();
	                switch (awaVersion) {
	                    case "3":
	                        baseEventBuilder = new awa.BaseEventBuilderV3();
	                        break;
	                    case "4":
	                        baseEventBuilder = new awa.BaseEventBuilderV4();
	                        break;
	                    default:
	                        console.warn("unsupported awa version: " + awaVersion);
	                        break;
	                }
	                return baseEventBuilder;
	            }
	            awa.createBaseEventBuilder = createBaseEventBuilder;
	        })(awa = telemetry.awa || (telemetry.awa = {}));
	    })(telemetry = internal.telemetry || (internal.telemetry = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var telemetry;
	    (function (telemetry) {
	        var eventWriter;
	        function captureError(errorMessage, errorName) {
	            eventWriter.captureError(errorMessage, errorName);
	        }
	        telemetry.captureError = captureError;
	        function captureOutgoingRequestAsync(trackingFunction, operationName, targetUri, requestMethod, dependencyName, dependencyOperationName) {
	            return eventWriter.captureOutgoingRequestAsync(trackingFunction, operationName, targetUri, requestMethod, dependencyName, dependencyOperationName);
	        }
	        telemetry.captureOutgoingRequestAsync = captureOutgoingRequestAsync;
	        function captureIncomingRequestAsync(trackingFunction, operationName, componentName, uiInfo) {
	            return eventWriter.captureIncomingRequestAsync(trackingFunction, operationName, componentName, uiInfo);
	        }
	        telemetry.captureIncomingRequestAsync = captureIncomingRequestAsync;
	        function captureOutgoingRequest(trackingFunction, operationName, targetUri, requestMethod, dependencyName, dependencyOperationName) {
	            return eventWriter.captureOutgoingRequest(trackingFunction, operationName, targetUri, requestMethod, dependencyName, dependencyOperationName);
	        }
	        telemetry.captureOutgoingRequest = captureOutgoingRequest;
	        function captureIncomingRequest(trackingFunction, operationName, componentName, uiInfo) {
	            return eventWriter.captureIncomingRequest(trackingFunction, operationName, componentName, uiInfo);
	        }
	        telemetry.captureIncomingRequest = captureIncomingRequest;
	        function getAwaInstance() {
	            return window.awa || window.Asimov;
	        }
	        telemetry.getAwaInstance = getAwaInstance;
	        function getAwaMajorVersion() {
	            return window.Asimov ? "3" : (window.awa ? "4" : undefined);
	        }
	        telemetry.getAwaMajorVersion = getAwaMajorVersion;
	        function getCorrelationVector() {
	            var jsll = getAwaInstance();
	            return jsll && jsll.cv.getValue();
	        }
	        telemetry.getCorrelationVector = getCorrelationVector;
	        function init(config, newAppId) {
	            telemetry.appId = newAppId;
	            var hasCustomLogger = config && config.logger && config.logger.writeEvent instanceof Function;
	            var useAwaEventWriter = !hasCustomLogger && getAwaInstance();
	            eventWriter = undefined;
	            if (useAwaEventWriter) {
	                eventWriter = new telemetry.awa.EventWriter(config);
	            }
	            eventWriter = eventWriter || new telemetry.DefaultEventWriter(config);
	            if (!hasCustomLogger && !useAwaEventWriter) {
	                console.warn("Qos logging disabled since neither jsll nor customLogger is available!");
	            }
	        }
	        telemetry.init = init;
	    })(telemetry = internal.telemetry || (internal.telemetry = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var MIN_JQUERY_VERSION = "1.7.0";
	    var INIT_METHOD_NAME = "init";
	    var COMPONENT_NAME = "MsSupportSdk";
	    var initDeferred;
	    var Bootstrapper = (function () {
	        function Bootstrapper() {
	        }
	        Object.defineProperty(Bootstrapper, "loading", {
	            get: function () {
	                return initDeferred && initDeferred.state() === "pending";
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(Bootstrapper, "loaded", {
	            get: function () {
	                return initDeferred && initDeferred.state() === "resolved";
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Bootstrapper.reset = function () {
	            initDeferred = undefined;
	        };
	        Bootstrapper.init = function (config) {
	            if (!isJQueryAvailable()) {
	                throw new Error("Required Libraries not available. SDK requires Jquery version " + MIN_JQUERY_VERSION + " or greater.");
	            }
	            internal.SdkConfig.current = new internal.SdkConfig(config);
	            internal.telemetry.init(internal.SdkConfig.current);
	            return internal.telemetry.captureIncomingRequestAsync(function (qos) {
	                if (!initDeferred) {
	                    initDeferred = jQuery.Deferred();
	                    if (!config || !config.partnerId || !config.appId) {
	                        initDeferred.reject("Config with partnerId and appId is required");
	                    }
	                    else {
	                        initDeferred.resolve();
	                    }
	                }
	                return initDeferred.promise();
	            }, INIT_METHOD_NAME, COMPONENT_NAME);
	        };
	        return Bootstrapper;
	    }());
	    internal.Bootstrapper = Bootstrapper;
	    function isJQueryAvailable() {
	        if (!jQuery || !jQuery.fn || !jQuery.fn.jquery || typeof jQuery.fn.jquery !== "string") {
	            console.log("Jquery not loaded properly");
	            return false;
	        }
	        else {
	            var existingVersionParts = jQuery.fn.jquery.split(".");
	            return !internal.utils.isLessThanMinimum(existingVersionParts, MIN_JQUERY_VERSION.split("."));
	        }
	    }
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var utils;
	    (function (utils) {
	        var HTTP_REQUEST_OPERATION = "HTTP_REQUEST";
	        var HTTP_GET_METHOD = "GET";
	        var HTTP_POST_METHOD = "POST";
	        var httpRequest;
	        (function (httpRequest) {
	            function get(requestOptions) {
	                requestOptions.url = getUrlWithQueryParams(requestOptions);
	                return internal.telemetry.captureOutgoingRequestAsync(function (qos) {
	                    return jQuery.ajax({
	                        url: requestOptions.url,
	                        type: HTTP_GET_METHOD,
	                        crossDomain: true,
	                        headers: requestOptions.additionalHeaders || {}
	                    });
	                }, requestOptions.operationName || HTTP_REQUEST_OPERATION, requestOptions.url, HTTP_GET_METHOD, requestOptions.dependencyName, requestOptions.dependencyOperationName);
	            }
	            httpRequest.get = get;
	            function post(requestOptions) {
	                requestOptions.url = getUrlWithQueryParams(requestOptions);
	                return internal.telemetry.captureOutgoingRequestAsync(function (qos) {
	                    return jQuery.ajax({
	                        url: requestOptions.url,
	                        type: HTTP_POST_METHOD,
	                        crossDomain: true,
	                        headers: requestOptions.additionalHeaders || {},
	                        contentType: "application/json",
	                        data: requestOptions.content ? JSON.stringify(requestOptions.content) : "",
	                        processData: false
	                    });
	                }, requestOptions.operationName || HTTP_REQUEST_OPERATION, requestOptions.url, HTTP_POST_METHOD, requestOptions.dependencyName, requestOptions.dependencyOperationName);
	            }
	            httpRequest.post = post;
	            function getUrlWithQueryParams(requestOptions) {
	                return requestOptions.queryParams ?
	                    requestOptions.url + "?" + jQuery.param(requestOptions.queryParams) :
	                    requestOptions.url;
	            }
	        })(httpRequest = utils.httpRequest || (utils.httpRequest = {}));
	    })(utils = internal.utils || (internal.utils = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var modalities;
	        (function (modalities) {
	            var Accessibility;
	            (function (Accessibility) {
	                Accessibility.NONE = "none";
	                Accessibility.ON = "on";
	            })(Accessibility = modalities.Accessibility || (modalities.Accessibility = {}));
	            var Availability;
	            (function (Availability) {
	                Availability.UNAVAILABLE = "unavailable";
	                Availability.OPEN = "open";
	                Availability.OUT_OF_HOURS = "out_of_hours";
	            })(Availability = modalities.Availability || (modalities.Availability = {}));
	            ;
	            var Modality;
	            (function (Modality) {
	                Modality.CHAT = "chat";
	                Modality.CALLBACK = "callback";
	                Modality.SCHEDULE_CALLBACK = "schedulecallback";
	                Modality.TOLL_FREE = "tollfree";
	                Modality.EMAIL = "email";
	                Modality.COMMUNITY = "community";
	            })(Modality = modalities.Modality || (modalities.Modality = {}));
	        })(modalities = api.modalities || (api.modalities = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var modalities;
	        (function (modalities) {
	            var ModalityConfig = (function () {
	                function ModalityConfig(product, issue, language, country, accessibility, preview, mode, environment, enhancedRoutingContext) {
	                    this.product = product;
	                    this.issue = issue;
	                    this.language = language;
	                    this.country = country;
	                    this.accessibility = accessibility || modalities.Accessibility.NONE;
	                    this.mode = mode || undefined;
	                    this.preview = preview;
	                    this.environment = environment || internal.SMCEnvironment.PRODUCTION;
	                    this.enhancedRoutingContext = enhancedRoutingContext;
	                }
	                return ModalityConfig;
	            }());
	            modalities.ModalityConfig = ModalityConfig;
	        })(modalities = api.modalities || (api.modalities = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var modalities;
	        (function (modalities) {
	            var ModalityObject = (function () {
	                function ModalityObject(responseModality, type) {
	                    var modalityType = responseModality.Name || type;
	                    if (!modalityType) {
	                        throw new Error("Unable to create modality object due to missing 'type'");
	                    }
	                    this.type = modalityType.toLowerCase();
	                }
	                return ModalityObject;
	            }());
	            modalities.ModalityObject = ModalityObject;
	        })(modalities = api.modalities || (api.modalities = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var modalities;
	        (function (modalities) {
	            var LinkModality = (function (_super) {
	                __extends(LinkModality, _super);
	                function LinkModality(responseModality, type) {
	                    var _this = _super.call(this, responseModality, type) || this;
	                    if (!responseModality || !responseModality.Link) {
	                        throw new Error("responseModality doesn't have 'Link' property");
	                    }
	                    _this.link = responseModality.Link;
	                    return _this;
	                }
	                return LinkModality;
	            }(modalities.ModalityObject));
	            modalities.LinkModality = LinkModality;
	        })(modalities = api.modalities || (api.modalities = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var modalities;
	        (function (modalities) {
	            var GET_MODALITIES_AVAILABILITY_OPERATION_NAME = "api.modalities.getAvailability";
	            var GET_MODALITIES_QUEUE_LENGTH_OPERATION_NAME = "api.modalities.getQueueLength";
	            var GET_MODALITIES_WAITTIME_OPERATION_NAME = "api.modalities.getWaitTime";
	            var SUPPORT_CHANNELS_SERVICE_NAME = "SupportChannels";
	            var WAITTIME_OPERATION_NAME = "Waittime";
	            var QUEUE_LENGTH_OPERATION_NAME = "QueueLength";
	            var OPEN_NOW_OPERATION_NAME = "OpenNow";
	            function getWaitTimeCallback(responseModality) {
	                return function () {
	                    var deferred = jQuery.Deferred();
	                    var requestOptions = {
	                        operationName: GET_MODALITIES_WAITTIME_OPERATION_NAME,
	                        url: responseModality.WaitTime,
	                        dependencyName: SUPPORT_CHANNELS_SERVICE_NAME,
	                        dependencyOperationName: WAITTIME_OPERATION_NAME
	                    };
	                    internal.utils.httpRequest.get(requestOptions).then(function (result) {
	                        if (internal.utils.isNumber(result.WaitTime, true) && result.WaitTime >= 0) {
	                            deferred.resolve(result.WaitTime);
	                        }
	                        else {
	                            deferred.reject("Wait time not available");
	                        }
	                    }, function (error) {
	                        deferred.reject("Failed to retrieve wait time: " + internal.utils.stringify(error));
	                    });
	                    return deferred.promise();
	                };
	            }
	            modalities.getWaitTimeCallback = getWaitTimeCallback;
	            function getQueueLengthCallback(responseModality) {
	                return function () {
	                    var deferred = jQuery.Deferred();
	                    var requestOptions = {
	                        operationName: GET_MODALITIES_QUEUE_LENGTH_OPERATION_NAME,
	                        url: responseModality.QueueLength,
	                        dependencyName: SUPPORT_CHANNELS_SERVICE_NAME,
	                        dependencyOperationName: QUEUE_LENGTH_OPERATION_NAME
	                    };
	                    internal.utils.httpRequest.get(requestOptions).then(function (result) {
	                        if (internal.utils.isNumber(result.Length, true) && result.Length >= 0) {
	                            deferred.resolve(result.Length);
	                        }
	                        else {
	                            deferred.reject("Queue length not available");
	                        }
	                    }, function (error) {
	                        deferred.reject("Failed to retrieve queue length: " + internal.utils.stringify(error));
	                    });
	                    return deferred.promise();
	                };
	            }
	            modalities.getQueueLengthCallback = getQueueLengthCallback;
	            function getAvailabilityCallback(responseModality) {
	                return function () {
	                    var deferred = jQuery.Deferred();
	                    var requestOptions = {
	                        operationName: GET_MODALITIES_AVAILABILITY_OPERATION_NAME,
	                        url: responseModality.OpenNowLink,
	                        dependencyName: SUPPORT_CHANNELS_SERVICE_NAME,
	                        dependencyOperationName: OPEN_NOW_OPERATION_NAME
	                    };
	                    internal.utils.httpRequest.get(requestOptions).then(function (result) {
	                        if (internal.utils.isBoolean(result.OpenNow, true) && internal.utils.isBoolean(result.IsAvailable, true)) {
	                            if (result.OpenNow && result.IsAvailable) {
	                                deferred.resolve(modalities.Availability.OPEN);
	                            }
	                            else if (result.OpenNow && !result.IsAvailable) {
	                                deferred.resolve(modalities.Availability.UNAVAILABLE);
	                            }
	                            else {
	                                deferred.resolve(modalities.Availability.OUT_OF_HOURS);
	                            }
	                        }
	                        else {
	                            deferred.reject("Error getting availability info");
	                        }
	                    }, function (error) {
	                        deferred.reject("Error getting availability info: " + internal.utils.stringify(error));
	                    });
	                    return deferred.promise();
	                };
	            }
	            modalities.getAvailabilityCallback = getAvailabilityCallback;
	        })(modalities = api.modalities || (api.modalities = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var modalities;
	        (function (modalities) {
	            var CallbackModality = (function (_super) {
	                __extends(CallbackModality, _super);
	                function CallbackModality(responseModality) {
	                    var _this = _super.call(this, responseModality, modalities.Modality.CALLBACK) || this;
	                    if (!responseModality.HoopsLink ||
	                        !responseModality.OpenNowLink ||
	                        !responseModality.WaitTime) {
	                        throw Error("Unable to create CallbackModality");
	                    }
	                    _this.hoopsLink = responseModality.HoopsLink;
	                    _this.getWaitTime = modalities.getWaitTimeCallback(responseModality);
	                    _this.getAvailability = modalities.getAvailabilityCallback(responseModality);
	                    return _this;
	                }
	                return CallbackModality;
	            }(modalities.LinkModality));
	            modalities.CallbackModality = CallbackModality;
	        })(modalities = api.modalities || (api.modalities = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var modalities;
	        (function (modalities) {
	            var ChatModality = (function (_super) {
	                __extends(ChatModality, _super);
	                function ChatModality(responseModality) {
	                    var _this = _super.call(this, responseModality, modalities.Modality.CHAT) || this;
	                    if (!responseModality.HoopsLink ||
	                        !responseModality.OpenNowLink ||
	                        !responseModality.QueueLength) {
	                        throw Error("Unable to create ChatModality");
	                    }
	                    _this.hoopsLink = responseModality.HoopsLink;
	                    _this.getQueueLength = modalities.getQueueLengthCallback(responseModality);
	                    _this.getAvailability = modalities.getAvailabilityCallback(responseModality);
	                    return _this;
	                }
	                return ChatModality;
	            }(modalities.LinkModality));
	            modalities.ChatModality = ChatModality;
	        })(modalities = api.modalities || (api.modalities = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var modalities;
	        (function (modalities) {
	            var PhoneModality = (function (_super) {
	                __extends(PhoneModality, _super);
	                function PhoneModality(responseModality) {
	                    var _this = _super.call(this, responseModality, modalities.Modality.TOLL_FREE) || this;
	                    if (!responseModality.Phone ||
	                        !responseModality.OpenNowLink ||
	                        !responseModality.HoopsLink) {
	                        throw Error("Unable to create PhoneModality");
	                    }
	                    _this.phone = responseModality.Phone;
	                    _this.hoopsLink = responseModality.HoopsLink;
	                    _this.getAvailability = modalities.getAvailabilityCallback(responseModality);
	                    return _this;
	                }
	                return PhoneModality;
	            }(modalities.ModalityObject));
	            modalities.PhoneModality = PhoneModality;
	        })(modalities = api.modalities || (api.modalities = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var modalities;
	        (function (modalities) {
	            var ScheduleCallbackModality = (function (_super) {
	                __extends(ScheduleCallbackModality, _super);
	                function ScheduleCallbackModality(responseModality) {
	                    return _super.call(this, responseModality, modalities.Modality.SCHEDULE_CALLBACK) || this;
	                }
	                return ScheduleCallbackModality;
	            }(modalities.LinkModality));
	            modalities.ScheduleCallbackModality = ScheduleCallbackModality;
	        })(modalities = api.modalities || (api.modalities = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var modalities;
	        (function (modalities) {
	            var RenderingContext = (function () {
	                function RenderingContext(confirmationTextId, warningTextId, modalityLinkValues) {
	                    this.confirmationTextId = confirmationTextId;
	                    this.warningTextId = warningTextId;
	                    this.modalityLinkValues = modalityLinkValues;
	                }
	                return RenderingContext;
	            }());
	            modalities.RenderingContext = RenderingContext;
	        })(modalities = api.modalities || (api.modalities = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var modalities;
	        (function (modalities_1) {
	            var ModalitiesResponse = (function () {
	                function ModalitiesResponse(modalities, renderingContext) {
	                    this.modalities = modalities;
	                    this.renderingContext = renderingContext;
	                }
	                return ModalitiesResponse;
	            }());
	            modalities_1.ModalitiesResponse = ModalitiesResponse;
	        })(modalities = api.modalities || (api.modalities = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var modalities;
	        (function (modalities) {
	            var ModalityRequestContent = (function () {
	                function ModalityRequestContent(product, issue, partnerId, platform, language, country, accessibility, preview, mode, context) {
	                    this.product = product;
	                    this.issue = issue;
	                    this.partnerId = partnerId;
	                    this.platform = platform || internal.Platform.WEB;
	                    this.language = language;
	                    this.country = country;
	                    this.accessibility = accessibility || modalities.Accessibility.NONE;
	                    this.mode = mode || undefined;
	                    this.preview = preview;
	                    this.context = context || undefined;
	                }
	                return ModalityRequestContent;
	            }());
	            modalities.ModalityRequestContent = ModalityRequestContent;
	        })(modalities = api.modalities || (api.modalities = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var modalities;
	        (function (modalities_2) {
	            var DEPENDENCY_NAME = "SupportChannels";
	            var GET_MODALITIES_DEPENDENCY_OPERATION_NAME = "Get modalities v1.0";
	            var GET_MODALITIES_V2_DEPENDENCY_OPERATION_NAME = "Get modalities v2.0";
	            var MODALITY_ENDPOINT_PATH = "/api/products/[product]/issues/[issue]/modalities/v1.0";
	            var GET_MODALITIES_OPERATION_NAME = "api.modalities.get";
	            var MODALITY_V2_ENDPOINT_PATH = "/api/v1.0/modalities";
	            var GET_MODALITIES_V2_OPERATION_NAME = "api.modalities.getv2";
	            var API = (function () {
	                function API() {
	                }
	                API.get = function (config) {
	                    verifyModalityConfig(config);
	                    var deferred = jQuery.Deferred();
	                    var url = buildModalitiesUrl(config.environment, config.product, config.issue);
	                    var queryParams = {};
	                    queryParams["" + internal.SDK_QUERY_PARAM_NAME.PARTNER_ID] = internal.SdkConfig.current.partnerId;
	                    queryParams["platform"] = internal.SdkConfig.current.platform;
	                    queryParams["language"] = config.language;
	                    queryParams["country"] = config.country;
	                    config.accessibility && (queryParams["accessibility"] = config.accessibility);
	                    config.mode && (queryParams["mode"] = config.mode);
	                    config.preview && (queryParams["preview"] = config.preview);
	                    var requestOptions = {
	                        operationName: GET_MODALITIES_OPERATION_NAME,
	                        url: url,
	                        queryParams: queryParams,
	                        dependencyName: DEPENDENCY_NAME,
	                        dependencyOperationName: GET_MODALITIES_DEPENDENCY_OPERATION_NAME
	                    };
	                    internal.utils.httpRequest.get(requestOptions).then(function (result) {
	                        var modalities = parseResponseModalities(result);
	                        deferred.resolve(modalities);
	                    }, function (error) {
	                        deferred.reject("Could not fetch modality information: " + internal.utils.stringify(error));
	                    });
	                    return deferred.promise();
	                };
	                API.getv2 = function (config) {
	                    verifyModalityConfig(config);
	                    var deferred = jQuery.Deferred();
	                    var url = buildModalitiesV2Url(config.environment);
	                    var requestContent = new modalities_2.ModalityRequestContent(config.product, config.issue, internal.SdkConfig.current.partnerId, internal.SdkConfig.current.platform, config.language, config.country, config.accessibility || undefined, config.preview, config.mode, config.enhancedRoutingContext);
	                    var requestOptions = {
	                        operationName: GET_MODALITIES_V2_OPERATION_NAME,
	                        url: url,
	                        content: requestContent,
	                        dependencyName: DEPENDENCY_NAME,
	                        dependencyOperationName: GET_MODALITIES_V2_DEPENDENCY_OPERATION_NAME
	                    };
	                    internal.utils.httpRequest.post(requestOptions).then(function (result) {
	                        var modalitiesResponse = new modalities_2.ModalitiesResponse(parseResponseModalities(result), parseResponseRenderingContext(result));
	                        deferred.resolve(modalitiesResponse);
	                    }, function (error) {
	                        deferred.reject("Could not fetch modality information: " + internal.utils.stringify(error));
	                    });
	                    return deferred.promise();
	                };
	                return API;
	            }());
	            modalities_2.API = API;
	            function verifyModalityConfig(config) {
	                if (config) {
	                    internal.utils.verifyString("environment", config.environment, true);
	                    internal.utils.verifyString("product", config.product, true);
	                    internal.utils.verifyString("issue", config.issue, true);
	                    internal.utils.verifyString("language", config.language, true);
	                    internal.utils.verifyString("country", config.country, true);
	                    internal.utils.verifyString("accessibility", config.accessibility);
	                    internal.utils.verifyString("mode", config.mode);
	                    internal.utils.verifyBoolean("preview", config.preview);
	                }
	                else {
	                    throw new Error("config is a mandatory parameter");
	                }
	            }
	            function buildModalitiesUrl(environment, product, issue) {
	                var path = MODALITY_ENDPOINT_PATH.replace("[product]", product);
	                path = path.replace("[issue]", issue);
	                return "https://" + environment + path;
	            }
	            function buildModalitiesV2Url(environment) {
	                return "https://" + environment + MODALITY_V2_ENDPOINT_PATH;
	            }
	            function parseResponseModalities(response) {
	                var modalities = new Array();
	                if (response && response.Modalities && response.Modalities.length > 0) {
	                    for (var i = 0; i < response.Modalities.length; i++) {
	                        try {
	                            var modality = void 0;
	                            switch (response.Modalities[i].Name) {
	                                case modalities_2.Modality.CHAT:
	                                    modality = new modalities_2.ChatModality(response.Modalities[i]);
	                                    break;
	                                case modalities_2.Modality.CALLBACK:
	                                    modality = new modalities_2.CallbackModality(response.Modalities[i]);
	                                    break;
	                                case modalities_2.Modality.SCHEDULE_CALLBACK:
	                                    modality = new modalities_2.ScheduleCallbackModality(response.Modalities[i]);
	                                    break;
	                                case modalities_2.Modality.TOLL_FREE:
	                                    modality = new modalities_2.PhoneModality(response.Modalities[i]);
	                                    break;
	                                default:
	                                    modality = new modalities_2.LinkModality(response.Modalities[i]);
	                                    break;
	                            }
	                            modalities.push(modality);
	                        }
	                        catch (e) {
	                            console.log("Could not parse modalities response. Error: " + e);
	                        }
	                    }
	                }
	                return modalities;
	            }
	            function parseResponseRenderingContext(response) {
	                if (!response || !response.RenderingContext) {
	                    return undefined;
	                }
	                return new modalities_2.RenderingContext(response.RenderingContext.ConfirmationTextId, response.RenderingContext.WarningTextId, response.RenderingContext.ModalityLinkValues);
	            }
	        })(modalities = api.modalities || (api.modalities = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var AuthType;
	        (function (AuthType) {
	            AuthType.AAD = "aad";
	            AuthType.MSA = "msa";
	            AuthType.DELEGATED = "delegated";
	        })(AuthType = ui.AuthType || (ui.AuthType = {}));
	        var SurveyType;
	        (function (SurveyType) {
	            SurveyType.DEFAULT = "default";
	            SurveyType.NONE = "none";
	        })(SurveyType = ui.SurveyType || (ui.SurveyType = {}));
	        ui.HostType = internal.HostType;
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var utils;
	    (function (utils) {
	        function getModalityByType(modalities, type) {
	            if (modalities) {
	                for (var i = 0; i < modalities.length; i++) {
	                    if (modalities[i].type === type) {
	                        return modalities[i];
	                    }
	                }
	            }
	            return undefined;
	        }
	        utils.getModalityByType = getModalityByType;
	    })(utils = internal.utils || (internal.utils = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var proxy;
	    (function (proxy) {
	        proxy.ALL_EVENTS = "*";
	        var EventHub = (function () {
	            function EventHub() {
	                this.listeners = {};
	            }
	            EventHub.prototype.subscribe = function (name, listener) {
	                if (typeof name !== "string" || !listener) {
	                    throw new Error("Event " + (!!name ? "listener" : "name") + " must be provided");
	                }
	                var formatted = name.toLowerCase();
	                this.listeners[formatted] = this.listeners[formatted] || [];
	                this.listeners[formatted].push(listener);
	            };
	            EventHub.prototype.publish = function (name, e) {
	                if (typeof name !== "string" || !e) {
	                    throw new Error("Event name must be provided");
	                }
	                var listeners = this.listeners[name.toLowerCase()] || [];
	                listeners.push.apply(listeners, this.listeners[proxy.ALL_EVENTS]);
	                var _loop_1 = function (index) {
	                    window.setTimeout(function () { return listeners[index](e); }, 0);
	                };
	                for (var index in listeners) {
	                    _loop_1(index);
	                }
	            };
	            EventHub.prototype.unsubscribe = function (name, listener) {
	                if (typeof name !== "string" || !listener) {
	                    throw new Error("Event " + (!!name ? "listener" : "name") + " must be provided");
	                }
	                var formatted = name.toLowerCase();
	                var index;
	                if (this.listeners[formatted] && (index = this.listeners[formatted].indexOf(listener)) >= 0) {
	                    this.listeners[formatted].splice(index, 1);
	                }
	            };
	            EventHub.prototype.unsubsribeAll = function () {
	                this.listeners = {};
	            };
	            return EventHub;
	        }());
	        proxy.EventHub = EventHub;
	    })(proxy = internal.proxy || (internal.proxy = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var proxy;
	    (function (proxy) {
	        ;
	    })(proxy = internal.proxy || (internal.proxy = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var utils;
	    (function (utils) {
	        function runAsync(action) {
	            var args = [];
	            for (var _i = 1; _i < arguments.length; _i++) {
	                args[_i - 1] = arguments[_i];
	            }
	            window.setTimeout(action, 0, args);
	        }
	        utils.runAsync = runAsync;
	    })(utils = internal.utils || (internal.utils = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var proxy;
	    (function (proxy) {
	        var WindowPostMessageProxy = (function () {
	            function WindowPostMessageProxy(target, origin) {
	                var _this = this;
	                internal.utils.verifyNotNull("target", target);
	                this._target = target;
	                this._origin = origin && origin.replace(/\/+$/, "");
	                var handler = function (e) { return _this.postMessageHandler(e); };
	                if (window.addEventListener) {
	                    window.addEventListener("message", handler, false);
	                }
	                else if (window.attachEvent) {
	                    window.attachEvent("onmessage", handler);
	                }
	            }
	            WindowPostMessageProxy.prototype.sendMessage = function (message) {
	                this._target.postMessage(internal.utils.stringify(message), this._origin);
	            };
	            WindowPostMessageProxy.prototype.destroy = function () { };
	            WindowPostMessageProxy.prototype.postMessageHandler = function (message) {
	                var _this = this;
	                if (this._origin == "*" || message.origin == this._origin) {
	                    internal.utils.runAsync(function () {
	                        try {
	                            _this.onMessage && _this.onMessage(message.data && JSON.parse(message.data));
	                        }
	                        catch (err) {
	                            console.log(err);
	                        }
	                    });
	                }
	            };
	            return WindowPostMessageProxy;
	        }());
	        proxy.WindowPostMessageProxy = WindowPostMessageProxy;
	    })(proxy = internal.proxy || (internal.proxy = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var proxy;
	    (function (proxy) {
	        var SdkClientProxyImp = (function () {
	            function SdkClientProxyImp(componentId, listeners, messageProxy) {
	                var _this = this;
	                internal.utils.verifyString("componentId", componentId, true);
	                this._eventHub = new proxy.EventHub();
	                this._componentId = componentId;
	                for (var index in listeners) {
	                    this.addEventListener(index, listeners[index]);
	                }
	                if (messageProxy) {
	                    this._messageProxy = messageProxy;
	                    this._messageProxy.onMessage = function (message) {
	                        if (message && message.type && message.id === _this._componentId) {
	                            _this._eventHub.publish(message.type, message);
	                        }
	                    };
	                }
	            }
	            SdkClientProxyImp.prototype.dispatchEvent = function (name, data) {
	                var msg = {
	                    id: this._componentId,
	                    type: name,
	                    data: data || {}
	                };
	                var deferred = jQuery.Deferred();
	                if (this._messageProxy && this._messageProxy.sendMessage instanceof Function) {
	                    try {
	                        this._messageProxy.sendMessage(msg);
	                        deferred.resolve();
	                    }
	                    catch (error) {
	                        deferred.reject(error);
	                    }
	                }
	                else {
	                    deferred.reject(new Error("messageProxy unavailable!"));
	                }
	                return deferred.promise();
	            };
	            SdkClientProxyImp.prototype.addEventListener = function (name, listener) {
	                name && listener && this._eventHub.subscribe(name, listener);
	            };
	            SdkClientProxyImp.prototype.removeEventListener = function (name, listener) {
	                name && listener && this._eventHub.unsubscribe(name, listener);
	            };
	            SdkClientProxyImp.prototype.removeAllEventListeners = function () {
	                this._eventHub.unsubsribeAll();
	            };
	            return SdkClientProxyImp;
	        }());
	        proxy.SdkClientProxyImp = SdkClientProxyImp;
	    })(proxy = internal.proxy || (internal.proxy = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var utils;
	    (function (utils) {
	        function isInternetExplorer() {
	            return userAgentContainsString("Trident");
	        }
	        utils.isInternetExplorer = isInternetExplorer;
	        function getUserAgent() {
	            return window.navigator.userAgent;
	        }
	        function userAgentContainsString(searchString) {
	            return getUserAgent().indexOf(searchString) > -1;
	        }
	    })(utils = internal.utils || (internal.utils = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var theme;
	        (function (theme) {
	            var ThemeColor;
	            (function (ThemeColor) {
	                ThemeColor.LIGHT = "light";
	            })(ThemeColor = theme.ThemeColor || (theme.ThemeColor = {}));
	            var DisplayType;
	            (function (DisplayType) {
	                DisplayType.NONE = "none";
	                DisplayType.NORMAL = "normal";
	            })(DisplayType = theme.DisplayType || (theme.DisplayType = {}));
	        })(theme = ui.theme || (ui.theme = {}));
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var DEFAULT_WINDOW_WIDTH = 600;
	        var DEFAULT_WINDOW_HEIGHT = 800;
	        ui.RENDER_OPERATION_NAME = "ui.render";
	        function renderComponent(component, config, componentType) {
	            return internal.telemetry.captureIncomingRequestAsync(function (qos) {
	                return new component(config).render();
	            }, ui.RENDER_OPERATION_NAME, componentType, config.uiInfo);
	        }
	        ui.renderComponent = renderComponent;
	        var UIComponent = (function () {
	            function UIComponent(config, loadTimeoutMs, reportsHeightChanges) {
	                if (!config || !config.uiInfo || !config.uiInfo.type) {
	                    throw new Error("config does not contain the type of UI to be rendered");
	                }
	                this.config = internal.utils.cloneObject({}, config);
	                this.id = internal.utils.generateUniqueId();
	                this.loadTimeoutMs = loadTimeoutMs || 0;
	                this.reportsHeightChanges = !!reportsHeightChanges;
	            }
	            UIComponent.prototype.render = function () {
	                var _this = this;
	                var cV = internal.telemetry.getCorrelationVector();
	                var sessionId = internal.SdkConfig.current.sessionId;
	                var params = {};
	                params["" + internal.SDK_QUERY_PARAM_NAME.APP_ID] = internal.SdkConfig.current.appId;
	                params["" + internal.SDK_QUERY_PARAM_NAME.PARTNER_ID] = internal.SdkConfig.current.partnerId;
	                params["" + internal.SDK_QUERY_PARAM_NAME.COMPONENT_ID] = this.id;
	                params["" + internal.SDK_QUERY_PARAM_NAME.TARGET_ORIGIN] = internal.utils.getCurrentOrigin();
	                cV && (params["" + internal.SDK_QUERY_PARAM_NAME.MS_CV] = cV);
	                sessionId && (params["" + internal.SDK_QUERY_PARAM_NAME.SESSION_ID] = sessionId);
	                params["" + internal.SDK_QUERY_PARAM_NAME.HOST_TYPE] = this.config.uiInfo.type;
	                var listeners = this.getEventListeners();
	                if (this.loadTimeoutMs > 0) {
	                    listeners[internal.InternalEvent.LOADED] = function (e) { return loadedHandler(_this.renderDeferred, _this.renderTimeout, _this); };
	                }
	                if (this.reportsHeightChanges) {
	                    listeners[internal.InternalEvent.HEIGHT_CHANGED] = function (e) { return heightChangeHandler(_this.iframe, e.data); };
	                }
	                listeners[internal.CommonEvent.SIGNIN_REQUEST] = function (e) {
	                    if (e.data && e.data.length > 0 && e.data[0].type === internal.ui.AuthType.DELEGATED) {
	                        delegatedAuthHandler(_this);
	                    }
	                    else if (_this.config.onSignInRequest instanceof Function) {
	                        window.setTimeout(function () { return _this.config.onSignInRequest(e); }, 0);
	                    }
	                };
	                switch (this.config.uiInfo.type) {
	                    case ui.HostType.IFRAME:
	                        this.renderDeferred = renderIFrame(this, params, listeners);
	                        break;
	                    case ui.HostType.POPUP:
	                        this.renderDeferred = renderPopup(this, params, listeners);
	                        break;
	                    default:
	                        return jQuery.Deferred().reject("HostType: " + this.config.uiInfo.type + " is not supported");
	                }
	                if (this.loadTimeoutMs > 0) {
	                    this.renderTimeout = window.setTimeout(function () {
	                        if (_this.renderDeferred.state() === internal.PROMISE_STATE_PENDING) {
	                            _this.renderDeferred.reject("Load timeout expired: " + _this.getComponentUrl());
	                        }
	                    }, this.loadTimeoutMs);
	                }
	                else if (this.renderDeferred.state() === internal.PROMISE_STATE_PENDING) {
	                    this.renderDeferred.resolve(this.getComponentSdk());
	                }
	                return this.renderDeferred.promise();
	            };
	            UIComponent.prototype.getDefaultWindowProperties = function () {
	                return { width: DEFAULT_WINDOW_WIDTH, height: DEFAULT_WINDOW_HEIGHT, resizable: 1, scrollbars: 1 };
	            };
	            UIComponent.prototype.getEventListeners = function () {
	                return UIComponent.getEventListeners(this.config);
	            };
	            UIComponent.getEventListeners = function (config, prefix) {
	                var listeners = {};
	                for (var prop in config) {
	                    if (typeof prop === "string" &&
	                        prop.length > 2 &&
	                        prop.slice(0, 2) === "on" &&
	                        config.hasOwnProperty(prop) &&
	                        config[prop] instanceof Function) {
	                        listeners[getEventName(prefix, prop.substr(2))] = config[prop];
	                    }
	                }
	                return listeners;
	            };
	            return UIComponent;
	        }());
	        ui.UIComponent = UIComponent;
	        function getElement(containerSelector) {
	            var elements = jQuery(containerSelector);
	            return elements.length > 0 ? elements[0] : undefined;
	        }
	        function createIframeElement(src, id, params, style, title) {
	            var iframe = document.createElement("iframe");
	            iframe.src = internal.utils.appendParams(src, params, true);
	            iframe.id = id;
	            iframe.style.display = (style && style.display) || "block";
	            iframe.style.height = (style && style.height) || "100%";
	            iframe.style.width = (style && style.width) || "100%";
	            iframe.title = title || "";
	            iframe.frameBorder = "0";
	            return iframe;
	        }
	        function getWindowProperties(config, defaultProperties) {
	            var width = config && config.uiInfo && config.uiInfo.width;
	            var height = config && config.uiInfo && config.uiInfo.height;
	            if (!(width >= 0 && height >= 0)) {
	                width = defaultProperties.width;
	                height = defaultProperties.height;
	            }
	            var windowFeaturesString = "resizable=" + defaultProperties.resizable + ",scrollbars=" + defaultProperties.scrollbars;
	            if (width >= 0 && height >= 0) {
	                return windowFeaturesString + ",width=" + width + ",height=" + height;
	            }
	            return windowFeaturesString;
	        }
	        function heightChangeHandler(iframe, height) {
	            if (iframe && height > 0) {
	                iframe.style.height = height + "px";
	            }
	        }
	        function loadedHandler(deferredRender, timeout, uiComponent) {
	            uiComponent.proxy.dispatchEvent(internal.InternalEvent.CLIENT_CONFIG_UPDATE, uiComponent.config);
	            if (deferredRender.state() === internal.PROMISE_STATE_PENDING) {
	                try {
	                    window.clearTimeout(timeout);
	                    deferredRender.resolve(uiComponent.getComponentSdk());
	                }
	                catch (e) {
	                    deferredRender.reject("Could not create component SDK. Error: " + e);
	                }
	            }
	            else {
	            }
	        }
	        function delegatedAuthHandler(uiComponent) {
	            var errorHandler = function (message, error) {
	                console.log(message);
	                if (uiComponent.config.onError && (uiComponent.config.onError instanceof Function)) {
	                    uiComponent.config.onError({
	                        type: internal.CommonEvent.ERROR,
	                        id: uiComponent.id,
	                        data: {
	                            message: message,
	                            exception: error
	                        }
	                    });
	                }
	            };
	            try {
	                if (uiComponent.proxy && uiComponent.config.authInfo && uiComponent.config.authInfo.token) {
	                    uiComponent.proxy.dispatchEvent(internal.CommonEvent.SIGNIN_RESPONSE, { token: uiComponent.config.authInfo.token });
	                }
	                else {
	                    errorHandler("delegated auth token must be provided!");
	                }
	            }
	            catch (e) {
	                errorHandler("Could not handle delegated auth request. Error: " + internal.utils.stringify(e), e);
	            }
	        }
	        function createProxy(targetWindow, componentId, componentUrl, listeners, onError) {
	            var messageProxy = new internal.proxy.WindowPostMessageProxy(targetWindow, internal.utils.getOriginFromUrl(componentUrl));
	            return new internal.proxy.SdkClientProxyImp(componentId, listeners, messageProxy);
	        }
	        function createXframeProxy(uiComponent, listeners) {
	            var xframeStyle = {
	                display: "none",
	                height: "0",
	                width: "0"
	            };
	            var cV = internal.telemetry.getCorrelationVector();
	            var sessionId = internal.SdkConfig.current.sessionId;
	            var params = {};
	            params["" + internal.SDK_QUERY_PARAM_NAME.APP_ID] = internal.SdkConfig.current.appId;
	            params["" + internal.SDK_QUERY_PARAM_NAME.PARTNER_ID] = internal.SdkConfig.current.partnerId;
	            params["" + internal.SDK_QUERY_PARAM_NAME.COMPONENT_ID] = uiComponent.id;
	            params["" + internal.SDK_QUERY_PARAM_NAME.TARGET_ORIGIN] = internal.utils.getCurrentOrigin();
	            cV && (params["" + internal.SDK_QUERY_PARAM_NAME.MS_CV] = cV);
	            sessionId && (params["" + internal.SDK_QUERY_PARAM_NAME.SESSION_ID] = sessionId);
	            params["" + internal.SDK_QUERY_PARAM_NAME.HOST_TYPE] = ui.HostType.IFRAME;
	            var xframe = createIframeElement(uiComponent.getXframeProxyUrl(), uiComponent.id + "-xframeproxy", params, xframeStyle);
	            getElement("body").appendChild(xframe);
	            return createProxy(xframe.contentWindow, uiComponent.id, uiComponent.getComponentUrl(), listeners, uiComponent.config.onError);
	        }
	        function renderIFrame(uiComponent, params, listeners) {
	            var deferred = jQuery.Deferred();
	            var hostElement = getElement(uiComponent.config.uiInfo.containerSelector);
	            if (hostElement) {
	                uiComponent.iframe = createIframeElement(uiComponent.getComponentUrl(), uiComponent.id, params, undefined, uiComponent.config.uiInfo.accessibilityTitle);
	                hostElement.appendChild(uiComponent.iframe);
	                uiComponent.proxy = createProxy(uiComponent.iframe.contentWindow, uiComponent.id, uiComponent.getComponentUrl(), listeners, uiComponent.config.onError);
	            }
	            else {
	                deferred.reject("Could not find hosting container: " + uiComponent.config.uiInfo.containerSelector);
	            }
	            return deferred;
	        }
	        function renderPopup(uiComponent, params, listeners) {
	            var deferred = jQuery.Deferred();
	            var windowProperties = getWindowProperties(uiComponent.config, uiComponent.getDefaultWindowProperties());
	            var useXframe = internal.utils.isInternetExplorer() && !!uiComponent.getXframeProxyUrl();
	            params["" + internal.SDK_QUERY_PARAM_NAME.XFRAME] = useXframe;
	            var src = internal.utils.appendParams(uiComponent.getComponentUrl(), params, true);
	            uiComponent.popup = window.open(src, uiComponent.id, windowProperties);
	            uiComponent.proxy = useXframe ?
	                createXframeProxy(uiComponent, listeners) :
	                createProxy(uiComponent.popup, uiComponent.id, uiComponent.getComponentUrl(), listeners, uiComponent.config.onError);
	            return deferred;
	        }
	        function getEventName(prefix, eventName) {
	            return (prefix && !internal.CommonEvent[eventName]) ? "" + (prefix + eventName) : eventName;
	        }
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var chat;
	        (function (chat) {
	            var LOAD_TIMEOUT_MS = 15000;
	            var REPORT_HEIGHT_CHANGES = false;
	            var CHAT_EVENT_PREFIX = "Chat";
	            var CHAT_MESSAGE_EVENT_NAME = "ChatMessage";
	            var CHAT_COMPONENT = "Chat";
	            function render(config) {
	                return ui.renderComponent(Component, config, CHAT_COMPONENT);
	            }
	            chat.render = render;
	            var Component = (function (_super) {
	                __extends(Component, _super);
	                function Component(config) {
	                    var _this;
	                    if (!config || (!config.modalities && !config.rejoinUrl)) {
	                        throw new Error("Chat must be passed an object with available modalities from the API or a rejoin url.");
	                    }
	                    _this = _super.call(this, config, LOAD_TIMEOUT_MS, REPORT_HEIGHT_CHANGES) || this;
	                    return _this;
	                }
	                Component.prototype.getComponentUrl = function () {
	                    return this.config.rejoinUrl || this.url || (this.url = getChatUrl(this.config));
	                };
	                Component.prototype.getComponentSdk = function () {
	                    var _this = this;
	                    if (!this.chatSDK) {
	                        this.chatSDK = {
	                            sendMessage: function (message) { return sendChatMessage(_this.proxy, message); },
	                            updateContext: function () { return updateChatContext(); }
	                        };
	                    }
	                    return this.chatSDK;
	                };
	                Component.prototype.getXframeProxyUrl = function () {
	                    return internal.utils.getOriginFromUrl(this.getComponentUrl()) + "/xframeproxy/";
	                };
	                Component.prototype.getEventListeners = function () {
	                    return ui.UIComponent.getEventListeners(this.config, CHAT_EVENT_PREFIX);
	                };
	                return Component;
	            }(ui.UIComponent));
	            chat.Component = Component;
	            function getChatUrl(config) {
	                var modality = internal.utils.getModalityByType(config.modalities, internal.api.modalities.Modality.CHAT);
	                if (!modality) {
	                    throw new Error("Chat is not supported for this product/issue/langugage/country.");
	                }
	                var link = modality.link;
	                var values = {};
	                if (config.surveyType && config.surveyType === ui.SurveyType.NONE) {
	                    values["surveyType"] = "NONE";
	                }
	                if (config.authInfo && config.authInfo.type === ui.AuthType.AAD) {
	                    values["useAAD"] = true;
	                }
	                if (config.authInfo && config.authInfo.type === ui.AuthType.DELEGATED) {
	                    values["authType"] = "DELEGATED";
	                }
	                if (config.context && internal.utils.isArray(config.context)) {
	                    values["context"] = internal.utils.stringify(config.context);
	                }
	                if (config.subject) {
	                    values["subject"] = config.subject;
	                }
	                return internal.utils.appendParams(link, values, true);
	            }
	            function sendChatMessage(proxy, message) {
	                proxy.dispatchEvent(CHAT_MESSAGE_EVENT_NAME, message);
	                return jQuery.Deferred().resolve();
	            }
	            function updateChatContext() {
	                return jQuery.Deferred().reject("Not implemented");
	            }
	        })(chat = ui.chat || (ui.chat = {}));
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var callback;
	        (function (callback) {
	            var LOAD_TIMEOUT_MS = 15000;
	            var REPORT_HEIGHT_CHANGE = false;
	            var CALLBACK_COMPONENT = "Callback";
	            function render(config) {
	                return ui.renderComponent(Component, config, CALLBACK_COMPONENT);
	            }
	            callback.render = render;
	            var Component = (function (_super) {
	                __extends(Component, _super);
	                function Component(config) {
	                    return _super.call(this, config, LOAD_TIMEOUT_MS, REPORT_HEIGHT_CHANGE) || this;
	                }
	                Component.prototype.getComponentUrl = function () {
	                    return getCallbackUrl(this.config);
	                };
	                Component.prototype.getComponentSdk = function () {
	                    return {};
	                };
	                Component.prototype.getXframeProxyUrl = function () {
	                    return internal.utils.getOriginFromUrl(this.getComponentUrl()) + "/xframeproxy/";
	                };
	                return Component;
	            }(ui.UIComponent));
	            callback.Component = Component;
	            function getCallbackUrl(config) {
	                var modality = internal.utils.getModalityByType(config.modalities, internal.api.modalities.Modality.CALLBACK);
	                if (!modality) {
	                    throw new Error("Callback is not supported for this product/issue/langugage/country.");
	                }
	                var link = modality.link;
	                var values = {};
	                if (config.authInfo && config.authInfo.type && config.authInfo.type === ui.AuthType.AAD) {
	                    values["useAAD"] = true;
	                }
	                return internal.utils.appendParams(link, values);
	            }
	        })(callback = ui.callback || (ui.callback = {}));
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var scheduleCallback;
	        (function (scheduleCallback) {
	            var LOAD_TIMEOUT_MS = 15000;
	            var REPORT_HEIGHT_CHANGE = false;
	            var SCHEDULE_CALLBACK_COMPONENT = "ScheduleCallback";
	            function render(config) {
	                return ui.renderComponent(Component, config, SCHEDULE_CALLBACK_COMPONENT);
	            }
	            scheduleCallback.render = render;
	            var Component = (function (_super) {
	                __extends(Component, _super);
	                function Component(config) {
	                    return _super.call(this, config, LOAD_TIMEOUT_MS, REPORT_HEIGHT_CHANGE) || this;
	                }
	                Component.prototype.getComponentUrl = function () {
	                    return getCallbackUrl(this.config);
	                };
	                Component.prototype.getComponentSdk = function () {
	                    return {};
	                };
	                Component.prototype.getXframeProxyUrl = function () {
	                    return internal.utils.getOriginFromUrl(this.getComponentUrl()) + "/xframeproxy/";
	                };
	                return Component;
	            }(ui.UIComponent));
	            scheduleCallback.Component = Component;
	            function getCallbackUrl(config) {
	                var modality = internal.utils.getModalityByType(config.modalities, internal.api.modalities.Modality.SCHEDULE_CALLBACK);
	                if (!modality) {
	                    throw new Error("Schedule Callback is not supported for this product/issue/langugage/country.");
	                }
	                var link = modality.link;
	                var values = {};
	                if (config.authInfo && config.authInfo.type && config.authInfo.type === ui.AuthType.AAD) {
	                    values["useAAD"] = true;
	                }
	                return internal.utils.appendParams(link, values);
	            }
	        })(scheduleCallback = ui.scheduleCallback || (ui.scheduleCallback = {}));
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var survey;
	        (function (survey) {
	            var OfferState;
	            (function (OfferState) {
	                OfferState.DISPLAYED = "displayed";
	                OfferState.ACCEPTED = "accepted";
	                OfferState.REJECTED = "rejected";
	            })(OfferState = survey.OfferState || (survey.OfferState = {}));
	        })(survey = ui.survey || (ui.survey = {}));
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var survey;
	        (function (survey) {
	            var SURVEY_OFFER_EVENT_NAME = "survey.support.services.microsoft.com.SurveyOffer";
	            var updatePartC = internal.telemetry.awa.updatePartC;
	            var SurveyOfferBuilder = (function () {
	                function SurveyOfferBuilder() {
	                }
	                SurveyOfferBuilder.prototype.createSurveyOffer = function (responseId, config, offerState) {
	                    var eventBuilder = internal.telemetry.awa.createBaseEventBuilder();
	                    var baseEvent = new internal.telemetry.model.BaseEvent(SURVEY_OFFER_EVENT_NAME);
	                    var surveyEvent = eventBuilder.createBaseEvent(baseEvent);
	                    if (surveyEvent) {
	                        var content = eventBuilder.getContent(surveyEvent);
	                        updatePartC(content, SURVEY_OFFER_EVENT_NAME, "responseId", responseId);
	                        updatePartC(content, SURVEY_OFFER_EVENT_NAME, "partnerId", internal.SdkConfig.current.partnerId);
	                        updatePartC(content, SURVEY_OFFER_EVENT_NAME, "surveyId", config.surveyId);
	                        updatePartC(content, SURVEY_OFFER_EVENT_NAME, "flightId", config.flightId);
	                        updatePartC(content, SURVEY_OFFER_EVENT_NAME, "locale", config.locale);
	                        updatePartC(content, SURVEY_OFFER_EVENT_NAME, "offerState", offerState);
	                        updatePartC(content, SURVEY_OFFER_EVENT_NAME, "partnerContextJson", config.partnerContext);
	                    }
	                    return surveyEvent;
	                };
	                return SurveyOfferBuilder;
	            }());
	            survey.SurveyOfferBuilder = SurveyOfferBuilder;
	        })(survey = ui.survey || (ui.survey = {}));
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var survey;
	        (function (survey) {
	            var SURVEY_RESPONSE_EVENT_NAME = "survey.support.services.microsoft.com.SurveyResponse";
	            var updatePartC = internal.telemetry.awa.updatePartC;
	            var SurveyResponseBuilder = (function () {
	                function SurveyResponseBuilder() {
	                }
	                SurveyResponseBuilder.prototype.createSurveyResponse = function (responseId, data, surveyConfig) {
	                    var eventBuilder = internal.telemetry.awa.createBaseEventBuilder();
	                    var baseEvent = new internal.telemetry.model.BaseEvent(SURVEY_RESPONSE_EVENT_NAME);
	                    var surveyEvent = eventBuilder.createBaseEvent(baseEvent);
	                    if (surveyEvent) {
	                        var content = eventBuilder.getContent(surveyEvent);
	                        updatePartC(content, SURVEY_RESPONSE_EVENT_NAME, "responseId", responseId);
	                        updatePartC(content, SURVEY_RESPONSE_EVENT_NAME, "partnerId", internal.SdkConfig.current.partnerId);
	                        updatePartC(content, SURVEY_RESPONSE_EVENT_NAME, "surveyId", surveyConfig.surveyId);
	                        updatePartC(content, SURVEY_RESPONSE_EVENT_NAME, "flightId", data.flightId);
	                        updatePartC(content, SURVEY_RESPONSE_EVENT_NAME, "mode", data.mode);
	                        updatePartC(content, SURVEY_RESPONSE_EVENT_NAME, "quality", data.quality);
	                        updatePartC(content, SURVEY_RESPONSE_EVENT_NAME, "type", data.type);
	                        updatePartC(content, SURVEY_RESPONSE_EVENT_NAME, "locale", surveyConfig.locale);
	                        updatePartC(content, SURVEY_RESPONSE_EVENT_NAME, "isPartialResponse", data.isPartialResponse);
	                        updatePartC(content, SURVEY_RESPONSE_EVENT_NAME, "displayTime", data.displayTime);
	                        updatePartC(content, SURVEY_RESPONSE_EVENT_NAME, "surveyResponseJson", JSON.stringify(data.surveyResponse));
	                        updatePartC(content, SURVEY_RESPONSE_EVENT_NAME, "partnerContextJson", JSON.stringify(surveyConfig.partnerContext));
	                    }
	                    return surveyEvent;
	                };
	                return SurveyResponseBuilder;
	            }());
	            survey.SurveyResponseBuilder = SurveyResponseBuilder;
	        })(survey = ui.survey || (ui.survey = {}));
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var survey;
	        (function (survey) {
	            var AWA_PAGE_NAME = "WebSDK";
	            var AWA_BEHAVIOR_SUBMIT_SURVEY = 142;
	            var AWA_BEHAVIOR_SURVEY_INITIATE = 141;
	            var AWA_ACTION_TYPE_AUTOMATIC = "A";
	            var SURVEY_COMPONENT = "Survey";
	            var SURVEY_PLATFORM_PROD = "survey.support.services.microsoft.com";
	            var Survey = (function () {
	                function Survey(config) {
	                    this.surveyConfig = internal.utils.cloneObject({}, config);
	                    this.responseId = internal.utils.createFormattedGuid();
	                }
	                Survey.prototype.getResponseId = function () {
	                    return this.responseId;
	                };
	                Survey.prototype.logOfferResponse = function (offerState) {
	                    var surveyOfferBuilder = new survey.SurveyOfferBuilder();
	                    var awaEvent = surveyOfferBuilder.createSurveyOffer(this.responseId, this.surveyConfig, offerState);
	                    internal.telemetry.awa.writeAwaEvent(awaEvent);
	                    var content = {
	                        responseId: this.responseId,
	                        partnerId: internal.SdkConfig.current.partnerId,
	                        surveyId: this.surveyConfig.surveyId,
	                        locale: this.surveyConfig.locale,
	                        flightId: this.surveyConfig.flightId,
	                        offerState: offerState,
	                        partnerContextJson: this.surveyConfig.partnerContext
	                    };
	                    var overrideValues = {
	                        appId: awaEvent.appId,
	                        behavior: AWA_BEHAVIOR_SURVEY_INITIATE,
	                        Uri: window.location.href,
	                        referrerUri: document.referrer,
	                        pageName: AWA_PAGE_NAME,
	                        actionType: AWA_ACTION_TYPE_AUTOMATIC,
	                        pageHeight: window.innerHeight,
	                        content: content
	                    };
	                    var awaInstance = internal.telemetry.getAwaInstance();
	                    if (awaInstance && awaInstance.ct && awaInstance.ct.captureContentPageAction instanceof Function) {
	                        awaInstance.ct.captureContentPageAction(overrideValues);
	                    }
	                };
	                Survey.prototype.render = function (config) {
	                    var _this = this;
	                    return internal.telemetry.captureIncomingRequestAsync(function (qos) {
	                        return new survey.Component(_this.surveyConfig, config, _this.responseId).render();
	                    }, internal.ui.RENDER_OPERATION_NAME, SURVEY_COMPONENT, config.uiInfo);
	                };
	                Survey.prototype.logSurveyResponse = function (responseConfig) {
	                    var surveyResponseBuilder = new survey.SurveyResponseBuilder();
	                    var awaEvent = surveyResponseBuilder.createSurveyResponse(this.responseId, responseConfig, this.surveyConfig);
	                    internal.telemetry.awa.writeAwaEvent(awaEvent);
	                    var content = {
	                        responseId: this.responseId,
	                        partnerId: internal.SdkConfig.current.partnerId,
	                        surveyId: this.surveyConfig.surveyId,
	                        flightId: responseConfig.flightId,
	                        mode: responseConfig.mode,
	                        quality: responseConfig.quality,
	                        type: responseConfig.type,
	                        locale: this.surveyConfig.locale,
	                        isPartialResponse: responseConfig.isPartialResponse,
	                        displayTime: responseConfig.displayTime,
	                        surveyResponseJson: responseConfig.surveyResponse,
	                        partnerContextJson: this.surveyConfig.partnerContext
	                    };
	                    var overrideValues = {
	                        appId: awaEvent.appId,
	                        behavior: AWA_BEHAVIOR_SUBMIT_SURVEY,
	                        Uri: window.location.href,
	                        referrerUri: document.referrer,
	                        pageName: AWA_PAGE_NAME,
	                        actionType: AWA_ACTION_TYPE_AUTOMATIC,
	                        pageHeight: window.innerHeight,
	                        content: content
	                    };
	                    var awaInstance = internal.telemetry.getAwaInstance();
	                    if (awaInstance && awaInstance.ct && awaInstance.ct.captureContentPageAction instanceof Function) {
	                        awaInstance.ct.captureContentPageAction(overrideValues);
	                    }
	                };
	                Survey.prototype.getSurveyData = function (requestConfig) {
	                    var _this = this;
	                    var deferred = jQuery.Deferred();
	                    if (!(this.surveyConfig && this.surveyConfig.locale && this.surveyConfig.surveyId)) {
	                        deferred.reject("Invalid Parameters. Missing Locale or Survey ID.");
	                        return deferred;
	                    }
	                    var surveyHostName = (requestConfig && requestConfig.surveyPlatformHostName) || SURVEY_PLATFORM_PROD;
	                    var surveyPlatformUrl = "https://" + surveyHostName + "/surveyplatform/api/v1/locale/" + this.surveyConfig.locale + "/partner/" + internal.SdkConfig.current.partnerId + "/survey/" + this.surveyConfig.surveyId;
	                    if (this.surveyConfig.flightId) {
	                        surveyPlatformUrl += "/flight/" + this.surveyConfig.flightId;
	                    }
	                    if (requestConfig && requestConfig.preview) {
	                        surveyPlatformUrl += "/preview/" + requestConfig.preview;
	                    }
	                    var requestOptions = {
	                        url: surveyPlatformUrl,
	                        operationName: "WebSdkGetSurveyData",
	                        dependencyName: "SurveyPlatform",
	                        dependencyOperationName: "getSurvey"
	                    };
	                    internal.utils.httpRequest.get(requestOptions).then(function (result) {
	                        var surveyData = result;
	                        if (_this.validateSurveyData(surveyData)) {
	                            deferred.resolve((surveyData));
	                        }
	                        else {
	                            deferred.reject("Survey response failed basic validation.");
	                        }
	                    }).fail(function (xhr) {
	                        deferred.reject(xhr.responseText);
	                    });
	                    return deferred;
	                };
	                Survey.prototype.validateSurveyData = function (surveyData) {
	                    return surveyData &&
	                        surveyData.description &&
	                        surveyData.flights &&
	                        surveyData.flights[0] &&
	                        surveyData.flights[0].flightId &&
	                        surveyData.flights[0].mode &&
	                        surveyData.flights[0].questions &&
	                        surveyData.flights[0].questions[0] &&
	                        surveyData.flights[0].title;
	                };
	                return Survey;
	            }());
	            survey.Survey = Survey;
	        })(survey = ui.survey || (ui.survey = {}));
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var survey;
	        (function (survey) {
	            var LOAD_TIMEOUT_MS = 15000;
	            var REPORT_HEIGHT_CHANGE = true;
	            var DEFAULT_SURVEY_URL = "https://survey.support.services.microsoft.com/viewsurvey.html";
	            var DEFAULT_VIEW_MODE = "Wizard";
	            var DEFAULT_SURVEY_PLATFORM_ENVIRONMENT = "Prod";
	            var SURVEY_SURVEY_ID = "surveyId";
	            var SURVEY_RESPONSE_ID = "responseId";
	            var SURVEY_LOCALE_ID = "locale";
	            var SURVEY_FLIGHT_ID = "flightId";
	            var SURVEY_PREVIEW = "preview";
	            var SURVEY_VIEW_MODE = "viewMode";
	            var SURVEY_PLATFORM_ENVIRONMENT = "platformEnvironment";
	            var SURVEY_CONTEXT = "context";
	            var DEFAULT_XFRAME_PROXY_PATH = "xframeproxy.html";
	            function createSurvey(config) {
	                return new survey.Survey(config);
	            }
	            survey.createSurvey = createSurvey;
	            var Component = (function (_super) {
	                __extends(Component, _super);
	                function Component(surveyConfig, config, responseId) {
	                    var _this;
	                    if (!surveyConfig || !config || !(surveyConfig.surveyId && surveyConfig.locale)) {
	                        throw new Error("You must pass a product Id, Survey Id and locale when creating a survey component.");
	                    }
	                    _this = _super.call(this, config, LOAD_TIMEOUT_MS, REPORT_HEIGHT_CHANGE) || this;
	                    _this.surveyConfig = surveyConfig;
	                    _this.responseId = responseId;
	                    return _this;
	                }
	                Component.prototype.getComponentUrl = function () {
	                    return getSurveyUrl(this.surveyConfig, this.config, this.responseId);
	                };
	                Component.prototype.getComponentSdk = function () {
	                    return {};
	                };
	                Component.prototype.getXframeProxyUrl = function () {
	                    return internal.utils.getOriginFromUrl(this.getComponentUrl()) + "/" + DEFAULT_XFRAME_PROXY_PATH + "/";
	                };
	                return Component;
	            }(ui.UIComponent));
	            survey.Component = Component;
	            function getSurveyUrl(surveyConfig, config, responseId) {
	                var values = {};
	                if (surveyConfig.surveyId && internal.utils.isString(surveyConfig.surveyId)) {
	                    values[SURVEY_SURVEY_ID] = surveyConfig.surveyId;
	                }
	                if (responseId && internal.utils.isString(responseId)) {
	                    values[SURVEY_RESPONSE_ID] = responseId;
	                }
	                if (surveyConfig.locale && internal.utils.isString(surveyConfig.locale)) {
	                    values[SURVEY_LOCALE_ID] = surveyConfig.locale;
	                }
	                if (surveyConfig.flightId && internal.utils.isString(surveyConfig.flightId)) {
	                    values[SURVEY_FLIGHT_ID] = surveyConfig.flightId;
	                }
	                if (config.preview === true) {
	                    values[SURVEY_PREVIEW] = true;
	                }
	                var viewModeValue = DEFAULT_VIEW_MODE;
	                if (config.viewMode && internal.utils.isString(config.viewMode)) {
	                    viewModeValue = config.viewMode;
	                }
	                values[SURVEY_VIEW_MODE] = viewModeValue;
	                var surveyUrl = DEFAULT_SURVEY_URL;
	                if (config.environment && internal.utils.isString(config.environment)) {
	                    surveyUrl = config.environment;
	                }
	                values[SURVEY_PLATFORM_ENVIRONMENT] = DEFAULT_SURVEY_PLATFORM_ENVIRONMENT;
	                if (config.surveyPlatformEnvironment && internal.utils.isString(config.surveyPlatformEnvironment)) {
	                    values[SURVEY_PLATFORM_ENVIRONMENT] = config.surveyPlatformEnvironment;
	                }
	                if (surveyConfig.partnerContext) {
	                    values[SURVEY_CONTEXT] = JSON.stringify(surveyConfig.partnerContext);
	                }
	                return internal.utils.appendParams(surveyUrl, values);
	            }
	        })(survey = ui.survey || (ui.survey = {}));
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var virtualAgent;
	        (function (virtualAgent) {
	            virtualAgent.Environment = internal.SMCEnvironment;
	        })(virtualAgent = ui.virtualAgent || (ui.virtualAgent = {}));
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var virtualAgent;
	        (function (virtualAgent) {
	            var content;
	            (function (content) {
	                var ExtensionType;
	                (function (ExtensionType) {
	                    ExtensionType.DEFAULT = "default";
	                    ExtensionType.LINK = "link";
	                    ExtensionType.DISABLED = "disabled";
	                    ExtensionType.CUSTOM = "custom";
	                })(ExtensionType = content.ExtensionType || (content.ExtensionType = {}));
	            })(content = virtualAgent.content || (virtualAgent.content = {}));
	        })(virtualAgent = ui.virtualAgent || (ui.virtualAgent = {}));
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var virtualAgent;
	        (function (virtualAgent) {
	            var LOAD_TIMEOUT_MS = 15000;
	            var REPORT_HEIGHT_CHANGE = false;
	            var VIRTUAL_AGENT_PATH = "/contact/virtual-agent/";
	            var VIRTUAL_AGENT_REPLAY_PATH = "/contact/virtual-agent/replay";
	            var USER_INPUT_MAX_LENGTH = 1024;
	            var VIRTUAL_AGENT_EVENT_PREFIX = "VA";
	            var VIRTUAL_AGENT_MESSAGE_EVENT_NAME = "VAMessage";
	            var VIRTUAL_AGENT_STARTOVER_EVENT_NAME = "VAStartOver";
	            var VIRTUAL_AGENT_ENDCHAT_EVENT_NAME = "VAEndChat";
	            var VIRTUAL_AGENT_SHOWFEEDBACK_EVENT_NAME = "VAShowFeedback";
	            var VIRTUAL_AGENT_COMPONENT = "VirtualAgent";
	            function render(config) {
	                return ui.renderComponent(Component, config, VIRTUAL_AGENT_COMPONENT);
	            }
	            virtualAgent.render = render;
	            var Component = (function (_super) {
	                __extends(Component, _super);
	                function Component(config) {
	                    var _this;
	                    if (!config) {
	                        throw new Error("config is a mandatory parameter");
	                    }
	                    config.environment = config.environment || virtualAgent.Environment.PRODUCTION;
	                    verifyConfig(config);
	                    _this = _super.call(this, config, LOAD_TIMEOUT_MS, REPORT_HEIGHT_CHANGE) || this;
	                    return _this;
	                }
	                Component.prototype.getComponentUrl = function () {
	                    return this.url || (this.url = getVirtualAgentUrl(this.config));
	                };
	                Component.prototype.getComponentSdk = function () {
	                    var _this = this;
	                    if (!this.virtualAgentSDK) {
	                        this.virtualAgentSDK = {
	                            sendMessage: function (message) { return sendMessage(_this.proxy, message); },
	                            startOver: function () { return startOver(_this.proxy); },
	                            endChat: function () { return endChat(_this.proxy); },
	                            showFeedback: function () { return showFeedback(_this.proxy); }
	                        };
	                    }
	                    return this.virtualAgentSDK;
	                };
	                Component.prototype.getXframeProxyUrl = function () {
	                    return internal.utils.getOriginFromUrl(this.getComponentUrl()) + "/xframeproxy/";
	                };
	                Component.prototype.getEventListeners = function () {
	                    if (!this.listeners) {
	                        this.listeners = ui.UIComponent.getEventListeners(this.config, VIRTUAL_AGENT_EVENT_PREFIX);
	                        if (this.config.content && this.config.content.flowExtensionOption) {
	                            var extensionConfig = this.config.content.flowExtensionOption;
	                            var extensionListeners = ui.UIComponent.getEventListeners(extensionConfig);
	                            jQuery.extend(this.listeners, extensionListeners);
	                        }
	                    }
	                    return this.listeners;
	                };
	                return Component;
	            }(ui.UIComponent));
	            virtualAgent.Component = Component;
	            function sendMessage(proxy, message) {
	                if (message.length > USER_INPUT_MAX_LENGTH) {
	                    return jQuery.Deferred().reject();
	                }
	                else {
	                    proxy.dispatchEvent(VIRTUAL_AGENT_MESSAGE_EVENT_NAME, message);
	                    return jQuery.Deferred().resolve();
	                }
	            }
	            function startOver(proxy) {
	                proxy.dispatchEvent(VIRTUAL_AGENT_STARTOVER_EVENT_NAME, undefined);
	            }
	            function endChat(proxy) {
	                proxy.dispatchEvent(VIRTUAL_AGENT_ENDCHAT_EVENT_NAME, undefined);
	            }
	            function showFeedback(proxy) {
	                proxy.dispatchEvent(VIRTUAL_AGENT_SHOWFEEDBACK_EVENT_NAME, undefined);
	            }
	            function verifyConfig(config) {
	                internal.utils.verifyString("environment", config.environment, true);
	                internal.utils.verifyString("locale", config.locale, true);
	            }
	            function getVirtualAgentUrl(config) {
	                var url = "https://" + config.environment + "/" + config.locale;
	                var values = {};
	                if (config.replayInfo) {
	                    url += VIRTUAL_AGENT_REPLAY_PATH;
	                    if (config.replayInfo.visidId && config.replayInfo.visidId === "UC_REPLAY_REQUIRED") {
	                        config.replayInfo.userToken = config.replayInfo.engagementId;
	                        values = parseVirtualAgentConfig(config);
	                    }
	                }
	                else {
	                    url += VIRTUAL_AGENT_PATH;
	                    values = parseVirtualAgentConfig(config);
	                }
	                return internal.utils.appendParams(url, values, true);
	            }
	            function parseVirtualAgentConfig(config) {
	                var values = {};
	                if (config.flights && internal.utils.isString(config.flights)) {
	                    values["flighting"] = encodeURIComponent(config.flights);
	                }
	                if (config.preview && internal.utils.isBoolean(config.preview)) {
	                    values["sky.preview"] = encodeURIComponent(String(config.preview));
	                }
	                if (config.areaId && internal.utils.isString(config.areaId)) {
	                    values["area"] = encodeURIComponent(config.areaId);
	                }
	                if (config.flowId && internal.utils.isString(config.flowId)) {
	                    values["flowId"] = encodeURIComponent(config.flowId);
	                }
	                if (config.queryParams && internal.utils.isString(config.queryParams)) {
	                    var splitQueryParams = config.queryParams.split("&");
	                    for (var _i = 0, splitQueryParams_1 = splitQueryParams; _i < splitQueryParams_1.length; _i++) {
	                        var queryParam = splitQueryParams_1[_i];
	                        var queryParamParts = queryParam.split("=");
	                        if (queryParamParts.length !== 2) {
	                            continue;
	                        }
	                        values[encodeURIComponent(queryParamParts[0])] = encodeURIComponent(queryParamParts[1]);
	                    }
	                }
	                return values;
	            }
	        })(virtualAgent = ui.virtualAgent || (ui.virtualAgent = {}));
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var caseManagement;
	        (function (caseManagement) {
	            caseManagement.Environment = internal.SMCEnvironment;
	            var WorkflowStep;
	            (function (WorkflowStep) {
	                WorkflowStep.FORM = "form";
	                WorkflowStep.SUCCESS = "success";
	            })(WorkflowStep = caseManagement.WorkflowStep || (caseManagement.WorkflowStep = {}));
	            caseManagement.CASEMANAGEMENT_COMPONENT = "caseManagement";
	            caseManagement.LOAD_TIMEOUT_MS = 15000;
	            caseManagement.REPORT_HEIGHT_CHANGE = true;
	            caseManagement.DEFAULT_CASE_MANAGEMENT_HOST = caseManagement.Environment.PRODUCTION;
	            caseManagement.DEFAULT_XFRAME_PROXY_PATH = "xframeproxy";
	            caseManagement.DEFAULT_LOCALE = "en-us";
	            caseManagement.DEFAULT_PREVIEW = false;
	            caseManagement.DEFAULT_NOCHROME = true;
	            caseManagement.CASE_LOCALE = "locale";
	            caseManagement.CASE_SAP_ID = "sapId";
	            caseManagement.CASE_ENTITLEMENT_ID = "entitlementId";
	            caseManagement.CASE_PREVIEW = "preview";
	            caseManagement.CASE_ENVIRONMENT = "environment";
	            caseManagement.CASE_INCLUDED_WORKFLOW_STEPS = "includedWorkflowSteps";
	            caseManagement.CASE_NOCHROME = "nochrome";
	            caseManagement.CASE_NUMBER = "caseNumber";
	            caseManagement.CASE_HIDE_FORM_HEADERS = "hideFormHeaders";
	            caseManagement.CASE_TITLE_PRE_POPULATE = "titlePrePopulate";
	            caseManagement.CASE_FIELDS_PRE_POPULATE = "fieldsPrePopulate";
	            function getCaseXFrameProxyUrl(componentUrl) {
	                return internal.utils.getOriginFromUrl(componentUrl) + "/" + caseManagement.DEFAULT_XFRAME_PROXY_PATH + "/";
	            }
	            caseManagement.getCaseXFrameProxyUrl = getCaseXFrameProxyUrl;
	            function getCaseBaseUrl(config) {
	                if (!internal.utils.hasKeyOrValue(caseManagement.Environment, config.environment)) {
	                    throw "The environment property specified in config is invalid";
	                }
	                return config.environment;
	            }
	            caseManagement.getCaseBaseUrl = getCaseBaseUrl;
	        })(caseManagement = ui.caseManagement || (ui.caseManagement = {}));
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var caseManagement;
	        (function (caseManagement) {
	            var createCase;
	            (function (createCase) {
	                var DEFAULT_CASE_CREATION_PATH = "commercial/cases/create";
	                function render(config) {
	                    return ui.renderComponent(CreateCaseComponent, config, caseManagement.CASEMANAGEMENT_COMPONENT);
	                }
	                createCase.render = render;
	                var CreateCaseComponent = (function (_super) {
	                    __extends(CreateCaseComponent, _super);
	                    function CreateCaseComponent(config) {
	                        var _this;
	                        if (!config || !(config.locale && config.sapId && config.entitlementId)) {
	                            throw new Error("You must pass locale and a SAP Id and entitlement Id when creating a case management component.");
	                        }
	                        _this = _super.call(this, config, caseManagement.LOAD_TIMEOUT_MS, caseManagement.REPORT_HEIGHT_CHANGE) || this;
	                        return _this;
	                    }
	                    CreateCaseComponent.prototype.getComponentUrl = function () {
	                        return this.getCreateCaseUrl(this.config);
	                    };
	                    CreateCaseComponent.prototype.getComponentSdk = function () {
	                        return {};
	                    };
	                    CreateCaseComponent.prototype.getXframeProxyUrl = function () {
	                        return caseManagement.getCaseXFrameProxyUrl(this.getComponentUrl());
	                    };
	                    CreateCaseComponent.prototype.getCreateCaseUrl = function (config) {
	                        var values = {};
	                        if (config[caseManagement.CASE_SAP_ID] && internal.utils.isString(config[caseManagement.CASE_SAP_ID])) {
	                            values[caseManagement.CASE_SAP_ID] = config[caseManagement.CASE_SAP_ID];
	                        }
	                        if (config[caseManagement.CASE_ENTITLEMENT_ID] && internal.utils.isString(config[caseManagement.CASE_ENTITLEMENT_ID])) {
	                            values[caseManagement.CASE_ENTITLEMENT_ID] = config[caseManagement.CASE_ENTITLEMENT_ID];
	                        }
	                        if (config[caseManagement.CASE_INCLUDED_WORKFLOW_STEPS] && internal.utils.isArray(config[caseManagement.CASE_INCLUDED_WORKFLOW_STEPS])) {
	                            values[caseManagement.CASE_INCLUDED_WORKFLOW_STEPS] = config[caseManagement.CASE_INCLUDED_WORKFLOW_STEPS].join();
	                        }
	                        if (config[caseManagement.CASE_PREVIEW] && internal.utils.isBoolean(config[caseManagement.CASE_PREVIEW])) {
	                            values[caseManagement.CASE_PREVIEW] = config[caseManagement.CASE_PREVIEW];
	                        }
	                        if (config[caseManagement.CASE_HIDE_FORM_HEADERS] && internal.utils.isBoolean(config[caseManagement.CASE_HIDE_FORM_HEADERS])) {
	                            values[caseManagement.CASE_HIDE_FORM_HEADERS] = config[caseManagement.CASE_HIDE_FORM_HEADERS];
	                        }
	                        values[caseManagement.CASE_NOCHROME] = true;
	                        if (config[caseManagement.CASE_LOCALE] && internal.utils.isString(config[caseManagement.CASE_LOCALE])) {
	                            return internal.utils.appendParams("https://" + caseManagement.getCaseBaseUrl(config) + "/" + config[caseManagement.CASE_LOCALE] + "/" + DEFAULT_CASE_CREATION_PATH, values);
	                        }
	                        else {
	                            return internal.utils.appendParams("https://" + caseManagement.getCaseBaseUrl(config) + "/" + DEFAULT_CASE_CREATION_PATH, values);
	                        }
	                    };
	                    return CreateCaseComponent;
	                }(ui.UIComponent));
	                createCase.CreateCaseComponent = CreateCaseComponent;
	            })(createCase = caseManagement.createCase || (caseManagement.createCase = {}));
	        })(caseManagement = ui.caseManagement || (ui.caseManagement = {}));
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var caseManagement;
	        (function (caseManagement) {
	            var manageCaseCommunication;
	            (function (manageCaseCommunication) {
	                function render(config) {
	                    return ui.renderComponent(ManageCaseCommunicationComponent, config, caseManagement.CASEMANAGEMENT_COMPONENT);
	                }
	                manageCaseCommunication.render = render;
	                var ManageCaseCommunicationComponent = (function (_super) {
	                    __extends(ManageCaseCommunicationComponent, _super);
	                    function ManageCaseCommunicationComponent(config) {
	                        return _super.call(this, config, caseManagement.LOAD_TIMEOUT_MS, caseManagement.REPORT_HEIGHT_CHANGE) || this;
	                    }
	                    ManageCaseCommunicationComponent.prototype.getComponentUrl = function () {
	                        return this.getManageCommunicationsUrl(this.config);
	                    };
	                    ManageCaseCommunicationComponent.prototype.getComponentSdk = function () {
	                        return {};
	                    };
	                    ManageCaseCommunicationComponent.prototype.getXframeProxyUrl = function () {
	                        return internal.utils.getOriginFromUrl(this.getComponentUrl()) + "/" + caseManagement.DEFAULT_XFRAME_PROXY_PATH + "/";
	                    };
	                    ManageCaseCommunicationComponent.prototype.getManageCommunicationsUrl = function (config) {
	                        var values = {};
	                        var locale = config.locale ? config.locale : caseManagement.DEFAULT_LOCALE;
	                        if (config.preview)
	                            values[caseManagement.CASE_PREVIEW] = true;
	                        values[caseManagement.CASE_NOCHROME] = caseManagement.DEFAULT_NOCHROME;
	                        if (!config.caseNumber) {
	                            throw "Error in ManageCaseCommunicationComponent component. Case number is a required parameter";
	                        }
	                        return internal.utils.appendParams("https://" + caseManagement.getCaseBaseUrl(config) + "/" + locale + "/" + ManageCaseCommunicationComponent.DEFAULT_CASE_COMMUNICATION_PATH + "/" + config[caseManagement.CASE_NUMBER], values);
	                    };
	                    return ManageCaseCommunicationComponent;
	                }(ui.UIComponent));
	                ManageCaseCommunicationComponent.DEFAULT_CASE_COMMUNICATION_PATH = "commercial/cases";
	                manageCaseCommunication.ManageCaseCommunicationComponent = ManageCaseCommunicationComponent;
	            })(manageCaseCommunication = caseManagement.manageCaseCommunication || (caseManagement.manageCaseCommunication = {}));
	        })(caseManagement = ui.caseManagement || (ui.caseManagement = {}));
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var caseManagement;
	        (function (caseManagement) {
	            var CaseManagementApi = (function () {
	                function CaseManagementApi() {
	                }
	                CaseManagementApi.getCase = function (config) {
	                    CaseManagementApi.validateConfig(config);
	                    var apiUrl = CaseManagementApi.calculateApiUrl(config);
	                    var requestOptions = {
	                        operationName: "api.caseManagement.getCase",
	                        url: apiUrl,
	                        dependencyName: "SelfAssistWeb",
	                        dependencyOperationName: "Get case details",
	                        additionalHeaders: {
	                            "x-requst-secured-context-token": config.authInfo.token
	                        }
	                    };
	                    return internal.utils.httpRequest.get(requestOptions);
	                };
	                CaseManagementApi.calculateApiUrl = function (config) {
	                    var baseUrl = internal.ui.caseManagement.getCaseBaseUrl(config);
	                    return "https://" + baseUrl + "/api/cases/" + config.caseNumber;
	                };
	                CaseManagementApi.validateConfig = function (config) {
	                    if (!internal.utils.isString(config.caseNumber)) {
	                        throw "getCase requires a case number";
	                    }
	                    if (!(config.authInfo && config.authInfo.token && config.authInfo.type)) {
	                        throw "getCase requires authInfo with valid token and type";
	                    }
	                    if (config.authInfo.type !== internal.ui.AuthType.DELEGATED) {
	                        throw "getCase only supports delegated authentication type";
	                    }
	                };
	                return CaseManagementApi;
	            }());
	            caseManagement.CaseManagementApi = CaseManagementApi;
	        })(caseManagement = api.caseManagement || (api.caseManagement = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var search;
	        (function (search) {
	            var SearchResultFacet = (function () {
	                function SearchResultFacet() {
	                }
	                return SearchResultFacet;
	            }());
	            search.SearchResultFacet = SearchResultFacet;
	            var SearchResultFacetValue = (function () {
	                function SearchResultFacetValue() {
	                }
	                return SearchResultFacetValue;
	            }());
	            search.SearchResultFacetValue = SearchResultFacetValue;
	        })(search = api.search || (api.search = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var search;
	        (function (search) {
	            var SearchResultSet = (function () {
	                function SearchResultSet() {
	                }
	                return SearchResultSet;
	            }());
	            search.SearchResultSet = SearchResultSet;
	            var SearchResult = (function () {
	                function SearchResult() {
	                }
	                return SearchResult;
	            }());
	            search.SearchResult = SearchResult;
	        })(search = api.search || (api.search = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var search;
	        (function (search) {
	            var KnowledgeSearchResultSet = (function (_super) {
	                __extends(KnowledgeSearchResultSet, _super);
	                function KnowledgeSearchResultSet() {
	                    return _super.apply(this, arguments) || this;
	                }
	                return KnowledgeSearchResultSet;
	            }(search.SearchResultSet));
	            search.KnowledgeSearchResultSet = KnowledgeSearchResultSet;
	            var KnowledgeSearchResult = (function (_super) {
	                __extends(KnowledgeSearchResult, _super);
	                function KnowledgeSearchResult() {
	                    return _super.apply(this, arguments) || this;
	                }
	                return KnowledgeSearchResult;
	            }(search.SearchResult));
	            search.KnowledgeSearchResult = KnowledgeSearchResult;
	        })(search = api.search || (api.search = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var search;
	        (function (search) {
	            var SearchFacets = (function () {
	                function SearchFacets(confidentialities, contentType, language, productFamilyId, productNameId, productVersionId) {
	                    this.confidentiality = confidentialities;
	                    this.contentType = contentType;
	                    this.language = language;
	                    this.productFamilyId = productFamilyId;
	                    this.productNameId = productNameId;
	                    this.productVersionId = productVersionId;
	                }
	                return SearchFacets;
	            }());
	            search.SearchFacets = SearchFacets;
	            var SearchFacet = (function () {
	                function SearchFacet(count, sort) {
	                    this.count = count;
	                    this.sort = sort;
	                }
	                return SearchFacet;
	            }());
	            search.SearchFacet = SearchFacet;
	            (function (SearchFacetSortOrder) {
	                SearchFacetSortOrder[SearchFacetSortOrder["CountDescending"] = "CountDescending"] = "CountDescending";
	                SearchFacetSortOrder[SearchFacetSortOrder["CountAscending"] = "CountAscending"] = "CountAscending";
	                SearchFacetSortOrder[SearchFacetSortOrder["ValueDescending"] = "ValueDescending"] = "ValueDescending";
	                SearchFacetSortOrder[SearchFacetSortOrder["ValueAscending"] = "ValueAscending"] = "ValueAscending";
	            })(search.SearchFacetSortOrder || (search.SearchFacetSortOrder = {}));
	            var SearchFacetSortOrder = search.SearchFacetSortOrder;
	        })(search = api.search || (api.search = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var search;
	        (function (search) {
	            var SearchFilter = (function () {
	                function SearchFilter(documentDateFrom, documentDateTo, confidentiality, contentType, productFamilyId, productNameId, productVersionId, keyWords) {
	                    this.documentDateFrom = documentDateFrom;
	                    this.documentDateTo = documentDateTo;
	                    this.confidentiality = confidentiality;
	                    this.contentType = contentType;
	                    this.productFamilyId = productFamilyId;
	                    this.productNameId = productNameId;
	                    this.productVersionId = productVersionId;
	                    this.keyWords = keyWords;
	                }
	                return SearchFilter;
	            }());
	            search.SearchFilter = SearchFilter;
	        })(search = api.search || (api.search = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var search;
	        (function (search) {
	            var SearchOrderByExpression = (function () {
	                function SearchOrderByExpression(name, direction) {
	                    this.name = name;
	                    this.direction = direction;
	                }
	                return SearchOrderByExpression;
	            }());
	            search.SearchOrderByExpression = SearchOrderByExpression;
	            (function (OrderByFieldNames) {
	                OrderByFieldNames[OrderByFieldNames["SearchScore"] = "SearchScore"] = "SearchScore";
	                OrderByFieldNames[OrderByFieldNames["DocumentDate"] = "DocumentDate"] = "DocumentDate";
	            })(search.OrderByFieldNames || (search.OrderByFieldNames = {}));
	            var OrderByFieldNames = search.OrderByFieldNames;
	            (function (OrderByDirection) {
	                OrderByDirection[OrderByDirection["Ascending"] = "Ascending"] = "Ascending";
	                OrderByDirection[OrderByDirection["Descending"] = "Descending"] = "Descending";
	            })(search.OrderByDirection || (search.OrderByDirection = {}));
	            var OrderByDirection = search.OrderByDirection;
	        })(search = api.search || (api.search = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var search;
	        (function (search) {
	            (function (HttpMethod) {
	                HttpMethod[HttpMethod["GET"] = 0] = "GET";
	                HttpMethod[HttpMethod["POST"] = 1] = "POST";
	            })(search.HttpMethod || (search.HttpMethod = {}));
	            var HttpMethod = search.HttpMethod;
	            var SearchConfig = (function () {
	                function SearchConfig(query, httpMethod, locale, scopes, count, skip, searchProvider, instantAnswerProvider, includeInstantAnswer, includeWebSearchResults, enableHitHighlights, filter, facets, orderBy, insiderMode, tenant, version, flights, suggestId, muid, environment, searchId) {
	                    if (httpMethod === void 0) { httpMethod = HttpMethod.GET; }
	                    this.query = query;
	                    this.httpMethod = httpMethod;
	                    this.locale = locale;
	                    this.scopes = scopes;
	                    this.count = count;
	                    this.skip = skip;
	                    this.searchProvider = searchProvider;
	                    this.instantAnswerProvider = instantAnswerProvider;
	                    this.includeInstantAnswer = includeInstantAnswer;
	                    this.includeWebSearchResults = includeWebSearchResults;
	                    this.enableHitHighlights = enableHitHighlights;
	                    this.filter = filter;
	                    this.facets = facets;
	                    this.orderBy = orderBy;
	                    this.insiderMode = insiderMode;
	                    this.tenant = tenant;
	                    this.version = version;
	                    this.flights = flights;
	                    this.suggestId = suggestId;
	                    this.muid = muid;
	                    this.environment = environment;
	                    this.searchId = searchId;
	                }
	                return SearchConfig;
	            }());
	            search.SearchConfig = SearchConfig;
	        })(search = api.search || (api.search = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var search;
	        (function (search) {
	            var KnowledgeSearchConfig = (function (_super) {
	                __extends(KnowledgeSearchConfig, _super);
	                function KnowledgeSearchConfig(query, httpMethod, locale, scopes, count, skip, searchProvider, instantAnswerProvider, includeInstantAnswer, includeWebSearchResults, enableHitHighlights, filter, facets, orderBy, insiderMode, tenant, version, flights, suggestId, muid, environment, token, searchId) {
	                    var _this = _super.call(this, query, httpMethod, locale, scopes, count, skip, searchProvider, instantAnswerProvider, includeInstantAnswer, includeWebSearchResults, enableHitHighlights, filter, facets, orderBy, insiderMode, tenant, version, flights, suggestId, muid, environment, searchId) || this;
	                    _this.token = token;
	                    return _this;
	                }
	                return KnowledgeSearchConfig;
	            }(search.SearchConfig));
	            search.KnowledgeSearchConfig = KnowledgeSearchConfig;
	        })(search = api.search || (api.search = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var search;
	        (function (search) {
	            search.BASE_URI = "supportsearch.microsoft.com";
	            search.BASE_URI_STG = "supportsearch-stg.microsoft.com";
	            search.BASE_GATEWAYURI = "api.support.microsoft.com/v1/search/knowledge";
	            search.BASE_GATEWAYURI_STG = "api-ppe.support.microsoft.com/v1/search/knowledge";
	            search.SEARCH_ROUTE = "search";
	            search.DEFAULT_SEARCHRESULTSCOUNT = 20;
	            search.DEFAULT_LOCALE = "en-us";
	            search.DEFAULT_SCOPE = "default";
	            search.DEFAULT_VERSION = "5.0";
	        })(search = api.search || (api.search = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var search;
	        (function (search) {
	            var SearchApi = (function () {
	                function SearchApi() {
	                }
	                SearchApi.getSearchResults = function (config) {
	                    var apiUrl = formSearchUrl(config, false);
	                    var tenant = config.tenant || internal.SdkConfig.current.partnerId + ":" + internal.SdkConfig.current.appId;
	                    var additionalHeaders = {};
	                    additionalHeaders["x-caller-name"] = tenant;
	                    if (config.flights && config.flights.length > 0) {
	                        additionalHeaders["x-ms-flight"] = config.flights.join(",");
	                    }
	                    if (config.muid != undefined && config.muid != "") {
	                        additionalHeaders["x-caller-muid"] = config.muid;
	                    }
	                    if (config.searchId != undefined && config.searchId != "") {
	                        additionalHeaders["x-msaas-searchid"] = config.searchId;
	                    }
	                    var cv = internal.telemetry.getCorrelationVector();
	                    if (cv) {
	                        additionalHeaders["ms-cv"] = internal.telemetry.getCorrelationVector();
	                    }
	                    var requestOptions = {
	                        operationName: "api.search.getResults",
	                        url: apiUrl,
	                        additionalHeaders: additionalHeaders,
	                        dependencyName: "supportsearch.microsoft.com",
	                        dependencyOperationName: "Get Search Results"
	                    };
	                    return getSearchResultsPromise(config, requestOptions);
	                };
	                SearchApi.postSearchResults = function (config) {
	                    config.httpMethod = search.HttpMethod.POST;
	                    return SearchApi.getSearchResults(config);
	                };
	                SearchApi.getKnowledgeSearchResults = function (config) {
	                    var apiUrl = formSearchUrl(config, true);
	                    var tenant = config.tenant || internal.SdkConfig.current.partnerId + ":" + internal.SdkConfig.current.appId;
	                    var additionalHeaders = {};
	                    additionalHeaders["x-caller-name"] = tenant;
	                    additionalHeaders["Authorization"] = "Bearer " + config.token;
	                    if (config.flights && config.flights.length > 0) {
	                        additionalHeaders["x-ms-flight"] = config.flights.join(",");
	                    }
	                    if (config.muid != undefined && config.muid != "") {
	                        additionalHeaders["x-caller-muid"] = config.muid;
	                    }
	                    if (config.searchId != undefined && config.searchId != "") {
	                        additionalHeaders["x-msaas-searchid"] = config.searchId;
	                    }
	                    var cv = internal.telemetry.getCorrelationVector();
	                    if (cv) {
	                        additionalHeaders["ms-cv"] = internal.telemetry.getCorrelationVector();
	                    }
	                    var requestOptions = {
	                        operationName: "api.search.getKnowledgeSearchResults",
	                        url: apiUrl,
	                        additionalHeaders: additionalHeaders,
	                        dependencyName: "https://api.support.microsoft.com/v1/search",
	                        dependencyOperationName: "Get Knowledge Search Results"
	                    };
	                    return getKnowledgeSearchResultsPromise(config, requestOptions);
	                };
	                SearchApi.postKnowledgeSearchResults = function (config) {
	                    config.httpMethod = search.HttpMethod.POST;
	                    return SearchApi.getKnowledgeSearchResults(config);
	                };
	                return SearchApi;
	            }());
	            search.SearchApi = SearchApi;
	            function getSearchResultsPromise(config, requestOptions) {
	                var searchDeferred = jQuery.Deferred();
	                var params = formSearchParams(config);
	                var request;
	                if (config.httpMethod == search.HttpMethod.POST) {
	                    requestOptions.content = params;
	                    request = internal.utils.httpRequest.post(requestOptions);
	                }
	                else {
	                    requestOptions.queryParams = convertDatesToStrings(flatten(params));
	                    request = internal.utils.httpRequest.get(requestOptions);
	                }
	                request.then(function (jsonResult) {
	                    var searchResults = new Array();
	                    var searchResultFacets = new Array();
	                    var flightIds = new Array();
	                    if (jsonResult.WebSearchResults && jsonResult.WebSearchResults.length != 0) {
	                        for (var i = 0; i < jsonResult.WebSearchResults.length; i++) {
	                            var searchResult = new search.SearchResult();
	                            searchResult.title = jsonResult.WebSearchResults[i].Title;
	                            searchResult.displayUrl = jsonResult.WebSearchResults[i].DisplayUrl;
	                            searchResult.targetUrl = jsonResult.WebSearchResults[i].TargetUrl;
	                            searchResult.description = jsonResult.WebSearchResults[i].Description;
	                            searchResult.appliesTo = jsonResult.WebSearchResults[i].AppliesTo;
	                            searchResults.push(searchResult);
	                        }
	                    }
	                    if (jsonResult.FlightIds && jsonResult.FlightIds.length != 0) {
	                        for (var i = 0; i < jsonResult.FlightIds.length; i++) {
	                            flightIds.push(jsonResult.FlightIds[i]);
	                        }
	                    }
	                    if (jsonResult.Facets) {
	                        for (var field in jsonResult.Facets) {
	                            var facet = new search.SearchResultFacet();
	                            var values = new Array();
	                            for (var i = 0; i < jsonResult.Facets[field].length; i++) {
	                                var value = new search.SearchResultFacetValue();
	                                value.name = jsonResult.Facets[field][i].Name;
	                                value.value = jsonResult.Facets[field][i].Value;
	                                value.facetType = jsonResult.Facets[field][i].FacetType;
	                                value.count = jsonResult.Facets[field][i].Count;
	                                value.from = jsonResult.Facets[field][i].From;
	                                value.to = jsonResult.Facets[field][i].To;
	                                values.push(value);
	                            }
	                            facet.field = field;
	                            facet.values = values;
	                            searchResultFacets.push(facet);
	                        }
	                    }
	                    var searchResultSet = new search.SearchResultSet();
	                    searchResultSet.searchId = jsonResult.SearchId;
	                    searchResultSet.totalResults = jsonResult.TotalResults;
	                    searchResultSet.searchResults = searchResults;
	                    searchResultSet.facets = searchResultFacets;
	                    searchResultSet.instantAnswerJson = jsonResult.AnswerContentJson;
	                    searchResultSet.searchProvider = jsonResult.SearchProvider;
	                    searchResultSet.instantAnswerProvider = jsonResult.InstantAnswerProvider;
	                    searchResultSet.flightIds = flightIds;
	                    searchResultSet.suggestId = jsonResult.SuggestId;
	                    searchResultSet.tenant = jsonResult.CallerId;
	                    searchDeferred.resolve(searchResultSet);
	                }, function (error) {
	                    console.log(error);
	                    searchDeferred.reject(error);
	                });
	                return searchDeferred.promise();
	            }
	            function getKnowledgeSearchResultsPromise(config, requestOptions) {
	                var searchDeferred = jQuery.Deferred();
	                var params = formSearchParams(config);
	                var request;
	                if (config.httpMethod == search.HttpMethod.POST) {
	                    requestOptions.content = params;
	                    request = internal.utils.httpRequest.post(requestOptions);
	                }
	                else {
	                    requestOptions.queryParams = convertDatesToStrings(flatten(params));
	                    request = internal.utils.httpRequest.get(requestOptions);
	                }
	                request.then(function (jsonResult) {
	                    var knowledgeSearchResults = new Array();
	                    var knowledgeSearchResultFacets = new Array();
	                    var flightIds = new Array();
	                    if (jsonResult.WebSearchResults && jsonResult.WebSearchResults.length != 0) {
	                        for (var i = 0; i < jsonResult.WebSearchResults.length; i++) {
	                            var knowledgeSearchResult = new search.KnowledgeSearchResult();
	                            knowledgeSearchResult.title = jsonResult.WebSearchResults[i].Title;
	                            knowledgeSearchResult.displayUrl = jsonResult.WebSearchResults[i].DisplayUrl;
	                            knowledgeSearchResult.targetUrl = jsonResult.WebSearchResults[i].TargetUrl;
	                            knowledgeSearchResult.description = jsonResult.WebSearchResults[i].Description;
	                            knowledgeSearchResult.appliesTo = jsonResult.WebSearchResults[i].AppliesTo;
	                            knowledgeSearchResult.documentDate = jsonResult.WebSearchResults[i].DocumentDate;
	                            knowledgeSearchResult.confidentiality = jsonResult.WebSearchResults[i].Confidentiality;
	                            knowledgeSearchResult.contentType = jsonResult.WebSearchResults[i].ContentType;
	                            knowledgeSearchResult.documentFamilyId = jsonResult.WebSearchResults[i].DocumentFamilyId;
	                            knowledgeSearchResult.audienceLanguage = jsonResult.WebSearchResults[i].AudienceLanguage;
	                            knowledgeSearchResult.audienceLocale = jsonResult.WebSearchResults[i].AudienceLocale;
	                            knowledgeSearchResult.language = jsonResult.WebSearchResults[i].Language;
	                            knowledgeSearchResults.push(knowledgeSearchResult);
	                        }
	                    }
	                    if (jsonResult.FlightIds && jsonResult.FlightIds.length != 0) {
	                        for (var i = 0; i < jsonResult.FlightIds.length; i++) {
	                            flightIds.push(jsonResult.FlightIds[i]);
	                        }
	                    }
	                    if (jsonResult.Facets) {
	                        for (var field in jsonResult.Facets) {
	                            var facet = new search.SearchResultFacet();
	                            var values = new Array();
	                            for (var i = 0; i < jsonResult.Facets[field].length; i++) {
	                                var value = new search.SearchResultFacetValue();
	                                value.name = jsonResult.Facets[field][i].Name;
	                                value.value = jsonResult.Facets[field][i].Value;
	                                value.facetType = jsonResult.Facets[field][i].FacetType;
	                                value.count = jsonResult.Facets[field][i].Count;
	                                value.from = jsonResult.Facets[field][i].From;
	                                value.to = jsonResult.Facets[field][i].To;
	                                values.push(value);
	                            }
	                            facet.field = field;
	                            facet.values = values;
	                            knowledgeSearchResultFacets.push(facet);
	                        }
	                    }
	                    var knowledgeSearchResultSet = new search.KnowledgeSearchResultSet();
	                    knowledgeSearchResultSet.searchId = jsonResult.SearchId;
	                    knowledgeSearchResultSet.totalResults = jsonResult.TotalResults;
	                    knowledgeSearchResultSet.searchResults = knowledgeSearchResults;
	                    knowledgeSearchResultSet.facets = knowledgeSearchResultFacets;
	                    knowledgeSearchResultSet.instantAnswerJson = jsonResult.AnswerContentJson;
	                    knowledgeSearchResultSet.searchProvider = jsonResult.SearchProvider;
	                    knowledgeSearchResultSet.instantAnswerProvider = jsonResult.InstantAnswerProvider;
	                    knowledgeSearchResultSet.flightIds = flightIds;
	                    knowledgeSearchResultSet.suggestId = jsonResult.SuggestId;
	                    knowledgeSearchResultSet.tenant = jsonResult.CallerId;
	                    searchDeferred.resolve(knowledgeSearchResultSet);
	                }, function (error) {
	                    console.log(error);
	                    searchDeferred.reject(error);
	                });
	                return searchDeferred.promise();
	            }
	            function formSearchParams(config) {
	                if (config.query == undefined) {
	                    throw "Please specify a search query";
	                }
	                var params = {};
	                params.query = config.query;
	                params.locale = config.locale || search.DEFAULT_LOCALE;
	                params.scopes = config.scopes || search.DEFAULT_SCOPE;
	                params.count = config.count || search.DEFAULT_SEARCHRESULTSCOUNT;
	                params.skip = config.skip == undefined ? 0 : config.skip;
	                params.version = config.version || search.DEFAULT_VERSION;
	                params.searchProvider = config.searchProvider;
	                params.instantAnswerProvider = config.instantAnswerProvider;
	                params.includeInstantAnswer = config.includeInstantAnswer;
	                params.includeWebSearchResults = config.includeWebSearchResults;
	                params.enableHitHighlights = config.enableHitHighlights;
	                params.insiderMode = config.insiderMode;
	                params.suggestId = config.suggestId;
	                if (config.version === "6.0") {
	                    if (config.filter != undefined) {
	                        params.filter = removeNullValuePairs(config.filter);
	                    }
	                    if (config.facets != undefined) {
	                        params.facets = removeNullValuePairs(config.facets);
	                    }
	                    if (config.orderBy != undefined) {
	                        params.orderBy = config.orderBy;
	                    }
	                }
	                return params;
	            }
	            function formSearchUrl(config, knowledgeSearch) {
	                var urlBase;
	                if (knowledgeSearch) {
	                    if (config.environment && config.environment.toUpperCase() === "STAGING") {
	                        urlBase = search.BASE_GATEWAYURI_STG;
	                    }
	                    else {
	                        urlBase = search.BASE_GATEWAYURI;
	                    }
	                }
	                else {
	                    if (config.environment && config.environment.toUpperCase() === "STAGING") {
	                        urlBase = search.BASE_URI_STG;
	                    }
	                    else {
	                        urlBase = search.BASE_URI;
	                    }
	                }
	                if (config.version) {
	                    return "https://" + urlBase + "/api/" + config.version + "/" + search.SEARCH_ROUTE;
	                }
	                else {
	                    return "https://" + urlBase + "/api/" + search.SEARCH_ROUTE;
	                }
	            }
	            function flatten(obj, path) {
	                if (path === void 0) { path = ""; }
	                if (!(obj instanceof Object) || (obj instanceof Date))
	                    return _a = {}, _a[path.replace(/\.$/g, "")] = obj, _a;
	                return Object.keys(obj).reduce(function (output, key) {
	                    var rest = obj instanceof Array ?
	                        flatten(obj[key], path.replace(/\.$/g, "") + "[" + key + "].") :
	                        flatten(obj[key], path + key + ".");
	                    return Object.assign({}, output, rest);
	                }, {});
	                var _a;
	            }
	            function convertDatesToStrings(obj) {
	                var copy = Object.assign({}, obj);
	                for (var _i = 0, _a = Object.keys(copy); _i < _a.length; _i++) {
	                    var key = _a[_i];
	                    if (copy[key] instanceof Date)
	                        copy[key] = copy[key].toISOString();
	                }
	                return copy;
	            }
	            function removeNullValuePairs(obj) {
	                var keys = Object.keys(obj).filter(function (key) { return obj[key] != undefined; });
	                var pruned = {};
	                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
	                    var key = keys_1[_i];
	                    pruned[key] = obj[key];
	                }
	                return pruned;
	            }
	        })(search = api.search || (api.search = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var suggest;
	        (function (suggest) {
	            var SuggestResultSet = (function () {
	                function SuggestResultSet() {
	                }
	                return SuggestResultSet;
	            }());
	            suggest.SuggestResultSet = SuggestResultSet;
	            var QuerySuggestion = (function () {
	                function QuerySuggestion() {
	                }
	                return QuerySuggestion;
	            }());
	            suggest.QuerySuggestion = QuerySuggestion;
	        })(suggest = api.suggest || (api.suggest = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var suggest;
	        (function (suggest) {
	            var SuggestConfig = (function () {
	                function SuggestConfig(query, locale, count, tenant, version, componentName) {
	                    this.query = query;
	                    this.locale = locale;
	                    this.count = count;
	                    this.tenant = tenant;
	                    this.version = version;
	                    this.componentName = componentName;
	                }
	                return SuggestConfig;
	            }());
	            suggest.SuggestConfig = SuggestConfig;
	        })(suggest = api.suggest || (api.suggest = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var suggest;
	        (function (suggest) {
	            suggest.BASEURI = "supportsuggest.microsoft.com";
	            suggest.SUGGEST_ROUTE = "suggest/msaas";
	            suggest.DEFAULT_SUGGESTRESULTSCOUNT = 10;
	            suggest.DEFAULT_LOCALE = "en-us";
	            suggest.DEFAULT_SCOPE = "default";
	            suggest.DEFAULT_VERSION = "1.0";
	        })(suggest = api.suggest || (api.suggest = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var api;
	    (function (api) {
	        var suggest;
	        (function (suggest) {
	            var SuggestApi = (function () {
	                function SuggestApi() {
	                }
	                SuggestApi.getSuggestResults = function (config) {
	                    var apiUrl = formSuggestUrl(config);
	                    if (config.componentName == undefined || config.componentName == "") {
	                        config.componentName = "Unspecified";
	                    }
	                    var additionalHeaders = {};
	                    var tenant = config.tenant || internal.SdkConfig.current.partnerId + ":" + internal.SdkConfig.current.appId;
	                    additionalHeaders["x-caller-name"] = tenant;
	                    additionalHeaders["x-caller-component"] = config.componentName;
	                    var cv = internal.telemetry.getCorrelationVector();
	                    if (cv) {
	                        additionalHeaders["ms-cv"] = internal.telemetry.getCorrelationVector();
	                    }
	                    var requestOptions = {
	                        operationName: "api.suggest.getSuggest",
	                        url: apiUrl,
	                        additionalHeaders: additionalHeaders,
	                        dependencyName: "supportsuggest.microsoft.com",
	                        dependencyOperationName: "Get Suggest Results"
	                    };
	                    return getSuggestResultsPromise(config, requestOptions);
	                };
	                return SuggestApi;
	            }());
	            suggest.SuggestApi = SuggestApi;
	            function getSuggestResultsPromise(config, requestOptions) {
	                var suggestDeferred = jQuery.Deferred();
	                internal.utils.httpRequest.get(requestOptions).then(function (jsonResult) {
	                    var suggestResults = new Array();
	                    var flightIds = new Array();
	                    if (jsonResult.Suggestions && jsonResult.Suggestions.length != 0) {
	                        for (var i = 0; i < jsonResult.Suggestions.length; i++) {
	                            var suggestResult = new suggest.QuerySuggestion();
	                            suggestResult.Value = jsonResult.Suggestions[i].Value;
	                            suggestResults.push(suggestResult);
	                        }
	                    }
	                    if (jsonResult.FlightIds && jsonResult.FlightIds.length != 0) {
	                        for (var i = 0; i < jsonResult.FlightIds.length; i++) {
	                            flightIds.push(jsonResult.FlightIds[i]);
	                        }
	                    }
	                    var suggestResultSet = new suggest.SuggestResultSet();
	                    suggestResultSet.SuggestId = jsonResult.SuggestId;
	                    suggestResultSet.FlightIds = flightIds;
	                    suggestResultSet.Tenant = jsonResult.Tenant;
	                    suggestResultSet.ProcessingMs = jsonResult.ProcessingMs;
	                    suggestResultSet.ComponentName = jsonResult.ComponentName;
	                    suggestResultSet.Suggestions = suggestResults;
	                    suggestDeferred.resolve(suggestResultSet);
	                }, function (error) {
	                    console.log(error);
	                    suggestDeferred.reject(error);
	                });
	                return suggestDeferred.promise();
	            }
	            function formSuggestUrl(config) {
	                var queryParams = "";
	                if (config.query == undefined) {
	                    throw "Please specify a suggest query";
	                }
	                queryParams += "?query=" + config.query;
	                if (config.locale == undefined) {
	                    config.locale = suggest.DEFAULT_LOCALE;
	                }
	                queryParams += "&locale=" + config.locale;
	                if (config.count == undefined || config.count == 0) {
	                    config.count = suggest.DEFAULT_SUGGESTRESULTSCOUNT;
	                }
	                queryParams += "&count=" + config.count;
	                if (config.version == undefined || config.version == "") {
	                    config.version = suggest.DEFAULT_VERSION;
	                }
	                return "https://" + suggest.BASEURI + "/api/" + config.version + "/" + suggest.SUGGEST_ROUTE + queryParams;
	            }
	        })(suggest = api.suggest || (api.suggest = {}));
	    })(api = internal.api || (internal.api = {}));
	})(internal || (internal = {}));
	var internal;
	(function (internal) {
	    var ui;
	    (function (ui) {
	        var assistedSupportPlugin;
	        (function (assistedSupportPlugin) {
	            var LOAD_TIMEOUT_MS = 15000;
	            var REPORT_HEIGHT_CHANGE = true;
	            var ASSISTEDSUPPORTPLUGIN_COMPONENT = "AssistedSupportPlugin";
	            function render(config) {
	                return ui.renderComponent(Component, config, ASSISTEDSUPPORTPLUGIN_COMPONENT);
	            }
	            assistedSupportPlugin.render = render;
	            var Component = (function (_super) {
	                __extends(Component, _super);
	                function Component(config) {
	                    return _super.call(this, config, LOAD_TIMEOUT_MS, REPORT_HEIGHT_CHANGE) || this;
	                }
	                Component.prototype.getComponentUrl = function () {
	                    return this.config.pluginUrl;
	                };
	                Component.prototype.getComponentSdk = function () {
	                    return {};
	                };
	                Component.prototype.getXframeProxyUrl = function () {
	                    return internal.utils.getOriginFromUrl(this.getComponentUrl()) + "/xframeproxy/";
	                };
	                return Component;
	            }(ui.UIComponent));
	            assistedSupportPlugin.Component = Component;
	        })(assistedSupportPlugin = ui.assistedSupportPlugin || (ui.assistedSupportPlugin = {}));
	    })(ui = internal.ui || (internal.ui = {}));
	})(internal || (internal = {}));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    if (!window || !document) {
	        throw new Error("bootstrapper requires a window with a document");
	    }
	    function init(config) {
	        return internal.Bootstrapper.init(config);
	    }
	    exports.init = init;
	    exports.version = internal.SdkVersion.version;
	    var api;
	    (function (api) {
	        var modalities;
	        (function (modalities) {
	            modalities.get = internal.api.modalities.API.get;
	            modalities.getv2 = internal.api.modalities.API.getv2;
	            modalities.ModalityConfig = internal.api.modalities.ModalityConfig;
	            modalities.Accessibility = internal.api.modalities.Accessibility;
	            modalities.Availability = internal.api.modalities.Availability;
	            modalities.Environment = internal.SMCEnvironment;
	            modalities.Modality = internal.api.modalities.Modality;
	        })(modalities = api.modalities || (api.modalities = {}));
	    })(api = exports.api || (exports.api = {}));
	    (function (api) {
	        var caseManagement;
	        (function (caseManagement) {
	            caseManagement.getCase = internal.api.caseManagement.CaseManagementApi.getCase;
	        })(caseManagement = api.caseManagement || (api.caseManagement = {}));
	    })(api = exports.api || (exports.api = {}));
	    (function (api) {
	        var search;
	        (function (search) {
	            search.getSearchResults = internal.api.search.SearchApi.getSearchResults;
	            search.postSearchResults = internal.api.search.SearchApi.postSearchResults;
	            search.getKnowledgeSearchResults = internal.api.search.SearchApi.getKnowledgeSearchResults;
	            search.postKnowledgeSearchResults = internal.api.search.SearchApi.postKnowledgeSearchResults;
	            search.HttpMethod = internal.api.search.HttpMethod;
	            search.SearchFacetSortOrder = internal.api.search.SearchFacetSortOrder;
	            search.SearchOrderByFieldNames = internal.api.search.OrderByFieldNames;
	            search.SearchOrderByDirection = internal.api.search.OrderByDirection;
	        })(search = api.search || (api.search = {}));
	    })(api = exports.api || (exports.api = {}));
	    (function (api) {
	        var suggest;
	        (function (suggest) {
	            suggest.getSuggestResults = internal.api.suggest.SuggestApi.getSuggestResults;
	        })(suggest = api.suggest || (api.suggest = {}));
	    })(api = exports.api || (exports.api = {}));
	    var ui;
	    (function (ui) {
	        ui.SurveyType = internal.ui.SurveyType;
	        ui.AuthType = internal.ui.AuthType;
	        ui.HostType = internal.HostType;
	        var chat;
	        (function (chat) {
	            chat.render = internal.ui.chat.render;
	        })(chat = ui.chat || (ui.chat = {}));
	        var callback;
	        (function (callback) {
	            callback.render = internal.ui.callback.render;
	        })(callback = ui.callback || (ui.callback = {}));
	        var scheduleCallback;
	        (function (scheduleCallback) {
	            scheduleCallback.render = internal.ui.scheduleCallback.render;
	        })(scheduleCallback = ui.scheduleCallback || (ui.scheduleCallback = {}));
	        var virtualAgent;
	        (function (virtualAgent) {
	            virtualAgent.render = internal.ui.virtualAgent.render;
	            virtualAgent.Environment = internal.SMCEnvironment;
	        })(virtualAgent = ui.virtualAgent || (ui.virtualAgent = {}));
	        var survey;
	        (function (survey) {
	            survey.createSurvey = internal.ui.survey.createSurvey;
	            survey.OfferState = internal.ui.survey.OfferState;
	        })(survey = ui.survey || (ui.survey = {}));
	        var caseManagement;
	        (function (caseManagement) {
	            var createCase;
	            (function (createCase) {
	                createCase.render = internal.ui.caseManagement.createCase.render;
	            })(createCase = caseManagement.createCase || (caseManagement.createCase = {}));
	            var manageCaseCommunications;
	            (function (manageCaseCommunications) {
	                manageCaseCommunications.render = internal.ui.caseManagement.manageCaseCommunication.render;
	            })(manageCaseCommunications = caseManagement.manageCaseCommunications || (caseManagement.manageCaseCommunications = {}));
	            caseManagement.Environment = internal.SMCEnvironment;
	            caseManagement.WorkflowStep = internal.ui.caseManagement.WorkflowStep;
	        })(caseManagement = ui.caseManagement || (ui.caseManagement = {}));
	        var assistedSupportPlugin;
	        (function (assistedSupportPlugin) {
	            assistedSupportPlugin.render = internal.ui.assistedSupportPlugin.render;
	        })(assistedSupportPlugin = ui.assistedSupportPlugin || (ui.assistedSupportPlugin = {}));
	    })(ui = exports.ui || (exports.ui = {}));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ])
});
;
//# sourceMappingURL=support.sdk.all.js.map