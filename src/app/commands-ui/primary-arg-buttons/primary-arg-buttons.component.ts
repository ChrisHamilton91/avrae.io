import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  Argument,
  Command,
  CommandModule,
  PrimaryArgument,
  Subcommand,
} from "src/app/schemas/Commands";
import {
  ACTIVE_REQUIRED_ARG_STYLE,
  ACTIVE_OPTIONAL_ARG_STYLE,
  INACTIVE_OPTIONAL_ARG_STYLE,
} from "../constants";

@Component({
  selector: "commands-ui-primary-arg-buttons",
  templateUrl: "./primary-arg-buttons.component.html",
  styleUrls: ["./primary-arg-buttons.component.css"],
})
export class PrimaryArgButtonsComponent implements OnInit {
  activeRequiredArgStyle = ACTIVE_REQUIRED_ARG_STYLE;
  activeOptionalArgStyle = ACTIVE_OPTIONAL_ARG_STYLE;
  inactiveOptionalArgStyle = INACTIVE_OPTIONAL_ARG_STYLE;
  @Input() primaryArgs: PrimaryArgument[];
  //Only for optional args
  @Input() activePrimaryArgs: PrimaryArgument[] = [];
  @Output() activePrimaryArgsChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleActivePrimaryArg(primaryArg: PrimaryArgument) {
    //Required arguments are always active
    if (primaryArg.required) return;
    let removed = false;
    this.activePrimaryArgs.forEach((item, index, array) => {
      if (item === primaryArg) {
        array.splice(index, 1);
        removed = true;
      }
    });
    if (!removed) this.activePrimaryArgs.push(primaryArg);
    this.activePrimaryArgsChange.emit(this.activePrimaryArgs);
  }

  isActive(primaryArg: PrimaryArgument): boolean {
    //Required arguments are always active
    if (primaryArg.required) return true;
    else return this.activePrimaryArgs.includes(primaryArg);
  }

  getActiveStyle(primaryArg: PrimaryArgument): string {
    if (primaryArg.required) return this.activeRequiredArgStyle;
    else return this.activeOptionalArgStyle;
  }
}
