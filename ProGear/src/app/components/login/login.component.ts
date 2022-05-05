import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {AuthService} from '@auth0/auth0-angular';
=======
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
import { Router } from '@angular/router';

>>>>>>> 89410c85d006ac5773fe7a25f9cb16f84dca7fbd
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  constructor(public auth: AuthService) 
  {
   
    }
=======
  loginForm : FormGroup;
  user : UserserviceService;
  loginFailed : boolean = false;

  constructor(private formBuilder : FormBuilder, u : UserserviceService, private router : Router) 
  {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.user = u;
    this.loginFailed = false;
  }
>>>>>>> 89410c85d006ac5773fe7a25f9cb16f84dca7fbd

  ngOnInit(): void {
  }

<<<<<<< HEAD
  loginUserWithRedirect()
  {
    this.auth.loginWithRedirect();
=======
  login(email : string, password : string)
  {
    // console.log(`email: ${this.loginForm.value.email}`);
    // console.log(`password: ${this.loginForm.value.password}`);

    this.user.getLogin(email, password).subscribe((data) =>{
      if (data == "")
      {
        console.log("user not found");
      }
      else
      {
        console.log(data);
        this.loginFailed = false;
        this.router.navigate([''])
      }
    }, (err) => {
      console.log("oh no");
      this.loginFailed = true;
    });
>>>>>>> 89410c85d006ac5773fe7a25f9cb16f84dca7fbd
  }

}
