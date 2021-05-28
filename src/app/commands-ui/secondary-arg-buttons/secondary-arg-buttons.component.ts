import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  Argument,
  Command,
  CommandModule,
  PrimaryArgument,
  SecondaryArgument,
  Subcommand,
} from "src/app/schemas/Commands";
import { SecondaryArgValuePair } from "../globals";

@Component({
  selector: "commands-ui-secondary-arg-buttons",
  templateUrl: "./secondary-arg-buttons.component.html",
  styleUrls: ["./secondary-arg-buttons.component.css"],
})
export class SecondaryArgButtonsComponent implements OnInit {
  @Input() secondaryArgs: SecondaryArgument[];
  @Input() activeSecondaryArgs: SecondaryArgValuePair[];
  @Output() activeSecondaryArgsChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getIndex(secondaryArg: SecondaryArgument) {
    //Index of secondaryArgs coincides with activeSecondaryArgs
    const index = this.secondaryArgs.indexOf(secondaryArg);
    if (index === -1)
      throw Error(`${secondaryArg.name} is not in the array of secondaryArgs!`);
    return index;
  }

  toggleActiveSecondaryArg(secondaryArg: SecondaryArgument) {
    const index = this.getIndex(secondaryArg);
    this.activeSecondaryArgs[index].active =
      !this.activeSecondaryArgs[index].active;
    this.activeSecondaryArgsChange.emit(this.activeSecondaryArgs);
  }

  isActive(secondaryArg: SecondaryArgument): boolean {
    const index = this.getIndex(secondaryArg);
    return this.activeSecondaryArgs[index].active;
  }

  getInputVisibility(secondaryArg: SecondaryArgument): string {
    return this.isActive(secondaryArg) ? "visible" : "hidden";
  }

  getInputOpacity(secondaryArg: SecondaryArgument): string {
    return this.isActive(secondaryArg) ? "1" : "0";
  }

  setArgValue(secondaryArg: SecondaryArgument, value: string) {
    if (!this.isActive(secondaryArg))
      throw Error(
        `Tried to set value of ${secondaryArg.name} but it is not active!`
      );
    for (const pair of this.activeSecondaryArgs) {
      if (pair && pair.arg === secondaryArg) pair.value = value;
    }
    this.activeSecondaryArgsChange.emit(this.activeSecondaryArgs);
  }
}
