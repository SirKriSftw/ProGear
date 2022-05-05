import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-second-nav',
  templateUrl: './second-nav.component.html',
  styleUrls: ['./second-nav.component.css']
})
export class SecondNavComponent implements OnInit {
  _service:ProductsService;
  searchProducts:any;
  _router:Router;
  allCat:any;

  constructor(_serviceRef:ProductsService,_routerRef:Router) {
    this._service=_serviceRef;
    this._router=_routerRef;
   }
  findProducts(userInput:any){
  this._service.getProductsSearch(userInput).subscribe(
    (data)=>{
    this.searchProducts=data;
    this._service.searchedProducts=this.searchProducts;
    if(this._router.url=="/products_search"){
     this._router.navigateByUrl('products_Search');
    }else{this._router.navigateByUrl('products_search');}
    // this._router.navigateByUrl('search');
    },
    (err)=>{
     window.alert("Sorry, there are no products with this name")
    }
    )
  
  }
  AllProductsCat() {
    this._service.getAllProductsCat().subscribe(
      (data) => {
        this.allCat = data;
        this._service.allProductsCat = this.allCat;

      }

    )
  }
  ngOnInit(): void {
   this.AllProductsCat();
  }

}
