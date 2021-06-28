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
  desc: "Name of the spell to look up.",
};

export const SPELL: Command = {
  name: "Lookup Spell",
  cmdStrings: ["spell"],
  shortDesc: "Looks up a spell.",
  longDesc: "",
  primaryArgs: [NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
