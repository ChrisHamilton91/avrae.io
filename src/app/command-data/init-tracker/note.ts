import { Command, PrimaryArgument, ValueType } from "../command-schema";

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the combatant to attach a note to.",
});

const VALUE = new PrimaryArgument({
  name: "note",
  signature: "note",
  required: false,
  valueType: ValueType.STRING,
  desc: "The note to attach.",
});

export const NOTE = new Command({
  name: "Attach Note",
  cmdStrings: ["init note", "i note"],
  shortDesc: "Attaches a note to a combatant.",
  primaryArgs: [NAME, VALUE],
});
