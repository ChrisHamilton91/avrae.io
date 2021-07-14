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

export const NEXT: Command = {
  name: "Next Turn",
  cmdStrings: ["init next", "init n", "i next", "i n"],
  shortDesc:
    "Moves to the next turn in initiative order. It must be your turn or you must be a DM to use this command.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
