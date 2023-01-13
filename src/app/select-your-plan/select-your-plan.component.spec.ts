import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectYourPlanComponent } from './select-your-plan.component';

describe('SelectYourPlanComponent', () => {
  let component: SelectYourPlanComponent;
  let fixture: ComponentFixture<SelectYourPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectYourPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectYourPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
