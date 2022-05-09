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
    this.auth.user$.subscribe((data) => {
      if (data != null)
      {
       
        this.users.alreadyRegistered(data.sub).subscribe((data2:any) => { 
          this.users.ConfirmationMessage = data2;
          
          console.log(this.users.ConfirmationMessage);
        
         if(this.users.ConfirmationMessage == "User Registered") {
              
         }
         else {
           console.log();
              this.users.register(data.sub, data.email, data.given_name, data.family_name).subscribe((data3:any) => 
              {});
         }})
        // sub is the user_id
    
        
      }
    })

  
  }

  loginUserWithRedirect()
  {
    this.auth.loginWithRedirect();
    
  
  }
 

}
