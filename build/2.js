webpackJsonp([2],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserPageModule = (function () {
    function UserPageModule() {
    }
    return UserPageModule;
}());
UserPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */]),
        ],
    })
], UserPageModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
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


var UserPage = (function () {
    function UserPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
    }
    UserPage.prototype.goMenuPage = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    return UserPage;
}());
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"D:\DA\MxvMobile\src\pages\user\user.html"*/'<ion-header>\n\n  <ion-navbar color="mxv-blue">\n\n    <ion-buttons left>\n\n      <button ion-button *ngIf="!isSearchOn" (click)="goMenuPage()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title *ngIf="!isSearchOn">Tài khoản</ion-title>\n\n    <ion-searchbar *ngIf="isSearchOn" placeholder="Tìm kiếm hợp đồng"></ion-searchbar>\n\n    <ion-buttons right>\n\n      <button (click)="toggleDetails()" ion-button>\n\n        <ion-icon name="ios-search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid ion-fixed>\n\n    <ion-row padding-vertical class="mxv-header">\n\n      <ion-col col-4 padding-left>\n\n        <span>Tài khoản</span>\n\n      </ion-col>\n\n      <ion-col col-auto>\n\n        <strong>{{ user.userName }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class="mxv-tb-stripe text-dark" style="margin-top: 50px">\n\n    <ion-row>\n\n      <ion-col col-4 padding-left>Họ tên</ion-col>\n\n      <ion-col col-auto>\n\n        <strong>{{ user.hoTen }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4 padding-left>Email</ion-col>\n\n      <ion-col col-auto>\n\n        {{ user.email }}\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4 padding-left>Ngày Sinh</ion-col>\n\n      <ion-col col-auto>\n\n        <strong>{{ user.ngaySinh | date:\'dd/MM/yyyy\' }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4 padding-left>Giới tính</ion-col>\n\n      <ion-col col-auto>\n\n        <strong>{{ user.gioiTinh }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4 padding-left>Quốc gia</ion-col>\n\n      <ion-col col-auto>\n\n        <strong>{{ user.quocGia }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4 padding-left>Địa chỉ</ion-col>\n\n      <ion-col col-auto>\n\n        {{ user.diaChi }}\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4 padding-left>Điện thoại</ion-col>\n\n      <ion-col col-auto>\n\n        <strong>{{ user.dienThoai }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4 padding-left>Thành viên</ion-col>\n\n      <ion-col col-auto>\n\n        <strong>{{ user.thanhVien }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4 padding-left>Ngày tạo</ion-col>\n\n      <ion-col col-auto>\n\n        <strong>{{ user.ngayTao | date:\'dd/MM/yyyy\' }}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DA\MxvMobile\src\pages\user\user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ })

});
//# sourceMappingURL=2.js.map