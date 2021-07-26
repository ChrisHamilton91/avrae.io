import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilineOutputComponent } from './multiline-output.component';

describe('MultilineOutputComponent', () => {
  let component: MultilineOutputComponent;
  let fixture: ComponentFixture<MultilineOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultilineOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultilineOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
