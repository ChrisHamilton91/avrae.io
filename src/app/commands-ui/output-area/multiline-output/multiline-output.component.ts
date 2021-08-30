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
  @Output() deactivate = new EventEmitter();
  lines: string[] = [];
  activeIndex = 0;
  multilineMax = 20;

  @Input() set commandString(commandString: string) {
    this.lines[this.activeIndex] = commandString;
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  getLine(index: number) {
    return commandsUiSettings.prefix + this.lines[index];
  }

  addLine(clickedIndex: number) {
    if (this.lines.length >= this.multilineMax) {
      this.toastr.warning(`Maximum ${this.multilineMax} multiline commands.`);
      return;
    }
    this.activeIndex = ++clickedIndex;
    this.lines.splice(this.activeIndex, 0, "");
    this.changeDetectorRef.detectChanges();
    const newBox = this.outputBoxes.get(this.activeIndex).nativeElement;
    newBox.focus();
  }

  deleteLine(clickedIndex: number) {
    if (this.lines.length <= 1) {
      this.deactivate.emit();
      return;
    }
    this.lines.splice(clickedIndex, 1);
    if (clickedIndex < this.activeIndex) {
      this.activeIndex--;
    } else if (clickedIndex === this.activeIndex) {
      if (this.activeIndex >= this.lines.length) this.activeIndex--;
    }
  }

  changeLine(clickedIndex: number) {
    this.activeIndex = clickedIndex;
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
