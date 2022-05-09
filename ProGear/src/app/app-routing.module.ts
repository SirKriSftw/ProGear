import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
// import { SearchComponent } from './search/search.component';

const routes: Routes = [
{path:'', component:HomeComponent},

{path:'home', component:HomeComponent},
{path:'products',component:ProductsComponent},

// {path:'search', component:SearchComponent},
// {path:'Search', component:SearchComponent},

{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'cart', component:CartComponent},
{path:'checkout', component:CheckoutComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
