import { sortByName } from "src/app/command-data/@common/@common-functions";
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

//#region secondary arguments
const ADV: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "advantage",
  cmdString: "adv",
  valueType: ValueType.TRUE,
  desc: "Give advantage to the initiative roll.",
  example: "",
  ephemeral: false,
  category: null,
};

const DIS: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "disadvantage",
  cmdString: "dis",
  valueType: ValueType.TRUE,
  desc: "Give disadvantage to the initiative roll.",
  example: "",
  ephemeral: false,
  category: null,
};

const B: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "bonus",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "Adds a bonus to the combatants' Initiative roll.",
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

const THUMB: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "thumbnail",
  cmdString: "-thumb",
  valueType: ValueType.STRING,
  desc: "Pass in a url to add a thumbnail to the initiative roll.",
  example: "",
  ephemeral: false,
  category: null,
};

const P: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "place at",
  cmdString: "-p",
  valueType: ValueType.NUMBER,
  desc: "Places combatant at the given value, instead of rolling.",
  example: "",
  ephemeral: false,
  category: null,
};

const H: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "hide roll",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides HP, AC, Resists, etc.",
  example: "",
  ephemeral: false,
  category: null,
};

const GROUP: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "add to group",
  cmdString: "-group",
  valueType: ValueType.STRING,
  desc: "Adds the combatant to a group.",
  example: "",
  ephemeral: false,
  category: null,
};

const NOTE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "add note",
  cmdString: "-note",
  valueType: ValueType.STRING,
  desc: "Sets the combatant's note.",
  example: "",
  ephemeral: false,
  category: null,
};
//#endregion

//#region command
export const JOIN: Command = {
  name: "Join Combat",
  cmdStrings: [
    "init join",
    "init cadd",
    "init dcadd",
    "i join",
    "i cadd",
    "i dcadd",
  ],
  shortDesc:
    "Adds the current active character to combat. A character must be loaded through the SheetManager module first.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [ADV, DIS, B, PHRASE, THUMB, P, H, GROUP, NOTE].sort(
    sortByName
  ),
  subcommands: [],
  examples: [],
};
//#endregion
