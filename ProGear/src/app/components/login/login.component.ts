import { Component, OnInit } from '@angular/core';
import {AuthService, User} from '@auth0/auth0-angular';
import { HttpClient} from '@angular/common/http';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(public auth: AuthService, public users: UserserviceService) 
  {
   
    }

  ngOnInit(): void {
    this.auth.user$.subscribe((data) => {
      if (data != null)
      {
        this.users.alreadyRegistered(this.users._registerId).subscribe((data2) => { 
          this.users.ConfirmationMessage = data2;
          
          console.log(this.users.ConfirmationMessage);
        
         if(this.users.ConfirmationMessage == "User Registered") {
     
         }
         else {
           console.log("register");
              this.users.register(data.sub, data.email, data.given_name, data.family_name).subscribe((data3) => 
              {});
         }})
        // sub is the user_id
        console.log(data.sub);
        
      }
    })

  
  }

  loginUserWithRedirect()
  {
    this.auth.loginWithRedirect();
    
  
  }
 

}
