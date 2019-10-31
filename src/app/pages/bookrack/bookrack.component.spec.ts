import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookrackComponent } from './bookrack.component';

describe('BookrackComponent', () => {
  let component: BookrackComponent;
  let fixture: ComponentFixture<BookrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookrackComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
