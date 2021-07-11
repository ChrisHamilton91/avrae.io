import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  ACTIVE_OPTIONAL_ARG_STYLE,
  INACTIVE_OPTIONAL_ARG_STYLE,
} from "../../@globals";
import { SecondaryArgValuePair } from "../secondary-arg-buttons.component";

@Component({
  selector: "commands-ui-single-secondary-arg-button",
  templateUrl: "./single-secondary-arg-button.component.html",
  styleUrls: ["./single-secondary-arg-button.component.css"],
})
export class SingleSecondaryArgButtonComponent implements OnInit {
  @Input() argValuePair: SecondaryArgValuePair;
  @Input() activeOptionalStyle = ACTIVE_OPTIONAL_ARG_STYLE;
  @Input() inactiveOptionalStyle = INACTIVE_OPTIONAL_ARG_STYLE;
  @Output() activeChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleActive() {
    this.argValuePair.active = !this.argValuePair.active;
    this.argValuePair.activeChange.next();
    this.activeChange.emit();
  }

  getStyle() {
    return this.argValuePair.active
      ? this.activeOptionalStyle
      : this.inactiveOptionalStyle;
  }

  getTooltip(): string {
    return this.argValuePair.arg.desc;
  }
}
