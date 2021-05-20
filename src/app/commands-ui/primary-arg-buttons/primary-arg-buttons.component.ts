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

  toggleActivePrimaryArg(primaryArg: PrimaryArgument) {
    //Required arguments are always active
    if (primaryArg.required) return;
    let removed = false;
    //Check if arg is in active args array, remove if so
    this.activePrimaryArgs.forEach((item, index, array) => {
      if (item && item.arg === primaryArg) {
        delete array[index];
        removed = true;
      }
    });
    if (!removed)
      this.activePrimaryArgs.push(new PrimaryArgValuePair(primaryArg));
    this.activePrimaryArgsChange.emit(this.activePrimaryArgs);
  }

  isActive(primaryArg: PrimaryArgument): boolean {
    //Required arguments are always active
    if (primaryArg.required) return true;
    //Check if arg is in active args array
    for (let pair of this.activePrimaryArgs) {
      if (pair && pair.arg === primaryArg) return true;
    }
    return false;
  }
}
