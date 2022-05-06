import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginguardService {

  constructor(private _router : Router) { }

  user! : LoginComponent;

  canLoad(route : Route): boolean
  {
    if (this.user.loggedIn)
    {
      this._router.navigate(['']);
      return true;
    }
    else
    {
      this._router.navigate(['']);
      return false;
    }
  }
}
