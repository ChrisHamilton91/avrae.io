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

//#region secondary arguments
const HERE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "send to channel",
  cmdString: "-here",
  valueType: ValueType.TRUE,
  desc: "Sends help to the channel instead of PMs.",
  example: "",
  ephemeral: false,
};
//#endregion

//#region primary arguments
const COMMAND: PrimaryArgument = {
  name: "command",
  signature: "command",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "The command to show help for.",
};
//#endregion

//#region command
export const HELP: Command = {
  name: "Help",
  cmdStrings: ["help"],
  shortDesc:
    "Sends help to your PMs. Shows help for the bot or a specifc command.",
  longDesc: "",
  primaryArgs: [COMMAND],
  secondaryArgs: [HERE],
  subcommands: [],
  examples: [],
};
//#endregion
