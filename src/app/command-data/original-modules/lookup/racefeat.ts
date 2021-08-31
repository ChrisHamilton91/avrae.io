import { Command, PrimaryArgument, ValueType } from "../../command-schema";

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the racial feature to look up.",
});

export const RACEFEAT = new Command({
  name: "Lookup Racial Feature",
  cmdStrings: ["racefeat"],
  shortDesc: "Looks up a racial feature.",
  primaryArgs: [NAME],
});
