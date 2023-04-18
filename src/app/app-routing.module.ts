import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserUtils } from '@azure/msal-browser';
import { MsalGuard } from '@azure/msal-angular';


const routes: Routes = [
  
  {path:'', component: SidenavComponent,
    children: [
      { path: '', redirectTo: 'product', pathMatch: 'full'},
      { path: 'product', component: ProductsComponent },
      { path: 'add-new-product', component: AddNewProductComponent},
      {path:'cart', component:CartComponent},
      { path: 'details/:id', component: DetailsComponent},
      {path:'profile', component:ProfileComponent}
    ]
  },
  // {path:'sidenav', component: SidenavComponent}

];
const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    initialNavigation: isIframe ? 'disabled' : 'disabled' // Don't perform initial navigation in iframes
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
