import { sortByCategoryThenName } from "src/app/command-data/@common/@common-functions";
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
import { ATTACK_ARGS } from "../@common/attack-arguments";

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

const NAME: PrimaryArgument = {
  name: "attack name",
  signature: "atk_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the attack.",
};

const LIST: Subcommand = {
  name: "List Attacks",
  cmdStrings: ["list"],
  shortDesc: "Lists the active combatant's attacks.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};

export const ATTACK: Command = {
  name: "Attack",
  cmdStrings: ["init attack", "i attack", "init a", "i a"],
  shortDesc: "Rolls an attack against another combatant.",
  longDesc: "",
  primaryArgs: [NAME],
  secondaryArgs: ATTACK_ARGS.concat([CUSTOM]).sort(sortByCategoryThenName),
  subcommands: [LIST],
  examples: [],
};
