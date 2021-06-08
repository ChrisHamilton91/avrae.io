import { trigger } from "@angular/animations";
import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import {
  Argument,
  Command,
  CommandModule,
  Subcommand,
} from "src/app/schemas/Commands";
import { sortByName, fadeInAnimation, fadeOutAnimation } from "../globals";

@Component({
  selector: "commands-ui-command-buttons",
  templateUrl: "./command-buttons.component.html",
  styleUrls: ["./command-buttons.component.css"],
  animations: [
    trigger("fadeIn", fadeInAnimation),
    trigger("fadeOut", fadeOutAnimation),
  ],
})
export class CommandButtonsComponent implements OnInit {
  @Input() commands: Command[];
  @Input() activeCommand: Command;
  @Input() activeSubcommand: Subcommand;
  @Input() subcommandsFadingIn = false;
  @Input() subcommandsFadingOut = false;
  @Output() activeCommandChange = new EventEmitter();
  @Output() activeSubcommandChange = new EventEmitter();
  @Output() subcommandsFadeInDoneEmitter = new EventEmitter();
  @Output() subcommandsFadeOutDoneEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleActiveCommand(command: Command) {
    if (command === this.activeCommand) this.activeCommandChange.emit(null);
    else this.activeCommandChange.emit(command);
  }

  isActive(command: Command) {
    return this.activeCommand ? command === this.activeCommand : false;
  }

  setActiveSubcommand(subcommand: Subcommand) {
    this.activeSubcommand = subcommand;
    this.activeSubcommandChange.emit(subcommand);
  }

  getSubcommands(): Subcommand[] {
    if (this.activeCommand && this.activeCommand.subcommands.length != 0) {
      return this.activeCommand.subcommands.sort(sortByName);
    } else return null;
  }

  subcommandsFadeInDone(setToTrue: string) {
    this.subcommandsFadeInDoneEmitter.emit(setToTrue);
  }

  subcommandsFadeOutDone(setToTrue: string) {
    this.subcommandsFadeOutDoneEmitter.emit(setToTrue);
  }
}
