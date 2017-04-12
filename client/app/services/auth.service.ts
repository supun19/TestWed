/**
 * Created by thilina on 12/16/16.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Url} from "url";


import {User} from '../class/user';


@Injectable()
export class AuthService {

    constructor(private http: Http) { }

    private headers = new Headers({'Content-Type': 'application/json'});
    private Url = '/authenticate';

    login(user: any):  Promise<any> {
        return new Promise((resolve, reject) => {
            //noinspection TypeScriptUnresolvedFunction
            this.http
                .post(this.Url, JSON.stringify({user: user}), {headers: this.headers})
                .toPromise()
                .then(response => {
                    //noinspection TypeScriptUnresolvedFunction
                    resolve(response.json());
                },error => {
                    reject(error);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                });
        })
    }

    signup(user:User): Promise<any> {
        const signupUrl = `${this.Url}/signup`;
        return new Promise((resolve, reject) => {
            return this.http
                .post(signupUrl, JSON.stringify(user), {headers: this.headers})
                .toPromise()
                .then(response => {
                    //noinspection TypeScriptUnresolvedFunction

                    resolve(response.json());
                }, error => {

                    reject(error);
                })
                .catch((err) => {

                    reject(err);
                });

        });
    }
}