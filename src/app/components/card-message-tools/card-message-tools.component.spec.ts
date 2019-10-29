import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMessageToolsComponent } from './card-message-tools.component';

describe('CardMessageToolsComponent', () => {
  let component: CardMessageToolsComponent;
  let fixture: ComponentFixture<CardMessageToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardMessageToolsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMessageToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
