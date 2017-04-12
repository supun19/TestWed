import {Injectable} from '@angular/core';
import {Http} from '@angular/http'

import 'rxjs/add/operator/toPromise';

//user
import {User} from '../class/user';

@Injectable()

export class UserService{

     singupUrl = '/signup';
    constructor(private http: Http){}



}