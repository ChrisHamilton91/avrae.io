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
  desc: "The name of the user variable to create.",
};

const VALUE: PrimaryArgument = {
  name: "value",
  signature: "value",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "The value to assign to the user variable.",
};
//#endregion

//#region subcommands
const LIST: Subcommand = {
  name: "List Server Variables",
  cmdStrings: ["list"],
  shortDesc: "Lists all uvars for the user.",
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
  desc: "The name of the user variable to delete.",
};

const DELETE: Subcommand = {
  name: "Delete Server Variable",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Deletes a uvar from the user.",
  longDesc: "",
  primaryArgs: [DELETE_NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};

const DELETE_ALL: Subcommand = {
  name: "Delete All Aliases",
  cmdStrings: ["deleteall", "removeall"],
  shortDesc: "Deletes ALL user variables.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region command
export const USER_VAR: Command = {
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
  secondaryArgs: [],
  subcommands: [LIST, DELETE, DELETE_ALL],
  examples: [],
};
//#endregion
