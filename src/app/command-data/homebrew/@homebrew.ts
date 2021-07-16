import { CommandModule } from "../../schemas/Commands";
import { BESTIARY } from "./bestiary";
import { PACK } from "./pack";
import { TOME } from "./tome";

export const HOMEBREW: CommandModule = {
  name: "Homebrew",
  shortDesc: "Commands to manage homebrew in Avrae.",
  longDesc: "",
  commands: [BESTIARY, PACK, TOME],
};
