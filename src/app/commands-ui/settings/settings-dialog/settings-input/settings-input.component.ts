import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "commands-ui-settings-input",
  templateUrl: "./settings-input.component.html",
  styleUrls: ["./settings-input.component.css"],
})
export class SettingsInputComponent implements OnInit {
  @Input() value = "";
  startingValue;
  @Output() valueChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.startingValue = this.value;
  }

  emitValue(input: HTMLInputElement) {
    this.valueChange.emit(input.value);
  }
}
