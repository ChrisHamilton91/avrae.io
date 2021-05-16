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

//#region subcommands
//#region delete
const DELETE: Subcommand = {
  name: "delete description",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Removes the character description, returning to the default.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region edit
const EDIT_DESC: PrimaryArgument = {
  name: "description",
  signature: "description",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "",
};

const EDIT: Subcommand = {
  name: "edit description",
  cmdStrings: ["edit", "update"],
  shortDesc: "Updates the character description.",
  longDesc: "",
  primaryArgs: [EDIT_DESC],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion
//#endregion

//#region command
export const DESC: Command = {
  name: "Character Description",
  cmdStrings: ["desc"],
  shortDesc:
    "Prints or edits a description of your currently active character.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [DELETE, EDIT],
  examples: [],
};
//#endregion
