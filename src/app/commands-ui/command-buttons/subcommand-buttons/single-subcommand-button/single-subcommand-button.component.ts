import { AnimationEvent, trigger } from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Subcommand } from "src/app/schemas/Commands";
import {
  ACTIVE_SUBCMD_STYLE,
  dropDownAnimation,
  INACTIVE_SUBCMD_STYLE,
  shrinkUpAnimation,
} from "../../../globals";

@Component({
  selector: "commands-ui-single-subcommand-button",
  templateUrl: "./single-subcommand-button.component.html",
  styleUrls: ["./single-subcommand-button.component.css"],
  animations: [
    trigger("grow", dropDownAnimation),
    trigger("shrink", shrinkUpAnimation),
  ],
})
export class SingleSubcommandButtonComponent implements OnInit {
  @Input() subcommand: Subcommand;
  @Input() active: boolean;
  @Input() activeStyle = ACTIVE_SUBCMD_STYLE;
  @Input() inactiveStyle = INACTIVE_SUBCMD_STYLE;
  @Input() subcommandsGrowing = false;
  @Input() subcommandsShrinking = false;
  @Output() subcommandsGrowDoneEmitter = new EventEmitter();
  @Output() subcommandsShrinkDoneEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getStyle() {
    return this.active ? this.activeStyle : this.inactiveStyle;
  }

  getTooltip(): string {
    return this.subcommand.shortDesc;
  }

  subcommandsGrowDone(setToTrue: string) {
    this.subcommandsGrowDoneEmitter.emit(setToTrue);
  }

  subcommandsShrinkDone(setToTrue: string) {
    this.subcommandsShrinkDoneEmitter.emit(setToTrue);
  }
}
