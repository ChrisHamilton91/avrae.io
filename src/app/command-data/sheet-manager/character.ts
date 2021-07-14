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
} from "../../schemas/Commands";

//#region primary arguments
const NAME: PrimaryArgument = {
  name: "character name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the character to switch to.",
};
//#endregion

//#region subcommands
//#region delete
const DELETE_NAME: PrimaryArgument = {
  name: "character name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the character to delete.",
};

const DELETE: Subcommand = {
  name: "Delete Character",
  cmdStrings: ["delete"],
  shortDesc: "Deletes a character",
  longDesc: "",
  primaryArgs: [DELETE_NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion
//#region list
const LIST: Subcommand = {
  name: "List All Characters",
  cmdStrings: ["list"],
  shortDesc: "Lists your characters",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion
//#endregion

//#region command
export const CHARACTER: Command = {
  name: "Active Character",
  cmdStrings: ["character", "char"],
  shortDesc:
    "Shows the current active character, or switches characters if a name is passed.",
  longDesc: "",
  primaryArgs: [NAME],
  secondaryArgs: [],
  subcommands: [DELETE, LIST].sort(sortByName),
  examples: [],
};
//#endregion
