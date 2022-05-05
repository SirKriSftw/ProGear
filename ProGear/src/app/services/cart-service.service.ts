import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _http : HttpClient; 
  constructor(private _httpRef : HttpClient) { this._http = _httpRef; }

   
   getCart (cartID: number) {
    return this._http.get("https://localhost:5001/Cart/" + cartID);
   }

   modifyQty (OrderId: number, Qty: number) {
    return this._http.get("https://localhost:5001/Cart/set-order-qty/" + OrderId + "/" + Qty);
   }

   removeOrder (OrderId: number) {
    return this._http.get("https://localhost:5001/Cart/remove-order/" + OrderId );
   }

   emptyCart () {
    return this._http.get("https://localhost:5001/api/Kaelan/emptycart");
   }

}