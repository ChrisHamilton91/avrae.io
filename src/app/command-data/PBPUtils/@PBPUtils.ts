import { sortByName } from "src/app/commands-ui/@commonFunctions";
import { CommandModule } from "../../schemas/Commands";
import { BR } from "./BR";
import { ECHO } from "./Echo";
import { EMBED } from "./Embed";
import { TECHO } from "./Techo";

export const PBP_UTILS: CommandModule = {
  name: "PBPUtils",
  shortDesc: "Commands to help streamline playing-by-post over Discord.",
  longDesc: "",
  commands: [BR, ECHO, EMBED, TECHO].sort(sortByName),
};
