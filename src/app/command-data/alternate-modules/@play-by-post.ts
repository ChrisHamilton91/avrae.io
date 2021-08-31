import { CommandModule } from "../command-schema";
import { BR } from "../original-modules/pbp-utils/br";
import { ECHO } from "../original-modules/pbp-utils/echo";
import { EMBED } from "../original-modules/pbp-utils/embed";
import { TECHO } from "../original-modules/pbp-utils/techo";

export const PLAY_BY_POST = new CommandModule({
  name: "Play By Post",
  shortDesc: "Commands to help streamline playing-by-post over Discord.",
  commands: [BR, ECHO, EMBED, TECHO],
});
