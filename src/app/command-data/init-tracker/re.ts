import { Command, PrimaryArgument, ValueType } from "../command-schema";

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the combatant or group to remove the status effect from.",
});

const EFFECT = new PrimaryArgument({
  name: "effect",
  signature: "effect",
  required: false,
  valueType: ValueType.STRING,
  desc: "Name of the effect to remove.",
});

export const RE = new Command({
  name: "Remove Effect",
  cmdStrings: ["init re", "i re"],
  shortDesc:
    "Removes a status effect from a combatant or group. Removes all if effect is not passed.",
  primaryArgs: [NAME, EFFECT],
});
