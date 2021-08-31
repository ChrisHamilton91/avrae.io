import { Command, PrimaryArgument, ValueType } from "../../command-schema";
import { ATTACK_ARGS } from "../@common/attack-arguments";
import { SPELL_ARGS } from "../@common/spellcasting-arguments";

//#region primary arguments
const MONSTER_NAME = new PrimaryArgument({
  name: "monster name",
  signature: "monster_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name of the monster casting the spell.",
});

const SPELL_NAME = new PrimaryArgument({
  name: "spell name",
  signature: "spell_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name of the spell.",
});
//#endregion

//#region command
export const MONCAST = new Command({
  name: "Monster Spell",
  cmdStrings: ["moncast", "mcast", "monster_cast"],
  shortDesc: "Casts a spell as a monster.",
  primaryArgs: [MONSTER_NAME, SPELL_NAME],
  secondaryArgs: SPELL_ARGS.concat(ATTACK_ARGS),
});
//#endregion
