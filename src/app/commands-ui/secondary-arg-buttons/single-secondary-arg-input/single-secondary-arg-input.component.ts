import { trigger } from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ValueType } from "src/app/schemas/Commands";
import { hideAnimation, showAnimation } from "../../@animations";
import { SecondaryArgValuePair } from "../secondary-arg-buttons.component";

@Component({
  selector: "commands-ui-single-secondary-arg-input",
  templateUrl: "./single-secondary-arg-input.component.html",
  styleUrls: ["./single-secondary-arg-input.component.css"],
  animations: [trigger("show", showAnimation), trigger("hide", hideAnimation)],
})
export class SingleSecondaryArgInputComponent implements OnInit {
  @Input() argValuePair: SecondaryArgValuePair;
  @Input() permaHidden: boolean;
  @Input() valueType: ValueType;
  @Output() valueChange = new EventEmitter();
  fadingIn: boolean;
  fadingOut: boolean;

  constructor() {}

  ngOnInit(): void {
    if (this.permaHidden) return; // For hidden inputs next to headers
    this.valueType = this.argValuePair.arg.valueType;
    this.permaHidden = this.valueType === ValueType.TRUE;
    this.argValuePair.activeChange.subscribe(() => this.activeChange());
  }

  activeChange() {
    if (this.argValuePair.active) this.show();
    else this.hide();
  }

  isInputBox() {
    return (
      this.valueType === ValueType.STRING || this.valueType === ValueType.NUMBER
    );
  }

  isToggle() {
    return this.valueType === ValueType.BOOLEAN;
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
