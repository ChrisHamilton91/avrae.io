import { Component, Input, OnInit } from "@angular/core";
import { Command, SecondaryArgument } from "src/app/schemas/Commands";
import {
  ACTIVE_OPTIONAL_ARG_STYLE,
  INACTIVE_OPTIONAL_ARG_STYLE,
} from "../../globals";

@Component({
  selector: "commands-ui-single-secondary-arg-button",
  templateUrl: "./single-secondary-arg-button.component.html",
  styleUrls: ["./single-secondary-arg-button.component.css"],
})
export class SingleSecondaryArgButtonComponent implements OnInit {
  @Input() secondaryArg: SecondaryArgument;
  @Input() active: boolean;
  @Input() activeOptionalStyle = ACTIVE_OPTIONAL_ARG_STYLE;
  @Input() inactiveOptionalStyle = INACTIVE_OPTIONAL_ARG_STYLE;

  constructor() {}

  ngOnInit(): void {}

  getStyle() {
    return this.active ? this.activeOptionalStyle : this.inactiveOptionalStyle;
  }

  getTooltip(): string {
    return this.secondaryArg.desc;
  }
}
