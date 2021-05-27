import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  Argument,
  Command,
  CommandModule,
  PrimaryArgument,
  Subcommand,
} from "src/app/schemas/Commands";
import { PrimaryArgValuePair } from "../globals";

@Component({
  selector: "commands-ui-primary-arg-buttons",
  templateUrl: "./primary-arg-buttons.component.html",
  styleUrls: ["./primary-arg-buttons.component.css"],
})
export class PrimaryArgButtonsComponent implements OnInit {
  @Input() primaryArgs: PrimaryArgument[];
  @Input() activePrimaryArgs: PrimaryArgValuePair[] = [];
  @Output() activePrimaryArgsChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getIndex(primaryArg: PrimaryArgument) {
    //Index of primaryArgs coincides with activePrimaryArgs
    const index = this.primaryArgs.indexOf(primaryArg);
    if (index === -1)
      throw Error(`${primaryArg.name} is not in the array of primaryArgs!`);
    return index;
  }

  toggleActivePrimaryArg(primaryArg: PrimaryArgument) {
    //Required arguments are always active
    if (primaryArg.required) return;
    const index = this.getIndex(primaryArg);
    this.activePrimaryArgs[index].active =
      !this.activePrimaryArgs[index].active;
    this.activePrimaryArgsChange.emit(this.activePrimaryArgs);
  }

  isActive(primaryArg: PrimaryArgument): boolean {
    //Required arguments are always active
    if (primaryArg.required) return true;
    const index = this.getIndex(primaryArg);
    return this.activePrimaryArgs[index].active;
  }

  getInputVisibility(primaryArg: PrimaryArgument): string {
    return this.isActive(primaryArg) ? "visible" : "hidden";
  }

  getInputOpacity(primaryArg: PrimaryArgument): string {
    return this.isActive(primaryArg) ? "1" : "0";
  }

  setArgValue(primaryArg: PrimaryArgument, value: string) {
    if (!this.isActive(primaryArg))
      throw Error(
        `Tried to set value of ${primaryArg.name} but it is not active!`
      );
    for (const pair of this.activePrimaryArgs) {
      if (pair && pair.arg === primaryArg) pair.value = value;
    }
    this.activePrimaryArgsChange.emit(this.activePrimaryArgs);
  }
}
