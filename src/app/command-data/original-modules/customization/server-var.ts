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
  desc: "The name of the server variable to create.",
});

const VALUE = new PrimaryArgument({
  name: "value",
  signature: "value",
  required: false,
  valueType: ValueType.STRING,
  desc: "The value to assign to the server variable.",
});
//#endregion

//#region subcommands
const LIST = new Subcommand({
  name: "List Server Variables",
  cmdStrings: ["list"],
  shortDesc: "Lists all svars for the server.",
});

const DELETE_NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name of the server variable to delete.",
});

const DELETE = new Subcommand({
  name: "Delete Server Variable",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Deletes an svar from the server.",
  primaryArgs: [DELETE_NAME],
});
//#endregion

//#region command
export const SERVER_VAR = new Command({
  name: "Server Variables",
  cmdStrings: ["servervar", "svar"],
  shortDesc:
    "Commands to manage server variables for use in snippets and aliases.",
  longDesc:
    "Commands to manage server variables for use in snippets and aliases." +
    "\nServer variables may only be set by those with permissions to create server aliases (see !help servalias)," +
    "\nmust be explicitly retrieved in an alias, and are read-only." +
    "\nThese are usually used to set server-wide defaults for aliases without editing the code." +
    "\nSee http://avrae.io/cheatsheets/aliasing for more help.",
  primaryArgs: [NAME, VALUE],
  subcommands: [LIST, DELETE],
});
//#endregion
