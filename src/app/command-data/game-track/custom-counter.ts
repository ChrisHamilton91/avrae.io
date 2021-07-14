import { sortByName } from "src/app/commands-ui/@common-functions";
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

//#region primary arguments
const NAME: PrimaryArgument = {
  name: "counter name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the custom counter.",
};

const SET: PrimaryArgument = {
  name: "set to",
  signature: "set",
  required: false,
  valueType: ValueType.TRUE,
  default: null,
  desc: "Sets the counter to the modifier's value, as opposed to adding the modifier to the current value.",
};

const MOD: PrimaryArgument = {
  name: "modifier",
  signature: "modifier",
  required: false,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "The amount to add to or set the custom counter.",
};
//#endregion

//#region subcommands
//#region create
const CREATE_TITLE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "title",
  cmdString: "-title",
  valueType: ValueType.STRING,
  desc: "Sets the title when setting or viewing the counter. [name] will be replaced with the player's name.",
  example: "",
  ephemeral: false,
  category: null,
};

const CREATE_DESC: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "description",
  cmdString: "-desc",
  valueType: ValueType.STRING,
  desc: "Sets the description when setting or viewing the counter.",
  example: "",
  ephemeral: false,
  category: null,
};

const CREATE_RESET: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "reset on",
  cmdString: "-reset",
  valueType: ValueType.STRING,
  desc: `Counter will reset to max on a short rest or long rest, or not ever when "none". Values: 'short', 'long', or 'none'`,
  example: "",
  ephemeral: false,
  category: null,
};

const CREATE_MAX: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "maximum",
  cmdString: "-max",
  valueType: ValueType.NUMBER,
  desc: "The maximum value of the counter.",
  example: "",
  ephemeral: false,
  category: null,
};

const CREATE_MIN: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "minimum",
  cmdString: "-min",
  valueType: ValueType.NUMBER,
  desc: "The minimum value of the counter.",
  example: "",
  ephemeral: false,
  category: null,
};

const CREATE_TYPE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "counter type",
  cmdString: "-type",
  valueType: ValueType.STRING,
  desc: "Whether the counter displays as bubbles or the default: numbers. Values: 'bubble' or 'default'",
  example: "",
  ephemeral: false,
  category: null,
};

const CREATE_RESET_TO: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "reset to",
  cmdString: "-resetto",
  valueType: ValueType.NUMBER,
  desc: "The value to reset the counter to. Default - maximum.",
  example: "",
  ephemeral: false,
  category: null,
};

const CREATE_RESET_BY: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "reset by",
  cmdString: "-resetby",
  valueType: ValueType.NUMBER,
  desc: "Rather than resetting to a certain value, modify the counter by this much per reset. Supports dice.",
  example: "",
  ephemeral: false,
  category: null,
};

const CREATE_NAME: PrimaryArgument = {
  name: "counter name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the custom counter to create.",
};

const CREATE: Subcommand = {
  name: "Create Counter",
  cmdStrings: ["create"],
  shortDesc: "Creates a new custom counter.",
  longDesc: "",
  primaryArgs: [CREATE_NAME],
  secondaryArgs: [
    CREATE_TITLE,
    CREATE_DESC,
    CREATE_RESET,
    CREATE_MAX,
    CREATE_MIN,
    CREATE_TYPE,
    CREATE_RESET_TO,
    CREATE_RESET_BY,
  ].sort(sortByName),
  subcommands: [],
  examples: [],
};
//#endregion

//#region delete
const DELETE_NAME: PrimaryArgument = {
  name: "counter name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the custom counter to delete.",
};

const DELETE: Subcommand = {
  name: "Delete Counter",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Deletes a custom counter.",
  longDesc: "",
  primaryArgs: [DELETE_NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region reset
const RESET_H: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "hide output",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides the character summary output.",
  example: "",
  ephemeral: false,
  category: null,
};

const RESET_NAME: PrimaryArgument = {
  name: "counter name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the custom counter to reset.",
};

const RESET: Subcommand = {
  name: "Reset Counter",
  cmdStrings: ["reset"],
  shortDesc:
    "Resets custom counters, hp, death saves, and spell slots. " +
    "Will reset all if name is not passed, otherwise the specific passed one.",
  longDesc: "",
  primaryArgs: [RESET_NAME],
  secondaryArgs: [RESET_H],
  subcommands: [],
  examples: [],
};
//#endregion

//#region list
const LIST: Subcommand = {
  name: "List Counters",
  cmdStrings: ["summary", "list"],
  shortDesc: "Prints a summary of all custom counters.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion
//#endregion

//#region command
export const CUSTOM_COUNTER: Command = {
  name: "Custom Counter",
  cmdStrings: ["customcounter", "cc"],
  shortDesc:
    "Commands to implement custom counters. " +
    "If a modifier is not supplied, prints the value and metadata of the counter name. " +
    "Otherwise, changes the counter name by modifier. Supports dice.",
  longDesc: "",
  primaryArgs: [NAME, SET, MOD],
  secondaryArgs: [],
  subcommands: [CREATE, DELETE, RESET, LIST].sort(sortByName),
  examples: [],
};
//#endregion
