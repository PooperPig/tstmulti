import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbButtonComponent } from './amb-button.component';

describe('AmbButtonComponent', () => {
  let component: AmbButtonComponent;
  let fixture: ComponentFixture<AmbButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
