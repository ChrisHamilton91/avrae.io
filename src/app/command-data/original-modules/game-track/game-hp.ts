import {
  Command,
  PrimaryArgument,
  Subcommand,
  ValueType,
} from "../../command-schema";

//#region primary arguments
const HP = new PrimaryArgument({
  name: "hit points",
  signature: "hp",
  required: false,
  valueType: ValueType.NUMBER,
  desc: "The number to modify current hit points by.",
});
//#endregion

//#region subcommands
//#region max
const MAX = new Subcommand({
  name: "Maximum HP",
  cmdStrings: ["max"],
  shortDesc: "Sets the character's HP to their maximum.",
});
//#endregion

//#region mod
const MOD_HP = new PrimaryArgument({
  name: "hit points",
  signature: "hp",
  required: false,
  valueType: ValueType.NUMBER,
  desc: "The number to modify current hit points by.",
});

const MOD = new Subcommand({
  name: "Modify HP",
  cmdStrings: ["mod"],
  shortDesc: "Modifies the character's current HP.",
  primaryArgs: [MOD_HP],
});
//#endregion

//#region set
const SET_HP = new PrimaryArgument({
  name: "hit points",
  signature: "hp",
  required: false,
  valueType: ValueType.NUMBER,
  desc: "The number to set current HP to.",
});

const SET = new Subcommand({
  name: "Set HP",
  cmdStrings: ["set"],
  shortDesc: "Sets the character's HP to a certain value.",
  primaryArgs: [SET_HP],
});
//#endregion
//#endregion

//#region command
export const GAME_HP = new Command({
  name: "Hit Points",
  cmdStrings: ["g hp", "game hp"],
  shortDesc:
    "Shows or modifies the hit points of the current active character.",
  primaryArgs: [HP],
  subcommands: [MAX, MOD, SET],
});
//#endregion
