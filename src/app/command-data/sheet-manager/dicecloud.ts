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

const NOCC: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "no custom counters",
  cmdString: "-nocc",
  valueType: ValueType.TRUE,
  desc: "Do not automatically create custom counters for limited use features.",
  example: "",
  ephemeral: false,
  category: null,
};

const URL: PrimaryArgument = {
  name: "url",
  signature: "url",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The url of the dicecloud character sheet.",
};

export const DICECLOUD: Command = {
  name: "Import Dicecloud",
  cmdStrings: ["dicecloud"],
  shortDesc:
    "Loads a character sheet from https://dicecloud.com/, resetting all settings.",
  longDesc: "",
  primaryArgs: [URL],
  secondaryArgs: [NOCC],
  subcommands: [],
  examples: [],
};
