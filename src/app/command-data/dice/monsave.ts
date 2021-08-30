import { Command, PrimaryArgument, ValueType } from "../command-schema";
import { SAVE_ARGS } from "../@common/save-arguments";

const NAME = new PrimaryArgument({
  name: "name",
  signature: "ability",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name of the monster making the save.",
});

const ABILITY = new PrimaryArgument({
  name: "ability",
  signature: "ability",
  required: true,
  valueType: ValueType.STRING,
  desc: "The ability of the saving throw. (ie. dexterity, strength, charisma).",
});

export const MONSAVE = new Command({
  name: "Monster Save",
  cmdStrings: ["monsave", "ms", "monster_save"],
  shortDesc: "Rolls a save for a monster.",
  primaryArgs: [NAME, ABILITY],
  secondaryArgs: SAVE_ARGS,
});
