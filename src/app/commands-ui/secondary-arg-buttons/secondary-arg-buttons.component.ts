import { trigger } from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { pairs, Subject } from "rxjs";
import {
  Argument,
  AttackArgument,
  AttackCategories,
  ClassTypes,
  Command,
  CommandModule,
  PrimaryArgument,
  SecondaryArgument,
  Subcommand,
  ValueType,
} from "src/app/schemas/Commands";
import { fadeInAnimation, fadeOutAnimation } from "../@animations";
import { CommandButton } from "../command-buttons/command-buttons.component";
import { SubcommandButton } from "../command-buttons/subcommand-buttons/subcommand-buttons.component";

export class SecondaryArgValuePair {
  arg: SecondaryArgument;
  value: string | boolean = null;
  index: number;
  active: boolean = false;
  activeChange = new Subject();
  constructor(arg: SecondaryArgument, index: number) {
    this.arg = arg;
    this.index = index;
  }
}

@Component({
  selector: "commands-ui-secondary-arg-buttons",
  templateUrl: "./secondary-arg-buttons.component.html",
  styleUrls: ["./secondary-arg-buttons.component.scss"],
  animations: [
    trigger("fadeIn", fadeInAnimation),
    trigger("fadeOut", fadeOutAnimation),
  ],
})
export class SecondaryArgButtonsComponent implements OnInit {
  command: Command | Subcommand;
  argValuePairs: SecondaryArgValuePair[];
  fadingIn: boolean;
  fadingOut: boolean;
  @Output() argValuePairsChange = new EventEmitter<SecondaryArgValuePair[]>();
  @Output() removeComponent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  setCommand(button: CommandButton | SubcommandButton) {
    //activate
    if (!this.command && button) {
      this.command = button.command;
      this.setArgs();
      this.fadeIn();
    }
    //deactivate
    else if (
      this.command &&
      (!button || button.command.secondaryArgs.length < 1)
    ) {
      //If primary args are activating while secondary are deactivating, just remove secondary immediately
      if (button?.command.primaryArgs.length > 0) {
        this.removeComponent.emit();
        return;
      }
      this.command = null;
      this.fadeOut();
    }
    //switch
    else if (button && this.command !== button.command) {
      this.command = button.command;
      this.setArgs();
      this.fadeIn();
    }
  }

  setArgs() {
    this.argValuePairs = [];
    let index = 0;
    for (const arg of this.command.secondaryArgs) {
      this.argValuePairs.push(new SecondaryArgValuePair(arg, index++));
    }
  }

  isFirstOfCategory(i: number): boolean {
    const pair = this.argValuePairs[i];
    if (!pair.arg.category) return false;
    if (i === 0) return true;
    const lastPair = this.argValuePairs[i - 1];
    if (pair.arg.category !== lastPair.arg.category) return true;
    return false;
  }

  emitArgs() {
    this.argValuePairsChange.emit(this.argValuePairs);
  }

  fadeIn() {
    this.fadingOut = false; //animation cancel
    this.fadingIn = true;
  }

  fadeOut() {
    this.fadingIn = false; //animation cancel
    this.fadingOut = true;
  }

  fadeInDone(fadeInWasSetToTrue: boolean) {
    if (!this.fadingIn) return; //animation has been cancelled
    if (fadeInWasSetToTrue) this.fadingIn = false;
  }

  fadeOutDone(fadeOutWasSetToTrue: boolean) {
    if (!this.fadingOut) return; //animation has been cancelled
    if (fadeOutWasSetToTrue) {
      this.fadingOut = false;
      this.removeComponent.emit();
    }
  }
}
