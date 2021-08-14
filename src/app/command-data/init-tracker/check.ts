import { Command, PrimaryArgument, ValueType } from "../command-schema";
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
  cmdStrings: ["init check", "i check", "init c", "i c"],
  shortDesc: "Rolls an ability check as the current combatant.",
  primaryArgs: [ABILITY],
  secondaryArgs: CHECK_ARGS,
});
