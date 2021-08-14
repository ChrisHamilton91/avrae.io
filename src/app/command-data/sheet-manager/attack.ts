import {
  Command,
  PrimaryArgument,
  SecondaryArgument,
  Subcommand,
  ValueType,
} from "../command-schema";
import { ATTACK_ARGS } from "../@common/attack-arguments";

//#region primary arguments
const NAME = new PrimaryArgument({
  name: "attack name",
  signature: "atk_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the attack to be executed",
});
//#endregion

//#region subcommands
//#region add
//#region add secondary arguments
const ADD_D = new SecondaryArgument({
  name: "damage",
  cmdString: "-d",
  valueType: ValueType.NUMBER,
  desc: "How much damage the attack should do.",
  ephemeral: false,
});

const ADD_B = new SecondaryArgument({
  name: "bonus to-hit",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "The to-hit bonus of the attack.",
  ephemeral: false,
});

const ADD_DESC = new SecondaryArgument({
  name: "description",
  cmdString: "-desc",
  valueType: ValueType.STRING,
  desc: "A description of the attack.",
  ephemeral: false,
});

const ADD_VERB = new SecondaryArgument({
  name: "verb",
  cmdString: "-verb",
  valueType: ValueType.STRING,
  desc: `The verb to use for this attack. (e.g. "Padellis <verb> a dagger!")`,
  ephemeral: false,
});

const ADD_PROPER = new SecondaryArgument({
  name: "proper noun",
  cmdString: "-proper",
  valueType: ValueType.TRUE,
  desc: "This attack's name is a proper noun.",
  ephemeral: false,
});

const ADD_CRITON = new SecondaryArgument({
  name: "crit on",
  cmdString: "-criton",
  valueType: ValueType.NUMBER,
  desc: "This attack crits on a number other than a natural 20.",
  ephemeral: false,
});

const ADD_PHRASE = new SecondaryArgument({
  name: "flavor text",
  cmdString: "-phrase",
  valueType: ValueType.STRING,
  desc: "Some flavor text to add to each attack with this attack.",
  ephemeral: false,
});

const ADD_THUMB = new SecondaryArgument({
  name: "image url",
  cmdString: "-thumb",
  valueType: ValueType.STRING,
  desc: "The url of an image to embed with the attack.",
  ephemeral: false,
});

const ADD_C = new SecondaryArgument({
  name: "extra crit damage",
  cmdString: "-c",
  valueType: ValueType.NUMBER,
  desc: "How much extra damage (beyond doubling dice) this attack does on a crit.",
  ephemeral: false,
});
//#endregion

const ADD_NAME = new PrimaryArgument({
  name: "attack name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the new attack",
});

const ADD = new Subcommand({
  name: "Add Attack",
  cmdStrings: ["add", "create"],
  shortDesc: "Adds an attack to the active character",
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
});
//#endregion
//#region delete
const DELETE_NAME = new PrimaryArgument({
  name: "attack name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the attack to be deleted",
});

const DELETE = new Subcommand({
  name: "Delete Attack",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Deletes an attack override",
  primaryArgs: [DELETE_NAME],
});
//#endregion
//#region import
const IMPORT_DATA = new PrimaryArgument({
  name: "data",
  signature: "data",
  required: true,
  valueType: ValueType.STRING,
  desc: "A JSON string representing an attack",
});

const IMPORT = new Subcommand({
  name: "Import Attack",
  cmdStrings: ["import"],
  shortDesc: "Imports an attack from JSON exported from the Avrae Dashboard.",
  primaryArgs: [IMPORT_DATA],
});
//#endregion
//#region list
const LIST = new Subcommand({
  name: "List Attacks",
  cmdStrings: ["list"],
  shortDesc: "Lists the active character's attacks.",
});
//#endregion
//#endregion

//#region command
export const ATTACK = new Command({
  name: "Attack",
  cmdStrings: ["a", "attack"],
  shortDesc: "Rolls an attack for the current active character.",
  primaryArgs: [NAME],
  secondaryArgs: ATTACK_ARGS,
  subcommands: [ADD, DELETE, IMPORT, LIST],
});
//#endregion
