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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require("@angular/forms");
var http_1 = require('@angular/http');
//component
var app_component_1 = require("./app.component");
var nav_component_1 = require("../app/pages/navbar/nav.component");
var home_component_1 = require("../app/pages/home/home.component");
var signup_component_1 = require("../app/pages/signup/signup.component");
//services
var auth_service_1 = require('./services/auth.service');
var user_service_1 = require('./services/user.service');
var auth_gaurd_1 = require('./guards/auth.gaurd');
var app_routing_1 = require('./app.routing');
var login_component_1 = require('./pages/login/login.component');
var main_pipe_1 = require("./pipes/main.pipe");
//when creating a component, add it here
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.AppRoutingModule, main_pipe_1.MainPipeModule],
            declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, nav_component_1.NavComponent, home_component_1.HomeComponent,
                signup_component_1.SignupComponent,
            ],
            providers: [auth_service_1.AuthService, auth_gaurd_1.AuthGuard, user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map