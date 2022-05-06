<<<<<<< HEAD
import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@auth0/auth0-angular';
=======
import { Injectable } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
>>>>>>> origin/Login-Login

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class UserserviceService {
_http:HttpClient
  constructor(_httpref:HttpClient, public auth: AuthService) { 
    this._http=_httpref;
=======
export class UserserviceService implements OnInit{

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private _http: HttpClient) { 
    this._http=_http;
>>>>>>> origin/Login-Login
  }

  private _userEmail : any;
  public userId! : number;

  ngOnInit(): void {
    this.getUser();
  }

  register(user:any){
    //var name = this.auth.user$.name;
    return this._http.post("https://localhost:44310/api/User/createUser", user,{headers:new HttpHeaders({"Content-Type":"application/json"})});
  }
}

<<<<<<< HEAD
=======
  getLogin(email : string, password : string)
  {
    var url = `https://localhost:5001/api/User/Login?email=${email}&password=${password}`;

    return this._http.get(url, {responseType: "text"});
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

      this.getUserId(this._userEmail).subscribe((data) => {
        //console.log(data);
        this.userId = parseInt(data);
      });

    });
  }
}
>>>>>>> origin/Login-Login
