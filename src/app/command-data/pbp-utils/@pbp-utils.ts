import { sortByName } from "src/app/command-data/@common/@common-functions";
import { CommandModule } from "../../schemas/Commands";
import { BR } from "./br";
import { ECHO } from "./echo";
import { EMBED } from "./embed";
import { TECHO } from "./techo";

export const PBP_UTILS: CommandModule = {
  name: "PBPUtils",
  shortDesc: "Commands to help streamline playing-by-post over Discord.",
  longDesc: "",
  commands: [BR, ECHO, EMBED, TECHO].sort(sortByName),
};
