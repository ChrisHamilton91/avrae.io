import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "commands-ui-single-secondary-arg-input-toggle",
  templateUrl: "./single-secondary-arg-input-toggle.component.html",
  styleUrls: ["./single-secondary-arg-input-toggle.component.css"],
})
export class SingleSecondaryArgInputToggleComponent implements OnInit {
  @Input() value: boolean = true;
  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.emitValue();
  }

  emitValue() {
    this.valueChange.emit(this.value);
  }
}
