import { SecondaryArgument, ValueType } from "../command-schema";

//#region arguments
const ADV = new SecondaryArgument({
  name: "advantage",
  cmdString: "adv",
  valueType: ValueType.TRUE,
  desc: "Give advantage to the save roll(s)",
  ephemeral: true,
});

const DIS = new SecondaryArgument({
  name: "disadvantage",
  cmdString: "dis",
  valueType: ValueType.TRUE,
  desc: "Give disadvantage to the save roll(s)",
  ephemeral: true,
});

const B = new SecondaryArgument({
  name: "bonus to hit",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "Adds a bonus to the roll.",
  ephemeral: true,
});

const DC = new SecondaryArgument({
  name: "set check dc",
  cmdString: "-dc",
  valueType: ValueType.NUMBER,
  desc: "Sets a DC (difficulty class) and counts successes/failures.",
});

const RR = new SecondaryArgument({
  name: "re-roll",
  cmdString: "-rr",
  valueType: ValueType.NUMBER,
  desc: "How many saves to roll.",
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
  desc: "Changes the title of the save. Replaces [name] with character's name and [sname] with the save's name.",
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
  desc: "Pass in an image url to add a thumbnail to the save.",
});

const H = new SecondaryArgument({
  name: "hide name",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides the name and image of the character performing the save.",
});
//#endregion

//#region export
export const SAVE_ARGS: SecondaryArgument[] = [
  ADV,
  DIS,
  B,
  DC,
  RR,
  PHRASE,
  TITLE,
  F,
  THUMB,
  H,
];
//#endregion
