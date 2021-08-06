import {
  Command,
  PrimaryArgument,
  Subcommand,
  ValueType,
} from "../../schemas/Commands";
import { PACK_SERVER } from "./pack-server";

//#region primary arguments
const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  desc: "Name of the pack to list description.",
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
  shortDesc: "Allows another user to edit your active pack.",
  primaryArgs: [EDITOR_USER],
});
//#endregion

//#region list
const LIST = new Subcommand({
  name: "List Packs",
  cmdStrings: ["list"],
  shortDesc: "Lists your available packs.",
});
//#endregion

//#region sub
const SUB_URL = new PrimaryArgument({
  name: "url",
  signature: "url",
  required: true,
  valueType: ValueType.STRING,
  desc: "Url of the pack to subscribe to.",
});

const SUB = new Subcommand({
  name: "Subscribe to Pack",
  cmdStrings: ["subscribe", "sub"],
  shortDesc: "Subscribes to another user's pack.",
  primaryArgs: [SUB_URL],
});
//#endregion

//#region unsub
const UNSUB_NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the pack to unsubscribe from.",
});

const UNSUB = new Subcommand({
  name: "Unsubscribe to Pack",
  cmdStrings: ["unsubscribe", "unsub"],
  shortDesc: "Unsubscribes from another user's pack.",
  primaryArgs: [UNSUB_NAME],
});
//#endregion
//#endregion

//#region command
export const PACK = new Command({
  name: "Homebrew Items",
  cmdStrings: ["pack"],
  shortDesc:
    "Commands to manage homebrew items. " +
    "When called without an argument, lists the current pack and its description. " +
    "When called with a name, switches to a different pack.",
  primaryArgs: [NAME],
  subcommands: [EDITOR, LIST, PACK_SERVER, SUB, UNSUB],
});
//#endregion
