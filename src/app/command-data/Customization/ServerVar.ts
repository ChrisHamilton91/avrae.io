import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategory,
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
  desc: "The name of the server variable to create.",
};

const VALUE: PrimaryArgument = {
  name: "value",
  signature: "value",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "The value to assign to the server variable.",
};
//#endregion

//#region subcommands
const LIST: Subcommand = {
  name: "List Server Variables",
  cmdStrings: ["list"],
  shortDesc: "Lists all svars for the server.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};

const DELETE_NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the server variable to delete.",
};

const DELETE: Subcommand = {
  name: "Delete Server Variable",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Deletes an svar from the server.",
  longDesc: "",
  primaryArgs: [DELETE_NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region command
export const SERVER_VAR: Command = {
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
  secondaryArgs: [],
  subcommands: [LIST, DELETE],
  examples: [],
};
//#endregion
