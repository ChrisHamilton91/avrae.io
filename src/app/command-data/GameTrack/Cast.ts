import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  Category,
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
  cmdStrings: ["cast"],
  shortDesc: "Casts a spell.",
  longDesc: "",
  primaryArgs: [NAME],
  secondaryArgs: SPELL_ARGS.concat(ATTACK_ARGS),
  subcommands: [],
  examples: [],
};
