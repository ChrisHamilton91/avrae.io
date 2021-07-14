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
import { ATTACK_ARGS } from "../@common/attack-arguments";

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
  category: null,
};

const ADD_B: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "bonus to-hit",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "The to-hit bonus of the attack.",
  example: "",
  ephemeral: false,
  category: null,
};

const ADD_DESC: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "description",
  cmdString: "-desc",
  valueType: ValueType.STRING,
  desc: "A description of the attack.",
  example: "",
  ephemeral: false,
  category: null,
};

const ADD_VERB: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "verb",
  cmdString: "-verb",
  valueType: ValueType.STRING,
  desc: `The verb to use for this attack. (e.g. "Padellis <verb> a dagger!")`,
  example: "",
  ephemeral: false,
  category: null,
};

const ADD_PROPER: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "proper noun",
  cmdString: "-proper",
  valueType: ValueType.TRUE,
  desc: "This attack's name is a proper noun.",
  example: "",
  ephemeral: false,
  category: null,
};

const ADD_CRITON: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "crit on",
  cmdString: "-criton",
  valueType: ValueType.NUMBER,
  desc: "This attack crits on a number other than a natural 20.",
  example: "",
  ephemeral: false,
  category: null,
};

const ADD_PHRASE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "flavor text",
  cmdString: "-phrase",
  valueType: ValueType.STRING,
  desc: "Some flavor text to add to each attack with this attack.",
  example: "",
  ephemeral: false,
  category: null,
};

const ADD_THUMB: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "image url",
  cmdString: "-thumb",
  valueType: ValueType.STRING,
  desc: "The url of an image to embed with the attack.",
  example: "",
  ephemeral: false,
  category: null,
};

const ADD_C: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "extra crit damage",
  cmdString: "-c",
  valueType: ValueType.NUMBER,
  desc: "How much extra damage (beyond doubling dice) this attack does on a crit.",
  example: "",
  ephemeral: false,
  category: null,
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
  ].sort(sortByName),
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
  secondaryArgs: ATTACK_ARGS,
  subcommands: [ADD, DELETE, IMPORT, LIST].sort(sortByName),
  examples: [],
};
//#endregion
