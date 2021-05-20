import { Component, Input, OnInit } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { environment } from "../../environments/environment";
import { COMMAND_MODULES } from "../command-data/CommandModules";
import {
  getShortest,
  sortByName,
  PrimaryArgValuePair,
  SecondaryArgValuePair,
} from "./globals";
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

  prefix = "!";
  modules: CommandModule[] = COMMAND_MODULES;
  activeModule: CommandModule;
  activeCommand: Command;
  activeSubcommand: Subcommand;
  /**
   * An array of primary argument - value pairs.
   * The indexes co-incide with those of the command's primaryArgs array.
   * If the element at the corresponding index is defined, the argument is active.
   * If the element is undefined, it is inactive
   * */
  activePrimaryArgs: PrimaryArgValuePair[] = [];
  activeSecondaryArgs: SecondaryArgValuePair[] = [];

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
    this.activePrimaryArgs = this.newActivePrimaryArgs();
    this.activeSecondaryArgs = [];
  }

  setActiveSubcommand(subcommand: Subcommand) {
    this.activeSubcommand = subcommand;
    this.activePrimaryArgs = this.newActivePrimaryArgs();
    this.activeSecondaryArgs = [];
  }

  setActivePrimaryArgs(primaryArgValuePairs: PrimaryArgValuePair[]) {
    this.activePrimaryArgs = primaryArgValuePairs;
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

  newActivePrimaryArgs(): PrimaryArgValuePair[] {
    let activeArgs = [];
    for (let arg of this.getPrimaryArguments()) {
      if (arg.required) activeArgs.push(new PrimaryArgValuePair(arg));
      else activeArgs.push(undefined);
    }
    return activeArgs;
  }

  getCommandString(): string {
    let cmdString = this.prefix;

    if (!this.activeCommand) return cmdString;
    else cmdString += getShortest(this.activeCommand.cmdStrings);

    if (this.activeSubcommand)
      cmdString += " " + getShortest(this.activeSubcommand.cmdStrings);

    cmdString += this.getPrimaryArgsString();
    // cmdString += this.getSecondaryArgsString();
    return cmdString;
  }

  getPrimaryArgsString(): string {
    if (this.activePrimaryArgs.length == 0) return "";
    let cmdString = "";
    for (let pair of this.activePrimaryArgs) {
      if (pair && pair.value) cmdString += " " + pair.value;
    }
    return cmdString;
  }
}
