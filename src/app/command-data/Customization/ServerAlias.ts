import { sortByName } from "src/app/commands-ui/@commonFunctions";
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
  desc: "The name of the server alias. This name will become a usable command.",
};

const CODE: PrimaryArgument = {
  name: "commands",
  signature: "code",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "The commands that will be executed by the server alias.",
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
  shortDesc: "Deletes a server alias.",
  longDesc: "",
  primaryArgs: [DELETE_NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region list
const LIST: Subcommand = {
  name: "List Aliases",
  cmdStrings: ["list"],
  shortDesc: "Lists all server aliases.",
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
  shortDesc:
    "Renames a server alias or subscribed workshop alias to a new name.",
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
export const SERVER_ALIAS: Command = {
  name: "Server Alias",
  cmdStrings: ["servalias", "serveralias"],
  shortDesc:
    `Adds an alias that the entire server can use. ` +
    `Requires Administrator Discord permissions or a role called "Server Aliaser". ` +
    `If a user and a server have aliases with the same name, the user alias will take priority.`,
  longDesc: "",
  primaryArgs: [NAME, CODE],
  secondaryArgs: [],
  subcommands: [AUTOFIX, DELETE, LIST, RENAME, SUB].sort(sortByName),
  examples: [],
};
//#endregion
