import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
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


getCart(userID: any)
{
this._cartService.getCart(userID).subscribe( (data) => {this.myCart = data;
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

ngOnInit(): void { this.getCart("1"); }
// ^^^ replace this "1" with userId, a static variable from login component

}
