import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  _productService:ProductsService;
  productsTravelComponent:any;

  constructor(private _productServiceRef: ProductsService) {
    this._productService= _productServiceRef;
   }
  ProductsTravel() {
    this._productService.getProductsByID(3).subscribe(
      (data) => {
        this.productsTravelComponent = data;
        this._productService.productsTravel = this.productsTravelComponent;
      }

    )

  }

  ngOnInit(): void {
    this.ProductsTravel();
  }

}
