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
  cmdStrings: ["c", "check"],
  shortDesc: "Rolls a check for your current active character.",
  longDesc: "",
  primaryArgs: [ABILITY],
  secondaryArgs: CHECK_ARGS,
  subcommands: [],
  examples: [],
};
