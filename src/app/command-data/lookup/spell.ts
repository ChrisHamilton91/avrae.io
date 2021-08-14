import { Command, PrimaryArgument, ValueType } from "../command-schema";

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the spell to look up.",
});

export const SPELL = new Command({
  name: "Lookup Spell",
  cmdStrings: ["spell"],
  shortDesc: "Looks up a spell.",
  primaryArgs: [NAME],
});
