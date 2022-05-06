import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
_http:HttpClient
  constructor(_httpref:HttpClient, public auth: AuthService) { 
    this._http=_httpref;
  }
  register(user:any){
    //var name = this.auth.user$.name;
    return this._http.post("https://localhost:44310/api/User/createUser", user,{headers:new HttpHeaders({"Content-Type":"application/json"})});
  }
}

