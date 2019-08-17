import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/LoginComponent';
import { ProductListComponent } from './components/productlist/ProductListComponent';
import { UpdateProductComponent } from './components/updateproduct/UpdateProductComponent';
import { SharedModule } from '../sharedmodule/shared.module';
import { ActionsColumn } from './components/productlist/ActionsColumnComponent';
import { HTTPServices } from './services/services';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.compoment';
import { AppStoreService } from './services/appstoreservice';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductListComponent,
    UpdateProductComponent,
    ActionsColumn
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  entryComponents:[ActionsColumn],
  providers: [AppStoreService, HTTPServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
