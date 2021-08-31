import { Command, PrimaryArgument, ValueType } from "../../command-schema";
import { SAVE_ARGS } from "../@common/save-arguments";

//#region primary arguments
const ABILITY = new PrimaryArgument({
  name: "ability",
  signature: "ability",
  required: true,
  valueType: ValueType.STRING,
  desc: "The ability of the saving throw. (ie. dexterity, strength, charisma)",
});
//#endregion

//#region command
export const SAVE = new Command({
  name: "Save",
  cmdStrings: ["s", "save"],
  shortDesc: "Rolls a save for your current active character.",
  primaryArgs: [ABILITY],
  secondaryArgs: SAVE_ARGS,
});
//#endregion
