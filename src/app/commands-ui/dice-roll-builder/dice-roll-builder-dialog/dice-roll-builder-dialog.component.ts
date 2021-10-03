import { Component, EventEmitter, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "avr-dice-roll-builder-dialog",
  templateUrl: "./dice-roll-builder-dialog.component.html",
  styleUrls: ["./dice-roll-builder-dialog.component.css"],
})
export class DiceRollBuilderDialogComponent implements OnInit {
  rollString: string;

  constructor(public dialogRef: MatDialogRef<DiceRollBuilderDialogComponent>) {}

  ngOnInit(): void {}

  onCancel() {
    this.dialogRef.close();
  }
}
