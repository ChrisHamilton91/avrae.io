import { trigger } from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { CommandModule } from "src/app/schemas/Commands";
import { ColorStates, defaultButtonColors } from "../../@animations";

@Component({
  selector: "commands-ui-single-module-button",
  templateUrl: "./single-module-button.component.html",
  styleUrls: ["./single-module-button.component.css"],
  animations: [trigger("color", defaultButtonColors)],
})
export class SingleModuleButtonComponent implements OnInit {
  @Input() module: CommandModule;
  @Input() active: boolean;

  constructor() {}

  ngOnInit(): void {}

  getColor() {
    return this.active ? ColorStates.ACTIVE : ColorStates.INACTIVE;
  }

  getTooltip(): string {
    return this.module.shortDesc;
  }
}
