import { sortByName } from "src/app/commands-ui/@common-functions";
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
  desc: "The name of the server snippet.",
};

const CODE: PrimaryArgument = {
  name: "code",
  signature: "code",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "The code encapsulated in the snippet.",
};
//#endregion

//#region subcommands
//#region autofix
const AUTOFIX: Subcommand = {
  name: "Autofix",
  cmdStrings: ["autofix"],
  shortDesc:
    "Ensures that all server and subscribed workshop snippets have unique names.",
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
  desc: "The name of the snippet to delete.",
};

const DELETE: Subcommand = {
  name: "Delete Snippet",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Deletes a server snippet.",
  longDesc: "",
  primaryArgs: [DELETE_NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region list
const LIST: Subcommand = {
  name: "List Snippets",
  cmdStrings: ["list"],
  shortDesc: "Lists all server snippets.",
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
  desc: "The current name of the snippet to rename.",
};

const RENAME_NEW: PrimaryArgument = {
  name: "new name",
  signature: "old_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name to rename the snippet to.",
};

const RENAME: Subcommand = {
  name: "Rename Snippet",
  cmdStrings: ["rename"],
  shortDesc:
    "Renames a server snippet or subscribed workshop snippet to a new name.",
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
export const SERVER_SNIPPET: Command = {
  name: "Server Snippet",
  cmdStrings: ["servsnippet", "serversnippet"],
  shortDesc:
    `Creates a snippet that the entire server can use. ` +
    `Requires Administrator Discord permissions or a role called "Server Aliaser". ` +
    `If a user and a server have snippets with the same name, the user snippet will take priority.`,
  longDesc: "",
  primaryArgs: [NAME, CODE],
  secondaryArgs: [],
  subcommands: [AUTOFIX, DELETE, LIST, RENAME, SUB].sort(sortByName),
  examples: [],
};
//#endregion
