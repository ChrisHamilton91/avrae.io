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
  desc: "Name of the feat to look up.",
};

export const FEAT: Command = {
  name: "Lookup Feat",
  cmdStrings: ["feat"],
  shortDesc: "Looks up a feat.",
  longDesc: "",
  primaryArgs: [NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
