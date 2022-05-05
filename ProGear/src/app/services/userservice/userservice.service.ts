import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
_http:HttpClient
  constructor(_httpref:HttpClient) { 
    this._http=_httpref;
  }
  register(user:any){
    return this._http.post("https://localhost:44310/api/User/createUser", user,{headers:new HttpHeaders({"Content-Type":"application/json"})});
  }
<<<<<<< HEAD
}

=======

  getLogin(email : string, password : string)
  {
    var url = `https://localhost:5001/api/User/Login?email=${email}&password=${password}`;

    return this._http.get(url, {responseType: "text"});
  }
}
>>>>>>> 89410c85d006ac5773fe7a25f9cb16f84dca7fbd
