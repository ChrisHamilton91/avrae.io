import { Component, Input, OnInit } from "@angular/core";
import { Command } from "src/app/schemas/Commands";
import { DEFAULT_ACTIVE_STYLE, DEFAULT_INACTIVE_STYLE } from "../../globals";

@Component({
  selector: "commands-ui-single-command-button",
  templateUrl: "./single-command-button.component.html",
  styleUrls: ["./single-command-button.component.css"],
})
export class SingleCommandButtonComponent implements OnInit {
  @Input() command: Command;
  @Input() active: boolean;
  @Input() activeStyle = DEFAULT_ACTIVE_STYLE;
  @Input() inactiveStyle = DEFAULT_INACTIVE_STYLE;

  constructor() {}

  ngOnInit(): void {}

  getStyle() {
    return this.active ? this.activeStyle : this.inactiveStyle;
  }

  getTooltip(): string {
    return this.command.shortDesc;
  }
}
