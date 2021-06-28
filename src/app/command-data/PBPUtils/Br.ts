import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategory,
  ValueType,
} from "../../schemas/Commands";

export const BR: Command = {
  name: "Scene Break",
  cmdStrings: ["br"],
  shortDesc: "Prints a scene break.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
