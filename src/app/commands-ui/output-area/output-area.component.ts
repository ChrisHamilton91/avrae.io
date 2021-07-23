import { trigger } from "@angular/animations";
import { Clipboard } from "@angular/cdk/clipboard";
import { Component, Input, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { visibilityAnimation } from "../@animations";

@Component({
  selector: "commands-ui-output-area",
  templateUrl: "./output-area.component.html",
  styleUrls: ["./output-area.component.scss"],
  animations: [trigger("visibility", visibilityAnimation)],
})
export class OutputAreaComponent implements OnInit {
  @Input() commandString: string;
  aliasMode = false;
  multilineMode = false;

  constructor(private clipboard: Clipboard, private toastr: ToastrService) {}

  ngOnInit(): void {}

  copyToClipboard() {
    const success = this.clipboard.copy(this.commandString);
    if (success) this.toastr.success("Copied to clipboard");
    else this.toastr.error("Could not copy to clipboard...");
  }

  userInput(input: HTMLInputElement) {
    this.commandString = input.value;
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
}
