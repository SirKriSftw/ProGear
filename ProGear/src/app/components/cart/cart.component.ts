import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart-service/cart-service.service';
import { Router } from '@angular/router';

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

modifyQty(OrderId: number, Qty: number)
{
this._cartService.modifyQty(OrderId, Qty).subscribe( (data) => {data = data;
  console.log(data) 
 });
}

removeOrder(OrderId: number)
{
this._cartService.removeOrder(OrderId).subscribe( (data) => {data = data;
  console.log(data) 
 });
}

emptyCart()
{
this._cartService.emptyCart(this.myCart[0].cartId).subscribe( (data) => {data = data;
  console.log(data) 
 });
}

ngOnInit(): void { this.getCart(2); }
// ^^^ replace this '2' with userId, a static variable from login component

}