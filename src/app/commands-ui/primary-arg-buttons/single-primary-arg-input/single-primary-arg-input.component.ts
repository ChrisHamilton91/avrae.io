import { trigger } from "@angular/animations";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { ValueType } from "src/app/command-data/command-schema";
import { visibilityAnimation } from "../../@animations";
import { commandsUiSettings } from "../../@settings";
import { PrimaryArgValuePair } from "../primary-arg-buttons.component";

@Component({
  selector: "commands-ui-single-primary-arg-input",
  templateUrl: "./single-primary-arg-input.component.html",
  styleUrls: ["./single-primary-arg-input.component.scss"],
  animations: [trigger("visibility", visibilityAnimation)],
})
export class SinglePrimaryArgInputComponent implements OnInit {
  @ViewChild("input") inputRef: ElementRef<HTMLInputElement>;
  @Input() argValuePair: PrimaryArgValuePair;
  @Output() valueChange = new EventEmitter();
  fadingIn: boolean;
  fadingOut: boolean;

  constructor() {}

  ngOnInit(): void {}

  getVisibilityState() {
    return this.argValuePair.active ? "visible" : "hidden";
  }

  changeValue(input: HTMLInputElement) {
    this.argValuePair.value = input.value;
    this.valueChange.emit();
  }

  isRequiredAndEmpty() {
    return (
      this.argValuePair.arg.required && !this.inputRef?.nativeElement.value
    );
  }

  hasDiceRollBuilder() {
    return this.argValuePair.arg.valueType === ValueType.DICE;
  }

  getTooltip(): string {
    if (!commandsUiSettings.tooltipsEnabled) return undefined;
    const type = this.argValuePair.arg.valueType;
    if (type === ValueType.NUMBER) {
      return "This input takes a numeric value. Many arguments also support equations and dice rolls. All whitespace will be trimmed automatically.";
    }
    if (type === ValueType.STRING) {
      return "This input takes a string value (text). If there is whitespace, the text will be surrounded in quotations automatically.";
    }
    if (type === ValueType.CODE) {
      return (
        "This input takes code as a value, such as other commands. " +
        "If you are making an alias, you can instead use the alias button above the output box, and build your command using buttons."
      );
    }
    if (type === ValueType.MULTILINE) {
      return (
        "This input takes a single command. Click the plus symbol to add more lines. " +
        "You can also use the multiline button above the output box to build each line using buttons."
      );
    }
  }
}
