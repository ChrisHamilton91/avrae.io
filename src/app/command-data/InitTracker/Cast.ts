import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategory,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";
import { SPELL_ARGS } from "../@Common/SpellCastingArguments";
import { ATTACK_ARGS } from "../@Common/AttackArguments";

const NAME: PrimaryArgument = {
  name: "spell name",
  signature: "spell_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the spell to cast.",
};

export const CAST: Command = {
  name: "Cast Spell",
  cmdStrings: ["init cast", "i cast"],
  shortDesc: "Casts a spell against another combatant.",
  longDesc: "",
  primaryArgs: [NAME],
  secondaryArgs: SPELL_ARGS.concat(ATTACK_ARGS),
  subcommands: [],
  examples: [],
};
