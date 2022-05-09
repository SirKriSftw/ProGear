import { TestBed } from '@angular/core/testing';
import { UserserviceService } from './services/userservice/userservice.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


describe('UserserviceService', () => {
  let userservice: UserserviceService;
  let httpclient : HttpClient; 
  let httpcontroller : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers : [UserserviceService]
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

   

    const req = httpcontroller.expectOne('login') ;

    expect(req.request.method).toEqual('GET');

    req.flush(testData);

  })


  it('getLogin() fail', () => {
    const emsg = 'status 500 error' ;
    const inputData = {
      email : 'admin',
      password : 'admin',
    };

    
    (error : HttpErrorResponse) =>{
      expect(error.status).toEqual(500, 'status');
      expect(error.error).toEqual(emsg, 'message');
    }
   

   
   

  });

});



