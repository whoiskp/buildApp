webpackJsonp([1],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderPageModule = (function () {
    function OrderPageModule() {
    }
    return OrderPageModule;
}());
OrderPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]),
        ],
    })
], OrderPageModule);

//# sourceMappingURL=order.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* unused harmony export ORDER */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderPage = (function () {
    function OrderPage(navCtrl, actionSheetCtrl, alertCtrl, _sessionService, _contractService, _orderService, _moneyService) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this._sessionService = _sessionService;
        this._contractService = _contractService;
        this._orderService = _orderService;
        this._moneyService = _moneyService;
        this.order = 'buy';
        this.isSearchOn = false;
        this.contract = "null";
        this.price = 0;
        this.vol = 0;
        this.contractInfo = null;
        this.type = 'LO';
        this.priceStop = 0;
        this.fee = 0;
        this.totalValue = 0;
        this.margin = 0;
        this.ref = 0;
        this.ceil = 0;
        this.fl = 0;
        this.isStopOrder = false;
        this.listSell = [
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' }
        ];
        this.listBuy = [
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' },
            { Price: '15.700', Vol: '7.800' }
        ];
    }
    OrderPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
        this._sessionService.GetSession().subscribe(function (response) {
            _this.Session = response;
            console.log(_this.Session);
            _this._moneyService.getMoneyInfo(_this.user.userID).subscribe(function (response) {
                _this.MoneyInfo = response;
            });
            _this._contractService.GetContracts().subscribe(function (response) {
                _this.listContract = response;
                console.log(_this.listContract);
            });
            // this._orderService.getListLenhTrongPhien(this.user.userID).subscribe((response: any) => {
            //   this.ListLenhTrongPhien = response;
            // });
        }, function (error) {
            var alert = _this.alertCtrl.create({
                title: 'Phiên chưa mở!',
                subTitle: 'Chức năng đặt lệnh không khả dụng!',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    OrderPage.prototype.toggleDetails = function () {
        this.isSearchOn = !this.isSearchOn;
    };
    OrderPage.prototype.stpSelect = function () {
        console.log('STP selected');
    };
    OrderPage.prototype.goMenuPage = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    OrderPage.prototype.onChangeContract = function (val) {
        this.contract = val;
        this.contractInfo = this.listContract.find(function (x) { return x.CONTRACTID === +val; });
        this.price = this.price === 0 ? this.contractInfo.STARTPRICE : this.price;
        this.vol = 1;
        this.ref = +this.contractInfo.STARTPRICE;
        this.ceil = this.ref * (1 + this.contractInfo.PRICERANGE / 100);
        this.fl = this.ref * (1 - this.contractInfo.PRICERANGE / 100);
        console.log(this.contractInfo);
        this.updateInfo();
    };
    OrderPage.prototype.onChangePrice = function (val) {
        console.log(val);
        this.updateInfo();
    };
    OrderPage.prototype.onChangeVol = function (val) {
        console.log('Vol: ' + val);
        this.updateInfo();
    };
    OrderPage.prototype.updateInfo = function () {
        this.fee = this.vol * this.contractInfo.FEE;
        this.totalValue = this.vol * this.price * this.contractInfo.UNITPERLOT;
        this.margin = this.totalValue * this.contractInfo.MONEYMARGIN / 100;
        console.log(this.fee + ' ' + this.totalValue + ' ' + this.margin);
    };
    OrderPage.prototype.isValidForm = function () {
        return this.contractInfo != null;
    };
    OrderPage.prototype.onSubmit = function (side) {
        var _this = this;
        console.log(side);
        this.lenh = new ORDER();
        this.lenh.ContractID = +this.contract;
        this.lenh.Price = this.price;
        this.lenh.Vol = this.vol;
        this.lenh.Type = this.type;
        this.lenh.Side = side;
        this.lenh.RefPrice = this.contractInfo.STARTPRICE;
        this.lenh.BankCode = '';
        this.lenh.Fee = this.fee;
        this.lenh.Margin = this.margin;
        if (this.isStopOrder) {
            this.lenh.Status = -1;
            this.lenh.PriceMatch = this.priceStop;
        }
        else {
            this.lenh.Status = 0;
            this.lenh.PriceMatch = 0;
        }
        var alert = this.alertCtrl.create({
            title: 'Xác nhận lệnh đặt?',
            message: "<div class=\"row\">\n        <div>\n          M\u00E3 H\u1EE3p \u0111\u1ED3ng <strong> " + this.contractInfo.CONTRACTCODE + " </strong>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div>\n          Lo\u1EA1i GD <strong> " + this.type + " </strong>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div>\n          Lo\u1EA1i l\u1EC7nh <strong> " + (this.lenh.Side === 'BUY' ? 'MUA' : 'BÁN') + " </strong>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div>\n          Kh\u1ED1i l\u01B0\u1EE3ng <strong> " + this.lenh.Vol + " </strong>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div>\n          Gi\u00E1 \u0111\u1EB7t <strong> " + this.lenh.Price + " </strong>\n        </div>\n      </div>\n      ",
            buttons: [
                {
                    text: 'Hủy bỏ',
                    handler: function () {
                        console.log('Cancel.');
                    }
                },
                {
                    text: 'Xác nhận',
                    handler: function () {
                        _this.lenh.SessionID = _this.Session.sessionid;
                        _this.lenh.UserID = _this.user.userID;
                        _this.lenh.createBy = _this.user.userName;
                        _this._orderService.Add(_this.lenh).subscribe(function (response) {
                            var alert = _this.alertCtrl.create({
                                title: 'Đặt lệnh!',
                                subTitle: 'Thành công!',
                                buttons: ['OK']
                            });
                            alert.present();
                            // this.loadListLenh();
                        }, function (error) {
                            var alert = _this.alertCtrl.create({
                                title: 'Đặt lệnh!',
                                subTitle: 'Đã có lỗi xảy ra!',
                                buttons: ['OK']
                            });
                            alert.present();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    return OrderPage;
}());
OrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order',template:/*ion-inline-start:"D:\DA\MxvMobile\src\pages\order\order.html"*/'<ion-header>\n\n  <ion-navbar color="mxv-blue">\n\n    <ion-buttons left>\n\n      <button ion-button *ngIf="!isSearchOn" (click)="goMenuPage()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title *ngIf="!isSearchOn">Lệnh</ion-title>\n\n    <ion-searchbar *ngIf="isSearchOn" placeholder="Tìm kiếm hợp đồng"></ion-searchbar>\n\n    <ion-buttons right>\n\n      <button (click)="toggleDetails()" ion-button>\n\n        <ion-icon name="ios-search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-segment [(ngModel)]="order" margin-top>\n\n    <ion-segment-button value="buy">\n\n      <i class="fa fa-shopping-cart full-left"></i>\n\n      <span text-uppercase text-center>mua</span>\n\n    </ion-segment-button>\n\n    <ion-segment-button value="sell">\n\n      <i class="fa fa-telegram full-left"></i>\n\n      <span text-uppercase text-center>bán</span>\n\n    </ion-segment-button>\n\n    <ion-segment-button value="edit">\n\n      <i class="fa fa-pencil-square-o full-left"></i>\n\n      <span text-uppercase>Sửa</span>\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n  <ion-grid class="order-head">\n\n    <ion-row [ngClass]="order">\n\n      <ion-col col-7>\n\n        <strong>Lệnh</strong>\n\n      </ion-col>\n\n      <ion-col col-5>\n\n        <strong>Dư mua / Bán</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid>\n\n    <ion-row padding-right>\n\n      <ion-col col-7 id="order-info">\n\n        <ion-row>\n\n          <ion-select [ngModel]="contract" interface="popover" (ngModelChange)="onChangeContract($event)">\n\n            <ion-option value="null"> Chọn HĐ </ion-option>\n\n            <ion-option *ngFor="let ct of listContract" value="{{ ct.CONTRACTID }}">{{ ct.CONTRACTCODE }}</ion-option>\n\n          </ion-select>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col ion-6>\n\n            <ion-label>Loại lệnh</ion-label>\n\n          </ion-col>\n\n          <ion-col ion-6>\n\n            <ion-select [(ngModel)]="type" interface="popover">\n\n              <ion-option value="LO" selected>LO</ion-option>\n\n              <ion-option value="MO">MO</ion-option>\n\n            </ion-select>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col ion-6>\n\n            <ion-label>Giá</ion-label>\n\n          </ion-col>\n\n          <ion-col ion-6>\n\n            <ion-input type="text" [(ngModel)]="price" (ngModelChange)="onChangePrice($event)" [disabled]="contract"></ion-input>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col ion-6>\n\n            <ion-label>Số lượng</ion-label>\n\n          </ion-col>\n\n          <ion-col ion-6>\n\n            <ion-input type="text" [(ngModel)]="vol" (ngModelChange)="onChangeVol($event)" [disabled]="contract"></ion-input>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col ion-6>\n\n            <ion-label>Giá trị HĐ</ion-label>\n\n          </ion-col>\n\n          <ion-col ion-6>\n\n            <ion-label>{{ totalValue | number }}</ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col ion-6>\n\n            <ion-label>Phí GD</ion-label>\n\n          </ion-col>\n\n          <ion-col ion-6>\n\n            <ion-label>{{ fee | number }}</ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col ion-6>\n\n            <ion-label>Ký quỹ</ion-label>\n\n          </ion-col>\n\n          <ion-col ion-6>\n\n            <ion-label>{{ margin | number }}</ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n      <ion-col col-5 id="sell-buy">\n\n        <ion-row text-center [ngClass]="order" class="text-mxv-blue">\n\n          <ion-col col-6 text-center text-uppercase>\n\n            <strong>Trần</strong>\n\n          </ion-col>\n\n          <ion-col col-6>{{ ceil | number }}</ion-col>\n\n        </ion-row>\n\n        <ion-row *ngFor="let sell of listSell" text-center id="sell-list">\n\n          <ion-col col-6 class="text-secondary">{{ sell.Price }}</ion-col>\n\n          <ion-col col-6 class="text-mxv-gray">{{ sell.Vol }}</ion-col>\n\n        </ion-row>\n\n        <ion-row *ngFor="let buy of listBuy" text-center id="buy-list">\n\n          <ion-col col-6 class="text-secondary">{{ buy.Price }}</ion-col>\n\n          <ion-col col-6 class="text-mxv-gray">{{ buy.Vol }}</ion-col>\n\n        </ion-row>\n\n        <ion-row text-center class="text-secondary">\n\n          <ion-col col-6 text-center text-uppercase>\n\n            <strong>sàn</strong>\n\n          </ion-col>\n\n          <ion-col col-6>{{ fl | number }}</ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <div [ngSwitch]="order">\n\n    <div *ngSwitchCase="\'buy\'">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button ion-button block outline class="btn-buy">\n\n              <i class="fa fa-trash fa-2x full-left"></i>\n\n              <span style="padding-left: 10px" text-uppercase>XÓA</span>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button ion-button block color="secondary" (click)="onSubmit(\'BUY\')" [disabled]="!isValidForm()">\n\n              <i class="fa fa-shopping-cart fa-2x full-left"></i>\n\n              <span style="padding-left: 10px" text-uppercase>mua</span>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'sell\'">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button ion-button block outline class="btn-sell">\n\n              <i class="fa fa-trash fa-2x full-left"></i>\n\n              <span style="padding-left: 10px" text-uppercase>XÓA</span>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button ion-button block color="danger" (click)="onSubmit(\'SELL\')" [disabled]="!isValidForm()">\n\n              <i class="fa fa-telegram fa-2x full-left"></i>\n\n              <span style="padding-left: 10px" text-uppercase>Bán</span>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'edit\'">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button ion-button block outline class="btn-edit">\n\n              <i class="fa fa-trash fa-2x full-left"></i>\n\n              <span style="padding-left: 10px" text-uppercase>XÓA</span>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button ion-button block color="mxv-gray">\n\n              <i class="fa fa-pencil-square-o fa-2x full-left"></i>\n\n              <span style="padding-left: 10px" text-uppercase>Sửa</span>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DA\MxvMobile\src\pages\order\order.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__shared_index__["d" /* SessionService */],
        __WEBPACK_IMPORTED_MODULE_2__shared_index__["a" /* ContractService */],
        __WEBPACK_IMPORTED_MODULE_2__shared_index__["c" /* OrderService */],
        __WEBPACK_IMPORTED_MODULE_2__shared_index__["b" /* MoneyService */]])
], OrderPage);

var ORDER = (function () {
    function ORDER() {
    }
    return ORDER;
}());

;
//# sourceMappingURL=order.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contract_service__ = __webpack_require__(198);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contract_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_service__ = __webpack_require__(199);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__order_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__(200);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__session_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__money_service__ = __webpack_require__(196);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__money_service__["a"]; });




//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=1.js.map