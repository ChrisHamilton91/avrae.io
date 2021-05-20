import { Component, Input, OnInit } from "@angular/core";
import { CommandModule } from "src/app/schemas/Commands";
import { DEFAULT_ACTIVE_STYLE, DEFAULT_INACTIVE_STYLE } from "../../globals";

@Component({
  selector: "commands-ui-single-module-button",
  templateUrl: "./single-module-button.component.html",
  styleUrls: ["./single-module-button.component.css"],
})
export class SingleModuleButtonComponent implements OnInit {
  @Input() module: CommandModule;
  @Input() active: boolean;
  @Input() activeStyle = DEFAULT_ACTIVE_STYLE;
  @Input() inactiveStyle = DEFAULT_INACTIVE_STYLE;

  constructor() {}

  ngOnInit(): void {}

  getStyle() {
    return this.active ? this.activeStyle : this.inactiveStyle;
  }

  getTooltip(): string {
    return this.module.shortDesc;
  }
}
