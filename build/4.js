webpackJsonp([4],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderbookPageModule", function() { return OrderbookPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderbook__ = __webpack_require__(348);
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

/***/ 348:
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
        selector: 'page-orderbook',template:/*ion-inline-start:"E:\DA\Khoa\MxvMobile\src\pages\orderbook\orderbook.html"*/'<ion-header>\n  <ion-navbar color="mxv-blue">\n    <ion-buttons left>\n      <button ion-button *ngIf="!isSearchOn" (click)="goMenuPage()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="!isSearchOn">Sổ lệnh</ion-title>\n    <ion-searchbar *ngIf="isSearchOn" placeholder="Tìm kiếm hợp đồng"></ion-searchbar>\n    <ion-buttons right>\n      <button (click)="toggleDetails()" ion-button>\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid ion-fixed>\n    <ion-row text-center padding class="mxv-header">\n      <strong text-uppercase>Danh sách lệnh</strong>\n    </ion-row>\n  </ion-grid>\n  <div style="margin-top: 60px">\n    <div id="type-of-list-order" margin>\n      <ion-select [(ngModel)]="loailenh" interface="popover" padding>\n        <ion-option selected>Chọn loại lệnh</ion-option>\n        <ion-option *ngFor="let lenh of listLenh">{{ lenh }}</ion-option>\n      </ion-select>\n    </div>\n    <ion-scroll scrollX="true" scrollY="true" style="width: 100%; height: 45vh">\n      <ion-grid style="width: 230vw; height: 100%" text-center>\n        <ion-row class="mxv-tb-head" padding-vertical>\n          <ion-col col-1>\n            Đóng\n          </ion-col>\n          <ion-col col-2>\n            Đơn hàng\n          </ion-col>\n          <ion-col col-1>\n            Loại\n          </ion-col>\n          <ion-col col-2>\n            Mã hợp đồng\n          </ion-col>\n          <ion-col>\n            Giá đặt\n          </ion-col>\n          <ion-col col-2>\n            Giá khớp mới\n          </ion-col>\n          <ion-col>\n            SL Khớp\n          </ion-col>\n          <ion-col col-1>\n            Phí\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid style="width: 230vw; height: 100%;" text-center>\n        <ion-row class="mxv-tb-stripe text-mxv-gray" *ngFor="let l of listSoLenh" align-items-center>\n          <ion-col col-1>\n            <button ion-button ion-only>X</button>\n          </ion-col>\n          <ion-col col-2>\n            {{ l.DonHang }}\n          </ion-col>\n          <ion-col col-1>\n            {{ l.Loai }}\n          </ion-col>\n          <ion-col col-2>\n            {{ l.MaHopDong }}\n          </ion-col>\n          <ion-col>\n            {{ l.GiaDat }}\n          </ion-col>\n          <ion-col col-2>\n            {{ l.GiaKhopMoi }}\n          </ion-col>\n          <ion-col>\n            {{ l.SlKhop }}\n          </ion-col>\n          <ion-col col-1>\n            {{ l.Phi }}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-scroll>\n    <ion-grid>\n      <ion-row margin>\n        <ion-col col-6>\n          <button ion-button block color="secondary">\n            <strong text-uppercase>Chốt lời</strong>\n          </button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button block color="danger">\n            <strong text-uppercase>Cắt lỗ</strong>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\DA\Khoa\MxvMobile\src\pages\orderbook\orderbook.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], OrderbookPage);

//# sourceMappingURL=orderbook.js.map

/***/ })

});
//# sourceMappingURL=4.js.map