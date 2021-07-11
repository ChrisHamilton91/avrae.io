import { sortByName } from "src/app/commands-ui/@globals";
import { CommandModule } from "../../schemas/Commands";
import { HELP } from "./Help";
import { TUTORIAL } from "./Tutorial";

export const TUTORIALS: CommandModule = {
  name: "Tutorials",
  shortDesc: "Commands to help learn how to use the bot.",
  longDesc: "",
  commands: [HELP, TUTORIAL].sort(sortByName),
};
