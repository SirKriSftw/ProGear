import { TestBed } from '@angular/core/testing';
import { ProductserviceService } from "./productservice.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// Test Script Setup
describe('ProductserviceService', () => {
  let productService: ProductserviceService;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductserviceService]
    });
    productService = TestBed.inject(ProductserviceService);
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  // Script testing service creation
  it('should be created', () => {
    expect(productService).toBeDefined();
  });

  // -----------------------------------
  // getAllProducts method test scripts
  it('getAllProducts()', () => {
    // Dummy Data
    const testData = true;

    // Mock getAllProducts() method call
    productService.getAllProducts().subscribe((data : any) => 
      expect(data).toEqual(testData));

    // Check expected URL
    const req = httpController.expectOne('https://localhost:44310/api/ProductList/List_of_Products');
    
    // Check expected HTTP Request method
    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  });

  it('getAllProducts() fail', () => {
    // Dummy Data
    const emsg = 'status 500 error';

    // Mock getAllProducts() method call - forced fail
    productService.getAllProducts().subscribe(() => fail('Should have failed with 500 error'),
      (error:HttpErrorResponse) => {
        expect(error.status).toEqual(500, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    // Check expected URL
    const req = httpController.expectOne('https://localhost:44310/api/ProductList/List_of_Products');
    // Check expected HTTP Request method
    expect(req.request.method).toEqual('GET');
    
    req.flush(emsg, {status: 500, statusText: 'Server Error'});
  });

  // -----------------------------------
  // getProductsByID method test scripts
  it('getProductsByID()', () => {
    // Dummy Data
    const testData = true;
    const inputData = {
      catID : 1
    };

    // Mock getProductsByID method call
    productService.getProductsByID(inputData.catID).subscribe((data : any) => 
      expect(data).toEqual(testData));

    // Check expected URL
    const req = httpController.expectOne('https://localhost:44310/api/ProductList/getCat/'+ inputData.catID);

    // check expected HTTP Request method
    expect(req.request.method).toEqual('GET');

    req.flush(testData)
  });

  it('getProductsByID() fail', () => {
    // Dummy Data
    const emsg = 'status 404 error';
    const inputData = {
      catID : 1
    };

    // Mock getProductsByID method call - forced fail
    productService.getProductsByID(inputData.catID).subscribe(() => fail('Should have failed with 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    // Check expected URL
    const req = httpController.expectOne('https://localhost:44310/api/ProductList/getCat/'+ inputData.catID);
    // Check expected HTTP Request method
    expect(req.request.method).toEqual('GET');
    
    req.flush(emsg, {status: 404, statusText: 'Not Found Error'});
  });

  // -----------------------------------
  // getProductsSearch method test scripts
  it('getProductsSearch()', () => {
    // Dummy Data
    const testData = true;
    const inputData = {
      type : 'Test'
    };

    // Mock getProductsSearch() method call
    productService.getProductsSearch(inputData.type).subscribe((data : any) => 
      expect(data).toEqual(testData));

    // Check expected URL
    const req = httpController.expectOne('https://localhost:44310/api/ProductList/search/'+ inputData.type);
    // Check expected HTTP Request method
    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  });

  it('getProductsSearch() fail', () => {
    // Dummy Data
    const emsg = 'status 404 error';
    const inputData = {
      type : 'Test'
    };

    // Mock getProductsSearch method call - forced fail
    productService.getProductsSearch(inputData.type).subscribe(() => fail('Should have failed with 404 error'),
      (error:HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    // Check expected URL
    const req = httpController.expectOne('https://localhost:44310/api/ProductList/search/'+ inputData.type);
    // Check expected HTTP Request method
    expect(req.request.method).toEqual('GET');

    req.flush(emsg, {status: 404, statusText: 'Not Found Error'});
  });

});

