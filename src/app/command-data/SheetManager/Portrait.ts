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

//#region subcommands
//#region delete
const DELETE: Subcommand = {
  name: "Delete Portrait",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Removes the character portrait, returning to the default.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region edit
const EDIT_URL: PrimaryArgument = {
  name: "url",
  signature: "url",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The url of the new character portrait",
};

const EDIT: Subcommand = {
  name: "Update Portrait",
  cmdStrings: ["edit", "update"],
  shortDesc: "Updates the character portrait.",
  longDesc: "",
  primaryArgs: [EDIT_URL],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion
//#endregion

//#region command
export const PORTRAIT: Command = {
  name: "Character Portrait",
  cmdStrings: ["portrait"],
  shortDesc: "Shows or edits the image of your currently active character.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [DELETE, EDIT],
  examples: [],
};
//#endregion
