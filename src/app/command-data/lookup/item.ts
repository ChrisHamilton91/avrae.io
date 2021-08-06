import { Command, PrimaryArgument, ValueType } from "../../schemas/Commands";

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the item to look up.",
});

export const ITEM = new Command({
  name: "Lookup Item",
  cmdStrings: ["item"],
  shortDesc: "Looks up an item.",
  primaryArgs: [NAME],
});
