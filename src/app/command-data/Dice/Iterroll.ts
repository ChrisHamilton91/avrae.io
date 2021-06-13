import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  Category,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";

//#region primary arguments
const ITERATIONS: PrimaryArgument = {
  name: "iterations",
  signature: "iterations",
  required: true,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "Number of times to roll.",
};

const ROLLSTR: PrimaryArgument = {
  name: "roll string",
  signature: "rollStr",
  required: true,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "The roll string (ie. 1d6, 2d4+3, 2d10kh1).",
};

const DC: PrimaryArgument = {
  name: "difficulty class",
  signature: "dc",
  required: false,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "The difficulty class (dc) of the roll.",
};
//#endregion

//#region command
export const ITERROLL: Command = {
  name: "Iterative Roll",
  cmdStrings: ["iterroll", "rrr"],
  shortDesc: "Rolls dice in xdy format, given a set dc.",
  longDesc: "",
  primaryArgs: [ITERATIONS, ROLLSTR, DC],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion
