import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid/GridComponent';
import { DynamicLoaderComponent } from './dynamicloader/dynamiccomploader';
import { DynamicComponentDirective } from './dynamicloader/DynamicLoaderDirective';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServicesInterceptor } from './servicesnterceptor/services.nterceptor';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridComponent,
    DynamicLoaderComponent,
    DynamicComponentDirective
  ],
  exports: [
    GridComponent,
    DynamicLoaderComponent,
    DynamicComponentDirective
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: ServicesInterceptor, multi: true }
  ]
})
export class SharedModule { }