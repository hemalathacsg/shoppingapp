import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes }   from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProductsComponent } from './products/products.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { CartComponent } from './cart/cart.component';
import { MsalModule, MsalRedirectComponent, MsalGuard, MsalInterceptor } from '@azure/msal-angular'; // Import MsalInterceptor
import { PublicClientApplication, InteractionType } from '@azure/msal-browser';
import { DetailsComponent } from './details/details.component';
import {MatCardModule} from '@angular/material/card';
import { HTTP_INTERCEPTORS } from "@angular/common/http"; // Import 

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppComponent,
    
    SidenavComponent,
    ProductsComponent,
    AddNewProductComponent,
    CartComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule,
    MatFormFieldModule,
    
    MatInputModule,HttpClientModule,MatTableModule,MatCardModule,
    MsalModule.forRoot( new PublicClientApplication({
      auth: {
        clientId: 'a4b82ff5-6a17-4ad7-9377-8346a0694c3a', // Application (client) ID from the app registration
        authority: 'https://login.microsoftonline.com/a9c50c6c-2ecc-4653-99b2-58024af91866', // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
        redirectUri: 'http://localhost:4200',// This is your redirect URI
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
      }
    }), 
    { interactionType: InteractionType.Redirect,
      authRequest: {
        scopes: ['user.read']}
      },
      {
        interactionType: InteractionType.Redirect, // MSAL Interceptor Configuration
        protectedResourceMap: new Map([ 
            ['https://graph.microsoft.com', ['user.read']]
        ])
      } )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
     MsalGuard // MsalGuard added as provider here
],
  bootstrap: [AppComponent, MsalRedirectComponent]
}
)
export class AppModule { }
