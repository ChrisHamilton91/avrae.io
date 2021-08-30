import { Command, PrimaryArgument, ValueType } from "../command-schema";

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the combatant to remove.",
});

export const REMOVE = new Command({
  name: "Remove Combatant",
  cmdStrings: ["init remove", "i remove"],
  shortDesc: "Removes a combatant or group from the combat.",
  primaryArgs: [NAME],
});
