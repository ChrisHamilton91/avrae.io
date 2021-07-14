import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategories,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";
import { SPELL_ARGS } from "../@common/spellcasting-arguments";
import { ATTACK_ARGS } from "../@common/attack-arguments";

//#region primary arguments
const MONSTER_NAME: PrimaryArgument = {
  name: "monster name",
  signature: "monster_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the monster casting the spell.",
};

const SPELL_NAME: PrimaryArgument = {
  name: "spell name",
  signature: "spell_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the spell.",
};
//#endregion

//#region command
export const MONCAST: Command = {
  name: "Monster Spell",
  cmdStrings: ["moncast", "mcast", "monster_cast"],
  shortDesc: "Casts a spell as a monster.",
  longDesc: "",
  primaryArgs: [MONSTER_NAME, SPELL_NAME],
  secondaryArgs: SPELL_ARGS.concat(ATTACK_ARGS),
  subcommands: [],
  examples: [],
};
//#endregion
