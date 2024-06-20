import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlEnglishComponent } from './html-english.component';

describe('HtmlEnglishComponent', () => {
  let component: HtmlEnglishComponent;
  let fixture: ComponentFixture<HtmlEnglishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlEnglishComponent]
    });
    fixture = TestBed.createComponent(HtmlEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
