import { trigger } from "@angular/animations";
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from "@angular/core";
import { ValueType } from "src/app/schemas/Commands";
import { hideAnimation, showAnimation } from "../../@animations";
import { PrimaryArgValuePair } from "../primary-arg-buttons.component";

@Component({
  selector: "commands-ui-single-primary-arg-input",
  templateUrl: "./single-primary-arg-input.component.html",
  styleUrls: ["./single-primary-arg-input.component.css"],
  animations: [trigger("show", showAnimation), trigger("hide", hideAnimation)],
})
export class SinglePrimaryArgInputComponent implements OnInit {
  @Input() argValuePair: PrimaryArgValuePair;
  @Output() valueChange = new EventEmitter();
  fadingIn: boolean;
  fadingOut: boolean;

  constructor() {}

  ngOnInit(): void {
    this.argValuePair.activeChange.subscribe(() => this.activeChange());
  }

  activeChange() {
    if (this.argValuePair.active) this.show();
    else this.hide();
  }

  changeValue(input: HTMLInputElement) {
    this.argValuePair.value = input.value;
    this.valueChange.emit();
  }

  show() {
    this.fadingOut = false; //animation cancel
    this.fadingIn = true;
  }

  hide() {
    this.fadingIn = false; //animation cancel
    this.fadingOut = true;
  }

  showDone(showWasSetToTrue: boolean) {
    if (!this.fadingIn) return; //animation has been cancelled
    if (showWasSetToTrue) this.fadingIn = false;
  }

  hideDone(hideWasSetToTrue: boolean) {
    if (!this.fadingOut) return; //animation has been cancelled
    if (hideWasSetToTrue) this.fadingOut = false;
  }

  getTooltip(): string {
    const type = this.argValuePair.arg.valueType;
    if (type === ValueType.NUMBER) {
      return "This input takes a numeric value. Many arguments also support equations and dice rolls. All whitespace will be trimmed automatically.";
    }
    if (type === ValueType.STRING) {
      return "This input takes a string value (text). If there is whitespace, the text will be surrounded in quotations automatically.";
    }
  }
}
