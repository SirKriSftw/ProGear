import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  _user:UserserviceService;
  router:Router;
  hide:boolean = true;
  error="";
  registerForm: FormGroup = this.fb.group({
    firstName: ['',[
      Validators.required,
      Validators.minLength(2)
    ]],
    lastName: ['',[
      Validators.required,
      Validators.minLength(2)
    ]],
    email: ['',[
      Validators.required,
      Validators.email
    ]],
    password: ['',[
      Validators.required,
      Validators.minLength(8),
      Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$")
    ]]
  });



  ngOnInit(): void {
    
  }

  constructor(private fb: FormBuilder, routerRef: Router,_userRef:UserserviceService ) {
    this.router = routerRef;
    this.registerForm.valueChanges.subscribe();
    this._user = _userRef;
  }
  
  register() {
    var data = {
      "firstName": this.registerForm.get("firstName")?.value,
      "lastName": this.registerForm.get("lastName")?.value,
      "email": this.registerForm.get("email")?.value,
      "password": this.registerForm.get("password")?.value,
    }
    this._user.register(data).subscribe((result) => {}, 
    (er) =>
     {if (er.status==400)
       {this.error = "Email Already In Use"}});
    
  }
}
  




