import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  Argument,
  Command,
  CommandModule,
  Subcommand,
} from "src/app/schemas/Commands";
import { ACTIVE_SUBCMD_STYLE, INACTIVE_SUBCMD_STYLE } from "../../constants";

@Component({
  selector: "commands-ui-subcommand-buttons",
  templateUrl: "./subcommand-buttons.component.html",
  styleUrls: ["./subcommand-buttons.component.css"],
})
export class SubcommandButtonsComponent implements OnInit {
  inactiveStyle = INACTIVE_SUBCMD_STYLE;
  activeStyle = ACTIVE_SUBCMD_STYLE;
  @Input() subcommands: Subcommand[];
  @Input() activeSubcommand: Subcommand;
  @Output() activeSubcommandChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleActiveSubcommand(subcommand: Subcommand) {
    if (this.activeSubcommand === subcommand) this.activeSubcommand = null;
    else this.activeSubcommand = subcommand;
    this.activeSubcommandChange.emit(this.activeSubcommand);
  }

  isActive(subcommand: Subcommand) {
    return this.activeSubcommand ? subcommand === this.activeSubcommand : false;
  }
}
