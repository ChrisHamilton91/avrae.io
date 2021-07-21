import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SecondaryArgButtonsComponent } from "./secondary-arg-buttons.component";

describe("SecondaryArgButtonsComponent", () => {
  let component: SecondaryArgButtonsComponent;
  let fixture: ComponentFixture<SecondaryArgButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondaryArgButtonsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryArgButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
