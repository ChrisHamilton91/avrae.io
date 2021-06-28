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

const H: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "hide output",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides the character summary output.",
  example: "",
  ephemeral: false,
};

export const GAME_LR: Command = {
  name: "Long Rest",
  cmdStrings: ["g longrest", "game longrest", "g lr", "game lr"],
  shortDesc: "Performs a long rest, resetting applicable counters.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [H],
  subcommands: [],
  examples: [],
};
