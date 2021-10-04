import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

type Operator = {
  name: string;
  cmdString: string;
};

const operators: Operator[] = [
  { name: "keep", cmdString: "k" },
  { name: "drop", cmdString: "p" },
  { name: "reroll on", cmdString: "rr" },
  { name: "reroll once on", cmdString: "ro" },
  { name: "reroll and add", cmdString: "ra" },
  { name: "minimum", cmdString: "mi" },
  { name: "maximum", cmdString: "ma" },
  { name: "explode on", cmdString: "e" },
];

type Selector = {
  name: string;
  cmdString: string;
};

const selectors: Selector[] = [
  { name: "", cmdString: "" },
  { name: "lowest", cmdString: "l" },
  { name: "highest", cmdString: "h" },
  { name: "greater than", cmdString: ">" },
  { name: "less than", cmdString: "<" },
];

type Operation = {
  active: boolean;
  operator: Operator;
  selector: Selector;
  value: number;
};

class DiceRoll {
  quantity = 1;
  sides = 20;
  toString(): string {
    return `${this.quantity}d${this.sides}`;
  }
}

@Component({
  selector: "avr-dice-roll-builder-dialog",
  templateUrl: "./dice-roll-builder-dialog.component.html",
  styleUrls: ["./dice-roll-builder-dialog.component.scss"],
})
export class DiceRollBuilderDialogComponent implements OnInit {
  fullString = "";
  stringStack: string[] = [];
  currString = "";
  diceRoll: DiceRoll;
  diceActive: boolean;
  number: number;
  numberActive: boolean;
  tag: string;
  tagActive: boolean;
  operations: Operation[];
  operators = operators;
  selectors = selectors;

  constructor(public dialogRef: MatDialogRef<DiceRollBuilderDialogComponent>) {}

  ngOnInit(): void {
    this.dialogRef.addPanelClass("dice-roll-builder-dialog");
    this.reset();
  }

  toggleDiceActive() {
    this.diceActive = !this.diceActive;
    if (this.diceActive) this.numberActive = false;
    this.update();
  }

  toggleNumberActive() {
    this.numberActive = !this.numberActive;
    if (this.numberActive) this.diceActive = false;
    this.update();
  }

  toggleOperation(index: number) {
    this.operations[index].active = !this.operations[index].active;
    this.update();
  }

  toggleTag() {
    this.tagActive = !this.tagActive;
    this.update();
  }

  reset() {
    this.resetOperations();
    this.diceActive = false;
    this.numberActive = false;
    this.tagActive = false;
    this.diceRoll = new DiceRoll();
    this.number = 1;
    this.tag = "";
    this.update();
  }

  resetOperations() {
    this.operations = [];
    for (const operator of operators) {
      this.operations.push({
        active: false,
        operator: operator,
        selector: selectors[0],
        value: 1,
      });
    }
  }

  update() {
    this.updateCurrString();
    this.updateFullString();
  }

  updateCurrString() {
    let result = "";
    if (this.diceActive) result += this.diceRoll;
    if (this.numberActive) result += this.number;
    for (const op of this.operations) {
      if (op.active)
        result += op.operator.cmdString + op.selector.cmdString + op.value;
    }
    if (this.tagActive) result += `[${this.tag}]`;
    this.currString = result;
  }

  updateFullString() {
    let result = "";
    for (const string of this.stringStack) {
      result += string;
    }
    result += this.currString;
    this.fullString = result;
  }

  onCancel() {
    this.dialogRef.close();
  }
}
