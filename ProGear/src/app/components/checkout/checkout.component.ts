import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart-service.service';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checked = true;

  _cartService: CartService;

  router: Router;
  checkoutForm: FormGroup;
  confirmation: string = "";

  constructor(private fb: FormBuilder, routerRef: Router, _cartServiceRef: CartService) {
    this._cartService = _cartServiceRef;
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

  getCart(cartID: number) {
    this._cartService.getCart(cartID).subscribe((data) => {
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

  ngOnInit(): void {
    this.getCart(2);
  }

}
