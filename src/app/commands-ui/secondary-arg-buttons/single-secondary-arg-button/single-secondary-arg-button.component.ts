import { trigger } from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ColorStates, defaultButtonColors } from "../../@animations";
import { SecondaryArgValuePair } from "../secondary-arg-buttons.component";

@Component({
  selector: "commands-ui-single-secondary-arg-button",
  templateUrl: "./single-secondary-arg-button.component.html",
  styleUrls: ["./single-secondary-arg-button.component.css"],
  animations: [trigger("color", defaultButtonColors)],
})
export class SingleSecondaryArgButtonComponent implements OnInit {
  @Input() argValuePair: SecondaryArgValuePair;
  @Output() activeChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleActive() {
    this.argValuePair.active = !this.argValuePair.active;
    this.argValuePair.activeChange.next();
    this.activeChange.emit();
  }

  getColor() {
    return this.argValuePair.active ? ColorStates.ACTIVE : ColorStates.INACTIVE;
  }

  getTooltip(): string {
    return (
      this.argValuePair.arg.desc + ` [ ${this.argValuePair.arg.cmdString} ]`
    );
  }
}
