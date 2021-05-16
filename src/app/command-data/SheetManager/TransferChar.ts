import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  Category,
  ValueType,
} from "../../schemas/Commands";

const USER: PrimaryArgument = {
  name: "user",
  signature: "user",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The user to transfer the character to.",
};

export const TRANSFERCHAR: Command = {
  name: "Transfer Character",
  cmdStrings: ["transferchar"],
  shortDesc: "Gives a copy of the active character to another user.",
  longDesc: "",
  primaryArgs: [USER],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
