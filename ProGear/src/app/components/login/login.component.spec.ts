
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';

import { LoginComponent } from './login.component'; 


describe('LoginComponent', () => {
  let componentInstance : LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let el : HTMLElement ; 
  let loginService : UserserviceService
//
  let loginServiceSpy: { login: jasmine.Spy };
  let routerSpy: { navigateByUrl: jasmine.Spy };
//
  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports : [RouterTestingModule, ReactiveFormsModule, FormsModule ],
      declarations: [ LoginComponent ],
      providers:[HttpClient, UserserviceService, FormBuilder, HttpHandler]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    componentInstance = fixture.componentInstance ; 
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    componentInstance = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(componentInstance).toBeTruthy();
  });

  it ('property check', () => {
    expect(componentInstance.loginForm).toBeDefined();
  })

  it ('login', () =>{
    expect(componentInstance.login('email','password')).toBeDefined()
  });

  

it('form should be invalid if username is empty', async() => {
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
  
});
































/*
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';

import { LoginComponent } from './login.component'; 


describe('LoginComponent', () => {
  let componentInstance : LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports : [RouterTestingModule, ReactiveFormsModule, FormsModule],
      declarations: [ LoginComponent ],
      providers:[HttpClient, UserserviceService, FormBuilder, HttpHandler]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    componentInstance = fixture.componentInstance ; 
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    componentInstance = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(componentInstance).toBeTruthy();
  });


  it('email and password are required', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
      const userEmailElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email');
      userEmailElement.value ='Jinhwa@revature.net';
      userEmailElement.dispatchEvent(new Event('input'));

      const userpasswordElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
      userpasswordElement.value ='12345678';
      userpasswordElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() =>{
        const btnElement : HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button');
        expect(btnElement.disabled).toBeFalsy();
        expect(componentInstance.loginForm.get('email')?.value).toEqual('Jinhwa@revature.net');
        expect(componentInstance.loginForm.get('password')?.value).toEqual('12345678');
        expect(componentInstance.loginForm.valid).toBeTruthy();

      })

    })
  })


  it('password is in required state', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
      const userEmailElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email');
      userEmailElement.value ='Jinhwa@revature.net';
      userEmailElement.dispatchEvent(new Event('input'));

      const userpasswordElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
      userpasswordElement.value ='';
      userpasswordElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() =>{
        const btnElement : HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button');
        expect(btnElement.disabled).toBeTruthy();
        expect(componentInstance.loginForm.get('email')?.value).toEqual('Jinhwa@revature.net');
        expect(componentInstance.loginForm.get('password')?.value).toEqual('');
        expect(componentInstance.loginForm.valid).toBeFalsy();

      })

    })
  })


  it('email is in required state', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
      const userEmailElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email');
      userEmailElement.value ='';
      userEmailElement.dispatchEvent(new Event('input'));

      const userpasswordElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
      userpasswordElement.value ='12345678';
      userpasswordElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() =>{
        const btnElement : HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button');
        expect(btnElement.disabled).toBeTruthy();
        expect(componentInstance.loginForm.get('email')?.value).toEqual('');
        expect(componentInstance.loginForm.get('password')?.value).toEqual('12345678');
        expect(componentInstance.loginForm.valid).toBeFalsy();

      })

    })
  })

  it('check whether ng submit is called or invoked', () =>{
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
  
      const userEmailElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email');
      userEmailElement.value ='Jinhwa@revature.net';
      userEmailElement.dispatchEvent(new Event('input'));
  
      const userpasswordElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
      userpasswordElement.value ='12345678';
      userpasswordElement.dispatchEvent(new Event('input'));
  
      fixture.autoDetectChanges();
      fixture.whenStable().then(() =>{
  
        const mockFunction = spyOn(componentInstance, 'login').and.callThrough();
        const buttonElement : HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button');
        expect(buttonElement.disabled).toBeFalsy();
        buttonElement.click();
        expect(mockFunction).toHaveBeenCalledTimes(1);
  
      })
  
    })
  })


});

*/



















/*

import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';

import { LoginComponent } from './login.component'; 
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';


class Page {
  get submitButton() {
    return this.fixture.nativeElement.querySelector('#button');
  }
  get useremailInput() {
    return this.fixture.debugElement.nativeElement.querySelector('#email');
  }
  get passwordInput() {
    return this.fixture.debugElement.nativeElement.querySelector('#password');
  }

  get errorMsg() {
    return this.fixture.debugElement.query(By.css('.error')).nativeElement;
  }

  constructor(private fixture: ComponentFixture<LoginComponent>) {}

  public updateValue(input: HTMLInputElement, value: string) {
    input.value = value;
    input.dispatchEvent(new Event('input'));
  }
}


describe('LoginComponent', () => {
  let componentInstance : LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugEl: DebugElement;

  let loginService: UserserviceService;
  let loginServiceSpy: { login: jasmine.Spy };
  let routerSpy: { navigateByUrl: jasmine.Spy };
  let router: Router;
  let page: Page;


  beforeEach(() => {
    loginServiceSpy = jasmine.createSpyObj(UserserviceService, ['login']);
    routerSpy = jasmine.createSpyObj(Router, ['navigateByUrl']);
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [LoginComponent],
      providers: [
        { provide: UserserviceService, useValue: loginServiceSpy },
        { provide: Router, useValue: routerSpy }, FormBuilder, FormsModule
      ],
    });
    fixture = TestBed.createComponent(LoginComponent);
    componentInstance = fixture.componentInstance;
    debugEl = fixture.debugElement;
    loginService = TestBed.inject(UserserviceService);
    router = TestBed.inject(Router);
    page = new Page(fixture);
    fixture.detectChanges();
  });



  it(
    'Valid credentials',
    waitForAsync(() => {
      page.updateValue(page.useremailInput, '#email');
      page.updateValue(page.passwordInput, '#password');
      (loginService.getLogin as jasmine.Spy).and.returnValue(
        Promise.resolve(true)
      );
      page.submitButton.click();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const errorArea = debugEl.query(By.css('.error'));
        expect(errorArea).toBeNull();
        const navArgs = (router.navigateByUrl as jasmine.Spy).calls.first()
          .args[0];
        expect(navArgs).toBe('/home');
      });
    })
  );



});


*/