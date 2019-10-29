import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignBtnComponent } from './sign-btn.component';

describe('SignBtnComponent', () => {
  let component: SignBtnComponent;
  let fixture: ComponentFixture<SignBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignBtnComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
