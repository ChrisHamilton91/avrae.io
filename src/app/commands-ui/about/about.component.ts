import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AboutDialogComponent } from "./about-dialog/about-dialog.component";

@Component({
  selector: "commands-ui-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(AboutDialogComponent, { autoFocus: false });
  }
}
