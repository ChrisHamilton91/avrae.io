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

//#region to hit
const ADV: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "advantage",
  cmdString: "adv",
  valueType: ValueType.TRUE,
  desc: "Give advantage to the attack roll(s)",
  example: "",
  category: AttackCategories.TO_HIT,
  ephemeral: true,
};

const DIS: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "disadvantage",
  cmdString: "dis",
  valueType: ValueType.TRUE,
  desc: "Give disadvantage to the attack roll(s)",
  example: "",
  category: AttackCategories.TO_HIT,
  ephemeral: true,
};

const EA: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "elven accuracy",
  cmdString: "ea",
  valueType: ValueType.TRUE,
  desc: "Elven Accuracy, double advantage on the attack roll.",
  example: "",
  category: AttackCategories.TO_HIT,
  ephemeral: true,
};

const HIT: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "auto hit",
  cmdString: "hit",
  valueType: ValueType.TRUE,
  desc: "The attack automatically hits.",
  example: "",
  category: AttackCategories.TO_HIT,
  ephemeral: true,
};

const MISS: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "auto miss",
  cmdString: "miss",
  valueType: ValueType.TRUE,
  desc: "The attack automatically misses.",
  example: "",
  category: AttackCategories.TO_HIT,
  ephemeral: true,
};

const CRIT: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "auto crit",
  cmdString: "crit",
  valueType: ValueType.TRUE,
  desc: "The attack automatically crits.",
  example: "",
  category: AttackCategories.TO_HIT,
  ephemeral: true,
};

const AC: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "set target ac",
  cmdString: "-ac",
  valueType: ValueType.NUMBER,
  desc: "Overrides target AC (armor class).",
  example: "",
  category: AttackCategories.TO_HIT,
  ephemeral: false,
};

const B: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "bonus to hit",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "Adds a bonus to hit.",
  example: "",
  category: AttackCategories.TO_HIT,
  ephemeral: true,
};

const CRITON: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "crit on",
  cmdString: "-criton",
  valueType: ValueType.NUMBER,
  desc: "The number the attack crits on if rolled on or above.",
  example: "",
  category: AttackCategories.TO_HIT,
  ephemeral: false,
};
//#endregion

//#region saves
const PASS: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "target succeeds save",
  cmdString: "pass",
  valueType: ValueType.TRUE,
  desc: "Target automatically succeeds the saving throw.",
  example: "",
  category: AttackCategories.SAVES,
  ephemeral: true,
};

const FAIL: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "target fails save",
  cmdString: "fail",
  valueType: ValueType.TRUE,
  desc: "Target automatically fails the saving throw.",
  example: "",
  category: AttackCategories.SAVES,
  ephemeral: true,
};

const SADV: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "target has advantage",
  cmdString: "sadv",
  valueType: ValueType.TRUE,
  desc: "Gives the target advantage on the saving throw.",
  example: "",
  category: AttackCategories.SAVES,
  ephemeral: false,
};

const SDIS: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "target has disadvantage",
  cmdString: "sdis",
  valueType: ValueType.TRUE,
  desc: "Gives the target disadvantage on the saving throw.",
  example: "",
  category: AttackCategories.SAVES,
  ephemeral: false,
};

const DC: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "set save dc",
  cmdString: "-dc",
  valueType: ValueType.NUMBER,
  desc: "Overrides the DC of the save. Prefix the number with '+' or '-' to increment or decrement dc instead.",
  example: "",
  category: AttackCategories.SAVES,
  ephemeral: false,
};

const SAVE: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "set save type",
  cmdString: "-save",
  valueType: ValueType.STRING,
  desc: "Overrides the spell save type (e.g. -save str).",
  example: "",
  category: AttackCategories.SAVES,
  ephemeral: false,
};
//#endregion

//#region damage
const MAX: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "max damage",
  cmdString: "max",
  valueType: ValueType.TRUE,
  desc: "Maximizes damage rolls.",
  example: "",
  category: AttackCategories.DAMAGE,
  ephemeral: true,
};

const NOCRIT: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "no crit damage",
  cmdString: "nocrit",
  valueType: ValueType.TRUE,
  desc: "Does not double the dice on a crit.",
  example: "",
  category: AttackCategories.DAMAGE,
  ephemeral: true,
};

const D: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "add damage",
  cmdString: "-d",
  valueType: ValueType.NUMBER,
  desc: "Adds additional damage",
  example: "",
  category: AttackCategories.DAMAGE,
  ephemeral: true,
};

const C: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "add crit damage",
  cmdString: "-c",
  valueType: ValueType.NUMBER,
  desc: "Adds additional damage for when the attack crits, not doubled.",
  example: "",
  category: AttackCategories.DAMAGE,
  ephemeral: true,
};

const MI: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "minimum damage roll",
  cmdString: "-mi",
  valueType: ValueType.NUMBER,
  desc: "Minimum value of each die on the damage roll.",
  example: "",
  category: AttackCategories.DAMAGE,
  ephemeral: true,
};
//#endregion

//#region damage types
const MAGICAL: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "magical damage type",
  cmdString: "magical",
  valueType: ValueType.TRUE,
  desc: "Makes the damage type of the attack magical.",
  example: "",
  category: AttackCategories.DAMAGE_TYPES,
  ephemeral: true,
};

const DTYPE: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "set damage type",
  cmdString: "-dtype",
  valueType: ValueType.STRING,
  desc: "Changes all damage types to a new damage type. Separate two types with '>' to only modify one damage type (e.g. -dtype fire>cold)",
  example: "",
  category: AttackCategories.DAMAGE_TYPES,
  ephemeral: true,
};

const RESIST: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "resist damage type",
  cmdString: "-resist",
  valueType: ValueType.STRING,
  desc: "Gives the target resistance to the given damage type.",
  example: "",
  category: AttackCategories.DAMAGE_TYPES,
  ephemeral: true,
};

const IMMUNE: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "immune to damage type",
  cmdString: "-immune",
  valueType: ValueType.STRING,
  desc: "Gives the target immunity to the given damage type.",
  example: "",
  category: AttackCategories.DAMAGE_TYPES,
  ephemeral: true,
};

const VULN: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "vulnerable to damage type",
  cmdString: "-vuln",
  valueType: ValueType.STRING,
  desc: "Gives the target vulnerability to the given damage type.",
  example: "",
  category: AttackCategories.DAMAGE_TYPES,
  ephemeral: true,
};

const NEUTRAL: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "neutral to damage type",
  cmdString: "-neutral",
  valueType: ValueType.STRING,
  desc: "Removes the target's immunity, resistance, or vulnerability to the given damage type.",
  example: "",
  category: AttackCategories.DAMAGE_TYPES,
  ephemeral: true,
};
//#endregion

//#region effects
const DUR: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "duration of effect",
  cmdString: "-dur",
  valueType: ValueType.NUMBER,
  desc: "Overrides the duration of any effect applied by the attack.",
  example: "",
  category: AttackCategories.EFFECTS,
  ephemeral: false,
};
//#endregion

//#region counters
const AMT: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "amount of resources",
  cmdString: "-amt",
  valueType: ValueType.NUMBER,
  desc: "Overrides the amount of the resource used.",
  example: "",
  category: AttackCategories.COUNTERS,
  ephemeral: false,
};

const L: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "spell level",
  cmdString: "-l",
  valueType: ValueType.NUMBER,
  desc: "Specifies the level of the spell slot to use.",
  example: "",
  category: AttackCategories.COUNTERS,
  ephemeral: false,
};

const I: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "no resources used",
  cmdString: "-i",
  valueType: ValueType.TRUE,
  desc: "Skips using any resources.",
  example: "",
  category: AttackCategories.COUNTERS,
  ephemeral: false,
};
//#endregion

//#region other
const H: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "hide rolls",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides rolled values.",
  example: "",
  category: AttackCategories.OTHER,
  ephemeral: false,
};

const PHRASE: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "flavor text",
  cmdString: "-phrase",
  valueType: ValueType.STRING,
  desc: "Adds flavor text.",
  example: "",
  category: AttackCategories.OTHER,
  ephemeral: false,
};

const TITLE: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "title",
  cmdString: "-title",
  valueType: ValueType.STRING,
  desc: "Changes the title of the attack. Replaces [name] with attacker's name and [aname] with the attack's name.",
  example: "",
  category: AttackCategories.OTHER,
  ephemeral: false,
};

const F: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "create field",
  cmdString: "-f",
  valueType: ValueType.STRING,
  desc: `Creates a field in the embed with the given title and text. Syntax: "Field Title|Field Text"`,
  example: "",
  category: AttackCategories.OTHER,
  ephemeral: false,
};

const THUMB: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "add thumbnail",
  cmdString: "-thumb",
  valueType: ValueType.STRING,
  desc: "Pass in an image url to add a thumbnail to the attack",
  example: "",
  category: AttackCategories.OTHER,
  ephemeral: false,
};
//#endregion

//#region targeting
const RR: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "re-roll",
  cmdString: "-rr",
  valueType: ValueType.NUMBER,
  desc: "How many attacks to make at each target.",
  example: "",
  category: AttackCategories.TARGETING,
  ephemeral: false,
};

const T: TargetArgument = {
  type: ClassTypes.TARGET_ARGUMENT,
  name: "target",
  cmdString: "-t",
  valueType: ValueType.STRING,
  desc:
    `Sets a target for the attack. ` +
    `Repeat this command to target multiple enemies. ` +
    `Allows for specific args to apply to each target. (e.g, -t "OR1|hit" to force the attack against OR1 to hit)`,
  example: "",
  category: AttackCategories.TARGETING,
  //These are assumed to be sorted by category - **SO MAKE SURE THEY ARE!!**
  secondaryArgs: [
    RR,
    ADV,
    DIS,
    EA,
    HIT,
    MISS,
    CRIT,
    AC,
    B,
    CRITON,
    PASS,
    FAIL,
    SADV,
    SDIS,
    DC,
    SAVE,
    MAX,
    NOCRIT,
    D,
    C,
    MI,
    MAGICAL,
    DTYPE,
    RESIST,
    IMMUNE,
    VULN,
    NEUTRAL,
    DUR,
  ],
  ephemeral: false,
};
//#endregion

//#region export
export const ATTACK_ARGS: AttackArgument[] = [
  T,
  RR,
  ADV,
  DIS,
  EA,
  HIT,
  MISS,
  CRIT,
  AC,
  B,
  CRITON,
  PASS,
  FAIL,
  SADV,
  SDIS,
  DC,
  SAVE,
  MAX,
  NOCRIT,
  D,
  C,
  MI,
  MAGICAL,
  DTYPE,
  RESIST,
  IMMUNE,
  VULN,
  NEUTRAL,
  DUR,
  AMT,
  L,
  I,
  H,
  PHRASE,
  TITLE,
  F,
  THUMB,
];
//#endregion
