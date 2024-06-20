import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCalculatorComponent } from './full-calculator.component';

describe('FullCalculatorComponent', () => {
  let component: FullCalculatorComponent;
  let fixture: ComponentFixture<FullCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullCalculatorComponent]
    });
    fixture = TestBed.createComponent(FullCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
