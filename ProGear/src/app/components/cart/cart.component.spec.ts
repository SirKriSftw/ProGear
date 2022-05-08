import { HttpClient, HttpHandler } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  async,
  flush,
  fakeAsync,
  getTestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let cartComponent: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let el: HTMLElement;
  let cartService: CartService;
  let cartServiceSpy: any;
  let de: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CartComponent],
      providers: [
        HttpClient,
        { provide: CartService, useValue: cartServiceSpy },
        HttpHandler,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CartComponent);

    cartComponent = fixture.componentInstance;

 
  }));

  //-------------------------------------------------------
  //getCart method test scripts

  it('Cart - Load on init', async(() => {
    expect(cartComponent.myCart).not.toBeNull();
  }));

  it('Cart - Correct Cart ID', () => {
    expect(cartComponent.myCart[0]).not.toBeNull();
  });

  it('Cart - Modify Buttons work', () => {
    let buttonElement = fixture.debugElement.query(By.css('remove'));
    let qty = fixture.debugElement.componentInstance;

    fixture.whenStable().then(() => {
      expect(buttonElement.listeners).toBeDefined();
    });
  });

  xit('Cart - User Table Loads', () => {
    expect(cartComponent.ngOnInit).toBeDefined();
  });

    xit('Cart - image appears',fakeAsync( ()=> {

   }));



   xit('Cart - Empty Cart Button works',fakeAsync( ()=> {

  }));

  
  xit('Cart - Route to Checkout',fakeAsync( ()=> {

  }));

afterEach(()=> {
   

})
   
});
