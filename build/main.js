webpackJsonp([17],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		272,
		0
	],
	"../pages/home/list-buy-sell/list-buy-sell.module": [
		273,
		16
	],
	"../pages/home/list-contract/list-contract.module": [
		274,
		15
	],
	"../pages/login/login.module": [
		275,
		14
	],
	"../pages/menu/change-pass/change-pass.module": [
		276,
		13
	],
	"../pages/menu/menu.module": [
		277,
		12
	],
	"../pages/menu/setting/setting.module": [
		278,
		11
	],
	"../pages/money/merchandise-trans/merchandise-trans.module": [
		279,
		10
	],
	"../pages/money/money-his/money-his.module": [
		280,
		9
	],
	"../pages/money/money-info/money-info.module": [
		281,
		8
	],
	"../pages/money/money-trans/money-trans.module": [
		282,
		7
	],
	"../pages/money/money-with-draw/money-with-draw.module": [
		283,
		6
	],
	"../pages/money/money.module": [
		284,
		5
	],
	"../pages/order/order.module": [
		285,
		1
	],
	"../pages/orderbook/orderbook.module": [
		286,
		4
	],
	"../pages/tabs/tabs.module": [
		287,
		3
	],
	"../pages/user/user.module": [
		288,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoneyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MoneyService = (function () {
    function MoneyService(_http) {
        this._http = _http;
    }
    MoneyService.prototype.getMoneyHistory = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/moneyhis/" + id;
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    // getMoneyHistoryTable(id: number): Observable<any> {
    //   const url = `${API_URL}/moneyhis/${id}`;
    //   return this._http.get(url).map((response: Response) => response);
    // }
    MoneyService.prototype.getMoneyInfo = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/UserMoney/" + id;
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    MoneyService.prototype.AddTransRes = function (data) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/money/trans";
        return this._http.post(url, data).map(function (response) { return response.json(); });
    };
    MoneyService.prototype.AddWithdrawRes = function (data) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/money/withdraw";
        return this._http.post(url, data).map(function (response) { return response.json(); });
    };
    MoneyService.prototype.GetListTransSuccess = function (sendUsername) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/trans-success/" + sendUsername;
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    MoneyService.prototype.GetListTransFail = function (sendUsername) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/trans-fail/" + sendUsername;
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    MoneyService.prototype.GetListRutChuaXN = function (userID) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/rut-chuaxn/" + userID;
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    MoneyService.prototype.GetListRutDaXN = function (userID) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/rut-daxn/" + userID;
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    MoneyService.prototype.GetListRutDaHuy = function (userID) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/rut-dahuy/" + userID;
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    return MoneyService;
}());
MoneyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], MoneyService);

//# sourceMappingURL=money.service.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthServiceProvider = (function () {
    function AuthServiceProvider(_http) {
        this._http = _http;
    }
    AuthServiceProvider.prototype.login = function (credential) {
        var url = __WEBPACK_IMPORTED_MODULE_2__shared_config__["a" /* API_URL */] + "/auth/";
        return this._http.post(url, credential).map(function (response) { return response.json(); });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContractService = (function () {
    function ContractService(_http) {
        this._http = _http;
    }
    ContractService.prototype.GetContracts = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/contract";
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    return ContractService;
}());
ContractService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ContractService);

//# sourceMappingURL=contract.service.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderService = (function () {
    function OrderService(_http) {
        this._http = _http;
    }
    OrderService.prototype.getListViTheMo = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/vithemo/" + id;
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    OrderService.prototype.getListViTheDong = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/vithedong/" + id;
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    OrderService.prototype.getListLenhTrongPhien = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/lenhtrongphien/" + id;
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    OrderService.prototype.getListLenhCho = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/lenhcho/" + id;
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    OrderService.prototype.getListLenhDaHuy = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/lenhdahuy/" + id;
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    OrderService.prototype.Add = function (data) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/order/";
        return this._http.post(url, data).map(function (response) { return response; });
    };
    OrderService.prototype.Update = function (data) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/order/";
        return this._http.put(url, data).map(function (response) { return response; });
    };
    OrderService.prototype.Delete = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/order/" + id;
        return this._http.delete(url).map(function (response) { return response; });
    };
    return OrderService;
}());
OrderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], OrderService);

//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SessionService = (function () {
    function SessionService(_http) {
        this._http = _http;
    }
    SessionService.prototype.GetSession = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_URL */] + "/session";
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    return SessionService;
}());
SessionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], SessionService);

//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_imports__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__app_imports__["a" /* MODULES */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {
                backButtonText: 'QUAY LẠI',
                // backButtonIcon: '',
                iconMode: 'ios',
                // modalEnter: 'modal-slide-in',
                // modalLeave: 'modal-slide-out',
                tabsPlacement: 'bottom',
                pageTransition: 'ios-transition'
            }, {
                links: [
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/list-buy-sell/list-buy-sell.module#ListBuySellPageModule', name: 'ListBuySellPage', segment: 'list-buy-sell', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/list-contract/list-contract.module#ListContractPageModule', name: 'ListContractPage', segment: 'list-contract', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/change-pass/change-pass.module#ChangePassPageModule', name: 'ChangePassPage', segment: 'change-pass', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/merchandise-trans/merchandise-trans.module#MerchandiseTransPageModule', name: 'MerchandiseTransPage', segment: 'merchandise-trans', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/money-his/money-his.module#MoneyHisPageModule', name: 'MoneyHisPage', segment: 'money-his', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/money-info/money-info.module#MoneyInfoPageModule', name: 'MoneyInfoPage', segment: 'money-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/money-trans/money-trans.module#MoneyTransPageModule', name: 'MoneyTransPage', segment: 'money-trans', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/money-with-draw/money-with-draw.module#MoneyWithDrawPageModule', name: 'MoneyWithDrawPage', segment: 'money-with-draw', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/money.module#MoneyPageModule', name: 'MoneyPage', segment: 'money', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/orderbook/orderbook.module#OrderbookPageModule', name: 'OrderbookPage', segment: 'orderbook', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#MxvPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__app_imports__["b" /* PROVIDERS */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        // const connection = new HubConnection('http://localhost:5000/message');
        this.rootPage = 'LoginPage';
        // connection.on('send', data => {
        //   console.log(data);
        // });
        // connection.start()
        //   .then(() => console.log('connected'));
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // this.checkPreviousAuthorization();
        });
    }
    MyApp.prototype.checkPreviousAuthorization = function () {
        if ((window.localStorage.getItem('user') === 'undefined' || window.localStorage.getItem('user') === null)) {
            this.rootPage = 'LoginPage';
        }
        else {
            this.rootPage = 'TabsPage';
        }
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\DA\MxvMobile\src\app\app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\DA\MxvMobile\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PROVIDERS; });
/* unused harmony export DIRECTICES */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(25);
// Global state
// Providers




// Ionic native providers
// Directives
// Modules


var MODULES = [
    __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
];
var PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__ionic_native_splash_screen__["a" /* SplashScreen */],
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */],
    __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
    __WEBPACK_IMPORTED_MODULE_2__providers_people_service_people_service__["a" /* PeopleServiceProvider */]
];
var DIRECTICES = [];
//# sourceMappingURL=app.imports.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PeopleServiceProvider = (function () {
    function PeopleServiceProvider(http) {
        this.http = http;
        console.log('Hello PeopleServiceProvider Provider');
    }
    PeopleServiceProvider.prototype.load = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('https://randomuser.me/api/?results=10')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data.results;
                resolve(_this.data);
            });
        });
    };
    return PeopleServiceProvider;
}());
PeopleServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], PeopleServiceProvider);

//# sourceMappingURL=people-service.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__money_service__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__money_service__["a" /* MoneyService */],
            __WEBPACK_IMPORTED_MODULE_4__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_2__contract_service__["a" /* ContractService */],
            __WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
var API_URL = 'http://125.212.253.105:5555/api';
// export const API_URL = 'http://  12.254.113:2222/api';
//# sourceMappingURL=config.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map