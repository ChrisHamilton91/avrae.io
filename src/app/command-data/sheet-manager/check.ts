import { Command, PrimaryArgument, ValueType } from "../../schemas/Commands";
import { CHECK_ARGS } from "../@common/check-arguments";

const ABILITY = new PrimaryArgument({
  name: "ability",
  signature: "ability",
  required: true,
  valueType: ValueType.STRING,
  desc: "The ability being checked.",
});

export const CHECK = new Command({
  name: "Ability Check",
  cmdStrings: ["c", "check"],
  shortDesc: "Rolls a check for your current active character.",
  primaryArgs: [ABILITY],
  secondaryArgs: CHECK_ARGS,
});
