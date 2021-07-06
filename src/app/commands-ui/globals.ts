import {
  animate,
  AnimationMetadata,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import {
  CommandModule,
  Command,
  Argument,
  PrimaryArgument,
  SecondaryArgument,
  Subcommand,
} from "../schemas/Commands";

//Default styles
export const DEFAULT_ACTIVE_STYLE = "background-color:#33aa33;";
export const DEFAULT_INACTIVE_STYLE = "background-color:#0033aa;";

//Subcommand styles
export const ACTIVE_SUBCMD_STYLE = "background-color:green;";
export const INACTIVE_SUBCMD_STYLE = "background-color:#2255bb;";

//Primary Argument styles
export const ACTIVE_REQUIRED_ARG_STYLE = "background-color:#aa3333;";
export const ACTIVE_OPTIONAL_ARG_STYLE = DEFAULT_ACTIVE_STYLE;
export const INACTIVE_OPTIONAL_ARG_STYLE = DEFAULT_INACTIVE_STYLE;
// export const ACTIVE_OPTIONAL_ARG_STYLE = "background-color:green;color:black;";
// export const INACTIVE_OPTIONAL_ARG_STYLE = "background-color:#2255bb;";

export class PrimaryArgValuePair {
  arg: PrimaryArgument;
  value: string | boolean;
  index: number;
  active: boolean;
  constructor(arg: PrimaryArgument, index: number, active: boolean) {
    this.arg = arg;
    this.value = null;
    this.index = index;
    this.active = active;
  }
}

export class SecondaryArgValuePair {
  arg: SecondaryArgument;
  value: string | boolean;
  index: number;
  active: boolean;
  constructor(arg: SecondaryArgument, index: number, active: boolean) {
    this.arg = arg;
    this.value = null;
    this.index = index;
    this.active = active;
  }
}

/**Sorting function to sort elements by their name property */
export function sortByName(
  a: CommandModule | Command | Argument,
  b: CommandModule | Command | Argument
) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

export function sortByCategoryThenName(
  a: SecondaryArgument,
  b: SecondaryArgument
) {
  if (a.category && b.category) {
    if (a.category.index < b.category.index) return -1;
    if (a.category.index > b.category.index) return 1;
  }
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

export function getShortest(array: string[]): string {
  if (array.length == 0) throw Error("There are no items in the array!");
  let shortest = array[0];
  for (let item of array) {
    if (item.length < shortest.length) shortest = item;
  }
  return shortest;
}

const fadeInTime = "0.15s";
const fadeOutTime = "0.15s";
const growTime = "0.2s";
const shrinkTime = "0.1s";

export const fadeInAnimation: AnimationMetadata[] = [
  state("true", style({ opacity: 1 })),
  state("false", style({})),
  transition("* => true", [
    style({ opacity: 0 }),
    animate(`${fadeInTime} ease-in`),
  ]),
];

export const fadeOutAnimation: AnimationMetadata[] = [
  state("true", style({ opacity: 0 })),
  state("false", style({})),
  transition("* => true", [animate(`${fadeOutTime} ease-out`)]),
];

const shrunk = style({
  flexBasis: 0,
  marginTop: "-2px",
  marginBottom: "-2px",
});

const grown = style({
  flexBasis: "36px",
  marginTop: "1px",
  marginBottom: "1px",
});

//Animations are smoother if you explicitly give both starting and ending values - saves getting them from the dom
export const dropDownAnimation: AnimationMetadata[] = [
  state("true", grown),
  state("false", style({})),
  transition("* => true", [shrunk, animate(`${growTime} ease-in`)]),
];

export const shrinkUpAnimation: AnimationMetadata[] = [
  state("true", shrunk),
  state("false", style({})),
  transition("* => true", [grown, animate(`${shrinkTime} ease-out`)]),
];
