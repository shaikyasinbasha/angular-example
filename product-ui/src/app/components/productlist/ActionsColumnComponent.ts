import { Component, Input, OnInit } from '@angular/core';
import { AppStoreService } from '../../services/appstoreservice';

@Component({
    selector: 'column-actons',
    template: `<div>
        <div *ngIf="isReadOnly">
            <i (click)="editRecord()" class="fa fa-pencil ml-2 mr-2"></i>
            <i (click)="deleteRecord()" class="fa fa-trash ml-2 mr-2"></i>
        </div>
        <div *ngIf="!isReadOnly">
            view
        </div>
    </div>`
})

export class ActionsColumn implements OnInit{
    @Input() data: any;
    isReadOnly: boolean = true;
    constructor(
        private dataStore: AppStoreService, 
    ){}
    ngOnInit(){
        this.isReadOnly = this.dataStore.getStoreData('userdetails').username === this.data.record.created
    }
    editRecord() {
        console.log(this.data);
    }
    deleteRecord() {
        console.log(this.data);
    }
}