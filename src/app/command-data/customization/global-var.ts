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
  desc: "Name of the variable to show the value of.",
});
//#endregion

//#region subcommands
//#region create
const CREATE_VALUE = new PrimaryArgument({
  name: "value",
  signature: "value",
  required: true,
  valueType: ValueType.STRING,
  desc: "The value to assign to the global variable.",
});

const CREATE = new Subcommand({
  name: "Create Global Variable",
  cmdStrings: ["create"],
  shortDesc:
    "Creates a global variable. A name will be randomly assigned upon creation.",
  primaryArgs: [CREATE_VALUE],
});
//#endregion

//#region edit
const EDIT_NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name of the global variable.",
});

const EDIT_VALUE = new PrimaryArgument({
  name: "value",
  signature: "value",
  required: true,
  valueType: ValueType.STRING,
  desc: "The value to assign to the global variable.",
});

const EDIT = new Subcommand({
  name: "Edit Global Variable",
  cmdStrings: ["edit"],
  shortDesc: "Edits a global variable.",
  primaryArgs: [EDIT_NAME, EDIT_VALUE],
});
//#endregion

//#region editor
const EDITOR_NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name of the global variable to toggle status for.",
});

const EDITOR_USER = new PrimaryArgument({
  name: "user",
  signature: "user",
  required: false,
  valueType: ValueType.STRING,
  desc: "The user to toggle status for.",
});

const EDITOR = new Subcommand({
  name: "Toggle Editor Status",
  cmdStrings: ["editor"],
  shortDesc: "Toggles the editor status of a user.",
  primaryArgs: [EDITOR_NAME, EDITOR_USER],
});
//#endregion

//#region list
const LIST = new Subcommand({
  name: "List Global Variables",
  cmdStrings: ["list"],
  shortDesc: "Lists all global variables for the user.",
});
//#endregion

//#region delete
const DELETE = new Subcommand({
  name: "Delete Global Variable",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Deletes a global variable.",
});
//#endregion
//#endregion

//#region command
export const GLOBAL_VAR = new Command({
  name: "Global Variables",
  cmdStrings: ["globalvar", "gvar"],
  shortDesc:
    "Commands to manage global, community variables for use in snippets and aliases. If run without a subcommand, shows the value of a global variable.",
  longDesc:
    "Commands to manage global, community variables for use in snippets and aliases." +
    "\nIf run without a subcommand, shows the value of a global variable." +
    "\nGlobal variables are readable by all users, but only editable by the creator." +
    "\nGlobal variables must be accessed through scripting, with get_gvar(gvar_id)." +
    "\nSee http://avrae.io/cheatsheets/aliasing for more help.",
  primaryArgs: [NAME],
  subcommands: [CREATE, EDIT, EDITOR, LIST, DELETE],
});
//#endregion
