import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {
  _productService: ProductsService;
  _router:Router;
  allP: any;
  allApparel: any=[];
  allHouseware: any=[];
  allTravel: any=[];
  allMisc: any=[];
  allSearch:any=[];

  allPBool: boolean = false;
  allApparelBool: boolean = false;
  allHousewareBool: boolean = false;
  allTravelBool: boolean = false;
  allMiscBool: boolean = false;
  allSearchBool: boolean = false;



  constructor(private _productServiceRef: ProductsService, _routerRef:Router) {
    this._productService = _productServiceRef;
    this._router=_routerRef;
  }
  AllProducts() {
    this._productService.getAllProducts().subscribe(
      (data) => {
        this.allP = data;
        this._productService.allProducts = this.allP;

      }

    )
  }
  ProductsApparel() {

    this._productService.getProductsByID(1).subscribe(
      (data) => {
        this.allApparel = data;
        this._productService.productsApparel = this.allApparel;
      },(err)=>{
        console.log("Smth went wrong ");
      }

    )
  }
  ProductsHouseware() {
    this._productService.getProductsByID(2).subscribe(
      (data) => {
        this.allHouseware = data;
        this._productService.productsHouseweres = this.allHouseware;

      }

    )

  }
  ProductsTravel() {
    this._productService.getProductsByID(3).subscribe(
      (data) => {
        this.allTravel = data;
        this._productService.productsTravel = this.allTravel;
      }

    )

  }

  ProductsMisc() {
    this._productService.getProductsByID(4).subscribe(
      (data) => {
        this.allMisc = data;
        this._productService.productsMisc = this.allMisc;
      }

    )

  }
  showSearch(){
    
    this.allSearch=this._productService.searchedProducts;
  }
  checkURL(){
   if(this._router.url=="/products_all"){
    this.allPBool = true;
    this.allApparelBool=false;
    this.allHousewareBool= false;
    this.allTravelBool = false;
    this.allMiscBool= false;

   }else if(this._router.url=="/products_apparel"){
    this.allPBool = false;
    this.allApparelBool=true;
    this.allHousewareBool= false;
    this.allTravelBool = false;
    this.allMiscBool= false;

   }else if(this._router.url=="/products_housewares"){
    this.allPBool = false;
    this.allApparelBool=false;
    this.allHousewareBool= true;
    this.allTravelBool = false;
    this.allMiscBool= false;

   }else if(this._router.url=="/products_travel"){
    this.allPBool = false;
    this.allApparelBool=false;
    this.allHousewareBool= false;
    this.allTravelBool = true;
    this.allMiscBool= false;

   }else if(this._router.url=="/products_misc"){
    this.allPBool = false;
    this.allApparelBool=false;
    this.allHousewareBool= false;
    this.allTravelBool = false;
    this.allMiscBool= true;
   }else if(this._router.url=="/products_search"||this._router.url=="/products_Search"){
    this.allPBool = false;
    this.allApparelBool=false;
    this.allHousewareBool= false;
    this.allTravelBool = false;
    this.allMiscBool= false;
    this.allSearchBool= true;
   }
   
  }

  ngOnInit(): void {
    this.AllProducts();
    this.ProductsApparel();
    this.ProductsHouseware();
    this.ProductsTravel();
    this.ProductsMisc();
    this.showSearch();
    this.checkURL();
  }

}
