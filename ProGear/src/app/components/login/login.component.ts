import { Component, OnInit } from '@angular/core';
import {AuthService, User} from '@auth0/auth0-angular';
import { HttpClient} from '@angular/common/http';
import { UsersService } from 'src/app/services/users/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:any;
  constructor(public auth: AuthService, public _users: UsersService) 
  {
    this.users = _users;
  }

  ngOnInit(): void {
    // first, check if user is logged in or not
    // logged out would mean the user data is null
    this.auth.user$.subscribe((data) => {
      if (data != null)
      {
        // call alreadyRegistered to check if the user exists in the database already
        this.users.alreadyRegistered(data.sub).subscribe((data2:any) => { 
        this.users.ConfirmationMessage = data2;
              
        // if user is already registered, do nothing
        if(this.users.ConfirmationMessage == "User Registered") {   
        }
        // else, register through the api
        else {
          this.users.register(data.sub, data.email, data.given_name, data.family_name).subscribe((data3:any) => {});
        }})
    }
    })
  }

  // built-in auth function to login
  loginUserWithRedirect()
  {
    this.auth.loginWithRedirect();
  }
}
