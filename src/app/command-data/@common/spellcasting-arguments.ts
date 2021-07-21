import {
  AttackArgument,
  AttackCategories,
  ValueType,
} from "../../schemas/Commands";

//#region arguments
const I = new AttackArgument({
  name: "ignore restrictions",
  cmdString: "-i",
  valueType: ValueType.TRUE,
  desc: "Ignores Spellbook restrictions (e.g. when casting from an item, as a ritual, etc.).",
  category: AttackCategories.SPELLCASTING,
  ephemeral: false,
});

const L = new AttackArgument({
  name: "spell level",
  cmdString: "-l",
  valueType: ValueType.NUMBER,
  desc: "Specifies the level to cast the spell at.",
  category: AttackCategories.SPELLCASTING,
  ephemeral: false,
});

const MOD = new AttackArgument({
  name: "modifier",
  cmdString: "-mod",
  valueType: ValueType.NUMBER,
  desc: "Overrides the value of the spellcasting ability modifier.",
  category: AttackCategories.SPELLCASTING,
  ephemeral: false,
});

const WITH = new AttackArgument({
  name: "ability base",
  cmdString: "-with",
  valueType: ValueType.NUMBER,
  desc: "Uses a different ability base for DC/AB (int, wis, cha... will not account for extra bonuses).",
  category: AttackCategories.SPELLCASTING,
  ephemeral: false,
});

const NOCONC = new AttackArgument({
  name: "no concentration",
  cmdString: "noconc",
  valueType: ValueType.TRUE,
  desc: "Ignores concentration requirements.",
  category: AttackCategories.SPELLCASTING,
  ephemeral: false,
});
//#endregion

//#region
export const SPELL_ARGS: AttackArgument[] = [I, L, MOD, WITH, NOCONC];
