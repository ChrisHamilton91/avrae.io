import { trigger } from "@angular/animations";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { Command, CommandModule } from "src/app/command-data/command-schema";
import { fadeInAnimation, fadeOutAnimation } from "../@animations";
import { SubcommandButton } from "./subcommand-buttons/subcommand-buttons.component";

export class CommandButton {
  command: Command;
  active = false;
  activeChange = new Subject<boolean>();
  subcommandCompExists = false;
  constructor(command: Command) {
    this.command = command;
  }
}

@Component({
  selector: "commands-ui-command-buttons",
  templateUrl: "./command-buttons.component.html",
  styleUrls: ["./command-buttons.component.scss"],
  animations: [
    trigger("fadeIn", fadeInAnimation),
    trigger("fadeOut", fadeOutAnimation),
  ],
})
export class CommandButtonsComponent implements OnInit {
  module: CommandModule;
  commandButtons: CommandButton[];
  activeButton: CommandButton;
  fadingIn: boolean;
  fadingOut: boolean;
  @Output() commandChange = new EventEmitter<
    CommandButton | SubcommandButton
  >();
  @Output() removeComponent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  setModule(module: CommandModule) {
    //activate
    if (!this.module && module) {
      this.module = module;
      this.setCommands();
      this.fadeIn();
    }
    //deactivate
    else if (this.module && !module) {
      this.module = null;
      this.fadeOut();
    }
    //switch
    else if (module && this.module !== module) {
      this.module = module;
      this.setCommands();
      this.fadeIn();
    }
  }

  setCommands() {
    this.commandButtons = [];
    for (const command of this.module.commands) {
      this.commandButtons.push(new CommandButton(command));
    }
  }

  toggleActive(button: CommandButton) {
    //activate
    if (!this.activeButton) {
      button.activeChange.next(true);
      this.activeButton = button;
    }
    //deactivate
    else if (this.activeButton === button) {
      this.activeButton.activeChange.next(false);
      this.activeButton = null;
    }
    //switch
    else {
      this.activeButton.activeChange.next(false);
      button.activeChange.next(true);
      this.activeButton = button;
    }
    this.commandChange.emit(this.activeButton);
  }

  setActiveButton(button: CommandButton | SubcommandButton) {
    this.commandChange.emit(button);
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
      "Commands tell Avrae what function to perform. " +
      "Subcommands can also appear after another command. " +
      "Click on a command to reveal its subcommands and arguments, if any."
    );
  }
}
