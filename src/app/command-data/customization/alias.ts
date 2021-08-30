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
  desc: "The name of the alias. This name will become a usable command.",
});

const CODE = new PrimaryArgument({
  name: "commands",
  signature: "code",
  required: false,
  valueType: ValueType.CODE,
  desc: "The commands that will be executed by the alias.",
});
//#endregion

//#region subcommands
//#region autofix
const AUTOFIX = new Subcommand({
  name: "Autofix",
  cmdStrings: ["autofix"],
  shortDesc:
    "Ensures that all server and subscribed workshop aliases have unique names.",
});
//#endregion

//#region delete
const DELETE_NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name of the alias to delete.",
});

const DELETE = new Subcommand({
  name: "Delete Alias",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Deletes an alias.",
  primaryArgs: [DELETE_NAME],
});
//#endregion

//#region delete all
const DELETE_ALL = new Subcommand({
  name: "Delete All Aliases",
  cmdStrings: ["deleteall", "removeall"],
  shortDesc: "Deletes ALL user aliases.",
});
//#endregion

//#region list
const LIST = new Subcommand({
  name: "List Aliases",
  cmdStrings: ["list"],
  shortDesc: "Lists all aliases.",
});
//#endregion

//#region rename
const RENAME_OLD = new PrimaryArgument({
  name: "old name",
  signature: "old_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The current name of the alias to rename.",
});

const RENAME_NEW = new PrimaryArgument({
  name: "new name",
  signature: "old_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name to rename the alias to.",
});

const RENAME = new Subcommand({
  name: "Rename Alias",
  cmdStrings: ["rename"],
  shortDesc: "Renames an alias or subscribed workshop alias to a new name.",
  primaryArgs: [RENAME_OLD, RENAME_NEW],
});
//#endregion

//#region subscribe
const SUB_URL = new PrimaryArgument({
  name: "url",
  signature: "url",
  required: true,
  valueType: ValueType.STRING,
  desc: "The url of the workshop collection.",
});

const SUB = new Subcommand({
  name: "Subscribe",
  cmdStrings: ["subscribe", "sub"],
  shortDesc: "Subscribes to all aliases and snippets in a workshop collection.",
  primaryArgs: [SUB_URL],
});
//#endregion
//#endregion

//#region command
export const ALIAS = new Command({
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
  subcommands: [AUTOFIX, DELETE, DELETE_ALL, LIST, RENAME, SUB],
});
//#endregion
