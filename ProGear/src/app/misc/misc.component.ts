import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit {
  _productService: ProductsService;
  productsMiscComponent:any;


  constructor(private _productServiceRef: ProductsService) {
    this._productService = _productServiceRef;
   }
  ProductsMisc() {
    this._productService.getProductsByID(4).subscribe(
      (data) => {
        this.productsMiscComponent = data;
        this._productService.productsMisc = this.productsMiscComponent;
      }

    )

  }

  ngOnInit(): void {
    this.ProductsMisc();
  }

}
