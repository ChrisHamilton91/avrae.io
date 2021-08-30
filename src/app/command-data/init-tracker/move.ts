import { Command, PrimaryArgument, ValueType } from "../command-schema";

const TARGET = new PrimaryArgument({
  name: "target",
  signature: "target",
  required: false,
  valueType: ValueType.STRING,
  desc: "Target can be either a number or a name. If not supplied, goes to the first combatant that the user controls.",
});

export const MOVE = new Command({
  name: "Move To",
  cmdStrings: ["init move", "init goto", "i move", "i goto"],
  shortDesc: "Moves to a certain initiative.",
  primaryArgs: [TARGET],
});
