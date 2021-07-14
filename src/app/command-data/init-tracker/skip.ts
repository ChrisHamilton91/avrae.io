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

const NUM_ROUNDS: PrimaryArgument = {
  name: "rounds",
  signature: "rounds",
  required: false,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "Number of rounds to skip. Defaults to 1.",
};

export const SKIP: Command = {
  name: "Skip Rounds",
  cmdStrings: [
    "init skipround",
    "init round",
    "init skiprounds",
    "i skipround",
    "i round",
    "i skiprounds",
  ],
  shortDesc: "Skips one or more rounds of initiative.",
  longDesc: "",
  primaryArgs: [NUM_ROUNDS],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
