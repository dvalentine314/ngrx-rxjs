import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTransactionViewComponent } from './customer-transaction-view.component';

describe('CustomerTransactionViewComponent', () => {
  let component: CustomerTransactionViewComponent;
  let fixture: ComponentFixture<CustomerTransactionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerTransactionViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerTransactionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
