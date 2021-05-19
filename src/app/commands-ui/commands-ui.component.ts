import { Component, Input, OnInit } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { environment } from "../../environments/environment";
import { COMMAND_MODULES } from "../command-data/CommandModules";
import { sortByName } from "./constants";
import {
  CommandModule,
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  Category,
  ValueType,
  Argument,
} from "../schemas/Commands";

@Component({
  selector: "avr-commands-ui",
  templateUrl: "./commands-ui.component.html",
  styleUrls: ["./commands-ui.component.scss"],
})
export class CommandsUiComponent implements OnInit {
  title = "Avrae Commands User Interface";
  description = "A user interface for constructing avrae commands";

  modules: CommandModule[] = COMMAND_MODULES;
  activeModule: CommandModule;
  activeCommand: Command;
  activeSubcommand: Subcommand;
  activePrimaryArgs: PrimaryArgument[] = [];
  activeSecondaryArgs: SecondaryArgument[] = [];

  constructor(private meta: Meta) {
    this.meta.updateTag({ name: "description", content: this.description });
    this.meta.updateTag({ property: "og:title", content: this.title });
    this.meta.updateTag({
      property: "og:description",
      content: this.description,
    });
    this.meta.updateTag({
      property: "og:url",
      content: `${environment.baseURL}/commands-ui`,
    });
  }

  ngOnInit(): void {}

  setActiveModule(module: CommandModule) {
    this.activeModule = module;
    this.activeCommand = null;
    this.activeSubcommand = null;
    this.activePrimaryArgs = [];
    this.activeSecondaryArgs = [];
  }

  setActiveCommand(command: Command) {
    this.activeCommand = command;
    this.activeSubcommand = null;
    this.activePrimaryArgs = this.getRequiredArgs();
    this.activeSecondaryArgs = [];
  }

  setActiveSubcommand(subcommand: Subcommand) {
    this.activeSubcommand = subcommand;
    this.activePrimaryArgs = this.getRequiredArgs();
    this.activeSecondaryArgs = [];
  }

  setActivePrimaryArgs(primaryArgs: PrimaryArgument[]) {
    this.activePrimaryArgs = primaryArgs;
    this.activeSecondaryArgs = [];
  }

  getModules(): CommandModule[] {
    return this.modules.sort(sortByName);
  }

  getCommands(): Command[] {
    return this.activeModule
      ? this.activeModule.commands.sort(sortByName)
      : null;
  }

  getPrimaryArguments(): PrimaryArgument[] {
    if (this.activeSubcommand)
      return this.activeSubcommand.primaryArgs.sort(sortByName);
    else if (this.activeCommand)
      return this.activeCommand.primaryArgs.sort(sortByName);
    else return [];
  }

  getRequiredArgs(): PrimaryArgument[] {
    let requiredArgs = [];
    for (let arg of this.getPrimaryArguments()) {
      if (arg.required) requiredArgs.push(arg);
    }
    return requiredArgs;
  }
}
