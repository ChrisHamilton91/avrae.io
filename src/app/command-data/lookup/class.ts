import { Command, PrimaryArgument, ValueType } from "../command-schema";

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the class to look up.",
});

const LEVEL = new PrimaryArgument({
  name: "level",
  signature: "level",
  required: false,
  valueType: ValueType.NUMBER,
  desc: "If set, will look up the class features at this level.",
});

export const CLASS = new Command({
  name: "Lookup Class",
  cmdStrings: ["class"],
  shortDesc: "Looks up a class, or all features of a certain level.",
  primaryArgs: [NAME, LEVEL],
});
