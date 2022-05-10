import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  _service:ProductsService;
  _router:Router;
  _categories:CategoriesService;

  searchProducts:any;
  allCat:any;
  categoriesList:any;
  selected:any;
  isAtProducts = false;

  constructor(_serviceRef:ProductsService, _routerRef:Router, _categoriesRef:CategoriesService) {
    this._service=_serviceRef;
    this._router=_routerRef;
    this._categories = _categoriesRef;
   }

   ngOnInit(): void {
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
  

}
