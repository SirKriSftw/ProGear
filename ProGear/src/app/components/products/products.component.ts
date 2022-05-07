import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from '../../services/products.service';

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
  
}
