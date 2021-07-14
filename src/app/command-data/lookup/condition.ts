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
  desc: "Name of the condition to look up.",
};

export const CONDITION: Command = {
  name: "Lookup Conditon",
  cmdStrings: ["condition", "status"],
  shortDesc: "Looks up a condition.",
  longDesc: "",
  primaryArgs: [NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
