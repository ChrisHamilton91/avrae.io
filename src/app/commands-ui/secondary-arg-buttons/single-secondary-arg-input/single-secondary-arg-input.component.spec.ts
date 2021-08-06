import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SingleSecondaryArgInputComponent } from "./single-secondary-arg-input.component";

describe("SingleSecondaryArgInputComponent", () => {
  let component: SingleSecondaryArgInputComponent;
  let fixture: ComponentFixture<SingleSecondaryArgInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleSecondaryArgInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSecondaryArgInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
