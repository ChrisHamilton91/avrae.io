import {
  Command,
  PrimaryArgument,
  SecondaryArgument,
  ValueType,
} from "../../schemas/Commands";

//#region secondary arguments
const HERE = new SecondaryArgument({
  name: "send to channel",
  cmdString: "-here",
  valueType: ValueType.TRUE,
  desc: "Sends help to the channel instead of PMs.",
  ephemeral: false,
});
//#endregion

//#region primary arguments
const COMMAND = new PrimaryArgument({
  name: "command",
  signature: "command",
  required: false,
  valueType: ValueType.STRING,
  desc: "The command to show help for.",
});
//#endregion

//#region command
export const HELP = new Command({
  name: "Help",
  cmdStrings: ["help"],
  shortDesc:
    "Sends help to your PMs. Shows help for the bot or a specifc command.",
  primaryArgs: [COMMAND],
  secondaryArgs: [HERE],
});
//#endregion
