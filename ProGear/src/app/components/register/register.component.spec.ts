import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

import { RouterTestingModule } from '@angular/router/testing';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let userServiceSpyObj : jasmine.SpyObj<UserserviceService>  //1. Create SpyObj

  beforeEach(async () => {
    userServiceSpyObj = jasmine.createSpyObj('UserserviceService', ['register']);  // 2. SpyObj initialize
    await TestBed.configureTestingModule({
      imports : [RouterTestingModule, ReactiveFormsModule, FormsModule ],
      declarations: [ RegisterComponent ],
      providers:[HttpClient, FormBuilder, HttpHandler,
      {provide : UserserviceService, useValue : userServiceSpyObj}  // 3. Add to provider 
    ]    

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


// Register Test - 1 
  it('register called success', () => {
    //Arrange 
    var testData = {
      data : "Testsing"
    }
    userServiceSpyObj.register.and.returnValue(of("Testing"));
    // Act 
    component.register();
    // Assert 
    userServiceSpyObj.register(data).subscribe((result) => {
      expect(result).toEqual(testData.data);
    })
  })


  // Resiger Test - 2 
  it ('register called failed', () => {
    // Arrange 
    var testData = {
      data : new Error('err')
    }
    let registerResult : any ; 
    userServiceSpyObj.register.and.returnValue(throwError(() => new Error('err')));
    // Act 
    component.register();
    //Assert 
    userServiceSpyObj.register(testData.data).subscribe(() => {},
    (result) => {
      registerResult = result ;
    });
    expect(registerResult).toEqual(testData.data);
  })



});

function data(data: any) {
  throw new Error('Email Already In Use');
}

