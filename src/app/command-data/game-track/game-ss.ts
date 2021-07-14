import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategories,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";

const LEVEL: PrimaryArgument = {
  name: "level",
  signature: "level",
  required: false,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "The spell level to view or modify slots.",
};

const VALUE: PrimaryArgument = {
  name: "slots",
  signature: "value",
  required: false,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "The amount of slots to set for the specified level.",
};

export const GAME_SS: Command = {
  name: "Spell Slots",
  cmdStrings: ["g spellslot", "game spellslot", "g ss", "game ss"],
  shortDesc: "Views or sets your remaining spell slots.",
  longDesc: "",
  primaryArgs: [LEVEL, VALUE],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
