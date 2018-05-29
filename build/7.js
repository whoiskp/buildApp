webpackJsonp([7],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyTransPageModule", function() { return MoneyTransPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__money_trans__ = __webpack_require__(341);
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

/***/ 341:
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
        selector: 'page-money-trans',template:/*ion-inline-start:"D:\DA\MxvMobile\src\pages\money\money-trans\money-trans.html"*/'<ion-header>\n\n  <ion-navbar color="mxv-blue">\n\n    <ion-title>Tiền</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row text-center padding class="mxv-header">\n\n      <strong text-uppercase>Chuyển tiền</strong>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-list no-lines>\n\n    <ion-item>\n\n      <ion-select [(ngModel)]="loailenh" padding interface="popover">\n\n        <ion-option selected>Chuyển tiền nội bộ</ion-option>\n\n        <ion-option *ngFor="let lenh of listLenh">{{ lenh }}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Số dư khả dụng</ion-label>\n\n      <ion-input type="text" value="50,600,456,222"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Số dư khả </ion-label>\n\n      <ion-input type="text" value="50,600,456,222"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-grid>\n\n    <ion-row id="type-of-list-order" margin>\n\n      <ion-col col-12 class="text-dark">\n\n        <ion-select [(ngModel)]="loailenh" padding interface="popover">\n\n          <ion-option selected>Chuyển tiền nội bộ</ion-option>\n\n          <ion-option *ngFor="let lenh of listLenh">{{ lenh }}</ion-option>\n\n        </ion-select>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid>\n\n    <ion-row padding-horizontal>\n\n      <ion-col col-6>\n\n        <ion-label>\n\n          <strong>Số dư khả dụng</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding-horizontal>\n\n      <ion-col col-6>\n\n        <ion-label>\n\n          <strong>Tài khoản nhận</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-select [(ngModel)]="loailenh" padding interface="popover">\n\n          <ion-option selected>Chuyển tiền nội bộ</ion-option>\n\n          <ion-option *ngFor="let lenh of listLenh">{{ lenh }}</ion-option>\n\n        </ion-select>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding-horizontal>\n\n      <ion-col col-12>\n\n        <ion-label>\n\n          <strong>Số tiền chuyển khoản</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-input type="text" value="50,600,456,222"></ion-input>\n\n          <ion-label item-end>VNĐ</ion-label>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding-horizontal>\n\n      <ion-col col-12>\n\n        <ion-label>\n\n          <strong>Nội dung chuyển khoản</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-textarea placeholder="Nội dung"></ion-textarea>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button block outline class="btn-edit">\n\n          <span text-uppercase>\n\n            <strong style="letter-spacing: 1px">Hủy</strong>\n\n          </span>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button block>\n\n          <span text-uppercase>\n\n            <strong style="letter-spacing: 1px">Chuyển tiền</strong>\n\n          </span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DA\MxvMobile\src\pages\money\money-trans\money-trans.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MoneyTransPage);

//# sourceMappingURL=money-trans.js.map

/***/ })

});
//# sourceMappingURL=7.js.map