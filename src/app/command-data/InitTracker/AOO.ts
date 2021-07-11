import { sortByCategoryThenName } from "src/app/commands-ui/@globals";
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
import { ATTACK_ARGS } from "../@Common/AttackArguments";

//#region secondary arguments
const CUSTOM: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "custom attack",
  cmdString: "-custom",
  valueType: ValueType.TRUE,
  desc: "Makes a custom attack with 0 to hit and base damage. Use -b and -d to add to hit and damage.",
  example: "",
  category: AttackCategories.OTHER,
  ephemeral: false,
};
//#endregion

//#region primary arguments
const COMBATANT: PrimaryArgument = {
  name: "combatant name",
  signature: "combatant_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the combatant making the attack.",
};

const ATTACK: PrimaryArgument = {
  name: "attack name",
  signature: "atk_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the attack.",
};
//#endregion

//#region command
export const AOO: Command = {
  name: "Attack of Opportunity",
  cmdStrings: ["init aoo", "i aoo"],
  shortDesc: "Rolls an attack of opportunity against another combatant.",
  longDesc: "",
  primaryArgs: [COMBATANT, ATTACK],
  secondaryArgs: ATTACK_ARGS.concat([CUSTOM]).sort(sortByCategoryThenName),
  subcommands: [],
  examples: [],
};
//#endregion
