import { Component, Inject, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';

@Component({
  selector: 'app-authbutton',
  templateUrl: './authbutton.component.html',
  styleUrls: ['./authbutton.component.css']
})
export class AuthbuttonComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private _http: HttpClient, userservice: UserserviceService) {
    this.user = userservice;
  }

  private _userEmail : any;
  public user : UserserviceService;
  public userId : any;

  ngOnInit(): void {
    this.user.getUser();
    console.log("init log " + this.user.userId);
  }

  printUser()
  {
    // since user is an observable, have to subscribe to it to get the data
    // i assume we'd want to this once logged in, then se
    this.auth.user$.subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err)
    });
  }
  loggedIn()
  {
    this.auth.isAuthenticated$.subscribe((data) => {
      console.log("user is authenticated/logged in: " + data);
    });
  }

  getUserId(email:any)
  {
    //return this._http.get(url, {responseType: "text"});
    return this._http.get(`https://localhost:5001/api/User/GetId?email=${email}`, {responseType:'text'});
  }

  getUser()
  {
    this.auth.user$.subscribe((data) => {
      //console.log(data)
      this._userEmail = data?.email;
      console.log(this._userEmail)

      this.getUserId(this._userEmail).subscribe((data) => {
        console.log(data);
      });

    });
  }
}