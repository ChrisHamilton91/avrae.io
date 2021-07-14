import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategories,
  ValueType,
} from "../../schemas/Commands";

export const SHEET: Command = {
  name: "Character Sheet",
  cmdStrings: ["sheet"],
  shortDesc: "Prints the embed sheet of your currently active character.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
