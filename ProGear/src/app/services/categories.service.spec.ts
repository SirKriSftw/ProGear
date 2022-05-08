import { TestBed } from '@angular/core/testing';
import { CategoriesService } from './categories.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('CategoriesService', () => {
  // variables/objects setup
  let httpController: HttpTestingController;
  let catService: CategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CategoriesService ]
    });
    catService = TestBed.inject(CategoriesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  // Service Creation Testing
  it('should be created', () => {
    expect(catService).toBeDefined();
  });

  //getAllCategories() method testing
  it('getAllCategories() - call success', () => {
    // ARRANGE
    // Dummy Data
    const testData = true;

    // ACT & ASSERT
    // Mock getAllCategories() method call
    catService.getAllCategories().subscribe((data : any) =>
      expect(data).toEqual(testData));
    // Check expected URL
    const req = httpController.expectOne('https://localhost:44310/api/Categories/getAll');
    // Check expected HTTP Request method
    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  });

  it('getAllCategories() - call failed', () => {
    // ARRANGE
    // Dummy Data
    const emsg = 'status 500 error';

    // ACT & ASSERT
    // Mock getAllCategories() method call - forced fail
    catService.getAllCategories().subscribe(() => fail('Should have failed with 500 error'),
      (error:HttpErrorResponse) => {
        expect(error.status).toEqual(500, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );
    // Check expected URL
    const req = httpController.expectOne('https://localhost:44310/api/Categories/getAll');
    // Check expected HTTP Request method
    expect(req.request.method).toEqual('GET');

    req.flush(emsg, {status: 500, statusText: 'Server Error'});
  });


});
