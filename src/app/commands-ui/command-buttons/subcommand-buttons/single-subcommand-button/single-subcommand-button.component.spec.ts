import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SingleSubcommandButtonComponent } from "./single-subcommand-button.component";

describe("SingleSubcommandButtonComponent", () => {
  let component: SingleSubcommandButtonComponent;
  let fixture: ComponentFixture<SingleSubcommandButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleSubcommandButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSubcommandButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
