import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Login} from './login';
import { LoginService } from './login.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService]
})
export class LoginComponent {
    login = new Login();
    users: any[];
    valid: boolean = true;
    loginHeading: string = "Kindly Login";
    isLoggedIn: string = "false";
    loginSuccess: boolean;
    constructor(private router: Router, private loginService: LoginService) {
        this.loginService.getUsers()
            .subscribe(users => this.users = users);
    }
    onSubmit() {
        this.valid = true;
        var name = this.login.username;
        sessionStorage.setItem("username", this.login.username);
        var password = this.login.password;
        var user = this.users.filter(user => user.username == name && user.password == password)[0];
        if (user) {
            this.isLoggedIn = "true";
            sessionStorage.setItem("isLoggedIn", this.isLoggedIn);
            this.loginSuccess = true;
            this.router.navigate(['/moviesList']);
        }
        else {
            this.isLoggedIn = "false";
            sessionStorage.setItem("isLoggedIn", this.isLoggedIn);
            this.valid = false;
        }
    }


}
