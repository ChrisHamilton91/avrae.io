import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { COMMAND_MODULES } from "../command-data/command-modules";
import {
  CommandModule,
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategories,
  ValueType,
  Argument,
  ClassTypes,
} from "../schemas/Commands";
import {
  CommandButton,
  CommandButtonsComponent,
} from "./command-buttons/command-buttons.component";
import {
  PrimaryArgButtonsComponent,
  PrimaryArgValuePair,
} from "./primary-arg-buttons/primary-arg-buttons.component";
import {
  SecondaryArgButtonsComponent,
  SecondaryArgValuePair,
} from "./secondary-arg-buttons/secondary-arg-buttons.component";
import { SubcommandButton } from "./command-buttons/subcommand-buttons/subcommand-buttons.component";
import { commandsUiSettings } from "./@settings";

@Component({
  selector: "avr-commands-ui",
  templateUrl: "./commands-ui.component.html",
  styleUrls: ["./commands-ui.component.scss"],
})
export class CommandsUiComponent implements OnInit {
  @ViewChild(CommandButtonsComponent)
  commandComponent: CommandButtonsComponent;
  @ViewChild(PrimaryArgButtonsComponent)
  primaryArgComponent: PrimaryArgButtonsComponent;
  @ViewChild(SecondaryArgButtonsComponent)
  secondaryArgComponent: SecondaryArgButtonsComponent;

  title = "Avrae Commands User Interface";
  description = "A user interface for constructing avrae commands";

  modules: CommandModule[] = COMMAND_MODULES;
  commandComponentExists: boolean;
  primaryArgCompExists: boolean;
  secondaryArgCompExists: boolean;
  commandStack: (Command | Subcommand)[] = [];
  primaryArgValuePairs: PrimaryArgValuePair[] = [];
  secondaryArgValuePairs: SecondaryArgValuePair[] = [];

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
      content: "",
    });
  }

  ngOnInit(): void {}

  //#region setters
  setModule(module: CommandModule) {
    if (!this.commandComponentExists && module) {
      this.commandComponentExists = true;
      this.changeDetectorRef.detectChanges();
    }
    this.setCommand(null);
    this.commandComponent.setModule(module);
  }

  setCommand(button: CommandButton | SubcommandButton) {
    if (button) {
      if (!this.primaryArgCompExists && button.command.primaryArgs.length > 0) {
        this.primaryArgCompExists = true;
        this.changeDetectorRef.detectChanges();
      }
      if (
        !this.secondaryArgCompExists &&
        button.command.secondaryArgs.length > 0
      ) {
        this.secondaryArgCompExists = true;
        this.changeDetectorRef.detectChanges();
      }
    }
    this.primaryArgValuePairs = [];
    this.secondaryArgValuePairs = [];
    this.primaryArgComponent?.setCommand(button);
    this.secondaryArgComponent?.setCommand(button);
    this.setCommandStack(button);
  }

  setCommandStack(button: CommandButton | SubcommandButton) {
    this.commandStack = [];
    if (button) {
      while (button instanceof SubcommandButton) {
        this.commandStack.push(button.command);
        button = button.parentButton;
      }
      this.commandStack.push(button.command);
    }
  }
  //#endregion

  //#region output string building
  getCommandString(): string {
    let cmdString = commandsUiSettings.getPrefix();
    if (this.commandStack.length === 0) return cmdString;
    const lastIndex = this.commandStack.length - 1;
    cmdString += this.getShortest(this.commandStack[lastIndex].cmdStrings);
    for (let i = lastIndex - 1; i >= 0; i--) {
      cmdString += " " + this.getShortest(this.commandStack[i].cmdStrings);
    }
    cmdString += this.getPrimaryArgsString();
    cmdString += this.getSecondaryArgsString();
    return cmdString;
  }

  getShortest(array: string[]): string {
    if (array.length == 0) throw Error("There are no items in the array!");
    let shortest = array[0];
    for (let item of array) {
      if (item.length < shortest.length) shortest = item;
    }
    return shortest;
  }

  getPrimaryArgsString(): string {
    let cmdString = "";
    for (const pair of this.primaryArgValuePairs) {
      switch (pair.arg.valueType) {
        case ValueType.STRING:
          cmdString += this.getPrimaryArgStringOfTypeString(pair);
          break;
        case ValueType.NUMBER:
          cmdString += this.getPrimaryArgStringOfTypeNumber(pair);
          break;
        case ValueType.TRUE:
          cmdString += this.getPrimaryArgStringOfTypeTrue(pair);
          break;
        default:
          throw Error(
            `ValueType: ${
              ValueType[pair.arg.valueType]
            } not implemented in getPrimaryArgsString()!`
          );
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

  getPrimaryArgStringOfTypeTrue(pair: PrimaryArgValuePair): string {
    return " " + pair.arg.signature;
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
}
