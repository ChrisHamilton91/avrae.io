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

//#region primary arguments
const HP: PrimaryArgument = {
  name: "hit points",
  signature: "hp",
  required: false,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "The number to modify current hit points by.",
};
//#endregion

//#region subcommands
//#region max
const MAX: Subcommand = {
  name: "Maximum HP",
  cmdStrings: ["max"],
  shortDesc: "Sets the character's HP to their maximum.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region mod
const MOD_HP: PrimaryArgument = {
  name: "hit points",
  signature: "hp",
  required: false,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "The number to modify current hit points by.",
};

const MOD: Subcommand = {
  name: "Modify HP",
  cmdStrings: ["mod"],
  shortDesc: "Modifies the character's current HP.",
  longDesc: "",
  primaryArgs: [MOD_HP],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region set
const SET_HP: PrimaryArgument = {
  name: "hit points",
  signature: "hp",
  required: false,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "The number to set current HP to.",
};

const SET: Subcommand = {
  name: "Modify HP",
  cmdStrings: ["mod"],
  shortDesc: "Sets the character's HP to a certain value.",
  longDesc: "",
  primaryArgs: [SET_HP],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion
//#endregion

//#region command
export const GAME_HP: Command = {
  name: "Hit Points",
  cmdStrings: ["g hp", "game hp"],
  shortDesc:
    "Shows or modifies the hit points of the current active character.",
  longDesc: "",
  primaryArgs: [HP],
  secondaryArgs: [],
  subcommands: [MAX, MOD, SET],
  examples: [],
};
//#endregion
