import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { SecondaryArgValuePair } from "../../secondary-arg-buttons.component";

@Component({
  selector: "commands-ui-single-secondary-arg-input-box",
  templateUrl: "./single-secondary-arg-input-box.component.html",
  styleUrls: ["./single-secondary-arg-input-box.component.css"],
})
export class SingleSecondaryArgInputBoxComponent implements OnInit {
  @Input() argValuePair: SecondaryArgValuePair;
  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changeValue(input: HTMLInputElement) {
    this.argValuePair.value = input.value;
    this.valueChange.emit();
  }
}
