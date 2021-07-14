import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategories,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";

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

export const MULTIROLL: Command = {
  name: "Multi Roll",
  cmdStrings: ["multiroll", "rr"],
  shortDesc: "Rolls dice in xdy format a given number of times.",
  longDesc: "",
  primaryArgs: [ITERATIONS, ROLLSTR],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
