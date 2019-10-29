import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAllColumnComponent } from './layout-all-column.component';

describe('LayoutAllColumnComponent', () => {
  let component: LayoutAllColumnComponent;
  let fixture: ComponentFixture<LayoutAllColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutAllColumnComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAllColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
