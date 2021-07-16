import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SettingsDialogComponent } from "./settings-dialog/settings-dialog.component";

@Component({
  selector: "commands-ui-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(SettingsDialogComponent, {
      autoFocus: false,
      position: { top: "130px", right: "15%" },
    });
  }
}
