import { Injectable } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService implements OnInit{

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private _http: HttpClient) { 
    this._http=_http;
  }

  ngOnInit(): void {  }

  register(user:any){
    return this._http.post("https://localhost:44310/api/User/createUser", user,{headers:new HttpHeaders({"Content-Type":"application/json"})});
  }

  getLogin(email : string, password : string)
  {
    var url = `https://localhost:44310/api/User/Login?email=${email}&password=${password}`;

    return this._http.get(url, {responseType: "text"});
  }

  getLoggedInEmail()
  {
    return this.auth.user$;
  }
  getUserId(email:any)
  {
    return this._http.get(`https://localhost:44310/api/User/GetId/` + email, {responseType:'text'});
  }
}