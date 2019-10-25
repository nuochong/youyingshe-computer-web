import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMiniAuthorComponent } from './list-mini-author.component';

describe('ListMiniAuthorComponent', () => {
  let component: ListMiniAuthorComponent;
  let fixture: ComponentFixture<ListMiniAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMiniAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMiniAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
