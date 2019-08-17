import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/LoginComponent';
import { ProductListComponent } from './components/productlist/ProductListComponent';
import { UpdateProductComponent } from './components/updateproduct/UpdateProductComponent';
import { DashboardComponent } from './components/dashboard/dashboard.compoment';

const routes: Routes = [{
  path:'login',
  component: LoginComponent
},{
  path:  'dashboard',
  component:  DashboardComponent,
  children:[{
    path: 'products', 
    component: ProductListComponent
  },{
    path: 'view/:id', 
    component: UpdateProductComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
