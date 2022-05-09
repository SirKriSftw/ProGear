import { Injectable } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit{

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private _http: HttpClient) { 
    this._http=_http;
  }

  public _userEmail : any;
  public userId! : number;
  public _registerId?:string = "";
  public _firstName?:string = "";
  public _lastName?:string = "";
  public ConfirmationMessage?:string = "";

  ngOnInit(): void {
  }

  alreadyRegistered(_registerId?: string) {
    return this._http.get("https://localhost:5001/api/User/CheckForUser?userid=" + _registerId, {responseType: 'text'});
  }

  register(_registerId?:string,_userEmail?:string,_firstName?:string,_lastName?:string){
    //var name = this.auth.user$.name; 
    var data = {
      "UserId":_registerId,
      "Email":_userEmail,
      "FirstName":_firstName,
      "LastName":_lastName,
    }
    return this._http.post(`https://localhost:5001/api/User/Register`, data, {headers:new HttpHeaders({"Content-Type":"application/json"})});
  }
}
