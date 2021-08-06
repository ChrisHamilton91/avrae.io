import { trigger } from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ValueType } from "src/app/schemas/Commands";
import { visibilityAnimation } from "../../@animations";
import { SecondaryArgValuePair } from "../secondary-arg-buttons.component";

@Component({
  selector: "commands-ui-single-secondary-arg-input",
  templateUrl: "./single-secondary-arg-input.component.html",
  styleUrls: ["./single-secondary-arg-input.component.css"],
  animations: [trigger("visibility", visibilityAnimation)],
})
export class SingleSecondaryArgInputComponent implements OnInit {
  @Input() argValuePair: SecondaryArgValuePair;
  @Input() permaHidden: boolean;
  @Input() valueType: ValueType;
  @Output() valueChange = new EventEmitter();
  fadingIn: boolean;
  fadingOut: boolean;

  constructor() {}

  ngOnInit(): void {
    if (this.permaHidden) return; // For hidden inputs next to headers
    this.valueType = this.argValuePair.arg.valueType;
    this.permaHidden = this.valueType === ValueType.TRUE;
  }

  getVisibilityState() {
    return this.argValuePair.active ? "visible" : "hidden";
  }

  isInputBox() {
    return (
      this.valueType === ValueType.STRING || this.valueType === ValueType.NUMBER
    );
  }

  isToggle() {
    return this.valueType === ValueType.BOOLEAN;
  }
}
