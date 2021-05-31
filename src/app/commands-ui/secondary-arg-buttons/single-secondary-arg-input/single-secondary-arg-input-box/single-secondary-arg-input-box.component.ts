import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "commands-ui-single-secondary-arg-input-box",
  templateUrl: "./single-secondary-arg-input-box.component.html",
  styleUrls: ["./single-secondary-arg-input-box.component.css"],
})
export class SingleSecondaryArgInputBoxComponent implements OnInit {
  @Input() value: string;
  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changeValue(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.value);
  }
}
