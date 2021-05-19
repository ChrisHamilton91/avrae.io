import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcommandButtonsComponent } from './subcommand-buttons.component';

describe('SubcommandButtonsComponent', () => {
  let component: SubcommandButtonsComponent;
  let fixture: ComponentFixture<SubcommandButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcommandButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcommandButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
