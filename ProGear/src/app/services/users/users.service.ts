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
    this.getUser();
    this.auth.user$.subscribe((result) => {console.log(result)});
  }

  register(_registerId?:string,_userEmail?:string,_firstName?:string,_lastName?:string){
    //var name = this.auth.user$.name; 
    var data = {
      "UserId":_registerId,
      "Email":_userEmail,
      "FirstName":_firstName,
      "LastName":_lastName,
    }
    console.log(data);
    return this._http.post(`https://localhost:44310/api/User/Register`,data, {headers:new HttpHeaders({"Content-Type":"application/json"})});
  }


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

  alreadyRegistered(_registerId?: string) {
    return this._http.get("https://localhost:44310/api/User/CheckForUser?userid=" + _registerId, {responseType: 'text'});
  }
  
  getUser()
  {
    console.log("Test");
    this.auth.user$.subscribe((data) => {
      //console.log(data)
      console.log("Test");
      this._userEmail = data?.email;
      this._registerId = data?.sub;
      this._firstName = data?.given_name;
      this._lastName = data?.family_name;
      console.log(this._registerId);
      console.log(this._firstName);
      console.log(this._lastName);
      // this.getUserId(this._userEmail).subscribe((data) => {
      //   //console.log(data);
      //   this.userId = parseInt(data);
      // });

    });
  }
  
}
