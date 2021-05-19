import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  Argument,
  Command,
  CommandModule,
  Subcommand,
} from "src/app/schemas/Commands";
import { sortByName } from "../constants";

@Component({
  selector: "commands-ui-command-buttons",
  templateUrl: "./command-buttons.component.html",
  styleUrls: ["./command-buttons.component.css"],
})
export class CommandButtonsComponent implements OnInit {
  @Input() commands: Command[];
  @Input() activeCommand: Command;
  @Input() activeSubcommand: Subcommand;
  @Output() activeCommandChange = new EventEmitter();
  @Output() activeSubcommandChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleActiveCommand(command: Command) {
    if (this.activeCommand === command) this.activeCommand = null;
    else this.activeCommand = command;
    this.activeCommandChange.emit(this.activeCommand);
  }

  isActive(command: Command) {
    return this.activeCommand ? command === this.activeCommand : false;
  }

  setActiveSubcommand(subcommand: Subcommand) {
    this.activeSubcommand = subcommand;
    this.activeSubcommandChange.emit(subcommand);
  }

  getSubcommands(): Subcommand[] {
    if (this.activeCommand && this.activeCommand.subcommands.length != 0) {
      return this.activeCommand.subcommands.sort(sortByName);
    } else return null;
  }
}
