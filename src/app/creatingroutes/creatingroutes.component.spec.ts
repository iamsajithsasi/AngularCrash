import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingroutesComponent } from './creatingroutes.component';

describe('CreatingroutesComponent', () => {
  let component: CreatingroutesComponent;
  let fixture: ComponentFixture<CreatingroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
