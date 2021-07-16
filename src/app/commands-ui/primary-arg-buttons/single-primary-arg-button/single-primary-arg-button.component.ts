import { trigger } from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ColorStates, primaryArgColors } from "../../@animations";
import { commandsUiSettings } from "../../@settings";
import { PrimaryArgValuePair } from "../primary-arg-buttons.component";

@Component({
  selector: "commands-ui-single-primary-arg-button",
  templateUrl: "./single-primary-arg-button.component.html",
  styleUrls: ["./single-primary-arg-button.component.scss"],
  animations: [trigger("color", primaryArgColors)],
})
export class SinglePrimaryArgButtonComponent implements OnInit {
  @Input() argValuePair: PrimaryArgValuePair;
  @Output() activeChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleActive() {
    if (this.argValuePair.arg.required) return;
    this.argValuePair.active = !this.argValuePair.active;
    this.argValuePair.activeChange.next();
    this.activeChange.emit();
  }

  getLabel() {
    if (commandsUiSettings.getShowCommandStrings())
      return this.argValuePair.arg.signature;
    return this.argValuePair.arg.name;
  }

  getColor() {
    if (this.argValuePair.arg.required) return ColorStates.REQUIRED;
    return this.argValuePair.active ? ColorStates.ACTIVE : ColorStates.INACTIVE;
  }

  getTooltip(): string {
    if (!commandsUiSettings.getEnableTooltips()) return undefined;
    return this.argValuePair.arg.desc;
  }
}
