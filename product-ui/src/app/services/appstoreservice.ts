import { Injectable } from "@angular/core";

const AppStoreData = {};
@Injectable()
export class AppStoreService{
    storeData(name: any, value: any){
        AppStoreData[name] = value;
    }
    getStoreData(name: any){
        return AppStoreData[name];
    }
}