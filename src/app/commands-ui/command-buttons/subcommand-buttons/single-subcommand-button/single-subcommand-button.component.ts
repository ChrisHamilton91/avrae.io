import { AnimationEvent, trigger } from "@angular/animations";
import { Component, Input, OnInit, Output } from "@angular/core";
import {
  ColorStates,
  dropDownAnimation,
  shrinkUpAnimation,
  subcommandButtonColors,
} from "src/app/commands-ui/@animations";
import { commandsUiSettings } from "src/app/commands-ui/@settings";
import { getShortest } from "src/app/commands-ui/commands-ui.component";
import { CommandButton } from "../../command-buttons.component";
import { SubcommandButton } from "../subcommand-buttons.component";

@Component({
  selector: "commands-ui-single-subcommand-button",
  templateUrl: "./single-subcommand-button.component.html",
  styleUrls: ["./single-subcommand-button.component.scss"],
  animations: [
    trigger("color", subcommandButtonColors),
    trigger("grow", dropDownAnimation),
    trigger("shrink", shrinkUpAnimation),
  ],
})
export class SingleSubcommandButtonComponent implements OnInit {
  @Input() parentButton: CommandButton | SubcommandButton;
  @Input() button: SubcommandButton;
  growing: boolean;
  shrinking: boolean;

  constructor() {}

  ngOnInit(): void {
    this.parentButton.activeChange.subscribe((setTo) =>
      this.parentActiveChange(setTo)
    );
    this.button.activeChange.subscribe((setTo) => this.setActive(setTo));
    this.grow();
  }

  parentActiveChange(setTo: boolean) {
    //activate
    if (setTo) this.grow();
    //deactivate
    else {
      this.setActive(false);
      this.shrink();
    }
  }

  setActive(setTo: boolean) {
    //activate
    if (!this.button.active && setTo) {
      this.button.active = true;
      if (this.button.command.subcommands.length > 0) {
        this.button.subcommandCompExists = true;
      }
    }
    //deactivate
    else if (this.button.active && !setTo) this.button.active = false;
  }

  grow() {
    this.shrinking = false; //animation cancel
    this.growing = true;
  }

  shrink() {
    this.growing = false; //animation cancel
    this.shrinking = true;
  }

  growDone(growWasSetToTrue: boolean) {
    if (!this.growing) return; //animation has been cancelled
    if (growWasSetToTrue) this.growing = false;
  }

  shrinkDone(shrinkWasSetToTrue: boolean) {
    if (!this.shrinking) return; //animation has been cancelled
    if (shrinkWasSetToTrue) {
      this.shrinking = false;
      this.parentButton.subcommandCompExists = false;
    }
  }

  getLabel() {
    if (commandsUiSettings.getShowCommandStrings())
      return getShortest(this.button.command.cmdStrings);
    return this.button.command.name;
  }

  getColor() {
    return this.button.active ? ColorStates.ACTIVE : ColorStates.INACTIVE;
  }

  getTooltip(): string {
    if (!commandsUiSettings.getEnableTooltips()) return undefined;
    let result = this.button.command.shortDesc + " [";
    const cmdStrings = this.button.command.cmdStrings;
    cmdStrings.forEach((cmd, i) => {
      result += " " + cmd;
      if (i < cmdStrings.length - 1) result += ",";
    });
    result += " ]";
    return result;
  }
}
