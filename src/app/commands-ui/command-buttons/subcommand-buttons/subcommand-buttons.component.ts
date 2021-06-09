import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Subcommand } from "src/app/schemas/Commands";
import { ACTIVE_SUBCMD_STYLE, INACTIVE_SUBCMD_STYLE } from "../../globals";

@Component({
  selector: "commands-ui-subcommand-buttons",
  templateUrl: "./subcommand-buttons.component.html",
  styleUrls: ["./subcommand-buttons.component.css"],
})
export class SubcommandButtonsComponent implements OnInit {
  @Input() subcommands: Subcommand[];
  @Input() activeSubcommand: Subcommand;
  @Output() activeSubcommandChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleActiveSubcommand(subcommand: Subcommand) {
    if (this.activeSubcommand === subcommand)
      this.activeSubcommandChange.emit(null);
    else this.activeSubcommandChange.emit(subcommand);
  }

  isActive(subcommand: Subcommand) {
    return this.activeSubcommand ? subcommand === this.activeSubcommand : false;
  }
}
