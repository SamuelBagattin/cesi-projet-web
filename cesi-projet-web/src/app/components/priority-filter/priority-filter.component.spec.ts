import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityFilterComponent } from './priority-filter.component';

describe('PriorityFilterComponent', () => {
  let component: PriorityFilterComponent;
  let fixture: ComponentFixture<PriorityFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
