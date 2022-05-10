import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  _http:HttpClient;
  allProducts:any;
  allProductsCat:any;
  productsApparel:any;
  productsHouseweres:any;
  productsTravel:any;
  productsMisc:any;
  searchedProducts:any;
  constructor(private _httpRef:HttpClient) { 
    this._http= _httpRef;
  }
  getAllProducts(){
    return this._http.get('https://localhost:44310/api/Products/List_of_Products');
  }
  getProductsByID(catID:any){
    return this._http.get('https://localhost:44310/api/Products/getCat/'+ catID);
  }
  getProductsSearch(type:any){
    return this._http.get('https://localhost:44310/api/Products/search/'+ type);
  }
  getAllProductsCat(){
    return this._http.get('https://localhost:44310/api/Products/List_of_Categories');
  }

  addToCart(productId: number, cartId:any, qty:number) {
    return this._http.post('https://localhost:44310/Cart/AddAnOrder?productId=' + productId + '&cartId=' + cartId + '&qty=' + qty, null, { responseType: 'text' });
  }
}
