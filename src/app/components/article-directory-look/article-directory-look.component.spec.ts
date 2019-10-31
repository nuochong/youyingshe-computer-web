import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDirectoryLookComponent } from './article-directory-look.component';

describe('ArticleDirectoryLookComponent', () => {
  let component: ArticleDirectoryLookComponent;
  let fixture: ComponentFixture<ArticleDirectoryLookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleDirectoryLookComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDirectoryLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
