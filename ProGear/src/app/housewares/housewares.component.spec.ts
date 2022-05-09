import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousewaresComponent } from './housewares.component';

describe('HousewaresComponent', () => {
  let component: HousewaresComponent;
  let fixture: ComponentFixture<HousewaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousewaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousewaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
