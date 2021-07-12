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
  desc: "Name of the character variable to create.",
};

const VALUE: PrimaryArgument = {
  name: "value",
  signature: "value",
  required: false,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "The value to set the character variable to.",
};
//#endregion

//#region subcommands
const DELETE_ALL: Subcommand = {
  name: "Delete All Cvars",
  cmdStrings: ["deleteall", "removeall"],
  shortDesc: "Deletes ALL character variables for the active character.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};

const LIST: Subcommand = {
  name: "List Cvars",
  cmdStrings: ["list"],
  shortDesc: "Lists all cvars for the currently active character.",
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
  desc: "Name of the character variable to delete.",
};

const DELETE: Subcommand = {
  name: "Delete Cvar",
  cmdStrings: ["remove", "delete"],
  shortDesc: "Deletes a cvar from the currently active character.",
  longDesc: "",
  primaryArgs: [DELETE_NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region command
export const CHARACTER_VAR: Command = {
  name: "Character Variables",
  cmdStrings: ["cvar"],
  shortDesc: "Creates a character variable for use in snippets and aliases.",
  longDesc: "",
  primaryArgs: [NAME, VALUE],
  secondaryArgs: [],
  subcommands: [DELETE_ALL, LIST, DELETE].sort(sortByName),
  examples: [],
};
//#endregion
