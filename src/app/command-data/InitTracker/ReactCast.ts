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
import { ATTACK_ARGS } from "../@Common/AttackArguments";
import { SPELL_ARGS } from "../@Common/SpellCastingArguments";

const COMBATANT: PrimaryArgument = {
  name: "combatant name",
  signature: "combatant_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the combatant casting the spell.",
};

const SPELL: PrimaryArgument = {
  name: "spell name",
  signature: "spell_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the spell.",
};

export const REACT_CAST: Command = {
  name: "React Cast",
  cmdStrings: ["init reactcast", "init rc", "i reactcast", "i rc"],
  shortDesc: "Allows a combatant to cast a spell when it is not their turn.",
  longDesc: "",
  primaryArgs: [COMBATANT, SPELL],
  secondaryArgs: SPELL_ARGS.concat(ATTACK_ARGS),
  subcommands: [],
  examples: [],
};
