import {
  Command,
  PrimaryArgument,
  Subcommand,
  ValueType,
} from "../../schemas/Commands";

//#region subcommands
//#region delete
const DELETE = new Subcommand({
  name: "Delete Portrait",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Removes the character portrait, returning to the default.",
});
//#endregion

//#region edit
const EDIT_URL = new PrimaryArgument({
  name: "url",
  signature: "url",
  required: true,
  valueType: ValueType.STRING,
  desc: "The url of the new character portrait",
});

const EDIT = new Subcommand({
  name: "Update Portrait",
  cmdStrings: ["edit", "update"],
  shortDesc: "Updates the character portrait.",
  primaryArgs: [EDIT_URL],
});
//#endregion
//#endregion

//#region command
export const PORTRAIT = new Command({
  name: "Character Portrait",
  cmdStrings: ["portrait"],
  shortDesc: "Shows or edits the image of your currently active character.",
  subcommands: [DELETE, EDIT],
});
//#endregion
