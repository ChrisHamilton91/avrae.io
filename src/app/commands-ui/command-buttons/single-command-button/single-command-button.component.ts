import { trigger } from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { ColorStates, defaultButtonColors } from "../../@animations";
import { CommandButton } from "../command-buttons.component";

@Component({
  selector: "commands-ui-single-command-button",
  templateUrl: "./single-command-button.component.html",
  styleUrls: ["./single-command-button.component.css"],
  animations: [trigger("color", defaultButtonColors)],
})
export class SingleCommandButtonComponent implements OnInit {
  @Input() button: CommandButton;

  constructor() {}

  ngOnInit(): void {
    this.button.activeChange.subscribe((setTo) => this.setActive(setTo));
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

  getColor() {
    return this.button.active ? ColorStates.ACTIVE : ColorStates.INACTIVE;
  }

  getTooltip(): string {
    return this.button.command.shortDesc;
  }
}
