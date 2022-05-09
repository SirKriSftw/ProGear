import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
// import { SearchComponent } from './search/search.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'home', component:HomeComponent},
{path:'products',component:ProductsComponent},
{path:'login', component:LoginComponent},
{path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
