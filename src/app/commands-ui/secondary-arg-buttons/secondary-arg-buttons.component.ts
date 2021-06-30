import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { pairs } from "rxjs";
import {
  Argument,
  AttackArgument,
  AttackCategories,
  ClassTypes,
  Command,
  CommandModule,
  PrimaryArgument,
  SecondaryArgument,
  Subcommand,
  ValueType,
} from "src/app/schemas/Commands";
import { SecondaryArgValuePair } from "../globals";

@Component({
  selector: "commands-ui-secondary-arg-buttons",
  templateUrl: "./secondary-arg-buttons.component.html",
  styleUrls: ["./secondary-arg-buttons.component.css"],
})
export class SecondaryArgButtonsComponent implements OnInit {
  @Input() secondaryArgValuePairs: SecondaryArgValuePair[];
  @Output() secondaryArgValuePairsChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleActiveSecondaryArg(pair: SecondaryArgValuePair) {
    this.secondaryArgValuePairs[pair.index].active =
      !this.secondaryArgValuePairs[pair.index].active;
    this.secondaryArgValuePairsChange.emit(this.secondaryArgValuePairs);
  }

  getInputVisibility(pair: SecondaryArgValuePair): string {
    if (pair.arg.valueType === ValueType.TRUE) return "hidden";
    else return pair.active ? "visible" : "hidden";
  }

  getInputOpacity(pair: SecondaryArgValuePair): string {
    return pair.active ? "1" : "0";
  }

  setArgValue(pair: SecondaryArgValuePair, value: string) {
    this.secondaryArgValuePairs[pair.index].value = value;
    this.secondaryArgValuePairsChange.emit(this.secondaryArgValuePairs);
  }

  isFirstOfCategory(i: number): boolean {
    const pair = this.secondaryArgValuePairs[i];
    if (!pair.arg.category) return false;
    if (i === 0) return true;
    const lastPair = this.secondaryArgValuePairs[i - 1];
    if (pair.arg.category !== lastPair.arg.category) return true;
    return false;
  }
}
