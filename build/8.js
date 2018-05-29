webpackJsonp([8],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyInfoPageModule", function() { return MoneyInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__money_info__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoneyInfoPageModule = (function () {
    function MoneyInfoPageModule() {
    }
    return MoneyInfoPageModule;
}());
MoneyInfoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__money_info__["a" /* MoneyInfoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__money_info__["a" /* MoneyInfoPage */]),
        ],
    })
], MoneyInfoPageModule);

//# sourceMappingURL=money-info.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoneyInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_money_service__ = __webpack_require__(196);
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
 * Generated class for the MoneyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MoneyInfoPage = (function () {
    function MoneyInfoPage(navCtrl, navParams, _moneyService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._moneyService = _moneyService;
    }
    MoneyInfoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(window.localStorage.getItem('user'));
        // console.log(window.localStorage);
        this._moneyService.getMoneyInfo(this.user.userID).subscribe(function (response) {
            _this.userMoney = response;
            console.log(_this.userMoney);
        }, function (error) {
            console.log('Error from api!');
        });
    };
    return MoneyInfoPage;
}());
MoneyInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-money-info',template:/*ion-inline-start:"D:\DA\MxvMobile\src\pages\money\money-info\money-info.html"*/'<ion-header>\n\n  <ion-navbar color="mxv-blue">\n\n    <ion-title>Tiền</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row text-center padding class="mxv-header">\n\n      <strong text-uppercase>Xem số dư</strong>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class="mxv-tb-stripe" *ngIf="userMoney">\n\n    <ion-row padding>\n\n      <ion-col col-6 class="text-mxv-blue">Số dư đầu ngày</ion-col>\n\n      <ion-col text-right col-6>\n\n        <strong class="text-mxv-gray">{{ userMoney.soDuDauNgay | number }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding>\n\n      <ion-col col-6 class="text-mxv-blue">Lãi lỗ dự kiến</ion-col>\n\n      <ion-col text-right col-6>\n\n        <strong class="text-mxv-gray">{{ userMoney.laiLoDuKien | number }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding>\n\n      <ion-col col-6 class="text-mxv-blue">Lãi lỗ thực tế</ion-col>\n\n      <ion-col text-right col-6>\n\n        <strong class="text-mxv-gray">{{ userMoney.laiLoThucTe | number }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding>\n\n      <ion-col col-6 class="text-mxv-blue">Phí giao dịch</ion-col>\n\n      <ion-col text-right col-6>\n\n        <strong class="text-mxv-gray">{{ userMoney.phiGiaoDich | number }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding>\n\n      <ion-col col-6 class="text-mxv-blue">Mức KQ ban đầu</ion-col>\n\n      <ion-col text-right col-6>\n\n        <strong class="text-mxv-gray">{{ userMoney.mucKyQuyBanDau | number }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding>\n\n      <ion-col col-6 class="text-mxv-blue">Mức KQ duy trì</ion-col>\n\n      <ion-col text-right col-6>\n\n        <strong class="text-mxv-gray">{{ userMoney.mucKyQuyDuyTri | number }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding>\n\n      <ion-col col-6 class="text-mxv-blue">Tiền rút</ion-col>\n\n      <ion-col text-right col-6>\n\n        <strong class="text-mxv-gray">{{ userMoney.tienRut | number }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding>\n\n      <ion-col col-6 class="text-mxv-blue">Tiền nạp</ion-col>\n\n      <ion-col text-right col-6>\n\n        <strong class="text-mxv-gray">{{ userMoney.tienNap | number }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding>\n\n      <ion-col col-6 class="text-mxv-blue">Tiền chuyến</ion-col>\n\n      <ion-col text-right col-6>\n\n        <strong class="text-mxv-gray">{{ userMoney.tienChuyen | number }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding>\n\n      <ion-col col-6 class="text-mxv-blue">Tài sản ròng</ion-col>\n\n      <ion-col text-right col-6>\n\n        <strong class="text-mxv-gray">{{ userMoney.taiSanRong | number }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding>\n\n      <ion-col col-6 class="text-mxv-blue">Khả dụng KQ</ion-col>\n\n      <ion-col text-right col-6>\n\n        <strong class="text-mxv-gray">{{ userMoney.khaDungKyQuy | number }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding>\n\n      <ion-col col-6 class="text-mxv-blue">Tỷ lệ ký quỹ</ion-col>\n\n      <ion-col text-right col-6>\n\n        <strong class="text-mxv-gray">{{ userMoney.tiLeKyQuy | number }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding>\n\n      <ion-col col-6 class="text-mxv-blue">Tiền cần nạp vào</ion-col>\n\n      <ion-col text-right col-6>\n\n        <strong class="text-mxv-gray">{{ userMoney.marginCall | number }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n   \n\n\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DA\MxvMobile\src\pages\money\money-info\money-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__shared_money_service__["a" /* MoneyService */]])
], MoneyInfoPage);

//# sourceMappingURL=money-info.js.map

/***/ })

});
//# sourceMappingURL=8.js.map