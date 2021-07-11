import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { SecondaryArgValuePair } from "../../secondary-arg-buttons.component";

@Component({
  selector: "commands-ui-single-secondary-arg-input-toggle",
  templateUrl: "./single-secondary-arg-input-toggle.component.html",
  styleUrls: ["./single-secondary-arg-input-toggle.component.css"],
})
export class SingleSecondaryArgInputToggleComponent implements OnInit {
  @Input() argValuePair: SecondaryArgValuePair;
  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.argValuePair.value = true;
    this.valueChange.emit();
  }
}
