import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerVisitEditComponent } from './customer-visit-edit.component';

describe('CustomerVisitEditComponent', () => {
  let component: CustomerVisitEditComponent;
  let fixture: ComponentFixture<CustomerVisitEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerVisitEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerVisitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
