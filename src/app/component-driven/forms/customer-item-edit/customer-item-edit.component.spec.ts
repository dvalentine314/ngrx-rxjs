import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerItemEditComponent } from './customer-item-edit.component';

describe('CustomerItemEditComponent', () => {
  let component: CustomerItemEditComponent;
  let fixture: ComponentFixture<CustomerItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerItemEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
