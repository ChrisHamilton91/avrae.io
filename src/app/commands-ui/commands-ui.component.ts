import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { environment } from "../../environments/environment";
import { COMMAND_MODULES } from "../command-data/CommandModules";
import {
  getShortest,
  sortByName,
  PrimaryArgValuePair,
  SecondaryArgValuePair,
  fadeInAnimation,
  fadeOutAnimation,
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
import { trigger, AnimationEvent } from "@angular/animations";

@Component({
  selector: "avr-commands-ui",
  templateUrl: "./commands-ui.component.html",
  styleUrls: ["./commands-ui.component.scss"],
  animations: [
    trigger("fadeIn", fadeInAnimation),
    trigger("fadeOut", fadeOutAnimation),
  ],
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
  commandsFadingIn = false;
  commandsFadingOut = false;
  primaryArgsFadingIn = false;
  primaryArgsFadingOut = false;
  secondaryArgsFadingIn = false;
  secondaryArgsFadingOut = false;

  constructor(
    private meta: Meta,
    private changeDetectorRef: ChangeDetectorRef
  ) {
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

  //#region data getters
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
  //#endregion

  //#region data setters
  setActiveModule(module: CommandModule) {
    // If new module is non-null AND EITHER new module is different OR commands are currently fading out (ie. module will be null shortly))
    if (module) {
      if (module != this.activeModule || this.commandsFadingOut) {
        this.activeModule = module;
        this.commandsFadeInStart();
      }
    }
    // If module is changing to null AND wasn't null before AND commands are not currently fading out
    if (!module) {
      if (this.activeModule && !this.commandsFadingOut) {
        this.commandsFadeOutStart();
      }
    }
    this.setActiveCommand(null);
  }

  setActiveCommand(command: Command) {
    if (command) {
      if (
        command !== this.activeCommand ||
        this.primaryArgsFadingOut ||
        this.secondaryArgsFadingOut
      ) {
        this.activeCommand = command;
        if (command.primaryArgs.length > 0) this.primaryArgsFadeInStart();
        if (command.secondaryArgs.length > 0) this.secondaryArgsFadeInStart();
      }
    }
    if (!command) {
      if (
        this.activeCommand &&
        !this.primaryArgsFadingOut &&
        !this.secondaryArgsFadingOut
      ) {
        const arePrimaryArgs = this.activeCommand.primaryArgs.length > 0;
        const areSecondaryArgs = this.activeCommand.secondaryArgs.length > 0;
        if (arePrimaryArgs) this.primaryArgsFadeOutStart();
        if (areSecondaryArgs) this.secondaryArgsFadeOutStart();
        if (!(arePrimaryArgs || areSecondaryArgs)) this.activeCommand = null;
      }
    }
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
  //#endregion

  //#region state checks
  areCommands(): boolean {
    // Don't remove component until fade-out is done
    if (this.commandsFadingOut) return true;
    else return !!this.activeModule;
  }

  arePrimaryArgs(): boolean {
    // Don't remove component until fade-out is done
    if (this.primaryArgsFadingOut) return true;
    else return this.primaryArgValuePairs.length > 0;
  }

  areSecondaryArgs(): boolean {
    // Don't remove component until fade-out is done
    if (this.secondaryArgsFadingOut) return true;
    else return this.secondaryArgValuePairs.length > 0;
  }
  //#endregion

  //#region command string building
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
    // If there's a space, surround in quotes (unless they are already there)
    if (value.includes(" ") && !(value.startsWith('"') && value.endsWith('"')))
      value = `"${value}"`;
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
  //#endregion

  //#region fade animation behaviour
  // Intended behaviour:
  // Fade-in:
  //   Occurs when the component's root element is changed and will be non-null (ie. commands fade in when module is changed and non-null).
  //   Restarts from opacity: 0 if any fade animation is already in progress.
  //   Caveat: This requires extra logic if a fade-in animation is already happening.
  //   This is because angular does not think the animation state has changed.
  //   We need to change the animation state to false, force change detection, then re-trigger fade-in.
  // Fade out:
  //   Occurs when a component's root is set to null (ie. commands fade out when module is set to null).
  //   Caveat: root must be set to null AFTER the component fades out. Otherwise, sub-components will pop-out before animation completes.

  commandsFadeInStart() {
    this.commandsFadingOut = false;
    this.commandsFadingIn = false;
    this.changeDetectorRef.detectChanges();
    this.commandsFadingIn = true;
  }

  commandsFadeInDone(setToTrue: string) {
    if (setToTrue) this.commandsFadingIn = false;
  }

  commandsFadeOutStart() {
    this.commandsFadingOut = true;
  }

  commandsFadeOutDone(setToTrue: string) {
    // Animation has been cancelled
    if (!this.commandsFadingOut) return;
    if (setToTrue) {
      this.commandsFadingOut = false;
      this.activeModule = null;
    }
  }

  primaryArgsFadeInStart() {
    this.primaryArgsFadingIn = false;
    this.primaryArgsFadingOut = false;
    this.changeDetectorRef.detectChanges();
    this.primaryArgsFadingIn = true;
  }

  primaryArgsFadeInDone(setToTrue: string) {
    if (setToTrue) this.primaryArgsFadingIn = false;
  }

  primaryArgsFadeOutStart() {
    this.primaryArgsFadingOut = true;
  }

  primaryArgsFadeOutDone(setToTrue: string) {
    // Animation has been cancelled
    if (!this.primaryArgsFadingOut) return;
    if (setToTrue) {
      this.primaryArgsFadingOut = false;
      this.activeCommand = null;
    }
  }

  secondaryArgsFadeInStart() {
    this.secondaryArgsFadingIn = false;
    this.secondaryArgsFadingOut = false;
    this.changeDetectorRef.detectChanges();
    this.secondaryArgsFadingIn = true;
  }

  secondaryArgsFadeInDone(setToTrue: string) {
    if (setToTrue) this.secondaryArgsFadingIn = false;
  }

  secondaryArgsFadeOutStart() {
    this.secondaryArgsFadingOut = true;
  }

  secondaryArgsFadeOutDone(setToTrue: string) {
    // Animation has been cancelled
    if (!this.secondaryArgsFadingOut) return;
    if (setToTrue) {
      this.secondaryArgsFadingOut = false;
      this.activeCommand = null;
    }
  }
  //#endregion
}
