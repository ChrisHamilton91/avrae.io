import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  Argument,
  Command,
  CommandModule,
  Subcommand,
} from "src/app/schemas/Commands";

@Component({
  selector: "commands-ui-module-buttons",
  templateUrl: "./module-buttons.component.html",
  styleUrls: ["./module-buttons.component.css"],
})
export class ModuleButtonsComponent implements OnInit {
  @Input() modules: CommandModule[];
  @Input() activeModule: CommandModule;
  @Output() activeModuleChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleActiveModule(module: CommandModule) {
    if (this.activeModule === module) this.activeModule = null;
    else this.activeModule = module;
    this.activeModuleChange.emit(this.activeModule);
  }

  isActive(module: CommandModule) {
    return this.activeModule ? module === this.activeModule : false;
  }
}
