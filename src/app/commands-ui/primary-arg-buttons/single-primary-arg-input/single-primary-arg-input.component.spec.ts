import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePrimaryArgInputComponent } from './single-primary-arg-input.component';

describe('SinglePrimaryArgInputComponent', () => {
  let component: SinglePrimaryArgInputComponent;
  let fixture: ComponentFixture<SinglePrimaryArgInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePrimaryArgInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePrimaryArgInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
