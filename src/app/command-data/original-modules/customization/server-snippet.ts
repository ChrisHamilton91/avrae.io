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
  desc: "The name of the server snippet. This name will now always be replaced with the provided code.",
});

const CODE = new PrimaryArgument({
  name: "code",
  signature: "code",
  required: false,
  valueType: ValueType.STRING,
  desc: "The code that will always replace the given name. This can be any text.",
});
//#endregion

//#region subcommands
//#region autofix
const AUTOFIX = new Subcommand({
  name: "Autofix",
  cmdStrings: ["autofix"],
  shortDesc:
    "Ensures that all server and subscribed workshop snippets have unique names.",
});
//#endregion

//#region delete
const DELETE_NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name of the snippet to delete.",
});

const DELETE = new Subcommand({
  name: "Delete Snippet",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Deletes a server snippet.",
  primaryArgs: [DELETE_NAME],
});
//#endregion

//#region list
const LIST = new Subcommand({
  name: "List Snippets",
  cmdStrings: ["list"],
  shortDesc: "Lists all server snippets.",
});
//#endregion

//#region rename
const RENAME_OLD = new PrimaryArgument({
  name: "old name",
  signature: "old_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The current name of the snippet to rename.",
});

const RENAME_NEW = new PrimaryArgument({
  name: "new name",
  signature: "old_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name to rename the snippet to.",
});

const RENAME = new Subcommand({
  name: "Rename Snippet",
  cmdStrings: ["rename"],
  shortDesc:
    "Renames a server snippet or subscribed workshop snippet to a new name.",
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
export const SERVER_SNIPPET = new Command({
  name: "Server Snippet",
  cmdStrings: ["servsnippet", "serversnippet"],
  shortDesc:
    `Creates a snippet that the entire server can use. ` +
    `Requires Administrator Discord permissions or a role called "Server Aliaser". ` +
    `If a user and a server have snippets with the same name, the user snippet will take priority.`,
  primaryArgs: [NAME, CODE],
  subcommands: [AUTOFIX, DELETE, LIST, RENAME, SUB],
});
//#endregion
