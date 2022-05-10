// NG Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';

// NG Materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { LayoutModule } from '@angular/cdk/layout';
import { CartComponent } from './components/cart/cart.component';


// Services
import { ProductsService } from './services/products/products.service';
import { CategoriesService } from './services/categories/categories.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutButtonComponent,
    ProductsComponent,
    NavComponent,
    CheckoutComponent,
    CartComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    
    MatInputModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatOptionModule,
    
    AuthModule.forRoot({
      domain: 'dev-nxw7ytn5.us.auth0.com',
      clientId: 'trrYmHCgFrgwPRi3p3rEUaFnyxTMZXNi',
    }),

  ],
  providers: [ProductsService,
              CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }