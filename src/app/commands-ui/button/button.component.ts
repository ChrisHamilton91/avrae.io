import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Argument, Command, CommandModule } from "src/app/schemas/Commands";
import { DEFAULT_ACTIVE_STYLE, DEFAULT_INACTIVE_STYLE } from "../constants";

@Component({
  selector: "commands-ui-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent implements OnInit {
  @Input() element: CommandModule | Command | Argument;
  @Input() active: boolean;
  @Input() activeStyle = DEFAULT_ACTIVE_STYLE;
  @Input() inactiveStyle = DEFAULT_INACTIVE_STYLE;

  constructor() {}

  ngOnInit(): void {}

  getStyle() {
    return this.active ? this.activeStyle : this.inactiveStyle;
  }
}
