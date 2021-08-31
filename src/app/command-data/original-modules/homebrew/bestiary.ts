import {
  Command,
  PrimaryArgument,
  Subcommand,
  ValueType,
} from "../../command-schema";
import { BESTIARY_SERVER } from "./bestiary-server";

//#region primary arguments
const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  desc: "Name of the bestiary to list monsters of.",
});
//#endregion

//#region subcommands
const DELETE_NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the bestiary to delete.",
});

const DELETE = new Subcommand({
  name: "Delete Bestiary",
  cmdStrings: ["delete"],
  shortDesc: "Deletes a bestiary from Avrae.",
  primaryArgs: [DELETE_NAME],
});

const IMPORT_URL = new PrimaryArgument({
  name: "url",
  signature: "url",
  required: true,
  valueType: ValueType.STRING,
  desc: "Url of the bestiary to import.",
});

const IMPORT = new Subcommand({
  name: "Import Bestiary",
  cmdStrings: ["import"],
  shortDesc: "Imports a bestiary from https://critterdb.com/.",
  longDesc:
    `Imports a bestiary from https://critterdb.com/.` +
    `\nTo share a bestiary with Avrae, enable Link Sharing in the sharing menu of your bestiary!` +
    `\nIf your attacks don't seem to be importing properly, you can add a hidden line to the description to set it:` +
    `\n<avrae hidden>NAME|TOHITBONUS|DAMAGE</avrae>`,
  primaryArgs: [IMPORT_URL],
});

const LIST = new Subcommand({
  name: "List Bestiaries",
  cmdStrings: ["list"],
  shortDesc: "Lists your available bestiaries.",
});
//#endregion

//#region command
export const BESTIARY = new Command({
  name: "Bestiary",
  cmdStrings: ["bestiary"],
  shortDesc:
    "Commands to manage homebrew monsters. " +
    "When called without an argument, lists the current bestiary and the monsters in it. " +
    "When called with a name, switches to a different bestiary.",
  primaryArgs: [NAME],
  subcommands: [DELETE, IMPORT, LIST, BESTIARY_SERVER],
});
//#endregion
