import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  _cartService : CartService ;
  
  constructor(_cartServiceRef : CartService) { this._cartService = _cartServiceRef; }

  myCart : any = [];


getCart(cartID: number)
{
this._cartService.getCart(cartID).subscribe( (data) => {this.myCart = data;
  console.log(this.myCart) 
 })
}

subOneQty(OrderId: any, Qty: any)
{
this._cartService.modifyQty(OrderId, Qty-1)
}

addOneQty(OrderId: any, Qty: any)
{
this._cartService.modifyQty(OrderId, Qty+1)
}

removeOrder(OrderId: any)
{
this._cartService.removeOrder(OrderId)
}

ngOnInit(): void { this.getCart(1); }
// replace '1' with global static variable of user's cart ID

}
