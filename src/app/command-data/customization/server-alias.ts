import {
  Command,
  PrimaryArgument,
  Subcommand,
  ValueType,
} from "../../schemas/Commands";

//#region primary arguments
const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  desc: "The name of the server alias. This name will become a usable command.",
});

const CODE = new PrimaryArgument({
  name: "commands",
  signature: "code",
  required: false,
  valueType: ValueType.CODE,
  desc: "The commands that will be executed by the server alias.",
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
  shortDesc: "Deletes a server alias.",
  primaryArgs: [DELETE_NAME],
});
//#endregion

//#region list
const LIST = new Subcommand({
  name: "List Aliases",
  cmdStrings: ["list"],
  shortDesc: "Lists all server aliases.",
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
  shortDesc:
    "Renames a server alias or subscribed workshop alias to a new name.",
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
export const SERVER_ALIAS = new Command({
  name: "Server Alias",
  cmdStrings: ["servalias", "serveralias"],
  shortDesc:
    `Adds an alias that the entire server can use. ` +
    `Requires Administrator Discord permissions or a role called "Server Aliaser". ` +
    `If a user and a server have aliases with the same name, the user alias will take priority.`,
  primaryArgs: [NAME, CODE],
  subcommands: [AUTOFIX, DELETE, LIST, RENAME, SUB],
});
//#endregion
