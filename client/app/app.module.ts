import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { HttpModule }    from '@angular/http';

//component
import {AppComponent} from "./app.component";
import { NavComponent } from "../app/pages/navbar/nav.component";
import { HomeComponent } from "../app/pages/home/home.component";
import {SignupComponent} from "../app/pages/signup/signup.component";
import {CardComponent} from "../app/pages/card/card.component";

//services
import { AuthService } from './services/auth.service';
import {UserService} from './services/user.service';

import { AuthGuard } from './guards/auth.gaurd';
import { AppRoutingModule } from './app.routing';

import { LoginComponent } from './pages/login/login.component';

import {MainPipeModule} from "./pipes/main.pipe";


//when creating a component, add it here
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule, MainPipeModule],
    declarations: [AppComponent,LoginComponent,NavComponent,HomeComponent,
        SignupComponent,
        CardComponent,
    ],
    providers: [AuthService, AuthGuard,UserService],
    bootstrap: [AppComponent],
})

export class AppModule { }