webpackJsonp([4],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderbookPageModule", function() { return OrderbookPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderbook__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderbookPageModule = (function () {
    function OrderbookPageModule() {
    }
    return OrderbookPageModule;
}());
OrderbookPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__orderbook__["a" /* OrderbookPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderbook__["a" /* OrderbookPage */]),
        ],
    })
], OrderbookPageModule);

//# sourceMappingURL=orderbook.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderbookPage; });
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


var OrderbookPage = (function () {
    function OrderbookPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listLenh = [
            'Lệnh đang mở',
            'Vị thế mở',
            'Đã đóng'
        ];
        this.listSoLenh = [
            { DonHang: '1796', Loai: 'Bán', MaHopDong: 'CoffeeJan18',
                GiaDat: '10,000,000', GiaKhopMoi: '10,000,000', SlKhop: 1, Phi: '200,000' },
            { DonHang: '1796', Loai: 'Mua', MaHopDong: 'CoffeeJan18',
                GiaDat: '10,000,000', GiaKhopMoi: '10,000,000', SlKhop: 2, Phi: '200,000' },
            { DonHang: '1796', Loai: 'Bán', MaHopDong: 'CoffeeJan18',
                GiaDat: '10,000,000', GiaKhopMoi: '10,000,000', SlKhop: 1, Phi: '200,000' },
            { DonHang: '1788', Loai: 'Mua', MaHopDong: 'CoffeeJan18',
                GiaDat: '10,000,000', GiaKhopMoi: '10,000,000', SlKhop: 1, Phi: '200,000' },
            { DonHang: '1665', Loai: 'Bán', MaHopDong: 'CoffeeJan18',
                GiaDat: '10,000,000', GiaKhopMoi: '10,000,000', SlKhop: 2, Phi: '200,000' },
            { DonHang: '1996', Loai: 'Bán', MaHopDong: 'CoffeeJan18',
                GiaDat: '10,000,000', GiaKhopMoi: '10,000,000', SlKhop: 1, Phi: '200,000' }
        ];
        this.isSearchOn = false;
    }
    OrderbookPage.prototype.toggleDetails = function () {
        this.isSearchOn = !this.isSearchOn;
    };
    OrderbookPage.prototype.goMenuPage = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    return OrderbookPage;
}());
OrderbookPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-orderbook',template:/*ion-inline-start:"D:\DA\MxvMobile\src\pages\orderbook\orderbook.html"*/'<ion-header>\n\n  <ion-navbar color="mxv-blue">\n\n    <ion-buttons left>\n\n      <button ion-button *ngIf="!isSearchOn" (click)="goMenuPage()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title *ngIf="!isSearchOn">Sổ lệnh</ion-title>\n\n    <ion-searchbar *ngIf="isSearchOn" placeholder="Tìm kiếm hợp đồng"></ion-searchbar>\n\n    <ion-buttons right>\n\n      <button (click)="toggleDetails()" ion-button>\n\n        <ion-icon name="ios-search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid ion-fixed>\n\n    <ion-row text-center padding class="mxv-header">\n\n      <strong text-uppercase>Danh sách lệnh</strong>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <div style="margin-top: 60px">\n\n    <div id="type-of-list-order" margin>\n\n      <ion-select [(ngModel)]="loailenh" interface="popover" padding>\n\n        <ion-option selected>Chọn loại lệnh</ion-option>\n\n        <ion-option *ngFor="let lenh of listLenh">{{ lenh }}</ion-option>\n\n      </ion-select>\n\n    </div>\n\n    <ion-scroll scrollX="true" scrollY="true" style="width: 100%; height: 45vh">\n\n      <ion-grid style="width: 230vw; height: 100%" text-center>\n\n        <ion-row class="mxv-tb-head" padding-vertical>\n\n          <ion-col col-1>\n\n            Đóng\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            Đơn hàng\n\n          </ion-col>\n\n          <ion-col col-1>\n\n            Loại\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            Mã hợp đồng\n\n          </ion-col>\n\n          <ion-col>\n\n            Giá đặt\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            Giá khớp mới\n\n          </ion-col>\n\n          <ion-col>\n\n            SL Khớp\n\n          </ion-col>\n\n          <ion-col col-1>\n\n            Phí\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <ion-grid style="width: 230vw; height: 100%;" text-center>\n\n        <ion-row class="mxv-tb-stripe text-mxv-gray" *ngFor="let l of listSoLenh" align-items-center>\n\n          <ion-col col-1>\n\n            <button ion-button ion-only>X</button>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            {{ l.DonHang }}\n\n          </ion-col>\n\n          <ion-col col-1>\n\n            {{ l.Loai }}\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            {{ l.MaHopDong }}\n\n          </ion-col>\n\n          <ion-col>\n\n            {{ l.GiaDat }}\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            {{ l.GiaKhopMoi }}\n\n          </ion-col>\n\n          <ion-col>\n\n            {{ l.SlKhop }}\n\n          </ion-col>\n\n          <ion-col col-1>\n\n            {{ l.Phi }}\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-scroll>\n\n    <ion-grid>\n\n      <ion-row margin>\n\n        <ion-col col-6>\n\n          <button ion-button block color="secondary">\n\n            <strong text-uppercase>Chốt lời</strong>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button block color="danger">\n\n            <strong text-uppercase>Cắt lỗ</strong>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DA\MxvMobile\src\pages\orderbook\orderbook.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], OrderbookPage);

//# sourceMappingURL=orderbook.js.map

/***/ })

});
//# sourceMappingURL=4.js.map