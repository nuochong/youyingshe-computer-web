import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftRightLayoutFollowComponent } from './left-right-layout-follow.component';

describe('LeftRightLayoutFollowComponent', () => {
  let component: LeftRightLayoutFollowComponent;
  let fixture: ComponentFixture<LeftRightLayoutFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeftRightLayoutFollowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftRightLayoutFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
