import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategory,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";

const NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the combatant to attach a note to.",
};

const VALUE: PrimaryArgument = {
  name: "note",
  signature: "note",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "The note to attach.",
};

export const NOTE: Command = {
  name: "Attach Note",
  cmdStrings: ["init note", "i note"],
  shortDesc: "Attaches a note to a combatant.",
  longDesc: "",
  primaryArgs: [NAME, VALUE],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
