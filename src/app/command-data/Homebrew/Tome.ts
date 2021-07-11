import { sortByName } from "src/app/commands-ui/@globals";
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
import { TOME_SERVER } from "./TomeServer";

//#region primary arguments
const NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the tome to list description.",
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
  shortDesc: "Allows another user to edit your active tome.",
  longDesc: "",
  primaryArgs: [EDITOR_USER],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region list
const LIST: Subcommand = {
  name: "List Tomes",
  cmdStrings: ["list"],
  shortDesc: "Lists your available tomes.",
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
  desc: "Url of the tome to subscribe to.",
};

const SUB: Subcommand = {
  name: "Subscribe to Tome",
  cmdStrings: ["subscribe", "sub"],
  shortDesc: "Subscribes to another user's tome.",
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
  desc: "Name of the tome to unsubscribe from.",
};

const UNSUB: Subcommand = {
  name: "Unsubscribe to Tome",
  cmdStrings: ["unsubscribe", "unsub"],
  shortDesc: "Unsubscribes from another user's tome.",
  longDesc: "",
  primaryArgs: [UNSUB_NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion
//#endregion

//#region command
export const TOME: Command = {
  name: "Homebrew Spells",
  cmdStrings: ["tome"],
  shortDesc:
    "Commands to manage homebrew spells. " +
    "When called without an argument, lists the current tome and its description. " +
    "When called with a name, switches to a different tome.",
  longDesc: "",
  primaryArgs: [NAME],
  secondaryArgs: [],
  subcommands: [EDITOR, LIST, TOME_SERVER, SUB, UNSUB].sort(sortByName),
  examples: [],
};
//#endregion
