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
  @Input() primaryArgValuePairs: PrimaryArgValuePair[];
  @Output() primaryArgValuePairsChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleActivePrimaryArg(pair: PrimaryArgValuePair) {
    //Required arguments are always active
    if (pair.arg.required) return;
    this.primaryArgValuePairs[pair.index].active =
      !this.primaryArgValuePairs[pair.index].active;
    this.primaryArgValuePairsChange.emit(this.primaryArgValuePairs);
  }

  getInputVisibility(pair: PrimaryArgValuePair): string {
    return pair.active ? "visible" : "hidden";
  }

  getInputOpacity(pair: PrimaryArgValuePair): string {
    return pair.active ? "1" : "0";
  }

  setArgValue(pair: PrimaryArgValuePair, value: string) {
    this.primaryArgValuePairs[pair.index].value = value;
    this.primaryArgValuePairsChange.emit(this.primaryArgValuePairs);
  }
}
