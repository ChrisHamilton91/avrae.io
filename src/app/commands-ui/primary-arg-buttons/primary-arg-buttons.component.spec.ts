import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryArgButtonsComponent } from './primary-arg-buttons.component';

describe('PrimaryArgButtonsComponent', () => {
  let component: PrimaryArgButtonsComponent;
  let fixture: ComponentFixture<PrimaryArgButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryArgButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryArgButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
