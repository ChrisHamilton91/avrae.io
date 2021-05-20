import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "commands-ui-output-area",
  templateUrl: "./output-area.component.html",
  styleUrls: ["./output-area.component.css"],
})
export class OutputAreaComponent implements OnInit {
  @Input() commandString: string;

  constructor() {}

  ngOnInit(): void {}
}
