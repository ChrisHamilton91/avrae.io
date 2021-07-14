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

const NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the subclass to look up.",
};

export const SUBCLASS: Command = {
  name: "Lookup Subclass",
  cmdStrings: ["subclass"],
  shortDesc: "Looks up a subclass.",
  longDesc: "",
  primaryArgs: [NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
