import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  // variables/object setup
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let prodServiceSpyObj : jasmine.SpyObj<ProductsService>

  beforeEach(async () => {
    prodServiceSpyObj = jasmine.createSpyObj('ProductsService',
    ['getAllProducts', 'getProductsByID']);
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [ HttpClient, HttpHandler,
        // make sure to use fake service instead for unit testing
        { provide: ProductsService, useValue: prodServiceSpyObj }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    // Setting default return value for fake services methods
    // Since have have method calls in ngOnInit
    prodServiceSpyObj.getAllProducts.and.returnValue(of(""));
    prodServiceSpyObj.getProductsByID.and.returnValue(of(""));

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    //ngOnInit will be called by fixture.detectChange here
    fixture.detectChanges();
  });

  // --------------------------
  // Component Creation Testing
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ngOnInit() method testing
  it('ngOnInit() - call', () => {
    // ARRANGE
    const spyAllProducts = spyOn(component, 'AllProducts');
    const spyProductsApparel = spyOn(component, 'ProductsApparel');
    const spyProductsHouseware = spyOn(component, 'ProductsHouseware');
    const spyProductsTravel = spyOn(component, 'ProductsTravel');
    const spyProductsMisc = spyOn(component, 'ProductsMisc');

    // ACT
    component.ngOnInit();

    // ASSERT
    expect(spyAllProducts).toHaveBeenCalled();
    expect(spyProductsApparel).toHaveBeenCalled();
    expect(spyProductsHouseware).toHaveBeenCalled();
    expect(spyProductsTravel).toHaveBeenCalled();
    expect(spyProductsMisc).toHaveBeenCalled();
  });

  // AllProducts() method testing
  it('AllProducts() - call success', () => {
    // ARRANGE
    var testData = {
      products : "Testing"
    }
    prodServiceSpyObj.getAllProducts.and.returnValue(of("Testing"));

    // ACT
    component.AllProducts();

    // ASSERT
    prodServiceSpyObj.getAllProducts().subscribe((result) => {
      expect(result).toEqual(testData.products);
      expect(component.allP).toEqual(result);
      expect(component._productService.allProducts).toEqual(component.allP);
    });
  });

  // ProductsApparel method testing
  it('ProductsApparel() - call success', () => {
    // ARRANGE
    var testData = {
      catID: 1,
      products : "Testing"
    }
    prodServiceSpyObj.getProductsByID.and.returnValue(of("Testing"));

    // ACT
    component.ProductsApparel();

    // ASSERT
    prodServiceSpyObj.getProductsByID(testData.catID).subscribe(
      (result) => {
        expect(result).toEqual(testData.products);
        expect(component.allApparel).toEqual(result);
        expect(prodServiceSpyObj.productsApparel).toEqual(component.allApparel);
      });
  });

  it('ProductsApparel() - call failed', () => {
    // ARRANGE
    var testData = {
      catID: 1,
      data : new Error('err')
    }
    prodServiceSpyObj.getProductsByID.and.returnValue(throwError(() => new Error('err')));
    
    // ACT
    component.ProductsApparel();
    
    // ASSERT
    prodServiceSpyObj.getProductsByID(testData.catID).subscribe(
      (result) => {
        expect(result).toEqual(testData.data);
      });
  });

  // ProductsHouseware() method testing
  it('ProductsHouseware() - call success', () => {
    // ARRANGE
    var testData = {
      catID: 1,
      products : "Testing"
    }
    prodServiceSpyObj.getProductsByID.and.returnValue(of("Testing"));

    // ACT
    component.ProductsHouseware();

    // ASSERT
    prodServiceSpyObj.getProductsByID(testData.catID).subscribe(
      (result) => {
        expect(result).toEqual(testData.products);
        expect(component.allHouseware).toEqual(result);
        expect(prodServiceSpyObj.productsHouseweres).toEqual(component.allHouseware);
      });
  });

  // ProductsTravel() method testing
  it('ProductsTravel() - call success', () => {
    // ARRANGE
    var testData = {
      catID: 1,
      products : "Testing"
    }
    prodServiceSpyObj.getProductsByID.and.returnValue(of("Testing"));

    // ACT
    component.ProductsTravel();

    // ASSERT
    prodServiceSpyObj.getProductsByID(testData.catID).subscribe(
      (result) => {
        expect(result).toEqual(testData.products);
        expect(component.allTravel).toEqual(result);
        expect(prodServiceSpyObj.productsTravel).toEqual(component.allTravel);
      });
  });

  // ProductsMisc() method testing
  it('ProductsMisc() - call success', () => {
    // ARRANGE
    var testData = {
      catID: 1,
      products : "Testing"
    }
    prodServiceSpyObj.getProductsByID.and.returnValue(of("Testing"));

    // ACT
    component.ProductsMisc();

    // ASSERT
    prodServiceSpyObj.getProductsByID(testData.catID).subscribe(
      (result) => {
        expect(result).toEqual(testData.products);
        expect(component.allMisc).toEqual(result);
        expect(prodServiceSpyObj.productsMisc).toEqual(component.allMisc);
      });
  });

});
