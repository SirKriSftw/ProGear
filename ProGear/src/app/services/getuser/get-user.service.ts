import { Component, Inject, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private _http: HttpClient) { }

  private _userEmail : any;
  userId! : number;     // won't have any data until the http request finishes. need to figure that out

  getUserId(email:any)
  {
    //return this._http.get(url, {responseType: "text"});
    return this._http.get(`https://localhost:5001/api/User/GetId?email=${email}`, {responseType:'text'});
  }

  getUser()
  {
    // since user is an observable, have to subscribe to it to get the data
    this.auth.user$.subscribe((data) => {
      console.log(data);
      this._userEmail = data?.email
    }, (err) => {
      console.log(err)
    });
  }
}
