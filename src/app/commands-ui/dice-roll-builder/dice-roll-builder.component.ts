import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DiceRollBuilderDialogComponent } from "./dice-roll-builder-dialog/dice-roll-builder-dialog.component";

@Component({
  selector: "commands-ui-dice-roll-builder",
  templateUrl: "./dice-roll-builder.component.html",
  styleUrls: ["./dice-roll-builder.component.scss"],
})
export class DiceRollBuilderComponent implements OnInit {
  @Output() rollStringEmitter = new EventEmitter<string>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(DiceRollBuilderDialogComponent, {
      autoFocus: false,
      disableClose: true,
      position: { top: "15vh" },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.rollStringEmitter.emit(result);
    });
  }
}
