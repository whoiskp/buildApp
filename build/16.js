webpackJsonp([16],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBuySellPageModule", function() { return ListBuySellPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_buy_sell__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListBuySellPageModule = (function () {
    function ListBuySellPageModule() {
    }
    return ListBuySellPageModule;
}());
ListBuySellPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__list_buy_sell__["a" /* ListBuySellPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_buy_sell__["a" /* ListBuySellPage */]),
        ],
    })
], ListBuySellPageModule);

//# sourceMappingURL=list-buy-sell.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListBuySellPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ListBuySellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListBuySellPage = (function () {
    function ListBuySellPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listSell = [
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' }
        ];
        this.listBuy = [
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' }
        ];
        this.isSearchOn = false;
    }
    ListBuySellPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListBuySellPage');
    };
    ListBuySellPage.prototype.toggleDetails = function () {
        this.isSearchOn = !this.isSearchOn;
    };
    return ListBuySellPage;
}());
ListBuySellPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list-buy-sell',template:/*ion-inline-start:"E:\DA\Khoa\MxvMobile\src\pages\home\list-buy-sell\list-buy-sell.html"*/'<ion-header>\n  <ion-navbar color="mxv-blue">\n    <ion-title *ngIf="!isSearchOn">MXV</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid ion-fixed>\n    <ion-row text-center padding class="mxv-header">\n      <strong text-uppercase>Dư mua / bán</strong>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="bg-mxv-ceil" style="margin-top: 49px">\n    <ion-row padding-vertical text-center>\n      <ion-col col-4>Trần</ion-col>\n      <ion-col col-4>16,800</ion-col>\n      <ion-col col-auto></ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="sell-buy-list">\n    <ion-row>\n      <ion-col col-8 style="padding: 0">\n        <ion-grid>\n          <ion-row *ngFor="let sell of listSell" text-center>\n            <ion-col col-6>{{ sell.Price }}</ion-col>\n            <ion-col col-6>{{ sell.Vol }}</ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-grid>\n          <ion-row *ngFor="let buy of listBuy" text-center>\n            <ion-col col-6>{{ buy.Price }}</ion-col>\n            <ion-col col-6>{{ buy.Vol }}</ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n      <ion-col col-4>\n        <ion-row>\n          <button ion-button>\n            <i class="fa fa-shopping-cart fa-2x full-left"></i>\n            <span style="padding-left: 10px">mua</span>\n          </button>\n        </ion-row>\n        <ion-row>\n          <button ion-button outline>\n            <i class="fa fa fa-telegram fa-2x"></i>\n            <span style="padding-left: 10px">bán</span>\n          </button>\n        </ion-row>\n        <ion-row>\n          <button ion-button outline>\n            <i class="fa fa-pencil-square-o fa-2x"></i>\n            <span style="padding-left: 10px">Sửa</span>\n          </button>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="bg-mxv-floor">\n    <ion-row padding-vertical text-center>\n      <ion-col col-4 text-center>sàn</ion-col>\n      <ion-col col-4>13,800</ion-col>\n      <ion-col col-auto></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\DA\Khoa\MxvMobile\src\pages\home\list-buy-sell\list-buy-sell.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListBuySellPage);

//# sourceMappingURL=list-buy-sell.js.map

/***/ })

});
//# sourceMappingURL=16.js.map