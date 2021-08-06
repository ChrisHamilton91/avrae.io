import { Command, PrimaryArgument, ValueType } from "../../schemas/Commands";

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the combatant.",
});

const VALUE = new PrimaryArgument({
  name: "thp",
  signature: "thp",
  required: true,
  valueType: ValueType.NUMBER,
  desc: "Amount of temporary hit points. Modifies if starts with +/- or sets otherwise.",
});

export const THP = new Command({
  name: "Temporary HP",
  cmdStrings: ["init thp", "i thp"],
  shortDesc: "Modifies the temporary hit points of a combatant.",
  primaryArgs: [NAME, VALUE],
});
