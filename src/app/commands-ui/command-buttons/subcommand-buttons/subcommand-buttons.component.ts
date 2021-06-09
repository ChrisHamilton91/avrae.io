import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Subcommand } from "src/app/schemas/Commands";

@Component({
  selector: "commands-ui-subcommand-buttons",
  templateUrl: "./subcommand-buttons.component.html",
  styleUrls: ["./subcommand-buttons.component.css"],
})
export class SubcommandButtonsComponent implements OnInit {
  @Input() subcommands: Subcommand[];
  @Input() activeSubcommand: Subcommand;
  @Input() subcommandsGrowing = false;
  @Input() subcommandsShrinking = false;
  @Output() activeSubcommandChange = new EventEmitter();
  @Output() subcommandsGrowDoneEmitter = new EventEmitter();
  @Output() subcommandsShrinkDoneEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleActiveSubcommand(subcommand: Subcommand) {
    if (this.activeSubcommand === subcommand)
      this.activeSubcommandChange.emit(null);
    else this.activeSubcommandChange.emit(subcommand);
  }

  isActive(subcommand: Subcommand) {
    return this.activeSubcommand ? subcommand === this.activeSubcommand : false;
  }

  subcommandsGrowDone(setToTrue: string) {
    this.subcommandsGrowDoneEmitter.emit(setToTrue);
  }

  subcommandsShrinkDone(setToTrue: string) {
    this.subcommandsShrinkDoneEmitter.emit(setToTrue);
  }
}
