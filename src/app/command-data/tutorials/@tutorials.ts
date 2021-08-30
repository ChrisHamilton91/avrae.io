import { CommandModule } from "../command-schema";
import { HELP } from "./help";
import { TUTORIAL } from "./tutorial";

export const TUTORIALS = new CommandModule({
  name: "Tutorials",
  shortDesc: "Commands to help learn how to use the bot.",
  commands: [HELP, TUTORIAL],
});
