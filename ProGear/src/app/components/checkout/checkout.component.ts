import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/carts/cart.service';
import { AuthService } from '@auth0/auth0-angular';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checked = true;

  _cartService: CartService;
  _auth: AuthService;

  router: Router;
  checkoutForm: FormGroup;
  confirmation: string = "";

  constructor(private fb: FormBuilder, routerRef: Router, _cartServiceRef: CartService, _authRef: AuthService) {
    this._cartService = _cartServiceRef;
    this._auth = _authRef;
    this.router = routerRef;
    this.checkoutForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      cardNum: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      expirDate: ['', [Validators.required]],
      cardZip: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      billAddress: ['', [Validators.required]],
      billCity: ['', [Validators.required]],
      billZip: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      shipAddress: ['', [Validators.required]],
      shipCity: ['', [Validators.required]],
      shipZip: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]]
      

    });
    this.checkoutForm.valueChanges.subscribe();
  }

  myCart: any = [];


  PayForCart() {
    this._cartService.PayForCart(this.myCart[0].cartId).subscribe();
    console.log(this.myCart);
  }

  getCart(userID: any) {
    this._cartService.getCart(userID).subscribe((data) => {
      this.myCart = data;
      console.log(this.myCart)
    })
  }

  get firstName() {
    return this.checkoutForm.get('firstName');
  }
  get lastName() {
    return this.checkoutForm.get('lastName');
  }
  get cardNum() {
    return this.checkoutForm.get('cardNum');
  }
  get expirDate() {
    return this.checkoutForm.get('expirDate');
  }
  get cardZip() {
    return this.checkoutForm.get('cardZip');
  }
  get billAddress() {
    return this.checkoutForm.get('billAddress');
  }
  get billCity() {
    return this.checkoutForm.get('billCity');
  }
  get billZip() {
    return this.checkoutForm.get('billZip');
  }

  get shipAddress() {
    return this.checkoutForm.get('billAddress');
  }
  get shipCity() {
    return this.checkoutForm.get('billCity');
  }
  get shipZip() {
    return this.checkoutForm.get('billZip');
  }

  ngOnInit(): void {
    (this._auth.user$.subscribe((data: any) => {
      this.getCart(data.sub);
      console.log(data.sub);
      console.log(data);
    }))
  }
}
