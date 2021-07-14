import { trigger } from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import {
  Argument,
  Command,
  CommandModule,
  PrimaryArgument,
  Subcommand,
} from "src/app/schemas/Commands";
import { CommandButton } from "../command-buttons/command-buttons.component";
import { SubcommandButton } from "../command-buttons/subcommand-buttons/subcommand-buttons.component";
import { fadeInAnimation, fadeOutAnimation } from "../@animations";

export class PrimaryArgValuePair {
  arg: PrimaryArgument;
  value: string | boolean;
  active: boolean;
  activeChange = new Subject();
  constructor(arg: PrimaryArgument) {
    this.arg = arg;
    this.value = null;
    this.active = arg.required;
  }
}

@Component({
  selector: "commands-ui-primary-arg-buttons",
  templateUrl: "./primary-arg-buttons.component.html",
  styleUrls: ["./primary-arg-buttons.component.scss"],
  animations: [
    trigger("fadeIn", fadeInAnimation),
    trigger("fadeOut", fadeOutAnimation),
  ],
})
export class PrimaryArgButtonsComponent implements OnInit {
  command: Command | Subcommand;
  argValuePairs: PrimaryArgValuePair[];
  fadingIn: boolean;
  fadingOut: boolean;
  @Output() argValuePairsChange = new EventEmitter<PrimaryArgValuePair[]>();
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
    //deactivate if new command has no primary args
    if (button.command.primaryArgs.length < 1) {
      //If secondary args are activating while primary are deactivating, just remove primary immediately
      if (button.command.secondaryArgs.length > 0) this.removeComponent.emit();
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
    for (const arg of this.command.primaryArgs) {
      this.argValuePairs.push(new PrimaryArgValuePair(arg));
    }
  }

  getInputVisibility(pair: PrimaryArgValuePair): string {
    return pair.active ? "visible" : "hidden";
  }

  getInputOpacity(pair: PrimaryArgValuePair): string {
    return pair.active ? "1" : "0";
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

  getHeaderTooltip(): string {
    return (
      "Arguments (args) are pieces of information that a command will use. " +
      "Some primary args are required (red). " +
      "Click an optional arg (blue) to provide a value. " +
      "Primary args appear after commands and subcommands. " +
      "The order in which these args appear is important, so that Avrae does not get them mixed up. "
    );
  }
}
