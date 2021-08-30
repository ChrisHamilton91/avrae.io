import {
  Command,
  PrimaryArgument,
  Subcommand,
  ValueType,
} from "../command-schema";

//#region subcommands
//#region delete
const DELETE = new Subcommand({
  name: "Delete Description",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Removes the character description, returning to the default.",
});
//#endregion

//#region edit
const EDIT_DESC = new PrimaryArgument({
  name: "description",
  signature: "description",
  required: true,
  valueType: ValueType.STRING,
  desc: "",
});

const EDIT = new Subcommand({
  name: "Edit Description",
  cmdStrings: ["edit", "update"],
  shortDesc: "Updates the character description.",
  primaryArgs: [EDIT_DESC],
});
//#endregion
//#endregion

//#region command
export const DESC = new Command({
  name: "Character Description",
  cmdStrings: ["desc"],
  shortDesc:
    "Prints or edits a description of your currently active character.",
  subcommands: [DELETE, EDIT],
});
//#endregion
