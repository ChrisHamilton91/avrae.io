import { Command, MultilineArgument, ValueType } from "../command-schema";

const CMDS = new MultilineArgument({
  name: "commands",
  signature: "commands",
  required: true,
  valueType: ValueType.MULTILINE,
  desc: "A list of commands, each prefixed and on a new line.",
});

export const MULTILINE = new Command({
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
});
