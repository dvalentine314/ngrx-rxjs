import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerVisitViewComponent } from './customer-visit-view.component';

describe('CustomerVisitViewComponent', () => {
  let component: CustomerVisitViewComponent;
  let fixture: ComponentFixture<CustomerVisitViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerVisitViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerVisitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
