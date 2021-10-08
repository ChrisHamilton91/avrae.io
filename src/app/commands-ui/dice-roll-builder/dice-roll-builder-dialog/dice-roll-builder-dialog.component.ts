import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

type Operator = {
  name: string;
  cmdString: string;
  onSets: boolean;
  hasSelectors: boolean;
};

const operators: Operator[] = [
  { name: "keep", cmdString: "k", onSets: true, hasSelectors: true },
  { name: "drop", cmdString: "p", onSets: true, hasSelectors: true },
  { name: "reroll on", cmdString: "rr", onSets: false, hasSelectors: true },
  {
    name: "reroll once on",
    cmdString: "ro",
    onSets: false,
    hasSelectors: true,
  },
  {
    name: "reroll and add",
    cmdString: "ra",
    onSets: false,
    hasSelectors: true,
  },
  { name: "explode on", cmdString: "e", onSets: false, hasSelectors: true },
  { name: "minimum", cmdString: "mi", onSets: false, hasSelectors: false },
  { name: "maximum", cmdString: "ma", onSets: false, hasSelectors: false },
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
  selector?: Selector;
  value: number;
};

class DiceRoll {
  quantity = 1;
  sides = 20;
  toString(): string {
    return `${this.quantity}d${this.sides}`;
  }
}

enum SegmentType {
  MATH,
  ROLL,
  OPEN_BRACKET,
  COMMA,
  CLOSE_BRACKET,
}

type stringSegment = {
  type: SegmentType;
  value: string;
};

@Component({
  selector: "avr-dice-roll-builder-dialog",
  templateUrl: "./dice-roll-builder-dialog.component.html",
  styleUrls: ["./dice-roll-builder-dialog.component.scss"],
})
export class DiceRollBuilderDialogComponent implements OnInit {
  fullString = "";
  segmentStack: stringSegment[] = [];
  currString = "";
  diceRoll: DiceRoll;
  diceActive: boolean;
  number: number;
  numberActive: boolean;
  tag: string;
  tagActive: boolean;
  operations: Operation[] = [];
  bracketStack: true[] = []; //Used for bracket validation - each slot represents an unclosed bracket
  errorMessage = "";
  operators = operators;
  selectors = selectors;

  get lastSegment(): stringSegment {
    return this.segmentStack.slice(-1)[0];
  }

  constructor(public dialogRef: MatDialogRef<DiceRollBuilderDialogComponent>) {}

  ngOnInit(): void {
    this.dialogRef.addPanelClass("dice-roll-builder-dialog");
    this.reset();
  }

  math(operator: string) {
    this.errorMessage = this.getMathErrorMessage();
    if (this.errorMessage) return;
    if (this.currString) {
      this.segmentStack.push({
        type: SegmentType.ROLL,
        value: this.currString,
      });
    }
    this.segmentStack.push({ type: SegmentType.MATH, value: operator });
    this.reset();
  }

  getMathErrorMessage(): string {
    if (!this.currString) {
      if (!this.lastSegment) return "Cannot begin with a math operator.";
      if (
        this.lastSegment.type !== SegmentType.ROLL &&
        this.lastSegment.type !== SegmentType.CLOSE_BRACKET
      )
        return "Math operators must follow a value or a closed bracket.";
    }
    return "";
  }

  openBracket() {
    this.errorMessage = this.getOpenBracketErrorMessage();
    if (this.errorMessage) return;
    this.segmentStack.push({ type: SegmentType.OPEN_BRACKET, value: "(" });
    this.bracketStack.push(true);
    this.update();
  }

  getOpenBracketErrorMessage(): string {
    if (
      this.currString ||
      this.lastSegment?.type === SegmentType.ROLL ||
      this.lastSegment?.type === SegmentType.CLOSE_BRACKET
    )
      return "Open brackets cannot follow a value or a closed bracket.";
    return "";
  }

  comma() {
    this.errorMessage = this.getCommaErrorMessage();
    if (this.errorMessage) return;
    if (this.currString) {
      this.segmentStack.push({
        type: SegmentType.ROLL,
        value: this.currString,
      });
    }
    this.segmentStack.push({ type: SegmentType.COMMA, value: "," });
    this.reset();
  }

  getCommaErrorMessage(): string {
    if (this.bracketStack.length === 0)
      return "Commas may only appear inside brackets.";
    if (!this.currString) {
      if (!this.lastSegment) return "Cannot begin with a comma.";
      if (
        this.lastSegment.type !== SegmentType.ROLL &&
        this.lastSegment.type !== SegmentType.CLOSE_BRACKET
      )
        return "Commas may only appear after a value or a closed bracket.";
    }
    return "";
  }

  closeBracket() {
    this.errorMessage = this.getCloseBracketErrorMessage();
    if (this.errorMessage) return;
    if (this.currString) {
      this.segmentStack.push({
        type: SegmentType.ROLL,
        value: this.currString,
      });
    }
    this.segmentStack.push({ type: SegmentType.CLOSE_BRACKET, value: ")" });
    this.bracketStack.pop();
    this.reset();
  }

  getCloseBracketErrorMessage() {
    if (this.bracketStack.length === 0)
      return "There are no unclosed brackets.";
    if (!this.currString) {
      if (!this.lastSegment) return "Cannot begin with a closed bracket.";
      if (
        this.lastSegment.type !== SegmentType.ROLL &&
        this.lastSegment.type !== SegmentType.CLOSE_BRACKET
      )
        return "Closed brackets must appear after a value or another closed bracket.";
    }
    return "";
  }

  backspace() {
    if (this.currString) {
      this.reset();
      return;
    }
    const popped = this.segmentStack.pop();
    if (popped?.type === SegmentType.OPEN_BRACKET) this.bracketStack.pop();
    if (popped?.type === SegmentType.CLOSE_BRACKET)
      this.bracketStack.push(true);
    this.reset();
  }

  clear() {
    this.segmentStack = [];
    this.bracketStack = [];
    this.reset();
  }

  diceOrNumberAvailable() {
    if (this.lastSegment?.type === SegmentType.CLOSE_BRACKET) return false;
    return true;
  }

  toggleDiceActive() {
    this.diceActive = !this.diceActive;
    if (this.diceActive) {
      this.numberActive = false;
      if (this.lastSegment?.type === SegmentType.ROLL) this.segmentStack.pop();
    }
    this.reset(true);
  }

  toggleNumberActive() {
    this.numberActive = !this.numberActive;
    if (this.numberActive) {
      this.diceActive = false;
      if (this.lastSegment?.type === SegmentType.ROLL) this.segmentStack.pop();
    }
    this.reset(true);
  }

  toggleOperation(index: number) {
    this.operations[index].active = !this.operations[index].active;
    this.update();
  }

  toggleTag() {
    this.tagActive = !this.tagActive;
    this.update();
  }

  reset(preserveActive = false) {
    this.resetOperations();
    if (!preserveActive) {
      this.diceActive = false;
      this.numberActive = false;
    }
    this.tagActive = false;
    this.diceRoll = new DiceRoll();
    this.number = 1;
    this.tag = "";
    this.errorMessage = "";
    this.update();
  }

  resetOperations() {
    this.operations = [];
    for (const operator of this.operators) {
      this.operations.push({
        active: false,
        operator: operator,
        selector: selectors[0],
        value: 1,
      });
    }
  }

  operationAvailable(index: number): boolean {
    if (this.diceActive) return true;
    if (this.numberActive) return false;
    const op = this.operations[index];
    if (
      this.lastSegment?.type === SegmentType.CLOSE_BRACKET &&
      op.operator.onSets
    )
      return true;
    return false;
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
    if (this.tagActive && this.tag) result += `[${this.tag}]`;
    this.currString = result;
  }

  updateFullString() {
    let result = "";
    for (const segment of this.segmentStack) {
      result += segment.value;
    }
    result += this.currString;
    this.fullString = result;
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.errorMessage = "";
    if (this.bracketStack.length > 0)
      this.errorMessage = "There are unclosed brackets.";
    if (!this.currString && this.lastSegment?.type === SegmentType.MATH)
      this.errorMessage = "Cannot end with a math operator.";
    if (this.errorMessage) return;
    this.dialogRef.close(this.fullString);
  }
}
