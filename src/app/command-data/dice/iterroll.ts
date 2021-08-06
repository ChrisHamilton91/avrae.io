import { Command, PrimaryArgument, ValueType } from "../../schemas/Commands";

//#region primary arguments
const ITERATIONS = new PrimaryArgument({
  name: "iterations",
  signature: "iterations",
  required: true,
  valueType: ValueType.NUMBER,
  desc: "Number of times to roll.",
});

const ROLLSTR = new PrimaryArgument({
  name: "roll string",
  signature: "rollStr",
  required: true,
  valueType: ValueType.NUMBER,
  desc: "The roll string (ie. 1d6, 2d4+3, 2d10kh1).",
});

const DC = new PrimaryArgument({
  name: "difficulty class",
  signature: "dc",
  required: false,
  valueType: ValueType.NUMBER,
  desc: "The difficulty class (dc) of the roll.",
});
//#endregion

//#region command
export const ITERROLL = new Command({
  name: "Iterative Roll",
  cmdStrings: ["iterroll", "rrr"],
  shortDesc: "Rolls dice in xdy format, given a set dc.",
  primaryArgs: [ITERATIONS, ROLLSTR, DC],
});
//#endregion
