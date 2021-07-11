import { sortByName } from "src/app/commands-ui/@globals";
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
  name: "name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the tutorial to begin.",
};
//#endregion

//#region subcommands
const END: Subcommand = {
  name: "End Tutorial",
  cmdStrings: ["end"],
  shortDesc: "Ends the current tutorial.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};

const LIST: Subcommand = {
  name: "List Tutorials",
  cmdStrings: ["list"],
  shortDesc: "Lists the available tutorials.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};

const SKIP: Subcommand = {
  name: "Skip Objective",
  cmdStrings: ["skip"],
  shortDesc:
    "Skips the current objective, and moves on to the next part of the tutorial.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region command
export const TUTORIAL: Command = {
  name: "Tutorial",
  cmdStrings: ["tutorial"],
  shortDesc:
    "Shows the current tutorial objective, lists the available tutorials if one is not active, or begins a new tutorial.",
  longDesc: "",
  primaryArgs: [NAME],
  secondaryArgs: [],
  subcommands: [END, LIST, SKIP].sort(sortByName),
  examples: [],
};
//#endregion
