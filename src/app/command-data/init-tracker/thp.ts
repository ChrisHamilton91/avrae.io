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

const NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the combatant.",
};

const VALUE: PrimaryArgument = {
  name: "thp",
  signature: "thp",
  required: true,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "Amount of temporary hit points. Modifies if starts with +/- or sets otherwise.",
};

export const THP: Command = {
  name: "Temporary HP",
  cmdStrings: ["init thp", "i thp"],
  shortDesc: "Modifies the temporary hit points of a combatant.",
  longDesc: "",
  primaryArgs: [NAME, VALUE],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
