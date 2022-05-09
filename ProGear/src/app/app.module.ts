import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import {  MatListModule } from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
// import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
//import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
//import { CheckoutComponent } from './components/checkout/checkout.component';
import {AuthModule} from '@auth0/auth0-angular';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
//import { ApparelComponent } from './apparel/apparel.component';
import { HousewaresComponent } from './housewares/housewares.component';
import { TravelComponent } from './travel/travel.component';
import { MiscComponent } from './misc/misc.component';
// import { CartComponent } from './cart/cart.component';
//  import { LogInComponent } from './log-in/log-in.component';
//  import { CreateAccountComponent } from './create-account/create-account.component';
import { SecondNavComponent } from './second-nav/second-nav.component';
import { AllComponent } from './all/all.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { UsersService } from './services/users/users.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  //  ProductsComponent,
    NavbarComponent,
  //  CheckoutComponent,
    LogoutButtonComponent,
    HomeComponent,
   // ApparelComponent,
    HousewaresComponent,
    TravelComponent,
    MiscComponent,
    SecondNavComponent,
    AllComponent,
    SearchComponent,
    //CartComponent
    // LogInComponent,
    // CreateAccountComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-nxw7ytn5.us.auth0.com',
      clientId: 'trrYmHCgFrgwPRi3p3rEUaFnyxTMZXNi',
    }),
    HttpClientModule,
    CommonModule,
    MatSidenavModule,
  ],
  providers: [ProductsService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
