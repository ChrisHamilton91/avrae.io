import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSecondaryArgInputToggleComponent } from './single-secondary-arg-input-toggle.component';

describe('SingleSecondaryArgInputToggleComponent', () => {
  let component: SingleSecondaryArgInputToggleComponent;
  let fixture: ComponentFixture<SingleSecondaryArgInputToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSecondaryArgInputToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSecondaryArgInputToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
