import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  router: Router;
  hide: boolean = true;
  checkoutForm: FormGroup;
  confirmation: string = "";

  constructor(private fb: FormBuilder, routerRef: Router) {
    this.router = routerRef;
    this.checkoutForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      cardNum: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      expirDate: ['', [Validators.required]],
      cardZip: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      billAddress: ['', [Validators.required]],
      billCity: ['', [Validators.required]],
      billZip: ['', [Validators.required]]

    });
    this.checkoutForm.valueChanges.subscribe();
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
  }

}
