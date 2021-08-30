import { Command, PrimaryArgument, ValueType } from "../command-schema";
import { ATTACK_ARGS } from "../@common/attack-arguments";
import { SPELL_ARGS } from "../@common/spellcasting-arguments";

const COMBATANT = new PrimaryArgument({
  name: "combatant name",
  signature: "combatant_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the combatant casting the spell.",
});

const SPELL = new PrimaryArgument({
  name: "spell name",
  signature: "spell_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the spell.",
});

export const REACT_CAST = new Command({
  name: "React Cast",
  cmdStrings: ["init reactcast", "init rc", "i reactcast", "i rc"],
  shortDesc: "Allows a combatant to cast a spell when it is not their turn.",
  primaryArgs: [COMBATANT, SPELL],
  secondaryArgs: SPELL_ARGS.concat(ATTACK_ARGS),
});
