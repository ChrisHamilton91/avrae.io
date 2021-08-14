import { Command, PrimaryArgument, ValueType } from "../command-schema";

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the condition to look up.",
});

export const CONDITION = new Command({
  name: "Lookup Conditon",
  cmdStrings: ["condition", "status"],
  shortDesc: "Looks up a condition.",
  primaryArgs: [NAME],
});
