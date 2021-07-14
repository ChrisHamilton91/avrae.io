import { sortByName } from "src/app/command-data/@common/@common-functions";
import { CommandModule } from "../../schemas/Commands";
import { HELP } from "./help";
import { TUTORIAL } from "./tutorial";

export const TUTORIALS: CommandModule = {
  name: "Tutorials",
  shortDesc: "Commands to help learn how to use the bot.",
  longDesc: "",
  commands: [HELP, TUTORIAL].sort(sortByName),
};
