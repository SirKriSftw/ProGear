import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginguardService } from './services/loginguard/loginguard.service';

const routes: Routes = [
  {path : '' , redirectTo : 'home', pathMatch : 'full'},
  {path: 'login', component:LoginComponent, canLoad:[LoginguardService]},
  {path: 'register', component:RegisterComponent, canLoad:[LoginguardService]},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
