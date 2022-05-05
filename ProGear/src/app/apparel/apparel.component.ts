import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-apparel',
  templateUrl: './apparel.component.html',
  styleUrls: ['./apparel.component.css']
})
export class ApparelComponent implements OnInit {
  _productService:ProductsService;
  productsApparelComponent:any;


  constructor(private _productServiceRef: ProductsService) {
    this._productService= _productServiceRef;
   }
   ProductsApparel() {
    this._productService.getProductsByID(1).subscribe(
      (data) => {
        this.productsApparelComponent = data;
        this._productService.productsApparel = this.productsApparelComponent;
      }

    )
  }

  ngOnInit(): void {
    this.ProductsApparel();
    
  }

}
