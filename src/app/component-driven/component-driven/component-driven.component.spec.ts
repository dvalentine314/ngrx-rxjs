import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDrivenComponent } from './component-driven.component';

describe('ComponentDrivenComponent', () => {
  let component: ComponentDrivenComponent;
  let fixture: ComponentFixture<ComponentDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentDrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
