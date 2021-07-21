import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CommandsUiComponent } from "./commands-ui.component";

describe("CommandsUiComponent", () => {
  let component: CommandsUiComponent;
  let fixture: ComponentFixture<CommandsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommandsUiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
