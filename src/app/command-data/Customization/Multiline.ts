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

const CMDS: PrimaryArgument = {
  name: "commands",
  signature: "commands",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "A list of commands, each prefixed and on a new line.",
};

export const MULTILINE: Command = {
  name: "Multiline Commands",
  cmdStrings: ["multiline"],
  shortDesc:
    "Runs each line as a separate command, with a 1 second delay between commands.",
  longDesc:
    "Runs each line as a separate command, with a 1 second delay between commands." +
    "\nLimited to 1 multiline every 20 seconds, with a max of 20 commands, due to abuse." +
    "\nUsage:" +
    "\n!multiline" +
    "\n!roll 1d20" +
    "\n!spell Fly" +
    "\n!monster Rat",
  primaryArgs: [CMDS],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
