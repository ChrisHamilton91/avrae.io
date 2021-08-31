import {
  Command,
  EffectArgument,
  EffectCategories,
  PrimaryArgument,
  ValueType,
} from "../../command-schema";

//#region secondary arguments
const DUR = new EffectArgument({
  name: "duration",
  cmdString: "-dur",
  valueType: ValueType.NUMBER,
  desc: "Sets the duration of the effect, in rounds.",
  category: EffectCategories.GENERAL,
});

const CONC = new EffectArgument({
  name: "require concentration",
  cmdString: "conc",
  valueType: ValueType.TRUE,
  desc: "Makes the effect require concentration. Will end any other concentration effects.",
  category: EffectCategories.GENERAL,
});

const END = new EffectArgument({
  name: "tick on end of turn",
  cmdString: "end",
  valueType: ValueType.TRUE,
  desc: "Makes the effect duration tick on the end of turn, rather than the beginning.",
  category: EffectCategories.GENERAL,
});

const T = new EffectArgument({
  name: "target",
  cmdString: "-t",
  valueType: ValueType.STRING,
  desc: "Specifies more combatants to target.",
  category: EffectCategories.GENERAL,
});

const PARENT = new EffectArgument({
  name: "parent effect",
  cmdString: "-parent",
  valueType: ValueType.STRING,
  desc: "Sets a parent effect from a specified combatant. Syntax: combatant|effect",
  category: EffectCategories.GENERAL,
});

const AC = new EffectArgument({
  name: "armor class",
  cmdString: "-ac",
  valueType: ValueType.NUMBER,
  desc: "Sets ac temporarily. Use + or - to modify ac instead of setting.",
  category: EffectCategories.GENERAL,
});

const SB = new EffectArgument({
  name: "save bonus",
  cmdString: "-sb",
  valueType: ValueType.NUMBER,
  desc: "Adds a bonus to all saving throws.",
  category: EffectCategories.GENERAL,
});

const DESC = new EffectArgument({
  name: "description",
  cmdString: "-desc",
  valueType: ValueType.STRING,
  desc: "Adds a description of the effect.",
  category: EffectCategories.GENERAL,
});

const B = new EffectArgument({
  name: "bonus to hit",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "Adds a bonus to hit.",
  category: EffectCategories.ATTACKS,
});

const D = new EffectArgument({
  name: "add damage",
  cmdString: "-d",
  valueType: ValueType.NUMBER,
  desc: "Adds additional damage.",
  category: EffectCategories.ATTACKS,
});

const ATTACK = new EffectArgument({
  name: "add attack",
  cmdString: "-attack",
  valueType: ValueType.STRING,
  desc:
    `Adds an attack to the combatant. The effect name will be the name of the attack. Syntax: [hit]|[damage]|[description]. ` +
    `Omitting [hit] will autohit. (e.g., -attack "|1d6[fire]|")`,
  category: EffectCategories.ATTACKS,
});

const RESIST = new EffectArgument({
  name: "add resistance",
  cmdString: "-resist",
  valueType: ValueType.STRING,
  desc: "Gives the combatant resistance to the given damage type.",
  category: EffectCategories.RESISTS,
});

const IMMUNE = new EffectArgument({
  name: "add immunity",
  cmdString: "-immune",
  valueType: ValueType.STRING,
  desc: "Gives the combatant immunity to the given damage type.",
  category: EffectCategories.RESISTS,
});

const VULN = new EffectArgument({
  name: "add vulnerability",
  cmdString: "-vuln",
  valueType: ValueType.STRING,
  desc: "Gives the combatant vulnerability to the given damage type.",
  category: EffectCategories.RESISTS,
});

const NEUTRAL = new EffectArgument({
  name: "add neutrality",
  cmdString: "-neutral",
  valueType: ValueType.STRING,
  desc: "Removes the combatant's immunity, resistance, or vulnerability to the given damage type.",
  category: EffectCategories.RESISTS,
});

const MAGICAL = new EffectArgument({
  name: "add magical damage",
  cmdString: "magical",
  valueType: ValueType.STRING,
  desc: "Makes all damage from the combatant magical.",
  category: EffectCategories.RESISTS,
});
//#endregion

//#region primary arguments
const TARGET_NAME = new PrimaryArgument({
  name: "target name",
  signature: "target_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the combatant to attach effect to.",
});

const EFFECT_NAME = new PrimaryArgument({
  name: "effect name",
  signature: "effect_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the effect.",
});
//#endregion

//#region command
export const EFFECT = new Command({
  name: "Status Effect",
  cmdStrings: ["init effect", "i effect"],
  shortDesc: "Attaches a status effect to a combatant.",
  primaryArgs: [TARGET_NAME, EFFECT_NAME],
  secondaryArgs: [
    DUR,
    CONC,
    END,
    T,
    PARENT,
    AC,
    SB,
    DESC,
    B,
    D,
    ATTACK,
    RESIST,
    IMMUNE,
    VULN,
    NEUTRAL,
    MAGICAL,
  ],
});
//#endregion
