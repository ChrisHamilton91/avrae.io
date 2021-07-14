import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { Command, Subcommand } from "src/app/schemas/Commands";
import { CommandButton } from "../command-buttons.component";

export class SubcommandButton {
  command: Subcommand;
  parentButton: CommandButton | SubcommandButton;
  active = false;
  subcommandCompExists = false;
  activeChange = new Subject<boolean>();
  constructor(
    subcommand: Subcommand,
    parentButton: CommandButton | SubcommandButton
  ) {
    this.command = subcommand;
    this.parentButton = parentButton;
  }
}

@Component({
  selector: "commands-ui-subcommand-buttons",
  templateUrl: "./subcommand-buttons.component.html",
  styleUrls: ["./subcommand-buttons.component.css"],
})
export class SubcommandButtonsComponent implements OnInit {
  @Input() parentButton: CommandButton | SubcommandButton;
  subcommandButtons: SubcommandButton[];
  activeButton: SubcommandButton;
  growing: boolean;
  shrinking: boolean;
  @Output() subcommandChange = new EventEmitter<
    SubcommandButton | CommandButton
  >();

  constructor() {}

  ngOnInit(): void {
    //Reset subcommands on double-click of parent button
    this.parentButton.activeChange.subscribe((setTo) => {
      if (setTo) this.setSubcommands();
    });
    this.setSubcommands();
  }

  setSubcommands() {
    this.subcommandButtons = [];
    for (const subcommand of this.parentButton.command.subcommands) {
      this.subcommandButtons.push(
        new SubcommandButton(subcommand, this.parentButton)
      );
    }
  }

  toggleActive(button: SubcommandButton) {
    //activate
    if (!this.activeButton) {
      button.activeChange.next(true);
      this.activeButton = button;
      this.subcommandChange.emit(button);
    }
    //deactivate
    else if (this.activeButton === button) {
      button.activeChange.next(false);
      this.activeButton = null;
      this.subcommandChange.emit(button.parentButton);
    }
    //switch
    else {
      this.activeButton.activeChange.next(false);
      button.activeChange.next(true);
      this.activeButton = button;
      this.subcommandChange.emit(button);
    }
  }

  setActiveButton(button: CommandButton | SubcommandButton) {
    this.subcommandChange.emit(button);
  }
}
