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
  @Output() activeCommandChange = new EventEmitter();
  @Output() activeSubcommandChange = new EventEmitter();
  subcommandsFadingIn = false;
  subcommandsFadingOut = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  toggleActiveCommand(command: Command) {
    if (command != this.activeCommand || this.subcommandsFadingOut) {
      this.activeCommand = command;
      this.activeCommandChange.emit(this.activeCommand);
      this.subcommandsFadeInStart();
    } else {
      if (this.areSubcommands()) this.subcommandsFadeOutStart();
      else {
        this.activeCommand = null;
        this.activeCommandChange.emit(this.activeCommand);
      }
    }
  }

  areArguments() {
    if (this.activeSubcommand)
      return (
        this.activeSubcommand.primaryArgs.length > 0 ||
        this.activeSubcommand.secondaryArgs.length > 0
      );
    else if (this.activeCommand)
      return (
        this.activeCommand.primaryArgs.length > 0 ||
        this.activeCommand.secondaryArgs.length > 0
      );
  }

  areSubcommands() {
    return this.activeCommand.subcommands.length > 0;
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
    if (setToTrue) this.subcommandsFadingIn = false;
  }

  subcommandsFadeOutDone(setToTrue: string) {
    // If we've set fadingOut to false elsewhere, don't nullify activeCommand - the animation has been cancelled
    if (setToTrue && this.subcommandsFadingOut) {
      this.subcommandsFadingOut = false;
      this.activeCommand = null;
    }
  }

  async subcommandsFadeInStart() {
    this.subcommandsFadingOut = false;
    this.subcommandsFadingIn = false;
    // Await is necessary for the change detection to work
    await this.changeDetectorRef.detectChanges();
    this.subcommandsFadingIn = true;
  }

  subcommandsFadeOutStart() {
    // Need to emit null to synchronize with argument fade-outs
    if (this.areArguments()) this.activeCommandChange.emit(null);
    this.subcommandsFadingOut = true;
  }
}
