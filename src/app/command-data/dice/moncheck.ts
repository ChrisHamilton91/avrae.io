import { Command, PrimaryArgument, ValueType } from "../../schemas/Commands";
import { CHECK_ARGS } from "../@common/check-arguments";

const NAME = new PrimaryArgument({
  name: "monster name",
  signature: "monster_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name of the monster making the check.",
});

const ABILITY = new PrimaryArgument({
  name: "ability",
  signature: "ability",
  required: true,
  valueType: ValueType.STRING,
  desc: "The ability being checked.",
});

export const MONCHECK = new Command({
  name: "Monster Ability Check",
  cmdStrings: ["moncheck", "mc", "monster_check"],
  shortDesc: "Rolls a check for a monster.",
  primaryArgs: [NAME, ABILITY],
  secondaryArgs: CHECK_ARGS,
});
