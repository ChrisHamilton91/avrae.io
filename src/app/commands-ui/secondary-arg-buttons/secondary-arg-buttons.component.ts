import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  Argument,
  AttackArgument,
  Category,
  ClassTypes,
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
    return pair.active ? "visible" : "hidden";
  }

  getInputOpacity(pair: SecondaryArgValuePair): string {
    return pair.active ? "1" : "0";
  }

  setArgValue(pair: SecondaryArgValuePair, value: string) {
    this.secondaryArgValuePairs[pair.index].value = value;
    this.secondaryArgValuePairsChange.emit(this.secondaryArgValuePairs);
  }

  areRegularSecondaryArgs(): boolean {
    return (
      this.secondaryArgValuePairs[0].arg.type === ClassTypes.SECONDARY_ARGUMENT
    );
  }

  areAttackArgs(): boolean {
    return (
      this.secondaryArgValuePairs[0].arg.type === ClassTypes.ATTACK_ARGUMENT ||
      this.secondaryArgValuePairs[0].arg.type === ClassTypes.TARGET_ARGUMENT
    );
  }

  getCategories(): Category[] {
    return Object.values(Category);
  }

  getAttackArgValuePairsByCategory(
    category: Category
  ): SecondaryArgValuePair[] {
    const attackArgValuePairs = [];
    for (const pair of this.secondaryArgValuePairs) {
      if ((pair.arg as AttackArgument).category === category)
        attackArgValuePairs.push(pair);
    }
    return attackArgValuePairs;
  }
}
