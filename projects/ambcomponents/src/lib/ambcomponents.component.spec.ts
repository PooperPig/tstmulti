import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbcomponentsComponent } from './ambcomponents.component';

describe('AmbcomponentsComponent', () => {
  let component: AmbcomponentsComponent;
  let fixture: ComponentFixture<AmbcomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbcomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
