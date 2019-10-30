import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteLoadingComponent } from './write-loading.component';

describe('WriteLoadingComponent', () => {
  let component: WriteLoadingComponent;
  let fixture: ComponentFixture<WriteLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
