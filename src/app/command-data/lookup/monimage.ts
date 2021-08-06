import { Command, PrimaryArgument, ValueType } from "../../schemas/Commands";

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the monster to show an image of.",
});

export const MONIMAGE = new Command({
  name: "Lookup Monster Image",
  cmdStrings: ["monimage"],
  shortDesc: "Shows a monster's image.",
  primaryArgs: [NAME],
});
