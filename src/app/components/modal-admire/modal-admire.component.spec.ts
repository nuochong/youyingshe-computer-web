import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdmireComponent } from './modal-admire.component';

describe('ModalAdmireComponent', () => {
  let component: ModalAdmireComponent;
  let fixture: ComponentFixture<ModalAdmireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAdmireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAdmireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
