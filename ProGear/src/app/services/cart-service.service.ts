import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _http: HttpClient;
  constructor(private _httpRef: HttpClient) { this._http = _httpRef; }

   
  getUserIdByEmail (userEmail: any) {
    return this._http.get("https://localhost:44310/Cart/get-user-ID/" + userEmail);
   }

   getCart (cartID: number) {
    return this._http.get("https://localhost:44310/Cart/GetCartById/" + cartID);
   }

   modifyQty (OrderId: number, Qty: number) {
    return this._http.put("https://localhost:44310/Cart/set-order-qty/" + OrderId + "/" + Qty, null);
   }

   removeOrder (OrderId: number) {
    return this._http.delete("https://localhost:44310/Cart/remove-order/" + OrderId );
   }

   emptyCart () {
    return this._http.delete("https://localhost:44310/Cart/emptycart");
   }

}
