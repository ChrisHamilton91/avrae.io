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

// #region primary arguments
const NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the combatant to modify HP.",
};

const VALUE: PrimaryArgument = {
  name: "hit points",
  signature: "hp",
  required: false,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "Amount to modify HP.",
};
// #endregion

//#region subcommands
//#region max
const MAX_NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the combatant to modify HP.",
};

const MAX_HP: PrimaryArgument = {
  name: "hit points",
  signature: "hp",
  required: false,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "Amount to set maximum hp.",
};

const MAX: Subcommand = {
  name: "Maximum HP",
  cmdStrings: ["max"],
  shortDesc: "Sets a combatant's max HP, or sets HP to max if no max is given.",
  longDesc: "",
  primaryArgs: [MAX_NAME, MAX_HP],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region mod
const MOD_NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the combatant to modify HP.",
};

const MOD_HP: PrimaryArgument = {
  name: "hit points",
  signature: "hp",
  required: true,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "Amount to modify hp.",
};

const MOD: Subcommand = {
  name: "Modify HP",
  cmdStrings: ["mod"],
  shortDesc: "Modifies a combatant's current HP.",
  longDesc: "",
  primaryArgs: [MOD_NAME, MOD_HP],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region set
const SET_NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the combatant to modify HP.",
};

const SET_HP: PrimaryArgument = {
  name: "hit points",
  signature: "hp",
  required: true,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "Amount to set hp to.",
};

const SET: Subcommand = {
  name: "Set HP",
  cmdStrings: ["set"],
  shortDesc: "Sets a combatant's HP to a certain value.",
  longDesc: "",
  primaryArgs: [SET_NAME, SET_HP],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion
//#endregion

//#region command
export const HP: Command = {
  name: "Manage Hit Points",
  cmdStrings: ["init hp", "i hp"],
  shortDesc: "Modifies the hit points of a combatant.",
  longDesc: "",
  primaryArgs: [NAME, VALUE],
  secondaryArgs: [],
  subcommands: [MAX, MOD, SET],
  examples: [],
};
//#endregion
