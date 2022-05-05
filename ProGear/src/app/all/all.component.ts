import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  _productService:ProductsService;
  productsAllComponent:any;

  constructor(private _productServiceRef: ProductsService) {
    this._productService= _productServiceRef;
   }
   AllProducts() {
    this._productService.getAllProducts().subscribe(
      (data) => {
        this.productsAllComponent = data;
        this._productService.allProducts = this.productsAllComponent;

      }

    )
  }
  ngOnInit(): void {
    this.AllProducts();
  }

}
