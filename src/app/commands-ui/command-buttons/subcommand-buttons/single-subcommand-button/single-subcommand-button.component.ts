import { AnimationEvent, trigger } from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  dropDownAnimation,
  shrinkUpAnimation,
} from "src/app/commands-ui/@animations";
import { Subcommand } from "src/app/schemas/Commands";
import { ACTIVE_SUBCMD_STYLE, INACTIVE_SUBCMD_STYLE } from "../../../globals";
import { CommandButton } from "../../command-buttons.component";
import { SubcommandButton } from "../subcommand-buttons.component";

@Component({
  selector: "commands-ui-single-subcommand-button",
  templateUrl: "./single-subcommand-button.component.html",
  styleUrls: ["./single-subcommand-button.component.css"],
  animations: [
    trigger("grow", dropDownAnimation),
    trigger("shrink", shrinkUpAnimation),
  ],
})
export class SingleSubcommandButtonComponent implements OnInit {
  @Input() parentButton: CommandButton | SubcommandButton;
  @Input() button: SubcommandButton;
  @Input() activeStyle = ACTIVE_SUBCMD_STYLE;
  @Input() inactiveStyle = INACTIVE_SUBCMD_STYLE;
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

  getStyle() {
    return this.button.active ? this.activeStyle : this.inactiveStyle;
  }

  getTooltip(): string {
    return this.button.command.shortDesc;
  }
}
