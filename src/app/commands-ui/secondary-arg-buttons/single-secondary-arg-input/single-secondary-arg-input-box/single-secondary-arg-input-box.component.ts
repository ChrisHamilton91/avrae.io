import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ValueType } from "src/app/schemas/Commands";
import { SecondaryArgValuePair } from "../../secondary-arg-buttons.component";

@Component({
  selector: "commands-ui-single-secondary-arg-input-box",
  templateUrl: "./single-secondary-arg-input-box.component.html",
  styleUrls: ["./single-secondary-arg-input-box.component.css"],
})
export class SingleSecondaryArgInputBoxComponent implements OnInit {
  @Input() argValuePair: SecondaryArgValuePair;
  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changeValue(input: HTMLInputElement) {
    this.argValuePair.value = input.value;
    this.valueChange.emit();
  }

  getTooltip(): string {
    const type = this.argValuePair.arg.valueType;
    if (type === ValueType.NUMBER) {
      return "This input takes a numeric value. Many arguments also support equations and dice rolls. All whitespace will be trimmed automatically.";
    }
    if (type === ValueType.STRING) {
      return "This input takes a string value (text). If there is whitespace, the text will be surrounded in quotations automatically.";
    }
  }
}
