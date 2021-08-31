import {
  AttackArgument,
  AttackCategories,
  Command,
  PrimaryArgument,
  Subcommand,
  ValueType,
} from "../../command-schema";
import { ATTACK_ARGS } from "../@common/attack-arguments";

const CUSTOM = new AttackArgument({
  name: "custom attack",
  cmdString: "-custom",
  valueType: ValueType.TRUE,
  desc: "Makes a custom attack with 0 to hit and base damage. Use -b and -d to add to hit and damage.",
  category: AttackCategories.OTHER,
});

const NAME = new PrimaryArgument({
  name: "attack name",
  signature: "atk_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name of the attack.",
});

const LIST = new Subcommand({
  name: "List Attacks",
  cmdStrings: ["list"],
  shortDesc: "Lists the active combatant's attacks.",
});

export const ATTACK = new Command({
  name: "Attack",
  cmdStrings: ["init attack", "i attack", "init a", "i a"],
  shortDesc: "Rolls an attack against another combatant.",
  primaryArgs: [NAME],
  secondaryArgs: ATTACK_ARGS.concat([CUSTOM]),
  subcommands: [LIST],
});
