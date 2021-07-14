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
import { CHECK_ARGS } from "../@common/check-arguments";

const NAME: PrimaryArgument = {
  name: "monster name",
  signature: "monster_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the monster making the check.",
};

const ABILITY: PrimaryArgument = {
  name: "ability",
  signature: "ability",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The ability being checked.",
};

export const MONCHECK: Command = {
  name: "Monster Ability Check",
  cmdStrings: ["moncheck", "mc", "monster_check"],
  shortDesc: "Rolls a check for a monster.",
  longDesc: "",
  primaryArgs: [NAME, ABILITY],
  secondaryArgs: CHECK_ARGS,
  subcommands: [],
  examples: [],
};
