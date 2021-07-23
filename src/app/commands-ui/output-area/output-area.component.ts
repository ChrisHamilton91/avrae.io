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
  }

  toggleMultilineMode() {
    this.multilineMode = !this.multilineMode;
    if (this.multilineMode) this.aliasMode = false;
  }

  getAliasInputState() {
    return this.aliasMode ? "visible" : "hidden";
  }

  changeAliasName(input: HTMLInputElement) {
    this.aliasName = input.value;
  }

  getOutput() {
    let result = commandsUiSettings.prefix;
    if (this.aliasMode)
      result += `alias ${this.aliasName || this.aliasPlaceholder} `;
    result += this.commandString;
    return result;
  }
}
