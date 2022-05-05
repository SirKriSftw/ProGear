import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-housewares',
  templateUrl: './housewares.component.html',
  styleUrls: ['./housewares.component.css']
})
export class HousewaresComponent implements OnInit {
  _productService:ProductsService;
  productsHousewareComponent:any;

  constructor(private _productServiceRef: ProductsService) { 
    this._productService= _productServiceRef;
  }
  ProductsHouseware() {
    this._productService.getProductsByID(2).subscribe(
      (data) => {
        this.productsHousewareComponent = data;
        this._productService.productsHouseweres = this.productsHousewareComponent;

      }

    )

  }

  ngOnInit(): void {
    this.ProductsHouseware();
  }

}
