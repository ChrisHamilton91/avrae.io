import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SingleCommandButtonComponent } from "./single-command-button.component";

describe("SingleCommandButtonComponent", () => {
  let component: SingleCommandButtonComponent;
  let fixture: ComponentFixture<SingleCommandButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleCommandButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCommandButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
