webpackJsonp([14],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, alertCtrl, formBuilder, authService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.registerCredentials = { username: '002C000002', password: 1234 };
        this.authForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(4)])]
        });
    }
    LoginPage.prototype.onSubmit = function (value) {
        var _this = this;
        if (this.authForm.valid) {
            this.authService.login(value).subscribe(function (res) {
                _this.user = JSON.stringify(res);
                console.log(_this.user);
                window.localStorage.setItem('user', _this.user);
                _this.navCtrl.push('TabsPage');
            }, function (error) {
                var alert = _this.alertCtrl.create({
                    title: 'Đăng nhập thất bại!',
                    subTitle: 'Username hoặc password không đúng!',
                    buttons: ['OK']
                });
                alert.present();
            });
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"E:\DA\Khoa\MxvMobile\src\pages\login\login.html"*/'<ion-content class="login-content" padding>\n  <ion-row class="logo-row mxv-fadeUp">\n    <ion-col>\n      <img src="./assets/imgs/logo-mxv.png" />\n    </ion-col>\n  </ion-row>\n  <div class="login-box animated bounceInLeft">\n    <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ul class="text-light">\n              <li *ngIf="authForm.controls.username.hasError(\'required\') && authForm.controls.username.touched">Username là bắt buộc!</li>\n              <li *ngIf="authForm.controls.username.hasError(\'pattern\') && authForm.controls.username.touched">Username là số và chữ!</li>\n              <li *ngIf="authForm.controls.username.hasError(\'minlength\') && authForm.controls.username.touched">Username tối thiểu 8 ký tự!</li>\n              <li *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">Password là bắt buộc!</li>\n              <li *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">Password tối thiểu 4 ký tự!</li>\n            </ul>\n            <ion-item>\n              <ion-input formControlName="username" type="text" placeholder="Tên đăng nhập" name="username" [(ngModel)]="registerCredentials.username"\n                required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input formControlName="password" type="password" placeholder="Mật khẩu" name="password" [(ngModel)]="registerCredentials.password"\n                required></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!authForm.valid">Đăng nhập</button>\n          <button ion-button class="register-btn" block clear>Quên mật khẩu</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\DA\Khoa\MxvMobile\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=14.js.map