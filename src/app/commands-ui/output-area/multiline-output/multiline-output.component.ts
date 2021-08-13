import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { commandsUiSettings } from "../../@settings";

@Component({
  selector: "commands-ui-multiline-output",
  templateUrl: "./multiline-output.component.html",
  styleUrls: ["./multiline-output.component.scss"],
})
export class MultilineOutputComponent implements OnInit {
  @ViewChildren("outputBox") outputBoxes: QueryList<
    ElementRef<HTMLInputElement>
  >;
  @Input() commandString: string;
  @Output() deactivate = new EventEmitter();
  cmdStrings: string[] = [""];
  activeIndex = 0;
  multilineMax = 20;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  storeActiveCmdString() {
    this.cmdStrings[this.activeIndex] = this.commandString;
  }

  retrieveActiveCmdString() {
    this.commandString = this.cmdStrings[this.activeIndex];
  }

  getLine(index: number) {
    const prefix = commandsUiSettings.prefix;
    if (index === this.activeIndex) return prefix + this.commandString;
    else return prefix + this.cmdStrings[index];
  }

  addLine(clickedIndex: number) {
    if (this.cmdStrings.length >= this.multilineMax) {
      this.toastr.warning(`Maximum ${this.multilineMax} multiline commands.`);
      return;
    }
    this.storeActiveCmdString();
    this.activeIndex = ++clickedIndex;
    this.cmdStrings.splice(this.activeIndex, 0, "");
    this.commandString = "";
    this.changeDetectorRef.detectChanges();
    this.outputBoxes.get(this.activeIndex).nativeElement.focus();
  }

  deleteLine(clickedIndex: number) {
    if (this.cmdStrings.length <= 1) {
      this.deactivate.emit();
      return;
    }
    this.cmdStrings.splice(clickedIndex, 1);
    if (clickedIndex < this.activeIndex) {
      this.activeIndex--;
    } else if (clickedIndex === this.activeIndex) {
      if (this.activeIndex >= this.cmdStrings.length) this.activeIndex--;
      this.retrieveActiveCmdString();
    }
  }

  changeLine(clickedIndex: number) {
    this.storeActiveCmdString();
    this.activeIndex = clickedIndex;
    this.retrieveActiveCmdString();
    this.changeDetectorRef.detectChanges();
    this.outputBoxes.get(this.activeIndex).nativeElement.focus();
  }

  getMultilineCmdString() {
    let result = this.outputBoxes.first.nativeElement.value;
    for (let i = 1; i < this.outputBoxes.length; i++) {
      result += "\n" + this.outputBoxes.get(i).nativeElement.value;
    }
    return result;
  }
}
