import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  Category,
  ValueType,
} from "../../schemas/Commands";

//#region secondary arguments
// const SECOONDARY_ARG: SecondaryArgument = {
//   name: "",
//   cmdString: "",
//   valueType: ValueType.NONE,
//   desc: "",
//   example: "",
// }
//#endregion

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
  name: "delete character",
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
  name: "list all characters",
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
  subcommands: [DELETE, LIST],
  examples: [],
};
//#endregion
