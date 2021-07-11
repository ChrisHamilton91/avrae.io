import { sortByName } from "src/app/commands-ui/@globals";
import { CommandModule } from "../../schemas/Commands";
import { BESTIARY } from "./Bestiary";
import { PACK } from "./Pack";
import { TOME } from "./Tome";

export const HOMEBREW: CommandModule = {
  name: "Homebrew",
  shortDesc: "Commands to manage homebrew in Avrae.",
  longDesc: "",
  commands: [BESTIARY, PACK, TOME].sort(sortByName),
};
