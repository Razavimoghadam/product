/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=scripts/[name].[hash].js!./node_modules/jsstore/dist/jsstore.worker.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=scripts/[name].[hash].js!./node_modules/jsstore/dist/jsstore.worker.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "scripts/jsstore.worker.7e4d1ac9915769cb8bc7fc43c54194c9.js";

/***/ }),

/***/ "./node_modules/jsstore/dist/jsstore.commonjs2.js":
/*!********************************************************!*\
  !*** ./node_modules/jsstore/dist/jsstore.commonjs2.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * @license :jsstore - V4.3.7 - 02/08/2021
 * https://github.com/ujjwalguptaofficial/JsStore
 * Copyright (c) 2021 @Ujjwal Gupta; Licensed MIT
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Connection", function() { return /* reexport */ connection_Connection; });
__webpack_require__.d(__webpack_exports__, "ERROR_TYPE", function() { return /* reexport */ ERROR_TYPE; });
__webpack_require__.d(__webpack_exports__, "WORKER_STATUS", function() { return /* reexport */ WORKER_STATUS; });
__webpack_require__.d(__webpack_exports__, "DATA_TYPE", function() { return /* reexport */ DATA_TYPE; });
__webpack_require__.d(__webpack_exports__, "API", function() { return /* reexport */ API; });
__webpack_require__.d(__webpack_exports__, "EVENT", function() { return /* reexport */ EVENT; });
__webpack_require__.d(__webpack_exports__, "QUERY_OPTION", function() { return /* reexport */ QUERY_OPTION; });
__webpack_require__.d(__webpack_exports__, "IDB_MODE", function() { return /* reexport */ IDB_MODE; });
__webpack_require__.d(__webpack_exports__, "OCCURENCE", function() { return /* reexport */ OCCURENCE; });
__webpack_require__.d(__webpack_exports__, "CONNECTION_STATUS", function() { return /* reexport */ CONNECTION_STATUS; });
__webpack_require__.d(__webpack_exports__, "promise", function() { return /* reexport */ promise; });
__webpack_require__.d(__webpack_exports__, "promiseAll", function() { return /* reexport */ promiseAll; });
__webpack_require__.d(__webpack_exports__, "promiseResolve", function() { return /* reexport */ promiseResolve; });
__webpack_require__.d(__webpack_exports__, "forObj", function() { return /* reexport */ forObj; });

// CONCATENATED MODULE: ./src/main/log_helper.ts
var LogHelper = /** @class */ (function () {
    function LogHelper(type, info) {
        this.type = type;
        this._info = info;
        this.message = this.getMsg();
    }
    LogHelper.prototype.throw = function () {
        throw this;
    };
    LogHelper.prototype.log = function (msg) {
        if (this.status) {
            console.log(msg);
        }
    };
    LogHelper.prototype.logError = function () {
        console.error(this.get());
    };
    LogHelper.prototype.logWarning = function () {
        console.warn(this.get());
    };
    LogHelper.prototype.get = function () {
        return {
            message: this.message,
            type: this.type
        };
    };
    LogHelper.prototype.getMsg = function () {
        var errMsg;
        switch (this.type) {
            default:
                errMsg = this.message;
                break;
        }
        return errMsg;
    };
    return LogHelper;
}());


// CONCATENATED MODULE: ./src/common/enums.ts
var ERROR_TYPE;
(function (ERROR_TYPE) {
    ERROR_TYPE["InvalidUpdateColumn"] = "invalid_update_column";
    ERROR_TYPE["UndefinedColumn"] = "undefined_column";
    ERROR_TYPE["UndefinedValue"] = "undefined_value";
    ERROR_TYPE["UndefinedColumnName"] = "undefined_column_name";
    ERROR_TYPE["UndefinedDbName"] = "undefined_database_name";
    ERROR_TYPE["UndefinedColumnValue"] = "undefined_column_value";
    ERROR_TYPE["NotArray"] = "not_array";
    ERROR_TYPE["NoValueSupplied"] = "no_value_supplied";
    ERROR_TYPE["ColumnNotExist"] = "column_not_exist";
    ERROR_TYPE["EnableSearchOff"] = "enable_search_off";
    ERROR_TYPE["InvalidOp"] = "invalid_operator";
    ERROR_TYPE["NullValue"] = "null_value";
    ERROR_TYPE["WrongDataType"] = "wrong_data_type";
    ERROR_TYPE["TableNotExist"] = "table_not_exist";
    ERROR_TYPE["DbNotExist"] = "db_not_exist";
    ERROR_TYPE["ConnectionAborted"] = "connection_aborted";
    ERROR_TYPE["ConnectionClosed"] = "connection_closed";
    ERROR_TYPE["NotObject"] = "not_object";
    ERROR_TYPE["InvalidConfig"] = "invalid_config";
    ERROR_TYPE["DbBlocked"] = "Db_blocked";
    ERROR_TYPE["IndexedDbNotSupported"] = "indexeddb_not_supported";
    ERROR_TYPE["NullValueInWhere"] = "null_value_in_where";
    ERROR_TYPE["InvalidJoinQuery"] = "invalid_join_query";
    ERROR_TYPE["InvalidOrderQuery"] = "invalid_order_query";
    ERROR_TYPE["InvalidQuery"] = "invalid_query";
    ERROR_TYPE["InvalidGroupQuery"] = "invalid_group_query";
    ERROR_TYPE["ImportScriptsFailed"] = "import_scripts_failed";
    ERROR_TYPE["MethodNotExist"] = "method_not_exist";
    ERROR_TYPE["Unknown"] = "unknown";
    ERROR_TYPE["InvalidMiddleware"] = "invalid_middleware";
})(ERROR_TYPE || (ERROR_TYPE = {}));
var WORKER_STATUS;
(function (WORKER_STATUS) {
    WORKER_STATUS["Registered"] = "registerd";
    WORKER_STATUS["Failed"] = "failed";
    WORKER_STATUS["NotStarted"] = "not_started";
})(WORKER_STATUS || (WORKER_STATUS = {}));
var DATA_TYPE;
(function (DATA_TYPE) {
    DATA_TYPE["String"] = "string";
    DATA_TYPE["Object"] = "object";
    DATA_TYPE["Array"] = "array";
    DATA_TYPE["Number"] = "number";
    DATA_TYPE["Boolean"] = "boolean";
    DATA_TYPE["Null"] = "null";
    DATA_TYPE["DateTime"] = "date_time";
})(DATA_TYPE || (DATA_TYPE = {}));
var API;
(function (API) {
    API["InitDb"] = "init_db";
    API["Get"] = "get";
    API["Set"] = "set";
    API["Select"] = "select";
    API["Insert"] = "insert";
    API["Update"] = "update";
    API["Remove"] = "remove";
    API["OpenDb"] = "open_db";
    API["Clear"] = "clear";
    API["DropDb"] = "drop_db";
    API["Count"] = "count";
    API["ChangeLogStatus"] = "change_log_status";
    API["Terminate"] = "terminate";
    API["Transaction"] = "transaction";
    API["CloseDb"] = "close_db";
    API["Union"] = "union";
    API["Intersect"] = "intersect";
    API["ImportScripts"] = "import_scripts";
    API["Middleware"] = "middleware";
})(API || (API = {}));
var EVENT;
(function (EVENT) {
    EVENT["RequestQueueEmpty"] = "requestQueueEmpty";
    EVENT["RequestQueueFilled"] = "requestQueueFilled";
    EVENT["Upgrade"] = "upgrade";
    EVENT["Create"] = "create";
    EVENT["Open"] = "open";
})(EVENT || (EVENT = {}));
var QUERY_OPTION;
(function (QUERY_OPTION) {
    QUERY_OPTION["Where"] = "where";
    QUERY_OPTION["Like"] = "like";
    QUERY_OPTION["Regex"] = "regex";
    QUERY_OPTION["In"] = "in";
    QUERY_OPTION["Equal"] = "=";
    QUERY_OPTION["Between"] = "-";
    QUERY_OPTION["GreaterThan"] = ">";
    QUERY_OPTION["LessThan"] = "<";
    QUERY_OPTION["GreaterThanEqualTo"] = ">=";
    QUERY_OPTION["LessThanEqualTo"] = "<=";
    QUERY_OPTION["NotEqualTo"] = "!=";
    QUERY_OPTION["Aggregate"] = "aggregate";
    QUERY_OPTION["Max"] = "max";
    QUERY_OPTION["Min"] = "min";
    QUERY_OPTION["Avg"] = "avg";
    QUERY_OPTION["Count"] = "count";
    QUERY_OPTION["Sum"] = "sum";
    QUERY_OPTION["Or"] = "or";
    QUERY_OPTION["Skip"] = "skip";
    QUERY_OPTION["Limit"] = "limit";
    QUERY_OPTION["And"] = "and";
    QUERY_OPTION["IgnoreCase"] = "ignoreCase";
    QUERY_OPTION["Then"] = "then";
})(QUERY_OPTION || (QUERY_OPTION = {}));
var IDB_MODE;
(function (IDB_MODE) {
    IDB_MODE["ReadOnly"] = "readonly";
    IDB_MODE["ReadWrite"] = "readwrite";
})(IDB_MODE || (IDB_MODE = {}));
var OCCURENCE;
(function (OCCURENCE) {
    OCCURENCE["First"] = "f";
    OCCURENCE["Last"] = "l";
    OCCURENCE["Any"] = "a";
})(OCCURENCE || (OCCURENCE = {}));
var CONNECTION_STATUS;
(function (CONNECTION_STATUS) {
    CONNECTION_STATUS["Connected"] = "connected";
    CONNECTION_STATUS["Closed"] = "closed";
    CONNECTION_STATUS["NotStarted"] = "not_started";
    CONNECTION_STATUS["UnableToStart"] = "unable_to_start";
    CONNECTION_STATUS["ClosedByJsStore"] = "closed_by_jsstore";
})(CONNECTION_STATUS || (CONNECTION_STATUS = {}));

// CONCATENATED MODULE: ./src/common/utils/promise.ts
var promise = function (cb) {
    return new Promise(cb);
};

// CONCATENATED MODULE: ./src/common/utils/promise_resolve.ts
var promiseResolve = function (value) {
    return Promise.resolve(value);
};

// CONCATENATED MODULE: ./src/main/event_bus.ts
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var EventBus = /** @class */ (function () {
    function EventBus(ctx) {
        this._events = {};
        this._ctx = ctx;
    }
    EventBus.prototype.on = function (event, cb) {
        if (this._events[event] == null) {
            this._events[event] = [];
        }
        this._events[event].push(cb);
        return this;
    };
    EventBus.prototype.off = function (event, cb) {
        if (this._events[event]) {
            if (cb) {
                var index = this._events[event].indexOf(cb);
                this._events[event].splice(index, 1);
            }
            else {
                this._events[event] = [];
            }
        }
    };
    EventBus.prototype.emit = function (event) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var events = this._events[event] || [];
        var index = 0;
        var length = events.length;
        var results = [];
        var callMethod = function () {
            var eventCb = events[index++];
            if (eventCb) {
                var result = eventCb.call.apply(eventCb, __spreadArray([_this._ctx], args));
                return result && result.then ? result : Promise.resolve(result);
            }
        };
        return new Promise(function (res) {
            var checkAndCall = function () {
                if (index < length) {
                    callMethod().then(function (result) {
                        results.push(result);
                        checkAndCall();
                    });
                }
                else {
                    res(results);
                }
            };
            checkAndCall();
        });
    };
    EventBus.prototype.destroy = function () {
        this._events = null;
        this._ctx = null;
    };
    return EventBus;
}());


// CONCATENATED MODULE: ./src/main/connection_helper.ts



var connection_helper_ConnectionHelper = /** @class */ (function () {
    function ConnectionHelper(worker) {
        this.isConOpened_ = false;
        this.isDbIdle_ = true;
        this.requestQueue_ = [];
        this.isCodeExecuting_ = false;
        this.inactivityTimer_ = -1000;
        this.middlewares = [];
        this.eventBus_ = new EventBus(this);
        // these apis have special permissions. These apis dont wait for database open.
        this.whiteListApi_ = [
            API.InitDb,
            API.OpenDb,
            API.Get,
            API.Set,
            API.ChangeLogStatus,
            API.Terminate,
            API.DropDb
        ];
        this.isWorker = true;
        this.logger = new LogHelper(null);
        if (worker) {
            this.worker_ = worker;
            this.worker_.onmessage = this.onMessageFromWorker_.bind(this);
        }
        else {
            this.isWorker = false;
            this.initQueryManager_();
        }
    }
    Object.defineProperty(ConnectionHelper.prototype, "jsstoreWorker", {
        get: function () {
            return this.$worker || self['JsStoreWorker'];
        },
        enumerable: false,
        configurable: true
    });
    ConnectionHelper.prototype.initQueryManager_ = function () {
        var workerRef = this.jsstoreWorker;
        if (workerRef) {
            this.queryManager = new workerRef.QueryManager(this.processFinishedQuery_.bind(this));
        }
    };
    ConnectionHelper.prototype.onMessageFromWorker_ = function (msg) {
        this.processFinishedQuery_(msg.data);
    };
    ConnectionHelper.prototype.processFinishedQuery_ = function (message) {
        var finishedRequest = this.requestQueue_.shift();
        if (finishedRequest) {
            this.logger.log("request " + finishedRequest.name + " finished");
            if (message.error) {
                finishedRequest.onError(message.error);
            }
            else {
                switch (finishedRequest.name) {
                    case API.OpenDb:
                    case API.InitDb:
                        this.isConOpened_ = true;
                        break;
                    case API.Terminate:
                        this.isConOpened_ = false;
                        if (this.isWorker === true) {
                            this.worker_.terminate();
                        }
                    case API.DropDb:
                        this.isConOpened_ = false;
                        this.requestQueue_ = [];
                        this.isDbIdle_ = true;
                        break;
                    case API.CloseDb:
                        if (this.requestQueue_.length > 0) {
                            this.openDb_();
                        }
                        else {
                            this.isDbIdle_ = true;
                            this.eventBus_.emit(EVENT.RequestQueueEmpty, []);
                        }
                        break;
                }
                finishedRequest.onSuccess(message.result);
            }
            this.isCodeExecuting_ = false;
            this.executeQry_();
        }
    };
    ConnectionHelper.prototype.openDb_ = function () {
        this.prcoessExecutionOfQry_({
            name: API.OpenDb,
            query: {
                name: this.database.name,
                version: this.database.version
            },
            onSuccess: function () {
            },
            onError: function (err) {
                console.error(err);
            }
        }, 0);
    };
    ConnectionHelper.prototype.executeMiddleware_ = function (input) {
        var _this = this;
        return promise(function (res) {
            var index = 0;
            var lastIndex = _this.middlewares.length - 1;
            var callNextMiddleware = function () {
                if (index <= lastIndex) {
                    var promiseResult = _this.middlewares[index++](input);
                    if (!promiseResult || !promiseResult.then) {
                        promiseResult = promiseResolve(promiseResult);
                    }
                    promiseResult.then(function (_) {
                        callNextMiddleware();
                    });
                }
                else {
                    res();
                }
            };
            callNextMiddleware();
        });
    };
    ConnectionHelper.prototype.callResultMiddleware = function (middlewares, result) {
        return promise(function (res) {
            var index = 0;
            var lastIndex = middlewares.length - 1;
            var callNextMiddleware = function () {
                if (index <= lastIndex) {
                    var promiseResult = middlewares[index++](result);
                    if (!promiseResult.then) {
                        promiseResult = promiseResolve(promiseResult);
                    }
                    promiseResult.then(function (modifiedResult) {
                        result = modifiedResult;
                        callNextMiddleware();
                    });
                }
                else {
                    res(result);
                }
            };
            callNextMiddleware();
        });
    };
    ConnectionHelper.prototype.pushApi = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var middlewares = [];
            request.onResult = function (cb) {
                middlewares.push(function (result) {
                    return cb(result);
                });
            };
            _this.executeMiddleware_(request).then(function () {
                request.onSuccess = function (result) {
                    _this.callResultMiddleware(middlewares, result).then(function (modifiedResult) {
                        resolve(modifiedResult);
                    }).catch(function (err) {
                        request.onError(err);
                    });
                };
                request.onError = function (err) {
                    middlewares = [];
                    reject(err);
                };
                if (_this.requestQueue_.length === 0) {
                    _this.eventBus_.emit(EVENT.RequestQueueFilled, []);
                    var isConnectionApi = [API.CloseDb, API.DropDb, API.OpenDb, API.Terminate].indexOf(request.name) >= 0;
                    if (!isConnectionApi && _this.isDbIdle_ && _this.isConOpened_) {
                        _this.openDb_();
                    }
                    else {
                        clearTimeout(_this.inactivityTimer_);
                    }
                }
                _this.prcoessExecutionOfQry_(request);
            }).catch(reject);
        });
    };
    ConnectionHelper.prototype.prcoessExecutionOfQry_ = function (request, index) {
        this.isDbIdle_ = false;
        if (index != null) {
            this.requestQueue_.splice(index, 0, request);
        }
        else {
            this.requestQueue_.push(request);
        }
        this.logger.log("request pushed: " + request.name);
        this.executeQry_();
    };
    ConnectionHelper.prototype.executeQry_ = function () {
        var _this = this;
        var requestQueueLength = this.requestQueue_.length;
        if (!this.isCodeExecuting_ && requestQueueLength > 0) {
            if (this.isConOpened_ === true) {
                this.sendRequestToWorker_(this.requestQueue_[0]);
                return;
            }
            var allowedQueryIndex = this.requestQueue_.findIndex(function (item) { return _this.whiteListApi_.indexOf(item.name) >= 0; });
            // shift allowed query to zeroth index
            if (allowedQueryIndex >= 0) {
                this.requestQueue_.splice(0, 0, this.requestQueue_.splice(allowedQueryIndex, 1)[0]);
                this.sendRequestToWorker_(this.requestQueue_[0]);
            }
        }
        else if (requestQueueLength === 0 && this.isDbIdle_ === false && this.isConOpened_) {
            this.inactivityTimer_ = setTimeout(function () {
                _this.prcoessExecutionOfQry_({
                    name: API.CloseDb,
                    onSuccess: function () {
                    },
                    onError: function (err) {
                        console.error(err);
                    }
                });
            }, 100);
        }
    };
    ConnectionHelper.prototype.sendRequestToWorker_ = function (request) {
        this.isCodeExecuting_ = true;
        this.logger.log("request executing: " + request.name);
        var requestForWorker = {
            name: request.name,
            query: request.query
        };
        if (this.isWorker === true) {
            this.worker_.postMessage(requestForWorker);
        }
        else {
            this.queryManager.run(requestForWorker);
        }
    };
    return ConnectionHelper;
}());


// CONCATENATED MODULE: ./src/main/connection.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var connection_Connection = /** @class */ (function (_super) {
    __extends(Connection, _super);
    function Connection(worker) {
        return _super.call(this, worker) || this;
    }
    /**
     * initiate DataBase
     *
     * @param {IDataBase} dataBase
     * @returns
     * @memberof Connection
     */
    Connection.prototype.initDb = function (dataBase) {
        var _this = this;
        this.database = dataBase;
        return this.pushApi({
            name: API.InitDb,
            query: dataBase
        }).then(function (result) {
            var promiseObj;
            var db = result.database;
            if (result.isCreated) {
                if (result.oldVersion) {
                    promiseObj = _this.eventBus_.emit(EVENT.Upgrade, db, result.oldVersion, result.newVersion);
                }
                else {
                    promiseObj = _this.eventBus_.emit(EVENT.Create, db);
                }
            }
            return (promiseObj || promiseResolve()).then(function (_) {
                return _this.eventBus_.emit(EVENT.Open, db);
            }).then(function (_) {
                return result.isCreated;
            });
        });
    };
    /**
     * drop dataBase
     *
     * @returns
     * @memberof Connection
     */
    Connection.prototype.dropDb = function () {
        return this.pushApi({
            name: API.DropDb
        });
    };
    /**
     * select data from table
     *
     * @template T
     * @param {ISelectQuery} query
     * @returns
     * @memberof Connection
     */
    Connection.prototype.select = function (query) {
        return this.pushApi({
            name: API.Select,
            query: query
        });
    };
    /**
     * get no of record from table
     *
     * @param {ICountQuery} query
     * @returns
     * @memberof Connection
     */
    Connection.prototype.count = function (query) {
        return this.pushApi({
            name: API.Count,
            query: query
        });
    };
    /**
     * insert data into table
     *
     * @template T
     * @param {IInsertQuery} query
     * @returns
     * @memberof Connection
     */
    Connection.prototype.insert = function (query) {
        return this.pushApi({
            name: API.Insert,
            query: query
        });
    };
    /**
     * update data into table
     *
     * @param {IUpdateQuery} query
     * @returns
     * @memberof Connection
     */
    Connection.prototype.update = function (query) {
        return this.pushApi({
            name: API.Update,
            query: query
        });
    };
    /**
     * remove data from table
     *
     * @param {IRemoveQuery} query
     * @returns
     * @memberof Connection
     */
    Connection.prototype.remove = function (query) {
        return this.pushApi({
            name: API.Remove,
            query: query
        });
    };
    /**
     * delete all data from table
     *
     * @param {string} tableName
     * @returns
     * @memberof Connection
     */
    Connection.prototype.clear = function (tableName) {
        return this.pushApi({
            name: API.Clear,
            query: tableName
        });
    };
    Object.defineProperty(Connection.prototype, "logStatus", {
        /**
         * set log status
         *
         * @param {boolean} status
         * @memberof Connection
         */
        set: function (status) {
            this.logger.status = status;
            this.pushApi({
                name: API.ChangeLogStatus,
                query: status
            });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * open database
     *
     * @param {string} dbName
     * @returns
     * @memberof Connection
     */
    Connection.prototype.openDb = function (dbName, version) {
        var _this = this;
        return this.pushApi({
            name: API.OpenDb,
            query: {
                version: version,
                name: dbName
            }
        }).then(function (dataBase) {
            _this.database = dataBase;
            return dataBase;
        });
    };
    /**
     * returns list of database created
     *
     * @returns
     * @memberof Connection
     */
    Connection.prototype.getDbList = function () {
        console.warn("Api getDbList is recommended to use for debugging only. Do not use in code.");
        return indexedDB.databases();
    };
    /**
     * get the value from keystore table
     *
     * @template T
     * @param {string} key
     * @returns
     * @memberof Connection
     */
    Connection.prototype.get = function (key) {
        return this.pushApi({
            name: API.Get,
            query: key
        });
    };
    /**
     * set the value in keystore table
     *
     * @param {string} key
     * @param {*} value
     * @returns
     * @memberof Connection
     */
    Connection.prototype.set = function (key, value) {
        return this.pushApi({
            name: API.Set,
            query: {
                key: key, value: value
            }
        });
    };
    /**
     * terminate the connection
     *
     * @returns
     * @memberof Connection
     */
    Connection.prototype.terminate = function () {
        return this.pushApi({
            name: API.Terminate
        });
    };
    /**
     * execute transaction
     *
     * @template T
     * @param {ITranscationQuery} query
     * @returns
     * @memberof Connection
     */
    Connection.prototype.transaction = function (query) {
        return this.pushApi({
            name: API.Transaction,
            query: query
        });
    };
    Connection.prototype.on = function (event, eventCallBack) {
        this.eventBus_.on(event, eventCallBack);
    };
    Connection.prototype.off = function (event, eventCallBack) {
        this.eventBus_.off(event, eventCallBack);
    };
    Connection.prototype.union = function (query) {
        return this.pushApi({
            name: API.Union,
            query: query
        });
    };
    Connection.prototype.intersect = function (query) {
        return this.pushApi({
            name: API.Intersect,
            query: query
        });
    };
    Connection.prototype.addPlugin = function (plugin, params) {
        return plugin.setup(this, params);
    };
    Connection.prototype.addMiddleware = function (middleware, forWorker) {
        if (forWorker) {
            return this.pushApi({
                name: API.Middleware,
                query: middleware
            });
        }
        this.middlewares.push(middleware);
        return Promise.resolve();
    };
    /**
     * import scripts in jsstore web worker.
     * Scripts method can be called using transaction api.
     *
     * @param {...string[]} urls
     * @returns
     * @memberof Connection
     */
    Connection.prototype.importScripts = function () {
        var urls = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            urls[_i] = arguments[_i];
        }
        return this.pushApi({
            name: API.ImportScripts,
            query: urls
        });
    };
    return Connection;
}(connection_helper_ConnectionHelper));


// CONCATENATED MODULE: ./src/common/utils/promise_all.ts
var promiseAll = function (promises) {
    return Promise.all(promises);
};

// CONCATENATED MODULE: ./src/common/utils/for_obj.ts
var forObj = function (obj, cb) {
    for (var key in obj) {
        cb(key, obj[key]);
    }
};

// CONCATENATED MODULE: ./src/common/utils/index.ts





// CONCATENATED MODULE: ./src/common/index.ts





// CONCATENATED MODULE: ./src/main/index.ts




/***/ })

/******/ });
//# sourceMappingURL=jsstore.commonjs2.js.map

/***/ }),

/***/ "./node_modules/jsstore/dist/npm.export.js":
/*!*************************************************!*\
  !*** ./node_modules/jsstore/dist/npm.export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {}
else {
    module.exports = __webpack_require__(/*! ./jsstore.commonjs2.js */ "./node_modules/jsstore/dist/jsstore.commonjs2.js");
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./resources/assets/dashboard/js/database/base/base_services.js":
/*!**********************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/base/base_services.js ***!
  \**********************************************************************/
/*! exports provided: BaseServicesDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseServicesDB", function() { return BaseServicesDB; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsstore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsstore */ "./node_modules/jsstore/dist/npm.export.js");
/* harmony import */ var jsstore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsstore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./resources/assets/dashboard/js/database/index.js");
/* harmony import */ var _public_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public_classes */ "./resources/assets/dashboard/js/database/base/public_classes.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import {UserDealerServices} from "../model_services/user_dealer_services";

var getWorkerPath = function getWorkerPath() {
  if (true) {
    return __webpack_require__(/*! file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js */ "./node_modules/file-loader/dist/cjs.js?name=scripts/[name].[hash].js!./node_modules/jsstore/dist/jsstore.worker.js");
  } else {}
}; // This will ensure that we are using only one instance.
// Otherwise due to multiple instance multiple worker will be created.


var workerPath = getWorkerPath();

var getDatabase = function getDatabase(dbname) {
  /*// Table barcodes
  const tblBarcodes: ITable = {
      name: 'barcodes',
      columns: {
          id: {
              /!*primaryKey: true,
              autoIncrement: false*!/
              dataType: DATA_TYPE.Number,
              unique: true
           },
          barcodeable_type: {
              dataType: DATA_TYPE.String
          },
          barcodeable_id: {
              dataType: DATA_TYPE.Number,
          },
          barcode: {
              notNull: true,
              dataType: DATA_TYPE.String,
              unique: true
          },
          revision: {
              notNull: true,
              dataType: DATA_TYPE.Number,
              default: 1
          },
          status : {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'none'
          },
          last_modified_by: {
              dataType: DATA_TYPE.Number,
          },
          created_at: {
              dataType: DATA_TYPE.String, // date time,
          },
          updated_at: {
              dataType: DATA_TYPE.String, // date time,
          },
      }
  };
  // Table categories
  const tblCategories: ITable = {
      name: 'categories',
      columns: {
          id: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          number: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          revision: {
              notNull: true,
              dataType: DATA_TYPE.Number,
              default: 1
          },
          status : {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'none'
          },
          last_modified_by: {
              dataType: DATA_TYPE.Number,
          },
          created_at: {
              dataType: DATA_TYPE.String, // date time,
          },
          updated_at: {
              dataType: DATA_TYPE.String, // date time,
          },
      }
  };
  // Table companies
  const tblCompanies: ITable = {
      name: 'companies',
      columns: {
          id: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          name: {
              notNull: true,
              dataType: DATA_TYPE.String
          },
          dealer_type: {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'company'
          },
          web_site_name: {
              dataType: DATA_TYPE.String
          },
          open: {
              dataType: DATA_TYPE.String, // date time
          },
          logo: {
              dataType: DATA_TYPE.String
          },
          national_ID: {
              dataType: DATA_TYPE.String,
              unique: true
          },
          registration_number: {
              dataType: DATA_TYPE.String,
              unique: true
          },
          economical_number: {
              dataType: DATA_TYPE.String,
              unique: true
          },
          managing_director: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          revision: {
              notNull: true,
              dataType: DATA_TYPE.Number,
              default: 1
          },
          status : {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'none'
          },
          last_modified_by: {
              dataType: DATA_TYPE.Number,
          },
          created_at: {
              dataType: DATA_TYPE.String, // date time,
          },
          updated_at: {
              dataType: DATA_TYPE.String, // date time,
          },
      }
  };
  // Table currencies
  const tblCurrencies: ITable = {
      name: 'currencies',
      columns: {
          id: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          name: {
              notNull: true,
              dataType: DATA_TYPE.String
          },
          code: {
              notNull: true,
              dataType: DATA_TYPE.String,
              unique: true
          },
          symbol: {
              notNull: true,
              dataType: DATA_TYPE.String
          },
          format: {
              notNull: true,
              dataType: DATA_TYPE.String
          },
          exchange_rate: {
              notNull: true,
              dataType: DATA_TYPE.String
          },
          active: {
              notNull: true,
              dataType: DATA_TYPE.Boolean,
              default: false
          },
          revision: {
              notNull: true,
              dataType: DATA_TYPE.Number,
              default: 1
          },
          status : {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'none'
          },
          last_modified_by: {
              dataType: DATA_TYPE.Number,
          },
          created_at: {
              dataType: DATA_TYPE.String, // date time,
          },
          updated_at: {
              dataType: DATA_TYPE.String, // date time,
          },
      }
  };
  // Table factories
  const tblFactories: ITable = {
      name: 'factories',
      columns: {
          id: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          name: {
              notNull: true,
              dataType: DATA_TYPE.String
          },
          dealer_type: {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'factory'
          },
          web_site_name: {
              dataType: DATA_TYPE.String
          },
          open: {
              dataType: DATA_TYPE.String, // date time
          },
          logo: {
              dataType: DATA_TYPE.String
          },
          national_ID: {
              dataType: DATA_TYPE.String,
              unique: true
          },
          registration_number: {
              dataType: DATA_TYPE.String,
              unique: true
          },
          economical_number: {
              dataType: DATA_TYPE.String,
              unique: true
          },
          managing_director: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          revision: {
              notNull: true,
              dataType: DATA_TYPE.Number,
              default: 1
          },
          status : {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'none'
          },
          last_modified_by: {
              dataType: DATA_TYPE.Number,
          },
          created_at: {
              dataType: DATA_TYPE.String, // date time,
          },
          updated_at: {
              dataType: DATA_TYPE.String, // date time,
          },
      }
  };
  // Table package_types
  const tblPackageTypes: ITable = {
      name: 'package_types',
      columns: {
          id: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          name: {
              notNull: true,
              dataType: DATA_TYPE.String
          },
          entered_by: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          revision: {
              notNull: true,
              dataType: DATA_TYPE.Number,
              default: 1
          },
          status : {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'none'
          },
          last_modified_by: {
              dataType: DATA_TYPE.Number,
          },
          created_at: {
              dataType: DATA_TYPE.String, // date time,
          },
          updated_at: {
              dataType: DATA_TYPE.String, // date time,
          },
      }
  };
  // Table products
  const tblProducts: ITable = {
      name: 'products',
      columns: {
          id: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          name: {
              notNull: true,
              dataType: DATA_TYPE.String
          },
          scale: {
              dataType: DATA_TYPE.Number
          },
          product_type_id: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          dealerable_type: {
              dataType: DATA_TYPE.String
          },
          dealerable_id: {
              dataType: DATA_TYPE.Number
          },
          discount_percent: {
              dataType: DATA_TYPE.Number,
              default: '0.00'
          },
          vat_percent: {
              dataType: DATA_TYPE.Number,
              default: '0.00'
          },
          enabled: {
              notNull: true,
              dataType: DATA_TYPE.Boolean,
              default: true
          },
          description: {
              dataType: DATA_TYPE.String
          },
          revision: {
              notNull: true,
              dataType: DATA_TYPE.Number,
              default: 1
          },
          status : {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'none'
          },
          last_modified_by: {
              dataType: DATA_TYPE.Number,
          },
          created_at: {
              dataType: DATA_TYPE.String, // date time,
          },
          updated_at: {
              dataType: DATA_TYPE.String, // date time,
          },
      }
  };
  // Table product_show_room
  const tblProductShowroom: ITable = {
      name: 'product_show_room',
      columns: {
          id: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          product_id: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          show_room_id: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          package_type_id: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          quantity: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          no_of_items_in_package: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          item_package_type_id: {
              notNull: true,
              dataType: DATA_TYPE.Number,
          },
          station_id: {
              notNull: true,
              dataType: DATA_TYPE.Number,
          },
          revision: {
              notNull: true,
              dataType: DATA_TYPE.Number,
              default: 1
          },
          status : {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'none'
          },
          last_modified_by: {
              dataType: DATA_TYPE.Number,
          },
          created_at: {
              dataType: DATA_TYPE.String, // date time,
          },
          updated_at: {
              dataType: DATA_TYPE.String, // date time,
          },
      }
  };
  // Table product_store
  const tblProductStore: ITable = {
      name: 'product_store',
      columns: {
          id: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          product_id: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          store_id: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          package_type_id: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          quantity: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          no_of_items_in_package: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          item_package_type_id: {
              notNull: true,
              dataType: DATA_TYPE.Number,
          },
          station_id: {
              notNull: true,
              dataType: DATA_TYPE.Number,
          },
          revision: {
              notNull: true,
              dataType: DATA_TYPE.Number,
              default: 1
          },
          status : {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'none'
          },
          last_modified_by: {
              dataType: DATA_TYPE.Number,
          },
          created_at: {
              dataType: DATA_TYPE.String, // date time,
          },
          updated_at: {
              dataType: DATA_TYPE.String, // date time,
          },
      }
  };
  // Table product_types
  const tblProductTypes: ITable = {
      name: 'product_types',
      columns: {
          id: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          name: {
              notNull: true,
              dataType: DATA_TYPE.String
          },
          entered_by: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          revision: {
              notNull: true,
              dataType: DATA_TYPE.Number,
              default: 1
          },
          status : {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'none'
          },
          last_modified_by: {
              dataType: DATA_TYPE.Number,
          },
          created_at: {
              dataType: DATA_TYPE.String, // date time,
          },
          updated_at: {
              dataType: DATA_TYPE.String, // date time,
          },
      }
  };
  // Table retail_prices
  const tblRetailPrices: ITable = {
      name: 'retail_prices',
      columns: {
          id: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          name: {
              notNull: true,
              dataType: DATA_TYPE.String
          },
          product_id: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          currency_id: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          package_type_id: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          retail_price: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          no_of_items_in_package: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          item_package_type_id: {
              notNull: true,
              dataType: DATA_TYPE.Number,
          },
          default: {
              notNull: true,
              dataType: DATA_TYPE.Boolean,
              default: false
          },
          enabled: {
              notNull: true,
              dataType: DATA_TYPE.Boolean,
              default: true
          },
          revision: {
              notNull: true,
              dataType: DATA_TYPE.Number,
              default: 1
          },
          status : {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'none'
          },
          last_modified_by: {
              dataType: DATA_TYPE.Number,
          },
          created_at: {
              dataType: DATA_TYPE.String, // date time,
          },
          updated_at: {
              dataType: DATA_TYPE.String, // date time,
          },
      }
  };
  // Table shops
  const tblShops: ITable = {
      name: 'shops',
      columns: {
          id: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          name: {
              notNull: true,
              dataType: DATA_TYPE.String
          },
          dealer_type: {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'shop'
          },
          web_site_name: {
              dataType: DATA_TYPE.String
          },
          open: {
              dataType: DATA_TYPE.String, // date time
          },
          logo: {
              dataType: DATA_TYPE.String
          },
          revision: {
              notNull: true,
              dataType: DATA_TYPE.Number,
              default: 1
          },
          status : {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'none'
          },
          last_modified_by: {
              dataType: DATA_TYPE.Number,
          },
          created_at: {
              dataType: DATA_TYPE.String, // date time,
          },
          updated_at: {
              dataType: DATA_TYPE.String, // date time,
          },
      }
  };
  // Table show_rooms
  const tblShowrooms: ITable = {
      name: 'show_rooms',
      columns: {
          id: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          name: {
              notNull: true,
              unique: true,
              dataType: DATA_TYPE.String
          },
          no_of_vertical_lines: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          no_of_horizontal_lines: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          no_of_shelves: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          no_of_rows: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          no_of_shelves_left: {
              notNull: true,
              dataType: DATA_TYPE.Number,
          },
          no_of_shelves_right: {
              notNull: true,
              dataType: DATA_TYPE.Number,
          },
          no_of_shelves_horizontal: {
              notNull: true,
              dataType: DATA_TYPE.Number,
          },
          shelf_head: {
              notNull: true,
              dataType: DATA_TYPE.String
          },
          revision: {
              notNull: true,
              dataType: DATA_TYPE.Number,
              default: 1
          },
          status : {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'none'
          },
          last_modified_by: {
              dataType: DATA_TYPE.Number,
          },
          created_at: {
              dataType: DATA_TYPE.String, // date time,
          },
          updated_at: {
              dataType: DATA_TYPE.String, // date time,
          },
      }
  };
  // Table stations
  const tblStations: ITable = {
      name: 'stations',
      columns: {
          id: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          line_type: {
              notNull: true,
              dataType: DATA_TYPE.String
          },
          line_number: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          side_type: {
              notNull: true,
              dataType: DATA_TYPE.String
          },
          category_id: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          subcategory_id: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          revision: {
              notNull: true,
              dataType: DATA_TYPE.Number,
              default: 1
          },
          status : {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'none'
          },
          last_modified_by: {
              dataType: DATA_TYPE.Number,
          },
          created_at: {
              dataType: DATA_TYPE.String, // date time,
          },
          updated_at: {
              dataType: DATA_TYPE.String, // date time,
          },
      }
  };
  // Table stores
  const tblStores: ITable = {
      name: 'stores',
      columns: {
          id: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          name: {
              notNull: true,
              unique: true,
              dataType: DATA_TYPE.String
          },
          no_of_vertical_lines: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          no_of_horizontal_lines: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          no_of_shelves: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          no_of_rows: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          no_of_shelves_left: {
              notNull: true,
              dataType: DATA_TYPE.Number,
          },
          no_of_shelves_right: {
              notNull: true,
              dataType: DATA_TYPE.Number,
          },
          no_of_shelves_horizontal: {
              notNull: true,
              dataType: DATA_TYPE.Number,
          },
          shelf_head: {
              notNull: true,
              dataType: DATA_TYPE.String
          },
          revision: {
              notNull: true,
              dataType: DATA_TYPE.Number,
              default: 1
          },
          status : {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'none'
          },
          last_modified_by: {
              dataType: DATA_TYPE.Number,
          },
          created_at: {
              dataType: DATA_TYPE.String, // date time,
          },
          updated_at: {
              dataType: DATA_TYPE.String, // date time,
          },
      }
  };
  // Table subcategories
  const tblSubcategories: ITable = {
      name: 'subcategories',
      columns: {
          id: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          number: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          revision: {
              notNull: true,
              dataType: DATA_TYPE.Number,
              default: 1
          },
          status : {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'none'
          },
          last_modified_by: {
              dataType: DATA_TYPE.Number,
          },
          created_at: {
              dataType: DATA_TYPE.String, // date time,
          },
          updated_at: {
              dataType: DATA_TYPE.String, // date time,
          },
      }
  };
  // Table wholesale_prices
  const tblWholesalePrices: ITable = {
      name: 'wholesale_prices',
      columns: {
          id: {
              dataType: DATA_TYPE.Number,
              unique: true
          },
          name: {
              notNull: true,
              dataType: DATA_TYPE.String
          },
          product_id: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          currency_id: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          package_type_id: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          more_than: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          wholesale_price: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          no_of_items_in_package: {
              notNull: true,
              dataType: DATA_TYPE.Number
          },
          item_package_type_id: {
              notNull: true,
              dataType: DATA_TYPE.Number,
          },
          default: {
              notNull: true,
              dataType: DATA_TYPE.Boolean,
              default: false
          },
          enabled: {
              notNull: true,
              dataType: DATA_TYPE.Boolean,
              default: true
          },
          revision: {
              notNull: true,
              dataType: DATA_TYPE.Number,
              default: 1
          },
          status : {
              notNull: true,
              dataType: DATA_TYPE.String,
              default: 'none'
          },
          last_modified_by: {
              dataType: DATA_TYPE.Number,
          },
          created_at: {
              dataType: DATA_TYPE.String, // date time,
          },
          updated_at: {
              dataType: DATA_TYPE.String, // date time,
          },
      }
  };
   const dataBase: IDataBase = {
      name: dbname,
      tables: [tblBarcodes, tblCategories, tblCompanies, tblCurrencies, tblFactories, tblPackageTypes, tblProducts, tblProductShowroom, tblProductStore, tblProductTypes, tblRetailPrices, tblShops, tblShowrooms, tblStations, tblStores, tblSubcategories, tblWholesalePrices]
  };
  return dataBase;*/
  // Table wf_add_purchase_requests
  var tblWfAddPurchaseRequests = {
    name: 'wf_add_purchase_requests',
    columns: {
      id: {
        /*primaryKey: true,
        autoIncrement: false*/
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Number,
        unique: true
      },
      wfable: {
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object
      }
    }
  }; // Table wf_edit_purchase_requests

  var tblWfEditPurchaseRequests = {
    name: 'wf_edit_purchase_requests',
    columns: {
      id: {
        /*primaryKey: true,
        autoIncrement: false*/
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Number,
        unique: true
      },
      wfable: {
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object
      }
    }
  }; // Table wf_add_pay_requests

  var tblWfAddPayRequests = {
    name: 'wf_add_pay_requests',
    columns: {
      id: {
        /*primaryKey: true,
        autoIncrement: false*/
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Number,
        unique: true
      },
      wfable: {
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object
      }
    }
  }; // Table wf_edit_pay_requests

  var tblWfEditPayRequests = {
    name: 'wf_edit_pay_requests',
    columns: {
      id: {
        /*primaryKey: true,
        autoIncrement: false*/
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Number,
        unique: true
      },
      wfable: {
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object
      }
    }
  }; // Table wf_add_contractor_requests

  var tblWfAddContractorRequests = {
    name: 'wf_add_contractor_requests',
    columns: {
      id: {
        /*primaryKey: true,
        autoIncrement: false*/
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Number,
        unique: true
      },
      wfable: {
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object
      }
    }
  }; // Table wf_edit_contractor_requests

  var tblWfEditContractorRequests = {
    name: 'wf_edit_contractor_requests',
    columns: {
      id: {
        /*primaryKey: true,
        autoIncrement: false*/
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Number,
        unique: true
      },
      wfable: {
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object
      }
    }
  }; // Table wf_add_contractor_addendum_requests

  var tblWfAddContractorAddendumRequests = {
    name: 'wf_add_contractor_addendum_requests',
    columns: {
      id: {
        /*primaryKey: true,
        autoIncrement: false*/
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Number,
        unique: true
      },
      wfable: {
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object
      }
    }
  }; // Table wf_edit_contractor_addendum_requests

  var tblWfEditContractorAddendumRequests = {
    name: 'wf_edit_contractor_addendum_requests',
    columns: {
      id: {
        /*primaryKey: true,
        autoIncrement: false*/
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Number,
        unique: true
      },
      wfable: {
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object
      }
    }
  }; // Table wf_add_pay_contractor_requests

  var tblWfAddPayContractorRequests = {
    name: 'wf_add_pay_contractor_requests',
    columns: {
      id: {
        /*primaryKey: true,
        autoIncrement: false*/
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Number,
        unique: true
      },
      wfable: {
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object
      }
    }
  }; // Table wf_edit_pay_contractor_requests

  var tblWfEditPayContractorRequests = {
    name: 'wf_edit_pay_contractor_requests',
    columns: {
      id: {
        /*primaryKey: true,
        autoIncrement: false*/
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Number,
        unique: true
      },
      wfable: {
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object
      }
    }
  }; // Table wf_add_pay_good_p_contractor_requests

  var tblWfAddPayGood_P_ContractorRequests = {
    name: 'wf_add_pay_good_p_contractor_requests',
    columns: {
      id: {
        /*primaryKey: true,
        autoIncrement: false*/
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Number,
        unique: true
      },
      wfable: {
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object
      }
    }
  }; // Table wf_edit_pay_good_p_contractor_requests

  var tblWfEditPayGood_P_ContractorRequests = {
    name: 'wf_edit_pay_good_p_contractor_requests',
    columns: {
      id: {
        /*primaryKey: true,
        autoIncrement: false*/
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Number,
        unique: true
      },
      wfable: {
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object
      }
    }
  }; // Table wf_add_monthly_fee_payment_requests

  var tblWfAddMonthlyFeePaymentRequests = {
    name: 'wf_add_monthly_fee_payment_requests',
    columns: {
      id: {
        /*primaryKey: true,
        autoIncrement: false*/
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Number,
        unique: true
      },
      wfable: {
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object
      }
    }
  }; // Table wf_edit_monthly_fee_payment_requests

  var tblWfEditMonthlyFeePaymentRequests = {
    name: 'wf_edit_monthly_fee_payment_requests',
    columns: {
      id: {
        /*primaryKey: true,
        autoIncrement: false*/
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Number,
        unique: true
      },
      wfable: {
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object
      }
    }
  }; // Table wf_add_overcharge_requests

  var tblWfAddOverchargeRequests = {
    name: 'wf_add_overcharge_requests',
    columns: {
      id: {
        /*primaryKey: true,
        autoIncrement: false*/
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Number,
        unique: true
      },
      wfable: {
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object
      }
    }
  }; // Table wf_edit_overcharge_requests

  var tblWfEditOverchargeRequests = {
    name: 'wf_edit_overcharge_requests',
    columns: {
      id: {
        /*primaryKey: true,
        autoIncrement: false*/
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Number,
        unique: true
      },
      wfable: {
        dataType: jsstore__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object
      }
    }
  };
  var dataBase = {
    name: dbname,
    tables: [tblWfAddPurchaseRequests, tblWfEditPurchaseRequests, tblWfAddPayRequests, tblWfEditPayRequests, tblWfAddContractorRequests, tblWfEditContractorRequests, tblWfAddContractorAddendumRequests, tblWfEditContractorAddendumRequests, tblWfAddPayContractorRequests, tblWfEditPayContractorRequests, tblWfAddPayGood_P_ContractorRequests, tblWfEditPayGood_P_ContractorRequests, tblWfAddMonthlyFeePaymentRequests, tblWfEditMonthlyFeePaymentRequests, tblWfAddOverchargeRequests, tblWfEditOverchargeRequests],
    version: 2
  };
  return dataBase;
};

var BaseServicesDB = /*#__PURE__*/function () {
  function BaseServicesDB(dbName) {
    _classCallCheck(this, BaseServicesDB);

    _defineProperty(this, "connection", void 0);

    _defineProperty(this, "dbName", 'draft');

    _defineProperty(this, "wfAddPurchaseRequestServices", void 0);

    _defineProperty(this, "wfAddPayRequestServices", void 0);

    _defineProperty(this, "wfAddContractorRequestServices", void 0);

    _defineProperty(this, "wfAddContractorAddendumRequestServices", void 0);

    _defineProperty(this, "wfAddPayContractorRequestServices", void 0);

    _defineProperty(this, "wfAddPayGood_P_ContractorRequestServices", void 0);

    _defineProperty(this, "wfAddMonthlyFeePaymentRequestServices", void 0);

    _defineProperty(this, "wfAddOverchargeRequestServices", void 0);

    _defineProperty(this, "wfEditPurchaseRequestServices", void 0);

    _defineProperty(this, "wfEditPayRequestServices", void 0);

    _defineProperty(this, "wfEditContractorRequestServices", void 0);

    _defineProperty(this, "wfEditContractorAddendumRequestServices", void 0);

    _defineProperty(this, "wfEditPayContractorRequestServices", void 0);

    _defineProperty(this, "wfEditPayGood_P_ContractorRequestServices", void 0);

    _defineProperty(this, "wfEditMonthlyFeePaymentRequestServices", void 0);

    _defineProperty(this, "wfEditOverchargeRequestServices", void 0);

    var this_Class = this;
    this.dbName = dbName;
    this.connection = new jsstore__WEBPACK_IMPORTED_MODULE_1__["Connection"](new Worker(workerPath));
    /*this.connection.addMiddleware(async function (request, next) {
        console.log('02')
        if (!await this_Class.check_DB_Exist()){
            console.log('1')
            return Public_Classes.event_When_Database_Not_Available();
        }
        console.log('3')
        next();
        console.log('4')
    });*/
  }

  _createClass(BaseServicesDB, [{
    key: "init_Offline_Database",
    value: function () {
      var _init_Offline_Database = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var dataBase;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                dataBase = getDatabase(this.dbName);
                _context.next = 4;
                return this.connection.initDb(dataBase);

              case 4:
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6]]);
      }));

      function init_Offline_Database() {
        return _init_Offline_Database.apply(this, arguments);
      }

      return init_Offline_Database;
    }()
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var this_Class, promise;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  try {
                    'use strict';

                    if (!('indexedDB' in window)) {
                      console.warn(Lang.get('validation.validator.indexedDB_not_supported'));
                      resolve(Lang.get('validation.validator.indexedDB_not_supported'));
                    } else {
                      this_Class.check_DB_Exist().then( /*#__PURE__*/function () {
                        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(isExist) {
                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  if (!isExist) {
                                    _context2.next = 10;
                                    break;
                                  }

                                  _context2.next = 3;
                                  return this_Class.init_Offline_Database();

                                case 3:
                                  _context2.next = 5;
                                  return this_Class.connection.openDb(this_Class.dbName);

                                case 5:
                                  _context2.next = 7;
                                  return this_Class.sync_Data();

                                case 7:
                                  resolve(true);
                                  _context2.next = 15;
                                  break;

                                case 10:
                                  _context2.next = 12;
                                  return this_Class.init_Offline_Database();

                                case 12:
                                  _context2.next = 14;
                                  return this_Class.sync_Data();

                                case 14:
                                  resolve(true);

                                case 15:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));

                        return function (_x) {
                          return _ref.apply(this, arguments);
                        };
                      }());
                    }
                  } catch (ex) {
                    // console.error(ex);
                    resolve(false);
                    resolve(Lang.get('supermarket/storeCashier/Dashboard.public.message_system.error_registered'));
                  }
                });
                _context3.next = 4;
                return promise;

              case 4:
                return _context3.abrupt("return", _context3.sent);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "connection_Middleware",
    value: function connection_Middleware() {
      var this_Class = this;
      this.connection.addMiddleware( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(request) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return this_Class.check_DB_Exist();

                case 2:
                  if (_context4.sent) {
                    _context4.next = 4;
                    break;
                  }

                  return _context4.abrupt("return", _public_classes__WEBPACK_IMPORTED_MODULE_3__["Public_Classes"].event_When_Database_Not_Available());

                case 4:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }(), true);
    }
  }, {
    key: "init_DB_If_Not_Exist",
    value: function () {
      var _init_DB_If_Not_Exist = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var this_Class, promise;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  try {
                    'use strict';

                    if (!('indexedDB' in window)) {
                      console.warn(Lang.get('validation.validator.indexedDB_not_supported'));
                      resolve(Lang.get('validation.validator.indexedDB_not_supported'));
                    } else {
                      this_Class.check_DB_Exist().then( /*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(isExist) {
                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  if (!isExist) {
                                    _context5.next = 5;
                                    break;
                                  }

                                  this_Class.connection.openDb(this_Class.dbName);
                                  resolve(true);
                                  _context5.next = 10;
                                  break;

                                case 5:
                                  _context5.next = 7;
                                  return this_Class.init_Offline_Database();

                                case 7:
                                  _context5.next = 9;
                                  return this_Class.sync_Data();

                                case 9:
                                  resolve(true);

                                case 10:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5);
                        }));

                        return function (_x3) {
                          return _ref3.apply(this, arguments);
                        };
                      }());
                    }
                  } catch (ex) {
                    // console.error(ex);
                    resolve(false);
                    resolve(Lang.get('supermarket/storeCashier/Dashboard.public.message_system.error_registered'));
                  }
                });
                _context6.next = 4;
                return promise;

              case 4:
                return _context6.abrupt("return", _context6.sent);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function init_DB_If_Not_Exist() {
        return _init_DB_If_Not_Exist.apply(this, arguments);
      }

      return init_DB_If_Not_Exist;
    }()
  }, {
    key: "check_DB_Exist",
    value: function () {
      var _check_DB_Exist = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var isExisting;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return window.indexedDB.databases();

              case 2:
                isExisting = _context7.sent.map(function (db) {
                  return db.name;
                }).includes(this.dbName);
                return _context7.abrupt("return", !!isExisting);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function check_DB_Exist() {
        return _check_DB_Exist.apply(this, arguments);
      }

      return check_DB_Exist;
    }()
  }, {
    key: "sync_Data",
    value: function () {
      var _sync_Data = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var this_Class;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this_Class = this; // Local uses

                this.wfAddPurchaseRequestServices = new ___WEBPACK_IMPORTED_MODULE_2__["WfAddPurchaseRequestServices"](this.connection, this.dbName);
                this.wfAddPayRequestServices = new ___WEBPACK_IMPORTED_MODULE_2__["WfAddPayRequestServices"](this.connection, this.dbName);
                this.wfAddContractorRequestServices = new ___WEBPACK_IMPORTED_MODULE_2__["WfAddContractorRequestServices"](this.connection, this.dbName);
                this.wfAddContractorAddendumRequestServices = new ___WEBPACK_IMPORTED_MODULE_2__["WfAddContractorAddendumRequestServices"](this.connection, this.dbName);
                this.wfAddPayContractorRequestServices = new ___WEBPACK_IMPORTED_MODULE_2__["WfAddPayContractorRequestServices"](this.connection, this.dbName);
                this.wfAddPayGood_P_ContractorRequestServices = new ___WEBPACK_IMPORTED_MODULE_2__["WfAddPayGood_P_ContractorRequestServices"](this.connection, this.dbName);
                this.wfAddMonthlyFeePaymentRequestServices = new ___WEBPACK_IMPORTED_MODULE_2__["WfAddMonthlyFeePaymentRequestServices"](this.connection, this.dbName);
                this.wfAddOverchargeRequestServices = new ___WEBPACK_IMPORTED_MODULE_2__["WfAddOverchargeRequestServices"](this.connection, this.dbName);
                this.wfEditPurchaseRequestServices = new ___WEBPACK_IMPORTED_MODULE_2__["WfEditPurchaseRequestServices"](this.connection, this.dbName);
                this.wfEditPayRequestServices = new ___WEBPACK_IMPORTED_MODULE_2__["WfEditPayRequestServices"](this.connection, this.dbName);
                this.wfEditContractorRequestServices = new ___WEBPACK_IMPORTED_MODULE_2__["WfEditContractorRequestServices"](this.connection, this.dbName);
                this.wfEditContractorAddendumRequestServices = new ___WEBPACK_IMPORTED_MODULE_2__["WfEditContractorAddendumRequestServices"](this.connection, this.dbName);
                this.wfEditPayContractorRequestServices = new ___WEBPACK_IMPORTED_MODULE_2__["WfEditPayContractorRequestServices"](this.connection, this.dbName);
                this.wfEditPayGood_P_ContractorRequestServices = new ___WEBPACK_IMPORTED_MODULE_2__["WfEditPayGood_P_ContractorRequestServices"](this.connection, this.dbName);
                this.wfEditMonthlyFeePaymentRequestServices = new ___WEBPACK_IMPORTED_MODULE_2__["WfEditMonthlyFeePaymentRequestServices"](this.connection, this.dbName);
                this.wfEditOverchargeRequestServices = new ___WEBPACK_IMPORTED_MODULE_2__["WfEditOverchargeRequestServices"](this.connection, this.dbName);

              case 17:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function sync_Data() {
        return _sync_Data.apply(this, arguments);
      }

      return sync_Data;
    }()
  }, {
    key: "connection",
    get: function get() {
      return this._connection;
    },

    /*get wfAddPayRequestServices() {
        return this._wfAddPayRequestServices;
    }
     get wfEditPayRequestServices() {
        return this._wfEditPayRequestServices;
    }*/
    set: function set(value) {
      return this._connection = value;
    }
  }, {
    key: "dbName",
    get: function get() {
      return this._dbName;
    }
  }]);

  return BaseServicesDB;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/database/base/public_classes.js":
/*!***********************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/base/public_classes.js ***!
  \***********************************************************************/
/*! exports provided: Public_Classes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Public_Classes", function() { return Public_Classes; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Public_Classes = /*#__PURE__*/function () {
  function Public_Classes() {
    _classCallCheck(this, Public_Classes);
  }

  _createClass(Public_Classes, null, [{
    key: "event_When_Database_Not_Available",
    value: function event_When_Database_Not_Available() {
      var data_For_Create_Button_Together = {
        'id_Btn1': 'window_Location_Reload',
        'btn1_Class_Color': 'w3-teal',
        'btn1_Text': Lang.get('supermarket/storeCashier/Dashboard.public.reload'),
        'btn1_Attr': {
          /*'data-select': 'userAddSelection',
          'data-toggle': 'modal',
          'data-target': '#storeCashier_Work_Modal_UserAdd',*/
        }
      };
      var single_Button = single_Button_Create(data_For_Create_Button_Together);
      create_Ul_Li_PNotify([Lang.get('validation.validator.database_not_available_reload_page')], 'error', single_Button);
      $('#window_Location_Reload').off('click');
      $('#window_Location_Reload').click( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                window.location.reload();

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    }
  }, {
    key: "check_DB_Exist",
    value: function () {
      var _check_DB_Exist = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dbName) {
        var isExisting;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return window.indexedDB.databases();

              case 2:
                isExisting = _context2.sent.map(function (db) {
                  return db.name;
                }).includes(dbName);
                return _context2.abrupt("return", !!isExisting);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function check_DB_Exist(_x) {
        return _check_DB_Exist.apply(this, arguments);
      }

      return check_DB_Exist;
    }()
  }, {
    key: "check_Table_Exist",
    value: function () {
      var _check_Table_Exist = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(tableName) {
        var db_Schema, table_Names;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return baseServicesDB.connection.getDbSchema('supermarket');

              case 2:
                db_Schema = _context3.sent;
                console.log(db_Schema);
                table_Names = $.map(db_Schema.tables, function (value, key) {
                  return value.name;
                });
                console.log(table_Names);
                return _context3.abrupt("return", $.inArray(tableName, table_Names) >= 0);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function check_Table_Exist(_x2) {
        return _check_Table_Exist.apply(this, arguments);
      }

      return check_Table_Exist;
    }()
  }]);

  return Public_Classes;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/database/index.js":
/*!*********************************************************!*\
  !*** ./resources/assets/dashboard/js/database/index.js ***!
  \*********************************************************/
/*! exports provided: BaseServicesDB, WfAddPurchaseRequestServices, WfAddPayRequestServices, WfAddContractorRequestServices, WfAddContractorAddendumRequestServices, WfAddPayContractorRequestServices, WfAddPayGood_P_ContractorRequestServices, WfAddMonthlyFeePaymentRequestServices, WfAddOverchargeRequestServices, WfEditPurchaseRequestServices, WfEditPayRequestServices, WfEditContractorRequestServices, WfEditContractorAddendumRequestServices, WfEditPayContractorRequestServices, WfEditPayGood_P_ContractorRequestServices, WfEditMonthlyFeePaymentRequestServices, WfEditOverchargeRequestServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_base_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/base_services */ "./resources/assets/dashboard/js/database/base/base_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseServicesDB", function() { return _base_base_services__WEBPACK_IMPORTED_MODULE_0__["BaseServicesDB"]; });

/* harmony import */ var _model_services_wf_add_purchase_request_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model_services/wf_add_purchase_request_services */ "./resources/assets/dashboard/js/database/model_services/wf_add_purchase_request_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WfAddPurchaseRequestServices", function() { return _model_services_wf_add_purchase_request_services__WEBPACK_IMPORTED_MODULE_1__["WfAddPurchaseRequestServices"]; });

/* harmony import */ var _model_services_wf_add_pay_request_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model_services/wf_add_pay_request_services */ "./resources/assets/dashboard/js/database/model_services/wf_add_pay_request_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WfAddPayRequestServices", function() { return _model_services_wf_add_pay_request_services__WEBPACK_IMPORTED_MODULE_2__["WfAddPayRequestServices"]; });

/* harmony import */ var _model_services_wf_add_contractor_request_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model_services/wf_add_contractor_request_services */ "./resources/assets/dashboard/js/database/model_services/wf_add_contractor_request_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WfAddContractorRequestServices", function() { return _model_services_wf_add_contractor_request_services__WEBPACK_IMPORTED_MODULE_3__["WfAddContractorRequestServices"]; });

/* harmony import */ var _model_services_wf_add_contractor_addendum_request_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model_services/wf_add_contractor_addendum_request_services */ "./resources/assets/dashboard/js/database/model_services/wf_add_contractor_addendum_request_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WfAddContractorAddendumRequestServices", function() { return _model_services_wf_add_contractor_addendum_request_services__WEBPACK_IMPORTED_MODULE_4__["WfAddContractorAddendumRequestServices"]; });

/* harmony import */ var _model_services_wf_add_pay_contractor_request_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model_services/wf_add_pay_contractor_request_services */ "./resources/assets/dashboard/js/database/model_services/wf_add_pay_contractor_request_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WfAddPayContractorRequestServices", function() { return _model_services_wf_add_pay_contractor_request_services__WEBPACK_IMPORTED_MODULE_5__["WfAddPayContractorRequestServices"]; });

/* harmony import */ var _model_services_wf_add_pay_good_p_contractor_request_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model_services/wf_add_pay_good_p_contractor_request_services */ "./resources/assets/dashboard/js/database/model_services/wf_add_pay_good_p_contractor_request_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WfAddPayGood_P_ContractorRequestServices", function() { return _model_services_wf_add_pay_good_p_contractor_request_services__WEBPACK_IMPORTED_MODULE_6__["WfAddPayGood_P_ContractorRequestServices"]; });

/* harmony import */ var _model_services_wf_add_monthly_fee_payment_request_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model_services/wf_add_monthly_fee_payment_request_services */ "./resources/assets/dashboard/js/database/model_services/wf_add_monthly_fee_payment_request_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WfAddMonthlyFeePaymentRequestServices", function() { return _model_services_wf_add_monthly_fee_payment_request_services__WEBPACK_IMPORTED_MODULE_7__["WfAddMonthlyFeePaymentRequestServices"]; });

/* harmony import */ var _model_services_wf_add_overcharge_request_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model_services/wf_add_overcharge_request_services */ "./resources/assets/dashboard/js/database/model_services/wf_add_overcharge_request_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WfAddOverchargeRequestServices", function() { return _model_services_wf_add_overcharge_request_services__WEBPACK_IMPORTED_MODULE_8__["WfAddOverchargeRequestServices"]; });

/* harmony import */ var _model_services_wf_edit_purchase_request_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model_services/wf_edit_purchase_request_services */ "./resources/assets/dashboard/js/database/model_services/wf_edit_purchase_request_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WfEditPurchaseRequestServices", function() { return _model_services_wf_edit_purchase_request_services__WEBPACK_IMPORTED_MODULE_9__["WfEditPurchaseRequestServices"]; });

/* harmony import */ var _model_services_wf_edit_pay_request_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model_services/wf_edit_pay_request_services */ "./resources/assets/dashboard/js/database/model_services/wf_edit_pay_request_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WfEditPayRequestServices", function() { return _model_services_wf_edit_pay_request_services__WEBPACK_IMPORTED_MODULE_10__["WfEditPayRequestServices"]; });

/* harmony import */ var _model_services_wf_edit_contractor_request_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./model_services/wf_edit_contractor_request_services */ "./resources/assets/dashboard/js/database/model_services/wf_edit_contractor_request_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WfEditContractorRequestServices", function() { return _model_services_wf_edit_contractor_request_services__WEBPACK_IMPORTED_MODULE_11__["WfEditContractorRequestServices"]; });

/* harmony import */ var _model_services_wf_edit_contractor_addendum_request_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model_services/wf_edit_contractor_addendum_request_services */ "./resources/assets/dashboard/js/database/model_services/wf_edit_contractor_addendum_request_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WfEditContractorAddendumRequestServices", function() { return _model_services_wf_edit_contractor_addendum_request_services__WEBPACK_IMPORTED_MODULE_12__["WfEditContractorAddendumRequestServices"]; });

/* harmony import */ var _model_services_wf_edit_pay_contractor_request_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./model_services/wf_edit_pay_contractor_request_services */ "./resources/assets/dashboard/js/database/model_services/wf_edit_pay_contractor_request_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WfEditPayContractorRequestServices", function() { return _model_services_wf_edit_pay_contractor_request_services__WEBPACK_IMPORTED_MODULE_13__["WfEditPayContractorRequestServices"]; });

/* harmony import */ var _model_services_wf_edit_pay_good_p_contractor_request_services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./model_services/wf_edit_pay_good_p_contractor_request_services */ "./resources/assets/dashboard/js/database/model_services/wf_edit_pay_good_p_contractor_request_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WfEditPayGood_P_ContractorRequestServices", function() { return _model_services_wf_edit_pay_good_p_contractor_request_services__WEBPACK_IMPORTED_MODULE_14__["WfEditPayGood_P_ContractorRequestServices"]; });

/* harmony import */ var _model_services_wf_edit_monthly_fee_payment_request_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./model_services/wf_edit_monthly_fee_payment_request_services */ "./resources/assets/dashboard/js/database/model_services/wf_edit_monthly_fee_payment_request_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WfEditMonthlyFeePaymentRequestServices", function() { return _model_services_wf_edit_monthly_fee_payment_request_services__WEBPACK_IMPORTED_MODULE_15__["WfEditMonthlyFeePaymentRequestServices"]; });

/* harmony import */ var _model_services_wf_edit_overcharge_request_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./model_services/wf_edit_overcharge_request_services */ "./resources/assets/dashboard/js/database/model_services/wf_edit_overcharge_request_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WfEditOverchargeRequestServices", function() { return _model_services_wf_edit_overcharge_request_services__WEBPACK_IMPORTED_MODULE_16__["WfEditOverchargeRequestServices"]; });




















/***/ }),

/***/ "./resources/assets/dashboard/js/database/model_services/wf_add_contractor_addendum_request_services.js":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/model_services/wf_add_contractor_addendum_request_services.js ***!
  \**************************************************************************************************************/
/*! exports provided: WfAddContractorAddendumRequestServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfAddContractorAddendumRequestServices", function() { return WfAddContractorAddendumRequestServices; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WfAddContractorAddendumRequestServices = /*#__PURE__*/function () {
  function WfAddContractorAddendumRequestServices(connection, dbName) {
    _classCallCheck(this, WfAddContractorAddendumRequestServices);

    this.connection = connection;
    this.dbName = dbName;
  }

  _createClass(WfAddContractorAddendumRequestServices, [{
    key: "getWfAddContractorAddendumRequests",
    value: function () {
      var _getWfAddContractorAddendumRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.connection.select({
                  from: 'wf_add_contractor_addendum_requests'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWfAddContractorAddendumRequests() {
        return _getWfAddContractorAddendumRequests.apply(this, arguments);
      }

      return getWfAddContractorAddendumRequests;
    }()
  }, {
    key: "getWfAddContractorAddendumRequestIDs",
    value: function () {
      var _getWfAddContractorAddendumRequestIDs = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connection.select({
                  from: 'wf_add_contractor_addendum_requests'
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", $.map(result, function (value, key) {
                  return value.id;
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWfAddContractorAddendumRequestIDs() {
        return _getWfAddContractorAddendumRequestIDs.apply(this, arguments);
      }

      return getWfAddContractorAddendumRequestIDs;
    }()
  }, {
    key: "addWfAddContractorAddendumRequest",
    value: function () {
      var _addWfAddContractorAddendumRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var wfAddContractorAddendumRequest,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wfAddContractorAddendumRequest = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                _context3.next = 3;
                return this.connection.insert({
                  into: 'wf_add_contractor_addendum_requests',
                  values: wfAddContractorAddendumRequest
                }).then(function (rowsAdded) {
                  return rowsAdded;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addWfAddContractorAddendumRequest() {
        return _addWfAddContractorAddendumRequest.apply(this, arguments);
      }

      return addWfAddContractorAddendumRequest;
    }()
  }, {
    key: "deleteWfAddContractorAddendumRequest",
    value: function () {
      var _deleteWfAddContractorAddendumRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(wfAddContractorAddendumRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.connection.remove({
                  from: 'wf_add_contractor_addendum_requests',
                  where: {
                    id: Number(wfAddContractorAddendumRequestId)
                  }
                }).then(function (rowsDeleted) {
                  return rowsDeleted;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteWfAddContractorAddendumRequest(_x) {
        return _deleteWfAddContractorAddendumRequest.apply(this, arguments);
      }

      return deleteWfAddContractorAddendumRequest;
    }()
  }, {
    key: "getWfAddContractorAddendumRequest",
    value: function () {
      var _getWfAddContractorAddendumRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(wfAddContractorAddendumRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.connection.select({
                  from: 'wf_add_contractor_addendum_requests',
                  where: {
                    id: Number(wfAddContractorAddendumRequestId)
                  }
                }).then(function (data) {
                  // console.log(data);
                  return data;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWfAddContractorAddendumRequest(_x2) {
        return _getWfAddContractorAddendumRequest.apply(this, arguments);
      }

      return getWfAddContractorAddendumRequest;
    }()
  }, {
    key: "updateWfAddContractorAddendumRequest",
    value: function () {
      var _updateWfAddContractorAddendumRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(wfAddContractorAddendumRequestId, value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.connection.update({
                  "in": 'wf_add_contractor_addendum_requests',
                  set: value,
                  where: {
                    id: Number(wfAddContractorAddendumRequestId)
                  }
                }).then(function (rowsUpdated) {
                  // console.log(rowsUpdated);
                  return rowsUpdated;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateWfAddContractorAddendumRequest(_x3, _x4) {
        return _updateWfAddContractorAddendumRequest.apply(this, arguments);
      }

      return updateWfAddContractorAddendumRequest;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.connection.count({
                  from: 'wf_add_contractor_addendum_requests',
                  where: {
                    id: id
                  }
                });

              case 2:
                _context7.t0 = _context7.sent;
                return _context7.abrupt("return", _context7.t0 > 0);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function exists(_x5) {
        return _exists.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "updateOrCreateWfAddContractorAddendumRequest",
    value: function () {
      var _updateOrCreateWfAddContractorAddendumRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id, values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.exists(id);

              case 2:
                if (!_context8.sent) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return this.updateWfAddContractorAddendumRequest(id, values);

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 8:
                _context8.next = 10;
                return this.addWfAddContractorAddendumRequest([{
                  id: id,
                  wfable: values.wfable
                }]);

              case 10:
                return _context8.abrupt("return", _context8.sent);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateOrCreateWfAddContractorAddendumRequest(_x6, _x7) {
        return _updateOrCreateWfAddContractorAddendumRequest.apply(this, arguments);
      }

      return updateOrCreateWfAddContractorAddendumRequest;
    }()
  }, {
    key: "updateOrCreateWfAddContractorAddendumRequests",
    value: function () {
      var _updateOrCreateWfAddContractorAddendumRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(data)) {
                    $.each(data, /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(key, value) {
                        var resultUpdateOrCreate;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this_Class.updateOrCreateWfAddContractorAddendumRequest(value.id, value);

                              case 2:
                                resultUpdateOrCreate = _context9.sent;
                                result.push(resultUpdateOrCreate);
                                if (data.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      return function (_x9, _x10) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context10.next = 4;
                return promise;

              case 4:
                result = _context10.sent;
                console.log(result);
                return _context10.abrupt("return", result);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateOrCreateWfAddContractorAddendumRequests(_x8) {
        return _updateOrCreateWfAddContractorAddendumRequests.apply(this, arguments);
      }

      return updateOrCreateWfAddContractorAddendumRequests;
    }()
  }, {
    key: "deleteWfAddContractorAddendumRequests",
    value: function () {
      var _deleteWfAddContractorAddendumRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(wfAddContractorAddendumRequest_IDs) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(wfAddContractorAddendumRequest_IDs)) {
                    $.each(wfAddContractorAddendumRequest_IDs, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(key, value) {
                        var resultDelete;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this_Class.deleteWfAddContractorAddendumRequest(value);

                              case 2:
                                resultDelete = _context11.sent;
                                result.push(resultDelete);
                                if (wfAddContractorAddendumRequest_IDs.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));

                      return function (_x12, _x13) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context12.next = 4;
                return promise;

              case 4:
                result = _context12.sent;
                console.log(result);
                return _context12.abrupt("return", result);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function deleteWfAddContractorAddendumRequests(_x11) {
        return _deleteWfAddContractorAddendumRequests.apply(this, arguments);
      }

      return deleteWfAddContractorAddendumRequests;
    }()
  }]);

  return WfAddContractorAddendumRequestServices;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/database/model_services/wf_add_contractor_request_services.js":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/model_services/wf_add_contractor_request_services.js ***!
  \*****************************************************************************************************/
/*! exports provided: WfAddContractorRequestServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfAddContractorRequestServices", function() { return WfAddContractorRequestServices; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WfAddContractorRequestServices = /*#__PURE__*/function () {
  function WfAddContractorRequestServices(connection, dbName) {
    _classCallCheck(this, WfAddContractorRequestServices);

    this.connection = connection;
    this.dbName = dbName;
  }

  _createClass(WfAddContractorRequestServices, [{
    key: "getWfAddContractorRequests",
    value: function () {
      var _getWfAddContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.connection.select({
                  from: 'wf_add_contractor_requests'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWfAddContractorRequests() {
        return _getWfAddContractorRequests.apply(this, arguments);
      }

      return getWfAddContractorRequests;
    }()
  }, {
    key: "getWfAddContractorRequestIDs",
    value: function () {
      var _getWfAddContractorRequestIDs = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connection.select({
                  from: 'wf_add_contractor_requests'
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", $.map(result, function (value, key) {
                  return value.id;
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWfAddContractorRequestIDs() {
        return _getWfAddContractorRequestIDs.apply(this, arguments);
      }

      return getWfAddContractorRequestIDs;
    }()
  }, {
    key: "addWfAddContractorRequest",
    value: function () {
      var _addWfAddContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var wfAddContractorRequest,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wfAddContractorRequest = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                _context3.next = 3;
                return this.connection.insert({
                  into: 'wf_add_contractor_requests',
                  values: wfAddContractorRequest
                }).then(function (rowsAdded) {
                  return rowsAdded;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addWfAddContractorRequest() {
        return _addWfAddContractorRequest.apply(this, arguments);
      }

      return addWfAddContractorRequest;
    }()
  }, {
    key: "deleteWfAddContractorRequest",
    value: function () {
      var _deleteWfAddContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(wfAddContractorRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.connection.remove({
                  from: 'wf_add_contractor_requests',
                  where: {
                    id: Number(wfAddContractorRequestId)
                  }
                }).then(function (rowsDeleted) {
                  return rowsDeleted;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteWfAddContractorRequest(_x) {
        return _deleteWfAddContractorRequest.apply(this, arguments);
      }

      return deleteWfAddContractorRequest;
    }()
  }, {
    key: "getWfAddContractorRequest",
    value: function () {
      var _getWfAddContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(wfAddContractorRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.connection.select({
                  from: 'wf_add_contractor_requests',
                  where: {
                    id: Number(wfAddContractorRequestId)
                  }
                }).then(function (data) {
                  // console.log(data);
                  return data;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWfAddContractorRequest(_x2) {
        return _getWfAddContractorRequest.apply(this, arguments);
      }

      return getWfAddContractorRequest;
    }()
  }, {
    key: "updateWfAddContractorRequest",
    value: function () {
      var _updateWfAddContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(wfAddContractorRequestId, value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.connection.update({
                  "in": 'wf_add_contractor_requests',
                  set: value,
                  where: {
                    id: Number(wfAddContractorRequestId)
                  }
                }).then(function (rowsUpdated) {
                  // console.log(rowsUpdated);
                  return rowsUpdated;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateWfAddContractorRequest(_x3, _x4) {
        return _updateWfAddContractorRequest.apply(this, arguments);
      }

      return updateWfAddContractorRequest;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.connection.count({
                  from: 'wf_add_contractor_requests',
                  where: {
                    id: id
                  }
                });

              case 2:
                _context7.t0 = _context7.sent;
                return _context7.abrupt("return", _context7.t0 > 0);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function exists(_x5) {
        return _exists.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "updateOrCreateWfAddContractorRequest",
    value: function () {
      var _updateOrCreateWfAddContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id, values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.exists(id);

              case 2:
                if (!_context8.sent) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return this.updateWfAddContractorRequest(id, values);

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 8:
                _context8.next = 10;
                return this.addWfAddContractorRequest([{
                  id: id,
                  wfable: values.wfable
                }]);

              case 10:
                return _context8.abrupt("return", _context8.sent);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateOrCreateWfAddContractorRequest(_x6, _x7) {
        return _updateOrCreateWfAddContractorRequest.apply(this, arguments);
      }

      return updateOrCreateWfAddContractorRequest;
    }()
  }, {
    key: "updateOrCreateWfAddContractorRequests",
    value: function () {
      var _updateOrCreateWfAddContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(data)) {
                    $.each(data, /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(key, value) {
                        var resultUpdateOrCreate;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this_Class.updateOrCreateWfAddContractorRequest(value.id, value);

                              case 2:
                                resultUpdateOrCreate = _context9.sent;
                                result.push(resultUpdateOrCreate);
                                if (data.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      return function (_x9, _x10) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context10.next = 4;
                return promise;

              case 4:
                result = _context10.sent;
                console.log(result);
                return _context10.abrupt("return", result);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateOrCreateWfAddContractorRequests(_x8) {
        return _updateOrCreateWfAddContractorRequests.apply(this, arguments);
      }

      return updateOrCreateWfAddContractorRequests;
    }()
  }, {
    key: "deleteWfAddContractorRequests",
    value: function () {
      var _deleteWfAddContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(wfAddContractorRequest_IDs) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(wfAddContractorRequest_IDs)) {
                    $.each(wfAddContractorRequest_IDs, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(key, value) {
                        var resultDelete;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this_Class.deleteWfAddContractorRequest(value);

                              case 2:
                                resultDelete = _context11.sent;
                                result.push(resultDelete);
                                if (wfAddContractorRequest_IDs.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));

                      return function (_x12, _x13) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context12.next = 4;
                return promise;

              case 4:
                result = _context12.sent;
                console.log(result);
                return _context12.abrupt("return", result);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function deleteWfAddContractorRequests(_x11) {
        return _deleteWfAddContractorRequests.apply(this, arguments);
      }

      return deleteWfAddContractorRequests;
    }()
  }]);

  return WfAddContractorRequestServices;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/database/model_services/wf_add_monthly_fee_payment_request_services.js":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/model_services/wf_add_monthly_fee_payment_request_services.js ***!
  \**************************************************************************************************************/
/*! exports provided: WfAddMonthlyFeePaymentRequestServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfAddMonthlyFeePaymentRequestServices", function() { return WfAddMonthlyFeePaymentRequestServices; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WfAddMonthlyFeePaymentRequestServices = /*#__PURE__*/function () {
  function WfAddMonthlyFeePaymentRequestServices(connection, dbName) {
    _classCallCheck(this, WfAddMonthlyFeePaymentRequestServices);

    this.connection = connection;
    this.dbName = dbName;
  }

  _createClass(WfAddMonthlyFeePaymentRequestServices, [{
    key: "getWfAddMonthlyFeePaymentRequests",
    value: function () {
      var _getWfAddMonthlyFeePaymentRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.connection.select({
                  from: 'wf_add_monthly_fee_payment_requests'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWfAddMonthlyFeePaymentRequests() {
        return _getWfAddMonthlyFeePaymentRequests.apply(this, arguments);
      }

      return getWfAddMonthlyFeePaymentRequests;
    }()
  }, {
    key: "getWfAddMonthlyFeePaymentRequestIDs",
    value: function () {
      var _getWfAddMonthlyFeePaymentRequestIDs = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connection.select({
                  from: 'wf_add_monthly_fee_payment_requests'
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", $.map(result, function (value, key) {
                  return value.id;
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWfAddMonthlyFeePaymentRequestIDs() {
        return _getWfAddMonthlyFeePaymentRequestIDs.apply(this, arguments);
      }

      return getWfAddMonthlyFeePaymentRequestIDs;
    }()
  }, {
    key: "addWfAddMonthlyFeePaymentRequest",
    value: function () {
      var _addWfAddMonthlyFeePaymentRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var wfAddMonthlyFeePaymentRequest,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wfAddMonthlyFeePaymentRequest = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                _context3.next = 3;
                return this.connection.insert({
                  into: 'wf_add_monthly_fee_payment_requests',
                  values: wfAddMonthlyFeePaymentRequest
                }).then(function (rowsAdded) {
                  return rowsAdded;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addWfAddMonthlyFeePaymentRequest() {
        return _addWfAddMonthlyFeePaymentRequest.apply(this, arguments);
      }

      return addWfAddMonthlyFeePaymentRequest;
    }()
  }, {
    key: "deleteWfAddMonthlyFeePaymentRequest",
    value: function () {
      var _deleteWfAddMonthlyFeePaymentRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(wfAddMonthlyFeePaymentRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.connection.remove({
                  from: 'wf_add_monthly_fee_payment_requests',
                  where: {
                    id: Number(wfAddMonthlyFeePaymentRequestId)
                  }
                }).then(function (rowsDeleted) {
                  return rowsDeleted;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteWfAddMonthlyFeePaymentRequest(_x) {
        return _deleteWfAddMonthlyFeePaymentRequest.apply(this, arguments);
      }

      return deleteWfAddMonthlyFeePaymentRequest;
    }()
  }, {
    key: "getWfAddMonthlyFeePaymentRequest",
    value: function () {
      var _getWfAddMonthlyFeePaymentRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(wfAddMonthlyFeePaymentRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.connection.select({
                  from: 'wf_add_monthly_fee_payment_requests',
                  where: {
                    id: Number(wfAddMonthlyFeePaymentRequestId)
                  }
                }).then(function (data) {
                  // console.log(data);
                  return data;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWfAddMonthlyFeePaymentRequest(_x2) {
        return _getWfAddMonthlyFeePaymentRequest.apply(this, arguments);
      }

      return getWfAddMonthlyFeePaymentRequest;
    }()
  }, {
    key: "updateWfAddMonthlyFeePaymentRequest",
    value: function () {
      var _updateWfAddMonthlyFeePaymentRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(wfAddMonthlyFeePaymentRequestId, value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.connection.update({
                  "in": 'wf_add_monthly_fee_payment_requests',
                  set: value,
                  where: {
                    id: Number(wfAddMonthlyFeePaymentRequestId)
                  }
                }).then(function (rowsUpdated) {
                  // console.log(rowsUpdated);
                  return rowsUpdated;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateWfAddMonthlyFeePaymentRequest(_x3, _x4) {
        return _updateWfAddMonthlyFeePaymentRequest.apply(this, arguments);
      }

      return updateWfAddMonthlyFeePaymentRequest;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.connection.count({
                  from: 'wf_add_monthly_fee_payment_requests',
                  where: {
                    id: id
                  }
                });

              case 2:
                _context7.t0 = _context7.sent;
                return _context7.abrupt("return", _context7.t0 > 0);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function exists(_x5) {
        return _exists.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "updateOrCreateWfAddMonthlyFeePaymentRequest",
    value: function () {
      var _updateOrCreateWfAddMonthlyFeePaymentRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id, values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.exists(id);

              case 2:
                if (!_context8.sent) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return this.updateWfAddMonthlyFeePaymentRequest(id, values);

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 8:
                _context8.next = 10;
                return this.addWfAddMonthlyFeePaymentRequest([{
                  id: id,
                  wfable: values.wfable
                }]);

              case 10:
                return _context8.abrupt("return", _context8.sent);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateOrCreateWfAddMonthlyFeePaymentRequest(_x6, _x7) {
        return _updateOrCreateWfAddMonthlyFeePaymentRequest.apply(this, arguments);
      }

      return updateOrCreateWfAddMonthlyFeePaymentRequest;
    }()
  }, {
    key: "updateOrCreateWfAddMonthlyFeePaymentRequests",
    value: function () {
      var _updateOrCreateWfAddMonthlyFeePaymentRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(data)) {
                    $.each(data, /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(key, value) {
                        var resultUpdateOrCreate;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this_Class.updateOrCreateWfAddMonthlyFeePaymentRequest(value.id, value);

                              case 2:
                                resultUpdateOrCreate = _context9.sent;
                                result.push(resultUpdateOrCreate);
                                if (data.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      return function (_x9, _x10) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context10.next = 4;
                return promise;

              case 4:
                result = _context10.sent;
                console.log(result);
                return _context10.abrupt("return", result);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateOrCreateWfAddMonthlyFeePaymentRequests(_x8) {
        return _updateOrCreateWfAddMonthlyFeePaymentRequests.apply(this, arguments);
      }

      return updateOrCreateWfAddMonthlyFeePaymentRequests;
    }()
  }, {
    key: "deleteWfAddMonthlyFeePaymentRequests",
    value: function () {
      var _deleteWfAddMonthlyFeePaymentRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(wfAddMonthlyFeePaymentRequest_IDs) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(wfAddMonthlyFeePaymentRequest_IDs)) {
                    $.each(wfAddMonthlyFeePaymentRequest_IDs, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(key, value) {
                        var resultDelete;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this_Class.deleteWfAddMonthlyFeePaymentRequest(value);

                              case 2:
                                resultDelete = _context11.sent;
                                result.push(resultDelete);
                                if (wfAddMonthlyFeePaymentRequest_IDs.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));

                      return function (_x12, _x13) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context12.next = 4;
                return promise;

              case 4:
                result = _context12.sent;
                console.log(result);
                return _context12.abrupt("return", result);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function deleteWfAddMonthlyFeePaymentRequests(_x11) {
        return _deleteWfAddMonthlyFeePaymentRequests.apply(this, arguments);
      }

      return deleteWfAddMonthlyFeePaymentRequests;
    }()
  }]);

  return WfAddMonthlyFeePaymentRequestServices;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/database/model_services/wf_add_overcharge_request_services.js":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/model_services/wf_add_overcharge_request_services.js ***!
  \*****************************************************************************************************/
/*! exports provided: WfAddOverchargeRequestServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfAddOverchargeRequestServices", function() { return WfAddOverchargeRequestServices; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WfAddOverchargeRequestServices = /*#__PURE__*/function () {
  function WfAddOverchargeRequestServices(connection, dbName) {
    _classCallCheck(this, WfAddOverchargeRequestServices);

    this.connection = connection;
    this.dbName = dbName;
  }

  _createClass(WfAddOverchargeRequestServices, [{
    key: "getWfAddOverchargeRequests",
    value: function () {
      var _getWfAddOverchargeRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.connection.select({
                  from: 'wf_add_overcharge_requests'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWfAddOverchargeRequests() {
        return _getWfAddOverchargeRequests.apply(this, arguments);
      }

      return getWfAddOverchargeRequests;
    }()
  }, {
    key: "getWfAddOverchargeRequestIDs",
    value: function () {
      var _getWfAddOverchargeRequestIDs = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connection.select({
                  from: 'wf_add_overcharge_requests'
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", $.map(result, function (value, key) {
                  return value.id;
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWfAddOverchargeRequestIDs() {
        return _getWfAddOverchargeRequestIDs.apply(this, arguments);
      }

      return getWfAddOverchargeRequestIDs;
    }()
  }, {
    key: "addWfAddOverchargeRequest",
    value: function () {
      var _addWfAddOverchargeRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var wfAddOverchargeRequest,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wfAddOverchargeRequest = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                _context3.next = 3;
                return this.connection.insert({
                  into: 'wf_add_overcharge_requests',
                  values: wfAddOverchargeRequest
                }).then(function (rowsAdded) {
                  return rowsAdded;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addWfAddOverchargeRequest() {
        return _addWfAddOverchargeRequest.apply(this, arguments);
      }

      return addWfAddOverchargeRequest;
    }()
  }, {
    key: "deleteWfAddOverchargeRequest",
    value: function () {
      var _deleteWfAddOverchargeRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(wfAddOverchargeRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.connection.remove({
                  from: 'wf_add_overcharge_requests',
                  where: {
                    id: Number(wfAddOverchargeRequestId)
                  }
                }).then(function (rowsDeleted) {
                  return rowsDeleted;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteWfAddOverchargeRequest(_x) {
        return _deleteWfAddOverchargeRequest.apply(this, arguments);
      }

      return deleteWfAddOverchargeRequest;
    }()
  }, {
    key: "getWfAddOverchargeRequest",
    value: function () {
      var _getWfAddOverchargeRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(wfAddOverchargeRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.connection.select({
                  from: 'wf_add_overcharge_requests',
                  where: {
                    id: Number(wfAddOverchargeRequestId)
                  }
                }).then(function (data) {
                  // console.log(data);
                  return data;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWfAddOverchargeRequest(_x2) {
        return _getWfAddOverchargeRequest.apply(this, arguments);
      }

      return getWfAddOverchargeRequest;
    }()
  }, {
    key: "updateWfAddOverchargeRequest",
    value: function () {
      var _updateWfAddOverchargeRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(wfAddOverchargeRequestId, value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.connection.update({
                  "in": 'wf_add_overcharge_requests',
                  set: value,
                  where: {
                    id: Number(wfAddOverchargeRequestId)
                  }
                }).then(function (rowsUpdated) {
                  // console.log(rowsUpdated);
                  return rowsUpdated;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateWfAddOverchargeRequest(_x3, _x4) {
        return _updateWfAddOverchargeRequest.apply(this, arguments);
      }

      return updateWfAddOverchargeRequest;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.connection.count({
                  from: 'wf_add_overcharge_requests',
                  where: {
                    id: id
                  }
                });

              case 2:
                _context7.t0 = _context7.sent;
                return _context7.abrupt("return", _context7.t0 > 0);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function exists(_x5) {
        return _exists.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "updateOrCreateWfAddOverchargeRequest",
    value: function () {
      var _updateOrCreateWfAddOverchargeRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id, values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.exists(id);

              case 2:
                if (!_context8.sent) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return this.updateWfAddOverchargeRequest(id, values);

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 8:
                _context8.next = 10;
                return this.addWfAddOverchargeRequest([{
                  id: id,
                  wfable: values.wfable
                }]);

              case 10:
                return _context8.abrupt("return", _context8.sent);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateOrCreateWfAddOverchargeRequest(_x6, _x7) {
        return _updateOrCreateWfAddOverchargeRequest.apply(this, arguments);
      }

      return updateOrCreateWfAddOverchargeRequest;
    }()
  }, {
    key: "updateOrCreateWfAddOverchargeRequests",
    value: function () {
      var _updateOrCreateWfAddOverchargeRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(data)) {
                    $.each(data, /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(key, value) {
                        var resultUpdateOrCreate;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this_Class.updateOrCreateWfAddOverchargeRequest(value.id, value);

                              case 2:
                                resultUpdateOrCreate = _context9.sent;
                                result.push(resultUpdateOrCreate);
                                if (data.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      return function (_x9, _x10) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context10.next = 4;
                return promise;

              case 4:
                result = _context10.sent;
                console.log(result);
                return _context10.abrupt("return", result);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateOrCreateWfAddOverchargeRequests(_x8) {
        return _updateOrCreateWfAddOverchargeRequests.apply(this, arguments);
      }

      return updateOrCreateWfAddOverchargeRequests;
    }()
  }, {
    key: "deleteWfAddOverchargeRequests",
    value: function () {
      var _deleteWfAddOverchargeRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(wfAddOverchargeRequest_IDs) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(wfAddOverchargeRequest_IDs)) {
                    $.each(wfAddOverchargeRequest_IDs, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(key, value) {
                        var resultDelete;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this_Class.deleteWfAddOverchargeRequest(value);

                              case 2:
                                resultDelete = _context11.sent;
                                result.push(resultDelete);
                                if (wfAddOverchargeRequest_IDs.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));

                      return function (_x12, _x13) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context12.next = 4;
                return promise;

              case 4:
                result = _context12.sent;
                console.log(result);
                return _context12.abrupt("return", result);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function deleteWfAddOverchargeRequests(_x11) {
        return _deleteWfAddOverchargeRequests.apply(this, arguments);
      }

      return deleteWfAddOverchargeRequests;
    }()
  }]);

  return WfAddOverchargeRequestServices;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/database/model_services/wf_add_pay_contractor_request_services.js":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/model_services/wf_add_pay_contractor_request_services.js ***!
  \*********************************************************************************************************/
/*! exports provided: WfAddPayContractorRequestServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfAddPayContractorRequestServices", function() { return WfAddPayContractorRequestServices; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WfAddPayContractorRequestServices = /*#__PURE__*/function () {
  function WfAddPayContractorRequestServices(connection, dbName) {
    _classCallCheck(this, WfAddPayContractorRequestServices);

    this.connection = connection;
    this.dbName = dbName;
  }

  _createClass(WfAddPayContractorRequestServices, [{
    key: "getWfAddPayContractorRequests",
    value: function () {
      var _getWfAddPayContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.connection.select({
                  from: 'wf_add_pay_contractor_requests'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWfAddPayContractorRequests() {
        return _getWfAddPayContractorRequests.apply(this, arguments);
      }

      return getWfAddPayContractorRequests;
    }()
  }, {
    key: "getWfAddPayContractorRequestIDs",
    value: function () {
      var _getWfAddPayContractorRequestIDs = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connection.select({
                  from: 'wf_add_pay_contractor_requests'
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", $.map(result, function (value, key) {
                  return value.id;
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWfAddPayContractorRequestIDs() {
        return _getWfAddPayContractorRequestIDs.apply(this, arguments);
      }

      return getWfAddPayContractorRequestIDs;
    }()
  }, {
    key: "addWfAddPayContractorRequest",
    value: function () {
      var _addWfAddPayContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var wfAddPayContractorRequest,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wfAddPayContractorRequest = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                _context3.next = 3;
                return this.connection.insert({
                  into: 'wf_add_pay_contractor_requests',
                  values: wfAddPayContractorRequest
                }).then(function (rowsAdded) {
                  return rowsAdded;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addWfAddPayContractorRequest() {
        return _addWfAddPayContractorRequest.apply(this, arguments);
      }

      return addWfAddPayContractorRequest;
    }()
  }, {
    key: "deleteWfAddPayContractorRequest",
    value: function () {
      var _deleteWfAddPayContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(wfAddPayContractorRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.connection.remove({
                  from: 'wf_add_pay_contractor_requests',
                  where: {
                    id: Number(wfAddPayContractorRequestId)
                  }
                }).then(function (rowsDeleted) {
                  return rowsDeleted;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteWfAddPayContractorRequest(_x) {
        return _deleteWfAddPayContractorRequest.apply(this, arguments);
      }

      return deleteWfAddPayContractorRequest;
    }()
  }, {
    key: "getWfAddPayContractorRequest",
    value: function () {
      var _getWfAddPayContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(wfAddPayContractorRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.connection.select({
                  from: 'wf_add_pay_contractor_requests',
                  where: {
                    id: Number(wfAddPayContractorRequestId)
                  }
                }).then(function (data) {
                  // console.log(data);
                  return data;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWfAddPayContractorRequest(_x2) {
        return _getWfAddPayContractorRequest.apply(this, arguments);
      }

      return getWfAddPayContractorRequest;
    }()
  }, {
    key: "updateWfAddPayContractorRequest",
    value: function () {
      var _updateWfAddPayContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(wfAddPayContractorRequestId, value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.connection.update({
                  "in": 'wf_add_pay_contractor_requests',
                  set: value,
                  where: {
                    id: Number(wfAddPayContractorRequestId)
                  }
                }).then(function (rowsUpdated) {
                  // console.log(rowsUpdated);
                  return rowsUpdated;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateWfAddPayContractorRequest(_x3, _x4) {
        return _updateWfAddPayContractorRequest.apply(this, arguments);
      }

      return updateWfAddPayContractorRequest;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.connection.count({
                  from: 'wf_add_pay_contractor_requests',
                  where: {
                    id: id
                  }
                });

              case 2:
                _context7.t0 = _context7.sent;
                return _context7.abrupt("return", _context7.t0 > 0);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function exists(_x5) {
        return _exists.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "updateOrCreateWfAddPayContractorRequest",
    value: function () {
      var _updateOrCreateWfAddPayContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id, values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.exists(id);

              case 2:
                if (!_context8.sent) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return this.updateWfAddPayContractorRequest(id, values);

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 8:
                _context8.next = 10;
                return this.addWfAddPayContractorRequest([{
                  id: id,
                  wfable: values.wfable
                }]);

              case 10:
                return _context8.abrupt("return", _context8.sent);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateOrCreateWfAddPayContractorRequest(_x6, _x7) {
        return _updateOrCreateWfAddPayContractorRequest.apply(this, arguments);
      }

      return updateOrCreateWfAddPayContractorRequest;
    }()
  }, {
    key: "updateOrCreateWfAddPayContractorRequests",
    value: function () {
      var _updateOrCreateWfAddPayContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(data)) {
                    $.each(data, /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(key, value) {
                        var resultUpdateOrCreate;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this_Class.updateOrCreateWfAddPayContractorRequest(value.id, value);

                              case 2:
                                resultUpdateOrCreate = _context9.sent;
                                result.push(resultUpdateOrCreate);
                                if (data.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      return function (_x9, _x10) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context10.next = 4;
                return promise;

              case 4:
                result = _context10.sent;
                console.log(result);
                return _context10.abrupt("return", result);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateOrCreateWfAddPayContractorRequests(_x8) {
        return _updateOrCreateWfAddPayContractorRequests.apply(this, arguments);
      }

      return updateOrCreateWfAddPayContractorRequests;
    }()
  }, {
    key: "deleteWfAddPayContractorRequests",
    value: function () {
      var _deleteWfAddPayContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(wfAddPayContractorRequest_IDs) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(wfAddPayContractorRequest_IDs)) {
                    $.each(wfAddPayContractorRequest_IDs, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(key, value) {
                        var resultDelete;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this_Class.deleteWfAddPayContractorRequest(value);

                              case 2:
                                resultDelete = _context11.sent;
                                result.push(resultDelete);
                                if (wfAddPayContractorRequest_IDs.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));

                      return function (_x12, _x13) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context12.next = 4;
                return promise;

              case 4:
                result = _context12.sent;
                console.log(result);
                return _context12.abrupt("return", result);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function deleteWfAddPayContractorRequests(_x11) {
        return _deleteWfAddPayContractorRequests.apply(this, arguments);
      }

      return deleteWfAddPayContractorRequests;
    }()
  }]);

  return WfAddPayContractorRequestServices;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/database/model_services/wf_add_pay_good_p_contractor_request_services.js":
/*!****************************************************************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/model_services/wf_add_pay_good_p_contractor_request_services.js ***!
  \****************************************************************************************************************/
/*! exports provided: WfAddPayGood_P_ContractorRequestServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfAddPayGood_P_ContractorRequestServices", function() { return WfAddPayGood_P_ContractorRequestServices; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WfAddPayGood_P_ContractorRequestServices = /*#__PURE__*/function () {
  function WfAddPayGood_P_ContractorRequestServices(connection, dbName) {
    _classCallCheck(this, WfAddPayGood_P_ContractorRequestServices);

    this.connection = connection;
    this.dbName = dbName;
  }

  _createClass(WfAddPayGood_P_ContractorRequestServices, [{
    key: "getWfAddPayGood_P_ContractorRequests",
    value: function () {
      var _getWfAddPayGood_P_ContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.connection.select({
                  from: 'wf_add_pay_good_p_contractor_requests'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWfAddPayGood_P_ContractorRequests() {
        return _getWfAddPayGood_P_ContractorRequests.apply(this, arguments);
      }

      return getWfAddPayGood_P_ContractorRequests;
    }()
  }, {
    key: "getWfAddPayGood_P_ContractorRequestIDs",
    value: function () {
      var _getWfAddPayGood_P_ContractorRequestIDs = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connection.select({
                  from: 'wf_add_pay_good_p_contractor_requests'
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", $.map(result, function (value, key) {
                  return value.id;
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWfAddPayGood_P_ContractorRequestIDs() {
        return _getWfAddPayGood_P_ContractorRequestIDs.apply(this, arguments);
      }

      return getWfAddPayGood_P_ContractorRequestIDs;
    }()
  }, {
    key: "addWfAddPayGood_P_ContractorRequest",
    value: function () {
      var _addWfAddPayGood_P_ContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var wfAddPayGood_P_ContractorRequest,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wfAddPayGood_P_ContractorRequest = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                _context3.next = 3;
                return this.connection.insert({
                  into: 'wf_add_pay_good_p_contractor_requests',
                  values: wfAddPayGood_P_ContractorRequest
                }).then(function (rowsAdded) {
                  return rowsAdded;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addWfAddPayGood_P_ContractorRequest() {
        return _addWfAddPayGood_P_ContractorRequest.apply(this, arguments);
      }

      return addWfAddPayGood_P_ContractorRequest;
    }()
  }, {
    key: "deleteWfAddPayGood_P_ContractorRequest",
    value: function () {
      var _deleteWfAddPayGood_P_ContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(wfAddPayGood_P_ContractorRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.connection.remove({
                  from: 'wf_add_pay_good_p_contractor_requests',
                  where: {
                    id: Number(wfAddPayGood_P_ContractorRequestId)
                  }
                }).then(function (rowsDeleted) {
                  return rowsDeleted;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteWfAddPayGood_P_ContractorRequest(_x) {
        return _deleteWfAddPayGood_P_ContractorRequest.apply(this, arguments);
      }

      return deleteWfAddPayGood_P_ContractorRequest;
    }()
  }, {
    key: "getWfAddPayGood_P_ContractorRequest",
    value: function () {
      var _getWfAddPayGood_P_ContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(wfAddPayGood_P_ContractorRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.connection.select({
                  from: 'wf_add_pay_good_p_contractor_requests',
                  where: {
                    id: Number(wfAddPayGood_P_ContractorRequestId)
                  }
                }).then(function (data) {
                  // console.log(data);
                  return data;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWfAddPayGood_P_ContractorRequest(_x2) {
        return _getWfAddPayGood_P_ContractorRequest.apply(this, arguments);
      }

      return getWfAddPayGood_P_ContractorRequest;
    }()
  }, {
    key: "updateWfAddPayGood_P_ContractorRequest",
    value: function () {
      var _updateWfAddPayGood_P_ContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(wfAddPayGood_P_ContractorRequestId, value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.connection.update({
                  "in": 'wf_add_pay_good_p_contractor_requests',
                  set: value,
                  where: {
                    id: Number(wfAddPayGood_P_ContractorRequestId)
                  }
                }).then(function (rowsUpdated) {
                  // console.log(rowsUpdated);
                  return rowsUpdated;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateWfAddPayGood_P_ContractorRequest(_x3, _x4) {
        return _updateWfAddPayGood_P_ContractorRequest.apply(this, arguments);
      }

      return updateWfAddPayGood_P_ContractorRequest;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.connection.count({
                  from: 'wf_add_pay_good_p_contractor_requests',
                  where: {
                    id: id
                  }
                });

              case 2:
                _context7.t0 = _context7.sent;
                return _context7.abrupt("return", _context7.t0 > 0);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function exists(_x5) {
        return _exists.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "updateOrCreateWfAddPayGood_P_ContractorRequest",
    value: function () {
      var _updateOrCreateWfAddPayGood_P_ContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id, values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.exists(id);

              case 2:
                if (!_context8.sent) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return this.updateWfAddPayGood_P_ContractorRequest(id, values);

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 8:
                _context8.next = 10;
                return this.addWfAddPayGood_P_ContractorRequest([{
                  id: id,
                  wfable: values.wfable
                }]);

              case 10:
                return _context8.abrupt("return", _context8.sent);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateOrCreateWfAddPayGood_P_ContractorRequest(_x6, _x7) {
        return _updateOrCreateWfAddPayGood_P_ContractorRequest.apply(this, arguments);
      }

      return updateOrCreateWfAddPayGood_P_ContractorRequest;
    }()
  }, {
    key: "updateOrCreateWfAddPayGood_P_ContractorRequests",
    value: function () {
      var _updateOrCreateWfAddPayGood_P_ContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(data)) {
                    $.each(data, /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(key, value) {
                        var resultUpdateOrCreate;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this_Class.updateOrCreateWfAddPayGood_P_ContractorRequest(value.id, value);

                              case 2:
                                resultUpdateOrCreate = _context9.sent;
                                result.push(resultUpdateOrCreate);
                                if (data.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      return function (_x9, _x10) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context10.next = 4;
                return promise;

              case 4:
                result = _context10.sent;
                console.log(result);
                return _context10.abrupt("return", result);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateOrCreateWfAddPayGood_P_ContractorRequests(_x8) {
        return _updateOrCreateWfAddPayGood_P_ContractorRequests.apply(this, arguments);
      }

      return updateOrCreateWfAddPayGood_P_ContractorRequests;
    }()
  }, {
    key: "deleteWfAddPayGood_P_ContractorRequests",
    value: function () {
      var _deleteWfAddPayGood_P_ContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(wfAddPayGood_P_ContractorRequest_IDs) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(wfAddPayGood_P_ContractorRequest_IDs)) {
                    $.each(wfAddPayGood_P_ContractorRequest_IDs, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(key, value) {
                        var resultDelete;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this_Class.deleteWfAddPayGood_P_ContractorRequest(value);

                              case 2:
                                resultDelete = _context11.sent;
                                result.push(resultDelete);
                                if (wfAddPayGood_P_ContractorRequest_IDs.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));

                      return function (_x12, _x13) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context12.next = 4;
                return promise;

              case 4:
                result = _context12.sent;
                console.log(result);
                return _context12.abrupt("return", result);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function deleteWfAddPayGood_P_ContractorRequests(_x11) {
        return _deleteWfAddPayGood_P_ContractorRequests.apply(this, arguments);
      }

      return deleteWfAddPayGood_P_ContractorRequests;
    }()
  }]);

  return WfAddPayGood_P_ContractorRequestServices;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/database/model_services/wf_add_pay_request_services.js":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/model_services/wf_add_pay_request_services.js ***!
  \**********************************************************************************************/
/*! exports provided: WfAddPayRequestServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfAddPayRequestServices", function() { return WfAddPayRequestServices; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WfAddPayRequestServices = /*#__PURE__*/function () {
  function WfAddPayRequestServices(connection, dbName) {
    _classCallCheck(this, WfAddPayRequestServices);

    this.connection = connection;
    this.dbName = dbName;
  }

  _createClass(WfAddPayRequestServices, [{
    key: "getWfAddPayRequests",
    value: function () {
      var _getWfAddPayRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.connection.select({
                  from: 'wf_add_pay_requests'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWfAddPayRequests() {
        return _getWfAddPayRequests.apply(this, arguments);
      }

      return getWfAddPayRequests;
    }()
  }, {
    key: "getWfAddPayRequestIDs",
    value: function () {
      var _getWfAddPayRequestIDs = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connection.select({
                  from: 'wf_add_pay_requests'
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", $.map(result, function (value, key) {
                  return value.id;
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWfAddPayRequestIDs() {
        return _getWfAddPayRequestIDs.apply(this, arguments);
      }

      return getWfAddPayRequestIDs;
    }()
  }, {
    key: "addWfAddPayRequest",
    value: function () {
      var _addWfAddPayRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var wfAddPayRequest,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wfAddPayRequest = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                _context3.next = 3;
                return this.connection.insert({
                  into: 'wf_add_pay_requests',
                  values: wfAddPayRequest
                }).then(function (rowsAdded) {
                  return rowsAdded;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addWfAddPayRequest() {
        return _addWfAddPayRequest.apply(this, arguments);
      }

      return addWfAddPayRequest;
    }()
  }, {
    key: "deleteWfAddPayRequest",
    value: function () {
      var _deleteWfAddPayRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(wfAddPayRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.connection.remove({
                  from: 'wf_add_pay_requests',
                  where: {
                    id: Number(wfAddPayRequestId)
                  }
                }).then(function (rowsDeleted) {
                  return rowsDeleted;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteWfAddPayRequest(_x) {
        return _deleteWfAddPayRequest.apply(this, arguments);
      }

      return deleteWfAddPayRequest;
    }()
  }, {
    key: "getWfAddPayRequest",
    value: function () {
      var _getWfAddPayRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(wfAddPayRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.connection.select({
                  from: 'wf_add_pay_requests',
                  where: {
                    id: Number(wfAddPayRequestId)
                  }
                }).then(function (data) {
                  // console.log(data);
                  return data;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWfAddPayRequest(_x2) {
        return _getWfAddPayRequest.apply(this, arguments);
      }

      return getWfAddPayRequest;
    }()
  }, {
    key: "updateWfAddPayRequest",
    value: function () {
      var _updateWfAddPayRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(wfAddPayRequestId, value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.connection.update({
                  "in": 'wf_add_pay_requests',
                  set: value,
                  where: {
                    id: Number(wfAddPayRequestId)
                  }
                }).then(function (rowsUpdated) {
                  // console.log(rowsUpdated);
                  return rowsUpdated;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateWfAddPayRequest(_x3, _x4) {
        return _updateWfAddPayRequest.apply(this, arguments);
      }

      return updateWfAddPayRequest;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.connection.count({
                  from: 'wf_add_pay_requests',
                  where: {
                    id: id
                  }
                });

              case 2:
                _context7.t0 = _context7.sent;
                return _context7.abrupt("return", _context7.t0 > 0);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function exists(_x5) {
        return _exists.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "updateOrCreateWfAddPayRequest",
    value: function () {
      var _updateOrCreateWfAddPayRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id, values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.exists(id);

              case 2:
                if (!_context8.sent) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return this.updateWfAddPayRequest(id, values);

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 8:
                _context8.next = 10;
                return this.addWfAddPayRequest([{
                  id: id,
                  wfable: values.wfable
                }]);

              case 10:
                return _context8.abrupt("return", _context8.sent);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateOrCreateWfAddPayRequest(_x6, _x7) {
        return _updateOrCreateWfAddPayRequest.apply(this, arguments);
      }

      return updateOrCreateWfAddPayRequest;
    }()
  }, {
    key: "updateOrCreateWfAddPayRequests",
    value: function () {
      var _updateOrCreateWfAddPayRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(data)) {
                    $.each(data, /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(key, value) {
                        var resultUpdateOrCreate;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this_Class.updateOrCreateWfAddPayRequest(value.id, value);

                              case 2:
                                resultUpdateOrCreate = _context9.sent;
                                result.push(resultUpdateOrCreate);
                                if (data.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      return function (_x9, _x10) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context10.next = 4;
                return promise;

              case 4:
                result = _context10.sent;
                console.log(result);
                return _context10.abrupt("return", result);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateOrCreateWfAddPayRequests(_x8) {
        return _updateOrCreateWfAddPayRequests.apply(this, arguments);
      }

      return updateOrCreateWfAddPayRequests;
    }()
  }, {
    key: "deleteWfAddPayRequests",
    value: function () {
      var _deleteWfAddPayRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(wfAddPayRequest_IDs) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(wfAddPayRequest_IDs)) {
                    $.each(wfAddPayRequest_IDs, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(key, value) {
                        var resultDelete;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this_Class.deleteWfAddPayRequest(value);

                              case 2:
                                resultDelete = _context11.sent;
                                result.push(resultDelete);
                                if (wfAddPayRequest_IDs.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));

                      return function (_x12, _x13) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context12.next = 4;
                return promise;

              case 4:
                result = _context12.sent;
                console.log(result);
                return _context12.abrupt("return", result);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function deleteWfAddPayRequests(_x11) {
        return _deleteWfAddPayRequests.apply(this, arguments);
      }

      return deleteWfAddPayRequests;
    }()
  }]);

  return WfAddPayRequestServices;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/database/model_services/wf_add_purchase_request_services.js":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/model_services/wf_add_purchase_request_services.js ***!
  \***************************************************************************************************/
/*! exports provided: WfAddPurchaseRequestServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfAddPurchaseRequestServices", function() { return WfAddPurchaseRequestServices; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WfAddPurchaseRequestServices = /*#__PURE__*/function () {
  function WfAddPurchaseRequestServices(connection, dbName) {
    _classCallCheck(this, WfAddPurchaseRequestServices);

    this.connection = connection;
    this.dbName = dbName;
  }

  _createClass(WfAddPurchaseRequestServices, [{
    key: "getWfAddPurchaseRequests",
    value: function () {
      var _getWfAddPurchaseRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.connection.select({
                  from: 'wf_add_purchase_requests'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWfAddPurchaseRequests() {
        return _getWfAddPurchaseRequests.apply(this, arguments);
      }

      return getWfAddPurchaseRequests;
    }()
  }, {
    key: "getWfAddPurchaseRequestIDs",
    value: function () {
      var _getWfAddPurchaseRequestIDs = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connection.select({
                  from: 'wf_add_purchase_requests'
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", $.map(result, function (value, key) {
                  return value.id;
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWfAddPurchaseRequestIDs() {
        return _getWfAddPurchaseRequestIDs.apply(this, arguments);
      }

      return getWfAddPurchaseRequestIDs;
    }()
  }, {
    key: "addWfAddPurchaseRequest",
    value: function () {
      var _addWfAddPurchaseRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var wfAddPurchaseRequest,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wfAddPurchaseRequest = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                _context3.next = 3;
                return this.connection.insert({
                  into: 'wf_add_purchase_requests',
                  values: wfAddPurchaseRequest
                }).then(function (rowsAdded) {
                  return rowsAdded;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addWfAddPurchaseRequest() {
        return _addWfAddPurchaseRequest.apply(this, arguments);
      }

      return addWfAddPurchaseRequest;
    }()
  }, {
    key: "deleteWfAddPurchaseRequest",
    value: function () {
      var _deleteWfAddPurchaseRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(wfAddPurchaseRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.connection.remove({
                  from: 'wf_add_purchase_requests',
                  where: {
                    id: Number(wfAddPurchaseRequestId)
                  }
                }).then(function (rowsDeleted) {
                  return rowsDeleted;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteWfAddPurchaseRequest(_x) {
        return _deleteWfAddPurchaseRequest.apply(this, arguments);
      }

      return deleteWfAddPurchaseRequest;
    }()
  }, {
    key: "getWfAddPurchaseRequest",
    value: function () {
      var _getWfAddPurchaseRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(wfAddPurchaseRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.connection.select({
                  from: 'wf_add_purchase_requests',
                  where: {
                    id: Number(wfAddPurchaseRequestId)
                  }
                }).then(function (data) {
                  // console.log(data);
                  return data;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWfAddPurchaseRequest(_x2) {
        return _getWfAddPurchaseRequest.apply(this, arguments);
      }

      return getWfAddPurchaseRequest;
    }()
  }, {
    key: "updateWfAddPurchaseRequest",
    value: function () {
      var _updateWfAddPurchaseRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(wfAddPurchaseRequestId, value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.connection.update({
                  "in": 'wf_add_purchase_requests',
                  set: value,
                  where: {
                    id: Number(wfAddPurchaseRequestId)
                  }
                }).then(function (rowsUpdated) {
                  // console.log(rowsUpdated);
                  return rowsUpdated;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateWfAddPurchaseRequest(_x3, _x4) {
        return _updateWfAddPurchaseRequest.apply(this, arguments);
      }

      return updateWfAddPurchaseRequest;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.connection.count({
                  from: 'wf_add_purchase_requests',
                  where: {
                    id: id
                  }
                });

              case 2:
                _context7.t0 = _context7.sent;
                return _context7.abrupt("return", _context7.t0 > 0);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function exists(_x5) {
        return _exists.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "updateOrCreateWfAddPurchaseRequest",
    value: function () {
      var _updateOrCreateWfAddPurchaseRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id, values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.exists(id);

              case 2:
                if (!_context8.sent) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return this.updateWfAddPurchaseRequest(id, values);

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 8:
                _context8.next = 10;
                return this.addWfAddPurchaseRequest([{
                  id: id,
                  wfable: values.wfable
                }]);

              case 10:
                return _context8.abrupt("return", _context8.sent);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateOrCreateWfAddPurchaseRequest(_x6, _x7) {
        return _updateOrCreateWfAddPurchaseRequest.apply(this, arguments);
      }

      return updateOrCreateWfAddPurchaseRequest;
    }()
  }, {
    key: "updateOrCreateWfAddPurchaseRequests",
    value: function () {
      var _updateOrCreateWfAddPurchaseRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(data)) {
                    $.each(data, /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(key, value) {
                        var resultUpdateOrCreate;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this_Class.updateOrCreateWfAddPurchaseRequest(value.id, value);

                              case 2:
                                resultUpdateOrCreate = _context9.sent;
                                result.push(resultUpdateOrCreate);
                                if (data.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      return function (_x9, _x10) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context10.next = 4;
                return promise;

              case 4:
                result = _context10.sent;
                console.log(result);
                return _context10.abrupt("return", result);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateOrCreateWfAddPurchaseRequests(_x8) {
        return _updateOrCreateWfAddPurchaseRequests.apply(this, arguments);
      }

      return updateOrCreateWfAddPurchaseRequests;
    }()
  }, {
    key: "deleteWfAddPurchaseRequests",
    value: function () {
      var _deleteWfAddPurchaseRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(wfAddPurchaseRequest_IDs) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(wfAddPurchaseRequest_IDs)) {
                    $.each(wfAddPurchaseRequest_IDs, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(key, value) {
                        var resultDelete;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this_Class.deleteWfAddPurchaseRequest(value);

                              case 2:
                                resultDelete = _context11.sent;
                                result.push(resultDelete);
                                if (wfAddPurchaseRequest_IDs.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));

                      return function (_x12, _x13) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context12.next = 4;
                return promise;

              case 4:
                result = _context12.sent;
                console.log(result);
                return _context12.abrupt("return", result);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function deleteWfAddPurchaseRequests(_x11) {
        return _deleteWfAddPurchaseRequests.apply(this, arguments);
      }

      return deleteWfAddPurchaseRequests;
    }()
  }]);

  return WfAddPurchaseRequestServices;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/database/model_services/wf_edit_contractor_addendum_request_services.js":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/model_services/wf_edit_contractor_addendum_request_services.js ***!
  \***************************************************************************************************************/
/*! exports provided: WfEditContractorAddendumRequestServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfEditContractorAddendumRequestServices", function() { return WfEditContractorAddendumRequestServices; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WfEditContractorAddendumRequestServices = /*#__PURE__*/function () {
  function WfEditContractorAddendumRequestServices(connection, dbName) {
    _classCallCheck(this, WfEditContractorAddendumRequestServices);

    this.connection = connection;
    this.dbName = dbName;
  }

  _createClass(WfEditContractorAddendumRequestServices, [{
    key: "getWfEditContractorAddendumRequests",
    value: function () {
      var _getWfEditContractorAddendumRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.connection.select({
                  from: 'wf_edit_contractor_addendum_requests'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWfEditContractorAddendumRequests() {
        return _getWfEditContractorAddendumRequests.apply(this, arguments);
      }

      return getWfEditContractorAddendumRequests;
    }()
  }, {
    key: "getWfEditContractorAddendumRequestIDs",
    value: function () {
      var _getWfEditContractorAddendumRequestIDs = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connection.select({
                  from: 'wf_edit_contractor_addendum_requests'
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", $.map(result, function (value, key) {
                  return value.id;
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWfEditContractorAddendumRequestIDs() {
        return _getWfEditContractorAddendumRequestIDs.apply(this, arguments);
      }

      return getWfEditContractorAddendumRequestIDs;
    }()
  }, {
    key: "addWfEditContractorAddendumRequest",
    value: function () {
      var _addWfEditContractorAddendumRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var wfEditContractorAddendumRequest,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wfEditContractorAddendumRequest = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                _context3.next = 3;
                return this.connection.insert({
                  into: 'wf_edit_contractor_addendum_requests',
                  values: wfEditContractorAddendumRequest
                }).then(function (rowsAdded) {
                  return rowsAdded;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addWfEditContractorAddendumRequest() {
        return _addWfEditContractorAddendumRequest.apply(this, arguments);
      }

      return addWfEditContractorAddendumRequest;
    }()
  }, {
    key: "deleteWfEditContractorAddendumRequest",
    value: function () {
      var _deleteWfEditContractorAddendumRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(wfEditContractorAddendumRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.connection.remove({
                  from: 'wf_edit_contractor_addendum_requests',
                  where: {
                    id: Number(wfEditContractorAddendumRequestId)
                  }
                }).then(function (rowsDeleted) {
                  return rowsDeleted;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteWfEditContractorAddendumRequest(_x) {
        return _deleteWfEditContractorAddendumRequest.apply(this, arguments);
      }

      return deleteWfEditContractorAddendumRequest;
    }()
  }, {
    key: "getWfEditContractorAddendumRequest",
    value: function () {
      var _getWfEditContractorAddendumRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(wfEditContractorAddendumRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.connection.select({
                  from: 'wf_edit_contractor_addendum_requests',
                  where: {
                    id: Number(wfEditContractorAddendumRequestId)
                  }
                }).then(function (data) {
                  // console.log(data);
                  return data;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWfEditContractorAddendumRequest(_x2) {
        return _getWfEditContractorAddendumRequest.apply(this, arguments);
      }

      return getWfEditContractorAddendumRequest;
    }()
  }, {
    key: "updateWfEditContractorAddendumRequest",
    value: function () {
      var _updateWfEditContractorAddendumRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(wfEditContractorAddendumRequestId, value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.connection.update({
                  "in": 'wf_edit_contractor_addendum_requests',
                  set: value,
                  where: {
                    id: Number(wfEditContractorAddendumRequestId)
                  }
                }).then(function (rowsUpdated) {
                  // console.log(rowsUpdated);
                  return rowsUpdated;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateWfEditContractorAddendumRequest(_x3, _x4) {
        return _updateWfEditContractorAddendumRequest.apply(this, arguments);
      }

      return updateWfEditContractorAddendumRequest;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.connection.count({
                  from: 'wf_edit_contractor_addendum_requests',
                  where: {
                    id: id
                  }
                });

              case 2:
                _context7.t0 = _context7.sent;
                return _context7.abrupt("return", _context7.t0 > 0);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function exists(_x5) {
        return _exists.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "updateOrCreateWfEditContractorAddendumRequest",
    value: function () {
      var _updateOrCreateWfEditContractorAddendumRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id, values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.exists(id);

              case 2:
                if (!_context8.sent) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return this.updateWfEditContractorAddendumRequest(id, values);

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 8:
                _context8.next = 10;
                return this.addWfEditContractorAddendumRequest([{
                  id: id,
                  wfable: values.wfable
                }]);

              case 10:
                return _context8.abrupt("return", _context8.sent);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateOrCreateWfEditContractorAddendumRequest(_x6, _x7) {
        return _updateOrCreateWfEditContractorAddendumRequest.apply(this, arguments);
      }

      return updateOrCreateWfEditContractorAddendumRequest;
    }()
  }, {
    key: "updateOrCreateWfEditContractorAddendumRequests",
    value: function () {
      var _updateOrCreateWfEditContractorAddendumRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(data)) {
                    $.each(data, /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(key, value) {
                        var resultUpdateOrCreate;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this_Class.updateOrCreateWfEditContractorAddendumRequest(value.id, value);

                              case 2:
                                resultUpdateOrCreate = _context9.sent;
                                result.push(resultUpdateOrCreate);
                                if (data.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      return function (_x9, _x10) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context10.next = 4;
                return promise;

              case 4:
                result = _context10.sent;
                console.log(result);
                return _context10.abrupt("return", result);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateOrCreateWfEditContractorAddendumRequests(_x8) {
        return _updateOrCreateWfEditContractorAddendumRequests.apply(this, arguments);
      }

      return updateOrCreateWfEditContractorAddendumRequests;
    }()
  }, {
    key: "deleteWfEditContractorAddendumRequests",
    value: function () {
      var _deleteWfEditContractorAddendumRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(wfEditContractorAddendumRequest_IDs) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(wfEditContractorAddendumRequest_IDs)) {
                    $.each(wfEditContractorAddendumRequest_IDs, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(key, value) {
                        var resultDelete;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this_Class.deleteWfEditContractorAddendumRequest(value);

                              case 2:
                                resultDelete = _context11.sent;
                                result.push(resultDelete);
                                if (wfEditContractorAddendumRequest_IDs.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));

                      return function (_x12, _x13) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context12.next = 4;
                return promise;

              case 4:
                result = _context12.sent;
                console.log(result);
                return _context12.abrupt("return", result);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function deleteWfEditContractorAddendumRequests(_x11) {
        return _deleteWfEditContractorAddendumRequests.apply(this, arguments);
      }

      return deleteWfEditContractorAddendumRequests;
    }()
  }]);

  return WfEditContractorAddendumRequestServices;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/database/model_services/wf_edit_contractor_request_services.js":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/model_services/wf_edit_contractor_request_services.js ***!
  \******************************************************************************************************/
/*! exports provided: WfEditContractorRequestServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfEditContractorRequestServices", function() { return WfEditContractorRequestServices; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WfEditContractorRequestServices = /*#__PURE__*/function () {
  function WfEditContractorRequestServices(connection, dbName) {
    _classCallCheck(this, WfEditContractorRequestServices);

    this.connection = connection;
    this.dbName = dbName;
  }

  _createClass(WfEditContractorRequestServices, [{
    key: "getWfEditContractorRequests",
    value: function () {
      var _getWfEditContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.connection.select({
                  from: 'wf_edit_contractor_requests'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWfEditContractorRequests() {
        return _getWfEditContractorRequests.apply(this, arguments);
      }

      return getWfEditContractorRequests;
    }()
  }, {
    key: "getWfEditContractorRequestIDs",
    value: function () {
      var _getWfEditContractorRequestIDs = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connection.select({
                  from: 'wf_edit_contractor_requests'
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", $.map(result, function (value, key) {
                  return value.id;
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWfEditContractorRequestIDs() {
        return _getWfEditContractorRequestIDs.apply(this, arguments);
      }

      return getWfEditContractorRequestIDs;
    }()
  }, {
    key: "addWfEditContractorRequest",
    value: function () {
      var _addWfEditContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var wfEditContractorRequest,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wfEditContractorRequest = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                _context3.next = 3;
                return this.connection.insert({
                  into: 'wf_edit_contractor_requests',
                  values: wfEditContractorRequest
                }).then(function (rowsAdded) {
                  return rowsAdded;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addWfEditContractorRequest() {
        return _addWfEditContractorRequest.apply(this, arguments);
      }

      return addWfEditContractorRequest;
    }()
  }, {
    key: "deleteWfEditContractorRequest",
    value: function () {
      var _deleteWfEditContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(wfEditContractorRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.connection.remove({
                  from: 'wf_edit_contractor_requests',
                  where: {
                    id: Number(wfEditContractorRequestId)
                  }
                }).then(function (rowsDeleted) {
                  return rowsDeleted;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteWfEditContractorRequest(_x) {
        return _deleteWfEditContractorRequest.apply(this, arguments);
      }

      return deleteWfEditContractorRequest;
    }()
  }, {
    key: "getWfEditContractorRequest",
    value: function () {
      var _getWfEditContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(wfEditContractorRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.connection.select({
                  from: 'wf_edit_contractor_requests',
                  where: {
                    id: Number(wfEditContractorRequestId)
                  }
                }).then(function (data) {
                  // console.log(data);
                  return data;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWfEditContractorRequest(_x2) {
        return _getWfEditContractorRequest.apply(this, arguments);
      }

      return getWfEditContractorRequest;
    }()
  }, {
    key: "updateWfEditContractorRequest",
    value: function () {
      var _updateWfEditContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(wfEditContractorRequestId, value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.connection.update({
                  "in": 'wf_edit_contractor_requests',
                  set: value,
                  where: {
                    id: Number(wfEditContractorRequestId)
                  }
                }).then(function (rowsUpdated) {
                  // console.log(rowsUpdated);
                  return rowsUpdated;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateWfEditContractorRequest(_x3, _x4) {
        return _updateWfEditContractorRequest.apply(this, arguments);
      }

      return updateWfEditContractorRequest;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.connection.count({
                  from: 'wf_edit_contractor_requests',
                  where: {
                    id: id
                  }
                });

              case 2:
                _context7.t0 = _context7.sent;
                return _context7.abrupt("return", _context7.t0 > 0);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function exists(_x5) {
        return _exists.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "updateOrCreateWfEditContractorRequest",
    value: function () {
      var _updateOrCreateWfEditContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id, values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.exists(id);

              case 2:
                if (!_context8.sent) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return this.updateWfEditContractorRequest(id, values);

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 8:
                _context8.next = 10;
                return this.addWfEditContractorRequest([{
                  id: id,
                  wfable: values.wfable
                }]);

              case 10:
                return _context8.abrupt("return", _context8.sent);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateOrCreateWfEditContractorRequest(_x6, _x7) {
        return _updateOrCreateWfEditContractorRequest.apply(this, arguments);
      }

      return updateOrCreateWfEditContractorRequest;
    }()
  }, {
    key: "updateOrCreateWfEditContractorRequests",
    value: function () {
      var _updateOrCreateWfEditContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(data)) {
                    $.each(data, /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(key, value) {
                        var resultUpdateOrCreate;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this_Class.updateOrCreateWfEditContractorRequest(value.id, value);

                              case 2:
                                resultUpdateOrCreate = _context9.sent;
                                result.push(resultUpdateOrCreate);
                                if (data.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      return function (_x9, _x10) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context10.next = 4;
                return promise;

              case 4:
                result = _context10.sent;
                console.log(result);
                return _context10.abrupt("return", result);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateOrCreateWfEditContractorRequests(_x8) {
        return _updateOrCreateWfEditContractorRequests.apply(this, arguments);
      }

      return updateOrCreateWfEditContractorRequests;
    }()
  }, {
    key: "deleteWfEditContractorRequests",
    value: function () {
      var _deleteWfEditContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(wfEditContractorRequest_IDs) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(wfEditContractorRequest_IDs)) {
                    $.each(wfEditContractorRequest_IDs, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(key, value) {
                        var resultDelete;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this_Class.deleteWfEditContractorRequest(value);

                              case 2:
                                resultDelete = _context11.sent;
                                result.push(resultDelete);
                                if (wfEditContractorRequest_IDs.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));

                      return function (_x12, _x13) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context12.next = 4;
                return promise;

              case 4:
                result = _context12.sent;
                console.log(result);
                return _context12.abrupt("return", result);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function deleteWfEditContractorRequests(_x11) {
        return _deleteWfEditContractorRequests.apply(this, arguments);
      }

      return deleteWfEditContractorRequests;
    }()
  }]);

  return WfEditContractorRequestServices;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/database/model_services/wf_edit_monthly_fee_payment_request_services.js":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/model_services/wf_edit_monthly_fee_payment_request_services.js ***!
  \***************************************************************************************************************/
/*! exports provided: WfEditMonthlyFeePaymentRequestServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfEditMonthlyFeePaymentRequestServices", function() { return WfEditMonthlyFeePaymentRequestServices; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WfEditMonthlyFeePaymentRequestServices = /*#__PURE__*/function () {
  function WfEditMonthlyFeePaymentRequestServices(connection, dbName) {
    _classCallCheck(this, WfEditMonthlyFeePaymentRequestServices);

    this.connection = connection;
    this.dbName = dbName;
  }

  _createClass(WfEditMonthlyFeePaymentRequestServices, [{
    key: "getWfEditMonthlyFeePaymentRequests",
    value: function () {
      var _getWfEditMonthlyFeePaymentRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.connection.select({
                  from: 'wf_edit_monthly_fee_payment_requests'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWfEditMonthlyFeePaymentRequests() {
        return _getWfEditMonthlyFeePaymentRequests.apply(this, arguments);
      }

      return getWfEditMonthlyFeePaymentRequests;
    }()
  }, {
    key: "getWfEditMonthlyFeePaymentRequestIDs",
    value: function () {
      var _getWfEditMonthlyFeePaymentRequestIDs = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connection.select({
                  from: 'wf_edit_monthly_fee_payment_requests'
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", $.map(result, function (value, key) {
                  return value.id;
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWfEditMonthlyFeePaymentRequestIDs() {
        return _getWfEditMonthlyFeePaymentRequestIDs.apply(this, arguments);
      }

      return getWfEditMonthlyFeePaymentRequestIDs;
    }()
  }, {
    key: "addWfEditMonthlyFeePaymentRequest",
    value: function () {
      var _addWfEditMonthlyFeePaymentRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var wfEditMonthlyFeePaymentRequest,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wfEditMonthlyFeePaymentRequest = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                _context3.next = 3;
                return this.connection.insert({
                  into: 'wf_edit_monthly_fee_payment_requests',
                  values: wfEditMonthlyFeePaymentRequest
                }).then(function (rowsAdded) {
                  return rowsAdded;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addWfEditMonthlyFeePaymentRequest() {
        return _addWfEditMonthlyFeePaymentRequest.apply(this, arguments);
      }

      return addWfEditMonthlyFeePaymentRequest;
    }()
  }, {
    key: "deleteWfEditMonthlyFeePaymentRequest",
    value: function () {
      var _deleteWfEditMonthlyFeePaymentRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(wfEditMonthlyFeePaymentRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.connection.remove({
                  from: 'wf_edit_monthly_fee_payment_requests',
                  where: {
                    id: Number(wfEditMonthlyFeePaymentRequestId)
                  }
                }).then(function (rowsDeleted) {
                  return rowsDeleted;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteWfEditMonthlyFeePaymentRequest(_x) {
        return _deleteWfEditMonthlyFeePaymentRequest.apply(this, arguments);
      }

      return deleteWfEditMonthlyFeePaymentRequest;
    }()
  }, {
    key: "getWfEditMonthlyFeePaymentRequest",
    value: function () {
      var _getWfEditMonthlyFeePaymentRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(wfEditMonthlyFeePaymentRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.connection.select({
                  from: 'wf_edit_monthly_fee_payment_requests',
                  where: {
                    id: Number(wfEditMonthlyFeePaymentRequestId)
                  }
                }).then(function (data) {
                  // console.log(data);
                  return data;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWfEditMonthlyFeePaymentRequest(_x2) {
        return _getWfEditMonthlyFeePaymentRequest.apply(this, arguments);
      }

      return getWfEditMonthlyFeePaymentRequest;
    }()
  }, {
    key: "updateWfEditMonthlyFeePaymentRequest",
    value: function () {
      var _updateWfEditMonthlyFeePaymentRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(wfEditMonthlyFeePaymentRequestId, value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.connection.update({
                  "in": 'wf_edit_monthly_fee_payment_requests',
                  set: value,
                  where: {
                    id: Number(wfEditMonthlyFeePaymentRequestId)
                  }
                }).then(function (rowsUpdated) {
                  // console.log(rowsUpdated);
                  return rowsUpdated;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateWfEditMonthlyFeePaymentRequest(_x3, _x4) {
        return _updateWfEditMonthlyFeePaymentRequest.apply(this, arguments);
      }

      return updateWfEditMonthlyFeePaymentRequest;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.connection.count({
                  from: 'wf_edit_monthly_fee_payment_requests',
                  where: {
                    id: id
                  }
                });

              case 2:
                _context7.t0 = _context7.sent;
                return _context7.abrupt("return", _context7.t0 > 0);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function exists(_x5) {
        return _exists.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "updateOrCreateWfEditMonthlyFeePaymentRequest",
    value: function () {
      var _updateOrCreateWfEditMonthlyFeePaymentRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id, values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.exists(id);

              case 2:
                if (!_context8.sent) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return this.updateWfEditMonthlyFeePaymentRequest(id, values);

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 8:
                _context8.next = 10;
                return this.addWfEditMonthlyFeePaymentRequest([{
                  id: id,
                  wfable: values.wfable
                }]);

              case 10:
                return _context8.abrupt("return", _context8.sent);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateOrCreateWfEditMonthlyFeePaymentRequest(_x6, _x7) {
        return _updateOrCreateWfEditMonthlyFeePaymentRequest.apply(this, arguments);
      }

      return updateOrCreateWfEditMonthlyFeePaymentRequest;
    }()
  }, {
    key: "updateOrCreateWfEditMonthlyFeePaymentRequests",
    value: function () {
      var _updateOrCreateWfEditMonthlyFeePaymentRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(data)) {
                    $.each(data, /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(key, value) {
                        var resultUpdateOrCreate;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this_Class.updateOrCreateWfEditMonthlyFeePaymentRequest(value.id, value);

                              case 2:
                                resultUpdateOrCreate = _context9.sent;
                                result.push(resultUpdateOrCreate);
                                if (data.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      return function (_x9, _x10) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context10.next = 4;
                return promise;

              case 4:
                result = _context10.sent;
                console.log(result);
                return _context10.abrupt("return", result);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateOrCreateWfEditMonthlyFeePaymentRequests(_x8) {
        return _updateOrCreateWfEditMonthlyFeePaymentRequests.apply(this, arguments);
      }

      return updateOrCreateWfEditMonthlyFeePaymentRequests;
    }()
  }, {
    key: "deleteWfEditMonthlyFeePaymentRequests",
    value: function () {
      var _deleteWfEditMonthlyFeePaymentRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(wfEditMonthlyFeePaymentRequest_IDs) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(wfEditMonthlyFeePaymentRequest_IDs)) {
                    $.each(wfEditMonthlyFeePaymentRequest_IDs, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(key, value) {
                        var resultDelete;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this_Class.deleteWfEditMonthlyFeePaymentRequest(value);

                              case 2:
                                resultDelete = _context11.sent;
                                result.push(resultDelete);
                                if (wfEditMonthlyFeePaymentRequest_IDs.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));

                      return function (_x12, _x13) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context12.next = 4;
                return promise;

              case 4:
                result = _context12.sent;
                console.log(result);
                return _context12.abrupt("return", result);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function deleteWfEditMonthlyFeePaymentRequests(_x11) {
        return _deleteWfEditMonthlyFeePaymentRequests.apply(this, arguments);
      }

      return deleteWfEditMonthlyFeePaymentRequests;
    }()
  }]);

  return WfEditMonthlyFeePaymentRequestServices;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/database/model_services/wf_edit_overcharge_request_services.js":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/model_services/wf_edit_overcharge_request_services.js ***!
  \******************************************************************************************************/
/*! exports provided: WfEditOverchargeRequestServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfEditOverchargeRequestServices", function() { return WfEditOverchargeRequestServices; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WfEditOverchargeRequestServices = /*#__PURE__*/function () {
  function WfEditOverchargeRequestServices(connection, dbName) {
    _classCallCheck(this, WfEditOverchargeRequestServices);

    this.connection = connection;
    this.dbName = dbName;
  }

  _createClass(WfEditOverchargeRequestServices, [{
    key: "getWfEditOverchargeRequests",
    value: function () {
      var _getWfEditOverchargeRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.connection.select({
                  from: 'wf_edit_overcharge_requests'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWfEditOverchargeRequests() {
        return _getWfEditOverchargeRequests.apply(this, arguments);
      }

      return getWfEditOverchargeRequests;
    }()
  }, {
    key: "getWfEditOverchargeRequestIDs",
    value: function () {
      var _getWfEditOverchargeRequestIDs = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connection.select({
                  from: 'wf_edit_overcharge_requests'
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", $.map(result, function (value, key) {
                  return value.id;
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWfEditOverchargeRequestIDs() {
        return _getWfEditOverchargeRequestIDs.apply(this, arguments);
      }

      return getWfEditOverchargeRequestIDs;
    }()
  }, {
    key: "addWfEditOverchargeRequest",
    value: function () {
      var _addWfEditOverchargeRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var wfEditOverchargeRequest,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wfEditOverchargeRequest = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                _context3.next = 3;
                return this.connection.insert({
                  into: 'wf_edit_overcharge_requests',
                  values: wfEditOverchargeRequest
                }).then(function (rowsAdded) {
                  return rowsAdded;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addWfEditOverchargeRequest() {
        return _addWfEditOverchargeRequest.apply(this, arguments);
      }

      return addWfEditOverchargeRequest;
    }()
  }, {
    key: "deleteWfEditOverchargeRequest",
    value: function () {
      var _deleteWfEditOverchargeRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(wfEditOverchargeRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.connection.remove({
                  from: 'wf_edit_overcharge_requests',
                  where: {
                    id: Number(wfEditOverchargeRequestId)
                  }
                }).then(function (rowsDeleted) {
                  return rowsDeleted;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteWfEditOverchargeRequest(_x) {
        return _deleteWfEditOverchargeRequest.apply(this, arguments);
      }

      return deleteWfEditOverchargeRequest;
    }()
  }, {
    key: "getWfEditOverchargeRequest",
    value: function () {
      var _getWfEditOverchargeRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(wfEditOverchargeRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.connection.select({
                  from: 'wf_edit_overcharge_requests',
                  where: {
                    id: Number(wfEditOverchargeRequestId)
                  }
                }).then(function (data) {
                  // console.log(data);
                  return data;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWfEditOverchargeRequest(_x2) {
        return _getWfEditOverchargeRequest.apply(this, arguments);
      }

      return getWfEditOverchargeRequest;
    }()
  }, {
    key: "updateWfEditOverchargeRequest",
    value: function () {
      var _updateWfEditOverchargeRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(wfEditOverchargeRequestId, value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.connection.update({
                  "in": 'wf_edit_overcharge_requests',
                  set: value,
                  where: {
                    id: Number(wfEditOverchargeRequestId)
                  }
                }).then(function (rowsUpdated) {
                  // console.log(rowsUpdated);
                  return rowsUpdated;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateWfEditOverchargeRequest(_x3, _x4) {
        return _updateWfEditOverchargeRequest.apply(this, arguments);
      }

      return updateWfEditOverchargeRequest;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.connection.count({
                  from: 'wf_edit_overcharge_requests',
                  where: {
                    id: id
                  }
                });

              case 2:
                _context7.t0 = _context7.sent;
                return _context7.abrupt("return", _context7.t0 > 0);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function exists(_x5) {
        return _exists.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "updateOrCreateWfEditOverchargeRequest",
    value: function () {
      var _updateOrCreateWfEditOverchargeRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id, values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.exists(id);

              case 2:
                if (!_context8.sent) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return this.updateWfEditOverchargeRequest(id, values);

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 8:
                _context8.next = 10;
                return this.addWfEditOverchargeRequest([{
                  id: id,
                  wfable: values.wfable
                }]);

              case 10:
                return _context8.abrupt("return", _context8.sent);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateOrCreateWfEditOverchargeRequest(_x6, _x7) {
        return _updateOrCreateWfEditOverchargeRequest.apply(this, arguments);
      }

      return updateOrCreateWfEditOverchargeRequest;
    }()
  }, {
    key: "updateOrCreateWfEditOverchargeRequests",
    value: function () {
      var _updateOrCreateWfEditOverchargeRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(data)) {
                    $.each(data, /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(key, value) {
                        var resultUpdateOrCreate;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this_Class.updateOrCreateWfEditOverchargeRequest(value.id, value);

                              case 2:
                                resultUpdateOrCreate = _context9.sent;
                                result.push(resultUpdateOrCreate);
                                if (data.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      return function (_x9, _x10) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context10.next = 4;
                return promise;

              case 4:
                result = _context10.sent;
                console.log(result);
                return _context10.abrupt("return", result);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateOrCreateWfEditOverchargeRequests(_x8) {
        return _updateOrCreateWfEditOverchargeRequests.apply(this, arguments);
      }

      return updateOrCreateWfEditOverchargeRequests;
    }()
  }, {
    key: "deleteWfEditOverchargeRequests",
    value: function () {
      var _deleteWfEditOverchargeRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(wfEditOverchargeRequest_IDs) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(wfEditOverchargeRequest_IDs)) {
                    $.each(wfEditOverchargeRequest_IDs, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(key, value) {
                        var resultDelete;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this_Class.deleteWfEditOverchargeRequest(value);

                              case 2:
                                resultDelete = _context11.sent;
                                result.push(resultDelete);
                                if (wfEditOverchargeRequest_IDs.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));

                      return function (_x12, _x13) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context12.next = 4;
                return promise;

              case 4:
                result = _context12.sent;
                console.log(result);
                return _context12.abrupt("return", result);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function deleteWfEditOverchargeRequests(_x11) {
        return _deleteWfEditOverchargeRequests.apply(this, arguments);
      }

      return deleteWfEditOverchargeRequests;
    }()
  }]);

  return WfEditOverchargeRequestServices;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/database/model_services/wf_edit_pay_contractor_request_services.js":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/model_services/wf_edit_pay_contractor_request_services.js ***!
  \**********************************************************************************************************/
/*! exports provided: WfEditPayContractorRequestServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfEditPayContractorRequestServices", function() { return WfEditPayContractorRequestServices; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WfEditPayContractorRequestServices = /*#__PURE__*/function () {
  function WfEditPayContractorRequestServices(connection, dbName) {
    _classCallCheck(this, WfEditPayContractorRequestServices);

    this.connection = connection;
    this.dbName = dbName;
  }

  _createClass(WfEditPayContractorRequestServices, [{
    key: "getWfEditPayContractorRequests",
    value: function () {
      var _getWfEditPayContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.connection.select({
                  from: 'wf_edit_pay_contractor_requests'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWfEditPayContractorRequests() {
        return _getWfEditPayContractorRequests.apply(this, arguments);
      }

      return getWfEditPayContractorRequests;
    }()
  }, {
    key: "getWfEditPayContractorRequestIDs",
    value: function () {
      var _getWfEditPayContractorRequestIDs = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connection.select({
                  from: 'wf_edit_pay_contractor_requests'
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", $.map(result, function (value, key) {
                  return value.id;
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWfEditPayContractorRequestIDs() {
        return _getWfEditPayContractorRequestIDs.apply(this, arguments);
      }

      return getWfEditPayContractorRequestIDs;
    }()
  }, {
    key: "addWfEditPayContractorRequest",
    value: function () {
      var _addWfEditPayContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var wfEditPayContractorRequest,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wfEditPayContractorRequest = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                _context3.next = 3;
                return this.connection.insert({
                  into: 'wf_edit_pay_contractor_requests',
                  values: wfEditPayContractorRequest
                }).then(function (rowsAdded) {
                  return rowsAdded;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addWfEditPayContractorRequest() {
        return _addWfEditPayContractorRequest.apply(this, arguments);
      }

      return addWfEditPayContractorRequest;
    }()
  }, {
    key: "deleteWfEditPayContractorRequest",
    value: function () {
      var _deleteWfEditPayContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(wfEditPayContractorRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.connection.remove({
                  from: 'wf_edit_pay_contractor_requests',
                  where: {
                    id: Number(wfEditPayContractorRequestId)
                  }
                }).then(function (rowsDeleted) {
                  return rowsDeleted;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteWfEditPayContractorRequest(_x) {
        return _deleteWfEditPayContractorRequest.apply(this, arguments);
      }

      return deleteWfEditPayContractorRequest;
    }()
  }, {
    key: "getWfEditPayContractorRequest",
    value: function () {
      var _getWfEditPayContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(wfEditPayContractorRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.connection.select({
                  from: 'wf_edit_pay_contractor_requests',
                  where: {
                    id: Number(wfEditPayContractorRequestId)
                  }
                }).then(function (data) {
                  // console.log(data);
                  return data;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWfEditPayContractorRequest(_x2) {
        return _getWfEditPayContractorRequest.apply(this, arguments);
      }

      return getWfEditPayContractorRequest;
    }()
  }, {
    key: "updateWfEditPayContractorRequest",
    value: function () {
      var _updateWfEditPayContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(wfEditPayContractorRequestId, value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.connection.update({
                  "in": 'wf_edit_pay_contractor_requests',
                  set: value,
                  where: {
                    id: Number(wfEditPayContractorRequestId)
                  }
                }).then(function (rowsUpdated) {
                  // console.log(rowsUpdated);
                  return rowsUpdated;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateWfEditPayContractorRequest(_x3, _x4) {
        return _updateWfEditPayContractorRequest.apply(this, arguments);
      }

      return updateWfEditPayContractorRequest;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.connection.count({
                  from: 'wf_edit_pay_contractor_requests',
                  where: {
                    id: id
                  }
                });

              case 2:
                _context7.t0 = _context7.sent;
                return _context7.abrupt("return", _context7.t0 > 0);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function exists(_x5) {
        return _exists.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "updateOrCreateWfEditPayContractorRequest",
    value: function () {
      var _updateOrCreateWfEditPayContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id, values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.exists(id);

              case 2:
                if (!_context8.sent) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return this.updateWfEditPayContractorRequest(id, values);

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 8:
                _context8.next = 10;
                return this.addWfEditPayContractorRequest([{
                  id: id,
                  wfable: values.wfable
                }]);

              case 10:
                return _context8.abrupt("return", _context8.sent);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateOrCreateWfEditPayContractorRequest(_x6, _x7) {
        return _updateOrCreateWfEditPayContractorRequest.apply(this, arguments);
      }

      return updateOrCreateWfEditPayContractorRequest;
    }()
  }, {
    key: "updateOrCreateWfEditPayContractorRequests",
    value: function () {
      var _updateOrCreateWfEditPayContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(data)) {
                    $.each(data, /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(key, value) {
                        var resultUpdateOrCreate;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this_Class.updateOrCreateWfEditPayContractorRequest(value.id, value);

                              case 2:
                                resultUpdateOrCreate = _context9.sent;
                                result.push(resultUpdateOrCreate);
                                if (data.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      return function (_x9, _x10) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context10.next = 4;
                return promise;

              case 4:
                result = _context10.sent;
                console.log(result);
                return _context10.abrupt("return", result);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateOrCreateWfEditPayContractorRequests(_x8) {
        return _updateOrCreateWfEditPayContractorRequests.apply(this, arguments);
      }

      return updateOrCreateWfEditPayContractorRequests;
    }()
  }, {
    key: "deleteWfEditPayContractorRequests",
    value: function () {
      var _deleteWfEditPayContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(wfEditPayContractorRequest_IDs) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(wfEditPayContractorRequest_IDs)) {
                    $.each(wfEditPayContractorRequest_IDs, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(key, value) {
                        var resultDelete;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this_Class.deleteWfEditPayContractorRequest(value);

                              case 2:
                                resultDelete = _context11.sent;
                                result.push(resultDelete);
                                if (wfEditPayContractorRequest_IDs.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));

                      return function (_x12, _x13) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context12.next = 4;
                return promise;

              case 4:
                result = _context12.sent;
                console.log(result);
                return _context12.abrupt("return", result);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function deleteWfEditPayContractorRequests(_x11) {
        return _deleteWfEditPayContractorRequests.apply(this, arguments);
      }

      return deleteWfEditPayContractorRequests;
    }()
  }]);

  return WfEditPayContractorRequestServices;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/database/model_services/wf_edit_pay_good_p_contractor_request_services.js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/model_services/wf_edit_pay_good_p_contractor_request_services.js ***!
  \*****************************************************************************************************************/
/*! exports provided: WfEditPayGood_P_ContractorRequestServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfEditPayGood_P_ContractorRequestServices", function() { return WfEditPayGood_P_ContractorRequestServices; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WfEditPayGood_P_ContractorRequestServices = /*#__PURE__*/function () {
  function WfEditPayGood_P_ContractorRequestServices(connection, dbName) {
    _classCallCheck(this, WfEditPayGood_P_ContractorRequestServices);

    this.connection = connection;
    this.dbName = dbName;
  }

  _createClass(WfEditPayGood_P_ContractorRequestServices, [{
    key: "getWfEditPayGood_P_ContractorRequests",
    value: function () {
      var _getWfEditPayGood_P_ContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.connection.select({
                  from: 'wf_edit_pay_good_p_contractor_requests'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWfEditPayGood_P_ContractorRequests() {
        return _getWfEditPayGood_P_ContractorRequests.apply(this, arguments);
      }

      return getWfEditPayGood_P_ContractorRequests;
    }()
  }, {
    key: "getWfEditPayGood_P_ContractorRequestIDs",
    value: function () {
      var _getWfEditPayGood_P_ContractorRequestIDs = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connection.select({
                  from: 'wf_edit_pay_good_p_contractor_requests'
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", $.map(result, function (value, key) {
                  return value.id;
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWfEditPayGood_P_ContractorRequestIDs() {
        return _getWfEditPayGood_P_ContractorRequestIDs.apply(this, arguments);
      }

      return getWfEditPayGood_P_ContractorRequestIDs;
    }()
  }, {
    key: "addWfEditPayGood_P_ContractorRequest",
    value: function () {
      var _addWfEditPayGood_P_ContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var wfEditPayGood_P_ContractorRequest,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wfEditPayGood_P_ContractorRequest = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                _context3.next = 3;
                return this.connection.insert({
                  into: 'wf_edit_pay_good_p_contractor_requests',
                  values: wfEditPayGood_P_ContractorRequest
                }).then(function (rowsAdded) {
                  return rowsAdded;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addWfEditPayGood_P_ContractorRequest() {
        return _addWfEditPayGood_P_ContractorRequest.apply(this, arguments);
      }

      return addWfEditPayGood_P_ContractorRequest;
    }()
  }, {
    key: "deleteWfEditPayGood_P_ContractorRequest",
    value: function () {
      var _deleteWfEditPayGood_P_ContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(wfEditPayGood_P_ContractorRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.connection.remove({
                  from: 'wf_edit_pay_good_p_contractor_requests',
                  where: {
                    id: Number(wfEditPayGood_P_ContractorRequestId)
                  }
                }).then(function (rowsDeleted) {
                  return rowsDeleted;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteWfEditPayGood_P_ContractorRequest(_x) {
        return _deleteWfEditPayGood_P_ContractorRequest.apply(this, arguments);
      }

      return deleteWfEditPayGood_P_ContractorRequest;
    }()
  }, {
    key: "getWfEditPayGood_P_ContractorRequest",
    value: function () {
      var _getWfEditPayGood_P_ContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(wfEditPayGood_P_ContractorRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.connection.select({
                  from: 'wf_edit_pay_good_p_contractor_requests',
                  where: {
                    id: Number(wfEditPayGood_P_ContractorRequestId)
                  }
                }).then(function (data) {
                  // console.log(data);
                  return data;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWfEditPayGood_P_ContractorRequest(_x2) {
        return _getWfEditPayGood_P_ContractorRequest.apply(this, arguments);
      }

      return getWfEditPayGood_P_ContractorRequest;
    }()
  }, {
    key: "updateWfEditPayGood_P_ContractorRequest",
    value: function () {
      var _updateWfEditPayGood_P_ContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(wfEditPayGood_P_ContractorRequestId, value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.connection.update({
                  "in": 'wf_edit_pay_good_p_contractor_requests',
                  set: value,
                  where: {
                    id: Number(wfEditPayGood_P_ContractorRequestId)
                  }
                }).then(function (rowsUpdated) {
                  // console.log(rowsUpdated);
                  return rowsUpdated;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateWfEditPayGood_P_ContractorRequest(_x3, _x4) {
        return _updateWfEditPayGood_P_ContractorRequest.apply(this, arguments);
      }

      return updateWfEditPayGood_P_ContractorRequest;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.connection.count({
                  from: 'wf_edit_pay_good_p_contractor_requests',
                  where: {
                    id: id
                  }
                });

              case 2:
                _context7.t0 = _context7.sent;
                return _context7.abrupt("return", _context7.t0 > 0);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function exists(_x5) {
        return _exists.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "updateOrCreateWfEditPayGood_P_ContractorRequest",
    value: function () {
      var _updateOrCreateWfEditPayGood_P_ContractorRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id, values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.exists(id);

              case 2:
                if (!_context8.sent) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return this.updateWfEditPayGood_P_ContractorRequest(id, values);

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 8:
                _context8.next = 10;
                return this.addWfEditPayGood_P_ContractorRequest([{
                  id: id,
                  wfable: values.wfable
                }]);

              case 10:
                return _context8.abrupt("return", _context8.sent);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateOrCreateWfEditPayGood_P_ContractorRequest(_x6, _x7) {
        return _updateOrCreateWfEditPayGood_P_ContractorRequest.apply(this, arguments);
      }

      return updateOrCreateWfEditPayGood_P_ContractorRequest;
    }()
  }, {
    key: "updateOrCreateWfEditPayGood_P_ContractorRequests",
    value: function () {
      var _updateOrCreateWfEditPayGood_P_ContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(data)) {
                    $.each(data, /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(key, value) {
                        var resultUpdateOrCreate;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this_Class.updateOrCreateWfEditPayGood_P_ContractorRequest(value.id, value);

                              case 2:
                                resultUpdateOrCreate = _context9.sent;
                                result.push(resultUpdateOrCreate);
                                if (data.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      return function (_x9, _x10) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context10.next = 4;
                return promise;

              case 4:
                result = _context10.sent;
                console.log(result);
                return _context10.abrupt("return", result);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateOrCreateWfEditPayGood_P_ContractorRequests(_x8) {
        return _updateOrCreateWfEditPayGood_P_ContractorRequests.apply(this, arguments);
      }

      return updateOrCreateWfEditPayGood_P_ContractorRequests;
    }()
  }, {
    key: "deleteWfEditPayGood_P_ContractorRequests",
    value: function () {
      var _deleteWfEditPayGood_P_ContractorRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(wfEditPayGood_P_ContractorRequest_IDs) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(wfEditPayGood_P_ContractorRequest_IDs)) {
                    $.each(wfEditPayGood_P_ContractorRequest_IDs, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(key, value) {
                        var resultDelete;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this_Class.deleteWfEditPayGood_P_ContractorRequest(value);

                              case 2:
                                resultDelete = _context11.sent;
                                result.push(resultDelete);
                                if (wfEditPayGood_P_ContractorRequest_IDs.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));

                      return function (_x12, _x13) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context12.next = 4;
                return promise;

              case 4:
                result = _context12.sent;
                console.log(result);
                return _context12.abrupt("return", result);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function deleteWfEditPayGood_P_ContractorRequests(_x11) {
        return _deleteWfEditPayGood_P_ContractorRequests.apply(this, arguments);
      }

      return deleteWfEditPayGood_P_ContractorRequests;
    }()
  }]);

  return WfEditPayGood_P_ContractorRequestServices;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/database/model_services/wf_edit_pay_request_services.js":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/model_services/wf_edit_pay_request_services.js ***!
  \***********************************************************************************************/
/*! exports provided: WfEditPayRequestServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfEditPayRequestServices", function() { return WfEditPayRequestServices; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WfEditPayRequestServices = /*#__PURE__*/function () {
  function WfEditPayRequestServices(connection, dbName) {
    _classCallCheck(this, WfEditPayRequestServices);

    this.connection = connection;
    this.dbName = dbName;
  }

  _createClass(WfEditPayRequestServices, [{
    key: "getWfEditPayRequests",
    value: function () {
      var _getWfEditPayRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.connection.select({
                  from: 'wf_edit_pay_requests'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWfEditPayRequests() {
        return _getWfEditPayRequests.apply(this, arguments);
      }

      return getWfEditPayRequests;
    }()
  }, {
    key: "getWfEditPayRequestIDs",
    value: function () {
      var _getWfEditPayRequestIDs = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connection.select({
                  from: 'wf_edit_pay_requests'
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", $.map(result, function (value, key) {
                  return value.id;
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWfEditPayRequestIDs() {
        return _getWfEditPayRequestIDs.apply(this, arguments);
      }

      return getWfEditPayRequestIDs;
    }()
  }, {
    key: "addWfEditPayRequest",
    value: function () {
      var _addWfEditPayRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var wfEditPayRequest,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wfEditPayRequest = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                _context3.next = 3;
                return this.connection.insert({
                  into: 'wf_edit_pay_requests',
                  values: wfEditPayRequest
                }).then(function (rowsAdded) {
                  return rowsAdded;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addWfEditPayRequest() {
        return _addWfEditPayRequest.apply(this, arguments);
      }

      return addWfEditPayRequest;
    }()
  }, {
    key: "deleteWfEditPayRequest",
    value: function () {
      var _deleteWfEditPayRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(wfEditPayRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.connection.remove({
                  from: 'wf_edit_pay_requests',
                  where: {
                    id: Number(wfEditPayRequestId)
                  }
                }).then(function (rowsDeleted) {
                  return rowsDeleted;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteWfEditPayRequest(_x) {
        return _deleteWfEditPayRequest.apply(this, arguments);
      }

      return deleteWfEditPayRequest;
    }()
  }, {
    key: "getWfEditPayRequest",
    value: function () {
      var _getWfEditPayRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(wfEditPayRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.connection.select({
                  from: 'wf_edit_pay_requests',
                  where: {
                    id: Number(wfEditPayRequestId)
                  }
                }).then(function (data) {
                  // console.log(data);
                  return data;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWfEditPayRequest(_x2) {
        return _getWfEditPayRequest.apply(this, arguments);
      }

      return getWfEditPayRequest;
    }()
  }, {
    key: "updateWfEditPayRequest",
    value: function () {
      var _updateWfEditPayRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(wfEditPayRequestId, value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.connection.update({
                  "in": 'wf_edit_pay_requests',
                  set: value,
                  where: {
                    id: Number(wfEditPayRequestId)
                  }
                }).then(function (rowsUpdated) {
                  // console.log(rowsUpdated);
                  return rowsUpdated;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateWfEditPayRequest(_x3, _x4) {
        return _updateWfEditPayRequest.apply(this, arguments);
      }

      return updateWfEditPayRequest;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.connection.count({
                  from: 'wf_edit_pay_requests',
                  where: {
                    id: id
                  }
                });

              case 2:
                _context7.t0 = _context7.sent;
                return _context7.abrupt("return", _context7.t0 > 0);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function exists(_x5) {
        return _exists.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "updateOrCreateWfEditPayRequest",
    value: function () {
      var _updateOrCreateWfEditPayRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id, values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.exists(id);

              case 2:
                if (!_context8.sent) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return this.updateWfEditPayRequest(id, values);

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 8:
                _context8.next = 10;
                return this.addWfEditPayRequest([{
                  id: id,
                  wfable: values.wfable
                }]);

              case 10:
                return _context8.abrupt("return", _context8.sent);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateOrCreateWfEditPayRequest(_x6, _x7) {
        return _updateOrCreateWfEditPayRequest.apply(this, arguments);
      }

      return updateOrCreateWfEditPayRequest;
    }()
  }, {
    key: "updateOrCreateWfEditPayRequests",
    value: function () {
      var _updateOrCreateWfEditPayRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(data)) {
                    $.each(data, /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(key, value) {
                        var resultUpdateOrCreate;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this_Class.updateOrCreateWfEditPayRequest(value.id, value);

                              case 2:
                                resultUpdateOrCreate = _context9.sent;
                                result.push(resultUpdateOrCreate);
                                if (data.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      return function (_x9, _x10) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context10.next = 4;
                return promise;

              case 4:
                result = _context10.sent;
                console.log(result);
                return _context10.abrupt("return", result);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateOrCreateWfEditPayRequests(_x8) {
        return _updateOrCreateWfEditPayRequests.apply(this, arguments);
      }

      return updateOrCreateWfEditPayRequests;
    }()
  }, {
    key: "deleteWfEditPayRequests",
    value: function () {
      var _deleteWfEditPayRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(wfEditPayRequest_IDs) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(wfEditPayRequest_IDs)) {
                    $.each(wfEditPayRequest_IDs, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(key, value) {
                        var resultDelete;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this_Class.deleteWfEditPayRequest(value);

                              case 2:
                                resultDelete = _context11.sent;
                                result.push(resultDelete);
                                if (wfEditPayRequest_IDs.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));

                      return function (_x12, _x13) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context12.next = 4;
                return promise;

              case 4:
                result = _context12.sent;
                console.log(result);
                return _context12.abrupt("return", result);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function deleteWfEditPayRequests(_x11) {
        return _deleteWfEditPayRequests.apply(this, arguments);
      }

      return deleteWfEditPayRequests;
    }()
  }]);

  return WfEditPayRequestServices;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/database/model_services/wf_edit_purchase_request_services.js":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/dashboard/js/database/model_services/wf_edit_purchase_request_services.js ***!
  \****************************************************************************************************/
/*! exports provided: WfEditPurchaseRequestServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfEditPurchaseRequestServices", function() { return WfEditPurchaseRequestServices; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WfEditPurchaseRequestServices = /*#__PURE__*/function () {
  function WfEditPurchaseRequestServices(connection, dbName) {
    _classCallCheck(this, WfEditPurchaseRequestServices);

    this.connection = connection;
    this.dbName = dbName;
  }

  _createClass(WfEditPurchaseRequestServices, [{
    key: "getWfEditPurchaseRequests",
    value: function () {
      var _getWfEditPurchaseRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.connection.select({
                  from: 'wf_edit_purchase_requests'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWfEditPurchaseRequests() {
        return _getWfEditPurchaseRequests.apply(this, arguments);
      }

      return getWfEditPurchaseRequests;
    }()
  }, {
    key: "getWfEditPurchaseRequestIDs",
    value: function () {
      var _getWfEditPurchaseRequestIDs = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connection.select({
                  from: 'wf_edit_purchase_requests'
                });

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", $.map(result, function (value, key) {
                  return value.id;
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWfEditPurchaseRequestIDs() {
        return _getWfEditPurchaseRequestIDs.apply(this, arguments);
      }

      return getWfEditPurchaseRequestIDs;
    }()
  }, {
    key: "addWfEditPurchaseRequest",
    value: function () {
      var _addWfEditPurchaseRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var wfEditPurchaseRequest,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wfEditPurchaseRequest = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [];
                _context3.next = 3;
                return this.connection.insert({
                  into: 'wf_edit_purchase_requests',
                  values: wfEditPurchaseRequest
                }).then(function (rowsAdded) {
                  return rowsAdded;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addWfEditPurchaseRequest() {
        return _addWfEditPurchaseRequest.apply(this, arguments);
      }

      return addWfEditPurchaseRequest;
    }()
  }, {
    key: "deleteWfEditPurchaseRequest",
    value: function () {
      var _deleteWfEditPurchaseRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(wfEditPurchaseRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.connection.remove({
                  from: 'wf_edit_purchase_requests',
                  where: {
                    id: Number(wfEditPurchaseRequestId)
                  }
                }).then(function (rowsDeleted) {
                  return rowsDeleted;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteWfEditPurchaseRequest(_x) {
        return _deleteWfEditPurchaseRequest.apply(this, arguments);
      }

      return deleteWfEditPurchaseRequest;
    }()
  }, {
    key: "getWfEditPurchaseRequest",
    value: function () {
      var _getWfEditPurchaseRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(wfEditPurchaseRequestId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.connection.select({
                  from: 'wf_edit_purchase_requests',
                  where: {
                    id: Number(wfEditPurchaseRequestId)
                  }
                }).then(function (data) {
                  // console.log(data);
                  return data;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWfEditPurchaseRequest(_x2) {
        return _getWfEditPurchaseRequest.apply(this, arguments);
      }

      return getWfEditPurchaseRequest;
    }()
  }, {
    key: "updateWfEditPurchaseRequest",
    value: function () {
      var _updateWfEditPurchaseRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(wfEditPurchaseRequestId, value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.connection.update({
                  "in": 'wf_edit_purchase_requests',
                  set: value,
                  where: {
                    id: Number(wfEditPurchaseRequestId)
                  }
                }).then(function (rowsUpdated) {
                  // console.log(rowsUpdated);
                  return rowsUpdated;
                })["catch"](function (err) {
                  console.log(err);
                  return 'db_error';
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateWfEditPurchaseRequest(_x3, _x4) {
        return _updateWfEditPurchaseRequest.apply(this, arguments);
      }

      return updateWfEditPurchaseRequest;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.connection.count({
                  from: 'wf_edit_purchase_requests',
                  where: {
                    id: id
                  }
                });

              case 2:
                _context7.t0 = _context7.sent;
                return _context7.abrupt("return", _context7.t0 > 0);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function exists(_x5) {
        return _exists.apply(this, arguments);
      }

      return exists;
    }()
  }, {
    key: "updateOrCreateWfEditPurchaseRequest",
    value: function () {
      var _updateOrCreateWfEditPurchaseRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id, values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.exists(id);

              case 2:
                if (!_context8.sent) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return this.updateWfEditPurchaseRequest(id, values);

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 8:
                _context8.next = 10;
                return this.addWfEditPurchaseRequest([{
                  id: id,
                  wfable: values.wfable
                }]);

              case 10:
                return _context8.abrupt("return", _context8.sent);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateOrCreateWfEditPurchaseRequest(_x6, _x7) {
        return _updateOrCreateWfEditPurchaseRequest.apply(this, arguments);
      }

      return updateOrCreateWfEditPurchaseRequest;
    }()
  }, {
    key: "updateOrCreateWfEditPurchaseRequests",
    value: function () {
      var _updateOrCreateWfEditPurchaseRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(data)) {
                    $.each(data, /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(key, value) {
                        var resultUpdateOrCreate;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this_Class.updateOrCreateWfEditPurchaseRequest(value.id, value);

                              case 2:
                                resultUpdateOrCreate = _context9.sent;
                                result.push(resultUpdateOrCreate);
                                if (data.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      return function (_x9, _x10) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context10.next = 4;
                return promise;

              case 4:
                result = _context10.sent;
                console.log(result);
                return _context10.abrupt("return", result);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateOrCreateWfEditPurchaseRequests(_x8) {
        return _updateOrCreateWfEditPurchaseRequests.apply(this, arguments);
      }

      return updateOrCreateWfEditPurchaseRequests;
    }()
  }, {
    key: "deleteWfEditPurchaseRequests",
    value: function () {
      var _deleteWfEditPurchaseRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(wfEditPurchaseRequest_IDs) {
        var this_Class, promise, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this_Class = this;
                promise = new Promise(function (resolve, reject) {
                  var result = [];

                  if (!isEmpty(wfEditPurchaseRequest_IDs)) {
                    $.each(wfEditPurchaseRequest_IDs, /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(key, value) {
                        var resultDelete;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this_Class.deleteWfEditPurchaseRequest(value);

                              case 2:
                                resultDelete = _context11.sent;
                                result.push(resultDelete);
                                if (wfEditPurchaseRequest_IDs.length == key + 1) resolve(result);

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));

                      return function (_x12, _x13) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  } else resolve(false);
                });
                _context12.next = 4;
                return promise;

              case 4:
                result = _context12.sent;
                console.log(result);
                return _context12.abrupt("return", result);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function deleteWfEditPurchaseRequests(_x11) {
        return _deleteWfEditPurchaseRequests.apply(this, arguments);
      }

      return deleteWfEditPurchaseRequests;
    }()
  }]);

  return WfEditPurchaseRequestServices;
}();

/***/ }),

/***/ "./resources/assets/dashboard/js/initialize/master.js":
/*!************************************************************!*\
  !*** ./resources/assets/dashboard/js/initialize/master.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/index */ "./resources/assets/dashboard/js/database/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


$.when($.getScript("assets/auth/js/authenticate.js"), $.getScript("assets/dashboard/js/initialize/public.js"), $.getScript("/assets/dashboard/js/initialize/export.js"), $.getScript("assets/dashboard/js/top_nav/top_nav.js"), $.getScript("assets/dashboard/js/menu/menu.js"), $.Deferred(function (deferred) {
  $(deferred.resolve);
})).done(function () {
  $(document).ready( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var init_DB_Offline_Mode, init_Listen, init_Filepond, init_DataTable, animateCSS;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //mobile-bottom-nav

            /*var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
            navItems.forEach(function(e, i) {
                e.addEventListener("click", function(e) {
                    navItems.forEach(function(e2, i2) {
                        e2.classList.remove("mobile-bottom-nav__item--active");
                    })
                    this.classList.add("mobile-bottom-nav__item--active");
                });
            });*/

            /*$.ajaxSetup({
                       headers: {
                           'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                       }
                   });*/

            /* // Initialize the service worker
             if ('serviceWorker' in navigator) {
                 navigator.serviceWorker.register('serviceworker.js', {
                     scope: '.'
                 }).then(function (registration) {
                     // Registration was successful
                     console.log('Laravel PWA: ServiceWorker registration successful with scope: ', registration.scope);
                 }, function (err) {
                     // registration failed :(
                     console.log('Laravel PWA: ServiceWorker registration failed: ', err);
                 });
             }*/
            // Allow get script component
            window.allow_GetScript_Component_Users_Setting = true;
            window.allow_GetScript_Component_Products_Setting = true;
            window.allow_GetScript_Component_CardItems_Setting = true;
            window.allow_GetScript_Component_Cartable_Setting = true;
            window.allow_GetScript_Component_Dashboard_1 = true;
            window.allow_GetScript_Component_Reports_WF_Cartables = true;
            window.allow_GetScript_Component_System_settings = true;
            window.allow_GetScript_Component_Menu = true; // assets/app_settings/pwa/images/Logo.png
            // Manage script path

            window.manageScriptPath = function () {
              return {
                ///////////////////////////////// Initialize ////////////////////////////////////
                component_Master: function component_Master() {
                  return 'assets/dashboard/js/initialize/master.js';
                },
                component_Users_Setting: function component_Users_Setting() {
                  return 'assets/dashboard/js/initialize/users_add_edit.js';
                },
                component_Products_Setting: function component_Products_Setting() {
                  return 'assets/dashboard/js/initialize/products_add_edit.js';
                },
                component_CardItems_Setting: function component_CardItems_Setting() {
                  return 'assets/dashboard/js/initialize/card_items_add_edit.js';
                },
                component_Cartable_Setting: function component_Cartable_Setting() {
                  return 'assets/dashboard/js/cartable/cartable.js';
                },
                ///////////////////////////////// Public ////////////////////////////////////
                component_Public: function component_Public() {
                  return 'assets/dashboard/js/initialize/public.js';
                },
                ///////////////////////////////// Dashboards ////////////////////////////////////
                component_dashboard_1: function component_dashboard_1() {
                  return 'assets/dashboard/js/initialize/dashboard_1.js';
                },
                ///////////////////////////////// Dashboards ////////////////////////////////////
                component_Reports_WF_Cartables: function component_Reports_WF_Cartables() {
                  return 'assets/dashboard/js/reports/wf-cartables.js';
                },
                ///////////////////////////////// Settings ////////////////////////////////////
                component_System: function component_System() {
                  return 'assets/dashboard/js/settings/system.js';
                },
                ///////////////////////////////// TopNav ////////////////////////////////////
                component_TopNav: function component_TopNav() {
                  return 'assets/dashboard/js/top_nav/top_nav.js';
                },
                ///////////////////////////////// Menu ////////////////////////////////////
                component_Menu: function component_Menu() {
                  return 'assets/dashboard/js/menu/menu.js';
                },
                ///////////////////////////////// etc ////////////////////////////////////
                component_Custom_Dashboard: function component_Custom_Dashboard() {
                  return 'assets/dashboard/js/custom-dashboard.js';
                },
                component_Export: function component_Export() {
                  return 'assets/dashboard/js/initialize/export.js';
                }
              };
            }(); // Init db offline mode


            init_DB_Offline_Mode = /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        window.baseServicesDB = new _database_index__WEBPACK_IMPORTED_MODULE_1__["BaseServicesDB"]('draft');
                        _context.next = 3;
                        return baseServicesDB.init();

                      case 3:
                        window.dbResult = _context.sent;
                        console.warn(dbResult);

                        if (dbResult == true) {
                          /*let self2 = await baseServicesDB.wfAddPayRequestServices.getWfAddPayRequests();
                          console.log(self2);*/
                          baseServicesDB.connection.getDbList().then(function (result) {
                            console.log(result);
                          });
                          baseServicesDB.connection.get('draft').then(function (schema) {
                            console.log(schema);
                          });
                          /*baseServicesDB.connection.getDbSchema('supermarket').then(function (schema) {
                              console.log(schema)
                          });*/

                          /*$('#topNav_App_Update').click(async function () {
                              $.ajax({
                                  url: '/',
                                  method: 'POST',
                                  data: {
                                      Sync: 'DBSyncController',
                                      SubSync: 'sync_Data',
                                      Data: {
                                          data_max_revision: data_MaxRevision,
                                          data_ids: data_IDs,
                                          // data_added_or_edited_or_removed: data_AddedOrEditedOrRemoved,
                                          /!*json_Data: {
                                           }*!/
                                      },
                                  },
                                  success: function (data) {
                                      console.log(data)
                                      //------------------------
                                  },
                                  error: function (data) {
                                      console.log(data)
                                      //------------------------
                                      // create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                                      //------------------------
                                  },
                                  complete: function (data) {
                                      //------------------------
                                      // $.getScript(manageScriptPath.component_Store_Setting_Repeat());
                                      //import('../initialize/show_Room_Repeat.js');
                                       //------------------------
                                      /!*console.log('complete : ' + JSON.stringify(data));
                                      alert('complete: ' + JSON.stringify(data))*!/
                                  }
                              });
                              /!*var gg = await shop.addShop({
                                  id: 8,
                                  name: "ffff",
                                  dealer_type: "fff",
                                  web_site_name: "ffff",
                                  //open: "08:05:00",
                                  logo: "ff",
                                  revision: 6,
                                  last_modified_by: "",
                                  created_at: "",
                                  updated_at: "",
                                  status: 'remove-user-4'
                              })
                              console.log(gg);
                               var up = await shop.updateShop(8,{
                                  id: 8,
                                  name: "ffff6",
                                  dealer_type: "fff6",
                                  web_site_name: "ffff6",
                                  //open: "08:05:00",
                                  logo: "ff6",
                                  revision: 66,
                                  last_modified_by: 6,
                                  status: 'remove-user-4'
                              })
                              console.log(up);
                               /!*var re = await shop.deleteShop(8);
                              console.log(re);*!/
                              var result5 = await shop.getShop(5);
                              console.log(result5);*!/
                              var result4 = await baseServicesDB.barcodeServices.getBarcodes();
                              console.log(result4);
                          })*/
                        }

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function init_DB_Offline_Mode() {
                return _ref2.apply(this, arguments);
              };
            }(); // Init event listen


            init_Listen = function init_Listen() {
              // Listen events
              get_User_Room().then(function (data) {
                listen_Users_Change(data);
              });
            }; // Init filepond


            init_Filepond = function init_Filepond() {
              //FilePond.parse(document.body);
              $.getJSON('assets/json/filepond/locale/' + win_Locale + '_ir.json').done(function (data) {
                FilePond.setOptions(data);
              }); // First register any plugins

              $.fn.filepond.registerPlugin(FilePondPluginFileEncode);
              $.fn.filepond.registerPlugin(FilePondPluginImagePreview);
              $.fn.filepond.registerPlugin(FilePondPluginImageOverlay);
              $.fn.filepond.registerPlugin(FilePondPluginGetFile);
              $.fn.filepond.registerPlugin(FilePondPluginPdfPreview);
              $.fn.filepond.registerPlugin(FilePondPluginFileValidateType);
              $.fn.filepond.registerPlugin(FilePondPluginImageTransform);
            }; // Init dataTable


            init_DataTable = function init_DataTable() {
              $.fn.dataTable.moment('YYYY-MM-DD HH:mm:ss');
              $.fn.dataTable.moment('YYYY/MM/DD HH:mm:ss');
              $.fn.dataTable.moment('HH:mm:ss YYYY-MM-DD');
              $.fn.dataTable.moment('HH:mm:ss YYYY/MM/DD');
              $.fn.dataTable.moment('MM-dd-YYYY');
              $.fn.dataTable.moment('DD.MM.YYYY');
              $.fn.dataTable.moment('HH:mm'); // $.fn.dataTable.moment( 'YYYY-MM-DD HH:mm:ss');
              // DataTable.datetime('D MMM YYYY');
            }; // Initialize db offline mode


            _context2.next = 15;
            return init_DB_Offline_Mode();

          case 15:
            // Animate
            animateCSS = function animateCSS(element, animation) {
              var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'animate__';
              return (// We create a Promise and return it
                new Promise(function (resolve, reject) {
                  var animationName = "".concat(prefix).concat(animation);
                  var node = document.querySelector(element);
                  node.classList.add("".concat(prefix, "animated"), animationName); // When the animation ends, we clean the classes and resolve the Promise

                  function handleAnimationEnd(event) {
                    event.stopPropagation();
                    node.classList.remove("".concat(prefix, "animated"), animationName);
                    resolve('Animation ended');
                  }

                  node.addEventListener('animationend', handleAnimationEnd, {
                    once: true
                  });
                })
              );
            }; // set locale and timezone


            getLocaleAndTimezoneUser().then(function () {
              //  Active WF Cartables

              /*active_View_Without_activeStep('component_Reports_WF_Cartables', manageScriptPath.component_Reports_WF_Cartables());
              $('[data_Remove="component"]:visible .page_toolbox_control').empty();*/
              active_View_Without_activeStep('component_Cartable_Setting', manageScriptPath.component_Cartable_Setting(), true);
              $('[data_Remove="component"]:visible .page_toolbox_control').empty(); // filepond

              init_Filepond(); // dataTable

              init_DataTable();
            });

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});

/***/ }),

/***/ 0:
/*!******************************************************************!*\
  !*** multi ./resources/assets/dashboard/js/initialize/master.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\valet\product\resources\assets\dashboard\js\initialize\master.js */"./resources/assets/dashboard/js/initialize/master.js");


/***/ })

/******/ });