import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  _http:HttpClient;

  constructor(_httpRef:HttpClient) 
  { 
    this._http = _httpRef;
  }

  getAllCategories()
  {
    return this._http.get('https://localhost:44310/api/Categories/getAll')
  }
}
