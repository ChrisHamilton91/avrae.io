import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SingleModuleButtonComponent } from "./single-module-button.component";

describe("SingleModuleButtonComponent", () => {
  let component: SingleModuleButtonComponent;
  let fixture: ComponentFixture<SingleModuleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleModuleButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleModuleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
