import { Command, PrimaryArgument, ValueType } from "../../schemas/Commands";

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the background to look up.",
});

export const BACKGROUND = new Command({
  name: "Lookup Background",
  cmdStrings: ["background"],
  shortDesc: "Looks up a background.",
  primaryArgs: [NAME],
});
