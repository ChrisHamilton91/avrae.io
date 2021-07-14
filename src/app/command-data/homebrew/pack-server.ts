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

//#region subcommands
const LIST: Subcommand = {
  name: "List Server Packs",
  cmdStrings: ["list"],
  shortDesc: "Shows what packs are currently active on the server.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};

const DELETE_NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the pack to remove.",
};

const DELETE: Subcommand = {
  name: "Remove Server Pack",
  cmdStrings: ["remove", "delete"],
  shortDesc: "Removes a server pack.",
  longDesc: "",
  primaryArgs: [DELETE_NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region main subcommand
export const PACK_SERVER: Subcommand = {
  name: "Server Options",
  cmdStrings: ["server"],
  shortDesc:
    `Toggles whether the active pack should be viewable by anyone on the server. ` +
    `Requires Manage Server permissions or a role named "Server Brewer" to run.`,
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [LIST, DELETE].sort(sortByName),
  examples: [],
};
//#endregion
