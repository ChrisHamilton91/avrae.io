import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollBuilderComponent } from './dice-roll-builder.component';

describe('DiceRollBuilderComponent', () => {
  let component: DiceRollBuilderComponent;
  let fixture: ComponentFixture<DiceRollBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceRollBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
