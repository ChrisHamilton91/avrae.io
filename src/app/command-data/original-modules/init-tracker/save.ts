import { Command, PrimaryArgument, ValueType } from "../../command-schema";
import { SAVE_ARGS } from "../@common/save-arguments";

const ABILITY = new PrimaryArgument({
  name: "ability",
  signature: "ability",
  required: true,
  valueType: ValueType.STRING,
  desc: "The ability of the saving throw. (ie. dexterity, strength, charisma)",
});

export const SAVE = new Command({
  name: "Saving Throw",
  cmdStrings: ["init save", "init s", "i save", "i s"],
  shortDesc: "Rolls an ability save as the current combatant.",
  primaryArgs: [ABILITY],
  secondaryArgs: SAVE_ARGS,
});
