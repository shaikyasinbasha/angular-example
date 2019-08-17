import { Component, OnInit } from '@angular/core';
import { HTTPServices } from '../../services/services';
import {PRODUCTLIST} from '../../services/constants';
import { PRODUCT_COLUMN_CONFIG } from './product.columns';

@Component({
    selector:'product-list',
    template: `<div>
        <data-grid
            [columns]="options"
            [data]="list"
        ></data-grid>
    </div>`
})

export class ProductListComponent implements OnInit{
    options = PRODUCT_COLUMN_CONFIG;
    list = []
    constructor(
        private http: HTTPServices
    ){}
    ngOnInit(){
        this.http.getData(PRODUCTLIST).subscribe(info => {
            if(info.success){
                this.list = info.data;
            }
        })
    }
}