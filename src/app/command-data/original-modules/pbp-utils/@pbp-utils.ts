import { CommandModule } from "../../command-schema";
import { BR } from "./br";
import { ECHO } from "./echo";
import { EMBED } from "./embed";
import { TECHO } from "./techo";

export const PBP_UTILS = new CommandModule({
  name: "PBPUtils",
  shortDesc: "Commands to help streamline playing-by-post over Discord.",
  commands: [BR, ECHO, EMBED, TECHO],
});
