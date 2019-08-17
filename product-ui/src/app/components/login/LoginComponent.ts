import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails, loginInitData } from './LoginModal';
import { HTTPServices } from '../../services/services';
import { LOGIN } from '../../services/constants';
import { AppStoreService } from '../../services/appstoreservice';

@Component({
    selector:'login-list',
    templateUrl: './login.html',
    styleUrls:['./login.less']
})

export class LoginComponent{
    loginDetails: LoginDetails = loginInitData;
    constructor(
        private router: Router,
        private http: HTTPServices,
        private dataStore: AppStoreService
    ){}
    handlelogin(){
        console.log(this.loginDetails);
        this.http.postData(LOGIN, this.loginDetails).subscribe(resp => {
            if(resp.success){
                localStorage.setItem('user', resp.userdetails.username)
                //this.dataStore.storeData('userdetails', resp.userdetails);
                this.router.navigate(['dashboard/products'])
            }
        })
        //this.router.navigate(['dashboard/products']);
    }
}