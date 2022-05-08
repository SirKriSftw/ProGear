
import { HttpClient, HttpHandler } from '@angular/common/http';
import { computeMsgId } from '@angular/compiler';
import { async, ComponentFixture, TestBed, tick , fakeAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { throwError } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';

import { LoginComponent } from './login.component'; 


describe('LoginComponent', () => {
  let component : LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userServiceSpyObj : jasmine.SpyObj<UserserviceService> //  1. Make SpyObj 

  beforeEach( async () => {
    userServiceSpyObj = jasmine.createSpyObj('UserserviceService',['getLogin']) // 2. Initialized the SpyObj

    await TestBed.configureTestingModule({
      imports : [RouterTestingModule, ReactiveFormsModule, FormsModule ],
      declarations: [ LoginComponent ],
      providers:[ HttpClient, FormBuilder, HttpHandler,
      {provide : UserserviceService, useValue : userServiceSpyObj} // 3.  Add to Provide 
      ]    
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance ; 
  });

  beforeEach(() => {
    userServiceSpyObj.getLogin.and.returnValue(of(""));
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it ('property check', () => {
    expect(component.loginForm).toBeDefined();
  })

  
  it ('verify f', ()=>{
  
    expect(component.f).toBe(component.loginForm.controls);
  })




// login testing  -1 
it('login call success', () =>{
  //arrange
  var testData ={
    email : "email",
    password : "password",
    data : "testing" 
  }
  userServiceSpyObj.getLogin.and.returnValue(of("testing"));
  // ACT 
  component.login(testData.email, testData.password);
  //Assert 
  userServiceSpyObj.getLogin(testData.email,testData.password).subscribe((result)=>{
    expect(result).toEqual(testData.data);
  // expect(component.getLogin).toEqual(result); // I am not sure this part 
  })
})


// login testing - 2 
it ('login call failed', ()=>{
// Arrange
  var testData = {
  email : "email",
  password : "password",
  data : new Error('err'),
}
let loginResult : any ; 
userServiceSpyObj.getLogin.and.returnValue(throwError(()=> new Error('err')));
//Act
component.login(testData.email, testData.password); 
// Assert 
userServiceSpyObj.getLogin(testData.email, testData.password).subscribe(() => {},
(result) => {
  loginResult = result;
});
expect(loginResult).toEqual(testData.data);


})



})




function data(data: any): never {
  throw new Error('Function not implemented.');
}
/*

it ('login', ()=>{
  const testData = {
    email : 'email',
    password : 'password',
    result : ''
  }
let loginResult : string | undefined; 

 loginServiceSpy.getLogin(testData.email, testData.password ).subscribe((data: string | undefined) => {
   loginResult = data ; 
 })
})

it('form should be invalid if email is empty', async() => {
    componentInstance.loginForm.controls['email'].setValue('');
    componentInstance.loginForm.controls['password'].setValue('password');
    expect(componentInstance.loginForm.valid).toBeFalsy();
});

it('form should be invalid if password is empty', async() => {
  componentInstance.loginForm.controls['email'].setValue('email');
  componentInstance.loginForm.controls['password'].setValue('');
  expect(componentInstance.loginForm.valid).toBeFalsy();
});



it('form should be invalid if password and username both are empty', async() => {
  componentInstance.loginForm.controls['email'].setValue('');
  componentInstance.loginForm.controls['password'].setValue('');
  expect(componentInstance.loginForm.valid).toBeFalsy();
});

it('form should be valid if password and username both are not empty', async() => {
  componentInstance.loginForm.controls['email'].setValue('jinhwa014@revature.net');
  componentInstance.loginForm.controls['password'].setValue('password');
  expect(componentInstance.loginForm.valid).toBeTrue();
});

*/



