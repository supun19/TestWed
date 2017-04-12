"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//services
var auth_service_1 = require('../../services/auth.service');
//user
var user_1 = require('../../class/user');
var SignupComponent = (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.user = new user_1.User("", "");
    }
    SignupComponent.prototype.onSubmit = function () {
        this.authService.signup(this.user).then(function (res) {
            if (res.signup == true) {
                console.log("user sign up success");
            }
        }, function (error) {
            alert('Invalid Username or Password');
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'signup',
            templateUrl: 'signup.component.html',
            styleUrls: ['signup.component.css'],
            providers: [auth_service_1.AuthService],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map