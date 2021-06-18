import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  Category,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";

const STRING: PrimaryArgument = {
  name: "test alias",
  signature: "test_alias",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The commands to test as if they were an alias.",
};

export const TEST: Command = {
  name: "Test Alias",
  cmdStrings: ["tembed"],
  shortDesc: "Parses a string as if it were in an alias, for testing.",
  longDesc: "",
  primaryArgs: [STRING],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
