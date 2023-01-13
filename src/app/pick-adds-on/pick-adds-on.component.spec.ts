import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickAddsOnComponent } from './pick-adds-on.component';

describe('PickAddsOnComponent', () => {
  let component: PickAddsOnComponent;
  let fixture: ComponentFixture<PickAddsOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickAddsOnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickAddsOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
