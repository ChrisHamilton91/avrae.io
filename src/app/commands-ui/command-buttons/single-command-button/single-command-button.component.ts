import { Component, Input, OnInit } from "@angular/core";
import { DEFAULT_ACTIVE_STYLE, DEFAULT_INACTIVE_STYLE } from "../../@globals";
import { CommandButton } from "../command-buttons.component";

@Component({
  selector: "commands-ui-single-command-button",
  templateUrl: "./single-command-button.component.html",
  styleUrls: ["./single-command-button.component.css"],
})
export class SingleCommandButtonComponent implements OnInit {
  @Input() button: CommandButton;
  @Input() activeStyle = DEFAULT_ACTIVE_STYLE;
  @Input() inactiveStyle = DEFAULT_INACTIVE_STYLE;

  constructor() {}

  ngOnInit(): void {
    this.button.activeChange.subscribe((setTo) => this.setActive(setTo));
  }

  setActive(setTo: boolean) {
    //activate
    if (!this.button.active && setTo) {
      this.button.active = true;
      if (this.button.command.subcommands.length > 0) {
        this.button.subcommandCompExists = true;
      }
    }
    //deactivate
    else if (this.button.active && !setTo) this.button.active = false;
  }

  getStyle() {
    return this.button.active ? this.activeStyle : this.inactiveStyle;
  }

  getTooltip(): string {
    return this.button.command.shortDesc;
  }
}
