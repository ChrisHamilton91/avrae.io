import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  Category,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";

//#region (secondary) attack arguments
//#region to hit
const ADV: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "advantage",
  cmdString: "adv",
  valueType: ValueType.TRUE,
  desc: "Give advantage to the attack roll(s)",
  example: "",
  category: Category.TO_HIT,
  ephemeral: true,
};

const DIS: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "disadvantage",
  cmdString: "dis",
  valueType: ValueType.TRUE,
  desc: "Give disadvantage to the attack roll(s)",
  example: "",
  category: Category.TO_HIT,
  ephemeral: true,
};

const EA: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "elven accuracy",
  cmdString: "ea",
  valueType: ValueType.TRUE,
  desc: "Elven Accuracy, double advantage on the attack roll.",
  example: "",
  category: Category.TO_HIT,
  ephemeral: true,
};

const HIT: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "auto hit",
  cmdString: "hit",
  valueType: ValueType.TRUE,
  desc: "The attack automatically hits.",
  example: "",
  category: Category.TO_HIT,
  ephemeral: true,
};

const MISS: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "auto miss",
  cmdString: "miss",
  valueType: ValueType.TRUE,
  desc: "The attack automatically misses.",
  example: "",
  category: Category.TO_HIT,
  ephemeral: true,
};

const CRIT: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "auto crit",
  cmdString: "crit",
  valueType: ValueType.TRUE,
  desc: "The attack automatically crits.",
  example: "",
  category: Category.TO_HIT,
  ephemeral: true,
};

const AC: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "set target ac",
  cmdString: "-ac",
  valueType: ValueType.NUMBER,
  desc: "Overrides target AC (armor class).",
  example: "",
  category: Category.TO_HIT,
  ephemeral: false,
};

const B: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "bonus to hit",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "Adds a bonus to hit.",
  example: "",
  category: Category.TO_HIT,
  ephemeral: true,
};

const CRITON: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "crit on",
  cmdString: "-criton",
  valueType: ValueType.NUMBER,
  desc: "The number the attack crits on if rolled on or above.",
  example: "",
  category: Category.TO_HIT,
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
  category: Category.SAVES,
  ephemeral: true,
};

const FAIL: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "target fails save",
  cmdString: "fail",
  valueType: ValueType.TRUE,
  desc: "Target automatically fails the saving throw.",
  example: "",
  category: Category.SAVES,
  ephemeral: true,
};

const SADV: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "target has advantage",
  cmdString: "sadv",
  valueType: ValueType.TRUE,
  desc: "Gives the target advantage on the saving throw.",
  example: "",
  category: Category.SAVES,
  ephemeral: false,
};

const SDIS: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "target has disadvantage",
  cmdString: "sdis",
  valueType: ValueType.TRUE,
  desc: "Gives the target disadvantage on the saving throw.",
  example: "",
  category: Category.SAVES,
  ephemeral: false,
};

const DC: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "set save dc",
  cmdString: "-dc",
  valueType: ValueType.NUMBER,
  desc: "Overrides the DC of the save. Prefix the number with '+' or '-' to increment or decrement dc instead.",
  example: "",
  category: Category.SAVES,
  ephemeral: false,
};

const SAVE: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "set save type",
  cmdString: "-save",
  valueType: ValueType.STRING,
  desc: "Overrides the spell save type (e.g. -save str).",
  example: "",
  category: Category.SAVES,
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
  category: Category.DAMAGE,
  ephemeral: true,
};

const NOCRIT: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "no crit damage",
  cmdString: "nocrit",
  valueType: ValueType.TRUE,
  desc: "Does not double the dice on a crit.",
  example: "",
  category: Category.DAMAGE,
  ephemeral: true,
};

const D: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "add damage",
  cmdString: "-d",
  valueType: ValueType.NUMBER,
  desc: "Adds additional damage",
  example: "",
  category: Category.DAMAGE,
  ephemeral: true,
};

const C: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "add crit damage",
  cmdString: "-c",
  valueType: ValueType.NUMBER,
  desc: "Adds additional damage for when the attack crits, not doubled.",
  example: "",
  category: Category.DAMAGE,
  ephemeral: true,
};

const MI: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "minimum damage roll",
  cmdString: "-mi",
  valueType: ValueType.NUMBER,
  desc: "Minimum value of each die on the damage roll.",
  example: "",
  category: Category.DAMAGE,
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
  category: Category.DAMAGE_TYPES,
  ephemeral: true,
};

const DTYPE: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "set damage type",
  cmdString: "-dtype",
  valueType: ValueType.STRING,
  desc: "Changes all damage types to a new damage type. Separate two types with '>' to only modify one damage type (e.g. -dtype fire>cold)",
  example: "",
  category: Category.DAMAGE_TYPES,
  ephemeral: true,
};

const RESIST: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "resist damage type",
  cmdString: "-resist",
  valueType: ValueType.STRING,
  desc: "Gives the target resistance to the given damage type.",
  example: "",
  category: Category.DAMAGE_TYPES,
  ephemeral: true,
};

const IMMUNE: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "immune to damage type",
  cmdString: "-immune",
  valueType: ValueType.STRING,
  desc: "Gives the target immunity to the given damage type.",
  example: "",
  category: Category.DAMAGE_TYPES,
  ephemeral: true,
};

const VULN: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "vulnerable to damage type",
  cmdString: "-vuln",
  valueType: ValueType.STRING,
  desc: "Gives the target vulnerability to the given damage type.",
  example: "",
  category: Category.DAMAGE_TYPES,
  ephemeral: true,
};

const NEUTRAL: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "neutral to damage type",
  cmdString: "-neutral",
  valueType: ValueType.STRING,
  desc: "Removes the target's immunity, resistance, or vulnerability to the given damage type.",
  example: "",
  category: Category.DAMAGE_TYPES,
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
  category: Category.EFFECTS,
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
  category: Category.COUNTERS,
  ephemeral: false,
};

const L: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "spell level",
  cmdString: "-l",
  valueType: ValueType.NUMBER,
  desc: "Specifies the level of the spell slot to use.",
  example: "",
  category: Category.COUNTERS,
  ephemeral: false,
};

const I: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "no resources used",
  cmdString: "-i",
  valueType: ValueType.TRUE,
  desc: "Skips using any resources.",
  example: "",
  category: Category.COUNTERS,
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
  category: Category.OTHER,
  ephemeral: false,
};

const PHRASE: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "flavor text",
  cmdString: "-phrase",
  valueType: ValueType.STRING,
  desc: "Adds flavor text.",
  example: "",
  category: Category.OTHER,
  ephemeral: false,
};

const TITLE: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "title",
  cmdString: "-title",
  valueType: ValueType.STRING,
  desc: "Changes the title of the attack. Replaces [name] with attacker's name and [aname] with the attack's name.",
  example: "",
  category: Category.OTHER,
  ephemeral: false,
};

const F: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "create field",
  cmdString: "-f",
  valueType: ValueType.STRING,
  desc: `Creates a field in the embed with the given title and text. Syntax: "Field Title|Field Text"`,
  example: "",
  category: Category.OTHER,
  ephemeral: false,
};

const THUMB: AttackArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "add thumbnail",
  cmdString: "-thumb",
  valueType: ValueType.STRING,
  desc: "Pass in an image url to add a thumbnail to the attack",
  example: "",
  category: Category.OTHER,
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
  category: Category.TARGETING,
  ephemeral: false,
};

/** Shared between attack command and target argument */
const COMMON_SECONDARY_ARGS = [
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
  category: Category.TARGETING,
  secondaryArgs: COMMON_SECONDARY_ARGS,
  ephemeral: false,
};
//#endregion
//#endregion

//#region primary arguments
const NAME: PrimaryArgument = {
  name: "attack name",
  signature: "atk_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the attack to be executed",
};
//#endregion

//#region subcommands
//#region add
//#region add secondary arguments
const ADD_D: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "damage",
  cmdString: "-d",
  valueType: ValueType.NUMBER,
  desc: "How much damage the attack should do.",
  example: "",
  ephemeral: false,
};

const ADD_B: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "bonus to-hit",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "The to-hit bonus of the attack.",
  example: "",
  ephemeral: false,
};

const ADD_DESC: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "description",
  cmdString: "-desc",
  valueType: ValueType.STRING,
  desc: "A description of the attack.",
  example: "",
  ephemeral: false,
};

const ADD_VERB: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "verb",
  cmdString: "-verb",
  valueType: ValueType.STRING,
  desc: `The verb to use for this attack. (e.g. "Padellis <verb> a dagger!")`,
  example: "",
  ephemeral: false,
};

const ADD_PROPER: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "proper noun",
  cmdString: "-proper",
  valueType: ValueType.TRUE,
  desc: "This attack's name is a proper noun.",
  example: "",
  ephemeral: false,
};

const ADD_CRITON: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "crit on",
  cmdString: "-criton",
  valueType: ValueType.NUMBER,
  desc: "This attack crits on a number other than a natural 20.",
  example: "",
  ephemeral: false,
};

const ADD_PHRASE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "flavor text",
  cmdString: "-phrase",
  valueType: ValueType.STRING,
  desc: "Some flavor text to add to each attack with this attack.",
  example: "",
  ephemeral: false,
};

const ADD_THUMB: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "image url",
  cmdString: "-thumb",
  valueType: ValueType.STRING,
  desc: "The url of an image to embed with the attack.",
  example: "",
  ephemeral: false,
};

const ADD_C: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "extra crit damage",
  cmdString: "-c",
  valueType: ValueType.NUMBER,
  desc: "How much extra damage (beyond doubling dice) this attack does on a crit.",
  example: "",
  ephemeral: false,
};
//#endregion

const ADD_NAME: PrimaryArgument = {
  name: "attack name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the new attack",
};

const ADD: Subcommand = {
  name: "Add Attack",
  cmdStrings: ["add", "create"],
  shortDesc: "Adds an attack to the active character",
  longDesc: "",
  primaryArgs: [ADD_NAME],
  secondaryArgs: [
    ADD_D,
    ADD_B,
    ADD_DESC,
    ADD_VERB,
    ADD_PROPER,
    ADD_CRITON,
    ADD_PHRASE,
    ADD_THUMB,
    ADD_C,
  ],
  subcommands: [],
  examples: [],
};
//#endregion
//#region delete
const DELETE_NAME: PrimaryArgument = {
  name: "attack name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the attack to be deleted",
};

const DELETE: Subcommand = {
  name: "Delete Attack",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Deletes an attack override",
  longDesc: "",
  primaryArgs: [DELETE_NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion
//#region import
const IMPORT_DATA: PrimaryArgument = {
  name: "data",
  signature: "data",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "A JSON string representing an attack",
};

const IMPORT: Subcommand = {
  name: "Import Attack",
  cmdStrings: ["import"],
  shortDesc: "Imports an attack from JSON exported from the Avrae Dashboard.",
  longDesc: "",
  primaryArgs: [IMPORT_DATA],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion
//#region list
const LIST: Subcommand = {
  name: "List Attacks",
  cmdStrings: ["list"],
  shortDesc: "Lists the active character's attacks.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion
//#endregion

//#region command
export const ATTACK: Command = {
  name: "Attack",
  cmdStrings: ["a", "attack"],
  shortDesc: "Rolls an attack for the current active character.",
  longDesc: "",
  primaryArgs: [NAME],
  secondaryArgs: COMMON_SECONDARY_ARGS.concat([T]),
  subcommands: [ADD, DELETE, IMPORT, LIST],
  examples: [],
};
//#endregion
