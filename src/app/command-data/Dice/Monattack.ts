import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  Category,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";
import { ATTACK_ARGS } from "../@Common/AttackArguments";

//#region secondary arguments
// const SECONDARY_ARG: SecondaryArgument = {
//   type: ClassTypes.SECONDARY_ARGUMENT,
//   name: "",
//   cmdString: "",
//   valueType: ValueType.STRING,
//   desc: "",
//   example: "",
// ephemeral: false,
// }
//#endregion

//#region primary arguments
const MONSTER: PrimaryArgument = {
  name: "monster name",
  signature: "monster_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the attacking monster.",
};

const ATTACK: PrimaryArgument = {
  name: "attack name",
  signature: "atk_name",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the monster's attack.",
};
//#endregion

//#region subcommands
const LIST_MONSTER: PrimaryArgument = {
  name: "monster name",
  signature: "monster_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of attacking monster.",
};

const LIST: Subcommand = {
  name: "List Attacks",
  cmdStrings: ["list"],
  shortDesc: "Lists a monster's attacks.",
  longDesc: "",
  primaryArgs: [LIST_MONSTER],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region command
export const MONATTACK: Command = {
  name: "Monster Attack",
  cmdStrings: ["monattack", "ma", "monster_attack"],
  shortDesc: "Rolls a monster's attack.",
  longDesc: "",
  primaryArgs: [MONSTER, ATTACK],
  secondaryArgs: ATTACK_ARGS,
  subcommands: [LIST],
  examples: [],
};
//#endregion
