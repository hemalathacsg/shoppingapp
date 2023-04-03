import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SidenavComponent } from './sidenav/sidenav.component';

// const routes: Routes = [
//   {path:'',component:SidenavComponent},
//   {path:'product', component:ProductsComponent},
//   {path:'login', component:LoginComponent},
//   {path:'add-new-product', component:AddNewProductComponent}
// ];
const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      { path: '', redirectTo: 'product', pathMatch: 'full' },
      { path: 'product', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'add-new-product', component: AddNewProductComponent },
      {path:'cart', component:CartComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
