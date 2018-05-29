webpackJsonp([13],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassPageModule", function() { return ChangePassPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_pass__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePassPageModule = (function () {
    function ChangePassPageModule() {
    }
    return ChangePassPageModule;
}());
ChangePassPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__change_pass__["a" /* ChangePassPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_pass__["a" /* ChangePassPage */]),
        ],
    })
], ChangePassPageModule);

//# sourceMappingURL=change-pass.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePassPage; });
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
 * Generated class for the ChangePassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangePassPage = (function () {
    function ChangePassPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChangePassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePassPage');
    };
    return ChangePassPage;
}());
ChangePassPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-change-pass',template:/*ion-inline-start:"D:\DA\MxvMobile\src\pages\menu\change-pass\change-pass.html"*/'<ion-header>\n\n  <ion-navbar color="mxv-blue">\n\n    <ion-title>MENU</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="mxv-menu-page">\n\n  <ion-list no-lines>\n\n    <ion-item class="text-mxv-gray">\n\n      <span>Đổi mật khẩu</span>\n\n    </ion-item>\n\n    <ion-item class="text-primary" (click)="goUser()">\n\n      <i class="fa fa-user"></i>\n\n      <strong> Thông tin tài khoản</strong>\n\n    </ion-item>\n\n    <ion-item class="text-primary" (click)="goChangePass()">\n\n      <i class="fa fa-lock"></i>\n\n      <strong> Đổi mật khẩu</strong>\n\n    </ion-item>\n\n    <ion-item-divider></ion-item-divider>\n\n    <ion-item class="text-primary btn-func" style="border: 0 !important">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6 text-center padding-vertical (click)="goMoney()">\n\n            <i class="fa fa-usd"></i>\n\n            <br>\n\n            <strong> Số dư</strong>\n\n          </ion-col>\n\n          <ion-col col-6 text-center padding-vertical (click)="goOrder()">\n\n            <i class="fa fa-bolt"></i>\n\n            <br>\n\n            <strong> Đặt lệnh</strong>\n\n          </ion-col>\n\n          <ion-col col-6 text-center padding-vertical (click)="goOrderBook()">\n\n            <i class="fa fa-book"></i>\n\n            <br>\n\n            <strong> Sổ lệnh</strong>\n\n          </ion-col>\n\n          <ion-col col-6 text-center padding-vertical (click)="goReport()">\n\n            <i class="fa fa-clipboard"></i>\n\n            <br>\n\n            <strong> Báo cáo</strong>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n    <ion-item-divider></ion-item-divider>\n\n    <ion-item class="text-primary" (click)="goSetting()">\n\n      <i class="fa fa-cog"></i>\n\n      <strong> Cài đặt</strong>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DA\MxvMobile\src\pages\menu\change-pass\change-pass.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ChangePassPage);

//# sourceMappingURL=change-pass.js.map

/***/ })

});
//# sourceMappingURL=13.js.map