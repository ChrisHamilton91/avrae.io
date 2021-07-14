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

export const GAME_STATUS: Command = {
  name: "Status",
  cmdStrings: ["g status", "game status", "g summary", "game summary"],
  shortDesc: "Prints the status of the current active character.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
