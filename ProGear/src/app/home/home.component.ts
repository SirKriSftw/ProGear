import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _productService: ProductsService;
  allP: any;
  allApparel: any=[];
  allHouseware: any=[];
  allTravel: any=[];
  allMisc: any=[];


  constructor(private _productServiceRef: ProductsService) {
    this._productService = _productServiceRef;
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

  ngOnInit(): void {
    this.AllProducts();
    this.ProductsApparel();
    this.ProductsHouseware();
    this.ProductsTravel();
    this.ProductsMisc();
  }

}
