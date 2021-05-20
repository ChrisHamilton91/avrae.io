import { Component, Input, OnInit } from "@angular/core";
import { Command, PrimaryArgument } from "src/app/schemas/Commands";
import {
  ACTIVE_REQUIRED_ARG_STYLE,
  ACTIVE_OPTIONAL_ARG_STYLE,
  INACTIVE_OPTIONAL_ARG_STYLE,
} from "../../globals";

@Component({
  selector: "commands-ui-single-primary-arg-button",
  templateUrl: "./single-primary-arg-button.component.html",
  styleUrls: ["./single-primary-arg-button.component.css"],
})
export class SinglePrimaryArgButtonComponent implements OnInit {
  @Input() primaryArg: PrimaryArgument;
  @Input() active: boolean;
  @Input() activeRequiredStyle = ACTIVE_REQUIRED_ARG_STYLE;
  @Input() activeOptionalStyle = ACTIVE_OPTIONAL_ARG_STYLE;
  @Input() inactiveOptionalStyle = INACTIVE_OPTIONAL_ARG_STYLE;

  constructor() {}

  ngOnInit(): void {}

  getStyle() {
    if (this.primaryArg.required) return this.activeRequiredStyle;
    return this.active ? this.activeOptionalStyle : this.inactiveOptionalStyle;
  }

  getTooltip(): string {
    return this.primaryArg.desc;
  }
}
