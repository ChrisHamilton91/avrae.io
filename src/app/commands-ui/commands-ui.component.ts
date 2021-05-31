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
  ClassTypes,
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
  primaryArgValuePairs: PrimaryArgValuePair[] = [];
  secondaryArgValuePairs: SecondaryArgValuePair[] = [];

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

  getModules(): CommandModule[] {
    return this.modules.sort(sortByName);
  }

  getCommands(): Command[] {
    return this.activeModule
      ? this.activeModule.commands.sort(sortByName)
      : null;
  }

  getPrimaryArguments(): PrimaryArgument[] {
    if (this.activeSubcommand) return this.activeSubcommand.primaryArgs;
    else if (this.activeCommand) return this.activeCommand.primaryArgs;
    else return [];
  }

  getSecondaryArguments(): SecondaryArgument[] {
    if (this.activeSubcommand)
      return this.activeSubcommand.secondaryArgs.sort(sortByName);
    else if (this.activeCommand)
      return this.activeCommand.secondaryArgs.sort(sortByName);
    else return [];
  }

  setActiveModule(module: CommandModule) {
    this.activeModule = module;
    this.setActiveCommand(null);
  }

  setActiveCommand(command: Command) {
    this.activeCommand = command;
    this.setActiveSubcommand(null);
  }

  setActiveSubcommand(subcommand: Subcommand) {
    this.activeSubcommand = subcommand;
    this.primaryArgValuePairs = this.newPrimaryArgValuePairs();
    this.secondaryArgValuePairs = this.newSecondaryArgValuePairs();
  }

  setPrimaryArgValuePairs(primaryArgValuePairs: PrimaryArgValuePair[]) {
    this.primaryArgValuePairs = primaryArgValuePairs;
  }

  setSecondaryArgValuePairs(secondaryArgValuePairs: SecondaryArgValuePair[]) {
    this.secondaryArgValuePairs = secondaryArgValuePairs;
  }

  newPrimaryArgValuePairs(): PrimaryArgValuePair[] {
    const argValuePairs = [];
    this.getPrimaryArguments().forEach((arg, index) => {
      if (arg.required)
        argValuePairs.push(new PrimaryArgValuePair(arg, index, true));
      else argValuePairs.push(new PrimaryArgValuePair(arg, index, false));
    });
    return argValuePairs;
  }

  newSecondaryArgValuePairs(): SecondaryArgValuePair[] {
    const argValuePairs = [];
    this.getSecondaryArguments().forEach((arg, index) => {
      argValuePairs.push(new SecondaryArgValuePair(arg, index, false));
    });
    return argValuePairs;
  }

  arePrimaryArgs(): boolean {
    return this.primaryArgValuePairs.length > 0;
  }

  areSecondaryArgs(): boolean {
    return this.secondaryArgValuePairs.length > 0;
  }

  getCommandString(): string {
    let cmdString = this.prefix;
    if (!this.activeCommand) return cmdString;
    else cmdString += getShortest(this.activeCommand.cmdStrings);
    if (this.activeSubcommand)
      cmdString += " " + getShortest(this.activeSubcommand.cmdStrings);
    cmdString += this.getPrimaryArgsString();
    cmdString += this.getSecondaryArgsString();
    return cmdString;
  }

  getPrimaryArgsString(): string {
    let cmdString = "";
    for (const pair of this.primaryArgValuePairs) {
      //If one primary arg is left out, the next ones should not be added
      if (!pair.active) break;
      else {
        switch (pair.arg.valueType) {
          case ValueType.STRING:
            cmdString += this.getPrimaryArgStringOfTypeString(pair);
            break;
          case ValueType.NUMBER:
            cmdString += this.getPrimaryArgStringOfTypeNumber(pair);
            break;
          default:
            throw Error(
              `ValueType: ${
                ValueType[pair.arg.valueType]
              } not implemented in getPrimaryArgsString()!`
            );
        }
      }
    }
    return cmdString;
  }

  getPrimaryArgStringOfTypeString(pair: PrimaryArgValuePair): string {
    if (!pair.value) return "";
    let value = pair.value as string;
    if (value.includes(" ")) value = `"${value}"`;
    return " " + value;
  }

  getPrimaryArgStringOfTypeNumber(pair: PrimaryArgValuePair): string {
    if (!pair.value) return "";
    const value = (pair.value as string).replace(/\s/g, "");
    return " " + value;
  }

  getSecondaryArgsString(): string {
    let cmdString = "";
    for (const pair of this.secondaryArgValuePairs) {
      if (pair.active) {
        switch (pair.arg.valueType) {
          case ValueType.STRING:
            cmdString += this.getSecondaryArgStringOfTypeString(pair);
            break;
          case ValueType.NUMBER:
            cmdString += this.getSecondaryArgStringOfTypeNumber(pair);
            break;
          case ValueType.TRUE:
            cmdString += this.getSecondaryArgStringOfTypeTrue(pair);
            break;
          case ValueType.BOOLEAN:
            cmdString += this.getSecondaryArgStringOfTypeBoolean(pair);
            break;
          default:
            throw Error(
              `ValueType: ${
                ValueType[pair.arg.valueType]
              } not implemented in getSecondaryArgsString()!`
            );
        }
      }
    }
    return cmdString;
  }

  getSecondaryArgStringOfTypeString(pair: SecondaryArgValuePair): string {
    if (!pair.value) return "";
    let value = pair.value as string;
    let cmdString = " " + pair.arg.cmdString;
    if (value.includes(" ")) value = `"${value}"`;
    return cmdString + " " + value;
  }

  getSecondaryArgStringOfTypeNumber(pair: SecondaryArgValuePair): string {
    if (!pair.value) return "";
    const value = (pair.value as string).replace(/\s/g, "");
    return " " + pair.arg.cmdString + " " + value;
  }

  getSecondaryArgStringOfTypeTrue(pair: SecondaryArgValuePair): string {
    return " " + pair.arg.cmdString;
  }

  getSecondaryArgStringOfTypeBoolean(pair: SecondaryArgValuePair): string {
    return " " + pair.arg.cmdString + " " + pair.value;
  }
}
