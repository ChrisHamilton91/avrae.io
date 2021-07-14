import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategories,
  ValueType,
} from "../../schemas/Commands";

const MESSAGE: PrimaryArgument = {
  name: "message",
  signature: "msg",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The message to echo.",
};

export const ECHO: Command = {
  name: "Echo",
  cmdStrings: ["echo"],
  shortDesc: "Echos a message.",
  longDesc: "",
  primaryArgs: [MESSAGE],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
