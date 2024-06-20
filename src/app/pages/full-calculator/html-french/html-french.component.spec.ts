import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlFrenchComponent } from './html-french.component';

describe('HtmlFrenchComponent', () => {
  let component: HtmlFrenchComponent;
  let fixture: ComponentFixture<HtmlFrenchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlFrenchComponent]
    });
    fixture = TestBed.createComponent(HtmlFrenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
