import {
  Command,
  PrimaryArgument,
  Subcommand,
  ValueType,
} from "../../command-schema";
import { TOME_SERVER } from "./tome-server";

//#region primary arguments
const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  desc: "Name of the tome to list description.",
});
//#endregion

//#region subcommands
//#region editor
const EDITOR_USER = new PrimaryArgument({
  name: "user",
  signature: "user",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the user to give editor privileges.",
});

const EDITOR = new Subcommand({
  name: "Allow Edits",
  cmdStrings: ["editor"],
  shortDesc: "Allows another user to edit your active tome.",
  primaryArgs: [EDITOR_USER],
});
//#endregion

//#region list
const LIST = new Subcommand({
  name: "List Tomes",
  cmdStrings: ["list"],
  shortDesc: "Lists your available tomes.",
});
//#endregion

//#region sub
const SUB_URL = new PrimaryArgument({
  name: "url",
  signature: "url",
  required: true,
  valueType: ValueType.STRING,
  desc: "Url of the tome to subscribe to.",
});

const SUB = new Subcommand({
  name: "Subscribe to Tome",
  cmdStrings: ["subscribe", "sub"],
  shortDesc: "Subscribes to another user's tome.",
  primaryArgs: [SUB_URL],
});
//#endregion

//#region unsub
const UNSUB_NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the tome to unsubscribe from.",
});

const UNSUB = new Subcommand({
  name: "Unsubscribe to Tome",
  cmdStrings: ["unsubscribe", "unsub"],
  shortDesc: "Unsubscribes from another user's tome.",
  primaryArgs: [UNSUB_NAME],
});
//#endregion
//#endregion

//#region command
export const TOME = new Command({
  name: "Homebrew Spells",
  cmdStrings: ["tome"],
  shortDesc:
    "Commands to manage homebrew spells. " +
    "When called without an argument, lists the current tome and its description. " +
    "When called with a name, switches to a different tome.",
  primaryArgs: [NAME],
  subcommands: [EDITOR, LIST, TOME_SERVER, SUB, UNSUB],
});
//#endregion
