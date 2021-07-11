import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Command, PrimaryArgument } from "src/app/schemas/Commands";
import {
  ACTIVE_REQUIRED_ARG_STYLE,
  ACTIVE_OPTIONAL_ARG_STYLE,
  INACTIVE_OPTIONAL_ARG_STYLE,
} from "../../@globals";
import { PrimaryArgValuePair } from "../primary-arg-buttons.component";

@Component({
  selector: "commands-ui-single-primary-arg-button",
  templateUrl: "./single-primary-arg-button.component.html",
  styleUrls: ["./single-primary-arg-button.component.css"],
})
export class SinglePrimaryArgButtonComponent implements OnInit {
  @Input() argValuePair: PrimaryArgValuePair;
  @Input() activeRequiredStyle = ACTIVE_REQUIRED_ARG_STYLE;
  @Input() activeOptionalStyle = ACTIVE_OPTIONAL_ARG_STYLE;
  @Input() inactiveOptionalStyle = INACTIVE_OPTIONAL_ARG_STYLE;
  @Output() activeChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleActive() {
    if (this.argValuePair.arg.required) return;
    this.argValuePair.active = !this.argValuePair.active;
    this.argValuePair.activeChange.next();
    this.activeChange.emit();
  }

  getStyle() {
    if (this.argValuePair.arg.required) return this.activeRequiredStyle;
    return this.argValuePair.active
      ? this.activeOptionalStyle
      : this.inactiveOptionalStyle;
  }

  getTooltip(): string {
    return this.argValuePair.arg.desc;
  }
}
