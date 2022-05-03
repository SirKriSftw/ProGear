import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  user : UserserviceService;

  constructor(private formBuilder : FormBuilder, u : UserserviceService) 
  {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.user = u;
  }

  ngOnInit(): void {
  }

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
      }
    }, (err) => {
      console.log("oh no");
    });
  }

}
