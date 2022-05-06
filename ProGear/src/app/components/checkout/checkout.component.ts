import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  _user:UserserviceService;
  loggedInUser:any;
  constructor(_userRef:UserserviceService) 
  {
    this._user = _userRef;
  }

  ngOnInit(): void {
    this._user.getLoggedInEmail().subscribe((data:any)=>{
      this._user.getUserId(data.email).subscribe((data:any) => {
        this.loggedInUser = data;
        console.log(this.loggedInUser);
      })
    })
    
  }

}
