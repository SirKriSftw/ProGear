import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/carts/cart.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  _cartService : CartService ;
  _auth : AuthService;
  
  constructor(_cartServiceRef : CartService, _authRef : AuthService) { 
    this._cartService = _cartServiceRef; 
    this._auth = _authRef;
  }

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

ngOnInit(): void { (this._auth.user$.subscribe((data: any) => 
  {this.getCart(data.sub);
    console.log(data.sub);
    console.log(data);
 })) }

}
