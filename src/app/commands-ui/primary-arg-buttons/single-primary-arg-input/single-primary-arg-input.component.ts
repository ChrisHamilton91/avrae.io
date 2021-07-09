import { trigger } from "@angular/animations";
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from "@angular/core";
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
}
