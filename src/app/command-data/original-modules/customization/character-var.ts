import {
  Command,
  PrimaryArgument,
  Subcommand,
  ValueType,
} from "../../command-schema";

//#region primary arguments
const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  desc: "Name of the character variable to create.",
});

const VALUE = new PrimaryArgument({
  name: "value",
  signature: "value",
  required: false,
  valueType: ValueType.NUMBER,
  desc: "The value to set the character variable to.",
});
//#endregion

//#region subcommands
const DELETE_ALL = new Subcommand({
  name: "Delete All Cvars",
  cmdStrings: ["deleteall", "removeall"],
  shortDesc: "Deletes ALL character variables for the active character.",
});

const LIST = new Subcommand({
  name: "List Cvars",
  cmdStrings: ["list"],
  shortDesc: "Lists all cvars for the currently active character.",
});

const DELETE_NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the character variable to delete.",
});

const DELETE = new Subcommand({
  name: "Delete Cvar",
  cmdStrings: ["remove", "delete"],
  shortDesc: "Deletes a cvar from the currently active character.",
  primaryArgs: [DELETE_NAME],
});
//#endregion

//#region command
export const CHARACTER_VAR = new Command({
  name: "Character Variables",
  cmdStrings: ["cvar"],
  shortDesc: "Creates a character variable for use in snippets and aliases.",
  primaryArgs: [NAME, VALUE],
  subcommands: [DELETE_ALL, LIST, DELETE],
});
//#endregion
