webpackJsonp([5],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyPageModule", function() { return MoneyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__money__ = __webpack_require__(346);
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

/***/ 346:
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
        selector: 'page-money',template:/*ion-inline-start:"E:\DA\Khoa\MxvMobile\src\pages\money\money.html"*/'<ion-header>\n  <ion-navbar color="mxv-blue">\n    <ion-buttons left>\n      <button ion-button *ngIf="!isSearchOn" (click)="goMenuPage()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="!isSearchOn">Tiền</ion-title>\n    <ion-searchbar *ngIf="isSearchOn" placeholder="Tìm kiếm hợp đồng"></ion-searchbar>\n    <ion-buttons right>\n      <button (click)="toggleDetails()" ion-button>\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid ion-fixed>\n    <ion-row text-center padding class="mxv-header">\n      <strong text-uppercase>Xem số dư</strong>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="mxv-tb-stripe" style="margin-top: 49px" *ngIf="userMoney">\n    <ion-row padding>\n      <ion-col col-6 class="text-mxv-blue">Số tiền</ion-col>\n      <ion-col text-right col-6>\n        <strong class="text-mxv-gray">{{ userMoney.khaDungKyQuy | number }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col col-6 class="text-mxv-blue">Lãi lỗ dự kiến</ion-col>\n      <ion-col text-right col-6>\n        <strong class="text-mxv-gray">{{ userMoney.laiLoDuKien | number }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col col-6 class="text-mxv-blue">Lãi lỗ thực tế</ion-col>\n      <ion-col text-right col-6>\n        <strong class="text-mxv-gray">{{ userMoney.laiLoThucTe | number }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col col-6 class="text-mxv-blue">Tài sản ròng</ion-col>\n      <ion-col text-right col-6>\n        <strong class="text-mxv-gray">{{ userMoney.taiSanRong | number }}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-end style="background-color: #ffffff" margin-horizontal>\n      <ion-col col-6 text-right>\n        <strong text-uppercase class="text-primary" style="letter-spacing: 1px" (click)="goMoneyInfo()">Xem thêm</strong>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="money-status">\n    <ion-row margin>\n      <ion-col col-4 class="text-secondary">\n        <ion-icon name="ios-square-outline"></ion-icon> An toàn</ion-col>\n      <ion-col col-4 text-center class="text-danger">\n        <ion-icon name="ios-square"></ion-icon> Cảnh báo</ion-col>\n      <ion-col col-4 text-right class="text-mxv-gray">\n        <ion-icon name="ios-square-outline"></ion-icon> Chờ xử lí</ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row margin-horizontal>\n      <ion-col col-6>\n        <button ion-button text-uppercase block (click)="goMoneyTrans()">\n          <span>Chuyển tiền</span>\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button text-uppercase block (click)="goMoneyWithDraw()">\n          <span>Rút tiền</span>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row margin-horizontal>\n      <ion-col>\n        <button ion-button outline text-uppercase block (click)="goMoneyHis()">\n          <span>Lịch sử thay đổi tiền</span>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row margin-horizontal>\n      <ion-col>\n        <button ion-button outline text-uppercase block (click)="goMerchangdiseTrans()">\n          <span>Giao nhận hàng vật chất</span>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\DA\Khoa\MxvMobile\src\pages\money\money.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__shared_money_service__["a" /* MoneyService */]])
], MoneyPage);

//# sourceMappingURL=money.js.map

/***/ })

});
//# sourceMappingURL=5.js.map