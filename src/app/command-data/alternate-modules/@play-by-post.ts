import { CommandModule } from "../command-schema";
import { BR } from "../pbp-utils/br";
import { ECHO } from "../pbp-utils/echo";
import { EMBED } from "../pbp-utils/embed";
import { TECHO } from "../pbp-utils/techo";

export const PLAY_BY_POST = new CommandModule({
  name: "Play By Post",
  shortDesc: "Commands to help streamline playing-by-post over Discord.",
  commands: [BR, ECHO, EMBED, TECHO],
});
