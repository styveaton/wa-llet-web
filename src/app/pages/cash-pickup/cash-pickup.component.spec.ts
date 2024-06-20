import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPickupComponent } from './cash-pickup.component';

describe('CashPickupComponent', () => {
  let component: CashPickupComponent;
  let fixture: ComponentFixture<CashPickupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashPickupComponent]
    });
    fixture = TestBed.createComponent(CashPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
