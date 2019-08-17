import { Component, OnInit, Input } from '@angular/core';
import { ColumnInterface, ColDataInterface } from './columnsinterface';

@Component({
    selector:'data-grid',
    templateUrl:'./grid.html'
})

export class GridComponent implements OnInit{
    @Input() columns: Array<ColumnInterface>;
    @Input() data: Array<ColDataInterface>;
    ngOnInit(){}
}