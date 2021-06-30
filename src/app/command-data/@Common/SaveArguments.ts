import { sortByName } from "src/app/commands-ui/globals";
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

//#region arguments
const ADV: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "advantage",
  cmdString: "adv",
  valueType: ValueType.TRUE,
  desc: "Give advantage to the save roll(s)",
  example: "",
  ephemeral: true,
  category: null,
};

const DIS: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "disadvantage",
  cmdString: "dis",
  valueType: ValueType.TRUE,
  desc: "Give disadvantage to the save roll(s)",
  example: "",
  ephemeral: true,
  category: null,
};

const B: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "bonus to hit",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "Adds a bonus to the roll.",
  example: "",
  ephemeral: true,
  category: null,
};

const DC: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "set check dc",
  cmdString: "-dc",
  valueType: ValueType.NUMBER,
  desc: "Sets a DC (difficulty class) and counts successes/failures.",
  example: "",
  ephemeral: false,
  category: null,
};

const RR: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "re-roll",
  cmdString: "-rr",
  valueType: ValueType.NUMBER,
  desc: "How many saves to roll.",
  example: "",
  ephemeral: false,
  category: null,
};

const PHRASE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "flavor text",
  cmdString: "-phrase",
  valueType: ValueType.STRING,
  desc: "Adds flavor text.",
  example: "",
  ephemeral: false,
  category: null,
};

const TITLE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "title",
  cmdString: "-title",
  valueType: ValueType.STRING,
  desc: "Changes the title of the attack. Replaces [name] with attacker's name and [sname] with the save's name.",
  example: "",
  ephemeral: false,
  category: null,
};

const F: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "create field",
  cmdString: "-f",
  valueType: ValueType.STRING,
  desc: `Creates a field in the embed with the given title and text. Syntax: "Field Title|Field Text."`,
  example: "",
  ephemeral: false,
  category: null,
};

const THUMB: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "add thumbnail",
  cmdString: "-thumb",
  valueType: ValueType.STRING,
  desc: "Pass in an image url to add a thumbnail to the save.",
  example: "",
  ephemeral: false,
  category: null,
};

const H: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "hide name",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides the name and image of the character performing the save.",
  example: "",
  ephemeral: false,
  category: null,
};
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
].sort(sortByName);
//#endregion
