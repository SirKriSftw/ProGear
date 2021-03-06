import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
{path:'', redirectTo: 'home', pathMatch:'full'},
{path:'home', component:HomeComponent},
{path:'products',component:ProductsComponent},
{path:'login', redirectTo: 'home', pathMatch:'full'},
{path:'cart', component:CartComponent},
{path:'checkout', component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
