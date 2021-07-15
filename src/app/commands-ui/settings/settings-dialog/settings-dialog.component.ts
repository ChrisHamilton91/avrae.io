import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { commandsUiSettings } from "../../@settings";

@Component({
  selector: "commands-ui-settings-dialog",
  templateUrl: "./settings-dialog.component.html",
  styleUrls: ["./settings-dialog.component.scss"],
})
export class SettingsDialogComponent implements OnInit {
  settings = commandsUiSettings;

  constructor(public dialogRef: MatDialogRef<SettingsDialogComponent>) {}

  ngOnInit(): void {
    this.dialogRef.addPanelClass("commands-ui-settings-dialog");
  }

  enableTooltipChange(event: MatSlideToggleChange) {
    console.log(event.checked);
  }
}
