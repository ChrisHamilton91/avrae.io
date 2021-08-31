import { CommandModule } from "../../command-schema";
import { BESTIARY } from "./bestiary";
import { PACK } from "./pack";
import { TOME } from "./tome";

export const HOMEBREW = new CommandModule({
  name: "Homebrew",
  shortDesc: "Commands to manage homebrew in Avrae.",
  commands: [BESTIARY, PACK, TOME],
});
