import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnUserDynamicComponent } from './column-user-dynamic.component';

describe('ColumnUserDynamicComponent', () => {
  let component: ColumnUserDynamicComponent;
  let fixture: ComponentFixture<ColumnUserDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnUserDynamicComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnUserDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
