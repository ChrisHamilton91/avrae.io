import { SecondaryArgument, ValueType } from "../../command-schema";

//#region arguments
const ADV = new SecondaryArgument({
  name: "advantage",
  cmdString: "adv",
  valueType: ValueType.TRUE,
  desc: "Give advantage to the check roll(s)",
  ephemeral: true,
});

const DIS = new SecondaryArgument({
  name: "disadvantage",
  cmdString: "dis",
  valueType: ValueType.TRUE,
  desc: "Give disadvantage to the check roll(s)",
  ephemeral: true,
});

const B = new SecondaryArgument({
  name: "bonus to hit",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "Adds a bonus to the check.",
  ephemeral: true,
});

const DC = new SecondaryArgument({
  name: "set check dc",
  cmdString: "-dc",
  valueType: ValueType.NUMBER,
  desc: "Sets a DC (difficulty class) and counts successes/failures.",
});

const MC = new SecondaryArgument({
  name: "minimum roll",
  cmdString: "-mc",
  valueType: ValueType.NUMBER,
  desc: "Sets the minimum roll on the dice (e.g. Reliable Talent, Glibness)",
});

const RR = new SecondaryArgument({
  name: "re-roll",
  cmdString: "-rr",
  valueType: ValueType.NUMBER,
  desc: "How many checks to roll.",
});

const STR = new SecondaryArgument({
  name: "base: strength",
  cmdString: "str",
  valueType: ValueType.TRUE,
  desc: "Rolls using a strength base instead of the regular skill base for the check.",
});

const DEX = new SecondaryArgument({
  name: "base: dexterity",
  cmdString: "dex",
  valueType: ValueType.TRUE,
  desc: "Rolls using a dexterity base instead of the regular skill base for the check.",
});

const CON = new SecondaryArgument({
  name: "base: constitution",
  cmdString: "con",
  valueType: ValueType.TRUE,
  desc: "Rolls using a constitution base instead of the regular skill base for the check.",
});

const INT = new SecondaryArgument({
  name: "base: intelligence",
  cmdString: "int",
  valueType: ValueType.TRUE,
  desc: "Rolls using a intelligence base instead of the regular skill base for the check.",
});

const WIS = new SecondaryArgument({
  name: "base: wisdom",
  cmdString: "wis",
  valueType: ValueType.TRUE,
  desc: "Rolls using a wisdom base instead of the regular skill base for the check.",
});

const CHA = new SecondaryArgument({
  name: "base: charisma",
  cmdString: "cha",
  valueType: ValueType.TRUE,
  desc: "Rolls using a charisma base instead of the regular skill base for the check.",
});

const PHRASE = new SecondaryArgument({
  name: "flavor text",
  cmdString: "-phrase",
  valueType: ValueType.STRING,
  desc: "Adds flavor text.",
});

const TITLE = new SecondaryArgument({
  name: "title",
  cmdString: "-title",
  valueType: ValueType.STRING,
  desc: "Changes the title of the attack. Replaces [name] with attacker's name and [cname] with the check's name.",
});

const F = new SecondaryArgument({
  name: "create field",
  cmdString: "-f",
  valueType: ValueType.STRING,
  desc: `Creates a field in the embed with the given title and text. Syntax: "Field Title|Field Text."`,
});

const THUMB = new SecondaryArgument({
  name: "add thumbnail",
  cmdString: "-thumb",
  valueType: ValueType.STRING,
  desc: "Pass in an image url to add a thumbnail to the check.",
});

const H = new SecondaryArgument({
  name: "hide name",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides the name and image of the character performing the check.",
});
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
