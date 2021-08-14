import { Command, PrimaryArgument, ValueType } from "../command-schema";

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the race to look up.",
});

export const RACE = new Command({
  name: "Lookup Race",
  cmdStrings: ["race"],
  shortDesc: "Looks up a race.",
  primaryArgs: [NAME],
});
