webpackJsonp([10],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchandiseTransPageModule", function() { return MerchandiseTransPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__merchandise_trans__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MerchandiseTransPageModule = (function () {
    function MerchandiseTransPageModule() {
    }
    return MerchandiseTransPageModule;
}());
MerchandiseTransPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__merchandise_trans__["a" /* MerchandiseTransPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__merchandise_trans__["a" /* MerchandiseTransPage */]),
        ],
    })
], MerchandiseTransPageModule);

//# sourceMappingURL=merchandise-trans.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MerchandiseTransPage; });
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
 * Generated class for the MerchandiseTransPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MerchandiseTransPage = (function () {
    function MerchandiseTransPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listGiaoHang = [
            {
                MaHopDong: 'CoffeeJan18', LoaiLenh: 'Mua', KL: '12', NgayGui: '12/09/2017',
                KqNop: '10.000.000', TongKq: '50.000.000', HanNop: '06/12/2017'
            },
            {
                MaHopDong: 'CoffeeJan18', LoaiLenh: 'Bán', KL: '12', NgayGui: '12/09/2017',
                KqNop: '10.000.000', TongKq: '50.000.000', HanNop: '06/12/2017'
            },
            {
                MaHopDong: 'CoffeeJan18', LoaiLenh: 'Bán', KL: '12', NgayGui: '12/09/2017',
                KqNop: '10.000.000', TongKq: '50.000.000', HanNop: '06/12/2017'
            },
            {
                MaHopDong: 'CoffeeJan18', LoaiLenh: 'Mua', KL: '12', NgayGui: '12/09/2017',
                KqNop: '10.000.000', TongKq: '50.000.000', HanNop: '06/12/2017'
            },
            {
                MaHopDong: 'CoffeeJan18', LoaiLenh: 'Mua', KL: '12', NgayGui: '12/09/2017',
                KqNop: '10.000.000', TongKq: '50.000.000', HanNop: '06/12/2017'
            },
            {
                MaHopDong: 'CoffeeJan18', LoaiLenh: 'Mua', KL: '12', NgayGui: '12/09/2017',
                KqNop: '10.000.000', TongKq: '50.000.000', HanNop: '06/12/2017'
            },
        ];
    }
    MerchandiseTransPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MerchandiseTransPage');
    };
    return MerchandiseTransPage;
}());
MerchandiseTransPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-merchandise-trans',template:/*ion-inline-start:"D:\DA\MxvMobile\src\pages\money\merchandise-trans\merchandise-trans.html"*/'<ion-header>\n\n  <ion-navbar color="mxv-blue">\n\n    <ion-title *ngIf="!isSearchOn">Tiền</ion-title>\n\n    <ion-searchbar *ngIf="isSearchOn" placeholder="Tìm kiếm hợp đồng"></ion-searchbar>\n\n    <ion-buttons end>\n\n      <button (click)="toggleDetails()" ion-button>\n\n        <ion-icon name="ios-search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row text-center padding class="mxv-header">\n\n      <strong text-uppercase>Giao nhận hàng vật chất</strong>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid>\n\n    <ion-row id="type-of-list-order" margin>\n\n      <ion-col col-12 class="text-dark">\n\n        <ion-select [(ngModel)]="loailenh" padding interface="popover">\n\n          <ion-option selected>Giao nhận hàng vật chất</ion-option>\n\n          <ion-option *ngFor="let lenh of listLenh">{{ lenh }}</ion-option>\n\n        </ion-select>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <div *ngFor="let gh of listGiaoHang">\n\n    <ion-grid class="mxv-tb-head">\n\n      <ion-row padding-vertical>\n\n        <ion-col col-4 text-center>\n\n          <span>Mã hợp đồng</span>\n\n        </ion-col>\n\n        <ion-col col-3 text-center>\n\n          <span>Loại lệnh</span>\n\n        </ion-col>\n\n        <ion-col col-1 text-center>\n\n          <span>KL</span>\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n          <span>Ngày gửi</span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid class="mxv-tb-stripe">\n\n      <ion-row padding-vertical class="text-mxv-gray">\n\n        <ion-col col-4 text-center>\n\n          <strong>{{ gh.MaHopDong }}</strong>\n\n        </ion-col>\n\n        <ion-col col-3 text-center [ngClass]="gh.LoaiLenh.toString().toLowerCase() === \'mua\' ? \'text-secondary\' : \'text-danger\'">\n\n          <strong text-uppercase>{{ gh.LoaiLenh }}</strong>\n\n        </ion-col>\n\n        <ion-col col-1 text-center>\n\n          <strong>{{ gh.KL }}</strong>\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n          <strong>{{ gh.NgayGui }}</strong>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid class="mxv-tb-head">\n\n      <ion-row padding-vertical>\n\n        <ion-col col-4 text-center>\n\n          <span>KQuỹ phải nộp</span>\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n          <span>Tổng ký quỹ</span>\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n          <span>Hạn nộp</span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid class="mxv-tb-stripe">\n\n      <ion-row padding-vertical class="text-mxv-gray">\n\n        <ion-col col-4 text-center>\n\n          <strong>{{ gh.KqNop }}</strong>\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n          <strong>{{ gh.TongKq }}</strong>\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n          <strong>{{ gh.HanNop }}</strong>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid style="border-bottom: solid 1px #999999"  margin-bottom>\n\n      <ion-row align-items-center margin-vertical>\n\n        <ion-col col-8 class="text-mxv-blue" text-center>\n\n          <span style="font-size: 1.3em">Đợi xác nhận giao hàng...</span>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <button ion-button text-uppercase>Xác nhận</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DA\MxvMobile\src\pages\money\merchandise-trans\merchandise-trans.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MerchandiseTransPage);

//# sourceMappingURL=merchandise-trans.js.map

/***/ })

});
//# sourceMappingURL=10.js.map