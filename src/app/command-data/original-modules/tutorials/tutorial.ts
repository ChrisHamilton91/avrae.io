import {
  Command,
  PrimaryArgument,
  Subcommand,
  ValueType,
} from "../../command-schema";

//#region primary arguments
const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  desc: "The name of the tutorial to begin.",
});
//#endregion

//#region subcommands
const END = new Subcommand({
  name: "End Tutorial",
  cmdStrings: ["end"],
  shortDesc: "Ends the current tutorial.",
});

const LIST = new Subcommand({
  name: "List Tutorials",
  cmdStrings: ["list"],
  shortDesc: "Lists the available tutorials.",
});

const SKIP = new Subcommand({
  name: "Skip Objective",
  cmdStrings: ["skip"],
  shortDesc:
    "Skips the current objective, and moves on to the next part of the tutorial.",
});
//#endregion

//#region command
export const TUTORIAL = new Command({
  name: "Tutorial",
  cmdStrings: ["tutorial"],
  shortDesc:
    "Shows the current tutorial objective, lists the available tutorials if one is not active, or begins a new tutorial.",
  primaryArgs: [NAME],
  subcommands: [END, LIST, SKIP],
});
//#endregion
