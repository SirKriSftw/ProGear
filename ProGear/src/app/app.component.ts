import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'ProGear';
constructor(public auth: AuthService) {

  }
}

export class ContactClass{
 
   person: {
    firstname: string;
    lastname: string;
    email: string;
    age: number
  } 

  

  constructor(input: ContactClass["person"]) {    
    this.person = input;

}

}
