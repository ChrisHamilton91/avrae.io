import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { Command, Subcommand } from "src/app/schemas/Commands";
import { CommandButton } from "../command-buttons.component";

export class SubcommandButton {
  subcommand: Subcommand;
  active = false;
  subcommandCompExists = false;
  activeChange = new Subject<boolean>();
  constructor(subcommand: Subcommand) {
    this.subcommand = subcommand;
  }
}

@Component({
  selector: "commands-ui-subcommand-buttons",
  templateUrl: "./subcommand-buttons.component.html",
  styleUrls: ["./subcommand-buttons.component.css"],
})
export class SubcommandButtonsComponent implements OnInit {
  @Input() parentButton: CommandButton | SubcommandButton;
  parentCommand: Command | Subcommand;
  subcommandButtons: SubcommandButton[];
  activeButton: SubcommandButton;
  growing: boolean;
  shrinking: boolean;
  @Output() activeSubcommandChange = new EventEmitter<Subcommand>();

  constructor() {}

  ngOnInit(): void {
    if (this.parentButton instanceof CommandButton)
      this.parentCommand = this.parentButton.command;
    if (this.parentButton instanceof SubcommandButton)
      this.parentCommand = this.parentButton.subcommand;
    this.setSubcommands();
  }

  setSubcommands() {
    this.subcommandButtons = [];
    for (const subcommand of this.parentCommand.subcommands) {
      this.subcommandButtons.push(new SubcommandButton(subcommand));
    }
  }

  toggleActive(button: SubcommandButton) {
    //activate
    if (!this.activeButton) {
      button.activeChange.next(true);
      this.activeButton = button;
    }
    //deactivate
    else if (this.activeButton === button) {
      button.activeChange.next(false);
      this.activeButton = null;
    }
    //switch
    else {
      this.activeButton.activeChange.next(false);
      button.activeChange.next(true);
      this.activeButton = button;
    }
    this.activeSubcommandChange.emit(this.activeButton?.subcommand);
  }
}
