import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArticleEmojiComponent } from './card-article-emoji.component';

describe('CardArticleEmojiComponent', () => {
  let component: CardArticleEmojiComponent;
  let fixture: ComponentFixture<CardArticleEmojiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardArticleEmojiComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardArticleEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
