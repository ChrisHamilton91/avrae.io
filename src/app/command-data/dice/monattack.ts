import {
  Command,
  PrimaryArgument,
  Subcommand,
  ValueType,
} from "../command-schema";
import { ATTACK_ARGS } from "../@common/attack-arguments";

//#region primary arguments
const MONSTER = new PrimaryArgument({
  name: "monster name",
  signature: "monster_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the attacking monster.",
});

const ATTACK = new PrimaryArgument({
  name: "attack name",
  signature: "atk_name",
  required: false,
  valueType: ValueType.STRING,
  desc: "Name of the monster's attack.",
});
//#endregion

//#region subcommands
const LIST_MONSTER = new PrimaryArgument({
  name: "monster name",
  signature: "monster_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of attacking monster.",
});

const LIST = new Subcommand({
  name: "List Attacks",
  cmdStrings: ["list"],
  shortDesc: "Lists a monster's attacks.",
  primaryArgs: [LIST_MONSTER],
});
//#endregion

//#region command
export const MONATTACK = new Command({
  name: "Monster Attack",
  cmdStrings: ["monattack", "ma", "monster_attack"],
  shortDesc: "Rolls a monster's attack.",
  primaryArgs: [MONSTER, ATTACK],
  secondaryArgs: ATTACK_ARGS,
  subcommands: [LIST],
});
//#endregion
