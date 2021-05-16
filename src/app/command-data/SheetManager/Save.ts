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
  desc: "Give advantage to the save roll(s)",
  example: "",
  ephemeral: true,
};

const DIS: SecondaryArgument = {
  name: "disadvantage",
  cmdString: "dis",
  valueType: ValueType.TRUE,
  desc: "Give disadvantage to the save roll(s)",
  example: "",
  ephemeral: true,
};

const B: SecondaryArgument = {
  name: "bonus to hit",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "Adds a bonus to the roll.",
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

const RR: SecondaryArgument = {
  name: "re-roll",
  cmdString: "-rr",
  valueType: ValueType.NUMBER,
  desc: "How many saves to roll. (Does not apply to Death Saves).",
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
  desc: "Changes the title of the attack. Replaces [name] with attacker's name and [sname] with the save's name.",
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
  desc: "Pass in an image url to add a thumbnail to the save.",
  example: "",
  ephemeral: false,
};

const H: SecondaryArgument = {
  name: "hide name",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides the name and image of the character performing the save.",
  example: "",
  ephemeral: false,
};
//#endregion

//#region primary arguments
const SKILL: PrimaryArgument = {
  name: "skill",
  signature: "skill",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The skill of the saving throw.",
};
//#endregion

//#region command
export const SAVE: Command = {
  name: "Saving Throw",
  cmdStrings: ["s", "save"],
  shortDesc: "Rolls a save for your current active character.",
  longDesc: "",
  primaryArgs: [SKILL],
  secondaryArgs: [ADV, DIS, B, DC, RR, PHRASE, TITLE, F, THUMB, H],
  subcommands: [],
  examples: [],
};
//#endregion
