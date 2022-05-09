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

  constructor(_serviceRef:ProductsService,_routerRef:Router) {
    this._service=_serviceRef;
    this._router=_routerRef;
   }
  findProducts(userInput:any){
  this._service.getProductsSearch(userInput).subscribe(
    (data)=>{
    this.searchProducts=data;
    this._service.searchedProducts=this.searchProducts;
    if(this._router.url=="/search"){
      this._router.navigateByUrl('Search');
    }else{this._router.navigateByUrl('search');}

    },
    (err)=>{
     window.alert("Sorry, there are no products with this name")
    }
    )
  
  }
  ngOnInit(): void {
  }

}
