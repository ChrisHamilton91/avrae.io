import {
  AttackArgument,
  AttackCategories,
  Command,
  PrimaryArgument,
  ValueType,
} from "../command-schema";
import { ATTACK_ARGS } from "../@common/attack-arguments";

//#region secondary arguments
const CUSTOM = new AttackArgument({
  name: "custom attack",
  cmdString: "-custom",
  valueType: ValueType.TRUE,
  desc: "Makes a custom attack with 0 to hit and base damage. Use -b and -d to add to hit and damage.",
  category: AttackCategories.OTHER,
});
//#endregion

//#region primary arguments
const COMBATANT = new PrimaryArgument({
  name: "combatant name",
  signature: "combatant_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name of the combatant making the attack.",
});

const ATTACK = new PrimaryArgument({
  name: "attack name",
  signature: "atk_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name of the attack.",
});
//#endregion

//#region command
export const AOO = new Command({
  name: "Attack of Opportunity",
  cmdStrings: ["init aoo", "i aoo"],
  shortDesc: "Rolls an attack of opportunity against another combatant.",
  primaryArgs: [COMBATANT, ATTACK],
  secondaryArgs: ATTACK_ARGS.concat([CUSTOM]),
});
//#endregion
