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

import { CHECK_ARGS } from "../@Common/CheckArguments";

const ABILITY: PrimaryArgument = {
  name: "ability",
  signature: "ability",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The ability being checked.",
};

export const CHECK: Command = {
  name: "Ability Check",
  cmdStrings: ["init check", "i check", "init c", "i c"],
  shortDesc: "Rolls an ability check as the current combatant.",
  longDesc: "",
  primaryArgs: [ABILITY],
  secondaryArgs: CHECK_ARGS,
  subcommands: [],
  examples: [],
};
