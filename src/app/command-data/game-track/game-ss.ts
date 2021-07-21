import { Command, PrimaryArgument, ValueType } from "../../schemas/Commands";

const LEVEL = new PrimaryArgument({
  name: "level",
  signature: "level",
  required: false,
  valueType: ValueType.NUMBER,
  desc: "The spell level to view or modify slots.",
});

const VALUE = new PrimaryArgument({
  name: "slots",
  signature: "value",
  required: false,
  valueType: ValueType.NUMBER,
  desc: "The amount of slots to set for the specified level.",
});

export const GAME_SS = new Command({
  name: "Spell Slots",
  cmdStrings: ["g spellslot", "game spellslot", "g ss", "game ss"],
  shortDesc: "Views or sets your remaining spell slots.",
  primaryArgs: [LEVEL, VALUE],
});
