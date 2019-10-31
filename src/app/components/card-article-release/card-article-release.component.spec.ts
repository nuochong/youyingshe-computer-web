import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArticleReleaseComponent } from './card-article-release.component';

describe('CardArticleReleaseComponent', () => {
  let component: CardArticleReleaseComponent;
  let fixture: ComponentFixture<CardArticleReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardArticleReleaseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardArticleReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
