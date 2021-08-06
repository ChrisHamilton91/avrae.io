import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SingleSecondaryArgInputBoxComponent } from "./single-secondary-arg-input-box.component";

describe("SingleSecondaryArgInputBoxComponent", () => {
  let component: SingleSecondaryArgInputBoxComponent;
  let fixture: ComponentFixture<SingleSecondaryArgInputBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleSecondaryArgInputBoxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSecondaryArgInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
