import { Command, PrimaryArgument, ValueType } from "../command-schema";

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the rule to look up.",
});

export const RULE = new Command({
  name: "Lookup Rule",
  cmdStrings: ["rule", "reference"],
  shortDesc: "Looks up a rule.",
  primaryArgs: [NAME],
});
