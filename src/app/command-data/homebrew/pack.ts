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
import { PACK_SERVER } from "./pack-server";

//#region primary arguments
const NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the pack to list description.",
};
//#endregion

//#region subcommands
//#region editor
const EDITOR_USER: PrimaryArgument = {
  name: "user",
  signature: "user",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the user to give editor privileges.",
};

const EDITOR: Subcommand = {
  name: "Allow Edits",
  cmdStrings: ["editor"],
  shortDesc: "Allows another user to edit your active pack.",
  longDesc: "",
  primaryArgs: [EDITOR_USER],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region list
const LIST: Subcommand = {
  name: "List Packs",
  cmdStrings: ["list"],
  shortDesc: "Lists your available packs.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region sub
const SUB_URL: PrimaryArgument = {
  name: "url",
  signature: "url",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Url of the pack to subscribe to.",
};

const SUB: Subcommand = {
  name: "Subscribe to Pack",
  cmdStrings: ["subscribe", "sub"],
  shortDesc: "Subscribes to another user's pack.",
  longDesc: "",
  primaryArgs: [SUB_URL],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region unsub
const UNSUB_NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the pack to unsubscribe from.",
};

const UNSUB: Subcommand = {
  name: "Unsubscribe to Pack",
  cmdStrings: ["unsubscribe", "unsub"],
  shortDesc: "Unsubscribes from another user's pack.",
  longDesc: "",
  primaryArgs: [UNSUB_NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion
//#endregion

//#region command
export const PACK: Command = {
  name: "Homebrew Items",
  cmdStrings: ["pack"],
  shortDesc:
    "Commands to manage homebrew items. " +
    "When called without an argument, lists the current pack and its description. " +
    "When called with a name, switches to a different pack.",
  longDesc: "",
  primaryArgs: [NAME],
  secondaryArgs: [],
  subcommands: [EDITOR, LIST, PACK_SERVER, SUB, UNSUB].sort(sortByName),
  examples: [],
};
//#endregion
