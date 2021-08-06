import {
  Command,
  PrimaryArgument,
  Subcommand,
  ValueType,
} from "../../schemas/Commands";

// #region primary arguments
const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the combatant to modify HP.",
});

const VALUE = new PrimaryArgument({
  name: "hit points",
  signature: "hp",
  required: false,
  valueType: ValueType.NUMBER,
  desc: "Amount to modify HP.",
});
// #endregion

//#region subcommands
//#region max
const MAX_NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the combatant to modify HP.",
});

const MAX_HP = new PrimaryArgument({
  name: "hit points",
  signature: "hp",
  required: false,
  valueType: ValueType.NUMBER,
  desc: "Amount to set maximum hp.",
});

const MAX = new Subcommand({
  name: "Maximum HP",
  cmdStrings: ["max"],
  shortDesc: "Sets a combatant's max HP, or sets HP to max if no max is given.",
  primaryArgs: [MAX_NAME, MAX_HP],
});
//#endregion

//#region mod
const MOD_NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the combatant to modify HP.",
});

const MOD_HP = new PrimaryArgument({
  name: "hit points",
  signature: "hp",
  required: true,
  valueType: ValueType.NUMBER,
  desc: "Amount to modify hp.",
});

const MOD = new Subcommand({
  name: "Modify HP",
  cmdStrings: ["mod"],
  shortDesc: "Modifies a combatant's current HP.",
  primaryArgs: [MOD_NAME, MOD_HP],
});
//#endregion

//#region set
const SET_NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the combatant to modify HP.",
});

const SET_HP = new PrimaryArgument({
  name: "hit points",
  signature: "hp",
  required: true,
  valueType: ValueType.NUMBER,
  desc: "Amount to set hp to.",
});

const SET = new Subcommand({
  name: "Set HP",
  cmdStrings: ["set"],
  shortDesc: "Sets a combatant's HP to a certain value.",
  primaryArgs: [SET_NAME, SET_HP],
});
//#endregion
//#endregion

//#region command
export const HP = new Command({
  name: "Manage Hit Points",
  cmdStrings: ["init hp", "i hp"],
  shortDesc: "Modifies the hit points of a combatant.",
  primaryArgs: [NAME, VALUE],
  subcommands: [MAX, MOD, SET],
});
//#endregion
