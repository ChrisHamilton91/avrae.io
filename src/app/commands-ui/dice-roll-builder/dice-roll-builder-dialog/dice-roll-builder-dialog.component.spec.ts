import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollBuilderDialogComponent } from './dice-roll-builder-dialog.component';

describe('DiceRollBuilderDialogComponent', () => {
  let component: DiceRollBuilderDialogComponent;
  let fixture: ComponentFixture<DiceRollBuilderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceRollBuilderDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollBuilderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
