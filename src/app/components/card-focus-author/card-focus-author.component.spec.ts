import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFocusAuthorComponent } from './card-focus-author.component';

describe('CardFocusAuthorComponent', () => {
  let component: CardFocusAuthorComponent;
  let fixture: ComponentFixture<CardFocusAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardFocusAuthorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFocusAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
