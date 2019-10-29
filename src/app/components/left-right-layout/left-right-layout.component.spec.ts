import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftRightLayoutComponent } from './left-right-layout.component';

describe('LeftRightLayoutComponent', () => {
  let component: LeftRightLayoutComponent;
  let fixture: ComponentFixture<LeftRightLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeftRightLayoutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftRightLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
