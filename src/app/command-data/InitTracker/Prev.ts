import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategory,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";

export const PREV: Command = {
  name: "Previous Turn",
  cmdStrings: [
    "init prev",
    "init previous",
    "init rewind",
    "i prev",
    "i previous",
    "i rewind",
  ],
  shortDesc: "Moves to the previous turn in initiative order.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
