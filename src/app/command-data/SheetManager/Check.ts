import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  Category,
  ValueType,
} from "../../schemas/Commands";

//#region secondary arguments
const ADV: SecondaryArgument = {
  name: "advantage",
  cmdString: "adv",
  valueType: ValueType.TRUE,
  desc: "Give advantage to the check roll(s)",
  example: "",
  ephemeral: true,
};

const DIS: SecondaryArgument = {
  name: "disadvantage",
  cmdString: "dis",
  valueType: ValueType.TRUE,
  desc: "Give disadvantage to the check roll(s)",
  example: "",
  ephemeral: true,
};

const B: SecondaryArgument = {
  name: "bonus to hit",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "Adds a bonus to the check.",
  example: "",
  ephemeral: true,
};

const DC: SecondaryArgument = {
  name: "set check dc",
  cmdString: "-dc",
  valueType: ValueType.NUMBER,
  desc: "Sets a DC (difficulty class) and counts successes/failures.",
  example: "",
  ephemeral: false,
};

const MC: SecondaryArgument = {
  name: "minimum roll",
  cmdString: "-mc",
  valueType: ValueType.NUMBER,
  desc: "Sets the minimum roll on the dice (e.g. Reliable Talent, Glibness)",
  example: "",
  ephemeral: false,
};

const RR: SecondaryArgument = {
  name: "re-roll",
  cmdString: "-rr",
  valueType: ValueType.NUMBER,
  desc: "How many checks to roll.",
  example: "",
  ephemeral: false,
};

const STR: SecondaryArgument = {
  name: "base: strength",
  cmdString: "str",
  valueType: ValueType.TRUE,
  desc: "Rolls using a strength base instead of the regular skill base for the check.",
  example: "",
  ephemeral: false,
};

const DEX: SecondaryArgument = {
  name: "base: dexterity",
  cmdString: "dex",
  valueType: ValueType.TRUE,
  desc: "Rolls using a dexterity base instead of the regular skill base for the check.",
  example: "",
  ephemeral: false,
};

const CON: SecondaryArgument = {
  name: "base: constitution",
  cmdString: "con",
  valueType: ValueType.TRUE,
  desc: "Rolls using a constitution base instead of the regular skill base for the check.",
  example: "",
  ephemeral: false,
};

const INT: SecondaryArgument = {
  name: "base: intelligence",
  cmdString: "int",
  valueType: ValueType.TRUE,
  desc: "Rolls using a intelligence base instead of the regular skill base for the check.",
  example: "",
  ephemeral: false,
};

const WIS: SecondaryArgument = {
  name: "base: wisdom",
  cmdString: "wis",
  valueType: ValueType.TRUE,
  desc: "Rolls using a wisdom base instead of the regular skill base for the check.",
  example: "",
  ephemeral: false,
};

const CHA: SecondaryArgument = {
  name: "base: charisma",
  cmdString: "cha",
  valueType: ValueType.TRUE,
  desc: "Rolls using a charisma base instead of the regular skill base for the check.",
  example: "",
  ephemeral: false,
};

const PHRASE: SecondaryArgument = {
  name: "flavor text",
  cmdString: "-phrase",
  valueType: ValueType.STRING,
  desc: "Adds flavor text.",
  example: "",
  ephemeral: false,
};

const TITLE: SecondaryArgument = {
  name: "title",
  cmdString: "-title",
  valueType: ValueType.STRING,
  desc: "Changes the title of the attack. Replaces [name] with attacker's name and [cname] with the check's name.",
  example: "",
  ephemeral: false,
};

const F: SecondaryArgument = {
  name: "create field",
  cmdString: "-f",
  valueType: ValueType.STRING,
  desc: `Creates a field in the embed with the given title and text. Syntax: "Field Title|Field Text."`,
  example: "",
  ephemeral: false,
};

const THUMB: SecondaryArgument = {
  name: "add thumbnail",
  cmdString: "-thumb",
  valueType: ValueType.STRING,
  desc: "Pass in an image url to add a thumbnail to the check.",
  example: "",
  ephemeral: false,
};

const H: SecondaryArgument = {
  name: "hide name",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides the name and image of the character performing the check.",
  example: "",
  ephemeral: false,
};
//#endregion

//#region primary arguments
const ABILITY: PrimaryArgument = {
  name: "ability",
  signature: "ability",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The ability being checked.",
};
//#endregion

//#region command
export const CHECK: Command = {
  name: "Ability Check",
  cmdStrings: ["c", "check"],
  shortDesc: "Rolls a check for your current active character.",
  longDesc: "",
  primaryArgs: [ABILITY],
  secondaryArgs: [
    ADV,
    DIS,
    B,
    DC,
    MC,
    RR,
    STR,
    DEX,
    CON,
    INT,
    WIS,
    CHA,
    PHRASE,
    TITLE,
    F,
    THUMB,
    H,
  ],
  subcommands: [],
  examples: [],
};
//#endregion
