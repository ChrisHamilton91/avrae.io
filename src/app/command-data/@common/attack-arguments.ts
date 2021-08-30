import {
  AttackArgument,
  AttackCategories,
  TargetArgument,
  ValueType,
} from "../command-schema";

//#region to hit
const ADV = new AttackArgument({
  name: "advantage",
  cmdString: "adv",
  valueType: ValueType.TRUE,
  desc: "Give advantage to the attack roll(s)",
  category: AttackCategories.TO_HIT,
  ephemeral: true,
});

const DIS = new AttackArgument({
  name: "disadvantage",
  cmdString: "dis",
  valueType: ValueType.TRUE,
  desc: "Give disadvantage to the attack roll(s)",
  category: AttackCategories.TO_HIT,
  ephemeral: true,
});

const EA = new AttackArgument({
  name: "elven accuracy",
  cmdString: "ea",
  valueType: ValueType.TRUE,
  desc: "Elven Accuracy, double advantage on the attack roll.",
  category: AttackCategories.TO_HIT,
  ephemeral: true,
});

const HIT = new AttackArgument({
  name: "auto hit",
  cmdString: "hit",
  valueType: ValueType.TRUE,
  desc: "The attack automatically hits.",
  category: AttackCategories.TO_HIT,
  ephemeral: true,
});

const MISS = new AttackArgument({
  name: "auto miss",
  cmdString: "miss",
  valueType: ValueType.TRUE,
  desc: "The attack automatically misses.",
  category: AttackCategories.TO_HIT,
  ephemeral: true,
});

const CRIT = new AttackArgument({
  name: "auto crit",
  cmdString: "crit",
  valueType: ValueType.TRUE,
  desc: "The attack automatically crits.",
  category: AttackCategories.TO_HIT,
  ephemeral: true,
});

const AC = new AttackArgument({
  name: "set target ac",
  cmdString: "-ac",
  valueType: ValueType.NUMBER,
  desc: "Overrides target AC (armor class).",
  category: AttackCategories.TO_HIT,
});

const B = new AttackArgument({
  name: "bonus to hit",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "Adds a bonus to hit.",
  category: AttackCategories.TO_HIT,
  ephemeral: true,
});

const CRITON = new AttackArgument({
  name: "crit on",
  cmdString: "-criton",
  valueType: ValueType.NUMBER,
  desc: "The number the attack crits on if rolled on or above.",
  category: AttackCategories.TO_HIT,
});
//#endregion

//#region saves
const PASS = new AttackArgument({
  name: "target succeeds save",
  cmdString: "pass",
  valueType: ValueType.TRUE,
  desc: "Target automatically succeeds the saving throw.",
  category: AttackCategories.SAVES,
  ephemeral: true,
});

const FAIL = new AttackArgument({
  name: "target fails save",
  cmdString: "fail",
  valueType: ValueType.TRUE,
  desc: "Target automatically fails the saving throw.",
  category: AttackCategories.SAVES,
  ephemeral: true,
});

const SADV = new AttackArgument({
  name: "target has advantage",
  cmdString: "sadv",
  valueType: ValueType.TRUE,
  desc: "Gives the target advantage on the saving throw.",
  category: AttackCategories.SAVES,
});

const SDIS = new AttackArgument({
  name: "target has disadvantage",
  cmdString: "sdis",
  valueType: ValueType.TRUE,
  desc: "Gives the target disadvantage on the saving throw.",
  category: AttackCategories.SAVES,
});

const DC = new AttackArgument({
  name: "set save dc",
  cmdString: "-dc",
  valueType: ValueType.NUMBER,
  desc: "Overrides the DC of the save. Prefix the number with '+' or '-' to increment or decrement dc instead.",
  category: AttackCategories.SAVES,
});

const SAVE = new AttackArgument({
  name: "set save type",
  cmdString: "-save",
  valueType: ValueType.STRING,
  desc: "Overrides the spell save type (e.g. -save str).",
  category: AttackCategories.SAVES,
});
//#endregion

//#region damage
const MAX = new AttackArgument({
  name: "max damage",
  cmdString: "max",
  valueType: ValueType.TRUE,
  desc: "Maximizes damage rolls.",
  category: AttackCategories.DAMAGE,
  ephemeral: true,
});

const NOCRIT = new AttackArgument({
  name: "no crit damage",
  cmdString: "nocrit",
  valueType: ValueType.TRUE,
  desc: "Does not double the dice on a crit.",
  category: AttackCategories.DAMAGE,
  ephemeral: true,
});

const D = new AttackArgument({
  name: "add damage",
  cmdString: "-d",
  valueType: ValueType.NUMBER,
  desc: "Adds additional damage. To specify damage type use square brackets. ex. 1d4[fire].",
  category: AttackCategories.DAMAGE,
  ephemeral: true,
});

const C = new AttackArgument({
  name: "add crit damage",
  cmdString: "-c",
  valueType: ValueType.NUMBER,
  desc: "Adds additional damage for when the attack crits, not doubled.",
  category: AttackCategories.DAMAGE,
  ephemeral: true,
});

const MI = new AttackArgument({
  name: "minimum damage roll",
  cmdString: "-mi",
  valueType: ValueType.NUMBER,
  desc: "Minimum value of each die on the damage roll.",
  category: AttackCategories.DAMAGE,
  ephemeral: true,
});
//#endregion

//#region damage types
const MAGICAL = new AttackArgument({
  name: "magical damage",
  cmdString: "magical",
  valueType: ValueType.TRUE,
  desc: "Makes the damage type of the attack magical.",
  category: AttackCategories.DAMAGE_TYPES,
  ephemeral: true,
});

const DTYPE = new AttackArgument({
  name: "set damage type",
  cmdString: "-dtype",
  valueType: ValueType.STRING,
  desc: "Changes all damage types to a new damage type. Separate two types with '>' to only modify one damage type (e.g. -dtype fire>cold)",
  category: AttackCategories.DAMAGE_TYPES,
  ephemeral: true,
  repeatable: true,
});

const RESIST = new AttackArgument({
  name: "resistance",
  cmdString: "-resist",
  valueType: ValueType.STRING,
  desc: "Gives the target resistance to the given damage type.",
  category: AttackCategories.DAMAGE_TYPES,
  ephemeral: true,
  repeatable: true,
});

const IMMUNE = new AttackArgument({
  name: "immune to",
  cmdString: "-immune",
  valueType: ValueType.STRING,
  desc: "Gives the target immunity to the given damage type.",
  category: AttackCategories.DAMAGE_TYPES,
  ephemeral: true,
  repeatable: true,
});

const VULN = new AttackArgument({
  name: "vulnerable to",
  cmdString: "-vuln",
  valueType: ValueType.STRING,
  desc: "Gives the target vulnerability to the given damage type.",
  category: AttackCategories.DAMAGE_TYPES,
  ephemeral: true,
  repeatable: true,
});

const NEUTRAL = new AttackArgument({
  name: "neutral to",
  cmdString: "-neutral",
  valueType: ValueType.STRING,
  desc: "Removes the target's immunity, resistance, or vulnerability to the given damage type.",
  category: AttackCategories.DAMAGE_TYPES,
  ephemeral: true,
  repeatable: true,
});
//#endregion

//#region effects
const DUR = new AttackArgument({
  name: "duration of effect",
  cmdString: "-dur",
  valueType: ValueType.NUMBER,
  desc: "Overrides the duration of any effect applied by the attack.",
  category: AttackCategories.EFFECTS,
});
//#endregion

//#region counters
const AMT = new AttackArgument({
  name: "amount of resources",
  cmdString: "-amt",
  valueType: ValueType.NUMBER,
  desc: "Overrides the amount of the resource used.",
  category: AttackCategories.COUNTERS,
});

const L = new AttackArgument({
  name: "spell level",
  cmdString: "-l",
  valueType: ValueType.NUMBER,
  desc: "Specifies the level of the spell slot to use.",
  category: AttackCategories.COUNTERS,
});

const I = new AttackArgument({
  name: "no resources used",
  cmdString: "-i",
  valueType: ValueType.TRUE,
  desc: "Skips using any resources.",
  category: AttackCategories.COUNTERS,
});
//#endregion

//#region other
const H = new AttackArgument({
  name: "hide rolls",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides rolled values.",
  category: AttackCategories.OTHER,
});

const PHRASE = new AttackArgument({
  name: "flavor text",
  cmdString: "-phrase",
  valueType: ValueType.STRING,
  desc: "Adds flavor text.",
  category: AttackCategories.OTHER,
});

const TITLE = new AttackArgument({
  name: "title",
  cmdString: "-title",
  valueType: ValueType.STRING,
  desc: "Changes the title of the attack. Replaces [name] with attacker's name and [aname] with the attack's name.",
  category: AttackCategories.OTHER,
});

const F = new AttackArgument({
  name: "create field",
  cmdString: "-f",
  valueType: ValueType.STRING,
  desc: `Creates a field in the embed with the given title and text. Syntax: "Field Title|Field Text"`,
  category: AttackCategories.OTHER,
});

const THUMB = new AttackArgument({
  name: "add thumbnail",
  cmdString: "-thumb",
  valueType: ValueType.STRING,
  desc: "Pass in an image url to add a thumbnail to the attack",
  category: AttackCategories.OTHER,
});
//#endregion

//#region targeting
const RR = new AttackArgument({
  name: "re-roll",
  cmdString: "-rr",
  valueType: ValueType.NUMBER,
  desc: "How many attacks to make at each target.",
  category: AttackCategories.TARGETING,
});

const T = new TargetArgument({
  name: "target",
  cmdString: "-t",
  valueType: ValueType.STRING,
  desc:
    `Sets a target for the attack. ` +
    `Repeat this command to target multiple enemies. ` +
    `Allows for specific args to apply to each target. (e.g, -t "OR1|hit" to force the attack against OR1 to hit)`,
  category: AttackCategories.TARGETING,
  repeatable: true,
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
});
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
