import {
  Command,
  PrimaryArgument,
  Subcommand,
  ValueType,
} from "../../schemas/Commands";

//#region primary arguments
const NAME = new PrimaryArgument({
  name: "character name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  desc: "Name of the character to switch to.",
});
//#endregion

//#region subcommands
//#region delete
const DELETE_NAME = new PrimaryArgument({
  name: "character name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the character to delete.",
});

const DELETE = new Subcommand({
  name: "Delete Character",
  cmdStrings: ["delete"],
  shortDesc: "Deletes a character",
  primaryArgs: [DELETE_NAME],
});
//#endregion
//#region list
const LIST = new Subcommand({
  name: "List All Characters",
  cmdStrings: ["list"],
  shortDesc: "Lists your characters",
});
//#endregion
//#endregion

//#region command
export const CHARACTER = new Command({
  name: "Active Character",
  cmdStrings: ["character", "char"],
  shortDesc:
    "Shows the current active character, or switches characters if a name is passed.",
  primaryArgs: [NAME],
  subcommands: [DELETE, LIST],
});
//#endregion
