import { Command, Subcommand } from "../../schemas/Commands";
import { SAVE_ARGS } from "../@common/save-arguments";

//#region subcommands
const FAIL = new Subcommand({
  name: "Fail Deathsave",
  cmdStrings: ["fail", "f"],
  shortDesc: "Adds a failed death save.",
});

const RESET = new Subcommand({
  name: "Reset Deathsaves",
  cmdStrings: ["reset"],
  shortDesc: "Resets all death saves.",
});

const SUCCESS = new Subcommand({
  name: "Succeed Deathsave",
  cmdStrings: ["success", "s", "save"],
  shortDesc: "Adds a successful death save.",
});
//#endregion

//#region command
export const GAME_DEATHSAVE = new Command({
  name: "Deathsave",
  cmdStrings: ["g deathsave", "game deathsave", "g ds", "game ds"],
  shortDesc: "Make a deathsave.",
  secondaryArgs: SAVE_ARGS,
  subcommands: [FAIL, RESET, SUCCESS],
});
//#endregion
