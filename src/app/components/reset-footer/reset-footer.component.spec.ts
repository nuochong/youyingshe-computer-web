import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetFooterComponent } from './reset-footer.component';

describe('ResetFooterComponent', () => {
  let component: ResetFooterComponent;
  let fixture: ComponentFixture<ResetFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
