import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "commands-ui-settings-input",
  templateUrl: "./settings-input.component.html",
  styleUrls: ["./settings-input.component.css"],
})
export class SettingsInputComponent implements OnInit {
  @Input() value = "";
  @Output() valueChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  emitValue(input: HTMLInputElement) {
    this.valueChange.emit(input.value);
  }
}
