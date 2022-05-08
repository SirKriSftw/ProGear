import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsComponent } from './products.component';


describe('ProductsComponent', () => {
  // variables/objects setup
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let prodServiceSpyObj : jasmine.SpyObj<ProductsService>;
  let catServiceSpyObj : jasmine.SpyObj<CategoriesService>

  beforeEach(async () => {
    // Create fake service object
    prodServiceSpyObj = jasmine.createSpyObj('ProductsService', 
    ['getAllProducts']);
    catServiceSpyObj = jasmine.createSpyObj('CategoriesService', 
    ['getAllCategories'])
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ProductsComponent ],
      providers:[ HttpClient, HttpHandler, 
        // make sure to use fake service instead for unit testing
        { provide: ProductsService, useValue: prodServiceSpyObj },
        { provide: CategoriesService, useValue: catServiceSpyObj }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    // Setting default return value for fake services' method
    // Since we have method calls in ngOnInit.
    prodServiceSpyObj.getAllProducts.and.returnValue(of(""));
    catServiceSpyObj.getAllCategories.and.returnValue(of(""));

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    //ngOnInit will be called by fixture.detectChange here
    fixture.detectChanges();
  });

  // --------------------------
  // Component Creation Testing
  it('should create', () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });

  // ngOnInit() method testing
  it('ngOnInit() - call', () => {
    // ARRANGE
    const spyAllProducts = spyOn(component, 'AllProducts');
    const spyGetCategories = spyOn(component, 'getCategories');
    
    // ACT
    component.ngOnInit();

    // ASSERT
    expect(spyAllProducts).toHaveBeenCalled();
    expect(spyGetCategories).toHaveBeenCalled();
    
  });

  // getCategories() method testing
  it('getCategories() - call success', () => {
    // ARRANGE
    var testData = {
      categories : "Testing"
    }
    catServiceSpyObj.getAllCategories.and.returnValue(of("Testing"));

    // ACT
    component.getCategories();

    // ASSERT
    catServiceSpyObj.getAllCategories().subscribe((result) => {
      expect(result).toEqual(testData.categories);
      expect(component.categoriesList).toEqual(result);
    });
  });
  
  it('getCategories() - call failed', () => {
    // ARRANGE
    var testData = {
      data : new Error('err')
    }
    let catResult : any;
    catServiceSpyObj.getAllCategories.and.returnValue(throwError(() => new Error('err')));
    
    // ACT
    component.getCategories();

    // ASSERT
    catServiceSpyObj.getAllCategories().subscribe(() => {},
      (result) => {
        catResult = result;
      });
      expect(catResult).toEqual(testData.data);
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
      expect(component.DisplayP).toEqual(result);
      expect(component._productService.allProducts).toEqual(component.DisplayP);
    });
  });

  // searchP() method testing
  it('searchP() - call success', () => {
    // ARRANGE
    var testData = {
      search : 'Testing'
    }

    // ACT
    component.searchP(testData.search);

    // ASSERT
    expect(component.searchTerm).toEqual(testData.search);
  });
});

