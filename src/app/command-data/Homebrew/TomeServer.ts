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

//#region subcommands
const LIST: Subcommand = {
  name: "List Server Tomes",
  cmdStrings: ["list"],
  shortDesc: "Shows what tomes are currently active on the server.",
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
  desc: "Name of the tome to remove.",
};

const DELETE: Subcommand = {
  name: "Remove Server Tome",
  cmdStrings: ["remove", "delete"],
  shortDesc: "Removes a server tome.",
  longDesc: "",
  primaryArgs: [DELETE_NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region main subcommand
export const TOME_SERVER: Subcommand = {
  name: "Server Options",
  cmdStrings: ["server"],
  shortDesc:
    `Toggles whether the active tome should be viewable by anyone on the server. ` +
    `Requires Manage Server permissions or a role named "Server Brewer" to run.`,
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [LIST, DELETE].sort(sortByName),
  examples: [],
};
//#endregion
