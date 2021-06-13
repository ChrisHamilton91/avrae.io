import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  Category,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";

const THP: PrimaryArgument = {
  name: "temporary HP",
  signature: "thp",
  required: false,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "Amount of temporary HP. Positive numbers will set thp to the value, negative numbers will subtract the value from current thp.",
};

export const GAME_THP: Command = {
  name: "Temporary HP",
  cmdStrings: ["g thp", "game thp"],
  shortDesc: "Modifies the temporary HP of the current active character.",
  longDesc: "",
  primaryArgs: [THP],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
