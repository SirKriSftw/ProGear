import { Component, OnInit } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) 
  {
   
    }

  ngOnInit(): void {
  }

  loginUserWithRedirect()
  {
    console.log("User should be below me.");
    this.auth.loginWithRedirect();
    console.log(this.auth.user$);
    
  }

}
