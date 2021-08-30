import { Command, PrimaryArgument, ValueType } from "../command-schema";

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the subclass to look up.",
});

export const SUBCLASS = new Command({
  name: "Lookup Subclass",
  cmdStrings: ["subclass"],
  shortDesc: "Looks up a subclass.",
  primaryArgs: [NAME],
});
