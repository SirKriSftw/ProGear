import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  _service:ProductsService;
  allSearch:any;

  constructor(_serviceRef:ProductsService) { 
    this._service=_serviceRef;
  }
  showSearch(){
    
    this.allSearch=this._service.searchedProducts;

  }

  ngOnInit(): void {
  this.showSearch();
  }

}
