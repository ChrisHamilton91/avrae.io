import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { commandsUiSettings } from "../../@settings";

@Component({
  selector: "commands-ui-multiline-output",
  templateUrl: "./multiline-output.component.html",
  styleUrls: ["./multiline-output.component.scss"],
})
export class MultilineOutputComponent implements OnInit {
  @ViewChildren("outputBox") outputBoxes: QueryList<
    ElementRef<HTMLInputElement>
  >;
  @Input() commandString: string;
  cmdStrings: string[] = [""];
  activeIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  storeActiveCmdString() {
    this.cmdStrings[this.activeIndex] = this.commandString;
  }

  getLine(index: number) {
    const prefix = commandsUiSettings.prefix;
    if (index === this.activeIndex) return prefix + this.commandString;
    else return prefix + this.cmdStrings[index];
  }

  addLine(clickedIndex: number) {
    this.storeActiveCmdString();
    this.activeIndex = ++clickedIndex;
    this.cmdStrings.splice(this.activeIndex, 0, "");
  }

  deleteLine(clickedIndex: number) {
    if (this.cmdStrings.length <= 1) return;
    this.cmdStrings.splice(clickedIndex, 1);
    // Don't let activeIndex go out of bounds
    if (this.activeIndex >= this.cmdStrings.length)
      this.activeIndex = this.cmdStrings.length - 1;
  }

  getMultilineCmdString() {
    let result = this.outputBoxes.first.nativeElement.value;
    for (let i = 1; i < this.outputBoxes.length; i++) {
      result += "\n" + this.outputBoxes.get(i).nativeElement.value;
    }
    return result;
  }
}
