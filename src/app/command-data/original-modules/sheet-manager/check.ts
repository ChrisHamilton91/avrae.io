import { Command, PrimaryArgument, ValueType } from "../../command-schema";
import { CHECK_ARGS } from "../@common/check-arguments";

const ABILITY = new PrimaryArgument({
  name: "ability",
  signature: "ability",
  required: true,
  valueType: ValueType.STRING,
  desc: "The ability being checked.",
});

export const CHECK = new Command({
  name: "Check",
  cmdStrings: ["c", "check"],
  shortDesc: "Rolls a check for your current active character.",
  primaryArgs: [ABILITY],
  secondaryArgs: CHECK_ARGS,
});
