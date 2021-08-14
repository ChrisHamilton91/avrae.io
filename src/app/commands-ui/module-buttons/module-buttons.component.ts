import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CommandModule } from "src/app/command-data/command-schema";

@Component({
  selector: "commands-ui-module-buttons",
  templateUrl: "./module-buttons.component.html",
  styleUrls: ["./module-buttons.component.scss"],
})
export class ModuleButtonsComponent implements OnInit {
  @Input() modules: CommandModule[];
  activeModule: CommandModule;
  @Output() activeModuleChange = new EventEmitter<CommandModule>();

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

  getHeaderTooltip(): string {
    return (
      "Modules are groups of commands, organized based on their purpose. " +
      "Click on a module to reveal its commands."
    );
  }
}
