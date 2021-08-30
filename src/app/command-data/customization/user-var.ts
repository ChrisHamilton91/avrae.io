import {
  Command,
  PrimaryArgument,
  Subcommand,
  ValueType,
} from "../command-schema";

//#region primary arguments
const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  desc: "The name of the user variable to create.",
});

const VALUE = new PrimaryArgument({
  name: "value",
  signature: "value",
  required: false,
  valueType: ValueType.STRING,
  desc: "The value to assign to the user variable.",
});
//#endregion

//#region subcommands
const LIST = new Subcommand({
  name: "List Server Variables",
  cmdStrings: ["list"],
  shortDesc: "Lists all uvars for the user.",
});

const DELETE_NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name of the user variable to delete.",
});

const DELETE = new Subcommand({
  name: "Delete Server Variable",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Deletes a uvar from the user.",
  primaryArgs: [DELETE_NAME],
});

const DELETE_ALL = new Subcommand({
  name: "Delete All Aliases",
  cmdStrings: ["deleteall", "removeall"],
  shortDesc: "Deletes ALL user variables.",
});
//#endregion

//#region command
export const USER_VAR = new Command({
  name: "User Variables",
  cmdStrings: ["uservar", "uvar"],
  shortDesc:
    "Commands to manage user variables for use in snippets and aliases.",
  longDesc:
    "Commands to manage user variables for use in snippets and aliases." +
    "\nUser variables can be called in the -phrase tag by surrounding the variable name with {} (calculates) or <> (prints)." +
    "\nArguments surrounded with {{}} will be evaluated as a custom script." +
    "\nSee http://avrae.io/cheatsheets/aliasing for more help.",
  primaryArgs: [NAME, VALUE],
  subcommands: [LIST, DELETE, DELETE_ALL],
});
//#endregion
