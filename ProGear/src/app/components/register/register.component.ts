import { Component, Inject, OnInit } from '@angular/core';
import { Validators,FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@auth0/auth0-angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
 constructor(public auth: AuthService) { 
   
 }

  ngOnInit(): void {
    
  }
RegisterWithRedirect(): void {
this.auth.loginWithRedirect();
}
}

