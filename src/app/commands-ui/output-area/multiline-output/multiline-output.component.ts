import { Component, Input, OnInit } from "@angular/core";
import { commandsUiSettings } from "../../@settings";

@Component({
  selector: "commands-ui-multiline-output",
  templateUrl: "./multiline-output.component.html",
  styleUrls: ["./multiline-output.component.scss"],
})
export class MultilineOutputComponent implements OnInit {
  @Input() commandString: string;
  cmdStrings: string[] = [];
  activeIndex = 0;
  numLines = 1;

  constructor() {}

  ngOnInit(): void {}

  getLine(index: number) {
    let prefix = commandsUiSettings.prefix;
    if (index === this.activeIndex) return prefix + this.commandString;
    else return prefix + this.cmdStrings[index];
  }
}
