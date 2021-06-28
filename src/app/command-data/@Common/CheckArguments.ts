import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategory,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";

//#region arguments
const ADV: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "advantage",
  cmdString: "adv",
  valueType: ValueType.TRUE,
  desc: "Give advantage to the check roll(s)",
  example: "",
  ephemeral: true,
};

const DIS: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "disadvantage",
  cmdString: "dis",
  valueType: ValueType.TRUE,
  desc: "Give disadvantage to the check roll(s)",
  example: "",
  ephemeral: true,
};

const B: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "bonus to hit",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "Adds a bonus to the check.",
  example: "",
  ephemeral: true,
};

const DC: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "set check dc",
  cmdString: "-dc",
  valueType: ValueType.NUMBER,
  desc: "Sets a DC (difficulty class) and counts successes/failures.",
  example: "",
  ephemeral: false,
};

const MC: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "minimum roll",
  cmdString: "-mc",
  valueType: ValueType.NUMBER,
  desc: "Sets the minimum roll on the dice (e.g. Reliable Talent, Glibness)",
  example: "",
  ephemeral: false,
};

const RR: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "re-roll",
  cmdString: "-rr",
  valueType: ValueType.NUMBER,
  desc: "How many checks to roll.",
  example: "",
  ephemeral: false,
};

const STR: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "base: strength",
  cmdString: "str",
  valueType: ValueType.TRUE,
  desc: "Rolls using a strength base instead of the regular skill base for the check.",
  example: "",
  ephemeral: false,
};

const DEX: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "base: dexterity",
  cmdString: "dex",
  valueType: ValueType.TRUE,
  desc: "Rolls using a dexterity base instead of the regular skill base for the check.",
  example: "",
  ephemeral: false,
};

const CON: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "base: constitution",
  cmdString: "con",
  valueType: ValueType.TRUE,
  desc: "Rolls using a constitution base instead of the regular skill base for the check.",
  example: "",
  ephemeral: false,
};

const INT: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "base: intelligence",
  cmdString: "int",
  valueType: ValueType.TRUE,
  desc: "Rolls using a intelligence base instead of the regular skill base for the check.",
  example: "",
  ephemeral: false,
};

const WIS: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "base: wisdom",
  cmdString: "wis",
  valueType: ValueType.TRUE,
  desc: "Rolls using a wisdom base instead of the regular skill base for the check.",
  example: "",
  ephemeral: false,
};

const CHA: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "base: charisma",
  cmdString: "cha",
  valueType: ValueType.TRUE,
  desc: "Rolls using a charisma base instead of the regular skill base for the check.",
  example: "",
  ephemeral: false,
};

const PHRASE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "flavor text",
  cmdString: "-phrase",
  valueType: ValueType.STRING,
  desc: "Adds flavor text.",
  example: "",
  ephemeral: false,
};

const TITLE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "title",
  cmdString: "-title",
  valueType: ValueType.STRING,
  desc: "Changes the title of the attack. Replaces [name] with attacker's name and [cname] with the check's name.",
  example: "",
  ephemeral: false,
};

const F: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "create field",
  cmdString: "-f",
  valueType: ValueType.STRING,
  desc: `Creates a field in the embed with the given title and text. Syntax: "Field Title|Field Text."`,
  example: "",
  ephemeral: false,
};

const THUMB: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "add thumbnail",
  cmdString: "-thumb",
  valueType: ValueType.STRING,
  desc: "Pass in an image url to add a thumbnail to the check.",
  example: "",
  ephemeral: false,
};

const H: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "hide name",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides the name and image of the character performing the check.",
  example: "",
  ephemeral: false,
};
//#endregion

//#region export
export const CHECK_ARGS: SecondaryArgument[] = [
  ADV,
  DIS,
  B,
  RR,
  STR,
  DC,
  MC,
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
];
//#endregion
