import { Component, Input, OnInit } from "@angular/core";
import { Clipboard } from "@angular/cdk/clipboard";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "commands-ui-output-area",
  templateUrl: "./output-area.component.html",
  styleUrls: ["./output-area.component.css"],
})
export class OutputAreaComponent implements OnInit {
  @Input() commandString: string;
  @Input() value: string;

  constructor(private clipboard: Clipboard, private toastr: ToastrService) {}

  ngOnInit(): void {}

  copyToClipboard() {
    const success = this.clipboard.copy(this.value);
    if (success) this.toastr.success("Copied to clipboard");
    else this.toastr.error("Could not copy to clipboard...");
  }
}
