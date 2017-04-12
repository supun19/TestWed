import {Component } from '@angular/core';

//services
import {AuthService} from '../../services/auth.service';


//user
import {User} from '../../class/user';

@Component({
    selector:'signup',
    templateUrl:'signup.component.html',
    styleUrls:['signup.component.css'],
    providers:[AuthService],

})

export class SignupComponent{



    user = new User("","");
    constructor(private authService:AuthService){

    }
    onSubmit():void{

        this.authService.signup(this.user).then( res =>{

            if(res.signup == true){

                console.log("user sign up success");
            }
        },
            error =>{
                alert('Invalid Username or Password');

            }

        );

    }
}