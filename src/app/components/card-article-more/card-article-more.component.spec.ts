import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArticleMoreComponent } from './card-article-more.component';

describe('CardArticleMoreComponent', () => {
  let component: CardArticleMoreComponent;
  let fixture: ComponentFixture<CardArticleMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardArticleMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardArticleMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
