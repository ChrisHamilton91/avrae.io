import { sortByName } from "src/app/commands-ui/@globals";
import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategories,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";

//#region primary arguments
const NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the variable to show the value of.",
};
//#endregion

//#region subcommands
//#region create
const CREATE_VALUE: PrimaryArgument = {
  name: "value",
  signature: "value",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The value to assign to the global variable.",
};

const CREATE: Subcommand = {
  name: "Create Global Variable",
  cmdStrings: ["create"],
  shortDesc:
    "Creates a global variable. A name will be randomly assigned upon creation.",
  longDesc: "",
  primaryArgs: [CREATE_VALUE],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region edit
const EDIT_NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the global variable.",
};

const EDIT_VALUE: PrimaryArgument = {
  name: "value",
  signature: "value",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The value to assign to the global variable.",
};

const EDIT: Subcommand = {
  name: "Edit Global Variable",
  cmdStrings: ["edit"],
  shortDesc: "Edits a global variable.",
  longDesc: "",
  primaryArgs: [EDIT_NAME, EDIT_VALUE],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region editor
const EDITOR_NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the global variable to toggle status for.",
};

const EDITOR_USER: PrimaryArgument = {
  name: "user",
  signature: "user",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "The user to toggle status for.",
};

const EDITOR: Subcommand = {
  name: "Toggle Editor Status",
  cmdStrings: ["editor"],
  shortDesc: "Toggles the editor status of a user.",
  longDesc: "",
  primaryArgs: [EDITOR_NAME, EDITOR_USER],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region list
const LIST: Subcommand = {
  name: "List Global Variables",
  cmdStrings: ["list"],
  shortDesc: "Lists all global variables for the user.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region delete
const DELETE: Subcommand = {
  name: "Delete Global Variable",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Deletes a global variable.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion
//#endregion

//#region command
export const GLOBAL_VAR: Command = {
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
  secondaryArgs: [],
  subcommands: [CREATE, EDIT, EDITOR, LIST, DELETE].sort(sortByName),
  examples: [],
};
//#endregion
