
//import { Component } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ProductserviceService } from '../../services/productservice/productservice.service';


interface Qts {
  value: string;
  viewValue: string;
}

interface Prod {
  productID: string;
  productName: string;
  productDetails: string;
  productPrice: string;
  productStock: string;

}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],

})
export class ProductsComponent implements OnInit {
  
  @Input('rating') rating: number = 3;
  @Output() ratingUpdated = new EventEmitter();

  totalStar: number = 5;
  ratingArray: number[] = [];

  qty: Qts[] = [
    {value: 'qty-1', viewValue: '1'},
    {value: 'qty-2', viewValue: '2'},
    {value: 'qty-3', viewValue: '3'},
    {value: 'qty-4', viewValue: '4'},
  ];

  public productName="T-Shirt"
  prodArray = [
    { productID:'1', productName:'T-Shirt',productDetails:'A comfy and stylish T-shirt!', productPrice:'8.25',productStock:'50'},
    { productID:'2', productName:'Hat',productDetails:'Be cool and stay cool in our signiture brand hats!', productPrice:'9.75',productStock:'25'},
    { productID:'3', productName:'Hoodie',productDetails:'Comfy, cool, and quite warm! Show Revature pride in style!', productPrice:'19.50',productStock:'100'},
    { productID:'4', productName:'Mug',productDetails:'A mug to hold your daily brain-fuel of choice.', productPrice:'15.00',productStock:'75'},
    { productID:'5', productName:'Coasters',productDetails:'A set of 8 custom cork coasters.', productPrice:'14.25',productStock:'45'},
    { productID:'6', productName:'Thermos',productDetails:'An insulated thermos to keep the hot stuff hot and the cool stuff cool.', productPrice:'25.00',productStock:'60'},
    { productID:'7', productName:'Briefcase',productDetails:'A handy and convenient case to carry all your important documents to and from the workplace!', productPrice:'50.00',productStock:'30'},
    { productID:'8', productName:'Suitcase',productDetails:'For those who travel hither and yon, never forget your trusty suitcase.', productPrice:'115.00',productStock:'120'},
    { productID:'9', productName:'Shopping Bag',productDetails:'Durable, reusable, and eco-friendly! For all your shopping needs', productPrice:'5.00',productStock:'400'},
    { productID:'10', productName:'Calendars',productDetails:'Keep track of your important events all throughout the year', productPrice:'10.00',productStock:'200'},
    { productID:'11', productName:'Pens',productDetails:'A 4-pack of medium point black ink pens for all your note-taking and contract needs.', productPrice:'7.00',productStock:'1000'},
    { productID:'12', productName:'Stickers',productDetails:'An assortment of stickers to customize or seal whatever you need!', productPrice:'9.75',productStock:'500'},
    { productID:'13', productName:'Magnets',productDetails:'A pack of magnet to keep hold of all your documents on a whiteboard or a refrigerator.', productPrice:'14.75',productStock:'50'}
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  service: ProductserviceService;
  constructor(private breakpointObserver: BreakpointObserver,private serviceRef:ProductserviceService){
    this.service = serviceRef;
  }
  // constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < this.totalStar; index++) {
      this.ratingArray.push(index);
    }
  }
  calculateRating(rating: number) {
    this.ratingUpdated.emit(rating);
  }

  iconStatus(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  ratingx: number = 3;
  starCount: number = 5;

  onRatingChanged(ratingx: number) {
    this.ratingx = ratingx;
  }



}

