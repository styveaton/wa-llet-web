import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersAndAffiliatesComponent } from './partners-and-affiliates.component';

describe('PartnersAndAffiliatesComponent', () => {
  let component: PartnersAndAffiliatesComponent;
  let fixture: ComponentFixture<PartnersAndAffiliatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnersAndAffiliatesComponent]
    });
    fixture = TestBed.createComponent(PartnersAndAffiliatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
