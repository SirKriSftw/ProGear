import { flush, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { ContactClass } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [ 
        AuthService
      ]
    }).compileComponents();
  });

  //---Practice----//

describe('Contact Class test', ()=> {
  let appComponent: AppComponent | null;
  let person = {
      "firstname" : ' ',
      "lastname": ' ',
      "age": 0,
      "email": ' '
    };

    let contact = new ContactClass(person);
  
    // beforeEach(()=> {
    //   appComponent = new AppComponent();
    // })

    it('Sanity check', ()=>  {
      expect(true).not.toBe(false);
    })

    it('should set instance correctly', () => {
      expect(appComponent).not.toBeNull();
    })

  it('should have a valid constructor', () => {
    expect(contact).not.toBeNull();
     
  });

  it('should get and set firstname correctly', ()=> {
    contact.person.firstname ='Gerome';
    expect(contact.person.firstname).toBe('Gerome');
  });

  it('should get and set id correctly', ()=> {
    contact.person.age = 1;
    expect(contact.person.age).toBe(1);
  });


  

  afterEach(()=> {
    contact.person = {
      "firstname" : ' ',
      "lastname": ' ',
      "age": 0,
      "email": ' '
    };

    appComponent = null;

  });

});




  //-Practice----//


  xit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  xit(`should have as title 'ProGear'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ProGear');
  });

});
