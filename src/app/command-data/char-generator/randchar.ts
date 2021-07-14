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

const LEVEL: PrimaryArgument = {
  name: "character level",
  signature: "level",
  required: false,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "Level of the rolled character. If not set, will just roll 4d6kh3 6 times.",
};

export const RANDCHAR: Command = {
  name: "Random Character",
  cmdStrings: ["randchar"],
  shortDesc: "Rolls up a random 5e character.",
  longDesc: "",
  primaryArgs: [LEVEL],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
