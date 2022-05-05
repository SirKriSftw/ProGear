import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProductCardsComponent } from './product-cards/product-cards.component';
// import { SearchComponent } from './search/search.component';

const routes: Routes = [
{path:'', component:HomeComponent},

{path:'home', component:HomeComponent},
{path:'products',component:ProductCardsComponent},
// SAME COMPONENT
{path:'products_all',component:ProductCardsComponent},
{path:'products_apparel',component:ProductCardsComponent},
{path:'products_housewares',component:ProductCardsComponent},
{path:'products_travel',component:ProductCardsComponent},
{path:'products_misc',component:ProductCardsComponent},
{path:'products_search',component:ProductCardsComponent},
{path:'products_Search',component:ProductCardsComponent},

// {path:'search', component:SearchComponent},
// {path:'Search', component:SearchComponent},

{path:'logIn', component:LogInComponent},
{path:'createAccount', component:CreateAccountComponent},
{path:'cart', component:CartComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
