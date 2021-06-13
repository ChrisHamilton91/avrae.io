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

const H: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "hide output",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides the character summary output.",
  example: "",
  ephemeral: false,
};

export const GAME_SR: Command = {
  name: "Short Rest",
  cmdStrings: ["g shortrest", "game shortrest", "g sr", "game sr"],
  shortDesc: "Performs a short rest, resetting applicable counters.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [H],
  subcommands: [],
  examples: [],
};
