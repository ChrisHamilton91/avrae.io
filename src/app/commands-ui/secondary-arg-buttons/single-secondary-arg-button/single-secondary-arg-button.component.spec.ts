import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SingleSecondaryArgButtonComponent } from "./single-secondary-arg-button.component";

describe("SingleSecondaryArgButtonComponent", () => {
  let component: SingleSecondaryArgButtonComponent;
  let fixture: ComponentFixture<SingleSecondaryArgButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleSecondaryArgButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSecondaryArgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
