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
  EffectArgument,
  EffectCategories,
} from "../../schemas/Commands";

//#region secondary arguments
const DUR: EffectArgument = {
  type: ClassTypes.EFFECT_ARGUMENT,
  name: "duration",
  cmdString: "-dur",
  valueType: ValueType.NUMBER,
  desc: "Sets the duration of the effect, in rounds.",
  example: "",
  category: EffectCategories.GENERAL,
  ephemeral: false,
};

const CONC: EffectArgument = {
  type: ClassTypes.EFFECT_ARGUMENT,
  name: "require concentration",
  cmdString: "conc",
  valueType: ValueType.TRUE,
  desc: "Makes the effect require concentration. Will end any other concentration effects.",
  example: "",
  category: EffectCategories.GENERAL,
  ephemeral: false,
};

const END: EffectArgument = {
  type: ClassTypes.EFFECT_ARGUMENT,
  name: "tick on end of turn",
  cmdString: "end",
  valueType: ValueType.TRUE,
  desc: "Makes the effect duration tick on the end of turn, rather than the beginning.",
  example: "",
  category: EffectCategories.GENERAL,
  ephemeral: false,
};

const T: EffectArgument = {
  type: ClassTypes.EFFECT_ARGUMENT,
  name: "target",
  cmdString: "-t",
  valueType: ValueType.STRING,
  desc: "Specifies more combatants to target.",
  example: "",
  category: EffectCategories.GENERAL,
  ephemeral: false,
};

const PARENT: EffectArgument = {
  type: ClassTypes.EFFECT_ARGUMENT,
  name: "parent effect",
  cmdString: "-parent",
  valueType: ValueType.STRING,
  desc: "Sets a parent effect from a specified combatant. Syntax: combatant|effect",
  example: "",
  category: EffectCategories.GENERAL,
  ephemeral: false,
};

const AC: EffectArgument = {
  type: ClassTypes.EFFECT_ARGUMENT,
  name: "armor class",
  cmdString: "-ac",
  valueType: ValueType.NUMBER,
  desc: "Sets ac temporarily. Use + or - to modify ac instead of setting.",
  example: "",
  category: EffectCategories.GENERAL,
  ephemeral: false,
};

const SB: EffectArgument = {
  type: ClassTypes.EFFECT_ARGUMENT,
  name: "save bonus",
  cmdString: "-sb",
  valueType: ValueType.NUMBER,
  desc: "Adds a bonus to all saving throws.",
  example: "",
  category: EffectCategories.GENERAL,
  ephemeral: false,
};

const DESC: EffectArgument = {
  type: ClassTypes.EFFECT_ARGUMENT,
  name: "description",
  cmdString: "-desc",
  valueType: ValueType.STRING,
  desc: "Adds a description of the effect.",
  example: "",
  category: EffectCategories.GENERAL,
  ephemeral: false,
};

const B: EffectArgument = {
  type: ClassTypes.EFFECT_ARGUMENT,
  name: "bonus to hit",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "Adds a bonus to hit.",
  example: "",
  category: EffectCategories.ATTACKS,
  ephemeral: false,
};

const D: EffectArgument = {
  type: ClassTypes.EFFECT_ARGUMENT,
  name: "add damage",
  cmdString: "-d",
  valueType: ValueType.NUMBER,
  desc: "Adds additional damage.",
  example: "",
  category: EffectCategories.ATTACKS,
  ephemeral: false,
};

const ATTACK: EffectArgument = {
  type: ClassTypes.EFFECT_ARGUMENT,
  name: "add attack",
  cmdString: "-attack",
  valueType: ValueType.STRING,
  desc:
    `Adds an attack to the combatant. The effect name will be the name of the attack. Syntax: [hit]|[damage]|[description]. ` +
    `Omitting [hit] will autohit. (e.g., -attack "|1d6[fire]|")`,
  example: "",
  category: EffectCategories.ATTACKS,
  ephemeral: false,
};

const RESIST: EffectArgument = {
  type: ClassTypes.EFFECT_ARGUMENT,
  name: "add resistance",
  cmdString: "-resist",
  valueType: ValueType.STRING,
  desc: "Gives the combatant resistance to the given damage type.",
  example: "",
  category: EffectCategories.RESISTS,
  ephemeral: false,
};

const IMMUNE: EffectArgument = {
  type: ClassTypes.EFFECT_ARGUMENT,
  name: "add immunity",
  cmdString: "-immune",
  valueType: ValueType.STRING,
  desc: "Gives the combatant immunity to the given damage type.",
  example: "",
  category: EffectCategories.RESISTS,
  ephemeral: false,
};

const VULN: EffectArgument = {
  type: ClassTypes.EFFECT_ARGUMENT,
  name: "add vulnerability",
  cmdString: "-vuln",
  valueType: ValueType.STRING,
  desc: "Gives the combatant vulnerability to the given damage type.",
  example: "",
  category: EffectCategories.RESISTS,
  ephemeral: false,
};

const NEUTRAL: EffectArgument = {
  type: ClassTypes.EFFECT_ARGUMENT,
  name: "add neutrality",
  cmdString: "-neutral",
  valueType: ValueType.STRING,
  desc: "Removes the combatant's immunity, resistance, or vulnerability to the given damage type.",
  example: "",
  category: EffectCategories.RESISTS,
  ephemeral: false,
};

const MAGICAL: EffectArgument = {
  type: ClassTypes.EFFECT_ARGUMENT,
  name: "add magical damage",
  cmdString: "magical",
  valueType: ValueType.STRING,
  desc: "Makes all damage from the combatant magical.",
  example: "",
  category: EffectCategories.RESISTS,
  ephemeral: false,
};
//#endregion

//#region primary arguments
const TARGET_NAME: PrimaryArgument = {
  name: "target name",
  signature: "target_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the combatant to attach effect to.",
};

const EFFECT_NAME: PrimaryArgument = {
  name: "effect name",
  signature: "effect_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the effect.",
};
//#endregion

//#region command
export const EFFECT: Command = {
  name: "Status Effect",
  cmdStrings: ["init effect", "i effect"],
  shortDesc: "Attaches a status effect to a combatant.",
  longDesc: "",
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
  subcommands: [],
  examples: [],
};
//#endregion
