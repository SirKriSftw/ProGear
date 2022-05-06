import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  _productService: ProductsService;
  _router:Router;
  _categoryService: CategoriesService;


  allP: any;
  selected:any = 0;
  categoriesList:any=[];
  allSearch:any=[];

  allPBool: boolean = false;

  allSearchBool: boolean = false;



  constructor(private _productServiceRef: ProductsService, _routerRef:Router, _categoryServiceRef: CategoriesService) {
    this._productService = _productServiceRef;
    this._router=_routerRef;
    this._categoryService = _categoryServiceRef;
  }

  ngOnInit(): void {
    this.AllProducts();
    this.getCategories();
  }

  getCategories() {
    this._categoryService.getAllCategories().subscribe((data:any) => {
      console.log(data);
      this.categoriesList = data;
      console.log(this.categoriesList);
      return data;
    }, (err) => {
      console.log(err);
    });
   }

  AllProducts() {
    this._productService.getAllProducts().subscribe(
      (data) => {
        this.allP = data;
        this._productService.allProducts = this.allP;
      }
    )
  }
 
  searchProducts(search:any){
    if (search == "")
    {
      this.AllProducts();
    }
    this._productService.getProductsSearch(search).subscribe((result) => {
      this.allP = result;
    });
  }
  
}
