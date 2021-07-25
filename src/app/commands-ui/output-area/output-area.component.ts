import { trigger } from "@angular/animations";
import { Clipboard } from "@angular/cdk/clipboard";
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { visibilityAnimation } from "../@animations";
import { commandsUiSettings } from "../@settings";

@Component({
  selector: "commands-ui-output-area",
  templateUrl: "./output-area.component.html",
  styleUrls: ["./output-area.component.scss"],
  animations: [trigger("visibility", visibilityAnimation)],
})
export class OutputAreaComponent implements OnInit {
  @ViewChild("outputBox") outputBoxRef: ElementRef;
  @Input() commandString: string;
  aliasMode = false;
  aliasName = "";
  aliasPlaceholder = "aliasName";
  multilineMode = false;

  constructor(private clipboard: Clipboard, private toastr: ToastrService) {}

  ngOnInit(): void {}

  copyToClipboard() {
    const value = (this.outputBoxRef.nativeElement as HTMLInputElement).value;
    if (!value) return this.toastr.warning("Nothing to copy...");
    const success = this.clipboard.copy(value);
    if (success) this.toastr.success("Copied to clipboard");
    else this.toastr.error("Could not copy to clipboard...");
  }

  toggleAliasMode() {
    this.aliasMode = !this.aliasMode;
    if (this.aliasMode) this.multilineMode = false;
    else this.aliasName = "";
  }

  toggleMultilineMode() {
    this.multilineMode = !this.multilineMode;
    if (this.multilineMode) {
      this.aliasMode = false;
      this.aliasName = "";
    }
  }

  getAliasVisibilityState() {
    return this.aliasMode ? "visible" : "hidden";
  }

  changeAliasName(input: HTMLInputElement) {
    this.aliasName = input.value.replace(/\s/g, "");
  }

  getOutput() {
    let result = commandsUiSettings.prefix;
    if (this.aliasMode)
      result += `alias ${this.aliasName || this.aliasPlaceholder} `;
    result += this.commandString;
    return result;
  }

  getMultilineTooltip() {
    if (!commandsUiSettings.tooltipsEnabled) return "";
    return "TODO: Multiline tooltip";
  }

  getAliasTooltip() {
    if (!commandsUiSettings.tooltipsEnabled) return "";
    return `Turn this command into an alias. Input a name, then paste into discord. You will then be able to call this command using ${commandsUiSettings.prefix}<aliasName>`;
  }

  getAliasInputTooltip() {
    if (!commandsUiSettings.tooltipsEnabled) return "";
    return `Type in a name for your alias. Alias names cannot have spaces, whitespace will be removed automatically.`;
  }

  getAliasInlineTip() {
    return `Call this command with: ${commandsUiSettings.prefix}${
      this.aliasName || this.aliasPlaceholder
    }`;
  }

  getCopyTooltip() {
    if (!commandsUiSettings.tooltipsEnabled) return "";
    return "Copy to clipboard";
  }
}
