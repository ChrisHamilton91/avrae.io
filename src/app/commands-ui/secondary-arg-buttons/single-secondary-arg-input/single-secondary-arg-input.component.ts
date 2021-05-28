import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "commands-ui-single-secondary-arg-input",
  templateUrl: "./single-secondary-arg-input.component.html",
  styleUrls: ["./single-secondary-arg-input.component.css"],
})
export class SingleSecondaryArgInputComponent implements OnInit {
  @Input() visibility: string;
  @Input() opacity: string;
  @Input() value: string;
  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changeValue(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.value);
  }
}
