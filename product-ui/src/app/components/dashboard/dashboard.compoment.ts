import { Component } from "@angular/core";
import { AppStoreService } from "../../services/appstoreservice";
import { HTTPServices } from "../../services/services";
import { USERDETAILS } from "../../services/constants";

@Component({
    selector: 'app-layout',
    template: `<div>
        <app-header [details]="userdetails"></app-header>
        <router-outlet></router-outlet>
    </div>`
})

export class DashboardComponent{
    userdetails: any = {
        fullname: ''
    };
    constructor(
        private dataStore: AppStoreService,
        private http: HTTPServices
    ){
        //this.userdetails = this.dataStore.getStoreData('userdetails')
        this.getUserDetails();
    }
    getUserDetails(){
        const logged = localStorage.getItem('user');
        this.http.getData(`${USERDETAILS}?username=${logged}`).subscribe(resp => {
            if(resp.success){
                this.userdetails = resp.data;
                this.dataStore.storeData('userdetails', resp.data);
            }
        })
    }
}