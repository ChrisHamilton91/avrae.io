import { sortByName } from "src/app/command-data/@common/@common-functions";
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
import { BESTIARY_SERVER } from "./bestiary-server";

//#region primary arguments
const NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the bestiary to list monsters of.",
};
//#endregion

//#region subcommands
const DELETE_NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the bestiary to delete.",
};

const DELETE: Subcommand = {
  name: "Delete Bestiary",
  cmdStrings: ["delete"],
  shortDesc: "Deletes a bestiary from Avrae.",
  longDesc: "",
  primaryArgs: [DELETE_NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};

const IMPORT_URL: PrimaryArgument = {
  name: "url",
  signature: "url",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Url of the bestiary to import.",
};

const IMPORT: Subcommand = {
  name: "Import Bestiary",
  cmdStrings: ["import"],
  shortDesc: "Imports a bestiary from https://critterdb.com/.",
  longDesc:
    `Imports a bestiary from https://critterdb.com/.` +
    `\nTo share a bestiary with Avrae, enable Link Sharing in the sharing menu of your bestiary!` +
    `\nIf your attacks don't seem to be importing properly, you can add a hidden line to the description to set it:` +
    `\n<avrae hidden>NAME|TOHITBONUS|DAMAGE</avrae>`,
  primaryArgs: [IMPORT_URL],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};

const LIST: Subcommand = {
  name: "List Bestiaries",
  cmdStrings: ["list"],
  shortDesc: "Lists your available bestiaries.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region command
export const BESTIARY: Command = {
  name: "Bestiary",
  cmdStrings: ["bestiary"],
  shortDesc:
    "Commands to manage homebrew monsters. " +
    "When called without an argument, lists the current bestiary and the monsters in it. " +
    "When called with a name, switches to a different bestiary.",
  longDesc: "",
  primaryArgs: [NAME],
  secondaryArgs: [],
  subcommands: [DELETE, IMPORT, LIST, BESTIARY_SERVER].sort(sortByName),
  examples: [],
};
//#endregion
