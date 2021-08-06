import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SinglePrimaryArgButtonComponent } from "./single-primary-arg-button.component";

describe("SinglePrimaryArgButtonComponent", () => {
  let component: SinglePrimaryArgButtonComponent;
  let fixture: ComponentFixture<SinglePrimaryArgButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SinglePrimaryArgButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePrimaryArgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
