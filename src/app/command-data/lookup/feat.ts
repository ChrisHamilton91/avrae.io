import { Command, PrimaryArgument, ValueType } from "../../schemas/Commands";

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the feat to look up.",
});

export const FEAT = new Command({
  name: "Lookup Feat",
  cmdStrings: ["feat"],
  shortDesc: "Looks up a feat.",
  primaryArgs: [NAME],
});
