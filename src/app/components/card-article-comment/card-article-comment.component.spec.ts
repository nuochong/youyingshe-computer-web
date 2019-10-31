import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArticleCommentComponent } from './card-article-comment.component';

describe('CardArticleCommentComponent', () => {
  let component: CardArticleCommentComponent;
  let fixture: ComponentFixture<CardArticleCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardArticleCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardArticleCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
