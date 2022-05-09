import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AllComponent } from './all/all.component';
//import { ApparelComponent } from './apparel/apparel.component';
import { CartComponent } from './cart/cart.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { HousewaresComponent } from './housewares/housewares.component';
import { LogInComponent } from './log-in/log-in.component';
import { MiscComponent } from './misc/misc.component';
import { SearchComponent } from './search/search.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  {path : '' , redirectTo : 'home', pathMatch : 'full'},
  {path: 'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'all', component:AllComponent},
 // {path:'apparel', component:ApparelComponent},
  {path:'housewares', component:HousewaresComponent},
  {path:'travel', component:TravelComponent},
  {path:'misc', component:MiscComponent},
  {path:'search', component:SearchComponent},
  {path:'Search', component:SearchComponent},
  {path:'logIn', component:LogInComponent},
  {path:'createAccount', component:CreateAccountComponent},
  {path:'cart', component:CartComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
