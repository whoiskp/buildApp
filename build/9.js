webpackJsonp([9],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyHisPageModule", function() { return MoneyHisPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__money_his__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoneyHisPageModule = (function () {
    function MoneyHisPageModule() {
    }
    return MoneyHisPageModule;
}());
MoneyHisPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__money_his__["a" /* MoneyHisPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__money_his__["a" /* MoneyHisPage */]),
        ],
    })
], MoneyHisPageModule);

//# sourceMappingURL=money-his.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoneyHisPage; });
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
 * Generated class for the MoneyHisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MoneyHisPage = (function () {
    function MoneyHisPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fromDate = '2020-10-31';
        this.toDate = '2020-10-31';
        this.listMoneyHistory = [
            { Ngay: '08/17/17', LoaiGd: 'Lệnh đặt', change: '22,440,000' },
            { Ngay: '08/17/17', LoaiGd: 'Lệnh đặt', change: '22,440,000' },
            { Ngay: '08/17/17', LoaiGd: 'Lệnh đặt', change: '22,440,000' },
            { Ngay: '08/17/17', LoaiGd: 'Lệnh đặt', change: '22,440,000' },
            { Ngay: '08/17/17', LoaiGd: 'Lệnh đặt', change: '22,440,000' },
            { Ngay: '08/17/17', LoaiGd: 'Lệnh đặt', change: '22,440,000' },
            { Ngay: '08/17/17', LoaiGd: 'Lệnh đặt', change: '22,440,000' },
            { Ngay: '08/17/17', LoaiGd: 'Lệnh đặt', change: '22,440,000' },
            { Ngay: '08/17/17', LoaiGd: 'Lệnh đặt', change: '22,440,000' }
        ];
        this.listLenh = [
            'Lịch sử đổi tiền',
            'Vị thế mở',
            'Đã đóng'
        ];
    }
    return MoneyHisPage;
}());
MoneyHisPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-money-his',template:/*ion-inline-start:"D:\DA\MxvMobile\src\pages\money\money-his\money-his.html"*/'<ion-header>\n\n  <ion-navbar color="mxv-blue">\n\n    <ion-title>Tiền</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row text-center padding class="mxv-header">\n\n      <strong text-uppercase>Lịch sử thay đổi tiền</strong>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class="mxv-action">\n\n    <ion-row margin-horizontal>\n\n      <ion-col col-12 class="text-dark">\n\n        <ion-select [(ngModel)]="loailenh" interface="popover">\n\n          <ion-option selected>Chọn loại giao dịch</ion-option>\n\n          <ion-option *ngFor="let lenh of listLenh">{{ lenh }}</ion-option>\n\n        </ion-select>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="text-mxv-gray mxv-search" align-items-center margin-horizontal>\n\n      <ion-col col-4>\n\n        <ion-datetime displayFormat="MM/DD/YYYY" min="2016" max="2020-10-31" [(ngModel)]="fromDate" class="text-gray">\n\n        </ion-datetime>\n\n      </ion-col>\n\n      <ion-col col-1 text-center>\n\n        <ion-icon name="md-remove" style="font-weight: bold"></ion-icon>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <ion-datetime displayFormat="MM/DD/YYYY" min="2016" max="2020-10-31" [(ngModel)]="toDate" class="text-gray">\n\n        </ion-datetime>\n\n      </ion-col>\n\n      <ion-col style="background-color: #29b2e7; color: white" text-center>\n\n        <strong text-uppercase style="letter-spacing: 1px">Tìm</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class="mxv-tb-stripe">\n\n    <ion-row padding-vertical class="mxv-tb-head">\n\n      <ion-col col-3 text-center>\n\n        <strong>Ngày</strong>\n\n      </ion-col>\n\n      <ion-col col-4 text->\n\n        <strong>Loại giao dịch</strong>\n\n      </ion-col>\n\n      <ion-col col-5 text-center>\n\n        <strong>Số dư thay đổi</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let mh of listMoneyHistory" padding-vertical class="text-mxv-gray">\n\n      <ion-col col-3 text-center>\n\n        <span>{{ mh.Ngay }}</span>\n\n      </ion-col>\n\n      <ion-col col-4 text-center>\n\n        <span>{{ mh.LoaiGd }}</span>\n\n      </ion-col>\n\n      <ion-col col-5 text-center>\n\n        <strong>{{ mh.change }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DA\MxvMobile\src\pages\money\money-his\money-his.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MoneyHisPage);

//# sourceMappingURL=money-his.js.map

/***/ })

});
//# sourceMappingURL=9.js.map