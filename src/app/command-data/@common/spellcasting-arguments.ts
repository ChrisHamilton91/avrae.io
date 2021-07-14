import { sortByName } from "src/app/command-data/@common/@common-functions";
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

//#region arguments
const I: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "ignore restrictions",
  cmdString: "-i",
  valueType: ValueType.TRUE,
  desc: "Ignores Spellbook restrictions (e.g. when casting from an item, as a ritual, etc.).",
  example: "",
  category: AttackCategories.SPELLCASTING,
  ephemeral: false,
};

const L: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "spell level",
  cmdString: "-l",
  valueType: ValueType.NUMBER,
  desc: "Specifies the level to cast the spell at.",
  example: "",
  category: AttackCategories.SPELLCASTING,
  ephemeral: false,
};

const MOD: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "modifier",
  cmdString: "-mod",
  valueType: ValueType.NUMBER,
  desc: "Overrides the value of the spellcasting ability modifier.",
  example: "",
  category: AttackCategories.SPELLCASTING,
  ephemeral: false,
};

const WITH: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "ability base",
  cmdString: "-with",
  valueType: ValueType.NUMBER,
  desc: "Uses a different ability base for DC/AB (int, wis, cha... will not account for extra bonuses).",
  example: "",
  category: AttackCategories.SPELLCASTING,
  ephemeral: false,
};

const NOCONC: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "no concentration",
  cmdString: "noconc",
  valueType: ValueType.TRUE,
  desc: "Ignores concentration requirements.",
  example: "",
  category: AttackCategories.SPELLCASTING,
  ephemeral: false,
};
//#endregion

//#region
export const SPELL_ARGS: AttackArgument[] = [I, L, MOD, WITH, NOCONC].sort(
  sortByName
);
