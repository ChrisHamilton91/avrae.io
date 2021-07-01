import { sortByName } from "src/app/commands-ui/globals";
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
  desc: "The name of the alias. This name will become a usable command.",
};

const CODE: PrimaryArgument = {
  name: "commands",
  signature: "code",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "The commands that will be executed by the alias.",
};
//#endregion

//#region subcommands
//#region autofix
const AUTOFIX: Subcommand = {
  name: "Autofix",
  cmdStrings: ["autofix"],
  shortDesc:
    "Ensures that all server and subscribed workshop aliases have unique names.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region delete
const DELETE_NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the alias to delete.",
};

const DELETE: Subcommand = {
  name: "Delete Alias",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Deletes an alias.",
  longDesc: "",
  primaryArgs: [DELETE_NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region delete all
const DELETE_ALL: Subcommand = {
  name: "Delete All Aliases",
  cmdStrings: ["deleteall", "removeall"],
  shortDesc: "Deletes ALL user aliases.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region list
const LIST: Subcommand = {
  name: "List Aliases",
  cmdStrings: ["list"],
  shortDesc: "Lists all aliases.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region rename
const RENAME_OLD: PrimaryArgument = {
  name: "old name",
  signature: "old_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The current name of the alias to rename.",
};

const RENAME_NEW: PrimaryArgument = {
  name: "new name",
  signature: "old_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name to rename the alias to.",
};

const RENAME: Subcommand = {
  name: "Rename Alias",
  cmdStrings: ["rename"],
  shortDesc: "Renames an alias or subscribed workshop alias to a new name.",
  longDesc: "",
  primaryArgs: [RENAME_OLD, RENAME_NEW],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region subscribe
const SUB_URL: PrimaryArgument = {
  name: "url",
  signature: "url",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The url of the workshop collection.",
};

const SUB: Subcommand = {
  name: "Subscribe",
  cmdStrings: ["subscribe", "sub"],
  shortDesc: "Subscribes to all aliases and snippets in a workshop collection.",
  longDesc: "",
  primaryArgs: [SUB_URL],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion
//#endregion

//#region command
export const ALIAS: Command = {
  name: "Alias",
  cmdStrings: ["alias"],
  shortDesc:
    "Creates a custom user command. After an alias has been added, you can run the command with !<name>.",
  longDesc:
    "Creates a custom user command. After an alias has been added, you can run the command with !<alias_name>." +
    "\nIf a user and a server have aliases with the same name, the user alias will take priority." +
    "\nNote that aliases cannot call other aliases." +
    "\nCheck out the documentation at https://avrae.readthedocs.io for more information.",
  primaryArgs: [NAME, CODE],
  secondaryArgs: [],
  subcommands: [AUTOFIX, DELETE, DELETE_ALL, LIST, RENAME, SUB].sort(
    sortByName
  ),
  examples: [],
};
//#endregion
