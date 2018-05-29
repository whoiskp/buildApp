webpackJsonp([5],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyPageModule", function() { return MoneyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__money__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoneyPageModule = (function () {
    function MoneyPageModule() {
    }
    return MoneyPageModule;
}());
MoneyPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__money__["a" /* MoneyPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__money__["a" /* MoneyPage */]),
        ],
    })
], MoneyPageModule);

//# sourceMappingURL=money.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoneyPage; });
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



var MoneyPage = (function () {
    function MoneyPage(navCtrl, navParams, _moneyService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._moneyService = _moneyService;
        this.isSearchOn = false;
        this.moneyOfUser = {
            SoTien: '34,345,909,905',
            TamKhoa: '34,345,909,905',
            CoTheGiaoDich: '34,345,909,905',
            TaiSanRong: '34,345,909,905'
        };
    }
    MoneyPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(window.localStorage.getItem('user'));
        // console.log(window.localStorage);
        this._moneyService.getMoneyInfo(this.user.userID).subscribe(function (response) {
            _this.userMoney = response;
            console.log(_this.userMoney);
        }, function (error) {
            console.log('Error from api!');
        });
        this._moneyService.getMoneyHistory(this.user.userID).subscribe(function (response) {
            _this.moneyHistory = response;
        });
    };
    MoneyPage.prototype.toggleDetails = function () {
        this.isSearchOn = !this.isSearchOn;
    };
    MoneyPage.prototype.goMenuPage = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    MoneyPage.prototype.goMoneyInfo = function () {
        this.navCtrl.push('MoneyInfoPage');
    };
    MoneyPage.prototype.goMoneyTrans = function () {
        this.navCtrl.push('MoneyTransPage');
    };
    MoneyPage.prototype.goMoneyHis = function () {
        this.navCtrl.push('MoneyHisPage');
    };
    MoneyPage.prototype.goMoneyWithDraw = function () {
        this.navCtrl.push('MoneyWithDrawPage');
    };
    MoneyPage.prototype.goMerchangdiseTrans = function () {
        this.navCtrl.push('MerchandiseTransPage');
    };
    return MoneyPage;
}());
MoneyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-money',template:/*ion-inline-start:"D:\DA\MxvMobile\src\pages\money\money.html"*/'<ion-header>\n\n  <ion-navbar color="mxv-blue">\n\n    <ion-buttons left>\n\n      <button ion-button *ngIf="!isSearchOn" (click)="goMenuPage()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title *ngIf="!isSearchOn">Tiền</ion-title>\n\n    <ion-searchbar *ngIf="isSearchOn" placeholder="Tìm kiếm hợp đồng"></ion-searchbar>\n\n    <ion-buttons right>\n\n      <button (click)="toggleDetails()" ion-button>\n\n        <ion-icon name="ios-search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid ion-fixed>\n\n    <ion-row text-center padding class="mxv-header">\n\n      <strong text-uppercase>Xem số dư</strong>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class="mxv-tb-stripe" style="margin-top: 49px" *ngIf="userMoney">\n\n    <ion-row padding>\n\n      <ion-col col-6 class="text-mxv-blue">Số tiền</ion-col>\n\n      <ion-col text-right col-6>\n\n        <strong class="text-mxv-gray">{{ userMoney.khaDungKyQuy | number }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding>\n\n      <ion-col col-6 class="text-mxv-blue">Lãi lỗ dự kiến</ion-col>\n\n      <ion-col text-right col-6>\n\n        <strong class="text-mxv-gray">{{ userMoney.laiLoDuKien | number }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding>\n\n      <ion-col col-6 class="text-mxv-blue">Lãi lỗ thực tế</ion-col>\n\n      <ion-col text-right col-6>\n\n        <strong class="text-mxv-gray">{{ userMoney.laiLoThucTe | number }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding>\n\n      <ion-col col-6 class="text-mxv-blue">Tài sản ròng</ion-col>\n\n      <ion-col text-right col-6>\n\n        <strong class="text-mxv-gray">{{ userMoney.taiSanRong | number }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row justify-content-end style="background-color: #ffffff" margin-horizontal>\n\n      <ion-col col-6 text-right>\n\n        <strong text-uppercase class="text-primary" style="letter-spacing: 1px" (click)="goMoneyInfo()">Xem thêm</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class="money-status">\n\n    <ion-row margin>\n\n      <ion-col col-4 class="text-secondary">\n\n        <ion-icon name="ios-square-outline"></ion-icon> An toàn</ion-col>\n\n      <ion-col col-4 text-center class="text-danger">\n\n        <ion-icon name="ios-square"></ion-icon> Cảnh báo</ion-col>\n\n      <ion-col col-4 text-right class="text-mxv-gray">\n\n        <ion-icon name="ios-square-outline"></ion-icon> Chờ xử lí</ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid>\n\n    <ion-row margin-horizontal>\n\n      <ion-col col-6>\n\n        <button ion-button text-uppercase block (click)="goMoneyTrans()">\n\n          <span>Chuyển tiền</span>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button text-uppercase block (click)="goMoneyWithDraw()">\n\n          <span>Rút tiền</span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row margin-horizontal>\n\n      <ion-col>\n\n        <button ion-button outline text-uppercase block (click)="goMoneyHis()">\n\n          <span>Lịch sử thay đổi tiền</span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row margin-horizontal>\n\n      <ion-col>\n\n        <button ion-button outline text-uppercase block (click)="goMerchangdiseTrans()">\n\n          <span>Giao nhận hàng vật chất</span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DA\MxvMobile\src\pages\money\money.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__shared_money_service__["a" /* MoneyService */]])
], MoneyPage);

//# sourceMappingURL=money.js.map

/***/ })

});
//# sourceMappingURL=5.js.map