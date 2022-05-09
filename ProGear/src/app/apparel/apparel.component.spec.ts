import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:ProGear/src/app/components/logout-button/logout-button.component.spec.ts
import { LogoutButtonComponent } from './logout-button.component';

describe('LogoutButtonComponent', () => {
  let component: LogoutButtonComponent;
  let fixture: ComponentFixture<LogoutButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutButtonComponent ]
========
import { ApparelComponent } from './apparel.component';

describe('ApparelComponent', () => {
  let component: ApparelComponent;
  let fixture: ComponentFixture<ApparelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApparelComponent ]
>>>>>>>> origin/Products-Krystyna:ProGear/src/app/apparel/apparel.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<<< HEAD:ProGear/src/app/components/logout-button/logout-button.component.spec.ts
    fixture = TestBed.createComponent(LogoutButtonComponent);
========
    fixture = TestBed.createComponent(ApparelComponent);
>>>>>>>> origin/Products-Krystyna:ProGear/src/app/apparel/apparel.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
