import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from '../../services/products/products.service';
import { CartService } from '../../services/carts/cart.service';
import { AuthService } from '@auth0/auth0-angular';

interface Qts {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  _productService: ProductsService;
  _router:Router;
  _categoryService: CategoriesService;
  _authService: AuthService;
  _cartService: CartService;

  DisplayP: any;
  selected:any = 0;
  categoriesList:any=[];
  searchTerm:any = "";

  qty: Qts[] = [
    {value: 'qty-1', viewValue: '1'},
    {value: 'qty-2', viewValue: '2'},
    {value: 'qty-3', viewValue: '3'},
    {value: 'qty-4', viewValue: '4'},
  ];


  constructor(private _productServiceRef: ProductsService, _routerRef: Router, _categoryServiceRef: CategoriesService, _authServiceRef: AuthService, _cartServiceRef: CartService) {
    this._productService = _productServiceRef;
    this._router=_routerRef;
    this._categoryService = _categoryServiceRef;
    this._authService = _authServiceRef;
    this._cartService = _cartServiceRef;
  }

  ngOnInit(): void {
    this.AllProducts();
    this.getCategories();
  }

  getCategories() {
    this._categoryService.getAllCategories().subscribe((data:any) => {
      this.categoriesList = data;
      return data;
    }, (err) => {
      console.log(err);
    });
   }

  AllProducts() {
    this._productService.getAllProducts().subscribe(
      (data) => {
        this.DisplayP = data;
        this._productService.allProducts = this.DisplayP;
      }
    )
  }
 
  searchP(search:any){
    this.searchTerm = search; 
  }

  addToCart(productId: any, qty: any) {
    console.log(productId);
    console.log(qty);
    this._authService.user$.subscribe(data => {
      this._cartService.getCartId(data?.sub).subscribe(sub => {
        this._productService.addToCart(productId, sub, 1).subscribe( sub2 => console.log(sub));

      }, (err) => {
        console.log(err);

      });
    });
  
    //this._productService.addToCart(productId, data.sub, qty)
  }
  
}
