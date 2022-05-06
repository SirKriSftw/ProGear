import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  user : UserserviceService;
  loginFailed : boolean = false;
  loggedIn : boolean = false;
  token : string = "";
  loggedInUser:any;

  constructor(private formBuilder : FormBuilder, u : UserserviceService, private router : Router) 
  {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.user = u;
    this.loginFailed = false;
  }

  ngOnInit(): void {
    this.user.getLoggedInEmail().subscribe((data:any)=>{
      this.user.getUserId(data.email).subscribe((data:any) => {
        this.loggedInUser = data;
      })
    })
    console.log(this.loggedInUser);
  }

  get f() { return this.loginForm.controls; }  

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

        this.token = "loggedin";
        this.loggedIn = true;
        localStorage.setItem('isLoggedIn', "true");  
        localStorage.setItem('token', this.token);  
        console.log(localStorage.getItem('token'));
        console.log(localStorage);

        this.loginFailed = false;
        //this.router.navigate([''])
      }
    }, (err) => {
      console.log("oh no");
      this.loginFailed = true;
    });
  }

}
