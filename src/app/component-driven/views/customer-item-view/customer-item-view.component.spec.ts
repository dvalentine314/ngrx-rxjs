import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerItemViewComponent } from './customer-item-view.component';

describe('CustomerItemViewComponent', () => {
  let component: CustomerItemViewComponent;
  let fixture: ComponentFixture<CustomerItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerItemViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
