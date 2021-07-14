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

const NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the combatant or group to remove the status effect from.",
};

const EFFECT: PrimaryArgument = {
  name: "effect",
  signature: "effect",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the effect to remove.",
};

export const RE: Command = {
  name: "Remove Effect",
  cmdStrings: ["init re", "i re"],
  shortDesc:
    "Removes a status effect from a combatant or group. Removes all if effect is not passed.",
  longDesc: "",
  primaryArgs: [NAME, EFFECT],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
