import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SingleSecondaryArgInputHiddenComponent } from "./single-secondary-arg-input-hidden.component";

describe("SingleSecondaryArgInputHiddenComponent", () => {
  let component: SingleSecondaryArgInputHiddenComponent;
  let fixture: ComponentFixture<SingleSecondaryArgInputHiddenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleSecondaryArgInputHiddenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSecondaryArgInputHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
