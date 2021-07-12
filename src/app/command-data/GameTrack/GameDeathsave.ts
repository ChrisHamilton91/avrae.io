import { sortByName } from "src/app/commands-ui/@commonFunctions";
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
import { SAVE_ARGS } from "../@Common/SaveArguments";

//#region subcommands
const FAIL: Subcommand = {
  name: "Fail Deathsave",
  cmdStrings: ["fail", "f"],
  shortDesc: "Adds a failed death save.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};

const RESET: Subcommand = {
  name: "Reset Deathsaves",
  cmdStrings: ["reset"],
  shortDesc: "Resets all death saves.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};

const SUCCESS: Subcommand = {
  name: "Succeed Deathsave",
  cmdStrings: ["success", "s", "save"],
  shortDesc: "Adds a successful death save.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion

//#region command
export const GAME_DEATHSAVE: Command = {
  name: "Deathsave",
  cmdStrings: ["g deathsave", "game deathsave", "g ds", "game ds"],
  shortDesc: "Make a deathsave.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: SAVE_ARGS,
  subcommands: [FAIL, RESET, SUCCESS].sort(sortByName),
  examples: [],
};
//#endregion
