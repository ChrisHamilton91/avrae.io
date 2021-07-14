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

const TARGET: PrimaryArgument = {
  name: "target",
  signature: "target",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "Target can be either a number or a name. If not supplied, goes to the first combatant that the user controls.",
};

export const MOVE: Command = {
  name: "Move To",
  cmdStrings: ["init move", "init goto", "i move", "i goto"],
  shortDesc: "Moves to a certain initiative.",
  longDesc: "",
  primaryArgs: [TARGET],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
