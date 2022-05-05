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
import { HomeComponent } from './home/home.component';
// import { CartComponent } from './cart/cart.component';
//  import { LogInComponent } from './log-in/log-in.component';
//  import { CreateAccountComponent } from './create-account/create-account.component';
import { SecondNavComponent } from './second-nav/second-nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { CommonModule } from '@angular/common';
import { ProductCardsComponent } from './product-cards/product-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondNavComponent,
    ProductCardsComponent,
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
    HttpClientModule,
    CommonModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
