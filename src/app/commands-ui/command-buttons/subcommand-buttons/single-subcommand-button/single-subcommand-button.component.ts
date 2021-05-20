import { Component, Input, OnInit } from "@angular/core";
import { Subcommand } from "src/app/schemas/Commands";
import { ACTIVE_SUBCMD_STYLE, INACTIVE_SUBCMD_STYLE } from "../../../globals";

@Component({
  selector: "commands-ui-single-subcommand-button",
  templateUrl: "./single-subcommand-button.component.html",
  styleUrls: ["./single-subcommand-button.component.css"],
})
export class SingleSubcommandButtonComponent implements OnInit {
  @Input() subcommand: Subcommand;
  @Input() active: boolean;
  @Input() activeStyle = ACTIVE_SUBCMD_STYLE;
  @Input() inactiveStyle = INACTIVE_SUBCMD_STYLE;

  constructor() {}

  ngOnInit(): void {}

  getStyle() {
    return this.active ? this.activeStyle : this.inactiveStyle;
  }

  getTooltip(): string {
    return this.subcommand.shortDesc;
  }
}
