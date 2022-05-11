import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('ProductsService', () => {
  // variables/objects setup
  let httpController: HttpTestingController;
  let productService: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ProductsService ]
    });
    productService = TestBed.inject(ProductsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  // Service Creation Testing
  it('should be created', () => {
    expect(productService).toBeDefined();
  });
  
  // getAllProducts Method Testing
  it('getAllProducts() - call success', () => {
    // ARRANGE
    // Dummy Data
    const testData = true;
    
    // ACT & ASSERT
    // Mock getAllProducts() method call
    productService.getAllProducts().subscribe((data : any) => 
      expect(data).toEqual(testData));
    // Check expected URL
    const req = httpController.expectOne('https://localhost:44310/api/Products/List_of_Products');
    // Check expected HTTP Request method
    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  });

  it('getAllProducts() - call failed', () => {
    // ARRANGE
    // Dummy Data
    const emsg = 'status 500 error';

    // ACT & ASSERT
    // Mock getAllProducts() method call - forced fail
    productService.getAllProducts().subscribe(() => fail('Should have failed with 500 error'),
      (error:HttpErrorResponse) => {
        expect(error.status).toEqual(500, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );
    // Check expected URL
    const req = httpController.expectOne('https://localhost:44310/api/Products/List_of_Products');
    // Check expected HTTP Request method
    expect(req.request.method).toEqual('GET');
    
    req.flush(emsg, {status: 500, statusText: 'Server Error'});
  });

  // -----------------------------------
  // getProductsByID method test scripts
  it('getProductsByID() - call success', () => {
    // ARRANGE
    // Dummy Data
    const testData = true;
    const inputData = {
      catID : 1
    };

    // ACT & ASSERT
    // Mock getProductsByID method call
    productService.getProductsByID(inputData.catID).subscribe((data : any) => 
      expect(data).toEqual(testData));
    // Check expected URL
    const req = httpController.expectOne('https://localhost:44310/api/Products/getCat/'+ inputData.catID);
    // check expected HTTP Request method
    expect(req.request.method).toEqual('GET');

    req.flush(testData)
  });
  
  it('getProductsByID() - call failed', () => {
    // ARRANGE
    // Dummy Data
    const emsg = 'status 404 error';
    const inputData = {
      catID : 1
    };

    // ACT & ASSERT
    // Mock getProductsByID method call - forced fail
    productService.getProductsByID(inputData.catID).subscribe(() => fail('Should have failed with 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );
    // Check expected URL
    const req = httpController.expectOne('https://localhost:44310/api/Products/getCat/'+ inputData.catID);
    // Check expected HTTP Request method
    expect(req.request.method).toEqual('GET');
    
    req.flush(emsg, {status: 404, statusText: 'Not Found Error'});
  });

  // -----------------------------------
  // getProductsSearch method test scripts
  it('getProductsSearch() - call success', () => {
    // ARRANGE
    // Dummy Data
    const testData = true;
    const inputData = {
      type : 'Test'
    };

    // ACT & ASSERT
    // Mock getProductsSearch() method call
    productService.getProductsSearch(inputData.type).subscribe((data : any) => 
      expect(data).toEqual(testData));
    // Check expected URL
    const req = httpController.expectOne('https://localhost:44310/api/Products/search/'+ inputData.type);
    // Check expected HTTP Request method
    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  });

  it('getProductsSearch() - call failed', () => {
    // ARRANGE
    // Dummy Data
    const emsg = 'status 404 error';
    const inputData = {
      type : 'Test'
    };

    // ACT & ASSERT
    // Mock getProductsSearch method call - forced fail
    productService.getProductsSearch(inputData.type).subscribe(() => fail('Should have failed with 404 error'),
      (error:HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );
    // Check expected URL
    const req = httpController.expectOne('https://localhost:44310/api/Products/search/'+ inputData.type);
    // Check expected HTTP Request method
    expect(req.request.method).toEqual('GET');

    req.flush(emsg, {status: 404, statusText: 'Not Found Error'});
  });
  
  // -----------------------------------
  // getAllProductsCat method test scripts
  it('getAllProductsCat() - call success', () => {
    // ARRANGE
    // Dummy Data
    const testData = true;

    // ACT & ASSERT
    // Mock getProductsSearch() method call
    productService.getAllProductsCat().subscribe((data : any) => 
      expect(data).toEqual(testData));
    // Check expected URL
    const req = httpController.expectOne('https://localhost:44310/api/Products/List_of_Categories');
    // Check expected HTTP Request method
    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  });

  it('getAllProductsCat() - call failed', () => {
    // ARRANGE
    // Dummy Data
    const emsg = 'status 500 error';

    // ACT & ASSERT
    // Mock getAllProducts() method call - forced fail
    productService.getAllProductsCat().subscribe(() => fail('Should have failed with 500 error'),
      (error:HttpErrorResponse) => {
        expect(error.status).toEqual(500, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );
    // Check expected URL
    const req = httpController.expectOne('https://localhost:44310/api/Products/List_of_Categories');
    // Check expected HTTP Request method
    expect(req.request.method).toEqual('GET');
    
    req.flush(emsg, {status: 500, statusText: 'Server Error'});
  });

  
});