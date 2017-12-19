webpackJsonp([7],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyTransPageModule", function() { return MoneyTransPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__money_trans__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoneyTransPageModule = (function () {
    function MoneyTransPageModule() {
    }
    return MoneyTransPageModule;
}());
MoneyTransPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__money_trans__["a" /* MoneyTransPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__money_trans__["a" /* MoneyTransPage */]),
        ],
    })
], MoneyTransPageModule);

//# sourceMappingURL=money-trans.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoneyTransPage; });
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
 * Generated class for the MoneyTransPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MoneyTransPage = (function () {
    function MoneyTransPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MoneyTransPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MoneyTransPage');
    };
    return MoneyTransPage;
}());
MoneyTransPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-money-trans',template:/*ion-inline-start:"E:\DA\Khoa\MxvMobile\src\pages\money\money-trans\money-trans.html"*/'<ion-header>\n  <ion-navbar color="mxv-blue">\n    <ion-title>Tiền</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row text-center padding class="mxv-header">\n      <strong text-uppercase>Chuyển tiền</strong>\n    </ion-row>\n  </ion-grid>\n  <ion-list no-lines>\n    <ion-item>\n      <ion-select [(ngModel)]="loailenh" padding interface="popover">\n        <ion-option selected>Chuyển tiền nội bộ</ion-option>\n        <ion-option *ngFor="let lenh of listLenh">{{ lenh }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Số dư khả dụng</ion-label>\n      <ion-input type="text" value="50,600,456,222"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Số dư khả </ion-label>\n      <ion-input type="text" value="50,600,456,222"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-grid>\n    <ion-row id="type-of-list-order" margin>\n      <ion-col col-12 class="text-dark">\n        <ion-select [(ngModel)]="loailenh" padding interface="popover">\n          <ion-option selected>Chuyển tiền nội bộ</ion-option>\n          <ion-option *ngFor="let lenh of listLenh">{{ lenh }}</ion-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row padding-horizontal>\n      <ion-col col-6>\n        <ion-label>\n          <strong>Số dư khả dụng</strong>\n        </ion-label>\n      </ion-col>\n      <ion-col col-6>\n        <ion-input type="text"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row padding-horizontal>\n      <ion-col col-6>\n        <ion-label>\n          <strong>Tài khoản nhận</strong>\n        </ion-label>\n      </ion-col>\n      <ion-col col-6>\n        <ion-select [(ngModel)]="loailenh" padding interface="popover">\n          <ion-option selected>Chuyển tiền nội bộ</ion-option>\n          <ion-option *ngFor="let lenh of listLenh">{{ lenh }}</ion-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row padding-horizontal>\n      <ion-col col-12>\n        <ion-label>\n          <strong>Số tiền chuyển khoản</strong>\n        </ion-label>\n      </ion-col>\n      <ion-col col-12>\n        <ion-item>\n          <ion-input type="text" value="50,600,456,222"></ion-input>\n          <ion-label item-end>VNĐ</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row padding-horizontal>\n      <ion-col col-12>\n        <ion-label>\n          <strong>Nội dung chuyển khoản</strong>\n        </ion-label>\n      </ion-col>\n      <ion-col col-12>\n        <ion-textarea placeholder="Nội dung"></ion-textarea>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button block outline class="btn-edit">\n          <span text-uppercase>\n            <strong style="letter-spacing: 1px">Hủy</strong>\n          </span>\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button block>\n          <span text-uppercase>\n            <strong style="letter-spacing: 1px">Chuyển tiền</strong>\n          </span>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\DA\Khoa\MxvMobile\src\pages\money\money-trans\money-trans.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MoneyTransPage);

//# sourceMappingURL=money-trans.js.map

/***/ })

});
//# sourceMappingURL=7.js.map