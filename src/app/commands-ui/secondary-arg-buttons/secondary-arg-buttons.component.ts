import { trigger } from "@angular/animations";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import {
  Command,
  SecondaryArgument,
  Subcommand,
} from "src/app/command-data/command-schema";
import { fadeInAnimation, fadeOutAnimation } from "../@animations";
import { CommandButton } from "../command-buttons/command-buttons.component";
import { SubcommandButton } from "../command-buttons/subcommand-buttons/subcommand-buttons.component";

export class SecondaryArgValuePair {
  arg: SecondaryArgument;
  value: string | boolean = null;
  active = false;
  activeChange = new Subject();
  repeated: boolean;
  constructor(arg: SecondaryArgument, repeated = false) {
    this.arg = arg;
    this.repeated = repeated;
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
    else if (this.command && !button) {
      this.command = null;
      this.fadeOut();
    }
    //switch
    else if (button && this.command !== button.command) {
      this.switchCommand(button);
    }
  }

  switchCommand(button: CommandButton | SubcommandButton) {
    //deactivate if new command has no secondary args
    if (button.command.secondaryArgs.length < 1) {
      //If primary args are activating while secondary are deactivating, just remove secondary immediately
      if (button.command.primaryArgs.length > 0) this.removeComponent.emit();
      else {
        this.command = null;
        this.fadeOut();
      }
      //else activate
    } else {
      this.command = button.command;
      this.setArgs();
      this.fadeIn();
    }
  }

  setArgs() {
    this.argValuePairs = [];
    for (const arg of this.command.secondaryArgs) {
      this.argValuePairs.push(new SecondaryArgValuePair(arg));
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

  getHeaderTooltip() {
    return (
      "Arguments (args) are pieces of information that a command will use. " +
      "Secondary args consist of a key (a unique identifier) and a value. " +
      "Click an arg to activate it, and provide a value if applicable. " +
      "Secondary args appear after primary args (if any). " +
      "Their order does not matter relative to other secondary args. "
    );
  }

  repeatArg(i: number) {
    const arg = this.argValuePairs[i].arg;
    this.argValuePairs.splice(i + 1, 0, new SecondaryArgValuePair(arg, true));
  }

  deleteArg(i: number) {
    this.argValuePairs.splice(i, 1);
  }
}
