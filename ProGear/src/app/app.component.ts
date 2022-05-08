import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProGear';
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
