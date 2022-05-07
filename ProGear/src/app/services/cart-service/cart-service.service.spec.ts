import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ProductserviceService } from '../productservice/productservice.service';
import { CartService } from './cart-service.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('CartServiceService', () => {
  let cartService: CartService;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductserviceService],
    });
    cartService = TestBed.inject(CartService);
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(cartService).toBeDefined();
  });

  // -----------------------------------
  // getUserIdByEmail method test scripts
  it('getUserIdByEmail()', () => {
    //Dummy data
    const testData = true;
    const inputData = {
      email :'test@test.com'
    };

    //Mock getUserIdByEmail() method call
    cartService
      .getUserIdByEmail('test@test.com')
      .subscribe((data: any) => expect(data).toEqual(testData));

    //Check expected URL
    const req = httpController.expectOne(
      'https://localhost:5001/Cart/get-user-ID/' + inputData.email
    );

    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  });

  it('getUserIdByEmail() fail', () => {
    //Dummy data
    const emsg = 'status 500 error';

    //Mock getUserIdByEmail() method call force fail
    cartService.getUserIdByEmail('test@test.com').subscribe(
      () => fail('Should have failed with 500 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(500, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    //check expected URL
    const req = httpController.expectOne(
      'https://localhost:5001/Cart/get-user-ID/test@test.com'
    );

    //check expected Http request method
    expect(req.request.method).toEqual('GET');

    req.flush(emsg, { status: 500, statusText: 'Server Error' });
  });
  //-----------------------------------
  //getCart method test scripts
  it('getCart()', () => {
    const testData = true;
    const inputData = {
      cartID: 2,
    };

    //Mock getCart method call
    cartService
      .getCart(inputData.cartID)
      .subscribe((data: any) => expect(data).toEqual(testData));

    //check Expected URL
    const req = httpController.expectOne(
      'https://localhost:5001/Cart/Cart/' + inputData.cartID
    );
    //check expected http request method
    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  });
  //Mock getCart method call - force fail
  it('getCart() fail', () => {
    const emsg = 'status 404 error';
    const inputData = {
      cartID: 2,
    };

    cartService.getCart(inputData.cartID).subscribe(
      () => fail('Should have failed with 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    //Check expected URL
    const req = httpController.expectOne(
      'https://localhost:5001/Cart/Cart/' + inputData.cartID
    );
    // check expected Http request method
    expect(req.request.method).toEqual('GET');

    req.flush(emsg, { status: 404, statusText: 'Not Found Error' });
  });
  // ----------------------------------------------------
  //modifyQty method test scripts
  it('modifyQty()', () => {
    //dummy Data
    const testData = true;
    const inputData = {
      orderID: 5,
      Qty: 1,
    };
    //Mock modifyQty method call
    cartService
      .modifyQty(inputData.orderID, inputData.Qty)
      .subscribe((data: any) => expect(data).toEqual(testData));

    // Check expected URL
    const req = httpController.expectOne(
      'https://localhost:5001/Cart/set-order-qty/' +
        inputData.orderID +
        '/' +
        inputData.Qty
    );
    // check expected Http request method
    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  });

  it('modifyQty() fail', () => {
    //dummy Data
    const emsg = 'status 404 error';
    const inputData = {
      orderID: 5,
      Qty: 1,
    };

    //Mock modifyQty method call - force fail
    cartService.modifyQty(inputData.orderID, inputData.Qty).subscribe(
      () => fail('Should have faild with 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    //check expected URL
    const req = httpController.expectOne(
      'https://localhost:5001/Cart/set-order-qty/' +
        inputData.orderID +
        '/' +
        inputData.Qty
    );
    // Check expected HTTP Request method
    expect(req.request.method).toEqual('GET');

    req.flush(emsg, { status: 404, statusText: 'Not Found Error' });
  });
  // ----------------------------------------------------
  //removeOrder method test scripts
  it('removeOrder()', () => {
    //dummy Data
    const testData = true;
    const inputData = {
      orderID: 5,
    };

    //Mock removeOrder method  call
    cartService
      .removeOrder(inputData.orderID)
      .subscribe((data: any) => expect(data).toEqual(testData));
    //check expected URL
    const req = httpController.expectOne(
      'https://localhost:5001/Cart/remove-order/' + inputData.orderID
    );
    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  });

  it('removeOrder() fail', () => {
    //dummy Data
    const emsg = 'status 404 error';
    const inputData = {
      orderID: 5,
    };

    //Mock removeOrder method  call
    cartService.removeOrder(inputData.orderID).subscribe(
      () => fail('Should have faild with 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    //check expected URL
    const req = httpController.expectOne(
      'https://localhost:5001/Cart/remove-order/' + inputData.orderID
    );
    // Check expected HTTP Request method

    expect(req.request.method).toEqual('GET');

    req.flush(emsg, { status: 404, statusText: 'Not Found Error' });
  });
  // -----------------------------------
  // emptyCart method test scripts
  it('emptyCart', () => {
    // Dummy Data
    const testData = true;
    const inputData = {
      orderID: 5,
    };
    // Mock emptycart method call
    cartService.emptyCart(inputData.orderID).subscribe((data : any) => 
      expect(data).toEqual(testData));

    // Check expected URL
    const req = httpController.expectOne('https://localhost:5001/Cart/emptycart/' + inputData.orderID);
    
    // Check expected HTTP Request method
    expect(req.request.method).toEqual('GET');

    req.flush(testData);
  });

  it(' emptyCart() fail', () => {
    // Dummy Data
    const emsg = 'status 500 error';
    const inputData = {
      orderID: 5,
    };
    // Mock getCart method call - forced fail
    cartService.emptyCart(inputData.orderID).subscribe(() => fail('Should have failed with 500 error'),
      (error:HttpErrorResponse) => {
        expect(error.status).toEqual(500, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    // Check expected URL
    const req = httpController.expectOne('https://localhost:5001/Cart/emptycart/' + inputData.orderID);
    // Check expected HTTP Request method
    expect(req.request.method).toEqual('Delete');
    
    req.flush(emsg, {status: 500, statusText: 'Server Error'});
  });

});
