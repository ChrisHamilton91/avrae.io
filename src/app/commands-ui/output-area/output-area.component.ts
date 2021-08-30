import { trigger } from "@angular/animations";
import { Clipboard } from "@angular/cdk/clipboard";
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { visibilityAnimation } from "../@animations";
import { commandsUiSettings } from "../@settings";
import { MultilineOutputComponent } from "./multiline-output/multiline-output.component";

@Component({
  selector: "commands-ui-output-area",
  templateUrl: "./output-area.component.html",
  styleUrls: ["./output-area.component.scss"],
  animations: [trigger("visibility", visibilityAnimation)],
})
export class OutputAreaComponent implements OnInit {
  @ViewChild("outputBox") outputBoxRef: ElementRef<HTMLInputElement>;
  @ViewChild("aliasInput") aliasInputRef: ElementRef<HTMLInputElement>;
  @ViewChild("multilineOutput") multilineComp: MultilineOutputComponent;
  @Input() commandString: string;
  @Input() areEmptyRequiredArgs: boolean;
  aliasMode = false;
  aliasPlaceholder = "aliasName";
  multilineMode = false;

  get outputBox(): HTMLInputElement {
    return this.outputBoxRef.nativeElement;
  }
  get aliasInput(): HTMLInputElement {
    return this.aliasInputRef?.nativeElement;
  }

  constructor(private clipboard: Clipboard, private toastr: ToastrService) {}

  ngOnInit(): void {}

  copyToClipboard() {
    const value = this.getClipboardValue();
    if (!value) {
      this.toastr.warning("Nothing to copy...");
      return;
    }
    const success = this.clipboard.copy(value);
    if (!success) {
      this.toastr.error("Could not copy to clipboard...");
      return;
    }
    if (this.areEmptyRequiredArgs) {
      this.toastr.warning("A required input is empty. Copied anyway.");
      return;
    }
    this.toastr.success("Copied to clipboard");
  }

  getClipboardValue(): string {
    let result = this.outputBox.value;
    if (!this.multilineMode) return result;
    else return result + "\n" + this.multilineComp.getMultilineCmdString();
  }

  toggleAliasMode() {
    this.aliasMode = !this.aliasMode;
  }

  toggleMultilineMode() {
    this.multilineMode = !this.multilineMode;
  }

  getAliasVisibilityState() {
    return this.aliasMode ? "visible" : "hidden";
  }

  getRefreshVisibilityState() {
    return this.multilineMode ? "visible" : "hidden";
  }

  trimAliasName(input: HTMLInputElement) {
    input.value = input.value.replace(/\s/g, "");
  }

  getOutput() {
    let result = commandsUiSettings.prefix;
    if (this.aliasMode)
      result += `alias ${this.aliasInput?.value || this.aliasPlaceholder} `;
    if (this.multilineMode) result += "multiline";
    else result += this.commandString;
    return result;
  }

  refreshMultilineOutput() {
    this.multilineComp.commandString = this.commandString;
  }

  getMultilineTooltip() {
    if (!commandsUiSettings.tooltipsEnabled) return "";
    return "Start creating a multiline command.";
  }

  getAliasTooltip() {
    if (!commandsUiSettings.tooltipsEnabled) return "";
    return `Turn this command into an alias. Input a name, then paste into discord. You will then be able to call this command using ${commandsUiSettings.prefix}<aliasName>.`;
  }

  getAliasInputTooltip() {
    if (!commandsUiSettings.tooltipsEnabled) return "";
    return `Type in a name for your alias. Alias names cannot have spaces.`;
  }

  getCopyTooltip() {
    if (!commandsUiSettings.tooltipsEnabled) return "";
    return "Copy to clipboard";
  }

  getRefreshTooltip() {
    if (!commandsUiSettings.tooltipsEnabled) return "";
    return "Refresh active line";
  }
}
