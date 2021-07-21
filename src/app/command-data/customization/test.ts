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

const STRING: PrimaryArgument = {
  name: "test alias",
  signature: "test_alias",
  required: true,
  valueType: ValueType.CODE,
  default: null,
  desc: "The commands to test as if they were an alias.",
};

export const TEST: Command = {
  name: "Test Alias",
  cmdStrings: ["test"],
  shortDesc: "Parses a string as if it were in an alias, for testing.",
  longDesc: "",
  primaryArgs: [STRING],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
