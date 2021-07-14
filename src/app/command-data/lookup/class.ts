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
  desc: "Name of the class to look up.",
};

const LEVEL: PrimaryArgument = {
  name: "level",
  signature: "level",
  required: false,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "If set, will look up the class features at this level.",
};

export const CLASS: Command = {
  name: "Lookup Class",
  cmdStrings: ["class"],
  shortDesc: "Looks up a class, or all features of a certain level.",
  longDesc: "",
  primaryArgs: [NAME, LEVEL],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
