/**
 * Created by thilina on 12/13/16.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { SignupComponent } from "../app/pages/signup/signup.component";
import { LoveComponent } from "../app/pages/love/love.component";

import { AuthGuard } from './guards/auth.gaurd';
import { AuthService } from './services/auth.service';

const routes: Routes = [

    { path: '', component: HomeComponent },
    {path:'login', component: LoginComponent},
    {path:'signup', component: SignupComponent},
    {path:'love', component: LoveComponent},

];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [ AuthService, AuthGuard ]
})
export class AppRoutingModule {}


/*
* [routerLink]="['/absolute']"
 [routerLink]="['../../parent']"
 [routerLink]="['../sibling']"
 [routerLink]="['./child']"
 [routerLink]="['child']"
* */