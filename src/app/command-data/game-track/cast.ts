import { Command, PrimaryArgument, ValueType } from "../../schemas/Commands";
import { ATTACK_ARGS } from "../@common/attack-arguments";
import { SPELL_ARGS } from "../@common/spellcasting-arguments";

const NAME = new PrimaryArgument({
  name: "spell name",
  signature: "spell_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the spell to cast.",
});

export const CAST = new Command({
  name: "Cast Spell",
  cmdStrings: ["cast"],
  shortDesc: "Casts a spell.",
  primaryArgs: [NAME],
  secondaryArgs: SPELL_ARGS.concat(ATTACK_ARGS),
});
