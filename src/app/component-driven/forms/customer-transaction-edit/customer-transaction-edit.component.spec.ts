import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTransactionEditComponent } from './customer-transaction-edit.component';

describe('CustomerTransactionEditComponent', () => {
  let component: CustomerTransactionEditComponent;
  let fixture: ComponentFixture<CustomerTransactionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTransactionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerTransactionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
