import { Command, PrimaryArgument, ValueType } from "../../command-schema";

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

export const MULTIROLL = new Command({
  name: "Multi Roll",
  cmdStrings: ["multiroll", "rr"],
  shortDesc: "Rolls dice in xdy format a given number of times.",
  primaryArgs: [ITERATIONS, ROLLSTR],
});
