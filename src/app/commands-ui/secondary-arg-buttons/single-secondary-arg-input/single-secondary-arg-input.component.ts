import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ValueType } from "src/app/schemas/Commands";

@Component({
  selector: "commands-ui-single-secondary-arg-input",
  templateUrl: "./single-secondary-arg-input.component.html",
  styleUrls: ["./single-secondary-arg-input.component.css"],
})
export class SingleSecondaryArgInputComponent implements OnInit {
  @Input() isHeader = false;
  @Input() valueType: ValueType;
  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changeValue(value: string) {
    this.valueChange.emit(value);
  }

  isInputBox() {
    return (
      this.valueType === ValueType.STRING ||
      this.valueType === ValueType.NUMBER ||
      this.valueType === ValueType.TRUE
    );
  }

  isToggle() {
    return this.valueType === ValueType.BOOLEAN;
  }
}
