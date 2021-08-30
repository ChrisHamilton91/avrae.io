import {
  Command,
  PrimaryArgument,
  SecondaryArgument,
  Subcommand,
  ValueType,
} from "../command-schema";

//#region primary arguments
const NAME = new PrimaryArgument({
  name: "counter name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  desc: "The name of the custom counter.",
});

const SET = new PrimaryArgument({
  name: "set to",
  signature: "set",
  required: false,
  valueType: ValueType.TRUE,
  desc: "Sets the counter to the modifier's value, as opposed to adding the modifier to the current value.",
});

const MOD = new PrimaryArgument({
  name: "modifier",
  signature: "modifier",
  required: false,
  valueType: ValueType.NUMBER,
  desc: "The amount to add to or set the custom counter.",
});
//#endregion

//#region subcommands
//#region create
const CREATE_TITLE = new SecondaryArgument({
  name: "title",
  cmdString: "-title",
  valueType: ValueType.STRING,
  desc: "Sets the title when setting or viewing the counter. [name] will be replaced with the player's name.",
});

const CREATE_DESC = new SecondaryArgument({
  name: "description",
  cmdString: "-desc",
  valueType: ValueType.STRING,
  desc: "Sets the description when setting or viewing the counter.",
});

const CREATE_RESET = new SecondaryArgument({
  name: "reset on",
  cmdString: "-reset",
  valueType: ValueType.STRING,
  desc: `Counter will reset to max on a short rest or long rest, or not ever when "none". Values: 'short', 'long', or 'none'`,
});

const CREATE_MAX = new SecondaryArgument({
  name: "maximum",
  cmdString: "-max",
  valueType: ValueType.NUMBER,
  desc: "The maximum value of the counter.",
});

const CREATE_MIN = new SecondaryArgument({
  name: "minimum",
  cmdString: "-min",
  valueType: ValueType.NUMBER,
  desc: "The minimum value of the counter.",
});

const CREATE_TYPE = new SecondaryArgument({
  name: "counter type",
  cmdString: "-type",
  valueType: ValueType.STRING,
  desc: "Whether the counter displays as bubbles or the default: numbers. Values: 'bubble' or 'default'",
});

const CREATE_RESET_TO = new SecondaryArgument({
  name: "reset to",
  cmdString: "-resetto",
  valueType: ValueType.NUMBER,
  desc: "The value to reset the counter to. Default - maximum.",
});

const CREATE_RESET_BY = new SecondaryArgument({
  name: "reset by",
  cmdString: "-resetby",
  valueType: ValueType.NUMBER,
  desc: "Rather than resetting to a certain value, modify the counter by this much per reset. Supports dice.",
});

const CREATE_NAME = new PrimaryArgument({
  name: "counter name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  desc: "The name of the custom counter to create.",
});

const CREATE = new Subcommand({
  name: "Create Counter",
  cmdStrings: ["create"],
  shortDesc: "Creates a new custom counter.",
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
  ],
});
//#endregion

//#region delete
const DELETE_NAME = new PrimaryArgument({
  name: "counter name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name of the custom counter to delete.",
});

const DELETE = new Subcommand({
  name: "Delete Counter",
  cmdStrings: ["delete", "remove"],
  shortDesc: "Deletes a custom counter.",
  primaryArgs: [DELETE_NAME],
});
//#endregion

//#region reset
const RESET_H = new SecondaryArgument({
  name: "hide output",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides the character summary output.",
});

const RESET_NAME = new PrimaryArgument({
  name: "counter name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  desc: "The name of the custom counter to reset.",
});

const RESET = new Subcommand({
  name: "Reset Counter",
  cmdStrings: ["reset"],
  shortDesc:
    "Resets custom counters, hp, death saves, and spell slots. " +
    "Will reset all if name is not passed, otherwise the specific passed one.",
  primaryArgs: [RESET_NAME],
  secondaryArgs: [RESET_H],
});
//#endregion

//#region list
const LIST = new Subcommand({
  name: "List Counters",
  cmdStrings: ["summary", "list"],
  shortDesc: "Prints a summary of all custom counters.",
});
//#endregion
//#endregion

//#region command
export const CUSTOM_COUNTER = new Command({
  name: "Custom Counter",
  cmdStrings: ["customcounter", "cc"],
  shortDesc:
    "Commands to implement custom counters. " +
    "If a modifier is not supplied, prints the value and metadata of the counter name. " +
    "Otherwise, changes the counter name by modifier. Supports dice.",
  primaryArgs: [NAME, SET, MOD],
  subcommands: [CREATE, DELETE, RESET, LIST],
});
//#endregion
