
import { TestBed } from '@angular/core/testing';
import { UserserviceService } from './userservice.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Auth0ClientService, AuthConfigService, AuthModule, AuthService } from '@auth0/auth0-angular';


describe('UserserviceService', () => {
  let userservice: UserserviceService;
  let httpclient : HttpClient; 
  let httpcontroller : HttpTestingController;
  let mockAuthConfig = jasmine.createSpy('AuthConfigService');
  let mockAuth0Client = jasmine.createSpy('Auth0client');
  let mockAuthService = jasmine.createSpy('AuthService')

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, AuthModule],
      providers : [UserserviceService, 
                  {provide: AuthConfigService, useValue: mockAuthConfig}, 
                  {provide: Auth0ClientService, useValue: mockAuth0Client},
                  {provide : AuthService, useValue : mockAuthService},
                ]
    });
    userservice = TestBed.inject(UserserviceService);
    httpclient = TestBed.inject(HttpClient);
    httpcontroller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpcontroller.verify();
  })

  it('should be created', () => {
    expect(userservice).toBeDefined();
  });


  it('getLogin()', () =>{
    const testData = true ; 
    const inputData = {
      email : 'admin',
      password : 'admin',
    }   

    userservice.getLogin(inputData.email, inputData.password).subscribe((data : any) => expect(data).toBeTruthy(testData));

    const req = httpcontroller.expectOne('https://localhost:5001/api/User/Login?email=' + inputData.email + '&password=' + inputData.password) ;

    expect(req.request.method).toEqual('GET');

    req.flush(testData);

  })


  it('getLogin() fail', () => {
    const emsg = 'status 500 error' ;
    const inputData = {
      email : 'admin',
      password : 'admin',
    };

    userservice.getLogin(inputData.email, inputData.password).subscribe(() => fail('Should have failed with 500 error'),
    (error : HttpErrorResponse) =>{
      expect(error.status).toEqual(500, 'status');
      expect(error.error).toEqual(emsg, 'message');
    }
    );

    const req = httpcontroller.expectOne('https://localhost:5001/api/User/Login?email=' + inputData.email + '&password=' + inputData.password);
    expect(req.request.method).toEqual('GET') ;

    req.flush(emsg, {status : 500, statusText : 'Server Error'});

  });



  it('register()', () =>{
    const testData = true ; 
    const inputData = {
     user : 'admin'
    }   

    userservice.register('admin').subscribe((data : any) => expect(data).toBeTruthy(testData));

    const req = httpcontroller.expectOne('https://localhost:44310/api/User/createUser') ;

    expect(req.request.method).toEqual('POST');

    req.flush(testData);

  })


it ('getUserId', () => {
  const testData = true ; 
  const inputData = {
   email : 'admin'
  }   

  userservice.getUserId('admin').subscribe((data : any) => expect(data).toBeTruthy(testData));

  const req = httpcontroller.expectOne('https://localhost:5001/api/User/GetId?email=' + inputData.email) ;

  expect(req.request.method).toEqual('GET');

  req.flush(testData);
})





});

