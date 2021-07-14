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

const RACE: PrimaryArgument = {
  name: "race",
  signature: "race",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "Race of the random name",
};

const OPTION: PrimaryArgument = {
  name: "option",
  signature: "option",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "Specify an option for the given race name. (eg. Male, Female, Clan)",
};

export const RANDNAME: Command = {
  name: "Random Name",
  cmdStrings: ["randname", "name"],
  shortDesc: "Generates a random name, optionally from a given race.",
  longDesc: "",
  primaryArgs: [RACE, OPTION],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
