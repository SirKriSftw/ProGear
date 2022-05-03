import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private formBuilder : FormBuilder) 
  {
    this.loginForm = formBuilder.group({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  login()
  {
    console.log(`email: ${this.loginForm.value.email}`);
    console.log(`password: ${this.loginForm.value.password}`);
  }

}
